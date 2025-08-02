import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Por favor ingresa un correo electrónico válido")
    .refine(
      (email) => {
        // Additional validation for more strict email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      {
        message:
          "Por favor ingresa un correo electrónico válido con formato correcto",
      },
    )
    .refine(
      (email) => {
        // Prevent common invalid patterns
        const invalidPatterns = [
          /^[^@]*@[^@]*@/, // Multiple @ symbols
          /\.\./, // Consecutive dots
          /^\./,
          /\.$/,
          /^@/,
          /@$/, // Starting/ending with . or @
          /@\./,
          /\.@/, // . immediately before/after @
        ];
        return !invalidPatterns.some((pattern) => pattern.test(email));
      },
      {
        message: "Formato de correo electrónico no válido",
      },
    ),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export interface EmailSubmissionResult {
  success: boolean;
  message: string;
}
