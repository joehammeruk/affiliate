import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Can You Export Code from Coderick AI?",
  description:
    "Honest answer: Coderick's built-in versioning vs downloading source, what SiteGround documents, and who should still use the platform.",
  path: "/coderick-ai-export-code",
});

// source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/
// source: https://www.siteground.com/academy/turn-claude-design-project-into-real-website/
const faqs = [
  {
    question: "Can I download a ZIP of my Coderick project?",
    answer:
      "SiteGround's Coderick webinar states there is no option to download raw source code or export projects to another hosting provider—it is a fully managed platform by design.",
  },
  {
    question: "Does Coderick have version control?",
    answer:
      "Yes, built-in versioning inside Coderick lets you save, preview, and roll back to previous states. That is not the same as a Git repository you host elsewhere.",
  },
  {
    question: "Can I bring existing code in?",
    answer:
      "SiteGround Academy documents that Coderick accepts uploads of certain code and content file types as inputs when building—separate from exporting a finished app out.",
  },
  {
    question: "Who should still use Coderick?",
    answer:
      "Teams that want chat-driven builds with authentication and deployment on SiteGround without operating their own repo and CI pipeline.",
  },
];

export default function CoderickAiExportCodePage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Export code from Coderick AI", path: "/coderick-ai-export-code" }}
      ctaLink="coderickAi"
      ctaButtonLabel="Try Coderick AI"
      relatedLinks={[
        { href: "/coderick-ai-review", label: "Coderick AI review" },
        { href: "/coderick-ai-build-a-crm", label: "Build a CRM with Coderick" },
        { href: "/coderick-ai-vs-lovable", label: "Coderick vs Lovable" },
        { href: "/", label: "Home" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        Straight answer
      </p>
      <h1>Can you export code from Coderick AI?</h1>
      <p className="lead">
        Short answer: <strong className="text-zinc-200">do not plan on downloading a repo and
        leaving SiteGround hosting</strong> the way you would with some Git-first vibe coders.
        You <em>do</em> get platform versioning and a managed path to production on SiteGround.
        For the full product picture, read our{" "}
        <Link href="/coderick-ai-review" className="inline">
          Coderick AI review
        </Link>
        .
      </p>

      <h2>What SiteGround says about export</h2>
      {/* source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/ */}
      <p>
        SiteGround&apos;s Coderick AI webinar (2026) states the product is fully managed: projects
        run on SiteGround infrastructure, and there is <strong>no option to download raw source
        code or export projects to another hosting provider</strong>. The generated code exists
        under the hood; the interface is conversation-first, not a traditional code editor for
        arbitrary file export.
      </p>

      <h2>What you get instead: built-in versioning</h2>
      {/* source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/ */}
      <p>
        Coderick includes <strong>built-in version control</strong>—save states, preview, and roll
        back to a previous working version if a prompt goes wrong. SiteGround compares this to
        working with an always-available developer. That is valuable for iteration, but it is
        not GitHub: you are not pushing to your own remote by default.
      </p>

      <h2>Bringing code in (not out)</h2>
      {/* source: https://www.siteground.com/academy/turn-claude-design-project-into-real-website/ */}
      <p>
        SiteGround Academy notes Coderick can accept uploads of certain file types (.js, .jsx,
        .ts, .tsx, .html, .css, .scss, .md) alongside a brief when you are starting from existing
        assets. That is an <em>import</em> path for inputs, not an export path for leaving the
        platform.
      </p>

      <h2>How this differs from CLAUDE.md &quot;version control&quot;</h2>
      <p>
        Our verified product facts list version control as a Coderick feature. Read that as
        <strong> product-native history and rollback on SiteGround</strong>, not a promise of
        portable Git workflows unless SiteGround changes the docs.
      </p>

      <h2>Who should care</h2>
      <ul>
        <li>
          <strong>Stay if:</strong> you want hosting, auth, and deploy handled; you are fine with
          SiteGround as the long-term home—see{" "}
          <Link href="/coderick-ai-build-a-crm" className="inline">
            building a CRM with Coderick
          </Link>
          .
        </li>
        <li>
          <strong>Look elsewhere if:</strong> legal/compliance requires self-hosted source, or you
          must run on a specific cloud tenant you control—compare{" "}
          <Link href="/coderick-ai-vs-bolt" className="inline">
            Coderick vs Bolt
          </Link>{" "}
          and{" "}
          <Link href="/coderick-ai-vs-v0" className="inline">
            Coderick vs v0
          </Link>{" "}
          for different portability stories.
        </li>
      </ul>

      <TrialCTA link="coderickAi" className="mt-10" buttonLabel="Test Coderick on SiteGround" />

      <FaqSection items={faqs} />
    </ReviewLayout>
  );
}
