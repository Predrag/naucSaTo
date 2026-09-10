<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/kmity-vlnenie" class="hover:text-emerald-600 transition-colors">Kmity a vlnenie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Zvuk</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔊</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Zvuk</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Pozdĺžne mechanické vlnenie, ktoré vnímame sluchom. Spoznaj, ako vzniká zvuk,
      prečo sa šíri rôznymi rýchlosťami a čo určuje jeho výšku a hlasitosť.
    </p>

      <!-- Intro -->
      <div class="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-10">
        <p class="text-gray-700 leading-relaxed">
          Zvuk je <strong>mechanické pozdĺžne vlnenie</strong> — kmitanie hmotných častíc prostredia
          v smere šírenia vlny. Na prenos zvuku je nevyhnutné hmotné prostredie (vzduch, voda, kovy).
          Vo vákuu sa zvuk <em>nešíri</em>. Ľudské ucho vníma frekvencie v rozsahu
          <strong>20 Hz až 20 000 Hz</strong> (20 kHz).
        </p>
      </div>

      <!-- ===== SEKCIA 1: Šírenie zvuku ===== -->
      <section aria-label="Šírenie zvuku a rýchlosť" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-sky-600">1.</span> Šírenie zvuku a rýchlosť
        </h2>

        <p class="text-gray-700 mb-4 leading-relaxed">
          Zvuk vzniká kmitaním zdroja (hlasivky, struna, reproduktor), ktorý stláča a rozrieďuje
          okolitý vzduch — vznikajú oblasti <strong>zhustenia</strong> a <strong>rozriedenia</strong>.
          Tieto poruchy sa šíria prostredím ako vlna.
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white border border-sky-200 rounded-xl p-4 text-center shadow-sm">
            <div class="text-2xl mb-1">💨</div>
            <div class="font-semibold text-gray-700 mb-1">Vzduch (20 °C)</div>
            <div class="text-sky-600 font-bold text-xl">≈ 340 m/s</div>
          </div>
          <div class="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
            <div class="text-2xl mb-1">💧</div>
            <div class="font-semibold text-gray-700 mb-1">Voda</div>
            <div class="text-blue-600 font-bold text-xl">≈ 1 480 m/s</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <div class="text-2xl mb-1">🔩</div>
            <div class="font-semibold text-gray-700 mb-1">Oceľ</div>
            <div class="text-gray-600 font-bold text-xl">≈ 5 000 m/s</div>
          </div>
        </div>

        <p class="text-gray-700 mb-4">
          Rýchlosť zvuku <strong>rastie s teplotou</strong> (v plyne) a závisí od pružnosti
          a hustoty prostredia. Vo vzduchu platí aproximácia:
        </p>

        <div class="bg-sky-50 rounded-xl p-5 mb-6">
          <MathFormula display formula="v \approx 331 + 0{,}6 \cdot t \quad [\text{m/s}]" />
          <p class="text-sm text-gray-500 mt-2 text-center">kde <em>t</em> je teplota vzduchu v °C</p>
        </div>

        <p class="text-gray-700 mb-4">
          Platí základný vzťah pre vlnenie — rýchlosť zvuku, frekvencia a vlnová dĺžka sú späté vzťahom:
        </p>

        <div class="bg-sky-50 rounded-xl p-5 mb-6">
          <MathFormula display formula="v = f \cdot \lambda" />
          <p class="text-sm text-gray-500 mt-2 text-center">
            <em>v</em> — rýchlosť [m/s], <em>f</em> — frekvencia [Hz], <em>λ</em> — vlnová dĺžka [m]
          </p>
        </div>

        <!-- Príklad 1 -->
        <div class="border-l-4 border-sky-500 bg-sky-50 rounded-r-xl p-5 mb-4">
          <p class="font-semibold text-sky-800 mb-2">Príklad 1: Vlnová dĺžka tónu A</p>
          <p class="text-gray-700 mb-3">
            Hudobný tón A má frekvenciu <MathFormula formula="f = 440\ \text{Hz}" />.
            Aká je jeho vlnová dĺžka vo vzduchu pri 20 °C (<MathFormula formula="v = 340\ \text{m/s}" />)?
          </p>
          <div class="bg-white rounded-lg p-4">
            <MathFormula display formula="\lambda = \frac{v}{f} = \frac{340\ \text{m/s}}{440\ \text{Hz}} \approx 0{,}773\ \text{m}" />
            <p class="text-gray-600 text-sm mt-2">Vlnová dĺžka tónu A je asi <strong>77 cm</strong>.</p>
          </div>
        </div>

        <!-- Príklad 2 — echo -->
        <div class="border-l-4 border-sky-500 bg-sky-50 rounded-r-xl p-5">
          <p class="font-semibold text-sky-800 mb-2">Príklad 2: Vzdialenosť od prekážky (echo)</p>
          <p class="text-gray-700 mb-3">
            Stojíš pred skalnou stenou. Kričíš a echo počuješ po
            <MathFormula formula="t = 1{,}5\ \text{s}" />. Ako ďaleko je stena?
          </p>
          <div class="bg-white rounded-lg p-4">
            <p class="text-gray-700 text-sm mb-2">Zvuk prejde vzdialenosť tam aj späť, teda:</p>
            <MathFormula display formula="d = \frac{v \cdot t}{2} = \frac{340 \cdot 1{,}5}{2} = 255\ \text{m}" />
            <p class="text-gray-600 text-sm mt-2">Stena je <strong>255 m</strong> ďaleko.</p>
          </div>
        </div>
      </section>

      <!-- ===== SEKCIA 2: Hlasitosť a intenzita ===== -->
      <section aria-label="Hlasitosť a intenzita zvuku" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-sky-600">2.</span> Hlasitosť a intenzita zvuku
        </h2>

        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Intenzita zvuku</strong> <MathFormula formula="I" /> je fyzikálna veličina, ktorá
          udáva výkon zvukovej vlny prenesený jednotkovou plochou kolmou na smer šírenia:
        </p>

        <div class="bg-sky-50 rounded-xl p-5 mb-4">
          <MathFormula display formula="I = \frac{P}{S} \quad \left[\frac{\text{W}}{\text{m}^2}\right]" />
          <p class="text-sm text-gray-500 mt-2 text-center">
            <em>P</em> — výkon zdroja [W], <em>S</em> — plocha [m²]
          </p>
        </div>

        <p class="text-gray-700 mb-4">
          Ľudské ucho je schopné vnímať intenzity v enormne širokej oblasti — od
          <MathFormula formula="I_0 = 10^{-12}\ \text{W/m}^2" /> (prah počuteľnosti)
          až po <MathFormula formula="1\ \text{W/m}^2" /> (prah bolesti). Preto sa hlasitosť
          meria v <strong>decibeloch (dB)</strong> na logaritmickej stupnici:
        </p>

        <div class="bg-sky-50 rounded-xl p-5 mb-6">
          <MathFormula display formula="L = 10 \cdot \log\!\left(\frac{I}{I_0}\right) \quad [\text{dB}]" />
          <p class="text-sm text-gray-500 mt-2 text-center">
            <em>I</em> — intenzita zvuku, <MathFormula formula="I_0 = 10^{-12}\ \text{W/m}^2" /> — referenčná intenzita (prah počuteľnosti)
          </p>
        </div>

        <!-- Tabuľka decibel hladín -->
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-sky-600 text-white">
                <th scope="col" class="px-4 py-2 text-left rounded-tl-lg">Zdroj zvuku</th>
                <th scope="col" class="px-4 py-2 text-center">Hladina L [dB]</th>
                <th scope="col" class="px-4 py-2 text-center rounded-tr-lg">Vnem</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in decibelTable" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-sky-50'">
                <td class="px-4 py-2 text-gray-700">{{ row.source }}</td>
                <td class="px-4 py-2 text-center font-mono font-semibold" :class="row.color">{{ row.level }}</td>
                <td class="px-4 py-2 text-center text-gray-600">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Príklad 3 -->
        <div class="border-l-4 border-sky-500 bg-sky-50 rounded-r-xl p-5">
          <p class="font-semibold text-sky-800 mb-2">Príklad 3: Výpočet hladiny zvuku</p>
          <p class="text-gray-700 mb-3">
            Intenzita zvuku na diskotéke je <MathFormula formula="I = 10^{-2}\ \text{W/m}^2" />.
            Aká je hladina intenzity zvuku?
          </p>
          <div class="bg-white rounded-lg p-4">
            <MathFormula display formula="L = 10 \cdot \log\!\left(\frac{10^{-2}}{10^{-12}}\right) = 10 \cdot \log(10^{10}) = 10 \cdot 10 = 100\ \text{dB}" />
            <p class="text-gray-600 text-sm mt-2">
              100 dB je nad odporúčanou hranicou 85 dB — dlhodobé vystavenie takémuto zvuku <strong>poškodzuje sluch</strong>.
            </p>
          </div>
        </div>
      </section>

      <!-- ===== SEKCIA 3: Výška, farba, rezonancia, infra/ultra ===== -->
      <section aria-label="Výška tónu, farba zvuku a rezonancia" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span class="text-sky-600">3.</span> Výška tónu, farba zvuku a rezonancia
        </h2>

        <!-- Výška tónu -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Výška tónu</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Výška tónu</strong> závisí od <strong>frekvencie kmitania</strong>. Čím vyššia frekvencia,
          tým vyšší tón. Hudobná stupnica je zostavená tak, že každá oktáva zodpovedá
          zdvojnásobeniu frekvencie (napr. A<sub>4</sub> = 440 Hz, A<sub>5</sub> = 880 Hz).
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p class="font-semibold text-purple-800 mb-2">🐘 Infrazvuk</p>
            <p class="text-gray-700 text-sm">Frekvencia <MathFormula formula="f < 20\ \text{Hz}" />.
              Človek ho nevníma, ale vníma ho napr. slon alebo veľryba.
              Vzniká pri zemetraseniach, búrkach. Môže byť nebezpečný pri veľkej intenzite.</p>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p class="font-semibold text-indigo-800 mb-2">🦇 Ultrazvuk</p>
            <p class="text-gray-700 text-sm">Frekvencia <MathFormula formula="f > 20\ \text{kHz}" />.
              Využívajú netopiere a delfíny (echolokácia), ultrazvukové vyšetrenia v medicíne
              (sonografia), čistenie súčiastok, defektoskopia materiálov.</p>
          </div>
        </div>

        <!-- Farba zvuku -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Farba zvuku (timbre)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Farba zvuku</strong> závisí od <strong>harmonických zložiek</strong> (vyšších harmonických).
          Čistý tón je jednoduchá sínusová vlna. Väčšina zvukov (hlas, hudobné nástroje)
          pozostáva zo základnej frekvencie <MathFormula formula="f_1" /> a jej násobkov
          <MathFormula formula="f_2 = 2f_1,\ f_3 = 3f_1,\ \ldots" /> — preto rovnaká nota znie
          na flaute a husliach inak.
        </p>

        <!-- Rezonancia vzdušného stĺpca -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Rezonancia vzdušného stĺpca</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          V uzavretých a otvorených rúrach (flauta, organ, trúbka) dochádza k rezonancii —
          stojatému vlneniu vzdušného stĺpca. V rúre <strong>obojstranne otvorenej</strong>
          (dĺžka <MathFormula formula="l" />) vznikajú rezonančné frekvencie:
        </p>
        <div class="bg-sky-50 rounded-xl p-5 mb-4">
          <MathFormula display formula="f_n = n \cdot \frac{v}{2l} \quad n = 1, 2, 3, \ldots" />
          <p class="text-sm text-gray-500 mt-2 text-center">Obojstranne otvorená rúra</p>
        </div>
        <p class="text-gray-700 mb-4">
          V rúre <strong>jednostranne uzavretej</strong> (uzavretý koniec — uzol, otvorený koniec — kmitňa):
        </p>
        <div class="bg-sky-50 rounded-xl p-5 mb-6">
          <MathFormula display formula="f_n = (2n-1) \cdot \frac{v}{4l} \quad n = 1, 2, 3, \ldots" />
          <p class="text-sm text-gray-500 mt-2 text-center">Jednostranne uzavretá rúra (znie iba liché harmonické)</p>
        </div>

        <!-- Echo -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Echo a dozvuk</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          <strong>Echo</strong> (ozvena) je odraz zvuku od prekážky vnímaný ako samostatný zvuk.
          Ucho dokáže rozlíšiť dva zvuky, ak medzi nimi uplynie aspoň <strong>1/10 sekundy</strong>
          (0,1 s). Prekážka musí byť vzdialená aspoň:
        </p>
        <div class="bg-sky-50 rounded-xl p-5 mb-4">
          <MathFormula display formula="d_{\min} = \frac{v \cdot t_{\min}}{2} = \frac{340 \cdot 0{,}1}{2} = 17\ \text{m}" />
        </div>
        <p class="text-gray-700 mb-2">
          <strong>Dozvuk</strong> (reverb) vzniká v uzavretých priestoroch opakovanými odrazmi zvuku —
          zvuk doznievá ešte po skončení zdroja. Využíva sa v hudobných sálach, nahrávacích štúdiách.
        </p>
      </section>

      <!-- ===== ZHRNUTIE ===== -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
        <ul class="space-y-2 text-gray-700">
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span>Zvuk je <strong>pozdĺžne mechanické vlnenie</strong> — šíri sa len v hmotnom prostredí.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span>Ľudské ucho vníma frekvencie <strong>20 Hz – 20 kHz</strong>; pod nimi infrazvuk, nad nimi ultrazvuk.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span>Rýchlosť zvuku vo vzduchu pri 20 °C je <strong>≈ 340 m/s</strong>; rastie s teplotou a je väčšia v tuhých látkach.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span>Základný vzťah vlnenia: <MathFormula formula="v = f \cdot \lambda" /></span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span><strong>Intenzita zvuku</strong> <MathFormula formula="I\ [\text{W/m}^2]" />; <strong>hladina intenzity</strong> <MathFormula formula="L = 10 \cdot \log(I/I_0)\ [\text{dB}]" />, kde <MathFormula formula="I_0 = 10^{-12}\ \text{W/m}^2" />.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span><strong>Výška tónu</strong> závisí od frekvencie; <strong>farba</strong> od harmonických zložiek; <strong>hlasitosť</strong> od intenzity.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span><strong>Echo</strong>: zvuk sa odráža od prekážky vzdialenej aspoň 17 m. Vzdialenosť: <MathFormula formula="d = v \cdot t / 2" />.</span>
          </li>
          <li class="flex gap-2">
            <span class="text-sky-500 font-bold mt-0.5">•</span>
            <span><strong>Rezonancia vzdušného stĺpca</strong> — základ fungovania dychových nástrojov.</span>
          </li>
        </ul>
      </div>

      <!-- ===== KVÍZ ===== -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">🧠 Kvíz — Zvuk</h2>

        <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <!-- Progress -->
          <div class="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div data-testid="quiz-progress" class="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
              <span>{{ quizScore }} / {{ quiz.length }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5">
              <div
                class="bg-sky-500 h-1.5 rounded-full transition-all duration-300"
                :style="{ width: `${((currentQ) / quiz.length) * 100}%` }"
              />
            </div>
          </div>

          <!-- Question -->
          <div class="p-6">
            <p data-testid="question" class="text-gray-800 font-medium text-lg mb-5" v-html="currentQuestion.questionHtml" />

            <div class="space-y-3">
              <button
                v-for="(opt, i) in currentQuestion.options"
                :key="i"
                :data-testid="`option-${i}`"
                type="button"
                :disabled="selectedAnswer !== null"
                class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-gray-700"
                :class="optionClass(i)"
                @click="selectAnswer(i)"
                v-html="opt"
              />
            </div>

            <!-- Feedback -->
            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="feedback"
                class="mt-5 rounded-xl p-4 text-sm"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800'"
              >
                <span class="font-semibold mr-1">
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
                </span>
                <span v-html="currentQuestion.explanation" />
              </div>
            </Transition>

            <div class="mt-5 flex justify-end">
              <button
                v-if="selectedAnswer !== null"
                data-testid="next-btn"
                type="button"
                class="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Result -->
        <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
          <p data-testid="score" class="text-gray-500 mb-6">
            Dosiahol si <strong class="text-sky-600">{{ quizScore }} z {{ quiz.length }}</strong> bodov.
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// Decibel table data
const decibelTable = [
  { source: 'Prah počuteľnosti', level: '0 dB', note: 'sotva počuteľné', color: 'text-green-600' },
  { source: 'Šepot', level: '20–30 dB', note: 'veľmi tiché', color: 'text-green-600' },
  { source: 'Bežná reč', level: '60–70 dB', note: 'normálne', color: 'text-yellow-600' },
  { source: 'Premávka v meste', level: '80–85 dB', note: 'hlasné', color: 'text-orange-500' },
  { source: 'Diskotéka / koncert', level: '100–110 dB', note: 'škodlivé pri dlhom vystavení', color: 'text-red-500' },
  { source: 'Prah bolesti', level: '~130 dB', note: 'fyzická bolesť', color: 'text-red-700' },
]

// Quiz
const quiz = [
  {
    questionHtml: 'Zvuk je:',
    options: [
      'Priečne elektromagnetické vlnenie',
      'Pozdĺžne mechanické vlnenie',
      'Priečne mechanické vlnenie',
      'Elektromagnetické žiarenie nízkej frekvencie',
    ],
    correctIndex: 1,
    explanation: 'Zvuk je <strong>pozdĺžne mechanické vlnenie</strong> — čiastočky prostredia kmitajú v smere šírenia vlny.',
  },
  {
    questionHtml: 'Aká je rýchlosť zvuku vo vzduchu pri teplote 20 °C?',
    options: [
      km('\\approx 3 \\times 10^8\\ \\text{m/s}'),
      km('\\approx 1480\\ \\text{m/s}'),
      km('\\approx 340\\ \\text{m/s}'),
      km('\\approx 5000\\ \\text{m/s}'),
    ],
    correctIndex: 2,
    explanation: `Rýchlosť zvuku vo vzduchu pri 20 °C je ${km('v \\approx 340\\ \\text{m/s}')}. Vyššia rýchlosť (1480 m/s) platí pre vodu, 5000 m/s pre oceľ.`,
  },
  {
    questionHtml: `Hudobný tón má frekvenciu ${km('f = 680\\ \\text{Hz}')}. Aká je jeho vlnová dĺžka vo vzduchu ${km('(v = 340\\ \\text{m/s})')}?`,
    options: [
      km('\\lambda = 2\\ \\text{m}'),
      km('\\lambda = 0{,}5\\ \\text{m}'),
      km('\\lambda = 5\\ \\text{m}'),
      km('\\lambda = 0{,}2\\ \\text{m}'),
    ],
    correctIndex: 1,
    explanation: `${km('\\lambda = v/f = 340/680 = 0{,}5\\ \\text{m}')}`,
  },
  {
    questionHtml: `Intenzita zvuku je ${km('I = 10^{-6}\\ \\text{W/m}^2')}. Referenčná intenzita ${km('I_0 = 10^{-12}\\ \\text{W/m}^2')}. Aká je hladina intenzity zvuku?`,
    options: ['40 dB', '60 dB', '80 dB', '100 dB'],
    correctIndex: 1,
    explanation: `${km('L = 10 \\cdot \\log(10^{-6}/10^{-12}) = 10 \\cdot \\log(10^6) = 10 \\cdot 6 = 60\\ \\text{dB}')}`,
  },
  {
    questionHtml: 'Výška tónu závisí od:',
    options: [
      'Intenzity zvuku',
      'Frekvencie kmitania zdroja',
      'Rýchlosti zvuku v prostredí',
      'Počtu harmonických zložiek',
    ],
    correctIndex: 1,
    explanation: '<strong>Výška tónu</strong> závisí od frekvencie. Čím vyššia frekvencia, tým vyšší tón. Farba tónu závisí od harmonických zložiek, hlasitosť od intenzity.',
  },
  {
    questionHtml: 'Echo počuješ po 2 sekundách od výkriku. Ako ďaleko je prekážka?',
    options: ['170 m', '340 m', '680 m', '85 m'],
    correctIndex: 1,
    explanation: `${km('d = v \\cdot t / 2 = 340 \\cdot 2 / 2 = 340\\ \\text{m}')}. Zvuk prešiel vzdialenosť tam a späť za 2 s.`,
  },
  {
    questionHtml: 'Ultrazvuk má frekvenciu:',
    options: [
      'Menej ako 20 Hz',
      '20 Hz – 20 kHz',
      'Viac ako 20 kHz',
      'Viac ako 1 GHz',
    ],
    correctIndex: 2,
    explanation: '<strong>Ultrazvuk</strong> má frekvenciu vyššiu ako 20 kHz. Infrazvuk má frekvenciu nižšiu ako 20 Hz. Frekvencie 20 Hz – 20 kHz vnímame ako zvuk.',
  },
  {
    questionHtml: 'Farba (timbre) zvuku závisí od:',
    options: [
      'Iba od základnej frekvencie',
      'Od intenzity a rýchlosti zvuku',
      'Od zloženia harmonických zložiek (vyšších harmonických)',
      'Od vlnovej dĺžky zvuku v prostredí',
    ],
    correctIndex: 2,
    explanation: '<strong>Farba zvuku</strong> závisí od zastúpenia harmonických zložiek. Rovnakú notu na flaute a husliach odlíšime práve vďaka odlišnému spektru harmonických.',
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

function optionClass(i: number): Record<string, boolean> {
  if (selectedAnswer.value === null) {
    return {
      'border-gray-200 hover:border-sky-400 hover:bg-sky-50 cursor-pointer': true,
    }
  }
  if (i === currentQuestion.value.correctIndex) {
    return { 'border-emerald-500 bg-emerald-50 text-emerald-800': true }
  }
  if (i === selectedAnswer.value) {
    return { 'border-red-400 bg-red-50 text-red-800': true }
  }
  return { 'border-gray-100 text-gray-400 cursor-not-allowed': true }
}

useHead({
  title: 'Zvuk — Fyzika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Zvuk ako pozdĺžne mechanické vlnenie. Rýchlosť zvuku, intenzita a decibely, výška tónu, farba, rezonancia, echo, infra- a ultrazvuk. Pre gymnazistov.',
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
