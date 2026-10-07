import type { APIRoute } from 'astro';

// Demo-builds (fx GitHub Pages) blokeres for søgemaskiner, så de ikke konkurrerer med det rigtige domæne.
const demo = import.meta.env.PUBLIC_NOINDEX === 'true';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  const body = demo
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
