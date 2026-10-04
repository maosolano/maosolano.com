# Build prompts — maosolano.com

A record of the prompts that drove this build, in order, so the process is
reproducible and the reasoning behind the site is traceable. Verbatim where it
matters; the full brief is reproduced unedited.

Companion file: `process/log.md` (decisions and changes, timestamped).

---

## Session 1 — 2026-10-04

### Prompt 1 — scaffold the folder structure

> I'm building my personal portfolio. Structure the local folder like this:
>
> ```
> src/
> ├── styles/
> │   ├── tokens.css               # new: colour, type, spacing tokens
> │   └── global.css
> ├── i18n/
> │   └── ui.ts                    # new: menu and interface labels, ES and EN
> ├── components/
> │   ├── Nav.astro                # now includes the hamburger menu
> │   ├── LangSwitch.astro         # new
> │   └── ProjectCard.astro
> ├── pages/
> │   ├── index.astro, proyectos.astro, sobre-mi.astro, contacto.astro, lab/
> │   ├── styleguide.astro         # new: design system reference, not in the menu
> │   └── en/                      # new: index, projects, about, contact, lab/
> └── content/
>     ├── projects/es/  projects/en/
>     └── lab/es/       lab/en/
> DESIGN.md                        # new: design system rules, at the repo root
> ```

**Outcome:** Astro project initialised from scratch (repo had only `README.md`
and `.gitignore`). All listed files created, plus `astro.config.ts`,
`package.json`, `tsconfig.json`, `src/content/config.ts`, and
`src/layouts/Layout.astro`. Build passed, 11 pages.

**Note:** tokens, type, copy and content in this pass were placeholders chosen
by the assistant, not supplied by me. Prompt 5 replaces all of them.

### Prompt 2 — correct the stack in the README

> update the README to reflect Astro

**Outcome:** swapped `Next.js` / `Tailwind CSS` for `Astro` / CSS custom
properties in the README's Tech Stack section.

### Prompts 3 and 4 — commit and push

> commit this

> push it

**Outcome:** commit `d959823`, 37 files, pushed to `origin/main`
(`85a8942..d959823`). `.DS_Store` files were unstaged before committing;
`.gitignore` still does not exclude them.

### Prompt 5 — full build brief

The real brief. Supersedes the placeholder decisions from Prompt 1.

> Build a simple personal portfolio site for Mauricio "Mao" Solano, to be published
> at maosolano.com today. Main design principle: keep it simple.
>
> STACK
> - Astro (latest), static output, no UI framework, no Tailwind.
> - Content collections in Markdown for `projects` and `lab`.
> - Must deploy on Vercel with zero config.
> - Use the folder structure already in this repo. Images are in src/assets/.
>
> LANGUAGES
> - Spanish is the default, served at the root: /, /proyectos, /sobre-mi, /lab,
>   /contacto. html lang="es".
> - English lives under /en: /en, /en/projects, /en/about, /en/lab, /en/contact.
>   html lang="en".
> - Use Astro's built-in i18n routing. Interface labels live in src/i18n/ui.ts.
> - Content is in src/content/projects/es and /en, and src/content/lab/es and /en.
> - I give you the Spanish copy below. Translate all of it into natural English
>   for the /en version. Keep product and company names unchanged.
> - Add a small "ES / EN" switch that links to the same page in the other
>   language. Add hreflang alternate tags on every page.
>
> LAYOUT
> - Desktop (>= 800px): two columns. Left column is fixed, about 240px wide, with
>   the name "Mao Solano" at the top, a vertical menu below it (Proyectos,
>   Sobre mí, Lab, Contacto), and the language switch at the bottom. Right column
>   scrolls and holds the page content, max width about 720px.
> - Mobile (< 800px): a top bar with the name on the left and a hamburger button
>   on the right. The button opens a full-width panel with the four links and the
>   language switch. Requirements for the menu: a real <button> with aria-expanded
>   and aria-controls, a visible label for screen readers, closes with Escape and
>   when a link is chosen, touch target at least 44px. Minimal vanilla JS, and the
>   links must still be reachable if JS fails.
> - Content on mobile is one column with 16px side padding and no horizontal
>   scroll.
> - Project card: project title above, then an image on the left (about 60%) and a
>   short text block on the right. On mobile the image goes on top and the text
>   below it.
>
> DESIGN SYSTEM
> Create a basic design system I can scale later. Three parts:
>
> 1. src/styles/tokens.css — CSS custom properties in two layers.
>
>    Base colours (from my palette):
>    --yellow-500: #FBFF0A;
>    --yellow-700: #C9CC00;
>    --cream-50:   #FDFEEC;
>    --gray-100:   #EBEBEB;
>    --gray-200:   #D6D6D6;
>    --gray-300:   #C0C0C0;
>    --gray-700:   #616569;
>    --ink-900:    #020A12;
>
>    Semantic colours (components use only these, never the base ones):
>    --color-bg:            var(--cream-50);
>    --color-surface:       var(--gray-100);
>    --color-border:        var(--gray-300);
>    --color-border-subtle: var(--gray-200);
>    --color-text:          var(--ink-900);
>    --color-text-muted:    var(--gray-700);
>    --color-accent:        var(--yellow-500);
>    --color-accent-strong: var(--yellow-700);
>    --color-focus:         var(--ink-900);
>
>    Colour rules: the yellows are never used as text colour or for thin lines
>    that carry meaning, because they fail contrast on cream. Links are
>    --color-text with a thick --color-accent underline; on hover the yellow
>    becomes the background of the link. Selected menu item uses the same yellow
>    highlight. Focus ring is 2px --color-focus with offset.
>
>    Typography:
>    --font-title: "Quattrocento", Georgia, serif;   (weights 400 and 700)
>    --font-body:  "Fanwood Text", Georgia, serif;   (400 and 400 italic)
>    Load both from Google Fonts with display=swap.
>    Fanwood Text runs small, so the body size is 20px on desktop and 19px on
>    mobile, line-height 1.55. Define a type scale as tokens (--text-sm, --text-base,
>    --text-lg, --text-xl, --text-2xl) and use Quattrocento for the name, menu,
>    and all headings, Fanwood Text for everything else.
>
>    Also define: a spacing scale (--space-1 to --space-8, based on 4px), border
>    width (1px), one radius token (0, square corners), content max width, sidebar
>    width, and the 800px breakpoint as a documented value.
>
> 2. DESIGN.md at the repo root — short and practical: the token list, the colour
>    rules above, the type rules, the components that exist (Nav, LangSwitch,
>    ProjectCard, PostList, Prose) with when to use each, and how to add a new
>    component or token.
>
> 3. /styleguide page — shows the colour tokens as swatches with names, the type
>    scale, links, buttons, a project card and a sample of post prose. Not in the
>    menu, and marked noindex.
>
> VISUAL STYLE
> - Feels like a pen sketch on paper: cream background, ink text, thin 1px
>   borders, lots of white space. Yellow is the only accent.
> - No animations beyond the menu opening, no shadows, no gradients.
> - Accessible: semantic HTML, visible focus states, alt text on all images,
>   AA contrast for all text.
>
> PAGES (Spanish copy; mirror every page in English under /en)
>
> 1. Home
>    - Profile paragraph:
>      "Soy diseñador de experiencia y estratega de contenidos. He trabajado en
>      banca, ecommerce y productos digitales, convirtiendo procesos complejos en
>      experiencias claras para millones de personas. Hoy exploro cómo se cruzan
>      el UX, los sistemas de diseño y la inteligencia artificial."
>    - Personal line, set apart in italics:
>      ES: "Diseño con palabras, sistemas e IA: siempre aprendiendo, siempre
>      iterando."
>      EN (use exactly this, do not retranslate): "Designing with words, systems,
>      and AI—always learning, always iterating."
>    - Heading "Proyectos recientes" and three project cards in this order:
>      The Bike Memory Project, Matcha, VISTA. Each card links to the live site.
>
> 2. Proyectos
>    - The same three projects with the full description and a link to each
>      live site.
>
> 3. Sobre mí
>    - The profile paragraph, then "Experiencia" as a simple list:
>      - Diseñador freelance (UX + IA), julio 2026 – actualmente
>      - Traductor voluntario, Oppia Foundation, junio 2025 – julio 2026
>      - UX Writer Senior, Mercado Libre, octubre 2020 – abril 2025
>      - UX Writer, Scotiabank Colpatria, febrero 2019 – septiembre 2020
>      - Freelance UI Designer, Zemoga (hoy Monks), febrero 2018 – enero 2019
>    - "Fortalezas": UX Content Design; storytelling y narrativa para producto;
>      diseño de experiencias; investigación y validación; colaboración con
>      stakeholders; IA aplicada al diseño y contenidos; sistemas de diseño y
>      documentación.
>    - A link to download the CV: /cv-mauricio-solano.pdf
>
> 4. Lab
>    - Index: list of posts with title, date and a one-line summary, newest first.
>    - Post page: Markdown mixing text and images, comfortable reading width.
>    - Frontmatter: title, date, summary, draft (boolean). Drafts are not built.
>
> 5. Contacto
>    - Email: mauricio.solano@gmail.com (mailto link)
>    - LinkedIn: https://linkedin.com/in/maosolano
>    - No form, no phone number.
>
> PROJECT CONTENT (frontmatter: title, url, image, summary, order; body = full text)
>
> The Bike Memory Project — https://www.bicis.maosolano.com
> Summary: Un archivo colaborativo de bicicletas dibujadas de memoria.
> Body: Creé y desarrollé un archivo colaborativo que combina participación
> pública, narrativa personal y curaduría digital. Diseñé la experiencia de
> principio a fin: el muro público, las fichas individuales, la herramienta de
> dibujo, los flujos de envío y consentimiento, y un área privada de curaduría.
> Convertí una colección física en un sistema digital que sigue creciendo, con
> 387 dibujos procesados y publicados.
>
> Matcha — https://matcha-prototipo.vercel.app/prototipo
> Summary: Rediseño del flujo principal para buscar, comparar y elegir vivienda.
> Body: Rediseñé el flujo principal de Matcha para que buscar, comparar y elegir
> vivienda fuera claro y estructurado. Creé un prototipo funcional que integra
> UX, UI, contenido y un sistema de diseño documentado. Usé Claude y Claude Code
> para acelerar el ciclo de diseño e iteración y documenté los criterios clave
> para su paso a producción.
>
> VISTA — https://bitagreen-vista-prototype.vercel.app
> Summary: Prueba de concepto de una app web geoespacial para gestionar áreas
> verdes urbanas.
> Body: Diseñé y prototipé la prueba de concepto de VISTA, adaptada a distintos
> roles y escenarios. Creé un sistema de diseño pensado para IA, con tokens,
> componentes y reglas para generar prototipos consistentes con Claude. El
> desarrollo fue de principio a fin con Claude, del brief al prototipo funcional
> y su documentación.
>
> Project images: src/assets/projects/bike.png, matcha.png, vista.png. If one is
> missing, render a bordered placeholder box with the project name, and tell me.
>
> PROCESS LOG (important)
> - As you work, append to process/log.md: each decision you made, why, and
>   anything you changed after my feedback. Short entries with a timestamp.
> - At the end, create a draft Lab post (draft: true) in both languages:
>   src/content/lab/es/portafolio-en-dos-horas.md and
>   src/content/lab/en/portfolio-in-two-hours.md. Each is a skeleton for a post
>   about building this site in two hours: the sketch
>   (src/assets/lab/sketch.jpg), the brief, the decisions, what was cut, and what
>   comes next. Leave the prose for me to write; give me headings and bullet
>   notes taken from the log.
>
> META
> - Site title: "Mao Solano — UX Content Designer & Creative Strategist".
> - Meta description and Open Graph tags for each page, in the page's language.
> - README.md with how to run, build, add a Lab post in both languages, and add
>   a project.
>
> WORKING RULES
> - Do not invent any facts about me. If something is missing, ask.
> - Do not add pages, features or dependencies I did not ask for.
> - Build in this order: tokens and layout, Spanish pages, English pages,
>   styleguide, Lab draft. Show me the Spanish Home before continuing.
> - When done, run the build, start the dev server, and tell me what to check at
>   desktop and mobile widths.

---

## Open questions and missing inputs

Raised under the brief's own rule: *"Do not invent any facts about me. If
something is missing, ask."*

| # | Item | Status |
|---|---|---|
| 1 | `/cv-mauricio-solano.pdf` — linked from Sobre mí | **Resolved.** Mao added it to `public/` during the build. Link verified against `dist/`. |
| 2 | Sketch image for the Lab draft | **Resolved.** Using `sketch.png`, the file in the repo. |
| 3 | Lab posts | Only the `draft: true` post is specified. The Lab index will be empty once placeholder posts are removed. |
| 4 | Open Graph image | Not specified. No `og:image` asset supplied. |

## Decisions carried over from Prompt 1 that Prompt 5 overrides

- Palette, type scale and spacing in `tokens.css` — replaced by the supplied palette.
- Fonts (Inter / JetBrains Mono) — replaced by Quattrocento / Fanwood Text.
- Nav as a sticky top bar — replaced by the fixed two-column sidebar.
- All page copy and project content — replaced by the supplied copy.
- Placeholder Lab and project Markdown — to be removed.
- `DESIGN.md` — to be rewritten against the supplied tokens and component list.
