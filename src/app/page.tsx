import { AffiliateArrow, AffiliateLink } from "@/components/affiliate-link";
import { OfferCard } from "@/components/offer-card";
import { ScrollLink } from "@/components/scroll-link";
import { AFFILIATE_LINKS } from "@/config/affiliate-links";
import { PRODUCTS } from "@/config/products";

const trialPoints = [
  "14-day free trial on every partner tool",
  "No credit card required to start",
  "Cancel anytime during the trial",
] as const;

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI tools with 14-day free trials",
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
        url: AFFILIATE_LINKS[product.linkKey],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="noise pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-overlay" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/60 bg-[#09090B]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <p className="font-display text-sm font-semibold tracking-tight text-white">
            AI Infrastructure Hub
          </p>
          <AffiliateLink link="primary" variant="compact" className="hidden sm:inline-flex">
            Start free trial
            <AffiliateArrow />
          </AffiliateLink>
        </div>
      </header>

      <main className="pt-[4.25rem]">
        <section
          className="relative overflow-hidden border-b border-white/[0.06]"
          aria-labelledby="hero-heading"
        >
          <div className="mesh-hero pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pb-36 sm:pt-28">
            <p className="animate-fade-up mb-8 inline-flex items-center rounded-full border border-emerald-900/40 bg-emerald-950/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              14-Day Free Trial on Every Tool
            </p>

            <h1
              id="hero-heading"
              className="animate-fade-up-delay font-display max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-[64px]"
            >
              Build, sell, and manage—with AI that actually ships
            </h1>

            <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Hand-picked platforms for developers, ecommerce founders, and
              WordPress operators. Start free, scale when you are ready—no credit
              card games, just serious tools.
            </p>

            <ul className="animate-fade-up-delay mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              {trialPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up-delay mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <AffiliateLink link="primary" variant="primary" className="group w-full sm:w-auto">
                Start your free trial
                <AffiliateArrow />
              </AffiliateLink>
              <ScrollLink href="#offers">View all tools</ScrollLink>
            </div>
          </div>
        </section>

        <section
          id="offers"
          className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
          aria-labelledby="offers-heading"
        >
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Partner tools
            </p>
            <h2
              id="offers-heading"
              className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-[36px]"
            >
              Choose your stack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Each partner below includes a{" "}
              <strong className="font-medium text-emerald-400">14-Day Free Trial</strong>.
              Pick the workflow that matches how you work.
            </p>
          </header>

          <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-3 lg:items-stretch">
            {PRODUCTS.map((product) => (
              <li
                key={product.id}
                className={product.featured ? "md:-mt-3 md:mb-3" : undefined}
              >
                <OfferCard product={product} />
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-y border-white/[0.06] bg-zinc-900/30"
          aria-labelledby="paths-heading"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <h2
              id="paths-heading"
              className="font-display text-center text-2xl font-bold text-white sm:text-3xl"
            >
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-500">
              Tap the path that matches you—each row opens the partner trial.
            </p>

            <ul className="mx-auto mt-12 max-w-2xl divide-y divide-white/[0.06]">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <AffiliateLink link={product.linkKey} variant="row" className="group">
                    <span>
                      <span className="block font-display text-base font-semibold text-white">
                        {product.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-zinc-500">
                        {product.tagline}
                      </span>
                    </span>
                    <span
                      className={`flex shrink-0 items-center gap-2 text-sm font-semibold ${product.theme.labelColor}`}
                    >
                      Try free
                      <AffiliateArrow />
                    </span>
                  </AffiliateLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="relative overflow-hidden"
          aria-labelledby="final-cta-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(16,185,129,0.18),transparent)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
            <h2
              id="final-cta-heading"
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Ready when you are.
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              Lock in your{" "}
              <strong className="text-emerald-300">14-day free trial</strong> on
              our top pick—upgrade or switch tools anytime.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AffiliateLink link="primary" variant="primary" className="group w-full sm:w-auto">
                Get started free
                <AffiliateArrow />
              </AffiliateLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-4 border-t border-zinc-800/60 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[13px] text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} AI Infrastructure Hub. All rights reserved.</p>
          <p className="max-w-md text-center md:text-right">
            <strong className="text-zinc-400">Affiliate Disclosure:</strong> This
            site is reader-supported. We may earn a commission when you start a
            trial via our partner links—at no extra cost to you.
          </p>
        </div>
      </footer>

      <aside
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-zinc-950/90 p-4 backdrop-blur-xl sm:hidden"
        aria-label="Start free trial"
      >
        <AffiliateLink link="primary" variant="primary" className="group w-full">
          14-day free trial
          <AffiliateArrow />
        </AffiliateLink>
      </aside>

      <div className="h-20 sm:hidden" aria-hidden="true" />
    </>
  );
}
