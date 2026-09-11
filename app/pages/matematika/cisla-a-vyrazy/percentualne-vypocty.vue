<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/cisla-a-vyrazy" class="hover:text-blue-600 transition-colors">Čísla, premenné a výrazy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Percentuálne výpočty</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-4xl">💹</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Percentuálne výpočty</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10 leading-relaxed">
      Percentá sú základným nástrojom matematiky aj každodenného života — pomáhajú nám porovnávať zlomky,
      vypočítať zľavu, DPH alebo bankový úrok. Táto stránka ťa prevedie od základných definícií až po
      zložené úrokovanie.
    </p>

    <!-- ===== SEKCIA 1: ZÁKLADY PERCENT ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Základy percent a promile</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Slovo <strong>percento</strong> pochádza z latinského <em>per centum</em> — z každých sto. Percento
        je teda stotina celku.
      </p>

      <div class="bg-blue-50 rounded-2xl p-6 mb-6">
        <p class="font-semibold text-blue-800 mb-3">Definície</p>
        <MathFormula display formula="1\% = \frac{1}{100} = 0{,}01" />
        <MathFormula display formula="1\text{\textperthousand} = \frac{1}{1000} = 0{,}001 \quad \text{(promile)}" />
      </div>

      <p class="text-gray-700 mb-4">
        Základný vzorec na výpočet percenta <MathFormula formula="p" /> z celku, keď poznáme
        časť <MathFormula formula="\check{c}" /> a základ (celok) <MathFormula formula="z" />:
      </p>
      <MathFormula display formula="p = \frac{\check{c}}{z} \cdot 100" />

      <p class="text-gray-700 mt-4 mb-2">Z toho vyplývajú tri základné úlohy:</p>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse rounded-xl overflow-hidden">
          <thead class="bg-blue-100 text-blue-800">
            <tr>
              <th class="px-4 py-2 text-left font-semibold">Úloha</th>
              <th class="px-4 py-2 text-left font-semibold">Hľadáme</th>
              <th class="px-4 py-2 text-left font-semibold">Vzorec</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-white">
              <td class="px-4 py-3 text-gray-700">Koľko % tvorí časť zo základu?</td>
              <td class="px-4 py-3 font-mono text-blue-700">p</td>
              <td class="px-4 py-3"><MathFormula formula="p = \tfrac{\check{c}}{z} \cdot 100" /></td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3 text-gray-700">Koľko je p % zo základu z?</td>
              <td class="px-4 py-3 font-mono text-blue-700">č</td>
              <td class="px-4 py-3"><MathFormula formula="\check{c} = z \cdot \tfrac{p}{100}" /></td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-3 text-gray-700">Časť č tvorí p %, čo je základ?</td>
              <td class="px-4 py-3 font-mono text-blue-700">z</td>
              <td class="px-4 py-3"><MathFormula formula="z = \tfrac{\check{c} \cdot 100}{p}" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Example 1 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-4">
        <p class="font-semibold text-gray-800 mb-2">Príklad 1: Koľko percent tvorí 45 z 180?</p>
        <MathFormula display formula="p = \frac{45}{180} \cdot 100 = 0{,}25 \cdot 100 = 25\,\%" />
        <p class="text-gray-600 mt-2 text-sm">Odpoveď: 45 tvorí <strong>25 %</strong> z 180.</p>
      </div>

      <!-- Example 2 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <p class="font-semibold text-gray-800 mb-2">Príklad 2: Koľko je 35 % zo 640 €?</p>
        <MathFormula display formula="\check{c} = 640 \cdot \frac{35}{100} = 640 \cdot 0{,}35 = 224\,\text{€}" />
        <p class="text-gray-600 mt-2 text-sm">Odpoveď: 35 % zo 640 € je <strong>224 €</strong>.</p>
      </div>
    </section>

    <!-- ===== SVG ILUSTRÁCIA ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Percentuálne rozloženie výdavkov domácnosti</h2>
      <p class="text-gray-700 mb-6">
        Príkladné rozloženie mesačného rozpočtu ukazuje, ako percentá opisujú reálne situácie:
      </p>
      <div class="flex flex-col items-center">
        <svg
          viewBox="0 0 400 230"
          class="w-full max-w-xl"
          role="img"
          aria-label="Kruhový výsekový diagram znázorňujúci percentuálne rozloženie výdavkov domácnosti: Bývanie 35%, Jedlo 25%, Doprava 15%, Voľný čas 15%, Ostatné 10%"
        >
          <!-- Pie slices (center 130,115 radius 90) -->
          <!-- Bývanie 35% — od -90° do 36° -->
          <path d="M 130 115 L 130 25 A 90 90 0 0 1 202.8 168.1 Z" fill="#3b82f6" />
          <!-- Jedlo 25% — od 36° do 126° -->
          <path d="M 130 115 L 202.8 168.1 A 90 90 0 0 1 77.2 187.8 Z" fill="#22c55e" />
          <!-- Doprava 15% — od 126° do 180° -->
          <path d="M 130 115 L 77.2 187.8 A 90 90 0 0 1 40 115 Z" fill="#eab308" />
          <!-- Voľný čas 15% — od 180° do 234° -->
          <path d="M 130 115 L 40 115 A 90 90 0 0 1 77.2 42.2 Z" fill="#f97316" />
          <!-- Ostatné 10% — od 234° do 270° -->
          <path d="M 130 115 L 77.2 42.2 A 90 90 0 0 1 130 25 Z" fill="#9ca3af" />

          <!-- Legend -->
          <rect x="245" y="30" width="14" height="14" fill="#3b82f6" rx="2" />
          <text x="265" y="42" font-size="13" fill="#374151">Bývanie 35 %</text>

          <rect x="245" y="57" width="14" height="14" fill="#22c55e" rx="2" />
          <text x="265" y="69" font-size="13" fill="#374151">Jedlo 25 %</text>

          <rect x="245" y="84" width="14" height="14" fill="#eab308" rx="2" />
          <text x="265" y="96" font-size="13" fill="#374151">Doprava 15 %</text>

          <rect x="245" y="111" width="14" height="14" fill="#f97316" rx="2" />
          <text x="265" y="123" font-size="13" fill="#374151">Voľný čas 15 %</text>

          <rect x="245" y="138" width="14" height="14" fill="#9ca3af" rx="2" />
          <text x="265" y="150" font-size="13" fill="#374151">Ostatné 10 %</text>
        </svg>
      </div>
    </section>

    <!-- ===== SEKCIA 2: ZĽAVY A DPH ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Zľavy, DPH a trojčlenka</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Najbežnejšie použitie percent v každodennom živote sú <strong>zľavy</strong> a
        <strong>daň z pridanej hodnoty (DPH)</strong>. Na Slovensku je štandardná sadzba DPH <strong>20 %</strong>.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p class="font-semibold text-blue-800 mb-3">Výpočet zľavy</p>
          <MathFormula display formula="\text{Zľavnená cena} = \text{Pôv. cena} \cdot \!\left(1 - \frac{p}{100}\right)" />
          <p class="text-gray-700 mt-3 text-sm font-medium">Príklad: laptop za 800 € so zľavou 15 %</p>
          <MathFormula display formula="800 \cdot (1 - 0{,}15) = 800 \cdot 0{,}85 = 680\,\text{€}" />
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p class="font-semibold text-blue-800 mb-3">Výpočet DPH (20 %)</p>
          <MathFormula display formula="\text{Cena s DPH} = \text{Cena bez DPH} \cdot 1{,}20" />
          <p class="text-gray-700 mt-3 text-sm font-medium">Príklad: tovar za 250 € bez DPH</p>
          <MathFormula display formula="250 \cdot 1{,}20 = 300\,\text{€}" />
        </div>
      </div>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Na riešenie úloh s <strong>priamou úmernosťou</strong> (<MathFormula formula="y = kx" />) sa používa
        trojčlenka. Ak poznáme tri veličiny a hľadáme štvrtú:
      </p>
      <MathFormula display formula="a : b = c : x \quad \Longrightarrow \quad x = \frac{b \cdot c}{a}" />

      <!-- Example 3 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <p class="font-semibold text-gray-800 mb-2">Príklad 3: Výpočet ceny bez DPH trojčlenkou</p>
        <p class="text-gray-700 mb-2 text-sm">Tovar s DPH stojí 360 €. Koľko stojí bez DPH (DPH = 20 %)?</p>
        <MathFormula display formula="100\,\% : 120\,\% = x : 360\,\text{€} \quad \Rightarrow \quad x = \frac{100 \cdot 360}{120} = 300\,\text{€}" />
        <p class="text-gray-600 mt-2 text-sm">Odpoveď: cena bez DPH je <strong>300 €</strong>.</p>
      </div>
    </section>

    <!-- ===== SEKCIA 3: ÚROKOVANIE ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Úrokovanie</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Úrokovanie opisuje, ako rastie vložený kapitál v čase. Rozlišujeme
        <strong>jednoduché</strong> a <strong>zložené</strong> úrokovanie.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p class="font-semibold text-blue-800 mb-3">Jednoduché úrokovanie</p>
          <MathFormula display formula="K_n = K_0 \cdot (1 + i \cdot n)" />
          <ul class="text-sm text-gray-700 mt-3 space-y-1">
            <li><MathFormula formula="K_0" /> — počiatočný kapitál (istina)</li>
            <li><MathFormula formula="i" /> — úroková miera (napr. 0,05 pre 5 %)</li>
            <li><MathFormula formula="n" /> — počet úrokových období</li>
          </ul>
          <p class="text-xs text-gray-500 mt-3">Úrok sa vypočíta vždy len z pôvodnej istiny.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p class="font-semibold text-blue-800 mb-3">Zložené úrokovanie</p>
          <MathFormula display formula="K_n = K_0 \cdot (1 + i)^n" />
          <ul class="text-sm text-gray-700 mt-3 space-y-1">
            <li><MathFormula formula="K_0" /> — počiatočný kapitál</li>
            <li><MathFormula formula="i" /> — ročná úroková miera</li>
            <li><MathFormula formula="n" /> — počet rokov</li>
          </ul>
          <p class="text-xs text-gray-500 mt-3">Úrok sa každé obdobie pripočíta k istine — <em>úrok z úroku</em>.</p>
        </div>
      </div>

      <!-- Example 4 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-4">
        <p class="font-semibold text-gray-800 mb-2">Príklad 4: Jednoduché úrokovanie</p>
        <p class="text-gray-700 mb-2 text-sm">Vložíš 1 000 € na účet s ročným úrokom 5 % na 3 roky.</p>
        <MathFormula display formula="K_3 = 1\,000 \cdot (1 + 0{,}05 \cdot 3) = 1\,000 \cdot 1{,}15 = 1\,150\,\text{€}" />
        <p class="text-gray-600 mt-2 text-sm">Po 3 rokoch budeš mať <strong>1 150 €</strong> — úrok je 150 €.</p>
      </div>

      <!-- Example 5 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <p class="font-semibold text-gray-800 mb-2">Príklad 5: Zložené úrokovanie</p>
        <p class="text-gray-700 mb-2 text-sm">Vložíš 2 000 € na 2 roky pri ročnom úroku 10 %.</p>
        <MathFormula display formula="K_2 = 2\,000 \cdot (1 + 0{,}10)^2 = 2\,000 \cdot 1{,}21 = 2\,420\,\text{€}" />
        <p class="text-gray-600 mt-2 text-sm">
          Pri zloženom úrokovaní dostaneš <strong>2 420 €</strong> — o 20 € viac než
          pri jednoduchom (2 400 €), vďaka úroku z úroku.
        </p>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Percento:</strong> <MathFormula formula="1\% = \tfrac{1}{100} = 0{,}01" />,
            základný vzorec <MathFormula formula="p = \tfrac{\check{c}}{z} \cdot 100" /></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Promile:</strong> <MathFormula formula="1\text{\textperthousand} = \tfrac{1}{1000} = 0{,}001" /></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Priama úmernosť (trojčlenka):</strong>
            <MathFormula formula="a:b = c:x \;\Rightarrow\; x = \tfrac{b \cdot c}{a}" /></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>DPH 20 % (SK):</strong> cena s DPH = cena bez DPH × 1,20</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Jednoduché úrokovanie:</strong>
            <MathFormula formula="K_n = K_0 \cdot (1 + i \cdot n)" /></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Zložené úrokovanie:</strong>
            <MathFormula formula="K_n = K_0 \cdot (1 + i)^n" /></span>
        </li>
      </ul>
    </div>

    <!-- ===== KVÍZ ===== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz — otestuj sa</h2>

      <div v-if="!quizFinished">
        <div data-testid="quiz-progress" class="text-sm text-gray-500 mb-3">
          Otázka {{ currentQ + 1 }} z {{ quiz.length }}
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-5">
          <div
            class="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${((currentQ) / quiz.length) * 100}%` }"
          />
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="currentQ" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p data-testid="quiz-question" class="text-lg font-medium text-gray-800 mb-5">
              {{ currentQuestion.question }}
            </p>

            <div class="space-y-3">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                class="w-full text-left px-4 py-3 rounded-xl border transition-colors"
                :class="{
                  'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 cursor-pointer': selectedAnswer === null,
                  'bg-green-100 border-green-400 text-green-800 font-semibold': selectedAnswer !== null && i === currentQuestion.correctIndex,
                  'bg-red-100 border-red-400 text-red-800': selectedAnswer === i && i !== currentQuestion.correctIndex,
                  'bg-gray-50 border-gray-200 opacity-50 cursor-default': selectedAnswer !== null && i !== currentQuestion.correctIndex && i !== selectedAnswer
                }"
                @click="selectAnswer(i)"
              >
                {{ option }}
              </button>
            </div>

            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="quiz-feedback"
                class="mt-5 p-4 rounded-xl text-sm leading-relaxed"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'"
              >
                <span class="font-semibold mr-1">{{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}</span>
                {{ currentQuestion.explanation }}
              </div>
            </Transition>

            <div class="mt-5 flex justify-end">
              <button
                v-if="selectedAnswer !== null"
                type="button"
                data-testid="quiz-next-btn"
                class="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Result -->
      <div v-else data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
        <p data-testid="quiz-score" class="text-gray-600 mb-6 text-lg">
          Skóre: <strong>{{ quizScore }} / {{ quiz.length }}</strong> otázok správne
        </p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
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

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je 1 % zo 800?',
    options: ['8', '80', '0,8', '800'],
    correctIndex: 0,
    explanation: '1 % = 1/100, teda 800 × 0,01 = 8.'
  },
  {
    question: 'Škola má 600 žiakov. 35 % z nich sú prváci. Koľko je prvákov?',
    options: ['180', '210', '200', '250'],
    correctIndex: 1,
    explanation: '600 × 35/100 = 600 × 0,35 = 210 prvákov.'
  },
  {
    question: 'Cena laptopa bola 850 €, po zľave je 680 €. O koľko percent klesla cena?',
    options: ['25 %', '17 %', '20 %', '15 %'],
    correctIndex: 2,
    explanation: 'Pokles = 170 €. p = (170 / 850) × 100 = 20 %.'
  },
  {
    question: 'Tovar stojí bez DPH 250 €. DPH je 20 %. Aká je cena s DPH?',
    options: ['270 €', '275 €', '310 €', '300 €'],
    correctIndex: 3,
    explanation: '250 × 1,20 = 300 €. DPH 20 % z 250 € je 50 €, spolu 300 €.'
  },
  {
    question: 'Vložíš 1 000 € na účet s ročným úrokom 5 %. Koľko budeš mať po 3 rokoch pri jednoduchom úrokovaní?',
    options: ['1 050 €', '1 157,63 €', '1 200 €', '1 150 €'],
    correctIndex: 3,
    explanation: 'Kₙ = 1 000 × (1 + 0,05 × 3) = 1 000 × 1,15 = 1 150 €.'
  },
  {
    question: 'Pri zloženom úrokovaní vložíš 2 000 € na 2 roky, ročný úrok je 10 %. Aký je výsledok?',
    options: ['2 400 €', '2 420 €', '2 200 €', '2 440 €'],
    correctIndex: 1,
    explanation: 'Kₙ = 2 000 × (1,10)² = 2 000 × 1,21 = 2 420 €. Každý rok sa úročí aj predchádzajúci úrok.'
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
