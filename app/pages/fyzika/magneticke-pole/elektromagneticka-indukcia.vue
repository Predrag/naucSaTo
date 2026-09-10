<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/magneticke-pole" class="hover:text-emerald-600 transition-colors">Magnetické pole</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Elektromagnetická indukcia</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔄</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Elektromagnetická indukcia</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">Vznik elektrického napätia zo zmeny magnetického toku — základ generátorov, transformátorov a modernej elektrotechniky</p>

      <!-- ─── Sekcia 1: Magnetický tok ─── -->
      <section aria-label="Magnetický tok" class="mb-12">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
          1. Magnetický tok
        </h2>

        <p class="text-gray-700 mb-5">
          <strong>Magnetický tok</strong> Φ (phi) vyjadruje množstvo magnetických siločiar prechádzajúcich danou plochou.
          Závisí od veľkosti magnetickej indukcie, plochy vodiča a uhla, ktorý zviera vektor magnetickej indukcie s
          normálou plochy.
        </p>

        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
          <h3 class="font-semibold text-purple-800 mb-4">Definičný vzorec</h3>
          <div class="text-center text-xl mb-4" v-html="km('\\Phi = B \\cdot S \\cdot \\cos\\alpha \\quad [\\text{Wb}]')"/>
          <ul class="text-sm text-gray-600 space-y-1.5">
            <li><span v-html="km('\\Phi')"/> — magnetický tok <strong>[Wb]</strong> (Weber = V·s)</li>
            <li><span v-html="km('B')"/> — magnetická indukcia <strong>[T]</strong> (Tesla)</li>
            <li><span v-html="km('S')"/> — plocha slučky <strong>[m²]</strong></li>
            <li><span v-html="km('\\alpha')"/> — uhol medzi vektorom <span v-html="km('\\vec{B}')"/> a normálou plochy</li>
          </ul>
        </div>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p class="text-xs font-semibold text-gray-500 mb-2">α = 0° — kolmo</p>
            <div v-html="km('\\Phi = B \\cdot S')"/>
            <p class="text-xs text-gray-400 mt-2">Maximálny tok</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p class="text-xs font-semibold text-gray-500 mb-2">0° &lt; α &lt; 90°</p>
            <div v-html="km('\\Phi = B S \\cos\\alpha')"/>
            <p class="text-xs text-gray-400 mt-2">Čiastočný tok</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p class="text-xs font-semibold text-gray-500 mb-2">α = 90° — rovnobežne</p>
            <div v-html="km('\\Phi = 0')"/>
            <p class="text-xs text-gray-400 mt-2">Nulový tok</p>
          </div>
        </div>

        <!-- Príklad 1 -->
        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">📐 Príklad 1: Výpočet magnetického toku</h3>
          <p class="text-gray-700 mb-3">
            Obdĺžniková slučka 20 cm × 30 cm je umiestnená v homogénnom poli B = 0,5 T.
            Rovina slučky zviera s vektorom <span v-html="km('\\vec{B}')"/> uhol 30°.
            Aký je magnetický tok?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-sm">
            <p class="text-gray-500">Plocha: <span v-html="km('S = 0{,}20 \\times 0{,}30 = 0{,}06\\text{ m}^2')"/></p>
            <p class="text-gray-500">Uhol medzi normálou a <span v-html="km('\\vec{B}')"/>: <span v-html="km('\\alpha = 90^\\circ - 30^\\circ = 60^\\circ')"/></p>
            <div v-html="km('\\Phi = B \\cdot S \\cdot \\cos 60^\\circ = 0{,}5 \\cdot 0{,}06 \\cdot 0{,}5')"/>
            <div class="font-bold text-emerald-700 text-base" v-html="km('\\Phi = 0{,}015\\text{ Wb} = 15\\text{ mWb}')"/>
          </div>
        </div>
      </section>

      <!-- ─── Sekcia 2: Faradayov a Lenzov zákon ─── -->
      <section aria-label="Faradayov zákon a Lenzov zákon" class="mb-12">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
          2. Faradayov zákon a Lenzov zákon
        </h2>

        <p class="text-gray-700 mb-5">
          Kľúčové zistenie Michaela Faradaya: <strong>zmena magnetického toku vyvoláva elektromotorické napätie</strong>.
          Čím rýchlejšie sa tok mení, tým väčšie napätie sa indukuje.
        </p>

        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-5">
          <h3 class="font-semibold text-purple-800 mb-3">Faradayov zákon elektromagnetickej indukcie</h3>
          <div class="text-center text-xl mb-4" v-html="km('U_i = -\\dfrac{\\Delta\\Phi}{\\Delta t} \\quad [\\text{V}]')"/>
          <p class="text-sm text-gray-600">
            Indukované napätie je priamo úmerné rýchlosti zmeny magnetického toku.
            Znamienko mínus je matematickým vyjadrením Lenzovho zákona.
          </p>
        </div>

        <div class="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-5">
          <h3 class="font-semibold text-amber-800 mb-2">⚡ Lenzov zákon</h3>
          <p class="text-gray-700">
            Indukovaný prúd pôsobí vždy <strong>proti príčine</strong>, ktorá ho vyvolala.
            Ak magnetický tok rastie, indukovaný prúd vytvára pole, ktoré sa mu snaží vrátiť — tok spomaľuje jeho rast.
            Ak tok klesá, indukovaný prúd sa snaží udržať pôvodný tok.
          </p>
          <p class="text-sm text-amber-700 mt-2 font-medium">
            Lenzov zákon je prejavom zákona zachovania energie — systém sa bráni zmenám, ktoré by porušili energetickú bilanciu.
          </p>
        </div>

        <!-- Príklad 2 -->
        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">📐 Príklad 2: Faradayov zákon</h3>
          <p class="text-gray-700 mb-3">
            Magnetický tok vo vodičovej slučke sa za Δt = 0,4 s zmení z Φ₁ = 0,8 Wb na Φ₂ = 0,2 Wb.
            Aké napätie sa indukuje?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-sm">
            <div v-html="km('\\Delta\\Phi = \\Phi_2 - \\Phi_1 = 0{,}2 - 0{,}8 = -0{,}6\\text{ Wb}')"/>
            <div v-html="km('U_i = -\\dfrac{\\Delta\\Phi}{\\Delta t} = -\\dfrac{-0{,}6}{0{,}4}')"/>
            <div class="font-bold text-emerald-700 text-base" v-html="km('U_i = 1{,}5\\text{ V}')"/>
            <p class="text-xs text-gray-500">
              Kladná hodnota — podľa Lenzovho zákona indukovaný prúd pôsobí proti poklesu toku.
            </p>
          </div>
        </div>
      </section>

      <!-- ─── Sekcia 3: Generátor striedavého prúdu ─── -->
      <section aria-label="Generátor striedavého prúdu" class="mb-12">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
          3. Generátor striedavého prúdu
        </h2>

        <p class="text-gray-700 mb-5">
          Generátor premieňa mechanickú energiu na elektrickú. Vodičová slučka rotuje v homogénnom magnetickom poli —
          mení sa uhol α, a teda aj magnetický tok. Výsledkom je <strong>harmonické (sínusové) napätie</strong>.
        </p>

        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-5">
          <h3 class="font-semibold text-purple-800 mb-4">Okamžité napätie generátora</h3>
          <div class="text-center text-xl mb-4" v-html="km('u(t) = U_{\\max} \\cdot \\sin(\\omega t) \\quad [\\text{V}]')"/>
          <div class="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <p><span v-html="km('U_{\\max}')"/> — amplitúdové (maximálne) napätie <strong>[V]</strong></p>
            <p><span v-html="km('\\omega = 2\\pi f')"/> — uhlová frekvencia <strong>[rad/s]</strong></p>
            <p><span v-html="km('f')"/> — frekvencia <strong>[Hz]</strong></p>
            <p><span v-html="km('t')"/> — čas <strong>[s]</strong></p>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
          <h3 class="font-semibold text-blue-800 mb-3">Efektívna hodnota napätia</h3>
          <div class="text-center mb-3" v-html="km('U_{ef} = \\dfrac{U_{\\max}}{\\sqrt{2}} \\approx 0{,}707 \\cdot U_{\\max}')"/>
          <p class="text-sm text-gray-600">
            V elektrickej sieti 230 V je to <em>efektívna</em> hodnota. Maximálne napätie:
            <span v-html="km('U_{\\max} = 230\\sqrt{2} \\approx 325\\text{ V}')"/>.
          </p>
        </div>

        <!-- Príklad 3 -->
        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">📐 Príklad 3: Okamžité napätie generátora</h3>
          <p class="text-gray-700 mb-3">
            Generátor pracuje s frekvenciou f = 50 Hz a maximálnym napätím U<sub>max</sub> = 325 V.
            Vypočítaj okamžité napätie v čase t = 0,005 s.
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-sm">
            <div v-html="km('\\omega = 2\\pi f = 2\\pi \\cdot 50 = 100\\pi \\approx 314\\text{ rad/s}')"/>
            <div v-html="km('u = U_{\\max} \\cdot \\sin(\\omega t) = 325 \\cdot \\sin(100\\pi \\cdot 0{,}005)')"/>
            <div v-html="km('u = 325 \\cdot \\sin\\!\\left(\\tfrac{\\pi}{2}\\right) = 325 \\cdot 1')"/>
            <div class="font-bold text-emerald-700 text-base" v-html="km('u = 325\\text{ V} = U_{\\max}')"/>
            <p class="text-xs text-gray-500">
              Čas t = 0,005 s = T/4 zodpovedá štvrťperióde, kedy napätie dosahuje maximum.
            </p>
          </div>
        </div>
      </section>

      <!-- ─── Sekcia 4: Samoinduktivita ─── -->
      <section aria-label="Samoinduktivita a energia magnetického poľa" class="mb-12">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
          4. Samoinduktivita a energia magnetického poľa
        </h2>

        <p class="text-gray-700 mb-5">
          Keď sa mení prúd v cievke, mení sa aj magnetický tok, ktorý táto cievka sama produkuje.
          Zmena toku spätne indukuje napätie v tej istej cievke — jav nazývame <strong>samoindukcia</strong>.
          Charakterizuje ho <strong>indukčnosť</strong> L.
        </p>

        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-5">
          <h3 class="font-semibold text-purple-800 mb-5">Vzorce samoinduktivity</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="text-center">
              <p class="text-sm font-medium text-gray-700 mb-3">Indukované napätie pri samoindukci</p>
              <div v-html="km('U_i = -L \\cdot \\dfrac{\\Delta I}{\\Delta t} \\quad [\\text{V}]')"/>
            </div>
            <div class="text-center">
              <p class="text-sm font-medium text-gray-700 mb-3">Energia magnetického poľa cievky</p>
              <div v-html="km('W = \\dfrac{1}{2}\\,L\\,I^2 \\quad [\\text{J}]')"/>
            </div>
          </div>
          <div class="mt-5 text-sm text-gray-600 space-y-1">
            <p><span v-html="km('L')"/> — indukčnosť (samoinduktivita) cievky <strong>[H]</strong> (Henry)</p>
            <p><span v-html="km('I')"/> — prúd v cievke <strong>[A]</strong></p>
          </div>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-purple-700 text-white">
                <th scope="col" class="text-left px-5 py-3 font-semibold">Veličina</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Poznámka</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in velicinyTable" :key="row.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-5 py-3 font-medium text-gray-800">{{ row.name }}</td>
                <td class="px-5 py-3 text-purple-700" v-html="row.symbol"/>
                <td class="px-5 py-3 text-indigo-700">{{ row.unit }}</td>
                <td class="px-5 py-3 text-gray-600">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Príklad 4 -->
        <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">📐 Príklad 4: Samoinduktivita a energia</h3>
          <p class="text-gray-700 mb-3">
            Cievka s indukčnosťou L = 2 H. Prúd sa zmení z I₁ = 3 A na I₂ = 1 A za Δt = 0,5 s.
            (a) Aké napätie sa indukuje? (b) Aká je energia pri prúde I₁ = 3 A?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-3 text-sm">
            <div>
              <p class="text-gray-500 font-semibold mb-1">(a) Indukované napätie:</p>
              <div v-html="km('U_i = -L \\cdot \\dfrac{\\Delta I}{\\Delta t} = -2 \\cdot \\dfrac{1 - 3}{0{,}5} = -2 \\cdot (-4)')"/>
              <div class="font-bold text-emerald-700 text-base mt-1" v-html="km('U_i = 8\\text{ V}')"/>
            </div>
            <div>
              <p class="text-gray-500 font-semibold mb-1">(b) Energia magnetického poľa:</p>
              <div v-html="km('W = \\dfrac{1}{2}\\,L\\,I_1^2 = \\dfrac{1}{2} \\cdot 2 \\cdot 3^2 = 1 \\cdot 9')"/>
              <div class="font-bold text-emerald-700 text-base mt-1" v-html="km('W = 9\\text{ J}')"/>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Zhrnutie ─── -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-5">📋 Zhrnutie — Elektromagnetická indukcia</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-gray-700 mb-3">Kľúčové vzorce</h3>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200">
                  <th scope="col" class="text-left py-1.5 text-gray-500 font-medium">Veličina</th>
                  <th scope="col" class="text-left py-1.5 text-gray-500 font-medium">Vzorec</th>
                  <th scope="col" class="text-left py-1.5 text-gray-500 font-medium">Jed.</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr>
                  <td class="py-2 text-gray-700">Magnetický tok</td>
                  <td class="py-2" v-html="km('\\Phi = BS\\cos\\alpha')"/>
                  <td class="py-2 text-gray-500">Wb</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-700">Faradayov zákon</td>
                  <td class="py-2" v-html="km('U_i = -\\tfrac{\\Delta\\Phi}{\\Delta t}')"/>
                  <td class="py-2 text-gray-500">V</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-700">Generátor</td>
                  <td class="py-2" v-html="km('u(t) = U_{\\max}\\sin\\omega t')"/>
                  <td class="py-2 text-gray-500">V</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-700">Efektívna hodnota</td>
                  <td class="py-2" v-html="km('U_{ef} = U_{\\max}/\\sqrt{2}')"/>
                  <td class="py-2 text-gray-500">V</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-700">Samoindukcia</td>
                  <td class="py-2" v-html="km('U_i = -L\\,\\tfrac{\\Delta I}{\\Delta t}')"/>
                  <td class="py-2 text-gray-500">V</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-700">Energia pol.</td>
                  <td class="py-2" v-html="km('W = \\tfrac{1}{2}LI^2')"/>
                  <td class="py-2 text-gray-500">J</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 class="font-semibold text-gray-700 mb-3">Dôležité súvislosti</h3>
            <ul class="text-sm text-gray-600 space-y-3">
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold mt-0.5">▶</span>
                Elektromagnetická indukcia je základ generátorov, transformátorov a elektromotorov.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold mt-0.5">▶</span>
                Lenzov zákon je dôsledkom zákona zachovania energie.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold mt-0.5">▶</span>
                V európskej sieti: f = 50 Hz, U<sub>ef</sub> = 230 V, U<sub>max</sub> ≈ 325 V.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold mt-0.5">▶</span>
                Cievka s väčšou indukčnosťou uchováva viac energie a silnejšie sa bráni zmenám prúdu.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 font-bold mt-0.5">▶</span>
                1 Weber = 1 V·s; 1 Henry = 1 V·s/A.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ─── Kvíz ─── -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 class="text-xl font-bold text-gray-800 mb-6">🧪 Overenie vedomostí</h2>

        <div v-if="!quizFinished">
          <!-- Progress -->
          <div data-testid="quiz-progress" class="flex items-center justify-between mb-3 text-sm text-gray-500">
            <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <span>{{ quizScore }} bod{{ quizScore === 1 ? '' : quizScore >= 2 && quizScore <= 4 ? 'y' : 'ov' }}</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-2 mb-6">
            <div
              class="bg-purple-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
            />
          </div>

          <Transition name="fade" mode="out-in">
            <div :key="currentQ">
              <!-- Question -->
              <div
                data-testid="question"
                class="text-gray-800 font-medium mb-5 text-lg leading-relaxed"
                v-html="currentQuestion.question"
              />

              <!-- Options -->
              <div class="space-y-3 mb-6">
                <button
                  v-for="(option, i) in currentQuestion.options"
                  :key="i"
                  :data-testid="`option-${i}`"
                  type="button"
                  class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm"
                  :class="optionClass(i)"
                  @click="selectAnswer(i)"
                >{{ option }}</button>
              </div>

              <!-- Feedback -->
              <Transition name="fade">
                <div
                  v-if="selectedAnswer !== null"
                  data-testid="feedback"
                  class="mb-4 p-4 rounded-xl text-sm border"
                  :class="selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-red-50 text-red-800 border-red-200'"
                >
                  <p class="font-semibold mb-1">
                    {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
                  </p>
                  <p>{{ currentQuestion.explanation }}</p>
                </div>
              </Transition>

              <!-- Next button -->
              <div v-if="selectedAnswer !== null" class="flex justify-end">
                <button
                  data-testid="next-btn"
                  type="button"
                  class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-xl transition-colors"
                  @click="nextQuestion"
                >
                  {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Result -->
        <div v-else data-testid="result" class="text-center py-8">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="score" class="text-gray-600 mb-6">
            Skóre: <strong>{{ quizScore }}/{{ quiz.length }}</strong>
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-xl transition-colors"
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

// ─── Tabuľka veličín ───
const velicinyTable = [
  { name: 'Magnetický tok', symbol: km('\\Phi'), unit: 'Wb', note: 'Weber = V·s' },
  { name: 'Magnetická indukcia', symbol: km('B'), unit: 'T', note: 'Tesla' },
  { name: 'Indukované napätie', symbol: km('U_i'), unit: 'V', note: 'Volt' },
  { name: 'Indukčnosť', symbol: km('L'), unit: 'H', note: 'Henry = V·s/A' },
  { name: 'Energia mag. poľa', symbol: km('W'), unit: 'J', note: 'Joule' },
  { name: 'Uhlová frekvencia', symbol: km('\\omega'), unit: 'rad/s', note: 'ω = 2πf' },
]

// ─── Kvíz ───
const quiz = [
  {
    question: 'Čo vyjadruje magnetický tok Φ?',
    options: [
      'Silu, ktorá pôsobí na pohyblivý náboj v magnetickom poli',
      'Mieru magnetických siločiar prechádzajúcich danou plochou',
      'Intenzitu magnetického poľa v danom bode',
      'Elektrické napätie indukované vo vodiči',
    ],
    correctIndex: 1,
    explanation:
      'Magnetický tok Φ = B·S·cosα vyjadruje, koľko magnetických siločiar prechádza danou plochou. Závisí od intenzity poľa, veľkosti plochy a uhla. Jednotkou je Weber [Wb].',
  },
  {
    question: 'Kruhová slučka s plochou S = 0,1 m² je kolmo na magnetické pole B = 2 T (α = 0°). Aký je magnetický tok?',
    options: ['0,02 Wb', '2 Wb', '0,2 Wb', '20 Wb'],
    correctIndex: 2,
    explanation:
      'Φ = B · S · cos 0° = 2 · 0,1 · 1 = 0,2 Wb. Pri kolmom usporiadaní (α = 0°) je magnetický tok maximálny a rovná sa súčinu B a S.',
  },
  {
    question: 'Čo hovorí Lenzov zákon?',
    options: [
      'Indukovaný prúd tečie vždy v smere zmeny magnetického toku',
      'Indukované napätie je priamo úmerné odporu vodiča',
      'Magnetický tok je vždy konštantný v uzavretej slučke',
      'Indukovaný prúd pôsobí proti zmene magnetického toku, ktorá ho vyvolala',
    ],
    correctIndex: 3,
    explanation:
      'Lenzov zákon hovorí, že indukovaný prúd pôsobí vždy PROTI príčine, ktorá ho vyvolala. Je to prejav zákona zachovania energie — systém sa bráni zmenám magnetického toku.',
  },
  {
    question: 'Magnetický tok vo vodičovej slučke sa zmení z Φ₁ = 0,5 Wb na Φ₂ = 0,1 Wb za Δt = 0,2 s. Aká je veľkosť indukovaného napätia?',
    options: ['1 V', '2 V', '4 V', '0,5 V'],
    correctIndex: 1,
    explanation:
      '|Ui| = |ΔΦ / Δt| = |0,1 − 0,5| / 0,2 = 0,4 / 0,2 = 2 V. Faradayov zákon: indukované napätie sa rovná rýchlosti zmeny magnetického toku.',
  },
  {
    question: 'Generátor pracuje s frekvenciou f = 50 Hz a amplitúdovým napätím Umax = 325 V. Aké je okamžité napätie v čase t = 0,005 s?',
    options: ['0 V', '230 V', '163 V', '325 V'],
    correctIndex: 3,
    explanation:
      'ω = 2π·50 = 100π rad/s; u = 325·sin(100π·0,005) = 325·sin(π/2) = 325·1 = 325 V. Čas 0,005 s = T/4 zodpovedá štvrťperióde, kedy je napätie maximálne.',
  },
  {
    question: 'Cievka s indukčnosťou L = 0,5 H nesie prúd I = 4 A. Aká energia je uložená v magnetickom poli?',
    options: ['1 J', '2 J', '4 J', '8 J'],
    correctIndex: 2,
    explanation:
      'W = ½ · L · I² = ½ · 0,5 · 4² = ½ · 0,5 · 16 = 4 J. Energia uložená v magnetickom poli cievky rastie so štvorcom prúdu.',
  },
  {
    question: 'Cievka s L = 1 H. Prúd sa zmení z 0 A na 3 A za 0,3 s. Aké napätie sa indukuje?',
    options: ['0,1 V', '3 V', '10 V', '0,9 V'],
    correctIndex: 2,
    explanation:
      'Ui = −L · ΔI/Δt = −1 · (3 − 0)/0,3 = −1 · 10 = −10 V. Veľkosť indukovaného napätia je 10 V. Znamienko vyjadruje Lenzov zákon — cievka sa bráni narastajúcemu prúdu.',
  },
]

// ─── Stav kvízu ───
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

function optionClass(i: number) {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-purple-400 hover:bg-purple-50 cursor-pointer text-gray-700'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-emerald-400 bg-emerald-50 text-emerald-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
}

useHead({
  title: 'Elektromagnetická indukcia | Magnetické pole | Fyzika | NaucSaTo',
  meta: [
    {
      name: 'description',
      content:
        'Magnetický tok, Faradayov zákon, Lenzov zákon, generátor striedavého prúdu a samoinduktivita. Vysvetlenia, vypočítané príklady a kvíz pre gymnazistov.',
    },
  ],
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
