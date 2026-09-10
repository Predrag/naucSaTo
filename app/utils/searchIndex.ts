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
    title: 'Skalárne a vektorové veličiny',
    description: 'Skalár vs. vektor, zobrazenie vektora, sčítanie vektorov, rozklad na zložky, Pytagorova veta.',
    path: '/fyzika/uvod/skalar-vektor',
    category: 'Fyzika / Úvod',
    keywords: 'skalar vektor sila rychlost zrychlenie scitanie rozklad zlozky trojuholnik rovnobeznik',
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

  // ── Mechanika ────────────────────────────────────────────────────────────────
  {
    title: 'Mechanika',
    description: 'Prehľad tém mechaniky — kinematika, Newtonove zákony, gravitácia, vrhy, energia.',
    path: '/fyzika/mechanika',
    category: 'Fyzika / Mechanika',
    keywords: 'mechanika pohyb sila hmotnost dynamika kinematika',
  },
  {
    title: 'Kinematika',
    description: 'Rýchlosť, zrýchlenie, rovnomerný a rovnomerne zmenený pohyb.',
    path: '/fyzika/mechanika/kinematika',
    category: 'Fyzika / Mechanika',
    keywords: 'kinematika rychlost zrychlenie pohyb rovnomerny',
  },
  {
    title: 'Newtonove zákony pohybu',
    description: 'Zákon zotrvačnosti, zákon sily F = ma, zákon akcie a reakcie.',
    path: '/fyzika/mechanika/newtonove-zakony',
    category: 'Fyzika / Mechanika',
    keywords: 'newton zakony sila hmotnost zotrvacnost dynamika',
  },
  {
    title: 'Gravitácia a voľný pád',
    description: 'Newtonov gravitačný zákon, gravitačné zrýchlenie g, voľný pád.',
    path: '/fyzika/mechanika/gravitacia',
    category: 'Fyzika / Mechanika',
    keywords: 'gravitacia volny pad g zrychlenie newton zem',
  },
  {
    title: 'Vrhy telies',
    description: 'Vodorovný vrh, šikmý vrh, rozklad pohybu na zložky.',
    path: '/fyzika/mechanika/vrhy',
    category: 'Fyzika / Mechanika',
    keywords: 'vrh vodorovny sikmy teleso trajektoria',
  },
  {
    title: 'Pohyb po kružnici',
    description: 'Rovnomerný pohyb po kružnici, uhlová rýchlosť, perióda, dostredivá sila.',
    path: '/fyzika/mechanika/pohyb-po-kruznici',
    category: 'Fyzika / Mechanika',
    keywords: 'kruznica pohyb uhlova rychlost perioda frekvencia dostrediva sila',
  },
  {
    title: 'Práca a energia',
    description: 'Mechanická práca, kinetická a potenciálna energia, zachovanie energie, výkon.',
    path: '/fyzika/mechanika/praca-energia',
    category: 'Fyzika / Mechanika',
    keywords: 'praca energia kineticka potencialna vykon zachovanie',
  },
  {
    title: 'Mechanika tekutín',
    description: 'Tlak v kvapalinách, Pascalov zákon, Archimedov zákon, vztlaková sila.',
    path: '/fyzika/mechanika/mechanika-tekutin',
    category: 'Fyzika / Mechanika',
    keywords: 'tekutiny tlak pascal archimedes vztlak kvapalina',
  },

  // Ďalšie témy fyziky
  {
    title: 'Molekulová fyzika a termodynamika',
    description: 'Teplo, teplota, skupenstvá látok, ideálny plyn a termodynamické deje.',
    path: '/fyzika/molekulova-fyzika',
    category: 'Fyzika',
    keywords: 'molekulova fyzika termodynamika teplo teplota plyn skupenstava',
  },
  {
    title: 'Kmity a vlnenie',
    description: 'Mechanické kmitanie, vlnenie, zvuk a jeho vlastnosti.',
    path: '/fyzika/kmity-vlnenie',
    category: 'Fyzika',
    keywords: 'kmity vlnenie zvuk mechanicke kmitanie frekvencia amplituda',
  },
  {
    title: 'Elektrický prúd',
    description: 'Ohmov zákon, rezistory, výkon — elektrické obvody a zákon zachovania energie.',
    path: '/fyzika/elektricky-prud',
    category: 'Fyzika',
    keywords: 'elektricky prud ohm rezistor vykon napatie odpor obvod',
  },
  {
    title: 'Magnetické pole',
    description: 'Magnetická indukcia, elektromagnetická indukcia — magnety a elektromagnety.',
    path: '/fyzika/magneticke-pole',
    category: 'Fyzika',
    keywords: 'magneticke pole indukcna elektromagneticka indukcnost magnet',
  },
  {
    title: 'Optika',
    description: 'Odraz, lom svetla, šošovky, zrkadlá a spektrum — optické prístroje.',
    path: '/fyzika/optika',
    category: 'Fyzika',
    keywords: 'optika odraz lom sosovka zrkadlo spektrum svetlo',
  },
  {
    title: 'Atómová a jadrová fyzika',
    description: 'Rádioaktivita, jadrová energia — štruktúra atómu a jadrové reakcie.',
    path: '/fyzika/atomova-fyzika',
    category: 'Fyzika',
    keywords: 'atomova jadrova fyzika radioaktivita jadro energia reakcia',
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
