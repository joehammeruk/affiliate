import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SiteGround AI Studio vs ChatGPT Plus",
  description:
    "Compare multi-model AI Studio with task agents and WordPress automation vs a general ChatGPT Plus subscription for site owners.",
  path: "/ai-studio-vs-chatgpt-plus",
});

// source: https://openai.com/chatgpt/pricing/
const faqs = [
  {
    question: "Does AI Studio replace ChatGPT Plus?",
    answer:
      "Not exactly. ChatGPT Plus is OpenAI's paid ChatGPT subscription (see openai.com/chatgpt/pricing). AI Studio bundles multiple models plus SiteGround-trained agents—and a WordPress agent—in one SiteGround product.",
  },
  {
    question: "Can AI Studio manage my WordPress site?",
    answer:
      "Yes, via the WordPress AI Agent and plugin. ChatGPT Plus is a general chat product and does not include SiteGround's WordPress connector.",
  },
  {
    question: "Which is cheaper?",
    answer:
      "Pricing changes on both sides. Compare SiteGround AI Studio plans (and free Essential for hosting clients) against OpenAI's current ChatGPT Plus pricing on their site—we do not quote either price here.",
  },
  {
    question: "Do I get image generation in AI Studio?",
    answer:
      "SiteGround lists image generation via Imagen and Nano Banana inside AI Studio, in addition to text models.",
  },
];

export default function AiStudioVsChatgptPlusPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "AI Studio vs ChatGPT Plus", path: "/ai-studio-vs-chatgpt-plus" }}
      ctaLink="sitegroundAiStudio"
      ctaButtonLabel="Try AI Studio"
      relatedLinks={[
        { href: "/ai-studio-review", label: "AI Studio review" },
        { href: "/ai-agent-wordpress-guide", label: "WordPress AI Agent guide" },
        { href: "/", label: "Home" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Comparison
      </p>
      <h1>SiteGround AI Studio vs ChatGPT Plus</h1>
      <p className="lead">
        <strong className="text-zinc-200">AI Studio is not the same product as ChatGPT Plus.</strong>{" "}
        ChatGPT Plus is OpenAI&apos;s general chat subscription;{" "}
        <Link href="/ai-studio-review" className="inline">
          SiteGround AI Studio
        </Link>{" "}
        is a multi-model workspace with WordPress, SEO, and marketing agents for site operators.
        Hosting clients should read{" "}
        <Link href="/siteground-ai-studio-free-tokens" className="inline">
          how far free tokens go
        </Link>
        ; compare current plans on SiteGround and OpenAI before you buy either tool.
      </p>

      <h2>Quick verdict</h2>
      <p>
        <strong className="text-zinc-200">Keep ChatGPT Plus</strong> if you mainly need a flexible
        writing and research assistant unrelated to your hosting stack.
      </p>
      <p>
        <strong className="text-zinc-200">Add or switch to AI Studio</strong> if you want
        WordPress/WooCommerce actions, SEO/email/ads agents SiteGround names, and multi-model
        access without maintaining separate tool accounts for each task.
      </p>

      <h2>What ChatGPT Plus gives you</h2>
      {/* source: https://openai.com/chatgpt/pricing/ */}
      <p>
        Per OpenAI&apos;s ChatGPT pricing page, ChatGPT Plus is the consumer/prosumer subscription
        for the ChatGPT product (features and model access are listed there and change over time).
        It does not include SiteGround&apos;s WordPress plugin, WooCommerce-aware agents, or
        hosting-client AI Studio token bundles. We do not state a dollar price here—check OpenAI
        and SiteGround pricing pages before you buy.
      </p>

      <h2>What AI Studio adds (SiteGround-verified)</h2>
      <ul>
        <li>One workspace with ChatGPT, Claude, Gemini, and more</li>
        <li>Image generation via Imagen and Nano Banana</li>
        <li>15+ named task agents (SEO, Email Marketer, Google Ads Expert, etc.)</li>
        <li>WordPress AI Agent with Power Mode safeguards</li>
        <li>Essential plan free for SiteGround hosting clients (20,000 tokens/month, resets monthly)</li>
        <li>14-day free trial on paid plans for non-hosting users</li>
      </ul>

      <h2>Workflow difference</h2>
      <p>
        With ChatGPT Plus, you typically copy prompts and paste results into WordPress,
        spreadsheets, or ad consoles manually. With AI Studio&apos;s WordPress Agent (see our{" "}
        <Link href="/ai-agent-wordpress-guide" className="inline">
          WordPress guide
        </Link>
        ), operational tasks—plugin updates, post edits, bulk catalog tweaks—can start in chat when
        you accept the agent&apos;s confirmation flow.
      </p>

      <h2>Honest overlap</h2>
      <p>
        Both can draft blog posts, ad copy, or emails. AI Studio does not magically remove the
        need for brand judgment. Many teams keep a general LLM subscription <em>and</em> AI Studio
        for site operations—we are not claiming you must cancel one to use the other.
      </p>

      <TrialCTA link="sitegroundAiStudio" className="mt-10" />

      <FaqSection items={faqs} />
    </ReviewLayout>
  );
}
