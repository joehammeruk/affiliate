import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES, SITE_URL } from "@/config/site";

/** Real content dates — bump when a page materially changes. A build-time
 * `new Date()` makes every lastmod identical and untrustworthy to crawlers. */
const CONTENT_PUBLISHED = "2026-06-04";
const HOME_UPDATED = "2026-06-12";

const LEGAL_ROUTES = new Set([
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
  "/affiliate-disclosure",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((path) => ({
    url: path === "" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(path === "" ? HOME_UPDATED : CONTENT_PUBLISHED),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : LEGAL_ROUTES.has(path) ? 0.3 : 0.8,
  }));
}
