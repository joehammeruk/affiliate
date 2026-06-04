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
        url: SITE_URL,
        description:
          "Independent affiliate reviews and guides for SiteGround AI tools.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return <JsonLd data={jsonLd} />;
}
