// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import robotsTxt from 'astro-robots-txt';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.devvyy.xyz',
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    sentry(),
    spotlightjs(),
    robotsTxt(),
    purgecss(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

