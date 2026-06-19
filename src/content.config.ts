import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const investigations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/investigations" }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    status: z.enum(["draft", "in-progress", "complete"]),
    date: z.date(),
    tags: z.array(z.string()),
    question: z.string(),
    hypothesis: z.string(),
    dataset: z.string(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    status: z.enum(["draft", "in-progress", "complete"]),
  }),
});

export const collections = { investigations, notes, projects };
