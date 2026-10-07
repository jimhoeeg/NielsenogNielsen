// Gør interne stier base-bevidste, så sitet virker både på et eget domæne (base "/")
// og på GitHub Pages i en undermappe (fx "/NielsenogNielsen/").
// Funktionen er idempotent: en sti, der allerede har base-præfikset, returneres uændret.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path; // eksterne, mailto:, #anker
  if (BASE && (path === BASE || path.startsWith(BASE + '/'))) return path;
  return BASE + path;
}

/** Absolut, base-bevidst URL (til canonical, JSON-LD, delingslinks m.m.). */
export function absUrl(path: string, site: URL): string {
  return new URL(url(path), site).href;
}
