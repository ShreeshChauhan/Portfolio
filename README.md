# Shreesh Chauhan — Portfolio

Hero + Featured Work + Stats/About + Footer, built for Next.js (App Router) with Tailwind CSS and Framer Motion, structurally inspired by rashijaindesign.com but built around a different visual language: an animated node-graph signature motif that nods to your GraphSAGE/transaction-network work.

## Setup

If starting fresh:

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=false
cd portfolio
npm install framer-motion
```

Then drop these files in, overwriting the generated ones:

```
app/layout.tsx
app/page.tsx
app/globals.css
components/Nav.tsx
components/Hero.tsx
components/GraphBackground.tsx
components/FeaturedWork.tsx
components/Stats.tsx
components/Footer.tsx
tailwind.config.ts
```

Make sure `tsconfig.json` has the `@/*` path alias (create-next-app sets this up by default):

```json
"paths": { "@/*": ["./*"] }
```

## Notes

- **Fonts** load via `next/font/google` in `app/layout.tsx` (Space Grotesk, IBM Plex Mono, Inter) — no extra setup needed, Next.js self-hosts them.
- **Resume link**: `Hero`/`Nav` point to `/Shreesh_Chauhan_Resume.pdf` — drop that file in your `public/` folder (or update the href).
- **GraphBackground** is a plain `<canvas>` animation (no dependencies), respects `prefers-reduced-motion`, and redraws responsively on resize.
- **Stats counters** animate once, on scroll into view, using Framer Motion's `useInView` + `animate`.
- Swap the placeholder stats/metrics/links (email, GitHub, LinkedIn) if anything changes — they're pulled directly from your content spec.
- Next section to consider: an "About Me" detail page and a project detail/case-study template, if you want depth beyond the single-page scroll.