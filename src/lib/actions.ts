"use server";

import { Resend } from "resend";
import { emailSchema, type EmailSubmissionResult } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addEmailToWaitlist(
  email: string
): Promise<EmailSubmissionResult> {
  try {
    // Validate email
    const validatedData = emailSchema.parse({ email });

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: "SightGuardian AI <noreply@sightguardian.ai>",
      to: [validatedData.email],
      subject: "¡Estás en la lista de espera de SightGuardian AI!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563EB; text-align: center;">¡Bienvenido a SightGuardian AI!</h1>
          <p>Gracias por unirte a nuestra lista de espera. Estás un paso más cerca de proteger la vista de tus hijos durante el tiempo de pantalla.</p>
          <p>Te notificaremos tan pronto como la aplicación esté disponible.</p>
          <p style="margin-top: 30px;">
            <strong>El equipo de SightGuardian AI</strong>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Error al enviar el correo de confirmación. Inténtalo de nuevo.",
      };
    }

    // Here you would typically save to a database
    // For now, we'll just log it
    console.log("Email added to waitlist:", validatedData.email);

    return {
      success: true,
      message: "¡Gracias! Estás en la lista. Revisa tu correo.",
    };
  } catch (error) {
    console.error("Error in addEmailToWaitlist:", error);
    
    if (error instanceof Error) {
      return {
        success: false,
        message: "Error de validación. Por favor verifica tu correo electrónico.",
      };
    }

    return {
      success: false,
      message: "Ocurrió un error inesperado. Inténtalo de nuevo.",
    };
  }
}
