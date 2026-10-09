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
      // A standalone page under /public embedded as-is on the project's page.
      caseStudy: z.string().optional(),
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

export const collections = { projects, lab };
