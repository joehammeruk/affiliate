import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How to Manage WordPress with SiteGround AI Agent",
  description:
    "Step-by-step guide: connect the AI Agent plugin, run safe chat tasks, use Power Mode for bulk work, and manage multiple WordPress sites from AI Studio.",
  path: "/ai-agent-wordpress-guide",
});

// source: https://www.siteground.com/kb/connect-ai-studio-with-wordpress/
// source: https://www.siteground.com/kb/use-wordpress-ai-agent-external-sites/
// source: https://www.siteground.com/blog/siteground-ai-agent-for-wordpress/
const faqs = [
  {
    question: "Do I need SiteGround AI Studio for the WordPress AI Agent?",
    answer:
      "The WordPress AI Agent is part of AI Studio. You connect sites through the AI Agent by SiteGround plugin and manage tasks from the AI Studio workspace.",
  },
  {
    question: "Can the agent edit WooCommerce products in bulk?",
    answer:
      "SiteGround states the agent can manage WooCommerce products, orders, and prices via chat. Bulk or destructive changes require Power Mode to be enabled first.",
  },
  {
    question: "Will it work on a WordPress site not hosted by SiteGround?",
    answer:
      "Yes. SiteGround documents support for external WordPress sites using a connection key, in addition to SiteGround-hosted installs.",
  },
  {
    question: "Is Power Mode on by default?",
    answer:
      "No. Power Mode is off by default and must be enabled before destructive or bulk actions run.",
  },
];

export default function AiAgentWordpressGuidePage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "WordPress AI Agent guide", path: "/ai-agent-wordpress-guide" }}
      ctaLink="sitegroundAiStudio"
      ctaHeading="Open AI Studio and connect your sites"
      ctaButtonLabel="Start AI Studio trial"
      relatedLinks={[
        { href: "/ai-studio-review", label: "SiteGround AI Studio review" },
        { href: "/siteground-ai-studio-free-tokens", label: "How far free tokens go" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        How-to guide
      </p>
      <h1>How to manage WordPress with the SiteGround AI Agent</h1>
      <p className="lead">
        <strong className="text-zinc-200">You manage WordPress from SiteGround AI Studio</strong> by
        installing the AI Agent by SiteGround plugin, connecting each site with a connection key (or
        one-click on SiteGround-hosted installs), then running tasks in chat—with Power Mode off
        until you need bulk or destructive changes. This workflow is for site owners who use{" "}
        <Link href="/ai-studio-review" className="inline">
          SiteGround AI Studio
        </Link>{" "}
        and want to operate WordPress—posts, plugins, themes, users, and WooCommerce—from
        chat instead of clicking through every admin screen. If you host with SiteGround,
        see how far your monthly allowance goes in our{" "}
        <Link href="/siteground-ai-studio-free-tokens" className="inline">
          free tokens guide
        </Link>
        .
      </p>

      <TrialCTA link="sitegroundAiStudio" className="mt-10" buttonLabel="Get AI Studio" />

      <h2>What you need first</h2>
      <ul>
        <li>A SiteGround AI Studio account (14-day trial or hosting-included Essential plan)</li>
        <li>Admin access to each WordPress site you want to connect</li>
        <li>The AI Agent by SiteGround plugin installed on each site</li>
      </ul>

      <h2>Step 1 — Install the plugin on your WordPress site</h2>
      {/* source: https://www.siteground.com/kb/connect-ai-studio-with-wordpress/ */}
      <p>
        On each WordPress install, install and activate the <strong>AI Agent by SiteGround</strong>{" "}
        plugin using the download link SiteGround provides in AI Studio (Profile → Connectors →
        WordPress). Log in as an administrator—the agent needs permission to manage content and
        settings you intend to automate.
      </p>

      <h2>Step 2 — Connect the site inside AI Studio</h2>
      {/* source: https://www.siteground.com/blog/siteground-ai-agent-for-wordpress/ */}
      <p>
        In AI Studio, open Profile → Connectors → WordPress and follow SiteGround&apos;s in-product
        steps. SiteGround-hosted WordPress sites listed on your account can use one-click connect;
        external hosting uses <strong>Add External Website</strong> and a{" "}
        <strong>connection key</strong> pasted in the plugin settings. Repeat for every site you
        want in the same workspace.
      </p>

      <h2>Step 3 — Start with read-only or low-risk tasks</h2>
      <p>
        Before bulk edits, validate behaviour with safe prompts, for example:
      </p>
      <ul>
        <li>&quot;List plugins that have updates available on this site.&quot;</li>
        <li>&quot;Draft a blog post outline about [topic]—do not publish yet.&quot;</li>
        <li>&quot;Summarise WooCommerce orders placed in the last 7 days.&quot;</li>
      </ul>
      <p>
        This builds trust in how the agent interprets your site structure before you ask it to
        change live data.
      </p>

      <h2>Step 4 — Routine maintenance via chat</h2>
      <p>
        Once you are comfortable, use the agent for everyday admin work SiteGround advertises:
      </p>
      <ul>
        <li><strong>Plugins &amp; themes:</strong> ask which items need updates; confirm before applying.</li>
        <li><strong>Posts &amp; pages:</strong> request edits to copy, publish status, or new drafts.</li>
        <li><strong>Users &amp; roles:</strong> clarify role changes in the prompt to avoid privilege mistakes.</li>
        <li><strong>WooCommerce:</strong> adjust product copy, prices, or catalog entries when you sell online.</li>
      </ul>
      <p>
        Always read the agent&apos;s proposed action summary before confirming—treat it like delegating
        to a junior admin, not autopilot. For a broader look at models and agents beyond WordPress,
        read our{" "}
        <Link href="/ai-studio-vs-chatgpt-plus" className="inline">
          AI Studio vs ChatGPT Plus
        </Link>{" "}
        comparison.
      </p>

      <h2>Step 5 — Enable Power Mode only when you mean it</h2>
      <p>
        Power Mode stays <strong>off by default</strong>. SiteGround requires you to turn it on before
        destructive or bulk operations execute. Use this deliberately—for example before &quot;deactivate
        all inactive plugins&quot; or &quot;bulk update sale prices by 10%.&quot; Turn it off again when the
        batch job is done.
      </p>

      <h2>Step 6 — Manage multiple sites from one workspace</h2>
      <p>
        If you run client sites or a multisite portfolio, connect each install separately and
        name sites clearly in your prompts: &quot;On <em>Client A</em>, update the contact page phone
        number.&quot; SiteGround supports managing one or many connected sites from the same AI Studio
        workspace—still verify each change on staging or off-peak hours when possible.
      </p>

      <h2>When this guide is not enough</h2>
      <p>
        Custom plugin code, bespoke WooCommerce extensions, or complex membership logic may still
        need a developer. The agent excels at operational WordPress work, not replacing a full
        engineering retainer.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Read the{" "}
        <Link href="/ai-studio-review" className="inline">
          full AI Studio review
        </Link>{" "}
        or return{" "}
        <Link href="/" className="inline">
          home
        </Link>
        .
      </p>
    </ReviewLayout>
  );
}
