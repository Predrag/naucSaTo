<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/anorganicka-chemia" class="hover:text-orange-600 transition-colors">Anorganická chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Nekovy a ich zlúčeniny</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">💨</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Nekovy a ich zlúčeniny</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Nekovy tvoria len asi štvrtinu prvkov PSP, no sú to práve ony, čo sú základom života (C, H, O, N). Ich zlúčeniny sú kľúčové v priemysle, poľnohospodárstve i životnom prostredí.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Vodík (H)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Vlastnosti</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Najľahší plyn, dvojatómová molekula H₂</li>
            <li>Bezfarebný, bez zápachu, horľavý</li>
            <li>Teplota horenia: 574 °C (v zmesi so vzduchom — traskavá zmes)</li>
          </ul>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 class="font-bold text-amber-700 mb-2">Výroba a využitie</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Kov + kyselina: Zn + H₂SO₄ → ZnSO₄ + H₂↑</li>
            <li>Elektrolýza vody: 2H₂O → 2H₂ + O₂</li>
            <li>Palivo pre palivové články, výroba amoniaku</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Voda (H₂O)</h2>

      <!-- SVG: vodíkové mostíky -->
      <div class="flex justify-center mb-4">
        <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vodíkové mostíky medzi tromi molekulami vody" class="w-full max-w-md">
          <rect width="360" height="200" fill="#eff6ff" rx="12"/>
          <!-- molekula 1 (stred) -->
          <circle cx="180" cy="100" r="22" fill="#ef4444" opacity="0.85"/>
          <text x="180" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">O</text>
          <circle cx="145" cy="138" r="16" fill="#3b82f6" opacity="0.85"/>
          <text x="145" y="143" text-anchor="middle" font-size="12" font-weight="bold" fill="white">H</text>
          <circle cx="215" cy="138" r="16" fill="#3b82f6" opacity="0.85"/>
          <text x="215" y="143" text-anchor="middle" font-size="12" font-weight="bold" fill="white">H</text>
          <line x1="163" y1="117" x2="150" y2="127" stroke="#374151" stroke-width="2.5"/>
          <line x1="197" y1="117" x2="210" y2="127" stroke="#374151" stroke-width="2.5"/>
          <!-- molekula 2 (vľavo hore) -->
          <circle cx="60" cy="45" r="20" fill="#ef4444" opacity="0.75"/>
          <text x="60" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="white">O</text>
          <circle cx="32" cy="68" r="14" fill="#3b82f6" opacity="0.75"/>
          <text x="32" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="white">H</text>
          <circle cx="82" cy="70" r="14" fill="#3b82f6" opacity="0.75"/>
          <text x="82" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="white">H</text>
          <line x1="46" y1="60" x2="37" y2="64" stroke="#374151" stroke-width="2"/>
          <line x1="74" y1="60" x2="79" y2="65" stroke="#374151" stroke-width="2"/>
          <!-- vodíkový mostík 1 -->
          <line x1="96" y1="66" x2="158" y2="88" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="120" y="72" font-size="9" fill="#6d28d9">vod. mostík</text>
          <!-- molekula 3 (vpravo hore) -->
          <circle cx="300" cy="45" r="20" fill="#ef4444" opacity="0.75"/>
          <text x="300" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="white">O</text>
          <circle cx="272" cy="68" r="14" fill="#3b82f6" opacity="0.75"/>
          <text x="272" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="white">H</text>
          <circle cx="322" cy="68" r="14" fill="#3b82f6" opacity="0.75"/>
          <text x="322" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="white">H</text>
          <line x1="285" y1="60" x2="276" y2="65" stroke="#374151" stroke-width="2"/>
          <line x1="315" y1="60" x2="320" y2="65" stroke="#374151" stroke-width="2"/>
          <!-- vodíkový mostík 2 -->
          <line x1="260" y1="66" x2="202" y2="88" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="228" y="72" font-size="9" fill="#6d28d9">vod. mostík</text>
          <text x="180" y="192" text-anchor="middle" font-size="11" fill="#374151">Vodíkové mostíky (H–O···H) v kvapalnej vode</text>
        </svg>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 class="font-bold text-blue-700 mb-2">Fyzikálne vlastnosti</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Teplota tuhnutia: 0 °C (pri 101,3 kPa)</li>
            <li>Teplota varu: 100 °C (pri 101,3 kPa)</li>
            <li>Hustota: 1 g/cm³ pri 4 °C</li>
            <li>Anomália vody: ľad má hustotu 0,92 g/cm³ → ľad pláva</li>
          </ul>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 class="font-bold text-blue-700 mb-2">Tvrdosť vody</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Mäkká voda: málo Ca²⁺, Mg²⁺</li>
            <li>Tvrdá voda: veľa Ca²⁺, Mg²⁺ → vodný kameň</li>
            <li>Dočasná tvrdosť: CaHCO₃ → CaCO₃ (varom)</li>
            <li>Trvalá tvrdosť: CaSO₄ (neodstrániteľná varom)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Kyslík a dusík</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Kyslík O₂</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>21 % vzduchu, bezfarebný plyn</li>
            <li>Nevyhnutný pre horenie a dýchanie</li>
            <li>Ozón O₃: alotropická modifikácia, absorbuje UV žiarenie</li>
            <li>Ozónová diera: CFC ničia ozónovú vrstvu</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Dusík N₂ a amoniak NH₃</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>N₂: 78 % vzduchu, trojitá väzba N≡N, inertný</li>
            <li>Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃ (450 °C, 250 bar, Fe)</li>
            <li>NH₃: štipľavý zápach, zásada, výroba hnojív (DAM)</li>
            <li>HNO₃ (kyselina dusičná): leptadlo, výroba výbušnín</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Síra, uhlík a halogény</h2>
      <div class="space-y-4">
        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 class="font-bold text-yellow-700 mb-2">Síra (S) a jej zlúčeniny</h3>
          <p class="text-sm text-gray-700">Žltá tuhá látka. Horenie: S + O₂ → SO₂ (kysličník siričitý — kyslý dážď). SO₃ + H₂O → H₂SO₄ (kyselina sírová). H₂SO₄ je silná kyselina s dehydratačnými účinkami.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h3 class="font-bold text-gray-700 mb-2">Uhlík (C) a CO₂</h3>
          <p class="text-sm text-gray-700">Diamant, grafit, fullerény. Horenie uhlia/dreva: C + O₂ → CO₂. Nebezpečný CO (oxid uhoľnatý) vzniká pri neúplnom horení. CO₂ je skleníkový plyn — otepľovanie Zeme.</p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h3 class="font-bold text-purple-700 mb-2">Halogény (Cl, Br, I)</h3>
          <p class="text-sm text-gray-700">Reaktivita: F > Cl > Br > I. Cl₂: dezinfekcia vody. HCl (soľná kyselina): žalúdočná šťava, leptadlo. Jód (I₂): dezinfekcia, diagnóza štítnej žľazy.</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>Vodík H₂ — horľavý, kov+kyselina → H₂↑; traskavá zmes</li>
        <li>Voda H₂O — anomália (ľad pláva), Tt=0°C, Tv=100°C, vodíkové väzby</li>
        <li>Kyslík O₂ (21% vzduchu), ozón O₃ — ozónová vrstva</li>
        <li>Dusík N₂ (78%), Haber-Bosch → NH₃ (hnojivá)</li>
        <li>Síra → SO₂ → kyslý dážď; H₂SO₄ = silná kyselina</li>
        <li>Uhlík: CO₂ (skleníkový efekt), CO (jedovatý)</li>
        <li>Halogény: reaktivita F > Cl > Br > I; Cl₂ dezinfekuje vodu</li>
        <li>Vzácne plyny (He, Ne, Ar): inertné, plná valenčná vrstva</li>
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
  title: 'Nekovy a ich zlúčeniny | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Vodík, voda, kyslík, dusík, síra, uhlík, halogény — vlastnosti a zlúčeniny nekovov pre gymnazistov.' },
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
    question: 'Čo je traskavá zmes?',
    options: ['Zmes H₂ a Cl₂', 'Zmes H₂ a O₂ v pomere 2:1', 'Roztok H₂SO₄', 'Zmes CO₂ a H₂O'],
    correctIndex: 1,
    explanation: 'Traskavá zmes je zmes H₂ a O₂ v pomere 2:1 (objemovom). Horí výbušne: 2H₂ + O₂ → 2H₂O.',
  },
  {
    question: 'Prečo ľad pláva na hladine vody?',
    options: ['Lebo je teplý', 'Lebo má menšiu hustotu ako kvapalná voda', 'Lebo sa vzduch v ňom rozpúšťa', 'Lebo je bez farby'],
    correctIndex: 1,
    explanation: 'Anomália vody: ľad má hustotu ≈ 0,92 g/cm³, kvapalná voda ≈ 1 g/cm³. Pevná fáza je ľahšia → ľad pláva.',
  },
  {
    question: 'Aké percento atmosféry tvorí dusík?',
    options: ['21 %', '50 %', '78 %', '1 %'],
    correctIndex: 2,
    explanation: 'Vzduch: 78 % N₂, 21 % O₂, 1 % ostatné (Ar, CO₂...).',
  },
  {
    question: 'Čo spôsobuje kyslý dážď?',
    options: ['CO₂ a H₂O', 'SO₂ a NOₓ rozpustené v daždi', 'Chlór Cl₂', 'Ozón O₃'],
    correctIndex: 1,
    explanation: 'SO₂ (zo spaľovania síry) a NOₓ (z dopravy) reagujú s vodnou parou za vzniku H₂SO₄ a HNO₃ — kyslý dážď.',
  },
  {
    question: 'Aká je reaktivita halogénov? Zoradiť od najreaktívnejšieho:',
    options: ['I > Br > Cl > F', 'Cl > F > I > Br', 'F > Cl > Br > I', 'Br > Cl > F > I'],
    correctIndex: 2,
    explanation: 'Reaktivita halogénov klesá s rastúcim protónovým číslom: F > Cl > Br > I. Fluór je najreaktívnejší prvok vôbec.',
  },
  {
    question: 'Na čo sa využíva NH₃ vyrábaný Haber-Boschovým procesom?',
    options: ['Dezinfekcia vody', 'Výroba dusíkatých hnojív', 'Výroba skla', 'Výroba cementu'],
    correctIndex: 1,
    explanation: 'Väčšina NH₃ (amoniaku) sa využíva na výrobu dusíkatých hnojív (napr. liadok dusičnan amónny NH₄NO₃, DAM).',
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
  return r === 1 ? 'Perfektné!' : r >= 0.7 ? 'Výborne!' : r >= 0.4 ? 'Oplatí sa zopakovať.' : 'Skús znova!'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
