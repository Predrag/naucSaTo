<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/elektricky-prud" class="hover:text-emerald-600 transition-colors">Elektrický prúd</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Elektrická práca a výkon</span>
    </nav>

    <!-- Header -->
    <div class="bg-red-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
      <div class="flex items-center gap-4 mb-2">
        <span class="text-5xl">💡</span>
        <h1 class="text-3xl font-extrabold">Elektrická práca a výkon</h1>
      </div>
      <p class="text-red-100 text-lg mt-2">
        Energia, teplo a ekonomika elektrických obvodov – od vzorca po faktúru za elektrinu.
      </p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg leading-relaxed mb-10">
      Elektrický prúd vykonáva prácu – premieňa elektrickú energiu na teplo, svetlo alebo mechanický pohyb.
      Pochopenie elektrickej práce a výkonu je základom pre návrh obvodov, výber spotrebičov
      aj orientáciu v účtoch za elektrinu.
    </p>

    <!-- ───── Sekcia 1: Elektrická práca ───── -->
    <section aria-label="Elektrická práca" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-200 pb-2">
        1. Elektrická práca
      </h2>

      <p class="text-gray-700 leading-relaxed mb-6">
        Keď prúd <span v-html="km('I')"/> preteká obvodom s napätím
        <span v-html="km('U')"/> po dobu <span v-html="km('t')"/>,
        elektrický zdroj vykoná prácu:
      </p>

      <!-- Hlavný vzorec -->
      <div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-6 text-center">
        <p class="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">Elektrická práca</p>
        <div class="text-2xl" v-html="kmb('W = U \\cdot I \\cdot t')"/>
        <p class="text-gray-500 text-sm mt-3">
          <span v-html="km('W')"/> – práca [J] &nbsp;|&nbsp;
          <span v-html="km('U')"/> – napätie [V] &nbsp;|&nbsp;
          <span v-html="km('I')"/> – prúd [A] &nbsp;|&nbsp;
          <span v-html="km('t')"/> – čas [s]
        </p>
      </div>

      <!-- Kilowatthodina -->
      <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-amber-800 text-lg mb-2">Kilowatthodina (kWh)</h3>
        <p class="text-gray-700 mb-3">
          V praxi sa elektrická energia meria v <strong>kilowatthodinách</strong>. Je to práca
          spotrebovaná zariadením s výkonom 1 kW počas 1 hodiny.
        </p>
        <div class="text-center" v-html="kmb('1\\,\\text{kWh} = 1000\\,\\text{W} \\cdot 3600\\,\\text{s} = 3{,}6 \\cdot 10^6\\,\\text{J}')"/>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-2">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
          Príklad 1 – Práca vykonaná žiarovkou
        </h3>
        <p class="text-gray-700 mb-4">
          Žiarovka s napätím <span v-html="km('U = 230\\,\\text{V}')"/>
          a prúdom <span v-html="km('I = 0{,}43\\,\\text{A}')"/>
          svieti 2 hodiny. Akú elektrickú prácu vykoná?
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="kmb('t = 2\\,\\text{h} = 2 \\cdot 3600\\,\\text{s} = 7200\\,\\text{s}')"/>
          <div v-html="kmb('W = U \\cdot I \\cdot t = 230 \\cdot 0{,}43 \\cdot 7200')"/>
          <div v-html="kmb('W = 712\\,080\\,\\text{J} \\approx 712\\,\\text{kJ} \\approx 0{,}198\\,\\text{kWh}')"/>
        </div>
      </div>
    </section>

    <!-- ───── Sekcia 2: Elektrický výkon ───── -->
    <section aria-label="Elektrický výkon" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-200 pb-2">
        2. Elektrický výkon
      </h2>

      <p class="text-gray-700 leading-relaxed mb-6">
        Elektrický <strong>výkon</strong> udáva, ako rýchlo zariadenie spotrebúva elektrickú energiu –
        koľko práce vykoná za jednu sekundu. Odvodením z Ohmovho zákona
        (<span v-html="km('U = I \\cdot R')"/>) dostaneme tri ekvivalentné vzorce:
      </p>

      <!-- Vzorce výkonu -->
      <div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-6">
        <p class="text-sm font-semibold text-red-700 uppercase tracking-wide mb-4 text-center">Elektrický výkon</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div v-html="kmb('P = U \\cdot I')"/>
            <p class="text-xs text-gray-500 mt-2">základný vzorec</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div v-html="kmb('P = I^2 \\cdot R')"/>
            <p class="text-xs text-gray-500 mt-2">cez prúd a odpor</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <div v-html="kmb('P = \\dfrac{U^2}{R}')"/>
            <p class="text-xs text-gray-500 mt-2">cez napätie a odpor</p>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-4">Jednotka: 1 W = 1 J/s (watt)</p>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
          Príklad 2 – Výkon elektrickej rúry
        </h3>
        <p class="text-gray-700 mb-4">
          Elektrická rúra má odpor <span v-html="km('R = 26{,}45\\,\\Omega')"/>
          a je zapojená na napätie <span v-html="km('U = 230\\,\\text{V}')"/>.
          Aký je jej výkon?
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="kmb('P = \\dfrac{U^2}{R} = \\dfrac{230^2}{26{,}45} = \\dfrac{52\\,900}{26{,}45}')"/>
          <div v-html="kmb('P \\approx 2000\\,\\text{W} = 2\\,\\text{kW}')"/>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-2">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
          Príklad 3 – Prúd práčkou
        </h3>
        <p class="text-gray-700 mb-4">
          Práčka má výkon <span v-html="km('P = 2200\\,\\text{W}')"/>
          a je zapojená na napätie <span v-html="km('U = 230\\,\\text{V}')"/>.
          Aký prúd ňou preteká?
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="kmb('P = U \\cdot I \\quad \\Rightarrow \\quad I = \\dfrac{P}{U}')"/>
          <div v-html="kmb('I = \\dfrac{2200}{230} \\approx 9{,}6\\,\\text{A}')"/>
        </div>
      </div>
    </section>

    <!-- ───── Sekcia 3: Joulov zákon a tepelné účinky ───── -->
    <section aria-label="Joulov zákon a tepelné účinky prúdu" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-200 pb-2">
        3. Joulov zákon a tepelné účinky prúdu
      </h2>

      <p class="text-gray-700 leading-relaxed mb-6">
        Priechodom prúdu cez odporový vodič sa elektrická energia premieňa na teplo.
        Tento jav opisuje <strong>Joulov zákon</strong>, pomenovaný po anglickom fyzikovi
        Jamesovi Prescottovi Joulovi (1818 – 1889).
      </p>

      <!-- Joulov zákon -->
      <div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-6 text-center">
        <p class="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">Joulov zákon</p>
        <div class="text-2xl" v-html="kmb('Q = I^2 \\cdot R \\cdot t')"/>
        <p class="text-gray-500 text-sm mt-3">
          <span v-html="km('Q')"/> – teplo [J] &nbsp;|&nbsp;
          <span v-html="km('I')"/> – prúd [A] &nbsp;|&nbsp;
          <span v-html="km('R')"/> – odpor [Ω] &nbsp;|&nbsp;
          <span v-html="km('t')"/> – čas [s]
        </p>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
          Príklad 4 – Teplo na odporovom drôte
        </h3>
        <p class="text-gray-700 mb-4">
          Odporovým drôtom s odporom <span v-html="km('R = 10\\,\\Omega')"/>
          prechádza prúd <span v-html="km('I = 3\\,\\text{A}')"/>
          po dobu <span v-html="km('t = 5\\,\\text{min} = 300\\,\\text{s}')"/>.
          Koľko tepla sa vyvinulo?
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="kmb('Q = I^2 \\cdot R \\cdot t = 3^2 \\cdot 10 \\cdot 300')"/>
          <div v-html="kmb('Q = 9 \\cdot 10 \\cdot 300 = 27\\,000\\,\\text{J} = 27\\,\\text{kJ}')"/>
        </div>
      </div>

      <!-- Aplikácie -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h3 class="font-bold text-orange-800 text-base mb-2">Elektrické vykurovanie</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Tepelný účinok prúdu využívame v elektrických sporákoch, kalorífery,
            ohrievačoch vody (bojleroch) a infražiaričoch. Odporový drôt (nikielín, kantál)
            premieňa elektrickú energiu na teplo s účinnosťou blízkou 100 %.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-base mb-2">Istič (poistka)</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Istič chráni obvod pred nebezpečne vysokým prúdom. Ak prúd prekročí menovitú
            hodnotu (napr. 16 A), bimetalový pásik sa zahrieva a obvod preruší.
            Staršie poistky používali tavný drôt, ktorý pri nadprúde zhorel.
          </p>
        </div>
      </div>

      <!-- Účinnosť -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-2">
        <h3 class="font-bold text-green-800 text-lg mb-3">Účinnosť elektrického spotrebiča</h3>
        <p class="text-gray-700 mb-4">
          Nie všetka príkonová energia sa premení na úžitočnú prácu (časť sa stratí napr. ako odpadové teplo).
          Účinnosť <span v-html="km('\\eta')"/> vyjadruje, aký podiel príkonu je skutočne užitočný:
        </p>
        <div class="text-center" v-html="kmb('\\eta = \\dfrac{P_{\\text{užitočný}}}{P_{\\text{príkon}}} \\cdot 100\\,\\%')"/>
        <p class="text-gray-600 text-sm mt-3 text-center">
          Príklad: elektromotor s príkonom 500 W a výstupným výkonom 400 W má
          <span v-html="km('\\eta = \\frac{400}{500} \\cdot 100\\,\\% = 80\\,\\%')"/>
        </p>
      </div>
    </section>

    <!-- ───── Sekcia 4: Tarif elektriny ───── -->
    <section aria-label="Tarif elektriny a spotreba domácnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-200 pb-2">
        4. Tarif elektriny a spotreba v domácnosti
      </h2>

      <p class="text-gray-700 leading-relaxed mb-6">
        Elektrickú energiu platíme podľa spotreby v <strong>kilowatthodinách</strong>, ktorú
        zaznamenáva elektromer. Cena závisí od tarify (distribučnej sadzby) a zvoleného dodávateľa.
        Typická cena elektriny na Slovensku je okolo <strong>0,20 – 0,30 €/kWh</strong>.
      </p>

      <!-- Tabuľka spotreby -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
          <thead class="bg-red-600 text-white">
            <tr>
              <th scope="col" class="px-4 py-3 text-left">Spotrebič</th>
              <th scope="col" class="px-4 py-3 text-center">Príkon [W]</th>
              <th scope="col" class="px-4 py-3 text-center">Denná prevádzka [h]</th>
              <th scope="col" class="px-4 py-3 text-center">Spotreba za mesiac [kWh]</th>
            </tr>
          </thead>
          <tbody>
            <tr
v-for="(row, idx) in spotrebice" :key="row.nazov"
                :class="['border-b border-gray-100 hover:bg-red-50 transition-colors', idx % 2 === 1 ? 'bg-gray-50' : 'bg-white']">
              <td class="px-4 py-3 font-medium text-gray-800">{{ row.nazov }}</td>
              <td class="px-4 py-3 text-center text-gray-700">{{ row.prikon }}</td>
              <td class="px-4 py-3 text-center text-gray-700">{{ row.hodiny }}</td>
              <td class="px-4 py-3 text-center text-gray-700">{{ row.mesiac }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Príklad 5 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-2">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">
          Príklad 5 – Mesačné náklady na ohrev vody
        </h3>
        <p class="text-gray-700 mb-4">
          Elektrický bojler s výkonom <span v-html="km('P = 2\\,\\text{kW}')"/>
          ohreje vodu za 1,5 hodiny denne. Cena elektriny je 0,25 €/kWh.
          Aké sú mesačné náklady (30 dní)?
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="kmb('W_{\\text{deň}} = P \\cdot t = 2\\,\\text{kW} \\cdot 1{,}5\\,\\text{h} = 3\\,\\text{kWh}')"/>
          <div v-html="kmb('W_{\\text{mesiac}} = 3\\,\\text{kWh} \\cdot 30 = 90\\,\\text{kWh}')"/>
          <div v-html="kmb('\\text{Náklady} = 90\\,\\text{kWh} \\cdot 0{,}25\\,\\tfrac{\\text{€}}{\\text{kWh}} = 22{,}50\\,\\text{€}')"/>
        </div>
      </div>
    </section>

    <!-- ───── Zhrnutie ───── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie – kľúčové vzorce a pojmy</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Elektrická práca</p>
          <div v-html="kmb('W = U \\cdot I \\cdot t \\quad [\\text{J}]')"/>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Elektrický výkon</p>
          <div v-html="kmb('P = UI = I^2 R = \\dfrac{U^2}{R} \\quad [\\text{W}]')"/>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Joulov zákon</p>
          <div v-html="kmb('Q = I^2 \\cdot R \\cdot t \\quad [\\text{J}]')"/>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Kilowatthodina</p>
          <div v-html="kmb('1\\,\\text{kWh} = 3{,}6 \\cdot 10^6\\,\\text{J}')"/>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Účinnosť</p>
          <div v-html="kmb('\\eta = \\dfrac{P_{\\text{užitočný}}}{P_{\\text{príkon}}} \\cdot 100\\,\\%')"/>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="font-semibold text-red-700 text-sm mb-2">Spotreba v kWh</p>
          <div v-html="kmb('W\\,[\\text{kWh}] = P\\,[\\text{kW}] \\cdot t\\,[\\text{h}]')"/>
        </div>
      </div>
    </div>

    <!-- ───── Kvíz ───── -->
    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Kvíz – Elektrická práca a výkon</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div class="flex items-center justify-between mb-2">
          <p data-testid="quiz-progress" class="text-sm text-gray-500">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </p>
          <p class="text-sm text-gray-500">Skóre: {{ quizScore }}</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-red-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: (currentQ / quiz.length * 100) + '%' }"
          />
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="currentQ">
            <!-- Otázka -->
            <p
              data-testid="question"
              class="text-lg font-medium text-gray-800 mb-5 leading-relaxed"
              v-html="currentQuestion.question"
            />

            <!-- Možnosti -->
            <div class="space-y-3 mb-6">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="'option-' + i"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150',
                  selectedAnswer === null
                    ? 'border-gray-200 hover:border-red-400 hover:bg-red-50 cursor-pointer'
                    : i === currentQuestion.correctIndex
                      ? 'border-green-500 bg-green-50 text-green-800 font-medium'
                      : i === selectedAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-100 text-gray-400 cursor-not-allowed'
                ]"
                @click="selectAnswer(i)"
                v-html="option"
              />
            </div>

            <!-- Spätná väzba -->
            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="feedback"
                :class="[
                  'rounded-xl p-4 mb-5 border',
                  selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-green-50 border-green-300 text-green-800'
                    : 'bg-red-50 border-red-300 text-red-800'
                ]"
              >
                <p class="font-semibold mb-1">
                  {{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}
                </p>
                <p class="text-sm leading-relaxed" v-html="currentQuestion.explanation"/>
              </div>
            </Transition>

            <!-- Ďalej -->
            <button
              v-if="selectedAnswer !== null"
              type="button"
              data-testid="next-btn"
              class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </Transition>
      </div>

      <!-- Výsledok -->
      <div v-else data-testid="result" class="text-center py-8">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
        <p data-testid="score" class="text-gray-500 text-lg mb-8">
          Správne odpovede: {{ quizScore }} / {{ quiz.length }}
        </p>
        <button
          type="button"
          data-testid="reset-btn"
          class="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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

// KaTeX helpers
function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}
function kmb(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html', displayMode: true })
}

// Tabuľka spotrebičov
const spotrebice = [
  { nazov: 'LED žiarovka', prikon: 9, hodiny: 5, mesiac: '1,4' },
  { nazov: 'Televízor', prikon: 150, hodiny: 4, mesiac: '18' },
  { nazov: 'Chladnička', prikon: 150, hodiny: 24, mesiac: '108' },
  { nazov: 'Práčka', prikon: 2200, hodiny: 1, mesiac: '66' },
  { nazov: 'Elektrická rúra', prikon: 2000, hodiny: 1.5, mesiac: '90' },
  { nazov: 'Elektrický bojler', prikon: 2000, hodiny: 1.5, mesiac: '90' },
]

// ───── Kvíz ─────
const quiz = [
  {
    question: 'Ktorý vzorec správne vyjadruje elektrickú prácu?',
    options: [
      km('W = U \\cdot I \\cdot t'),
      km('W = I^2 \\cdot R'),
      km('W = \\dfrac{U}{I \\cdot t}'),
      km('W = P \\cdot U'),
    ],
    correctIndex: 0,
    explanation: `Elektrická práca sa vypočíta ako ${km('W = U \\cdot I \\cdot t')}, kde U je napätie [V], I je prúd [A] a t je čas [s]. Výsledok je v jouloch [J].`,
  },
  {
    question: `Spotrebič je zapojený na napätie ${km('U = 12\\,\\text{V}')} a prechádza ním prúd ${km('I = 5\\,\\text{A}')}. Aký je jeho výkon?`,
    options: ['2,4 W', '17 W', '60 W', '600 W'],
    correctIndex: 2,
    explanation: `Výkon: ${km('P = U \\cdot I = 12\\,\\text{V} \\cdot 5\\,\\text{A} = 60\\,\\text{W}')}.`,
  },
  {
    question: 'Čo vyjadruje Joulov zákon?',
    options: [
      'Závislosť napätia od odporu vodiča',
      'Teplo vznikajúce priechodom prúdu cez odpor',
      'Závislosť elektrického výkonu od frekvencie',
      'Vzťah medzi prúdom a magnetickým poľom',
    ],
    correctIndex: 1,
    explanation: `Joulov zákon ${km('Q = I^2 \\cdot R \\cdot t')} popisuje teplo vznikajúce priechodom elektrického prúdu cez odporový vodič. Väčší prúd alebo väčší odpor znamená viac tepla.`,
  },
  {
    question: 'Koľko joulom (J) zodpovedá 1 kilowatthodina (kWh)?',
    options: [
      km('1000\\,\\text{J}'),
      km('3600\\,\\text{J}'),
      km('3{,}6 \\cdot 10^5\\,\\text{J}'),
      km('3{,}6 \\cdot 10^6\\,\\text{J}'),
    ],
    correctIndex: 3,
    explanation: `${km('1\\,\\text{kWh} = 1000\\,\\text{W} \\cdot 3600\\,\\text{s} = 3{,}6 \\cdot 10^6\\,\\text{J}')}. Je to množstvo energie, ktoré spotrebuje zariadenie s výkonom 1 kW za 1 hodinu.`,
  },
  {
    question: `Elektromotor má príkon ${km('P_{\\text{príkon}} = 1000\\,\\text{W}')} a mechanický výkon ${km('P_{\\text{mech}} = 750\\,\\text{W}')}. Aká je jeho účinnosť?`,
    options: ['25 %', '50 %', '75 %', '100 %'],
    correctIndex: 2,
    explanation: `Účinnosť: ${km('\\eta = \\dfrac{P_{\\text{mech}}}{P_{\\text{príkon}}} \\cdot 100\\,\\% = \\dfrac{750}{1000} \\cdot 100\\,\\% = 75\\,\\%')}. Zvyšných 25 % energie sa premení na odpadové teplo.`,
  },
  {
    question: 'Prečo sa v elektrickom obvode používa istič?',
    options: [
      'Zvyšuje napätie v obvode',
      'Meria spotrebovanú elektrickú energiu v kWh',
      'Chráni obvod pred nebezpečne vysokým prúdom',
      'Premieňa jednosmerný prúd na striedavý',
    ],
    correctIndex: 2,
    explanation: 'Istič pri nadmernom prúde preruší obvod a zabraňuje tak prehriatiu vedenia, požiaru alebo poškodeniu spotrebičov. Menovitý prúd ističa (napr. 16 A) nesmie byť dlhodobo prekročený.',
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
  return r === 1
    ? 'Perfektné! Ovládaš tému na jednotku.'
    : r >= 0.7
      ? 'Výborne! Máš solídne znalosti.'
      : r >= 0.4
        ? 'Oplatí sa zopakovať látku.'
        : 'Skús si prejsť teóriu znova a opakuj.'
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
