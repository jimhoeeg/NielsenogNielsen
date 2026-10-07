// Måling af brugerrejsen med cookieløs Plausible (ingen cookie-banner nødvendigt).
// Er PUBLIC_PLAUSIBLE_DOMAIN ikke sat, sker der intet.
type Props = Record<string, string | number>;
declare global {
  interface Window { plausible?: (event: string, opts?: { props?: Props }) => void }
}

export function track(event: string, props?: Props) {
  window.plausible?.(event, props ? { props } : undefined);
}
