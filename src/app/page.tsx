import Link from "next/link";
import { AffiliateArrow, AffiliateLink } from "@/components/affiliate-link";
import { OfferCard } from "@/components/offer-card";
import { ScrollLink } from "@/components/scroll-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCTS } from "@/config/products";
import { SITE_URL } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SiteGround AI Tools — Reviews & Free Trials | HostAdvance",
  description:
    "Independent reviews of SiteGround's AI tools — Coderick AI, AI Studio, and the AI Website & Ecommerce Builder. Compare, then start a 14-day free trial.",
  path: "/",
  openGraphType: "website",
});

const trialPoints = [
  "14-day free trial on every partner tool",
  "No credit card required to start",
  "Cancel anytime during the trial",
] as const;

/** Hero discount hook — no percentage (varies weekly). */
const heroDiscountLine =
  "New customers get SiteGround's biggest introductory discount — applied automatically at checkout, no code needed.";

// Optional, when confirmed: show a single dated % line under heroDiscountLine.
// const heroPromoAsOf = "As of June 2026: up to __% off first term";

const reviews = [
  {
    href: "/coderick-ai-review",
    title: "Coderick AI review",
    description: "Vibe coding on SiteGround with deployment built in.",
  },
  {
    href: "/ai-studio-review",
    title: "SiteGround AI Studio review",
    description: "Multi-model workspace and 15+ business agents.",
  },
  {
    href: "/ai-ecommerce-builder-review",
    title: "AI ecommerce builder review",
    description: "Drag-and-drop sites and stores with native AI help.",
  },
  {
    href: "/coderick-ai-vs-lovable",
    title: "Coderick AI vs Lovable",
    description: "Hosting, deployment, and who each tool fits.",
  },
] as const;

const guides = [
  {
    href: "/ai-agent-wordpress-guide",
    title: "WordPress AI Agent guide",
    description: "Connect, task prompts, Power Mode, multi-site.",
  },
  {
    href: "/coderick-ai-build-a-crm",
    title: "Build a CRM with Coderick AI",
    description: "Brief → chat → live internal tool on SiteGround.",
  },
  {
    href: "/launch-online-store-with-ai",
    title: "Launch a store with AI in a day",
    description: "Ecommerce trial workflow with AI catalog help.",
  },
  {
    href: "/coderick-ai-export-code",
    title: "Export code from Coderick?",
    description: "Versioning vs download—what SiteGround documents.",
  },
  {
    href: "/ai-studio-vs-chatgpt-plus",
    title: "AI Studio vs ChatGPT Plus",
    description: "Multi-model workspace vs general chat subscription.",
  },
  {
    href: "/siteground-ai-studio-free-tokens",
    title: "20,000 free tokens explained",
    description: "Budget Essential plan usage for hosting clients.",
  },
  {
    href: "/coderick-ai-vs-bolt",
    title: "Coderick AI vs Bolt",
    description: "SiteGround managed apps vs Bolt Cloud.",
  },
  {
    href: "/coderick-ai-vs-v0",
    title: "Coderick AI vs v0",
    description: "Full app platform vs React UI generator.",
  },
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
        url: `${SITE_URL}${product.reviewPath}`,
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

      <SiteHeader />

      <main className="pt-32">
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
              Independent reviews of SiteGround&apos;s AI tools—Coderick AI, AI
              Studio, and the AI ecommerce builder—for developers, ecommerce
              founders, and WordPress operators. Start free, scale when you are
              ready.
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

            <div className="animate-fade-up-delay mt-10 flex flex-col gap-4">
              <p className="max-w-xl rounded-lg border border-emerald-900/35 bg-emerald-950/15 px-3.5 py-2.5 text-sm leading-snug text-zinc-300">
                {heroDiscountLine}
              </p>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <AffiliateLink link="primary" variant="primary" className="group w-full sm:w-auto">
                  Start free — discount auto-applied
                  <AffiliateArrow />
                </AffiliateLink>
                <ScrollLink href="#offers">View all tools</ScrollLink>
              </div>
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
          id="reviews"
          className="border-y border-white/[0.06] bg-zinc-900/30"
          aria-labelledby="reviews-heading"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <header className="mx-auto max-w-2xl text-center">
              <h2
                id="reviews-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                In-depth reviews
              </h2>
              <p className="mt-4 text-zinc-400">
                Independent write-ups grounded in SiteGround&apos;s published capabilities —
                no hype, no invented benchmarks.
              </p>
            </header>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {reviews.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-white/[0.08] bg-zinc-900/50 p-6 transition-colors hover:border-white/15 hover:bg-zinc-900/80"
                  >
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500">{item.description}</p>
                    <span className="mt-4 inline-flex text-sm font-medium text-emerald-400">
                      Read review →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24"
          aria-labelledby="guides-heading"
        >
          <header className="mx-auto max-w-2xl text-center">
            <h2
              id="guides-heading"
              className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Guides &amp; comparisons
            </h2>
            <p className="mt-4 text-zinc-400">
              Step-by-step workflows and honest tool comparisons for high-intent searches.
            </p>
          </header>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {guides.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5 transition-colors hover:border-white/15 hover:bg-zinc-900/60"
                >
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24"
          aria-labelledby="paths-heading"
        >
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

      <SiteFooter />

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
