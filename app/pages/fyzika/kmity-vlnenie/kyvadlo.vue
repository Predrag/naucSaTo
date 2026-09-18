<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/kmity-vlnenie" class="hover:text-emerald-600 transition-colors">Kmity a vlnenie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Kyvadlo a oscilátor</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⏱️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">{{ activeTitle ?? 'Kyvadlo a oscilátor' }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Periodický pohyb s presnou pravidelnosťou — základ hodín, seizmografov, mostov aj hudobných nástrojov.
      Spoznaj, čo určuje dobu kmitu a prečo sa oscilátor nikdy „nezastaví" (bez trenia).
    </p>

      <!-- Intro -->
      <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-10">
        <p class="text-gray-700 leading-relaxed">
          <strong>Harmonické kmitanie</strong> (oscilácia) je pohyb, pri ktorom sa teleso opakuje pohybuje okolo
          <strong>rovnovážnej polohy</strong>. Dochádza k pravidelnej premene kinetickej a potenciálnej energie.
          Dobu jedného úplného kmitu nazývame <strong>perióda T</strong> [s], počet kmitov za sekundu
          je <strong>frekvencia</strong> <MathFormula formula="f = 1/T" /> [Hz].
        </p>
      </div>

      <!-- ===== SEKCIA 1: Matematické kyvadlo ===== -->
      <section aria-label="Matematické kyvadlo" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-violet-600">1.</span> Matematické kyvadlo
        </h2>

        <p class="text-gray-700 mb-5 leading-relaxed">
          <strong>Matematické kyvadlo</strong> je idealizovaný model — hmotný bod zavesený na nehmotnom,
          nepružnom závese dĺžky <MathFormula formula="l" />. Pri malých výchylkách (do asi 5°) koná
          harmonické kmitanie.
        </p>

        <!-- Kľúčový vzorec -->
        <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
          <p class="text-sm font-semibold text-violet-700 uppercase tracking-wide mb-3">Perióda matematického kyvadla</p>
          <MathFormula display formula="T = 2\pi\sqrt{\dfrac{l}{g}}" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="T\ [\text{s}]" /></p>
              <p class="text-xs text-gray-500 mt-1">perióda (doba kmitu)</p>
            </div>
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="l\ [\text{m}]" /></p>
              <p class="text-xs text-gray-500 mt-1">dĺžka závesa</p>
            </div>
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="g \approx 9{,}81\ \text{m/s}^2" /></p>
              <p class="text-xs text-gray-500 mt-1">tiažové zrýchlenie</p>
            </div>
          </div>
        </div>

        <!-- Kľúčové vlastnosti -->
        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
          <p class="font-semibold text-amber-800 mb-3">Perióda matematického kyvadla NEZÁVISÍ od:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white rounded-xl p-3">
              <span class="text-2xl">⚖️</span>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Hmotnosti guličky</p>
                <p class="text-xs text-gray-500">Ťažká aj ľahká gulička kyvajú rovnako rýchlo</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white rounded-xl p-3">
              <span class="text-2xl">📐</span>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Amplitúdy (pri malých výchylkách)</p>
                <p class="text-xs text-gray-500">Väčšia výchylka = stále rovnaká perióda</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vypočítaný príklad 1 -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="font-semibold text-gray-800 mb-4">Príklad 1: Výpočet periódy kyvadla</p>
          <p class="text-gray-600 text-sm mb-4">
            Kyvadlo má dĺžku <MathFormula formula="l = 1{,}0\ \text{m}" />. Vypočítaj jeho periódu
            (<MathFormula formula="g = 9{,}81\ \text{m/s}^2" />).
          </p>
          <div class="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
            <p class="text-gray-500">Postup:</p>
            <div class="pl-4" v-html="km('T = 2\\pi\\sqrt{\\dfrac{l}{g}} = 2\\pi\\sqrt{\\dfrac{1{,}0}{9{,}81}}')" />
            <div class="pl-4" v-html="km('T = 2\\pi \\cdot \\sqrt{0{,}1019} = 2\\pi \\cdot 0{,}3193')" />
            <div class="pl-4 font-semibold text-violet-700" v-html="km('T \\approx 2{,}006\\ \\text{s} \\approx 2{,}0\\ \\text{s}')" />
          </div>
          <p class="text-xs text-gray-400 mt-3">Kyvadlo s dĺžkou 1 m má periódu takmer presne 2 sekundy — vychýli sa a vráti každé 2 sekundy.</p>
        </div>

        <!-- Vypočítaný príklad 2 -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p class="font-semibold text-gray-800 mb-4">Príklad 2: Hľadanie dĺžky kyvadla</p>
          <p class="text-gray-600 text-sm mb-4">
            Sekundové kyvadlo má periódu <MathFormula formula="T = 2{,}0\ \text{s}" />. Akú dĺžku musí mať?
          </p>
          <div class="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
            <p class="text-gray-500">Odvodenie — vyjadrenie l zo vzorca:</p>
            <div class="pl-4" v-html="km('T = 2\\pi\\sqrt{\\dfrac{l}{g}} \\quad\\Rightarrow\\quad \\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{l}{g}}')" />
            <div class="pl-4" v-html="km('l = g\\left(\\dfrac{T}{2\\pi}\\right)^2 = 9{,}81 \\cdot \\left(\\dfrac{2{,}0}{2\\pi}\\right)^2')" />
            <div class="pl-4" v-html="km('l = 9{,}81 \\cdot (0{,}3183)^2 = 9{,}81 \\cdot 0{,}1013')" />
            <div class="pl-4 font-semibold text-violet-700" v-html="km('l \\approx 0{,}994\\ \\text{m} \\approx 0{,}99\\ \\text{m}')" />
          </div>
          <p class="text-xs text-gray-400 mt-3">Sekundové kyvadlo hodín má dĺžku takmer presne 1 meter.</p>
        </div>
      </section>

      <!-- ===== SEKCIA 2: Pružinový oscilátor ===== -->
      <section aria-label="Pružinový oscilátor a Hookův zákon" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-violet-600">2.</span> Pružinový oscilátor a Hookův zákon
        </h2>

        <p class="text-gray-700 mb-5 leading-relaxed">
          Teleso zavesené na pružine (alebo položené na klznej ploche) kmitá vplyvom
          <strong>pružnej (obnovujúcej) sily</strong>. Pružnú silu opisuje <strong>Hookův zákon</strong>.
        </p>

        <!-- Hookův zákon -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <p class="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">Hookův zákon</p>
          <MathFormula display formula="F = -k \cdot x" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="F\ [\text{N}]" /></p>
              <p class="text-xs text-gray-500 mt-1">pružná (obnovujúca) sila</p>
            </div>
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="k\ [\text{N/m}]" /></p>
              <p class="text-xs text-gray-500 mt-1">tuhosť pružiny</p>
            </div>
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="x\ [\text{m}]" /></p>
              <p class="text-xs text-gray-500 mt-1">výchylka od rovnováhy</p>
            </div>
          </div>
          <p class="text-sm text-blue-800 mt-4 bg-blue-100 rounded-xl px-4 py-3">
            Záporné znamienko vyjadruje, že sila pôsobí <strong>proti smeru výchylky</strong>
            — vždy smeruje späť k rovnovážnej polohe (preto sa nazýva obnovujúca).
          </p>
        </div>

        <!-- Perióda pružinového oscilátora -->
        <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
          <p class="text-sm font-semibold text-violet-700 uppercase tracking-wide mb-3">Perióda pružinového oscilátora</p>
          <MathFormula display formula="T = 2\pi\sqrt{\dfrac{m}{k}}" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="m\ [\text{kg}]" /></p>
              <p class="text-xs text-gray-500 mt-1">hmotnosť kmitajúceho telesa</p>
            </div>
            <div class="bg-white rounded-xl p-3 text-center">
              <p class="font-bold text-gray-800"><MathFormula formula="k\ [\text{N/m}]" /></p>
              <p class="text-xs text-gray-500 mt-1">tuhosť pružiny</p>
            </div>
          </div>
        </div>

        <!-- Porovnávacia tabuľka -->
        <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-700 text-white">
                <th scope="col" class="text-left px-5 py-3 font-semibold">Vlastnosť</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Matematické kyvadlo</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Pružinový oscilátor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in comparisonTable" :key="row.prop" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-5 py-3 font-medium text-gray-800">{{ row.prop }}</td>
                <td class="px-5 py-3 text-violet-700" v-html="row.pendulum" />
                <td class="px-5 py-3 text-blue-700" v-html="row.spring" />
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Vypočítaný príklad 3 -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p class="font-semibold text-gray-800 mb-4">Príklad 3: Perióda pružinového oscilátora</p>
          <p class="text-gray-600 text-sm mb-4">
            Na pružine s tuhosťou <MathFormula formula="k = 200\ \text{N/m}" /> visí teleso
            s hmotnosťou <MathFormula formula="m = 0{,}5\ \text{kg}" />. Aká je perióda kmitov?
          </p>
          <div class="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
            <p class="text-gray-500">Postup:</p>
            <div class="pl-4" v-html="km('T = 2\\pi\\sqrt{\\dfrac{m}{k}} = 2\\pi\\sqrt{\\dfrac{0{,}5}{200}}')" />
            <div class="pl-4" v-html="km('T = 2\\pi\\sqrt{0{,}0025} = 2\\pi \\cdot 0{,}05')" />
            <div class="pl-4 font-semibold text-blue-700" v-html="km('T \\approx 0{,}314\\ \\text{s} \\approx 0{,}31\\ \\text{s}')" />
          </div>
          <p class="text-xs text-gray-400 mt-3">
            Frekvencia tohto oscilátora: <MathFormula formula="f = 1/T \approx 3{,}18\ \text{Hz}" /> — vykoná asi 3 kmity za sekundu.
          </p>
        </div>
      </section>

      <!-- ===== SEKCIA 3: Energia oscilátora ===== -->
      <section aria-label="Energia harmonického oscilátora" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-violet-600">3.</span> Energia harmonického oscilátora
        </h2>

        <p class="text-gray-700 mb-5 leading-relaxed">
          Pri kmitaní sa kinetická a potenciálna energia navzájom premieňajú. Bez trenia je ich
          <strong>súčet (celková energia) konštantný</strong> — zachováva sa.
        </p>

        <!-- Tri vzorce energie -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
            <p class="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">Kinetická energia</p>
            <MathFormula display formula="E_k = \tfrac{1}{2}mv^2" />
            <p class="text-xs text-gray-500 mt-2">Maximum v rovnovážnej polohe</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-center">
            <p class="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">Potenciálna energia</p>
            <MathFormula display formula="E_p = \tfrac{1}{2}kx^2" />
            <p class="text-xs text-gray-500 mt-2">Maximum v krajnej polohe</p>
          </div>
          <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5 text-center">
            <p class="text-xs font-semibold text-violet-700 uppercase tracking-wide mb-2">Celková energia</p>
            <MathFormula display formula="E = \tfrac{1}{2}kA^2 = \text{konšt.}" />
            <p class="text-xs text-gray-500 mt-2">Závisí len od amplitúdy A</p>
          </div>
        </div>

        <!-- Zachovanie energie -->
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
          <p class="font-semibold text-gray-800 mb-3">Vzťah platí v každom okamihu kmitania:</p>
          <MathFormula display formula="E_k + E_p = \tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2 = \text{konšt.}" />
          <p class="text-sm text-gray-600 mt-3">
            kde <MathFormula formula="A" /> je <strong>amplitúda</strong> (maximálna výchylka).
            Celková energia rastie s druhou mocninou amplitúdy — dvojnásobná amplitúda znamená štvornásobne
            väčšiu energiu.
          </p>
        </div>

        <!-- Priebeh energie - vizuálna pomôcka -->
        <div class="overflow-x-auto rounded-2xl border border-gray-200">
          <table class="w-full text-sm text-center">
            <thead>
              <tr class="bg-gray-700 text-white">
                <th scope="col" class="px-4 py-3 font-semibold">Poloha</th>
                <th scope="col" class="px-4 py-3 font-semibold text-emerald-300">Kinetická E<sub>k</sub></th>
                <th scope="col" class="px-4 py-3 font-semibold text-orange-300">Potenciálna E<sub>p</sub></th>
                <th scope="col" class="px-4 py-3 font-semibold text-violet-300">Celková E</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in energyTable" :key="row.pos" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-4 py-3 font-medium text-gray-800">{{ row.pos }}</td>
                <td class="px-4 py-3 text-emerald-700">{{ row.ek }}</td>
                <td class="px-4 py-3 text-orange-700">{{ row.ep }}</td>
                <td class="px-4 py-3 font-semibold text-violet-700">{{ row.e }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ===== SEKCIA 4: Rezonancia ===== -->
      <section aria-label="Rezonancia" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-violet-600">4.</span> Rezonancia
        </h2>

        <p class="text-gray-700 mb-5 leading-relaxed">
          Každý kmitajúci systém má <strong>vlastnú frekvenciu</strong>
          <MathFormula formula="f_0" />. Ak naň pôsobíme vonkajšou silou s frekvenciou
          <MathFormula formula="f" />, budíme vynútené kmitanie. Keď
          <MathFormula formula="f = f_0" />, nastáva <strong>rezonancia</strong>:
          amplitúda kmitov výrazne narastie.
        </p>

        <!-- Definícia rezonancie -->
        <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
          <p class="font-semibold text-red-800 mb-2">Podmienka rezonancie:</p>
          <MathFormula display formula="f_{\text{budenie}} = f_0 \quad \Leftrightarrow \quad T_{\text{budenie}} = T_0" />
          <p class="text-sm text-gray-700 mt-3">
            Pri rezonancii systém prijíma maximálne množstvo energie z vonkajšieho zdroja —
            amplitúda rastie až do zlyhania (ak nie je dostatočné tlmenie).
          </p>
        </div>

        <!-- Príklady -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="font-semibold text-emerald-700 mb-3">Využitie rezonancie</p>
            <div class="space-y-3">
              <div v-for="use in resonanceUses" :key="use.title" class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p class="font-semibold text-gray-800 text-sm">{{ use.icon }} {{ use.title }}</p>
                <p class="text-xs text-gray-600 mt-1">{{ use.desc }}</p>
              </div>
            </div>
          </div>
          <div>
            <p class="font-semibold text-red-700 mb-3">Nežiaduce účinky rezonancie</p>
            <div class="space-y-3">
              <div v-for="harm in resonanceHarms" :key="harm.title" class="bg-red-50 border border-red-200 rounded-xl p-4">
                <p class="font-semibold text-gray-800 text-sm">{{ harm.icon }} {{ harm.title }}</p>
                <p class="text-xs text-gray-600 mt-1">{{ harm.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== ZHRNUTIE ===== -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
        <ul class="space-y-2 text-gray-700">
          <li class="flex gap-2">
            <span class="text-violet-500 font-bold mt-0.5">•</span>
            <span>
              <strong>Matematické kyvadlo:</strong>
              <MathFormula formula="T = 2\pi\sqrt{l/g}" /> — závisí len od dĺžky a tiaže, nie od hmotnosti ani amplitúdy (malé výchylky).
            </span>
          </li>
          <li class="flex gap-2">
            <span class="text-violet-500 font-bold mt-0.5">•</span>
            <span>
              <strong>Hookův zákon:</strong>
              <MathFormula formula="F = -kx" /> — pružná sila je obnovujúca, smeruje vždy k rovnovážnej polohe.
              Tuhosť pružiny <MathFormula formula="k\ [\text{N/m}]" />.
            </span>
          </li>
          <li class="flex gap-2">
            <span class="text-violet-500 font-bold mt-0.5">•</span>
            <span>
              <strong>Pružinový oscilátor:</strong>
              <MathFormula formula="T = 2\pi\sqrt{m/k}" /> — väčšia hmotnosť predlžuje periódu,
              tuhšia pružina ju skracuje.
            </span>
          </li>
          <li class="flex gap-2">
            <span class="text-violet-500 font-bold mt-0.5">•</span>
            <span>
              <strong>Energia:</strong> kinetická <MathFormula formula="E_k = \frac{1}{2}mv^2" /> a potenciálna
              <MathFormula formula="E_p = \frac{1}{2}kx^2" /> sa navzájom premieňajú. Celková
              <MathFormula formula="E = \frac{1}{2}kA^2" /> je konštantná (zákon zachovania energie).
            </span>
          </li>
          <li class="flex gap-2">
            <span class="text-violet-500 font-bold mt-0.5">•</span>
            <span>
              <strong>Rezonancia:</strong> nastáva, keď sa frekvencia budiaceho kmitania rovná vlastnej frekvencii systému.
              Amplitúda narastá — využitie (MRI, hudobné nástroje) aj riziká (zrútenie konštrukcií).
            </span>
          </li>
        </ul>
      </div>

      <!-- ===== KVÍZ ===== -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">🧠 Kvíz — Kyvadlo a oscilátor</h2>

        <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <!-- Progress -->
          <div class="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div data-testid="quiz-progress" class="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
              <span>{{ quizScore }} / {{ quiz.length }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5">
              <div
                class="bg-violet-500 h-1.5 rounded-full transition-all duration-300"
                :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
              />
            </div>
          </div>

          <!-- Question -->
          <div class="p-6">
            <p data-testid="question" class="text-gray-800 font-medium text-lg mb-5" v-html="currentQuestion.questionHtml" />

            <div class="space-y-3">
              <button
                v-for="(opt, i) in currentQuestion.options"
                :key="i"
                :data-testid="`option-${i}`"
                type="button"
                :disabled="selectedAnswer !== null"
                class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-gray-700"
                :class="optionClass(i)"
                @click="selectAnswer(i)"
                v-html="opt"
              />
            </div>

            <!-- Feedback -->
            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="feedback"
                class="mt-5 rounded-xl p-4 text-sm"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800'"
              >
                <span class="font-semibold mr-1">
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
                </span>
                <span v-html="currentQuestion.explanation" />
              </div>
            </Transition>

            <div class="mt-5 flex justify-end">
              <button
                v-if="selectedAnswer !== null"
                data-testid="next-btn"
                type="button"
                class="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Result -->
        <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
          <p data-testid="score" class="text-gray-500 mb-6">
            Dosiahol si <strong class="text-violet-600">{{ quizScore }} z {{ quiz.length }}</strong> bodov.
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

const { locale } = useI18n()

const titleRu = 'Маятник и осциллятор'
const titleUk = 'Маятник і осцилятор'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

// Porovnávacia tabuľka kyvadlo vs oscilátor
const comparisonTable = [
  {
    prop: 'Vzorec periódy',
    pendulum: km('T = 2\\pi\\sqrt{l/g}'),
    spring: km('T = 2\\pi\\sqrt{m/k}'),
  },
  {
    prop: 'Závisí od hmotnosti?',
    pendulum: 'Nie',
    spring: 'Áno — väčšia hmotnosť → dlhšia T',
  },
  {
    prop: 'Závisí od tuhosti?',
    pendulum: 'Nie (závisí od g)',
    spring: 'Áno — tuhšia pružina → kratšia T',
  },
  {
    prop: 'Obnovujúca sila',
    pendulum: km('F = -mg\\sin\\varphi \\approx -mg\\varphi'),
    spring: km('F = -kx'),
  },
  {
    prop: 'Závisí od amplitúdy?',
    pendulum: 'Nie (malé výchylky)',
    spring: 'Nie',
  },
]

// Tabuľka energia
const energyTable = [
  { pos: 'Rovnovážna poloha (x = 0)', ek: 'Maximum', ep: 'Nula', e: 'Konšt.' },
  { pos: 'Krajná poloha (x = A)', ek: 'Nula', ep: 'Maximum', e: 'Konšt.' },
  { pos: 'Stredná poloha (x = A/2)', ek: '3/4 maxima', ep: '1/4 maxima', e: 'Konšt.' },
]

// Rezonancia — využitie
const resonanceUses = [
  {
    icon: '🎸',
    title: 'Hudobné nástroje',
    desc: 'Rezonátory gitár, huslí a orgánových píšťal zosilňujú zvuk konkrétnej frekvencie.',
  },
  {
    icon: '🏥',
    title: 'Magnetická rezonancia (MRI)',
    desc: 'Jadrová magnetická rezonancia umožňuje zobraziť vnútorné orgány bez röntgenového žiarenia.',
  },
  {
    icon: '📻',
    title: 'Ladenie rádiových prijímačov',
    desc: 'Elektrický LC obvod je naladený na frekvenciu vysielača — selektuje žiadanú stanicu.',
  },
]

// Rezonancia — riziká
const resonanceHarms = [
  {
    icon: '🌉',
    title: 'Tacoma Narrows Bridge (1940)',
    desc: 'Zavesený most sa zrútil, keď vítr vyvolal rezonančné kmitanie zhodné s vlastnou frekvenciou mosta.',
  },
  {
    icon: '🏗️',
    title: 'Konštrukčné zlyhania',
    desc: 'Stroje a motory môžu spôsobiť rezonanciu v konštrukciách budov alebo vozidiel — nutné tlmenie.',
  },
  {
    icon: '✈️',
    title: 'Flutter v letectve',
    desc: 'Aerodynamická rezonancia krídel lietadla môže viesť k ich štrukturálnemu kolapsu.',
  },
]

// Quiz
const quiz = [
  {
    questionHtml: 'Aký vzorec popisuje periódu matematického kyvadla?',
    options: [
      km('T = 2\\pi\\sqrt{m/k}'),
      km('T = 2\\pi\\sqrt{l/g}'),
      km('T = 2\\pi\\sqrt{g/l}'),
      km('T = 2\\pi \\cdot l \\cdot g'),
    ],
    correctIndex: 1,
    explanation: `Perióda matematického kyvadla ${km('T = 2\\pi\\sqrt{l/g}')} závisí od dĺžky závesa ${km('l')} a tiažového zrýchlenia ${km('g')}. Hmotnosť ani amplitúda (pri malých výchylkách) ju neovplyvňujú.`,
  },
  {
    questionHtml: `Matematické kyvadlo má dĺžku ${km('l = 1{,}0\\ \\text{m}')} a ${km('g = 9{,}81\\ \\text{m/s}^2')}. Aká je jeho perióda?`,
    options: ['1,0 s', '1,5 s', '2,0 s', '4,0 s'],
    correctIndex: 2,
    explanation: `${km('T = 2\\pi\\sqrt{1{,}0/9{,}81} = 2\\pi \\cdot 0{,}319 \\approx 2{,}0\\ \\text{s}')}. Kyvadlo dlhé 1 m kmitá s periódou takmer presne 2 sekundy.`,
  },
  {
    questionHtml: `Hookův zákon ${km('F = -kx')} — čo vyjadruje záporné znamienko?`,
    options: [
      'Konštanta k je záporná',
      'Výchylka x je vždy záporná',
      'Pružná sila smeruje vždy v smere výchylky',
      'Pružná sila smeruje proti smeru výchylky (obnovujúca sila)',
    ],
    correctIndex: 3,
    explanation: 'Záporné znamienko znamená, že pružná sila je <strong>obnovujúca</strong> — vždy smeruje späť k rovnovážnej polohe, čo je opačný smer ako výchylka.',
  },
  {
    questionHtml: `Pružinový oscilátor má ${km('m = 0{,}5\\ \\text{kg}')} a ${km('k = 200\\ \\text{N/m}')}. Aká je perióda kmitov?`,
    options: [
      km('T \\approx 0{,}16\\ \\text{s}'),
      km('T \\approx 0{,}31\\ \\text{s}'),
      km('T \\approx 0{,}63\\ \\text{s}'),
      km('T \\approx 1{,}26\\ \\text{s}'),
    ],
    correctIndex: 1,
    explanation: `${km('T = 2\\pi\\sqrt{0{,}5/200} = 2\\pi\\sqrt{0{,}0025} = 2\\pi \\cdot 0{,}05 \\approx 0{,}314\\ \\text{s}')}`,
  },
  {
    questionHtml: 'Celková mechanická energia harmonického oscilátora bez trenia je:',
    options: [
      'Maximálna v rovnovážnej polohe, nulová v krajnej polohe',
      'Nulová v rovnovážnej polohe, maximálna v krajnej polohe',
      'Konštantná — nemení sa počas kmitania',
      'Závisí od frekvencie kmitania',
    ],
    correctIndex: 2,
    explanation: `Celková energia ${km('E = \\tfrac{1}{2}kA^2')} je konštantná. Kinetická a potenciálna energia sa premieňajú, ale ich súčet ostáva rovnaký — platí <strong>zákon zachovania energie</strong>.`,
  },
  {
    questionHtml: 'Kedy nastáva rezonancia?',
    options: [
      'Keď amplitúda kmitov klesne na nulu',
      'Keď frekvencia budiaceho kmitania sa rovná vlastnej frekvencii systému',
      'Keď frekvencia budiaceho kmitania je dvojnásobok vlastnej frekvencie',
      'Keď je systém dostatočne tlmený',
    ],
    correctIndex: 1,
    explanation: `Rezonancia nastáva pri ${km('f_{\\text{budenie}} = f_0')}. Systém prijíma maximálne množstvo energie — amplitúda výrazne narastie. Príkladom je zrútenie Tacoma Narrows Bridge v roku 1940.`,
  },
]

interface QuizQuestion {
  questionHtml: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quizRu: QuizQuestion[] = [
  {
    questionHtml: 'Какая формула описывает период математического маятника?',
    options: [
      km('T = 2\\pi\\sqrt{m/k}'),
      km('T = 2\\pi\\sqrt{l/g}'),
      km('T = 2\\pi\\sqrt{g/l}'),
      km('T = 2\\pi \\cdot l \\cdot g'),
    ],
    correctIndex: 1,
    explanation: `Период математического маятника ${km('T = 2\\pi\\sqrt{l/g}')} зависит от длины подвеса ${km('l')} и ускорения свободного падения ${km('g')}. Масса и амплитуда (при малых отклонениях) на него не влияют.`,
  },
  {
    questionHtml: `Математический маятник имеет длину ${km('l = 1{,}0\\ \\text{m}')} и ${km('g = 9{,}81\\ \\text{m/s}^2')}. Каков его период?`,
    options: ['1,0 s', '1,5 s', '2,0 s', '4,0 s'],
    correctIndex: 2,
    explanation: `${km('T = 2\\pi\\sqrt{1{,}0/9{,}81} = 2\\pi \\cdot 0{,}319 \\approx 2{,}0\\ \\text{s}')}. Маятник длиной 1 м колеблется с периодом почти ровно 2 секунды.`,
  },
  {
    questionHtml: `Закон Гука ${km('F = -kx')} — что выражает знак минус?`,
    options: [
      'Константа k отрицательная',
      'Отклонение x всегда отрицательное',
      'Упругая сила всегда направлена в сторону отклонения',
      'Упругая сила направлена против отклонения (возвращающая сила)',
    ],
    correctIndex: 3,
    explanation: 'Знак минус означает, что упругая сила является <strong>возвращающей</strong> — всегда направлена обратно к положению равновесия, то есть в сторону, противоположную отклонению.',
  },
  {
    questionHtml: `Пружинный осциллятор имеет ${km('m = 0{,}5\\ \\text{kg}')} и ${km('k = 200\\ \\text{N/m}')}. Каков период колебаний?`,
    options: [
      km('T \\approx 0{,}16\\ \\text{s}'),
      km('T \\approx 0{,}31\\ \\text{s}'),
      km('T \\approx 0{,}63\\ \\text{s}'),
      km('T \\approx 1{,}26\\ \\text{s}'),
    ],
    correctIndex: 1,
    explanation: `${km('T = 2\\pi\\sqrt{0{,}5/200} = 2\\pi\\sqrt{0{,}0025} = 2\\pi \\cdot 0{,}05 \\approx 0{,}314\\ \\text{s}')}`,
  },
  {
    questionHtml: 'Полная механическая энергия гармонического осциллятора без трения:',
    options: [
      'Максимальная в положении равновесия, нулевая в крайнем положении',
      'Нулевая в положении равновесия, максимальная в крайнем положении',
      'Постоянная — не изменяется во время колебания',
      'Зависит от частоты колебания',
    ],
    correctIndex: 2,
    explanation: `Полная энергия ${km('E = \\tfrac{1}{2}kA^2')} постоянна. Кинетическая и потенциальная энергии преобразуются, но их сумма остаётся неизменной — действует <strong>закон сохранения энергии</strong>.`,
  },
  {
    questionHtml: 'Когда возникает резонанс?',
    options: [
      'Когда амплитуда колебаний падает до нуля',
      'Когда частота вынуждающих колебаний равна собственной частоте системы',
      'Когда частота вынуждающих колебаний вдвое превышает собственную частоту',
      'Когда система достаточно заглушена',
    ],
    correctIndex: 1,
    explanation: `Резонанс возникает при ${km('f_{\\text{budenie}} = f_0')}. Система получает максимальное количество энергии — амплитуда резко возрастает. Примером служит обрушение моста Такома-Нэрроуз в 1940 году.`,
  },
]

const quizUk: QuizQuestion[] = [
  {
    questionHtml: 'Яка формула описує період математичного маятника?',
    options: [
      km('T = 2\\pi\\sqrt{m/k}'),
      km('T = 2\\pi\\sqrt{l/g}'),
      km('T = 2\\pi\\sqrt{g/l}'),
      km('T = 2\\pi \\cdot l \\cdot g'),
    ],
    correctIndex: 1,
    explanation: `Період математичного маятника ${km('T = 2\\pi\\sqrt{l/g}')} залежить від довжини підвісу ${km('l')} та прискорення вільного падіння ${km('g')}. Маса і амплітуда (при малих відхиленнях) на нього не впливають.`,
  },
  {
    questionHtml: `Математичний маятник має довжину ${km('l = 1{,}0\\ \\text{m}')} і ${km('g = 9{,}81\\ \\text{m/s}^2')}. Який його період?`,
    options: ['1,0 s', '1,5 s', '2,0 s', '4,0 s'],
    correctIndex: 2,
    explanation: `${km('T = 2\\pi\\sqrt{1{,}0/9{,}81} = 2\\pi \\cdot 0{,}319 \\approx 2{,}0\\ \\text{s}')}. Маятник завдовжки 1 м коливається з періодом майже рівно 2 секунди.`,
  },
  {
    questionHtml: `Закон Гука ${km('F = -kx')} — що виражає знак мінус?`,
    options: [
      'Константа k від\'ємна',
      'Відхилення x завжди від\'ємне',
      'Пружна сила завжди спрямована в бік відхилення',
      'Пружна сила спрямована проти відхилення (повертальна сила)',
    ],
    correctIndex: 3,
    explanation: 'Знак мінус означає, що пружна сила є <strong>повертальною</strong> — завжди спрямована назад до положення рівноваги, тобто у напрямку, протилежному відхиленню.',
  },
  {
    questionHtml: `Пружинний осцилятор має ${km('m = 0{,}5\\ \\text{kg}')} і ${km('k = 200\\ \\text{N/m}')}. Який період коливань?`,
    options: [
      km('T \\approx 0{,}16\\ \\text{s}'),
      km('T \\approx 0{,}31\\ \\text{s}'),
      km('T \\approx 0{,}63\\ \\text{s}'),
      km('T \\approx 1{,}26\\ \\text{s}'),
    ],
    correctIndex: 1,
    explanation: `${km('T = 2\\pi\\sqrt{0{,}5/200} = 2\\pi\\sqrt{0{,}0025} = 2\\pi \\cdot 0{,}05 \\approx 0{,}314\\ \\text{s}')}`,
  },
  {
    questionHtml: 'Повна механічна енергія гармонічного осцилятора без тертя:',
    options: [
      'Максимальна в положенні рівноваги, нульова в крайньому положенні',
      'Нульова в положенні рівноваги, максимальна в крайньому положенні',
      'Постійна — не змінюється під час коливання',
      'Залежить від частоти коливання',
    ],
    correctIndex: 2,
    explanation: `Повна енергія ${km('E = \\tfrac{1}{2}kA^2')} постійна. Кінетична та потенціальна енергії перетворюються, але їхня сума залишається незмінною — діє <strong>закон збереження енергії</strong>.`,
  },
  {
    questionHtml: 'Коли виникає резонанс?',
    options: [
      'Коли амплітуда коливань падає до нуля',
      'Коли частота вимушених коливань дорівнює власній частоті системи',
      'Коли частота вимушених коливань удвічі перевищує власну частоту',
      'Коли система достатньо загашена',
    ],
    correctIndex: 1,
    explanation: `Резонанс виникає при ${km('f_{\\text{budenie}} = f_0')}. Система отримує максимальну кількість енергії — амплітуда різко зростає. Прикладом є руйнування мосту Такома-Нерроуз у 1940 році.`,
  },
]

const activeQuiz = computed(() => {
  if (locale.value === 'ru') return quizRu
  if (locale.value === 'uk') return quizUk
  return quiz
})

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => activeQuiz.value[currentQ.value] as QuizQuestion)

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

function optionClass(i: number): Record<string, boolean> {
  if (selectedAnswer.value === null) {
    return {
      'border-gray-200 hover:border-violet-400 hover:bg-violet-50 cursor-pointer': true,
    }
  }
  if (i === currentQuestion.value.correctIndex) {
    return { 'border-emerald-500 bg-emerald-50 text-emerald-800': true }
  }
  if (i === selectedAnswer.value) {
    return { 'border-red-400 bg-red-50 text-red-800': true }
  }
  return { 'border-gray-100 text-gray-400 cursor-not-allowed': true }
}

useHead({
  title: 'Kyvadlo a oscilátor — Fyzika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Matematické kyvadlo, pružinový oscilátor, Hookův zákon, energia harmonického kmitania a rezonancia. Pre gymnazistov — s vysvetlením, príkladmi a kvízom.',
    },
  ],
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
