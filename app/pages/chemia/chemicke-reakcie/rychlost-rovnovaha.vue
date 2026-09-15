<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/chemicke-reakcie" class="hover:text-orange-600 transition-colors">Chemické reakcie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Rýchlosť reakcie a chemická rovnováha</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⏱️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Rýchlosť reakcie a chemická rovnováha</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Prečo niektoré reakcie prebehnú za zlomok sekundy a iné trvajú roky? Ako môžeme reakciu urýchliť alebo spomaliť?
      Objavte fascinujúci svet kinetiky a rovnováhy chemických reakcií.
    </p>

    <!-- ===================== SEKCIA 1 ===================== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">1. Rýchlosť chemickej reakcie</h2>
      <p class="text-gray-700 mb-4">
        Rýchlosť chemickej reakcie udáva, ako rýchlo sa mení koncentrácia reaktantov alebo produktov za jednotku
        času. Čím rýchlejšie klesá koncentrácia reaktantov (alebo rastie koncentrácia produktov), tým je reakcia
        rýchlejšia.
      </p>

      <!-- Definícia rýchlosti -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <p class="text-sm font-semibold text-orange-700 mb-3">Definícia rýchlosti reakcie:</p>
        <div class="text-center text-xl mb-3" v-html="km('v = \\dfrac{\\Delta c}{\\Delta t}')"/>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
          <div>
            <span class="font-semibold" v-html="km('v')"/>
            — rýchlosť reakcie <span class="text-gray-400">[mol·l⁻¹·s⁻¹]</span>
          </div>
          <div>
            <span class="font-semibold" v-html="km('\\Delta c')"/>
            — zmena koncentrácie <span class="text-gray-400">[mol·l⁻¹]</span>
          </div>
          <div>
            <span class="font-semibold" v-html="km('\\Delta t')"/>
            — zmena času <span class="text-gray-400">[s]</span>
          </div>
        </div>
      </div>

      <!-- Faktory ovplyvňujúce rýchlosť -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Faktory ovplyvňujúce rýchlosť reakcie</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🧪</span>
            <h4 class="font-bold text-gray-800">Koncentrácia reaktantov</h4>
          </div>
          <p class="text-gray-600 text-sm mb-2">
            Vyššia koncentrácia → viac častíc v objeme → viac účinných zrážok za sekundu → vyššia rýchlosť.
            Závislosť popisuje <strong>rýchlostná rovnica</strong>:
          </p>
          <div class="text-center" v-html="km('v = k \\cdot c_A^{\\,m} \\cdot c_B^{\\,n}')"/>
        </div>

        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🌡️</span>
            <h4 class="font-bold text-gray-800">Teplota</h4>
          </div>
          <p class="text-gray-600 text-sm mb-2">
            Zvýšenie teploty o 10 °C zvyšuje rýchlosť reakcie približne 2–3-násobne (Van't Hoffovo pravidlo).
            Vyššia teplota dáva časticiam väčšiu kinetickú energiu — viac zrážok je účinných.
            Arrhenius:
          </p>
          <div class="text-center" v-html="km('k = A \\cdot e^{-E_a / RT}')"/>
        </div>

        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">⚡</span>
            <h4 class="font-bold text-gray-800">Katalyzátor</h4>
          </div>
          <p class="text-gray-600 text-sm">
            Katalyzátor <strong>znižuje aktivačnú energiu</strong> reakcie — umožňuje reakcii prebehnúť rýchlejšie
            bez toho, aby sa sám spotreboval. Biologické katalyzátory sa nazývajú <strong>enzýmy</strong>.
          </p>
        </div>

        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🪨</span>
            <h4 class="font-bold text-gray-800">Veľkosť povrchu tuhých látok</h4>
          </div>
          <p class="text-gray-600 text-sm">
            Väčší povrch → viac kontaktných miest medzi reaktantmi → rýchlejšia reakcia. Preto práškový cukor
            sa rozpúšťa rýchlejšie ako kocky cukru a jemné kovové piliny reagujú rýchlejšie ako kompaktný kov.
          </p>
        </div>
      </div>

      <!-- SVG: Koncentrácie v čase -->
      <div class="bg-white border border-orange-200 rounded-xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4 text-center">Koncentrácie reaktantov a produktov v čase</h3>
        <svg
          aria-label="Graf koncentrácií reaktantov a produktov v čase — krivky sa stretajú pri rovnováhe, kde sa rýchlosť vpred rovná rýchlosti vzad"
          viewBox="0 0 560 310"
          class="w-full max-w-2xl mx-auto block"
          role="img"
        >
          <rect width="560" height="310" fill="#fff7ed" rx="12" />

          <!-- Grid lines -->
          <line x1="70" y1="250" x2="510" y2="250" stroke="#d1d5db" stroke-width="1.5" />
          <line x1="70" y1="40" x2="70" y2="250" stroke="#d1d5db" stroke-width="1.5" />
          <line x1="70" y1="185" x2="510" y2="185" stroke="#e5e7eb" stroke-width="0.8" stroke-dasharray="5,4" />
          <line x1="70" y1="125" x2="510" y2="125" stroke="#e5e7eb" stroke-width="0.8" stroke-dasharray="5,4" />

          <!-- Equilibrium vertical line -->
          <line x1="290" y1="40" x2="290" y2="250" stroke="#f97316" stroke-width="1.5" stroke-dasharray="7,4" />
          <text x="296" y="58" fill="#f97316" font-size="11" font-family="sans-serif" font-weight="bold">Rovnováha</text>

          <!-- Reactant curve (A) — high start, drops to equilibrium plateau -->
          <path
            d="M70,55 C110,57 165,75 210,118 C245,150 268,170 290,178 C320,184 380,183 510,183"
            fill="none" stroke="#ef4444" stroke-width="2.5"
          />

          <!-- Product curve (B) — zero start, rises to equilibrium plateau -->
          <path
            d="M70,245 C110,243 165,228 210,195 C245,170 268,153 290,148 C320,143 380,143 510,143"
            fill="none" stroke="#22c55e" stroke-width="2.5"
          />

          <!-- Axis labels -->
          <text x="290" y="285" fill="#374151" font-size="13" font-family="sans-serif" text-anchor="middle">Čas (t)</text>
          <text x="18" y="150" fill="#374151" font-size="13" font-family="sans-serif" transform="rotate(-90,18,150)" text-anchor="middle">Koncentrácia c [mol/l]</text>

          <!-- Curve labels -->
          <text x="82" y="50" fill="#ef4444" font-size="11" font-family="sans-serif" font-weight="bold">c(A) — reaktant</text>
          <text x="82" y="248" fill="#22c55e" font-size="11" font-family="sans-serif" font-weight="bold">c(B) — produkt</text>

          <!-- Equilibrium label on curves -->
          <text x="318" y="165" fill="#f97316" font-size="10" font-family="sans-serif">v₁ = v₂</text>

          <!-- v1/v2 arrows -->
          <text x="148" y="108" fill="#ef4444" font-size="10" font-family="sans-serif">v₁ (vpred) ↘</text>
          <text x="148" y="218" fill="#22c55e" font-size="10" font-family="sans-serif">v₂ (vzad) ↗</text>

          <!-- Y axis ticks -->
          <text x="62" y="254" fill="#6b7280" font-size="10" font-family="sans-serif" text-anchor="end">0</text>
          <text x="62" y="189" fill="#6b7280" font-size="10" font-family="sans-serif" text-anchor="end">c₁</text>
          <text x="62" y="129" fill="#6b7280" font-size="10" font-family="sans-serif" text-anchor="end">c₀</text>

          <!-- Legend box -->
          <rect x="380" y="55" width="120" height="55" fill="white" stroke="#e5e7eb" rx="6" />
          <line x1="390" y1="74" x2="415" y2="74" stroke="#ef4444" stroke-width="2.5" />
          <text x="420" y="78" fill="#374151" font-size="10" font-family="sans-serif">Reaktant (A)</text>
          <line x1="390" y1="94" x2="415" y2="94" stroke="#22c55e" stroke-width="2.5" />
          <text x="420" y="98" fill="#374151" font-size="10" font-family="sans-serif">Produkt (B)</text>
        </svg>
        <p class="text-center text-sm text-gray-500 mt-2">
          Po dosiahnutí rovnováhy sa koncentrácie zdanlivo nemenia — rýchlosť doprednej reakcie
          <span v-html="km('v_1')"/> sa rovná rýchlosti spätnej reakcie <span v-html="km('v_2')"/>.
        </p>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-2">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 1: Výpočet rýchlosti reakcie</h3>
        <p class="text-gray-700 mb-3">
          Pri rozklade peroxidu vodíka klesla koncentrácia za 30 sekúnd z 0,50 mol/l na 0,35 mol/l.
          Aká je priemerná rýchlosť reakcie?
        </p>
        <div class="space-y-2 text-gray-800 text-sm">
          <div v-html="km('\\Delta c = c_0 - c_t = 0{,}50 - 0{,}35 = 0{,}15 \\;\\text{mol/l}')"/>
          <div v-html="km('\\Delta t = 30 \\;\\text{s}')"/>
          <div class="font-semibold" v-html="km('v = \\dfrac{\\Delta c}{\\Delta t} = \\dfrac{0{,}15}{30} = 5 \\times 10^{-3} \\;\\text{mol·l}^{-1}\\text{·s}^{-1}')"/>
        </div>
        <p class="text-sm text-blue-700 mt-3 font-semibold">
          Rýchlosť reakcie je 5 × 10⁻³ mol·l⁻¹·s⁻¹.
        </p>
      </div>
    </section>

    <!-- ===================== SEKCIA 2 ===================== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">2. Chemická rovnováha</h2>
      <p class="text-gray-700 mb-4">
        Vratná reakcia môže prebiehať v oboch smeroch — dopredu aj spätne. Chemická rovnováha nastáva vtedy,
        keď je <strong>rýchlosť doprednej reakcie rovnaká ako rýchlosť spätnej reakcie</strong>.
        Concentrácie reaktantov a produktov sa zdanlivo nemenia — ide o <em>dynamickú rovnováhu</em>.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <p class="text-sm font-semibold text-orange-700 mb-2">Príklad vratnej reakcie — syntéza amoniaku (Haber-Boschov proces):</p>
        <div class="text-center text-lg" v-html="km('\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3 \\quad \\Delta H < 0 \\;\\text{(exotermická)}')"/>
        <p class="text-sm text-gray-500 mt-2 text-center">Symbol ⇌ označuje vratnú reakciu prebiehajúcu v oboch smeroch.</p>
      </div>

      <!-- Rovnovážna konštanta K -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Rovnovážna konštanta K</h3>
      <p class="text-gray-700 mb-3">
        Rovnovážna konštanta K vyjadruje pomer rovnovážnych koncentrácií produktov a reaktantov.
        Pre všeobecnú reakciu:
      </p>
      <div class="text-center mb-3" v-html="km('a\\,\\text{A} + b\\,\\text{B} \\rightleftharpoons c\\,\\text{C} + d\\,\\text{D}')"/>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <div class="text-center text-xl mb-4" v-html="km('K = \\dfrac{[\\text{C}]^{c} \\cdot [\\text{D}]^{d}}{[\\text{A}]^{a} \\cdot [\\text{B}]^{b}}')"/>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div class="bg-white rounded-lg p-3 text-center border border-orange-200">
            <div class="font-bold text-green-700 text-base mb-1">K ≫ 1</div>
            <div class="text-gray-600">Rovnováha posunutá <strong>doprava</strong> — prevažujú produkty</div>
          </div>
          <div class="bg-white rounded-lg p-3 text-center border border-orange-200">
            <div class="font-bold text-yellow-700 text-base mb-1">K ≈ 1</div>
            <div class="text-gray-600">Reaktanty a produkty v porovnateľných množstvách</div>
          </div>
          <div class="bg-white rounded-lg p-3 text-center border border-orange-200">
            <div class="font-bold text-red-700 text-base mb-1">K ≪ 1</div>
            <div class="text-gray-600">Rovnováha posunutá <strong>doľava</strong> — prevažujú reaktanty</div>
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 2: Výpočet rovnovážnej konštanty K</h3>
        <p class="text-gray-700 mb-3">
          Pre reakciu <span v-html="km('\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\,\\text{HI}')"/>
          sú rovnovážne koncentrácie:
          <span v-html="km('[\\text{H}_2] = 0{,}10 \\;\\text{mol/l}')"/>,
          <span v-html="km('[\\text{I}_2] = 0{,}10 \\;\\text{mol/l}')"/>,
          <span v-html="km('[\\text{HI}] = 0{,}60 \\;\\text{mol/l}')"/>.
          Vypočítajte K.
        </p>
        <div class="space-y-2 text-gray-800 text-sm">
          <div v-html="km('K = \\dfrac{[\\text{HI}]^2}{[\\text{H}_2] \\cdot [\\text{I}_2]}')"/>
          <div v-html="km('K = \\dfrac{(0{,}60)^2}{0{,}10 \\cdot 0{,}10} = \\dfrac{0{,}36}{0{,}01} = 36')"/>
        </div>
        <p class="text-sm text-blue-700 mt-3 font-semibold">
          K = 36 — rovnováha je výrazne posunutá doprava, v rovnováhe prevažuje
          <span v-html="km('\\text{HI}')"/>.
        </p>
      </div>

      <!-- Le Chatelierov princíp -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Le Chatelierov princíp</h3>
      <div class="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-5">
        <p class="font-bold text-amber-800 mb-2">Definícia:</p>
        <p class="text-gray-700">
          Ak na sústavu v rovnováhe zapôsobí vonkajší vplyv (zmena koncentrácie, teploty alebo tlaku),
          rovnováha sa posunie v takom smere, ktorý <strong>tento vplyv zmenšuje</strong>.
        </p>
      </div>

      <!-- Tabuľka faktorov -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-100">
              <th class="border border-orange-200 p-3 text-left text-orange-800">Faktor</th>
              <th class="border border-orange-200 p-3 text-left text-orange-800">Zmena</th>
              <th class="border border-orange-200 p-3 text-left text-orange-800">Posun rovnováhy</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-orange-50">
              <td class="border border-orange-200 p-3 font-medium">Koncentrácia reaktantu</td>
              <td class="border border-orange-200 p-3">Zvýšenie</td>
              <td class="border border-orange-200 p-3 text-green-700 font-medium">→ Doprava (tvoria sa produkty)</td>
            </tr>
            <tr class="hover:bg-orange-50">
              <td class="border border-orange-200 p-3 font-medium">Koncentrácia produktu</td>
              <td class="border border-orange-200 p-3">Zvýšenie</td>
              <td class="border border-orange-200 p-3 text-red-700 font-medium">← Doľava (tvoria sa reaktanty)</td>
            </tr>
            <tr class="hover:bg-orange-50">
              <td class="border border-orange-200 p-3 font-medium">Teplota</td>
              <td class="border border-orange-200 p-3">Zvýšenie</td>
              <td class="border border-orange-200 p-3">→ Endotermická reakcia sa podporí</td>
            </tr>
            <tr class="hover:bg-orange-50">
              <td class="border border-orange-200 p-3 font-medium">Tlak (plynné sústavy)</td>
              <td class="border border-orange-200 p-3">Zvýšenie</td>
              <td class="border border-orange-200 p-3">→ Strana s menším počtom mólov plynu</td>
            </tr>
            <tr class="hover:bg-orange-50">
              <td class="border border-orange-200 p-3 font-medium">Katalyzátor</td>
              <td class="border border-orange-200 p-3">Pridanie</td>
              <td class="border border-orange-200 p-3 text-blue-700">Rovnováha sa neposúva — iba rýchlejšie dosiahnutie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ===================== SEKCIA 3 ===================== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">3. Katalyzátor a aktivačná energia</h2>
      <p class="text-gray-700 mb-4">
        Aby mohla chemická reakcia nastať, musia reagujúce častice prekročiť energetickú bariéru —
        <strong>aktivačnú energiu</strong> <span v-html="km('E_a')"/>. Katalyzátor ponúka alternatívnu
        reakčnú cestu s nižšou aktivačnou energiou, čím reakciu urýchľuje bez zmeny rovnovážneho stavu.
      </p>

      <!-- SVG: Energetický diagram -->
      <div class="bg-white border border-orange-200 rounded-xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4 text-center">Energetický diagram reakcie — vplyv katalyzátora</h3>
        <svg
          aria-label="Energetický diagram zobrazujúci aktivačnú energiu bez katalyzátora a s katalyzátorom — katalyzátor znižuje energetickú bariéru, pričom reaktanty a produkty zostávajú na rovnakej energetickej úrovni"
          viewBox="0 0 520 290"
          class="w-full max-w-2xl mx-auto block"
          role="img"
        >
          <rect width="520" height="290" fill="#fff7ed" rx="10" />

          <!-- Axes -->
          <line x1="55" y1="245" x2="490" y2="245" stroke="#9ca3af" stroke-width="1.5" />
          <line x1="55" y1="245" x2="55" y2="30" stroke="#9ca3af" stroke-width="1.5" />

          <!-- Axis labels -->
          <text x="272" y="275" fill="#374151" font-size="12" font-family="sans-serif" text-anchor="middle">Reakčná koordináta</text>
          <text x="18" y="148" fill="#374151" font-size="12" font-family="sans-serif" transform="rotate(-90,18,148)" text-anchor="middle">Energia (E)</text>

          <!-- Reactant level line -->
          <line x1="55" y1="185" x2="110" y2="185" stroke="#374151" stroke-width="2" />
          <text x="58" y="178" fill="#374151" font-size="10" font-family="sans-serif">Reaktanty</text>

          <!-- Product level line (lower = exothermic) -->
          <line x1="420" y1="215" x2="490" y2="215" stroke="#374151" stroke-width="2" />
          <text x="423" y="230" fill="#374151" font-size="10" font-family="sans-serif">Produkty</text>

          <!-- Curve WITHOUT catalyst (high barrier, dashed red) -->
          <path
            d="M110,185 C155,185 175,55 235,50 C295,45 315,55 370,215 C390,215 415,215 420,215"
            fill="none" stroke="#ef4444" stroke-width="2.5"
          />

          <!-- Curve WITH catalyst (lower barrier, solid green) -->
          <path
            d="M110,185 C148,185 168,100 225,95 C282,90 308,98 370,215 C390,215 415,215 420,215"
            fill="none" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="8,4"
          />

          <!-- Ea arrow without catalyst -->
          <line x1="138" y1="185" x2="138" y2="53" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2" />
          <text x="142" y="118" fill="#ef4444" font-size="11" font-family="sans-serif" font-weight="bold">Eₐ</text>

          <!-- Ea' arrow with catalyst -->
          <line x1="165" y1="185" x2="165" y2="97" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2" />
          <text x="169" y="150" fill="#22c55e" font-size="11" font-family="sans-serif" font-weight="bold">Eₐ'</text>

          <!-- Legend -->
          <rect x="330" y="42" width="160" height="58" fill="white" stroke="#e5e7eb" rx="6" />
          <line x1="340" y1="62" x2="368" y2="62" stroke="#ef4444" stroke-width="2.5" />
          <text x="374" y="66" fill="#374151" font-size="10" font-family="sans-serif">Bez katalyzátora</text>
          <line x1="340" y1="84" x2="368" y2="84" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="8,4" />
          <text x="374" y="88" fill="#374151" font-size="10" font-family="sans-serif">S katalyzátorom</text>
        </svg>
        <p class="text-center text-sm text-gray-500 mt-2">
          Katalyzátor znižuje aktivačnú energiu z
          <span v-html="km('E_a')"/> na <span v-html="km('E_a\'')"/>.
          Energetický rozdiel reaktantov a produktov zostáva nezmenený.
        </p>
      </div>

      <!-- Typy katalýzy -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h4 class="font-bold text-orange-800 mb-2">Homogénna katalýza</h4>
          <p class="text-sm text-gray-600">Katalyzátor a reaktanty sú v rovnakej fáze (napr. obaja v roztoku).</p>
          <p class="text-xs text-gray-400 mt-2">Príklad: kyselina sírová pri esterifikácii</p>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h4 class="font-bold text-orange-800 mb-2">Heterogénna katalýza</h4>
          <p class="text-sm text-gray-600">Katalyzátor je v inej fáze ako reaktanty (pevný kov / plynné reaktanty).</p>
          <p class="text-xs text-gray-400 mt-2">Príklad: Fe pri syntéze amoniaku</p>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h4 class="font-bold text-orange-800 mb-2">Enzýmová katalýza</h4>
          <p class="text-sm text-gray-600">Biologické katalyzátory — enzýmy — urýchľujú biochemické reakcie.</p>
          <p class="text-xs text-gray-400 mt-2">Príklad: amyláza pri trávení škrobu</p>
        </div>
      </div>
    </section>

    <!-- ===================== ZHRNUTIE ===================== -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span>
            Rýchlosť reakcie
            <span v-html="km('v = \\Delta c / \\Delta t')"/>
            závisí od <strong>koncentrácie reaktantov</strong>, <strong>teploty</strong>, <strong>katalyzátora</strong>
            a <strong>veľkosti povrchu</strong> tuhých reaktantov.
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span>Katalyzátor <strong>znižuje aktivačnú energiu</strong>
            <span v-html="km('E_a')"/> — urýchľuje reakciu, ale sám sa nespotrebúva ani neovplyvňuje polohu rovnováhy.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span>Chemická rovnováha je <strong>dynamický stav</strong>:
            <span v-html="km('v_1 = v_2')"/> — koncentrácie sa zdanlivo nemenia, ale reakcia stále prebieha v oboch smeroch.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span>Rovnovážna konštanta
            <span v-html="km('K = [\\text{produkty}]^{\\text{exp}} / [\\text{reaktanty}]^{\\text{exp}}')"/>
            — K ≫ 1 znamená prevahu produktov; K ≪ 1 prevahu reaktantov.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span><strong>Le Chatelierov princíp</strong>: vonkajší vplyv posúva rovnováhu v smere, ktorý ho oslabuje.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">→</span>
          <span>
            Zvýšenie koncentrácie reaktantov → posun doprava; zvýšenie teploty → endotermická reakcia podporená;
            zvýšenie tlaku → posun k menšiemu počtu mólov plynu.
          </span>
        </li>
      </ul>
    </div>

    <!-- ===================== KVÍZ ===================== -->
    <section>
      <h2 class="text-2xl font-bold text-orange-700 mb-6">Otestuj sa</h2>
      <div class="bg-white border border-orange-200 rounded-2xl p-6">
        <div v-if="!quizFinished">
          <!-- Progress -->
          <div data-testid="quiz-progress" class="flex justify-between items-center mb-3 text-sm text-gray-500">
            <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <span>Body: {{ quizScore }}</span>
          </div>
          <div class="w-full bg-orange-100 rounded-full h-2 mb-6">
            <div
              class="bg-orange-500 h-2 rounded-full transition-all"
              :style="{ width: ((currentQ + 1) / quiz.length * 100) + '%' }"
            />
          </div>

          <Transition name="fade" mode="out-in">
            <div :key="currentQ">
              <p
                data-testid="quiz-question"
                class="text-lg font-semibold text-gray-800 mb-4"
                v-html="currentQuestion.question"
              />

              <div class="space-y-3 mb-4">
                <button
                  v-for="(option, i) in currentQuestion.options"
                  :key="i"
                  type="button"
                  :data-testid="`quiz-option-${i}`"
                  class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all"
                  :class="{
                    'border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer': selectedAnswer === null,
                    'border-green-400 bg-green-50 text-green-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
                    'border-red-400 bg-red-50 text-red-800': selectedAnswer !== null && selectedAnswer === i && i !== currentQuestion.correctIndex,
                    'border-gray-200 text-gray-400 cursor-default': selectedAnswer !== null && selectedAnswer !== i && i !== currentQuestion.correctIndex,
                  }"
                  @click="selectAnswer(i)"
                  v-html="option"
                />
              </div>

              <Transition name="fade">
                <div
                  v-if="selectedAnswer !== null"
                  data-testid="quiz-feedback"
                  class="mb-4 p-4 rounded-xl text-sm"
                  :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'"
                >
                  <span class="font-bold">
                    {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
                  </span>
                  <span class="ml-1" v-html="currentQuestion.explanation"/>
                </div>
              </Transition>

              <button
                v-if="selectedAnswer !== null"
                type="button"
                data-testid="quiz-next-btn"
                class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </Transition>
        </div>

        <!-- Result -->
        <div v-else data-testid="quiz-result" class="text-center py-6">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
          <p data-testid="quiz-score" class="text-gray-600 mb-6">
            Dosiahol si {{ quizScore }} z {{ quiz.length }} bodov
          </p>
          <button
            type="button"
            data-testid="quiz-reset-btn"
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo vyjadruje rýchlosť chemickej reakcie?',
    options: [
      'Celkové množstvo látky, ktoré zreaguje',
      'Zmenu koncentrácie reaktantov alebo produktov za jednotku času',
      'Teplotu, pri ktorej reakcia prebieha',
      'Hmotnosť vzniknutých produktov'
    ],
    correctIndex: 1,
    explanation: 'Rýchlosť reakcie je definovaná vzorcom v = Δc/Δt — vyjadruje zmenu koncentrácie za jednotku času.'
  },
  {
    question: 'Čo sa stane s rýchlosťou reakcie pri zvýšení koncentrácie reaktantov?',
    options: [
      'Rýchlosť reakcie sa zníži',
      'Rýchlosť reakcie zostane nezmenená',
      'Rýchlosť reakcie sa zvýši',
      'Reakcia sa úplne zastaví'
    ],
    correctIndex: 2,
    explanation: 'Vyššia koncentrácia → viac reagujúcich častíc v objeme → viac účinných zrážok za sekundu → vyššia rýchlosť reakcie.'
  },
  {
    question: 'Ako pôsobí katalyzátor na chemickú reakciu?',
    options: [
      'Zvyšuje aktivačnú energiu a spotrebúva sa',
      'Znižuje aktivačnú energiu, ale sám sa nespotrebúva',
      'Posúva chemickú rovnováhu doprava a zvyšuje K',
      'Zvyšuje aktivačnú energiu, ale sám sa nespotrebúva'
    ],
    correctIndex: 1,
    explanation: 'Katalyzátor znižuje aktivačnú energiu tým, že ponúka alternatívnu reakčnú cestu. Sám sa pritom chemicky nespotrebúva — po reakcii sa regeneruje.'
  },
  {
    question: 'Pri reakcii sa koncentrácia látky znížila z 0,80 mol/l na 0,50 mol/l za 60 s. Aká je rýchlosť reakcie?',
    options: [
      '5,0 × 10⁻³ mol·l⁻¹·s⁻¹',
      '5,0 × 10⁻² mol·l⁻¹·s⁻¹',
      '3,0 × 10⁻³ mol·l⁻¹·s⁻¹',
      '1,3 × 10⁻² mol·l⁻¹·s⁻¹'
    ],
    correctIndex: 0,
    explanation: 'v = Δc/Δt = (0,80 − 0,50) / 60 = 0,30 / 60 = 0,005 = 5,0 × 10⁻³ mol·l⁻¹·s⁻¹.'
  },
  {
    question: 'Podľa Le Chatelierovho princípu — ak zvýšime koncentráciu reaktantov vo vratnej reakcii, rovnováha sa posunie:',
    options: [
      'Doľava — k reaktantom',
      'Doprava — k produktom',
      'Rovnováha sa nezmení',
      'Závisí to iba od teploty'
    ],
    correctIndex: 1,
    explanation: 'Le Chatelierov princíp: zvýšenie koncentrácie reaktantov spôsobí posun rovnováhy doprava — sústava spotrebúva prebytok reaktantov tvorbou produktov.'
  },
  {
    question: 'Pre reakciu A + B ⇌ 2C sú rovnovážne koncentrácie: [A] = 0,2 mol/l, [B] = 0,2 mol/l, [C] = 0,8 mol/l. Aká je rovnovážna konštanta K?',
    options: [
      'K = 4',
      'K = 8',
      'K = 16',
      'K = 32'
    ],
    correctIndex: 2,
    explanation: 'K = [C]² / ([A]·[B]) = (0,8)² / (0,2 · 0,2) = 0,64 / 0,04 = 16.'
  }
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
