<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/organicka-chemia" class="hover:text-orange-600 transition-colors">Organická chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Uhľovodíky</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">⛽</span>
      <h1 class="text-4xl font-extrabold text-orange-700">{{ activeTitle ?? 'Uhľovodíky' }}</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Uhľovodíky sú organické zlúčeniny obsahujúce iba uhlík (C) a vodík (H). Sú základom organickej chémie a hlavnou zložkou ropy a zemného plynu. Rozdeľujeme ich podľa väzieb medzi atómami uhlíka.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Alkány — nasýtené uhľovodíky</h2>
      <p class="text-gray-700 mb-3">Alkány majú všetky väzby C–C jednoduché (nasýtené). Vzorec: C<sub>n</sub>H<sub>2n+2</sub>.</p>

      <!-- SVG: štruktúrne vzorce -->
      <div class="flex justify-center mb-4">
        <svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Štruktúrne vzorce: metán (tetraéder), etén (dvojná väzba), etín (trojná väzba), benzén (hexagon)" class="w-full max-w-lg">
          <rect width="420" height="160" fill="#fff7ed" rx="10"/>
          <!-- Metán CH₄ -->
          <text x="52" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Metán CH₄</text>
          <circle cx="52" cy="80" r="16" fill="#374151"/>
          <text x="52" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="white">C</text>
          <circle cx="52" cy="44" r="12" fill="#6b7280"/>
          <text x="52" y="48" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="52" cy="116" r="12" fill="#6b7280"/>
          <text x="52" y="120" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="20" cy="80" r="12" fill="#6b7280"/>
          <text x="20" y="84" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="84" cy="80" r="12" fill="#6b7280"/>
          <text x="84" y="84" text-anchor="middle" font-size="10" fill="white">H</text>
          <line x1="52" y1="64" x2="52" y2="56" stroke="#374151" stroke-width="2"/>
          <line x1="52" y1="96" x2="52" y2="104" stroke="#374151" stroke-width="2"/>
          <line x1="36" y1="80" x2="32" y2="80" stroke="#374151" stroke-width="2"/>
          <line x1="68" y1="80" x2="72" y2="80" stroke="#374151" stroke-width="2"/>
          <!-- Etén C₂H₄ -->
          <text x="162" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Etén C₂H₄</text>
          <circle cx="140" cy="80" r="16" fill="#374151"/>
          <text x="140" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="white">C</text>
          <circle cx="184" cy="80" r="16" fill="#374151"/>
          <text x="184" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="white">C</text>
          <line x1="156" y1="77" x2="168" y2="77" stroke="#374151" stroke-width="2"/>
          <line x1="156" y1="83" x2="168" y2="83" stroke="#374151" stroke-width="2"/>
          <circle cx="118" cy="60" r="12" fill="#6b7280"/>
          <text x="118" y="64" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="118" cy="100" r="12" fill="#6b7280"/>
          <text x="118" y="104" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="206" cy="60" r="12" fill="#6b7280"/>
          <text x="206" y="64" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="206" cy="100" r="12" fill="#6b7280"/>
          <text x="206" y="104" text-anchor="middle" font-size="10" fill="white">H</text>
          <line x1="128" y1="66" x2="134" y2="70" stroke="#374151" stroke-width="2"/>
          <line x1="128" y1="94" x2="134" y2="90" stroke="#374151" stroke-width="2"/>
          <line x1="194" y1="70" x2="200" y2="66" stroke="#374151" stroke-width="2"/>
          <line x1="194" y1="90" x2="200" y2="94" stroke="#374151" stroke-width="2"/>
          <!-- Etín C₂H₂ -->
          <text x="285" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Etín C₂H₂</text>
          <circle cx="265" cy="80" r="16" fill="#374151"/>
          <text x="265" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="white">C</text>
          <circle cx="305" cy="80" r="16" fill="#374151"/>
          <text x="305" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="white">C</text>
          <line x1="281" y1="77" x2="289" y2="77" stroke="#374151" stroke-width="2"/>
          <line x1="281" y1="80" x2="289" y2="80" stroke="#374151" stroke-width="2"/>
          <line x1="281" y1="83" x2="289" y2="83" stroke="#374151" stroke-width="2"/>
          <circle cx="242" cy="80" r="12" fill="#6b7280"/>
          <text x="242" y="84" text-anchor="middle" font-size="10" fill="white">H</text>
          <circle cx="328" cy="80" r="12" fill="#6b7280"/>
          <text x="328" y="84" text-anchor="middle" font-size="10" fill="white">H</text>
          <line x1="254" y1="80" x2="249" y2="80" stroke="#374151" stroke-width="2"/>
          <line x1="317" y1="80" x2="321" y2="80" stroke="#374151" stroke-width="2"/>
          <!-- Benzén -->
          <text x="385" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Benzén C₆H₆</text>
          <polygon points="385,50 405,65 405,95 385,110 365,95 365,65" fill="none" stroke="#374151" stroke-width="2"/>
          <circle cx="385" cy="80" r="15" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="385" y="135" text-anchor="middle" font-size="9" fill="#374151">aromatický</text>
          <text x="385" y="145" text-anchor="middle" font-size="9" fill="#374151">systém</text>
        </svg>
      </div>

      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-100">
              <th class="border border-orange-200 px-3 py-2 text-left">Názov</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Vzorec</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Skupenstvo (25°C)</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Využitie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a in alkanes" :key="a.name" class="odd:bg-white even:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1">{{ a.name }}</td>
              <td class="border border-gray-200 px-3 py-1 font-mono">{{ a.formula }}</td>
              <td class="border border-gray-200 px-3 py-1">{{ a.state }}</td>
              <td class="border border-gray-200 px-3 py-1">{{ a.use }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 class="font-bold text-orange-700 mb-2">Reakcie alkánov</h3>
        <p class="text-sm text-gray-700 mb-1"><strong>Horenie:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O (úplné horenie)</p>
        <p class="text-sm text-gray-700"><strong>Substitučná radikálová halogenácia:</strong> CH₄ + Cl₂ → CH₃Cl + HCl (UV žiarenie)</p>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Alkény a alkíny — nenasýtené uhľovodíky</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Alkény C<sub>n</sub>H<sub>2n</sub></h3>
          <p class="text-sm text-gray-700 mb-2">Dvojitá väzba C=C. Etén (etylén) CH₂=CH₂.</p>
          <p class="text-sm text-gray-700 mb-1">Adičná reakcia: CH₂=CH₂ + H₂ → CH₃–CH₃</p>
          <p class="text-sm text-gray-700">Polymerizácia: n CH₂=CH₂ → (–CH₂–CH₂–)<sub>n</sub> (polyetylén PE)</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Alkíny C<sub>n</sub>H<sub>2n-2</sub></h3>
          <p class="text-sm text-gray-700 mb-2">Trojitá väzba C≡C. Etín (acetylén) HC≡CH.</p>
          <p class="text-sm text-gray-700 mb-1">Využitie: autogénne zváranie a rezanie kovov</p>
          <p class="text-sm text-gray-700">Horenie: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O</p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Arény — aromatické uhľovodíky</h2>
      <p class="text-gray-700 mb-4">
        Arény obsahujú benzénový kruh — 6 atómov C s delokalizovanými elektrónmi (aromatický systém). Benzén C₆H₆ je základná aromatická látka.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="ar in arenes" :key="ar.name" class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-center">
          <p class="font-bold text-orange-700">{{ ar.name }}</p>
          <p class="font-mono text-sm text-gray-600 mb-1">{{ ar.formula }}</p>
          <p class="text-xs text-gray-500">{{ ar.use }}</p>
        </div>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
        <p class="text-sm text-gray-700"><strong>Reakcie arénov:</strong> Substitučná elektrofilná aromatická reakcia (nie adičná) — zachovávajú aromaticitu. Napr. nitrácia benzénu: C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O.</p>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>Alkány (CₙH₂ₙ₊₂): jednoduché väzby C–C; CH₄, C₂H₆...C₁₀H₂₂; horenie, substitúcia</li>
        <li>Alkény (CₙH₂ₙ): dvojitá väzba C=C; etén → polyetylén (PE); adičné reakcie</li>
        <li>Alkíny (CₙH₂ₙ₋₂): trojitá väzba C≡C; etín (acetylén) — zváranie</li>
        <li>Arény: benzénový kruh C₆H₆; toluén, styrén; substitučná aromatická reakcia</li>
        <li>Izoméria: rovnaký vzorec, iná štruktúra (napr. bután = n-bután / i-bután)</li>
        <li>Názvoslovie IUPAC: počet uhlíkov → predpona (met-, et-, prop-, but-...) + prípona (-án, -én, -ín)</li>
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
  title: 'Uhľovodíky | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Alkány, alkény, alkíny, arény — uhľovodíky, vzorce, reakcie a názvoslovie pre gymnazistov.' },
  ],
})

const alkanes = [
  { name: 'Metán', formula: 'CH₄', state: 'plyn', use: 'zemný plyn, palivo' },
  { name: 'Etán', formula: 'C₂H₆', state: 'plyn', use: 'LPG' },
  { name: 'Propán', formula: 'C₃H₈', state: 'plyn', use: 'propán-bután (camping)' },
  { name: 'Bután', formula: 'C₄H₁₀', state: 'plyn', use: 'zapaľovač, camping' },
  { name: 'Pentán', formula: 'C₅H₁₂', state: 'kvapalina', use: 'rozpúšťadlo' },
  { name: 'Dekán', formula: 'C₁₀H₂₂', state: 'kvapalina', use: 'nafta' },
]

const arenes = [
  { name: 'Benzén', formula: 'C₆H₆', use: 'Základná aromatická látka, karcinogén' },
  { name: 'Toluén', formula: 'C₇H₈', use: 'Rozpúšťadlo, výroba TNT' },
  { name: 'Styrén', formula: 'C₈H₈', use: 'Výroba polystyrénu (PS)' },
]

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aký je vzorec pre alkány?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'],
    correctIndex: 1,
    explanation: 'Alkány (nasýtené): CₙH₂ₙ₊₂. Alkény: CₙH₂ₙ. Alkíny: CₙH₂ₙ₋₂. Arény: CₙH₂ₙ₋₆ (benzén C₆H₆).',
  },
  {
    question: 'Aký produkt vzniká polymerizáciou eténu?',
    options: ['Polypropylén', 'PVC', 'Polyetylén (PE)', 'Polystyrén'],
    correctIndex: 2,
    explanation: 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ = polyetylén (PE). Je to najrozšírenejší plast.',
  },
  {
    question: 'Čo je acetylén a na čo sa využíva?',
    options: ['Etán, palivo rakiet', 'Etín (HC≡CH), zváranie a rezanie kovov', 'Etén, výroba plastov', 'Metán, varenie'],
    correctIndex: 1,
    explanation: 'Acetylén = etín HC≡CH. Jeho plameň dosahuje ~3000 °C — používa sa na autogénne zváranie a rezanie kovov.',
  },
  {
    question: 'Čím sa líšia arény od alkénov?',
    options: ['Arény nemajú žiadne dvojité väzby', 'Arény reagujú substitučne, nie adično (zachovávajú aromaticitu)', 'Arény sú vždy plyny', 'Arény obsahujú dusík'],
    correctIndex: 1,
    explanation: 'Benzénový kruh je stabilizovaný delokalizáciou elektrónov. Arény reagujú substitučne (nie adično) — zachovávajú aromatický systém.',
  },
  {
    question: 'Čo je izoméria?',
    options: ['Prvky s rovnakým Z', 'Zlúčeniny s rovnakým vzorcom ale inou štruktúrou', 'Reakcia s izotopmi', 'Delenie alkánov podľa teploty'],
    correctIndex: 1,
    explanation: 'Izoméry majú rovnaký molekulový vzorec, ale inú štruktúru (napr. n-bután a i-bután, oba C₄H₁₀).',
  },
  {
    question: 'Aký typ reakcie je charakteristický pre alkány?',
    options: ['Adičná', 'Eliminačná', 'Substitučná radikálová', 'Neutralizácia'],
    correctIndex: 2,
    explanation: 'Alkány sú málo reaktívne. Ich typická reakcia je substitučná radikálová halogenácia (napr. CH₄ + Cl₂ → CH₃Cl + HCl za UV svetla).',
  },
]

const { locale } = useI18n()

const titleRu = 'Углеводороды'
const titleUk = 'Вуглеводні'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

const quizRu: QuizQuestion[] = [
  {
    question: 'Какова формула алканов?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'],
    correctIndex: 1,
    explanation: 'Алканы (насыщенные): CₙH₂ₙ₊₂. Алкены: CₙH₂ₙ. Алкины: CₙH₂ₙ₋₂. Арены: CₙH₂ₙ₋₆ (бензол C₆H₆).',
  },
  {
    question: 'Какой продукт образуется при полимеризации этена?',
    options: ['Полипропилен', 'ПВХ', 'Полиэтилен (ПЭ)', 'Полистирол'],
    correctIndex: 2,
    explanation: 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ = полиэтилен (ПЭ). Это наиболее распространённый пластик.',
  },
  {
    question: 'Что такое ацетилен и для чего он используется?',
    options: ['Этан, ракетное топливо', 'Этин (HC≡CH), сварка и резка металлов', 'Этен, производство пластмасс', 'Метан, приготовление пищи'],
    correctIndex: 1,
    explanation: 'Ацетилен = этин HC≡CH. Его пламя достигает ~3000 °C — используется для автогенной сварки и резки металлов.',
  },
  {
    question: 'Чем арены отличаются от алкенов?',
    options: ['Арены не имеют двойных связей', 'Арены реагируют по механизму замещения, а не присоединения (сохраняют ароматичность)', 'Арены всегда являются газами', 'Арены содержат азот'],
    correctIndex: 1,
    explanation: 'Бензольное кольцо стабилизировано делокализацией электронов. Арены реагируют по механизму замещения (не присоединения) — сохраняют ароматическую систему.',
  },
  {
    question: 'Что такое изомерия?',
    options: ['Элементы с одинаковым Z', 'Соединения с одинаковой формулой, но разной структурой', 'Реакция с изотопами', 'Разделение алканов по температуре'],
    correctIndex: 1,
    explanation: 'Изомеры имеют одинаковую молекулярную формулу, но разную структуру (например, н-бутан и и-бутан, оба C₄H₁₀).',
  },
  {
    question: 'Какой тип реакции характерен для алканов?',
    options: ['Реакция присоединения', 'Реакция элиминирования', 'Радикальная реакция замещения', 'Нейтрализация'],
    correctIndex: 2,
    explanation: 'Алканы малореакционноспособны. Их типичная реакция — радикальное галогенирование замещения (напр. CH₄ + Cl₂ → CH₃Cl + HCl под UV-светом).',
  },
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Яка формула алканів?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'],
    correctIndex: 1,
    explanation: 'Алкани (насичені): CₙH₂ₙ₊₂. Алкени: CₙH₂ₙ. Алкіни: CₙH₂ₙ₋₂. Арени: CₙH₂ₙ₋₆ (бензол C₆H₆).',
  },
  {
    question: 'Який продукт утворюється при полімеризації етену?',
    options: ['Поліпропілен', 'ПВХ', 'Поліетилен (ПЕ)', 'Полістирол'],
    correctIndex: 2,
    explanation: 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ = поліетилен (ПЕ). Це найпоширеніший пластик.',
  },
  {
    question: 'Що таке ацетилен і для чого він використовується?',
    options: ['Етан, ракетне паливо', 'Етин (HC≡CH), зварювання та різання металів', 'Етен, виробництво пластмас', 'Метан, приготування їжі'],
    correctIndex: 1,
    explanation: "Ацетилен = етин HC≡CH. Його полум'я досягає ~3000 °C — використовується для автогенного зварювання та різання металів.",
  },
  {
    question: 'Чим арени відрізняються від алкенів?',
    options: ["Арени не мають подвійних зв'язків", 'Арени реагують за механізмом заміщення, а не приєднання (зберігають ароматичність)', 'Арени завжди є газами', 'Арени містять азот'],
    correctIndex: 1,
    explanation: 'Бензольне кільце стабілізоване делокалізацією електронів. Арени реагують за механізмом заміщення (не приєднання) — зберігають ароматичну систему.',
  },
  {
    question: 'Що таке ізомерія?',
    options: ['Елементи з однаковим Z', 'Сполуки з однаковою формулою, але різною структурою', 'Реакція з ізотопами', 'Поділ алканів за температурою'],
    correctIndex: 1,
    explanation: 'Ізомери мають однакову молекулярну формулу, але різну структуру (наприклад, н-бутан і і-бутан, обидва C₄H₁₀).',
  },
  {
    question: 'Який тип реакції характерний для алканів?',
    options: ['Реакція приєднання', 'Реакція елімінування', 'Радикальна реакція заміщення', 'Нейтралізація'],
    correctIndex: 2,
    explanation: 'Алкани малореакційні. Їхня типова реакція — радикальне галогенування заміщення (напр. CH₄ + Cl₂ → CH₃Cl + HCl під UV-світлом).',
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
  return r === 1 ? 'Perfektné!' : r >= 0.7 ? 'Výborne!' : r >= 0.4 ? 'Oplatí sa zopakovať.' : 'Skús znova!'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
