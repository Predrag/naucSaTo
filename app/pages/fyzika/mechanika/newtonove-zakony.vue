<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Newtonove zákony pohybu</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚖️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Newtonove zákony pohybu</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Tri základné zákony klasickej mechaniky, ktoré formuloval Isaac Newton v roku 1687, tvoria základ nášho chápania pohybu telies. Popisujú vzťah medzi silou, hmotnosťou a zrýchlením a platia pre každodenné pohyby v našom okolí.
    </p>

    <!-- Section 1: 1. Newtonov zákon -->
    <section aria-label="Prvý Newtonov zákon – zákon zotrvačnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-emerald-600 rounded-t-2xl px-6 py-4">1. Newtonov zákon – zákon zotrvačnosti</h2>
      <div class="bg-white border border-emerald-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Prvý Newtonov zákon (zákon zotrvačnosti) hovorí, že každé teleso zotrváva v <strong>pokoji</strong> alebo <strong>rovnomernom priamočiarom pohybe</strong>, pokiaľ naň nepôsobí výsledná vonkajšia sila. Inými slovami – bez sily nedôjde k zmene pohybového stavu.
        </p>

        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <p class="text-sm font-semibold text-emerald-800 mb-2">Znenie 1. Newtonovho zákona</p>
          <p class="text-gray-700 italic">
            „Teleso zotrváva v pokoji alebo v rovnomernom priamočiarom pohybe, pokiaľ nie je donútené silami pôsobiacimi naň, aby tento stav zmenilo."
          </p>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Podmienka zotrvačnosti</p>
          <MathFormula display formula="\vec{F}_{\text{výsl}} = \vec{0} \implies \vec{a} = \vec{0}" />
          <p class="text-sm text-gray-600 mt-2">Ak je výsledná sila nulová, zrýchlenie je nulové – pohybový stav telesa sa nemení.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">🛷 Príklady zo života</p>
            <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Kniha leží na stole – kľud bez výslednej sily</li>
              <li>Hokejový puk kĺže po ľade – spomaluje len vplyvom trenia</li>
              <li>Pasažier v aute pri prudkom brzdení – telo „chce" pokračovať vpred</li>
              <li>Kozmická sonda – v kozme letí bez motora stálou rýchlosťou</li>
            </ul>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-yellow-800 mb-2">📌 Zotrvačnosť a hmotnosť</p>
            <p class="text-sm text-gray-700">
              <strong>Zotrvačnosť</strong> je vlastnosť telesa brániť sa zmene pohybového stavu. Mierou zotrvačnosti je <strong>hmotnosť</strong> <span v-html="km('m')"></span>. Ťažšie teleso má väčšiu zotrvačnosť – ťažšie ho rozbehnúť aj zastaviť.
            </p>
          </div>
        </div>

        <!-- Vzorce výslednice -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-gray-700 mb-2">Teleso v pokoji – rovnováha síl</p>
          <p class="text-sm text-gray-600">Na knihu na stole pôsobí tiaž <span v-html="km('G = mg')"></span> smerom nadol a normálová sila <span v-html="km('N')"></span> smerom nahor. Výslednica:</p>
          <MathFormula display formula="\vec{F}_{\text{výsl}} = \vec{G} + \vec{N} = \vec{0}" />
        </div>
      </div>
    </section>

    <!-- Section 2: 2. Newtonov zákon -->
    <section aria-label="Druhý Newtonov zákon – zákon sily" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-emerald-600 rounded-t-2xl px-6 py-4">2. Newtonov zákon – zákon sily</h2>
      <div class="bg-white border border-emerald-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Druhý Newtonov zákon popisuje, ako sila mení pohybový stav telesa. Výsledná sila pôsobiaca na teleso mu udeľuje <strong>zrýchlenie</strong>, ktoré je priamo úmerné sile a nepriamo úmerné hmotnosti telesa.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Základný vzorec – 2. Newtonov zákon</p>
          <MathFormula display formula="\vec{F} = m \cdot \vec{a}" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-emerald-700 text-lg" v-html="km('\\vec{F}')"></span>
              <p class="text-xs text-gray-500 mt-1">výsledná sila (N)</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-emerald-700 text-lg" v-html="km('m')"></span>
              <p class="text-xs text-gray-500 mt-1">hmotnosť (kg)</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-emerald-700 text-lg" v-html="km('\\vec{a}')"></span>
              <p class="text-xs text-gray-500 mt-1">zrýchlenie (m/s²)</p>
            </div>
          </div>
        </div>

        <!-- Odvodené vzorce -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p class="text-xs font-semibold text-orange-700 mb-2">Výpočet zrýchlenia</p>
            <MathFormula display formula="a = \frac{F}{m}" />
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p class="text-xs font-semibold text-orange-700 mb-2">Výpočet hmotnosti</p>
            <MathFormula display formula="m = \frac{F}{a}" />
          </div>
        </div>

        <!-- Príklady výpočtov -->
        <div class="space-y-4">
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <div class="bg-blue-600 text-white px-5 py-3">
              <p class="font-semibold text-sm">Príklad 1 – Výpočet zrýchlenia</p>
            </div>
            <div class="bg-white px-5 py-4 space-y-2">
              <p class="text-sm text-gray-700"><strong>Zadanie:</strong> Na vozík s hmotnosťou 5 kg pôsobí sila 20 N. Aké zrýchlenie získa?</p>
              <p class="text-sm text-gray-600"><strong>Riešenie:</strong></p>
              <MathFormula display formula="a = \frac{F}{m} = \frac{20\,\text{N}}{5\,\text{kg}} = 4\,\text{m/s}^2" />
              <p class="text-sm text-emerald-700 font-medium">Vozík sa zrýchľuje hodnotou 4 m/s².</p>
            </div>
          </div>

          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <div class="bg-blue-600 text-white px-5 py-3">
              <p class="font-semibold text-sm">Príklad 2 – Výpočet sily</p>
            </div>
            <div class="bg-white px-5 py-4 space-y-2">
              <p class="text-sm text-gray-700"><strong>Zadanie:</strong> Autíčko s hmotnosťou 1 200 kg sa zrýchľuje hodnotou 2,5 m/s². Aká je hnacia sila?</p>
              <p class="text-sm text-gray-600"><strong>Riešenie:</strong></p>
              <MathFormula display formula="F = m \cdot a = 1\,200\,\text{kg} \cdot 2{,}5\,\text{m/s}^2 = 3\,000\,\text{N}" />
              <p class="text-sm text-emerald-700 font-medium">Hnacia sila je 3 000 N = 3 kN.</p>
            </div>
          </div>
        </div>

        <!-- Tabuľka jednotiek -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-emerald-600 text-white">
                <th scope="col" class="px-4 py-2 text-left rounded-tl-lg">Veličina</th>
                <th scope="col" class="px-4 py-2 text-left">Symbol</th>
                <th scope="col" class="px-4 py-2 text-left">Jednotka</th>
                <th scope="col" class="px-4 py-2 text-left rounded-tr-lg">Vzorec</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white hover:bg-gray-50">
                <td class="px-4 py-2 text-gray-700 font-medium">Sila</td>
                <td class="px-4 py-2"><span v-html="km('F')"></span></td>
                <td class="px-4 py-2 text-gray-600">Newton (N = kg·m/s²)</td>
                <td class="px-4 py-2"><span v-html="km('F = ma')"></span></td>
              </tr>
              <tr class="bg-gray-50 hover:bg-gray-100">
                <td class="px-4 py-2 text-gray-700 font-medium">Hmotnosť</td>
                <td class="px-4 py-2"><span v-html="km('m')"></span></td>
                <td class="px-4 py-2 text-gray-600">Kilogram (kg)</td>
                <td class="px-4 py-2"><span v-html="km('m = F/a')"></span></td>
              </tr>
              <tr class="bg-white hover:bg-gray-50">
                <td class="px-4 py-2 text-gray-700 font-medium">Zrýchlenie</td>
                <td class="px-4 py-2"><span v-html="km('a')"></span></td>
                <td class="px-4 py-2 text-gray-600">Meter za sekundu² (m/s²)</td>
                <td class="px-4 py-2"><span v-html="km('a = F/m')"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Section 3: 3. Newtonov zákon -->
    <section aria-label="Tretí Newtonov zákon – zákon akcie a reakcie" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-emerald-600 rounded-t-2xl px-6 py-4">3. Newtonov zákon – zákon akcie a reakcie</h2>
      <div class="bg-white border border-emerald-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Tretí Newtonov zákon hovorí, že sily vždy pôsobia <strong>v pároch</strong>. Keď teleso A pôsobí silou na teleso B (akcia), tak teleso B pôsobí silou rovnako veľkou, ale opačne smerujúcou na teleso A (reakcia). Tieto dve sily pôsobia na <em>rôzne</em> telesá.
        </p>

        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <p class="text-sm font-semibold text-emerald-800 mb-2">Znenie 3. Newtonovho zákona</p>
          <p class="text-gray-700 italic">
            „Každej akcii zodpovedá rovnaká reakcia — sily dvoch telies na seba navzájom sú vždy rovnako veľké a opačne smerujúce."
          </p>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Vzťah akcie a reakcie</p>
          <MathFormula display formula="\vec{F}_{AB} = -\vec{F}_{BA}" />
          <p class="text-sm text-gray-600 mt-2">
            Sila, ktorou teleso A pôsobí na teleso B, je rovnako veľká a opačne orientovaná ako sila, ktorou B pôsobí na A.
          </p>
        </div>

        <!-- Dôležitá poznámka -->
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-red-800 mb-2">⚠️ Pozor – časté nedorozumenie</p>
          <p class="text-sm text-gray-700">
            Akčná a reakčná sila <strong>nie sú rovnovážne sily</strong>! Pôsobia na <em>rôzne</em> telesá, teda sa <em>nesčítajú</em>. Rovnovážne sily sú také, ktoré pôsobia na <em>to isté</em> teleso a majú nulovú výslednicu.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">🚀 Príklady zo života</p>
            <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Raketa – plyny vychádza dole, raketa letí hore</li>
              <li>Plávanie – ruky tlačia vodu dozadu, voda tlačí telo dopredu</li>
              <li>Odraz lopty od steny – lopta tlačí na stenu, stena odráža loptu</li>
              <li>Chôdza – noha tlačí zem dozadu, zem tlačí telo dopredu</li>
            </ul>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-yellow-800 mb-2">📐 Príklad: náraz dvoch telies</p>
            <p class="text-sm text-gray-700 mb-2">
              Guľa A narazí do gule B. Sily pôsobiace na každú guľu:
            </p>
            <MathFormula display formula="|F_{AB}| = |F_{BA}|" />
            <p class="text-sm text-gray-600">No každé teleso má inú hmotnosť → rôzne zrýchlenia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Výslednica síl a schéma voľného telesa -->
    <section aria-label="Výslednica síl a schéma voľného telesa" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-emerald-600 rounded-t-2xl px-6 py-4">Výslednica síl, rozklad síl a schéma voľného telesa</h2>
      <div class="bg-white border border-emerald-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Pri riešení úloh s viacerými silami je kľúčové správne určiť <strong>výslednicu síl</strong> – jeden vektor, ktorý má rovnaký účinok ako všetky pôsobiace sily dohromady. Na tento účel sa používa <strong>schéma voľného telesa</strong> (free body diagram).
        </p>

        <!-- Výslednica síl -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Výslednica síl – vektorový súčet</p>
          <MathFormula display formula="\vec{F}_{\text{výsl}} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + \ldots" />
          <p class="text-sm text-gray-600 mt-2">Pre sily v jednej osi (kolineárne sily) je výslednica algebraický súčet – závisí od smeru.</p>
        </div>

        <!-- Kolineárne sily -->
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-blue-600 text-white px-5 py-3">
            <p class="font-semibold text-sm">Príklad 3 – Výslednica kolineárnych síl</p>
          </div>
          <div class="bg-white px-5 py-4 space-y-2">
            <p class="text-sm text-gray-700"><strong>Zadanie:</strong> Na teleso pôsobí sila <span v-html="km('F_1 = 15\\,\\text{N}')"></span> doprava a sila <span v-html="km('F_2 = 6\\,\\text{N}')"></span> doľava. Určte výslednicu a zrýchlenie telesa s hmotnosťou 3 kg.</p>
            <p class="text-sm text-gray-600"><strong>Riešenie:</strong></p>
            <MathFormula display formula="F_{\text{výsl}} = F_1 - F_2 = 15\,\text{N} - 6\,\text{N} = 9\,\text{N} \text{ (doprava)}" />
            <MathFormula display formula="a = \frac{F_{\text{výsl}}}{m} = \frac{9\,\text{N}}{3\,\text{kg}} = 3\,\text{m/s}^2" />
            <p class="text-sm text-emerald-700 font-medium">Teleso sa pohybuje doprava so zrýchlením 3 m/s².</p>
          </div>
        </div>

        <!-- Rozklad síl -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Rozklad sily na zložky</p>
          <p class="text-sm text-gray-700 mb-3">Keď sila zviera s osou x uhol <span v-html="km('\\alpha')"></span>, rozkladáme ju na zložky:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <MathFormula display formula="F_x = F \cdot \cos\alpha" />
            </div>
            <div>
              <MathFormula display formula="F_y = F \cdot \sin\alpha" />
            </div>
          </div>
        </div>

        <!-- Schéma voľného telesa -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-800 mb-3">📋 Postup pri schéme voľného telesa</p>
          <ol class="text-sm text-gray-700 space-y-2 list-decimal list-inside">
            <li>Narysuj teleso ako bod alebo obdĺžnik.</li>
            <li>Zakresli <strong>všetky</strong> sily pôsobiace na teleso so šípkami (veľkosť = dĺžka šípky).</li>
            <li>Urč smer a veľkosť každej sily: tiaž <span v-html="km('G = mg')"></span>, normálová sila <span v-html="km('N')"></span>, trecia sila <span v-html="km('F_t')"></span>, ťah lana <span v-html="km('T')"></span>…</li>
            <li>Vypočítaj výslednicu pomocou vektorového súčtu po osách.</li>
            <li>Použi 2. Newtonov zákon: <span v-html="km('\\vec{F}_{\\text{výsl}} = m\\vec{a}')"></span>.</li>
          </ol>
        </div>

        <!-- Príklad nakloná rovina -->
        <div class="border border-gray-200 rounded-xl overflow-hidden">
          <div class="bg-blue-600 text-white px-5 py-3">
            <p class="font-semibold text-sm">Príklad 4 – Nakloná rovina (rozklad síl)</p>
          </div>
          <div class="bg-white px-5 py-4 space-y-2">
            <p class="text-sm text-gray-700"><strong>Zadanie:</strong> Teleso s hmotnosťou 2 kg leží na hladkej naklonenej rovine pod uhlom 30°. Aké je zrýchlenie po rovine nadol?</p>
            <p class="text-sm text-gray-600"><strong>Riešenie:</strong> Tiaž <span v-html="km('G = mg')"></span> sa rozkladá na zložku pozdĺž roviny a zložku kolmú na rovinu.</p>
            <MathFormula display formula="F_{\parallel} = m \cdot g \cdot \sin 30° = 2 \cdot 10 \cdot 0{,}5 = 10\,\text{N}" />
            <MathFormula display formula="a = g \cdot \sin 30° = 10 \cdot 0{,}5 = 5\,\text{m/s}^2" />
            <p class="text-sm text-emerald-700 font-medium">Teleso sa zrýchľuje po rovine nadol hodnotou 5 m/s².</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📝 Zhrnutie – Newtonove zákony</h2>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">1.</span>
          <span><strong>1. zákon zotrvačnosti:</strong> Teleso zotrváva v pokoji alebo rovnomernom priamočiarom pohybe, kým naň nepôsobí výsledná sila. Mierou zotrvačnosti je hmotnosť.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">2.</span>
          <span><strong>2. zákon sily:</strong> <span v-html="km('F = ma')"></span> – výsledná sila sa rovná súčinu hmotnosti a zrýchlenia. Sila a zrýchlenie majú rovnaký smer.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">3.</span>
          <span><strong>3. zákon akcie a reakcie:</strong> <span v-html="km('\\vec{F}_{AB} = -\\vec{F}_{BA}')"></span> – sily vždy pôsobia v pároch, navzájom opačne smerujúcich, na rôzne telesá.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">4.</span>
          <span><strong>Výslednica síl</strong> je vektorový súčet všetkých síl pôsobiacich na teleso. Určuje zmenu pohybového stavu podľa 2. Newtonovho zákona.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">5.</span>
          <span><strong>Schéma voľného telesa</strong> je grafická pomôcka – zakreslíme všetky sily pôsobiace na teleso a potom určíme výslednicu.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-500 font-bold mt-0.5">6.</span>
          <span><strong>Rozklad síl:</strong> Silu pod uhlom <span v-html="km('\\alpha')"></span> rozkladáme: <span v-html="km('F_x = F\\cos\\alpha')"></span>, <span v-html="km('F_y = F\\sin\\alpha')"></span>.</span>
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz – Newtonove zákony" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">🧪 Otestuj sa – Newtonove zákony</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1.5">
            <span
              v-for="(_, i) in quiz"
              :key="i"
              class="w-2.5 h-2.5 rounded-full transition-colors"
              :class="i === currentQ ? 'bg-emerald-500' : i < currentQ ? 'bg-emerald-200' : 'bg-gray-200'"
            ></span>
          </div>
        </div>

        <!-- Otázka -->
        <Transition name="fade" mode="out-in">
          <div :key="currentQ">
            <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5" v-html="currentQuestion.question"></p>

            <!-- Možnosti -->
            <div class="space-y-3 mb-6">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                @click="selectAnswer(i)"
                class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium"
                :class="{
                  'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 text-gray-700 cursor-pointer': selectedAnswer === null,
                  'border-emerald-500 bg-emerald-50 text-emerald-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
                  'border-red-400 bg-red-50 text-red-700': selectedAnswer !== null && i === selectedAnswer && i !== currentQuestion.correctIndex,
                  'border-gray-200 text-gray-400 cursor-default': selectedAnswer !== null && i !== selectedAnswer && i !== currentQuestion.correctIndex,
                  'cursor-not-allowed': selectedAnswer !== null
                }"
                v-html="option"
              ></button>
            </div>

            <!-- Spätná väzba -->
            <Transition name="fade">
              <div v-if="selectedAnswer !== null" data-testid="quiz-feedback" class="rounded-xl p-4 mb-4"
                :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'">
                <p class="text-sm font-semibold mb-1"
                  :class="selectedAnswer === currentQuestion.correctIndex ? 'text-emerald-700' : 'text-red-700'">
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
                </p>
                <p class="text-sm text-gray-700" v-html="currentQuestion.explanation"></p>
              </div>
            </Transition>

            <!-- Tlačidlo Ďalej -->
            <div v-if="selectedAnswer !== null" class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                @click="nextQuestion"
                class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Výsledok -->
      <div v-else data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-800 mb-2">
          {{ quizScore }} / {{ quiz.length }}
        </p>
        <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          @click="resetQuiz"
          class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Skúsiť znova
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import katex from 'katex';

function km(f) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' });
}

const quiz = [
  {
    question: 'Ktorý zákon hovorí, že teleso zotrváva v pokoji alebo rovnomernom priamočiarom pohybe, pokiaľ naň nepôsobí výsledná sila?',
    options: ['2. Newtonov zákon – zákon sily', '1. Newtonov zákon – zákon zotrvačnosti', '3. Newtonov zákon – zákon akcie a reakcie', 'Zákon zachovania energie'],
    correctIndex: 1,
    explanation: 'Prvý Newtonov zákon (zákon zotrvačnosti) tvrdí, že pohybový stav telesa sa nemení, ak naň nepôsobí výsledná sila. Mierou zotrvačnosti je hmotnosť.'
  },
  {
    question: `Na teleso s hmotnosťou 8 kg pôsobí výsledná sila 24 N. Aké zrýchlenie teleso získa?`,
    options: ['2 m/s²', '3 m/s²', '4 m/s²', '192 m/s²'],
    correctIndex: 1,
    explanation: `Podľa 2. Newtonovho zákona: ${km('a = \\frac{F}{m} = \\frac{24\\,\\text{N}}{8\\,\\text{kg}} = 3\\,\\text{m/s}^2')}.`
  },
  {
    question: `Teleso s hmotnosťou 5 kg sa pohybuje so zrýchlením 6 m/s². Aká výsledná sila naň pôsobí?`,
    options: ['1,2 N', '11 N', '30 N', '0,83 N'],
    correctIndex: 2,
    explanation: `Podľa 2. Newtonovho zákona: ${km('F = m \\cdot a = 5\\,\\text{kg} \\cdot 6\\,\\text{m/s}^2 = 30\\,\\text{N}')}.`
  },
  {
    question: 'Čo platí o akčnej a reakčnej sile podľa 3. Newtonovho zákona?',
    options: ['Pôsobia na to isté teleso a navzájom sa ruší', 'Sú rovnako veľké, rovnako smerujúce, pôsobia na rôzne telesá', 'Sú rovnako veľké, opačne smerujúce a pôsobia na rôzne telesá', 'Akčná sila je vždy väčšia ako reakčná'],
    correctIndex: 2,
    explanation: `3. Newtonov zákon: ${km('\\vec{F}_{AB} = -\\vec{F}_{BA}')} – sily sú rovnako veľké, opačne smerujúce a pôsobia na rôzne telesá.`
  },
  {
    question: `Na teleso pôsobí sila 12 N doprava a sila 7 N doľava. Teleso má hmotnosť 2,5 kg. Aké je jeho zrýchlenie?`,
    options: ['2 m/s² doľava', '7,6 m/s² doprava', '2 m/s² doprava', '5 m/s² doprava'],
    correctIndex: 2,
    explanation: `Výslednica: ${km('F_{\\text{výsl}} = 12 - 7 = 5\\,\\text{N}')} doprava. Zrýchlenie: ${km('a = \\frac{5}{2{,}5} = 2\\,\\text{m/s}^2')} doprava.`
  },
  {
    question: `Sila 45 N spôsobuje zrýchlenie 9 m/s². Aká je hmotnosť telesa?`,
    options: ['0,2 kg', '405 kg', '5 kg', '54 kg'],
    correctIndex: 2,
    explanation: `Z 2. Newtonovho zákona: ${km('m = \\frac{F}{a} = \\frac{45\\,\\text{N}}{9\\,\\text{m/s}^2} = 5\\,\\text{kg}')}.`
  }
];

const currentQ = ref(0);
const selectedAnswer = ref(null);
const quizScore = ref(0);
const quizFinished = ref(false);
const currentQuestion = computed(() => quiz[currentQ.value]);

function selectAnswer(i) {
  if (selectedAnswer.value !== null) return;
  selectedAnswer.value = i;
  if (i === currentQuestion.value.correctIndex) quizScore.value++;
}

function nextQuestion() {
  if (currentQ.value < quiz.length - 1) {
    currentQ.value++;
    selectedAnswer.value = null;
  } else {
    quizFinished.value = true;
  }
}

function resetQuiz() {
  currentQ.value = 0;
  selectedAnswer.value = null;
  quizScore.value = 0;
  quizFinished.value = false;
}

const scoreEmoji = computed(() => {
  const r = quizScore.value / quiz.length;
  return r === 1 ? '🏆' : r >= 0.7 ? '🎉' : r >= 0.4 ? '💪' : '📚';
});

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length;
  return r === 1
    ? 'Perfektné! Zvládol si všetky otázky!'
    : r >= 0.7
    ? 'Výborne! Látku ovládaš dobre.'
    : r >= 0.4
    ? 'Nie je to zlé, ale oplatí sa zopakovať.'
    : 'Prejdi si tému ešte raz a skús to znova.';
});

useSeoMeta({
  title: 'Newtonove zákony pohybu – Mechanika | Nauč sa To',
  description: 'Newtonove zákony pohybu: zákon zotrvačnosti, zákon sily F=ma, zákon akcie a reakcie. Schéma voľného telesa, výslednica síl, príklady výpočtov pre gymnazistov.'
});
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
