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

// source: https://support.bolt.new/building/intro-bolt
// source: https://support.bolt.new/cloud/bolt-cloud
// source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/
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
      "Coderick does not offer raw source export to other hosts per SiteGround's webinar. For Bolt, review Share/Publish and Bolt Cloud docs on your plan rather than assuming the same portability rules.",
  },
];

export default function CoderickAiVsBoltPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Coderick AI vs Bolt", path: "/coderick-ai-vs-bolt" }}
      dates={{ published: "2026-06-04" }}
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
        <strong className="text-zinc-200">Coderick AI and Bolt.new both turn prompts into web
        apps,</strong> but Coderick ships on SiteGround&apos;s managed hosting while Bolt publishes
        inside Bolt Cloud and WebContainers on{" "}
        <code className="text-zinc-400">.bolt.host</code> subdomains. We earn a commission if you
        choose SiteGround through our links—see our{" "}
        <Link href="/coderick-ai-review" className="inline">
          Coderick AI review
        </Link>{" "}
        for the SiteGround side.
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
        portals, and business sites that should live on SiteGround long term. See{" "}
        <Link href="/coderick-ai-export-code" className="inline">
          export and portability
        </Link>{" "}
        before you assume you can download the codebase.
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
      {/* source: https://support.bolt.new/cloud/bolt-cloud */}
      <p>
        Bolt documents Share and Publish flows and Bolt Cloud hosting on bolt.host subdomains.
        Review Bolt&apos;s support articles for your plan if you need custom domains or production
        cutover details—we do not claim feature parity with Coderick here.
      </p>

      <TrialCTA link="coderickAi" className="mt-10" />

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Also compare{" "}
        <Link href="/coderick-ai-vs-v0" className="inline">
          Coderick vs v0
        </Link>
        .
      </p>
    </ReviewLayout>
  );
}
