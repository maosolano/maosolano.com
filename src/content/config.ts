import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  year: z.number().optional(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  order: z.number().default(99),
});

const labSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: projectSchema,
  }),
  lab: defineCollection({
    type: "content",
    schema: labSchema,
  }),
};
