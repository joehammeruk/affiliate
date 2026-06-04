import { JsonLd } from "@/components/json-ld";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  items,
  heading = "Frequently asked questions",
}: {
  items: FaqItem[];
  heading?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-16" aria-labelledby="faq-heading">
      <JsonLd data={jsonLd} />
      <h2
        id="faq-heading"
        className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        {heading}
      </h2>
      <ul className="mt-8 divide-y divide-white/[0.06]">
        {items.map((item) => (
          <li key={item.question} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-base font-semibold text-zinc-100">{item.question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
