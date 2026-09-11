<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/anorganicka-chemia" class="hover:text-orange-600 transition-colors">Anorganická chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Kovy a ich zlúčeniny</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">🔩</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Kovy a ich zlúčeniny</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Kovy tvoria väčšinu prvkov PSP. Majú spoločné vlastnosti: kovový lesk, elektrickú vodivosť, tepelnú vodivosť a ťažnosť. V chemických reakciách sú redukovadlami — odovzdávajú elektróny.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Alkalické kovy (1. skupina)</h2>
      <p class="text-gray-700 mb-4">Alkalické kovy (Li, Na, K, Rb, Cs, Fr) sú mäkké, s nízkymi teplotami topenia. Majú 1 valenčný elektrón — ľahko ho odovzdávajú.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Reakcia s vodou</h3>
          <p class="text-sm font-mono text-gray-700 mb-1">2 Na + 2 H₂O → 2 NaOH + H₂↑</p>
          <p class="text-sm font-mono text-gray-700">2 K + 2 H₂O → 2 KOH + H₂↑</p>
          <p class="text-xs text-gray-500 mt-2">Reakcia je búrlivá, Na sa roztaví a vznáša na hladine. K sa vznieti.</p>
        </div>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 class="font-bold text-amber-700 mb-2">Plameňové skúšky</h3>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>🟡 Na — <strong>žltý</strong> plameň</li>
            <li>🟣 K — <strong>fialový</strong> plameň</li>
            <li>🔴 Li — <strong>červený</strong> plameň</li>
            <li>🔵 Cs — <strong>modrý</strong> plameň</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Vápnik a magnézium (2. skupina)</h2>
      <div class="space-y-3">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 class="font-bold text-gray-700 mb-2">Dôležité zlúčeniny vápnika</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li><strong>CaCO₃</strong> (vápenec): stavebná surovina, výroba vápna</li>
            <li><strong>CaO</strong> (pálené vápno): CaCO₃ → CaO + CO₂ (výpal)</li>
            <li><strong>Ca(OH)₂</strong> (hasené vápno): CaO + H₂O → Ca(OH)₂ (uhasenie)</li>
            <li>Vápenná voda: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O (zakalenie = dôkaz CO₂)</li>
            <li><strong>CaSO₄ · 2H₂O</strong> (sadra), CaSO₄ · ½H₂O (omietková sadra)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Hliník a železo</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 class="font-bold text-blue-700 mb-2">Hliník (Al)</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Ľahký kov (ρ = 2,7 g/cm³), dobrý vodič</li>
            <li>Pasivácia: povrch pokrytý Al₂O₃ → odolnosť voči korózii</li>
            <li>Silné redukovadlo (termit: Al + Fe₂O₃)</li>
            <li>Zdroj: bauxit (Al₂O₃ · nH₂O), elektrolýza</li>
          </ul>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h3 class="font-bold text-gray-700 mb-2">Železo (Fe)</h3>
          <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Výroba vo vysokej peci: Fe₂O₃ + 3CO → 2Fe + 3CO₂</li>
            <li>Surové železo (surovec) → oceľ (0,02–2 % C)</li>
            <li>Liatina: > 2 % C, krehká</li>
            <li>Korózia (hrdza): 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃</li>
          </ul>
        </div>
      </div>

      <!-- SVG: vysoká pec -->
      <div class="flex justify-center mt-6">
        <svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma vysokej pece na výrobu železa" class="w-full max-w-xs">
          <rect width="300" height="280" fill="#fafafa" rx="10"/>
          <!-- telo pece -->
          <path d="M90,30 L210,30 L230,180 L190,220 L110,220 L70,180 Z" fill="#d1d5db" stroke="#6b7280" stroke-width="2"/>
          <!-- vsádzka -->
          <rect x="100" y="35" width="100" height="30" fill="#92400e" rx="4"/>
          <text x="150" y="53" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Fe₂O₃ + koks + vápenec</text>
          <!-- horúca zóna -->
          <rect x="80" y="140" width="140" height="40" fill="#fbbf24" rx="4" opacity="0.7"/>
          <text x="150" y="163" text-anchor="middle" font-size="10" fill="#78350f" font-weight="bold">1500 °C — redukcia</text>
          <!-- výpust surovca -->
          <rect x="110" y="220" width="80" height="20" fill="#374151" rx="3"/>
          <text x="150" y="233" text-anchor="middle" font-size="9" fill="#fbbf24">Surové železo (Fe)</text>
          <!-- troska -->
          <rect x="50" y="220" width="50" height="16" fill="#6b7280" rx="3"/>
          <text x="75" y="231" text-anchor="middle" font-size="8" fill="white">Troska</text>
          <!-- plyn -->
          <line x1="150" y1="30" x2="150" y2="10" stroke="#9ca3af" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="150" y="8" text-anchor="middle" font-size="9" fill="#374151">Odpadový plyn (CO₂, CO)</text>
          <!-- vzduch -->
          <line x1="70" y1="160" x2="30" y2="160" stroke="#3b82f6" stroke-width="2" marker-end="url(#arb)"/>
          <text x="25" y="157" text-anchor="end" font-size="9" fill="#1d4ed8">Vzduch (O₂)</text>
          <defs>
            <marker id="arb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6"/>
            </marker>
          </defs>
          <text x="150" y="268" text-anchor="middle" font-size="10" fill="#374151">Vysoká pec — výroba Fe</text>
        </svg>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Meď, striebro a zlato (ušľachtilé kovy)</h2>
      <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-4">
        <p class="text-sm text-gray-700 mb-3">Ušľachtilé kovy nereagujú s vodou ani kyselinami za normálnych podmienok. Majú vysoké elektrické vedenie.</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li><strong>Cu</strong>: elektrotechnika (drôty), bronz (Cu+Sn), mosadz (Cu+Zn)</li>
          <li><strong>Ag</strong>: šperky, fotografia, antibakteriálne účinky</li>
          <li><strong>Au</strong>: šperky, elektronika, uchovávacie zlato</li>
        </ul>
      </div>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 class="font-bold text-orange-700 mb-2">Elektrochemický rad napätia (výber)</h3>
        <p class="text-sm font-mono text-gray-700">K &gt; Na &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Ni &gt; Pb &gt; <strong>H</strong> &gt; Cu &gt; Ag &gt; Au</p>
        <p class="text-xs text-gray-500 mt-2">Kovy vľavo od H vytláčajú H₂ z kyselín. Kovy vpravo (Cu, Ag, Au) s bežnými kyselinami nereagujú.</p>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>Alkalické kovy (sk. 1): reaktívne, reagujú s vodou → hydroxid + H₂, plameňové skúšky</li>
        <li>Vápnik: CaCO₃ (vápenec) → CaO (pálené) → Ca(OH)₂ (hasené)</li>
        <li>Hliník: ľahký, pasivácia (Al₂O₃), elektrolýza bauxitu</li>
        <li>Železo: vysoká pec (Fe₂O₃ + CO → Fe), oceľ (0,02–2 % C), korózia</li>
        <li>Zliatiny: bronz (Cu+Sn), mosadz (Cu+Zn), oceľ (Fe+C)</li>
        <li>Elektrochemický rad: K > Na > ... > H > Cu > Ag > Au</li>
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
  title: 'Kovy a ich zlúčeniny | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Alkalické kovy, vápnik, hliník, železo, meď — vlastnosti, výroba a zlúčeniny kovov pre gymnazistov.' },
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
    question: 'Čo vzniká pri reakcii sodíka s vodou?',
    options: ['NaCl + H₂', 'NaOH + H₂', 'Na₂O + H₂O', 'NaHCO₃ + H₂'],
    correctIndex: 1,
    explanation: '2Na + 2H₂O → 2NaOH + H₂↑. Vzniká hydroxid sodný (lúh sodný) a plynný vodík.',
  },
  {
    question: 'Akú farbu má plameň pri plameňovej skúške sodíka?',
    options: ['Fialovú', 'Červenú', 'Žltú', 'Zelenú'],
    correctIndex: 2,
    explanation: 'Sodík (Na) sfarbuje plameň intenzívne žlto — je to jedna z najcharakteristickejších plameňových skúšok.',
  },
  {
    question: 'Ako sa volá reakcia: CaCO₃ → CaO + CO₂?',
    options: ['Neutralizácia', 'Výpal vápenca (pálenie)', 'Uhasenie vápna', 'Korózia'],
    correctIndex: 1,
    explanation: 'Výpal vápenca pri ~900 °C dáva pálené vápno (CaO) a oxid uhličitý. Uhasenie je CaO + H₂O → Ca(OH)₂.',
  },
  {
    question: 'Čo je oceľ?',
    options: ['Čisté železo', 'Zliatina Fe s 0,02–2 % C', 'Zliatina Fe + Ni', 'Liatina s > 4 % C'],
    correctIndex: 1,
    explanation: 'Oceľ je zliatina železa s uhlíkom (0,02–2 %). Liatina má > 2 % C a je krehká.',
  },
  {
    question: 'Prečo hliník odolá korózii napriek tomu, že je reaktívny kov?',
    options: ['Je ušľachtilý kov', 'Povrch sa pokryje vrstvou Al₂O₃ (pasivácia)', 'Nereaguje s O₂', 'Má nízku hustotu'],
    correctIndex: 1,
    explanation: 'Hliník reaguje s kyslíkom za vzniku Al₂O₃ — tenká vrstva oxidu chráni povrch pred ďalšou oxidáciou (pasivácia).',
  },
  {
    question: 'Z akých materiálov sa skladá bronz?',
    options: ['Cu + Zn', 'Fe + Ni', 'Cu + Sn', 'Al + Mg'],
    correctIndex: 2,
    explanation: 'Bronz = Cu (meď) + Sn (cín). Mosadz je Cu + Zn. Bronz sa používal v bronzovej dobe na zbrane a náradie.',
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
