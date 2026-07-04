# PRODUCT.md

## What this is

Personal portfolio of **Abbas Zein Fakih** — full-stack web development student (Bac+3, MyDigitalSchool Lille) seeking a full-stack work-study placement (alternance) for 2026–2027. Static Astro site deployed to GitHub Pages at `https://abbas-fakih39.github.io`.

## Register

**Brand** — design IS the product. The site's job is to make a recruiter or engineering manager remember one junior developer out of a pile of applications. The visitor impression is the deliverable.

## Audience

- Recruiters and HR at companies in/around Lille offering alternance contracts
- Engineering leads screening candidates (will skim projects + skills in <60s)
- Bilingual: French primary (`/fr/`), English secondary (`/en/`)

## Content structure (fixed — do not add/remove sections)

Single page per language: Hero → About (Bio) → Skills (Arsenal) → Projects (Missions) → Contact → Footer.
All copy lives in `src/i18n/ui.ts`; never hardcode strings in components.

## Non-negotiables

- EmailJS contact form (service_jq5ib7h / template_m3asgjl / key bLECYSz1NM7GcjAev) — inline script preserved verbatim
- CV download at `/cv/mon-cv.pdf`
- Language routing via `src/pages/[lang]/index.astro` + `src/i18n/utils.ts`
- Push to `main` → GitHub Actions auto-deploy

## Design direction

See `DESIGN.md` — "Cobalt Drenched" (July 2026). Type-led, no photography.
