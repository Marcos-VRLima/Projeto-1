import { PawPrint } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { MobileNav } from "./mobile-nav";
import { NAV_LINKS } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-5" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-primary">
            PetShop Seu Pet Feliz
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
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
