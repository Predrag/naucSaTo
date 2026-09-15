<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/stavba-latky" class="hover:text-orange-600 transition-colors">Stavba látky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Stavba atómu</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <span class="text-6xl" aria-hidden="true">⚛️</span>
      <div>
        <h1 class="text-4xl font-bold text-orange-700">Stavba atómu</h1>
        <p class="text-gray-500 mt-1">Protóny, neutróny, elektróny — základ všetkej hmoty</p>
      </div>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-12 leading-relaxed">
      Atóm je najmenšia častica chemického prvku, ktorá si zachováva jeho chemické vlastnosti. Napriek tomu, že voľným okom ho nevidíme,
      jeho vnútorná stavba určuje, ako sa prvky správajú, ako reagujú a aké zlúčeniny tvoria. Pochopenie stavby atómu je základom
      celej chémie.
    </p>

    <!-- ==================== SEKCIA 1 ==================== -->
    <section aria-label="Atómové jadro" class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2">
        1. Atómové jadro
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        V strede atómu sa nachádza <strong>atómové jadro</strong> — malá, ale ťažká časť atómu, kde je sústredená takmer
        všetka jeho hmota. Jadro obsahuje dve základné častice: <strong>protóny</strong> a <strong>neutróny</strong>,
        spoločne nazývané <strong>nukleóny</strong>.
      </p>

      <!-- Tabuľka častíc -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-orange-500 text-white">
              <th class="px-4 py-3 text-left font-semibold">Častica</th>
              <th class="px-4 py-3 text-left font-semibold">Symbol</th>
              <th class="px-4 py-3 text-left font-semibold">Náboj</th>
              <th class="px-4 py-3 text-left font-semibold">Hmotnosť</th>
              <th class="px-4 py-3 text-left font-semibold">Umiestnenie</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-orange-50">
              <td class="px-4 py-3 font-medium text-gray-800">Protón</td>
              <td class="px-4 py-3"><span v-html="km('p^+')"/></td>
              <td class="px-4 py-3 text-red-600 font-medium">+1</td>
              <td class="px-4 py-3 text-gray-600"><span v-html="km('1{,}673 \\times 10^{-27}\\ \\mathrm{kg}')"/></td>
              <td class="px-4 py-3 text-gray-700">Jadro</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-3 font-medium text-gray-800">Neutrón</td>
              <td class="px-4 py-3"><span v-html="km('n^0')"/></td>
              <td class="px-4 py-3 text-gray-500 font-medium">0</td>
              <td class="px-4 py-3 text-gray-600"><span v-html="km('1{,}675 \\times 10^{-27}\\ \\mathrm{kg}')"/></td>
              <td class="px-4 py-3 text-gray-700">Jadro</td>
            </tr>
            <tr class="bg-orange-50">
              <td class="px-4 py-3 font-medium text-gray-800">Elektrón</td>
              <td class="px-4 py-3"><span v-html="km('e^-')"/></td>
              <td class="px-4 py-3 text-blue-600 font-medium">−1</td>
              <td class="px-4 py-3 text-gray-600"><span v-html="km('9{,}109 \\times 10^{-31}\\ \\mathrm{kg}')"/></td>
              <td class="px-4 py-3 text-gray-700">Elektrónový obal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Základné vzťahy -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
        <h3 class="font-semibold text-orange-800 mb-4 text-lg">Základné čísla atómu</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-sm font-semibold text-orange-700 mb-1">Protónové číslo Z</p>
            <p class="text-gray-700 text-sm mb-2">Počet protónov v jadre = počet elektrónov v neutrálnom atóme</p>
            <p class="text-xs text-gray-500">Určuje, o aký prvok ide — každý prvok má jedinečné Z.</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-sm font-semibold text-orange-700 mb-1">Neutrónové číslo N</p>
            <p class="text-gray-700 text-sm mb-2">Počet neutrónov v jadre</p>
            <p class="text-xs text-gray-500">Môže sa líšiť u atómov toho istého prvku → izotopy.</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100 md:col-span-2">
            <p class="text-sm font-semibold text-orange-700 mb-2">Nukleónové číslo A (hmotnostné číslo)</p>
            <div class="text-center" v-html="km('A = Z + N')"/>
            <p class="text-xs text-gray-500 mt-2 text-center">Celkový počet nukleónov (protónov + neutrónov) v jadre.</p>
          </div>
        </div>
      </div>

      <!-- Zápis nuklidu -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-gray-800 mb-3">Zápis chemického nuklidu (atómu)</h3>
        <div class="text-center mb-4" v-html="km('{}^{A}_{Z}\\mathrm{X}')"/>
        <p class="text-gray-600 text-sm text-center">kde <strong>X</strong> je symbol prvku, <strong>A</strong> nukleónové číslo (hore), <strong>Z</strong> protónové číslo (dole)</p>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h3 class="font-semibold text-blue-800 mb-3">📝 Príklad 1 — Uhlík-12</h3>
        <p class="text-gray-700 mb-3">
          Urči počet protónov, neutrónov a elektrónov v atóme uhlíka
          <span v-html="km('{}^{12}_{6}\\mathrm{C}')"/>.
        </p>
        <div class="bg-white rounded-lg p-4">
          <p class="text-sm font-medium text-gray-500 mb-3">Riešenie:</p>
          <div class="space-y-2 text-gray-700">
            <div class="flex items-center gap-2">
              <span class="text-orange-600 font-mono text-sm">Z = 6</span>
              <span class="text-gray-500">→ 6 protónov, 6 elektrónov (neutrálny atóm)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-orange-600 font-mono text-sm">A = 12</span>
              <span class="text-gray-500">→ nukleónové číslo</span>
            </div>
            <div class="mt-2 pt-2 border-t border-gray-100">
              <span v-html="km('N = A - Z = 12 - 6 = 6')"/>
              <span class="text-gray-500 ml-2">→ 6 neutrónov</span>
            </div>
            <p class="text-sm text-blue-700 mt-2 font-medium">
              Atóm ¹²C má 6 protónov, 6 neutrónov a 6 elektrónov.
            </p>
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 class="font-semibold text-green-800 mb-3">📝 Príklad 2 — Sodík-23</h3>
        <p class="text-gray-700 mb-3">
          Urči zloženie jadra atómu sodíka
          <span v-html="km('{}^{23}_{11}\\mathrm{Na}')"/>.
        </p>
        <div class="bg-white rounded-lg p-4">
          <p class="text-sm font-medium text-gray-500 mb-3">Riešenie:</p>
          <div class="space-y-2 text-gray-700">
            <div class="flex items-center gap-2">
              <span class="text-green-600 font-mono text-sm">Z = 11</span>
              <span class="text-gray-500">→ 11 protónov, 11 elektrónov</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-600 font-mono text-sm">A = 23</span>
              <span class="text-gray-500">→ nukleónové číslo</span>
            </div>
            <div class="mt-2 pt-2 border-t border-gray-100">
              <span v-html="km('N = A - Z = 23 - 11 = 12')"/>
              <span class="text-gray-500 ml-2">→ 12 neutrónov</span>
            </div>
            <p class="text-sm text-green-700 mt-2 font-medium">
              Atóm ²³Na má 11 protónov, 12 neutrónov a 11 elektrónov.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 2 ==================== -->
    <section aria-label="Elektrónový obal a Bohrov model" class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2">
        2. Elektrónový obal a Bohrov model atómu
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Okolo jadra sa pohybujú <strong>elektróny</strong>, ktoré tvoria <strong>elektrónový obal</strong>.
        Elektróny sú rozdelené do <strong>elektrónových vrstiev</strong> (slupiek). Vrstva najbližšia k jadru
        sa označuje K, ďalej L, M, N... Každá vrstva môže pojať maximálny počet elektrónov daný vzorcom
        <span v-html="km('2n^2')"/>, kde n je číslo vrstvy.
      </p>

      <!-- Kapacity vrstiev -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-orange-500 text-white">
              <th class="px-4 py-3 text-left font-semibold">Vrstva</th>
              <th class="px-4 py-3 text-left font-semibold">Číslo (n)</th>
              <th class="px-4 py-3 text-left font-semibold">Max. elektrónov <span v-html="km('(2n^2)')"/></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-orange-50">
              <td class="px-4 py-3 font-medium text-gray-800">K</td>
              <td class="px-4 py-3 text-gray-700">1</td>
              <td class="px-4 py-3 text-gray-700">2</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-3 font-medium text-gray-800">L</td>
              <td class="px-4 py-3 text-gray-700">2</td>
              <td class="px-4 py-3 text-gray-700">8</td>
            </tr>
            <tr class="bg-orange-50">
              <td class="px-4 py-3 font-medium text-gray-800">M</td>
              <td class="px-4 py-3 text-gray-700">3</td>
              <td class="px-4 py-3 text-gray-700">18</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-3 font-medium text-gray-800">N</td>
              <td class="px-4 py-3 text-gray-700">4</td>
              <td class="px-4 py-3 text-gray-700">32</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bohrov model -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
        <h3 class="font-semibold text-orange-800 mb-4 text-lg">Bohrov model atómu</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Niels Bohr (1913) navrhol model atómu, podľa ktorého sa elektróny pohybujú po pevne daných
          kruhových dráhach — <strong>orbitách</strong> — okolo jadra. Každá orbita zodpovedá určitej
          energetickej hladine. Elektrón môže preskočiť na vyššiu hladinu (pohlcuje energiu) alebo na
          nižšiu (vyžaruje energiu ako svetlo).
        </p>
        <p class="text-gray-600 text-sm italic">
          Bohrov model je zjednodušený, ale poskytuje dobrú predstavu o usporiadaní elektrónov vo vrstvách.
        </p>
      </div>

      <!-- SVG Ilustrácia: Bohrov model uhlíka-12 -->
      <div class="flex justify-center mb-8">
        <figure>
          <svg
            viewBox="0 0 320 320"
            width="320"
            height="320"
            aria-label="Bohrov model atómu uhlíka-12: jadro so 6 protónmi a 6 neutrónmi, vnútorná orbita s 2 elektrónmi, vonkajšia orbita so 4 elektrónmi"
            role="img"
            class="drop-shadow-md"
          >
            <!-- Vonkajšia orbita (L vrstva) -->
            <circle cx="160" cy="160" r="120" fill="none" stroke="#fdba74" stroke-width="2" stroke-dasharray="6 4"/>

            <!-- Vnútorná orbita (K vrstva) -->
            <circle cx="160" cy="160" r="68" fill="none" stroke="#fb923c" stroke-width="2" stroke-dasharray="6 4"/>

            <!-- Jadro -->
            <circle cx="160" cy="160" r="30" fill="#ea580c" opacity="0.15"/>
            <circle cx="160" cy="160" r="30" fill="none" stroke="#ea580c" stroke-width="2"/>

            <!-- Protóny a neutróny v jadre (vizualizácia) -->
            <!-- 6 protónov (oranžové) + 6 neutrónov (sivé) -->
            <circle cx="151" cy="153" r="7" fill="#ef4444" stroke="white" stroke-width="1.5"/>
            <circle cx="165" cy="151" r="7" fill="#6b7280" stroke="white" stroke-width="1.5"/>
            <circle cx="156" cy="165" r="7" fill="#ef4444" stroke="white" stroke-width="1.5"/>
            <circle cx="168" cy="163" r="7" fill="#6b7280" stroke="white" stroke-width="1.5"/>
            <circle cx="148" cy="163" r="7" fill="#ef4444" stroke="white" stroke-width="1.5"/>
            <circle cx="160" cy="158" r="6" fill="#6b7280" stroke="white" stroke-width="1.5"/>

            <!-- Text v jadre -->
            <text x="160" y="196" text-anchor="middle" font-size="11" fill="#7c2d12" font-weight="600">6p + 6n</text>

            <!-- K vrstva: 2 elektróny (hore a dole) -->
            <circle cx="160" cy="92" r="8" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <text x="160" cy="92" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <circle cx="160" cy="228" r="8" fill="#3b82f6" stroke="white" stroke-width="2"/>
            <text x="160" cy="228" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <!-- L vrstva: 4 elektróny (4 smery) -->
            <circle cx="160" cy="40" r="8" fill="#1d4ed8" stroke="white" stroke-width="2"/>
            <text x="160" cy="40" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <circle cx="280" cy="160" r="8" fill="#1d4ed8" stroke="white" stroke-width="2"/>
            <text x="280" cy="160" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <circle cx="160" cy="280" r="8" fill="#1d4ed8" stroke="white" stroke-width="2"/>
            <text x="160" cy="280" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <circle cx="40" cy="160" r="8" fill="#1d4ed8" stroke="white" stroke-width="2"/>
            <text x="40" cy="160" text-anchor="middle" dominant-baseline="central" font-size="9" fill="white" font-weight="bold">e⁻</text>

            <!-- Popisky vrstiev -->
            <text x="103" y="108" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="600">K (2e⁻)</text>
            <text x="40" y="130" text-anchor="middle" font-size="10" fill="#92400e" font-weight="600">L (4e⁻)</text>
          </svg>
          <figcaption class="text-center text-sm text-gray-500 mt-3">
            Bohrov model atómu uhlíka-12 (<span v-html="km('{}^{12}_{6}\\mathrm{C}')"/>):<br>
            jadro (6 protónov, 6 neutrónov), K vrstva (2 elektróny), L vrstva (4 elektróny)
          </figcaption>
        </figure>
      </div>

      <!-- Valenčná vrstva -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 class="font-semibold text-amber-800 mb-3">Valenčná vrstva</h3>
        <p class="text-gray-700 leading-relaxed">
          <strong>Valenčná vrstva</strong> je vonkajšia elektrónová vrstva atómu. Elektróny v nej
          (<strong>valenčné elektróny</strong>) rozhodujú o chemických vlastnostiach prvku
          — o tom, ako a s kým prvok reaguje. Atómy sa snažia mať plnú valenčnú vrstvu
          (8 elektrónov — <strong>oktét</strong>, pri vodíku 2 elektróny — <strong>dublet</strong>).
        </p>
      </div>
    </section>

    <!-- ==================== SEKCIA 3 ==================== -->
    <section aria-label="Izotopy a ióny" class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-2">
        3. Izotopy a ióny
      </h2>

      <!-- Izotopy -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Izotopy</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Izotopy</strong> sú atómy toho istého prvku (rovnaké Z), ktoré sa líšia počtom neutrónov (iné N, iné A).
          Majú rovnaké chemické vlastnosti, ale líšia sa fyzikálnymi vlastnosťami (napr. hmotnosťou).
        </p>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <!-- Vodík izotopy -->
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1" v-html="km('{}^{1}_{1}\\mathrm{H}')"/>
            <p class="font-semibold text-orange-800">Protium</p>
            <p class="text-sm text-gray-600">Z=1, N=0, A=1</p>
            <p class="text-xs text-gray-500 mt-1">99,985 % všetkého H</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1" v-html="km('{}^{2}_{1}\\mathrm{H}')"/>
            <p class="font-semibold text-orange-800">Deutérium (D)</p>
            <p class="text-sm text-gray-600">Z=1, N=1, A=2</p>
            <p class="text-xs text-gray-500 mt-1">Ťažká voda D₂O</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1" v-html="km('{}^{3}_{1}\\mathrm{H}')"/>
            <p class="font-semibold text-orange-800">Trítium (T)</p>
            <p class="text-sm text-gray-600">Z=1, N=2, A=3</p>
            <p class="text-xs text-gray-500 mt-1">Rádioaktívny izotop</p>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p class="text-blue-800 text-sm">
            <strong>Rádioaktívne izotopy</strong> (napr. <span v-html="km('{}^{14}_{6}\\mathrm{C}')"/>, <span v-html="km('{}^{235}_{92}\\mathrm{U}')"/>)
            sa využívajú v medicíne (diagnostika, liečba), v datovaní hornín a predmetov (uhlíková metóda) aj v jadrovej energetike.
          </p>
        </div>
      </div>

      <!-- Ióny -->
      <div>
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Ióny — katióny a anióny</h3>
        <p class="text-gray-700 mb-6 leading-relaxed">
          <strong>Ión</strong> je elektricky nabitá častica, ktorá vzniká z atómu (alebo skupiny atómov)
          odovzdaním alebo prijatím elektrónov. Neutrálny atóm má rovnaký počet protónov a elektrónov.
        </p>

        <div class="grid gap-6 md:grid-cols-2 mb-6">
          <!-- Katión -->
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h4 class="font-bold text-red-700 text-lg mb-3">Katión (kladný ión)</h4>
            <p class="text-gray-700 mb-3 text-sm leading-relaxed">
              Vzniká, keď atóm <strong>odovzdá</strong> jeden alebo viac elektrónov. Zostáva viac protónov ako elektrónov → kladný náboj.
            </p>
            <div class="bg-white rounded-lg p-3 text-center mb-2">
              <span v-html="km('\\mathrm{Na} \\rightarrow \\mathrm{Na}^+ + e^-')"/>
            </div>
            <p class="text-xs text-red-700">Sodík (11p, 11e) → sodíkový ión (11p, 10e), náboj +1</p>
            <div class="mt-3 bg-white rounded-lg p-3 text-center">
              <span v-html="km('\\mathrm{Ca} \\rightarrow \\mathrm{Ca}^{2+} + 2e^-')"/>
            </div>
            <p class="text-xs text-red-700 mt-1">Vápnik odovzdá 2 elektróny → náboj +2</p>
          </div>

          <!-- Anión -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 class="font-bold text-blue-700 text-lg mb-3">Anión (záporný ión)</h4>
            <p class="text-gray-700 mb-3 text-sm leading-relaxed">
              Vzniká, keď atóm <strong>prijme</strong> jeden alebo viac elektrónov. Zostáva viac elektrónov ako protónov → záporný náboj.
            </p>
            <div class="bg-white rounded-lg p-3 text-center mb-2">
              <span v-html="km('\\mathrm{Cl} + e^- \\rightarrow \\mathrm{Cl}^-')"/>
            </div>
            <p class="text-xs text-blue-700">Chlór (17p, 17e) → chloridový ión (17p, 18e), náboj −1</p>
            <div class="mt-3 bg-white rounded-lg p-3 text-center">
              <span v-html="km('\\mathrm{O} + 2e^- \\rightarrow \\mathrm{O}^{2-}')"/>
            </div>
            <p class="text-xs text-blue-700 mt-1">Kyslík prijme 2 elektróny → náboj −2</p>
          </div>
        </div>

        <!-- Príklady prvkov -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 class="font-semibold text-gray-800 mb-4">Prehľad vybraných prvkov</h4>
          <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            <div class="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <div class="text-xl font-bold text-orange-600 mb-1" v-html="km('{}^{1}_{1}\\mathrm{H}')"/>
              <p class="text-xs text-gray-600">Vodík</p>
              <p class="text-xs text-gray-500">Z=1, A=1, N=0</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <div class="text-xl font-bold text-orange-600 mb-1" v-html="km('{}^{4}_{2}\\mathrm{He}')"/>
              <p class="text-xs text-gray-600">Hélium</p>
              <p class="text-xs text-gray-500">Z=2, A=4, N=2</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <div class="text-xl font-bold text-orange-600 mb-1" v-html="km('{}^{12}_{6}\\mathrm{C}')"/>
              <p class="text-xs text-gray-600">Uhlík</p>
              <p class="text-xs text-gray-500">Z=6, A=12, N=6</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <div class="text-xl font-bold text-orange-600 mb-1" v-html="km('{}^{23}_{11}\\mathrm{Na}')"/>
              <p class="text-xs text-gray-600">Sodík</p>
              <p class="text-xs text-gray-500">Z=11, A=23, N=12</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== ZHRNUTIE ==================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Atóm</strong> sa skladá z <strong>jadra</strong> (protóny + neutróny) a <strong>elektrónového obalu</strong> (elektróny).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Protónové číslo Z</strong> určuje druh prvku; <strong>nukleónové číslo A = Z + N</strong>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span>Elektróny sú rozdelené do <strong>vrstiev K, L, M…</strong>; n-tá vrstva pojme max. <span v-html="km('2n^2')"/> elektrónov.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Valenčná vrstva</strong> (vonkajšia) určuje chemické vlastnosti prvku.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Izotopy</strong> majú rovnaké Z (rovnaký prvok), ale rôzne N (rôzny počet neutrónov).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Katión</strong> vzniká stratou elektrónov (kladný náboj), <strong>anión</strong> prijatím elektrónov (záporný náboj).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">•</span>
          <span><strong>Bohrov model</strong>: elektróny obiehajú jadro po pevných kruhových dráhach (orbitách).</span>
        </li>
      </ul>
    </div>

    <!-- ==================== KVÍZ ==================== -->
    <div class="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-bold text-orange-700 mb-2">🧪 Kvíz: Stavba atómu</h2>
      <p class="text-gray-500 text-sm mb-6">Otestuj si, čo si sa naučil — 6 otázok</p>

      <!-- Výsledok kvízu -->
      <Transition name="fade">
        <div v-if="quizFinished" data-testid="result" class="text-center py-8">
          <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
          <p class="text-2xl font-bold text-gray-800 mb-1">
            {{ quizScore }} / {{ quiz.length }} bodov
          </p>
          <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
          <button
            type="button"
            data-testid="reset-btn"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </Transition>

      <!-- Otázky -->
      <Transition name="fade">
        <div v-if="!quizFinished">
          <!-- Progres -->
          <div data-testid="quiz-progress" class="flex items-center gap-3 mb-6">
            <div class="flex-1 bg-gray-200 rounded-full h-2">
              <div
                class="bg-orange-500 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
              />
            </div>
            <span class="text-sm text-gray-500 whitespace-nowrap">{{ currentQ + 1 }} / {{ quiz.length }}</span>
          </div>

          <!-- Otázka -->
          <p data-testid="question" class="text-lg font-semibold text-gray-800 mb-5">
            {{ currentQuestion.question }}
          </p>

          <!-- Možnosti -->
          <div class="space-y-3 mb-6">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              type="button"
              :data-testid="`option-${i}`"
              class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium"
              :class="[
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700'
                  : selectedAnswer === i
                    ? i === currentQuestion.correctIndex
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-400 bg-red-50 text-red-800'
                    : i === currentQuestion.correctIndex
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 text-gray-400'
              ]"
              :disabled="selectedAnswer !== null"
              @click="selectAnswer(i)"
            >
              <span
class="inline-block w-6 h-6 rounded-full border-2 mr-2 text-xs text-center leading-5 font-bold"
                :class="[
                  selectedAnswer === null ? 'border-gray-300' :
                  i === currentQuestion.correctIndex ? 'border-green-500 bg-green-500 text-white' :
                  selectedAnswer === i ? 'border-red-400 bg-red-400 text-white' : 'border-gray-200'
                ]"
              >{{ ['A','B','C','D'][i] }}</span>
              {{ option }}
            </button>
          </div>

          <!-- Spätná väzba -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              class="rounded-xl p-4 mb-5 text-sm leading-relaxed"
              :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'"
            >
              <span class="font-bold mr-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}</span>
              {{ currentQuestion.explanation }}
            </div>
          </Transition>

          <!-- Ďalšia otázka -->
          <div class="text-right">
            <button
              v-if="selectedAnswer !== null"
              type="button"
              data-testid="next-btn"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

// KaTeX helper
function km (f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// SEO
useHead({
  title: 'Stavba atómu — Chémia | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Stavba atómu pre gymnazistov: atómové jadro, protóny, neutróny, nukleóny, elektrónový obal, Bohrov model, izotopy, katióny a anióny. KaTeX vzorce, interaktívny kvíz.'
    }
  ]
})

// Kvíz
interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Koľko protónov a neutrónov má atóm uhlíka ¹²₆C?',
    options: [
      '6 protónov a 6 neutrónov',
      '12 protónov a 6 neutrónov',
      '6 protónov a 12 neutrónov',
      '12 protónov a 12 neutrónov'
    ],
    correctIndex: 0,
    explanation: 'Protónové číslo Z=6 → 6 protónov. Neutrónové číslo N=A−Z=12−6=6 → 6 neutrónov.'
  },
  {
    question: 'Čo jednoznačne určuje druh chemického prvku?',
    options: [
      'Nukleónové číslo A',
      'Počet neutrónov N',
      'Protónové číslo Z',
      'Hmotnosť atómu'
    ],
    correctIndex: 2,
    explanation: 'Protónové číslo Z (počet protónov v jadre) je pre každý prvok jedinečné a určuje, o aký prvok ide.'
  },
  {
    question: 'Aký je správny vzťah medzi nukleónovým číslom A, protónovým číslom Z a neutrónovým číslom N?',
    options: [
      'A = Z × N',
      'A = Z + N',
      'A = Z − N',
      'Z = A + N'
    ],
    correctIndex: 1,
    explanation: 'Nukleónové (hmotnostné) číslo A je súčet nukleónov: A = Z + N, kde Z je počet protónov a N počet neutrónov.'
  },
  {
    question: 'Čo sú izotopy?',
    options: [
      'Atómy rôznych prvkov s rovnakým počtom neutrónov',
      'Atómy toho istého prvku s rovnakým počtom neutrónov',
      'Atómy toho istého prvku s rôznym počtom neutrónov',
      'Ióny toho istého prvku s rôznym nábojom'
    ],
    correctIndex: 2,
    explanation: 'Izotopy sú atómy toho istého prvku (rovnaké Z), ktoré sa líšia počtom neutrónov (rôzne N) a teda aj nukleónovým číslom A.'
  },
  {
    question: 'Čo je katión?',
    options: [
      'Atóm, ktorý prijal elektróny a má záporný náboj',
      'Atóm, ktorý odovzdal elektróny a má kladný náboj',
      'Neutrálny atóm bez náboja',
      'Atóm s rovnakým počtom protónov aj elektrónov'
    ],
    correctIndex: 1,
    explanation: 'Katión vzniká, keď atóm odovzdá jeden alebo viac elektrónov. Vznikne prebytok protónov → kladný elektrický náboj.'
  },
  {
    question: 'Koľko elektrónov má vonkajšia (valenčná) vrstva atómu sodíka ²³₁₁Na?',
    options: [
      '1 elektrón',
      '2 elektróny',
      '8 elektrónov',
      '11 elektrónov'
    ],
    correctIndex: 0,
    explanation: 'Sodík (Z=11) má elektrónovú konfiguráciu K(2), L(8), M(1). Vonkajšia M vrstva obsahuje iba 1 valenčný elektrón, preto sodík ľahko tvorí katión Na⁺.'
  }
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function selectAnswer (i: number) {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = i
  if (i === currentQuestion.value.correctIndex) quizScore.value++
}

function nextQuestion () {
  if (currentQ.value < quiz.length - 1) {
    currentQ.value++
    selectedAnswer.value = null
  } else {
    quizFinished.value = true
  }
}

function resetQuiz () {
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
