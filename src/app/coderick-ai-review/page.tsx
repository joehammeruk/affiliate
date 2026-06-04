import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";
import { hubReviewJsonLd } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "Coderick AI Review — SiteGround Vibe Coding Builder",
  description:
    "Independent review of Coderick AI: chat-to-production websites on SiteGround hosting, built-in auth, version control, and deployment.",
  path: "/coderick-ai-review",
});

// Trial terms: source https://www.siteground.com/coderick-ai
// source https://www.siteground.com/kb/coderick-ai-free-trial-limitations/
const faqs = [
  {
    question: "What is Coderick AI?",
    answer:
      "Coderick AI is SiteGround's vibe-coding builder. You describe what you want in plain language and the tool generates production-ready websites and web apps, with version control, authentication, and automatic deployment on SiteGround infrastructure.",
  },
  {
    question: "Who is Coderick AI best for?",
    answer:
      "Teams and builders who want to ship business sites, portfolios, landing pages, or internal tools (CRMs, dashboards, client portals) without spending weeks on setup. It suits anyone who cares about going live on managed hosting, not just prototyping in a sandbox.",
  },
  {
    question: "Does Coderick AI include hosting?",
    answer:
      "Yes. Projects run on SiteGround's enterprise hosting and security stack from day one, which is a core part of the product positioning versus tools that only output code you must host yourself.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "SiteGround offers a 14-day Coderick AI free trial (no credit card required on the product page). Trial limits—such as credits, storage, and publishing—are listed in SiteGround's KB. Terms may change.",
  },
  {
    question: "How does Coderick AI compare to Lovable?",
    answer:
      "Both are vibe-coding tools, but they emphasise different paths to production. See our Coderick AI vs Lovable comparison for a side-by-side look at workflow and hosting.",
  },
];

export default function CoderickAiReviewPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Coderick AI review", path: "/coderick-ai-review" }}
      structuredData={hubReviewJsonLd({
        productName: "Coderick AI",
        description:
          "SiteGround vibe-coding builder: plain-language chat to production-ready websites and web apps with version control, authentication, and deployment on SiteGround hosting.",
        pagePath: "/coderick-ai-review",
      })}
      ctaLink="coderickAi"
      ctaHeading="Try Coderick AI free for 14 days"
      ctaButtonLabel="Start Coderick AI trial"
      relatedLinks={[
        { href: "/coderick-ai-build-a-crm", label: "How to build a CRM with Coderick" },
        { href: "/coderick-ai-export-code", label: "Can you export code from Coderick?" },
        { href: "/coderick-ai-vs-lovable", label: "Coderick AI vs Lovable" },
        { href: "/coderick-ai-vs-bolt", label: "Coderick AI vs Bolt" },
        { href: "/coderick-ai-vs-v0", label: "Coderick AI vs v0" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        Independent review
      </p>
      <h1>Coderick AI review: vibe coding that ships on SiteGround</h1>
      <p className="lead">
        <strong className="text-zinc-200">Coderick AI</strong> is SiteGround&apos;s vibe-coding
        builder: you describe a site or web app in plain language, and SiteGround generates a
        production-ready project with authentication, version history, and deployment on its
        hosting stack—without a separate DevOps setup.
      </p>

      {/* source: https://www.siteground.com/coderick-ai */}
      {/* source: https://www.siteground.com/kb/coderick-ai-free-trial-limitations/ */}
      <TrialCTA
        link="coderickAi"
        className="mt-10"
        heading="Try Coderick AI free for 14 days"
        body="SiteGround's Coderick trial runs 14 days with no credit card on the product page. Publishing and other limits apply until you upgrade—see SiteGround for current terms."
        buttonLabel="Start Coderick AI trial"
      />

      <h2>What it is</h2>
      <p>
        Launched in February 2026, Coderick AI targets &quot;vibe coding&quot; — building
        by conversation rather than hand-writing every file. SiteGround positions it
        for websites and web apps that need real infrastructure: user accounts,
        version history, and automatic deployment, not throwaway demos.
      </p>

      <h2>What you get out of the box</h2>
      <ul>
        <li>Plain-language chat that turns into live pages and apps</li>
        <li>Version control built into the workflow</li>
        <li>User authentication included</li>
        <li>Automatic deployment to SiteGround hosting</li>
        <li>Enterprise-grade hosting and security on SiteGround infrastructure</li>
      </ul>

      <h2>Who it suits</h2>
      <p>
        Coderick AI fits developers and technical founders who want speed without
        giving up a credible production path. SiteGround highlights business sites,
        portfolios, landing pages, and internal tools — CRMs, dashboards, and client
        portals — where staying on managed hosting matters.
      </p>

      <h2>Honest trade-offs</h2>
      <p>
        This is a new product category for SiteGround, so expect the feature set to
        evolve quickly. If you need deep custom backend logic or exotic integrations,
        you may still outgrow a vibe-coding workflow and hand off to a traditional
        codebase. For standard sites and internal apps on SiteGround, the integrated
        hosting story is the main reason to look here instead of a prototype-only
        builder.
      </p>
      <p>
        We have not run a long-term production benchmark on Coderick AI in this
        review — treat performance and limits as something to validate during your
        own trial.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Compare tools:{" "}
        <Link href="/coderick-ai-vs-lovable" className="inline">
          Coderick AI vs Lovable
        </Link>
        . Back to{" "}
        <Link href="/" className="inline">
          all reviews
        </Link>
        .
      </p>
    </ReviewLayout>
  );
}
