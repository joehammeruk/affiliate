import Link from "next/link";
import { LegalLastUpdated } from "@/components/legal-last-updated";
import { LegalLayout } from "@/components/legal-layout";
import { LEGAL_CONTACT_EMAIL } from "@/config/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Cookies and similar technologies used on HostAdvance, including consent storage and optional Vercel Analytics.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <LegalLastUpdated />

      <p>
        This Cookie Policy explains how <strong>HostAdvance</strong> uses cookies and similar
        technologies on <strong>hostadvance.com</strong>. It should be read with our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Our approach</h2>
      <p>
        We keep cookies on this Site to a minimum. We do <strong>not</strong> use advertising or
        social-media tracking cookies on HostAdvance. Optional analytics load only if you click{" "}
        <strong>Accept</strong> on our cookie banner.
      </p>

      <h2>Cookies and storage we set</h2>
      <table className="mt-4 w-full border-collapse text-left text-sm text-zinc-400">
        <thead>
          <tr className="border-b border-white/[0.08] text-zinc-300">
            <th className="py-2 pr-4 font-semibold">Name / key</th>
            <th className="py-2 pr-4 font-semibold">Type</th>
            <th className="py-2 pr-4 font-semibold">Purpose</th>
            <th className="py-2 font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/[0.06]">
            <td className="py-3 pr-4 align-top font-mono text-xs text-zinc-300">
              hostadvance_consent
            </td>
            <td className="py-3 pr-4 align-top">First-party cookie</td>
            <td className="py-3 pr-4 align-top">
              Remembers whether you Accepted or Rejected optional analytics
            </td>
            <td className="py-3 align-top">Up to 12 months</td>
          </tr>
          <tr>
            <td className="py-3 pr-4 align-top font-mono text-xs text-zinc-300">
              hostadvance-cookie-consent
            </td>
            <td className="py-3 pr-4 align-top">localStorage</td>
            <td className="py-3 pr-4 align-top">Same choice as the cookie above (backup)</td>
            <td className="py-3 align-top">Until you clear site data</td>
          </tr>
        </tbody>
      </table>

      <h2>What we do not set (unless you Accept)</h2>
      <p>
        Before you Accept, we do <strong>not</strong> load Vercel Web Analytics or Vercel Speed
        Insights. Vercel Web Analytics is described by Vercel as{" "}
        <strong>cookieless</strong> (no analytics cookies on your device). Speed Insights measures
        performance and is also designed not to rely on tracking cookies. Because they still
        process usage/performance data and are not strictly necessary to run the Site, we treat
        them as <strong>non-essential</strong> and gate them behind consent—consistent with our
        banner.
      </p>
      <p>
        If you <strong>Reject</strong>, those scripts never load on your visit (unless you change
        your mind and clear site data to see the banner again).
      </p>

      <h2>Strictly necessary</h2>
      <p>
        The consent cookie/localStorage entry is necessary to record your choice and meet UK
        expectations for equal Accept/Reject options without nagging you on every page.
      </p>

      <h2>When you click our affiliate links</h2>
      <p>
        Outbound links go to <strong>SiteGround</strong> (and related SiteGround domains). We do
        not control cookies SiteGround sets after you leave our Site. SiteGround may use cookies
        for sign-up, affiliate tracking, security, and product functionality under its own policies.
        Review{" "}
        <a
          href="https://www.siteground.co.uk/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          SiteGround&apos;s Privacy Policy
        </a>{" "}
        and SiteGround&apos;s cookie information on their website.
      </p>

      <h2>Managing cookies</h2>
      <ul>
        <li>Use our banner Accept/Reject when it appears.</li>
        <li>Clear cookies and site data in your browser to reset choices.</li>
        <li>Use browser settings to block cookies (some Site features may not work as intended).</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about this policy:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
