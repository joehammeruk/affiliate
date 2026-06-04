import { SITE_NAME, SITE_URL } from "@/config/site";

export function breadcrumbJsonLd(pageName: string, pagePath: string) {
  const pageUrl = pagePath === "/" ? SITE_URL : `${SITE_URL}${pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

/** Hub review pages: SoftwareApplication + Review (no ratings). */
export function hubReviewJsonLd({
  productName,
  description,
  pagePath,
}: {
  productName: string;
  description: string;
  pagePath: string;
}) {
  const pageUrl = `${SITE_URL}${pagePath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#application`,
        name: productName,
        description,
        url: pageUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        brand: {
          "@type": "Brand",
          name: "SiteGround",
        },
      },
      {
        "@type": "Review",
        "@id": `${pageUrl}#review`,
        itemReviewed: {
          "@type": "SoftwareApplication",
          "@id": `${pageUrl}#application`,
          name: productName,
        },
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        url: pageUrl,
        reviewBody: `${description} Independent affiliate review published by ${SITE_NAME}.`,
      },
    ],
  };
}
