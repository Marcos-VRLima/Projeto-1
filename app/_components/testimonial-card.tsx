import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 text-left">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4 fill-brand-marigold text-brand-marigold"
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}
