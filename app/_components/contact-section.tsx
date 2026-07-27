import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { ContactForm } from "./contact-form";

type ContactInfo = {
  icon: LucideIcon;
  label: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: MapPin,
    label: "Rua das Flores, 123 — Jardim Primavera, São Paulo/SP",
  },
  {
    icon: Phone,
    label: "(11) 99999-9999",
  },
  {
    icon: Mail,
    label: "contato@petshopfelizaula.com.br",
  },
  {
    icon: Clock,
    label: "Ter–Sex: 9h–19h · Sáb–Dom: 9h–15h",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-brand-coral">Contato</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Fale com a nossa equipe
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Tire dúvidas, peça um orçamento ou conte pra gente o que o seu pet
          precisa. A gente responde rapidinho.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <ul className="space-y-4">
          {CONTACT_INFO.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <Icon className="mt-0.5 size-5 shrink-0 text-brand-coral" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
