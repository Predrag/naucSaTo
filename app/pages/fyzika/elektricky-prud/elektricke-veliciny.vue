<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/elektricky-prud" class="hover:text-emerald-600 transition-colors">Elektrický prúd</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Elektrické veličiny</span>
    </nav>

    <!-- Header -->
    <div class="bg-yellow-600 text-white rounded-2xl p-8 mb-10">
      <h1 class="text-3xl font-bold mb-2">⚡ Elektrické veličiny</h1>
      <p class="text-yellow-100 text-lg">Základné pojmy elektrickej teórie: náboj, prúd, napätie a odpor</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg leading-relaxed mb-10">
      Elektrické veličiny tvoria základ celej elektrotechniky. Pochopenie pojmov ako elektrický náboj, prúd,
      napätie a odpor je nevyhnutné pre štúdium elektrických obvodov, elektroniky aj moderných technológií.
      Táto stránka ti vysvetlí tieto pojmy prehľadne a s príkladmi.
    </p>

    <!-- ==================== SEKCIA 1 ==================== -->
    <section aria-label="Elektrický náboj" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-500 pb-2">
        1. Elektrický náboj
      </h2>

      <p class="text-gray-700 leading-relaxed mb-4">
        <strong>Elektrický náboj</strong> (symbol <em>Q</em>) je základná fyzikálna veličina, ktorá opisuje
        množstvo elektriny. Náboj môže byť kladný (protóny) alebo záporný (elektróny).
        Jednotkou náboja je <strong>coulomb (C)</strong>.
      </p>

      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-800 mb-3">Elementárny náboj</h3>
        <p class="text-gray-700 mb-3">
          Najmenší voľný náboj v prírode je náboj elektrónu (záporný) alebo protónu (kladný):
        </p>
        <div class="text-center my-3" v-html="km('e = 1{,}6 \\cdot 10^{-19} \\, \\mathrm{C}')"/>
        <p class="text-gray-600 text-sm">
          Každý nabitý objekt má náboj, ktorý je celočíselným násobkom elementárneho náboja — táto vlastnosť
          sa nazýva <strong>kvantovanie náboja</strong>.
        </p>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-800 mb-2">Vzťah celkového náboja a počtu elektrónov</h3>
        <div class="text-center my-3" v-html="km('Q = n \\cdot e \\quad \\Rightarrow \\quad n = \\frac{Q}{e}')"/>
        <p class="text-gray-600 text-sm">
          kde <span v-html="km('n')"/> je počet elementárnych nábojov (elektrónov alebo protónov).
        </p>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 class="font-semibold text-green-800 mb-2">Príklad 1: Počet elektrónov</h3>
        <p class="text-gray-700 mb-3">
          Koľko elektrónov bolo odobraných z telesa, ak získalo náboj
          <span v-html="km('Q = 4{,}8 \\cdot 10^{-6} \\, \\mathrm{C}')"/>?
        </p>
        <div class="space-y-2 mt-2 text-sm">
          <div v-html="km('n = \\frac{Q}{e} = \\frac{4{,}8 \\cdot 10^{-6} \\, \\mathrm{C}}{1{,}6 \\cdot 10^{-19} \\, \\mathrm{C}}')"/>
          <div class="font-semibold" v-html="km('n = 3 \\cdot 10^{13}')"/>
        </div>
        <p class="text-gray-600 text-sm mt-3">
          Telesu bolo odobraných <strong>30 biliónov elektrónov</strong>.
        </p>
      </div>
    </section>

    <!-- ==================== SEKCIA 2 ==================== -->
    <section aria-label="Elektrický prúd, napätie a odpor" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-500 pb-2">
        2. Prúd, napätie a odpor
      </h2>

      <!-- Kartičky veličín -->
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="text-3xl mb-2">⚡</div>
          <h3 class="font-bold text-gray-800 mb-1">Elektrický prúd</h3>
          <p class="text-gray-600 text-sm mb-3">
            Usporiadaný pohyb nábojov — množstvo náboja pretekaného za jednotku času.
          </p>
          <div class="text-center bg-yellow-50 rounded-lg p-2" v-html="km('I = \\dfrac{Q}{t}')"/>
          <p class="text-center text-xs text-gray-500 mt-2">Jednotka: <strong>ampér (A)</strong></p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="text-3xl mb-2">🔋</div>
          <h3 class="font-bold text-gray-800 mb-1">Elektrické napätie</h3>
          <p class="text-gray-600 text-sm mb-3">
            Práca vykonaná na presun jednotkového náboja medzi dvoma bodmi obvodu.
          </p>
          <div class="text-center bg-yellow-50 rounded-lg p-2" v-html="km('U = \\dfrac{W}{Q}')"/>
          <p class="text-center text-xs text-gray-500 mt-2">Jednotka: <strong>volt (V)</strong></p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="text-3xl mb-2">🔌</div>
          <h3 class="font-bold text-gray-800 mb-1">Elektrický odpor</h3>
          <p class="text-gray-600 text-sm mb-3">
            Miera, ako veľmi látka bráni prechodu elektrického prúdu.
          </p>
          <div class="text-center bg-yellow-50 rounded-lg p-2" v-html="km('R = \\dfrac{U}{I}')"/>
          <p class="text-center text-xs text-gray-500 mt-2">Jednotka: <strong>ohm (Ω)</strong></p>
        </div>
      </div>

      <!-- Ohmov zákon -->
      <div class="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-800 mb-2">Ohmov zákon</h3>
        <p class="text-gray-700 mb-3">
          Pre kovové vodiče pri konštantnej teplote je odpor konštantný, takže prúd je
          priamo úmerný napätiu. Tento vzťah sa nazýva Ohmov zákon:
        </p>
        <div class="text-center my-3" v-html="km('U = R \\cdot I')"/>
        <p class="text-gray-600 text-sm">
          Vodiče, ktoré Ohmov zákon spĺňajú, nazývame <strong>ohmické vodiče</strong>.
        </p>
      </div>

      <!-- Elektromotorická sila -->
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-800 mb-2">Elektromotorická sila (EMN)</h3>
        <p class="text-gray-700 mb-3">
          Elektromotorická sila <span v-html="km('\\varepsilon')"/> (skrátene EMN) vyjadruje schopnosť
          zdroja konať prácu na presun náboja v obvode. Udáva sa vo voltoch a charakterizuje napr. batériu
          alebo generátor.
        </p>
        <div class="text-center my-3" v-html="km('\\varepsilon = \\frac{W_{\\mathrm{zdroj}}}{Q}')"/>
        <p class="text-gray-600 text-sm">
          Pri reálnom zdroji s vnútorným odporom
          <span v-html="km('R_i')"/> platí:
          <span class="inline-block ml-2" v-html="km('U = \\varepsilon - I \\cdot R_i')"/>
        </p>
      </div>

      <!-- Príklady -->
      <div class="space-y-4">
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 class="font-semibold text-green-800 mb-2">Príklad 2: Výpočet odporu</h3>
          <p class="text-gray-700 mb-3">
            Cez rezistor prechádza prúd
            <span v-html="km('I = 0{,}5 \\, \\mathrm{A}')"/>
            pri napätí
            <span v-html="km('U = 12 \\, \\mathrm{V}')"/>.
            Aký je jeho odpor?
          </p>
          <div class="space-y-2 text-sm">
            <div v-html="km('R = \\frac{U}{I} = \\frac{12 \\, \\mathrm{V}}{0{,}5 \\, \\mathrm{A}}')"/>
            <div class="font-semibold" v-html="km('R = 24 \\, \\Omega')"/>
          </div>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 class="font-semibold text-green-800 mb-2">Príklad 3: Práca elektrického prúdu</h3>
          <p class="text-gray-700 mb-3">
            Aká práca sa vykoná pri presune náboja
            <span v-html="km('Q = 10 \\, \\mathrm{C}')"/>
            cez napätie
            <span v-html="km('U = 9 \\, \\mathrm{V}')"/>?
          </p>
          <div class="space-y-2 text-sm">
            <div v-html="km('W = U \\cdot Q = 9 \\, \\mathrm{V} \\cdot 10 \\, \\mathrm{C}')"/>
            <div class="font-semibold" v-html="km('W = 90 \\, \\mathrm{J}')"/>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 3 ==================== -->
    <section aria-label="Vodiče, izolanty a polovodiče" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-500 pb-2">
        3. Vodiče, izolanty a polovodiče
      </h2>

      <p class="text-gray-700 leading-relaxed mb-5">
        Látky sa podľa schopnosti viesť elektrický prúd delia do troch základných skupín.
        Táto vlastnosť závisí od dostupnosti voľných nosičov elektrického náboja.
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div class="bg-green-50 border border-green-300 rounded-xl p-4">
          <h3 class="font-bold text-green-800 mb-2">Vodiče</h3>
          <p class="text-gray-700 text-sm mb-2">Látky s veľkým počtom voľných nosičov náboja.</p>
          <ul class="text-sm text-gray-600 space-y-1 mb-3">
            <li>• Kovy (Cu, Al, Fe …)</li>
            <li>• Elektrolyty (roztoky solí)</li>
            <li>• Ionizované plyny</li>
            <li>• Grafit</li>
          </ul>
          <p class="text-xs text-green-700 font-medium">Odpor: nízky (mΩ – Ω)</p>
        </div>
        <div class="bg-orange-50 border border-orange-300 rounded-xl p-4">
          <h3 class="font-bold text-orange-800 mb-2">Izolanty</h3>
          <p class="text-gray-700 text-sm mb-2">Látky bez voľných nosičov — prúd nevedú.</p>
          <ul class="text-sm text-gray-600 space-y-1 mb-3">
            <li>• Sklo, keramika</li>
            <li>• Plasty (guma, PVC)</li>
            <li>• Suchý vzduch</li>
            <li>• Destilovaná voda</li>
          </ul>
          <p class="text-xs text-orange-700 font-medium">Odpor: veľmi vysoký (MΩ – TΩ)</p>
        </div>
        <div class="bg-blue-50 border border-blue-300 rounded-xl p-4">
          <h3 class="font-bold text-blue-800 mb-2">Polovodiče</h3>
          <p class="text-gray-700 text-sm mb-2">Vlastnosti medzi vodičom a izolantom — závisia od teploty a prísad.</p>
          <ul class="text-sm text-gray-600 space-y-1 mb-3">
            <li>• Kremík (Si)</li>
            <li>• Germánium (Ge)</li>
            <li>• Arzénid gália (GaAs)</li>
          </ul>
          <p class="text-xs text-blue-700 font-medium">Základ modernej elektroniky</p>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Prúd v rôznych prostrediach</h3>

      <div class="space-y-3 mb-6">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
          <span class="text-2xl shrink-0 mt-0.5">🔩</span>
          <div>
            <h4 class="font-semibold text-gray-800">Kovy</h4>
            <p class="text-gray-600 text-sm">
              Prúd nesú <strong>voľné elektróny</strong> — elektrónový plyn. Pri zvyšovaní teploty
              sa odpor zvyšuje, pretože atómy viac kmitajú a bránia pohybu elektrónov.
            </p>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
          <span class="text-2xl shrink-0 mt-0.5">💧</span>
          <div>
            <h4 class="font-semibold text-gray-800">Elektrolyty (roztoky)</h4>
            <p class="text-gray-600 text-sm">
              Prúd nesú <strong>ióny</strong> — kladné aj záporné. Príklad: roztok NaCl obsahuje
              ióny Na<sup>+</sup> a Cl<sup>−</sup>. Elektrolýza umožňuje galvanické pokovovanie.
            </p>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
          <span class="text-2xl shrink-0 mt-0.5">⚡</span>
          <div>
            <h4 class="font-semibold text-gray-800">Plyny</h4>
            <p class="text-gray-600 text-sm">
              Za normálnych podmienok sú plyny izolanty. Pri <strong>ionizácii</strong> (vysoké
              napätie, UV žiarenie) vznikajú ióny a elektróny — elektrický výboj. Príklady: blesk,
              žiarivky, neonové reklamy.
            </p>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
          <span class="text-2xl shrink-0 mt-0.5">🌌</span>
          <div>
            <h4 class="font-semibold text-gray-800">Vákuum</h4>
            <p class="text-gray-600 text-sm">
              Prúd môže prechádzať vákuom len ako <strong>tok elektrónov</strong> (katódové lúče).
              Využívalo sa v elektrónových rúrkach, röntgenových zariadeniach a CRT obrazovkách.
            </p>
          </div>
        </div>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 class="font-semibold text-green-800 mb-2">Príklad 4: Prúd a čas</h3>
        <p class="text-gray-700 mb-3">
          Za čas <span v-html="km('t = 2 \\, \\mathrm{min} = 120 \\, \\mathrm{s}')"/>
          preteká cez vodič náboj <span v-html="km('Q = 60 \\, \\mathrm{C}')"/>.
          Aký elektrický prúd vodičom prechádza?
        </p>
        <div class="space-y-2 text-sm">
          <div v-html="km('I = \\frac{Q}{t} = \\frac{60 \\, \\mathrm{C}}{120 \\, \\mathrm{s}}')"/>
          <div class="font-semibold" v-html="km('I = 0{,}5 \\, \\mathrm{A}')"/>
        </div>
        <p class="text-gray-600 text-sm mt-3">
          Vodičom prechádza prúd <strong>0,5 A (500 mA)</strong>.
        </p>
      </div>
    </section>

    <!-- ==================== ZHRNUTIE ==================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="overflow-x-auto mb-5">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-yellow-100">
              <th scope="col" class="text-left p-3 border border-gray-300 font-semibold">Veličina</th>
              <th scope="col" class="text-left p-3 border border-gray-300 font-semibold">Symbol</th>
              <th scope="col" class="text-left p-3 border border-gray-300 font-semibold">Vzorec</th>
              <th scope="col" class="text-left p-3 border border-gray-300 font-semibold">Jednotka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-gray-300">Elektrický náboj</td>
              <td class="p-3 border border-gray-300" v-html="km('Q')"/>
              <td class="p-3 border border-gray-300" v-html="km('Q = n \\cdot e')"/>
              <td class="p-3 border border-gray-300">coulomb (C)</td>
            </tr>
            <tr class="bg-white">
              <td class="p-3 border border-gray-300">Elektrický prúd</td>
              <td class="p-3 border border-gray-300" v-html="km('I')"/>
              <td class="p-3 border border-gray-300" v-html="km('I = Q/t')"/>
              <td class="p-3 border border-gray-300">ampér (A)</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300">Elektrické napätie</td>
              <td class="p-3 border border-gray-300" v-html="km('U')"/>
              <td class="p-3 border border-gray-300" v-html="km('U = W/Q')"/>
              <td class="p-3 border border-gray-300">volt (V)</td>
            </tr>
            <tr class="bg-white">
              <td class="p-3 border border-gray-300">Elektrický odpor</td>
              <td class="p-3 border border-gray-300" v-html="km('R')"/>
              <td class="p-3 border border-gray-300" v-html="km('R = U/I')"/>
              <td class="p-3 border border-gray-300">ohm (Ω)</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300">Elektromotorická sila</td>
              <td class="p-3 border border-gray-300" v-html="km('\\varepsilon')"/>
              <td class="p-3 border border-gray-300" v-html="km('\\varepsilon = W_{\\mathrm{zdroj}}/Q')"/>
              <td class="p-3 border border-gray-300">volt (V)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p class="font-semibold mb-2">Kľúčové hodnoty:</p>
          <ul class="space-y-1">
            <li>• Elementárny náboj: <span v-html="km('e = 1{,}6 \\cdot 10^{-19} \\, \\mathrm{C}')"/></li>
            <li>• Ohmov zákon: <span v-html="km('U = R \\cdot I')"/></li>
            <li>• Práca prúdu: <span v-html="km('W = U \\cdot Q = U \\cdot I \\cdot t')"/></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-2">Nosiče prúdu:</p>
          <ul class="space-y-1">
            <li>• Kovy — voľné <strong>elektróny</strong></li>
            <li>• Elektrolyty — <strong>ióny</strong></li>
            <li>• Plyny (výboj) — <strong>ióny + elektróny</strong></li>
            <li>• Vákuum — <strong>elektróny</strong></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ==================== KVÍZ ==================== -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div class="mb-4 flex items-center gap-3">
          <span data-testid="quiz-progress" class="text-sm text-gray-500 shrink-0">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <div class="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              class="h-full bg-yellow-500 rounded-full transition-all duration-300"
              :style="{ width: ((currentQ + 1) / quiz.length * 100) + '%' }"
            />
          </div>
          <span class="text-sm font-medium text-yellow-700 shrink-0">{{ quizScore }} / {{ quiz.length }}</span>
        </div>

        <!-- Question card -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p
            data-testid="question"
            class="text-lg font-medium text-gray-800 mb-5"
            v-html="currentQuestion.question"
          />

          <div class="space-y-3">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              :class="[
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm',
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer'
                  : i === currentQuestion.correctIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : i === selectedAnswer
                      ? 'border-red-400 bg-red-50 text-red-800'
                      : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
              ]"
              @click="selectAnswer(i)"
              v-html="option"
            />
          </div>

          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              :class="[
                'mt-5 p-4 rounded-xl text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              ]"
            >
              <p class="font-semibold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
              </p>
              <p v-html="currentQuestion.explanation"/>
            </div>
          </Transition>

          <div v-if="selectedAnswer !== null" class="mt-5 flex justify-end">
            <button
              data-testid="next-btn"
              type="button"
              class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </div>
      </div>

      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="result"
          class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ scoreMessage }}</h3>
          <p data-testid="score" class="text-gray-500 mb-6">
            Skóre: <strong class="text-yellow-700">{{ quizScore }} / {{ quiz.length }}</strong>
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
import katex from 'katex'

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ---------------------------------------------------------------------------
// Kvíz
// ---------------------------------------------------------------------------
const quiz = [
  {
    question: 'Aká je jednotka elektrického náboja?',
    options: ['Ampér (A)', 'Coulomb (C)', 'Volt (V)', 'Ohm (Ω)'],
    correctIndex: 1,
    explanation:
      'Elektrický náboj sa meria v <strong>coulomboch (C)</strong>. 1 coulomb je množstvo náboja, ktoré prenesie prúd 1 A za 1 sekundu.'
  },
  {
    question: 'Čo vyjadruje vzorec ' + km('I = Q/t') + '?',
    options: ['Elektrické napätie', 'Elektrický odpor', 'Elektrický prúd', 'Elektrickú prácu'],
    correctIndex: 2,
    explanation:
      'Vzorec ' +
      km('I = Q/t') +
      ' definuje <strong>elektrický prúd</strong> ako množstvo náboja pretečeného za jednotku času.'
  },
  {
    question:
      'Vodičom prechádza prúd ' +
      km('I = 2 \\, \\mathrm{A}') +
      ' po dobu ' +
      km('t = 30 \\, \\mathrm{s}') +
      '. Aký náboj ním pretečie?',
    options: [
      km('Q = 15 \\, \\mathrm{C}'),
      km('Q = 32 \\, \\mathrm{C}'),
      km('Q = 60 \\, \\mathrm{C}'),
      km('Q = 0{,}067 \\, \\mathrm{C}')
    ],
    correctIndex: 2,
    explanation:
      km('Q = I \\cdot t = 2 \\, \\mathrm{A} \\cdot 30 \\, \\mathrm{s} = 60 \\, \\mathrm{C}')
  },
  {
    question:
      'Rezistorom s odporom ' +
      km('R = 10 \\, \\Omega') +
      ' prechádza prúd ' +
      km('I = 3 \\, \\mathrm{A}') +
      '. Aké je napätie na ňom?',
    options: [
      km('U = 0{,}3 \\, \\mathrm{V}'),
      km('U = 13 \\, \\mathrm{V}'),
      km('U = 30 \\, \\mathrm{V}'),
      km('U = 7 \\, \\mathrm{V}')
    ],
    correctIndex: 2,
    explanation:
      km('U = R \\cdot I = 10 \\, \\Omega \\cdot 3 \\, \\mathrm{A} = 30 \\, \\mathrm{V}') +
      ' — priamy dôsledok Ohmovho zákona.'
  },
  {
    question: 'Čo sú nosiče elektrického prúdu v kovových vodičoch?',
    options: ['Kladné ióny', 'Protóny', 'Voľné elektróny', 'Molekuly kovu'],
    correctIndex: 2,
    explanation:
      'V kovoch sú nosiče prúdu <strong>voľné elektróny</strong>. Tieto elektróny sa môžu pohybovať kryštálovou mriežkou a prenášať elektrický náboj.'
  },
  {
    question: 'Čo je elektrolyt?',
    options: [
      'Kovový vodič s nízkym odporom',
      'Kvapalina alebo roztok, v ktorom vedú prúd ióny',
      'Polovodič dopovaný prímesami',
      'Izolant odolný voči vysokému napätiu'
    ],
    correctIndex: 1,
    explanation:
      'Elektrolyt je kvapalina alebo roztok s voľnými <strong>iónmi</strong> (kladnými aj zápornými). Príkladom je soľná voda, kyseliny alebo zásady.'
  },
  {
    question:
      'Pri napätí ' +
      km('U = 6 \\, \\mathrm{V}') +
      ' bol presunutý náboj ' +
      km('Q = 3 \\, \\mathrm{C}') +
      '. Aká práca bola vykonaná?',
    options: [
      km('W = 2 \\, \\mathrm{J}'),
      km('W = 9 \\, \\mathrm{J}'),
      km('W = 18 \\, \\mathrm{J}'),
      km('W = 0{,}5 \\, \\mathrm{J}')
    ],
    correctIndex: 2,
    explanation:
      km('W = U \\cdot Q = 6 \\, \\mathrm{V} \\cdot 3 \\, \\mathrm{C} = 18 \\, \\mathrm{J}')
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
