import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Coderick AI vs v0 by Vercel",
  description:
    "Coderick ships full apps on SiteGround; v0 generates React/Next UI components for your existing stack—different jobs.",
  path: "/coderick-ai-vs-v0",
});

const faqs = [
  {
    question: "Is v0 a competitor to Coderick?",
    answer:
      "Partially. Both use AI for web products, but v0 focuses on UI components and Next.js-oriented code you integrate elsewhere, while Coderick targets end-to-end apps hosted on SiteGround.",
  },
  {
    question: "Does v0 include hosting?",
    answer:
      "v0 can deploy via Vercel; it is not SiteGround hosting. Coderick includes SiteGround enterprise hosting and automatic deployment in its product story.",
  },
  {
    question: "Which is better for a CRM?",
    answer:
      "Coderick is positioned for internal tools like CRMs on managed hosting. v0 is better for generating UI pieces you merge into an existing engineering project.",
  },
];

export default function CoderickAiVsV0Page() {
  return (
    <ReviewLayout
      ctaLink="coderickAi"
      ctaButtonLabel="Try Coderick AI"
      relatedLinks={[
        { href: "/coderick-ai-review", label: "Coderick AI review" },
        { href: "/coderick-ai-vs-bolt", label: "Coderick vs Bolt" },
        { href: "/", label: "Home" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        Comparison
      </p>
      <h1>Coderick AI vs v0: full app platform vs UI generator</h1>
      <p className="lead">
        Comparing these tools only by “AI for web” misses the point. v0 is Vercel&apos;s UI
        generation layer for React/Next.js teams. Coderick is SiteGround&apos;s full-stack vibe
        coder with hosting included.
      </p>

      <h2>Quick verdict</h2>
      <p>
        <strong className="text-zinc-200">Coderick AI</strong> if you want chat → live app on
        SiteGround with auth and deployment, and you are not already standardised on Vercel.
      </p>
      <p>
        <strong className="text-zinc-200">v0</strong> if you already have engineers, a Next.js
        repo, and shadcn/Tailwind conventions—and you need production UI components fast.
      </p>

      <h2>Coderick AI</h2>
      <p>
        Plain-language builds for websites, web apps, CRMs, and portals; version control,
        authentication, automatic deployment on SiteGround infrastructure. Output is meant to be
        production-ready on SiteGround from day one—not a component drop-in.
      </p>

      <h2>v0 by Vercel</h2>
      {/* source: https://v0.dev/docs */}
      <p>
        v0 is an AI agent for creating code and full-stack apps, but its strength in the market
        is high-fidelity UI: React components, Tailwind, shadcn/ui defaults, design mode edits,
        and deployment paths oriented to Vercel&apos;s ecosystem.
      </p>
      {/* source: https://v0.app/solutions/ai-ui-design-generator */}
      <p>
        You can scaffold from text, screenshots, or Figma links; output is meant to slot into
        existing Next.js projects via CLI or copy-paste—not to replace SiteGround hosting.
      </p>

      <h2>Why they are not direct substitutes</h2>
      <ul>
        <li><strong>Backend:</strong> Coderick advertises integrated auth + deploy on SiteGround; v0 may build full-stack prototypes but engineering teams still own production architecture off-platform.</li>
        <li><strong>Audience:</strong> Coderick for operators who want managed hosting; v0 for product/engineering teams already on Vercel.</li>
        <li><strong>Portability:</strong> Coderick is managed on SiteGround; v0 code is portable as React source you control in Git.</li>
      </ul>

      <TrialCTA link="coderickAi" className="mt-10" />

      <FaqSection items={faqs} />
    </ReviewLayout>
  );
}
