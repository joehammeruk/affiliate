import Link from "next/link";
import { LegalLastUpdated } from "@/components/legal-last-updated";
import { LegalLayout } from "@/components/legal-layout";
import { LEGAL_CONTACT_EMAIL } from "@/config/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How HostAdvance earns affiliate commissions from SiteGround and how that affects our reviews.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <LegalLastUpdated />

      <p>
        <strong>HostAdvance is an independent affiliate partner of SiteGround.</strong> This page
        explains what that means for you and how we handle commissions.
      </p>

      <h2>Our relationship with SiteGround</h2>
      <p>
        We are not owned by SiteGround. We do not speak for SiteGround, and we are not authorised
        to provide SiteGround customer support, billing, or technical support. When you click our
        buttons or links labelled for free trials, you are taken to SiteGround&apos;s own website
        to sign up under SiteGround&apos;s terms.
      </p>

      <h2>How we earn money</h2>
      <p>
        If you sign up for a SiteGround product (for example Coderick AI, AI Studio, or the AI
        ecommerce builder) through our tracked affiliate links, SiteGround may pay us a commission.
        That commission is paid by SiteGround from its marketing budget—it is not an extra charge
        added to your bill because you used our link.
      </p>

      <h2>Does commission affect our reviews?</h2>
      <p>
        We only cover SiteGround&apos;s AI products because that is the focus of this site. Our
        goal is accurate, useful comparisons—not hype. We:
      </p>
      <ul>
        <li>Base product claims on SiteGround&apos;s own materials and label anything we cannot verify;</li>
        <li>Compare SiteGround tools with alternatives where helpful;</li>
        <li>Explain trade-offs (including where SiteGround is not the best fit);</li>
        <li>Show this disclosure at the top of every page and again in the footer.</li>
      </ul>
      <p>
        A commission creates a financial interest in you choosing SiteGround. We mitigate that by
        being explicit about our role, avoiding invented specs, and encouraging you to use
        SiteGround&apos;s official trials and documentation before you purchase.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not process payments or store your card details;</li>
        <li>We do not guarantee SiteGround pricing, trial length, or feature availability;</li>
        <li>We do not publish our private affiliate commission rates on this Site.</li>
      </ul>

      <h2>Tracking links</h2>
      <p>
        Affiliate URLs may include tracking parameters so SiteGround can attribute your signup to
        us. After you leave HostAdvance, SiteGround&apos;s cookies and privacy practices apply.
        See our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>Questions</h2>
      <p>
        If you want to know more about how we work, contact{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
