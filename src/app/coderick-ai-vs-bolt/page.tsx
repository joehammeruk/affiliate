import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Coderick AI vs Bolt.new",
  description:
    "Compare SiteGround Coderick AI with Bolt.new: managed hosting on SiteGround vs Bolt Cloud, WebContainers, and export paths.",
  path: "/coderick-ai-vs-bolt",
});

// Bolt: source https://support.bolt.new/building/intro-bolt
// Bolt: source https://support.bolt.new/cloud/bolt-cloud
const faqs = [
  {
    question: "Are both full-stack vibe coders?",
    answer:
      "Both turn natural language into web apps. Coderick targets production-ready apps on SiteGround; Bolt targets websites and apps with Bolt Cloud infrastructure and optional custom domains on paid plans.",
  },
  {
    question: "Which includes hosting in the price story?",
    answer:
      "Coderick is designed as fully managed on SiteGround enterprise hosting. Bolt publishes projects to bolt.host subdomains with Bolt Cloud managing databases, auth, and hosting.",
  },
  {
    question: "Can I leave the platform later?",
    answer:
      "Coderick does not offer raw source export to other hosts per SiteGround docs. Bolt supports sharing/publishing workflows; check Bolt docs for code ownership and external deployment options on your plan.",
  },
];

export default function CoderickAiVsBoltPage() {
  return (
    <ReviewLayout
      ctaLink="coderickAi"
      ctaButtonLabel="Try Coderick AI"
      relatedLinks={[
        { href: "/coderick-ai-review", label: "Coderick AI review" },
        { href: "/coderick-ai-vs-lovable", label: "Coderick vs Lovable" },
        { href: "/coderick-ai-vs-v0", label: "Coderick vs v0" },
        { href: "/", label: "Home" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        Comparison
      </p>
      <h1>Coderick AI vs Bolt.new: which vibe coder fits your stack?</h1>
      <p className="lead">
        Bolt.new (StackBlitz) and Coderick AI both promise fast apps from prompts—but they
        optimise for different hosting stories. We earn a commission if you choose SiteGround
        through our links.
      </p>

      <h2>Quick verdict</h2>
      <p>
        <strong className="text-zinc-200">Coderick AI</strong> when you want SiteGround-managed
        production hosting, auth, and deployment as part of the same vendor relationship.
      </p>
      <p>
        <strong className="text-zinc-200">Bolt.new</strong> when you want Bolt Cloud&apos;s
        integrated databases, auth, edge functions, and instant `.bolt.host` publishing inside
        their ecosystem.
      </p>

      <h2>Coderick AI (SiteGround)</h2>
      <p>
        Chat → production-ready sites/apps with version control, authentication, and automatic
        deployment on SiteGround&apos;s stack (Feb 2026 launch). Best aligned with CRMs, client
        portals, and business sites that should live on SiteGround long term.
      </p>

      <h2>Bolt.new</h2>
      {/* source: https://support.bolt.new/building/intro-bolt */}
      <p>
        Bolt is an AI builder for websites, web apps, and mobile apps. Projects run in the browser
        via WebContainers; Bolt Cloud bundles hosting, databases, domains, and auth without separate
        Supabase/Netlify accounts for many users.
      </p>
      {/* source: https://support.bolt.new/cloud/bolt-cloud */}
      <p>
        Publishing uses Share or Publish controls; free `.bolt.host` subdomains are included;
        paid users can attach custom domains. Bolt Cloud also provisions databases, authentication,
        and edge functions automatically.
      </p>

      <h2>Hosting &amp; portability</h2>
      <p>
        {/* source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/ */}
        Coderick does not document downloading raw source for migration off SiteGround—it is
        managed-by-design with in-platform versioning.
      </p>
      <p>
        Bolt emphasises code ownership via GitHub sync and hybrid deployments in enterprise
        materials—validate export paths on your plan rather than assuming parity with Coderick.
      </p>

      <TrialCTA link="coderickAi" className="mt-10" />

      <FaqSection items={faqs} />
    </ReviewLayout>
  );
}
