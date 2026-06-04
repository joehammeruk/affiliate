import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";
import { hubReviewJsonLd } from "@/lib/json-ld";

export const metadata = createPageMetadata({
  title: "SiteGround AI Studio Review — 15+ AI Agents",
  description:
    "Independent SiteGround AI Studio review: multi-model workspace, task-trained agents, WordPress AI Agent, Power Mode, and free tokens for hosting clients.",
  path: "/ai-studio-review",
});

const faqs = [
  {
    question: "What is SiteGround AI Studio?",
    answer:
      "AI Studio is SiteGround's unified AI workspace. You chat with multiple leading models in one place, use image generation, and run task-trained agents for marketing, SEO, WordPress management, and more.",
  },
  {
    question: "Which AI models are included?",
    answer:
      "SiteGround lists access to models such as ChatGPT, Claude, Gemini, and others in one workspace, plus image generation via Imagen and Nano Banana.",
  },
  {
    question: "What is the WordPress AI Agent?",
    answer:
      "It is an agent inside AI Studio that manages WordPress tasks — posts, pages, plugins, themes, users, and WooCommerce catalog and orders — via chat, including across multiple connected sites when configured.",
  },
  {
    question: "What is Power Mode?",
    answer:
      "Power Mode is an off-by-default safeguard SiteGround requires before destructive or bulk WordPress actions run. It is meant to reduce accidental large-scale changes.",
  },
  {
    question: "Do hosting customers get free access?",
    answer:
      "SiteGround hosting clients can get the Essential plan free with 20,000 AI tokens per month (resets monthly). Non-hosting users can start with a 14-day free trial on paid plans.",
  },
];

export default function AiStudioReviewPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "AI Studio review", path: "/ai-studio-review" }}
      structuredData={hubReviewJsonLd({
        productName: "SiteGround AI Studio",
        description:
          "Unified AI workspace with multiple models, task-trained agents, WordPress AI Agent, image generation, and free Essential tokens for SiteGround hosting clients.",
        pagePath: "/ai-studio-review",
      })}
      ctaLink="sitegroundAiStudio"
      ctaHeading="Try SiteGround AI Studio free for 14 days"
      ctaButtonLabel="Start AI Studio trial"
      relatedLinks={[
        { href: "/ai-agent-wordpress-guide", label: "WordPress AI Agent guide" },
        { href: "/ai-studio-vs-chatgpt-plus", label: "AI Studio vs ChatGPT Plus" },
        { href: "/siteground-ai-studio-free-tokens", label: "How far 20,000 free tokens go" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Independent review
      </p>
      <h1>SiteGround AI Studio review: one workspace, 15+ AI agents</h1>
      <p className="lead">
        <strong className="text-zinc-200">SiteGround AI Studio</strong> is one workspace for
        multiple AI models, marketing and SEO agents, image generation, and a WordPress AI Agent
        that can run admin tasks via chat. It fits site owners who already use SiteGround hosting
        or manage WordPress stores and want those jobs in a single product—not scattered chat
        subscriptions.
      </p>

      <TrialCTA
        link="sitegroundAiStudio"
        className="mt-10"
        buttonLabel="Start AI Studio trial"
      />

      <h2>What it is</h2>
      <p>
        Think of AI Studio as a control room: one login, several frontier models, image
        generation, and agents tuned for real business tasks. SiteGround offers monthly
        and annual plans plus a 14-day free trial for new subscribers.
      </p>

      <h2>The agents SiteGround names</h2>
      <p>
        SiteGround advertises 15+ task-trained agents. The ones they highlight publicly
        include:
      </p>
      <ul>
        <li>SEO Expert</li>
        <li>WordPress AI Agent</li>
        <li>Email Marketer</li>
        <li>Google Ads Expert</li>
        <li>Social Media Managers</li>
        <li>Image Designer</li>
      </ul>
      <p>
        SiteGround groups the rest under the same 15+ count on its product pages—we
        did not list agents here that SiteGround does not name publicly.
      </p>

      <h2>WordPress AI Agent and Power Mode</h2>
      <p>
        The WordPress AI Agent is the standout for site owners. Through the &quot;AI Agent
        by SiteGround&quot; plugin, you can manage content, plugins, themes, user roles,
        and WooCommerce products and orders from chat — on SiteGround-hosted sites or
        external WordPress installs via a connection key.
      </p>
      <p>
        Power Mode stays off until you enable it. SiteGround uses it as a deliberate
        gate before destructive or bulk operations, which is sensible if you manage
        client sites or large catalogs.
      </p>

      <h2>Free tokens for hosting clients</h2>
      <p>
        If you already pay for SiteGround hosting, the Essential plan can be included
        free with 20,000 AI tokens each month. Tokens reset monthly, so heavy automation
        weeks may need a paid tier — monitor usage inside the product during your trial.
      </p>

      <h2>Honest trade-offs</h2>
      <p>
        AI Studio is broad, which can feel overwhelming at first. Token limits matter
        for agent-heavy workflows, and the WordPress Agent still requires thoughtful
        setup (plugin install, connections, Power Mode discipline). It is not a
        replacement for a developer on complex custom plugins, but it can remove a
        lot of day-to-day WordPress admin work when used carefully.
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
