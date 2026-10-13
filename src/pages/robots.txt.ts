import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';

// Gerado a partir de site.ts para acompanhar a troca de domínio.
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', SITE_URL).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
