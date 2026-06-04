# CLAUDE.md — HostAdvance project guide

You (Claude Code) are building out **hostadvance.com**: an independent affiliate
site reviewing SiteGround's AI tools. Read this file fully before any task. The
task list lives in `BUILD-BRIEF.md`.

---

## Non-negotiable rules

1. **Affiliate links only via config + component.** Every outbound CTA must use
   the `<AffiliateLink>` component with a key from `src/config/affiliate-links.ts`
   (`rel="sponsored"`). NEVER hardcode a SiteGround URL in a page, and NEVER
   build, embed, or mock a checkout/payment form. The visitor pays on
   SiteGround's own site. There is no payment surface on this domain.
2. **Disclosure is mandatory and upfront.** Every page renders the disclosure
   bar above the fold (use the shared `DisclosureBar` component) AND the footer
   disclosure. UK ASA/CMA rules require it to be clear and prominent. Never imply
   we are SiteGround — we are an independent affiliate partner.
3. **Do not fabricate.** No invented features, stats, prices, quotes, reviews,
   or screenshots. Use only the verified facts below. If a page needs a claim
   not listed here, web-search SiteGround's own material to confirm it, and add
   a `// source:` comment with the URL. If you can't verify it, leave it out.
4. **No commission figures on public pages.** What the affiliate earns is
   private. Pages talk about the user's free trial and benefits, never our cut.

---

## Verified product facts (use these; don't embellish)

### Coderick AI — affiliate key: `coderickAi`
- SiteGround's "vibe coding" app builder (launched Feb 2026).
- Plain-language chat → production-ready websites and web apps.
- Built in: version control, user authentication, automatic deployment.
- Runs on SiteGround's own enterprise hosting + security stack.
- Use cases: business sites, portfolios, landing pages, and internal tools like
  CRMs, dashboards, client portals.
- Key differentiator vs other vibe-coding tools: output is production-ready and
  hosted from day one, not just a prototype.

### SiteGround AI Studio — affiliate key: `sitegroundAiStudio`
- One AI workspace to chat with multiple leading models: ChatGPT, Claude,
  Gemini, and more. Image generation via Imagen and Nano Banana.
- 15+ task-trained agents: SEO Expert, WordPress AI Agent, Email Marketer,
  Google Ads Expert, Social Media Managers, Image Designer.
- 14-day free trial; monthly or annual plans.
- SiteGround hosting clients get the Essential plan free, with 20,000 AI tokens
  per month (resets monthly).
- **AI Agent for WordPress** (part of AI Studio): manages posts, pages, plugins,
  themes, users/roles, and WooCommerce products/orders/prices via chat — across
  one or many connected sites. "Power Mode" is an off-by-default safeguard
  required for destructive/bulk actions. Connects through the "AI Agent by
  SiteGround" plugin; works on SiteGround-hosted sites and external WordPress
  sites (via a connection key).

### AI Website & Ecommerce Builder — affiliate key: `aiEcommerceBuilder`
- Visual drag-and-drop builder with native AI for copy, images, and layouts.
- Start with a business/portfolio site; switch on full ecommerce when needed.
- No coding required.
- (This product has the least public detail — keep claims conservative and
  verify anything specific before publishing.)

### Offer context (do NOT print on public pages)
- New-products promo: 60% of first-year revenue (monthly & annual), up to
  £216/sale, across the three AI products; affiliate credited for any eligible
  product the referred user signs up for. Standard hosting commissions unchanged.

---

## Design system

- **Theme:** dark. Page background `#09090B`, body text `zinc-100`/`zinc-400`,
  accent `emerald-400`. Subtle mesh/grid texture behind heroes (in
  `src/app/globals.css`).
- **Fonts:** display = Bricolage Grotesque, body = DM Sans, both via `next/font`,
  exposed as `--font-bricolage` / `--font-dm-sans`. Headings use
  `font-display`.
- **Per-tool card tints:** Coderick `bg-[#0D1518] border-[#1A303A]`; Ecommerce
  `bg-[#130E1A] border-[#2B1B3D]`; AI Studio `bg-[#0E1712] border-[#173A25]`.
- Match the look of `src/app/page.tsx`. Calm, authoritative, no pop-ups or fake
  urgency.

---

## Engineering conventions

- Next.js App Router + TypeScript + Tailwind live under **`src/`**.
- **App Router** pages live in **`src/app/`** (NOT `app/` at the repo root).
- **`@/*` resolves to `./src/*`** (NOT the repo root). Example: `@/components/affiliate-link`.
- **Affiliate links:** single source of truth = `src/config/affiliate-links.ts`;
  product copy = `src/config/products.ts`; render outbound links with
  `<AffiliateLink>` (`rel="sponsored"`, `target="_blank"`,
  `rel` includes `noopener noreferrer`). NEVER hardcode a SiteGround URL in a
  page. NEVER build or mock a payment/checkout form — the user always pays on
  SiteGround.
- **Shared UI** lives in `src/components/` (existing: `affiliate-link`,
  `offer-card`, `product-icon`, `scroll-link`, `disclosure-bar`; add
  `TrialCTA`, `FaqSection`, `ReviewLayout` per `BUILD-BRIEF.md`).
- Each content page is `src/app/<slug>/page.tsx` and must export `metadata` with a
  unique `title`, `description`, and `alternates.canonical`.
- Add `src/app/sitemap.ts` and `src/app/robots.ts`.
- Internal linking: every review/comparison page links back to its hub and to
  `/`. Hubs link out to their cluster pages.
- Keep it static/server-rendered (no client JS unless a page truly needs it) so
  Lighthouse stays near 100 on Vercel.

## Working style
- Before writing files for a phase, post a short plan and the list of files
  you'll create/edit. Then implement. Run `npm run build` and fix type errors
  before declaring a phase done.
