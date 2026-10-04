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
