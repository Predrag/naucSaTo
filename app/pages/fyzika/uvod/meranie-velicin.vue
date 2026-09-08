<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/uvod" class="hover:text-emerald-600 transition-colors">Úvod do fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Meranie fyzikálnych veličín</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📐</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Meranie fyzikálnych veličín</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Bez merania niet fyziky. Naučíme sa, čo je fyzikálna veličina, ako merať správne a čo robiť s chybami.
    </p>

    <!-- Section 1: Fyzikálna veličina -->
    <section aria-label="Fyzikálna veličina" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Fyzikálna veličina</h2>
      <p class="text-gray-500 mb-5">
        Fyzikálna veličina opisuje merateľnú vlastnosť hmoty alebo javu. Každá veličina má dve zložky.
      </p>

      <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
        <p class="text-gray-700 leading-relaxed mb-3">
          Každú fyzikálnu veličinu zapisujeme ako:
        </p>
        <div class="text-center text-2xl font-bold text-emerald-700 py-3">
          veličina = číselná hodnota × jednotka
        </div>
        <p class="text-gray-600 text-sm mt-3">
          Príklady: <strong>l = 1,5 m</strong> &nbsp;·&nbsp; <strong>m = 75 kg</strong> &nbsp;·&nbsp; <strong>t = 9,58 s</strong>
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="prop in quantityProps" :key="prop.title" class="bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl">{{ prop.icon }}</span>
          <p class="font-semibold text-gray-900 mt-2">{{ prop.title }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ prop.text }}</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Meracie prístroje -->
    <section aria-label="Meracie prístroje" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Meracie prístroje</h2>
      <p class="text-gray-500 mb-5">
        Každá fyzikálna veličina sa meria iným prístrojom. Meranie môže byť
        <strong>priame</strong> (odčítame hodnotu priamo) alebo
        <strong>nepriame</strong> (vypočítame z iných nameraných veličín).
      </p>

      <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-teal-600 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Prístroj</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Meria</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold hidden sm:table-cell">Poznámka</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in instruments" :key="item.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-900">{{ item.icon }} {{ item.name }}</td>
              <td class="px-5 py-3 text-gray-700">{{ item.measures }}</td>
              <td class="px-5 py-3 font-mono font-bold text-teal-700">{{ item.unit }}</td>
              <td class="px-5 py-3 text-gray-500 hidden sm:table-cell">{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>Nepriame meranie — príklad:</strong> Hustotu telesa nezmeráme priamo —
        zmeráme hmotnosť (váhami) a objem (odmerným valcom) a vypočítame: ρ = m / V.
      </div>
    </section>

    <!-- Section 3: Chyby merania -->
    <section aria-label="Chyby merania" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Chyby merania</h2>
      <p class="text-gray-500 mb-5">
        Žiadne meranie nie je dokonalé. Každý výsledok obsahuje určitú chybu, ktorú musíme odhadnúť.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div v-for="err in errorTypes" :key="err.name" class="bg-white border border-gray-200 rounded-xl p-5">
          <div :class="['inline-flex items-center gap-2 text-sm font-bold rounded-full px-3 py-1 mb-3', err.badgeClass]">
            {{ err.icon }} {{ err.name }}
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-2">{{ err.description }}</p>
          <p class="text-xs text-gray-400 italic">Príklad: {{ err.example }}</p>
        </div>
      </div>

      <h3 class="text-lg font-bold text-gray-900 mb-4">Vyjadrenie chyby merania</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Absolútna chyba (Δx)</p>
          <MathFormula display formula="\Delta x = |x_n - x_s|" />
          <p class="text-xs text-gray-500 mt-2 text-center">x_n = nameraná hodnota, x_s = skutočná hodnota</p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-purple-800 mb-3">Relatívna chyba (δx)</p>
          <MathFormula display formula="\delta x = \frac{\Delta x}{x} \cdot 100\,\%" />
          <p class="text-xs text-gray-500 mt-2 text-center">vyjadruje chybu v percentách</p>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-2">Zápis výsledku merania</p>
        <MathFormula display formula="x = (x_n \pm \Delta x)\;\text{jednotka}" />
        <p class="text-sm text-gray-500 text-center mt-1">
          Príklad: <strong>l = (15,4 ± 0,1) cm</strong>
        </p>
      </div>
    </section>

    <!-- Section 4: Neistota merania -->
    <section aria-label="Neistota merania" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Neistota merania</h2>
      <p class="text-gray-500 mb-5">
        Moderný prístup namiesto pojmu „chyba" používa <strong>neistotu merania</strong> — rozsah hodnôt,
        v ktorom sa skutočná hodnota veličiny s vysokou pravdepodobnosťou nachádza.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        <!-- Typ A -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div class="inline-flex items-center gap-2 text-sm font-bold text-blue-800 bg-blue-100 rounded-full px-3 py-1 mb-3">
            📊 Neistota typu A (<MathFormula formula="u_A" />)
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Určuje sa <strong>štatistickou analýzou</strong> opakovaných meraní.
            Čím viac meraní, tým je <MathFormula formula="u_A" /> menšia.
          </p>
          <div class="space-y-3">
            <div class="bg-white rounded-lg px-4 py-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Aritmetický priemer (n meraní)</p>
              <MathFormula display formula="\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i" />
            </div>
            <div class="bg-white rounded-lg px-4 py-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Smerodajná odchýlka</p>
              <MathFormula display formula="s = \sqrt{\dfrac{\displaystyle\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}}" />
            </div>
            <div class="bg-white rounded-lg px-4 py-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Štandardná neistota typu A</p>
              <MathFormula display formula="u_A = \dfrac{s}{\sqrt{n}}" />
            </div>
          </div>
        </div>

        <!-- Typ B -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <div class="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-100 rounded-full px-3 py-1 mb-3">
            🔧 Neistota typu B (<MathFormula formula="u_B" />)
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Určuje sa <strong>inak ako štatisticky</strong> — z technických parametrov prístroja,
            kalibračných certifikátov alebo z hodnoty najmenšieho dielika stupnice.
          </p>
          <div class="space-y-3">
            <div class="bg-white rounded-lg px-4 py-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Zo stupnice prístroja (rovnomerné rozdelenie)</p>
              <MathFormula display formula="u_B = \dfrac{\Delta}{\sqrt{3}}" />
              <p class="text-xs text-gray-400 mt-1">Δ = polovica najmenšieho dielika</p>
            </div>
            <div class="bg-white rounded-lg px-4 py-3 text-sm text-gray-600">
              <p class="font-semibold text-gray-800 mb-1">Príklad:</p>
              Pravítko s dielikmi po 1 mm → Δ = 0,5 mm
              → <MathFormula formula="u_B = 0{,}5 / \sqrt{3} \approx 0{,}29\;\text{mm}" />
            </div>
          </div>
        </div>

      </div>

      <!-- Kombinovaná neistota -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
        <p class="text-sm font-semibold text-gray-900 mb-3">Kombinovaná štandardná neistota</p>
        <MathFormula display formula="u_C = \sqrt{u_A^2 + u_B^2}" />
        <p class="text-xs text-gray-500 text-center mt-2">
          Výsledok merania sa zapisuje ako: <MathFormula formula="x = \bar{x} \pm u_C\;\text{[jednotka]}" />
        </p>
      </div>

      <!-- Príklad výpočtu -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — meranie dĺžky tyče</p>
        <div class="space-y-2 text-sm text-gray-700">
          <p>5 meraní: 12,3 · 12,4 · 12,3 · 12,5 · 12,3 cm → <strong>x̄ = 12,36 cm</strong>, s = 0,089 cm</p>
          <p><MathFormula formula="u_A = s/\sqrt{5} = 0{,}089/2{,}24 \approx \mathbf{0{,}040\;cm}" /></p>
          <p>Pravítko s dielikmi 1 mm → Δ = 0,5 mm = 0,05 cm → <MathFormula formula="u_B = 0{,}05/\sqrt{3} \approx \mathbf{0{,}029\;cm}" /></p>
          <p><MathFormula formula="u_C = \sqrt{0{,}040^2 + 0{,}029^2} \approx \mathbf{0{,}049\;cm \approx 0{,}05\;cm}" /></p>
          <p class="font-bold text-emerald-700 mt-2">Výsledok: l = (12,36 ± 0,05) cm</p>
        </div>
      </div>
    </section>

    <!-- Section 5: Platné číslice -->
    <section aria-label="Platné číslice" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Platné číslice a zaokrúhľovanie</h2>
      <p class="text-gray-500 mb-5">
        Počet platných číslic hovorí, ako presný je výsledok merania.
      </p>

      <div class="space-y-3 mb-6">
        <div v-for="rule in sigFigRules" :key="rule.rule" class="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4">
          <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0">{{ rule.num }}</span>
          <div>
            <p class="font-semibold text-gray-900 text-sm">{{ rule.rule }}</p>
            <p class="text-xs text-gray-500 mt-0.5">{{ rule.example }}</p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Vedecký zápis (štandardná forma)</p>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">
          Veľmi veľké alebo malé čísla zapisujeme ako súčin čísla medzi 1 a 10 a mocniny 10:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div v-for="ex in scientificExamples" :key="ex.normal" class="flex items-center gap-3 bg-white rounded-lg px-4 py-2 text-sm border border-gray-100">
            <span class="text-gray-500">{{ ex.normal }}</span>
            <span class="text-gray-400">→</span>
            <span class="font-bold text-emerald-700">{{ ex.scientific }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Fyzikálna veličina = číselná hodnota + jednotka.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Meranie môže byť priame (odčítame) alebo nepriame (vypočítame).</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Systematická chyba je stála, náhodná sa mení. Výsledok zapisujeme ako x ± Δx.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Platné číslice a vedecký zápis pomáhajú vyjadriť presnosť výsledku.</li>
      </ul>
    </div>

    <!-- Quiz -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš či si to vedel.</p>

      <!-- Results screen -->
      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>

      <!-- Question screen -->
      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-emerald-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div class="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">{{ currentQuestion.question }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
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
            <div
              data-testid="quiz-feedback"
              :class="[
                'rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800',
              ]"
            >
              <p class="font-bold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
              </p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
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

function km(formula: string): string {
  return katex.renderToString(formula, { throwOnError: false, output: 'html' })
}

// ── Static content ────────────────────────────────────────────────────────────

const quantityProps = [
  { icon: '🔢', title: 'Číselná hodnota', text: 'Koľko — výsledok merania vyjadrený číslom.' },
  { icon: '📏', title: 'Jednotka', text: 'V čom — referenčná miera, napr. meter, kilogram.' },
  { icon: '🏷️', title: 'Symbol', text: 'Skratka veličiny — napr. l (dĺžka), m (hmotnosť), t (čas).' },
]

const instruments = [
  { icon: '📏', name: 'Pravítko / meter', measures: 'Dĺžka', unit: 'm, cm', note: 'Priame meranie' },
  { icon: '🔩', name: 'Posuvné meradlo', measures: 'Dĺžka (presne)', unit: 'mm', note: 'Presnosť 0,1 mm' },
  { icon: '⚖️', name: 'Váhy', measures: 'Hmotnosť', unit: 'kg, g', note: 'Rovnoramenné / digitálne' },
  { icon: '⏱️', name: 'Stopky / hodiny', measures: 'Čas', unit: 's, min', note: 'Priame meranie' },
  { icon: '🌡️', name: 'Teplomer', measures: 'Teplota', unit: '°C, K', note: 'Rôzne typy' },
  { icon: '⚡', name: 'Ampérmeter', measures: 'Elektrický prúd', unit: 'A', note: 'Zapája sa do série' },
  { icon: '🔋', name: 'Voltmeter', measures: 'Elektrické napätie', unit: 'V', note: 'Zapája sa paralelne' },
  { icon: '💨', name: 'Manometer', measures: 'Tlak', unit: 'Pa', note: 'Napr. tlak v pneumatike' },
]

const errorTypes = [
  {
    name: 'Systematická chyba',
    icon: '🔧',
    badgeClass: 'bg-orange-100 text-orange-800',
    description: 'Stále sa opakuje rovnakým smerom. Spôsobuje ju chybný prístroj, nesprávna metóda alebo odčítanie z nesprávneho uhla.',
    example: 'Váhy, ktoré vždy ukážu o 50 g viac, ako je skutočná hmotnosť.',
  },
  {
    name: 'Náhodná chyba',
    icon: '🎲',
    badgeClass: 'bg-purple-100 text-purple-800',
    description: 'Mení sa nepravidelne pri každom meraní. Znížime ju opakovaním merania a výpočtom priemeru.',
    example: 'Rôzne odčítanie stopiek rôznymi ľuďmi pri meraní rovnakého času.',
  },
]

const sigFigRules = [
  { num: '1', rule: 'Všetky nenulové číslice sú platné.', example: '1 234 má 4 platné číslice.' },
  { num: '2', rule: 'Nuly medzi nenulovými číslicami sú platné.', example: '1 023 má 4 platné číslice.' },
  { num: '3', rule: 'Nuly na začiatku čísla (pred prvou nenulovou číslicou) NIE sú platné.', example: '0,0230 má 3 platné číslice (2, 3, 0).' },
  { num: '4', rule: 'Nuly na konci desatinného čísla sú platné.', example: '2,500 má 4 platné číslice.' },
  { num: '5', rule: 'Pri výsledku zaokrúhľujeme na toľko platných číslic, koľko má menej presná hodnota.', example: '1,5 × 2,31 = 3,465 → zaokrúhlime na 3,5.' },
]

const scientificExamples = [
  { normal: '299 792 458 m/s', scientific: '2,998 × 10⁸ m/s' },
  { normal: '0,000 000 001 m', scientific: '1 × 10⁻⁹ m (1 nm)' },
  { normal: '6 370 000 m', scientific: '6,37 × 10⁶ m' },
  { normal: '0,000 911 kg', scientific: '9,11 × 10⁻⁴ kg' },
]

// ── Quiz ──────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Z čoho sa skladá každá fyzikálna veličina?',
    options: ['Len z jednotky', 'Len z číselnej hodnoty', 'Z číselnej hodnoty a jednotky', 'Z názvu a symbolu'],
    correctIndex: 2,
    explanation: 'Fyzikálnu veličinu vždy tvorí číselná hodnota (koľko) aj jednotka (v čom). Napr. l = 1,5 m.',
  },
  {
    question: 'Váhy vždy ukažú o 20 g viac ako skutočná hmotnosť. O aký typ chyby ide?',
    options: ['Náhodná chyba', 'Hrubá chyba', 'Systematická chyba', 'Relatívna chyba'],
    correctIndex: 2,
    explanation: 'Systematická chyba sa opakuje vždy rovnakým smerom — prístroj je napr. nesprávne nakalibrovaný.',
  },
  {
    question: 'Koľko platných číslic má číslo 0,0230?',
    options: ['4', '2', '1', '3'],
    correctIndex: 3,
    explanation: 'Nuly pred číslicou 2 nie sú platné (slúžia len na polohu desatinnej čiarky). Platné číslice sú 2, 3 a 0 na konci — teda 3.',
  },
  {
    question: 'Namerali sme l = 4,0 m, absolútna chyba Δl = 0,2 m. Aká je relatívna chyba?',
    options: ['2 %', '0,2 %', '5 %', '20 %'],
    correctIndex: 2,
    explanation: 'δl = (Δl / l) × 100 % = (0,2 / 4,0) × 100 % = 5 %.',
  },
  {
    question: 'Hustotu látky sme určili meraním hmotnosti a objemu. Ide o:',
    options: ['Priame meranie', 'Systematické meranie', 'Náhodné meranie', 'Nepriame meranie'],
    correctIndex: 3,
    explanation: 'Hustotu nevieme zmerať priamo — vypočítame ju zo vzorca ρ = m/V. To je nepriame meranie.',
  },
  {
    question: 'Čím sa určuje neistota merania typu A?',
    options: [
      'Z technických parametrov prístroja',
      'Štatistickou analýzou opakovaných meraní',
      'Z kalibračného certifikátu',
      'Z polovice najmenšieho dielika stupnice',
    ],
    correctIndex: 1,
    explanation: `Neistota typu A (${km('u_A')}) sa vypočíta zo série opakovaných meraní — z ich priemeru a smerodajnej odchýlky: ${km('u_A = s / \\sqrt{n}')}.`,
  },
  {
    question: `Pravítko má dieliky po 1 mm. Aká je neistota typu B (${km('u_B')})?`,
    options: ['0,5 mm', '1 mm', 'asi 0,29 mm', 'asi 0,87 mm'],
    correctIndex: 2,
    explanation: `Δ = polovica dielika = 0,5 mm. Pre rovnomerné rozdelenie: ${km('u_B = \\Delta / \\sqrt{3} = 0{,}5 / 1{,}73 \\approx 0{,}29\\;\\text{mm}')}.`,
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
