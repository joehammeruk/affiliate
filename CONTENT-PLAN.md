# HostAdvance — Content, SEO & Setup Plan

This is the playbook behind the site. The site itself (the code) is the easy
part; ranking and staying compliant is where the money actually comes from.

---

## 1. The longtail keyword clusters

You will lose head-on for "best web hosting" or "AI website builder". You win
by owning narrow, high-intent, low-competition phrases around three brand-new
products that almost nobody has written about yet. Build one page per phrase.

### Cluster A — Coderick AI (hub: /coderick-ai-review, built for you as a template)
- "Coderick AI review"
- "is Coderick AI worth it"
- "Coderick AI vs Lovable / vs Bolt / vs v0" (one comparison page each)
- "how to build a CRM with Coderick AI"
- "Coderick AI pricing explained"
- "Coderick AI free trial — what you get"
- "can you export code from Coderick AI"  ← honest, high-intent

### Cluster B — SiteGround AI Studio
- "SiteGround AI Studio review"
- "how to manage WordPress with the AI Agent" (step-by-step, screenshots)
- "SiteGround AI Agent for WooCommerce tutorial"
- "manage multiple WordPress sites with one chat"
- "SiteGround AI Studio vs ChatGPT Plus" (the multi-model angle)
- "what are the 15 AI agents in SiteGround AI Studio"
- "SiteGround AI Studio free tokens — how far do 20,000 go"

### Cluster C — AI Website & Ecommerce Builder
- "SiteGround AI ecommerce builder review"
- "launch an online store with AI in a day"
- "AI website builder for a local business"
- "SiteGround builder vs WordPress — which to pick"

**Rule:** each page answers ONE question completely and honestly, links to the
relevant partner trial via `<AffiliateLink>` (using the correct key from
`src/config/affiliate-links.ts`) 2–3 times, and internally links to its cluster hub.

---

## 2. Why honest beats hyped (this is the whole strategy)

Three reasons the "trustful" angle is the profitable one:
1. **These products are weeks old.** Real, accurate detail is scarce — Google
   rewards the page that actually explains the thing. Hype pages all read the
   same and rank nowhere.
2. **Conversions follow trust.** A reader who feels you're levelling with them
   ("here's where it falls short") clicks the trial *more*, not less.
3. **It keeps your account alive.** Fabricated specs and fake reviews are an
   ASA breach and a fast affiliate ban. Everything on the site is grounded in
   SiteGround's own published material — keep it that way as you add pages.

If you can, start the trials yourself and use **your own screenshots**. Original
images signal first-hand experience to both readers and search engines.

---

## 3. How you actually get paid (and what we are NOT doing)

You asked about running the offer "inside HostAdvance with SiteGround's payment
system." That can't be done, and you wouldn't want it:

- Affiliates are **never** given a merchant's payment system. The programme is
  pay-per-sale: you refer, SiteGround sells, SiteGround pays you.
- A checkout on hostadvance.com collecting customers' card details while posing
  as SiteGround would be **payment interception / fraud** — illegal, an instant
  ban, and your referral wouldn't track, so you'd earn nothing anyway.

**The only mechanism that pays you:** visitor clicks a button rendered by
`<AffiliateLink>` → opens your tracked SiteGround URL from
`src/config/affiliate-links.ts` (`rel="sponsored"`) → SiteGround runs the
signup, trial and payment → you're credited. There is no redirect handler on
this domain, no `/go/<slug>` route, and no payment surface on hostadvance.com —
the user always pays on SiteGround.

Commission (confirmed by the official SiteGround Affiliate Team email):
- **60% of first-year revenue** (monthly AND annual plans), **up to £216/sale**,
  on the three new AI products.
- You're credited for **any eligible product** the referred user signs up for —
  not only the one you linked.
- Standard flat hosting commissions are **unchanged**.
- Keep these numbers in your dashboard, **not** on the public site.
- Reminder: buying via your own link doesn't pay out — don't self-refer.

---

## 4. UK disclosure — get this right (you're under ASA/CMA rules)

- Disclosure must be **clear and upfront**, not buried. The site already shows a
  disclosure bar above the fold on every page, plus the footer — keep both.
- On review pages, state the affiliate relationship near the top too (done in
  the template).
- Never imply you are SiteGround. The footer says so explicitly; keep it.

---

## 5. Launch steps (Cursor → Vercel)

1. Open the `hostadvance` folder in Cursor.
2. In the terminal: `npm install` then `npm install @vercel/analytics @vercel/speed-insights`
   (also add `tailwindcss postcss autoprefixer` and run `npx tailwindcss init -p`
   if you scaffolded without Tailwind — choose Tailwind = Yes when creating the app).
3. Paste your real tracked links into **`src/config/affiliate-links.ts`** (one place,
   four keys: `primary`, `coderickAi`, `aiEcommerceBuilder`, `sitegroundAiStudio`).
4. `npm run dev` → open http://localhost:3000 to preview.
5. Push to GitHub, import the repo in Vercel, point `hostadvance.com`'s DNS at Vercel.
6. Add Google Search Console, submit a sitemap, and start publishing one cluster
   page a week.

---

## 6. Files in this project

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Landing page (accurate copy, disclosure bar, routed CTAs) |
| `src/app/layout.tsx` | SEO metadata, fonts (Bricolage Grotesque + DM Sans), site-wide disclosure bar |
| `src/app/globals.css` | Tailwind + font wiring + hero mesh/grid texture |
| `src/config/affiliate-links.ts` | **The only place you edit your affiliate links** |
| `src/config/products.ts` | Product copy, themes, and link-key mapping for offer cards |
| `src/components/affiliate-link.tsx` | Typed outbound links (`rel="sponsored"`, `target="_blank"`) |
| `src/components/disclosure-bar.tsx` | Above-the-fold affiliate disclosure |
| `src/components/offer-card.tsx` | Themed product cards with trial CTAs |
| `src/components/product-icon.tsx` | SVG icons per tool |
| `src/components/scroll-link.tsx` | In-page anchor links only (e.g. `#offers`) |

Future content pages (per `BUILD-BRIEF.md`) live under `src/app/<slug>/page.tsx`.
