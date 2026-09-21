# Senior List (working name) — San Antonio Day-1

Bilingual assisted living + memory care **directory scaffold** for San Antonio MSA.

## Draft ≠ publish · HOLD

This repo is a **draft**. It is **not** a public production launch.

- Do **not** claim the site is live.
- `robots.ts` disallows all crawlers; pages send `noindex`.
- No ads, no Stripe, no owner outreach, no auto-emails.
- Seed rows are **Founding listings**. **TULIP license verify still pending.**
- No nursing-home directory. No “best assisted living San Antonio” / #1 claims.
- No fake review counts or invented per-community prices.

Publish any money URL only with an explicit OK (Emilio).

## Stack

Next.js App Router + TypeScript + Tailwind. Local seed (`src/data/facilities.json`) generated from `SEED-SA-FACILITIES`. No auth/DB required. Supabase remains a later stub (`/admin`).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

Optional: `NEXT_PUBLIC_SITE_URL` for absolute hreflang / sitemap URLs (defaults to `http://localhost:3000`).

## P0 routes

| URL | Role |
| --- | --- |
| `/` | SA directory hub (EN + ES CTAs) |
| `/san-antonio` | City hub · filters: suburb · AL vs memory · Spanish-speaking |
| `/es/san-antonio` | ES twin + hreflang |
| `/san-antonio/stone-oak` | Suburb hub |
| `/san-antonio/westover-hills` | Suburb hub |
| `/san-antonio/alamo-ranch` | Suburb hub |
| `/san-antonio/medical-center` | Suburb hub (near-hospital) |
| `/san-antonio/memory-care` | Specialty |
| `/san-antonio/spanish-speaking` | Bilingual filter hub |
| `/san-antonio/assisted-living-cost` | Cost guide (honest ranges, no fake quotes) |
| `/facilities/{slug}` | Facility profile |
| `/r/{slug}` · `/r/{slug}/lp` | Branded stubs |
| `/list-your-community` | B2B stub (no Stripe) |
| `/quiz` | Shortlist quiz → local state + console / `/api/leads` (no email) |
| `/privacy` `/terms` | Legal stubs |

Titles / metas / H1 on money URLs follow `SEO-TITLES-METAS-SA-D1.md` exactly where that doc provides them.

## Featured (max 3, max 1 Medical Center)

Tier A editorial picks on Day-1 (no Medical Center slot used):

1. The Haven In Stone Oak
2. The Heritage At Westover Hills
3. Landon Ridge – Alamo Ranch

## Seed

50 founding listings in `src/data/facilities.json`. Spanish-speaking filter is honest: only seed rows with a bilingual **signal** (staff language unverified). Lopez Assisted Living Homes is the current signal.

## Forms

Lead and quiz posts go to a server action or `POST /api/leads`. Both log only. **Nothing is emailed** to families or operators.
