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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            {...register("email")}
            type="email"
            placeholder="Tu mejor correo electrónico"
            error={!!errors.email}
            errorMessage={errors.email?.message}
            disabled={isSubmitting}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? "Enviando..." : "Activa la protección visual"}
        </Button>
      </div>
    </form>
  );
}
