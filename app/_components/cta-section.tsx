import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Bora marcar um horário pro seu pet?
        </h2>
        <p className="max-w-xl text-primary-foreground/80">
          Atendimento de terça a domingo. Fica fácil chegar até a gente — e
          mais fácil ainda sair de lá com o rabinho abanando.
        </p>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          )}
        >
          <MessageCircle />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
