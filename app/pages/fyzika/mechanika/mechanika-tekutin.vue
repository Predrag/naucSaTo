<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Mechanika tekutín</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">💧</span>
      <h1 class="text-4xl font-extrabold text-cyan-700">Mechanika tekutín</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Tekutiny — kvapaliny aj plyny — sa správajú inak ako pevné látky. Tlačia na všetky strany, prenášajú tlak, nesú telá a prúdia. Porozumenie ich zákonitostiam ti vysvetlí, prečo lodě plávajú, ako funguje hydraulický lis aj prečo letí lietadlo.
    </p>

    <!-- ===== SEKCIA 1: TLAK V TEKUTINÁCH ===== -->
    <section aria-label="Tlak v tekutinách" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-cyan-600 rounded-t-2xl px-6 py-4 -mb-0">Tlak v tekutinách</h2>
      <div class="border border-cyan-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-600 mb-6 leading-relaxed">
          Tlak vyjadruje, akú silu pôsobí tekutina (alebo iné teleso) kolmo na plochu. Čím menšia plocha, tým väčší tlak — preto ihla prepichne papier, ale tupý koniec ceruzky nie.
        </p>

        <!-- Vzorec tlaku -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <h3 class="font-bold text-orange-800 mb-3">Definícia tlaku</h3>
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <div class="text-center flex-1">
              <p class="text-xs text-gray-400 mb-2">Tlak</p>
              <MathFormula display formula="p = \frac{F}{S}" />
            </div>
            <div class="text-sm text-gray-600 flex-1 space-y-1">
              <p><MathFormula formula="p" /> — tlak <span class="text-gray-400">[Pa = N/m²]</span></p>
              <p><MathFormula formula="F" /> — sila pôsobiaca kolmo na plochu <span class="text-gray-400">[N]</span></p>
              <p><MathFormula formula="S" /> — plocha <span class="text-gray-400">[m²]</span></p>
            </div>
          </div>
          <div class="mt-4 bg-orange-100 rounded-lg p-3 text-sm text-orange-900">
            <strong>Príklad:</strong> Sila 200 N pôsobí na plochu 0,01 m². Tlak je
            <MathFormula formula="p = \frac{200}{0{,}01} = 20\,000\ \text{Pa} = 20\ \text{kPa}" />.
          </div>
        </div>

        <!-- Hydrostatický tlak -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <h3 class="font-bold text-orange-800 mb-3">Hydrostatický tlak</h3>
          <p class="text-sm text-gray-600 mb-3">
            V kvapaline rastie tlak s hĺbkou. Na dne nádrže na vás tlačí celý stĺpec kvapaliny nad vami. Tlak závisí od hustoty kvapaliny a hĺbky — <strong>nezávisí od tvaru nádoby</strong>.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 items-center">
            <div class="text-center flex-1">
              <p class="text-xs text-gray-400 mb-2">Hydrostatický tlak</p>
              <MathFormula display formula="p = \rho g h" />
            </div>
            <div class="text-sm text-gray-600 flex-1 space-y-1">
              <p><MathFormula formula="\rho" /> — hustota kvapaliny <span class="text-gray-400">[kg/m³]</span></p>
              <p><MathFormula formula="g" /> — gravitačné zrýchlenie <span class="text-gray-400">[m/s²]</span></p>
              <p><MathFormula formula="h" /> — hĺbka pod hladinou <span class="text-gray-400">[m]</span></p>
            </div>
          </div>
          <div class="mt-4 bg-orange-100 rounded-lg p-3 text-sm text-orange-900">
            <strong>Príklad:</strong> Tlak vody (<MathFormula formula="\rho = 1000\ \text{kg/m}^3" />) vo hĺbke 10 m:
            <MathFormula formula="p = 1000 \cdot 10 \cdot 10 = 100\,000\ \text{Pa} = 100\ \text{kPa}" />.
            To je približne 1 atmosféra.
          </div>
        </div>

        <!-- Pascalov zákon -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-2">Pascalov zákon</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-3">
            Tlak pôsobený na uzavretú kvapalinu sa <strong>prenáša rovnomerne do všetkých smerov</strong> bez straty. To využívajú hydraulické zariadenia.
          </p>
          <div class="text-center mb-3">
            <p class="text-xs text-gray-400 mb-1">Hydraulický zákon — rovnosť tlakov</p>
            <MathFormula display formula="\frac{F_1}{S_1} = \frac{F_2}{S_2}" />
          </div>
          <p class="text-sm text-gray-600">
            Malou silou <MathFormula formula="F_1" /> na malej ploche <MathFormula formula="S_1" /> možno vytvoriť veľkú silu <MathFormula formula="F_2" /> na veľkej ploche <MathFormula formula="S_2" />.
            Princíp hydraulického lisu, bŕzd v automobile aj zdvíhacích plošín.
          </p>
        </div>

      </div>
    </section>

    <!-- ===== SEKCIA 2: ARCHIMEDOV ZÁKON A PLÁVANIE ===== -->
    <section aria-label="Archimedov zákon a plávanie" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-cyan-600 rounded-t-2xl px-6 py-4">Archimedov zákon a plávanie</h2>
      <div class="border border-cyan-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-600 mb-6 leading-relaxed">
          Keď ponoríš predmet do kvapaliny, kvapalina naň pôsobí <strong>nahor smerujúcou vztlakovou silou</strong>. Táto sila sa rovná tiaži kvapaliny, ktorú teleso vytlačilo.
        </p>

        <!-- Archimedov zákon -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <h3 class="font-bold text-orange-800 mb-3">Archimedov zákon</h3>
          <div class="flex flex-col sm:flex-row gap-4 items-center mb-3">
            <div class="text-center flex-1">
              <p class="text-xs text-gray-400 mb-2">Vztlaková sila</p>
              <MathFormula display formula="F_A = \rho_k \cdot g \cdot V" />
            </div>
            <div class="text-sm text-gray-600 flex-1 space-y-1">
              <p><MathFormula formula="F_A" /> — vztlaková sila <span class="text-gray-400">[N]</span></p>
              <p><MathFormula formula="\rho_k" /> — hustota kvapaliny <span class="text-gray-400">[kg/m³]</span></p>
              <p><MathFormula formula="g \approx 10\ \text{m/s}^2" /> — gravitačné zrýchlenie</p>
              <p><MathFormula formula="V" /> — objem ponorenej časti telesa <span class="text-gray-400">[m³]</span></p>
            </div>
          </div>
          <div class="bg-orange-100 rounded-lg p-3 text-sm text-orange-900">
            <strong>Príklad:</strong> Kocka s objemom <MathFormula formula="V = 0{,}002\ \text{m}^3" /> je celá ponorená vo vode (<MathFormula formula="\rho = 1000\ \text{kg/m}^3" />).
            Vztlaková sila: <MathFormula formula="F_A = 1000 \cdot 10 \cdot 0{,}002 = 20\ \text{N}" />.
          </div>
        </div>

        <!-- Podmienky plávania -->
        <div class="mb-5">
          <h3 class="font-bold text-gray-800 mb-3">Podmienky plávania telesa</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="cond in plavanieConditions" :key="cond.label" class="rounded-xl p-4 border text-center" :class="cond.colors">
              <span class="text-3xl block mb-2">{{ cond.icon }}</span>
              <p class="font-bold mb-1">{{ cond.label }}</p>
              <p class="text-xs mb-2">{{ cond.cond }}</p>
              <p class="text-xs text-gray-600">{{ cond.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Hustota a plávanie -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-2">Hustota rozhoduje</h3>
          <p class="text-sm text-gray-700 leading-relaxed">
            Teleso pláva na hladine, ak je jeho priemerná hustota <strong>menšia alebo rovnaká</strong> ako hustota kvapaliny.
            Preto oceánska loď z ocele pláva — jej priemerná hustota (oceľ + vzduch vo vnútri) je menšia ako hustota vody.
          </p>
          <div class="mt-3 text-center">
            <MathFormula display formula="\rho_{\text{teleso}} < \rho_{\text{kvapalina}} \Rightarrow \text{pláva}" />
          </div>
        </div>

      </div>
    </section>

    <!-- ===== SEKCIA 3: PRÚDENIE TEKUTÍN ===== -->
    <section aria-label="Prúdenie tekutín" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-cyan-600 rounded-t-2xl px-6 py-4">Prúdenie tekutín</h2>
      <div class="border border-cyan-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-600 mb-6 leading-relaxed">
          Tekutiny prúdia — pohybujú sa z miest vyššieho tlaku na miesta nižšieho. Skúmame, ako sa mení rýchlosť prúdenia pri zmene prierezu potrubia a ako súvisí rýchlosť s tlakom.
        </p>

        <!-- Rovnica spojitosti -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <h3 class="font-bold text-orange-800 mb-3">Rovnica spojitosti (zákon zachovania hmotnosti)</h3>
          <p class="text-sm text-gray-700 mb-3">
            Koľko tekutiny vteká do potrubia za jednotku času, toľko musí aj vytekať. Ak sa potrubie zužuje, tekutina musí prúdiť <strong>rýchlejšie</strong>.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 items-center mb-3">
            <div class="text-center flex-1">
              <p class="text-xs text-gray-400 mb-2">Rovnica spojitosti</p>
              <MathFormula display formula="S_1 v_1 = S_2 v_2 = \text{konšt.}" />
            </div>
            <div class="text-sm text-gray-600 flex-1 space-y-1">
              <p><MathFormula formula="S_1,\, S_2" /> — prierezdný obsah potrubia <span class="text-gray-400">[m²]</span></p>
              <p><MathFormula formula="v_1,\, v_2" /> — rýchlosť prúdenia <span class="text-gray-400">[m/s]</span></p>
              <p>Súčin <MathFormula formula="S \cdot v" /> je <strong>objemový prietok</strong> <MathFormula formula="Q" /> <span class="text-gray-400">[m³/s]</span></p>
            </div>
          </div>

          <!-- SVG ilustrácia zúženia -->
          <div class="bg-white rounded-lg p-4 flex justify-center">
            <svg viewBox="0 0 320 100" class="w-full max-w-sm" aria-label="Rovnica spojitosti — zúženie potrubia">
              <!-- Potrubie zľava — wide -->
              <rect x="10" y="20" width="100" height="60" rx="4" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.5"/>
              <!-- Zúženie (trojuholník napravo) -->
              <polygon points="110,20 160,35 160,65 110,80" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.5"/>
              <!-- Potrubie zpravo — narrow -->
              <rect x="160" y="35" width="130" height="30" rx="4" fill="#FED7AA" stroke="#EA580C" stroke-width="1.5"/>
              <!-- Šípky -->
              <defs>
                <marker id="arr-blue" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#0284C7"/></marker>
                <marker id="arr-orange" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="#EA580C"/></marker>
              </defs>
              <line x1="30" y1="50" x2="95" y2="50" stroke="#0284C7" stroke-width="2.5" marker-end="url(#arr-blue)"/>
              <line x1="180" y1="50" x2="270" y2="50" stroke="#EA580C" stroke-width="2.5" marker-end="url(#arr-orange)"/>
              <!-- Popisky -->
              <text x="55" y="43" font-size="10" fill="#0369A1" text-anchor="middle">v₁ (pomalšie)</text>
              <text x="55" y="88" font-size="10" fill="#0369A1" text-anchor="middle">S₁ (väčší prierez)</text>
              <text x="225" y="43" font-size="10" fill="#C2410C" text-anchor="middle">v₂ (rýchlejšie)</text>
              <text x="225" y="90" font-size="10" fill="#C2410C" text-anchor="middle">S₂ (menší prierez)</text>
            </svg>
          </div>

          <div class="mt-4 bg-orange-100 rounded-lg p-3 text-sm text-orange-900">
            <strong>Príklad:</strong> Potrubie sa zúži z priemeru 10 cm (<MathFormula formula="S_1 = 78{,}5\ \text{cm}^2" />) na 5 cm (<MathFormula formula="S_2 = 19{,}6\ \text{cm}^2" />).
            Ak voda vteká rýchlosťou <MathFormula formula="v_1 = 1\ \text{m/s}" />, v zúžení prúdi
            <MathFormula formula="v_2 = \frac{S_1 v_1}{S_2} = \frac{78{,}5 \cdot 1}{19{,}6} \approx 4\ \text{m/s}" />.
          </div>
        </div>

        <!-- Bernoulliho rovnica -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <h3 class="font-bold text-orange-800 mb-3">Bernoulliho rovnica (kvalitatívne)</h3>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">
            Bernoulliho rovnica je zákon zachovania energie pre tečúcu kvapalinu. Hovorí, že súčet
            <strong>dynamického tlaku</strong> (daného rýchlosťou), <strong>statického tlaku</strong> a <strong>hydrostatického tlaku</strong>
            je v každom mieste prúdnice rovnaký.
          </p>
          <div class="text-center mb-3">
            <p class="text-xs text-gray-400 mb-1">Bernoulliho rovnica (pre horizontálne prúdenie)</p>
            <MathFormula display formula="p + \tfrac{1}{2}\rho v^2 = \text{konštanta}" />
          </div>
          <div class="bg-white border border-orange-100 rounded-lg p-3 text-sm text-gray-700">
            <p class="font-semibold text-gray-800 mb-1">Kľúčový dôsledok:</p>
            <p>Kde tekutina prúdi <strong>rýchlejšie, tam je nižší statický tlak</strong> — a naopak.
            To vysvetľuje vztlakovú silu krídla lietadla (vzduch nad krídlom prúdi rýchlejšie = nižší tlak zhora),
            fungovanie rozprašovača parfumu aj efekt rozbehnutého futbalového lopty.</p>
          </div>
        </div>

        <!-- Hydraulické zariadenia -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Hydraulické zariadenia</h3>
          <p class="text-sm text-gray-700 mb-4">
            Hydraulické zariadenia využívajú Pascalov zákon na prenos a zosilnenie sily pomocou kvapaliny pod tlakom.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="device in hydraulicDevices" :key="device.name" class="bg-white rounded-xl p-3 border border-blue-100">
              <span class="text-2xl">{{ device.icon }}</span>
              <p class="font-semibold text-gray-900 text-sm mt-1">{{ device.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ device.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== ZHRNUTIE ===== -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Zhrnutie — kľúčové poznatky</h2>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Tlak definujeme ako <MathFormula formula="p = F/S" /> — sila kolmo na plochu; jednotka pascal [Pa].</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Hydrostatický tlak závisí od hĺbky a hustoty kvapaliny: <MathFormula formula="p = \rho g h" />.</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Pascalov zákon: tlak pôsobený na uzavretú kvapalinu sa prenáša rovnomerne do všetkých smerov.</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Archimedov zákon: vztlaková sila sa rovná tiaži vytlačenej kvapaliny: <MathFormula formula="F_A = \rho_k g V" />.</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Teleso pláva, ak <MathFormula formula="F_A = G" />; klesá, ak <MathFormula formula="F_A < G" />; stúpa, ak <MathFormula formula="F_A > G" />.</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Rovnica spojitosti: <MathFormula formula="S_1 v_1 = S_2 v_2" /> — v zúžení prúdi kvapalina rýchlejšie.</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Bernoulliho zákon: kde je väčšia rýchlosť, tam je nižší statický tlak (a naopak).</span></li>
        <li class="flex gap-2"><span class="text-cyan-600 font-bold mt-0.5">•</span><span>Hydraulické zariadenia (lis, brzdový systém) využívajú Pascalov zákon na zosilnenie sily.</span></li>
      </ul>
    </div>

    <!-- ===== KVÍZ ===== -->
    <section aria-label="Kvíz — Mechanika tekutín" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Kvíz: Mechanika tekutín</h2>

      <Transition name="fade" mode="out-in">

        <!-- Otázky -->
        <div v-if="!quizFinished" :key="'question-' + currentQ">

          <!-- Progress -->
          <div data-testid="quiz-progress" class="flex items-center gap-3 mb-5">
            <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} / {{ quiz.length }}</span>
            <div class="flex-1 bg-gray-200 rounded-full h-2">
              <div class="bg-cyan-500 h-2 rounded-full transition-all duration-300" :style="{ width: ((currentQ + 1) / quiz.length * 100) + '%' }"></div>
            </div>
          </div>

          <!-- Otázka -->
          <div data-testid="quiz-question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
            <p class="text-lg font-semibold text-gray-900 leading-relaxed" v-html="currentQuestion.question"></p>
          </div>

          <!-- Možnosti -->
          <div class="space-y-3 mb-4">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              type="button"
              :data-testid="'quiz-option-' + i"
              class="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium text-gray-800"
              :class="optionClass(i)"
              @click="selectAnswer(i)"
              v-html="option"
            ></button>
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div v-if="selectedAnswer !== null" data-testid="quiz-feedback" class="rounded-xl p-4 mb-4 text-sm leading-relaxed"
              :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'">
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
              class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </div>

        <!-- Výsledok -->
        <div v-else key="result" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <div data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-2">
            {{ quizScore }} / {{ quiz.length }}
          </div>
          <p class="text-gray-600 mb-6">{{ scoreMessage }}</p>
          <button
            type="button"
            data-testid="quiz-reset-btn"
            class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>

      </Transition>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import katex from 'katex';

function km(f) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' });
}

// --- Dáta sekcií ---

const plavanieConditions = [
  {
    icon: '⬇️',
    label: 'Klesá',
    cond: 'FA < G',
    desc: 'Teleso je hustejšie ako kvapalina — klesá na dno.',
    colors: 'bg-red-50 border-red-200 text-red-900',
  },
  {
    icon: '🟡',
    label: 'Pláva (na hladine)',
    cond: 'FA = G',
    desc: 'Teleso je čiastočne ponorené tak, aby vztlaková sila vyrovnala tiaž.',
    colors: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  },
  {
    icon: '⬆️',
    label: 'Stúpa',
    cond: 'FA > G',
    desc: 'Celkovo ponorené teleso je ľahšie ako kvapalina — vypláva nahor.',
    colors: 'bg-blue-50 border-blue-200 text-blue-900',
  },
];

const hydraulicDevices = [
  { icon: '🔧', name: 'Hydraulický lis', desc: 'Malou silou na malom pieste vyvoláva veľkú silu na veľkom pieste. Lisovanie, lisovacie stroje.' },
  { icon: '🚗', name: 'Hydraulické brzdy', desc: 'Sila z pedálu brzdenia sa prenáša kvapalinou na bŕzd. platničky všetkých kolies súčasne.' },
  { icon: '🏗️', name: 'Hydraulický zdvihák', desc: 'Zdvíhanie ťažkých bremien (autá, stroje) pomocou stlačenej hydraulickej kvapaliny.' },
  { icon: '✈️', name: 'Hydraulické ovládanie letadiel', desc: 'Kormidlové plochy, pristávacie podvozky a klapky sú ovládané hydraulicky.' },
];

// --- Kvíz ---

const quiz = [
  {
    question: `Aký tlak pôsobí sila 600 N na plochu 0,03 m²?`,
    options: ['10 000 Pa', '20 000 Pa', '18 000 Pa', '0,05 Pa'],
    correctIndex: 1,
    explanation: `Tlak ${km('p = \\frac{F}{S} = \\frac{600}{0{,}03} = 20\\,000\\ \\text{Pa}')}. Väčšia plocha → menší tlak, menšia plocha → väčší tlak.`,
  },
  {
    question: `Aký je hydrostatický tlak vody vo hĺbke 5 m? (hustota vody ρ = 1 000 kg/m³, g = 10 m/s²)`,
    options: ['500 Pa', '5 000 Pa', '50 000 Pa', '500 000 Pa'],
    correctIndex: 2,
    explanation: `${km('p = \\rho g h = 1000 \\cdot 10 \\cdot 5 = 50\\,000\\ \\text{Pa}')}. Tlak rastie lineárne s hĺbkou.`,
  },
  {
    question: `Čo hovorí Pascalov zákon?`,
    options: [
      'Vztlaková sila sa rovná tiaži vytlačenej kvapaliny.',
      'Tlak pôsobený na uzavretú kvapalinu sa prenáša rovnomerne do všetkých smerov.',
      'Rýchlosť prúdenia klesá so zväčšením prierezu potrubia.',
      'Teleso pláva, ak je jeho hustota menšia ako hustota kvapaliny.',
    ],
    correctIndex: 1,
    explanation: `Pascalov zákon popisuje prenos tlaku v uzavretých tekutinách. Využíva ho hydraulický lis: ${km('\\frac{F_1}{S_1} = \\frac{F_2}{S_2}')}.`,
  },
  {
    question: `Teleso o objeme 0,001 m³ je celé ponorené vo vode (ρ = 1 000 kg/m³). Aká veľká je vztlaková sila?`,
    options: ['1 N', '10 N', '100 N', '1 000 N'],
    correctIndex: 1,
    explanation: `${km('F_A = \\rho_k \\cdot g \\cdot V = 1000 \\cdot 10 \\cdot 0{,}001 = 10\\ \\text{N}')}. Teleso vytlačilo 1 liter vody, ktorého tiaž je práve 10 N.`,
  },
  {
    question: `Voda prúdi potrubím s prierezom S₁ = 0,04 m² rýchlosťou v₁ = 2 m/s. Prierez sa zúži na S₂ = 0,01 m². Aká bude rýchlosť v²?`,
    options: ['0,5 m/s', '2 m/s', '4 m/s', '8 m/s'],
    correctIndex: 3,
    explanation: `Rovnica spojitosti: ${km('S_1 v_1 = S_2 v_2 \\Rightarrow v_2 = \\frac{S_1 v_1}{S_2} = \\frac{0{,}04 \\cdot 2}{0{,}01} = 8\\ \\text{m/s}')}. Prierez sa zmenšil 4-krát, rýchlosť sa zväčšila 4-krát.`,
  },
  {
    question: `Podľa Bernoulliho rovnice: kde tekutina prúdi rýchlejšie, tam je statický tlak...`,
    options: [
      'väčší',
      'rovnaký',
      'menší',
      'závisí od hustoty tekutiny',
    ],
    correctIndex: 2,
    explanation: `Bernoulliho zákon: ${km('p + \\frac{1}{2}\\rho v^2 = \\text{konšt.}')} — ak rastie ${km('v')}, musí klesnúť ${km('p')}. Práve to vysvetľuje vztlakovú silu krídla lietadla.`,
  },
];

const currentQ = ref(0);
const selectedAnswer = ref(null);
const quizScore = ref(0);
const quizFinished = ref(false);

const currentQuestion = computed(() => quiz[currentQ.value]);

function selectAnswer(i) {
  if (selectedAnswer.value !== null) return;
  selectedAnswer.value = i;
  if (i === currentQuestion.value.correctIndex) quizScore.value++;
}

function nextQuestion() {
  if (currentQ.value < quiz.length - 1) {
    currentQ.value++;
    selectedAnswer.value = null;
  } else {
    quizFinished.value = true;
  }
}

function resetQuiz() {
  currentQ.value = 0;
  selectedAnswer.value = null;
  quizScore.value = 0;
  quizFinished.value = false;
}

const scoreEmoji = computed(() => {
  const r = quizScore.value / quiz.length;
  return r === 1 ? '🏆' : r >= 0.7 ? '🎉' : r >= 0.4 ? '💪' : '📚';
});

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length;
  return r === 1
    ? 'Perfektné! Zvládol si všetky otázky!'
    : r >= 0.7
    ? 'Výborne! Látku ovládaš dobre.'
    : r >= 0.4
    ? 'Nie je to zlé, ale oplatí sa zopakovať.'
    : 'Prejdi si tému ešte raz a skús to znova.';
});

function optionClass(i) {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-cyan-400 hover:bg-cyan-50 cursor-pointer';
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-emerald-500 bg-emerald-50 text-emerald-900';
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-900';
  }
  return 'border-gray-200 bg-white opacity-50';
}
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
