<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/kombinatorika-statistika" class="hover:text-blue-600 transition-colors">Kombinatorika a štatistika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Štatistika</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl" aria-hidden="true">📊</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Štatistika</h1>
    </div>
    <p class="text-gray-600 text-lg leading-relaxed mb-10">
      Štatistika je veda o zbere, triedení, analýze a interpretácii dát. Stretneš ju v meteorológii, medicíne,
      ekonómii aj v každodennom živote — vždy keď niekto hovorí o priemernej teplote, výsledkoch prieskumu
      alebo normálnom rozložení výšky populácie.
    </p>

    <!-- Section 1: Základné pojmy -->
    <section aria-label="Základné pojmy štatistiky" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
        Základné pojmy a triedenie dát
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Pred akoukoľvek analýzou musíme vedieť, <strong>čo</strong> skúmame a <strong>ako</strong>
        organizujeme zozbierané hodnoty.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Základný súbor</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Celá skupina (populácia), o ktorej chceme získať informácie. Napríklad všetci žiaci Slovenska,
            alebo všetky kusy výrobku v továrni.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Výberový súbor (vzorka)</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Časť základného súboru, ktorú skutočne skúmame. Výsledky výberu potom zovšeobecňujeme
            na celú populáciu — preto musí byť výber <em>náhodný</em> a dostatočne veľký.
          </p>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Absolútna a relatívna frekvencia</h3>
      <p class="text-gray-700 mb-3 leading-relaxed">
        Keď zozbieráme dáta, zaujíma nás, ako často sa jednotlivé hodnoty vyskytujú.
      </p>

      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-blue-100">
              <th class="border border-blue-200 px-4 py-2 text-left text-blue-800">Pojem</th>
              <th class="border border-blue-200 px-4 py-2 text-left text-blue-800">Značka</th>
              <th class="border border-blue-200 px-4 py-2 text-left text-blue-800">Vzorec</th>
              <th class="border border-blue-200 px-4 py-2 text-left text-blue-800">Príklad (n=30)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="border border-gray-200 px-4 py-2">Absolútna frekvencia</td>
              <td class="border border-gray-200 px-4 py-2 font-mono">nᵢ</td>
              <td class="border border-gray-200 px-4 py-2">počet výskytov hodnoty</td>
              <td class="border border-gray-200 px-4 py-2">6 žiakov dostalo A</td>
            </tr>
            <tr class="bg-blue-50">
              <td class="border border-gray-200 px-4 py-2">Relatívna frekvencia</td>
              <td class="border border-gray-200 px-4 py-2 font-mono">fᵢ</td>
              <td class="border border-gray-200 px-4 py-2">nᵢ / n</td>
              <td class="border border-gray-200 px-4 py-2">6/30 = 0,20 (20 %)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SVG ilustracia - Histogram -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Histogram výsledkov testu (30 žiakov)</h3>
        <svg
          role="img"
          aria-label="Histogram výsledkov testu so 6 triedami od 50 do 110 bodov. Zvislá čiara znázorňuje priemer (76 bodov) a iná čiara medián (75 bodov)."
          viewBox="0 0 480 260"
          class="w-full max-w-xl mx-auto block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Os X a Y -->
          <line x1="50" y1="220" x2="450" y2="220" stroke="#6b7280" stroke-width="2"/>
          <line x1="50" y1="30" x2="50" y2="220" stroke="#6b7280" stroke-width="2"/>

          <!-- Mriežka (horizontálne čiary) -->
          <line x1="50" y1="170" x2="450" y2="170" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
          <line x1="50" y1="120" x2="450" y2="120" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
          <line x1="50" y1="70" x2="450" y2="70" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>

          <!-- Popisky osi Y -->
          <text x="42" y="224" text-anchor="end" font-size="11" fill="#6b7280">0</text>
          <text x="42" y="174" text-anchor="end" font-size="11" fill="#6b7280">2</text>
          <text x="42" y="124" text-anchor="end" font-size="11" fill="#6b7280">4</text>
          <text x="42" y="74" text-anchor="end" font-size="11" fill="#6b7280">6</text>

          <!-- Stlpce histogramu (šírka 60, medzera 5) -->
          <!-- Trieda 50-60: 2 žiaci → výška 50 -->
          <rect x="55" y="170" width="58" height="50" fill="#3b82f6" rx="3" opacity="0.85"/>
          <!-- Trieda 60-70: 4 žiaci → výška 100 -->
          <rect x="118" y="120" width="58" height="100" fill="#3b82f6" rx="3" opacity="0.85"/>
          <!-- Trieda 70-80: 9 žiaci → výška 225 (cap 190) → výška 190 od 30 -->
          <rect x="181" y="32" width="58" height="188" fill="#2563eb" rx="3" opacity="0.9"/>
          <!-- Trieda 80-90: 8 žiaci → výška 200 -->
          <rect x="244" y="57" width="58" height="163" fill="#3b82f6" rx="3" opacity="0.85"/>
          <!-- Trieda 90-100: 5 žiaci → výška 125 -->
          <rect x="307" y="95" width="58" height="125" fill="#3b82f6" rx="3" opacity="0.85"/>
          <!-- Trieda 100-110: 2 žiaci → výška 50 -->
          <rect x="370" y="170" width="58" height="50" fill="#3b82f6" rx="3" opacity="0.85"/>

          <!-- Popisky stĺpcov — hodnoty -->
          <text x="84" y="163" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2</text>
          <text x="147" y="113" text-anchor="middle" font-size="11" fill="white" font-weight="bold">4</text>
          <text x="210" y="55" text-anchor="middle" font-size="11" fill="white" font-weight="bold">9</text>
          <text x="273" y="50" text-anchor="middle" font-size="11" fill="white" font-weight="bold">8</text>
          <text x="336" y="88" text-anchor="middle" font-size="11" fill="white" font-weight="bold">5</text>
          <text x="399" y="163" text-anchor="middle" font-size="11" fill="white" font-weight="bold">2</text>

          <!-- Popisky osi X -->
          <text x="84" y="235" text-anchor="middle" font-size="11" fill="#6b7280">50–60</text>
          <text x="147" y="235" text-anchor="middle" font-size="11" fill="#6b7280">60–70</text>
          <text x="210" y="235" text-anchor="middle" font-size="11" fill="#6b7280">70–80</text>
          <text x="273" y="235" text-anchor="middle" font-size="11" fill="#6b7280">80–90</text>
          <text x="336" y="235" text-anchor="middle" font-size="11" fill="#6b7280">90–100</text>
          <text x="399" y="235" text-anchor="middle" font-size="11" fill="#6b7280">100–110</text>

          <!-- Priemer (cca x=76 → x-pozícia ≈ 181 + (76-70)/10*63 = 181+38 = 219) -->
          <line x1="219" y1="30" x2="219" y2="220" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>
          <text x="222" y="48" font-size="11" fill="#ef4444" font-weight="bold">x̄ = 76</text>

          <!-- Medián (cca x=75 → pozícia ≈ 213) -->
          <line x1="210" y1="30" x2="210" y2="220" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="150" y="48" font-size="11" fill="#f59e0b" font-weight="bold">Me = 75</text>

          <!-- Nadpis osi -->
          <text x="250" y="255" text-anchor="middle" font-size="12" fill="#374151">Body v teste</text>
          <text x="18" y="130" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90,18,130)">Počet žiakov</text>

          <!-- Legenda -->
          <rect x="300" y="38" width="12" height="3" fill="#ef4444"/>
          <text x="315" y="42" font-size="10" fill="#6b7280">priemer</text>
          <rect x="300" y="50" width="12" height="3" fill="#f59e0b"/>
          <text x="315" y="54" font-size="10" fill="#6b7280">medián</text>
        </svg>
      </div>
    </section>

    <!-- Section 2: Miery polohy -->
    <section aria-label="Miery polohy" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
        Miery polohy: priemer, medián, modus
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Miery polohy (centrálnej tendencie) opisujú typickú, strednú hodnotu súboru. Každá z nich
        má iné vlastnosti a hodí sa do inej situácie.
      </p>

      <!-- Aritmetický priemer -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Aritmetický priemer <span class="font-mono">x̄</span></h3>
        <p class="text-gray-700 mb-3">Súčet všetkých hodnôt vydelíme ich počtom:</p>
        <MathFormula display formula="\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + \cdots + x_n}{n}"/>
        <p class="text-gray-700 mt-3 text-sm">
          Priemer je citlivý na odľahlé hodnoty (extrémy) — jedna veľmi vysoká hodnota môže priemer výrazne zvýšiť.
        </p>
      </div>

      <!-- Medián -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Medián <span class="font-mono">Me</span></h3>
        <p class="text-gray-700 mb-3">
          Po zoradení hodnôt od najmenšej po najväčšiu je medián <strong>stredná hodnota</strong>:
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 mb-3 ml-2">
          <li>Ak je <MathFormula formula="n"/> nepárne: medián = hodnota na pozícii <MathFormula formula="\frac{n+1}{2}"/></li>
          <li>Ak je <MathFormula formula="n"/> párne: medián = priemer hodnôt na pozíciách <MathFormula formula="\frac{n}{2}"/> a <MathFormula formula="\frac{n}{2}+1"/></li>
        </ul>
        <p class="text-gray-700 text-sm">Medián je odolnejší voči extrémom než priemer — preto sa používa napr. pri príjmoch obyvateľov.</p>
      </div>

      <!-- Modus -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Modus <span class="font-mono">Mo</span></h3>
        <p class="text-gray-700">
          Modus je <strong>najčastejšie sa vyskytujúca hodnota</strong> v súbore. Súbor môže mať viac módov
          (bimodálny, multimodálny) alebo žiadny (ak sa každá hodnota vyskytuje rovnako často).
          Modus sa hodí pre kategoriálne dáta — napr. najobľúbenejšia farba auta.
        </p>
      </div>

      <!-- Vážený priemer -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Vážený priemer</h3>
        <p class="text-gray-700 mb-3">
          Keď majú hodnoty rôznu dôležitosť (váhu <MathFormula formula="w_i"/>), použijeme vážený priemer:
        </p>
        <MathFormula display formula="\bar{x}_w = \frac{\sum_{i=1}^{n} w_i \cdot x_i}{\sum_{i=1}^{n} w_i}"/>
        <p class="text-gray-700 mt-3 text-sm">
          Príklad: školský priemer, kde ústne skúšanie (váha 3) je dôležitejšie ako krátka písomka (váha 1).
        </p>
      </div>

      <!-- Príklad 1 -->
      <div class="border-l-4 border-blue-500 bg-white rounded-xl p-5 shadow-sm mb-4">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 1 — Priemer, medián, modus</h3>
        <p class="text-gray-700 mb-2">
          Žiaci dostali v teste tieto body: <strong>72, 85, 68, 90, 72, 78, 55, 91, 72, 63</strong>
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 space-y-2">
          <p><strong>Zoradenie:</strong> 55, 63, 68, 72, 72, 72, 78, 85, 90, 91 &nbsp;(n = 10)</p>
          <p>
            <strong>Priemer:</strong>
            <MathFormula formula="\bar{x} = \frac{55+63+68+72+72+72+78+85+90+91}{10} = \frac{746}{10} = 74{,}6"/>
          </p>
          <p>
            <strong>Medián</strong> (párne n, priemer 5. a 6. hodnoty):
            <MathFormula formula="Me = \frac{72 + 72}{2} = 72"/>
          </p>
          <p><strong>Modus:</strong> Mo = 72 (vyskytuje sa 3-krát)</p>
        </div>
      </div>

      <!-- Príklad 2 - vážený priemer -->
      <div class="border-l-4 border-blue-500 bg-white rounded-xl p-5 shadow-sm">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 2 — Vážený priemer (školský)</h3>
        <p class="text-gray-700 mb-2">
          Žiak má z matematiky tieto známky s váhami: ústne (váha 3): 2, písomná práca (váha 2): 1, test (váha 1): 3.
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-800">
          <MathFormula display formula="\bar{x}_w = \frac{3 \cdot 2 + 2 \cdot 1 + 1 \cdot 3}{3 + 2 + 1} = \frac{6 + 2 + 3}{6} = \frac{11}{6} \approx 1{,}83"/>
          <p class="mt-2">Výsledný priemer je aproximovane <strong>1,83</strong> — žiak by mal byť hodnotený jednotkou.</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Miery variability -->
    <section aria-label="Miery variability" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
        Miery variability: rozptyl a smerodajná odchýlka
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Miery polohy nám povedia, kde sa nachádza „stred" dát — ale nevedia povedať, aké <em>rozptýlené</em>
        sú hodnoty okolo tohto stredu. Na to slúžia miery variability.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Rozptyl <span class="font-mono">s²</span></h3>
        <p class="text-gray-700 mb-3">
          Rozptyl meria priemerný štvorcový rozdiel hodnôt od priemeru:
        </p>
        <MathFormula display formula="s^2 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n}"/>
        <p class="text-gray-700 mt-3 text-sm">
          Štvorcovanie zaručuje, že záporné aj kladné odchýlky sa neodstránia navzájom.
          Jednotka rozptylu je <strong>kvadrát</strong> pôvodnej jednotky (napr. body²).
        </p>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Smerodajná odchýlka <span class="font-mono">s</span></h3>
        <p class="text-gray-700 mb-3">
          Smerodajná odchýlka je druhá odmocnina rozptylu — má rovnakú jednotku ako pôvodné dáta:
        </p>
        <MathFormula display formula="s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n}}"/>
        <p class="text-gray-700 mt-3 text-sm">
          Malá smerodajná odchýlka → hodnoty sú blízko pri sebe (konzistentné výsledky).
          Veľká smerodajná odchýlka → hodnoty sú veľmi rozptýlené.
        </p>
      </div>

      <!-- Príklad 3 - rozptyl a smerodajná odchýlka -->
      <div class="border-l-4 border-blue-500 bg-white rounded-xl p-5 shadow-sm">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 3 — Rozptyl a smerodajná odchýlka</h3>
        <p class="text-gray-700 mb-2">
          Vypočítaj rozptyl a smerodajnú odchýlku pre merania teploty: <strong>18, 20, 22, 20, 25 °C</strong>
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 space-y-2">
          <p>
            <strong>Priemer:</strong>
            <MathFormula formula="\bar{x} = \frac{18+20+22+20+25}{5} = \frac{105}{5} = 21\,°C"/>
          </p>
          <p><strong>Odchýlky od priemeru:</strong> −3, −1, +1, −1, +4</p>
          <p><strong>Štvorcové odchýlky:</strong> 9, 1, 1, 1, 16</p>
          <p>
            <strong>Rozptyl:</strong>
            <MathFormula formula="s^2 = \frac{9+1+1+1+16}{5} = \frac{28}{5} = 5{,}6\,°C^2"/>
          </p>
          <p>
            <strong>Smerodajná odchýlka:</strong>
            <MathFormula formula="s = \sqrt{5{,}6} \approx 2{,}37\,°C"/>
          </p>
          <p class="text-gray-600 mt-1">
            Teploty sa od priemeru (21 °C) odchyľujú v priemere o asi <strong>2,37 °C</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4: Normálne rozdelenie -->
    <section aria-label="Normálne rozdelenie — Gaussova krivka" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
        Normálne rozdelenie a Gaussova krivka
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Mnoho prírodných javov (výška ľudí, výsledky testov, chyby merania) sa riadi
        <strong>normálnym rozdelením</strong>. Pri ňom tvoria frekvencie symetrickú krivku
        v tvare zvona — Gaussovu krivku.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Pravidlo 68–95–99,7 %</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div class="bg-white rounded-lg p-3 text-center border border-blue-100">
            <div class="text-2xl font-bold text-blue-600 mb-1">68 %</div>
            <div class="text-sm text-gray-600">
              hodnôt leží v intervale
              <MathFormula formula="(\bar{x} - s,\; \bar{x} + s)"/>
            </div>
          </div>
          <div class="bg-white rounded-lg p-3 text-center border border-blue-100">
            <div class="text-2xl font-bold text-blue-600 mb-1">95 %</div>
            <div class="text-sm text-gray-600">
              hodnôt leží v intervale
              <MathFormula formula="(\bar{x} - 2s,\; \bar{x} + 2s)"/>
            </div>
          </div>
          <div class="bg-white rounded-lg p-3 text-center border border-blue-100">
            <div class="text-2xl font-bold text-blue-600 mb-1">99,7 %</div>
            <div class="text-sm text-gray-600">
              hodnôt leží v intervale
              <MathFormula formula="(\bar{x} - 3s,\; \bar{x} + 3s)"/>
            </div>
          </div>
        </div>
      </div>

      <div class="border-l-4 border-blue-500 bg-white rounded-xl p-5 shadow-sm mb-5">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 4 — Výška populácie</h3>
        <p class="text-gray-700 mb-2">
          Výška dospelých mužov na Slovensku má priemer <strong>180 cm</strong>
          a smerodajnú odchýlku <strong>7 cm</strong>.
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-800 space-y-1">
          <p>68 % mužov má výšku medzi <strong>173 cm a 187 cm</strong> (180 ± 7)</p>
          <p>95 % mužov má výšku medzi <strong>166 cm a 194 cm</strong> (180 ± 14)</p>
          <p>99,7 % mužov má výšku medzi <strong>159 cm a 201 cm</strong> (180 ± 21)</p>
          <p class="text-gray-600 mt-2">
            Muž s výškou 200 cm je skutočne výnimočný — je vzdialený takmer 3 smerodajné odchýlky od priemeru.
          </p>
        </div>
      </div>

      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <p class="text-yellow-800 text-sm">
          <strong>Pozor:</strong> Nie všetky dáta sú normálne rozdelené! Príjmy obyvateľov, ceny bytov
          alebo počet dopravných nehôd majú spravidla <em>pravostranné zošikmenie</em> — tu je vhodnejší
          medián ako priemer.
        </p>
      </div>
    </section>

    <!-- Section 5: Grafické zobrazenie -->
    <section aria-label="Grafické zobrazenie štatistických dát" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
        Grafické zobrazenie dát
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Dobre zvolený diagram odhalí vzory a trendy, ktoré by v tabuľke zostali skryté.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div class="text-3xl mb-2" aria-hidden="true">📊</div>
          <h3 class="font-semibold text-gray-800 mb-2">Stĺpcový diagram / Histogram</h3>
          <p class="text-gray-600 text-sm">
            Stĺpce znázorňujú frekvenciu tried alebo kategórií. Histogram sa líši od stĺpcového diagramu
            tým, že stĺpce susedia (bez medzier) — používa sa pre spojité dáta.
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div class="text-3xl mb-2" aria-hidden="true">🥧</div>
          <h3 class="font-semibold text-gray-800 mb-2">Kruhový diagram</h3>
          <p class="text-gray-600 text-sm">
            Výseče kruhu znázorňujú podiely celku. Vhodný pre relatívne frekvencie, keď súčet dáva
            100 %. Nevhodný pre veľa kategórií (ťažko čitateľný).
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div class="text-3xl mb-2" aria-hidden="true">🔵</div>
          <h3 class="font-semibold text-gray-800 mb-2">Bodový diagram</h3>
          <p class="text-gray-600 text-sm">
            Každý bod predstavuje jednu hodnotu alebo dvojicu hodnôt. Odhaľuje vzťah (koreláciu)
            medzi dvoma veličinami, napr. teplota vs. spotreba elektriny.
          </p>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-blue-700 mb-2">Kľúčové pojmy</h3>
          <ul class="text-gray-700 text-sm space-y-1">
            <li><strong>Základný/výberový súbor</strong> — celok vs. vzorka</li>
            <li><strong>Absolútna frekvencia nᵢ</strong> — počet výskytov</li>
            <li><strong>Relatívna frekvencia fᵢ = nᵢ/n</strong> — podiel</li>
            <li><strong>Priemer x̄ = Σxᵢ/n</strong> — citlivý na extrémy</li>
            <li><strong>Medián</strong> — stredná hodnota po zoradení</li>
            <li><strong>Modus</strong> — najčastejšia hodnota</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-blue-700 mb-2">Vzorce variability</h3>
          <ul class="text-gray-700 text-sm space-y-1">
            <li><strong>Rozptyl:</strong> s² = Σ(xᵢ − x̄)²/n</li>
            <li><strong>Smerodajná odchýlka:</strong> s = √s²</li>
            <li><strong>Pravidlo 68–95–99,7 %</strong> pre normálne rozdelenie</li>
            <li><strong>Vážený priemer:</strong> x̄ᵥ = Σwᵢxᵢ / Σwᵢ</li>
          </ul>
          <div class="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-800">
            Keď sú dáta zošikmené alebo obsahujú extrémy, preferuj <strong>medián</strong> pred priemerom.
          </div>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz zo štatistiky" class="mb-8">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa: Štatistika</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <!-- Progress -->
        <div class="bg-blue-50 px-6 py-3 flex items-center justify-between">
          <span data-testid="quiz-progress" class="text-sm text-blue-700 font-medium">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <div class="flex gap-1">
            <div
              v-for="(_, idx) in quiz"
              :key="idx"
              :class="['w-3 h-3 rounded-full transition-colors', idx === currentQ ? 'bg-blue-500' : idx < currentQ ? 'bg-blue-300' : 'bg-gray-200']"
            />
          </div>
        </div>

        <div class="p-6">
          <!-- Question -->
          <p data-testid="quiz-question" class="text-gray-800 font-medium text-lg mb-5 leading-relaxed">
            {{ currentQuestion.question }}
          </p>

          <!-- Options -->
          <div class="space-y-3 mb-5">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`quiz-option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              :class="[
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm',
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                  : i === currentQuestion.correctIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : i === selectedAnswer
                      ? 'border-red-400 bg-red-50 text-red-800'
                      : 'border-gray-200 text-gray-400 cursor-default',
              ]"
              @click="selectAnswer(i)"
            >
              <span class="font-semibold mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
            </button>
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              :data-testid="`quiz-feedback`"
              :class="[
                'rounded-xl p-4 mb-5 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              ]"
            >
              <span class="font-semibold mr-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
              </span>
              {{ currentQuestion.explanation }}
            </div>
          </Transition>

          <!-- Next button -->
          <div v-if="selectedAnswer !== null" class="flex justify-end">
            <button
              data-testid="quiz-next-btn"
              type="button"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Result -->
      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="quiz-result"
          class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-3" aria-hidden="true">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p class="text-gray-600 mb-2">
            Správne odpovede:
            <span data-testid="quiz-score" class="font-bold text-blue-600">{{ quizScore }} / {{ quiz.length }}</span>
          </p>
          <p class="text-gray-500 text-sm mb-6">
            {{ Math.round((quizScore / quiz.length) * 100) }} % úspešnosť
          </p>
          <button
            data-testid="quiz-reset-btn"
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </Transition>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je medián súboru čísel 3, 7, 2, 9, 5?',
    options: ['5,2', '5', '7', '3'],
    correctIndex: 1,
    explanation: 'Po zoradení: 2, 3, 5, 7, 9. Stredná (3.) hodnota je 5.',
  },
  {
    question: 'Žiaci dostali body: 60, 70, 70, 80, 100. Aký je aritmetický priemer?',
    options: ['70', '75', '76', '80'],
    correctIndex: 2,
    explanation: 'Priemer = (60+70+70+80+100)/5 = 380/5 = 76.',
  },
  {
    question: 'Čo vyjadruje smerodajná odchýlka?',
    options: [
      'Najvyššiu hodnotu v súbore',
      'Priemernú hodnotu súboru',
      'Mieru rozptýlenosti hodnôt okolo priemeru',
      'Rozdiel maxima a minima',
    ],
    correctIndex: 2,
    explanation: 'Smerodajná odchýlka meria, o koľko sa hodnoty v priemere líšia od priemeru celého súboru.',
  },
  {
    question: 'Výsledky testov sú normálne rozdelené s priemerom 75 bodov a smerodajnou odchýlkou 10 bodov. Aké percento žiakov má výsledok medzi 65 a 85 bodmi?',
    options: ['50 %', '68 %', '95 %', '99,7 %'],
    correctIndex: 1,
    explanation: 'Interval (x̄ − s, x̄ + s) = (65, 85) obsahuje podľa pravidla 68–95–99,7 % práve 68 % hodnôt.',
  },
  {
    question: 'Modus súboru 4, 7, 4, 9, 7, 4, 3 je:',
    options: ['3', '7', '4', '9'],
    correctIndex: 2,
    explanation: 'Hodnota 4 sa vyskytuje 3-krát — najčastejšie. To je modus.',
  },
  {
    question: 'Žiak má tieto výsledky s váhami: ústne (váha 2): 1, test (váha 1): 3. Aký je vážený priemer?',
    options: ['1,50', '1,67', '2,00', '2,33'],
    correctIndex: 1,
    explanation: 'Vážený priemer = (2·1 + 1·3) / (2+1) = (2+3)/3 = 5/3 ≈ 1,67.',
  },
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function selectAnswer(i: number) {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = i
  if (i === currentQuestion.value.correctIndex) quizScore.value++
}

function nextQuestion() {
  if (currentQ.value < quiz.length - 1) {
    currentQ.value++
    selectedAnswer.value = null
  } else {
    quizFinished.value = true
  }
}

function resetQuiz() {
  currentQ.value = 0
  selectedAnswer.value = null
  quizScore.value = 0
  quizFinished.value = false
}

const scoreEmoji = computed(() => {
  const r = quizScore.value / quiz.length
  return r === 1 ? '🏆' : r >= 0.7 ? '🎉' : r >= 0.4 ? '💪' : '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length
  return r === 1 ? 'Perfektné!' : r >= 0.7 ? 'Výborne!' : r >= 0.4 ? 'Oplatí sa zopakovať.' : 'Skús znova.'
})

useSeoMeta({
  title: 'Štatistika | Matematika | NaučSa.to',
  description: 'Štatistika pre gymnazistov: priemer, medián, modus, rozptyl, smerodajná odchýlka, normálne rozdelenie a grafické zobrazenie dát.',
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
