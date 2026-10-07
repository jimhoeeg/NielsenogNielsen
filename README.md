# nielsen-nielsen.dk – Nielsen & Nielsen Investments

Ny hjemmeside for Nielsen & Nielsen Investments. Bygget med [Astro](https://astro.build) som et statisk site: hurtigt, sikkert og SEO-venligt.

## Kom i gang

```bash
npm install
npm run dev       # udviklingsserver på http://localhost:4321
npm run build     # statisk build i ./dist
npm run preview   # se det byggede site
```

Kan hostes på Vercel, Netlify eller et hvilket som helst statisk webhotel (output: `dist/`).

### GitHub Pages (fremvisning)
`.github/workflows/deploy-pages.yml` bygger og deployer automatisk ved push. Under **Settings → Pages → Build and deployment** skal *Source* stå på **GitHub Actions**. Workflowet sætter selv undermappen (`BASE_PATH`) og markerer demo-versionen `noindex`.

Brug altid `url('/sti/')` fra `src/lib/url.ts` til interne links, så de virker både i undermappen og på det endelige domæne.

## Struktur

| Sti | Indhold |
|---|---|
| `src/data/site.ts` | **Alt redigerbart indhold**: firmadata, nøgletal, principper, tidslinje, portefølje, nyheder, formular-endpoints. Er struktureret, så det kan flyttes direkte til et headless CMS (fx Sanity). |
| `src/styles/global.css` | Designsystem: farver/fonte fra nnejendomme.dk (rød `#DF331E`, mørk `#151825`, Roboto), knapper, grid og scroll-animationer |
| `src/layouts/Base.astro` | Sideskabelon med SEO, scroll-reveal, tællere og parallax |
| `src/components/` | Header, footer, logo, tidslinje, nøgletal, kort, CTA, formularer m.m. |
| `src/pages/` | Sider. `[slug].astro` genererer case- og nyhedssider automatisk. |
| `public/` | `robots.txt`, `llms.txt` (AI-søgning), favicon og delingsbillede |

## Features
- Scroll-animationer: indhold flyder ind, overskrifter afsløres ord for ord, tællere tæller op, tidslinjen tegnes, mens man scroller, og brand-dråberne har parallax. Alt respekterer "reducer bevægelse".
- Header der skjules ved scroll ned, læse-progressbar og mobilmenu.
- **Match-test** (`/match/`): seks spørgsmål giver et personligt svar (score, begrundelser og næste skridt) og forudfylder den fortrolige deal flow-formular. Spørgsmål og point redigeres i `src/data/match.ts`.
- Filtrerbar portefølje med en case-side pr. investering.
- Interaktivt diagram over ejerstrukturen (governance).
- Kontaktformular og fortrolig deal flow-formular ("Præsentér din virksomhed") med upload af præsentation, samt tilmelding til nyhedsbrev.
- Nyheder og presserum. Faktaside med FAQ.
- Dansk med engelsk version (`/en/`) og hreflang.
- SEO: unikke titler og beskrivelser, canonical, Open Graph, sitemap, robots, strukturerede data (Organization, WebSite, BreadcrumbList, NewsArticle, FAQPage, ContactPage) og `llms.txt`.
- Selvhostede skrifttyper (ingen Google-kald, GDPR-venligt) og ingen cookies.
- Tilgængelighed: skip-link, tastaturnavigation, fokusmarkering, aria-attributter og semantisk HTML.

## Før lancering (TODO)
Søg efter `TODO` i koden. De vigtigste punkter:
1. **Fakta**: Ejerstruktur, tal og historik bygger på offentlige kilder og skal godkendes af kunden.
2. **Logo**: Erstat den genskabte logo-SVG (`src/components/Logo.astro`, `public/favicon.svg`) med de officielle filer.
3. **Fotos**: Illustrationerne i `Visual.astro` er pladsholdere. Lav en fotodag med familien, Fyn, fabrikken og boligerne.
4. **Personer**: Navne og roller på governance-siden.
5. **Portefølje og nyheder**: Hvad må vises offentligt?
6. **Match-test**: Vægtning og tekster i `src/data/match.ts` skal godkendes.
7. **Formularer**: Indsæt endpoints i `formEndpoints` i `src/data/site.ts` (fx Formspree, n8n eller en serverless function). Uden dem kører formularerne i demo-tilstand.
8. **Kontakt**: CVR, telefon og e-mail for Investments.
9. **Juridisk**: Privatlivspolitikken skal gennemgås juridisk.
10. **Domæne**: standard-`site` i `astro.config.mjs` og `public/llms.txt` (nu `nielsen-nielsen.dk`). Fjern `PUBLIC_NOINDEX` i workflowet, når sitet går live.
11. **Måling**: Cookieløs analyse (Plausible/Matomo) samt Google Search Console og Bing Webmaster Tools.
