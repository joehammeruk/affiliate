import { SITE_URL } from "@/config/site";

export const dynamic = "force-static";

/** llms.txt — machine-readable site index for AI assistants and answer engines. */
const BODY = `# HostAdvance

> Independent reviews, comparisons, and how-to guides for SiteGround's AI tools:
> Coderick AI (vibe coding app builder), SiteGround AI Studio (multi-model AI
> workspace with 15+ task-trained agents), and the AI Website & Ecommerce
> Builder. HostAdvance is operated by Emax Web Limited and is an independent
> affiliate partner of SiteGround — it is not SiteGround. Outbound product links
> are sponsored affiliate links, and purchases happen on SiteGround's own site.

Key verified facts:
- All three reviewed tools include a 14-day free trial.
- Coderick AI turns plain-language chat into production-ready websites and web
  apps with version control, user authentication, and automatic deployment
  built in, hosted on SiteGround's infrastructure.
- SiteGround AI Studio is one workspace for ChatGPT, Claude, Gemini, and more,
  plus 15+ task-trained agents (SEO Expert, WordPress AI Agent, Email Marketer,
  Google Ads Expert, Social Media Managers, Image Designer) and image
  generation via Imagen and Nano Banana.
- SiteGround hosting clients get the AI Studio Essential plan free with 20,000
  AI tokens per month (resets monthly).
- The AI Agent for WordPress (part of AI Studio) manages posts, pages, plugins,
  themes, users, and WooCommerce data via chat across one or many sites;
  destructive or bulk actions require the off-by-default Power Mode.
- The AI Website & Ecommerce Builder is a drag-and-drop builder with native AI
  for copy, images, and layouts; ecommerce can be switched on when needed.

## Reviews

- [Coderick AI review](${SITE_URL}/coderick-ai-review): SiteGround's vibe
  coding builder — chat to production-ready, hosted apps.
- [SiteGround AI Studio review](${SITE_URL}/ai-studio-review): multi-model
  workspace and 15+ business agents.
- [AI Ecommerce Builder review](${SITE_URL}/ai-ecommerce-builder-review):
  drag-and-drop sites and stores with native AI help.

## Comparisons

- [Coderick AI vs Lovable](${SITE_URL}/coderick-ai-vs-lovable): hosting,
  deployment, and who each tool fits.
- [Coderick AI vs Bolt.new](${SITE_URL}/coderick-ai-vs-bolt): SiteGround
  managed apps vs Bolt Cloud.
- [Coderick AI vs v0 by Vercel](${SITE_URL}/coderick-ai-vs-v0): full app
  platform vs React UI generator.
- [AI Studio vs ChatGPT Plus](${SITE_URL}/ai-studio-vs-chatgpt-plus):
  multi-model workspace vs general chat subscription.

## Guides

- [WordPress AI Agent guide](${SITE_URL}/ai-agent-wordpress-guide): connect,
  task prompts, Power Mode, multi-site management.
- [Build a CRM with Coderick AI](${SITE_URL}/coderick-ai-build-a-crm): brief →
  chat → live internal tool on SiteGround.
- [Launch an online store with AI in a day](${SITE_URL}/launch-online-store-with-ai):
  ecommerce trial workflow with AI catalog help.
- [Can you export code from Coderick AI?](${SITE_URL}/coderick-ai-export-code):
  versioning vs download — what SiteGround documents.
- [20,000 free AI Studio tokens explained](${SITE_URL}/siteground-ai-studio-free-tokens):
  budgeting the free Essential plan for hosting clients.

## Policies

- [Affiliate disclosure](${SITE_URL}/affiliate-disclosure)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Cookie policy](${SITE_URL}/cookie-policy)
- [Terms of use](${SITE_URL}/terms)
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
