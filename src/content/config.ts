import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    role: z.string(),
    timeline: z.string(),
    metrics: z.array(z.string()).optional(),
    stack: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects };