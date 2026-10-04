# Design System — maosolano.com

Reference for visual language, component rules, and front-end decisions.
Live preview at `/styleguide` (not linked in the nav).

---

## Principles

1. **Legibility first** — comfortable reading at all sizes; never sacrifice contrast for aesthetics.
2. **Neutral base, intentional accent** — the palette stays warm-neutral; colour carries meaning, not decoration.
3. **Motion earns its place** — transitions only where they reduce cognitive load or signal state change.
4. **Spanish-default** — ES is the primary locale; EN mirrors it exactly.

---

## Tokens (`src/styles/tokens.css`)

All values live as CSS custom properties. Never hard-code a colour, size, or timing value — reference a token.

### Colour
| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#f9f8f5` | `#141310` | Page background |
| `--color-surface` | `#ffffff` | `#1e1c19` | Cards, modals |
| `--color-border` | `#e2ddd6` | `#2e2b26` | Dividers, outlines |
| `--color-text` | `#1a1916` | `#f0ede8` | Primary text |
| `--color-text-muted` | `#6b6760` | `#9e9a94` | Secondary text, meta |
| `--color-accent` | `#2d5be3` | `#6b8fef` | Links, CTAs, focus |
| `--color-accent-hover` | `#1e44c0` | `#8aa5f4` | Hover state |

Dark mode is automatic via `@media (prefers-color-scheme: dark)`.

### Typography
- **Sans**: `Inter` → system-ui fallback
- **Mono**: `JetBrains Mono` → ui-monospace fallback
- Scale: `--text-xs` (0.75rem) → `--text-4xl` (2.25rem)
- Weights: normal (400), medium (500), semibold (600), bold (700)
- Line heights: tight (1.25) for headings, normal (1.5) body, relaxed (1.75) long-form

### Spacing
Base unit 0.25rem. Scale: 1 · 2 · 3 · 4 · 6 · 8 · 12 · 16 · 24.
Use `--space-*` tokens everywhere; no arbitrary px values.

### Radius
- `--radius-sm` 4px — tags, small inputs
- `--radius-md` 8px — cards, buttons
- `--radius-lg` 16px — modals, large containers

---

## Layout

- **Max content width**: `--max-width-content` (1200px)
- **Prose width**: `--max-width-prose` (68ch)
- **Side gutter**: `--space-6` (1.5rem) on mobile
- **Nav height**: `--nav-height` (3.5rem), sticky

Grid: CSS `auto-fill` with `minmax(320px, 1fr)` for project and lab listings.

---

## Components

### Nav (`Nav.astro`)
- Sticky, `z-index: 100`
- Desktop: horizontal link list + `LangSwitch`
- Mobile (≤640px): hamburger button toggles `#mobile-menu` overlay
- Hamburger animates to ✕ via `aria-expanded`
- Active link detected via `Astro.url.pathname` comparison

### LangSwitch (`LangSwitch.astro`)
- Small outlined pill: current lang → opposite lang
- URL mapping in the component; update when adding new pages
- `hreflang` attribute set on the anchor

### ProjectCard (`ProjectCard.astro`)
- Optional cover image (16:9)
- Year + tags row, title, description
- Entire card border lifts on hover
- No JS required

---

## i18n (`src/i18n/ui.ts`)

- `defaultLang`: `"es"` — no URL prefix
- English: `/en/*` prefix
- All UI strings in `ui.ts`; never inline copy in `.astro` files
- `useTranslations(lang)` returns a typed `t()` helper
- `getLocalePath(lang, path)` generates the right URL for the current locale

---

## Content Collections (`src/content/`)

```
projects/
  es/  ← ES markdown, frontmatter: title, description, year, tags, image?, order
  en/  ← EN mirror
lab/
  es/  ← ES markdown, frontmatter: title, description, date, tags, draft?
  en/  ← EN mirror
```

Schema defined in `src/content/config.ts`. Every project has a matching EN file.

---

## File conventions

- Page files match their URL slug: `proyectos.astro` → `/proyectos`
- EN pages live under `src/pages/en/` and mirror ES names in English
- Styleguide at `/styleguide` — excluded from nav, sitemap, and search
- No client JS unless strictly necessary; progressive enhancement
- Scoped `<style>` in every component; never global utility classes

---

## Accessibility checklist

- [ ] Colour contrast AA (4.5:1 text, 3:1 large text / UI)
- [ ] All interactive elements keyboard-focusable
- [ ] `aria-label` on icon-only controls
- [ ] `aria-expanded` / `aria-hidden` toggled on hamburger menu
- [ ] `hreflang` on `<LangSwitch>`
- [ ] Images have meaningful `alt` or `alt=""` for decorative

---

_Update this file alongside any token, component, or layout change._
