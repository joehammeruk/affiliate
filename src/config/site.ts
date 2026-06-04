export const SITE_NAME = "HostAdvance";

/** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://hostadvance.com). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hostadvance.com";

/** Indexable App Router paths (empty string = homepage). Keep in sync with src/app. */
export const PUBLIC_ROUTES = [
  "",
  "/coderick-ai-review",
  "/ai-studio-review",
  "/ai-ecommerce-builder-review",
  "/coderick-ai-vs-lovable",
  "/ai-agent-wordpress-guide",
  "/coderick-ai-build-a-crm",
  "/launch-online-store-with-ai",
  "/coderick-ai-export-code",
  "/ai-studio-vs-chatgpt-plus",
  "/siteground-ai-studio-free-tokens",
  "/coderick-ai-vs-bolt",
  "/coderick-ai-vs-v0",
  "/privacy-policy",
  "/cookie-policy",
  "/terms",
  "/affiliate-disclosure",
] as const;
