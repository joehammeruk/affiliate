import Link from "next/link";
import { LegalLastUpdated } from "@/components/legal-last-updated";
import { LegalLayout } from "@/components/legal-layout";
import { LEGAL_BUSINESS_DETAILS, LEGAL_CONTACT_EMAIL } from "@/config/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How HostAdvance collects and uses personal data on this UK affiliate review site, including Vercel hosting and optional analytics.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <LegalLastUpdated />

      <p>
        This Privacy Policy explains how <strong>HostAdvance</strong> (“we”, “us”) processes
        personal data when you visit <strong>hostadvance.com</strong> (the “Site”). We are a
        UK-based informational website that reviews SiteGround products and may earn affiliate
        commissions when you use our links.
      </p>

      <h2>Who is responsible for your data?</h2>
      <p>
        The data controller is: {LEGAL_BUSINESS_DETAILS}. For privacy enquiries, contact:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>

      <h2>What data we collect</h2>
      <h3>Data you provide</h3>
      <p>
        We do not offer accounts or checkout on this Site. If you email us, we process the
        information you choose to send (for example your email address and message content).
      </p>
      <h3>Data collected automatically</h3>
      <ul>
        <li>
          <strong>Hosting and security logs:</strong> Our host Vercel may process technical
          data such as IP address, request time, URL, browser type, and referrer in server logs
          to deliver the Site and protect against abuse.
        </li>
        <li>
          <strong>Cookie consent:</strong> If you use our cookie banner, we store your choice
          (Accept or Reject) in a first-party cookie and localStorage so we do not ask again.
        </li>
        <li>
          <strong>Analytics (only if you Accept):</strong> If you accept optional analytics, we
          load Vercel Web Analytics and Vercel Speed Insights. Vercel describes Web Analytics as
          cookieless and privacy-friendly; it still involves processing of usage data. These tools
          do not run if you Reject.
        </li>
      </ul>

      <h2>Purposes and legal bases (UK GDPR)</h2>
      <ul>
        <li>
          <strong>Operate the Site</strong> (legitimate interests / contract where applicable):
          hosting, security, and displaying content.
        </li>
        <li>
          <strong>Remember cookie choices</strong> (legitimate interests): storing your consent
          preference.
        </li>
        <li>
          <strong>Understand Site usage</strong> (consent): optional Vercel Analytics and Speed
          Insights only after you Accept.
        </li>
        <li>
          <strong>Respond to enquiries</strong> (legitimate interests / consent): when you contact
          us.
        </li>
      </ul>

      <h2>Third parties</h2>
      <ul>
        <li>
          <strong>Vercel, Inc.</strong> — website hosting and, if you consent, analytics and
          performance measurement. See{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel&apos;s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>SiteGround</strong> — when you click an affiliate link you leave our Site.
          SiteGround sets its own cookies and processes data under its policies. We do not control
          SiteGround&apos;s processing. See{" "}
          <a
            href="https://www.siteground.co.uk/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            SiteGround&apos;s Privacy Policy
          </a>
          .
        </li>
      </ul>

      <h2>International transfers</h2>
      <p>
        Vercel and SiteGround may process data outside the UK. Where required, transfers rely on
        appropriate safeguards (such as UK adequacy regulations or standard contractual clauses).
        Check each provider&apos;s documentation for current transfer mechanisms.
      </p>

      <h2>How long we keep data</h2>
      <ul>
        <li>Consent records: up to 12 months from your choice (renewed if you choose again).</li>
        <li>Server logs: typically retained by Vercel for a limited period per their policies.</li>
        <li>Emails you send us: kept only as long as needed to handle your enquiry.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        If UK data protection law applies, you may have rights to access, rectify, erase, restrict
        or object to processing, data portability, and to withdraw consent (where processing is
        based on consent). You may also complain to the{" "}
        <a
          href="https://ico.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK Information Commissioner&apos;s Office (ICO)
        </a>
        . To exercise rights, contact{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>

      <h2>Children</h2>
      <p>The Site is not directed at children under 16.</p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The “Last updated” date shows the current version. Material
        changes may be noted on the Site.
      </p>

      <p>
        See also our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>,{" "}
        <Link href="/terms">Terms of Use</Link>, and{" "}
        <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
      </p>
    </LegalLayout>
  );
}
