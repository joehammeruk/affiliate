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

// source: https://v0.dev/docs
// source: https://v0.app/solutions/ai-ui-design-generator
const faqs = [
  {
    question: "Is v0 a competitor to Coderick?",
    answer:
      "Partially. Both use AI for web products, but v0 focuses on UI components and Next.js-oriented code you integrate elsewhere, while Coderick targets end-to-end apps hosted on SiteGround.",
  },
  {
    question: "Does v0 include hosting?",
    answer:
      "v0 documents deploy to infrastructure powered by Vercel; it is not SiteGround hosting. Coderick includes SiteGround enterprise hosting and automatic deployment in its product story.",
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
      breadcrumb={{ name: "Coderick AI vs v0", path: "/coderick-ai-vs-v0" }}
      dates={{ published: "2026-06-04" }}
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
        <strong className="text-zinc-200">Coderick AI and v0 solve different problems:</strong>{" "}
        Coderick is a full hosted app builder on SiteGround; v0 is Vercel&apos;s AI for generating
        React/Next UI you integrate into an existing codebase and deploy on Vercel. Read{" "}
        <Link href="/coderick-ai-export-code" className="inline">
          Coderick export limits
        </Link>{" "}
        and our{" "}
        <Link href="/coderick-ai-review" className="inline">
          Coderick review
        </Link>{" "}
        before you pick a stack.
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
        production-ready on SiteGround from day one—not a component drop-in. Workflow example:{" "}
        <Link href="/coderick-ai-build-a-crm" className="inline">
          build a CRM with Coderick
        </Link>
        .
      </p>

      <h2>v0 by Vercel</h2>
      {/* source: https://v0.dev/docs */}
      <p>
        v0 is an AI agent that helps create real code and full-stack apps. Per v0 docs, it supports
        high-fidelity UIs, React components, Tailwind, shadcn/ui defaults, design mode edits, and
        deploy to infrastructure powered by Vercel.
      </p>
      {/* source: https://v0.app/solutions/ai-ui-design-generator */}
      <p>
        You can scaffold from text, screenshots, or Figma links; output is meant to slot into
        existing Next.js projects via CLI or copy-paste—not to replace SiteGround hosting.
      </p>

      <h2>Why they are not direct substitutes</h2>
      <ul>
        <li>
          <strong>Backend:</strong> Coderick advertises integrated auth + deploy on SiteGround; v0
          can build full-stack prototypes, but production hosting on Vercel is a separate product
          path per v0 docs.
        </li>
        <li>
          <strong>Audience:</strong> Coderick for operators who want managed hosting; v0 for
          product/engineering teams already on Vercel.
        </li>
        <li>
          <strong>Portability:</strong> Coderick is managed on SiteGround; v0 output is React
          source you integrate into your own repo.
        </li>
      </ul>

      <TrialCTA link="coderickAi" className="mt-10" />

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        Compare hosting models in{" "}
        <Link href="/coderick-ai-vs-bolt" className="inline">
          Coderick vs Bolt
        </Link>
        .
      </p>
    </ReviewLayout>
  );
}
