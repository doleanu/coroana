# Hotel & Restaurant Coroana: website

**Live:** https://hotelcoroana.ro

Website for Hotel & Restaurant Coroana, a 43-room hotel in Iași, Romania, with a restaurant and events (weddings). It replaced the hotel's previous WordPress site.

## What it does

- **5 languages:** Romanian at `/` (default), plus English, Italian, Spanish and German at `/en`, `/it`, `/es` and `/de`, with hreflang alternates.
- **Pages:** home (hotel, restaurant, events, contact), weddings (`/nunta`), privacy policy (`/confidentialitate`).
- **SEO:** structured data (Hotel, Restaurant, breadcrumbs), sitemap, robots, `llms.txt`, canonical URLs.
- **WordPress migration:** URLs from the old site are permanently redirected in `next.config.mjs`, so old links and search results keep working. DNS was moved to Vercel without interrupting the hotel's email.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Vercel

## Structure

| Path | What's there |
|---|---|
| `src/app` | Routes: Romanian at the root, the other languages under `[locale]` |
| `src/lib/dict.ts` | All copy, per language |
| `src/components` | Page sections, JSON-LD, language sync |
| `next.config.mjs` | Redirects for legacy URLs |

## Run locally

```bash
npm install
npm run dev
```

Deployed on Vercel with `vercel deploy --prod`.

---

Built and maintained by Bogdan & Petruța at [WebHosteleros](https://www.webhosteleros.es). The code is shared as a portfolio sample. The brand, photos and texts belong to Hotel Coroana.
