import { LEGAL_CONTACT_EMAIL, LEGAL_OPERATOR_NAME } from "@/config/legal";
import { SITE_NAME, SITE_URL } from "@/config/site";
import { JsonLd } from "@/components/json-ld";

export function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_OPERATOR_NAME,
        url: SITE_URL,
        email: LEGAL_CONTACT_EMAIL,
        description:
          "Independent affiliate reviews and guides for SiteGround AI tools.",
        knowsAbout: [
          "Coderick AI",
          "SiteGround AI Studio",
          "SiteGround AI Website & Ecommerce Builder",
          "AI Agent for WordPress",
          "AI website builders",
          "Vibe coding tools",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return <JsonLd data={jsonLd} />;
}
