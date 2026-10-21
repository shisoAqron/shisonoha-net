// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://shisonoha.net',
  // WordPress 時代の URL（/profile/ や /portfolio/xxx/）をそのまま維持する
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
    }),
  },
});
