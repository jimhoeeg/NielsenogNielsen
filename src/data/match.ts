// Match-testen: "Er vi det rigtige match?"
// Spørgsmål, point og tekster ligger her, så de kan justeres uden at røre komponenten.
// TODO: Vægtning og formuleringer skal godkendes af Nielsen & Nielsen – de afspejler
// investeringskriterierne på /investeringer/, som også er udkast.

export type Option = {
  value: string;
  label: string;
  hint?: string;
  points: number;
  /** Vises under "Det taler for et match" */
  plus?: string;
  /** Vises under "Godt at vide" */
  note?: string;
  /** Værdi der forudfyldes i kontaktformularens select (rolle/omsætning) */
  prefill?: string;
};

export type Question = {
  id: string;
  title: string;
  /** Kort label til opsummering og forudfyldt besked */
  short: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    id: 'rolle',
    title: 'Hvad er din rolle i virksomheden?',
    short: 'Rolle',
    options: [
      { value: 'ejer', label: 'Ejer eller medejer', points: 0, prefill: 'Ejer' },
      { value: 'ledelse', label: 'Del af ledelsen', points: 0, prefill: 'Direktør' },
      { value: 'raadgiver', label: 'Rådgiver', hint: 'M&A, revisor, advokat, bank', points: 0, prefill: 'Rådgiver', plus: 'Vi samarbejder gerne med rådgivere og behandler alle cases fortroligt.' },
      { value: 'andet', label: 'Andet', points: 0, prefill: 'Andet' },
    ],
  },
  {
    id: 'branche',
    title: 'Hvilken branche er virksomheden i?',
    short: 'Branche',
    options: [
      { value: 'industri', label: 'Industri og produktion', points: 25, plus: 'Industri og produktion er vores DNA. Familierne har selv bygget Micro Matic.' },
      { value: 'tech', label: 'Teknologi og software', points: 20, plus: 'Teknologi med international vækst ligger inden for vores interesseområde.' },
      { value: 'b2b', label: 'B2B-services', points: 20, plus: 'Veldrevne B2B-virksomheder med stabil indtjening passer godt til langsigtet ejerskab.' },
      { value: 'handel', label: 'Handel og forbrug', points: 10, note: 'Handel og forbrug er ikke vores primære fokus, men vi ser gerne på den rigtige case.' },
      { value: 'ejendomme', label: 'Ejendomme', points: 5, note: 'Vi investerer primært i ejendomme gennem egne projekter i Nielsen & Nielsen Ejendomme.' },
      { value: 'andet', label: 'Andet', points: 10 },
    ],
  },
  {
    id: 'omsaetning',
    title: 'Hvad er virksomhedens omsætning cirka?',
    short: 'Omsætning',
    options: [
      { value: 'u50', label: 'Under 50 mio. kr.', points: 5, prefill: 'Under 50 mio. kr.', note: 'Mindre virksomheder ligger ofte under vores typiske størrelse, men skriv endelig alligevel.' },
      { value: '50-250', label: '50–250 mio. kr.', points: 25, prefill: '50–250 mio. kr.', plus: 'Størrelsen ligger inden for det, vi typisk kigger efter.' },
      { value: '250-1000', label: '250 mio.–1 mia. kr.', points: 25, prefill: '250 mio.–1 mia. kr.', plus: 'Størrelsen ligger inden for det, vi typisk kigger efter.' },
      { value: 'o1000', label: 'Over 1 mia. kr.', points: 15, prefill: 'Over 1 mia. kr.', note: 'Ved større transaktioner investerer vi typisk sammen med andre.' },
    ],
  },
  {
    id: 'situation',
    title: 'Hvad beskriver bedst jeres situation?',
    short: 'Situation',
    options: [
      { value: 'generationsskifte', label: 'Vi står foran et generationsskifte', points: 25, plus: 'Generationsskifter er præcis den situation, hvor en tålmodig familieejer gør en forskel.' },
      { value: 'delvist', label: 'Vi ønsker at sælge en del af virksomheden', points: 20, plus: 'Vi går gerne ind som medejer side om side med den nuværende ejer.' },
      { value: 'vaekst', label: 'Vi søger kapital til vækst', points: 15, plus: 'Vi kan bidrage med både kapital og industriel erfaring til næste vækstfase.' },
      { value: 'fuldt', label: 'Vi ønsker at sælge hele virksomheden', points: 15 },
      { value: 'undersoeger', label: 'Vi undersøger bare mulighederne', points: 10, note: 'En uforpligtende snak er en god måde at blive klogere på mulighederne.' },
    ],
  },
  {
    id: 'horisont',
    title: 'Hvornår forventer I, at et nyt ejerskab skal være på plads?',
    short: 'Tidshorisont',
    options: [
      { value: 'u1', label: 'Inden for et år', points: 10 },
      { value: '1-3', label: 'Om 1–3 år', points: 15, plus: 'Der er god tid til at lære hinanden at kende. Det giver de bedste partnerskaber.' },
      { value: 'o3', label: 'Om mere end 3 år', points: 10, plus: 'Det er klogt at starte dialogen tidligt.' },
      { value: 'ved-ikke', label: 'Ved ikke endnu', points: 10 },
    ],
  },
  {
    id: 'vigtigst',
    title: 'Hvad betyder mest for dig i en ny ejer?',
    short: 'Vigtigst',
    options: [
      { value: 'langsigtet', label: 'Et langsigtet perspektiv', points: 15, plus: 'Vi har ingen exit-horisont. Vi ejer i generationer.' },
      { value: 'kontinuitet', label: 'Tryghed for medarbejdere og kultur', points: 15, plus: 'Kontinuitet og respekt for kulturen er kernen i vores måde at eje på.' },
      { value: 'sparring', label: 'Industriel sparring', points: 15, plus: 'Familierne har drevet en global industrivirksomhed i over 50 år. Den erfaring stiller vi til rådighed.' },
      { value: 'pris', label: 'Højeste pris og hurtig proces', points: 0, note: 'Vi er grundige og langsigtede, ikke nødvendigvis de hurtigste eller dyreste budgivere.' },
    ],
  },
];

export const maxScore = questions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.points)), 0);

export const tiers = [
  {
    min: 75,
    key: 'strong',
    title: 'Det lyder som et rigtig godt match',
    text: 'Jeres situation ligger tæt på det, vi som langsigtet familieejer kigger efter. Vi vil meget gerne høre mere.',
  },
  {
    min: 50,
    key: 'good',
    title: 'Et godt udgangspunkt for en snak',
    text: 'Meget peger i den rigtige retning. En uforpligtende samtale er den bedste måde at finde ud af, om vi passer sammen.',
  },
  {
    min: 0,
    key: 'maybe',
    title: 'Måske ikke lige nu, men lad os tale sammen',
    text: 'Jeres situation ligger lidt uden for vores typiske fokus. Vi ser dog altid gerne på den rigtige case, og vi kan måske pege jer i en god retning.',
  },
] as const;

export const nextSteps = [
  { title: 'Fortrolig henvendelse', text: 'Du sender en kort beskrivelse. Formularen er allerede udfyldt med dine svar.' },
  { title: 'Første samtale', text: 'Vi vender tilbage og aftaler et uforpligtende møde.' },
  { title: 'Gensidig afklaring', text: 'Vi finder sammen ud af, om der er basis for et partnerskab.' },
];
