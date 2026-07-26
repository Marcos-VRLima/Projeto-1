import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
      <div className="flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-5 fill-brand-marigold text-brand-marigold"
          />
        ))}
      </div>

      <blockquote className="mt-6 font-heading text-2xl leading-snug font-medium text-balance text-primary sm:text-3xl">
        &ldquo;Deixei minha Mel para um banho e voltei com uma cachorra
        cheirosa e muito mais calma. Ela mesma pediu pra voltar.&rdquo;
      </blockquote>

      <p className="mt-5 text-sm text-muted-foreground">
        Marina Alves — tutora da Mel, golden retriever
      </p>
    </section>
  );
}
