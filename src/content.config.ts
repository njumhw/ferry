import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/videos' }),
  schema: z.object({
    schema: z.literal('tripack-v1'),
    metadata: z.object({
      source_url: z.string().url(),
      video_id: z.string(),
      title: z.string(),
      channel: z.string(),
      channel_slug: z.string(),
      guests: z.array(z.string()),
      host: z.string().optional(),
      duration_seconds: z.number().int(),
      published_at: z.string(),
      language_original: z.string().default('en'),
    }),
    summary_zh: z.string().min(40).max(150),
    tags: z.array(z.string()).min(1).max(8),
    memo_zh: z.object({
      intro: z.string().optional(),
      topics: z.array(z.object({
        id: z.string(),
        title: z.string(),
        timestamp: z.string().optional(),
        body_md: z.string(),
      })),
    }),
    translation_zh: z.object({ body_md: z.string() }),
    original_en: z.object({ body_md: z.string() }),
  }),
});

export const collections = { videos };
