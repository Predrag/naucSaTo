<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Práca a energia</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚡</span>
      <h1 class="text-4xl font-extrabold text-yellow-700">Práca a energia</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Práca a energia patria medzi najdôležitejšie pojmy fyziky. Vďaka zákonu zachovania energie dokážeme predpovedať pohyb telies, navrhovať stroje aj chápať premeny energie v prírode.
    </p>

    <!-- Sekcia 1: Mechanická práca -->
    <section aria-label="Mechanická práca" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-yellow-600 rounded-t-2xl px-6 py-4">1. Mechanická práca</h2>
      <div class="border border-yellow-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Mechanická práca <strong>W</strong> je fyzikálna veličina, ktorá vyjadruje, koľko energie sa prenesie silou pôsobiacou na teleso pri jeho premiestnení. Práca nie je len o vynaložení sily — záleží aj na tom, v akom smere sila pôsobí.
        </p>

        <!-- Hlavný vzorec -->
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6">
          <p class="text-sm font-bold text-orange-700 mb-2 tracking-wide uppercase">Vzorec pre mechanickú prácu</p>
          <MathFormula display formula="W = F \cdot s \cdot \cos\alpha" />
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm text-gray-700">
            <div class="bg-white rounded-xl p-3 border border-orange-100">
              <span class="font-bold text-orange-600">W</span> — práca <span class="text-gray-400">[J]</span>
            </div>
            <div class="bg-white rounded-xl p-3 border border-orange-100">
              <span class="font-bold text-orange-600">F</span> — sila <span class="text-gray-400">[N]</span>
            </div>
            <div class="bg-white rounded-xl p-3 border border-orange-100">
              <span class="font-bold text-orange-600">s</span> — dráha <span class="text-gray-400">[m]</span>
            </div>
            <div class="bg-white rounded-xl p-3 border border-orange-100">
              <span class="font-bold text-orange-600">α</span> — uhol medzi silou a smerom pohybu
            </div>
            <div class="bg-white rounded-xl p-3 border border-orange-100 sm:col-span-2">
              Jednotka: <span class="font-bold text-orange-600">1 J = 1 N · m</span> (joule)
            </div>
          </div>
        </div>

        <!-- Špeciálne prípady -->
        <h3 class="font-bold text-gray-800 text-lg mb-4">Špeciálne prípady</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <p class="text-xs font-bold text-emerald-700 mb-1">α = 0° (sila v smere pohybu)</p>
            <MathFormula display formula="W = F \cdot s" />
            <p class="text-xs text-gray-500 mt-2">cos 0° = 1 → maximálna práca</p>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p class="text-xs font-bold text-blue-700 mb-1">α = 90° (sila kolmá na pohyb)</p>
            <MathFormula display formula="W = 0" />
            <p class="text-xs text-gray-500 mt-2">cos 90° = 0 → nulová práca</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p class="text-xs font-bold text-red-700 mb-1">α = 180° (sila proti pohybu)</p>
            <MathFormula display formula="W = -F \cdot s" />
            <p class="text-xs text-gray-500 mt-2">cos 180° = −1 → záporná práca</p>
          </div>
        </div>

        <!-- Príklad výpočtu -->
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <p class="font-bold text-gray-800 mb-3">Príklad: Ťahanie saní</p>
          <p class="text-sm text-gray-600 mb-3">
            Chlapec ťahá sane silou <span v-html="km('F = 80\\,\\text{N}')"></span> pod uhlom <span v-html="km('\\alpha = 30°')"></span>. Prejde dráhu <span v-html="km('s = 50\\,\\text{m}')"></span>. Akú prácu vykoná?
          </p>
          <div class="bg-white rounded-xl p-4 border border-gray-100 text-sm text-gray-700">
            <MathFormula display formula="W = F \cdot s \cdot \cos\alpha = 80 \cdot 50 \cdot \cos 30° = 80 \cdot 50 \cdot 0{,}866 \approx 3\,464\,\text{J}" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sekcia 2: Kinetická a potenciálna energia -->
    <section aria-label="Kinetická a potenciálna energia" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-yellow-600 rounded-t-2xl px-6 py-4">2. Kinetická a potenciálna energia</h2>
      <div class="border border-yellow-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-6">
          Mechanická energia existuje v dvoch základných formách: <strong>kinetická energia</strong> pohybujúcich sa telies a <strong>potenciálna energia</strong>, ktorá závisí od polohy telesa alebo deformácie pružiny.
        </p>

        <!-- Kinetická energia -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Kinetická energia</h3>
          <p class="text-gray-600 mb-4">
            Každé pohybujúce sa teleso má kinetickú energiu. Závisí od hmotnosti a rýchlosti telesa.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-4">
            <MathFormula display formula="E_k = \frac{1}{2}mv^2" />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-sm">
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">E<sub>k</sub></span> — kinetická energia <span class="text-gray-400">[J]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">m</span> — hmotnosť <span class="text-gray-400">[kg]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">v</span> — rýchlosť <span class="text-gray-400">[m/s]</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            <strong>Príklad:</strong> Auto s hmotnosťou <span v-html="km('m = 1\\,200\\,\\text{kg}')"></span> ide rýchlosťou <span v-html="km('v = 20\\,\\text{m/s}')"></span>.
            <MathFormula display formula="E_k = \frac{1}{2} \cdot 1\,200 \cdot 20^2 = \frac{1}{2} \cdot 1\,200 \cdot 400 = 240\,000\,\text{J} = 240\,\text{kJ}" />
          </div>
        </div>

        <!-- Potenciálna energia tiažová -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Gravitačná potenciálna energia</h3>
          <p class="text-gray-600 mb-4">
            Teleso zdvihnuté do výšky <span v-html="km('h')"></span> nad referenčnou hladinou má gravitačnú potenciálnu energiu.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-4">
            <MathFormula display formula="E_p = mgh" />
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-3 text-sm">
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">E<sub>p</sub></span> — pot. energia <span class="text-gray-400">[J]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">m</span> — hmotnosť <span class="text-gray-400">[kg]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">g</span> — tiaž. zrýchlenie <span class="text-gray-400">[m/s²]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">h</span> — výška <span class="text-gray-400">[m]</span>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-500 italic">Pozn.: <span v-html="km('g \\approx 9{,}81\\,\\text{m/s}^2')"></span>, v príkladoch sa často používa <span v-html="km('g = 10\\,\\text{m/s}^2')"></span>.</p>
        </div>

        <!-- Potenciálna energia pružnosti -->
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Potenciálna energia pružnosti</h3>
          <p class="text-gray-600 mb-4">
            Stlačená alebo natiahnutá pružina ukladá energiu. Táto energia závisí od tuhosti pružiny a jej deformácie.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-4">
            <MathFormula display formula="E_{p\,pruž} = \frac{1}{2}ks^2" />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-sm">
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">k</span> — tuhosť pružiny <span class="text-gray-400">[N/m]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">s</span> — predĺženie/stlačenie <span class="text-gray-400">[m]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                Energia rastie ako <span v-html="km('s^2')"></span> — zdvojnásobená deformácia = 4× energia
              </div>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            <strong>Príklad:</strong> Pružina s tuhosťou <span v-html="km('k = 200\\,\\text{N/m}')"></span> je stlačená o <span v-html="km('s = 0{,}1\\,\\text{m}')"></span>.
            <MathFormula display formula="E_{p\,pruž} = \frac{1}{2} \cdot 200 \cdot (0{,}1)^2 = \frac{1}{2} \cdot 200 \cdot 0{,}01 = 1\,\text{J}" />
          </div>
        </div>

      </div>
    </section>

    <!-- Sekcia 3: Zákon zachovania energie, výkon, účinnosť -->
    <section aria-label="Zákon zachovania energie, výkon a účinnosť" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-yellow-600 rounded-t-2xl px-6 py-4">3. Zákon zachovania energie, výkon a účinnosť</h2>
      <div class="border border-yellow-200 rounded-b-2xl p-6 bg-white">

        <!-- Zákon zachovania energie -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Zákon zachovania mechanickej energie</h3>
          <p class="text-gray-700 leading-relaxed mb-5">
            V izolovanej sústave bez trenia sa celková mechanická energia nemení. Kinetická a potenciálna energia sa navzájom premieňajú, ale ich súčet zostáva konštantný.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-5">
            <MathFormula display formula="E_k + E_p = \text{konšt.}" />
            <MathFormula display formula="\frac{1}{2}mv_1^2 + mgh_1 = \frac{1}{2}mv_2^2 + mgh_2" />
          </div>
          <!-- Príklad: voľný pád -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <p class="font-bold text-blue-800 mb-2">Príklad: Voľný pád</p>
            <p class="text-sm text-gray-700 mb-3">
              Guľa s hmotnosťou <span v-html="km('m = 2\\,\\text{kg}')"></span> padá z výšky <span v-html="km('h = 5\\,\\text{m}')"></span>. Akú rýchlosť má pri dopade?
            </p>
            <p class="text-sm text-gray-600 mb-2">Využijeme zákon zachovania energie:</p>
            <MathFormula display formula="mgh = \frac{1}{2}mv^2 \quad\Rightarrow\quad v = \sqrt{2gh} = \sqrt{2 \cdot 10 \cdot 5} = \sqrt{100} = 10\,\text{m/s}" />
          </div>
        </div>

        <!-- Výkon -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Výkon</h3>
          <p class="text-gray-700 mb-4">
            Výkon vyjadruje, ako rýchlo sa vykonáva práca. Čím väčší výkon, tým rýchlejšie teleso (alebo stroj) koná prácu.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-4">
            <MathFormula display formula="P = \frac{W}{t} = F \cdot v" />
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-3 text-sm">
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">P</span> — výkon <span class="text-gray-400">[W]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">W</span> — práca <span class="text-gray-400">[J]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">t</span> — čas <span class="text-gray-400">[s]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                Jednotka: <span class="font-bold text-orange-600">1 W = 1 J/s</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            <strong>Príklad:</strong> Motor vykoná prácu <span v-html="km('W = 36\\,000\\,\\text{J}')"></span> za čas <span v-html="km('t = 60\\,\\text{s}')"></span>.
            <MathFormula display formula="P = \frac{W}{t} = \frac{36\,000}{60} = 600\,\text{W}" />
          </div>
        </div>

        <!-- Účinnosť -->
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Účinnosť</h3>
          <p class="text-gray-700 mb-4">
            Žiadny reálny stroj neodovzdá všetku dodanú energiu ako užitočnú prácu — časť sa stratí (napr. teplom pri trení). Účinnosť meria, aká časť vstupnej energie sa využije.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-4">
            <MathFormula display formula="\eta = \frac{W_{\text{už}}}{W_{\text{cel}}} \cdot 100\,\%" />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-sm">
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">η</span> — účinnosť <span class="text-gray-400">[%]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">W<sub>už</sub></span> — užitočná práca <span class="text-gray-400">[J]</span>
              </div>
              <div class="bg-white rounded-xl p-3 border border-orange-100">
                <span class="font-bold text-orange-600">W<sub>cel</sub></span> — celková dodaná práca <span class="text-gray-400">[J]</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            <strong>Príklad:</strong> Elektromotor spotrebuje <span v-html="km('W_{cel} = 5\\,000\\,\\text{J}')"></span>, užitočná práca je <span v-html="km('W_{už} = 3\\,800\\,\\text{J}')"></span>.
            <MathFormula display formula="\eta = \frac{3\,800}{5\,000} \cdot 100\,\% = 76\,\%" />
            <p class="mt-2">Straty sú <span v-html="km('1\\,200\\,\\text{J}')"></span> — väčšinou teplo pri trení.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie kľúčových poznatkov</h2>
      <ul class="space-y-3 text-gray-700 text-sm">
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Mechanická práca <span v-html="km('W = F \\cdot s \\cdot \\cos\\alpha')"></span> — záleží na sile, dráhe aj uhle medzi nimi. Jednotka je joule (J).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Kinetická energia <span v-html="km('E_k = \\tfrac{1}{2}mv^2')"></span> — energia pohybu; rastie so štvorcom rýchlosti.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Gravitačná potenciálna energia <span v-html="km('E_p = mgh')"></span> — závisí od výšky nad referenčnou hladinou.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Potenciálna energia pružnosti <span v-html="km('E_{p} = \\tfrac{1}{2}ks^2')"></span> — energia deformovanej pružiny.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Zákon zachovania energie: <span v-html="km('E_k + E_p = \\text{konšt.}')"></span> — v izolovanej sústave bez trenia.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Výkon <span v-html="km('P = W/t = Fv')"></span> — udáva rýchlosť konania práce. Jednotka je watt (W).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-yellow-600 font-bold mt-0.5">✓</span>
          <span>Účinnosť <span v-html="km('\\eta = W_{už}/W_{cel} \\cdot 100\\,\\%')"></span> — reálne stroje majú vždy <span v-html="km('\\eta < 100\\,\\%')"></span>.</span>
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz: Práca a energia" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Otestuj sa: Práca a energia</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between text-sm text-gray-500 mb-5">
          <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span>Skóre: {{ quizScore }}/{{ quiz.length }}</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            class="bg-yellow-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: ((currentQ) / quiz.length * 100) + '%' }"
          ></div>
        </div>

        <!-- Otázka -->
        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5" v-html="currentQuestion.question"></p>

        <!-- Možnosti -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
            @click="selectAnswer(i)"
            :disabled="selectedAnswer !== null"
            :class="[
              'w-full text-left px-5 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200',
              selectedAnswer === null
                ? 'border-gray-200 bg-gray-50 hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-400'
            ]"
            v-html="option"
          ></button>
        </div>

        <!-- Spätná väzba -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            :class="[
              'rounded-xl p-4 mb-5 text-sm leading-relaxed',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <span class="font-bold mr-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}</span>
            <span v-html="currentQuestion.explanation"></span>
          </div>
        </Transition>

        <!-- Ďalšia otázka -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="quiz-next-btn"
            @click="nextQuestion"
            class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Výsledok -->
      <div v-else data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-2xl font-bold text-gray-800 mb-2">
          {{ quizScore }} / {{ quiz.length }} správne
        </p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          @click="resetQuiz"
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Skúsiť znova
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

const quiz = [
  {
    question: 'Sila 50 N pôsobí na teleso v smere jeho pohybu. Teleso sa premiestni o 8 m. Aká práca sa vykoná?',
    options: ['200 J', '400 J', '58 J', '6,25 J'],
    correctIndex: 1,
    explanation: `${km('W = F \\cdot s \\cdot \\cos 0° = 50 \\cdot 8 \\cdot 1 = 400\\,\\text{J}')}`
  },
  {
    question: 'Akú kinetickú energiu má teleso s hmotnosťou 4 kg pohybujúce sa rýchlosťou 6 m/s?',
    options: ['24 J', '48 J', '72 J', '144 J'],
    correctIndex: 2,
    explanation: `${km('E_k = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2} \\cdot 4 \\cdot 36 = 72\\,\\text{J}')}`
  },
  {
    question: 'Čo hovorí zákon zachovania mechanickej energie?',
    options: [
      'Energia sa vždy mení na teplo.',
      'V izolovanej sústave bez trenia je súčet kinetickej a potenciálnej energie konštantný.',
      'Kinetická energia je vždy väčšia ako potenciálna.',
      'Práca sa rovná energii len pri voľnom páde.'
    ],
    correctIndex: 1,
    explanation: 'Zákon zachovania energie hovorí, že v sústave bez disipačných síl (trenie, odpor vzduchu) sa celková mechanická energia nemení — iba sa premieňa medzi kinetickou a potenciálnou formou.'
  },
  {
    question: `Teleso o hmotnosti 2 kg zdvihneme do výšky 5 m (g = 10 m/s²). Akú gravitačnú potenciálnu energiu má?`,
    options: ['10 J', '25 J', '100 J', '50 J'],
    correctIndex: 2,
    explanation: `${km('E_p = mgh = 2 \\cdot 10 \\cdot 5 = 100\\,\\text{J}')}`
  },
  {
    question: 'Motor vykoná prácu 120 000 J za 2 minúty. Aký je jeho výkon?',
    options: ['600 W', '1 000 W', '240 000 W', '60 000 W'],
    correctIndex: 1,
    explanation: `${km('P = W/t = 120\\,000 / 120 = 1\\,000\\,\\text{W} = 1\\,\\text{kW}')}`
  },
  {
    question: 'Čerpadlo dodá vode energiu 4 500 J, pričom spotrebuje 6 000 J elektrickej energie. Aká je jeho účinnosť?',
    options: ['60 %', '70 %', '75 %', '80 %'],
    correctIndex: 2,
    explanation: `${km('\\eta = W_{už}/W_{cel} \\cdot 100\\,\\% = 4\\,500 / 6\\,000 \\cdot 100\\,\\% = 75\\,\\%')}`
  }
]

const currentQ = ref(0)
const selectedAnswer = ref(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value])

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
