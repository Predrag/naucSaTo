<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/atomova-fyzika" class="hover:text-emerald-600 transition-colors">Atómová a jadrová fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Rádioaktivita</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">&#x2622;&#xfe0f;</span>
      <h1 class="text-4xl font-extrabold text-orange-600">Rádioaktivita</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Niektoré atómové jadrá sú nestabilné a spontánne sa premieňajú — pri tom vyžarujú energiu vo forme alfa, beta alebo gama žiarenia. Toto jav nazývame rádioaktivita.
    </p>

    <!-- Section 1: Druhy žiarenia -->
    <section aria-label="Druhy rádioaktívneho žiarenia" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5">Druhy rádioaktívneho žiarenia</h2>

      <p class="text-gray-600 mb-6 leading-relaxed">
        Pri rádioaktívnom rozpade sa nestabilné jadro (materské jadro) premení na jadro iného prvku (dcérske jadro) a uvoľní energiu. Rozlišujeme tri základné typy žiarenia.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <!-- Alfa -->
        <div class="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl font-bold text-red-600">&#945;</span>
            <h3 class="text-xl font-bold text-red-800">Alfa žiarenie</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Alfa častica je <strong>jadro hélia</strong> — dva protóny a dva neutróny. Po emisii sa protónové číslo zmenší o 2 a nukleónové číslo o 4.
          </p>
          <div class="bg-white rounded-xl p-3 text-center mb-3">
            <MathFormula formula="{}_{Z}^{A}X \;\to\; {}_{Z-2}^{A-4}Y \;+\; {}_{2}^{4}\text{He}" />
          </div>
          <ul class="text-xs text-gray-600 space-y-1">
            <li>&#x2022; Veľká ionizačná schopnosť</li>
            <li>&#x2022; Malá prenikavosť (list papiera)</li>
            <li>&#x2022; Dosah vo vzduchu ~ cm</li>
          </ul>
        </div>

        <!-- Beta -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl font-bold text-blue-600">&#946;<sup class="text-base">&#8722;</sup></span>
            <h3 class="text-xl font-bold text-blue-800">Beta žiarenie</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Beta-mínus častica je <strong>elektrón</strong> vzniknutý premenou neutrónu na protón. Protónové číslo sa zvýši o 1, nukleónové ostáva.
          </p>
          <div class="bg-white rounded-xl p-3 text-center mb-3">
            <MathFormula formula="{}_{Z}^{A}X \;\to\; {}_{Z+1}^{A}Y \;+\; e^- \;+\; \bar{\nu}_e" />
          </div>
          <ul class="text-xs text-gray-600 space-y-1">
            <li>&#x2022; Stredná ionizačná schopnosť</li>
            <li>&#x2022; Prenikavejší ako &#945; (mm Al)</li>
            <li>&#x2022; Sprevádzajú ho antineutríná</li>
          </ul>
        </div>

        <!-- Gamma -->
        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl font-bold text-purple-600">&#947;</span>
            <h3 class="text-xl font-bold text-purple-800">Gama žiarenie</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Gama žiarenie sú <strong>elektromagnetické vlny</strong> s veľmi krátkou vlnovou dĺžkou. Nevzniká zmena Z ani A — jadro len uvoľní prebytočnú energiu.
          </p>
          <div class="bg-white rounded-xl p-3 text-center mb-3">
            <MathFormula formula="{}_{Z}^{A}X^{*} \;\to\; {}_{Z}^{A}X \;+\; \gamma" />
          </div>
          <ul class="text-xs text-gray-600 space-y-1">
            <li>&#x2022; Malá ionizačná schopnosť</li>
            <li>&#x2022; Najväčšia prenikavosť (cm Pb)</li>
            <li>&#x2022; Nebezpečné pre tkanivá</li>
          </ul>
        </div>

      </div>

      <!-- Porovnávacia tabuľka -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Vlastnosť</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold text-red-300">&#945; žiarenie</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold text-blue-300">&#946; žiarenie</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold text-purple-300">&#947; žiarenie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in radiationTable" :key="row.property" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.property }}</td>
              <td class="px-5 py-3 text-red-700">{{ row.alpha }}</td>
              <td class="px-5 py-3 text-blue-700">{{ row.beta }}</td>
              <td class="px-5 py-3 text-purple-700">{{ row.gamma }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Príklad 1: Alfa rozpad uránu -->
      <div class="bg-red-50 border border-red-200 rounded-xl p-5">
        <p class="text-sm font-bold text-red-800 mb-2">Príklad 1 — Alfa rozpad uránu-238</p>
        <p class="text-sm text-gray-700 mb-3">
          Urán-238 je prirodzene sa vyskytujúci rádioaktívny izotop. Pri alfa rozpade stráca jadro 2 protóny a 2 neutróny:
        </p>
        <div class="bg-white rounded-lg p-4 text-center mb-3">
          <MathFormula display formula="{}_{92}^{238}\text{U} \;\longrightarrow\; {}_{90}^{234}\text{Th} \;+\; {}_{2}^{4}\text{He}" />
        </div>
        <p class="text-sm text-gray-600">
          Dcérske jadro je tórium-234. Overenie: <MathFormula formula="92 - 2 = 90" /> (protónové číslo), <MathFormula formula="238 - 4 = 234" /> (nukleónové číslo). &#x2714;
        </p>
      </div>

    </section>

    <!-- Section 2: Zákon rádioaktívnej premeny -->
    <section aria-label="Zákon rádioaktívnej premeny a polčas rozpadu" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Zákon rádioaktívnej premeny a polčas rozpadu</h2>
      <p class="text-gray-500 mb-6">Rádioaktívne jadrá sa rozpadajú náhodne, ale štatisticky podľa exaktného zákona.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <!-- Zákon rozpadu -->
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 class="font-bold text-orange-800 mb-4">Zákon rádioaktívneho rozpadu</h3>
          <p class="text-sm text-gray-700 mb-4">
            Počet nerozpadnutých jadier klesá exponenciálne:
          </p>
          <div class="bg-white rounded-xl p-4 text-center mb-4">
            <MathFormula display formula="N(t) = N_0 \cdot \left(\frac{1}{2}\right)^{\!\frac{t}{T_{1/2}}}" />
          </div>
          <div class="bg-white rounded-xl p-4 text-center mb-3">
            <MathFormula display formula="N(t) = N_0 \cdot e^{-\lambda t}" />
          </div>
          <ul class="text-xs text-gray-600 space-y-1">
            <li><MathFormula formula="N_0" /> — počiatočný počet jadier</li>
            <li><MathFormula formula="T_{1/2}" /> — polčas rozpadu</li>
            <li><MathFormula formula="\lambda" /> — konštanta rádioaktívnej premeny</li>
          </ul>
        </div>

        <!-- Polčas a aktivita -->
        <div class="space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 class="font-bold text-amber-800 mb-3">Polčas rozpadu <MathFormula formula="T_{1/2}" /></h3>
            <p class="text-sm text-gray-700 mb-3">
              Čas, za ktorý sa rozpadne <strong>polovica</strong> všetkých pôvodných jadier.
            </p>
            <div class="bg-white rounded-xl p-3 text-center">
              <MathFormula display formula="T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0{,}693}{\lambda}" />
            </div>
          </div>
          <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
            <h3 class="font-bold text-green-800 mb-3">Aktivita <MathFormula formula="A" /></h3>
            <p class="text-sm text-gray-700 mb-3">
              Počet rozpadov za sekundu. Jednotka: <strong>becquerel</strong> (Bq = 1 rozpad/s).
            </p>
            <div class="bg-white rounded-xl p-3 text-center">
              <MathFormula display formula="A = \lambda \cdot N \qquad [A] = \text{Bq}" />
            </div>
          </div>
        </div>
      </div>

      <!-- Vypočítané príklady -->
      <div class="space-y-5">

        <!-- Príklad 2: Polčas uhlíka-14 -->
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p class="text-sm font-bold text-amber-800 mb-3">Príklad 2 — Rádioaktívne datovanie uhlíkom-14</p>
          <p class="text-sm text-gray-700 mb-4">
            Polčas rozpadu uhlíka-14 je <MathFormula formula="T_{1/2} = 5\,730\;\text{rokov}" />.
            Koľko percent pôvodnej vzorky zostane po <MathFormula formula="17\,190\;\text{rokoch}" />?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-sm">
            <p class="text-gray-600">Počet polčasov: <MathFormula formula="n = \dfrac{t}{T_{1/2}} = \dfrac{17\,190}{5\,730} = 3" /></p>
            <p class="text-gray-600">Zostatok:</p>
            <div class="text-center my-2">
              <MathFormula display formula="N = N_0 \cdot \left(\frac{1}{2}\right)^3 = N_0 \cdot \frac{1}{8} = 0{,}125\,N_0" />
            </div>
            <p class="font-semibold text-amber-900">Po 17 190 rokoch zostane <strong>12,5 %</strong> pôvodného množstva.</p>
          </div>
        </div>

        <!-- Príklad 3: Aktivita vzorky -->
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <p class="text-sm font-bold text-green-800 mb-3">Príklad 3 — Výpočet aktivity vzorky</p>
          <p class="text-sm text-gray-700 mb-4">
            Vzorka obsahuje <MathFormula formula="N = 4{,}0 \times 10^{12}" /> atómov izotopu s konštantou premeny
            <MathFormula formula="\lambda = 2{,}5 \times 10^{-4}\;\text{s}^{-1}" />. Aká je jej aktivita?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-sm">
            <p class="text-gray-600">Dosadíme do vzorca pre aktivitu:</p>
            <div class="text-center my-2">
              <MathFormula display formula="A = \lambda \cdot N = 2{,}5 \times 10^{-4} \cdot 4{,}0 \times 10^{12} = 1{,}0 \times 10^{9}\;\text{Bq}" />
            </div>
            <p class="font-semibold text-green-900">Aktivita vzorky je <strong>1,0 GBq</strong> (gigabecquerel).</p>
          </div>
        </div>

      </div>

      <!-- Polčasy vybraných izotopov -->
      <div class="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Izotop</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Polčas rozpadu</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Typ rozpadu</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in isotopeTable" :key="row.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.name }}</td>
              <td class="px-5 py-3 text-gray-600" v-html="row.symbol" />
              <td class="px-5 py-3 text-orange-700 font-mono">{{ row.halfLife }}</td>
              <td class="px-5 py-3">
                <span :class="['text-xs font-semibold px-2 py-0.5 rounded-full', row.decayClass]">{{ row.decayType }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>

    <!-- Section 3: Detektory, dávka a využitie -->
    <section aria-label="Detektory žiarenia, ochrana a využitie rádioaktivity" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Detektory, ochrana a využitie</h2>
      <p class="text-gray-500 mb-6">Ionizujúce žiarenie je pre človeka neviditeľné — na jeho zachytenie potrebujeme špeciálne prístroje.</p>

      <!-- Dávka žiarenia -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="font-bold text-gray-900 mb-4">Radiačná dávka a jej jednotky</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="dose in dosageCards" :key="dose.unit" class="bg-white border border-gray-200 rounded-xl p-4">
            <p class="text-xs text-gray-400 mb-1">{{ dose.label }}</p>
            <p class="text-lg font-bold text-gray-900 mb-1">{{ dose.unit }}</p>
            <p class="text-sm text-gray-600">{{ dose.description }}</p>
          </div>
        </div>
        <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
          <strong>Prirodzené pozadie:</strong> Každý rok dostáva priemerný človek dávku asi <strong>2,4 mSv</strong> z prírodných zdrojov (kozmické žiarenie, radón, potraviny, horniny).
        </div>
      </div>

      <!-- Detektory -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div v-for="det in detectors" :key="det.name" class="bg-white border border-gray-200 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">{{ det.icon }}</span>
            <h3 class="font-bold text-gray-900">{{ det.name }}</h3>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">{{ det.description }}</p>
        </div>
      </div>

      <!-- Využitie -->
      <h3 class="font-bold text-gray-900 mb-4">Využitie rádioaktivity</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div v-for="app in applications" :key="app.title" :class="['rounded-2xl p-5 border', app.bgClass]">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">{{ app.icon }}</span>
            <h4 class="font-bold">{{ app.title }}</h4>
          </div>
          <ul class="space-y-1 text-sm text-gray-700">
            <li v-for="item in app.items" :key="item">&#x2022; {{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Ochrana -->
      <div class="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h3 class="font-bold text-orange-800 mb-4">Ochrana pred ionizujúcim žiarením — tri základné princípy</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="prot in protection" :key="prot.label" class="bg-white rounded-xl p-4 text-center border border-orange-100">
            <p class="text-3xl mb-2">{{ prot.icon }}</p>
            <p class="font-bold text-orange-800 mb-1">{{ prot.label }}</p>
            <p class="text-xs text-gray-600">{{ prot.desc }}</p>
          </div>
        </div>
      </div>

    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-4">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Rádioaktivita je spontánna premena nestabilných jadier sprevádzaná emisiou &#945;, &#946; alebo &#947; žiarenia.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Alfa žiarenie (jadrá He) znižuje Z o 2 a A o 4; beta-mínus (elektróny) zvyšuje Z o 1; gama (fotóny) nemení Z ani A.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Počet jadier klesá podľa zákona: <MathFormula formula="N(t) = N_0 \cdot (1/2)^{t/T_{1/2}}" />, polčas <MathFormula formula="T_{1/2} = \ln 2 / \lambda" />.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Aktivita <MathFormula formula="A = \lambda N" /> sa meria v becquereloch (Bq); biologický účinok dávky v sivertoch (Sv).
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Rádioaktivita má uplatnenie v medicíne (diagnostika PET, rádioterapia), priemysle (hrúbkomery, sterilizácia) a archeológii (datovanie C-14).
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">&#x2714;</span>
          Ochrana pred žiarením: maximálna vzdialenosť, čo najkratší čas, tienenie vhodným materiálom.
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — rádioaktivita">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Overuj si znalosti — otázky kombinujú definície, výpočty aj aplikácie.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-orange-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
          />
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
                ? 'border-gray-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50 cursor-pointer'
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
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800']"
            >
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '&#x2713; Správne!' : '&#x2717; Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka &#8594;' : 'Zobraziť výsledok' }}
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

// ── Statický obsah ──────────────────────────────────────────────────────────

const radiationTable = [
  { property: 'Zloženie', alpha: 'Jadro ⁴₂He (2p + 2n)', beta: 'Elektrón (e⁻)', gamma: 'Fotóny (γ)' },
  { property: 'Zmena Z', alpha: 'Z − 2', beta: 'Z + 1', gamma: 'bez zmeny' },
  { property: 'Zmena A', alpha: 'A − 4', beta: 'bez zmeny', gamma: 'bez zmeny' },
  { property: 'Ionizácia', alpha: 'Veľká', beta: 'Stredná', gamma: 'Malá' },
  { property: 'Prenikavosť', alpha: 'Malá (papier)', beta: 'Stredná (Al)', gamma: 'Veľká (Pb, betón)' },
  { property: 'Rýchlosť', alpha: '~ 0,05 c', beta: '~ 0,9 c', gamma: 'c' },
]

const isotopeTable = [
  { name: 'Urán-238', symbol: km('{}^{238}_{92}\\text{U}'), halfLife: '4,47 × 10⁹ r.', decayType: 'α', decayClass: 'bg-red-100 text-red-700' },
  { name: 'Rádium-226', symbol: km('{}^{226}_{88}\\text{Ra}'), halfLife: '1 600 rokov', decayType: 'α', decayClass: 'bg-red-100 text-red-700' },
  { name: 'Uhlík-14', symbol: km('{}^{14}_{6}\\text{C}'), halfLife: '5 730 rokov', decayType: 'β⁻', decayClass: 'bg-blue-100 text-blue-700' },
  { name: 'Jód-131', symbol: km('{}^{131}_{53}\\text{I}'), halfLife: '8,02 dňa', decayType: 'β⁻', decayClass: 'bg-blue-100 text-blue-700' },
  { name: 'Technécium-99m', symbol: km('{}^{99m}_{43}\\text{Tc}'), halfLife: '6,02 hodiny', decayType: 'γ', decayClass: 'bg-purple-100 text-purple-700' },
  { name: 'Polónium-214', symbol: km('{}^{214}_{84}\\text{Po}'), halfLife: '164 μs', decayType: 'α', decayClass: 'bg-red-100 text-red-700' },
]

const dosageCards = [
  { label: 'Pohltená dávka', unit: 'Gray (Gy)', description: 'Energia ionizujúceho žiarenia pohltená 1 kg tkaniva (1 Gy = 1 J/kg).' },
  { label: 'Efektívna dávka', unit: 'Sievert (Sv)', description: 'Biologický účinok žiarenia: H = D × w_R (w_R = váhový faktor žiarenia). 1 Sv = 1 J/kg × w_R.' },
  { label: 'Aktivita zdroja', unit: 'Becquerel (Bq)', description: 'Počet jadrových rozpadov za sekundu. 1 Bq = 1 rozpad/s.' },
]

const detectors = [
  {
    icon: '📡',
    name: 'Geigerov-Müllerov počítač',
    description: 'Trubica naplnená plynom — ionizujúce žiarenie vytvára elektrické impulzy, ktoré sa počítajú. Vhodný na detekciu α, β a γ žiarenia. Bežne používaný detektor (Geiger).',
  },
  {
    icon: '✨',
    name: 'Scintilačný detektor',
    description: 'Žiarenie excituje atómy v kryštáli (NaI, BGO) — vznikajú záblesky svetla zachytené fotonásobičom. Presnejší, umožňuje aj spektrometriu.',
  },
  {
    icon: '📷',
    name: 'Filmový dozimeter',
    description: 'Fotocitlivý film začernie vplyvom žiarenia. Dlhodobo sleduje dávku u pracovníkov v jadrovom priemysle a medicíne.',
  },
  {
    icon: '⚡',
    name: 'Ionizačná komora',
    description: 'Priestor naplnený plynom — žiarenie ionizuje plyn, vzniká merateľný prúd. Presná metóda na meranie dávkového príkonu.',
  },
]

const applications = [
  {
    icon: '🏥',
    title: 'Medicína',
    bgClass: 'bg-blue-50 border-blue-200',
    items: [
      'PET sken — zobrazovanie aktívnych tkanív (ⁱ⁸F-fluorodeoxy­glukóza)',
      'Scintigrafia — diagnostika orgánov pomocou ⁹⁹ᵐTc',
      'Rádioterapia — ničenie nádorových buniek gama žiarením',
      'Sterilizácia lekárskeho materiálu',
    ],
  },
  {
    icon: '🏭',
    title: 'Priemysel',
    bgClass: 'bg-amber-50 border-amber-200',
    items: [
      'Hrúbkomery — merajú hrúbku materiálu prienikom žiarenia',
      'Radiografická kontrola zvarov (defektoskopia)',
      'Sterilizácia potravín a kozmetiky',
      'Ionizačné hlásiče dymu (Am-241)',
    ],
  },
  {
    icon: '🧪',
    title: 'Veda a výskum',
    bgClass: 'bg-emerald-50 border-emerald-200',
    items: [
      'Rádioaktívne datovanie C-14 (archeológia)',
      'Datovanie horninami (U-Pb, K-Ar)',
      'Štúdium metabolizmu pomocou stopovačov',
      'Výskum jadrových reakcií',
    ],
  },
  {
    icon: '⚡',
    title: 'Energetika',
    bgClass: 'bg-orange-50 border-orange-200',
    items: [
      'Jadrové elektrárne — štiepenie uránu-235',
      'Rádioizotopové termoelektrické generátory (RTG)',
      'Výskum jadrovej fúzie',
      'Zásoby jadrovej energie sú niekoľkonásobne väčšie ako fosílne palivá',
    ],
  },
]

const protection = [
  { icon: '📏', label: 'Vzdialenosť', desc: 'Intenzita žiarenia klesá s druhou mocninou vzdialenosti. Zdvojnásobenie vzdialenosti zníži dávku 4-krát.' },
  { icon: '⏱️', label: 'Čas', desc: 'Čím kratší je čas v blízkosti zdroja, tým menšia prijatá dávka. Pracovníci majú stanovené limity.' },
  { icon: '🛡️', label: 'Tienenie', desc: 'Alpha zastaví papier, beta hliník, gamma vyžaduje hrubé olovo alebo betón.' },
]

// ── Kvíz ─────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je alfa častica?',
    options: [
      'Elektrón s vysokou energiou',
      'Jadro hélia so 2 protónmi a 2 neutrónmi',
      'Fotón s vysokou frekvenciou',
      'Neutrón uvoľnený z jadra',
    ],
    correctIndex: 1,
    explanation: 'Alfa častica je jadro hélia-4 (symbol ⁴₂He) — skladá sa z 2 protónov a 2 neutrónov. Má elektrický náboj +2e a veľkú ionizačnú schopnosť.',
  },
  {
    question: 'Ako sa zmení atómové číslo Z pri beta-mínus rozpade?',
    options: ['Zmenší sa o 1', 'Zostane rovnaké', 'Zvýši sa o 1', 'Zvýši sa o 2'],
    correctIndex: 2,
    explanation: 'Pri β⁻ rozpade sa neutrón premení na protón: n → p + e⁻ + v̄ₑ. Počet protónov (Z) sa zvýši o 1. Nukleónové číslo A sa nemení.',
  },
  {
    question: 'Polčas uhlíka-14 je 5 730 rokov. Koľko percent pôvodnej vzorky zostane po 11 460 rokoch?',
    options: ['50 %', '33 %', '25 %', '12,5 %'],
    correctIndex: 2,
    explanation: `Po 11 460 rokoch uplynú 2 polčasy: ${km('N = N_0 \\cdot \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{N_0}{4} = 25\\%\\,N_0')}. Zostane 25 % pôvodného množstva.`,
  },
  {
    question: 'Ktorý druh žiarenia má najväčšiu prenikavosť?',
    options: ['Alfa žiarenie', 'Beta-mínus žiarenie', 'Gama žiarenie', 'Prenikavosť je rovnaká pre všetky'],
    correctIndex: 2,
    explanation: 'Gama žiarenie (fotóny) má najväčšiu prenikavosť — prechádza cez hliník, telo, zastaví ho až hrubá vrstva olova alebo betónu. Alfa zastaví list papiera, beta niekoľko mm hliníka.',
  },
  {
    question: 'V čom sa meria aktivita rádioaktívneho zdroja?',
    options: ['Sievert (Sv)', 'Gray (Gy)', 'Becquerel (Bq)', 'Röntgen (R)'],
    correctIndex: 2,
    explanation: `Aktivita ${km('A = \\lambda N')} sa meria v becquereloch (Bq). 1 Bq = 1 rozpad za sekundu. Sievert meria biologický účinok dávky, Gray pohltená dávku energie.`,
  },
  {
    question: 'Vzorka obsahuje N = 5,0 × 10⁸ atómov izotopu s konštantou premeny λ = 4,0 × 10⁻³ s⁻¹. Aká je jej aktivita?',
    options: ['2,0 × 10⁵ Bq', '2,0 × 10⁶ Bq', '1,25 × 10¹¹ Bq', '4,0 × 10³ Bq'],
    correctIndex: 1,
    explanation: `${km('A = \\lambda \\cdot N = 4{,}0 \\times 10^{-3} \\cdot 5{,}0 \\times 10^8 = 2{,}0 \\times 10^6\\;\\text{Bq}')}. Aktivita vzorky je 2,0 MBq (megabecquerel).`,
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
