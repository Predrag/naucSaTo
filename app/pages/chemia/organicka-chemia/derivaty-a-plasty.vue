<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/organicka-chemia" class="hover:text-orange-600 transition-colors">Organická chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Deriváty uhľovodíkov a polyméry</span>
    </nav>

    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl">🧴</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Deriváty uhľovodíkov a polyméry</h1>
    </div>
    <p class="text-lg text-gray-600 mb-10">
      Deriváty uhľovodíkov obsahujú okrem C a H aj iné prvky (O, N, halogény). Patria sem alkoholy, kyseliny, estery a ďalšie skupiny zlúčenín dôležitých v prírode, priemysle aj každodennom živote.
    </p>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Dôležité skupiny derivátov</h2>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-100">
              <th class="border border-orange-200 px-3 py-2 text-left">Skupina</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Funkčná sk.</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Príklad</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Využitie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in derivatives" :key="d.group" class="odd:bg-white even:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1 font-semibold">{{ d.group }}</td>
              <td class="border border-gray-200 px-3 py-1 font-mono text-orange-700">{{ d.func }}</td>
              <td class="border border-gray-200 px-3 py-1 font-mono">{{ d.example }}</td>
              <td class="border border-gray-200 px-3 py-1 text-gray-600">{{ d.use }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 class="font-bold text-orange-700 mb-2">Esterifikácia</h3>
        <p class="text-sm text-gray-700 mb-1">Kyselina + Alkohol ⇌ Ester + Voda</p>
        <p class="text-sm font-mono text-gray-700">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</p>
        <p class="text-xs text-gray-500 mt-2">Etylacetát — ovocná vôňa, rozpúšťadlo, lak na nechty</p>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Ropa a zemný plyn</h2>
      <p class="text-gray-700 mb-4">
        Ropa je zmes uhľovodíkov (alkány, cykloalkány, arény). Spracováva sa <strong>frakčnou destiláciou</strong> — rozdeľuje sa na frakcie podľa bodu varu.
      </p>

      <!-- SVG: frakčná destilácia -->
      <div class="flex justify-center mb-4">
        <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma frakčnej destilácie ropy — kolóna s frakciami" class="w-full max-w-sm">
          <rect width="320" height="280" fill="#fafafa" rx="10"/>
          <!-- kolóna -->
          <rect x="110" y="20" width="100" height="200" fill="#e5e7eb" stroke="#6b7280" stroke-width="2" rx="4"/>
          <!-- frakcie -->
          <rect x="112" y="22" width="96" height="28" fill="#dbeafe" rx="2"/>
          <text x="160" y="38" text-anchor="middle" font-size="9" fill="#1e40af">Plyny (LPG) &lt; 40 °C</text>
          <rect x="112" y="52" width="96" height="28" fill="#fef3c7" rx="2"/>
          <text x="160" y="68" text-anchor="middle" font-size="9" fill="#92400e">Benzín 40–200 °C</text>
          <rect x="112" y="82" width="96" height="28" fill="#d1fae5" rx="2"/>
          <text x="160" y="98" text-anchor="middle" font-size="9" fill="#065f46">Petrolej 160–250 °C</text>
          <rect x="112" y="112" width="96" height="28" fill="#ede9fe" rx="2"/>
          <text x="160" y="128" text-anchor="middle" font-size="9" fill="#4c1d95">Nafta 200–350 °C</text>
          <rect x="112" y="142" width="96" height="28" fill="#fee2e2" rx="2"/>
          <text x="160" y="158" text-anchor="middle" font-size="9" fill="#7f1d1d">Vykurovací olej &gt; 300 °C</text>
          <rect x="112" y="172" width="96" height="28" fill="#374151" rx="2"/>
          <text x="160" y="188" text-anchor="middle" font-size="9" fill="white">Mazut / Asfalt</text>
          <!-- ropa dole -->
          <rect x="120" y="220" width="80" height="30" fill="#78350f" rx="4"/>
          <text x="160" y="238" text-anchor="middle" font-size="9" fill="white">Surová ropa</text>
          <!-- teplota stupnica -->
          <text x="95" y="40" text-anchor="end" font-size="8" fill="#6b7280">40°C</text>
          <text x="95" y="70" text-anchor="end" font-size="8" fill="#6b7280">200°C</text>
          <text x="95" y="100" text-anchor="end" font-size="8" fill="#6b7280">250°C</text>
          <text x="95" y="130" text-anchor="end" font-size="8" fill="#6b7280">350°C</text>
          <text x="95" y="160" text-anchor="end" font-size="8" fill="#6b7280">&gt;350°C</text>
          <!-- teplo -->
          <line x1="160" y1="250" x2="160" y2="220" stroke="#ef4444" stroke-width="2" marker-end="url(#arf)"/>
          <text x="160" y="268" text-anchor="middle" font-size="9" fill="#ef4444">Zahrievanie</text>
          <defs>
            <marker id="arf" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#ef4444"/>
            </marker>
          </defs>
          <text x="160" y="278" text-anchor="middle" font-size="9" fill="#374151">Frakčná destilácia ropy</text>
        </svg>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h3 class="font-semibold text-gray-700 mb-2">Zemný plyn</h3>
        <p class="text-sm text-gray-700">Skladá sa z 70–90 % metánu (CH₄) + etán, propán. Využitie: varenie, kúrenie, výroba elektriny. Čistejšie ako uhlie (menej SO₂).</p>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Polyméry a plasty</h2>
      <p class="text-gray-700 mb-4">
        Polymér je makromolekula zložená z opakujúcich sa jednotiek (monomerov). Plasty sú syntetické polyméry.
      </p>
      <div class="overflow-x-auto mb-4">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-100">
              <th class="border border-orange-200 px-3 py-2 text-left">Skratka</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Názov</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Monomer</th>
              <th class="border border-orange-200 px-3 py-2 text-left">Využitie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in plastics" :key="p.abbr" class="odd:bg-white even:bg-gray-50">
              <td class="border border-gray-200 px-3 py-1 font-bold text-orange-700">{{ p.abbr }}</td>
              <td class="border border-gray-200 px-3 py-1">{{ p.name }}</td>
              <td class="border border-gray-200 px-3 py-1 font-mono">{{ p.monomer }}</td>
              <td class="border border-gray-200 px-3 py-1 text-gray-600">{{ p.use }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 class="font-bold text-red-700 mb-2">Ekologické dopady plastov</h3>
        <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Plasty sa rozkladajú stovky rokov → znečistenie oceánov</li>
          <li>Mikroplasty vstupujú do potravinového reťazca</li>
          <li>Riešenie: recyklácia (PET, PE, PP), bioplasty (PLA), zníženie spotreby</li>
          <li>Spaľovanie fosílnych palív: CO₂ → skleníkový efekt, globálne otepľovanie</li>
        </ul>
      </div>
    </section>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-3">Zhrnutie</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
        <li>Alkoholy (–OH): etanol (fermentácia cukrov, pitný alkohol, dezinfekcia)</li>
        <li>Karboxylové kyseliny (–COOH): octová kyselina CH₃COOH (ocot, pH ≈ 3)</li>
        <li>Esterifikácia: kyselina + alkohol ⇌ ester + voda (obrátiteľná reakcia)</li>
        <li>Ropa → frakčná destilácia: plyny, benzín, nafta, oleje, asfalt</li>
        <li>Zemný plyn: 70–90 % CH₄ — čistejšie palivo ako uhlie</li>
        <li>Polyméry: PE (etén), PP (propén), PVC (vinylchlorid), PS (styrén)</li>
        <li>Plasty: 100+ rokov rozkladu → recyklácia a obmedzenie spotreby</li>
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
  title: 'Deriváty uhľovodíkov a polyméry | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Alkoholy, kyseliny, estery, ropa, plasty a polyméry — deriváty uhľovodíkov pre gymnazistov.' },
  ],
})

const derivatives = [
  { group: 'Halogénderiváty', func: '–X (Cl, Br...)', example: 'CH₃Cl (chlórmetán)', use: 'Rozpúšťadlá, Freóny (CFCs)' },
  { group: 'Alkoholy', func: '–OH', example: 'C₂H₅OH (etanol)', use: 'Nápoje, dezinfekcia, palivo' },
  { group: 'Aldehydy', func: '–CHO', example: 'HCHO (metanal)', use: 'Formalín (konzervovanie), dezinfekcia' },
  { group: 'Ketóny', func: '–CO–', example: 'CH₃COCH₃ (acetón)', use: 'Rozpúšťadlo, lak na nechty' },
  { group: 'Karboxylové kyseliny', func: '–COOH', example: 'CH₃COOH (octová)', use: 'Ocot, potravinárstvo' },
  { group: 'Estery', func: '–COO–', example: 'CH₃COOC₂H₅', use: 'Vôňa, rozpúšťadlá, tuky' },
  { group: 'Amíny', func: '–NH₂', example: 'CH₃NH₂ (metylamín)', use: 'Syntéza liekov, farbivá' },
]

const plastics = [
  { abbr: 'PE', name: 'Polyetylén', monomer: 'CH₂=CH₂', use: 'Fólie, vrecká, fľaše' },
  { abbr: 'PP', name: 'Polypropylén', monomer: 'CH₂=CHCH₃', use: 'Prepravky, nábytok, automobily' },
  { abbr: 'PVC', name: 'Polyvinylchlorid', monomer: 'CH₂=CHCl', use: 'Rúry, okná, podlahy' },
  { abbr: 'PS', name: 'Polystyrén', monomer: 'Styrén', use: 'Balenie, tepelná izolácia (EPS)' },
  { abbr: 'PET', name: 'Polyetyléntereftalát', monomer: 'Tereftalová kys.+etylénglykol', use: 'Fľaše, tkaniny' },
]

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Akú funkčnú skupinu majú alkoholy?',
    options: ['–COOH', '–CHO', '–OH', '–NH₂'],
    correctIndex: 2,
    explanation: 'Alkoholy majú hydroxilovú skupinu –OH. Etanol (pitný alkohol): CH₃CH₂OH.',
  },
  {
    question: 'Čo vzniká pri esterifikácii?',
    options: ['Kyselina + zásada → soľ + voda', 'Kyselina + alkohol → ester + voda', 'Alkohol + voda → kyselina', 'Ester + voda → dva estery'],
    correctIndex: 1,
    explanation: 'Esterifikácia: R–COOH + R\'–OH ⇌ R–COO–R\' + H₂O. Je to rovnovážna (obrátiteľná) reakcia.',
  },
  {
    question: 'Čo je oktánové číslo benzínu?',
    options: ['Obsah oktánu v %', 'Miera odolnosti voči klepaniu motora', 'Teplota varu benzínu', 'Počet uhlíkových atómov v molekule'],
    correctIndex: 1,
    explanation: 'Oktánové číslo vyjadruje odolnosť paliva voči nekontrolovanému vznieteniu (klepaniu). Vyšší OK = kvalitnejšie palivo.',
  },
  {
    question: 'Z čoho sa vyrába polyetylén (PE)?',
    options: ['Z benzénu', 'Z etánu', 'Z eténu (CH₂=CH₂)', 'Z acetylenu'],
    correctIndex: 2,
    explanation: 'PE vzniká polymerizáciou eténu: n CH₂=CH₂ → (–CH₂–CH₂–)ₙ. Je to najpoužívanejší plast na svete.',
  },
  {
    question: 'Prečo sú plasty ekologický problém?',
    options: ['Sú jedovaté pri dotyku', 'Trvá im stovky rokov, kým sa rozložia', 'Rýchlo korodujú', 'Sú drahé na výrobu'],
    correctIndex: 1,
    explanation: 'Väčšina plastov sa biologicky nerozkladá stovky rokov. Hromadia sa v prírode, oceánoch, vstupujú do potravinového reťazca ako mikroplasty.',
  },
  {
    question: 'Čo je hlavnou zložkou zemného plynu?',
    options: ['Propán C₃H₈', 'Metán CH₄', 'Etén C₂H₄', 'Bután C₄H₁₀'],
    correctIndex: 1,
    explanation: 'Zemný plyn tvorí 70–90 % metán (CH₄). Zvyšok: etán, propán, CO₂ a N₂. Je čistejší ako uhlie — pri spaľovaní vzniká menej SO₂.',
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
