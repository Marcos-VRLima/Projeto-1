import { TestimonialCard } from "./testimonial-card";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Deixei minha Mel para um banho e voltei com uma cachorra cheirosa e muito mais calma. Ela mesma pediu pra voltar.",
    author: "Marina Alves",
    role: "tutora da Mel, golden retriever",
  },
  {
    quote:
      "O veterinário teve muita paciência com o Thor, que é super arisco. Explicou tudo com calma e sem pressa nenhuma.",
    author: "Carlos Eduardo",
    role: "tutor do Thor, pastor alemão",
  },
  {
    quote:
      "A hospedagem me deixou tranquila para viajar. Recebi foto e vídeo da minha gata todos os dias, cuidado de verdade.",
    author: "Juliana Ramos",
    role: "tutora da Nina, gata persa",
  },
];

export function TestimonialSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-brand-coral">Depoimentos</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Quem já passou por aqui conta
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
