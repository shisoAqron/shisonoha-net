import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const media = z.discriminatedUnion('type', [
  z.object({ type: z.literal('video'), src: z.url() }),
  z.object({
    type: z.literal('image'),
    src: z.string(),
    href: z.string().optional(),
    alt: z.string().default(''),
  }),
]);

const portfolio = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    // WordPress の portfolio-type。未分類は null
    type: z.enum(['research', 'activity']).nullable(),
    // 一覧ページでの表示順（小さいほど先頭）
    order: z.number(),
    // トップのカルーセルに載せる場合の表示順
    homeOrder: z.number().optional(),
    thumbnail: z.string(),
    media: z.array(media).default([]),
  }),
});

export const collections = { portfolio };
