/**
 * Single source of truth for every outbound URL on this site.
 * There are no other external links — swap these four values only.
 */
export const AFFILIATE_LINKS = {
  /** Primary CTA: hero, header, sticky bar, final section */
  primary: "https://example.com/AFFILIATE_PRIMARY",
  coderickAi: "https://example.com/AFFILIATE_CODERICK_AI",
  aiEcommerceBuilder: "https://example.com/AFFILIATE_AI_ECOMMERCE_BUILDER",
  sitegroundAiStudio: "https://example.com/AFFILIATE_SITEGROUND_AI_STUDIO",
} as const;

export type AffiliateLinkKey = keyof typeof AFFILIATE_LINKS;
