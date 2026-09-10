<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/optika" class="hover:text-emerald-600 transition-colors">Optika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Odraz a lom svetla</span>
    </nav>

    <!-- Header -->
    <div class="bg-amber-500 rounded-2xl p-8 mb-10 text-white">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-4xl">🪞</span>
        <h1 class="text-3xl font-extrabold">Odraz a lom svetla</h1>
      </div>
      <p class="text-amber-100 text-lg">Optika · Gymnázium</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Svetlo sa pri dopade na rozhranie dvoch prostredí správa podľa presných fyzikálnych zákonov —
      odráža sa alebo láme (mení smer šírenia). Tieto javy vysvetľujú, prečo vidíme obraz v zrkadle,
      prečo sa predmet vo vode zdá byť bližšie, a ako fungujú optické vlákna v telekomunikáciách.
    </p>

    <!-- ── Section 1: Odraz svetla ─────────────────────────────────────────── -->
    <section aria-label="Odraz svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-amber-400 pb-2">
        1. Odraz svetla
      </h2>

      <p class="text-gray-700 mb-4">
        Keď svetelný lúč dopadne na odrazivú plochu, odrazí sa. Uhol dopadu aj uhol odrazu sa merajú
        od <strong>normály</strong> — kolmice k odrazivej ploche v mieste dopadu.
      </p>

      <!-- Zákon odrazu -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-amber-800 mb-3">Zákon odrazu</h3>
        <p class="text-gray-700 mb-3">
          Uhol dopadu <MathFormula formula="\alpha" /> sa rovná uhlu odrazu
          <MathFormula formula="\alpha^{\prime}" />:
        </p>
        <div class="bg-white rounded-xl p-4 text-center my-3">
          <MathFormula display formula="\alpha = \alpha^{\prime}" />
        </div>
        <p class="text-gray-700 text-sm mt-2">
          Dopadajúci lúč, odrazený lúč a normála ležia vždy v jednej rovine.
        </p>
      </div>

      <!-- Rovinné zrkadlo -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Rovinné zrkadlo</h3>
      <p class="text-gray-700 mb-3">
        Rovinné zrkadlo vytvára <strong>zdanlivý</strong> (virtuálny) obraz — obraz sa javí za zrkadlom,
        ale skutočné svetelné lúče tam neprechádzajú.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div
v-for="prop in planeMirrorProps" :key="prop.label"
          class="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
          <span class="text-xl mt-0.5">{{ prop.icon }}</span>
          <div>
            <p class="font-semibold text-gray-800 text-sm">{{ prop.label }}</p>
            <p class="text-gray-500 text-xs mt-0.5">{{ prop.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Guľaté zrkadlá -->
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Guľaté zrkadlá</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 class="font-bold text-blue-800 mb-2">Konkávne (duté) zrkadlo</h4>
          <p class="text-gray-700 text-sm mb-2">
            Odrazivá plocha je na <em>vnútornej</em> strane gule. Zbieha paralelné lúče do
            <strong>ohniska F</strong> — ohnisko je reálne (pred zrkadlom).
          </p>
          <p class="text-xs text-blue-700">Využitie: reflektory, teleskopy, solárne kolektory, zubné zrkadlá</p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h4 class="font-bold text-purple-800 mb-2">Konvexné (vypuklé) zrkadlo</h4>
          <p class="text-gray-700 text-sm mb-2">
            Odrazivá plocha je na <em>vonkajšej</em> strane gule. Rozptyľuje lúče —
            <strong>ohnisko je zdanlivé</strong> (za zrkadlom).
          </p>
          <p class="text-xs text-purple-700">Využitie: spätné zrkadlá áut, bezpečnostné zrkadlá v obchodoch</p>
        </div>
      </div>

      <!-- Zobrazovacia rovnica -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-gray-800 mb-3">Zobrazovacia rovnica zrkadla</h3>
        <div class="bg-white rounded-xl p-4 text-center mb-3">
          <MathFormula display formula="\frac{1}{f} = \frac{1}{a} + \frac{1}{a^{\prime}}" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-700">
          <div class="text-center"><MathFormula formula="f" /> — ohnisková vzdialenosť</div>
          <div class="text-center"><MathFormula formula="a" /> — vzdialenosť predmetu</div>
          <div class="text-center"><MathFormula formula="a^{\prime}" /> — vzdialenosť obrazu</div>
        </div>
        <p class="text-gray-600 text-sm mt-3">
          Vzťah medzi polomerom krivosti <MathFormula formula="R" /> a ohniskom:
          <MathFormula formula="f = R/2" />
        </p>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-green-50 border border-green-300 rounded-xl p-5 mb-4">
        <h4 class="font-bold text-green-800 mb-2">Príklad 1 — Konkávne zrkadlo</h4>
        <p class="text-gray-700 mb-3">
          Predmet stojí <MathFormula formula="a = 30\,\text{cm}" /> pred konkávnym zrkadlom
          s ohniskovou vzdialenosťou <MathFormula formula="f = 10\,\text{cm}" />.
          Kde vznikne obraz?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2 text-gray-700 text-sm">
          <p>Vyjadríme <MathFormula formula="a^{\prime}" /> zo zobrazovacej rovnice:</p>
          <MathFormula display formula="\frac{1}{a^{\prime}} = \frac{1}{f} - \frac{1}{a} = \frac{1}{10} - \frac{1}{30} = \frac{3 - 1}{30} = \frac{2}{30}" />
          <MathFormula display formula="a^{\prime} = 15\,\text{cm}" />
          <p class="text-green-800 font-semibold">Obraz je skutočný a vzniká 15 cm pred zrkadlom.</p>
        </div>
      </div>
    </section>

    <!-- ── Section 2: Lom svetla ───────────────────────────────────────────── -->
    <section aria-label="Lom svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-amber-400 pb-2">
        2. Lom svetla
      </h2>

      <p class="text-gray-700 mb-4">
        Keď svetlo prechádza z jedného prostredia do druhého (napr. zo vzduchu do skla),
        mení svoju <strong>rýchlosť</strong> a teda aj <strong>smer šírenia</strong>.
        Tento jav sa nazýva <strong>lom svetla</strong> (refrakcia).
      </p>

      <!-- Index lomu -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-amber-800 mb-3">Index lomu</h3>
        <p class="text-gray-700 mb-3">
          Index lomu <MathFormula formula="n" /> vyjadruje, koľkokrát je rýchlosť svetla vo vákuu
          väčšia ako v danom prostredí:
        </p>
        <div class="bg-white rounded-xl p-4 text-center mb-4">
          <MathFormula display formula="n = \frac{c}{v}" />
        </div>
        <p class="text-gray-700 text-sm mb-4">
          kde <MathFormula formula="c = 3 \times 10^8\,\text{m/s}" /> je rýchlosť svetla vo vákuu
          a <MathFormula formula="v" /> je rýchlosť svetla v danom prostredí.
          Pre vákuum platí <MathFormula formula="n = 1" />, pre všetky ostatné látky <MathFormula formula="n > 1" />.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div
v-for="mat in materials" :key="mat.name"
            class="bg-white rounded-lg p-3 text-center border border-amber-100">
            <div class="font-semibold text-gray-800 text-sm mb-1">{{ mat.name }}</div>
            <div class="text-amber-700 font-mono text-sm" v-html="km('n = ' + mat.n)"/>
          </div>
        </div>
      </div>

      <!-- Snellov zákon -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-blue-800 mb-3">Snellov zákon lomu</h3>
        <p class="text-gray-700 mb-3">
          Vzťah medzi uhlami dopadu a lomu pri prechode svetla cez rozhranie dvoch prostredí:
        </p>
        <div class="bg-white rounded-xl p-4 text-center mb-4">
          <MathFormula display formula="n_1 \sin\alpha_1 = n_2 \sin\alpha_2" />
        </div>
        <ul class="text-gray-700 text-sm space-y-2">
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold mt-0.5">→</span>
            Do opticky <strong>hustejšieho</strong> prostredia (<MathFormula formula="n_2 > n_1" />):
            lúč sa <strong>priblíži k normále</strong> (<MathFormula formula="\alpha_2 < \alpha_1" />)
          </li>
          <li class="flex gap-2">
            <span class="text-blue-500 font-bold mt-0.5">→</span>
            Do opticky <strong>redšieho</strong> prostredia (<MathFormula formula="n_2 < n_1" />):
            lúč sa <strong>vzdiali od normály</strong> (<MathFormula formula="\alpha_2 > \alpha_1" />)
          </li>
        </ul>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-green-50 border border-green-300 rounded-xl p-5 mb-4">
        <h4 class="font-bold text-green-800 mb-2">Príklad 2 — Snellov zákon</h4>
        <p class="text-gray-700 mb-3">
          Svetelný lúč dopadá zo vzduchu (<MathFormula formula="n_1 = 1{,}00" />) na sklo
          (<MathFormula formula="n_2 = 1{,}50" />) pod uhlom dopadu
          <MathFormula formula="\alpha_1 = 45°" />. Aký je uhol lomu <MathFormula formula="\alpha_2" />?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2 text-gray-700 text-sm">
          <p>Vyjadríme <MathFormula formula="\sin\alpha_2" /> zo Snellovho zákona:</p>
          <MathFormula display formula="\sin\alpha_2 = \frac{n_1 \sin\alpha_1}{n_2} = \frac{1{,}00 \cdot \sin 45°}{1{,}50} = \frac{0{,}707}{1{,}50} \approx 0{,}471" />
          <MathFormula display formula="\alpha_2 = \arcsin(0{,}471) \approx 28°" />
          <p class="text-green-800 font-semibold">Lúč sa priblížil k normále — uhol lomu (28°) je menší ako uhol dopadu (45°).</p>
        </div>
      </div>
    </section>

    <!-- ── Section 3: Totálny odraz ───────────────────────────────────────── -->
    <section aria-label="Totálny odraz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-amber-400 pb-2">
        3. Totálny odraz a optické vlákna
      </h2>

      <p class="text-gray-700 mb-4">
        Keď svetlo prechádza z opticky <strong>hustejšieho do redšieho</strong> prostredia a uhol
        dopadu presahuje určitú hranicu, svetlo sa <strong>úplne odrazí</strong> späť —
        nenastane žiadny lom. Hovoríme o <strong>totálnom (úplnom) odraze</strong>.
      </p>

      <!-- Kritický uhol -->
      <div class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-red-800 mb-3">Kritický uhol</h3>
        <p class="text-gray-700 mb-3">
          Kritický uhol <MathFormula formula="\alpha_k" /> je najmenší uhol dopadu, pri ktorom
          nastane totálny odraz. Podmienka totálneho odrazu:
          <MathFormula formula="\alpha \geq \alpha_k" />.
        </p>
        <div class="bg-white rounded-xl p-4 text-center mb-3">
          <MathFormula display formula="\sin\alpha_k = \frac{n_2}{n_1}" />
        </div>
        <p class="text-gray-700 text-sm">
          Platí pre prechod z prostredia s indexom <MathFormula formula="n_1" /> do prostredia
          s indexom <MathFormula formula="n_2 < n_1" />.
        </p>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-green-50 border border-green-300 rounded-xl p-5 mb-6">
        <h4 class="font-bold text-green-800 mb-2">Príklad 3 — Kritický uhol skla</h4>
        <p class="text-gray-700 mb-3">
          Vypočítaj kritický uhol pre sklo (<MathFormula formula="n_1 = 1{,}50" />) pri
          prechode do vzduchu (<MathFormula formula="n_2 = 1{,}00" />).
        </p>
        <div class="bg-white rounded-lg p-4 space-y-2 text-gray-700 text-sm">
          <MathFormula display formula="\sin\alpha_k = \frac{n_2}{n_1} = \frac{1{,}00}{1{,}50} \approx 0{,}667" />
          <MathFormula display formula="\alpha_k = \arcsin(0{,}667) \approx 41{,}8°" />
          <p class="text-green-800 font-semibold">
            Pri dopade pod uhlom väčším ako ~42° sa svetlo totálne odrazí a nevyjde zo skla.
          </p>
        </div>
      </div>

      <!-- Optické vlákno -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-4">
        <h3 class="font-bold text-purple-800 mb-3">Optické vlákno</h3>
        <p class="text-gray-700 mb-3">
          Optické vlákno využíva <strong>totálny odraz</strong> na prenos svetla (a teda informácií)
          na veľké vzdialenosti s minimálnymi stratami. Skladá sa z:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div class="bg-white rounded-xl p-4 border">
            <p class="font-semibold text-purple-800 mb-1">Jadro</p>
            <p class="text-gray-700 text-sm">Sklo alebo plast s <strong>vyšším</strong> indexom lomu. Tu sa šíri svetlo.</p>
          </div>
          <div class="bg-white rounded-xl p-4 border">
            <p class="font-semibold text-purple-800 mb-1">Plášť</p>
            <p class="text-gray-700 text-sm">Materiál s <strong>nižším</strong> indexom lomu. Zabraňuje svetlu uniknúť.</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm">
          Svetlo vstúpi do jadra a odráža sa od rozhrania jadro–plášť vždy pod uhlom väčším ako
          kritický uhol. Tým sa efektívne šíri po celej dĺžke vlákna.
          <span class="font-medium text-purple-700">Využitie:</span>
          telekomunikácie, internet, medicína (endoskopy), laserová chirurgia.
        </p>
      </div>
    </section>

    <!-- ── Zhrnutie ──────────────────────────────────────────────────────────── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-xl p-4 border">
          <h3 class="font-bold text-amber-700 mb-3">Odraz svetla</h3>
          <ul class="text-gray-700 text-sm space-y-2">
            <li class="flex gap-2"><span class="text-amber-500 font-bold">✓</span>
              Zákon odrazu: <MathFormula formula="\alpha = \alpha^{\prime}" />
            </li>
            <li class="flex gap-2"><span class="text-amber-500 font-bold">✓</span>
              Rovinné zrkadlo → zdanlivý vzpriamený rovnaký obraz
            </li>
            <li class="flex gap-2"><span class="text-amber-500 font-bold">✓</span>
              Konkávne: zbieha lúče (reálne ohnisko)
            </li>
            <li class="flex gap-2"><span class="text-amber-500 font-bold">✓</span>
              Konvexné: rozptyľuje (zdanlivé ohnisko)
            </li>
            <li class="flex gap-2"><span class="text-amber-500 font-bold">✓</span>
              <MathFormula formula="\tfrac{1}{f} = \tfrac{1}{a} + \tfrac{1}{a^{\prime}}" />
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-xl p-4 border">
          <h3 class="font-bold text-blue-700 mb-3">Lom svetla</h3>
          <ul class="text-gray-700 text-sm space-y-2">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span>
              Index lomu: <MathFormula formula="n = c/v" />
            </li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span>
              Snellov zákon: <MathFormula formula="n_1 \sin\alpha_1 = n_2 \sin\alpha_2" />
            </li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span>
              Do hustejšieho → bližšie k normále
            </li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span>
              Do redšieho → ďalej od normály
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-xl p-4 border">
          <h3 class="font-bold text-red-700 mb-3">Totálny odraz</h3>
          <ul class="text-gray-700 text-sm space-y-2">
            <li class="flex gap-2"><span class="text-red-500 font-bold">✓</span>
              Kritický uhol: <MathFormula formula="\sin\alpha_k = n_2 / n_1" />
            </li>
            <li class="flex gap-2"><span class="text-red-500 font-bold">✓</span>
              Podmienka: <MathFormula formula="\alpha \geq \alpha_k" />
            </li>
            <li class="flex gap-2"><span class="text-red-500 font-bold">✓</span>
              Len z hustejšieho do redšieho prostredia
            </li>
            <li class="flex gap-2"><span class="text-red-500 font-bold">✓</span>
              Využitie: optické vlákna, diamanty
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ── Kvíz ──────────────────────────────────────────────────────────────── -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <!-- Výsledok -->
      <div v-if="quizFinished" data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="score" class="text-3xl font-extrabold text-gray-900 mb-1">
          {{ quizScore }} / {{ quiz.length }}
        </p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="reset-btn"
          class="px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <!-- Otázky -->
      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <!-- Progres -->
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <span class="text-sm font-semibold text-amber-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Otázka -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p
data-testid="question" class="text-lg font-semibold text-gray-900 mb-5"
          v-html="currentQuestion.question" />

        <!-- Možnosti -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            :disabled="selectedAnswer !== null"
            :class="[
              'text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150',
              selectedAnswer === null
                ? 'border-gray-200 text-gray-700 hover:border-amber-400 hover:bg-amber-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="option" />
          </button>
        </div>

        <!-- Spätná väzba -->
        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div
              data-testid="feedback"
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
              </p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="next-btn"
                class="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
                @click="nextQuestion">
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

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ── Statický obsah ────────────────────────────────────────────────────────────

const planeMirrorProps = [
  { icon: '👁️', label: 'Zdanlivý obraz', desc: 'Obraz sa javí za zrkadlom, svetlo tam skutočne neprechádza.' },
  { icon: '↕️', label: 'Vzpriamený', desc: 'Rovnaká orientácia ako predmet — nie je obrátený hore-dole.' },
  { icon: '↔️', label: 'Rovnaká veľkosť', desc: 'Obraz je rovnako veľký ako predmet.' },
  { icon: '📏', label: 'Symetrický', desc: 'Obraz je rovnako ďaleko za zrkadlom, ako predmet pred ním.' },
]

const materials = [
  { name: 'Vákuum', n: '1{,}000' },
  { name: 'Vzduch', n: '1{,}0003' },
  { name: 'Voda', n: '1{,}33' },
  { name: 'Sklo', n: '1{,}50' },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo hovorí zákon odrazu svetla?',
    options: [
      'Uhol dopadu je väčší ako uhol odrazu',
      'Uhol dopadu sa rovná uhlu odrazu',
      'Uhol odrazu závisí od farby svetla',
      'Uhol dopadu je polovičný oproti uhlu odrazu',
    ],
    correctIndex: 1,
    explanation: `Zákon odrazu hovorí, že ${km('\\alpha = \\alpha^{\\prime}')} — uhol dopadu sa rovná uhlu odrazu. Oba sa merajú od normály k odrazivej ploche.`,
  },
  {
    question: 'Aký obraz vytvára rovinné zrkadlo?',
    options: [
      'Skutočný, obrátený, zmenšený',
      'Zdanlivý, obrátený, zväčšený',
      'Zdanlivý, vzpriamený, rovnako veľký',
      'Skutočný, vzpriamený, rovnako veľký',
    ],
    correctIndex: 2,
    explanation: 'Rovinné zrkadlo vytvára zdanlivý (virtuálny), vzpriamený obraz rovnakej veľkosti ako predmet. Obraz sa javí za zrkadlom.',
  },
  {
    question: `Svetelný lúč prechádza zo vzduchu (${km('n_1=1{,}00')}) do vody (${km('n_2=1{,}33')}) pod uhlom dopadu 30°. Vypočítaj uhol lomu.`,
    options: [
      `${km('\\alpha_2 \\approx 22°')}`,
      `${km('\\alpha_2 \\approx 30°')}`,
      `${km('\\alpha_2 \\approx 40°')}`,
      `${km('\\alpha_2 \\approx 45°')}`,
    ],
    correctIndex: 0,
    explanation: `${km('\\sin\\alpha_2 = \\frac{n_1 \\sin\\alpha_1}{n_2} = \\frac{1{,}00 \\cdot 0{,}5}{1{,}33} \\approx 0{,}376')} — teda ${km('\\alpha_2 \\approx 22°')}. Lúč sa priblížil k normále.`,
  },
  {
    question: `Čo vyjadruje vzorec ${km('n = c/v')}?`,
    options: [
      'Pomer vlnových dĺžok svetla v dvoch prostrediach',
      'Pomer rýchlosti svetla vo vákuu k rýchlosti v prostredí',
      'Uhol, pod ktorým nastane totálny odraz',
      'Rýchlosť svetla v danom prostredí',
    ],
    correctIndex: 1,
    explanation: `Index lomu ${km('n = c/v')} je pomer rýchlosti svetla vo vákuu ${km('c')} k rýchlosti svetla v danom prostredí ${km('v')}. Pre vákuum ${km('n=1')}, pre ostatné látky ${km('n>1')}.`,
  },
  {
    question: `Kritický uhol pre sklo je ${km('\\alpha_k \\approx 42°')}. Svetlo dopadá z vnútra skla pod uhlom 50°. Čo nastane?`,
    options: [
      'Lúč sa zlomí a vyjde zo skla',
      'Lúč sa čiastočne odrazí, čiastočne zlomí',
      'Nastane totálny odraz — lúč zostane v skle',
      'Lúč sa pohltí',
    ],
    correctIndex: 2,
    explanation: `Keďže uhol dopadu (50°) je väčší ako kritický uhol (42°), platí podmienka ${km('\\alpha \\geq \\alpha_k')} a nastane totálny odraz. Svetlo sa úplne odrazí späť do skla.`,
  },
  {
    question: 'Na akom fyzikálnom jave je založené fungovanie optického vlákna?',
    options: [
      'Lom svetla na rozhraní vzduch–sklo',
      'Totálny odraz svetla v jadre vlákna',
      'Odraz svetla od rovinného zrkadla',
      'Ohyb svetla na hranách vlákna',
    ],
    correctIndex: 1,
    explanation: 'Optické vlákno využíva totálny odraz. Jadro má vyšší index lomu ako plášť — svetlo sa totálne odráža od stien jadra a šíri sa ďalej pozdĺž vlákna s minimálnymi stratami.',
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
