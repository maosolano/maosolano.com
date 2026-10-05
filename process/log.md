# Process log

Decisions, why, and what changed after feedback. Newest entries at the bottom.
The prompts that drove this are in [`prompt.md`](./prompt.md).

---

## 2026-10-04

**15:02 — Scaffold before the brief.** Built a placeholder structure from the
folder listing in Prompt 1. Palette, fonts and copy were invented stand-ins.
Committed as `d959823` so the real build would have a clean diff to replace.

**15:20 — Brief arrived (Prompt 5).** Asked two questions before writing code:
rebuild or keep the scaffold, and `sketch.jpg` vs the `sketch.png` actually in
the repo. Answers: rebuild, use `.png`.

**15:25 — Deleted the placeholder pages and content.** The EN pages, the
styleguide and all invented Markdown were removed rather than edited. They
shared no copy or structure with the brief, so editing would have been slower
and riskier than rewriting. Everything is recoverable from `d959823`.

**15:27 — Tokens in two layers.** `tokens.css` holds the raw palette and a
semantic layer on top. Components reference only the semantic names, so a
palette change never touches a component. Documented the rule at the top of the
file and in `DESIGN.md`.

**15:27 — `--breakpoint-md` is documentation only.** CSS custom properties do
not work inside `@media`, so 800px is hard-coded in the media queries and the
token exists to name the value. Noted in the file so the two stay in sync.

**15:28 — Link styling.** Ink text with a 3px yellow underline, yellow becomes
the background on hover. Used `text-decoration` rather than `border-bottom` so
the underline survives line wrapping. Yellow is never a text colour, per the
brief's contrast rule.

**15:30 — Routes live in one table.** `routes` in `i18n/ui.ts` is the single
source for every URL. The language switch and the `hreflang` tags both read
from it, which removes the string-rewriting the first scaffold used and would
have broken on any new page.

**15:31 — Page copy sits in `ui.ts`, not in the pages.** The profile paragraph,
the personal line, the experience list and the strengths list are data in both
languages side by side. Pages stay markup only, and nothing can drift between
ES and EN unnoticed.

**15:33 — Content Layer API.** Astro 5.18, so collections use the `glob()`
loader. Entry ids keep their locale folder (`es/bike-memory`), which is what
pages filter on. Project images go through the schema's `image()` helper so
Astro optimises them — the three PNGs came out as WebP at roughly a tenth of
the original weight.

**15:33 — Added `translationKey` to the Lab schema.** The brief's frontmatter is
title, date, summary, draft. `hreflang` on a post needs to know its counterpart
in the other language, and nothing else in the frontmatter can express that. It
is optional, and falls back to the Lab index when absent.

**15:35 — Mobile menu is progressive enhancement, not JS-dependent.** Default
CSS shows the menu expanded and hides the button. A one-line inline script in
`<head>` adds `.js` to `<html>`, which flips it to the collapsed state before
first paint. If the script never runs, all five links stay reachable and the
button never appears. Verified by removing the class at runtime.

**15:36 — No `target="_blank"` on project links.** The brief asks for links to
the live sites and says not to add anything unasked. Plain links keep the back
button working.

**15:38 — Home h1 is screen-reader only.** The name lives in the sidebar as a
brand link, and the brief puts the content column straight into the profile
paragraph. A visible h1 would duplicate the name, so the document gets a proper
h1 without changing the layout. Other pages use a visible h1.

**15:39 — CV filename differs from the brief.** Brief says
`/cv-mauricio-solano.pdf`; the repo has `public/MauricioSolano_CV_2026.pdf`.
Linked the file that exists rather than shipping a 404. Flagged for Mao.

**15:42 — Spanish build verified.** 5 pages. Checked at 1280px and 375px:
sidebar and two-column card layout on desktop, stacked card and top bar on
mobile. Menu button is 44px, menu links 53px, language links 44px. Escape
closes the panel and returns focus to the button.

**15:52 — Font pairing changed on Mao's instruction.** Titles go to Oswald, body
to Quattrocento. Fanwood Text is dropped. Quattrocento moves from headings to
body, which is what it was designed for, and Oswald gives the name and menu a
condensed counterpoint to the serif.

**15:52 — Neither new family has an italic face.** Checked the loaded faces at
runtime: Google serves only `style:normal` for both Oswald and Quattrocento.
The home personal line is specified as italic in the brief, so it now renders
as a browser-synthesised oblique rather than a drawn italic. Left as specified
and flagged for Mao; the alternatives are a real italic companion face or
setting that line apart by weight or rule instead. Noted in `tokens.css` so the
next person does not reach for `<em>` expecting a true italic.

**15:58 — Headings set uppercase on Mao's instruction.** One rule on `h1`–`h6`
in `global.css`, so page titles, section headings, project card titles and any
heading inside a Lab post all follow without per-component work. Added
`--tracking-title` (0.02em) with it: Oswald is condensed and caps close up
without a little tracking.

**15:58 — Left the brand and menu in mixed case.** "All the titles" was read as
headings. The name and the four menu links are a wordmark and navigation
labels, not titles, and the contrast between caps headings and mixed-case
navigation is doing useful work. Easy to flip if Mao wants it.

**15:58 — `text-transform` keeps the DOM text intact.** The screen-reader-only
h1 on Home and every other heading still expose their original casing to
assistive tech, so this is a purely visual change.

**16:05 — English pages built as mirrors, not variants.** Same components, same
layout, same `pageKey`; only the locale differs. Translated the project bodies
and summaries into natural English and left every product and company name
alone. The personal line uses Mao's own English wording verbatim, not a
retranslation of the Spanish.

**16:08 — Fixed a stray space before the comma** in the experience list
("Volunteer Translator , Oppia Foundation"). A newline between the role and org
spans was rendering as a text node. Joined them on one line in both languages.

**16:12 — Styleguide shows only components that exist.** The brief asks for
buttons, and the single real button in the system is the mobile menu toggle, so
that is what is on the page. Inventing a primary button style for the
styleguide would have documented something no page uses.

**16:15 — Lab drafts are skeletons, not drafts of prose.** Headings plus bullet
notes lifted from this log, with the prose left for Mao. Both carry
`translationKey: portfolio-in-two-hours`, which is what pairs them for
`hreflang` once they are published. `draft: true`, so neither builds — the Lab
index correctly shows its empty state in both languages.

**16:18 — Verified on the built output, not just the dev server.** 11 pages.
`hreflang` resolves ES↔EN on every page, `html lang` and `og:locale` follow the
locale, `/styleguide` carries `noindex` and no canonical, and no draft post
reached `dist/`.

**16:24 — CV filename resolved.** Mao dropped `cv-mauricio-solano.pdf` into
`public/` while the English pages were being built, which is the path the brief
specified all along. Pointed `CV_PATH` back at it and checked the link against
`dist/` rather than trusting the constant. Caught only because the pre-commit
review looked at `public/` instead of assuming it was unchanged.

**16:25 — Added `.DS_Store` to `.gitignore`.** It had turned up in the staging
area twice and been unstaged by hand both times.

**16:45 — Vercel was never actually deployed.** The project existed but its one
deployment had built in 0ms and `maosolanocom.vercel.app` returned
`DEPLOYMENT_NOT_FOUND`. No custom domain was configured either. Linked the
directory and ran a real production deploy, which aliased `maosolano.com`.

**16:48 — Git integration reported "already connected" but had not fired.**
Rather than trust the message, pushed a commit and watched: a deployment
appeared 27s later and built in 15s. Working now. Best guess is the webhook was
not live yet when the first push happened minutes after project creation.

**16:52 — Content realigned to the CV.** Mao's CV carries different positioning
than the original brief, plus two new lines he supplied directly. Changes:

- **Profile** now comes from the CV: "Diseñador generalista y redactor UX…"
  replaces the brief's "diseñador de experiencia y estratega de contenidos".
  The CV's third paragraph was dropped — it says almost exactly what the new
  personal line says, and printing both would be repetition.
- **The tagline became Home's visible `h1`.** This retires the screen-reader-only
  heading flagged on 2026-10-04: there is now a real heading to show, so the
  workaround is no longer needed.
- **Site title is localised.** It had been one English string served to both
  languages. Spanish pages now carry the Spanish tagline.
- **Added "Experimentando con IA"** to Sobre mí, straight from the CV. It was
  a whole CV section with no counterpart on the site.
- Experience, dates and strengths already matched the CV exactly; left alone.

**16:52 — Two CV details not copied verbatim.** The CV heads that section
"Experimentando con AI" while its own Spanish body uses "IA" throughout, so the
site says "IA" — looks like a slip in the CV rather than a choice. The CV also
orders projects Matcha, VISTA, Bike; the site keeps the brief's explicit order
(Bike, Matcha, VISTA) since that instruction was deliberate. Both flagged.

**17:05 — Lab entry written and published.** The two skeletons became real posts
in both languages, `draft: false`, so the site goes from 11 to 13 pages and the
Lab index stops showing its empty state. The Notion page's "Lab entry (draft)"
section was filled in to match, and four facts on that page that had gone stale
during the build — fonts, site title, the Home personal line and the status
callout — were corrected with the superseded value kept visible.

**17:12 — Favicon from the 🌞 emoji.** There was no icon at all: the rebuild had
dropped the `<link rel="icon">` and nothing was ever served, so browsers fell
back to a 404ing `/favicon.ico`.

Rasterised rather than shipped as an SVG text glyph. An `<svg><text>🌞</text></svg>`
favicon renders in whatever emoji font the viewer's OS has, so the sun would
differ on macOS, Windows and Android. Rendering it once locally fixes the
artwork for everyone. `qlmanage -t` was the rasteriser — QuickLook draws SVG
through WebKit with Apple Color Emoji, so no dependency was added and no image
data had to round-trip through the model.

Three files: `favicon.svg` (transparent, scales), `favicon-32.png` (transparent,
so it sits on light or dark browser chrome), and `apple-touch-icon.png` at 180px
on the cream page background — iOS composites a transparent touch icon onto
black, which would have put a black square on the home screen.

**17:30 — Misread which line Mao meant.** He asked to change "la primera línea
que describe mi perfil" and the first paragraph of the profile was edited. A
screenshot with the line highlighted showed he meant the Home `h1`. Reverted the
paragraph to its CV wording and moved the new text to the tagline:
"Diseñador generalista, creativo tecnológico y maker", no full stop, since it is
a heading. Worth remembering that "perfil" here means the headline, not the
profile paragraph.

**17:38 — Selection restyled to the accent yellow.** `::selection` was still the
browser's default blue, which was the one place on the site a non-palette colour
appeared. Selected text now takes the yellow background with ink on top — the
colour is forced back to ink because headings are grey and grey on yellow is
weak.

**17:42 — Title and meta synced to the new headline.** The `<title>` and the Home
meta description both still opened with the retired tagline, so the tab said one
thing and the page another. Both now carry "Diseñador generalista, creativo
tecnológico y maker" and its English counterpart. A grep confirms the old wording
survives nowhere in `src/` or `dist/`.

Still stale: the Notion build page records the previous site title under
Decisions. Left alone deliberately — the positioning is still being worked on,
and it is worth updating once rather than after each pass.

**17:50 — New CV, profile updated.** Mao replaced the PDF again; a checksum
against the committed copy confirmed it differed before reading it. Three
changes in the document:

- Its subtitle is now "Diseñador generalista, creativo tecnológico y maker",
  the same line we had just made the Home `h1`. The CV and the site agree.
- First paragraph rewritten to "Soy un diseñador generalista con experiencia en
  redacción para UX en…". Carried over to the Home profile and to Sobre mí's
  meta description, which had been holding the older wording.
- Third paragraph now opens "Actualmente estoy explorando…". Still not on the
  site: it says what the personal line already says, and printing both reads as
  repetition. Same call as before, flagged again rather than quietly repeated.

The header contact also moved from LinkedIn to maosolano.com, which affects
nothing on the site. Experience, strengths and the AI list are unchanged.

**2026-10-05, 05:48 — Background to white.** `--cream-50` existed only to feed
`--color-bg`, so it was replaced by `--white` rather than left as a dead token
pointing at a colour nothing uses. Contrast improved slightly across the board:
body 19.9:1, headings 7.7:1, muted text 5.9:1.

Two things carried the old colour and would have been missed by only editing
the token:

- The apple-touch-icon had cream baked into the image. Regenerated on white, or
  iOS would have shown a cream tile against a white site.
- The published Lab entry explained the yellow rule as "no se lee sobre un fondo
  crema" in both languages. On a white page that reads as a contradiction, so it
  now says "fondo claro" / "pale background". The rule itself is unchanged and
  more true than before — yellow on white is about 1.1:1.

**17:34 — Headings moved off `--color-text`.** Mao asked for a lighter grey and
to see options first, so five candidates were rendered on the live page in real
Oswald caps on the real cream, each with its measured contrast. He picked
`#4E5459` at 7.5:1, applied to all of `h1`–`h6` rather than `h1` alone: a page
title lighter than the `h2` beneath it inverts the visual hierarchy.

Added as `--gray-800` plus a `--color-heading` semantic token, not as a loose
value, so the rule in `global.css` stays one line and the styleguide and
`DESIGN.md` document it.

The catch this surfaced: card and post titles are links, and the global `a`
rule would have held them at ink while every other heading went grey. Linked
headings now inherit `--color-heading`. The sidebar wordmark stays ink — it is
a brand mark, not a heading, and the extra weight suits it.
