"use server";

import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";
import { emailSchema, type EmailSubmissionResult } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

// File path for email storage
const EMAIL_FILE_PATH = path.join(
  process.cwd(),
  "src",
  "doc",
  "phase_1_mail_catcher.txt",
);

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_ATTEMPTS = 3; // Max 3 attempts per 15 minutes per IP

/**
 * Check if the request should be rate limited
 */
function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(identifier);

  if (!userLimit || now > userLimit.resetTime) {
    // Reset or create new limit
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return true;
  }

  userLimit.count++;
  return false;
}

/**
 * Read existing emails from the file
 */
async function readExistingEmails(): Promise<string[]> {
  try {
    const fileContent = await fs.readFile(EMAIL_FILE_PATH, "utf-8");
    return fileContent
      .split("\n")
      .map((email) => email.trim())
      .filter((email) => email.length > 0);
  } catch (error) {
    // If file doesn't exist or can't be read, return empty array
    console.log("Email file not found or unreadable, starting fresh");
    return [];
  }
}

/**
 * Check if email already exists in the file
 */
async function emailExists(email: string): Promise<boolean> {
  const existingEmails = await readExistingEmails();
  return existingEmails.includes(email.toLowerCase());
}

/**
 * Append email to the file with proper error handling
 */
async function appendEmailToFile(email: string): Promise<boolean> {
  try {
    // Ensure directory exists
    const dir = path.dirname(EMAIL_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });

    // Append email with timestamp
    const timestamp = new Date().toISOString();
    const emailEntry = `${email.toLowerCase()} - ${timestamp}\n`;

    await fs.appendFile(EMAIL_FILE_PATH, emailEntry, "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to email file:", error);
    return false;
  }
}

export async function addEmailToWaitlist(
  email: string,
  userIdentifier?: string,
): Promise<EmailSubmissionResult> {
  try {
    // Validate email
    const validatedData = emailSchema.parse({ email });
    const normalizedEmail = validatedData.email.toLowerCase();

    // Rate limiting (use email as identifier if no IP provided)
    const identifier = userIdentifier || normalizedEmail;
    if (isRateLimited(identifier)) {
      return {
        success: false,
        message:
          "Demasiados intentos. Por favor espera 15 minutos antes de intentar de nuevo.",
      };
    }

    // Check for duplicate emails
    const isDuplicate = await emailExists(normalizedEmail);
    if (isDuplicate) {
      return {
        success: false,
        message:
          "Este correo electrónico ya está registrado en nuestra lista de espera.",
      };
    }

    // Try to save email to file first (primary storage)
    const fileSaveSuccess = await appendEmailToFile(normalizedEmail);

    if (!fileSaveSuccess) {
      // If file save fails, still proceed but log the error
      console.error(
        "Failed to save email to file, but continuing with email notification",
      );
    }

    // Send welcome email (secondary notification)
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const { data, error } = await resend.emails.send({
          from: "SightGuardian AI <noreply@sightguardian.ai>",
          to: [validatedData.email],
          subject: "¡Estás en la lista de espera de SightGuardian AI!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2563EB; text-align: center; margin-bottom: 30px;">¡Bienvenido a SightGuardian AI!</h1>

              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h2 style="color: #1e293b; margin-top: 0;">✅ Tu email ha sido registrado exitosamente</h2>
                <p style="margin: 10px 0;">Gracias por unirte a nuestra lista de espera. Estás un paso más cerca de proteger la vista de tus hijos durante el tiempo de pantalla.</p>
              </div>

              <div style="background: #ecfdf5; padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-top: 0;">🚀 ¿Qué sigue?</h3>
                <ul style="color: #047857; margin: 10px 0; padding-left: 20px;">
                  <li>Te notificaremos cuando lancemos nuestra <strong>Beta Pública</strong></li>
                  <li>Serás uno de los <strong>primeros usuarios</strong> en acceder a la app</li>
                  <li>Tendrás acceso <strong>gratuito por tiempo limitado</strong> como early adopter</li>
                </ul>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #64748b; font-size: 14px;">Mientras tanto, síguenos en nuestras redes sociales para estar al día con las últimas novedades.</p>
              </div>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
                <p style="color: #64748b; margin: 0;">
                  <strong>El equipo de SightGuardian AI</strong><br>
                  <em>Protegiendo la vista de la próxima generación</em>
                </p>
              </div>
            </div>
          `,
        });

        if (!error) {
          emailSent = true;
        } else {
          console.error("Error sending email:", error);
        }
      } catch (emailError) {
        console.error("Error in email sending:", emailError);
      }
    }

    // Log successful registration
    console.log("Email successfully registered:", normalizedEmail, {
      fileSaved: fileSaveSuccess,
      emailSent: emailSent,
      timestamp: new Date().toISOString(),
    });

    // Return success message based on what worked
    if (fileSaveSuccess) {
      return {
        success: true,
        message: emailSent
          ? "¡Perfecto! Tu email ha sido registrado exitosamente. Te notificaremos cuando lancemos nuestra Beta Pública y serás uno de los primeros en acceder gratuitamente. ¡Revisa tu correo!"
          : "¡Excelente! Tu email ha sido registrado exitosamente en nuestra base de datos. Te notificaremos cuando lancemos nuestra Beta Pública y tendrás acceso gratuito por tiempo limitado.",
      };
    } else {
      // Fallback if file save failed but we want to still show success to user
      return {
        success: true,
        message:
          "Tu solicitud ha sido procesada. Te contactaremos pronto con más información sobre el acceso a la Beta Pública.",
      };
    }
  } catch (error) {
    console.error("Error in addEmailToWaitlist:", error);

    if (error instanceof Error && error.message.includes("email")) {
      return {
        success: false,
        message: "Por favor ingresa un correo electrónico válido.",
      };
    }

    return {
      success: false,
      message:
        "Ocurrió un error inesperado. Por favor inténtalo de nuevo en unos momentos.",
    };
  }
}
