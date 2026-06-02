# Hiliks Technologies — Website

Engineering-led enterprise technology for critical industries, with a flagship Railways practice. India + GCC.

Built with **Next.js 16 (App Router) + React 19**, Three.js hero, custom design system. Deploys on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static-prerendered)
npm start       # serve the production build
```

## Structure

| Path | Purpose |
|------|---------|
| `app/` | Routes (App Router). Server Components by default. |
| `app/page.tsx` | Home (hero, flagship railways, industries, capabilities, why, ecosystem, CTA). |
| `app/industries/[slug]` | Data-driven industry template (7 verticals). |
| `app/solutions/[slug]` | Data-driven capability template (8 solutions). |
| `app/case-studies/` | Filterable case-study explorer (client filter). |
| `app/{about,ecosystem,insights,careers,contact}/` | Standalone pages. |
| `components/` | Nav, Footer, Hero3D, Cursor, ScrollProgress, Reveal, Marquee, CtaBand, PageHero. |
| `lib/site.ts` | **Single source of truth** — company info, verticals, capabilities, partners, nav. |
| `app/globals.css` | Full design system (tokens + components). |
| `_source/` | Original brief: content docx, decks (pptx/pdf), and the original `index.html` prototype. |

## Editing content

Most content lives in `lib/site.ts`. Add a vertical or capability there and its page, nav and footer links generate automatically.

## Design system

Dark ink `#0B0D11` + orange `#F2680E`; fonts Sora + IBM Plex Mono (via `next/font`). Per-vertical accent
colors via CSS vars (`--v-rail`, `--v-telco`, …). Custom cursor, scroll progress, reveal-on-scroll, and a
Three.js network/signal-pulse hero. Honors `prefers-reduced-motion`.

## Roadmap (remaining)

- Upgrade case studies / Insights to MDX or a CMS for non-dev authoring (content currently lives in `lib/case-studies.ts` and `lib/insights.ts`).
- Real engagement data + per-vertical photographic imagery.
- Server-side contact submission (currently opens a routed mailto).
- Analytics + dynamic OG images; Lighthouse / accessibility pass.
- GCC localization considerations; deploy to Vercel.

_Done: per-vertical animated glyphs, case-study & insight detail pages, sitemap.xml, robots.txt._
