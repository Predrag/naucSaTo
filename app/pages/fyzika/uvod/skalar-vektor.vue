<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/uvod" class="hover:text-emerald-600 transition-colors">Úvod do fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Skalárne a vektorové veličiny</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">➡️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Skalárne a vektorové veličiny</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Niektoré veličiny stačí opísať číslom — iné potrebujú aj smer. Toto rozlíšenie je kľúčové pre celú mechaniku.
    </p>

    <!-- Section 1: Porovnanie -->
    <section aria-label="Skalárne a vektorové veličiny" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5">Skalárne vs. vektorové veličiny</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Skalárne -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔢</span>
            <h3 class="text-xl font-bold text-blue-800">Skalárne veličiny</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Na úplný opis stačí <strong>číselná hodnota a jednotka</strong>. Nemajú smer.
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="ex in scalarExamples" :key="ex" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {{ ex }}
            </span>
          </div>
        </div>

        <!-- Vektorové -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">➡️</span>
            <h3 class="text-xl font-bold text-emerald-800">Vektorové veličiny</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Treba uviesť <strong>veľkosť, smer aj zmysel</strong>. Označujú sa tučným písmenom alebo šípkou nad symbolom.
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="ex in vectorExamples" :key="ex" class="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {{ ex }}
            </span>
          </div>
        </div>

      </div>

      <!-- Tabuľka -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Vlastnosť</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Skalár</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Vektor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in comparisonTable" :key="row.property" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.property }}</td>
              <td class="px-5 py-3 text-blue-700">{{ row.scalar }}</td>
              <td class="px-5 py-3 text-emerald-700">{{ row.vector }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 2: Zobrazenie vektora -->
    <section aria-label="Zobrazenie vektora" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Zobrazenie vektora</h2>
      <p class="text-gray-500 mb-5">Vektor znázorňujeme orientovanou úsečkou — šípkou.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div v-for="prop in vectorProps" :key="prop.label" class="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <span class="text-3xl">{{ prop.icon }}</span>
          <p class="font-bold text-gray-900 mt-2">{{ prop.label }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ prop.desc }}</p>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Zápis vektora</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div class="bg-white rounded-lg p-3">
            <p class="text-xs text-gray-400 mb-1">Tučné písmo (v texte)</p>
            <MathFormula formula="\mathbf{F},\quad \mathbf{v},\quad \mathbf{a}" />
          </div>
          <div class="bg-white rounded-lg p-3">
            <p class="text-xs text-gray-400 mb-1">Šípka nad symbolom (v rukopise)</p>
            <MathFormula formula="\vec{F},\quad \vec{v},\quad \vec{a}" />
          </div>
          <div class="bg-white rounded-lg p-3">
            <p class="text-xs text-gray-400 mb-1">Veľkosť (absolútna hodnota) vektora</p>
            <MathFormula formula="|\vec{F}| = F \quad \text{(číslo ≥ 0)}" />
          </div>
          <div class="bg-white rounded-lg p-3">
            <p class="text-xs text-gray-400 mb-1">Jednotkový vektor (smer, veľkosť = 1)</p>
            <MathFormula formula="\hat{F} = \frac{\vec{F}}{|\vec{F}|}" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Operácie -->
    <section aria-label="Operácie s vektormi" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Operácie s vektormi</h2>
      <p class="text-gray-500 mb-5">Vektory sa nedajú jednoducho sčítavať ako čísla — záleží aj na smere.</p>

      <div class="space-y-5">

        <!-- Sčítanie -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <h3 class="font-bold text-gray-900 mb-3">Sčítanie vektorov — výslednica</h3>
          <p class="text-sm text-gray-600 mb-4">
            Výslednica <MathFormula formula="\vec{R} = \vec{A} + \vec{B}" /> sa určí graficky dvoma metódami:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Metóda trojuholníka -->
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm font-semibold text-blue-800 mb-2">Metóda trojuholníka</p>
              <p class="text-sm text-gray-600 mb-3">Koniec vektora <MathFormula formula="\vec{A}" /> napojíme na začiatok vektora <MathFormula formula="\vec{B}" />. Výslednica spája začiatok <MathFormula formula="\vec{A}" /> s koncom <MathFormula formula="\vec{B}" />.</p>
              <svg viewBox="0 0 230 110" class="w-full" aria-label="Metóda trojuholníka">
                <defs>
                  <marker id="arr-tri-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3B82F6"/></marker>
                  <marker id="arr-tri-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#8B5CF6"/></marker>
                  <marker id="arr-tri-r" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10B981"/></marker>
                </defs>
                <!-- A -->
                <line x1="20" y1="80" x2="118" y2="80" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#arr-tri-a)"/>
                <text x="65" y="96" fill="#3B82F6" font-size="13" font-weight="bold" text-anchor="middle">A⃗</text>
                <!-- B -->
                <line x1="122" y1="80" x2="198" y2="28" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arr-tri-b)"/>
                <text x="172" y="66" fill="#8B5CF6" font-size="13" font-weight="bold">B⃗</text>
                <!-- R -->
                <line x1="20" y1="80" x2="194" y2="31" stroke="#10B981" stroke-width="2.5" stroke-dasharray="6,3" marker-end="url(#arr-tri-r)"/>
                <text x="90" y="43" fill="#10B981" font-size="13" font-weight="bold">R⃗</text>
              </svg>
            </div>
            <!-- Metóda rovnobežníka -->
            <div class="bg-emerald-50 rounded-lg p-4">
              <p class="text-sm font-semibold text-emerald-800 mb-2">Metóda rovnobežníka</p>
              <p class="text-sm text-gray-600 mb-3">Oba vektory vyjdú zo spoločného bodu. Výslednica je uhlopriečka rovnobežníka, ktorý tvoria.</p>
              <svg viewBox="0 0 230 120" class="w-full" aria-label="Metóda rovnobežníka">
                <defs>
                  <marker id="arr-par-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3B82F6"/></marker>
                  <marker id="arr-par-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#8B5CF6"/></marker>
                  <marker id="arr-par-r" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10B981"/></marker>
                </defs>
                <!-- rovnobežník - bodkované hrany -->
                <line x1="115" y1="105" x2="195" y2="38" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,3"/>
                <line x1="50" y1="42" x2="195" y2="38" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,3"/>
                <!-- A -->
                <line x1="25" y1="105" x2="113" y2="105" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#arr-par-a)"/>
                <text x="65" y="118" fill="#3B82F6" font-size="13" font-weight="bold" text-anchor="middle">A⃗</text>
                <!-- B -->
                <line x1="25" y1="105" x2="47" y2="44" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arr-par-b)"/>
                <text x="18" y="72" fill="#8B5CF6" font-size="13" font-weight="bold">B⃗</text>
                <!-- R -->
                <line x1="25" y1="105" x2="191" y2="41" stroke="#10B981" stroke-width="2.5" marker-end="url(#arr-par-r)"/>
                <text x="120" y="65" fill="#10B981" font-size="13" font-weight="bold">R⃗</text>
              </svg>
            </div>
          </div>
          <div class="mt-4 bg-gray-50 rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Veľkosť výslednice (všeobecný prípad)</p>
            <MathFormula display formula="R = \sqrt{A^2 + B^2 + 2AB\cos\alpha}" />
            <p class="text-xs text-gray-400 mt-1">kde α je uhol zvieraný vektormi A a B</p>
          </div>
        </div>

        <!-- Špeciálne prípady -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- α = 0° -->
          <div class="bg-white border border-gray-200 rounded-xl p-4">
            <p class="text-xs font-bold uppercase tracking-wide mb-2 text-emerald-700">Rovnobežné (α = 0°)</p>
            <svg viewBox="0 0 180 80" class="w-full mb-2" aria-label="Vektory v rovnakom smere">
              <defs>
                <marker id="sc-a1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#3B82F6"/></marker>
                <marker id="sc-b1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#8B5CF6"/></marker>
                <marker id="sc-r1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#10B981"/></marker>
              </defs>
              <line x1="15" y1="25" x2="88" y2="25" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#sc-a1)"/>
              <text x="48" y="18" fill="#3B82F6" font-size="11" font-weight="bold" text-anchor="middle">A⃗</text>
              <line x1="91" y1="25" x2="148" y2="25" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#sc-b1)"/>
              <text x="122" y="18" fill="#8B5CF6" font-size="11" font-weight="bold" text-anchor="middle">B⃗</text>
              <line x1="15" y1="55" x2="148" y2="55" stroke="#10B981" stroke-width="2.5" stroke-dasharray="5,2" marker-end="url(#sc-r1)"/>
              <text x="80" y="70" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">R⃗ = A + B</text>
            </svg>
            <MathFormula display formula="R = A + B" />
            <p class="text-xs text-gray-500">Vektory v rovnakom smere — výslednica je ich súčet.</p>
          </div>

          <!-- α = 90° -->
          <div class="bg-white border border-gray-200 rounded-xl p-4">
            <p class="text-xs font-bold uppercase tracking-wide mb-2 text-blue-700">Kolmé (α = 90°)</p>
            <svg viewBox="0 0 180 110" class="w-full mb-2" aria-label="Kolmé vektory">
              <defs>
                <marker id="sc-a2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#3B82F6"/></marker>
                <marker id="sc-b2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#8B5CF6"/></marker>
                <marker id="sc-r2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#10B981"/></marker>
              </defs>
              <!-- pravý uhol -->
              <rect x="45" y="68" width="10" height="10" fill="none" stroke="#9CA3AF" stroke-width="1.5"/>
              <line x1="45" y1="78" x2="130" y2="78" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#sc-a2)"/>
              <text x="85" y="95" fill="#3B82F6" font-size="11" font-weight="bold" text-anchor="middle">A⃗</text>
              <line x1="45" y1="78" x2="45" y2="18" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#sc-b2)"/>
              <text x="25" y="50" fill="#8B5CF6" font-size="11" font-weight="bold">B⃗</text>
              <line x1="45" y1="78" x2="128" y2="20" stroke="#10B981" stroke-width="2.5" stroke-dasharray="5,2" marker-end="url(#sc-r2)"/>
              <text x="105" y="52" fill="#10B981" font-size="11" font-weight="bold">R⃗</text>
            </svg>
            <MathFormula display formula="R = \sqrt{A^2+B^2}" />
            <p class="text-xs text-gray-500">Pytagorova veta — najčastejší prípad.</p>
          </div>

          <!-- α = 180° -->
          <div class="bg-white border border-gray-200 rounded-xl p-4">
            <p class="text-xs font-bold uppercase tracking-wide mb-2 text-red-700">Protiľahlé (α = 180°)</p>
            <svg viewBox="0 0 180 80" class="w-full mb-2" aria-label="Protiľahlé vektory">
              <defs>
                <marker id="sc-a3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#3B82F6"/></marker>
                <marker id="sc-b3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#8B5CF6"/></marker>
                <marker id="sc-r3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#10B981"/></marker>
              </defs>
              <line x1="15" y1="25" x2="148" y2="25" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#sc-a3)"/>
              <text x="80" y="18" fill="#3B82F6" font-size="11" font-weight="bold" text-anchor="middle">A⃗</text>
              <line x1="148" y1="25" x2="65" y2="25" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#sc-b3)"/>
              <text x="108" y="38" fill="#8B5CF6" font-size="11" font-weight="bold" text-anchor="middle">B⃗</text>
              <line x1="15" y1="55" x2="62" y2="55" stroke="#10B981" stroke-width="2.5" stroke-dasharray="5,2" marker-end="url(#sc-r3)"/>
              <text x="38" y="70" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">R⃗</text>
            </svg>
            <MathFormula display formula="R = |A - B|" />
            <p class="text-xs text-gray-500">Opačné smery — výslednica je rozdiel veľkostí.</p>
          </div>
        </div>

        <!-- Odčítanie a násobenie skalárom -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <h3 class="font-bold text-gray-900 mb-3">Odčítanie vektorov</h3>
            <MathFormula display formula="\vec{A} - \vec{B} = \vec{A} + (-\vec{B})" />
            <svg viewBox="0 0 230 90" class="w-full mt-3" aria-label="Odčítanie vektorov">
              <defs>
                <marker id="sub-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#3B82F6"/></marker>
                <marker id="sub-nb" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#EF4444"/></marker>
                <marker id="sub-r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#10B981"/></marker>
              </defs>
              <line x1="15" y1="30" x2="123" y2="30" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#sub-a)"/>
              <text x="66" y="20" fill="#3B82F6" font-size="11" font-weight="bold" text-anchor="middle">A⃗</text>
              <line x1="127" y1="30" x2="62" y2="30" stroke="#EF4444" stroke-width="2.5" marker-end="url(#sub-nb)"/>
              <text x="97" y="46" fill="#EF4444" font-size="11" font-weight="bold" text-anchor="middle">−B⃗</text>
              <line x1="15" y1="65" x2="60" y2="65" stroke="#10B981" stroke-width="2.5" stroke-dasharray="5,2" marker-end="url(#sub-r)"/>
              <text x="37" y="80" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">R⃗</text>
            </svg>
            <p class="text-sm text-gray-500 mt-2">Opačný vektor <MathFormula formula="-\vec{B}" /> má rovnakú veľkosť, ale opačný zmysel.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <h3 class="font-bold text-gray-900 mb-3">Násobenie skalárom</h3>
            <MathFormula display formula="k\vec{A}:\quad |k\vec{A}| = |k| \cdot A" />
            <svg viewBox="0 0 230 90" class="w-full mt-3" aria-label="Násobenie vektora skalárom">
              <defs>
                <marker id="mul-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#3B82F6"/></marker>
                <marker id="mul-2a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#10B981"/></marker>
                <marker id="mul-na" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#EF4444"/></marker>
              </defs>
              <line x1="15" y1="22" x2="88" y2="22" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#mul-a)"/>
              <text x="50" y="13" fill="#3B82F6" font-size="11" font-weight="bold" text-anchor="middle">A⃗</text>
              <line x1="15" y1="50" x2="158" y2="50" stroke="#10B981" stroke-width="2.5" marker-end="url(#mul-2a)"/>
              <text x="85" y="41" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">2A⃗ (k=2)</text>
              <line x1="88" y1="75" x2="15" y2="75" stroke="#EF4444" stroke-width="2.5" marker-end="url(#mul-na)"/>
              <text x="52" y="88" fill="#EF4444" font-size="11" font-weight="bold" text-anchor="middle">−A⃗ (k=−1)</text>
            </svg>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 4: Rozklad na zložky -->
    <section aria-label="Rozklad vektora na zložky" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Rozklad vektora na zložky</h2>
      <p class="text-gray-500 mb-5">
        Každý vektor v rovine môžeme rozložiť na dve kolmé zložky — zvyčajne vodorovnú (x) a zvislú (y).
      </p>

      <!-- SVG diagram rozkladu -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-6 flex justify-center">
        <svg viewBox="0 0 260 190" class="w-full max-w-sm" aria-label="Rozklad vektora F na zložky Fx a Fy">
          <defs>
            <marker id="dec-f" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10B981"/></marker>
            <marker id="dec-fx" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#F97316"/></marker>
            <marker id="dec-fy" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#8B5CF6"/></marker>
            <marker id="dec-ax" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
            <marker id="dec-ay" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#9CA3AF"/></marker>
          </defs>

          <!-- Osy -->
          <line x1="35" y1="155" x2="230" y2="155" stroke="#D1D5DB" stroke-width="1.5" marker-end="url(#dec-ax)"/>
          <text x="232" y="159" fill="#9CA3AF" font-size="12">x</text>
          <line x1="35" y1="155" x2="35" y2="20" stroke="#D1D5DB" stroke-width="1.5" marker-end="url(#dec-ay)"/>
          <text x="28" y="16" fill="#9CA3AF" font-size="12">y</text>

          <!-- Bodkované čiary (pravouhlý trojuholník) -->
          <line x1="185" y1="155" x2="185" y2="53" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="5,3"/>
          <line x1="35" y1="53" x2="185" y2="53" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="5,3"/>

          <!-- Pravý uhol -->
          <rect x="175" y="145" width="10" height="10" fill="none" stroke="#9CA3AF" stroke-width="1.5"/>

          <!-- Fx - vodorovná zložka -->
          <line x1="35" y1="155" x2="182" y2="155" stroke="#F97316" stroke-width="2.5" marker-end="url(#dec-fx)"/>
          <text x="108" y="172" fill="#F97316" font-size="13" font-weight="bold" text-anchor="middle">Fₓ</text>

          <!-- Fy - zvislá zložka -->
          <line x1="185" y1="155" x2="185" y2="56" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#dec-fy)"/>
          <text x="208" y="110" fill="#8B5CF6" font-size="13" font-weight="bold">F_y</text>

          <!-- F - hlavný vektor -->
          <line x1="35" y1="155" x2="182" y2="56" stroke="#10B981" stroke-width="3" marker-end="url(#dec-f)"/>
          <text x="90" y="88" fill="#10B981" font-size="14" font-weight="bold" transform="rotate(-30, 90, 88)">F⃗</text>

          <!-- Uhol α -->
          <path d="M 75,155 A 40,40 0 0,0 66,128" fill="none" stroke="#6B7280" stroke-width="1.5"/>
          <text x="80" y="138" fill="#6B7280" font-size="13" font-style="italic">α</text>
        </svg>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Zložky vektora <MathFormula formula="\vec{F}" /> pod uhlom α</p>
          <div class="space-y-3">
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Vodorovná zložka</p>
              <MathFormula display formula="F_x = F \cos\alpha" />
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Zvislá zložka</p>
              <MathFormula display formula="F_y = F \sin\alpha" />
            </div>
          </div>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-purple-800 mb-3">Spätná skladba zo zložiek</p>
          <div class="space-y-3">
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Veľkosť vektora (Pytagorova veta)</p>
              <MathFormula display formula="F = \sqrt{F_x^2 + F_y^2}" />
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Uhol odklonu</p>
              <MathFormula display formula="\tan\alpha = \frac{F_y}{F_x}" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — sila pod uhlom 30°</p>
        <div class="text-sm text-gray-700 space-y-1">
          <p>Sila <MathFormula formula="F = 100\;\text{N}" /> pôsobí pod uhlom <MathFormula formula="\alpha = 30°" /> od vodorovnej roviny.</p>
          <p><MathFormula formula="F_x = 100 \cdot \cos 30° = 100 \cdot 0{,}866 \approx \mathbf{86{,}6\;\text{N}}" /></p>
          <p><MathFormula formula="F_y = 100 \cdot \sin 30° = 100 \cdot 0{,}5 = \mathbf{50\;\text{N}}" /></p>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Skalárna veličina má len veľkosť (hmotnosť, čas, teplota). Vektorová má aj smer (sila, rýchlosť, zrýchlenie).</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Vektory sčítavame metódou trojuholníka alebo rovnobežníka. Výslednica závisí od uhla medzi vektormi.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Každý vektor rozložíme na kolmé zložky: <MathFormula formula="F_x = F\cos\alpha" />, <MathFormula formula="F_y = F\sin\alpha" />.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Zo zložiek určíme veľkosť vektora Pytagorovou vetou: <MathFormula formula="F = \sqrt{F_x^2 + F_y^2}" />.</li>
      </ul>
    </div>

    <!-- Quiz -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button type="button" data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-emerald-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div class="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">{{ currentQuestion.question }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button v-for="(option, i) in currentQuestion.options" :key="i"
            type="button" :data-testid="`quiz-option-${i}`" :disabled="selectedAnswer !== null"
            :class="[
              'text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150',
              selectedAnswer === null
                ? 'border-gray-200 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            {{ option }}
          </button>
        </div>

        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div data-testid="quiz-feedback"
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button type="button" data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                @click="nextQuestion">
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
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

// ── Statický obsah ──────────────────────────────────────────────────────────

const scalarExamples = ['hmotnosť m', 'čas t', 'teplota T', 'dĺžka l', 'energia E', 'hustota ρ', 'tlak p']
const vectorExamples = ['sila F', 'rýchlosť v', 'zrýchlenie a', 'posunutie s', 'hybnosť p', 'elektrické pole E']

const comparisonTable = [
  { property: 'Čo opisuje', scalar: 'Len veľkosť', vector: 'Veľkosť, smer a zmysel' },
  { property: 'Zápis', scalar: 'F = 10 N', vector: 'F⃗ (šípka) alebo F (tučne)' },
  { property: 'Sčítanie', scalar: 'Bežné (10 + 5 = 15)', vector: 'Grafická/analytická metóda' },
  { property: 'Príklady', scalar: 'hmotnosť, čas, teplota', vector: 'sila, rýchlosť, zrýchlenie' },
]

const vectorProps = [
  { icon: '📏', label: 'Veľkosť', desc: 'Dĺžka šípky — numerická hodnota s jednotkou.' },
  { icon: '🧭', label: 'Smer', desc: 'Uhol, ktorý zviera šípka s referenčným smerom.' },
  { icon: '↗️', label: 'Zmysel', desc: 'Ktorým smerom šípka ukazuje (od — do).' },
]


// ── Kvíz ──────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Ktorá z nasledujúcich veličín je skalárna?',
    options: ['Sila', 'Rýchlosť', 'Zrýchlenie', 'Hmotnosť'],
    correctIndex: 3,
    explanation: 'Hmotnosť je skalárna veličina — stačí uviesť číslo a jednotku (napr. 5 kg). Sila, rýchlosť a zrýchlenie sú vektorové.',
  },
  {
    question: 'Čo musíme uviesť na úplný opis vektorovej veličiny?',
    options: ['Len veľkosť', 'Len smer', 'Veľkosť, smer a zmysel', 'Jednotku a symbol'],
    correctIndex: 2,
    explanation: 'Vektorovú veličinu opisujú tri údaje: veľkosť (koľko), smer (pod akým uhlom) a zmysel (kam ukazuje).',
  },
  {
    question: 'Dve sily 3 N a 4 N pôsobia na teleso kolmo na seba. Aká je veľkosť výslednice?',
    options: ['7 N', '1 N', '5 N', '12 N'],
    correctIndex: 2,
    explanation: `Pre kolmé vektory platí Pytagorova veta: ${km('R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\;\\text{N}')}`,
  },
  {
    question: 'Sila F = 200 N pôsobí pod uhlom 60° od vodorovnej roviny. Aká je jej vodorovná zložka?',
    options: ['173 N', '100 N', '200 N', '141 N'],
    correctIndex: 1,
    explanation: `${km('F_x = F \\cos 60° = 200 \\cdot 0{,}5 = 100\\;\\text{N}')}`,
  },
  {
    question: 'Ako sa graficky sčítavajú dva vektory metódou trojuholníka?',
    options: [
      'Oba vektory vyjdú z rovnakého bodu a výslednica je ich uhlopriečka',
      'Koniec prvého vektora napojíme na začiatok druhého, výslednica spája začiatok prvého s koncom druhého',
      'Vektory sa umiestnia vedľa seba a ich dĺžky sa sčítajú',
      'Výslednica je vždy rovnobežná s dlhším vektorom',
    ],
    correctIndex: 1,
    explanation: 'Metóda trojuholníka: koniec A → začiatok B. Výslednica R smeruje od začiatku A ku koncu B. Metóda rovnobežníka: oba vektory vychádzajú z jedného bodu a výslednica je uhlopriečka.',
  },
  {
    question: 'Dve sily 10 N pôsobia na teleso v rovnakom smere. Aká je výslednica?',
    options: ['0 N', '10 N', '20 N', '100 N'],
    correctIndex: 2,
    explanation: 'Keď vektory pôsobia v rovnakom smere (α = 0°), výslednica je ich súčet: R = 10 + 10 = 20 N.',
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
  if (r === 1) return '🏆'
  if (r >= 0.7) return '🎉'
  if (r >= 0.4) return '💪'
  return '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length
  if (r === 1) return 'Perfektné! Zvládol si všetky otázky!'
  if (r >= 0.7) return 'Výborne! Látku ovládaš dobre.'
  if (r >= 0.4) return 'Nie je to zlé, ale oplatí sa zopakovať.'
  return 'Prejdi si tému ešte raz a skús to znova.'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
