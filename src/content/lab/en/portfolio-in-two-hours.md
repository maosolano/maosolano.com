---
title: A portfolio in two hours
date: 2026-10-04
summary: How I went from a pen sketch to a published site in one afternoon, working with Claude.
draft: false
translationKey: portfolio-in-two-hours
---

I had been planning this portfolio for weeks. The plan had five days, four audiences and a hero section. On a Sunday afternoon I replaced it with one rule: keep it simple, and publish in two hours.

## Start with a sketch

Two columns on paper: my name and the menu on the left, the projects on the right. That drawing was the whole design brief. Nothing in the finished site contradicts it.

![Hand-drawn sketch of the portfolio layout](../../../assets/lab/sketch.png)

## Let the CV be the content

I gave Claude my CV and the sketch, and asked for a plan, a folder structure and a prompt for Claude Code. I wrote almost no new copy. The profile, the experience list and the three projects all came from text I already had.

Writing is the part I am slowest at and the part I am least willing to rush. Taking it off the critical path is what made two hours plausible at all.

## Answer four questions

Language, one personal line, my email, and what was already sitting on the domain. Those four answers were the only thing standing between the plan and the build.

## Make a few decisions and stop

A condensed sans for titles, a serif for the body, eight colours, a hamburger menu on mobile. One rule fell out of the palette: yellow is a highlight, never a text colour, because it cannot be read on a cream background.

Halfway through I changed my mind and swapped both typefaces. It cost about a minute. Every size, colour and space was already a token, so the change was two lines in one file and nothing else moved. That is the entire argument for building the tokens before the pages.

## Prepare the files

This was the slow part. Taking three good screenshots took longer than all of the planning did.

## Build it

The build ran in a fixed order: tokens and layout, then the Spanish pages, then a full stop so I could read the Home before anything else was written. English, the styleguide and this post came afterwards.

The corrections were small and boring, which is the good outcome. A stray space before a comma in the experience list. A download link pointing at a CV filename I had quietly changed an hour earlier.

## Then find out it was never published

The real delay was not the build. Vercel reported a finished, green, successful deployment that had built nothing at all — it took zero seconds and served a 404. The GitHub connection reported itself as already connected and had never once fired.

Both of those looked completely fine from the dashboard. The only check that caught either one was opening the live URL and reading what came back.

The site went live at 16:38, eight minutes past the deadline.

## What I left out

Case studies, a contact form, animations, dark mode, shadows, rounded corners, a proper social image, and most of my original plan.

## What I learned

Preparing assets takes longer than deciding anything. Half an hour of screenshots against a couple of minutes per design decision.

Settling the palette and the type scale before the build meant there was nothing left to argue about during it.

The constraints I wrote into the brief did more work than the brief itself. *Do not invent any facts about me.* *Stop and show me the Home before you continue.* Those two sentences are the reason I spent the afternoon building instead of reviewing.

And the one I will keep: "Ready" is not the same as working. A green status is a claim, not evidence.
