import { Home, Scissors, ShoppingBag, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Scissors,
    title: "Banho & Tosa",
    description:
      "Banho, tosa e hidratação com produtos hipoalergênicos e muita paciência.",
  },
  {
    icon: Stethoscope,
    title: "Consultas veterinárias",
    description:
      "Check-ups, vacinas e orientação com veterinários parceiros, sem pressa.",
  },
  {
    icon: ShoppingBag,
    title: "Pet shop",
    description:
      "Ração, brinquedos e acessórios selecionados para cada fase da vida do seu pet.",
  },
  {
    icon: Home,
    title: "Hospedagem & creche",
    description:
      "Um ambiente seguro e cheio de estímulo enquanto você não pode estar por perto.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-brand-coral">Serviços</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Tudo que seu pet precisa, num só lugar
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border/70 bg-card p-6 transition-shadow hover:shadow-md"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
              <service.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
