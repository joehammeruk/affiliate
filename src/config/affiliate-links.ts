/**
 * Single source of truth for every outbound URL on this site.
 * There are no other external links — swap these four values only.
 */
// SiteGround UK affiliate Campaign links — one per product. Do not hand-edit URLs;
// manage slugs/landing pages in the SiteGround dashboard.
export const AFFILIATE_LINKS = {
  /** Primary CTA: hero, header, sticky bar, final section */
  primary: "https://siteground.co.uk/go/2i5gcafjid",
  coderickAi: "https://siteground.co.uk/go/hostadvance-coderick",
  aiEcommerceBuilder: "https://siteground.co.uk/go/hostadvance-ecommerce",
  sitegroundAiStudio: "https://siteground.co.uk/go/hostadvance-aistudio",
} as const;

export type AffiliateLinkKey = keyof typeof AFFILIATE_LINKS;
