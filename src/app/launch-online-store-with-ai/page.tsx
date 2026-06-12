import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Launch an Online Store with AI in a Day",
  description:
    "Practical sequence for SiteGround ecommerce: template, AI product copy, catalog, checkout test, and publish—using only verified builder capabilities.",
  path: "/launch-online-store-with-ai",
});

// source: https://www.siteground.com/ecommerce
// source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/
const faqs = [
  {
    question: "Can I really launch in one day?",
    answer:
      "SiteGround's ecommerce page describes going from zero to selling in hours for simple catalogs. Complex shipping rules, many SKUs, or custom integrations will take longer—use the day for a credible v1, not perfection.",
  },
  {
    question: "Does AI write product descriptions for me?",
    answer:
      "SiteGround states you can generate product titles, descriptions, categorization, and images with AI on ecommerce plans. Review every listing before publish.",
  },
  {
    question: "Do I need WordPress?",
    answer:
      "SiteGround ecommerce is its own integrated builder platform—this guide does not use the WordPress plugin stack.",
  },
  {
    question: "When can I take payments live?",
    answer:
      "After you connect payment settings SiteGround provides in the store manager and run a test checkout during your trial or on a paid plan—follow their in-app checklist.",
  },
];

export default function LaunchOnlineStoreWithAiPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Launch a store with AI", path: "/launch-online-store-with-ai" }}
      dates={{ published: "2026-06-04" }}
      ctaLink="aiEcommerceBuilder"
      ctaHeading="Start your ecommerce trial"
      ctaButtonLabel="Open SiteGround ecommerce"
      relatedLinks={[
        { href: "/ai-ecommerce-builder-review", label: "AI ecommerce builder review" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
        How-to guide
      </p>
      <h1>Launch an online store with AI in a day</h1>
      <p className="lead">
        <strong className="text-zinc-200">Yes—you can launch a simple SiteGround ecommerce store in
        one day</strong> if you keep the catalog small: trial signup, AI-assisted product copy,
        drag-and-drop layout, then a test checkout before you announce the URL. This hour-by-hour
        sequence walks that path—see our{" "}
        <Link href="/ai-ecommerce-builder-review" className="inline">
          full ecommerce builder review
        </Link>{" "}
        for trade-offs. You get AI for catalog content, drag-and-drop for layout, and checkout when
        you are ready to sell. Adjust timing to your catalog size; ten SKUs is not five hundred.
      </p>

      <TrialCTA link="aiEcommerceBuilder" className="mt-10" buttonLabel="Start 14-day trial" />

      <h2>Hour 0–1 — Account, template, brand basics</h2>
      <ol>
        {/* source: https://www.siteground.com/ecommerce */}
        <li>
          Start SiteGround&apos;s ecommerce trial from their product page (check the current trial
          terms on siteground.com/ecommerce).
        </li>
        <li>Pick a store-oriented template close to your category (physical goods, services, downloads).</li>
        <li>Set store name, logo, colours, and core pages: Home, Shop, About, Contact, Policies stub.</li>
      </ol>

      <h2>Hour 1–3 — Catalog skeleton with AI copy</h2>
      {/* source: https://www.siteground.com/ecommerce */}
      <p>
        Add your first products manually, but let AI draft the heavy text. For each SKU, prompt
        or use built-in AI helpers for:
      </p>
      <ul>
        <li>Product title and short description</li>
        <li>Category placement (SiteGround mentions AI categorization)</li>
        <li>Hero or product images if the AI image tool fits your brand</li>
      </ul>
      <p>
        Human-edit every description for accuracy—weights, materials, allergens, delivery times.
        AI accelerates drafting; you own compliance.
      </p>

      <h2>Hour 3–4 — Layout polish in the visual editor</h2>
      {/* source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/ */}
      <p>
        Switch to drag-and-drop refinement: collection grids, trust badges, shipping/returns
        snippets, mobile spacing. SiteGround describes mobile-responsive templates—scroll on a
        phone, not only desktop.
      </p>

      <h2>Hour 4–5 — Payments, tax, shipping</h2>
      {/* source: https://www.siteground.com/ecommerce */}
      <p>
        Configure payments, tax, and shipping in the store manager as SiteGround documents on its
        ecommerce product page. Run a <strong>test order</strong> end-to-end. Do not announce the
        store publicly until checkout succeeds twice (buy and refund if needed).
      </p>

      <h2>Hour 5–6 — SEO and launch checklist</h2>
      {/* source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/ */}
      <p>
        SiteGround lists built-in SEO tooling (sitemaps, SEO-friendly URLs, AI categorization).
        Before publish:
      </p>
      <ul>
        <li>Unique titles/meta for top collections and bestsellers</li>
        <li>Policy pages: privacy, returns, shipping</li>
        <li>Analytics or tag manager if you rely on ads</li>
        <li>Connect your domain when on a live plan</li>
      </ul>

      <h2>After day one</h2>
      <p>
        Day one is a live <em>minimum</em> store. Schedule week two for email capture, discounts,
        and multi-channel feeds if SiteGround offers them on your tier. If you also run WordPress,
        marketing copy may live in{" "}
        <Link href="/ai-studio-review" className="inline">
          AI Studio
        </Link>{" "}
        instead of this builder.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        <Link href="/ai-ecommerce-builder-review" className="inline">
          Ecommerce review
        </Link>{" "}
        ·{" "}
        <Link href="/" className="inline">
          All tools
        </Link>
      </p>
    </ReviewLayout>
  );
}
