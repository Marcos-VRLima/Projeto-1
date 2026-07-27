import { PawPrint, Star } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PawTrail } from "./paw-trail";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <PawTrail />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <PawPrint className="size-4" />
            Cuidado de verdade, todos os dias
          </p>

          <h1 className="animate-fade-up mt-6 font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-primary [animation-delay:0.1s] sm:text-5xl lg:text-6xl">
            Todo pet merece um dia de banho, tosa e mimo.
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:0.2s]">
            Cuidamos do seu companheiro como se fosse nosso: banho, tosa,
            consultas veterinárias e tudo que ele precisa para viver bem, num
            só endereço.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:0.3s] sm:flex-row">
            <a
              href="#contato"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-auto"
              )}
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center [animation-delay:0.35s]">
          <div className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-secondary" />
          <div className="absolute inset-6 rounded-[40%_60%_55%_45%/55%_40%_60%_45%] border border-primary/15" />
          <div className="relative flex flex-col items-center gap-2 text-center">
            <PawPrint className="size-10 text-primary" />
            <span className="font-heading text-4xl font-semibold text-primary">
              500+
            </span>
            <span className="max-w-[10rem] text-sm text-muted-foreground">
              tutores atendidos com carinho todo mês
            </span>
            <span className="mt-2 flex items-center gap-1 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
              <Star className="size-3.5 fill-brand-marigold text-brand-marigold" />
              4.9 de avaliação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
