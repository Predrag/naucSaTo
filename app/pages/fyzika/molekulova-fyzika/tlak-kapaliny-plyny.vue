<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/molekulova-fyzika" class="hover:text-emerald-600 transition-colors">Molekulová fyzika a termodynamika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Tlak v kvapalinách a plynoch</span>
    </nav>

    <!-- Header -->
    <div class="bg-cyan-600 rounded-2xl p-8 mb-10 text-white">
      <h1 class="text-3xl font-bold mb-2">💧 Tlak v kvapalinách a plynoch</h1>
      <p class="text-cyan-100 text-lg">Hydrostatický tlak, Pascalov zákon, Archimedov zákon a atmosferický tlak</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Tlak je fyzikálna veličina, ktorá popisuje pôsobenie sily na plochu. V kvapalinách a plynoch má tlak špeciálne vlastnosti — pôsobí do všetkých smerov rovnako a závisí od hĺbky (v kvapalinách) alebo od nadmorskej výšky (v atmosfére). Tieto vlastnosti majú obrovský praktický význam: od hydraulických lisov v autoservisoch až po vztlakovú silu krídla lietadla.
    </p>

    <!-- ==================== SEKCIA 1 ==================== -->
    <section aria-label="Hydrostatický tlak" class="mb-12">
      <h2 class="text-2xl font-bold text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2">1. Hydrostatický tlak</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Hydrostatický tlak vzniká v dôsledku tiaže kvapaliny. Čím hlbšie sa nachádza ponorená plocha, tým väčší stĺpec kvapaliny na ňu tlačí. Dôležitý záver: hydrostatický tlak <strong>nezávisí od tvaru nádoby</strong> ani od celkového množstva kvapaliny — záleží iba na hĺbke a hustote.
      </p>

      <!-- Vzorec -->
      <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-cyan-800 mb-3">Vzorec pre hydrostatický tlak</h3>
        <div class="text-center text-xl mb-4" v-html="km('p = \\rho g h')"/>
        <ul class="text-sm text-gray-600 space-y-1">
          <li><span v-html="km('p')"/> — hydrostatický tlak [Pa = N/m²]</li>
          <li><span v-html="km('\\rho')"/> — hustota kvapaliny [kg/m³]</li>
          <li><span v-html="km('g \\approx 9{,}81\\ \\mathrm{m/s}^2')"/> — gravitačné zrýchlenie</li>
          <li><span v-html="km('h')"/> — hĺbka pod hladinou [m]</li>
        </ul>
      </div>

      <p class="text-gray-700 mb-3 leading-relaxed">
        Celkový tlak na dne nádoby je súčet atmosferického tlaku a hydrostatického tlaku:
      </p>
      <div class="text-center text-xl mb-6" v-html="km('p_{\\mathrm{celk}} = p_0 + \\rho g h')"/>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 1 — Tlak na dne bazéna</h3>
        <p class="text-gray-700 mb-3">
          Aký hydrostatický tlak pôsobí na dno plaveckého bazéna v hĺbke
          <span v-html="km('h = 3\\ \\mathrm{m}')"/>?
          Hustota vody je <span v-html="km('\\rho = 1000\\ \\mathrm{kg/m}^3')"/>.
        </p>
        <div class="bg-white rounded-lg p-4">
          <p class="text-sm font-medium text-gray-500 mb-2">Riešenie:</p>
          <div v-html="km('p = \\rho g h = 1000 \\cdot 9{,}81 \\cdot 3 = 29\\,430\\ \\mathrm{Pa} \\approx 29{,}4\\ \\mathrm{kPa}')"/>
        </div>
      </div>

      <p class="text-gray-600 text-sm italic">
        Poznámka: vodný stĺpec každých 10 m zvýši tlak približne o 1 atmosféru (≈ 100 kPa).
      </p>
    </section>

    <!-- ==================== SEKCIA 2 ==================== -->
    <section aria-label="Pascalov zákon" class="mb-12">
      <h2 class="text-2xl font-bold text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2">2. Pascalov zákon a hydraulický lis</h2>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-amber-800 mb-2">Pascalov zákon</h3>
        <p class="text-gray-700">
          Vonkajší tlak pôsobiaci na kvapalinu v uzavretej nádobe sa prenáša
          <strong>rovnomerne do všetkých smerov a do celého objemu kvapaliny</strong>.
        </p>
      </div>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Pascalov zákon je základom hydraulického lisu. Keď pôsobíme malou silou na malý piest, v celej kvapaline narastie tlak — a tento tlak pôsobí rovnako na veľký piest, kde vznikne oveľa väčšia sila. Sila sa zosilní v pomere plôch piestkov:
      </p>

      <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-cyan-800 mb-3">Hydraulický lis</h3>
        <div class="text-center text-xl mb-4" v-html="km('p_1 = p_2 \\quad \\Rightarrow \\quad \\frac{F_1}{S_1} = \\frac{F_2}{S_2}')"/>
        <ul class="text-sm text-gray-600 space-y-1">
          <li><span v-html="km('F_1,\\ F_2')"/> — sily pôsobiace na piestky [N]</li>
          <li><span v-html="km('S_1,\\ S_2')"/> — plochy piestkov [m²]</li>
        </ul>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 2 — Hydraulický lis v autoservise</h3>
        <p class="text-gray-700 mb-3">
          Malý piest má plochu <span v-html="km('S_1 = 10\\ \\mathrm{cm}^2')"/> a mechanik naň pôsobí silou
          <span v-html="km('F_1 = 200\\ \\mathrm{N}')"/>.
          Plocha veľkého piestu je <span v-html="km('S_2 = 500\\ \\mathrm{cm}^2')"/>.
          Aká sila zdvíha auto?
        </p>
        <div class="bg-white rounded-lg p-4">
          <p class="text-sm font-medium text-gray-500 mb-2">Riešenie:</p>
          <div v-html="km('F_2 = F_1 \\cdot \\frac{S_2}{S_1} = 200 \\cdot \\frac{500}{10} = 10\\,000\\ \\mathrm{N} = 10\\ \\mathrm{kN}')"/>
          <p class="text-sm text-gray-600 mt-2">Hydraulický lis zosilnil pôvodnú silu 50-násobne!</p>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 3 ==================== -->
    <section aria-label="Archimedov zákon" class="mb-12">
      <h2 class="text-2xl font-bold text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2">3. Archimedov zákon a plávanie telies</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Na každé teleso ponorené do kvapaliny pôsobí <strong>vztlaková sila</strong> (Archimedova sila) smerom nahor. Jej príčinou je rozdiel tlakov kvapaliny na dolnej a hornej ploche telesa — spodok je hlbšie, teda tlak je väčší.
      </p>

      <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-cyan-800 mb-3">Archimedov zákon</h3>
        <div class="text-center text-xl mb-4" v-html="km('F_A = \\rho_k \\cdot g \\cdot V')"/>
        <ul class="text-sm text-gray-600 space-y-1">
          <li><span v-html="km('F_A')"/> — Archimedova (vztlaková) sila [N]</li>
          <li><span v-html="km('\\rho_k')"/> — hustota kvapaliny [kg/m³]</li>
          <li><span v-html="km('V')"/> — objem ponorenej časti telesa [m³]</li>
        </ul>
      </div>

      <!-- Podmienky plávania -->
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Podmienky plávania</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">⬇️</div>
          <h4 class="font-semibold text-red-700 mb-1">Klesá</h4>
          <div class="mb-1" v-html="km('\\rho_t > \\rho_k')"/>
          <p class="text-sm text-gray-600"><span v-html="km('F_A < G')"/></p>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">🟢</div>
          <h4 class="font-semibold text-green-700 mb-1">Pláva (v hĺbke)</h4>
          <div class="mb-1" v-html="km('\\rho_t = \\rho_k')"/>
          <p class="text-sm text-gray-600"><span v-html="km('F_A = G')"/></p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">⬆️</div>
          <h4 class="font-semibold text-blue-700 mb-1">Vypláva</h4>
          <div class="mb-1" v-html="km('\\rho_t < \\rho_k')"/>
          <p class="text-sm text-gray-600"><span v-html="km('F_A > G')"/></p>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h3 class="font-semibold text-blue-800 mb-3">Príklad 3 — Archimedova sila na kameň</h3>
        <p class="text-gray-700 mb-3">
          Kamenná kocka s objemom <span v-html="km('V = 0{,}5\\ \\mathrm{m}^3')"/> je celá ponorená vo vode
          (<span v-html="km('\\rho_k = 1000\\ \\mathrm{kg/m}^3')"/>).
          Aká vztlaková sila na ňu pôsobí?
        </p>
        <div class="bg-white rounded-lg p-4">
          <p class="text-sm font-medium text-gray-500 mb-2">Riešenie:</p>
          <div v-html="km('F_A = \\rho_k \\cdot g \\cdot V = 1000 \\cdot 9{,}81 \\cdot 0{,}5 = 4\\,905\\ \\mathrm{N} \\approx 4{,}9\\ \\mathrm{kN}')"/>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 4 ==================== -->
    <section aria-label="Atmosferický tlak a plyny" class="mb-12">
      <h2 class="text-2xl font-bold text-cyan-700 mb-6 border-b-2 border-cyan-200 pb-2">4. Atmosferický tlak a Bernoulliho rovnica</h2>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Atmosferický tlak</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Atmosferický tlak je tlak vzduchu na zemský povrch. Vzniká tiahou vzdušného stĺpca nad daným miestom.
        S rastúcou nadmorskou výškou klesá — vo výške 5 km je zhruba polovičný oproti hladine mora.
      </p>

      <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-6 text-center">
        <div class="text-xl mb-1" v-html="km('p_0 \\approx 101\\,325\\ \\mathrm{Pa} \\approx 101{,}3\\ \\mathrm{kPa}')"/>
        <p class="text-sm text-gray-600">Normálny atmosferický tlak na hladine mora</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h4 class="font-semibold text-gray-700 mb-2">Barometer</h4>
          <p class="text-sm text-gray-600">
            Prístroj na meranie atmosferického tlaku. Ortuťový barometer meria výšku stĺpca ortuti —
            pri normálnom tlaku <span v-html="km('h \\approx 760\\ \\mathrm{mmHg}')"/>.
            Aneroiddový barometer (bez kvapaliny) sa používa v bežnom živote.
          </p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h4 class="font-semibold text-gray-700 mb-2">Manometer</h4>
          <p class="text-sm text-gray-600">
            Prístroj na meranie <em>pretlaku</em> — rozdielu meraného tlaku a atmosferického tlaku.
            Používa sa pri pneumatikách, kotloch alebo tlakovej nádobe.
          </p>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-800 mb-3">Bernoulliho rovnica</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Bernoulliho rovnica vyjadruje <strong>zachovanie energie</strong> pri prúdení ideálnej kvapaliny.
        Kľúčový záver: kde kvapalina prúdi rýchlejšie (napr. v zúžení), je <em>statický tlak menší</em>.
      </p>

      <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-cyan-800 mb-3">Bernoulliho rovnica (kvalitatívne)</h3>
        <div class="text-center text-xl mb-4" v-html="km('p + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\mathrm{konšt.}')"/>
        <ul class="text-sm text-gray-600 space-y-1">
          <li><span v-html="km('p')"/> — statický tlak [Pa]</li>
          <li><span v-html="km('\\tfrac{1}{2}\\rho v^2')"/> — dynamický tlak (kinetická energia na objem) [Pa]</li>
          <li><span v-html="km('\\rho g h')"/> — hydrostatický príspevok [Pa]</li>
        </ul>
      </div>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
        <h4 class="font-semibold text-amber-800 mb-2">Praktické príklady Bernoulliho princípu</h4>
        <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li><strong>Krídlo lietadla</strong> — vzduch nad krídlom prúdi rýchlejšie → nižší tlak → vztlaková sila</li>
          <li><strong>Venturiho trubica</strong> — meranie prietoku kvapaliny pomocou zúženia</li>
          <li><strong>Karburátor</strong> — rýchly prúd vzduchu nasáva palivo z trysky</li>
        </ul>
      </div>
    </section>

    <!-- ==================== ZHRNUTIE ==================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-cyan-100">
              <th scope="col" class="text-left p-3 rounded-tl-lg font-semibold text-cyan-800">Zákon / Veličina</th>
              <th scope="col" class="text-left p-3 font-semibold text-cyan-800">Vzorec</th>
              <th scope="col" class="text-left p-3 rounded-tr-lg font-semibold text-cyan-800">Kľúčová poznámka</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200">
              <td class="p-3 font-medium">Hydrostatický tlak</td>
              <td class="p-3" v-html="km('p = \\rho g h')"/>
              <td class="p-3 text-gray-600">Nezávisí od tvaru nádoby</td>
            </tr>
            <tr class="border-b border-gray-200 bg-white">
              <td class="p-3 font-medium">Pascalov zákon</td>
              <td class="p-3" v-html="km('F_1/S_1 = F_2/S_2')"/>
              <td class="p-3 text-gray-600">Tlak sa prenáša rovnomerne</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-3 font-medium">Archimedov zákon</td>
              <td class="p-3" v-html="km('F_A = \\rho_k g V')"/>
              <td class="p-3 text-gray-600">Vztlaková sila smerom nahor</td>
            </tr>
            <tr class="border-b border-gray-200 bg-white">
              <td class="p-3 font-medium">Atmosferický tlak</td>
              <td class="p-3" v-html="km('p_0 \\approx 101\\,325\\ \\mathrm{Pa}')"/>
              <td class="p-3 text-gray-600">Klesá s nadmorskou výškou</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Bernoulliho rovnica</td>
              <td class="p-3" v-html="km('p + \\tfrac{1}{2}\\rho v^2 + \\rho gh = \\mathrm{konšt.}')"/>
              <td class="p-3 text-gray-600">Rýchlejší prúd → nižší tlak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ==================== KVÍZ ==================== -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center gap-3 mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex-1 bg-gray-200 rounded-full h-2">
            <div
              class="bg-cyan-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: ((currentQ + 1) / quiz.length * 100) + '%' }"
            />
          </div>
        </div>

        <!-- Question -->
        <div data-testid="question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="text-lg font-medium text-gray-800 mb-4" v-html="currentQuestion.question"/>

          <div class="space-y-3">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="'option-' + i"
              type="button"
              class="w-full text-left p-4 rounded-xl border-2 transition-all duration-200"
              :class="optionClass(i)"
              @click="selectAnswer(i)"
              v-html="option"
            />
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              class="mt-4 p-4 rounded-xl"
              :class="selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'"
            >
              <p
                class="font-semibold mb-1"
                :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'"
              >
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
              </p>
              <p class="text-sm text-gray-700" v-html="currentQuestion.explanation"/>
            </div>
          </Transition>
        </div>

        <button
          v-if="selectedAnswer !== null"
          data-testid="next-btn"
          type="button"
          class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-600 mb-6">Získal si {{ quizScore }} z {{ quiz.length }} bodov</p>
        <button
          data-testid="reset-btn"
          type="button"
          class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

useHead({
  title: 'Tlak v kvapalinách a plynoch | Fyzika | NaucSaTo',
  meta: [
    {
      name: 'description',
      content: 'Hydrostatický tlak, Pascalov zákon, Archimedov zákon, atmosferický tlak a Bernoulliho rovnica pre gymnazistov.'
    }
  ]
})

// ── Kvíz ──────────────────────────────────────────────────────────
const quiz = [
  {
    question: 'Aký hydrostatický tlak pôsobí vo vode v hĺbke 10 m? (ρ = 1000 kg/m³, g = 9,81 m/s²)',
    options: [
      '9 810 Pa',
      '98 100 Pa',
      '1 000 Pa',
      '101 325 Pa'
    ],
    correctIndex: 1,
    explanation: 'p = ρgh = 1000 · 9,81 · 10 = 98 100 Pa ≈ 98,1 kPa. Je to takmer rovnaký tlak ako atmosferický — v hĺbke 10 m teda pôsobí dvojnásobný tlak oproti povrchu!'
  },
  {
    question: 'Čo tvrdí Pascalov zákon?',
    options: [
      'Teleso ponorené v kvapaline je nadľahčené silou rovnajúcou sa tiaži vytlačenej kvapaliny.',
      'Tlak v kvapaline rastie priamo úmerne s hĺbkou.',
      'Vonkajší tlak pôsobiaci na kvapalinu v uzavretej nádobe sa prenáša rovnomerne do všetkých smerov.',
      'Rýchlosť prúdenia kvapaliny je všade rovnaká.'
    ],
    correctIndex: 2,
    explanation: 'Pascalov zákon hovorí, že vonkajší tlak sa prenáša rovnomerne do celého objemu kvapaliny — práve preto funguje hydraulický lis, kde malou silou dokážeme zdvihnúť veľkú záťaž.'
  },
  {
    question: 'Teleso s hustotou 800 kg/m³ vhodíme do vody (ρ = 1000 kg/m³). Čo sa stane?',
    options: [
      'Klesne na dno, lebo je z kameňa.',
      'Zostane pevne nehybné vo vnútri kvapaliny.',
      'Vypláva na hladinu a časť telesa bude vyčnievať nad vodu.',
      'Bude sa pohybovať v kruhu.'
    ],
    correctIndex: 2,
    explanation: 'Keďže ρ_t = 800 kg/m³ < ρ_k = 1000 kg/m³, Archimedova sila prevyšuje tiaž. Teleso vypláva — na hladine pláva tak, že 80 % jeho objemu je pod vodou a 20 % vyčnieva nad ňu.'
  },
  {
    question: 'Hydraulický lis má malý piest (S₁ = 5 cm²) a veľký piest (S₂ = 250 cm²). Pôsobíme silou F₁ = 80 N. Aká sila pôsobí na veľký piest?',
    options: [
      '80 N',
      '400 N',
      '4 000 N',
      '16 N'
    ],
    correctIndex: 2,
    explanation: 'F₂ = F₁ · S₂/S₁ = 80 · 250/5 = 4 000 N. Lis zosilnil silu 50-násobne. Práca sa však nezväčšila — veľký piest sa posunie oveľa menej.'
  },
  {
    question: 'Aká je hodnota normálneho atmosferického tlaku na hladine mora?',
    options: [
      'p₀ ≈ 10 000 Pa',
      'p₀ ≈ 50 000 Pa',
      'p₀ ≈ 760 Pa',
      'p₀ ≈ 101 325 Pa'
    ],
    correctIndex: 3,
    explanation: 'Normálny atmosferický tlak je p₀ ≈ 101 325 Pa ≈ 101,3 kPa. Zodpovedá výške ortuťového stĺpca 760 mm (1 mmHg = 133,3 Pa). S rastúcou nadmorskou výškou klesá.'
  },
  {
    question: 'Čo opisuje Bernoulliho rovnica a aký má praktický dôsledok?',
    options: [
      'Závislosť hydrostatického tlaku od hĺbky — čím hlbšie, tým väčší tlak.',
      'Zachovanie energie pri prúdení ideálnej kvapaliny — kde je rýchlosť väčšia, tlak je menší.',
      'Podmienky plávania telesa — teleso pláva, ak je jeho hustota menšia ako hustota kvapaliny.',
      'Závislosť objemu plynu od teploty pri konštantnom tlaku.'
    ],
    correctIndex: 1,
    explanation: 'Bernoulliho rovnica vyjadruje zachovanie energie v prúdiacej ideálnej kvapaline. Praktický dôsledok: v zúžení kvapalina prúdi rýchlejšie a statický tlak klesá. Tento princíp vysvetľuje vztlakovú silu krídla lietadla.'
  }
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 hover:border-cyan-400 hover:bg-cyan-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 text-gray-400'
}

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
