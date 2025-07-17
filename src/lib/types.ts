import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Por favor ingresa un correo electrónico válido"),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export interface EmailSubmissionResult {
  success: boolean;
  message: string;
}
