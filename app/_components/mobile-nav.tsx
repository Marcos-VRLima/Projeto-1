"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NAV_LINKS } from "./nav-links";

const MOBILE_NAV_ID = "mobile-nav";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-controls={MOBILE_NAV_ID}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <nav
          id={MOBILE_NAV_ID}
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-6 py-4 shadow-sm"
        >
          {NAV_LINKS.map((link) => (
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
