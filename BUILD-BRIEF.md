# BUILD-BRIEF.md — what to build

Read `CLAUDE.md` first; every rule there applies. Work in phases. Post a plan,
implement, run `npm run build`, then move on.

Each page below lists: **target query** (the longtail phrase it should rank for),
**H1**, **sections**, **CTA key** (from `src/config/affiliate-links.ts`), and
**internal links**. Write honest, first-hand-sounding copy grounded only in the
verified facts. Add an FAQ with 3–5 real questions per page (drives FAQ rich
snippets via `FaqSection`).

**Affiliate link keys:** `primary` · `coderickAi` · `aiEcommerceBuilder` ·
`sitegroundAiStudio`. Every CTA uses `<AffiliateLink>` or `<TrialCTA>` with the
correct key — no `/go` paths, no hardcoded SiteGround URLs.

---

## Phase 0 — Refactor (do this first)
- Reuse existing components: `offer-card`, `affiliate-link`, `product-icon`,
  `scroll-link`, `disclosure-bar`.
- Add under `src/components/`: `TrialCTA.tsx` (takes an affiliate link key, renders
  `<AffiliateLink>`), `FaqSection.tsx` (renders FAQs + injects FAQPage JSON-LD),
  `ReviewLayout.tsx`.
- Refactor `src/app/page.tsx` to use `DisclosureBar` + shared CTAs where it
  reduces duplication (homepage already has disclosure in layout + footer).
- Add `src/app/sitemap.ts` and `src/app/robots.ts`.
- `npm run build` must pass.

---

## Phase 1 — The two remaining hub reviews + first comparisons

1. **`src/app/ai-studio-review/`** — CTA key `sitegroundAiStudio`
   - Target: "SiteGround AI Studio review"
   - H1: "SiteGround AI Studio review: one workspace, 15+ AI agents"
   - Sections: what it is (multi-model workspace) · the 15+ agents (name the
     real ones) · the WordPress AI Agent + Power Mode · free 20,000 tokens for
     hosting clients · honest trade-offs · FAQ
   - Links: → `/ai-agent-wordpress-guide`, → `/`

2. **`src/app/ai-ecommerce-builder-review/`** — CTA key `aiEcommerceBuilder`
   - Target: "SiteGround AI ecommerce builder review"
   - H1: "SiteGround AI website & ecommerce builder review"
   - Sections: what it is · AI for copy/images/layout · site → store path ·
     who it suits · honest trade-offs (keep claims conservative) · FAQ
   - Links: → `/launch-online-store-with-ai`, → `/`

3. **`src/app/coderick-ai-vs-lovable/`** — CTA key `coderickAi`
   - Target: "Coderick AI vs Lovable"
   - H1: "Coderick AI vs Lovable: which vibe coding tool ships real apps?"
   - Sections: quick verdict · how each works · hosting & deployment difference
     (Coderick's edge: hosted/production-ready on SiteGround) · who should pick
     which · FAQ
   - **Verify** any Lovable-specific claim by web search; cite source in a
     comment. Be fair, not promotional.
   - Links: → `/coderick-ai-review`, → `/`

---

## Phase 2 — How-to / high-intent pages (where buyers convert)

4. **`src/app/ai-agent-wordpress-guide/`** — CTA key `sitegroundAiStudio`
   - Target: "how to manage WordPress with SiteGround AI Agent"
   - Step-by-step: connect plugin → example chat tasks (update plugins, edit a
     post, bulk WooCommerce edits) → Power Mode safety → multi-site. FAQ.
   - Links: → `/ai-studio-review`, → `/`

5. **`src/app/coderick-ai-build-a-crm/`** — CTA key `coderickAi`
   - Target: "how to build a CRM with Coderick AI"
   - Walk the idea → chat → live internal tool flow at a conceptual level
     (no fabricated UI/screenshots). FAQ.
   - Links: → `/coderick-ai-review`, → `/`

6. **`src/app/launch-online-store-with-ai/`** — CTA key `aiEcommerceBuilder`
   - Target: "launch an online store with AI in a day"
   - Practical sequence using the builder's AI for copy/images/layout. FAQ.
   - Links: → `/ai-ecommerce-builder-review`, → `/`

---

## Phase 3 — Remaining cluster pages (lower priority, same patterns)
- `src/app/coderick-ai-export-code/` — "can you export code from Coderick AI"
  (answer honestly; verify capability before claiming yes/no). CTA `coderickAi`.
- `src/app/ai-studio-vs-chatgpt-plus/` — "SiteGround AI Studio vs ChatGPT Plus"
  (the multi-model-under-one-subscription angle). CTA `sitegroundAiStudio`.
- `src/app/siteground-ai-studio-free-tokens/` — "how far do 20,000 free tokens go".
  CTA `sitegroundAiStudio`.
- `src/app/coderick-ai-vs-bolt/`, `src/app/coderick-ai-vs-v0/` — comparison pages.
  CTA `coderickAi`.

---

## Definition of done (per page)
- Uses `DisclosureBar` (via layout) + footer disclosure, `TrialCTA`, `FaqSection`.
- Unique `metadata` (title/description/canonical) + FAQ JSON-LD.
- CTA uses `<AffiliateLink>` / `<TrialCTA>` with the correct key from
  `src/config/affiliate-links.ts`.
- Internal links to hub + home; hub updated to link to the new page.
- No invented facts; any non-CLAUDE.md claim has a `// source:` comment.
- `npm run build` passes; no `localStorage`/client-only hacks.
