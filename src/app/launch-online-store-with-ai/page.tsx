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
      "SiteGround markets going from zero to selling in hours for simple catalogs. Complex shipping rules, many SKUs, or custom integrations will take longer—use the day for a credible v1, not perfection.",
  },
  {
    question: "Does AI write product descriptions for me?",
    answer:
      "SiteGround states you can generate product titles, descriptions, categorization, and images with AI on ecommerce plans. Review every listing before publish.",
  },
  {
    question: "Do I need WordPress?",
    answer:
      "No for this path—SiteGround ecommerce is a separate integrated builder platform, not a WordPress plugin stack.",
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
        This is a practical hour-by-hour style sequence for SiteGround&apos;s ecommerce builder—AI
        for catalog content, drag-and-drop for layout, built-in checkout when you are ready to
        sell. Adjust timing to your catalog size; ten SKUs is not five hundred.
      </p>

      <TrialCTA link="aiEcommerceBuilder" className="mt-10" buttonLabel="Start 14-day trial" />

      <h2>Hour 0–1 — Account, template, brand basics</h2>
      <ol>
        <li>Start SiteGround&apos;s ecommerce trial from their product page (14-day, no credit card per SiteGround marketing).</li>
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
      <p>
        Switch to drag-and-drop refinement: collection grids, trust badges, shipping/returns
        snippets, mobile spacing. SiteGround emphasises mobile-responsive templates—scroll on a
        phone, not only desktop.
      </p>

      <h2>Hour 4–5 — Payments, tax, shipping</h2>
      <p>
        Configure the operational basics SiteGround bundles (payments, tax, shipping rules) using
        their store manager. Run a <strong>test order</strong> end-to-end. Do not announce the
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
        and multi-channel feeds if SiteGround offers them on your tier. Read our{" "}
        <Link href="/ai-ecommerce-builder-review" className="inline">
          ecommerce builder review
        </Link>{" "}
        for trade-offs before you scale ad spend.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        <Link href="/" className="inline">
          All tools
        </Link>
      </p>
    </ReviewLayout>
  );
}
