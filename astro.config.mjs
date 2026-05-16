import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://carlottadellacasa.it',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
