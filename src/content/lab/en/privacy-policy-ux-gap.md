---
title: "Redesigning a privacy policy to close the UX gap"
date: 2026-10-23
summary: I redesigned a 9-page personal data policy and measured whether it really reads more easily.
draft: false
note: "The legal content is pending review. The original PDF remains the binding text. The policy itself is in Spanish."
translationKey: privacy-policy-ux-gap
---

I worked on the data policy of an energy company. For confidentiality I do not use its name or brand.

![Desktop view of the redesigned policy, with a four-card summary and a side index](../../../assets/lab/politica-artefacto-desktop.png)

*Desktop view of the redesigned policy. [See the artifact](https://claude.ai/artifact/AxkS2aZbZw1vuAmQTuF3YC).*

## 1. Problem

User experience is also measured by the distance between how easy the product is to use and how hard its "corners" are to read.

By corners I mean the terms and conditions and the site policies. Almost nobody reads them, yet people accept them when they hand over their data.

Here the policy was a 9-page PDF with long paragraphs and no hierarchy. **It also looked off-brand**: typography, colour and tone did not resemble the rest of the product.

## 2. Hypothesis

If I shorten the sentences and add hierarchy, the policy reads more easily without touching the legal obligations.

I would measure it with two Spanish readability indexes. If the score does not go up, the hypothesis fails.

## 3. Experiment

I redesigned the document with the product's tokens and UX writing principles.

- **Opening summary** of four cards: who, rights, how to file a claim and deadlines.
- **One simple sentence** at the start of each of the 12 sections.
- **Side index** with the active section, and lists with the key idea in bold.
- **Printable PDF** with a white background, because the dark theme does not print well.

I measured with Fernández-Huerta and INFLESZ, on text extracted from the original PDF and the new HTML. Both use sentence length and word length.

![Data subject rights in the original PDF: a numbered list in running text](../../../assets/lab/politica-original.png)

![Data subject rights in the redesign: one card per right](../../../assets/lab/politica-rediseno.png)

Same content, before and after. The full PDFs, with the company's details hidden: [original](/lab/politica-datos-original.pdf) and [redesigned](/lab/politica-datos-rediseno.pdf).

## 4. Result

Readability improved by about 10 points, almost all of it from shorter sentences.

| | Original | New |
|---|---|---|
| Words | 3,364 | 1,962 (−42%) |
| Words per sentence | 25.1 | 11.3 |
| Fernández-Huerta | 48.3 (hard) | 58.0 (fairly hard) |
| INFLESZ | 43.7 (somewhat hard) | 53.0 (close to "normal") |

What did not work:

- **Legal vocabulary untouched:** INFLESZ does not reach "normal", because the correct terms stay long.
- **Biased measurement:** headings and bullets count as sentences, which inflates the gain.
- **Unequal texts:** the new one is 42% shorter.
- **No people:** there is no user test, only indexes.
- **Inconsistent date:** the original says 2023 in the header and 2024 in the body.

## 5. Learning

Shortening sentences moves the score; simplifying legal terms is a different job.

An index measures form, not comprehension. Next time I would **keep the measurement script** and decide up front how to count sentences. Mine was single-use, so it cannot be rerun on each version.

## 6. Next step

What is missing is what actually tests the effect on people.

- **Legal review** against the original, to confirm no obligation was lost.
- **Task test with 5 to 8 people**, for example: "how many days does the company have to answer a claim?".
