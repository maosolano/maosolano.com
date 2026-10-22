# Design system — maosolano.com

Short and practical. Live reference at [`/styleguide`](src/pages/styleguide.astro)
(not in the menu, `noindex`).

The look is a pen sketch on paper: white ground, ink text, 1px lines, square
corners, generous white space. Lime is the only accent, and it is a fill. No
shadows, no gradients, no animation beyond the menu opening.

---

## 1. Tokens

Everything lives in [`src/styles/tokens.css`](src/styles/tokens.css), in two
layers. **Components may only reference the semantic layer.** Touching a base
value repaints the whole site; touching a component does not.

### Colour

Base palette: a blue-tinted `--slate-*` ramp (900, 850, 800, 700, 500, 300,
100, 50), `--white`, and two limes (`--lime-500`, `--lime-400`).

| Semantic | Base | Job |
|---|---|---|
| `--color-bg` | `--white` `#FFFFFF` | Page background |
| `--color-surface` | `--slate-50` `#F2F4FF` | Surfaces on the background |
| `--color-border` | `--slate-300` `#BEC5E2` | Borders, dividers |
| `--color-border-subtle` | `--slate-100` `#E6EAFC` | Dividers inside a block |
| `--color-text` | `--slate-900` `#202332` | Body text |
| `--color-heading` | `--slate-800` `#353A4F` | All headings, `h1`–`h6` |
| `--color-text-muted` | `--slate-500` `#616885` | Secondary text, dates |
| `--color-underline` | `--slate-900` | Link underlines, emphasis rules |
| `--color-accent` | `--lime-500` `#C8FF4D` | Fill: hover, highlight, active state |
| `--color-accent-strong` | `--lime-400` `#C1FF72` | Fill on button hover |
| `--color-focus` | `--slate-900` | Focus ring |

### Colour rules

- **Lime is a fill, never text and never a line.** On white it is 1.2:1. Put
  `--color-text` on top of it (13:1). For a line that must be seen — an
  underline, a quote rule, a card edge — use `--color-underline`.
- **External links open in a new tab** (`target="_blank" rel="noopener noreferrer"`).
  In templates use `{...linkAttrs(href)}` from `i18n/ui.ts`; Markdown/MDX links
  get it from the rehype plugin in `astro.config.ts`. Internal links stay in the
  same tab. Any new external link must follow this.
- **Links** are `--color-text` with a `--underline-thickness` (3px)
  `--color-underline` underline. On hover the lime becomes the *background*.
- **The active menu item** uses that same lime block.
- **Focus** is `2px solid --color-focus` with 2px offset, on everything
  interactive. Never remove it.
- All text meets AA. `--color-text-muted` is 5.5:1 on white; do not use it for
  text smaller than `--text-sm`.

### Type

```
--font-sans: "Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif
```

Self-hosted through `@fontsource-variable/space-grotesk` (imported in
`Layout.astro`); weights 400, 500 and 700 via `--weight-regular`,
`--weight-medium`, `--weight-bold`.

The scale steps by roughly 1.25. Mobile (<800px) shrinks every step but
`--text-sm` and `--text-xs`.

| Token | Desktop | Mobile | Used for |
|---|---|---|---|
| `--text-3xl` | 3rem | 2.375rem | Display (Home name) |
| `--text-2xl` | 2.25rem | 1.875rem | `h1` |
| `--text-xl` | 1.75rem | 1.5625rem | `h2` |
| `--text-lg` | 1.375rem | 1.25rem | `h3`, lead, card titles |
| `--text-base` | 1.125rem | 1.0625rem | Body |
| `--text-sm` | 0.9375rem | same | Dates, metadata, captions |
| `--text-xs` | 0.8125rem | same | Labels (caps) |
| `--text-2xs` | 0.6875rem | same | Dense labels: case studies, tooltips |

Line height and tracking are tokens too: `--leading-tight` (1.1, display and
`h1`), `--leading-title` (1.2), `--leading-snug` (1.3), `--leading-sm` (1.5),
`--leading-body` (1.6); `--tracking-display` (−0.03em), `--tracking-h1`
(−0.02em), `--tracking-h2` (−0.01em), `--tracking-label` (0.08em).

### Type rules

- **One family.** Space Grotesk for everything: name, menu, headings, body.
- **Headings are sentence case**, bold (`h3` medium), with the tight tracking
  above. Uppercase is only for labels at `--text-xs` and `--text-2xs`, with
  `--tracking-label`.
- **Headings are `--color-heading`, not `--color-text`** — a slightly softer
  ink. A linked heading inherits that colour instead of the link colour, so
  card and post titles match the headings around them.
- UI text (menu, buttons, meta labels) uses `--weight-medium`. Body is
  `--weight-regular`.
- **No italic face.** Any `<em>` is a browser-synthesised oblique. Prefer
  weight, a rule, or spacing to set something apart.
- Body is 18px / 1.6. It is set on `body`; do not override per component.

### Spacing, line, layout

`--space-1` … `--space-8` on a 4px base (4, 8, 12, 16, 24, 32, 48, 64).
Use these; never a bare pixel value.

`--border-width: 1px` · `--radius: 0` (square, by design) ·
`--content-max: 720px` · `--tap-target: 44px`

`--breakpoint-md: 800px` is **documentation only** — custom properties do not
work inside `@media`, so 800px is hard-coded in the media queries. Change both.

---

## 2. Components

All in `src/components/`. Each owns its styles in a scoped `<style>` block.
There are no global utility classes.

### `Nav.astro`
The whole chrome: name, menu, language switch. Rendered once by the layout —
never place it yourself. The name is a link home, not a heading.
- **≥800px** — sticky header, one row: name left, menu and language switch
  right. The current section is the lime block, including its sub-pages.
- **<800px** — top bar with a real `<button>` (`aria-expanded`, `aria-controls`,
  visible "Menú" label, 44px). Escape closes it and returns focus; choosing a
  link closes it.
- **Progressive enhancement:** the collapsed state only exists under `html.js`,
  set by an inline script in `<head>` before first paint. With no JS the menu
  renders expanded and the button never appears, so links stay reachable.

### `LangSwitch.astro`
The `ES / EN` pair. Takes `altHref` — the same page in the other language,
computed by the layout from the route table. Never build the URL by rewriting
strings.

### `ProjectCard.astro`
A project: title above, then the image and the text. The text block is a slot —
Home passes the summary, Projects passes the rendered Markdown body. Falls back
to a bordered box with the project name when the image is missing.

Three layouts, set with `layout`:
- `"split"` (default) — image left at 60%, text right. For a one-line summary.
- `"stacked"` — both at full column width, capped at 68ch. For the full body:
  at 40% of the content width the measure drops to about 33 characters, which
  is too narrow to read comfortably.

- `"tile"` — image on top (16:10), title, one-line summary and a "see details →"
  line. The whole card is one link (the title link is stretched over it); hover
  turns the card lime. For a three-up grid on Home.

All collapse to one column below 800px, so the prop only matters on desktop.

### `Home.astro`
The home page, shared by `/` and `/en` (`lang` prop): intro (h1, copy in
`intro`, two buttons), featured projects as `tile` cards, About and Contact
summaries. Pages are just `Layout wide` + `Home`.

### `Carousel.astro`
A horizontal row of items: native overflow scroll with snap, each item at
`min(88%, 26rem)` so the next one peeks in. Items keep their own height. The track is a labelled, focusable
region, so arrow keys scroll it. Previous/next buttons step one item, appear
only under `html.js`, and jump without animation. Takes `label`, `prevLabel`,
`nextLabel`.

### `Recommendation.astro`
A LinkedIn recommendation card on About, built to sit in a `Carousel`: the
quote, then name, role and how we worked together. Long ones are excerpts, cuts
marked with […]. The data lives in `recommendations` in `ui.ts`, verbatim in the
language it was written in plus a translation. When the page shows the
translation, the component says so and keeps the original behind a native
`<details>` (with `lang` set), so it opens without JS.

### `PostList.astro`
The Lab index: title, date, one-line summary, newest first. Handles its own
empty state via `emptyLabel`.

### `Prose.astro`
Wraps rendered Markdown in a Lab post. Caps the measure at 68ch and sets the
vertical rhythm. Use it for long-form only — not for a paragraph on a page.

---

## 3. Routing and copy

- **`src/i18n/ui.ts` is the single source of truth for URLs.** The `routes`
  table drives the menu, the language switch, and the `hreflang` tags. Add a
  page there first, then build it.
- **Interface labels and page copy live in `ui.ts` too**, Spanish and English
  side by side, so the two cannot drift. Pages stay markup.
- Spanish is the default locale and sits at the root. English is under `/en`.

---

## 4. Case studies

A project can have a case study: a standalone page with **its own look**, not
this system's. It is built at `/casos/<slug>/` and embedded (iframe, full
height) on the project page, which finds it by id — no flag needed.

- **Content** — `src/content/casos/<lang>/<slug>.mdx`, same id as the project.
  Structured blocks (decisions, tour, tools, stats, artifacts) live in the
  frontmatter; the MDX body holds the prose and places the blocks.
- **Look** — `src/styles/caso.css`, shared by every case: VISTA's neutrals
  and status colours, and this site's lime for everything clickable (links,
  link cards, buttons), never as text. It imports `tokens.css` and takes the
  lime, focus ring, underline thickness, spacing, type scale, leading and
  tracking from it; its own font families (Newsreader, IBM Plex), weights,
  radii and shadows stay local. The project's `palette` in the
  frontmatter sets only its principal colour (`accent-*`, `on-accent`,
  `spot*`; every key required). Always light.
- **Blocks** — `src/components/caso/`: `Section`, `Pull`, `Callout`,
  `Decisions`, `Tour`, `Tools`, `Stats`, `Compare`, `Artifacts`. One-off
  pieces, like a hand-drawn diagram, go in `src/components/caso/<slug>/`.
- **Short page, long artifact** — the page is the scannable version: bullets
  with a bold lead, one idea each, numbers as digits. In `Decisions`, `pick`
  is the choice in a few words (bold) and `why` the reason. The full text
  lives in a Claude artifact set in `extended` (`href`, `label`); pass
  `extended={frontmatter.extended}` to every `Section` and it ends with a
  link there. The artifact must be shared “anyone with the link”.
- **Screenshots** — `public/casos/<slug>/img/`. Tour coordinates are in the
  screenshot's 1440×900 space.
- **Drafts** — `draft: true` builds the case in `astro dev` only, embedded on
  its project page there; production skips it. Remove the flag to publish.
- Quote YAML values that contain a comma inside `{ … }`, or they get cut.

## 5. Adding things

### A new token
1. If it is a colour, add the raw value to the **base** layer *and* a semantic
   name that says what it is for. If there is no job, there is no token.
2. Otherwise add it to the matching scale rather than inventing a new one.
3. Add it to the table above and to `/styleguide`.

### A new component
1. Check `Nav`, `ProjectCard`, `Carousel`, `Recommendation`, `PostList` and `Prose` first — most needs are a
   slot or a prop on something that exists.
2. New file in `src/components/`, scoped `<style>`, semantic tokens only.
3. No client JS unless it genuinely needs it, and it must degrade without it.
4. Any user-facing string goes in `ui.ts` in both languages.
5. Add it to `/styleguide` and to the component list above.

### A new page
1. Add the key and both URLs to `routes` in `ui.ts`.
2. Add it to `navOrder` if it belongs in the menu.
3. Build both language versions. Pass `pageKey` to the layout so the active
   menu state and `hreflang` work.

### Checklist before shipping
- [ ] Semantic tokens only; no raw hex, no bare px
- [ ] Lime only as a fill with ink on top; lines use `--color-underline`
- [ ] Headings in sentence case, everything in Space Grotesk; no italics
- [ ] Focus visible on everything interactive
- [ ] 44px minimum touch targets on mobile
- [ ] Meaningful `alt` on every image
- [ ] Both languages present; `hreflang` resolves
- [ ] Works with JavaScript disabled
