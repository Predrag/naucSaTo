<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/kmity-vlnenie" class="hover:text-emerald-600 transition-colors">Kmity a vlnenie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Mechanické vlnenie</span>
    </nav>

    <!-- Header -->
    <div class="bg-blue-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
      <h1 class="text-3xl font-bold mb-2">〰️ Mechanické vlnenie</h1>
      <p class="text-blue-100 text-lg">Šírenie kmitania prostredím — vlnová dĺžka, rýchlosť, Dopplerov jav</p>
    </div>

    <!-- Intro -->
    <section class="mb-10">
      <p class="text-gray-700 text-lg leading-relaxed mb-4">
        Mechanické vlnenie vzniká, keď sa kmitanie šíri z jedného miesta do okolia prostredím. Na rozdiel od samotných kmitov,
        pri vlnení sa neprenáša hmota — prenáša sa <strong>energia</strong>. Každá častica prostredia kmitá okolo svojej rovnovážnej polohy
        a odovzdáva energiu susedným časticiam.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Mechanické vlnenie vyžaduje <strong>hmotné prostredie</strong> (vzduch, voda, pevná látka). Vo vákuu sa mechanické vlny nešíria
        — na rozdiel od elektromagnetických vĺn.
      </p>
    </section>

    <!-- Section 1: Základné pojmy -->
    <section aria-label="Základné pojmy vlnenia" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">1. Základné pojmy vlnenia</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Vlnová dĺžka λ</h3>
          <p class="text-gray-700 text-sm mb-3">
            Vlnová dĺžka je vzdialenosť dvoch najbližších bodov, ktoré kmitajú v rovnakej fáze (napr. dvoch najbližších hrebeňov).
            Jednotka: <strong>metre [m]</strong>.
          </p>
          <div class="text-center py-2">
            <span v-html="km('\\lambda = v \\cdot T = \\dfrac{v}{f}')"/>
          </div>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">Rýchlosť vlnenia</h3>
          <p class="text-gray-700 text-sm mb-3">
            Rýchlosť vlnenia závisí od vlastností prostredia (hustota, pružnosť), nie od kmitania zdroja.
          </p>
          <div class="text-center py-2">
            <span v-html="km('v = \\lambda \\cdot f')"/>
          </div>
        </div>
      </div>

      <!-- Table of quantities -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th scope="col" class="p-3 text-left rounded-tl-lg">Veličina</th>
              <th scope="col" class="p-3 text-left">Symbol</th>
              <th scope="col" class="p-3 text-left">Jednotka</th>
              <th scope="col" class="p-3 text-left rounded-tr-lg">Popis</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-50">
              <td class="p-3 border-b">Vlnová dĺžka</td>
              <td class="p-3 border-b"><span v-html="km('\\lambda')"/></td>
              <td class="p-3 border-b">m</td>
              <td class="p-3 border-b">Vzdialenosť dvoch bodov v rovnakej fáze</td>
            </tr>
            <tr>
              <td class="p-3 border-b">Perióda</td>
              <td class="p-3 border-b"><span v-html="km('T')"/></td>
              <td class="p-3 border-b">s</td>
              <td class="p-3 border-b">Čas jedného úplného kmitu</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="p-3 border-b">Frekvencia</td>
              <td class="p-3 border-b"><span v-html="km('f')"/></td>
              <td class="p-3 border-b">Hz</td>
              <td class="p-3 border-b">Počet kmitov za sekundu</td>
            </tr>
            <tr>
              <td class="p-3">Rýchlosť vlnenia</td>
              <td class="p-3"><span v-html="km('v')"/></td>
              <td class="p-3">m/s</td>
              <td class="p-3">Rýchlosť šírenia vlny prostredím</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Example 1 -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5">
        <h4 class="font-bold text-yellow-800 mb-3">Príklad 1: Výpočet vlnovej dĺžky</h4>
        <p class="text-gray-700 mb-3">
          Zvuk sa šíri vo vzduchu rýchlosťou 340 m/s. Aká je vlnová dĺžka zvuku s frekvenciou 440 Hz (tón A)?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm">
          <p class="text-gray-600 mb-1">Zadané: <span v-html="km('v = 340\\,\\text{m/s},\\; f = 440\\,\\text{Hz}')"/></p>
          <p class="text-gray-600 mb-2">Vzorec: <span v-html="km('\\lambda = \\dfrac{v}{f}')"/></p>
          <div class="my-3 text-center">
            <span v-html="km('\\lambda = \\dfrac{340}{440} \\approx 0{,}77\\,\\text{m}')"/>
          </div>
          <p class="text-emerald-700 font-semibold">Vlnová dĺžka tónu A je približne 77 cm.</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Typy vlnenia -->
    <section aria-label="Priečne a pozdĺžne vlnenie" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">2. Typy mechanického vlnenia</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Priečne vlnenie -->
        <div class="border-2 border-blue-300 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">〰️</span>
            <h3 class="font-bold text-blue-800 text-lg">Priečne vlnenie</h3>
          </div>
          <p class="text-gray-700 text-sm mb-3">
            Častice prostredia kmitajú <strong>kolmo (⊥)</strong> na smer šírenia vlny.
          </p>
          <ul class="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-3">
            <li>Vlny na vodnej hladine</li>
            <li>Vlny na strune</li>
            <li>Seizmické vlny S</li>
            <li>Môžu byť <strong>polarizované</strong></li>
          </ul>
          <div class="bg-blue-50 rounded-lg p-3 text-center text-sm text-blue-700 font-medium">
            Kmitanie ⊥ smer šírenia
          </div>
        </div>

        <!-- Pozdĺžne vlnenie -->
        <div class="border-2 border-orange-300 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">↔️</span>
            <h3 class="font-bold text-orange-800 text-lg">Pozdĺžne vlnenie</h3>
          </div>
          <p class="text-gray-700 text-sm mb-3">
            Častice prostredia kmitajú <strong>rovnobežne (∥)</strong> so smerom šírenia vlny — vznikajú zhustenia a zriedenia.
          </p>
          <ul class="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-3">
            <li>Zvuk v plynoch a kvapalinách</li>
            <li>Vlny v pružine (stiahnutím)</li>
            <li>Seizmické vlny P</li>
            <li><strong>Nepolarizujú sa</strong></li>
          </ul>
          <div class="bg-orange-50 rounded-lg p-3 text-center text-sm text-orange-700 font-medium">
            Kmitanie ∥ smer šírenia
          </div>
        </div>
      </div>

      <!-- Polarizácia -->
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
        <h3 class="font-bold text-purple-800 mb-2">Polarizácia priečnych vĺn</h3>
        <p class="text-gray-700 text-sm">
          Ak kmitajú častice len v jednej rovine (napr. iba zvisle), hovoríme o <strong>lineárne polarizovanej vlne</strong>.
          Polarizáciu možno dosiahnuť priepustením vlny cez úzku štrbinu orientovanú daným smerom.
          Pozdĺžne vlny (zvuk) polarizovať nemožno — kmitajú len pozdĺž smeru šírenia.
        </p>
      </div>
    </section>

    <!-- Section 3: Dopplerov jav -->
    <section aria-label="Dopplerov jav" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">3. Dopplerov jav</h2>

      <p class="text-gray-700 mb-5">
        Dopplerov jav nastáva, keď sa <strong>zdroj vlnenia alebo pozorovateľ pohybujú</strong> voči sebe.
        Vnímaná frekvencia sa líši od frekvencie, ktorú vydáva zdroj — priblíži = vyššia frekvencia, vzďaľuje = nižšia frekvencia.
      </p>

      <!-- Formula box -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-blue-800 mb-4">Vzorec Dopplerovho javu</h3>
        <div class="text-center py-3">
          <span v-html="km('f = f_0 \\cdot \\dfrac{v \\pm v_p}{v \\mp v_z}')"/>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mt-5 text-sm text-gray-600">
          <div class="space-y-1">
            <p><span v-html="km('f')"/> — vnímaná frekvencia</p>
            <p><span v-html="km('f_0')"/> — frekvencia zdroja</p>
            <p><span v-html="km('v')"/> — rýchlosť vlnenia v prostredí</p>
          </div>
          <div class="space-y-1">
            <p><span v-html="km('v_p')"/> — rýchlosť pozorovateľa</p>
            <p><span v-html="km('v_z')"/> — rýchlosť zdroja</p>
          </div>
        </div>
        <div class="mt-5 bg-white rounded-lg p-4 text-sm text-gray-700">
          <p class="font-semibold mb-2 text-blue-800">Znamienkové pravidlo:</p>
          <p class="mb-1">
            V čitateli <span v-html="km('+\\,v_p')"/>: pozorovateľ sa <strong>priblíži</strong> k zdroju
            &nbsp;|&nbsp; <span v-html="km('-\\,v_p')"/>: pozorovateľ sa <strong>vzďaľuje</strong>
          </p>
          <p>
            V menovateli <span v-html="km('-\\,v_z')"/>: zdroj sa <strong>priblíži</strong> k pozorovateľovi
            &nbsp;|&nbsp; <span v-html="km('+\\,v_z')"/>: zdroj sa <strong>vzďaľuje</strong>
          </p>
        </div>
      </div>

      <!-- Example 2: Doppler approaching -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5 mb-4">
        <h4 class="font-bold text-yellow-800 mb-3">Príklad 2: Dopplerov jav — sanitka sa priblíži</h4>
        <p class="text-gray-700 mb-3">
          Sanitka sa pohybuje rýchlosťou 30 m/s k stojacemu pozorovateľovi a vydáva sirénový tón 800 Hz.
          Rýchlosť zvuku je 340 m/s. Akú frekvenciu pozorovateľ počuje?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm">
          <p class="text-gray-600 mb-1">Zadané: <span v-html="km('f_0 = 800\\,\\text{Hz},\\; v_z = 30\\,\\text{m/s},\\; v = 340\\,\\text{m/s},\\; v_p = 0')"/></p>
          <p class="text-gray-600 mb-2">Pozorovateľ stojí, zdroj sa priblíži → <span v-html="km('v_p = 0')"/>, v menovateli <span v-html="km('v - v_z')"/>:</p>
          <div class="my-3 text-center">
            <span v-html="km('f = 800 \\cdot \\dfrac{340}{340 - 30} = 800 \\cdot \\dfrac{340}{310} \\approx 877\\,\\text{Hz}')"/>
          </div>
          <p class="text-emerald-700 font-semibold">Pozorovateľ počuje vyššiu frekvenciu 877 Hz.</p>
        </div>
      </div>

      <!-- Example 3: Doppler receding -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5">
        <h4 class="font-bold text-yellow-800 mb-3">Príklad 3: Dopplerov jav — sanitka sa vzďaľuje</h4>
        <p class="text-gray-700 mb-3">
          Tá istá sanitka (800 Hz, 30 m/s) sa teraz vzďaľuje od pozorovateľa. Akú frekvenciu počuje?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm">
          <p class="text-gray-600 mb-2">Zdroj sa vzďaľuje → v menovateli <span v-html="km('v + v_z')"/>:</p>
          <div class="my-3 text-center">
            <span v-html="km('f = 800 \\cdot \\dfrac{340}{340 + 30} = 800 \\cdot \\dfrac{340}{370} \\approx 735\\,\\text{Hz}')"/>
          </div>
          <p class="text-emerald-700 font-semibold">Vzďaľujúca sa sanitka znie nižšie — 735 Hz.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Interferencia a stojaté vlnenie -->
    <section aria-label="Interferencia a stojaté vlnenie" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">4. Interferencia a stojaté vlnenie</h2>

      <!-- Interferencia -->
      <h3 class="text-xl font-semibold text-gray-800 mb-4">4.1 Interferencia vĺn</h3>
      <p class="text-gray-700 mb-5">
        Interferencia nastáva pri <strong>superpozícii dvoch vlnení rovnakej frekvencie</strong>.
        Výsledná amplitúda závisí od dráhového rozdielu — rozdielu vzdialeností, ktoré obe vlny prešli k danému bodu.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h4 class="font-bold text-emerald-800 mb-3">Konštruktívna interferencia</h4>
          <p class="text-sm text-gray-700 mb-3">Vlny sa <strong>sčítajú</strong> — amplitúda je maximálna.</p>
          <div class="text-center py-2">
            <span v-html="km('\\Delta = n \\cdot \\lambda \\quad (n = 0,\\,1,\\,2,\\,\\ldots)')"/>
          </div>
          <p class="text-sm text-gray-600 mt-3">Dráhový rozdiel je celý násobok vlnovej dĺžky. Vlny sú vo fáze.</p>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 class="font-bold text-red-800 mb-3">Deštruktívna interferencia</h4>
          <p class="text-sm text-gray-700 mb-3">Vlny sa <strong>rušia</strong> — amplitúda je nulová.</p>
          <div class="text-center py-2">
            <span v-html="km('\\Delta = \\left(n + \\tfrac{1}{2}\\right) \\cdot \\lambda')"/>
          </div>
          <p class="text-sm text-gray-600 mt-3">Dráhový rozdiel je polocelý násobok vlnovej dĺžky. Vlny sú v protifáze.</p>
        </div>
      </div>

      <!-- Stojaté vlnenie -->
      <h3 class="text-xl font-semibold text-gray-800 mb-4">4.2 Stojaté vlnenie na strune</h3>
      <p class="text-gray-700 mb-4">
        Stojaté vlnenie vzniká superpozíciou dvoch vĺn rovnakej frekvencie šíriacich sa <strong>v opačných smeroch</strong>
        (vlna a jej odraz). Na strune s obomi pevnými koncami vzniknú <strong>uzly</strong> (nulová amplitúda) a <strong>kmitne</strong> (maximálna amplitúda).
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h4 class="font-bold text-blue-800 mb-4">Vlastné frekvencie struny (obe konce fixované)</h4>
        <div class="text-center py-3">
          <span v-html="km('f_n = n \\cdot \\dfrac{v}{2L} \\qquad (n = 1,\\,2,\\,3,\\,\\ldots)')"/>
        </div>
        <div class="grid md:grid-cols-3 gap-3 mt-5 text-sm text-center">
          <div class="bg-white rounded-lg p-3">
            <p class="font-semibold text-blue-700 mb-1">n = 1 (základný tón)</p>
            <span v-html="km('\\lambda_1 = 2L')"/>
            <p class="text-xs text-gray-500 mt-1">1 kmitňa, 2 uzly</p>
          </div>
          <div class="bg-white rounded-lg p-3">
            <p class="font-semibold text-blue-700 mb-1">n = 2 (1. overtón)</p>
            <span v-html="km('\\lambda_2 = L')"/>
            <p class="text-xs text-gray-500 mt-1">2 kmitne, 3 uzly</p>
          </div>
          <div class="bg-white rounded-lg p-3">
            <p class="font-semibold text-blue-700 mb-1">n = 3 (2. overtón)</p>
            <span v-html="km('\\lambda_3 = \\tfrac{2L}{3}')"/>
            <p class="text-xs text-gray-500 mt-1">3 kmitne, 4 uzly</p>
          </div>
        </div>
      </div>

      <!-- Example 4: Standing wave on guitar string -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5">
        <h4 class="font-bold text-yellow-800 mb-3">Príklad 4: Stojaté vlnenie na gitarovej strune</h4>
        <p class="text-gray-700 mb-3">
          Gitarová struna má dĺžku 65 cm. Rýchlosť vlnenia na strune je 416 m/s. Aká je frekvencia základného tónu?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm">
          <p class="text-gray-600 mb-1">Zadané: <span v-html="km('L = 0{,}65\\,\\text{m},\\; v = 416\\,\\text{m/s},\\; n = 1')"/></p>
          <p class="text-gray-600 mb-2">Vzorec: <span v-html="km('f_1 = \\dfrac{v}{2L}')"/></p>
          <div class="my-3 text-center">
            <span v-html="km('f_1 = \\dfrac{416}{2 \\cdot 0{,}65} = \\dfrac{416}{1{,}3} = 320\\,\\text{Hz}')"/>
          </div>
          <p class="text-emerald-700 font-semibold">Základná frekvencia struny je 320 Hz (tón Es).</p>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie — Mechanické vlnenie</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové vzorce</h3>
          <ul class="text-sm text-gray-600 space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-blue-500 font-bold">▶</span>
              Rýchlosť vlnenia: <span v-html="km('v = \\lambda f')"/>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-blue-500 font-bold">▶</span>
              Vlnová dĺžka: <span v-html="km('\\lambda = vT')"/>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-blue-500 font-bold">▶</span>
              Doppler: <span v-html="km('f = f_0\\,\\dfrac{v \\pm v_p}{v \\mp v_z}')"/>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-blue-500 font-bold">▶</span>
              Konštr. interferencia: <span v-html="km('\\Delta = n\\lambda')"/>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-blue-500 font-bold">▶</span>
              Vlastné frekvencie struny: <span v-html="km('f_n = n\\dfrac{v}{2L}')"/>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Pamätaj si</h3>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>✓ Priečne vlnenie: kmitanie ⊥ šíreniu — možno polarizovať</li>
            <li>✓ Pozdĺžne vlnenie: kmitanie ∥ šíreniu — zvuk</li>
            <li>✓ Doppler: priblíži = vyššia frekvencia, vzďaľuje = nižšia</li>
            <li>✓ Konštruktívna interferencia: <span v-html="km('\\Delta = n\\lambda')"/></li>
            <li>✓ Deštruktívna: <span v-html="km('\\Delta = (n+\\tfrac{1}{2})\\lambda')"/></li>
            <li>✓ Stojaté vlnenie: uzly (nulová výchylka) a kmitne (max. výchylka)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Quiz -->
    <section aria-label="Kvíz — Mechanické vlnenie" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa — Kvíz</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <!-- Progress bar -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-3 text-sm text-gray-500">
          <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="font-semibold text-blue-600">{{ quizScore }} b.</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: (currentQ / quiz.length * 100) + '%' }"
          />
        </div>

        <!-- Question -->
        <div
          data-testid="question"
          class="text-lg font-semibold text-gray-800 mb-6"
          v-html="currentQuestion.question"
        />

        <!-- Options -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            :disabled="selectedAnswer !== null"
            :class="[
              'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium',
              selectedAnswer === null
                ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)"
          >
            <span class="font-bold mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <span v-html="option"/>
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            :class="[
              'rounded-xl p-4 mb-5 text-sm',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <span class="font-bold">
              {{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}
            </span>
            {{ currentQuestion.explanation }}
          </div>
        </Transition>

        <button
          v-if="selectedAnswer !== null"
          type="button"
          data-testid="next-btn"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Dalsia otazka \u2192' : 'Zobrazit vysledok' }}
        </button>
      </div>

      <!-- Result -->
      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="result"
          class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="score" class="text-gray-600 mb-6 text-lg">
            Skore: <strong>{{ quizScore }} / {{ quiz.length }}</strong>
          </p>
          <button
            type="button"
            data-testid="reset-btn"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skusit znova
          </button>
        </div>
      </Transition>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// Quiz data
const quiz = [
  {
    question: 'Co je vlnova dlzka?',
    options: [
      'Cas jedneho kmitu',
      'Vzdialenost dvoch najblizssich bodov kmitajucich v rovnakej faze',
      'Rychlost sirenia vlny',
      'Maximalna vychylka kmitajuceho bodu'
    ],
    correctIndex: 1,
    explanation: 'Vlnova dlzka lambda je vzdialenost medzi dvoma najblizssimi bodmi, ktore sa nachadzaju v rovnakej faze kmitania (napr. dvoma susednymi hrebenamai).'
  },
  {
    question: 'Zvuk s frekvenciou 680 Hz sa siri vo vzduchu rychlostou 340 m/s. Aka je jeho vlnova dlzka?',
    options: [
      '2 m',
      '0,2 m',
      '0,5 m',
      '5 m'
    ],
    correctIndex: 2,
    explanation: 'Plati vzorec lambda = v/f = 340/680 = 0,5 m. Zo zakladneho vztahu v = lambda * f vyjadrime lambda = v/f.'
  },
  {
    question: 'Pri priecnom vlneni kmitaju castice prostredia:',
    options: [
      'Rovnobezne so smerom sirenia vlny',
      'Kolmo na smer sirenia vlny',
      'Spiralovo okolo smeru sirenia',
      'Vobec sa nepohybuju'
    ],
    correctIndex: 1,
    explanation: 'Pri priecnom vlneni kmitaju castice kolmo (perpendicular) na smer sirenia vlny. Typickym prikladom su vlny na strune alebo na vodnej hladine.'
  },
  {
    question: 'Sanitka vydava ton 600 Hz a pohybuje sa smerom k stojacemu pozorovatelovi. Vnimana frekvencia bude:',
    options: [
      'Rovnaka — 600 Hz',
      'Nizsia ako 600 Hz',
      'Vyssia ako 600 Hz',
      'Nulova'
    ],
    correctIndex: 2,
    explanation: 'Ked sa zdroj zvuku priblizi k pozorovatelovi, vlnove dlzky sa pred zdrojom skratia a pozorovatel pocuje vyssiu frekvenciu. Toto je Dopplerov jav.'
  },
  {
    question: 'Kedy nastava konstruktivna interferencia dvoch vln?',
    options: [
      'Ked je drahovy rozdiel rovny polocelemu nasobku vlnovej dlzky',
      'Ked maju vlny rozne frekvencie',
      'Ked je drahovy rozdiel rovny celemu nasobku vlnovej dlzky',
      'Ked sa vlny siri v opacnych smeroch'
    ],
    correctIndex: 2,
    explanation: 'Konstruktivna interferencia nastava, ked drahovy rozdiel Delta = n*lambda (n = 0, 1, 2, ...). Vlny su vo faze a ich amplitudy sa scitavaju.'
  },
  {
    question: 'Na strune dlzky 1 m s rychlostou vlnenia 200 m/s kmita zakladny ton. Aka je jeho frekvencia?',
    options: [
      '50 Hz',
      '100 Hz',
      '200 Hz',
      '400 Hz'
    ],
    correctIndex: 1,
    explanation: 'Pre zakladny ton (n = 1) plati f1 = v/(2L) = 200/(2*1) = 100 Hz. Vlnova dlzka zakladneho tonu je lambda1 = 2L = 2 m.'
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
  return r === 1 ? 'Perfektne!' : r >= 0.7 ? 'Vyborne!' : r >= 0.4 ? 'Oplati sa zopakovať.' : 'Skus znova.'
})

useSeoMeta({
  title: 'Mechanicke vlnenie | Fyzika | NaucSa.to',
  description: 'Komplexny vyklad mechanickeho vlnenia pre gymnazistov: vlnova dlzka, rychlost, typy vlnenia, Dopplerov jav, interferencia a stojate vlnenie s prikladmi a kvizom.'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
