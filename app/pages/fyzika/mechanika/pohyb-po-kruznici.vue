<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Pohyb po kružnici</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔄</span>
      <h1 class="text-4xl font-extrabold text-purple-700">Pohyb po kružnici</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Keď sa teleso pohybuje po kruhovej dráhe, mení stále smer svojej rýchlosti — aj keď je jej veľkosť konštantná.
      Toto zdanlivo jednoduché zariadenie opisuje pohyb satelitov, kolotočov aj áut v zákrutách.
    </p>

    <!-- Section 1: Perióda, frekvencia, uhlová rýchlosť, obvodová rýchlosť -->
    <section aria-label="Perióda, frekvencia a rýchlosti pri pohybe po kružnici" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Perióda, frekvencia a rýchlosti</h2>
      <p class="text-gray-500 mb-5">
        Rovnomerný pohyb po kružnici je pohyb, pri ktorom teleso opisuje kružnicu so stálou veľkosťou rýchlosti.
        Smer rýchlosti sa však nepretržite mení — vždy smeruje <strong>dotyčnicovo</strong> ku kružnici.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Perióda -->
        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">⏱️</span>
            <h3 class="text-xl font-bold text-purple-800">Perióda T</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Perióda je čas, za ktorý teleso vykoná <strong>jeden celý obeh</strong> po kružnici.
            Meria sa v sekundách (s).
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Jednotka: s (sekunda)</p>
            <MathFormula display formula="T = \frac{1}{f}" />
          </div>
        </div>

        <!-- Frekvencia -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔁</span>
            <h3 class="text-xl font-bold text-blue-800">Frekvencia f</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">
            Frekvencia udáva počet <strong>obehov za sekundu</strong>.
            Čím väčšia frekvencia, tým rýchlejší pohyb po kružnici.
          </p>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">Jednotka: Hz (hertz)</p>
            <MathFormula display formula="f = \frac{1}{T}" />
          </div>
        </div>

      </div>

      <!-- Uhlová rýchlosť a obvodová rýchlosť -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Uhlová rýchlosť ω</h3>
          <p class="text-sm text-gray-600 mb-4">
            Uhlová rýchlosť vyjadruje, o aký uhol sa polomer otočí za jednotku času.
            Za jeden celý obeh (2π radiánov) ubehne čas T.
          </p>
          <div class="space-y-3">
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Základný vzorec</p>
              <MathFormula display formula="\omega = \frac{2\pi}{T} = 2\pi f" />
            </div>
            <div class="bg-gray-50 rounded-xl p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Jednotka</p>
              <MathFormula formula="\text{rad/s}" />
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Obvodová rýchlosť v</h3>
          <p class="text-sm text-gray-600 mb-4">
            Obvodová (tečná) rýchlosť je veľkosť rýchlosti telesa pohybujúceho sa po kružnici.
            Je priamo úmerná uhlovej rýchlosti a polomeru.
          </p>
          <div class="space-y-3">
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Základný vzorec</p>
              <MathFormula display formula="v = \omega r = \frac{2\pi r}{T}" />
            </div>
            <div class="bg-gray-50 rounded-xl p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Jednotka</p>
              <MathFormula formula="\text{m/s}" />
            </div>
          </div>
        </div>

      </div>

      <!-- Príklad 1 -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — hodinová ručička</p>
        <div class="text-sm text-gray-700 space-y-1">
          <p>Hodinová ručička dlhá <MathFormula formula="r = 0{,}1\;\text{m}" /> vykoná jeden obeh za <MathFormula formula="T = 3600\;\text{s}" />.</p>
          <p>Frekvencia: <MathFormula formula="f = \frac{1}{3600} \approx 2{,}78 \times 10^{-4}\;\text{Hz}" /></p>
          <p>Uhlová rýchlosť: <MathFormula formula="\omega = \frac{2\pi}{3600} \approx 1{,}75 \times 10^{-3}\;\text{rad/s}" /></p>
          <p>Obvodová rýchlosť: <MathFormula formula="v = \omega r = 1{,}75 \times 10^{-3} \cdot 0{,}1 \approx 1{,}75 \times 10^{-4}\;\text{m/s}" /></p>
        </div>
      </div>

      <!-- Prehľadná tabuľka veličín -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200 mt-5">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-purple-600 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Veličina</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Vzorec</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in quantitiesTable" :key="row.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.name }}</td>
              <td class="px-5 py-3 text-purple-700 font-semibold">{{ row.symbol }}</td>
              <td class="px-5 py-3 text-gray-600">{{ row.unit }}</td>
              <td class="px-5 py-3 text-gray-700">{{ row.formula }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 2: Dostredivé zrýchlenie -->
    <section aria-label="Dostredivé zrýchlenie" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Dostredivé zrýchlenie</h2>
      <p class="text-gray-500 mb-5">
        Hoci sa veľkosť rýchlosti nemení, smer rýchlosti sa stále mení — to znamená, že teleso má zrýchlenie.
        Toto zrýchlenie vždy mieri <strong>do stredu kružnice</strong> — preto sa volá dostredivé (centripetálne).
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Diagram -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center">
          <svg viewBox="0 0 220 220" class="w-full max-w-xs" aria-label="Diagram dostredivého zrýchlenia — šípky znázorňujú rýchlosť a dostredivé zrýchlenie">
            <defs>
              <marker id="arr-v1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#8B5CF6"/>
              </marker>
              <marker id="arr-v2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#8B5CF6"/>
              </marker>
              <marker id="arr-a1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#EF4444"/>
              </marker>
              <marker id="arr-a2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#EF4444"/>
              </marker>
            </defs>
            <!-- Kružnica -->
            <circle cx="110" cy="110" r="75" fill="none" stroke="#E5E7EB" stroke-width="2" stroke-dasharray="6,3"/>
            <!-- Stred -->
            <circle cx="110" cy="110" r="4" fill="#6B7280"/>
            <text x="115" y="107" font-size="11" fill="#6B7280" font-weight="bold">O</text>
            <!-- Bod hore (0°) -->
            <circle cx="110" cy="35" r="6" fill="#8B5CF6"/>
            <!-- v hore → doprava -->
            <line x1="110" y1="35" x2="160" y2="35" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arr-v1)"/>
            <text x="163" y="38" font-size="11" fill="#8B5CF6" font-weight="bold">v</text>
            <!-- a hore → dole (do stredu) -->
            <line x1="110" y1="35" x2="110" y2="78" stroke="#EF4444" stroke-width="2.5" marker-end="url(#arr-a1)"/>
            <text x="115" y="65" font-size="11" fill="#EF4444" font-weight="bold">a</text>
            <!-- Bod vpravo (90°) -->
            <circle cx="185" cy="110" r="6" fill="#8B5CF6"/>
            <!-- v vpravo → dole -->
            <line x1="185" y1="110" x2="185" y2="160" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arr-v2)"/>
            <text x="188" y="150" font-size="11" fill="#8B5CF6" font-weight="bold">v</text>
            <!-- a vpravo → doľava (do stredu) -->
            <line x1="185" y1="110" x2="142" y2="110" stroke="#EF4444" stroke-width="2.5" marker-end="url(#arr-a2)"/>
            <text x="155" y="106" font-size="11" fill="#EF4444" font-weight="bold">a</text>
            <!-- Polomer r -->
            <line x1="110" y1="110" x2="110" y2="38" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text x="78" y="78" font-size="11" fill="#9CA3AF" font-style="italic">r</text>
          </svg>
          <p class="text-xs text-gray-400 text-center mt-2">Rýchlosť <span class="text-purple-600 font-bold">v</span> je dotyčnicová, zrýchlenie <span class="text-red-500 font-bold">a</span> smeruje do stredu.</p>
        </div>

        <!-- Vzorce -->
        <div class="space-y-4">
          <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <p class="text-sm font-semibold text-orange-800 mb-3">Dostredivé zrýchlenie</p>
            <div class="space-y-3">
              <div class="bg-white rounded-xl p-3 text-center">
                <p class="text-xs text-gray-400 mb-1">Pomocou obvodovej rýchlosti</p>
                <MathFormula display formula="a = \frac{v^2}{r}" />
              </div>
              <div class="bg-white rounded-xl p-3 text-center">
                <p class="text-xs text-gray-400 mb-1">Pomocou uhlovej rýchlosti</p>
                <MathFormula display formula="a = \omega^2 r" />
              </div>
              <div class="bg-white rounded-xl p-3 text-center">
                <p class="text-xs text-gray-400 mb-1">Jednotka</p>
                <MathFormula formula="\text{m/s}^2" />
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <strong>Dôležité:</strong> Dostredivé zrýchlenie smeruje vždy kolmo na rýchlosť, teda do stredu kružnice.
            Nemení veľkosť rýchlosti, iba jej smer.
          </div>
        </div>

      </div>

      <!-- Príklad 2 -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — umelý satelit</p>
        <div class="text-sm text-gray-700 space-y-1">
          <p>Satelit obiehajúci Zem vo výške, kde je polomer obežnej dráhy <MathFormula formula="r = 6\,800\;\text{km} = 6{,}8 \times 10^6\;\text{m}" /> a perióda <MathFormula formula="T = 5\,580\;\text{s}" />.</p>
          <p>Obvodová rýchlosť: <MathFormula formula="v = \frac{2\pi r}{T} = \frac{2\pi \cdot 6{,}8 \times 10^6}{5580} \approx 7660\;\text{m/s}" /></p>
          <p>Dostredivé zrýchlenie: <MathFormula formula="a = \frac{v^2}{r} = \frac{7660^2}{6{,}8 \times 10^6} \approx 8{,}6\;\text{m/s}^2" /></p>
          <p class="text-gray-500 text-xs mt-2">Toto zrýchlenie je spôsobené gravitáciou Zeme — gravitácia tu zohráva úlohu dostredivej sily.</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Dostredivá sila a príklady -->
    <section aria-label="Dostredivá sila a príklady z praxe" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Dostredivá sila a príklady z praxe</h2>
      <p class="text-gray-500 mb-5">
        Dostredivé zrýchlenie musí byť spôsobené nejakou silou — podľa 2. Newtonovho zákona.
        Táto sila sa volá <strong>dostredivá sila</strong> a vždy smeruje do stredu kružnice.
      </p>

      <!-- Vzorce dostredivej sily -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-400 mb-2">Základný vzorec</p>
          <MathFormula display formula="F = ma = \frac{mv^2}{r}" />
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-400 mb-2">Pomocou uhlovej rýchlosti</p>
          <MathFormula display formula="F = m\omega^2 r" />
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-400 mb-2">Pomocou periódy</p>
          <MathFormula display formula="F = \frac{4\pi^2 m r}{T^2}" />
        </div>
      </div>

      <!-- Príklady z praxe -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Auto v zákrute -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🚗</span>
            <h3 class="text-lg font-bold text-gray-900">Auto v zákrute</h3>
          </div>
          <p class="text-sm text-gray-600 mb-4">
            Keď auto prechádza zákrutou, potrebuje dostredivú silu smerujúcu do stredu oblouku.
            Túto silu poskytuje <strong>trenie pneumatík o vozovku</strong>.
          </p>
          <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
            <p class="font-semibold text-gray-900 mb-2">Zadanie: m = 1 200 kg, v = 25 m/s, r = 150 m</p>
            <p>
              <MathFormula formula="F = \frac{mv^2}{r} = \frac{1200 \cdot 25^2}{150} = \frac{1200 \cdot 625}{150} = \mathbf{5000\;\text{N}}" />
            </p>
            <p class="text-xs text-gray-500 mt-2">
              Ak je trenie nedostatočné (mokrá vozovka, vysoká rýchlosť), auto vyletí z cesty.
              Preto závisí bezpečná rýchlosť od polomeru zákruty.
            </p>
          </div>
        </div>

        <!-- Satelit -->
        <div class="bg-white border border-gray-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🛰️</span>
            <h3 class="text-lg font-bold text-gray-900">Satelit na obežnej dráhe</h3>
          </div>
          <p class="text-sm text-gray-600 mb-4">
            Pre satelit zabezpečuje dostredivú silu <strong>gravitácia</strong> planéty.
            Satelit „padá" stále ku planéte, ale zároveň sa pohybuje dopredu — obieha.
          </p>
          <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
            <p class="font-semibold text-gray-900 mb-2">Podmienka obehu:</p>
            <p>
              <MathFormula display formula="\frac{mv^2}{r} = \frac{GmM}{r^2}" />
            </p>
            <p>
              <MathFormula display formula="v = \sqrt{\frac{GM}{r}}" />
            </p>
            <p class="text-xs text-gray-500 mt-2">
              Čím vyššia obežná dráha, tým menšia potrebná rýchlosť a dlhšia perióda.
            </p>
          </div>
        </div>

      </div>

      <!-- Dostredivá vs. odstredivá sila -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5">
        <h3 class="font-bold text-purple-900 mb-2">Dostredivá vs. zdanlivá odstredivá sila</h3>
        <div class="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Dostredivá sila</strong> je skutočná sila smerujúca do stredu kružnice (trenie, gravitácia, napätie v lane...).
            Existuje v každej vzťažnej sústave.
          </p>
          <p>
            <strong>Odstredivá sila</strong> je <em>zdanlivá</em> (fiktívna) sila — pociťujeme ju vo vnútri rotujúcej sústavy (napr. v otáčajúcom sa aute).
            V inerciálnej vzťažnej sústave neexistuje — je to len dôsledok zotrvačnosti.
          </p>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Perióda T je čas jedného obehu. Frekvencia <MathFormula formula="f = 1/T" /> udáva počet obehov za sekundu.</li>
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Uhlová rýchlosť <MathFormula formula="\omega = 2\pi f = 2\pi/T" /> [rad/s] opisuje uhlovú zmenu za čas.</li>
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Obvodová rýchlosť <MathFormula formula="v = \omega r = 2\pi r/T" /> [m/s] je veľkosť rýchlosti pohybu po kružnici.</li>
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Dostredivé zrýchlenie <MathFormula formula="a = v^2/r = \omega^2 r" /> smeruje vždy do stredu kružnice.</li>
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Dostredivá sila <MathFormula formula="F = mv^2/r" /> spôsobuje toto zrýchlenie (trenie, gravitácia, napätie lana...).</li>
        <li class="flex gap-2"><span class="text-purple-500 font-bold">✓</span> Príklady: satelit (gravitácia = dostredivá sila), auto v zákrute (trenie = dostredivá sila).</li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — pohyb po kružnici">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-purple-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-purple-500 h-1.5 rounded-full transition-all duration-300"
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
                ? 'border-gray-200 text-gray-700 hover:border-purple-400 hover:bg-purple-50 cursor-pointer'
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
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
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

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ── Statický obsah ──────────────────────────────────────────────────────────

const quantitiesTable = [
  { name: 'Perióda', symbol: 'T', unit: 's', formula: 'T = 1/f' },
  { name: 'Frekvencia', symbol: 'f', unit: 'Hz', formula: 'f = 1/T' },
  { name: 'Uhlová rýchlosť', symbol: 'ω', unit: 'rad/s', formula: 'ω = 2π/T = 2πf' },
  { name: 'Obvodová rýchlosť', symbol: 'v', unit: 'm/s', formula: 'v = ωr = 2πr/T' },
  { name: 'Dostredivé zrýchlenie', symbol: 'a', unit: 'm/s²', formula: 'a = v²/r = ω²r' },
  { name: 'Dostredivá sila', symbol: 'F', unit: 'N', formula: 'F = mv²/r = mω²r' },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo vyjadruje perióda T pri rovnomernom pohybe po kružnici?',
    options: [
      'Počet obehov za sekundu',
      'Uhol, ktorý prejde teleso za sekundu',
      'Čas jedného celého obehu',
      'Veľkosť rýchlosti telesa',
    ],
    correctIndex: 2,
    explanation: 'Perióda T je čas potrebný na jeden celý obeh po kružnici. Meria sa v sekundách. Počet obehov za sekundu vyjadruje frekvencia f = 1/T.',
  },
  {
    question: 'Teleso obieha po kružnici s periódou T = 0,5 s. Aká je jeho frekvencia?',
    options: ['0,5 Hz', '1 Hz', '2 Hz', '4 Hz'],
    correctIndex: 2,
    explanation: `${km('f = \\frac{1}{T} = \\frac{1}{0{,}5} = 2\\;\\text{Hz}')}. Frekvencia je prevrátená hodnota periódy.`,
  },
  {
    question: 'Aká je uhlová rýchlosť telesa s frekvenciou f = 3 Hz?',
    options: ['3 rad/s', '6π rad/s', '3π rad/s', '6 rad/s'],
    correctIndex: 1,
    explanation: `${km('\\omega = 2\\pi f = 2\\pi \\cdot 3 = 6\\pi \\approx 18{,}85\\;\\text{rad/s}')}. Uhlová rýchlosť je vždy ${km('2\\pi')} krát väčšia ako frekvencia.`,
  },
  {
    question: 'Teleso sa pohybuje po kružnici s polomerom r = 4 m a uhlovou rýchlosťou ω = 5 rad/s. Aká je jeho obvodová rýchlosť?',
    options: ['0,8 m/s', '9 m/s', '20 m/s', '1,25 m/s'],
    correctIndex: 2,
    explanation: `${km('v = \\omega r = 5 \\cdot 4 = 20\\;\\text{m/s}')}. Obvodová rýchlosť je priamo úmerná uhlovej rýchlosti aj polomeru kružnice.`,
  },
  {
    question: 'Auto s hmotnosťou m = 1 000 kg prechádza zákrutou s polomerom r = 80 m rýchlosťou v = 20 m/s. Aká dostredivá sila je potrebná?',
    options: ['250 N', '5 000 N', '1 600 N', '400 N'],
    correctIndex: 1,
    explanation: `${km('F = \\frac{mv^2}{r} = \\frac{1000 \\cdot 20^2}{80} = \\frac{1000 \\cdot 400}{80} = 5000\\;\\text{N}')}. Túto silu poskytuje trenie pneumatík o vozovku.`,
  },
  {
    question: 'Čo je zdrojom dostredivej sily pre satelit obiehajúci Zem?',
    options: [
      'Atmosférický odpor',
      'Gravitačná sila Zeme',
      'Odstredivá sila',
      'Magnetické pole Zeme',
    ],
    correctIndex: 1,
    explanation: 'Pre satelit na obežnej dráhe zabezpečuje dostredivú silu gravitačná príťažlivosť Zeme. Satelit stále "padá" ku Zemi, ale zároveň sa pohybuje dopredu — výsledkom je kruhová obežná dráha.',
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
