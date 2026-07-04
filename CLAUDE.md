# Portfolio — Abbas Zein Fakih

## Project Overview
Astro JS static portfolio site deployed to GitHub Pages at `https://abbas-fakih39.github.io`.
Bilingual (FR/EN) via `src/i18n/ui.ts`. All text content lives there — never hardcode strings in components.
Product context lives in `PRODUCT.md`; the full design system lives in `DESIGN.md`. Read both before design work.

## Design: "Cobalt Drenched" (Completed July 2026)
- **Strategy:** Drenched — deep cobalt is the whole site surface; a single cyan "signal" accent. Type-led, no photography.
- **Tokens** (OKLCH, in `src/styles/global.css`, mirrored as Tailwind colors `bg/surface/line/ink/muted/signal/signal-ink`): bg `oklch(0.27 0.085 262)` · ink `oklch(0.965 0.01 262)` · muted `oklch(0.78 0.045 262)` · signal cyan `oklch(0.87 0.13 195)` (fills carry dark `--signal-ink` text)
- **Font:** Archivo Variable only (`@fontsource-variable/archivo/wdth.css`, self-hosted). Display style = `.type-display` (font-stretch 125%, wght 850, letter-spacing −0.02em). No monospace, no second family.
- **Section grammar:** display-size title (from `*.title` i18n keys) over a full-width `.section-rule` that draws in on scroll. Never numbered markers or tracked-uppercase eyebrow labels.
- **Signatures:** left-aligned ABBAS/FAKIH poster hero with masked line reveal · cyan-sweep hover on project rows · comma-run skills (no pills) · stats written into a sentence with cyan numbers.

## Tech Stack
- Astro 6 (static output) + React + Tailwind CSS 3
- GSAP 3.15.0 (npm, module imports in component `<script>` blocks)
- Lenis 1.3.23 (smooth scroll, initialized in BaseLayout.astro, skipped under reduced motion)
- Framer Motion 12 (installed, used in ScrollReveal.tsx — not integrated into pages)

## Dev Commands
```bash
npm run dev      # local dev server → http://localhost:4700 (4321 is Windows-reserved on this machine)
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
Content is **visible by default** — no CSS `opacity:0` initial states. All animations use `gsap.from()` so JS sets initial states at runtime (no-JS still renders everything). Every component script and the Lenis init are guarded by `matchMedia('(prefers-reduced-motion: reduce)')`. Easing: `power4.out`, no bounce.

Component script structure:
```astro
<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) { /* gsap.from(...) animations */ }
</script>
```

## Accessibility baseline (don't regress)
- All text roles pass WCAG AA on cobalt (`--muted` is the floor for body-size text)
- Mobile nav: full-screen overlay in Header.astro (hamburger, aria-expanded, Escape closes)
- Focus-visible: 2px cyan outline globally; touch targets ≥44px

## What Could Still Be Done (Optional Enhancements)
- [ ] og:image (1200×630 cobalt/cyan card) for richer social previews
- [ ] Real project screenshots to replace the unused stock logos in `public/images/`
- [ ] Remove unused components: `src/components/ui/*` (TextScramble, TiltCard, Typewriter, ScrollReveal) and unused i18n keys (`about.terminal.*`, `hero.greeting`, `hero.desc`, `projects.featured`)
