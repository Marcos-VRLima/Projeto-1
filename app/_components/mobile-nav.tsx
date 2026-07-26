"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Por que a gente" },
  { href: "#contato", label: "Contato" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-6 py-4 shadow-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className={cn(buttonVariants(), "mt-2 w-full")}
          >
            Agendar horário
          </a>
        </nav>
      )}
    </div>
  );
}
