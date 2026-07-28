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

  // Sem serviço de e-mail/CRM configurado ainda: apenas confirmamos o
  // recebimento até a integração real existir (sem logar dados pessoais).
  return { success: true };
}
