<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Hybnosť</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🏉</span>
      <h1 class="text-4xl font-extrabold text-teal-700">Hybnosť a zákon zachovania hybnosti</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Hybnosť vyjadruje, ako ťažko zastaviť pohybujúce sa teleso. Je to vektorová veličina, ktorá hrá kľúčovú úlohu pri zrážkach, výbuchoch aj pohone rakiet.
    </p>

    <!-- Section 1: Hybnosť -->
    <section aria-label="Hybnosť telesa" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-teal-600 rounded-t-2xl px-6 py-4 -mx-0">Hybnosť telesa</h2>
      <div class="bg-white border border-teal-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          <strong>Hybnosť</strong> je vektorová fyzikálna veličina, ktorá charakterizuje pohybový stav telesa. Závisí od hmotnosti telesa a jeho rýchlosti. Čím je teleso ťažšie a rýchlejšie, tým je jeho hybnosť väčšia — a tým ťažšie ho zastavíme.
        </p>

        <!-- Definičný vzorec -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Definícia hybnosti</p>
          <MathFormula display formula="\vec{p} = m \cdot \vec{v}" />
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-teal-700 text-lg" v-html="km('\\vec{p}')"/>
              <p class="text-xs text-gray-500 mt-1">hybnosť (kg·m/s)</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-teal-700 text-lg" v-html="km('m')"/>
              <p class="text-xs text-gray-500 mt-1">hmotnosť (kg)</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <span class="font-bold text-teal-700 text-lg" v-html="km('\\vec{v}')"/>
              <p class="text-xs text-gray-500 mt-1">rýchlosť (m/s)</p>
            </div>
          </div>
        </div>

        <div class="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-teal-800 mb-1">Smer hybnosti</p>
          <p class="text-sm text-gray-700">
            Hybnosť je <strong>vektor</strong> — má rovnaký smer ako rýchlosť telesa. Jednotka hybnosti je
            <span v-html="km('\\text{kg}\\cdot\\text{m/s}')"/>,
            čo je totožné s jednotkou <span v-html="km('\\text{N}\\cdot\\text{s}')"/>.
          </p>
        </div>

        <!-- Príklad výpočtu -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-800 mb-3">Príklad: Hybnosť futbalového lopty a nákladiaka</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div class="bg-white rounded-lg p-4">
              <p class="font-medium text-gray-800 mb-2">⚽ Futbalová lopta</p>
              <p class="text-gray-600 mb-2">m = 0,43 kg, v = 30 m/s</p>
              <MathFormula display formula="p = 0{,}43 \cdot 30 = 12{,}9 \text{ kg·m/s}" />
            </div>
            <div class="bg-white rounded-lg p-4">
              <p class="font-medium text-gray-800 mb-2">🚚 Nákladné auto</p>
              <p class="text-gray-600 mb-2">m = 8 000 kg, v = 0,1 m/s</p>
              <MathFormula display formula="p = 8000 \cdot 0{,}1 = 800 \text{ kg\cdot m/s}" />
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-3">Pomaly sa pohybujúci nákladiak má oveľa väčšiu hybnosť ako rýchlo letiaca lopta — oveľa ťažšie ho zastavíme.</p>
        </div>

      </div>
    </section>

    <!-- Section 2: Impulz sily a zmena hybnosti -->
    <section aria-label="Impulz sily a zmena hybnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-teal-600 rounded-t-2xl px-6 py-4">Impulz sily a zmena hybnosti</h2>
      <div class="bg-white border border-teal-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Ak na teleso pôsobí sila, jeho hybnosť sa mení. Čím dlhšie sila pôsobí, tým väčšia je zmena hybnosti. Súčin sily a času jej pôsobenia nazývame <strong>impulz sily</strong>.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Impulz sily = zmena hybnosti</p>
          <MathFormula display formula="\vec{F} \cdot \Delta t = \Delta \vec{p} = m\vec{v}_2 - m\vec{v}_1" />
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div class="bg-white rounded-lg p-3">
              <span class="font-bold text-teal-700" v-html="km('\\vec{F} \\cdot \\Delta t')"/>
              <p class="text-xs text-gray-500 mt-1">impulz sily (N·s)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <span class="font-bold text-teal-700" v-html="km('\\Delta \\vec{p}')"/>
              <p class="text-xs text-gray-500 mt-1">zmena hybnosti (kg·m/s)</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="font-semibold text-blue-800 mb-2">🥊 Krátky, silný úder</p>
            <p class="text-sm text-gray-700">Boxerský úder trvá asi 50 ms, ale sila dosahuje stovky newtonov. Veľká zmena hybnosti za krátky čas.</p>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p class="font-semibold text-purple-800 mb-2">🚗 Dlhé brzdenie</p>
            <p class="text-sm text-gray-700">Menšia brzdná sila pôsobí dlhší čas — výsledná zmena hybnosti (zastavenie auta) je rovnaká.</p>
          </div>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-800 mb-3">Príklad: Brzdenie bicyklistu</p>
          <p class="text-sm text-gray-700 mb-3">Bicyklista s hmotnosťou 70 kg jazdí rýchlosťou 10 m/s. Zastaví sa za 5 s. Aká brzdná sila na neho pôsobila?</p>
          <MathFormula display formula="F = \frac{\Delta p}{\Delta t} = \frac{m \cdot \Delta v}{\Delta t} = \frac{70 \cdot 10}{5} = 140 \text{ N}" />
        </div>

      </div>
    </section>

    <!-- Section 3: Zákon zachovania hybnosti -->
    <section aria-label="Zákon zachovania hybnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-teal-600 rounded-t-2xl px-6 py-4">Zákon zachovania hybnosti</h2>
      <div class="bg-white border border-teal-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          V <strong>uzavretej sústave</strong> telies (na ktorú nepôsobia vonkajšie sily) zostáva celková hybnosť konštantná. Hybnosť sa môže prenášať medzi telesami, ale celkový súčet sa nemení.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Zákon zachovania hybnosti</p>
          <MathFormula display formula="\vec{p}_1 + \vec{p}_2 = \vec{p}_1' + \vec{p}_2' = \text{konšt.}" />
          <MathFormula display formula="m_1\vec{v}_1 + m_2\vec{v}_2 = m_1\vec{v}_1' + m_2\vec{v}_2'" />
          <p class="text-xs text-gray-600 mt-2">Čiarkované veličiny označujú stav po zrážke (náraze).</p>
        </div>

        <!-- Pružný a nepružný náraz -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 class="font-bold text-green-800 mb-2">Pružný náraz</h3>
            <p class="text-sm text-gray-700 mb-3">
              Zachováva sa hybnosť <strong>aj kinetická energia</strong>. Telesá sa po náraze oddelia.
            </p>
            <MathFormula display formula="\frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2 = \frac{1}{2}m_1v_1'^2 + \frac{1}{2}m_2v_2'^2" />
            <p class="text-xs text-gray-500 mt-2">Príklad: biliardové gule, atómové zrážky</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 class="font-bold text-red-800 mb-2">Nepružný náraz</h3>
            <p class="text-sm text-gray-700 mb-3">
              Zachováva sa hybnosť, <strong>kinetická energia sa stráca</strong> (premena na teplo, zvuk). Telesá sa po náraze spoja.
            </p>
            <MathFormula display formula="m_1\vec{v}_1 + m_2\vec{v}_2 = (m_1+m_2)\vec{v}'" />
            <p class="text-xs text-gray-500 mt-2">Príklad: automobilová zrážka, modelína</p>
          </div>
        </div>

        <!-- Príklad: nepružný náraz -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-800 mb-3">Príklad: Nepružný náraz vagónov</p>
          <p class="text-sm text-gray-700 mb-3">
            Vagón hmotnosti 2 000 kg sa pohybuje rýchlosťou 3 m/s a narazí do stojaceho vagóna hmotnosti 3 000 kg. Obe sa spoja. Aká je ich spoločná rýchlosť po náraze?
          </p>
          <MathFormula display formula="v' = \frac{m_1 v_1}{m_1 + m_2} = \frac{2000 \cdot 3}{2000 + 3000} = \frac{6000}{5000} = 1{,}2 \text{ m/s}" />
        </div>

      </div>
    </section>

    <!-- Section 4: Reaktívny pohon -->
    <section aria-label="Reaktívny pohon a raketa" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-teal-600 rounded-t-2xl px-6 py-4">Reaktívny pohon — raketa</h2>
      <div class="bg-white border border-teal-100 rounded-b-2xl px-6 py-6 space-y-5">

        <p class="text-gray-700 leading-relaxed">
          Raketa nepotrebuje sa opiť o vzduch ani o zem — funguje na princípe zákona zachovania hybnosti. Plyny vytryskujú dozadu veľkou rýchlosťou, a raketa sa preto pohybuje dopredu.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-2">Princíp reaktívneho pohonu</p>
          <MathFormula display formula="m_{\text{raketa}}\,\vec{v}_{\text{raketa}} + m_{\text{plyn}}\,\vec{v}_{\text{plyn}} = 0" />
          <p class="text-sm text-gray-700 mt-3">
            Ak raketa vyhodí hmotu dozadu, musí sa sama pohybovať dopredu — celková hybnosť sústavy zostáva nulová (pred štartom bola sústava v pokoji).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="item in reactiveExamples" :key="item.title" class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <span class="text-3xl">{{ item.icon }}</span>
            <p class="font-bold text-gray-900 mt-2 text-sm">{{ item.title }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ item.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Zhrnutie — kľúčové poznatky</h2>
      <ul class="space-y-3 text-sm text-gray-700">
        <li class="flex items-start gap-3">
          <span class="text-teal-600 font-bold mt-0.5">✓</span>
          <span>Hybnosť <span v-html="km('\\vec{p} = m\\vec{v}')"/> je vektorová veličina s jednotkou kg·m/s.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-teal-600 font-bold mt-0.5">✓</span>
          <span>Impulz sily <span v-html="km('\\vec{F}\\cdot\\Delta t')"/> sa rovná zmene hybnosti <span v-html="km('\\Delta\\vec{p}')"/>.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-teal-600 font-bold mt-0.5">✓</span>
          <span>V uzavretej sústave je celková hybnosť konštantná (zákon zachovania hybnosti).</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-teal-600 font-bold mt-0.5">✓</span>
          <span>Pri <strong>pružnom náraze</strong> sa zachováva aj kinetická energia; pri <strong>nepružnom náraze</strong> sa energia čiastočne premení na teplo a zvuk.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-teal-600 font-bold mt-0.5">✓</span>
          <span>Reaktívny pohon (raketa) je priama aplikácia zákona zachovania hybnosti.</span>
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz o hybnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Otestuj sa — kvíz</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-5">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1.5">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                i < currentQ ? 'bg-teal-500 w-6' : i === currentQ ? 'bg-teal-300 w-6' : 'bg-gray-200 w-4'
              ]"
            />
          </div>
        </div>

        <!-- Question -->
        <p data-testid="quiz-question" class="text-gray-900 font-semibold text-lg mb-5" v-html="currentQuestion.question"/>

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
            :class="[
              'w-full text-left px-5 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200',
              selectedAnswer === null
                ? 'border-gray-200 hover:border-teal-400 hover:bg-teal-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-200 text-gray-400 cursor-default'
            ]"
            @click="selectAnswer(i)"
          >
            <span class="font-bold mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <span v-html="option"/>
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            :class="[
              'rounded-xl p-4 text-sm mb-5',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <p class="font-semibold mb-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
            </p>
            <p v-html="currentQuestion.explanation"/>
          </div>
        </Transition>

        <!-- Next button -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="quiz-next-btn"
            class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Result -->
      <div v-else data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-2xl font-bold text-gray-900 mb-2">
          {{ quizScore }} / {{ quiz.length }}
        </p>
        <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
import katex from 'katex'

function km(f) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

useHead({
  title: 'Hybnosť a zákon zachovania hybnosti | Fyzika | NaucSaTo',
  meta: [
    { name: 'description', content: 'Hybnosť p=mv, impulz sily, zákon zachovania hybnosti, pružný a nepružný náraz, reaktívny pohon — fyzika pre gymnázistov.' }
  ]
})

const reactiveExamples = [
  { icon: '🚀', title: 'Raketa', desc: 'Plyny vytryskujú dozadu, raketa leží dopredu.' },
  { icon: '💧', title: 'Záhradná hadica', desc: 'Voda vyteká dopredu, hadica sa vychyľuje dozadu.' },
  { icon: '🎈', title: 'Balón s vzduchom', desc: 'Vzduch uniká dozadu, balón letí dopredu.' },
]

// Quiz
const quiz = [
  {
    question: 'Čo je hybnosť telesa?',
    options: [
      'Skalárna veličina rovná súčinu hmotnosti a rýchlosti',
      'Vektorová veličina rovná súčinu hmotnosti a rýchlosti',
      'Vektorová veličina rovná podielu sily a času',
      'Skalárna veličina rovná kinetickej energii telesa'
    ],
    correctIndex: 1,
    explanation: `Hybnosť ${km('\\vec{p} = m\\vec{v}')} je <strong>vektorová</strong> veličina — má rovnaký smer ako rýchlosť. Jednotka je kg·m/s.`
  },
  {
    question: 'Futbalová lopta má hmotnosť 0,43 kg a pohybuje sa rýchlosťou 20 m/s. Aká je jej hybnosť?',
    options: [
      `${km('p = 0{,}215 \\text{ kg·m/s}')}`,
      `${km('p = 8{,}6 \\text{ kg·m/s}')}`,
      `${km('p = 43 \\text{ kg·m/s}')}`,
      `${km('p = 86 \\text{ kg·m/s}')}`
    ],
    correctIndex: 1,
    explanation: `${km('p = m \\cdot v = 0{,}43 \\cdot 20 = 8{,}6 \\text{ kg·m/s}')}`
  },
  {
    question: 'Teleso s hmotnosťou 5 kg sa pohybuje rýchlosťou 4 m/s. Aká sila ho zastaví za 2 sekundy?',
    options: [
      `${km('F = 5 \\text{ N}')}`,
      `${km('F = 10 \\text{ N}')}`,
      `${km('F = 20 \\text{ N}')}`,
      `${km('F = 40 \\text{ N}')}`
    ],
    correctIndex: 1,
    explanation: `${km('F = \\frac{\\Delta p}{\\Delta t} = \\frac{m \\cdot \\Delta v}{\\Delta t} = \\frac{5 \\cdot 4}{2} = 10 \\text{ N}')}`
  },
  {
    question: 'Čo platí pre uzavretú sústavu telies?',
    options: [
      'Celková kinetická energia sústavy je konštantná',
      'Celková hybnosť sústavy je konštantná',
      'Celková hmotnosť sústavy sa mení',
      'Sily medzi telesami sú nulové'
    ],
    correctIndex: 1,
    explanation: 'Zákon zachovania hybnosti: v uzavretej sústave (bez vonkajších síl) je celková hybnosť konštantná. Kinetická energia konštantná nemusí byť — pri nepružnom náraze sa časť premení na teplo.'
  },
  {
    question: 'Vagón o hmotnosti 1 500 kg sa pohybuje rýchlosťou 4 m/s a narazí do stojaceho vagóna hmotnosti 1 500 kg. Po nepružnom náraze sa spoja. Aká je ich spoločná rýchlosť?',
    options: [
      `${km('v^{\\prime} = 4\\;\\text{m/s}')}`,
      `${km('v^{\\prime} = 3\\;\\text{m/s}')}`,
      `${km('v^{\\prime} = 2\\;\\text{m/s}')}`,
      `${km('v^{\\prime} = 1\\;\\text{m/s}')}`
    ],
    correctIndex: 2,
    explanation: `${km('v^{\\prime} = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{1500 \\cdot 4}{1500+1500} = \\frac{6000}{3000} = 2\\;\\text{m/s}')}`
  },
  {
    question: 'Pri ktorom type nárazu sa zachováva aj kinetická energia?',
    options: [
      'Pri nepružnom náraze',
      'Pri dokonale nepružnom náraze',
      'Pri pružnom náraze',
      'Kinetická energia sa nezachováva nikdy'
    ],
    correctIndex: 2,
    explanation: 'Pri <strong>pružnom náraze</strong> sa zachováva hybnosť aj kinetická energia. Pri nepružnom náraze sa časť kinetickej energie premení na teplo, zvuk alebo deformačnú energiu.'
  }
]

const currentQ = ref(0)
const selectedAnswer = ref(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function selectAnswer(i) {
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
    ? 'Perfektné! Zvládol si všetky otázky!'
    : r >= 0.7
      ? 'Výborne! Látku ovládaš dobre.'
      : r >= 0.4
        ? 'Nie je to zlé, ale oplatí sa zopakovať.'
        : 'Prejdi si tému ešte raz a skús to znova.'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
