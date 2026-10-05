# Design system — maosolano.com

Short and practical. Live reference at [`/styleguide`](src/pages/styleguide.astro)
(not in the menu, `noindex`).

The look is a pen sketch on paper: white ground, ink text, 1px lines, square
corners, generous white space. Yellow is the only accent. No shadows, no
gradients, no animation beyond the menu opening.

---

## 1. Tokens

Everything lives in [`src/styles/tokens.css`](src/styles/tokens.css), in two
layers. **Components may only reference the semantic layer.** Touching a base
value repaints the whole site; touching a component does not.

### Colour

| Semantic | Base | Job |
|---|---|---|
| `--color-bg` | `--white` `#FFFFFF` | Page background |
| `--color-surface` | `--gray-100` `#EBEBEB` | Surfaces on the background |
| `--color-border` | `--gray-300` `#C0C0C0` | Borders, dividers |
| `--color-border-subtle` | `--gray-200` `#D6D6D6` | Dividers inside a block |
| `--color-text` | `--ink-900` `#020A12` | Body text |
| `--color-heading` | `--gray-800` `#4E5459` | All headings, `h1`–`h6` |
| `--color-text-muted` | `--gray-700` `#616569` | Secondary text, dates |
| `--color-accent` | `--yellow-500` `#FBFF0A` | Underlines, highlight, active state |
| `--color-accent-strong` | `--yellow-700` `#C9CC00` | Underline on hover |
| `--color-focus` | `--ink-900` | Focus ring |

### Colour rules

- **Yellow is never text, and never a thin line that carries meaning.** It
  fails contrast on the page background — on white it is worse still, at about
  1.1:1. It is a highlight, not information.
- **Links** are `--color-text` with a `--underline-thickness` (3px)
  `--color-accent` underline. On hover the yellow becomes the *background*.
- **The active menu item** uses that same yellow block.
- **Focus** is `2px solid --color-focus` with 2px offset, on everything
  interactive. Never remove it.
- All text meets AA.

### Type

```
--font-title: "Oswald", "Arial Narrow", system-ui, sans-serif   /* 400, 700 */
--font-body:  "Quattrocento", Georgia, serif                    /* 400, 700 */
```

| Token | Size | Used for |
|---|---|---|
| `--text-2xl` | 2.25rem | `h1` |
| `--text-xl` | 1.875rem | `h2` |
| `--text-lg` | 1.5rem | `h3`, card titles |
| `--text-base` | 1.25rem (1.1875rem mobile) | Body |
| `--text-sm` | 1rem | Dates, metadata |

### Type rules

- **Oswald** for the name, the menu, and every heading. **Quattrocento** for
  everything else.
- **All headings are uppercase**, set once on `h1`–`h6` in `global.css` with
  `--tracking-title` (0.02em). Oswald is condensed and caps need the air.
  `text-transform` is visual only — assistive tech still reads the real casing.
- **Headings are `--color-heading`, not `--color-text`** — a softer grey than the
  body, so a wall of condensed caps does not shout. A linked heading inherits
  that colour instead of the link colour, so card and post titles match the
  headings around them.
- The name and the menu stay **mixed case**. The contrast against caps headings
  is deliberate.
- **Neither family has an italic face.** Any `<em>` is a browser-synthesised
  oblique. Prefer weight, a rule, or spacing to set something apart.
- Body is 20px / 1.55. It is set on `body`; do not override per component.

### Spacing, line, layout

`--space-1` … `--space-8` on a 4px base (4, 8, 12, 16, 24, 32, 48, 64).
Use these; never a bare pixel value.

`--border-width: 1px` · `--radius: 0` (square, by design) ·
`--content-max: 720px` · `--sidebar-width: 240px` · `--tap-target: 44px`

`--breakpoint-md: 800px` is **documentation only** — custom properties do not
work inside `@media`, so 800px is hard-coded in the media queries. Change both.

---

## 2. Components

All in `src/components/`. Each owns its styles in a scoped `<style>` block.
There are no global utility classes.

### `Nav.astro`
The whole chrome: name, menu, language switch. Rendered once by the layout —
never place it yourself.
- **≥800px** — fixed 240px sidebar; name top, menu below, language switch pinned
  to the bottom.
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

Two layouts, set with `layout`:
- `"split"` (default) — image left at 60%, text right. For a one-line summary.
- `"stacked"` — both at full column width, capped at 68ch. For the full body:
  at 40% of the content width the measure drops to about 33 characters, which
  is too narrow to read comfortably.

Both collapse to one column below 800px, so the prop only matters on desktop.

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

## 4. Adding things

### A new token
1. If it is a colour, add the raw value to the **base** layer *and* a semantic
   name that says what it is for. If there is no job, there is no token.
2. Otherwise add it to the matching scale rather than inventing a new one.
3. Add it to the table above and to `/styleguide`.

### A new component
1. Check `Nav`, `ProjectCard`, `PostList` and `Prose` first — most needs are a
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
- [ ] Headings uppercase, body in Quattrocento
- [ ] Focus visible on everything interactive
- [ ] 44px minimum touch targets on mobile
- [ ] Meaningful `alt` on every image
- [ ] Both languages present; `hreflang` resolves
- [ ] Works with JavaScript disabled
