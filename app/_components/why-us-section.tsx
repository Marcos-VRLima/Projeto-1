import { PawPrint } from "lucide-react";

const REASONS = [
  "Equipe apaixonada por animais, não só treinada",
  "Agenda flexível, incluindo finais de semana",
  "Ambiente climatizado e higienizado a cada atendimento",
  "Acompanhamento por foto e vídeo durante o banho",
];

export function WhyUsSection() {
  return (
    <section
      id="diferenciais"
      className="bg-secondary/40 py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-primary/10" />
          <div className="absolute inset-10 flex items-center justify-center rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-primary text-primary-foreground">
            <PawPrint className="size-16" />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-coral">
            Por que a Focinho Feliz
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Carinho de verdade em cada detalhe
          </h2>

          <ul className="mt-8 space-y-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <PawPrint className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                <span className="text-base leading-relaxed text-foreground/90">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
