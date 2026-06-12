import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ReviewLayout } from "@/components/review-layout";
import { TrialCTA } from "@/components/trial-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How to Build a CRM with Coderick AI",
  description:
    "Conceptual workflow for building a client CRM or internal portal with Coderick AI: brief, chat iterations, auth, and going live on SiteGround.",
  path: "/coderick-ai-build-a-crm",
});

// source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/
const faqs = [
  {
    question: "Can Coderick AI build a real CRM, not just a mockup?",
    answer:
      "SiteGround positions Coderick for production-ready web apps on its stack, including internal tools like CRMs and client portals—with authentication and deployment included.",
  },
  {
    question: "Do I need to write code?",
    answer:
      "The product is built for plain-language chat. Generated code runs under the hood; SiteGround's interface is conversation-first rather than a traditional IDE.",
  },
  {
    question: "Can I move the CRM off SiteGround later?",
    answer:
      "SiteGround's Coderick webinar states there is no option to download raw source or export projects to another host—confirm current terms on SiteGround before you depend on exit paths.",
  },
  {
    question: "What should I define before I start chatting?",
    answer:
      "Users, pipelines, fields, permissions, notifications, and integrations. A one-page brief reduces rework in chat.",
  },
];

export default function CoderickAiBuildACrmPage() {
  return (
    <ReviewLayout
      breadcrumb={{ name: "Build a CRM with Coderick AI", path: "/coderick-ai-build-a-crm" }}
      dates={{ published: "2026-06-04" }}
      ctaLink="coderickAi"
      ctaHeading="Start building on Coderick AI"
      ctaButtonLabel="Try Coderick AI"
      relatedLinks={[
        { href: "/coderick-ai-review", label: "Coderick AI review" },
        { href: "/coderick-ai-export-code", label: "Can you export code from Coderick?" },
        { href: "/", label: "All SiteGround AI tools" },
      ]}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
        How-to guide
      </p>
      <h1>How to build a CRM with Coderick AI</h1>
      <p className="lead">
        <strong className="text-zinc-200">You can build a lightweight CRM with Coderick AI</strong> by
        writing a one-page brief (users, pipeline stages, permissions), then iterating in chat until
        auth and deployment on SiteGround match your needs. SiteGround lists CRMs and client portals
        as Coderick use cases. Start
        from our{" "}
        <Link href="/coderick-ai-review" className="inline">
          Coderick AI review
        </Link>{" "}
        if you are new to the product; read{" "}
        <Link href="/coderick-ai-export-code" className="inline">
          whether you can export code
        </Link>{" "}
        before you assume you can move the app off SiteGround later.
      </p>

      <TrialCTA link="coderickAi" className="mt-10" buttonLabel="Start Coderick AI trial" />

      <h2>Step 1 — Write a one-page brief</h2>
      <p>Before opening Coderick, document:</p>
      <ul>
        <li><strong>Users:</strong> who logs in (sales, admin, read-only clients?)</li>
        <li><strong>Objects:</strong> leads, companies, deals, tasks, notes</li>
        <li><strong>Views:</strong> pipeline board, list filters, detail drawer</li>
        <li><strong>Actions:</strong> assign owner, change stage, log call notes</li>
        <li><strong>Non-goals:</strong> what you are not building in v1 (billing, inventory, etc.)</li>
      </ul>
      <p>
        Paste this brief into your first prompt so the model does not guess your sales process.
      </p>

      <h2>Step 2 — First prompt: skeleton app</h2>
      <p>Example prompt shape (adapt to your business):</p>
      <p className="rounded-lg border border-white/[0.08] bg-zinc-900/50 p-4 text-sm text-zinc-300">
        &quot;Build an internal CRM for a 5-person agency. Roles: admin and rep. Reps see only their
        assigned leads. Include a kanban pipeline (New → Qualified → Proposal → Won/Lost), a lead
        detail page with notes timeline, and a dashboard with counts by stage. Use a clean,
        professional UI. Include user login.&quot;
      </p>
      <p>
        SiteGround&apos;s pitch is chat → production-ready output with authentication—exact screens
        will depend on what Coderick generates in your session.
      </p>

      <h2>Step 3 — Iterate in small steps</h2>
      <p>
        {/* source: https://www.siteground.com/blog/siteground-coderick-ai-webinar-2026/ */}
        SiteGround recommends incremental changes so you can roll back if a fix goes wrong.
        Coderick includes built-in versioning to restore a prior working state. Good follow-up
        prompts:
      </p>
      <ul>
        <li>&quot;Add CSV export for leads assigned to the current user.&quot;</li>
        <li>&quot;Add email-reminder field on tasks due this week.&quot;</li>
        <li>&quot;Restrict Won/Lost stages so only admins can move deals there.&quot;</li>
      </ul>

      <h2>Step 4 — Add auth and roles explicitly</h2>
      <p>
        Do not assume permissions are correct. Ask: &quot;Show me how roles are enforced on the API
        routes&quot; or &quot;Add a read-only auditor role that cannot edit deals.&quot; Coderick advertises
        user authentication as built in—validate with test accounts before inviting the team.
      </p>

      <h2>Step 5 — Preview, then plan go-live</h2>
      {/* source: https://www.siteground.com/coderick-ai */}
      <p>
        Use Coderick&apos;s preview during the trial. Check SiteGround&apos;s current Coderick product
        page and in-app trial messaging for what you can publish before you promise the team a
        production URL.
      </p>

      <h2>Step 6 — Deploy on SiteGround</h2>
      <p>
        When you upgrade, Coderick&apos;s value proposition is automatic deployment on SiteGround
        enterprise hosting—no separate DevOps project. Connect your custom domain when SiteGround
        enables it on your plan, then onboard users with real accounts. Compare hosting models in{" "}
        <Link href="/coderick-ai-vs-bolt" className="inline">
          Coderick vs Bolt
        </Link>
        .
      </p>

      <h2>What a CRM here is not</h2>
      <p>
        You are not getting Salesforce-scale workflows out of a vibe-coded v1. Integrations with
        telephony, marketing automation, or legacy ERP may still need custom work or external
        tools. Start narrow; expand only after the core pipeline is stable.
      </p>

      <FaqSection items={faqs} />

      <p className="mt-10 text-sm text-zinc-500">
        <Link href="/coderick-ai-review" className="inline">
          Coderick AI review
        </Link>{" "}
        ·{" "}
        <Link href="/" className="inline">
          Home
        </Link>
      </p>
    </ReviewLayout>
  );
}
