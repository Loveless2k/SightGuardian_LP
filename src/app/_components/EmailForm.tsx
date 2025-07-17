"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { emailSchema, type EmailFormData } from "@/lib/types";
import { addEmailToWaitlist } from "@/lib/actions";

export function EmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);

    try {
      const result = await addEmailToWaitlist(data.email);

      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Ocurrió un error inesperado. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
        <div className="flex-1">
          <Input
            {...register("email")}
            type="email"
            placeholder="Tu mejor correo electrónico"
            error={!!errors.email}
            errorMessage={errors.email?.message}
            disabled={isSubmitting}
            className="w-full border-0 bg-transparent text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-brand-blue/50"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap px-8 py-3 text-lg font-bold bg-gradient-to-r from-brand-blue to-blue-600 hover:from-brand-blue-dark hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            "Activa la protección visual"
          )}
        </Button>
      </div>
    </form>
  );
}
