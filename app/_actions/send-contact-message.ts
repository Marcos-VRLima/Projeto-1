"use server";

import {
  contactFormSchema,
  type ContactFormInput,
} from "./contact-schema";

export type SendContactMessageResult =
  | { success: true }
  | {
      success: false;
      message?: string;
      errors?: Partial<Record<keyof ContactFormInput, string[]>>;
    };

export async function sendContactMessage(
  input: ContactFormInput
): Promise<SendContactMessageResult> {
  const validation = contactFormSchema.safeParse(input);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // Sem serviço de e-mail/CRM configurado ainda: registramos a mensagem
  // para não perder o lead enquanto a integração real não existe.
  console.log(
    "[contato] nova mensagem recebida:",
    JSON.stringify(validation.data)
  );

  return { success: true };
}
