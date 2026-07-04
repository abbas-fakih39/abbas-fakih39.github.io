# DESIGN.md — "Cobalt Drenched" (July 2026)

**Mood:** pre-dawn flight deck — instrument glow against a deep cobalt sky; precise and awake.
**Color strategy:** Drenched — the surface IS the color. The whole site lives on deep cobalt; a single bright cyan "instrument signal" is the only other voice. Type-led, no photography.

## Palette (OKLCH only — tokens in `src/styles/global.css`, mirrored in `tailwind.config.js`)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(0.27 0.085 262)` | deep cobalt site surface |
| `--bg-horizon` | `oklch(0.31 0.09 262)` | top-of-page gradient stop ("pre-dawn horizon") |
| `--surface` | `oklch(0.32 0.09 262)` | raised panels, hover rows, header scrim |
| `--line` | `oklch(0.42 0.09 262)` | rules and borders |
| `--ink` | `oklch(0.965 0.01 262)` | headlines + body text (≥7:1 vs bg) |
| `--muted` | `oklch(0.78 0.045 262)` | secondary text (≥4.5:1 vs bg) |
| `--signal` | `oklch(0.87 0.13 195)` | cyan accent — links, hovers, markers, focus rings, filled CTAs |
| `--signal-ink` | `oklch(0.22 0.06 235)` | text on cyan fills (pale fill → dark text) |
| `--ok` / `--danger` | `oklch(0.85 0.13 155)` / `oklch(0.80 0.12 25)` | form status text on cobalt |

Rules: filled elements are cyan-with-dark-text only. No grays — every neutral carries the 262° hue. No gradients except the single body horizon gradient.

## Typography

One family: **Archivo Variable** (`@fontsource-variable/archivo`, wght 100–900 × wdth 62–125), self-hosted.

- **Display** (`font-display` = Archivo, `font-variation-settings: 'wdth' 120`, wght 800–900): hero name, section titles, project titles, contact CTA. Letter-spacing −0.02em. Clamp ceiling 6rem. `text-wrap: balance`.
- **Body**: Archivo normal width, 400/500, line-height 1.65, ≤70ch.
- **No monospace anywhere.** No tracked-uppercase eyebrow labels. No numbered section markers.

## Section grammar

Every section opens with its display-size title (from `*.title` i18n keys: Bio / Arsenal / Missions / Contact) sitting on a full-width rule that draws in from the left on scroll. That is the only repeated scaffold.

## Signature moves

- **Hero**: left-aligned stacked ABBAS / FAKIH poster type; availability as a plain sentence with cyan dot; cyan filled CV button + underlined text link.
- **Projects**: full-width rows; hover = cyan sweep (background wipes in, text flips to `--signal-ink`).
- **Skills**: group name left, comma-run of items right; items light cyan on hover. No pills.
- **Stats**: written into a bold sentence with cyan numbers — never big-number/small-label tiles.

## Motion (GSAP + Lenis)

- Content is **visible by default**; JS sets initial states at runtime (`gsap.set`/`gsap.from`). Never CSS `opacity:0` initial states.
- Hero: one orchestrated load timeline, `power4.out`, no bounce.
- Scroll: section rule draw-in; reveals varied per content (rows stagger, runs slide). Not one uniform fade.
- `prefers-reduced-motion: reduce` → no Lenis, no GSAP animations. Guard: `matchMedia('(prefers-reduced-motion: reduce)').matches`.

## Interaction

- Focus-visible: 2px `--signal` outline, 2px offset, on every interactive element.
- Touch targets ≥44px.
- Mobile nav: full-screen cobalt overlay, stacked display-size links + language switcher.
