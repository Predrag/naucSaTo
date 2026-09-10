<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Vrhy telies</span>
    </nav>

    <!-- Header -->
    <div class="bg-red-600 text-white rounded-2xl px-8 py-7 mb-8">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-4xl">🎯</span>
        <h1 class="text-3xl font-extrabold">Vrhy telies</h1>
      </div>
      <p class="text-red-100 text-lg">Vodorovný vrh, šikmý vrh a vrh zvisle nahor – pohyb pod vplyvom gravitácie</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-600 text-lg mb-10">
      Vrh telesa je pohyb, pri ktorom dostane teleso počiatočnú rýchlosť a ďalej sa pohybuje
      len vplyvom gravitačného zrýchlenia. Kľúčovou myšlienkou je <strong>rozklad pohybu</strong>
      na nezávislé vodorovnú a zvislú zložku. Budeme používať
      <span v-html="km('g = 10\\,\\text{m/s}^2')"/>.
    </p>

    <!-- ===== SEKCIA 1: VODOROVNÝ VRH ===== -->
    <section aria-label="Vodorovný vrh" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-xl px-6 py-3 mb-6">
        1. Vodorovný vrh
      </h2>

      <p class="text-gray-700 mb-4">
        Pri vodorovnom vrhu dostane teleso počiatočnú rýchlosť
        <span v-html="km('v_0')"/> v <strong>horizontálnom smere</strong> a zároveň voľne padá vplyvom gravitácie.
        Pohyb sa skladá z dvoch navzájom nezávislých pohybov:
      </p>

      <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-1">
        <li><strong>Vodorovný smer:</strong> rovnomerný priamočiary pohyb – žiadna sila, rýchlosť
          <span v-html="km('v_x = v_0')"/> je konštantná.</li>
        <li><strong>Zvislý smer:</strong> voľný pád – gravitácia zrýchľuje teleso smerom nadol.</li>
      </ul>

      <div class="bg-orange-50 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-gray-800 mb-5">Základné vzorce – vodorovný vrh</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Vodorovná poloha</p>
            <MathFormula display formula="x = v_0\, t" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Zvislá poloha (pád nadol)</p>
            <MathFormula display formula="y = \tfrac{1}{2}\,g\,t^2" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Vodorovná zložka rýchlosti</p>
            <MathFormula display formula="v_x = v_0 = \text{konšt.}" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Zvislá zložka rýchlosti</p>
            <MathFormula display formula="v_y = g\,t" />
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 border border-orange-100 mt-4">
          <p class="text-xs text-gray-500 mb-1">Rovnica trajektórie (eliminácia t) – parabola</p>
          <MathFormula display formula="y = \frac{g}{2\,v_0^2}\,x^2" />
        </div>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 mb-4">
        <h3 class="font-bold text-blue-800 mb-3">Príklad – kameň hodený vodorovne</h3>
        <p class="text-gray-700 mb-3">
          Kameň hodíme vodorovne z výšky <span v-html="km('h = 20\\,\\text{m}')"/>
          počiatočnou rýchlosťou <span v-html="km('v_0 = 15\\,\\text{m/s}')"/>.
          Nájdite čas pádu a horizontálnu vzdialenosť dopadu.
        </p>
        <p class="text-gray-700 mb-1 font-semibold">Čas pádu (zvislý smer, <span v-html="km('y = h')"/>):</p>
        <MathFormula display formula="t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \cdot 20}{10}} = \sqrt{4} = 2\,\text{s}" />
        <p class="text-gray-700 mb-1 font-semibold">Horizontálna vzdialenosť:</p>
        <MathFormula display formula="x = v_0\,t = 15 \cdot 2 = 30\,\text{m}" />
      </div>
    </section>

    <!-- ===== SEKCIA 2: ŠIKMÝ VRH ===== -->
    <section aria-label="Šikmý vrh" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-xl px-6 py-3 mb-6">
        2. Šikmý vrh
      </h2>

      <p class="text-gray-700 mb-4">
        Pri šikmom vrhu dostane teleso počiatočnú rýchlosť
        <span v-html="km('v_0')"/> pod uhlom <span v-html="km('\\alpha')"/>
        voči vodorovnej rovine. Počiatočnú rýchlosť rozkladáme na dve zložky:
      </p>

      <div class="bg-orange-50 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-gray-800 mb-4">Rozklad počiatočnej rýchlosti</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Vodorovná zložka (konštantná)</p>
            <MathFormula display formula="v_x = v_0\cos\alpha" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Zvislá zložka v čase t</p>
            <MathFormula display formula="v_y = v_0\sin\alpha - g\,t" />
          </div>
        </div>

        <h3 class="font-bold text-gray-800 mb-4">Poloha telesa v čase t</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Vodorovná poloha</p>
            <MathFormula display formula="x = v_0\cos\alpha \cdot t" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Zvislá poloha</p>
            <MathFormula display formula="y = v_0\sin\alpha \cdot t - \tfrac{1}{2}\,g\,t^2" />
          </div>
        </div>

        <h3 class="font-bold text-gray-800 mb-4">Kľúčové veličiny šikmého vrhu</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Maximálna výška</p>
            <MathFormula display formula="H = \frac{v_0^2\sin^2\!\alpha}{2g}" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Celkový čas letu</p>
            <MathFormula display formula="T = \frac{2\,v_0\sin\alpha}{g}" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Dosah (horizontálna vzdialenosť)</p>
            <MathFormula display formula="D = \frac{v_0^2\sin 2\alpha}{g}" />
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-yellow-800 mb-2">Maximálny dosah pri α = 45°</h3>
        <p class="text-gray-700">
          Dosah <span v-html="km('D = \\frac{v_0^2\\sin 2\\alpha}{g}')"/> je
          najväčší, keď <span v-html="km('\\sin 2\\alpha = 1')"/>,
          čiže <span v-html="km('2\\alpha = 90°')"/> — to nastáva pri uhle
          <strong>α = 45°</strong>. Doplnkové uhly (napr. 30° a 60°) dávajú rovnaký dosah,
          ale rôznu maximálnu výšku.
        </p>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 mb-4">
        <h3 class="font-bold text-blue-800 mb-3">Príklad – šikmý vrh pod uhlom 30°</h3>
        <p class="text-gray-700 mb-3">
          Teleso je vhodené pod uhlom <span v-html="km('\\alpha = 30°')"/>
          s počiatočnou rýchlosťou <span v-html="km('v_0 = 20\\,\\text{m/s}')"/>.
          (<span v-html="km('\\sin 30° = 0{,}5,\\; \\cos 30° \\approx 0{,}866')"/>)
        </p>
        <p class="text-gray-700 mb-1 font-semibold">Maximálna výška:</p>
        <MathFormula display formula="H = \frac{20^2 \cdot 0{,}25}{20} = \frac{100}{20} = 5\,\text{m}" />
        <p class="text-gray-700 mb-1 font-semibold">Celkový čas letu:</p>
        <MathFormula display formula="T = \frac{2 \cdot 20 \cdot 0{,}5}{10} = 2\,\text{s}" />
        <p class="text-gray-700 mb-1 font-semibold">Dosah:</p>
        <MathFormula display formula="D = \frac{400 \cdot \sin 60°}{10} = \frac{400 \cdot 0{,}866}{10} \approx 34{,}6\,\text{m}" />
      </div>
    </section>

    <!-- ===== SEKCIA 3: VRH ZVISLE NAHOR ===== -->
    <section aria-label="Vrh zvisle nahor" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-xl px-6 py-3 mb-6">
        3. Vrh zvisle nahor
      </h2>

      <p class="text-gray-700 mb-4">
        Vrh zvisle nahor je špeciálnym prípadom šikmého vrhu pri uhle <span v-html="km('\\alpha = 90°')"/>.
        Teleso sa pohybuje iba v zvislom smere. Gravitácia ho <strong>spomaľuje</strong> počas výstupu,
        v najvyššom bode je momentálna rýchlosť nulová, potom teleso padá späť nadol.
      </p>

      <div class="bg-orange-50 rounded-xl p-6 mb-6">
        <h3 class="font-bold text-gray-800 mb-4">Vzorce – vrh zvisle nahor</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Rýchlosť v čase t</p>
            <MathFormula display formula="v = v_0 - g\,t" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Výška v čase t</p>
            <MathFormula display formula="y = v_0\,t - \tfrac{1}{2}\,g\,t^2" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Maximálna výška</p>
            <MathFormula display formula="H_{max} = \frac{v_0^2}{2g}" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100">
            <p class="text-xs text-gray-500 mb-1">Čas výstupu (do max. výšky)</p>
            <MathFormula display formula="t_{výstup} = \frac{v_0}{g}" />
          </div>
          <div class="bg-white rounded-lg p-4 border border-orange-100 sm:col-span-2">
            <p class="text-xs text-gray-500 mb-1">Celkový čas letu (výstup + zostup)</p>
            <MathFormula display formula="T = \frac{2\,v_0}{g}" />
          </div>
        </div>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 mb-4">
        <h3 class="font-bold text-blue-800 mb-3">Príklad – lopta hodená zvisle nahor</h3>
        <p class="text-gray-700 mb-3">
          Lopta je hodená zvisle nahor počiatočnou rýchlosťou
          <span v-html="km('v_0 = 30\\,\\text{m/s}')"/>.
          Nájdite maximálnu výšku a celkový čas letu.
        </p>
        <p class="text-gray-700 mb-1 font-semibold">Maximálna výška:</p>
        <MathFormula display formula="H_{max} = \frac{v_0^2}{2g} = \frac{30^2}{2 \cdot 10} = \frac{900}{20} = 45\,\text{m}" />
        <p class="text-gray-700 mb-1 font-semibold">Celkový čas letu:</p>
        <MathFormula display formula="T = \frac{2\,v_0}{g} = \frac{2 \cdot 30}{10} = 6\,\text{s}" />
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie kľúčových poznatkov</h2>
      <ul class="space-y-2 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Vrh je <strong>zložený pohyb</strong>: rovnomerný priamočiary pohyb vodorovne + voľný pád zvisle.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Pri vodorovnom vrhu:
            <span v-html="km('x = v_0 t')"/> a
            <span v-html="km('y = \\tfrac{1}{2}gt^2')"/>;
            trajektória je <strong>parabola</strong>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Šikmý vrh: zložky rýchlosti
            <span v-html="km('v_x = v_0\\cos\\alpha')"/> a
            <span v-html="km('v_y = v_0\\sin\\alpha - gt')"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Maximálna výška šikmého vrhu:
            <span v-html="km('H = \\frac{v_0^2\\sin^2\\!\\alpha}{2g}')"/>;
            dosah:
            <span v-html="km('D = \\frac{v_0^2\\sin 2\\alpha}{g}')"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Maximálny dosah nastáva pri uhle <strong>α = 45°</strong>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-red-600 font-bold mt-0.5">✓</span>
          <span>Vrh zvisle nahor: max. výška
            <span v-html="km('H = \\frac{v_0^2}{2g}')"/>,
            celkový čas letu
            <span v-html="km('T = \\frac{2v_0}{g}')"/>.</span>
        </li>
      </ul>
    </div>

    <!-- ===== KVÍZ ===== -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished">
        <div data-testid="quiz-progress" class="text-sm text-gray-500 mb-4">
          Otázka {{ currentQ + 1 }} z {{ quiz.length }}
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="currentQ">
            <p
              data-testid="quiz-question"
              class="text-gray-800 font-medium mb-4"
              v-html="currentQuestion.question"
            />

            <div class="space-y-2 mb-4">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl border transition-colors',
                  selectedAnswer === null
                    ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                    : i === currentQuestion.correctIndex
                      ? 'border-green-500 bg-green-50 text-green-800 font-medium'
                      : i === selectedAnswer
                        ? 'border-red-400 bg-red-50 text-red-800'
                        : 'border-gray-100 bg-gray-50 text-gray-400 cursor-default'
                ]"
                @click="selectAnswer(i)"
              >
                <span v-html="option"/>
              </button>
            </div>

            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="quiz-feedback"
                class="bg-blue-50 rounded-xl p-4 mb-4 text-gray-700 text-sm"
                v-html="currentQuestion.explanation"
              />
            </Transition>

            <button
              v-if="selectedAnswer !== null"
              type="button"
              data-testid="quiz-next-btn"
              class="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition-colors font-medium"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </Transition>
      </div>

      <div v-else data-testid="quiz-result" class="text-center py-4">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-2xl font-bold text-gray-800 mb-2">
          {{ quizScore }} / {{ quiz.length }}
        </p>
        <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition-colors font-medium"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import katex from 'katex';

function km(f) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' });
}

const quiz = [
  {
    question: 'Aký tvar má trajektória telesa pri vodorovnom vrhu?',
    options: ['Priamka', 'Parabola', 'Kružnica', 'Sínusoida'],
    correctIndex: 1,
    explanation: `Trajektória pri vodorovnom vrhu je <strong>parabola</strong>. Vyplýva to z rovnice ${km('y = \\frac{g}{2v_0^2}\\,x^2')}, ktorá je rovnicou paraboly so začiatkom v mieste vrhu.`
  },
  {
    question: `Teleso je hodené vodorovne z výšky ${km('h = 45\\,\\text{m}')}. Ako dlho padá? (${km('g = 10\\,\\text{m/s}^2')})`,
    options: [`${km('1\\,\\text{s}')}`, `${km('2\\,\\text{s}')}`, `${km('3\\,\\text{s}')}`, `${km('4{,}5\\,\\text{s}')}`],
    correctIndex: 2,
    explanation: `Z vzorca ${km('y = \\frac{1}{2}gt^2')} dostaneme ${km('t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 45}{10}} = \\sqrt{9} = 3\\,\\text{s}')}.`
  },
  {
    question: `Teleso je vhodené pod uhlom ${km('\\alpha = 30°')} s ${km('v_0 = 20\\,\\text{m/s}')}. Aká je maximálna výška? (${km('\\sin 30° = 0{,}5,\\; g = 10\\,\\text{m/s}^2')})`,
    options: [`${km('2{,}5\\,\\text{m}')}`, `${km('5\\,\\text{m}')}`, `${km('10\\,\\text{m}')}`, `${km('20\\,\\text{m}')}`],
    correctIndex: 1,
    explanation: `${km('H = \\frac{v_0^2\\sin^2\\!\\alpha}{2g} = \\frac{400 \\cdot 0{,}25}{20} = \\frac{100}{20} = 5\\,\\text{m}')}.`
  },
  {
    question: 'Pri akom uhle šikmého vrhu je horizontálny dosah najväčší?',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 1,
    explanation: `Dosah ${km('D = \\frac{v_0^2\\sin 2\\alpha}{g}')} dosiahne maximum keď ${km('\\sin 2\\alpha = 1')}, teda ${km('2\\alpha = 90°')} — to nastáva pri uhle <strong>α = 45°</strong>.`
  },
  {
    question: `Lopta je hodená zvisle nahor s ${km('v_0 = 25\\,\\text{m/s}')}. Ako dlho trvá výstup do maximálnej výšky? (${km('g = 10\\,\\text{m/s}^2')})`,
    options: [`${km('1{,}25\\,\\text{s}')}`, `${km('2{,}5\\,\\text{s}')}`, `${km('5\\,\\text{s}')}`, `${km('50\\,\\text{s}')}`],
    correctIndex: 1,
    explanation: `V najvyššom bode je rýchlosť nulová: ${km('0 = v_0 - g\\,t')}. Odtiaľ ${km('t_{výstup} = \\frac{v_0}{g} = \\frac{25}{10} = 2{,}5\\,\\text{s}')}.`
  },
  {
    question: 'Čo sa deje s vodorovnou zložkou rýchlosti pri vodorovnom vrhu počas celého letu?',
    options: [
      'Rastie vplyvom gravitácie',
      'Klesá vplyvom gravitácie',
      'Zostáva konštantná',
      'Najskôr rastie, potom klesá'
    ],
    correctIndex: 2,
    explanation: `Vo vodorovnom smere nepôsobí žiadna sila, preto platí ${km('v_x = v_0 = \\text{konšt.}')}. Gravitácia mení iba zvislú zložku rýchlosti ${km('v_y = g\\,t')}.`
  },
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

useHead({
  title: 'Vrhy telies – Mechanika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Vodorovný vrh, šikmý vrh a vrh zvisle nahor. Vzorce, príklady a kvíz pre gymnazistov podľa ŠVP.'
    }
  ]
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
