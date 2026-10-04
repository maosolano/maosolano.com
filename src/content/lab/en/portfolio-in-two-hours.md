---
title: A portfolio in two hours
date: 2026-10-04
summary: How I built this site in an afternoon, from paper sketch to deploy.
draft: true
translationKey: portfolio-in-two-hours
---

<!--
SKELETON. The bullet notes come from process/log.md.
Write the prose and delete the bullets you don't use.
-->

## The sketch

![Hand-drawn sketch of the portfolio](../../../assets/lab/sketch.png)

- Two columns: name and menu fixed on the left, content on the right.
- The "pen sketch on paper" idea came before any token did.
- What survived the move from paper to screen, and what didn't.

## The brief

- I wrote the full brief before asking for a single line of code.
- Stack settled up front: Astro, no UI framework, no Tailwind.
- Spanish at the root, English under `/en`.
- Explicit working rules: invent nothing about me, add no pages I didn't ask
  for, build in a set order, and stop to show me the Home.
- I handed over the palette and type scale already decided, rather than
  asking for them.

## The decisions

- **Tokens in two layers.** Raw palette underneath, semantic names on top.
  Components only ever touch the semantic layer.
- **One route table.** The language switch and the `hreflang` tags read from
  the same place, so they can't drift apart when a page is added.
- **Copy lives in `ui.ts`,** not inside the pages. Spanish and English sit side
  by side and nothing falls out of sync unnoticed.
- **The mobile menu is progressive enhancement.** With no JS the menu renders
  expanded and the button never appears. JS collapses it before first paint.
- **Yellow is never a text colour.** It fails contrast on cream. It works as a
  thick underline and as a hover background instead.
- I changed the typefaces halfway through: Oswald for titles, Quattrocento for
  body. Neither has a true italic.

## What got cut

- Dark mode.
- Animation beyond the menu.
- A contact form.
- Shadows, gradients, rounded corners.
- A proper `og:image`.

## What comes next

- Better alt text on the project images.
- The first real Lab entry.
- Revisit the text column on `/projects`: the full description runs narrow at
  40%.
