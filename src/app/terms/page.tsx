import Link from "next/link";
import { LegalLastUpdated } from "@/components/legal-last-updated";
import { LegalLayout } from "@/components/legal-layout";
import { LEGAL_BUSINESS_DETAILS, LEGAL_CONTACT_EMAIL } from "@/config/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing use of HostAdvance, an independent UK affiliate site reviewing SiteGround AI tools.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <LegalLastUpdated />

      <p>
        These Terms of Use (“Terms”) govern your access to <strong>hostadvance.com</strong> (the
        “Site”) operated by HostAdvance (“we”, “us”). By using the Site, you agree to these Terms.
        If you do not agree, do not use the Site.
      </p>

      <h2>Who we are</h2>
      <p>
        HostAdvance is an independent informational website. We review SiteGround products and
        may earn affiliate commissions. We are <strong>not</strong> SiteGround, and we do not
        provide hosting, support, or billing for SiteGround services. Operator details:{" "}
        {LEGAL_BUSINESS_DETAILS}.
      </p>

      <h2>Informational content only</h2>
      <p>
        Articles, comparisons, and guides are for general information. They are not legal,
        financial, technical, or professional advice. Product features, pricing, and trial terms
        change—always confirm on SiteGround&apos;s official pages before you buy or rely on our
        summaries.
      </p>

      <h2>Affiliate links</h2>
      <p>
        We link to SiteGround using affiliate URLs. If you sign up through our links, we may earn
        a commission at no extra cost to you. See our{" "}
        <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
      </p>

      <h2>No warranty</h2>
      <p>
        The Site and content are provided <strong>“as is”</strong> and <strong>“as available”</strong>
        without warranties of any kind, whether express or implied, including accuracy,
        completeness, fitness for a particular purpose, or non-infringement, to the fullest extent
        permitted by law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits, revenue, data, or
        goodwill arising from your use of the Site or reliance on its content. Our total liability
        for claims relating to the Site in any 12-month period is limited to £100, except where
        liability cannot be limited by law (including death or personal injury caused by negligence,
        or fraud).
      </p>

      <h2>Third-party sites</h2>
      <p>
        Links to SiteGround and other third parties are provided for convenience. We do not control
        third-party sites and are not responsible for their content, policies, or practices.
      </p>

      <h2>Intellectual property</h2>
      <p>
        We own or license the Site design, text, and branding. You may view and print pages for
        personal, non-commercial use. You must not scrape, republish, or commercially exploit our
        content without written permission, except as allowed by law.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site unlawfully or in a way that harms others or our systems;</li>
        <li>Attempt unauthorised access, interference, or automated harvesting;</li>
        <li>Misrepresent your affiliation with us or SiteGround.</li>
      </ul>

      <h2>Changes</h2>
      <p>
        We may update the Site and these Terms. Continued use after changes means you accept the
        updated Terms. Check the “Last updated” date above.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of <strong>England and Wales</strong>. Courts of
        England and Wales have exclusive jurisdiction, except where mandatory consumer protections
        in your country of residence give you the right to bring proceedings elsewhere.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
