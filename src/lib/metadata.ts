import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/config/site";

const OG_IMAGE_PATH = "/og.png";
const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — SiteGround AI tool reviews`,
} as const;

function canonicalUrl(path: string): string {
  if (path === "/" || path === "") {
    return SITE_URL;
  }
  return `${SITE_URL}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = "article",
}: {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
}): Metadata {
  const canonical = canonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: openGraphType,
      siteName: SITE_NAME,
      locale: "en_GB",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export { OG_IMAGE, OG_IMAGE_PATH };
