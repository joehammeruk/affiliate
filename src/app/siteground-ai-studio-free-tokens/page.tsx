import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How Far Do 20,000 SiteGround AI Studio Tokens Go?",
  description:
    "What hosting clients get with free Essential tokens, what consumes tokens, and how to avoid burning through monthly allowance.",
  path: "/siteground-ai-studio-free-tokens",
});

const faqs = [
  {
    question: "Who gets the 20,000 free tokens?",
    answer:
      "SiteGround hosting clients can get the AI Studio Essential plan free with 20,000 AI tokens per month that reset monthly.",
  },
  {
    question: "Does SiteGround publish tokens per task?",
    answer:
      "SiteGround does not publish a public token menu per agent action in the materials we cite—monitor usage inside AI Studio during your trial.",
  },
  {
    question: "What happens when I run out?",
    answer:
      "SiteGround documents monthly token resets on the Essential bundle; for limits after exhaustion, follow in-product messaging and plan options in AI Studio.",
  },
  {
    question: "Is Essential the same as the 14-day trial?",
    answer:
      "No. The 14-day trial applies to new AI Studio subscribers on paid plans. Hosting clients get Essential free with the token bundle described in CLAUDE.md.",
  },
];

export default function SitegroundAiStudioFreeTokensPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "AI Studio free tokens", path: "/siteground-ai-studio-free-tokens" }}
      ctaLink="sitegroundAiStudio"
      ctaButtonLabel="Open AI Studio"
      relatedLinks={[
        { href: "/ai-studio-review", label: "AI Studio review" },
        { href: "/ai-agent-wordpress-guide", label: "WordPress AI Agent guide" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Token guide
      </p>
      <h1>How far do 20,000 free AI Studio tokens go?</h1>
      <p className="lead">
        <strong className="text-zinc-200">SiteGround hosting clients can get 20,000 AI Studio
        tokens per month</strong> on the free Essential plan (resets monthly)—enough for light
        weekly marketing and WordPress agent work if you budget carefully. SiteGround does not
        publish a per-click token menu in public docs—see our{" "}
        <Link href="/ai-studio-review" className="inline">
          AI Studio review
        </Link>{" "}
        for the full product picture and use in-product counters to track real usage.
      </p>

      <h2>What tokens are for</h2>
      <p className="text-sm text-zinc-500">
        <em>Practical note:</em> AI Studio tracks usage in tokens inside the product. Longer
        prompts, longer answers, multi-step agent runs, and image generation typically use more
        allowance than a single short headline—confirm behaviour in your account.
      </p>

      <h2>Practical budgeting (our framework, not SiteGround math)</h2>
      <p className="text-sm text-zinc-500">
        <em>Opinion:</em> treat 20,000 tokens as a monthly operations budget, not unlimited
        automation.
      </p>
      <ul>
        <li><strong>Light month:</strong> weekly blog drafts, a few SEO agent sessions, occasional social copy—often sufficient if prompts are tight.</li>
        <li><strong>Heavy month:</strong> daily WordPress agent batches, large WooCommerce edits with Power Mode, frequent image generation—likely needs paid tier or stricter discipline.</li>
        <li><strong>Multi-site:</strong> each connected WordPress site adds operational surface area; standardise prompts and avoid redundant full-site scans.</li>
      </ul>

      <h2>How to stretch tokens</h2>
      <ol>
        <li>One task per thread—do not reload entire site context every message.</li>
        <li>Use specific agents (SEO Expert, Email Marketer) instead of general chat for specialised work.</li>
        <li>Enable Power Mode only for batches you intend to run (see the{" "}
          <Link href="/ai-agent-wordpress-guide" className="inline">
            WordPress AI Agent guide
          </Link>
          ).
        </li>
        <li>Check usage counters inside AI Studio if your plan exposes them.</li>
        <li>Reserve image generation for final assets, not every brainstorm.</li>
      </ol>

      <h2>When to upgrade</h2>
      <p>
        If you hit the ceiling mid-month while running client sites, review paid AI Studio tiers on
        SiteGround&apos;s pricing page or split high-volume work back to human admins for the rest
        of the cycle. Tokens reset monthly on the Essential bundle.
      </p>

      <h2>What we will not claim</h2>
      <p>
        We are not converting 20,000 tokens into “47 blog posts” or similar—without SiteGround’s
        official per-action table, that would be fabricated. Validate consumption with your real
        workflows during Essential access. Unsure whether you need a general chat tool too? See{" "}
        <Link href="/ai-studio-vs-chatgpt-plus" className="inline">
          AI Studio vs ChatGPT Plus
        </Link>
        .
      </p>

      <TrialCTA link="sitegroundAiStudio" className="mt-10" />

      <FaqSection items={faqs} />
    </ReviewLayout>
  );
}
