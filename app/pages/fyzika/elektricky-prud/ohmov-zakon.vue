<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/elektricky-prud" class="hover:text-emerald-600 transition-colors">Elektrický prúd</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Ohmov zákon</span>
    </nav>

    <!-- Header -->
    <div class="bg-amber-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
      <h1 class="text-4xl font-bold mb-2">📊 Ohmov zákon</h1>
      <p class="text-amber-100 text-lg">Základný zákon elektrotechniky popisujúci vzťah medzi napätím, prúdom a odporom.</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Ohmov zákon patrí medzi najdôležitejšie zákony v elektrotechnike. Pomenovaný podľa nemeckého fyzika
      Georga Simona Ohma (1789–1854), vyjadruje jednoduchý, ale mocný vzťah medzi elektrickým napätím,
      prúdom a odporom elektrického obvodu. Bez tohto zákona by sme nedokázali navrhovať žiadny elektrický
      obvod – od jednoduchej baterky až po moderné počítačové čipy.
    </p>

    <!-- ============================================================ -->
    <!-- SECTION 1: Ohmov zákon                                       -->
    <!-- ============================================================ -->
    <section aria-label="Ohmov zákon – základný vzorec" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
        1. Ohmov zákon
      </h2>

      <p class="text-gray-700 mb-4">
        Ohmov zákon hovorí, že elektrický prúd prechádzajúci vodičom je priamo úmerný elektrickému napätiu
        na jeho koncoch a nepriamo úmerný odporu vodiča:
      </p>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 text-center">
        <MathFormula display formula="U = I \cdot R" />
        <div class="mt-3 text-gray-600 text-sm flex flex-wrap justify-center gap-4">
          <span><span v-html="km('U')"/> – napätie [V]</span>
          <span><span v-html="km('I')"/> – prúd [A]</span>
          <span><span v-html="km('R')"/> – odpor [Ω]</span>
        </div>
      </div>

      <p class="text-gray-700 mb-4">Z Ohmovho zákona vieme jednoducho vyjadriť každú z troch veličín:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-amber-600 font-bold mb-2">Napätie</div>
          <MathFormula display formula="U = I \cdot R" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-amber-600 font-bold mb-2">Prúd</div>
          <MathFormula display formula="I = \frac{U}{R}" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-amber-600 font-bold mb-2">Odpor</div>
          <MathFormula display formula="R = \frac{U}{I}" />
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 1: Výpočet prúdu žiarovkou</h3>
        <p class="text-gray-700 mb-3">
          Žiarovka má odpor <span v-html="km('R = 240\\,\\Omega')"/> a je zapojená na napätie
          <span v-html="km('U = 230\\,\\text{V}')"/>. Aký prúd ňou prechádza?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2">
          <p class="text-gray-600 text-sm">
            <strong>Zadané:</strong>
            <span v-html="km('U = 230\\,\\text{V}')"/>,
            <span v-html="km('R = 240\\,\\Omega')"/> &nbsp;|&nbsp;
            <strong>Hľadáme:</strong>
            <span v-html="km('I')"/>
          </p>
          <MathFormula display formula="I = \frac{U}{R} = \frac{230\,\text{V}}{240\,\Omega} \approx 0{,}958\,\text{A}" />
          <p class="text-green-700 font-medium">
            Žiarovkou prechádza prúd
            <span v-html="km('I \\approx 0{,}96\\,\\text{A}')"/>.
          </p>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 2: Výpočet odporu</h3>
        <p class="text-gray-700 mb-3">
          Cez spotrebič prechádza prúd <span v-html="km('I = 2\\,\\text{A}')"/> pri napätí
          <span v-html="km('U = 24\\,\\text{V}')"/>. Aký je jeho odpor?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2">
          <MathFormula display formula="R = \frac{U}{I} = \frac{24\,\text{V}}{2\,\text{A}} = 12\,\Omega" />
          <p class="text-green-700 font-medium">
            Odpor spotrebiča je <span v-html="km('R = 12\\,\\Omega')"/>.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECTION 2: Odpor vodiča                                      -->
    <!-- ============================================================ -->
    <section aria-label="Odpor vodiča a závislosť od teploty" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
        2. Odpor vodiča a závislosť od teploty
      </h2>

      <p class="text-gray-700 mb-4">
        Elektrický odpor vodiča nezávisí len od materiálu, ale aj od jeho geometrie – dĺžky a prierezového obsahu:
      </p>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 text-center">
        <MathFormula display formula="R = \rho \cdot \frac{l}{S}" />
        <div class="mt-3 text-gray-600 text-sm flex flex-wrap justify-center gap-4">
          <span><span v-html="km('\\rho')"/> – merný elektrický odpor [Ω·m]</span>
          <span><span v-html="km('l')"/> – dĺžka vodiča [m]</span>
          <span><span v-html="km('S')"/> – prierez vodiča [m²]</span>
        </div>
      </div>

      <p class="text-gray-700 mb-4">
        Merný elektrický odpor <span v-html="km('\\rho')"/> je materiálová konštanta – charakterizuje,
        ako dobre daný materiál vedie elektrický prúd. Čím menšie <span v-html="km('\\rho')"/>, tým
        lepší vodič.
      </p>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-amber-600 text-white">
              <th scope="col" class="p-3 text-left rounded-tl-lg">Materiál</th>
              <th scope="col" class="p-3 text-right">Merný odpor ρ [Ω·m]</th>
              <th scope="col" class="p-3 text-left rounded-tr-lg">Typické použitie</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b border-gray-100">
              <td class="p-3">Strieboro (Ag)</td>
              <td class="p-3 text-right" v-html="km('1{,}6 \\times 10^{-8}')"/>
              <td class="p-3">Kontakty, šperky</td>
            </tr>
            <tr class="bg-gray-50 border-b border-gray-100">
              <td class="p-3">Meď (Cu)</td>
              <td class="p-3 text-right" v-html="km('1{,}7 \\times 10^{-8}')"/>
              <td class="p-3">Elektrické vodiče, káble</td>
            </tr>
            <tr class="bg-white border-b border-gray-100">
              <td class="p-3">Hliník (Al)</td>
              <td class="p-3 text-right" v-html="km('2{,}8 \\times 10^{-8}')"/>
              <td class="p-3">Vedenia vysokého napätia</td>
            </tr>
            <tr class="bg-gray-50 border-b border-gray-100">
              <td class="p-3">Volfrám (W)</td>
              <td class="p-3 text-right" v-html="km('5{,}5 \\times 10^{-8}')"/>
              <td class="p-3">Vlákno žiaroviek</td>
            </tr>
            <tr class="bg-white">
              <td class="p-3">Železo (Fe)</td>
              <td class="p-3 text-right" v-html="km('1{,}0 \\times 10^{-7}')"/>
              <td class="p-3">Technické konštrukcie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 3: Odpor medeného vodiča</h3>
        <p class="text-gray-700 mb-3">
          Aký je odpor medeného vodiča dĺžky <span v-html="km('l = 100\\,\\text{m}')"/>
          s kruhovým prierezom priemeru <span v-html="km('d = 2\\,\\text{mm}')"/>?
          (<span v-html="km('\\rho_{\\text{Cu}} = 1{,}7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}')"/>)
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2">
          <p class="text-gray-600 text-sm font-medium">Výpočet prierezu:</p>
          <MathFormula display formula="S = \frac{\pi d^2}{4} = \frac{\pi \cdot (2 \times 10^{-3}\,\text{m})^2}{4} \approx 3{,}14 \times 10^{-6}\,\text{m}^2" />
          <p class="text-gray-600 text-sm font-medium">Výpočet odporu:</p>
          <MathFormula display formula="R = \rho \cdot \frac{l}{S} = 1{,}7 \times 10^{-8} \cdot \frac{100}{3{,}14 \times 10^{-6}} \approx 0{,}54\,\Omega" />
          <p class="text-green-700 font-medium">
            Odpor vodiča je <span v-html="km('R \\approx 0{,}54\\,\\Omega')"/>.
          </p>
        </div>
      </div>

      <!-- Závislosť od teploty -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Závislosť odporu od teploty</h3>
      <p class="text-gray-700 mb-4">
        Odpor kovových vodičov sa mení s teplotou. Pre malé zmeny teploty platí lineárna závislosť:
      </p>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4 text-center">
        <MathFormula display formula="R_T = R_0 \cdot (1 + \alpha \cdot \Delta T)" />
        <div class="mt-3 text-gray-600 text-sm flex flex-wrap justify-center gap-4">
          <span><span v-html="km('R_0')"/> – odpor pri 0 °C</span>
          <span><span v-html="km('\\alpha')"/> – teplotný koeficient odporu [K⁻¹]</span>
          <span><span v-html="km('\\Delta T')"/> – zmena teploty [K alebo °C]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <p class="font-semibold text-orange-800 mb-1">PTC – pozitívny koeficient</p>
          <p class="text-gray-700 text-sm">
            Pre kovy: <span v-html="km('\\alpha > 0')"/> – odpor s teplotou
            <strong>rastie</strong>. Príklad: meď, volfrám, železo.
          </p>
        </div>
        <div class="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <p class="font-semibold text-teal-800 mb-1">NTC – negatívny koeficient</p>
          <p class="text-gray-700 text-sm">
            Pre polovodiče: <span v-html="km('\\alpha < 0')"/> – odpor s teplotou
            <strong>klesá</strong>. Príklad: termistory, kremík, germanium.
          </p>
        </div>
      </div>

      <!-- Supravodivosť -->
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
        <h3 class="text-lg font-bold text-purple-800 mb-2">Supravodivosť</h3>
        <p class="text-gray-700 mb-2">
          Pri teplotách blízkych absolútnej nule (<span v-html="km('T \\to 0\\,\\text{K}')"/>)
          niektoré látky strácajú elektrický odpor úplne – stávajú sa
          <strong>supravodičmi</strong>. Ich odpor je presne nula a elektrický prúd nimi môže tiecť bez
          akýchkoľvek energetických strát.
        </p>
        <p class="text-gray-600 text-sm">
          <strong>Príklady využitia:</strong> magnetické rezonančné zobrazovanie (MRI), magnety urýchľovačov
          (CERN), magnetické levitačné vlaky (Maglev), výskum v oblasti kvantových počítačov.
        </p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECTION 3: V-A charakteristika                               -->
    <!-- ============================================================ -->
    <section aria-label="Volt-ampérová charakteristika" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
        3. Volt-ampérová (V-A) charakteristika
      </h2>

      <p class="text-gray-700 mb-4">
        Závislosť prúdu <span v-html="km('I')"/> od napätia <span v-html="km('U')"/>
        sa vyjadruje graficky ako <strong>volt-ampérová charakteristika</strong>. Podľa jej tvaru
        rozlišujeme ohmické a neohmické vodiče.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 class="font-bold text-green-800 mb-3">Lineárna V-A charakteristika</h3>
          <p class="text-gray-700 mb-3 text-sm">
            Závislosť <span v-html="km('I(U)')"/> je priamka prechádzajúca počiatkom – vodič
            spĺňa Ohmov zákon. Sklon priamky je vodivosť
            <span v-html="km('G = 1/R')"/>.
          </p>
          <p class="text-gray-600 text-xs mb-3">
            <strong>Príklady:</strong> kovové vodiče pri konštantnej teplote, odporníky
          </p>
          <svg viewBox="0 0 200 160" class="w-full bg-white rounded-lg border border-green-200" aria-label="Lineárna V-A charakteristika">
            <line x1="20" y1="140" x2="190" y2="140" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrG)"/>
            <line x1="20" y1="140" x2="20" y2="10" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrG2)"/>
            <defs>
              <marker id="arrG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
              </marker>
              <marker id="arrG2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
              </marker>
            </defs>
            <line x1="20" y1="140" x2="175" y2="25" stroke="#16a34a" stroke-width="2.5"/>
            <text x="178" y="145" font-size="11" fill="#6b7280">U</text>
            <text x="5" y="14" font-size="11" fill="#6b7280">I</text>
            <text x="100" y="156" font-size="9" fill="#16a34a" text-anchor="middle">Ohmický vodič</text>
          </svg>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-800 mb-3">Nelineárna V-A charakteristika</h3>
          <p class="text-gray-700 mb-3 text-sm">
            Závislosť <span v-html="km('I(U)')"/> nie je priamka – vodič
            <strong>nespĺňa</strong> Ohmov zákon. Odpor sa mení v závislosti od napätia
            (a teda aj prúdu).
          </p>
          <p class="text-gray-600 text-xs mb-3">
            <strong>Príklady:</strong> žiarovka (volfrám sa zahreje), dióda, termistor
          </p>
          <svg viewBox="0 0 200 160" class="w-full bg-white rounded-lg border border-red-200" aria-label="Nelineárna V-A charakteristika">
            <line x1="20" y1="140" x2="190" y2="140" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrR)"/>
            <line x1="20" y1="140" x2="20" y2="10" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrR2)"/>
            <defs>
              <marker id="arrR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
              </marker>
              <marker id="arrR2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
              </marker>
            </defs>
            <path d="M 20 140 C 60 138 100 120 130 90 S 165 40 178 22" fill="none" stroke="#dc2626" stroke-width="2.5"/>
            <text x="178" y="145" font-size="11" fill="#6b7280">U</text>
            <text x="5" y="14" font-size="11" fill="#6b7280">I</text>
            <text x="100" y="156" font-size="9" fill="#dc2626" text-anchor="middle">Neohmický vodič</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECTION 4: Vnútorný odpor zdroja                            -->
    <!-- ============================================================ -->
    <section aria-label="Vnútorný odpor zdroja a svorkové napätie" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
        4. Vnútorný odpor zdroja a svorkové napätie
      </h2>

      <p class="text-gray-700 mb-4">
        Každý reálny zdroj napätia (batéria, akumulátor, generátor) má okrem elektromotorického napätia (EMN)
        <span v-html="km('\\varepsilon')"/> aj vlastný <strong>vnútorný odpor</strong>
        <span v-html="km('r')"/>. Pri prietoku prúdu vzniká na vnútornom odpore úbytok napätia, preto
        je <strong>svorkové napätie</strong> (napätie na svorkách zdroja) nižšie ako EMN:
      </p>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 text-center">
        <MathFormula display formula="U = \varepsilon - I \cdot r" />
        <div class="mt-3 text-gray-600 text-sm flex flex-wrap justify-center gap-4">
          <span><span v-html="km('\\varepsilon')"/> – elektromotorické napätie (EMN) [V]</span>
          <span><span v-html="km('r')"/> – vnútorný odpor zdroja [Ω]</span>
          <span><span v-html="km('I \\cdot r')"/> – úbytok napätia na vnútornom odpore [V]</span>
        </div>
      </div>

      <div class="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-6">
        <p class="font-semibold text-yellow-800 mb-2">Dôležité špeciálne prípady</p>
        <ul class="text-gray-700 space-y-1 list-disc list-inside text-sm">
          <li>
            <strong>Naprázdno</strong> (<span v-html="km('I = 0')"/>): svorkové napätie = EMN,
            <span v-html="km('U = \\varepsilon')"/>
          </li>
          <li>
            <strong>Skrat</strong> (<span v-html="km('R = 0')"/>): celé EMN sa spotrebuje na vnútornom
            odpore, skratový prúd <span v-html="km('I_{\\text{sk}} = \\varepsilon / r')"/>
          </li>
          <li>
            Čím väčší prúd odoberáme, tým viac svorkové napätie klesá
          </li>
          <li>
            Vybité batérie majú vysoký vnútorný odpor – preto pri zaťažení rýchlo klesne ich napätie
          </li>
        </ul>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 class="font-bold text-blue-800 mb-3">Príklad 4: Svorkové napätie batérie</h3>
        <p class="text-gray-700 mb-3">
          Batéria má EMN <span v-html="km('\\varepsilon = 9\\,\\text{V}')"/> a vnútorný odpor
          <span v-html="km('r = 2\\,\\Omega')"/>. K batérii je pripojený vonkajší odpor
          <span v-html="km('R = 16\\,\\Omega')"/>. Aké je svorkové napätie?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2">
          <p class="text-gray-600 text-sm font-medium">Prúd v obvode:</p>
          <MathFormula display formula="I = \frac{\varepsilon}{R + r} = \frac{9\,\text{V}}{16\,\Omega + 2\,\Omega} = \frac{9}{18} = 0{,}5\,\text{A}" />
          <p class="text-gray-600 text-sm font-medium">Svorkové napätie:</p>
          <MathFormula display formula="U = \varepsilon - I \cdot r = 9\,\text{V} - 0{,}5\,\text{A} \cdot 2\,\Omega = 9 - 1 = 8\,\text{V}" />
          <p class="text-green-700 font-medium">
            Svorkové napätie batérie je <span v-html="km('U = 8\\,\\text{V}')"/>.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- ZHRNUTIE                                                     -->
    <!-- ============================================================ -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové vzorce</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-amber-600 mt-0.5 shrink-0">▸</span>
              <span>Ohmov zákon: <span v-html="km('U = I \\cdot R')"/></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 mt-0.5 shrink-0">▸</span>
              <span>Odpor vodiča: <span v-html="km('R = \\rho \\cdot l / S')"/></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 mt-0.5 shrink-0">▸</span>
              <span>Závislosť od teploty: <span v-html="km('R_T = R_0(1 + \\alpha \\Delta T)')"/></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 mt-0.5 shrink-0">▸</span>
              <span>Svorkové napätie: <span v-html="km('U = \\varepsilon - I \\cdot r')"/></span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové pojmy</h3>
          <ul class="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>Merný elektrický odpor <span v-html="km('\\rho')"/> [Ω·m] – vlastnosť materiálu</li>
            <li>Teplotný koeficient odporu <span v-html="km('\\alpha')"/> [K⁻¹]</li>
            <li>Lineárna V-A char. – ohmický vodič</li>
            <li>Nelineárna V-A char. – neohmický vodič</li>
            <li>Supravodivosť – nulový odpor pri nízkych teplotách</li>
            <li>Vnútorný odpor <span v-html="km('r')"/> a EMN <span v-html="km('\\varepsilon')"/> zdroja</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- KVÍZ                                                         -->
    <!-- ============================================================ -->
    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Kvíz: Ohmov zákon</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center gap-3 mb-6">
          <div class="flex-1 bg-gray-200 rounded-full h-2">
            <div
              class="bg-amber-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
            />
          </div>
          <span class="text-sm text-gray-500 whitespace-nowrap">{{ currentQ + 1 }} / {{ quiz.length }}</span>
        </div>

        <!-- Question -->
        <p
          data-testid="question"
          class="text-lg font-semibold text-gray-800 mb-5"
          v-html="currentQuestion.question"
        />

        <!-- Options -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium text-sm"
            :class="optionClass(i)"
            @click="selectAnswer(i)"
            v-html="option"
          />
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            class="rounded-xl p-4 mb-4 text-sm"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-300 text-green-800'
              : 'bg-red-50 border border-red-300 text-red-800'"
          >
            <p class="font-semibold mb-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne' }}
            </p>
            <p v-html="currentQuestion.explanation"/>
          </div>
        </Transition>

        <!-- Next -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="next-btn"
          type="button"
          class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Dalsia otazka' : 'Zobrazit vysledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="text-center py-6">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-xl text-gray-600 mb-6">
          Spravnych odpovedi:
          <strong class="text-amber-600">{{ quizScore }} / {{ quiz.length }}</strong>
        </p>
        <button
          data-testid="reset-btn"
          type="button"
          class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          @click="resetQuiz"
        >
          Skusit znova
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ---------------------------------------------------------------------------
// Quiz
// ---------------------------------------------------------------------------
const quiz = [
  {
    question: 'Čo vyjadruje Ohmov zákon?',
    options: [
      'Elektrická sila je úmerná náboju a poľu',
      'Napätie je súčinom prúdu a odporu: U = I · R',
      'Výkon je súčinom napätia a odporu',
      'Prúd je súčinom napätia a odporu'
    ],
    correctIndex: 1,
    explanation:
      'Ohmov zákon vyjadruje vzťah medzi napätím, prúdom a odporom: U = I · R. Prúd je priamo úmerný napätiu a nepriamo úmerný odporu.'
  },
  {
    question: 'Odporom 100 Ω prechádza prúd 0,5 A. Aké napätie je na ňom?',
    options: ['50 V', '200 V', '0,005 V', '500 V'],
    correctIndex: 0,
    explanation:
      'Podľa Ohmovho zákona: U = I · R = 0,5 A · 100 Ω = 50 V.'
  },
  {
    question:
      'Ako sa zmení odpor kovového vodiča, keď jeho teplota stúpne?',
    options: [
      'Odpor sa zníži, kovy majú negatívny teplotný koeficient',
      'Odpor zostane rovnaký – teplota naň nemá vplyv',
      'Odpor sa zvýši, kovy majú pozitívny teplotný koeficient',
      'Odpor sa najprv zníži a potom zvýši'
    ],
    correctIndex: 2,
    explanation:
      'Kovy majú pozitívny teplotný koeficient odporu (α > 0), takže ich odpor s rastúcou teplotou rastie. Platí: R_T = R_0 · (1 + α·ΔT).'
  },
  {
    question:
      'Aký je odpor medeného vodiča dĺžky 50 m, prierezu 1 mm² a merného odporu ρ = 1,7 × 10⁻⁸ Ω·m?',
    options: ['0,85 Ω', '8,5 Ω', '85 Ω', '0,085 Ω'],
    correctIndex: 0,
    explanation:
      'R = ρ · l / S = 1,7×10⁻⁸ · 50 / 1×10⁻⁶ = 1,7×10⁻⁸ · 5×10⁷ = 0,85 Ω.'
  },
  {
    question: 'Čo je supravodivosť?',
    options: [
      'Materiál s veľmi vysokým odporom pri nízkej teplote',
      'Jav, pri ktorom odpor vodiča klesne na nulu pri veľmi nízkej teplote',
      'Schopnosť vodiča prenášať veľký prúd pri izbovej teplote bez zahrievania',
      'Závislosť odporu polovodičov od teploty'
    ],
    correctIndex: 1,
    explanation:
      'Supravodivosť je jav, pri ktorom niektoré látky strácajú pri teplotách blízkych absolútnej nule elektrický odpor úplne – ich odpor je presne nula a prúd tečie bez strát.'
  },
  {
    question:
      'Batéria má EMN ε = 12 V a vnútorný odpor r = 1 Ω. Pri prúde I = 4 A je svorkové napätie:',
    options: ['12 V', '16 V', '8 V', '11 V'],
    correctIndex: 2,
    explanation:
      'Svorkové napätie: U = ε – I·r = 12 V – 4 A · 1 Ω = 12 – 4 = 8 V.'
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

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 bg-gray-50 text-gray-400'
}

useHead({
  title: 'Ohmov zákon | Elektrický prúd | Fyzika | NaučSa.to',
  meta: [
    {
      name: 'description',
      content:
        'Ohmov zákon U=IR, odpor vodiča R=ρl/S, závislosť od teploty, supravodivosť, V-A charakteristika a vnútorný odpor zdroja – pre gymnazistov.'
    }
  ]
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
