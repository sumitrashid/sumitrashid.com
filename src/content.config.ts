import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = {
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
};

const perspectives = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/perspectives' }),
  schema: z.object({ ...base }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({ ...base }),
});

const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    ...base,
    location: z.string(),
    country: z.string().optional(),
    travelDates: z.string().optional(),
  }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photography' }),
  schema: z.object({
    ...base,
    location: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          location: z.string().optional(),
          date: z.string().optional(),
        })
      )
      .default([]),
  }),
});

const culture = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/culture' }),
  schema: z.object({
    ...base,
    type: z.enum(['film', 'book', 'music', 'art']),
    work: z.string(),
    creator: z.string().optional(),
    year: z.number().optional(),
    rating: z.number().min(1).max(5).optional(),
  }),
});

export const collections = { perspectives, journal, travel, photography, culture };
