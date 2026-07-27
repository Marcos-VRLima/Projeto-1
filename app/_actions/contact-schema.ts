import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(100, "Nome muito longo"),
  email: z.string().trim().min(1, "Informe seu e-mail").email("E-mail inválido"),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(20, "Telefone muito longo"),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o que você precisa")
    .max(1000, "Mensagem muito longa"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
