import { Clock, MapPin, PawPrint, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="size-4" />
            </span>
            <span className="font-heading text-base font-semibold text-primary">
              PetShop Feliz Aula
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Banho, tosa, consultas e pet shop — cuidado de verdade para o seu
            companheiro.
          </p>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-coral" />
            Rua das Flores, 123 — Jardim Primavera, São Paulo/SP
          </p>
          <p className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-brand-coral" />
            Ter–Sex: 9h–19h · Sáb–Dom: 9h–15h
          </p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 size-4 shrink-0 text-brand-coral" />
            (11) 99999-9999
          </p>
        </div>

        <div className="text-sm text-muted-foreground sm:text-right">
          <p>© {new Date().getFullYear()} PetShop Feliz Aula.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
