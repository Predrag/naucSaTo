<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Trenie a naklonená rovina</span>
    </nav>

    <!-- Header -->
    <div class="bg-slate-600 text-white rounded-2xl px-8 py-8 mb-10 flex items-center gap-5">
      <span class="text-5xl select-none">⛰️</span>
      <div>
        <h1 class="text-3xl font-extrabold mb-1">Trenie a naklonená rovina</h1>
        <p class="text-slate-300 text-base leading-relaxed">
          Prečo sa predmet zastaví, hoci po ňom tlačíme? Ako rýchlo sa auto pohybuje po svahu? Trenie a rozklad gravitácie sú odpoveďou.
        </p>
      </div>
    </div>

    <!-- Section 1: Statické trenie -->
    <section aria-label="Statické trenie" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-t-2xl px-6 py-4">Statické trenie</h2>
      <div class="border border-blue-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          <strong>Statické trenie</strong> je sila, ktorá bráni pohybu telesa, kým je v pokoji. Pôsobí vždy v smere opačnom
          k sile, ktorá by teleso mohla uviesť do pohybu. Jej veľkosť sa automaticky prispôsobuje vonkajšej sile —
          až do dosiahnutia maximálnej hodnoty.
        </p>

        <!-- Podmienka statického trenia -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5 text-center">
          <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Podmienka rovnováhy pri statickom trení</p>
          <MathFormula display formula="F_t \leq \mu_s \cdot N" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="F_t" /> — sila trenia</p>
              <p class="text-xs text-gray-400 mt-1">jednotka: N (newton)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="\mu_s" /> — koeficient statického trenia</p>
              <p class="text-xs text-gray-400 mt-1">bezrozmerné číslo (0 – 1+)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="N" /> — normálová sila</p>
              <p class="text-xs text-gray-400 mt-1">kolmá reakcia podložky</p>
            </div>
          </div>
        </div>

        <p class="text-gray-700 text-sm leading-relaxed mb-5">
          Normálová sila <MathFormula formula="N" /> je kolmá sila, ktorou podložka pôsobí na teleso — je rovnaká ako tiaž telesa
          na vodorovnej ploche: <MathFormula formula="N = mg" />.
          Maximálna sila statického trenia (<MathFormula formula="F_{t,\max} = \mu_s \cdot N" />) sa dosiahne tesne pred tým,
          ako sa teleso začne pohybovať.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Teleso v pokoji</p>
            <p class="text-sm text-gray-700">
              Kým vonkajšia sila <MathFormula formula="F" /> neprekročí maximum
              <MathFormula formula="\mu_s \cdot N" />, platí <MathFormula formula="F_t = F" />.
              Teleso zostáva v pokoji.
            </p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-red-800 mb-2">Teleso sa pohybuje</p>
            <p class="text-sm text-gray-700">
              Ak <MathFormula formula="F > \mu_s \cdot N" />, statické trenie je prekonané
              a teleso sa rozbehne. Nastupuje kinetické trenie.
            </p>
          </div>
        </div>

        <!-- Príklad -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — skriňa na podlahe</p>
          <div class="text-sm text-gray-700 space-y-2">
            <p>Skriňa hmotnosti <MathFormula formula="m = 80\;\text{kg}" /> stojí na drevenej podlahe
              (<MathFormula formula="\mu_s = 0{,}4" />). Aká maximálna horizontálna sila ju ešte neuvedie do pohybu?</p>
            <p><MathFormula formula="N = mg = 80 \cdot 10 = 800\;\text{N}" /></p>
            <p><MathFormula formula="F_{t,\max} = \mu_s \cdot N = 0{,}4 \cdot 800 = \mathbf{320\;\text{N}}" /></p>
            <p class="text-gray-500 text-xs mt-1">Silou do 320 N skriňu nepohneme.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 2: Dynamické (kinetické) trenie -->
    <section aria-label="Dynamické trenie" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-t-2xl px-6 py-4">Dynamické (kinetické) trenie</h2>
      <div class="border border-blue-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Akonáhle sa teleso rozbehne, statické trenie vystrieda <strong>dynamické (kinetické) trenie</strong>.
          Na rozdiel od statického trenia má kinetické trenie stálu veľkosť — nezávisí od rýchlosti pohybu ani od veľkosti
          kontaktnej plochy, ale len od normálovej sily a druhu povrchov.
        </p>

        <!-- Vzorec kinetického trenia -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5 text-center">
          <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Kinetická sila trenia</p>
          <MathFormula display formula="F_t = \mu_k \cdot N" />
          <p class="text-sm text-gray-600 mt-3">
            kde <MathFormula formula="\mu_k" /> je koeficient kinetického (dynamického) trenia.
            Platí vždy <MathFormula formula="\mu_k < \mu_s" />.
          </p>
        </div>

        <!-- Tabuľka koeficientov -->
        <p class="text-sm font-semibold text-gray-900 mb-3">Typické hodnoty koeficientov trenia</p>
        <div class="overflow-x-auto rounded-xl border border-gray-200 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-slate-600 text-white">
                <th scope="col" class="text-left px-5 py-3 font-semibold">Materiály (povrchy)</th>
                <th scope="col" class="text-center px-5 py-3 font-semibold"><MathFormula formula="\mu_s" /> (statické)</th>
                <th scope="col" class="text-center px-5 py-3 font-semibold"><MathFormula formula="\mu_k" /> (kinetické)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in frictionTable" :key="row.materials" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-5 py-3 font-medium text-gray-800">{{ row.materials }}</td>
                <td class="px-5 py-3 text-center text-blue-700 font-mono">{{ row.muS }}</td>
                <td class="px-5 py-3 text-center text-orange-600 font-mono">{{ row.muK }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-slate-800 mb-2">Prečo <MathFormula formula="\mu_k < \mu_s" />?</p>
            <p class="text-sm text-gray-700">
              V pokoji sú povrchy viac "zacvikané" do seba — vznikajú väzby medzi nerovnosťami.
              Počas pohybu sa tieto väzby nestíhajú vytvárať, preto je odpor menší.
            </p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-amber-800 mb-2">Nezávislosť od plochy</p>
            <p class="text-sm text-gray-700">
              Sila trenia nezávisí od veľkosti kontaktnej plochy. Tehla položená na strane aj na ploche
              vykazuje rovnaké trenie — záleží len na <MathFormula formula="N" /> a <MathFormula formula="\mu_k" />.
            </p>
          </div>
        </div>

        <!-- Príklad -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — brzdenie auta</p>
          <div class="text-sm text-gray-700 space-y-2">
            <p>Auto hmotnosti <MathFormula formula="m = 1200\;\text{kg}" /> brzdí na asfalte
              (<MathFormula formula="\mu_k = 0{,}7" />). Aká je brzdná sila?</p>
            <p><MathFormula formula="N = mg = 1200 \cdot 10 = 12\,000\;\text{N}" /></p>
            <p><MathFormula formula="F_t = \mu_k \cdot N = 0{,}7 \cdot 12\,000 = \mathbf{8\,400\;\text{N}}" /></p>
            <p class="text-gray-500 text-xs mt-1">Brzdná sila spomaľuje auto zrýchlením
              <MathFormula formula="a = F_t / m = 7\;\text{m/s}^2" />.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 3: Naklonená rovina -->
    <section aria-label="Naklonená rovina" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-t-2xl px-6 py-4">Naklonená rovina</h2>
      <div class="border border-blue-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Na naklonenej rovine (svahu) pôsobí na teleso gravitačná sila <MathFormula formula="F_g = mg" />, ktorú
          rozkladáme na dve zložky: <strong>rovnobežnú so svahom</strong> (strhávajúca sila) a
          <strong>kolmú na svah</strong> (tlaková sila, ktorá určuje normálovú silu).
        </p>

        <!-- SVG naklonená rovina -->
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 flex justify-center">
          <svg viewBox="0 0 320 200" class="w-full max-w-sm" aria-label="Diagram síl na naklonenej rovine">
            <defs>
              <marker id="arr-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#1D4ED8" />
              </marker>
              <marker id="arr-par" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#EA580C" />
              </marker>
              <marker id="arr-perp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#16A34A" />
              </marker>
              <marker id="arr-fr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0,8 3,0 6" fill="#9333EA" />
              </marker>
            </defs>
            <!-- Naklonená rovina -->
            <polygon points="30,170 290,170 290,85" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" />
            <!-- Povrch svahu (zvýraznenie) -->
            <line x1="30" y1="170" x2="290" y2="85" stroke="#64748B" stroke-width="2" />
            <!-- Uhol alpha -->
            <path d="M 70,170 A 40,40 0 0,0 66,148" fill="none" stroke="#64748B" stroke-width="1.5" />
            <text x="80" y="163" fill="#475569" font-size="13" font-style="italic">α</text>
            <!-- Teleso (obdĺžnik na svahu) -->
            <rect
x="148" y="104" width="34" height="22" rx="3"
              fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"
              transform="rotate(-16.7, 165, 115)" />
            <!-- Fg - gravitačná sila (zvislá dole) -->
            <line x1="165" y1="117" x2="165" y2="172" stroke="#1D4ED8" stroke-width="2.5" marker-end="url(#arr-g)" />
            <text x="170" y="155" fill="#1D4ED8" font-size="12" font-weight="bold">F<tspan dy="3" font-size="9">g</tspan></text>
            <!-- F_par - rovnobežná zložka (po svahu dole) -->
            <line x1="165" y1="117" x2="130" y2="130" stroke="#EA580C" stroke-width="2.5" marker-end="url(#arr-par)" />
            <text x="112" y="120" fill="#EA580C" font-size="12" font-weight="bold">F<tspan dy="3" font-size="9">∥</tspan></text>
            <!-- F_perp - kolmá zložka (von z roviny) -->
            <line x1="165" y1="117" x2="181" y2="82" stroke="#16A34A" stroke-width="2.5" marker-end="url(#arr-perp)" />
            <text x="185" y="88" fill="#16A34A" font-size="12" font-weight="bold">F<tspan dy="3" font-size="9">⊥</tspan></text>
            <!-- Pravý uhol medzi zložkami -->
            <rect
x="152" y="127" width="8" height="8" fill="none" stroke="#9CA3AF" stroke-width="1"
              transform="rotate(-16.7, 156, 131)" />
          </svg>
        </div>

        <!-- Vzorce rozkladu -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
          <p class="text-xs text-gray-400 mb-3 uppercase tracking-wide text-center">Rozklad gravitácie na naklonenej rovine (uhol svahu α)</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4 text-center">
              <p class="text-xs text-orange-600 font-semibold mb-1">Rovnobežná zložka (strhávajúca sila)</p>
              <MathFormula display formula="F_{\parallel} = mg \cdot \sin\alpha" />
              <p class="text-xs text-gray-400 mt-1">Uvádza teleso do pohybu po svahu</p>
            </div>
            <div class="bg-white rounded-lg p-4 text-center">
              <p class="text-xs text-green-600 font-semibold mb-1">Kolmá zložka (tlaková sila)</p>
              <MathFormula display formula="F_{\perp} = mg \cdot \cos\alpha" />
              <p class="text-xs text-gray-400 mt-1">Určuje normálovú silu: <MathFormula formula="N = mg\cos\alpha" /></p>
            </div>
          </div>
        </div>

        <!-- Podmienka pohybu/rovnováhy -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-green-800 mb-2">Teleso v rovnováhe na svahu</p>
            <p class="text-sm text-gray-700 mb-2">
              Trenie musí vyrovnať rovnobežnú zložku:
            </p>
            <MathFormula display formula="mg\sin\alpha \leq \mu_s \cdot mg\cos\alpha" />
            <p class="text-sm text-gray-600 mt-2">
              Zjednodušene: <MathFormula formula="\tan\alpha \leq \mu_s" />
            </p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-red-800 mb-2">Teleso sa pohybuje po svahu</p>
            <p class="text-sm text-gray-700 mb-2">
              Výsledná sila po svahu (pohyb nadol):
            </p>
            <MathFormula display formula="F_{res} = mg\sin\alpha - \mu_k \cdot mg\cos\alpha" />
            <p class="text-sm text-gray-600 mt-2">
              Zrýchlenie: <MathFormula formula="a = g(\sin\alpha - \mu_k\cos\alpha)" />
            </p>
          </div>
        </div>

        <!-- Príklad -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — krabica na 30° svahu</p>
          <div class="text-sm text-gray-700 space-y-2">
            <p>Krabica hmotnosti <MathFormula formula="m = 10\;\text{kg}" /> leží na svahu (<MathFormula formula="\alpha = 30°" />,
              <MathFormula formula="\mu_k = 0{,}25" />). Určte zrýchlenie.</p>
            <p><MathFormula formula="F_{\parallel} = 10 \cdot 10 \cdot \sin 30° = 100 \cdot 0{,}5 = 50\;\text{N}" /></p>
            <p><MathFormula formula="F_t = \mu_k \cdot mg\cos\alpha = 0{,}25 \cdot 100 \cdot \cos 30° \approx 0{,}25 \cdot 86{,}6 \approx 21{,}7\;\text{N}" /></p>
            <p><MathFormula formula="a = g(\sin 30° - 0{,}25\cos 30°) = 10(0{,}5 - 0{,}217) \approx \mathbf{2{,}83\;\text{m/s}^2}" /></p>
            <p class="text-gray-500 text-xs mt-1">Krabica sa pohybuje nadol so zrýchlením 2,83 m/s².</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 4: Využitie v praxi -->
    <section aria-label="Využitie trenia v praxi" class="mb-12">
      <h2 class="text-xl font-bold text-white bg-blue-600 rounded-t-2xl px-6 py-4">Využitie v praxi</h2>
      <div class="border border-blue-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Trenie nie je len brzdná sila — je nevyhnutné pre pohyb, bezpečnosť aj techniku.
          Bez trenia by sme nedokázali chodiť, pneumatiky by sa točili na mieste a šróby by sa samovoľne uvoľňovali.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div v-for="app in applications" :key="app.title" class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
            <span class="text-3xl">{{ app.icon }}</span>
            <p class="font-bold text-gray-900 mt-2 mb-1">{{ app.title }}</p>
            <p class="text-xs text-gray-500 leading-relaxed">{{ app.desc }}</p>
          </div>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-orange-800 mb-3">Naklonená rovina — stroj na zníženie potrebnej sily</p>
          <p class="text-sm text-gray-700 mb-3">
            Naklonená rovina je jednoduchý stroj. Pri naskládaní predmetu hmotnosti
            <MathFormula formula="m" /> na výšku <MathFormula formula="h" /> pomocou svahu dĺžky <MathFormula formula="l" />:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Potrebná sila (bez trenia)</p>
              <MathFormula display formula="F = mg \cdot \frac{h}{l} = mg\sin\alpha" />
            </div>
            <div class="bg-white rounded-lg p-3 text-center">
              <p class="text-xs text-gray-400 mb-1">Mechanická výhoda</p>
              <MathFormula display formula="MA = \frac{mg}{F} = \frac{l}{h} = \frac{1}{\sin\alpha}" />
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-3">
            Miernejší svah (menší uhol) = menšia potrebná sila, ale dlhšia dráha. Príklady: rampa pre vozíčkarov, serpentínová cesta, závitnica skrutky.
          </p>
        </div>

      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-4">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Statické trenie bráni pohybu: <MathFormula formula="F_t \leq \mu_s \cdot N" />. Maximálna hodnota sa dosiahne tesne pred rozbehnutím.
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Kinetické (dynamické) trenie pôsobí počas pohybu: <MathFormula formula="F_t = \mu_k \cdot N" />. Platí vždy <MathFormula formula="\mu_k < \mu_s" />.
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Koeficient trenia <MathFormula formula="\mu" /> závisí od druhu povrchov, nie od plochy ani rýchlosti.
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Na naklonenej rovine (uhol α): rovnobežná zložka <MathFormula formula="F_{\parallel} = mg\sin\alpha" />, kolmá zložka <MathFormula formula="F_{\perp} = mg\cos\alpha" />.
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Podmienka rovnováhy na svahu: <MathFormula formula="\tan\alpha \leq \mu_s" />. Zrýchlenie pri pohybe po svahu: <MathFormula formula="a = g(\sin\alpha - \mu_k\cos\alpha)" />.
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-500 font-bold shrink-0">✓</span>
          Trenie je v praxi nevyhnutné: umožňuje chôdzu, brzdenie áut, fungovanie skrutiek a iných mechanizmov.
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — Trenie a naklonená rovina">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-blue-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
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
                ? 'border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
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
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
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

// ── Statický obsah ──────────────────────────────────────────────────────────

const frictionTable = [
  { materials: 'Drevo na dreve', muS: '0,25 – 0,5', muK: '0,2 – 0,4' },
  { materials: 'Oceľ na oceli', muS: '0,74', muK: '0,57' },
  { materials: 'Guma na asfalte', muS: '0,7 – 0,8', muK: '0,6 – 0,7' },
  { materials: 'Ľad na ľade', muS: '0,1', muK: '0,03' },
  { materials: 'Sklo na skle', muS: '0,94', muK: '0,4' },
  { materials: 'Teflón na teflóne', muS: '0,04', muK: '0,04' },
]

const applications = [
  { icon: '🚗', title: 'Brzdenie vozidiel', desc: 'Pneumatiky využívajú trenie o vozovku. Protišmykový systém ABS maximalizuje trenie bez blokovania kolies.' },
  { icon: '🔩', title: 'Skrutky a matice', desc: 'Závit skrutky je navinutá naklonená rovina. Trenie zabraňuje samovoľnému uvoľneniu.' },
  { icon: '🏔️', title: 'Horolezectvo', desc: 'Trezia sa využíva pri lezení. Protišmykové podrážky zvyšujú koeficient trenia s povrchom skaly.' },
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
    question: 'Čo je statické trenie?',
    options: [
      'Sila pôsobiaca na pohybujúce sa teleso v smere pohybu',
      'Sila brániaaca pohybu telesa, kým je v pokoji',
      'Sila rovnobežná so svahom na naklonenej rovine',
      'Sila závislá od rýchlosti pohybu telesa',
    ],
    correctIndex: 1,
    explanation: 'Statické trenie bráni pohybu telesa, kým je v pokoji. Pôsobí proti smeru pôsobiacej sily a jeho veľkosť sa automaticky prispôsobuje, až kým nedosiahne maximum dané vzorcom ' + km('F_{t,\\max} = \\mu_s \\cdot N') + '.',
  },
  {
    question: 'Teleso hmotnosti 5 kg leží na vodorovnej podlahe (μs = 0,4, g = 10 m/s²). Aká je maximálna sila statického trenia?',
    options: ['5 N', '10 N', '20 N', '40 N'],
    correctIndex: 2,
    explanation: km('N = mg = 5 \\cdot 10 = 50\\;\\text{N}') + ', potom ' + km('F_{t,\\max} = \\mu_s \\cdot N = 0{,}4 \\cdot 50 = 20\\;\\text{N}') + '.',
  },
  {
    question: 'Prečo je koeficient kinetického trenia menší ako koeficient statického trenia?',
    options: [
      'Lebo pri pohybe sa zvyšuje teplota povrchu',
      'Lebo plocha kontaktu sa počas pohybu zmenšuje',
      'Lebo pri pohybe sa nestíhajú vytvárať väzby medzi nerovnosťami povrchov',
      'Lebo rýchlosť pohybu znižuje normálovú silu',
    ],
    correctIndex: 2,
    explanation: 'Povrchy v pokoji sú viac "zacvikané" — nerovnosti sa vzájomne zakleslia. Počas pohybu sa tieto mikroväzby nestíhajú vytvárať, preto je odpor menší: ' + km('\\mu_k < \\mu_s') + '.',
  },
  {
    question: 'Teleso hmotnosti 2 kg leží na svahu s uhlom α = 30°. Aká je sila rovnobežná so svahom? (g = 10 m/s²)',
    options: ['17,3 N', '10 N', '20 N', '8,7 N'],
    correctIndex: 1,
    explanation: km('F_{\\parallel} = mg\\sin\\alpha = 2 \\cdot 10 \\cdot \\sin 30° = 20 \\cdot 0{,}5 = 10\\;\\text{N}') + '. Rovnobežná zložka strhávajúca teleso po svahu.',
  },
  {
    question: 'Pre akú podmienku zostane teleso v pokoji na naklonenej rovine s uhlom α a koeficientom statického trenia μs?',
    options: [
      'sin α ≥ μs · cos α',
      'tan α ≤ μs',
      'cos α ≤ μs · sin α',
      'mg · sin α ≥ μs · N',
    ],
    correctIndex: 1,
    explanation: 'Podmienka rovnováhy: statické trenie musí vyrovnať rovnobežnú zložku: ' + km('mg\\sin\\alpha \\leq \\mu_s \\cdot mg\\cos\\alpha') + '. Po vydelení ' + km('mg\\cos\\alpha') + ' dostaneme ' + km('\\tan\\alpha \\leq \\mu_s') + '.',
  },
  {
    question: 'Krabica (m = 4 kg) sa pohybuje po svahu α = 45° s μk = 0,3. Aké je jej zrýchlenie? (g = 10 m/s², sin 45° ≈ cos 45° ≈ 0,707)',
    options: ['4,17 m/s²', '7,07 m/s²', '3,0 m/s²', '10,0 m/s²'],
    correctIndex: 0,
    explanation: km('a = g(\\sin 45° - \\mu_k\\cos 45°) = 10 \\cdot (0{,}707 - 0{,}3 \\cdot 0{,}707) = 10 \\cdot 0{,}707 \\cdot 0{,}7 \\approx 4{,}17\\;\\text{m/s}^2') + '. Hmotnosť krabice výsledok neovplyvňuje — vydelí sa.',
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
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
