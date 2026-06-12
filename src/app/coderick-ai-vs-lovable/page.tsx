import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Coderick AI vs Lovable — Which Vibe Coding Tool Ships?",
  description:
    "Fair comparison of Coderick AI and Lovable: chat-driven apps, hosting, deployment, and who should pick SiteGround vs Lovable Cloud.",
  path: "/coderick-ai-vs-lovable",
});

// Lovable capabilities: source https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership
// Coderick trial: source https://www.siteground.com/coderick-ai
const faqs = [
  {
    question: "Are Coderick AI and Lovable the same kind of tool?",
    answer:
      "Broadly yes — both let you describe software in natural language and generate working web apps. They differ in who operates hosting, how production deployment works, and which ecosystem you commit to.",
  },
  {
    question: "Which tool is better for non-developers?",
    answer:
      "Lovable documents full-stack generation with Supabase and managed Lovable Cloud hosting. Coderick AI targets production-ready output on SiteGround's managed stack, which may appeal if you already want SiteGround hosting and support.",
  },
  {
    question: "Can I export code from both?",
    answer:
      "Lovable states projects can sync to GitHub continuously for export or external hosting. Coderick AI emphasises version control and deployment on SiteGround infrastructure. Verify portability details on each vendor's docs during your trial.",
  },
  {
    question: "Which should I pick for a client CRM on managed hosting?",
    answer:
      "If the goal is a live internal tool on SiteGround enterprise hosting with minimal DevOps, Coderick AI aligns with that story. If you want Lovable Cloud or a Supabase-centric stack with optional self-hosting later, Lovable is the natural fit.",
  },
];

export default function CoderickAiVsLovablePage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Coderick AI vs Lovable", path: "/coderick-ai-vs-lovable" }}
      dates={{ published: "2026-06-04" }}
      ctaLink="coderickAi"
      ctaHeading="Try Coderick AI on SiteGround"
      ctaBody="SiteGround lists a 14-day Coderick AI free trial on its product page (no credit card). Lovable has separate signup and trial rules."
      ctaButtonLabel="Start Coderick AI trial"
      relatedLinks={[
        { href: "/coderick-ai-review", label: "Full Coderick AI review" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        Comparison
      </p>
      <h1>Coderick AI vs Lovable: which vibe coding tool ships real apps?</h1>
      <p className="lead">
        <strong className="text-zinc-200">Coderick AI and Lovable</strong> both build web apps
        from chat, but they differ on hosting: Coderick targets production-ready apps on
        SiteGround&apos;s managed stack; Lovable targets its own cloud (with optional GitHub sync).
        This comparison stays factual—we earn a commission only if you choose SiteGround through
        our links.
      </p>

      <h2>Quick verdict</h2>
      <p>
        <strong className="text-zinc-200">Pick Coderick AI</strong> when you want
        SiteGround-managed hosting, security, and deployment baked in from day one and
        you are building business sites, portfolios, or internal tools on that stack.
      </p>
      {/* source: https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership */}
      <p>
        <strong className="text-zinc-200">Consider Lovable</strong> when you want a
        Supabase-backed full-stack generator with Lovable Cloud one-click publishing
        (or GitHub export to managed hosts such as Netlify, Cloudflare Pages, or
        Vercel, per Lovable&apos;s deployment docs).
      </p>

      <h2>How each tool works</h2>
      <h3>Coderick AI (SiteGround)</h3>
      <p>
        Chat in plain language → production-ready websites and web apps with version
        control, authentication, and automatic deployment on SiteGround&apos;s enterprise
        hosting. SiteGround launched it in February 2026 as its vibe-coding product.
      </p>
      <h3>Lovable</h3>
      {/* source: https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership */}
      <p>
        Lovable generates standard Vite + React applications from prompts, typically
        with Supabase for database and auth. Lovable Cloud provides managed hosting with
        automatic SSL, global delivery, and one-click publish; projects can sync to
        GitHub for export or self-managed hosting.
      </p>

      <h2>Hosting and deployment</h2>
      <p>
        This is the meaningful difference. Coderick AI&apos;s verified positioning is
        production-ready output hosted on SiteGround from the start — not a detached
        prototype you must deploy elsewhere.
      </p>
      {/* source: https://lovable.dev/guides/how-to-publish-a-web-app */}
      <p>
        Lovable&apos;s default path is publish through Lovable Cloud (shareable
        `*.lovable.app` URLs, custom domains on paid plans). Lovable&apos;s documentation
        also describes moving frontends to Netlify, Cloudflare Pages, or Vercel and
        backends to managed or self-hosted Supabase — more flexibility, more decisions
        for you.
      </p>

      <h2>Who should pick which</h2>
      <ul>
        <li>
          <strong className="text-zinc-300">Coderick AI:</strong> SiteGround customers,
          agencies standardising on SiteGround, or builders who want deployment and
          enterprise hosting included in the same vendor relationship.
        </li>
        {/* source: https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership */}
        <li>
          <strong className="text-zinc-300">Lovable:</strong> Builders who want
          managed Lovable Cloud (custom domains, SSL, global delivery), standard
          Vite + React projects, GitHub sync, and optional hybrid or self-managed
          hosting on platforms Lovable lists (for example Netlify, Cloudflare Pages,
          or Vercel).
        </li>
      </ul>

      <h2>What we are not claiming</h2>
      <p>
        We have not run a feature-by-feature benchmark score. Pricing, credit limits,
        and model quality change frequently on both sides — validate on each vendor&apos;s
        official pages during trials.
      </p>

      <TrialCTA
        link="coderickAi"
        className="mt-10"
        heading="Ready to try Coderick AI on SiteGround?"
        buttonLabel="Start Coderick AI trial"
      />

      {/* source: https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership */}
      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Read the full{" "}
        <Link href="/coderick-ai-review" className="inline">
          Coderick AI review
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
