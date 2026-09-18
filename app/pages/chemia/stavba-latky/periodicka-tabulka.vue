<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/stavba-latky" class="hover:text-orange-600 transition-colors">Stavba látky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Periodická sústava prvkov</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">📋</span>
      <h1 class="text-4xl font-extrabold text-orange-700">{{ activeTitle ?? 'Periodická sústava prvkov' }}</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Periodická sústava prvkov (PSP) je usporiadanie chemických prvkov podľa ich protónového čísla. Odhaľuje pravidelnosti vo vlastnostiach prvkov a umožňuje predpovedať, ako sa budú správať v chemických reakciách.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Periodický zákon</h2>
      <p class="text-gray-700 mb-4">
        <strong>Periodický zákon</strong> (Mendelejev, 1869): vlastnosti prvkov sa periodicky opakujú pri usporiadaní podľa rastúceho protónového čísla Z.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Periódy (riadky)</h3>
          <p class="text-sm text-gray-700">7 periód. V rámci periódy sa zvyšuje protónové číslo Z, mení sa počet elektrónov vo valenčnej vrstve (1→8).</p>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 class="font-bold text-amber-700 mb-2">Skupiny (stĺpce)</h3>
          <p class="text-sm text-gray-700">18 skupín. Prvky v tej istej skupine majú rovnaký počet valenčných elektrónov → podobné chemické vlastnosti.</p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Prvých 20 prvkov</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-100">
              <th class="border border-orange-200 px-2 py-1 text-left">Z</th>
              <th class="border border-orange-200 px-2 py-1 text-left">Symbol</th>
              <th class="border border-orange-200 px-2 py-1 text-left">Názov</th>
              <th class="border border-orange-200 px-2 py-1 text-center">Sk.</th>
              <th class="border border-orange-200 px-2 py-1 text-center">Per.</th>
              <th class="border border-orange-200 px-2 py-1 text-left">Typ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="el in elements" :key="el.z" :class="el.rowClass">
              <td class="border border-gray-200 px-2 py-1 font-mono">{{ el.z }}</td>
              <td class="border border-gray-200 px-2 py-1 font-bold">{{ el.symbol }}</td>
              <td class="border border-gray-200 px-2 py-1">{{ el.name }}</td>
              <td class="border border-gray-200 px-2 py-1 text-center">{{ el.group }}</td>
              <td class="border border-gray-200 px-2 py-1 text-center">{{ el.period }}</td>
              <td class="border border-gray-200 px-2 py-1">{{ el.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Dôležité skupiny prvkov</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="grp in groups" :key="grp.name" class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-orange-700 mb-1">{{ grp.name }} (sk. {{ grp.sk }})</h3>
          <p class="text-sm text-gray-700 mb-1">Prvky: {{ grp.prvky }}</p>
          <p class="text-xs text-gray-500">{{ grp.vlastnosti }}</p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Trendy v PSP</h2>
      <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trendy v periodickej sústave: elektronegativita, atómový polomer, ionizačná energia" class="w-full">
          <rect width="480" height="200" fill="#fff7ed"/>
          <!-- Perióda šípky -->
          <text x="10" y="20" font-size="11" fill="#92400e" font-weight="bold">V perióde →</text>
          <line x1="10" y1="35" x2="230" y2="35" stroke="#f97316" stroke-width="2" marker-end="url(#ar)"/>
          <text x="10" y="55" font-size="10" fill="#374151">Elektronegativita ↑</text>
          <text x="10" y="70" font-size="10" fill="#374151">Atómový polomer ↓</text>
          <text x="10" y="85" font-size="10" fill="#374151">Ionizačná energia ↑</text>
          <!-- Skupina šípky -->
          <text x="260" y="20" font-size="11" fill="#92400e" font-weight="bold">V skupine ↓</text>
          <line x1="300" y1="35" x2="300" y2="140" stroke="#f97316" stroke-width="2" marker-end="url(#ar)"/>
          <text x="310" y="70" font-size="10" fill="#374151">Elektronegativita ↓</text>
          <text x="310" y="85" font-size="10" fill="#374151">Atómový polomer ↑</text>
          <text x="310" y="100" font-size="10" fill="#374151">Ionizačná energia ↓</text>
          <text x="310" y="115" font-size="10" fill="#374151">Kovový charakter ↑</text>
          <defs>
            <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#f97316"/>
            </marker>
          </defs>
          <!-- Kovy / Nekovy -->
          <text x="10" y="160" font-size="11" fill="#92400e" font-weight="bold">Typy prvkov:</text>
          <rect x="10" y="168" width="14" height="14" fill="#bfdbfe" rx="2"/>
          <text x="28" y="179" font-size="10" fill="#374151">Kovy (väčšina PSP)</text>
          <rect x="130" y="168" width="14" height="14" fill="#bbf7d0" rx="2"/>
          <text x="148" y="179" font-size="10" fill="#374151">Nekovy</text>
          <rect x="220" y="168" width="14" height="14" fill="#fde68a" rx="2"/>
          <text x="238" y="179" font-size="10" fill="#374151">Polokovy</text>
          <rect x="310" y="168" width="14" height="14" fill="#d1d5db" rx="2"/>
          <text x="328" y="179" font-size="10" fill="#374151">Vzácne plyny</text>
        </svg>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Biogénne prvky</h2>
      <p class="text-gray-700 mb-3">Biogénne prvky sú nevyhnutné pre život. Telo tvorí najmä:</p>
      <div class="flex flex-wrap gap-3">
        <span v-for="b in biogenicElements" :key="b.symbol" class="bg-green-50 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-800">
          {{ b.symbol }} — {{ b.pct }}
        </span>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>PSP usporadúva prvky podľa rastúceho Z (protónové číslo)</li>
        <li>7 periód (riadky), 18 skupín (stĺpce)</li>
        <li>V perióde rastie: elektronegativita, ionizačná energia; klesá: atómový polomer</li>
        <li>V skupine klesá elektronegativita, rastie kovový charakter</li>
        <li>Sk. 1 = alkalické kovy, sk. 2 = alkalické zeminy, sk. 17 = halogény, sk. 18 = vzácne plyny</li>
        <li>Biogénne prvky: O, C, H, N, Ca, P, S, Na, K, Cl, Mg, Fe</li>
      </ul>
    </section>

    <!-- KVÍZ -->
    <section class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Kvíz</h2>
      <p class="text-sm text-gray-500 mb-6">Otestuj si vedomosti — 6 otázok.</p>

      <div v-if="!quizFinished">
        <p data-testid="quiz-progress" class="text-xs text-gray-400 mb-3">
          Otázka {{ currentQ + 1 }} / {{ quiz.length }}
        </p>
        <Transition name="fade" mode="out-in">
          <div :key="currentQ">
            <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-4">
              {{ currentQuestion.question }}
            </p>
            <div class="space-y-2 mb-4">
              <button
                v-for="(opt, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl border transition-all text-sm',
                  selectedAnswer === null
                    ? 'border-gray-200 hover:border-orange-400 hover:bg-orange-50'
                    : selectedAnswer === i
                      ? i === currentQuestion.correctIndex ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-400 bg-red-50 text-red-800'
                      : i === currentQuestion.correctIndex ? 'border-green-500 bg-green-50 text-green-800' : 'border-gray-200 text-gray-400',
                ]"
                @click="selectAnswer(i)"
              >
                {{ opt }}
              </button>
            </div>
            <Transition name="fade">
              <div v-if="selectedAnswer !== null" data-testid="quiz-feedback" class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800 mb-4">
                {{ currentQuestion.explanation }}
              </div>
            </Transition>
            <button
              v-if="selectedAnswer !== null"
              type="button"
              data-testid="quiz-next-btn"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </Transition>
      </div>

      <div v-else data-testid="quiz-result" class="text-center">
        <p class="text-5xl mb-3">{{ scoreEmoji }}</p>
        <p class="text-2xl font-bold text-gray-800 mb-1">
          <span data-testid="quiz-score">{{ quizScore }}</span> / {{ quiz.length }}
        </p>
        <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Periodická sústava prvkov | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Periodická sústava prvkov — periódy, skupiny, kovy, nekovy, trendy v PSP. Interaktívny kvíz pre gymnazistov.' },
  ],
})

const elements = [
  { z: 1,  symbol: 'H',  name: 'Vodík',     group: 1,  period: 1, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 2,  symbol: 'He', name: 'Hélium',     group: 18, period: 1, type: 'vzácny plyn', rowClass: 'bg-gray-50' },
  { z: 3,  symbol: 'Li', name: 'Lítium',     group: 1,  period: 2, type: 'alkalický kov', rowClass: 'bg-blue-50' },
  { z: 4,  symbol: 'Be', name: 'Berýlium',   group: 2,  period: 2, type: 'kov',         rowClass: 'bg-blue-50' },
  { z: 5,  symbol: 'B',  name: 'Bór',        group: 13, period: 2, type: 'polokov',     rowClass: 'bg-yellow-50' },
  { z: 6,  symbol: 'C',  name: 'Uhlík',      group: 14, period: 2, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 7,  symbol: 'N',  name: 'Dusík',      group: 15, period: 2, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 8,  symbol: 'O',  name: 'Kyslík',     group: 16, period: 2, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 9,  symbol: 'F',  name: 'Fluór',      group: 17, period: 2, type: 'halogén',     rowClass: 'bg-purple-50' },
  { z: 10, symbol: 'Ne', name: 'Neón',       group: 18, period: 2, type: 'vzácny plyn', rowClass: 'bg-gray-50' },
  { z: 11, symbol: 'Na', name: 'Sodík',      group: 1,  period: 3, type: 'alkalický kov', rowClass: 'bg-blue-50' },
  { z: 12, symbol: 'Mg', name: 'Horčík',     group: 2,  period: 3, type: 'kov',         rowClass: 'bg-blue-50' },
  { z: 13, symbol: 'Al', name: 'Hliník',     group: 13, period: 3, type: 'kov',         rowClass: 'bg-blue-50' },
  { z: 14, symbol: 'Si', name: 'Kremík',     group: 14, period: 3, type: 'polokov',     rowClass: 'bg-yellow-50' },
  { z: 15, symbol: 'P',  name: 'Fosfor',     group: 15, period: 3, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 16, symbol: 'S',  name: 'Síra',       group: 16, period: 3, type: 'nekov',       rowClass: 'bg-green-50' },
  { z: 17, symbol: 'Cl', name: 'Chlór',      group: 17, period: 3, type: 'halogén',     rowClass: 'bg-purple-50' },
  { z: 18, symbol: 'Ar', name: 'Argón',      group: 18, period: 3, type: 'vzácny plyn', rowClass: 'bg-gray-50' },
  { z: 19, symbol: 'K',  name: 'Draslík',    group: 1,  period: 4, type: 'alkalický kov', rowClass: 'bg-blue-50' },
  { z: 20, symbol: 'Ca', name: 'Vápnik',     group: 2,  period: 4, type: 'kov',         rowClass: 'bg-blue-50' },
]

const groups = [
  { name: 'Alkalické kovy', sk: '1', prvky: 'Li, Na, K, Rb, Cs, Fr', vlastnosti: 'Mäkké, reaktívne kovy. Reagujú búrlivo s vodou za vzniku hydroxidu a vodíka. Malá hustota.' },
  { name: 'Kovy alkalických zemín', sk: '2', prvky: 'Be, Mg, Ca, Sr, Ba, Ra', vlastnosti: 'Tvrdšie ako alkalické kovy. Ca(OH)₂ = hasené vápno, CaCO₃ = vápenec.' },
  { name: 'Halogény', sk: '17', prvky: 'F, Cl, Br, I, At', vlastnosti: 'Reaktívne nekovy, tvoria dvojatómové molekuly. Reaktivita klesá: F > Cl > Br > I.' },
  { name: 'Vzácne plyny', sk: '18', prvky: 'He, Ne, Ar, Kr, Xe, Rn', vlastnosti: 'Inertné (nereaktívne). Plná valenčná vrstva (oktet). Využitie: neonové svietidlá, balóny.' },
]

const biogenicElements = [
  { symbol: 'O', pct: '65 %' }, { symbol: 'C', pct: '18 %' },
  { symbol: 'H', pct: '10 %' }, { symbol: 'N', pct: '3 %' },
  { symbol: 'Ca', pct: '1,5 %' }, { symbol: 'P', pct: '1 %' },
]

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo určuje poradie prvku v periodickej sústave?',
    options: ['Atómová hmotnosť', 'Protónové číslo Z', 'Počet neutrónov', 'Počet elektrónových vrstiev'],
    correctIndex: 1,
    explanation: 'Prvky sú usporiadané podľa rastúceho protónového čísla Z (počtu protónov v jadre).',
  },
  {
    question: 'V ktorej skupine PSP sa nachádzajú halogény?',
    options: ['Skupina 1', 'Skupina 2', 'Skupina 16', 'Skupina 17'],
    correctIndex: 3,
    explanation: 'Halogény (F, Cl, Br, I) sú v 17. skupine. Majú 7 valenčných elektrónov a chýba im 1 elektrón do oktetu.',
  },
  {
    question: 'Ako sa mení elektronegativita v rámci periódy zľava doprava?',
    options: ['Klesá', 'Rastie', 'Zostáva rovnaká', 'Najskôr rastie, potom klesá'],
    correctIndex: 1,
    explanation: 'V perióde zľava doprava elektronegativita rastie — atómy majú viac protónov a silnejšie priťahujú elektróny.',
  },
  {
    question: 'Čo majú spoločné prvky v rovnakej skupine PSP?',
    options: ['Rovnaký počet elektrónov', 'Rovnaký počet valenčných elektrónov', 'Rovnakú atómovú hmotnosť', 'Rovnaký počet neutrónov'],
    correctIndex: 1,
    explanation: 'Prvky v tej istej skupine majú rovnaký počet valenčných elektrónov, čo im dáva podobné chemické vlastnosti.',
  },
  {
    question: 'Sodík (Na) patrí medzi:',
    options: ['Halogény', 'Vzácne plyny', 'Alkalické kovy', 'Alkalické zeminy'],
    correctIndex: 2,
    explanation: 'Sodík (Z=11) je v 1. skupine — alkalické kovy. Je mäkký, reaktívny, reaguje búrlivo s vodou.',
  },
  {
    question: 'Koľko periód obsahuje periodická sústava prvkov?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
    explanation: 'PSP obsahuje 7 periód (riadkov). Prvá perióda má len 2 prvky (H, He), siedma je neúplná.',
  },
]

const { locale } = useI18n()

const titleRu = 'Периодическая система элементов'
const titleUk = 'Періодична система елементів'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

const quizRu: QuizQuestion[] = [
  {
    question: 'Что определяет порядок элемента в периодической системе?',
    options: ['Атомная масса', 'Протонное число Z', 'Количество нейтронов', 'Количество электронных слоёв'],
    correctIndex: 1,
    explanation: 'Элементы расположены по возрастающему протонному числу Z (числу протонов в ядре).',
  },
  {
    question: 'В какой группе ПСЭ находятся галогены?',
    options: ['Группа 1', 'Группа 2', 'Группа 16', 'Группа 17'],
    correctIndex: 3,
    explanation: 'Галогены (F, Cl, Br, I) находятся в 17-й группе. У них 7 валентных электронов, и им не хватает 1 электрона до октета.',
  },
  {
    question: 'Как изменяется электроотрицательность в периоде слева направо?',
    options: ['Убывает', 'Возрастает', 'Остаётся неизменной', 'Сначала возрастает, потом убывает'],
    correctIndex: 1,
    explanation: 'В периоде слева направо электроотрицательность возрастает — атомы имеют больше протонов и сильнее притягивают электроны.',
  },
  {
    question: 'Что общего у элементов одной группы ПСЭ?',
    options: ['Одинаковое число электронов', 'Одинаковое число валентных электронов', 'Одинаковая атомная масса', 'Одинаковое число нейтронов'],
    correctIndex: 1,
    explanation: 'Элементы одной группы имеют одинаковое число валентных электронов, что обеспечивает им схожие химические свойства.',
  },
  {
    question: 'Натрий (Na) относится к:',
    options: ['Галогенам', 'Благородным газам', 'Щелочным металлам', 'Щелочноземельным металлам'],
    correctIndex: 2,
    explanation: 'Натрий (Z=11) находится в 1-й группе — щелочные металлы. Мягкий, реактивный, бурно реагирует с водой.',
  },
  {
    question: 'Сколько периодов содержит периодическая система элементов?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
    explanation: 'ПСЭ содержит 7 периодов (рядов). Первый период имеет только 2 элемента (H, He), седьмой — незавершённый.',
  },
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Що визначає порядок елемента в періодичній системі?',
    options: ['Атомна маса', 'Протонне число Z', 'Кількість нейтронів', 'Кількість електронних шарів'],
    correctIndex: 1,
    explanation: 'Елементи розташовані за зростаючим протонним числом Z (кількістю протонів у ядрі).',
  },
  {
    question: 'У якій групі ПСЕ знаходяться галогени?',
    options: ['Група 1', 'Група 2', 'Група 16', 'Група 17'],
    correctIndex: 3,
    explanation: 'Галогени (F, Cl, Br, I) знаходяться в 17-й групі. Вони мають 7 валентних електронів і їм не вистачає 1 електрона до октету.',
  },
  {
    question: 'Як змінюється електронегативність у межах періоду зліва направо?',
    options: ['Спадає', 'Зростає', 'Залишається незмінною', 'Спочатку зростає, потім спадає'],
    correctIndex: 1,
    explanation: 'У межах періоду зліва направо електронегативність зростає — атоми мають більше протонів і сильніше притягують електрони.',
  },
  {
    question: 'Що спільного у елементів однієї групи ПСЕ?',
    options: ['Однакова кількість електронів', 'Однакова кількість валентних електронів', 'Однакова атомна маса', 'Однакова кількість нейтронів'],
    correctIndex: 1,
    explanation: 'Елементи однієї групи мають однакову кількість валентних електронів, що зумовлює схожі хімічні властивості.',
  },
  {
    question: 'Натрій (Na) належить до:',
    options: ['Галогенів', 'Благородних газів', 'Лужних металів', 'Лужноземельних металів'],
    correctIndex: 2,
    explanation: 'Натрій (Z=11) знаходиться в 1-й групі — лужні метали. М\'який, реактивний, бурхливо реагує з водою.',
  },
  {
    question: 'Скільки періодів містить періодична система елементів?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
    explanation: 'ПСЕ містить 7 періодів (рядів). Перший період має лише 2 елементи (H, He), сьомий — незавершений.',
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
  return r === 1 ? 'Perfektné! Zvládol si celý kvíz.' : r >= 0.7 ? 'Výborne! Takmer perfektný výsledok.' : r >= 0.4 ? 'Dobrý začiatok, oplatí sa zopakovať.' : 'Nevadí, skús to znova!'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
