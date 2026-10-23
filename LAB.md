# Lab — structure for experiment posts

Short and practical. A Lab post is an experiment written up honestly: what I
tried, what happened, what I would change. It is not a case study and it does
not need a happy ending.

For file names, frontmatter and images, see "Adding a Lab post" in
[`README.md`](README.md).

---

## The six sections

Each section is a `##` heading, in this order.

| # | Español | English | What goes here |
|---|---|---|---|
| 1 | Problema | Problem | What I wanted to solve. One concrete situation, not a topic. |
| 2 | Hipótesis | Hypothesis | What I thought could work, and why. Stated so it could turn out wrong. |
| 3 | Experimento | Experiment | What I built and with which tools. Enough detail to repeat it. |
| 4 | Resultado | Result | What works and what does not. Include the failures. |
| 5 | Aprendizaje | Learning | What I would do differently. |
| 6 | Siguiente paso | Next step | What I want to check next. One or two things, not a roadmap. |

Number the headings the way existing posts do (`## 1. Problema`).

## Rules

- **One post, one experiment.** If it needs two hypotheses, it is two posts.
- **Result is not Learning.** Result says what happened; Learning says what it
  means or what changes. Do not mix them.
- **Say what did not work.** A Result with only wins is not finished.
- **Short.** A section is a paragraph or a short list. Skip tables unless they
  carry real structure.
- **Evidence over adjectives.** Prefer a screenshot, a number or a snippet to
  "it worked well".
- **Tone.** First person, plain, no hype. Same voice as the rest of the site.

## Writing for scanning

The layout sets the first paragraph under each `##` or `###` heading larger
than body text (`lead` in `Prose.astro`). Write so a reader who only reads
those lines still gets the point.

- **Open every section with one simple sentence** that states its main idea.
  It is the first paragraph, on its own, so it renders as the lead. Do not
  start a section with an image, a list or a table.
- **Short sentences.** 24 words at most.
- **Short paragraphs.** 3 sentences at most, one idea each.
- **Bold the main idea** of a paragraph or list item: a phrase, not a whole
  sentence. Two or three per section is plenty.
- **Use lists when ideas are parallel.** Bullets for items without order,
  numbers for steps or ranked choices. Start each item with a bold lead.
- **Avoid long runs of text.** If a paragraph lists three or more things, make
  it a list.

## When a section does not apply

Omit it rather than fill it. An idea that has not been built has no Result; a
post can stop at Hypothesis and Next step. Do not change the order of the ones
that remain, and say plainly at the top (the `note` field in the frontmatter)
that the work is in progress.

Research syntheses and essays are not experiments. They do not follow this
structure.

## Updates

To report what changed after publishing, add an entry to `updates` in the
frontmatter instead of editing the sections. It renders as a dated box above
the post (`LabUpdate.astro`). Newest first. One sentence for `title`, then 3–4
bullets, each with a bold lead. Write it in both languages.

## Both languages

Every post is written in Spanish and English, with the same `translationKey`
and the same six sections in the same order. Translate the meaning, not the
sentences.
