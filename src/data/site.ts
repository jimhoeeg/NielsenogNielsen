// Centralt indhold for sitet. Struktureret, så det senere kan flyttes 1:1 til et headless CMS (fx Sanity).
// Alle fakta stammer fra offentlige kilder og SKAL valideres af Nielsen & Nielsen før lancering.

export const company = {
  name: 'Nielsen & Nielsen Investments',
  legalName: 'Nielsen & Nielsen Investments A/S',
  groupName: 'Nielsen & Nielsen Gruppen A/S',
  groupCvr: '45150380',
  cvr: '', // TODO: CVR-nr. for Nielsen & Nielsen Investments A/S
  street: 'Hvidkærvej 54',
  zip: '5250',
  city: 'Odense SV',
  country: 'DK',
  phone: '', // TODO: telefonnummer til Investments
  email: 'info@nielsen-nielsen.dk', // TODO: bekræft e-mailadresse
  linkedin: 'https://www.linkedin.com/company/nielsen-&-nielsen-holding-a-s',
  founded: 2024,
};

// Link til online mødebooking (fx Microsoft Bookings eller Calendly). Tom = link til kontaktsiden.
export const bookingUrl = ''; // TODO

// Kontaktperson for rådgivere og virksomhedsejere. TODO: navn, titel, telefon og foto.
export const dealContact = {
  name: 'Navn Efternavn',
  title: 'Investeringsansvarlig',
  email: 'investments@nielsen-nielsen.dk', // TODO: bekræft
  phone: '',
};

// Endpoint for formularer (fx Formspree, n8n-webhook eller en serverless function). Tom = demo-tilstand.
export const formEndpoints = {
  contact: '',
  dealflow: '',
  newsletter: '',
};

export const nav = [
  { href: '/investeringer/', label: 'Investeringer' },
  { href: '/investeringer/portefolje/', label: 'Portefølje' },
  { href: '/ejendomme/', label: 'Ejendomme' },
  { href: '/om-os/', label: 'Om os' },
  { href: '/nyheder/', label: 'Nyheder' },
];

export const stats = [
  { value: 1974, label: 'Familierne overtager Micro Matic', plain: true },
  { value: 3, label: 'Generationer i ejerkredsen' },
  { value: 18, label: 'Familiemedlemmer bag Micro Matic' },
  { value: 224, suffix: ' mio.', label: 'Kroner skudt ind i Nielsen & Nielsen Gruppen i 2024' },
];

export const principles = [
  {
    title: 'Tålmodig kapital',
    text: 'Vi har ingen exit-horisont, vi skal nå. Vi investerer med generationer for øje og lader værdien vokse i sit eget tempo.',
  },
  {
    title: 'Industrielt DNA',
    text: 'Familierne har selv bygget en global industrivirksomhed. Vi ved, hvad det kræver at drive forretning, og vi taler ledelsens sprog.',
  },
  {
    title: 'Aktivt, respektfuldt ejerskab',
    text: 'Vi er en engageret sparringspartner i bestyrelseslokalet, men vi blander os ikke i den daglige drift. Tillid er udgangspunktet.',
  },
  {
    title: 'Fynsk forankring, globalt udsyn',
    text: 'Vores rødder er i Odense. Vores investeringer og netværk rækker langt ud over Danmarks grænser.',
  },
];

export const pillars = [
  {
    key: 'investments',
    title: 'Investments',
    text: 'Forvaltning af familiernes formue i børsnoterede værdipapirer og udvalgte direkte investeringer.',
    href: '/investeringer/',
    cta: 'Se vores tilgang',
  },
  {
    key: 'ejendomme',
    title: 'Ejendomme',
    text: 'Moderne, bæredygtige lejeboliger på Fyn med fokus på kvalitet, tryghed og fællesskab siden 1989.',
    href: '/ejendomme/',
    cta: 'Mød Ejendomme',
  },
  {
    key: 'micromatic',
    title: 'Micro Matic',
    text: 'Verdensførende inden for fadølsanlæg og dispenseringsudstyr. Familiernes industrielle fundament siden 1974.',
    href: '/micro-matic/',
    cta: 'Læs om Micro Matic',
  },
];

export const timeline = [
  { year: '1953', title: 'Micro Matic grundlægges', text: 'Ingeniør Bror Kruuse grundlægger Micro Matic.' },
  { year: '1974', title: 'Familierne tager over', text: 'Fem ledende medarbejdere, heriblandt Svend-Aage Nielsen og Carl Christian Nielsen, køber virksomheden. Navnet Nielsen & Nielsen er født.' },
  { year: '1987', title: 'Industrigruppen vokser', text: 'Triax bliver en del af Nielsen & Nielsen Holding. Senere følger også Nassau Door og Senmatic.' },
  { year: '1989', title: 'De første boliger i Højby', text: 'C.C. Nielsen og Svend-Aage Nielsen opfører de første boliger. Starten på Nielsen & Nielsen Ejendomme.' },
  { year: '2015', title: 'Triax videresolgt', text: 'Efter 28 års ejerskab overdrages Triax til Polaris Private Equity.' },
  { year: '2017', title: 'Næste generation', text: 'Anden generation overtager ledelsen af Nielsen & Nielsen Ejendomme.' },
  { year: '2024', title: '50 år og et nyt kapitel', text: 'Nielsen & Nielsen Gruppen og Nielsen & Nielsen Investments stiftes. Hver familie skyder 112 mio. kr. ind.' },
  { year: 'I dag', title: 'Tre generationer', text: 'Micro Matic ejes af 18 familiemedlemmer fra 2. og 3. generation, og arbejdet fortsætter med samme tålmodighed.' },
];

export type Investment = {
  slug: string;
  name: string;
  sector: string;
  status: 'Aktiv' | 'Realiseret';
  since: string;
  exit?: string;
  role: string;
  summary: string;
  body: string[];
  url?: string;
  quote?: { text: string; by: string };
};

// TODO: Kunden udfylder/godkender hvilke investeringer der må vises offentligt.
export const investments: Investment[] = [
  {
    slug: 'micro-matic',
    name: 'Micro Matic',
    sector: 'Industri',
    status: 'Aktiv',
    since: '1974',
    role: 'Hovedejer via familiernes holdingselskaber',
    summary: 'Global leverandør af fadølsanlæg og udstyr til dispensering af drikkevarer.',
    body: [
      'Micro Matic blev grundlagt i 1953 og har siden 1974 været ejet af familierne Nielsen og Nielsen. Virksomheden har hovedsæde i Odense og er i dag en af verdens førende leverandører af udstyr til dispensering af fadøl og andre drikkevarer.',
      'Ejerskabet ligger i dag hos 18 familiemedlemmer fra anden og tredje generation gennem SAAN Holding A/S og C.C.N. Holding A/S.',
    ],
    url: 'https://www.micro-matic.com/',
  },
  {
    slug: 'nielsen-nielsen-ejendomme',
    name: 'Nielsen & Nielsen Ejendomme',
    sector: 'Ejendomme',
    status: 'Aktiv',
    since: '1989',
    role: 'Ejer og udvikler',
    summary: 'Moderne, bæredygtige lejeboliger i Højby, Dyrup, Bellinge og Morud.',
    body: [
      'Nielsen & Nielsen Ejendomme udvikler og driver lejeboliger af høj kvalitet med lav bebyggelse, grønne omgivelser og gennemtænkt arkitektur.',
      'Siden 2017 har næste generation stået i spidsen for virksomheden.',
    ],
    url: 'https://nnejendomme.dk/',
  },
  {
    slug: 'borsnoterede-vaerdipapirer',
    name: 'Børsnoterede værdipapirer',
    sector: 'Finansielle aktiver',
    status: 'Aktiv',
    since: '2024',
    role: 'Langsigtet porteføljeforvaltning',
    summary: 'En diversificeret portefølje af børsnoterede aktier og obligationer.',
    body: [
      'Nielsen & Nielsen Investments blev stiftet i 2024 for at forvalte en del af familiernes formue i børsnoterede værdipapirer med fokus på kapitalbevarelse og langsigtet vækst.',
    ],
  },
  {
    slug: 'triax',
    name: 'Triax',
    sector: 'Industri',
    status: 'Realiseret',
    since: '1987',
    exit: '2015',
    role: 'Ejer',
    summary: 'Antenne-, satellit- og netværksløsninger. Solgt til Polaris Private Equity i 2015.',
    body: [
      'Triax var en del af Nielsen & Nielsen Holding i 28 år. I 2015 blev virksomheden overdraget til Polaris Private Equity med en omsætning på 82 mio. euro og 310 medarbejdere.',
    ],
    url: 'https://www.triax.com/',
  },
  {
    slug: 'nassau-door',
    name: 'Nassau Door',
    sector: 'Industri',
    status: 'Realiseret',
    since: '', // TODO
    exit: '', // TODO
    role: 'Ejer',
    summary: 'Europæisk leverandør af industriporte. Solgt til ASSA ABLOY.',
    body: [
      'Nassau Door udviklede sig under familiernes ejerskab til en betydelig europæisk leverandør af industrielle sektionsporte og blev siden solgt til ASSA ABLOY.',
    ],
  },
];

// Citater fra ledere i porteføljeselskaber og samarbejdspartnere.
// TODO: Erstat pladsholderne med rigtige, godkendte citater (og sæt placeholder: false).
export const testimonials = [
  {
    quote: 'Pladsholder: et citat fra en direktør i porteføljen om, hvordan det er at have familierne som ejere, fx tålmodigheden og den industrielle sparring.',
    name: 'Navn Efternavn',
    role: 'Administrerende direktør, porteføljeselskab',
    placeholder: true,
  },
  {
    quote: 'Pladsholder: et citat fra en tidligere ejer om generationsskiftet og trygheden for medarbejderne.',
    name: 'Navn Efternavn',
    role: 'Tidligere ejer',
    placeholder: true,
  },
  {
    quote: 'Pladsholder: et citat fra en M&A-rådgiver om samarbejdet: fortrolighed, hurtige svar og kort beslutningsvej.',
    name: 'Navn Efternavn',
    role: 'Partner, M&A-rådgiver',
    placeholder: true,
  },
];

export const sectors = [...new Set(investments.map((i) => i.sector))];

export type NewsItem = {
  slug: string;
  date: string; // ISO
  title: string;
  excerpt: string;
  body: string[];
  tag: string;
};

// TODO: Erstattes af rigtige nyheder fra CMS. Eksemplerne bygger på offentligt kendte begivenheder.
export const news: NewsItem[] = [
  {
    slug: 'ny-hjemmeside',
    date: '2026-10-07',
    tag: 'Nyhed',
    title: 'Nielsen & Nielsen samler gruppen under én digital adresse',
    excerpt: 'Investments, Ejendomme og historien bag Micro Matic præsenteres nu samlet på nielsen-nielsen.dk.',
    body: [
      'Med den nye hjemmeside samler Nielsen & Nielsen for første gang fortællingen om familiernes aktiviteter ét sted.',
      'Siden henvender sig til virksomhedsejere, rådgivere og samarbejdspartnere, der vil vide mere om, hvordan vi arbejder som langsigtet ejer.',
    ],
  },
  {
    slug: 'nielsen-nielsen-gruppen-stiftet',
    date: '2024-09-01',
    tag: 'Selskab',
    title: 'Nielsen & Nielsen Gruppen stiftes med 224 mio. kr.',
    excerpt: 'De to ejerfamilier bag Micro Matic skyder hver 112 mio. kr. ind i et nyt fælles investeringsselskab.',
    body: [
      'I 2024 stiftede de to ejerfamilier bag Micro Matic Nielsen & Nielsen Gruppen A/S. Hver familie skød 112 mio. kr. ind.',
      'Samtidig blev Nielsen & Nielsen Investments A/S etableret til at forvalte formuen i værdipapirer.',
    ],
  },
  {
    slug: '50-aar-med-micro-matic',
    date: '2024-06-01',
    tag: 'Historie',
    title: '50 år med Micro Matic',
    excerpt: 'I 1974 overtog Svend-Aage Nielsen og Carl Christian Nielsen Micro Matic. Et halvt århundrede senere er tre generationer med i ejerkredsen.',
    body: [
      'I 1974 købte fem ledende medarbejdere Micro Matic af grundlæggeren Bror Kruuse. Blandt dem var Svend-Aage Nielsen og Carl Christian Nielsen.',
      'I dag er virksomheden ejet af 18 familiemedlemmer fra anden og tredje generation, og den er en af verdens førende inden for dispensering af drikkevarer.',
    ],
  },
];

export const formatDate = (iso: string, locale = 'da-DK') =>
  new Date(iso).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
