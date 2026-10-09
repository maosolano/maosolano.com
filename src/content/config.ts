import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Entry ids keep their locale folder, e.g. "es/bike-memory".
 * Pages filter on that prefix to get one language.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().url(),
      image: image().optional(),
      summary: z.string(),
      order: z.number(),
    }),
});

const lab = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lab" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
    // Links a post to its counterpart in the other language, for hreflang.
    translationKey: z.string().optional(),
  }),
});

/**
 * Case studies: one MDX file per project and language, same id as the
 * project ("es/vista"). Built as standalone pages under /casos and embedded
 * on the project page. Structured blocks live in the frontmatter; the MDX
 * body holds the prose and places the blocks. Strings marked "html" may
 * carry inline tags (<b>, <code>).
 */
const link = z.tuple([z.string(), z.string()]); // [href, label]

const casos = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/casos" }),
  schema: z.object({
    // Drafts build in `astro dev` only: previewable locally, never shipped.
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    deck: z.string(),
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    links: z.array(
      z.object({ kind: z.string(), name: z.string(), label: z.string(), href: z.string().url() })
    ),
    footer: z.tuple([z.string(), z.string()]),
    // The project's principal colour. Neutrals, status colours and the
    // yellow for interaction are shared by every case (caso.css). Every key
    // is required, so a new case cannot fall back to another project's colour.
    palette: z.object({
      accent: z.string(),
      "accent-deep": z.string(),
      "accent-soft": z.string(),
      "accent-line": z.string(),
      "on-accent": z.string(),
      spot: z.string(),
      "spot-ink": z.string(),
    }),
    decisions: z
      .array(z.object({ topic: z.string(), options: z.string(), pick: z.string() }))
      .default([]),
    tour: z
      .object({
        note: z.string().optional(),
        shots: z.array(
          z.object({
            id: z.string().optional(),
            src: z.string(), // file name under public/casos/<slug>/img
            alt: z.string(),
            step: z.string(),
            lead: z.string(),
            text: z.string(),
            // Highlighted areas, in the 1440×900 space of the screenshot: [x, y, w, h, radius].
            holes: z.array(z.tuple([z.number(), z.number(), z.number(), z.number(), z.number()])).default([]),
            pins: z.array(z.object({ left: z.string(), top: z.string(), label: z.string() })).default([]),
            tips: z
              .array(
                z.object({
                  arrow: z.enum(["l", "r", "u", "d"]),
                  left: z.string(),
                  top: z.string(),
                  offset: z.string().optional(), // where the arrow sits along its edge
                  step: z.string(),
                  title: z.string(),
                  text: z.string(),
                  branch: link.optional(),
                  prev: link.optional(),
                  next: link.optional(),
                })
              )
              .default([]),
          })
        ),
      })
      .optional(),
    tools: z.array(z.object({ kind: z.string(), html: z.string(), featured: z.boolean().default(false) })).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    artifacts: z
      .array(z.object({ name: z.string(), href: z.string().url().optional(), when: z.string(), what: z.string() }))
      .default([]),
  }),
});

export const collections = { projects, lab, casos };
