const STATS = [
  { value: "12 anos", label: "cuidando de pets no bairro" },
  { value: "500+", label: "tutores atendidos por mês" },
  { value: "4.9", label: "de nota média nas avaliações" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-secondary/50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-heading text-3xl font-semibold text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
