<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/stavba-latky" class="hover:text-orange-600 transition-colors">Stavba látky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Chemická väzba</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">🔗</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Chemická väzba</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Chemická väzba je sila, ktorá drží atómy pohromade v molekule alebo kryštalickej látke. Vzniká pri znižovaní celkovej energie sústavy — atómy sa spájajú, lebo je to pre ne energeticky výhodné.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Kovalentná väzba</h2>
      <p class="text-gray-700 mb-4">
        Kovalentná väzba vzniká zdieľaním elektrónového páru medzi dvomi atómami. Je typická pre <strong>nekovy</strong>.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Nepolárna kovalentná väzba</h3>
          <p class="text-sm text-gray-700 mb-2">Vzniká medzi <strong>rovnakými atómami</strong>. Elektrónový pár je rozdelený symetricky.</p>
          <p class="text-sm font-mono text-gray-600">H–H (H₂), O=O (O₂), N≡N (N₂)</p>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 class="font-bold text-amber-700 mb-2">Polárna kovalentná väzba</h3>
          <p class="text-sm text-gray-700 mb-2">Vzniká medzi <strong>rôznymi atómami</strong>. Elektrónový pár je posunutý k elektronegativnejšiemu atómu.</p>
          <p class="text-sm font-mono text-gray-600">H–Cl (HCl), H–O–H (H₂O)</p>
        </div>
      </div>

      <!-- SVG: molekula vody -->
      <div class="flex justify-center mb-4">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molekula vody H₂O — polárna kovalentná väzba, uhlové usporiadanie 104,5°, parciálne náboje" class="w-full max-w-sm">
          <rect width="300" height="200" fill="#fff7ed" rx="12"/>
          <!-- kyslík -->
          <circle cx="150" cy="90" r="28" fill="#ef4444" opacity="0.85"/>
          <text x="150" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="white">O</text>
          <!-- vodík vľavo -->
          <circle cx="68" cy="150" r="20" fill="#3b82f6" opacity="0.85"/>
          <text x="68" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">H</text>
          <!-- vodík vpravo -->
          <circle cx="232" cy="150" r="20" fill="#3b82f6" opacity="0.85"/>
          <text x="232" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">H</text>
          <!-- väzby -->
          <line x1="122" y1="112" x2="86" y2="135" stroke="#6b7280" stroke-width="3"/>
          <line x1="178" y1="112" x2="214" y2="135" stroke="#6b7280" stroke-width="3"/>
          <!-- parciálne náboje -->
          <text x="150" y="60" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">δ–</text>
          <text x="48" y="165" text-anchor="middle" font-size="11" fill="#1d4ed8">δ+</text>
          <text x="252" y="165" text-anchor="middle" font-size="11" fill="#1d4ed8">δ+</text>
          <!-- uhol -->
          <text x="150" y="130" text-anchor="middle" font-size="10" fill="#374151">104,5°</text>
          <text x="150" y="185" text-anchor="middle" font-size="11" fill="#374151">Polárna molekula H₂O</text>
        </svg>
      </div>
      <p class="text-sm text-gray-500 text-center mb-4">Kyslík je elektronegativnejší → priťahuje elektrónový pár → vzniká parciálny záporný náboj δ–</p>

      <div class="bg-white border border-gray-200 rounded-xl p-4 mb-4">
        <h3 class="font-semibold text-gray-700 mb-2">Násobné väzby</h3>
        <ul class="text-sm text-gray-700 space-y-1">
          <li><span class="font-mono font-bold">–</span> Jednoduchá väzba: 1 zdieľaný pár (H–H)</li>
          <li><span class="font-mono font-bold">=</span> Dvojitá väzba: 2 zdieľané páry (O=O, C=O)</li>
          <li><span class="font-mono font-bold">≡</span> Trojitá väzba: 3 zdieľané páry (N≡N, HC≡CH)</li>
        </ul>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Iónová väzba</h2>
      <p class="text-gray-700 mb-4">
        Iónová väzba vzniká medzi <strong>kovom a nekovom</strong> — elektrón sa úplne prenesie z kovu na nekov. Vznikajú ióny s opačnými nábojmi, ktoré sa navzájom priťahujú.
      </p>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
        <h3 class="font-bold text-blue-700 mb-2">Príklad: NaCl (kuchynská soľ)</h3>
        <p class="text-sm text-gray-700 mb-1">Na → Na⁺ + e⁻ &nbsp;&nbsp;(sodík stráca elektrón)</p>
        <p class="text-sm text-gray-700 mb-1">Cl + e⁻ → Cl⁻ &nbsp;&nbsp;(chlór prijíma elektrón)</p>
        <p class="text-sm text-gray-700">Na⁺ + Cl⁻ → NaCl &nbsp;&nbsp;(iónová mriežka)</p>
      </div>
      <p class="text-gray-700">Látky s iónovou väzbou majú <strong>vysoké teploty topenia</strong>, sú krehké a vo vodnom roztoku vedú elektrický prúd.</p>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Vodíková väzba</h2>
      <p class="text-gray-700 mb-4">
        Vodíková väzba je slabá elektrostatická príťažlivosť medzi atómom H (viazaným na N, O alebo F) a voľným elektrónovým párom iného N, O alebo F. Nie je to väzba vnútri molekuly, ale <strong>medzimolekulová interakcia</strong>.
      </p>
      <div class="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
        <h3 class="font-bold text-green-700 mb-2">Dôsledky vodíkovej väzby vo vode</h3>
        <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Neobvykle vysoký bod varu vody (100 °C) — bez vodíkových väzieb by bol –80 °C</li>
          <li>Anomália vody — ľad (pevná fáza) je ľahší ako kvapalná voda → ľad pláva</li>
          <li>Voda ako rozpúšťadlo — rozpúšťa polárne látky a ióny</li>
          <li>Biologický význam: dvojšpirálovitá štruktúra DNA je stabilizovaná vodíkovými väzbami</li>
        </ul>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Kovová väzba a typy kryštálov</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Kovová väzba</h3>
          <p class="text-sm text-gray-700">Kladné iónty kovu sú obklopené „morom" voľných elektrónov. Vysvetľuje elektrickú vodivosť a tepelnú vodivosť kovov.</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Typy kryštálov</h3>
          <ul class="text-sm text-gray-700 space-y-1">
            <li><strong>Iónový</strong>: NaCl, CaCO₃ — tvrdý, vysoký Tt</li>
            <li><strong>Kovový</strong>: Fe, Cu — elektricky vodivý</li>
            <li><strong>Molekulový</strong>: ľad, jód — nízky Tt</li>
            <li><strong>Kovalentný</strong>: diamant — extrémne tvrdý</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>Kovalentná väzba: zdieľanie elektrónového páru (nekovy + nekovy)</li>
        <li>Nepolárna: rovnaké atómy (H₂, N₂); polárna: rôzne atómy (HCl, H₂O)</li>
        <li>Iónová väzba: prenos elektrónu (kov + nekov) → ióny Na⁺, Cl⁻</li>
        <li>Vodíková väzba: medzimolekulová (H–O···O–H) — vysvetľuje anomálie vody</li>
        <li>Kovová väzba: „more" voľných elektrónov → vodivosť</li>
        <li>Diamant (kovalentný kryštál) vs grafit (vrstevnatá štruktúra) — obe sú čistý uhlík</li>
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
  title: 'Chemická väzba | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Kovalentná, iónová, vodíková a kovová väzba. Typy kryštálov, anomálie vody. Kvíz pre gymnazistov.' },
  ],
})

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aký typ väzby vzniká medzi dvomi atómami vodíka (H₂)?',
    options: ['Iónová väzba', 'Kovová väzba', 'Nepolárna kovalentná väzba', 'Polárna kovalentná väzba'],
    correctIndex: 2,
    explanation: 'H₂ — dva rovnaké atómy zdieľajú elektrónový pár symetricky → nepolárna kovalentná väzba.',
  },
  {
    question: 'Čo spôsobuje polárnosť molekuly H₂O?',
    options: ['Rovnaká elektronegativita O a H', 'Väčšia elektronegativita O ako H a uhlové usporiadanie', 'Prítomnosť iónov H⁺ a OH⁻', 'Trojitá väzba O≡O'],
    correctIndex: 1,
    explanation: 'Kyslík je elektronegativnejší ako vodík → elektrónový pár posunutý k O → parciálny náboj δ–. Uhlové usporiadanie (104,5°) zabraňuje zrušeniu dipólov.',
  },
  {
    question: 'Aký typ väzby má NaCl?',
    options: ['Nepolárna kovalentná', 'Polárna kovalentná', 'Iónová', 'Vodíková'],
    correctIndex: 2,
    explanation: 'NaCl vzniká prenosom elektrónu: Na → Na⁺, Cl → Cl⁻. Opačne nabité ióny sa priťahujú → iónová väzba.',
  },
  {
    question: 'Prečo má voda neobvykle vysoký bod varu v porovnaní s H₂S?',
    options: ['Väčšia molekulárna hmotnosť', 'Vodíkové väzby medzi molekulami H₂O', 'Kovalentná trojitá väzba', 'Iónová štruktúra vody'],
    correctIndex: 1,
    explanation: 'Molekuly H₂O sú spojené vodíkovými väzbami (H–O···H), na ich prerušenie treba extra energiu → vyšší bod varu (100 °C namiesto –80 °C).',
  },
  {
    question: 'Čo je charakteristické pre kovový typ väzby?',
    options: ['Zdieľanie elektrónových párov', '"More" voľných elektrónov v kryštálovej mriežke', 'Prenos elektrónu z kovu na nekov', 'Iba krátkodosahové sily'],
    correctIndex: 1,
    explanation: 'V kovoch sú kladné iónty obklopené „morom" voľných elektrónov. Práve tieto elektróny zabezpečujú elektrickú a tepelnú vodivosť.',
  },
  {
    question: 'Diamant a grafit sú obe formy toho istého prvku. Aký prvok je to?',
    options: ['Kremík', 'Kremičitan', 'Uhlík', 'Kremíkový karbid'],
    correctIndex: 2,
    explanation: 'Diamant (kovalentný kryštál, sp³) aj grafit (vrstevnatá štruktúra, sp²) sú alotropické modifikácie uhlíka (C).',
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
  return r === 1 ? 'Perfektné! Zvládol si celý kvíz.' : r >= 0.7 ? 'Výborne!' : r >= 0.4 ? 'Oplatí sa zopakovať.' : 'Skús znova!'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
