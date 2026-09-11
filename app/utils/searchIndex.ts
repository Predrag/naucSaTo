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
    keywords: 'fyzika predmet prirodoveda veda gymnazium stredna skola',
  },

  // Úvod
  {
    title: 'Úvod do fyziky',
    description: 'Základy fyziky — veličiny, jednotky, meranie.',
    path: '/fyzika/uvod',
    category: 'Fyzika / Úvod',
    keywords: 'uvod zaklady fyzika uvod do fyziky fyzikalne veliciny zaciatok',
  },
  {
    title: 'Skalárne a vektorové veličiny',
    description: 'Skalár vs. vektor, zobrazenie vektora, sčítanie vektorov, rozklad na zložky, Pytagorova veta.',
    path: '/fyzika/uvod/skalar-vektor',
    category: 'Fyzika / Úvod',
    keywords: 'skalar vektor skalarne vektorove veliciny sila rychlost zrychlenie scitanie vektorov rozklad na zlozky trojuholnik rovnobeznik metoda trojuholnika metoda rovnobeznika vyslednica dostrediva sila hybnost impuls',
  },
  {
    title: 'Meranie fyzikálnych veličín',
    description: 'Fyzikálna veličina, meracie prístroje, chyby merania, platné číslice, vedecký zápis.',
    path: '/fyzika/uvod/meranie-velicin',
    category: 'Fyzika / Úvod',
    keywords: 'meranie chyba systematicka nahodna absolutna relativna platne cislice voltmeter ampermetr vahy stopky posuvne meradlo pravitko teplomer neistota merania typ A typ B kombinovana neistota aritmeticky priemer smerodajna odchylka zaokruhlovanie vedecky zapis',
  },
  {
    title: 'Medzinárodná sústava jednotiek',
    description: 'Sústava SI, 7 základných jednotiek, predpony kilo mega mili, odvodené jednotky newton joule watt pascal hertz coulomb.',
    path: '/fyzika/uvod/medzinarodna-sustava',
    category: 'Fyzika / Úvod',
    keywords: 'SI jednotky meter kilogram sekunda amper kelvin mol kandela predpony kilo mega mili mikro nano piko giga tera hekto deka deci centi newton joule watt pascal hertz coulomb odvodene jednotky zakladne jednotky sustava SI prevod jednotiek prevodnik',
  },

  // Osobnosti — medzinárodné
  {
    title: 'Isaac Newton',
    description: 'Anglický fyzik, tri zákony pohybu, gravitácia, diferenciálny počet.',
    path: '/fyzika/osobnosti/newton',
    category: 'Osobnosti fyziky',
    keywords: 'newton isaac newton gravitacia pohyb newtonove zakony zakon zotrvacnosti zakon sily akcia reakcia gravitacny zakon teleskop optika diferencialni pocet anglicky fyzik',
  },
  {
    title: 'James Prescott Joule',
    description: 'Anglický fyzik, zákon zachovania energie, mechanický ekvivalent tepla.',
    path: '/fyzika/osobnosti/joule',
    category: 'Osobnosti fyziky',
    keywords: 'joule james prescott joule energia teplo termodynamika zakon zachovania energie mechanicky ekvivalent tepla sladar pivovar anglicky fyzik',
  },
  {
    title: 'James Watt',
    description: 'Škótsky vynálezca, zdokonalenie parného stroja, priemyselná revolúcia.',
    path: '/fyzika/osobnosti/watt',
    category: 'Osobnosti fyziky',
    keywords: 'watt james watt parny stroj vykon priemyselna revolucia konska sila horsepower skotsky vynalezca kondenzator engineer',
  },
  {
    title: 'Blaise Pascal',
    description: 'Francúzsky vedec, Pascalov zákon tlaku, hydraulika, kalkulačka Pascalina.',
    path: '/fyzika/osobnosti/pascal',
    category: 'Osobnosti fyziky',
    keywords: 'pascal blaise pascal tlak hydraulika kvapalina pravdepodobnost pascalina kalkulacka hydraulicky lis pascalov zakon francuzsky vedec matematik',
  },
  {
    title: 'Heinrich Hertz',
    description: 'Nemecký fyzik, elektromagnetické vlny, fotoelektrický efekt, frekvencia.',
    path: '/fyzika/osobnosti/hertz',
    category: 'Osobnosti fyziky',
    keywords: 'hertz heinrich hertz elektromagneticke vlny frekvencia radio fotoelektricky efekt radiove vlny nemecky fyzik Hz',
  },
  {
    title: 'Charles-Augustin de Coulomb',
    description: 'Francúzsky fyzik, Coulombov zákon elektrických síl, torzná váha.',
    path: '/fyzika/osobnosti/coulomb',
    category: 'Osobnosti fyziky',
    keywords: 'coulomb charles augustin coulomb elektrina naboj sila coulombov zakon elektrostatika torzna vaha francuzsky fyzik',
  },

  // Osobnosti — slovenské
  {
    title: 'Jozef Maximilián Petzval',
    description: 'Fyzik zo Spišskej Belej, zakladateľ modernej optiky, fotografický objektív.',
    path: '/fyzika/osobnosti/petzval',
    category: 'Osobnosti fyziky',
    keywords: 'petzval jozef petzval optika fotografia objektiv spiska bela slovensko zakladatel modernej optiky fotograficky objektiv aberacia geometricka optika',
  },
  {
    title: 'Štefan Anián Jedlík',
    description: 'Fyzik z Zemného, prvý elektromotor dynamo, benediktínsky kňaz.',
    path: '/fyzika/osobnosti/jedlik',
    category: 'Osobnosti fyziky',
    keywords: 'jedlik stefan jedlik elektromotor dynamo elektromagnetizmus slovensko zemne benediktinski knas prvy elektromotor',
  },
  {
    title: 'Ján Andrej Segner',
    description: 'Bratislavský matematik a fyzik, Segnerovo koleso, povrchové napätie.',
    path: '/fyzika/osobnosti/segner',
    category: 'Osobnosti fyziky',
    keywords: 'segner jan segner koleso turbina povrchove napatie mechanika tekutin bratislava reaktivna vodna turbina',
  },
  {
    title: 'Aurel Bohuslav Stodola',
    description: 'Inžinier z Liptovského Mikuláša, teória turbín, priateľ Einsteina.',
    path: '/fyzika/osobnosti/stodola',
    category: 'Osobnosti fyziky',
    keywords: 'stodola aurel stodola turbina termodynamika parny stroj einstein liptovsky mikulas ETH zurich plynova turbina',
  },
  {
    title: 'Maximilián Hell',
    description: 'Astronóm z Banskej Štiavnice, prechod Venuše 1769, Viedenská hvezdáreň.',
    path: '/fyzika/osobnosti/hell',
    category: 'Osobnosti fyziky',
    keywords: 'hell maximilian hell astronomia venus prechod hvezdaren banska stiavnica jezuitsky knas viedenska hvezdaren 1769',
  },
  {
    title: 'Jozef Murgaš',
    description: 'Vynálezca z Tajova, bezdrôtová telegrafia, rádiové vlny, patenty.',
    path: '/fyzika/osobnosti/murgas',
    category: 'Osobnosti fyziky',
    keywords: 'murgas jozef murgas radio bezdrotova telegrafia vlny tajov slovensko marconi patent bezdrôtová komunikácia rádio kňaz maliar botanik',
  },

  // ── Mechanika ────────────────────────────────────────────────────────────────
  {
    title: 'Mechanika',
    description: 'Prehľad tém mechaniky — kinematika, Newtonove zákony, gravitácia, vrhy, energia.',
    path: '/fyzika/mechanika',
    category: 'Fyzika / Mechanika',
    keywords: 'mechanika pohyb sila hmotnost dynamika kinematika klasicka mechanika newtonova mechanika',
  },
  {
    title: 'Kinematika',
    description: 'Rýchlosť, zrýchlenie, rovnomerný a rovnomerne zmenený pohyb.',
    path: '/fyzika/mechanika/kinematika',
    category: 'Fyzika / Mechanika',
    keywords: 'kinematika rychlost zrychlenie pohyb rovnomerny rovnomerne zmeneny draha cas priamociare pohyb priemerná rychlost okamzita rychlost s t v t graf pohybove rovnice poloh vzorcec brzdenie',
  },
  {
    title: 'Newtonove zákony pohybu',
    description: 'Zákon zotrvačnosti, zákon sily F = ma, zákon akcie a reakcie.',
    path: '/fyzika/mechanika/newtonove-zakony',
    category: 'Fyzika / Mechanika',
    keywords: 'newton newtonove zakony sila hmotnost zotrvacnost dynamika F ma prvy zakon druhy zakon treti zakon akcia reakcia inercia schema volneho telesa vyslednica sil zotrvacna sila trenie naklonena rovina',
  },
  {
    title: 'Gravitácia a voľný pád',
    description: 'Newtonov gravitačný zákon, gravitačné zrýchlenie g, voľný pád.',
    path: '/fyzika/mechanika/gravitacia',
    category: 'Fyzika / Mechanika',
    keywords: 'gravitacia volny pad g gravitacne zrychlenie 9 81 newton gravitacny zakon tiah telesa G mg pád vzduchovym odporom terminalná rychlost volny pad vzorec',
  },
  {
    title: 'Vrhy telies',
    description: 'Vodorovný vrh, šikmý vrh, rozklad pohybu na zložky.',
    path: '/fyzika/mechanika/vrhy',
    category: 'Fyzika / Mechanika',
    keywords: 'vrh vodorovny sikmy vrh telies trajektoria parabola cas letu maximalny dosah maximalna vyska zlozky pohybu šikmý vrh vodorovný vrh vzorce vrh zvisle nahor',
  },
  {
    title: 'Pohyb po kružnici',
    description: 'Rovnomerný pohyb po kružnici, uhlová rýchlosť, perióda, dostredivá sila.',
    path: '/fyzika/mechanika/pohyb-po-kruznici',
    category: 'Fyzika / Mechanika',
    keywords: 'kruznica pohyb uhlova rychlost omega perioda frekvencia dostrediva sila centripetalna sila obvodova rychlost zrychlenie kulky satelit otacky',
  },
  {
    title: 'Práca a energia',
    description: 'Mechanická práca, kinetická a potenciálna energia, zachovanie energie, výkon.',
    path: '/fyzika/mechanika/praca-energia',
    category: 'Fyzika / Mechanika',
    keywords: 'praca energia kineticka potencialna vykon zachovanie energie mechanicka praca joule watt uccinnost W F s cos alfa kineticka energia 1/2 mv^2 potencialna energia mgh deformacna energia pruziny',
  },
  {
    title: 'Mechanika tekutín',
    description: 'Tlak v kvapalinách, Pascalov zákon, Archimedov zákon, vztlaková sila.',
    path: '/fyzika/mechanika/mechanika-tekutin',
    category: 'Fyzika / Mechanika',
    keywords: 'tekutiny tlak pascal archimedes vztlak kvapalina hydrostaticky tlak pascal zakon vztlakova sila plavcanie hustota rho g h hydraulicky lis bernoulliho rovnica prudenie',
  },
  {
    title: 'Hybnosť',
    description: 'Hybnosť p = mv, zákon zachovania hybnosti, impulz sily.',
    path: '/fyzika/mechanika/hybnost',
    category: 'Fyzika / Mechanika',
    keywords: 'hybnost hybnost telesa zachovanie hybnosti impulz sily p mv zarazy pružny nepružny naraz raketa reaktivny pohon naraz vozňov',
  },
  {
    title: 'Trenie a naklonená rovina',
    description: 'Statické a dynamické trenie, koeficienty trenia, rozklad sily na naklonenej rovine.',
    path: '/fyzika/mechanika/trenie',
    category: 'Fyzika / Mechanika',
    keywords: 'trenie staticke dynamicke koeficient trenia naklonena rovina rozklad sily normalova sila trecna sila klzne trenie valive trenie mu',
  },

  // ── Molekulová fyzika ─────────────────────────────────────────────────────
  {
    title: 'Molekulová fyzika a termodynamika',
    description: 'Teplo, teplota, skupenstvá látok, ideálny plyn a termodynamické deje.',
    path: '/fyzika/molekulova-fyzika',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'molekulova fyzika termodynamika teplo teplota skupenstava plyn kvapalina tuhe latky atomy molekuly brownov pohyb vnutorna energia',
  },
  {
    title: 'Časticová stavba látok',
    description: 'Atómy, molekuly, Brownov pohyb, medzimolekulové sily, skupenstvá.',
    path: '/fyzika/molekulova-fyzika/casticova-stavba',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'casticova stavba atomy molekuly brownov pohyb medzimolekulove sily skupenstava krystaline amorfne avogadrova konstanta molarna hmotnost difuzia tepelna roztaznost',
  },
  {
    title: 'Ideálny plyn',
    description: 'Stavová rovnica, izodeje — izobarický, izochorický, izotermický a adiabatický dej.',
    path: '/fyzika/molekulova-fyzika/idealny-plyn',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'idealny plyn stavova rovnica pV nRT izobaricky izochoricky izotermicky adiabaticka dej Boyle Mariott Gay Lussac Charles izoterma izobara izochora p V T diagram',
  },
  {
    title: 'Zmeny skupenstva',
    description: 'Topenie, tuhnutie, vyparovanie, kondenzácia, sublimácia, nasýtené pary.',
    path: '/fyzika/molekulova-fyzika/zmeny-skupenstva',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'zmeny skupenstva topenie tuhnutie vyparovanie kondenzacia sublimacia desublimacia skupenske teplo latentne teplo krivka ohrievania nasytena para trojny bod fazovy diagram teplota varu teplota topenia L Q mL',
  },
  {
    title: 'Vlhkosť vzduchu',
    description: 'Relatívna a absolútna vlhkosť, rosný bod, využitie v praxi.',
    path: '/fyzika/molekulova-fyzika/vlhkost-vzduchu',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'vlhkost vzduchu relativna absolutna vlhkost rosny bod nasytena para vlhkomer psychrometer meteo pocasie klima',
  },
  {
    title: 'Tlak v kvapalinách a plynoch',
    description: 'Hydrostatický tlak, Pascalov zákon, Archimedov zákon, atmosferický tlak.',
    path: '/fyzika/molekulova-fyzika/tlak-kapaliny-plyny',
    category: 'Fyzika / Molekulová fyzika',
    keywords: 'tlak kvapaliny plyny hydrostaticky tlak pascal archimedes atmosfericky tlak barometer manometer rho g h Pa bernoulliho rovnica prudenie spojita rovnica',
  },

  // ── Kmity a vlnenie ───────────────────────────────────────────────────────
  {
    title: 'Kmity a vlnenie',
    description: 'Mechanické kmitanie, vlnenie, zvuk a jeho vlastnosti.',
    path: '/fyzika/kmity-vlnenie',
    category: 'Fyzika / Kmity a vlnenie',
    keywords: 'kmity vlnenie zvuk mechanicke kmitanie frekvencia amplituda perioda vlnova dlzka resonancia kyvadlo pružina harmonicke kmitanie',
  },
  {
    title: 'Mechanické kmitanie',
    description: 'Perióda, frekvencia, amplitúda, harmonické kmitanie, rezonancia.',
    path: '/fyzika/kmity-vlnenie/mechanicke-kmitanie',
    category: 'Fyzika / Kmity a vlnenie',
    keywords: 'mechanicke kmitanie perioda frekvencia amplituda omega harmonicke kmitanie rezonancia nutene kmitanie tlmenie oscilátor T f A x t cos sin',
  },
  {
    title: 'Kyvadlo a oscilátor',
    description: 'Matematické kyvadlo, pružinové kyvadlo, vlastná frekvencia, rezonancia.',
    path: '/fyzika/kmity-vlnenie/kyvadlo',
    category: 'Fyzika / Kmity a vlnenie',
    keywords: 'kyvadlo matematicke fyzikalne pruzinove kyvadlo vlastna frekvencia perioda T 2pi korenl g Hookov zakon k tuhosť pruziny energia osculatora rezonancia',
  },
  {
    title: 'Mechanické vlnenie',
    description: 'Vlnová dĺžka, rýchlosť vlnenia, Dopplerov jav, interferencia, polarizácia.',
    path: '/fyzika/kmity-vlnenie/mechanicke-vlnenie',
    category: 'Fyzika / Kmity a vlnenie',
    keywords: 'mechanicke vlnenie vlnova dlzka rychlost vlnenia dopplerov jav interferencia polarizacia priemce poluzdlzne vlnenie v lambda f stoiate vlnenie uzol kmitna',
  },
  {
    title: 'Zvuk',
    description: 'Hlasitosť, výška tónu, farba zvuku, rýchlosť zvuku, sluch.',
    path: '/fyzika/kmity-vlnenie/zvuk',
    category: 'Fyzika / Kmity a vlnenie',
    keywords: 'zvuk hlasitost vyska tonu farba zvuku rychlost zvuku sluch decibel dB ultrazvuk infrazvuk akustika echo odraz zvuku 340 ms ton',
  },

  // ── Elektrický prúd ───────────────────────────────────────────────────────
  {
    title: 'Elektrický prúd',
    description: 'Ohmov zákon, rezistory, výkon — elektrické obvody a zákon zachovania energie.',
    path: '/fyzika/elektricky-prud',
    category: 'Fyzika / Elektrický prúd',
    keywords: 'elektricky prud ohm rezistor vykon napatie odpor obvod elektrina elektricke obvody seriove paralelne zapojenie',
  },
  {
    title: 'Elektrické veličiny',
    description: 'Elektrický prúd I, napätie U, odpor R — definície a jednotky.',
    path: '/fyzika/elektricky-prud/elektricke-veliciny',
    category: 'Fyzika / Elektrický prúd',
    keywords: 'elektricky prud I napatie U odpor R ampery volty ohmy naboj Q elektron vodicI izolant polovodic prúd v kovoch elektrolytoch',
  },
  {
    title: 'Ohmov zákon',
    description: 'U = IR, závislosť odporu od geometrie a teploty vodiča.',
    path: '/fyzika/elektricky-prud/ohmov-zakon',
    category: 'Fyzika / Elektrický prúd',
    keywords: 'ohmov zakon U IR merny odpor rho geometria vodica teplota odpor rezistivita supravodivost VA charakteristika linearny nelinearny vnutorny odpor zdroja EMN',
  },
  {
    title: 'Zapojenie rezistorov',
    description: 'Sériové a paralelné zapojenie, výpočet celkového odporu.',
    path: '/fyzika/elektricky-prud/zapojenie-rezistorov',
    category: 'Fyzika / Elektrický prúd',
    keywords: 'zapojenie rezistorov seriove paralelne celkovy odpor kirchhoffov zakon uzlov sluciek delič napätia prúdu kombinovane zapojenie',
  },
  {
    title: 'Elektrická práca a výkon',
    description: 'W = UIt, P = UI, Joulov zákon, elektrické vykurovanie.',
    path: '/fyzika/elektricky-prud/elektricka-praca-vykon',
    category: 'Fyzika / Elektrický prúd',
    keywords: 'elektricka praca vykon W UIt P UI joule zakon tepelny uccinok kilowathodina kWh istic elektrine vykurovanie spotreba tarif',
  },

  // ── Magnetické pole ───────────────────────────────────────────────────────
  {
    title: 'Magnetické pole',
    description: 'Magnetická indukcia, elektromagnetická indukcia — magnety a elektromagnety.',
    path: '/fyzika/magneticke-pole',
    category: 'Fyzika / Magnetické pole',
    keywords: 'magneticke pole indukcna elektromagneticka indukcnost magnet elektromagnet magneticka indukcna B',
  },
  {
    title: 'Magnetické pole — základy',
    description: 'Magnetická indukcia B, magnetické indukčné čiary, Ampérovo pravidlo pravej ruky.',
    path: '/fyzika/magneticke-pole/magneticke-pole-zaklady',
    category: 'Fyzika / Magnetické pole',
    keywords: 'magneticke pole magneticka indukcna B indukcne ciary amperovo pravidlo pravej ruky tesla Weber elektromagnet solenoid permanentny magnet feromagnetizmus',
  },
  {
    title: 'Sila na vodič s prúdom',
    description: 'Ampérova sila, Flemingovo pravidlo ľavej ruky, elektromotor.',
    path: '/fyzika/magneticke-pole/sila-na-vodic',
    category: 'Fyzika / Magnetické pole',
    keywords: 'ampérova sila vodic s prudom flemingovo pravidlo lavej ruky elektromotor lorentzova sila F BIl sin alfa pohyb nabitej castice kružnica',
  },
  {
    title: 'Elektromagnetická indukcia',
    description: 'Faradayov zákon, Lenzov zákon, generátor elektrickej energie.',
    path: '/fyzika/magneticke-pole/elektromagneticka-indukcia',
    category: 'Fyzika / Magnetické pole',
    keywords: 'elektromagneticka indukcna faradayov zakon lenzov zakon generator indukovane napatie magneticky tok Phi samoindukcnost L henry energia magnetickeho pola',
  },
  {
    title: 'Striedavý prúd',
    description: 'Generátor, frekvencia, amplitúda, efektívna hodnota, transformátor.',
    path: '/fyzika/magneticke-pole/striedavy-prud',
    category: 'Fyzika / Magnetické pole',
    keywords: 'striedavy prud AC generator frekvencia 50 Hz amplituda efektivna hodnota RMS transformator prevod napätia fázový posun výkon striedaveho prudu',
  },

  // ── Optika ────────────────────────────────────────────────────────────────
  {
    title: 'Optika',
    description: 'Odraz, lom svetla, šošovky, zrkadlá a spektrum — optické prístroje.',
    path: '/fyzika/optika',
    category: 'Fyzika / Optika',
    keywords: 'optika odraz lom sosovka zrkadlo spektrum svetlo geometricka optika vlnova optika',
  },
  {
    title: 'Svetlo a tiene',
    description: 'Priamočiare šírenie svetla, tieň, zatmenie, difúzny odraz.',
    path: '/fyzika/optika/svetlo-a-tiene',
    category: 'Fyzika / Optika',
    keywords: 'svetlo tiene priamociare sirenie tien polotien zatmenie slnka mesiaca difuzny odraz zrkadlovy odraz osvetlenost lux foton elektromagneticke zarenie',
  },
  {
    title: 'Odraz a lom svetla',
    description: 'Zákon odrazu, zákon lomu, index lomu, totálny odraz.',
    path: '/fyzika/optika/odraz-lom',
    category: 'Fyzika / Optika',
    keywords: 'odraz lom svetla zakon odrazu zakon lomu index lomu n Snellov zakon totalny odraz kriticke uhol opticke vlakno guľate zrkadlo ohnisko',
  },
  {
    title: 'Šošovky a optické prístroje',
    description: 'Zobrazovacia rovnica, zväčšenie, oko, krátkozrakosť, mikroskop, ďalekohľad.',
    path: '/fyzika/optika/sosovky-zrkadla',
    category: 'Fyzika / Optika',
    keywords: 'sosovky spojná rozptylná ohniskova vzdialenosť f zobrazovacia rovnica zvacšenie z lupа mikroscop dalekohled lupe oko kratkozrakost dalekozrakost dioptre',
  },
  {
    title: 'Vlnové vlastnosti svetla',
    description: 'Disperzia, interferencia, difrakčná mriežka, fotoelektrický efekt.',
    path: '/fyzika/optika/vlnove-vlastnosti-svetla',
    category: 'Fyzika / Optika',
    keywords: 'vlnove vlastnosti svetla disperzia interferencia difrakcia difrakčná mriežka polarizacia fotoelektricky efekt foton planckova konstanta h spektrum emisne ciarove duha',
  },

  // ── Atómová fyzika ────────────────────────────────────────────────────────
  {
    title: 'Atómová a jadrová fyzika',
    description: 'Rádioaktivita, jadrová energia — štruktúra atómu a jadrové reakcie.',
    path: '/fyzika/atomova-fyzika',
    category: 'Fyzika / Atómová fyzika',
    keywords: 'atomova jadrova fyzika radioaktivita jadro energia reakcia atom proton neutron elektron',
  },
  {
    title: 'Stavba atómu',
    description: 'Jadrový model, protóny, neutróny, elektróny, spektrum, röntgenové žiarenie.',
    path: '/fyzika/atomova-fyzika/stavba-atomu',
    category: 'Fyzika / Atómová fyzika',
    keywords: 'stavba atomu jadro proton neutron elektron bohrov model rutherford kvanty energeticke hladiny spektrum emisne ciarove rentgenove zarenie nukleonove cislo protónové čislo',
  },
  {
    title: 'Rádioaktivita',
    description: 'Žiarenie alfa, beta, gama, polčas rozpadu, biologické účinky.',
    path: '/fyzika/atomova-fyzika/radioaktivita',
    category: 'Fyzika / Atómová fyzika',
    keywords: 'radioaktivita alfa beta gama zarenie polcas rozpadu T1/2 aktivita becquerel gray sievert davka biologicky ucinok detektor geiger dozimeter jadrova premena izotopy',
  },
  {
    title: 'Jadrová energia',
    description: 'Vázbová energia, štiepenie jadier, jadrová syntéza, reaktor.',
    path: '/fyzika/atomova-fyzika/jaderna-energia',
    category: 'Fyzika / Atómová fyzika',
    keywords: 'jaderna energia vazbova energia hmotnostny ubytok stiepenie jadier uran plutonium retazova reakcia jaderna synteza deuterium tritium helium reaktor elektricka energia E mc2',
  },

  // ── Chémia ────────────────────────────────────────────────────────────────────
  { title: 'Chémia', description: 'Bezpečnosť v laboratóriu, atómy, chemické reakcie, organická chémia pre gymnazistov.', path: '/chemia', category: 'Chémia', keywords: 'chemia predmet gymnazium laboratorium reakcie atomy' },
  { title: 'Úvod do chémie', description: 'Bezpečnosť, látky, zmesi, roztok, molárna hmotnosť, Avogadrova konštanta.', path: '/chemia/uvod', category: 'Chémia / Úvod', keywords: 'uvod latky zmesi roztok molarná hmotnost avogadro mol' },
  { title: 'Bezpečnosť v laboratóriu', description: 'Laboratórne pomôcky, bezpečnostné pravidlá, prvá pomoc v chemickom laboratóriu.', path: '/chemia/uvod/bezpecnost-laboratorium', category: 'Chémia / Úvod', keywords: 'bezpecnost laboratorium pomucky skumavka kadicky kahan svorka' },
  { title: 'Sústavy látok', description: 'Látky, zmesi, roztok, molárna hmotnosť, látkové množstvo, Avogadrova konštanta, koncentrácia.', path: '/chemia/uvod/sustava-latkov', category: 'Chémia / Úvod', keywords: 'sustava latok zmes roztok hmotnostny zlomok molarná hmotnost mol avogadro koncentracia c n/V' },
  { title: 'Stavba látky a periodická sústava', description: 'Atóm, jadro, elektróny, ióny, PSP, periódy, skupiny, kovy, nekovy.', path: '/chemia/stavba-latky', category: 'Chémia / Stavba látky', keywords: 'stavba latky atom psp periodicka sustava prvkov' },
  { title: 'Stavba atómu', description: 'Protóny, neutróny, elektróny, nukleónové číslo, izotopy, Bohrov model.', path: '/chemia/stavba-latky/stavba-atomu', category: 'Chémia / Stavba látky', keywords: 'stavba atomu proton neutron elektron nukleonove cislo izotopy bohrov model ion katión anión' },
  { title: 'Periodická sústava prvkov', description: 'Periódy, skupiny, kovy, nekovy, polokovy, elektronegativita, alkalické kovy, halogény.', path: '/chemia/stavba-latky/periodicka-tabulka', category: 'Chémia / Stavba látky', keywords: 'periodicka tabulka prvkov periody skupiny kovy nekovy elektronegativita alkalicke kovy halogeny' },
  { title: 'Chemická väzba', description: 'Kovalentná, iónová, vodíková a kovová väzba. Molekuly, kryštály, medzimolekulové sily.', path: '/chemia/stavba-latky/chemicka-vazba', category: 'Chémia / Stavba látky', keywords: 'chemicka vazba kovalentna ionova vodikova kovova molekula krystal' },
  { title: 'Názvoslovie zlúčenín', description: 'Oxidačné čísla, názvoslovie oxidov, hydroxidov, kyselín, solí anorganických zlúčenín.', path: '/chemia/stavba-latky/nazvoslovie', category: 'Chémia / Stavba látky', keywords: 'nazvoslovie zlucenin oxidacne cislo oxid hydroxid kyselina sol halogenidum' },
  { title: 'Chemické reakcie', description: 'Rovnice, stechiometria, kinetika, rovnováha, redox, acidobáza, pH.', path: '/chemia/chemicke-reakcie', category: 'Chémia / Chemické reakcie', keywords: 'chemicke reakcie rovnice stechiometria redox pH kyseliny zasady' },
  { title: 'Chemické rovnice a stechiometria', description: 'Zápis reakcií, zákon zachovania hmotnosti, stechiometrické koeficienty, typy reakcií.', path: '/chemia/chemicke-reakcie/chemicke-rovnice', category: 'Chémia / Chemické reakcie', keywords: 'chemicke rovnice stechiometria zakon zachovania hmotnosti exotermicka endotermicka' },
  { title: 'Rýchlosť reakcie a rovnováha', description: 'Faktory rýchlosti, katalyzátor, chemická rovnováha, Le Chatelier.', path: '/chemia/chemicke-reakcie/rychlost-rovnovaha', category: 'Chémia / Chemické reakcie', keywords: 'rychlost reakcie katalyzator rovnovaha Le Chatelier koncentracia teplota' },
  { title: 'Kyseliny, zásady a pH', description: 'Brönstedova teória, pH, neutralizácia, soli, indikátory.', path: '/chemia/chemicke-reakcie/acidobaza-pH', category: 'Chémia / Chemické reakcie', keywords: 'kyseliny zasady pH neutralizacia sol Bronsted indikator lakmus fenolftaleín' },
  { title: 'Redoxné reakcie', description: 'Oxidácia, redukcia, oxidačné čísla, elektrolýza, korózia kovov.', path: '/chemia/chemicke-reakcie/redox', category: 'Chémia / Chemické reakcie', keywords: 'redox oxidacia redukcna elektrolýza korzia napatiovy rad kovov' },
  { title: 'Anorganická chémia', description: 'Prvky a ich anorganické zlúčeniny — kovy, nekovy, voda.', path: '/chemia/anorganicka-chemia', category: 'Chémia / Anorganická chémia', keywords: 'anorganicka chemia kovy nekovy voda prvky zluceniny' },
  { title: 'Nekovy a ich zlúčeniny', description: 'Vodík, kyslík, dusík, síra, uhlík, halogény, vzácne plyny, voda.', path: '/chemia/anorganicka-chemia/nekovy', category: 'Chémia / Anorganická chémia', keywords: 'nekovy vodik kyslik dusik sira uhlik halogeny vzacne plyny amoniak ozón' },
  { title: 'Kovy a ich zlúčeniny', description: 'Alkalické kovy, kovy alkalických zemín, prechodné kovy, zliatiny.', path: '/chemia/anorganicka-chemia/kovy', category: 'Chémia / Anorganická chémia', keywords: 'kovy alkalicke prechodne zeleza med zlato striebro zliatiny hlinik oceľ' },
  { title: 'Organická chémia', description: 'Uhľovodíky, deriváty, polyméry, ropa.', path: '/chemia/organicka-chemia', category: 'Chémia / Organická chémia', keywords: 'organicka chemia uhlovodiky derivaty polymery ropa' },
  { title: 'Uhľovodíky', description: 'Alkány, alkény, alkíny, arény — názvoslovie, izoméria, reakcie.', path: '/chemia/organicka-chemia/uhlovodiky', category: 'Chémia / Organická chémia', keywords: 'uhlovodiky alkany alkeny alkiny areny benzen izoméria IUPAC metan propan' },
  { title: 'Deriváty uhľovodíkov a polyméry', description: 'Deriváty, alkoholy, kyseliny, estery, ropa, zemný plyn, polyméry.', path: '/chemia/organicka-chemia/derivaty-a-plasty', category: 'Chémia / Organická chémia', keywords: 'derivaty uhlovodikov polymery plast ropa benzin destilácia PE PP PVC alkohol etanol' },

  // ── Matematika ────────────────────────────────────────────────────────────
  { title: 'Matematika', description: 'Prehľad tém matematiky — čísla, funkcie, geometria, kombinatorika, logika.', path: '/matematika', category: 'Matematika', keywords: 'matematika predmet gymnazium algebra geometria funkcie kombinatorika logika' },

  // Čísla a výrazy
  { title: 'Čísla a množiny', description: 'Číselné obory N, Z, Q, R, I; množiny; intervaly; absolútna hodnota.', path: '/matematika/cisla-a-vyrazy/cisla-a-mnoziny', category: 'Matematika / Čísla a výrazy', keywords: 'cisla mnoziny intervaly absolutna hodnota racionalne iracionalne realne prirodzene' },
  { title: 'Mocniny a odmocniny', description: 'Pravidlá pre mocniny, odmocniny, vedecký zápis čísla, logaritmy.', path: '/matematika/cisla-a-vyrazy/mocniny-odmocniny', category: 'Matematika / Čísla a výrazy', keywords: 'mocniny odmocniny vedecky zapis logaritmus exponent pravidla' },
  { title: 'Rovnice a nerovnice', description: 'Lineárne a kvadratické rovnice, diskriminant, sústavy rovníc, nerovnice.', path: '/matematika/cisla-a-vyrazy/rovnice-a-nerovnice', category: 'Matematika / Čísla a výrazy', keywords: 'rovnice nerovnice linearné kvadraticke diskriminant sustava vietove' },
  { title: 'Percentuálne výpočty', description: 'Percentá, promile, trojčlenka, úmernosť, jednoduché a zložené úrokovanie.', path: '/matematika/cisla-a-vyrazy/percentualne-vypocty', category: 'Matematika / Čísla a výrazy', keywords: 'percenta promile trojclenka umernost urok zlozene urockovanie zaklad' },

  // Funkcie a grafy
  { title: 'Základy funkcie', description: 'Definícia funkcie, definičný obor, obor hodnôt, vlastnosti (rast, párnosť, periodicita).', path: '/matematika/funkcie/zaklady-funkcie', category: 'Matematika / Funkcie', keywords: 'funkcia definicny obor graf rast klesanie parnost periodicita nulové body' },
  { title: 'Lineárna a kvadratická funkcia', description: 'Lineárna funkcia (smernica), kvadratická (parabola, vrchol, diskriminant).', path: '/matematika/funkcie/linearna-kvadraticka', category: 'Matematika / Funkcie', keywords: 'linearna funkcia smernica kvadraticka parabola vrchol diskriminant' },
  { title: 'Exponenciálna a logaritmická funkcia', description: 'Exponenciálna funkcia aˣ, logaritmus, ln, logaritmické vzorce a rovnice.', path: '/matematika/funkcie/exponencialna-logaritmicka', category: 'Matematika / Funkcie', keywords: 'exponencialna logaritmicka funkcia logaritmus ln log vzorce rovnice' },
  { title: 'Goniometrické funkcie', description: 'Jednotková kružnica, sínus, kosínus, tangens, grafy a periodičnosť.', path: '/matematika/funkcie/goniometricke-funkcie', category: 'Matematika / Funkcie', keywords: 'sinus cosinus tangens kotangens goniometricke funkcie jednotkova kruznica perioda' },

  // Geometria
  { title: 'Planimetria', description: 'Trojuholník, Pytagorova veta, zhodnosť, podobnosť, kružnica, obvod a obsah útvarov.', path: '/matematika/geometria/planimetria', category: 'Matematika / Geometria', keywords: 'planimetria trojuholnik pytagor zhodnost podobnost kruznica obsah obvod' },
  { title: 'Trigonometria', description: 'Sínusová a kosínusová veta, obsah trojuholníka, Heronov vzorec.', path: '/matematika/geometria/trigonometria', category: 'Matematika / Geometria', keywords: 'trigonometria sinusova kosínusova veta obsah trojuholnika heronov vzorec' },
  { title: 'Stereometria', description: 'Kocka, kváder, valec, kužeľ, guľa — povrch a objem, siete telies.', path: '/matematika/geometria/stereometria', category: 'Matematika / Geometria', keywords: 'stereometria kocka kvader valec kuzel gula povrch objem siete telies' },
  { title: 'Analytická geometria', description: 'Súradnicová sústava, vzdialenosť bodov, rovnica priamky a kružnice.', path: '/matematika/geometria/analyticka-geometria', category: 'Matematika / Geometria', keywords: 'analyticka geometria suradnice priamka kruznica vzdialenost smernica rovnica' },

  // Kombinatorika
  { title: 'Kombinatorika', description: 'Permutácie, variácie, kombinácie, faktoriál, Pascalov trojuholník, binomická veta.', path: '/matematika/kombinatorika-statistika/kombinatorika', category: 'Matematika / Kombinatorika', keywords: 'kombinatorika permutacie variacie kombinácie faktorial pascalov trojuholnik binomicka' },
  { title: 'Pravdepodobnosť', description: 'Klasická definícia pravdepodobnosti, nezávislé javy, Bernoulliho schéma.', path: '/matematika/kombinatorika-statistika/pravdepodobnost', category: 'Matematika / Kombinatorika', keywords: 'pravdepodobnost nahodny jav bernoulli nezavisle udalosti klasicka definicia' },
  { title: 'Štatistika', description: 'Priemer, medián, modus, rozptyl, smerodajná odchýlka, histogram.', path: '/matematika/kombinatorika-statistika/statistika', category: 'Matematika / Kombinatorika', keywords: 'statistika priemer median modus rozptyl smerodajna odchylka histogram frekvencie' },

  // Logika
  { title: 'Výroky a logika', description: 'Výrok, implikácia, ekvivalencia, logické spojky, kvantifikátory, de Morgan.', path: '/matematika/logika-a-dokazovanie/vyroky-a-logika', category: 'Matematika / Logika', keywords: 'vyroky logika implikacia ekvivalencia konjunkcia disjunkcia kvantifikatory de morgan' },
  { title: 'Dôkazovanie', description: 'Priamy dôkaz, dôkaz sporom, protipríklad, matematická indukcia.', path: '/matematika/logika-a-dokazovanie/dokazovanie', category: 'Matematika / Logika', keywords: 'dokazovanie priamy dokaz sporom protipriklad matematicka indukcia' },
  { title: 'Postupnosti a rady', description: 'Aritmetická a geometrická postupnosť, vzorce, nekonečný rad, sigma notácia.', path: '/matematika/logika-a-dokazovanie/postupnosti', category: 'Matematika / Logika', keywords: 'postupnosti rady aritmeticka geometricka rozdiel kvocient nekonecny rad sigma' },

]
