# Portfolio — Abbas Zein Fakih

## Project Overview
Astro JS static portfolio site deployed to GitHub Pages at `https://abbas-fakih39.github.io`.
Bilingual (FR/EN) via `src/i18n/ui.ts`. All text content lives there — never hardcode strings in components.

## Design: Editorial Brutalist (Completed May 2026)
- **Colors:** `#0A0A0A` bg · `#F2F2F2` text · `#E2FF00` accent · `#666666` muted · `#2A2A2A` rules/dim
- **Fonts:** Fraunces (display/headlines) · Inter (body) · JetBrains Mono (labels/mono)
- **Pattern:** Oversized stacked name in Hero, horizontal ruled dividers between every section, numbered project rows, 3-column ruled skills grid

## Tech Stack
- Astro 6 (static output) + React + Tailwind CSS 3
- GSAP 3.15.0 (npm, module imports in component `<script>` blocks)
- Lenis 1.3.23 (smooth scroll, initialized in BaseLayout.astro)
- Framer Motion 12 (installed, used in ScrollReveal.tsx — not yet integrated into pages)

## Dev Commands
```bash
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # serve built output (production-accurate)
```
Push to `main` → GitHub Actions auto-deploys.

## Critical: Do Not Break
- **EmailJS** in `Contact.astro`: service `service_jq5ib7h`, template `template_m3asgjl`, key `bLECYSz1NM7GcjAev` — copy the `<script is:inline>` block verbatim if rewriting Contact
- **CV download** links to `/cv/mon-cv.pdf` (file at `public/cv/mon-cv.pdf`)
- **i18n utils** in `src/i18n/utils.ts` — untouched, used by every component
- **Language routing** in `src/pages/[lang]/index.astro` — generates `/fr/` and `/en/` at build time

## Animation Pattern
All sections use CSS initial states (`.fade-up { opacity:0; transform:translateY(30px) }` etc. in `global.css`) and GSAP ScrollTrigger `gsap.to()` to animate in. Hero uses timeline on page load. Do NOT use `gsap.from()` on elements that have CSS initial states — use `gsap.to()` instead.

Component script structure:
```astro
<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  // animations here
</script>
```

## What Was Done (Redesign Session)
- [x] tailwind.config.js — new palette (bg/fg/accent), Fraunces display font, fluid type scale
- [x] src/styles/global.css — new CSS variables, animation initial states, form-editorial class
- [x] src/layouts/BaseLayout.astro — Fraunces font, Lenis + GSAP init, removed GSAP CDN
- [x] src/components/Header.astro — sticky top bar with nav, FR/EN
- [x] src/components/LanguageSwitcher.astro — updated to new color tokens
- [x] src/components/Hero.astro — stacked ABBAS/ZEIN/FAKIH. with ruled lines + GSAP curtain reveal
- [x] src/components/About.astro — stats (3/5+/10+) in ruled columns + two text blocks
- [x] src/components/Skills.astro — 3-column ruled grid (Core/Complementary/Workflow) + cando
- [x] src/components/Projects.astro — numbered editorial rows (01–05) with tech + arrow
- [x] src/components/Contact.astro — "Construisons quelque chose." + split form/links layout
- [x] src/components/Footer.astro — single ruled row, copyright + end of transmission

## What Could Still Be Done (Optional Enhancements)
- [ ] Integrate `ScrollReveal.tsx` React component into About text blocks (`client:load`)
- [ ] Add hover accent color (`#E2FF00`) on project row titles (currently transitions on group-hover — verify it works in browser)
- [ ] Add a photo somewhere (currently removed from hero; could add to About stats row)
- [ ] Add Open Graph meta tags for social sharing preview
- [ ] Add favicon
- [ ] Consider `npm run preview` over `npm run dev` for GSAP-accurate animation testing
