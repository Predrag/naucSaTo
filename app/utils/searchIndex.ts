export interface SearchEntry {
  title: string
  description: string
  path: string
  category: string
  keywords?: string
}

export const searchIndex: SearchEntry[] = [
  // ── Fyzika ────────────────────────────────────────────────────────────────
  {
    title: 'Fyzika',
    description: 'Prehľad tém fyziky — mechanika, optika, elektrina a ďalšie.',
    path: '/fyzika',
    category: 'Fyzika',
    keywords: 'fyzika predmet',
  },

  // Úvod
  {
    title: 'Úvod do fyziky',
    description: 'Základy fyziky — veličiny, jednotky, meranie.',
    path: '/fyzika/uvod',
    category: 'Fyzika / Úvod',
    keywords: 'uvod zaklady fyzika',
  },
  {
    title: 'Meranie fyzikálnych veličín',
    description: 'Fyzikálna veličina, meracie prístroje, chyby merania, platné číslice, vedecký zápis.',
    path: '/fyzika/uvod/meranie-velicin',
    category: 'Fyzika / Úvod',
    keywords: 'meranie chyba systematicka nahodna absolutna relativna platne cislice voltmeter ampermetr vahy stopky',
  },
  {
    title: 'Medzinárodná sústava jednotiek',
    description: 'Sústava SI, 7 základných jednotiek, predpony kilo mega mili, odvodené jednotky newton joule watt pascal hertz coulomb.',
    path: '/fyzika/uvod/medzinarodna-sustava',
    category: 'Fyzika / Úvod',
    keywords: 'SI jednotky meter kilogram sekunda amper kelvin mol kandela predpony',
  },

  // Osobnosti — medzinárodné
  {
    title: 'Isaac Newton',
    description: 'Anglický fyzik, tri zákony pohybu, gravitácia, diferenciálny počet.',
    path: '/fyzika/osobnosti/newton',
    category: 'Osobnosti fyziky',
    keywords: 'newton gravitacia pohyb zakony sila',
  },
  {
    title: 'James Prescott Joule',
    description: 'Anglický fyzik, zákon zachovania energie, mechanický ekvivalent tepla.',
    path: '/fyzika/osobnosti/joule',
    category: 'Osobnosti fyziky',
    keywords: 'joule energia teplo termodynamika',
  },
  {
    title: 'James Watt',
    description: 'Škótsky vynálezca, zdokonalenie parného stroja, priemyselná revolúcia.',
    path: '/fyzika/osobnosti/watt',
    category: 'Osobnosti fyziky',
    keywords: 'watt parny stroj vykon priemysel',
  },
  {
    title: 'Blaise Pascal',
    description: 'Francúzsky vedec, Pascalov zákon tlaku, hydraulika, kalkulačka Pascalina.',
    path: '/fyzika/osobnosti/pascal',
    category: 'Osobnosti fyziky',
    keywords: 'pascal tlak hydraulika kvapalina pravdepodobnost',
  },
  {
    title: 'Heinrich Hertz',
    description: 'Nemecký fyzik, elektromagnetické vlny, fotoelektrický efekt, frekvencia.',
    path: '/fyzika/osobnosti/hertz',
    category: 'Osobnosti fyziky',
    keywords: 'hertz elektromagneticke vlny frekvencia radio',
  },
  {
    title: 'Charles-Augustin de Coulomb',
    description: 'Francúzsky fyzik, Coulombov zákon elektrických síl, torzná váha.',
    path: '/fyzika/osobnosti/coulomb',
    category: 'Osobnosti fyziky',
    keywords: 'coulomb elektrina naboj sila',
  },

  // Osobnosti — slovenské
  {
    title: 'Jozef Maximilián Petzval',
    description: 'Fyzik zo Spišskej Belej, zakladateľ modernej optiky, fotografický objektív.',
    path: '/fyzika/osobnosti/petzval',
    category: 'Osobnosti fyziky',
    keywords: 'petzval optika fotografia objektiv spiska bela slovensko',
  },
  {
    title: 'Štefan Anián Jedlík',
    description: 'Fyzik z Zemného, prvý elektromotor dynamo, benediktínsky kňaz.',
    path: '/fyzika/osobnosti/jedlik',
    category: 'Osobnosti fyziky',
    keywords: 'jedlik elektromotor dynamo elektromagnetizmus slovensko',
  },
  {
    title: 'Ján Andrej Segner',
    description: 'Bratislavský matematik a fyzik, Segnerovo koleso, povrchové napätie.',
    path: '/fyzika/osobnosti/segner',
    category: 'Osobnosti fyziky',
    keywords: 'segner koleso turbina povrchove napatie mechanika tekutin bratislava',
  },
  {
    title: 'Aurel Bohuslav Stodola',
    description: 'Inžinier z Liptovského Mikuláša, teória turbín, priateľ Einsteina.',
    path: '/fyzika/osobnosti/stodola',
    category: 'Osobnosti fyziky',
    keywords: 'stodola turbina termodynamika parny stroj einstein liptovsky mikulas',
  },
  {
    title: 'Maximilián Hell',
    description: 'Astronóm z Banskej Štiavnice, prechod Venuše 1769, Viedenská hvezdáreň.',
    path: '/fyzika/osobnosti/hell',
    category: 'Osobnosti fyziky',
    keywords: 'hell astronomia venus prechod hvezdaren banska stiavnica',
  },
  {
    title: 'Jozef Murgaš',
    description: 'Vynálezca z Tajova, bezdrôtová telegrafia, rádiové vlny, patenty.',
    path: '/fyzika/osobnosti/murgas',
    category: 'Osobnosti fyziky',
    keywords: 'murgas radio bezdrotova telegrafia vlny tajov slovensko',
  },

  // ── Matematika ────────────────────────────────────────────────────────────
  {
    title: 'Matematika',
    description: 'Prehľad tém matematiky — zlomky, rovnice, geometria, funkcie.',
    path: '/matematika',
    category: 'Matematika',
    keywords: 'matematika predmet',
  },

  // ── Chémia ────────────────────────────────────────────────────────────────
  {
    title: 'Chémia',
    description: 'Prehľad tém chémie — prvky, reakcie, periodická tabuľka.',
    path: '/chemia',
    category: 'Chémia',
    keywords: 'chemia predmet',
  },
]
