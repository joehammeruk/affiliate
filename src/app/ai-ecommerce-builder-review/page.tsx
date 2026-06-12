import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";
import { hubReviewJsonLd } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "SiteGround AI Ecommerce Builder Review",
  description:
    "Conservative independent review of SiteGround's AI website and ecommerce builder: drag-and-drop, AI copy and images, site-to-store path.",
  path: "/ai-ecommerce-builder-review",
});

// source: https://www.siteground.com/ecommerce
// source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/
const faqs = [
  {
    question: "What is SiteGround's AI ecommerce builder?",
    answer:
      "It is SiteGround's visual, no-code builder for business sites and online stores, with native AI assistance for copy, images, and layouts. You can start as a website and add ecommerce when you are ready.",
  },
  {
    question: "Do I need coding skills?",
    answer:
      "No. SiteGround positions the builder for non-technical owners who want drag-and-drop editing and AI help filling in content.",
  },
  {
    question: "What does the AI actually help with?",
    answer:
      "SiteGround's ecommerce pages state you can use AI for product titles, descriptions, categorization, and images. Exact limits depend on your plan—confirm in-product during the trial.",
  },
  {
    question: "Can I run a full online store?",
    answer:
      "SiteGround markets an integrated ecommerce path (catalog, checkout, orders) on the same platform without assembling separate plugins. Verify store features for your plan before launch.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "SiteGround advertises a 14-day ecommerce trial with full feature access and no credit card on its ecommerce product page. Card and trial rules are shown on their official signup flow.",
  },
];

export default function AiEcommerceBuilderReviewPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "AI ecommerce builder review", path: "/ai-ecommerce-builder-review" }}
      dates={{ published: "2026-06-04" }}
      structuredData={hubReviewJsonLd({
        productName: "SiteGround AI Website & Ecommerce Builder",
        description:
          "Visual drag-and-drop website and store builder with native AI for copy, images, and layouts; start as a site and add ecommerce when needed.",
        pagePath: "/ai-ecommerce-builder-review",
      })}
      ctaLink="aiEcommerceBuilder"
      ctaHeading="Try the AI builder free for 14 days"
      ctaButtonLabel="Start builder trial"
      relatedLinks={[
        { href: "/launch-online-store-with-ai", label: "Launch a store with AI in a day" },
        { href: "/ai-studio-review", label: "SiteGround AI Studio review" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
        Independent review
      </p>
      <h1>SiteGround AI website &amp; ecommerce builder review</h1>
      <p className="lead">
        <strong className="text-zinc-200">SiteGround&apos;s AI website and ecommerce builder</strong>{" "}
        is a no-code, drag-and-drop platform for business sites and online stores, with AI help for
        product copy, images, and layouts. This review stays conservative—public detail is thinner
        than on Coderick AI or AI Studio—and sticks to what SiteGround publishes on its own pages.
      </p>

      {/* source: https://www.siteground.com/ecommerce */}
      <TrialCTA
        link="aiEcommerceBuilder"
        className="mt-10"
        heading="Try SiteGround ecommerce free for 14 days"
        body="SiteGround's ecommerce page lists a 14-day trial with no credit card and full feature access during the trial window. Confirm current terms on SiteGround before you publish."
        buttonLabel="Start builder trial"
      />

      <h2>What it is</h2>
      <p>
        At core, this is a drag-and-drop website builder with AI woven into content
        and design tasks. SiteGround also sells it as a path into ecommerce without
        requiring you to learn WordPress or wire up third-party plugins first.
      </p>

      <h2>AI for copy, images, and layout</h2>
      {/* source: https://www.siteground.com/ecommerce */}
      <p>
        SiteGround&apos;s ecommerce marketing pages say you can create product titles,
        descriptions, categorization, and images with AI, and use templates designed
        for selling.
      </p>
      {/* source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/ */}
      <p>
        SiteGround&apos;s website-builder blog describes an AI assistant that helps
        generate product titles, descriptions, and categories when you populate a
        store. Treat generation limits as plan-specific—confirm inside your trial.
      </p>

      <h2>From site to store</h2>
      {/* source: https://www.siteground.com/academy/what-is-a-website-builder/ */}
      {/* source: https://www.siteground.com/blog/sell-online-with-the-new-siteground-website-builder/ */}
      <p>
        A practical reason to consider SiteGround here is continuity: start with a
        business or portfolio site, then enable store features on the same platform
        when you are ready. SiteGround&apos;s blog describes going from zero to selling in
        hours on the ecommerce edition, with catalog, checkout, and order tools built
        in rather than bolted on via addons.
      </p>

      <h2>Who it suits</h2>
      <ul>
        {/* source: https://www.siteground.com/ecommerce */}
        <li>First-time sellers who want guided setup and 24/7 expert support (all ecommerce plans on SiteGround&apos;s product page)</li>
        {/* source: https://www.siteground.com/ecommerce */}
        <li>Local businesses moving online without hiring a developer</li>
        {/* source: https://www.siteground.com/ecommerce */}
        <li>Owners who want all-in-one pricing that SiteGround lists as including the store builder, premium hosting, SSL, CDN, backups, and support</li>
      </ul>

      <h2>Honest trade-offs</h2>
      <p>
        If you need deeply custom storefront logic or a headless commerce API, a
        generic drag-and-drop builder — AI-assisted or not — may feel limiting.
        Compare total cost of ownership (plan tier, transactions, add-ons) on
        SiteGround&apos;s pricing page rather than assuming the trial plan matches long-term
        production needs.
      </p>
      <p>
        We have not hands-on tested every ecommerce edge case (multi-currency rules,
        complex shipping zones, marketplace feeds) in this write-up. Use the trial to
        walk your actual catalog and checkout flow before committing.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Back to{" "}
        <Link href="/" className="inline">
          all SiteGround AI tool reviews
        </Link>
        .
      </p>
    </ReviewLayout>
  );
}
