<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Kinematika</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📈</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Kinematika</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Kinematika opisuje pohyb telies — kde sa nachádzajú, ako rýchlo sa pohybujú a ako sa mení ich rýchlosť.
      Nezaujíma sa o to, <em>prečo</em> sa teleso pohybuje.
    </p>

    <!-- Sekcia 1: Pohyb a kľud -->
    <section aria-label="Pohyb a kľud" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Pohyb, kľud a vzťažná sústava</h2>
      <p class="text-gray-500 mb-5">Pohyb a kľud sú relatívne — závisia od toho, odkiaľ sa na teleso pozeráme.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div v-for="def in basicDefs" :key="def.term" class="bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl">{{ def.icon }}</span>
          <p class="font-bold text-gray-900 mt-2">{{ def.term }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ def.desc }}</p>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>Príklad relativity pohybu:</strong> Cestujúci vo vlaku je v kľude voči sedadlu, ale v pohybe voči nástupišťu. Pohyb a kľud závisí od zvolenej <strong>vzťažnej sústavy</strong>.
      </div>
    </section>

    <!-- Sekcia 2: Rovnomerný pohyb -->
    <section aria-label="Rovnomerný priamočiary pohyb" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Rovnomerný priamočiary pohyb</h2>
      <p class="text-gray-500 mb-5">Teleso sa pohybuje priamočiaro a jeho <strong>rýchlosť je stála</strong> — nemení sa ani veľkosť, ani smer.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div class="space-y-3">
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Rýchlosť (priemerná)</p>
            <MathFormula display formula="v = \frac{s}{t}" />
            <p class="text-xs text-gray-400 mt-1">s = dráha [m], t = čas [s], v [m/s]</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Dráha rovnomerného pohybu</p>
            <MathFormula display formula="s = v \cdot t" />
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-gray-900 mb-3">Grafy rovnomerného pohybu</p>
          <!-- s-t a v-t grafy -->
          <svg viewBox="0 0 240 110" class="w-full" aria-label="Grafy rovnomerného pohybu">
            <!-- s-t graf -->
            <text x="30" y="10" font-size="9" fill="#6B7280" font-weight="bold">s – t graf</text>
            <line x1="20" y1="95" x2="110" y2="95" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#ax1)"/>
            <line x1="20" y1="95" x2="20" y2="15" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#ay1)"/>
            <text x="112" y="98" font-size="8" fill="#9CA3AF">t</text>
            <text x="22" y="13" font-size="8" fill="#9CA3AF">s</text>
            <line x1="20" y1="90" x2="100" y2="25" stroke="#3B82F6" stroke-width="2"/>
            <!-- v-t graf -->
            <text x="145" y="10" font-size="9" fill="#6B7280" font-weight="bold">v – t graf</text>
            <line x1="130" y1="95" x2="225" y2="95" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#ax2)"/>
            <line x1="130" y1="95" x2="130" y2="15" stroke="#9CA3AF" stroke-width="1.5" marker-end="url(#ay2)"/>
            <text x="226" y="98" font-size="8" fill="#9CA3AF">t</text>
            <text x="132" y="13" font-size="8" fill="#9CA3AF">v</text>
            <line x1="130" y1="55" x2="215" y2="55" stroke="#10B981" stroke-width="2"/>
            <defs>
              <marker id="ax1" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#9CA3AF"/></marker>
              <marker id="ay1" markerWidth="5" markerHeight="4" refX="2" refY="4" orient="auto"><polygon points="0 4,2 0,4 4" fill="#9CA3AF"/></marker>
              <marker id="ax2" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto"><polygon points="0 0,5 2,0 4" fill="#9CA3AF"/></marker>
              <marker id="ay2" markerWidth="5" markerHeight="4" refX="2" refY="4" orient="auto"><polygon points="0 4,2 0,4 4" fill="#9CA3AF"/></marker>
            </defs>
            <text x="52" y="103" font-size="7" fill="#3B82F6">priamka (sklon = v)</text>
            <text x="147" y="50" font-size="7" fill="#10B981">vodorovná priamka</text>
          </svg>
        </div>
      </div>

      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-gray-700">
        <strong>Príklad:</strong> Auto jazdí rýchlosťou v = 90 km/h = 25 m/s. Za t = 4 s urazí dráhu
        <MathFormula formula="s = 25 \cdot 4 = 100\;\text{m}" />.
      </div>
    </section>

    <!-- Sekcia 3: Zrýchlenie -->
    <section aria-label="Zrýchlenie" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Zrýchlenie</h2>
      <p class="text-gray-500 mb-5">Zrýchlenie vyjadruje, <strong>ako rýchlo sa mení rýchlosť</strong> telesa. Je to vektorová veličina.</p>

      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5 text-center">
        <p class="text-xs text-gray-400 mb-1">Definícia zrýchlenia</p>
        <MathFormula display formula="\vec{a} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v} - \vec{v}_0}{t}" />
        <p class="text-xs text-gray-400 mt-2">Jednotka: m/s² (meter za sekundu na druhú)</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div v-for="type in motionTypes" :key="type.name" class="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p class="text-xs font-bold uppercase tracking-wide mb-2" :class="type.color">{{ type.name }}</p>
          <p class="text-2xl mb-1">{{ type.icon }}</p>
          <p class="text-xs text-gray-500">{{ type.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Sekcia 4: Rovnomerne zmenený pohyb -->
    <section aria-label="Rovnomerne zmenený pohyb" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Rovnomerne zmenený priamočiary pohyb</h2>
      <p class="text-gray-500 mb-5">Zrýchlenie je konštantné — rýchlosť sa mení rovnomerne.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 space-y-3">
          <p class="text-sm font-semibold text-orange-800">Pohybové rovnice</p>
          <div class="bg-white rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Rýchlosť po čase t</p>
            <MathFormula display formula="v = v_0 + a \cdot t" />
          </div>
          <div class="bg-white rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Dráha (zo začiatočného kľudu v₀ = 0)</p>
            <MathFormula display formula="s = v_0 t + \frac{1}{2} a t^2" />
          </div>
          <div class="bg-white rounded-lg p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Vzťah rýchlosti a dráhy</p>
            <MathFormula display formula="v^2 = v_0^2 + 2as" />
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-gray-900 mb-3">Grafy rovnomerne zrýchleného pohybu</p>
          <svg viewBox="0 0 240 130" class="w-full" aria-label="Grafy rovnomerne zrýchleného pohybu">
            <!-- s-t graf (parabola) -->
            <text x="25" y="10" font-size="9" fill="#6B7280" font-weight="bold">s – t (parabola)</text>
            <line x1="20" y1="115" x2="110" y2="115" stroke="#9CA3AF" stroke-width="1.5"/>
            <line x1="20" y1="115" x2="20" y2="15" stroke="#9CA3AF" stroke-width="1.5"/>
            <text x="112" y="118" font-size="8" fill="#9CA3AF">t</text>
            <text x="22" y="13" font-size="8" fill="#9CA3AF">s</text>
            <path d="M20,112 Q55,105 100,35" stroke="#F97316" stroke-width="2" fill="none"/>
            <!-- v-t graf (priamka) -->
            <text x="140" y="10" font-size="9" fill="#6B7280" font-weight="bold">v – t (priamka)</text>
            <line x1="130" y1="115" x2="225" y2="115" stroke="#9CA3AF" stroke-width="1.5"/>
            <line x1="130" y1="115" x2="130" y2="15" stroke="#9CA3AF" stroke-width="1.5"/>
            <text x="226" y="118" font-size="8" fill="#9CA3AF">t</text>
            <text x="132" y="13" font-size="8" fill="#9CA3AF">v</text>
            <line x1="130" y1="110" x2="215" y2="30" stroke="#8B5CF6" stroke-width="2"/>
            <text x="35" y="123" font-size="7" fill="#F97316">s = ½at² (v₀=0)</text>
            <text x="152" y="123" font-size="7" fill="#8B5CF6">sklon = a</text>
          </svg>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — auto brzdí</p>
        <p class="text-sm text-gray-700 mb-2">Auto jazdí <MathFormula formula="v_0 = 20\;\text{m/s}" /> a brzdí so zrýchlením <MathFormula formula="a = -4\;\text{m/s}^2" />. Kedy zastaví?</p>
        <p class="text-sm text-gray-700"><MathFormula formula="v = v_0 + at \Rightarrow 0 = 20 - 4t \Rightarrow t = 5\;\text{s}" /></p>
        <p class="text-sm text-gray-700 mt-1">Brzdná dráha: <MathFormula formula="s = 20 \cdot 5 - \frac{1}{2} \cdot 4 \cdot 25 = 100 - 50 = 50\;\text{m}" /></p>
      </div>
    </section>

    <!-- Sekcia 5: Prehľad vzorcov -->
    <section aria-label="Prehľad vzorcov" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5">Prehľad vzorcov</h2>
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Veličina</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold hidden sm:table-cell">Vzorec</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in formulaTable" :key="row.quantity" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.quantity }}</td>
              <td class="px-5 py-3 font-mono font-bold text-blue-700">{{ row.symbol }}</td>
              <td class="px-5 py-3 text-gray-600">{{ row.unit }}</td>
              <td class="px-5 py-3 hidden sm:table-cell"><MathFormula :formula="row.formula" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Pohyb a kľud sú relatívne — závisia od vzťažnej sústavy.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Rovnomerný pohyb: <MathFormula formula="v = \text{konšt.}" />, dráha <MathFormula formula="s = vt" />, v–t graf je vodorovná priamka.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Zrýchlenie: <MathFormula formula="a = \Delta v / \Delta t" /> — miera zmeny rýchlosti.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Rovnomerne zmenený pohyb: <MathFormula formula="v = v_0 + at" />, <MathFormula formula="s = v_0 t + \tfrac{1}{2}at^2" />.</li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button" data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          @click="resetQuiz"
        >Skúsiť znova</button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-emerald-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div class="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5" v-html="currentQuestion.question" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options" :key="i"
            type="button" :data-testid="`quiz-option-${i}`"
            :disabled="selectedAnswer !== null"
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
            @click="selectAnswer(i)"
          >
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            {{ option }}
          </button>
        </div>

        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div data-testid="quiz-feedback"
              :class="['rounded-xl p-4 mb-4 text-sm', selectedAnswer === currentQuestion.correctIndex ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800']"
            >
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button type="button" data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                @click="nextQuestion"
              >{{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}</button>
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

// ── Statický obsah ────────────────────────────────────────────────────────────

const basicDefs = [
  { icon: '🏃', term: 'Pohyb', desc: 'Teleso mení svoju polohu voči vzťažnej sústave.' },
  { icon: '💺', term: 'Kľud', desc: 'Teleso nemení svoju polohu voči vzťažnej sústave.' },
  { icon: '📍', term: 'Vzťažná sústava', desc: 'Teleso (alebo bod), voči ktorému popisujeme pohyb.' },
]

const motionTypes = [
  { name: 'Rovnomerne zrýchlený', icon: '🚀', desc: 'a > 0 — rýchlosť rastie. Napr. rozbiehajúce sa auto.', color: 'text-orange-600' },
  { name: 'Rovnomerný', icon: '🚗', desc: 'a = 0 — rýchlosť je stála. Napr. auto na diaľnici.', color: 'text-blue-600' },
  { name: 'Rovnomerne spomaľovaný', icon: '🛑', desc: 'a < 0 — rýchlosť klesá. Napr. brzdenie.', color: 'text-red-600' },
]

const formulaTable = [
  { quantity: 'Dráha', symbol: 's', unit: 'm', formula: 's = v \\cdot t' },
  { quantity: 'Rýchlosť', symbol: 'v', unit: 'm/s', formula: 'v = s / t' },
  { quantity: 'Zrýchlenie', symbol: 'a', unit: 'm/s²', formula: 'a = \\Delta v / \\Delta t' },
  { quantity: 'Rýchlosť po čase t', symbol: 'v', unit: 'm/s', formula: 'v = v_0 + a \\cdot t' },
  { quantity: 'Dráha (zmený pohyb)', symbol: 's', unit: 'm', formula: 's = v_0 t + \\tfrac{1}{2}at^2' },
  { quantity: 'Vzťah v a s', symbol: 'v²', unit: 'm²/s²', formula: 'v^2 = v_0^2 + 2as' },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo vyjadruje kinematika?',
    options: ['Príčiny pohybu telies', 'Popis pohybu telies bez riešenia príčin', 'Silu pôsobiacu na teleso', 'Energiu telesa'],
    correctIndex: 1,
    explanation: 'Kinematika opisuje pohyb (kde, ako rýchlo, ako sa mení rýchlosť), ale nezaujíma sa o príčiny — to je úloha dynamiky.',
  },
  {
    question: 'Auto urazí 300 m za 12 s rovnomerným pohybom. Aká je jeho rýchlosť?',
    options: ['36 m/s', '25 m/s', '288 m/s', '25 km/h'],
    correctIndex: 1,
    explanation: `${km('v = s/t = 300/12 = 25\\;\\text{m/s}')}`,
  },
  {
    question: 'Čo je zrýchlenie?',
    options: ['Rýchlosť pohybu', 'Zmena dráhy za čas', 'Zmena rýchlosti za čas', 'Sila pôsobiaca na teleso'],
    correctIndex: 2,
    explanation: `Zrýchlenie ${km('a = \\Delta v / \\Delta t')} vyjadruje, o koľko sa zmení rýchlosť za jednu sekundu. Jednotka: m/s².`,
  },
  {
    question: 'Teleso štartuje z kľudu (v₀ = 0) so zrýchlením a = 3 m/s². Aká je jeho rýchlosť po t = 5 s?',
    options: ['8 m/s', '15 m/s', '0,6 m/s', '30 m/s'],
    correctIndex: 1,
    explanation: `${km('v = v_0 + at = 0 + 3 \\cdot 5 = 15\\;\\text{m/s}')}`,
  },
  {
    question: 'Aký tvar má s–t graf rovnomerne zrýchleného pohybu (v₀ = 0)?',
    options: ['Vodorovná priamka', 'Šikmá priamka', 'Parabola', 'Krivka so záporným sklonom'],
    correctIndex: 2,
    explanation: `Pre rovnomerne zrýchlený pohyb platí ${km('s = \\tfrac{1}{2}at^2')} — kvadratická závislosť od t, čo je parabola.`,
  },
  {
    question: 'Auto jazdí v₀ = 30 m/s a brzdí so zrýchlením a = −5 m/s². Za koľko sekúnd zastaví?',
    options: ['3 s', '6 s', '5 s', '150 s'],
    correctIndex: 1,
    explanation: `${km('v = v_0 + at \\Rightarrow 0 = 30 - 5t \\Rightarrow t = 6\\;\\text{s}')}`,
  },
  {
    question: 'Cyklista jazdí rovnomerne rýchlosťou 10 m/s. Aký tvar má jeho v–t graf?',
    options: ['Parabola', 'Šikmá priamka prechádzajúca počiatkom', 'Vodorovná priamka', 'Klesajúca krivka'],
    correctIndex: 2,
    explanation: 'Pri rovnomernom pohybe je rýchlosť stála — v–t graf je vodorovná priamka vo výške v = 10 m/s.',
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
