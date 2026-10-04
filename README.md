# maosolano.com

Personal portfolio and lab exploring UX, AI, creativity, and digital product
design. Bilingual: Spanish at the root, English under `/en`.

- Design system rules: [`DESIGN.md`](DESIGN.md) · live reference at `/styleguide`
- How the site was built: [`process/`](process/)

## Tech stack

- [Astro](https://astro.build) — static output, no UI framework
- TypeScript
- Plain CSS with custom properties (no Tailwind)
- Deploys to Vercel with zero config

## Running it

```bash
npm install
npm run dev
```

Dev server at http://localhost:4321.

```bash
npm run build      # static site into dist/
npm run preview    # serve the built site locally
```

## Project structure

```
src/
├── assets/        projects/ and lab/ images, optimised at build time
├── components/    Nav, LangSwitch, ProjectCard, PostList, Prose
├── content/       projects/{es,en}/ and lab/{es,en}/ Markdown
├── i18n/ui.ts     routes, interface labels, and page copy in both languages
├── layouts/       Layout.astro — the shell, meta tags, and hreflang
├── pages/         Spanish at the root, English under en/
└── styles/        tokens.css, global.css
```

## Pages

| Spanish | English |
|---|---|
| `/` | `/en` |
| `/proyectos` | `/en/projects` |
| `/sobre-mi` | `/en/about` |
| `/lab` | `/en/lab` |
| `/contacto` | `/en/contact` |

`/styleguide` is the design system reference. It is not in the menu and is
marked `noindex`.

## Adding a Lab post

Write both languages. Create the Spanish file in `src/content/lab/es/` and the
English one in `src/content/lab/en/`, each named with its own slug:

```
src/content/lab/es/mi-entrada.md
src/content/lab/en/my-entry.md
```

Frontmatter:

```yaml
---
title: Mi entrada
date: 2026-10-04
summary: Una línea que aparece en el índice del Lab.
draft: false
translationKey: my-entry      # same string in both files
---
```

- `draft: true` keeps a post out of the build entirely. Remove it or set it to
  `false` to publish.
- `translationKey` must match between the two files. It is what links a post to
  its counterpart so the language switch and the `hreflang` tags resolve to the
  right page. Without it both fall back to the Lab index.
- Images go in `src/assets/lab/` and are referenced relatively, which runs them
  through Astro's optimiser:

  ```markdown
  ![Descripción de la imagen](../../../assets/lab/sketch.png)
  ```

The post appears at `/lab/mi-entrada` and `/en/lab/my-entry`, newest first.

## Adding a project

Create a file in `src/content/projects/es/` and one in
`.../en/`, both with the same filename:

```
src/content/projects/es/nuevo-proyecto.md
src/content/projects/en/nuevo-proyecto.md
```

Frontmatter:

```yaml
---
title: Nuevo proyecto
url: https://ejemplo.com
image: ../../../assets/projects/nuevo.png
summary: Una línea. Esto es lo que se ve en el Home.
order: 4
---
```

The body is the full description, shown on the Projects page. `order` controls
the sequence on both pages, lowest first. Put the image in
`src/assets/projects/` — if `image` is omitted the card renders a bordered
placeholder with the project name.

## Adding a page

1. Add the key and both URLs to `routes` in `src/i18n/ui.ts`.
2. Add the key to `navOrder` if it should appear in the menu.
3. Create both language versions under `src/pages/` and pass `pageKey` to the
   layout, so the active menu state and the `hreflang` tags work.

See [`DESIGN.md`](DESIGN.md) for the full rules.

## Principles

- Simplicity over complexity
- Experimentation over certainty
- Learning through building
