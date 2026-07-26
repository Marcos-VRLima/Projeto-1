import { PawPrint } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import { MobileNav } from "./mobile-nav";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Por que a gente" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-5" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-primary">
            PetShop Feliz Aula
          </span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <a href="#contato" className={buttonVariants()}>
            Agendar horário
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
