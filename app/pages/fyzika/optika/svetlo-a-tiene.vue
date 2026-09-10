<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/optika" class="hover:text-emerald-600 transition-colors">Optika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Svetlo a tiene</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">💡</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Svetlo a tiene</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
        Svetlo je elektromagnetické vlnenie, vďaka ktorému vidíme svet okolo nás. Riadi sa zákonom
        priamočiareho šírenia, čo vysvetľuje vznik tieňov, zatmenie Slnka, fungovanie zrkadiel
        aj meranie osvetlenosti pracovísk.
      </p>

      <!-- =========================================================
           SEKCIA 1 – Elektromagnetická povaha svetla
           ========================================================= -->
      <section aria-label="Svetlo ako elektromagnetické vlnenie" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          🌈 Svetlo ako elektromagnetické vlnenie
        </h2>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Svetlo je elektromagnetické vlnenie. Ľudské oko vníma len úzky pás tohto spektra
          – <strong>viditeľné svetlo</strong> – s vlnovými dĺžkami:
        </p>

        <div class="bg-white rounded-xl p-6 shadow-sm border mb-6 text-center">
          <div class="text-xl" v-html="km('\\lambda = 380 \\text{ nm} \\;\\text{–}\\; 780 \\text{ nm}')"/>
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Rôzne vlnové dĺžky zodpovedajú rôznym farbám – od fialovej (380 nm) po červenú (780 nm).
          Rýchlosť svetla vo vákuu je:
        </p>

        <div class="bg-white rounded-xl p-6 shadow-sm border mb-6 text-center">
          <div class="text-xl" v-html="km('c \\approx 3 \\times 10^{8} \\text{ m/s} = 300\\,000 \\text{ km/s}')"/>
        </div>

        <!-- Tabuľka farieb -->
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
            <thead>
              <tr class="bg-yellow-500 text-white">
                <th scope="col" class="px-4 py-3 text-left">Farba</th>
                <th scope="col" class="px-4 py-3 text-left">Vlnová dĺžka (nm)</th>
                <th scope="col" class="px-4 py-3 text-left">Frekvencia (THz)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c in colorTable" :key="c.name" class="border-t">
                <td class="px-4 py-3 font-semibold" :style="{ color: c.hex }">{{ c.name }}</td>
                <td class="px-4 py-3 text-gray-700">{{ c.lambda }}</td>
                <td class="px-4 py-3 text-gray-700">{{ c.freq }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
          <p class="font-semibold text-yellow-800 mb-1">💡 Zaujímavosť</p>
          <p class="text-yellow-700 text-sm leading-relaxed">
            Svetlu trvá cesta zo Slnka na Zem asi <strong>8 minút 20 sekúnd</strong>
            (vzdialenosť ≈ 150 miliónov km). Svetlo z Mesiaca k nám doputuje za menej ako 1,3 sekundy.
          </p>
        </div>
      </section>

      <!-- =========================================================
           SEKCIA 2 – Priamočiare šírenie, tieň a polotieň
           ========================================================= -->
      <section aria-label="Priamočiare šírenie svetla – tieň a polotieň" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          🌑 Priamočiare šírenie – tieň a polotieň
        </h2>

        <p class="text-gray-700 mb-4 leading-relaxed">
          V homogénnom (rovnorodnom) prostredí sa svetlo šíri <strong>priamočiaro</strong>.
          Preto nepriehľadné predmety vrhajú tieň – oblasť, do ktorej svetlo nedosiahne.
        </p>

        <h3 class="text-xl font-semibold text-gray-700 mb-3">Bodový zdroj svetla</h3>
        <p class="text-gray-700 mb-5 leading-relaxed">
          Ideálny bodový zdroj vytvára za prekážkou ostrý <strong>tieň (umbra)</strong>.
          Okraje tieňa sú geometricky presné.
        </p>

        <h3 class="text-xl font-semibold text-gray-700 mb-3">Plošný (roztiahnutý) zdroj svetla</h3>
        <p class="text-gray-700 mb-5 leading-relaxed">
          Plošný zdroj (napr. Slnko) vytvára okrem úplného tieňa aj
          <strong>polotieň (penumbra)</strong> – oblasť, do ktorej dopadá svetlo len z časti zdroja.
          Preto majú tiene v bežnom živote rozmazané okraje.
        </p>

        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div class="bg-gray-900 rounded-xl p-6 text-white text-center">
            <div class="text-5xl mb-3">•</div>
            <h4 class="font-bold mb-2">Bodový zdroj</h4>
            <p class="text-sm text-gray-300">Vzniká iba ostrý <em>tieň</em> (umbra).</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 text-white text-center">
            <div class="text-5xl mb-3">☀️</div>
            <h4 class="font-bold mb-2">Plošný zdroj</h4>
            <p class="text-sm text-gray-300">Vzniká <em>tieň</em> (umbra) + <em>polotieň</em> (penumbra).</p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-700 mb-3">Zatmenie Slnka a Mesiaca</h3>
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
            <h4 class="font-bold text-indigo-800 mb-2">🌒 Zatmenie Slnka</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Mesiac sa dostane medzi Zem a Slnko. Pozorovateľ v úplnom tieni Mesiaca
              vidí <strong>úplné zatmenie</strong>, v polotieni <strong>čiastočné zatmenie</strong>.
            </p>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h4 class="font-bold text-purple-800 mb-2">🌕 Zatmenie Mesiaca</h4>
            <p class="text-sm text-gray-700 leading-relaxed">
              Zem sa dostane medzi Slnko a Mesiac – Mesiac vstúpi do tieňa Zeme
              a <strong>stmavne</strong> (dostáva len červeno lomené svetlo).
            </p>
          </div>
        </div>

        <!-- Príklad 1 -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h4 class="font-bold text-blue-800 mb-3">📐 Príklad 1 – Výška budovy zo tieňa</h4>
          <p class="text-gray-700 mb-3">
            Kolmá tyč vysoká <span v-html="km('h_1 = 2 \\text{ m}')"/> vrhá tieň dlhý
            <span v-html="km('s_1 = 5 \\text{ m}')"/>. Ako vysoká je budova, ktorej tieň je
            <span v-html="km('s_2 = 35 \\text{ m}')"/> dlhý (v rovnakú chvíľu)?
          </p>
          <div class="bg-white rounded-xl p-5">
            <p class="text-gray-600 text-sm mb-2">Pomer výšky a dĺžky tieňa je rovnaký (priamočiare šírenie):</p>
            <div class="text-center my-3" v-html="km('\\frac{h_1}{s_1} = \\frac{h_2}{s_2} \\quad \\Rightarrow \\quad h_2 = h_1 \\cdot \\frac{s_2}{s_1}')"/>
            <div class="text-center my-3" v-html="km('h_2 = 2 \\text{ m} \\cdot \\frac{35 \\text{ m}}{5 \\text{ m}} = 14 \\text{ m}')"/>
            <p class="text-center font-semibold text-green-700 mt-2">Budova je vysoká 14 m.</p>
          </div>
        </div>
      </section>

      <!-- =========================================================
           SEKCIA 3 – Odraz svetla
           ========================================================= -->
      <section aria-label="Odraz svetla – difúzny a zrkadlový" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          🪞 Odraz svetla
        </h2>

        <p class="text-gray-700 mb-6 leading-relaxed">
          Keď svetlo dopadne na povrch predmetu, časť sa pohltí a časť sa odrazí.
          Podľa charakteru povrchu rozlišujeme dva druhy odrazu:
        </p>

        <div class="grid sm:grid-cols-2 gap-6 mb-8">
          <div class="bg-white rounded-xl p-6 shadow-sm border">
            <div class="text-center text-4xl mb-3">🔆</div>
            <h3 class="font-bold text-gray-800 text-center mb-2">Difúzny (rozptylný) odraz</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Povrch je drsný na mikroskopickej úrovni – lúče sa odrážajú do
              <strong>rôznych smerov</strong>. Predmet preto vidíme zo všetkých uhlov.
            </p>
            <p class="text-xs font-semibold text-gray-500 mt-3 pt-3 border-t">
              Príklady: papier, stena, tkanina, drevo
            </p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border">
            <div class="text-center text-4xl mb-3">✨</div>
            <h3 class="font-bold text-gray-800 text-center mb-2">Zrkadlový (pravidelný) odraz</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Povrch je dokonale hladký – každý lúč sa odráža v presne určenom smere.
              Uhol dopadu sa rovná uhlu odrazu.
            </p>
            <p class="text-xs font-semibold text-gray-500 mt-3 pt-3 border-t">
              Príklady: zrkadlo, pokojná vodná hladina, leštený kov
            </p>
          </div>
        </div>

        <h3 class="text-xl font-semibold text-gray-700 mb-3">Zákon odrazu</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Uhol dopadu <span v-html="km('\\alpha')"/> a uhol odrazu
          <span v-html="km('\\alpha^{\\prime}')"/> sa merajú od <strong>kolmice k povrchu</strong>
          (normály). Platí zákon odrazu:
        </p>

        <div class="bg-white rounded-xl p-6 shadow-sm border mb-6 text-center">
          <div class="text-xl" v-html="km('\\alpha = \\alpha^{\\prime}')"/>
          <p class="text-sm text-gray-500 mt-2">uhol dopadu = uhol odrazu</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
          <p class="font-semibold text-yellow-800 mb-1">📌 Pamätaj</p>
          <p class="text-yellow-700 text-sm leading-relaxed">
            Zákon odrazu platí pre oba typy odrazu. Pri difúznom odraze sa na rôznych
            mikroplôškach drsného povrchu lokálne uplatňuje zákon odrazu, ale výsledný smer
            je pre každý lúč iný.
          </p>
        </div>
      </section>

      <!-- =========================================================
           SEKCIA 4 – Osvetlenosť
           ========================================================= -->
      <section aria-label="Osvetlenosť a svetelný tok" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          📏 Osvetlenosť
        </h2>

        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Osvetlenosť E</strong> je veličina vyjadrujúca, aký svetelný tok
          <span v-html="km('\\Phi')"/> dopadne na plochu <span v-html="km('S')"/>.
          Čím väčšia je plocha, tým menšia osvetlenosť (pri rovnakom toku).
        </p>

        <div class="bg-white rounded-xl p-6 shadow-sm border mb-4">
          <div class="text-center text-2xl mb-3" v-html="km('E = \\dfrac{\\Phi}{S}')"/>
          <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span><span v-html="km('E')"/> – osvetlenosť &nbsp;[lx = lm/m²]</span>
            <span><span v-html="km('\\Phi')"/> – svetelný tok &nbsp;[lm]</span>
            <span><span v-html="km('S')"/> – plocha povrchu &nbsp;[m²]</span>
          </div>
        </div>

        <!-- Príklad 2 -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h4 class="font-bold text-blue-800 mb-3">📐 Príklad 2 – Výpočet osvetlenosti</h4>
          <p class="text-gray-700 mb-3">
            Svietidlo vyžaruje svetelný tok
            <span v-html="km('\\Phi = 800 \\text{ lm}')"/>.
            Celý tok dopadá na pracovnú plochu
            <span v-html="km('S = 2 \\text{ m}^2')"/>.
            Aká je osvetlenosť?
          </p>
          <div class="bg-white rounded-xl p-5">
            <div class="text-center my-3" v-html="km('E = \\frac{\\Phi}{S} = \\frac{800 \\text{ lm}}{2 \\text{ m}^2} = 400 \\text{ lx}')"/>
            <p class="text-center font-semibold text-green-700">Osvetlenosť pracovnej plochy je 400 lx.</p>
          </div>
        </div>

        <!-- Príklad 3 -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h4 class="font-bold text-blue-800 mb-3">📐 Príklad 3 – Maximálna osvetlená plocha</h4>
          <p class="text-gray-700 mb-3">
            Norma STN EN 12464 odporúča pre kanceláriu osvetlenosť
            <span v-html="km('E = 500 \\text{ lx}')"/>.
            Svietidlo má svetelný tok
            <span v-html="km('\\Phi = 3\\,000 \\text{ lm}')"/>.
            Akú maximálnu plochu môže efektívne osvetliť?
          </p>
          <div class="bg-white rounded-xl p-5">
            <p class="text-sm text-gray-600 mb-2">Vyjadríme plochu zo vzorca:</p>
            <div class="text-center my-3" v-html="km('S = \\frac{\\Phi}{E} = \\frac{3\\,000 \\text{ lm}}{500 \\text{ lx}} = 6 \\text{ m}^2')"/>
            <p class="text-center font-semibold text-green-700">Svietidlo efektívne osvetlí plochu 6 m².</p>
          </div>
        </div>

        <!-- Tabuľka orientačných hodnôt -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
            <thead>
              <tr class="bg-yellow-500 text-white">
                <th scope="col" class="px-4 py-3 text-left">Situácia</th>
                <th scope="col" class="px-4 py-3 text-left">Osvetlenosť (lx)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in illuminanceTable" :key="row.situation" class="border-t">
                <td class="px-4 py-3 text-gray-700">{{ row.situation }}</td>
                <td class="px-4 py-3 font-medium text-gray-900">{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- =========================================================
           ZHRNUTIE
           ========================================================= -->
      <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
        <ul class="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Svetlo je elektromagnetické vlnenie s vlnovou dĺžkou
              <span v-html="km('\\lambda = 380\\text{–}780 \\text{ nm}')"/>
              (viditeľné spektrum).
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Rýchlosť svetla vo vákuu:
              <span v-html="km('c \\approx 3 \\times 10^{8} \\text{ m/s}')"/>.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>V homogénnom prostredí sa svetlo šíri <strong>priamočiaro</strong>.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Bodový zdroj → iba <strong>tieň (umbra)</strong>;
              plošný zdroj → tieň + <strong>polotieň (penumbra)</strong>.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Zákon odrazu:
              <span v-html="km('\\alpha = \\alpha^{\\prime}')"/>
              (uhol dopadu = uhol odrazu, oba od normály).
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Difúzny odraz (drsný povrch) – predmet vidíme zo všetkých strán;
              zrkadlový odraz (hladký povrch) – presne určený odrazený lúč.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-yellow-500 font-bold mt-0.5">•</span>
            <span>
              Osvetlenosť:
              <span v-html="km('E = \\Phi / S')"/>,
              jednotka lux [lx = lm/m²].
            </span>
          </li>
        </ul>
      </div>

      <!-- =========================================================
           KVÍZ
           ========================================================= -->
      <div class="bg-white rounded-2xl shadow-sm border p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">🧠 Kvíz – Svetlo a tiene</h2>
        <p class="text-gray-500 text-sm mb-6">Otestuj si vedomosti – 6 otázok</p>

        <!-- Aktívny kvíz -->
        <div v-if="!quizFinished">

          <!-- Progress -->
          <div class="flex items-center justify-between mb-5" data-testid="quiz-progress">
            <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <div class="flex gap-1.5">
              <div
                v-for="(_, i) in quiz"
                :key="i"
                class="w-3 h-3 rounded-full transition-colors"
                :class="i < currentQ ? 'bg-yellow-500' : i === currentQ ? 'bg-yellow-300' : 'bg-gray-200'"
              />
            </div>
          </div>

          <!-- Otázka -->
          <div class="mb-5" data-testid="question">
            <p class="text-lg font-semibold text-gray-800 leading-relaxed" v-html="currentQuestion.question"/>
          </div>

          <!-- Možnosti -->
          <div class="space-y-3 mb-5">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              type="button"
              :data-testid="`option-${i}`"
              class="w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm leading-relaxed"
              :class="optionClass(i)"
              @click="selectAnswer(i)"
              v-html="option"
            />
          </div>

          <!-- Spätná väzba -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              class="rounded-xl p-4 mb-5"
              :class="selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'"
            >
              <p
                class="font-semibold mb-1"
                :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'"
              >
                {{ selectedAnswer === currentQuestion.correctIndex ? '✅ Správne!' : '❌ Nesprávne.' }}
              </p>
              <p class="text-gray-700 text-sm" v-html="currentQuestion.explanation"/>
            </div>
          </Transition>

          <!-- Ďalšia otázka -->
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="next-btn"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledky' }}
          </button>
        </div>

        <!-- Výsledky -->
        <div v-else data-testid="result" class="text-center py-6">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p class="text-gray-600 mb-8" data-testid="score">
            Dosiahli ste <strong class="text-yellow-600">{{ quizScore }}</strong>
            z <strong>{{ quiz.length }}</strong> bodov.
          </p>
          <button
            type="button"
            data-testid="reset-btn"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            🔄 Skúsiť znova
          </button>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

// KaTeX helper
function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// Tabuľka farieb viditeľného spektra
const colorTable = [
  { name: 'Fialová',  lambda: '380–440', freq: '680–790', hex: '#7B00D4' },
  { name: 'Modrá',    lambda: '440–490', freq: '610–680', hex: '#0050C8' },
  { name: 'Zelená',   lambda: '490–560', freq: '535–610', hex: '#009000' },
  { name: 'Žltá',     lambda: '560–590', freq: '510–535', hex: '#B89000' },
  { name: 'Oranžová', lambda: '590–620', freq: '480–510', hex: '#E06000' },
  { name: 'Červená',  lambda: '620–780', freq: '385–480', hex: '#CC0000' },
]

// Orientačné hodnoty osvetlenosti
const illuminanceTable = [
  { situation: 'Priamy slnečný svit',      value: '~100 000 lx' },
  { situation: 'Zamračený deň (vonku)',     value: '~10 000 lx'  },
  { situation: 'Kancelária (norma STN)',    value: '500 lx'      },
  { situation: 'Obývacia izba',             value: '100–300 lx'  },
  { situation: 'Verejné osvetlenie ulice',  value: '10–30 lx'    },
  { situation: 'Mesačná noc',               value: '0,1–1 lx'    },
]

// Kvíz
const quiz = [
  {
    question: 'Aká je rýchlosť svetla vo vákuu?',
    options: [
      '3 × 10<sup>6</sup> m/s',
      '3 × 10<sup>8</sup> m/s',
      '3 × 10<sup>10</sup> m/s',
      '3 × 10<sup>4</sup> m/s',
    ],
    correctIndex: 1,
    explanation: 'Rýchlosť svetla vo vákuu je <strong>c ≈ 3 × 10⁸ m/s</strong> (300 000 km/s). Ide o najvyššiu možnú rýchlosť v prírode.',
  },
  {
    question: 'V akom rozsahu vlnových dĺžok leží viditeľné svetlo?',
    options: [
      '100–380 nm',
      '780–1 000 nm',
      '380–780 nm',
      '1 000–3 000 nm',
    ],
    correctIndex: 2,
    explanation: 'Viditeľné svetlo má vlnové dĺžky <strong>λ = 380–780 nm</strong> – od fialovej po červenú.',
  },
  {
    question: 'Čo je polotieň (penumbra)?',
    options: [
      'Oblasť za predmetom, kde nie je žiadne svetlo',
      'Tieň vznikajúci výlučne pri bodovom zdroji',
      'Oblasť, do ktorej dopadá svetlo len z časti plošného zdroja',
      'Odrazené svetlo za nepriehľadným predmetom',
    ],
    correctIndex: 2,
    explanation: 'Polotieň (penumbra) vzniká pri <strong>plošnom zdroji</strong> – je to oblasť, do ktorej dopadá svetlo iba z niektorých bodov zdroja, nie z celého. Úplný tieň (umbra) je oblasť bez akéhokoľvek priameho svetla.',
  },
  {
    question: 'Svietidlo vyžaruje svetelný tok Φ = 1 500 lm a osvetľuje plochu S = 3 m². Aká je osvetlenosť?',
    options: [
      '4 500 lx',
      '0,002 lx',
      '750 lx',
      '500 lx',
    ],
    correctIndex: 3,
    explanation: 'E = Φ/S = 1 500 lm / 3 m² = <strong>500 lx</strong>. Ide o hodnotu odporúčanú pre kancelárie.',
  },
  {
    question: 'Aký typ odrazu nastáva na dokonale hladkej zrkadlovej ploche?',
    options: [
      'Difúzny (rozptylný) odraz',
      'Zrkadlový (pravidelný) odraz',
      'Lom svetla',
      'Absorpcia svetla',
    ],
    correctIndex: 1,
    explanation: 'Na hladkej ploche nastáva <strong>zrkadlový (pravidelný) odraz</strong> – uhol dopadu sa rovná uhlu odrazu (α = α\'). Difúzny odraz nastáva na drsných povrchoch.',
  },
  {
    question: 'Kedy nastáva zatmenie Slnka?',
    options: [
      'Keď Zem vstúpi do tieňa Mesiaca',
      'Keď Mesiac vstúpi do tieňa Zeme',
      'Keď sa Mesiac dostane medzi Zem a Slnko',
      'Keď sa Zem dostane medzi Slnko a Mesiac',
    ],
    correctIndex: 2,
    explanation: 'Zatmenie Slnka nastáva, keď sa <strong>Mesiac dostane medzi Zem a Slnko</strong> – tieň (a polotieň) Mesiaca dopadne na Zem. Zatmenie Mesiaca nastáva pri opačnom usporiadaní: Zem je medzi Slnkom a Mesiacom.',
  },
]

const currentQ      = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore     = ref(0)
const quizFinished  = ref(false)

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
  currentQ.value      = 0
  selectedAnswer.value = null
  quizScore.value     = 0
  quizFinished.value  = false
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
    return 'border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-500 bg-green-50 text-green-800 cursor-default'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800 cursor-default'
  }
  return 'border-gray-200 text-gray-400 cursor-default'
}
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
