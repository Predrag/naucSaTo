<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/funkcie" class="hover:text-blue-600 transition-colors">Funkcie a grafy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Exponenciálna a logaritmická funkcia</span>
    </nav>

    <!-- Nadpis -->
    <div class="flex items-center gap-4 mb-6">
      <span class="text-5xl" aria-hidden="true">📐</span>
      <h1 class="text-3xl font-bold text-blue-700">Exponenciálna a logaritmická funkcia</h1>
    </div>

    <!-- Intro -->
    <p class="text-gray-600 text-lg mb-10 leading-relaxed">
      Exponenciálna a logaritmická funkcia sú navzájom inverzné — ich grafy sú súmerné podľa priamky
      <MathFormula formula="y = x" />. Stretneš ich pri opisovaní rastu populácie, rádioaktívneho rozpadu,
      úrokov v banke či merania hlasitosti zvuku v decibeloch.
    </p>

    <!-- ===== SEKCIA 1: Exponenciálna funkcia ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Exponenciálna funkcia</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Exponenciálna funkcia má tvar <MathFormula formula="y = a^x" />, kde <MathFormula formula="a > 0" /> a
        <MathFormula formula="a \neq 1" />. Základ <MathFormula formula="a" /> určuje, či funkcia rastie alebo klesá.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Základ <MathFormula formula="a > 1" /></h3>
          <p class="text-gray-700 text-sm mb-2">Funkcia je <strong>rastúca</strong>. Čím väčší základ, tým strmší rast.</p>
          <p class="text-gray-700 text-sm">Príklad: <MathFormula formula="y = 2^x" />, <MathFormula formula="y = e^x" /></p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Základ <MathFormula formula="0 < a < 1" /></h3>
          <p class="text-gray-700 text-sm mb-2">Funkcia je <strong>klesajúca</strong>. Typický exponenciálny rozpad.</p>
          <p class="text-gray-700 text-sm">Príklad: <MathFormula formula="y = \left(\tfrac{1}{2}\right)^x" /></p>
        </div>
      </div>

      <div class="bg-gray-50 border rounded-xl p-4 mb-6">
        <p class="text-gray-700 font-medium mb-1">Spoločné vlastnosti:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Definičný obor: <MathFormula formula="\mathbb{R}" /> (všetky reálne čísla)</li>
          <li>Obor hodnôt: <MathFormula formula="(0, +\infty)" /> — vždy kladná</li>
          <li>Prechádza bodom <MathFormula formula="(0,\, 1)" />, lebo <MathFormula formula="a^0 = 1" /></li>
          <li>Nikdy nepretína os <MathFormula formula="x" /> (asymptota <MathFormula formula="y = 0" />)</li>
        </ul>
      </div>

      <!-- Príklad 1 -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-2">Príklad 1: Výpočet hodnôt <MathFormula formula="y = 2^x" /></p>
        <div class="overflow-x-auto">
          <table class="text-sm text-gray-700 border-collapse w-full max-w-md">
            <thead>
              <tr class="bg-blue-100">
                <th class="border border-blue-200 px-3 py-1"><MathFormula formula="x" /></th>
                <th class="border border-blue-200 px-3 py-1">−3</th>
                <th class="border border-blue-200 px-3 py-1">−2</th>
                <th class="border border-blue-200 px-3 py-1">−1</th>
                <th class="border border-blue-200 px-3 py-1">0</th>
                <th class="border border-blue-200 px-3 py-1">1</th>
                <th class="border border-blue-200 px-3 py-1">2</th>
                <th class="border border-blue-200 px-3 py-1">3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-blue-200 px-3 py-1 font-medium"><MathFormula formula="2^x" /></td>
                <td class="border border-blue-200 px-3 py-1 text-center">⅛</td>
                <td class="border border-blue-200 px-3 py-1 text-center">¼</td>
                <td class="border border-blue-200 px-3 py-1 text-center">½</td>
                <td class="border border-blue-200 px-3 py-1 text-center">1</td>
                <td class="border border-blue-200 px-3 py-1 text-center">2</td>
                <td class="border border-blue-200 px-3 py-1 text-center">4</td>
                <td class="border border-blue-200 px-3 py-1 text-center">8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-gray-600 mt-2">Každé zvýšenie <MathFormula formula="x" /> o 1 zdvojnásobí hodnotu funkcie.</p>
      </div>

      <!-- Exponenciálne rovnice -->
      <h3 class="text-lg font-semibold text-gray-800 mb-3 mt-6">Exponenciálne rovnice</h3>
      <p class="text-gray-700 mb-3">
        Rovnicu tvaru <MathFormula formula="a^x = b" /> riešime logaritmovaním:
      </p>
      <MathFormula display formula="a^x = b \quad \Longrightarrow \quad x = \log_a b" />

      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5 mt-4">
        <p class="font-semibold text-blue-800 mb-2">Príklad 2: Riešenie exponenciálnej rovnice</p>
        <p class="text-gray-700 mb-1">Riešte rovnicu <MathFormula formula="2^x = 32" />.</p>
        <p class="text-gray-700 mb-1">Keďže <MathFormula formula="32 = 2^5" />, dostaneme:</p>
        <MathFormula display formula="2^x = 2^5 \quad \Longrightarrow \quad x = 5" />
        <p class="text-sm text-gray-600 mt-1">Skúška: <MathFormula formula="2^5 = 32 \checkmark" /></p>
      </div>
    </section>

    <!-- ===== SEKCIA 2: Logaritmická funkcia ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Logaritmická funkcia</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Logaritmus je inverzná operácia k umocňovaniu.
        <MathFormula formula="\log_a x = y" /> znamená totéž ako <MathFormula formula="a^y = x" />.
        Funkcia <MathFormula formula="y = \log_a x" /> je inverzná k <MathFormula formula="y = a^x" />.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Prirodzený logaritmus</h3>
          <MathFormula display formula="\ln x = \log_e x" />
          <p class="text-gray-700 text-sm mt-2">
            Základ <MathFormula formula="e \approx 2{,}718" /> (Eulerovo číslo).
            Používa sa vo fyzike, chémii a ekonómii.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Dekadický logaritmus</h3>
          <MathFormula display formula="\log x = \log_{10} x" />
          <p class="text-gray-700 text-sm mt-2">
            Základ 10. Používa sa pri Richterovej stupnici, decibeloch či pH.
          </p>
        </div>
      </div>

      <div class="bg-gray-50 border rounded-xl p-4 mb-6">
        <p class="text-gray-700 font-medium mb-1">Vlastnosti logaritmickej funkcie <MathFormula formula="y = \log_a x" />:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Definičný obor: <MathFormula formula="(0, +\infty)" /> — len kladné čísla</li>
          <li>Obor hodnôt: <MathFormula formula="\mathbb{R}" /></li>
          <li>Prechádza bodom <MathFormula formula="(1,\, 0)" />, lebo <MathFormula formula="\log_a 1 = 0" /></li>
          <li>Pre <MathFormula formula="a > 1" />: rastúca; pre <MathFormula formula="0 < a < 1" />: klesajúca</li>
          <li>Asymptota <MathFormula formula="x = 0" /> (os <MathFormula formula="y" />)</li>
        </ul>
      </div>

      <!-- Logaritmické vzorce -->
      <h3 class="text-lg font-semibold text-gray-800 mb-3">Logaritmické vzorce</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm text-gray-500 mb-1">Súčin</p>
          <MathFormula display formula="\log_a(x \cdot y) = \log_a x + \log_a y" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm text-gray-500 mb-1">Podiel</p>
          <MathFormula display formula="\log_a\!\left(\frac{x}{y}\right) = \log_a x - \log_a y" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm text-gray-500 mb-1">Mocnina</p>
          <MathFormula display formula="\log_a(x^n) = n \cdot \log_a x" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4">
          <p class="text-sm text-gray-500 mb-1">Zmena základu</p>
          <MathFormula display formula="\log_a x = \frac{\log_c x}{\log_c a}" />
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-2">Príklad 3: Zjednodušenie logaritmického výrazu</p>
        <p class="text-gray-700 mb-2">Zjednodušte: <MathFormula formula="\log_2 8 + \log_2 4 - \log_2 16" /></p>
        <div class="space-y-1 text-gray-700">
          <p><MathFormula formula="= \log_2 2^3 + \log_2 2^2 - \log_2 2^4" /></p>
          <p><MathFormula formula="= 3 + 2 - 4" /></p>
          <p class="font-semibold"><MathFormula formula="= 1" /></p>
        </div>
      </div>

      <!-- Príklad 4: logaritmická rovnica -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5">
        <p class="font-semibold text-blue-800 mb-2">Príklad 4: Logaritmická rovnica</p>
        <p class="text-gray-700 mb-2">Riešte rovnicu <MathFormula formula="\log_3 x = 4" />.</p>
        <p class="text-gray-700 mb-1">Prevedieme do exponenciálneho tvaru:</p>
        <MathFormula display formula="x = 3^4 = 81" />
        <p class="text-sm text-gray-600 mt-1">Skúška: <MathFormula formula="\log_3 81 = \log_3 3^4 = 4 \checkmark" /></p>
      </div>
    </section>

    <!-- ===== SEKCIA 3: Interaktívne grafy ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Interaktívne grafy a symetria</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Grafy <MathFormula formula="y = a^x" /> a <MathFormula formula="y = \log_a x" /> sú navzájom inverzné —
        súmerné podľa priamky <MathFormula formula="y = x" />. Zmeň základ <MathFormula formula="a" /> a sleduj,
        ako sa menia oba grafy súčasne.
      </p>

      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-4">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny graf — základ <em>a</em></h3>

        <!-- Slider pre základ a -->
        <div class="mb-4">
          <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
            <span>Základ <em>a</em></span>
            <span class="font-bold text-blue-600">a = {{ expBase }}</span>
          </label>
          <input
            v-model.number="expBase"
            type="range"
            min="0.2"
            max="4"
            step="0.1"
            class="w-full accent-blue-500 cursor-pointer"
          >
          <div class="relative h-4 text-xs text-gray-400 mt-0.5">
            <span class="absolute" style="left: 0%; transform: translateX(0%)">0,2</span>
            <span class="absolute" style="left: 21.05%; transform: translateX(-50%)">1</span>
            <span class="absolute" style="left: 47.37%; transform: translateX(-50%)">2</span>
            <span class="absolute" style="left: 73.68%; transform: translateX(-50%)">3</span>
            <span class="absolute" style="left: 100%; transform: translateX(-100%)">4</span>
          </div>
        </div>

        <!-- Upozornenie pre a≈1 -->
        <div v-if="Math.abs(expBase - 1) < 0.15" class="bg-yellow-50 border border-yellow-300 rounded-xl p-3 mb-3 text-sm text-yellow-800">
          ⚠️ Pre <strong>a = 1</strong> nie sú funkcie definované (log₁ neexistuje, 1ˣ = 1 je konštantná). Nastav a ≠ 1.
        </div>

        <!-- Rovnice a typ -->
        <div v-if="Math.abs(expBase - 1) >= 0.15" class="grid sm:grid-cols-2 gap-2 mb-4 text-sm">
          <div class="bg-blue-50 rounded-xl py-2 px-3 flex items-center gap-2">
            <span class="w-4 h-1 bg-blue-600 rounded inline-block flex-shrink-0" />
            <span class="font-mono font-semibold text-blue-700">y = {{ expBase }}ˣ</span>
            <span class="text-gray-500 text-xs ml-auto">{{ expBase > 1 ? 'rastúca ↗' : 'klesajúca ↘' }}</span>
          </div>
          <div class="bg-green-50 rounded-xl py-2 px-3 flex items-center gap-2">
            <span class="w-4 h-1 bg-green-600 rounded inline-block flex-shrink-0" />
            <span class="font-mono font-semibold text-green-700">y = log<sub>{{ expBase }}</sub> x</span>
            <span class="text-gray-500 text-xs ml-auto">{{ expBase > 1 ? 'rastúca ↗' : 'klesajúca ↘' }}</span>
          </div>
        </div>

        <!-- SVG Graf -->
        <svg
          viewBox="-5.8 -5.8 11.6 11.6"
          width="100%"
          height="340"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Grafy y=${expBase}^x a log_${expBase}(x) s osou symetrie y=x`"
          class="block"
        >
          <defs>
            <clipPath id="expClip">
              <rect x="-5.8" y="-5.8" width="11.6" height="11.6" />
            </clipPath>
            <marker id="expArrowX" markerWidth="0.5" markerHeight="0.5" refX="0.4" refY="0.25" orient="auto">
              <polygon points="0 0, 0.5 0.25, 0 0.5" fill="#6b7280" />
            </marker>
            <marker id="expArrowY" markerWidth="0.5" markerHeight="0.5" refX="0.25" refY="0.4" orient="auto">
              <polygon points="0 0.5, 0.25 0, 0.5 0.5" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Jemná mriežka -->
          <g stroke="#f3f4f6" stroke-width="0.06">
            <line v-for="i in [-5,-4,-3,-2,-1,1,2,3,4,5]" :key="`egx${i}`" :x1="i" y1="-5.5" :x2="i" y2="5.5" />
            <line v-for="i in [-5,-4,-3,-2,-1,1,2,3,4,5]" :key="`egy${i}`" x1="-5.5" :y1="i" x2="5.5" :y2="i" />
          </g>

          <!-- Priamka y=x (symetria, sivá prerušovaná) -->
          <line x1="-5.5" y1="5.5" x2="5.5" y2="-5.5" stroke="#d1d5db" stroke-width="0.1" stroke-dasharray="0.3,0.2" />
          <text x="4.2" y="-3.9" font-size="0.35" fill="#9ca3af" font-family="sans-serif" font-style="italic">y = x</text>

          <!-- Osi -->
          <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#6b7280" stroke-width="0.09" marker-end="url(#expArrowX)" />
          <line x1="0" y1="5.5" x2="0" y2="-5.5" stroke="#6b7280" stroke-width="0.09" marker-end="url(#expArrowY)" />
          <text x="5.35" y="0.45" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">x</text>
          <text x="0.18" y="-5.2" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">y</text>

          <!-- Číslice -->
          <g font-size="0.3" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`elx${i}`" :x="i" y="0.55">{{ i }}</text>
          </g>
          <g font-size="0.3" fill="#9ca3af" text-anchor="end" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`ely${i}`" x="-0.18" :y="-i + 0.1">{{ i }}</text>
          </g>

          <!-- y = aˣ (modrá) -->
          <path
            :d="expPath"
            fill="none"
            stroke="#2563eb"
            stroke-width="0.14"
            stroke-linejoin="round"
            stroke-linecap="round"
            clip-path="url(#expClip)"
          />

          <!-- y = logₐ(x) (zelená) -->
          <path
            v-if="Math.abs(expBase - 1) >= 0.15"
            :d="logPath"
            fill="none"
            stroke="#16a34a"
            stroke-width="0.14"
            stroke-linejoin="round"
            stroke-linecap="round"
            clip-path="url(#expClip)"
          />

          <!-- Bod (0,1) — vždy na exponenciálnej -->
          <circle cx="0" cy="-1" r="0.2" fill="#2563eb" stroke="white" stroke-width="0.07" />
          <text x="0.28" y="-1.3" font-size="0.28" fill="#2563eb" font-family="sans-serif">(0, 1)</text>

          <!-- Bod (1,0) — vždy na logaritmickej -->
          <circle v-if="Math.abs(expBase - 1) >= 0.15" cx="1" cy="0" r="0.2" fill="#16a34a" stroke="white" stroke-width="0.07" />
          <text v-if="Math.abs(expBase - 1) >= 0.15" x="1" y="-0.35" font-size="0.28" fill="#16a34a" font-family="sans-serif" text-anchor="middle">(1, 0)</text>

          <!-- Asymptota y=0 pre exponenciálnu (horizontálna, sivá) -->
          <line x1="-5.5" y1="0" x2="0" y2="0" stroke="#93c5fd" stroke-width="0.06" stroke-dasharray="0.2,0.15" />
          <text x="-5.3" y="-0.2" font-size="0.26" fill="#93c5fd" font-family="sans-serif">y = 0</text>

          <!-- Asymptota x=0 pre logaritmickú (vertikálna, sivá) -->
          <line v-if="Math.abs(expBase - 1) >= 0.15" x1="0" y1="-5.5" x2="0" y2="5.5" stroke="#86efac" stroke-width="0.06" stroke-dasharray="0.2,0.15" />
        </svg>

        <!-- Legenda -->
        <div class="flex gap-5 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span class="flex items-center gap-1.5"><span class="w-5 h-0.5 bg-blue-600 inline-block" /> y = {{ expBase }}ˣ (expon.)</span>
          <span class="flex items-center gap-1.5"><span class="w-5 h-0.5 bg-green-600 inline-block" /> y = log<sub>{{ expBase }}</sub> x (log.)</span>
          <span class="flex items-center gap-1.5" style="border-top: 1.5px dashed #d1d5db; padding-top: 0"><span class="w-5 inline-block" /> y = x (symetria)</span>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 4: Aplikácie ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Exponenciálny rast a rozpad</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Mnohé javy v prírode a spoločnosti sa riadia exponenciálnym zákonom.
        Všeobecný vzorec je:
      </p>
      <MathFormula display formula="N(t) = N_0 \cdot a^t" />
      <p class="text-gray-700 mb-6">
        kde <MathFormula formula="N_0" /> je počiatočná hodnota, <MathFormula formula="a" /> je základ
        a <MathFormula formula="t" /> je čas.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Rádioaktívny rozpad</h3>
          <p class="text-gray-700 text-sm mb-2">
            Množstvo rádioaktívnej látky klesá podľa vzorca:
          </p>
          <MathFormula display formula="N(t) = N_0 \cdot \left(\frac{1}{2}\right)^{t/T_{1/2}}" />
          <p class="text-gray-700 text-sm mt-2">
            kde <MathFormula formula="T_{1/2}" /> je polčas rozpadu.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Úrok v banke</h3>
          <p class="text-gray-700 text-sm mb-2">
            Pri ročnej úrokovej sadzbe <MathFormula formula="p\,\%" /> je po <MathFormula formula="n" /> rokoch:
          </p>
          <MathFormula display formula="K_n = K_0 \cdot \left(1 + \frac{p}{100}\right)^n" />
          <p class="text-gray-700 text-sm mt-2">Exponenciálny rast kapitálu.</p>
        </div>
      </div>

      <!-- Príklad 5 -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-2">Príklad 5: Rádioaktívny rozpad</p>
        <p class="text-gray-700 mb-2">
          Polčas rozpadu uránu-238 je <MathFormula formula="4{,}5 \times 10^9" /> rokov.
          Koľko percent zostane po <MathFormula formula="9 \times 10^9" /> rokoch?
        </p>
        <p class="text-gray-700 mb-1">
          Počet polčasov: <MathFormula formula="n = \tfrac{9 \times 10^9}{4{,}5 \times 10^9} = 2" />
        </p>
        <MathFormula display formula="\frac{N}{N_0} = \left(\frac{1}{2}\right)^2 = \frac{1}{4} = 25\,\%" />
        <p class="text-sm text-gray-600 mt-1">Po dvoch polčasoch zostane 25 % pôvodného množstva.</p>
      </div>

      <!-- Príklad 6 -->
      <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-5">
        <p class="font-semibold text-blue-800 mb-2">Príklad 6: Zdvojenie populácie</p>
        <p class="text-gray-700 mb-2">
          Populácia baktérií sa každú hodinu zdvojnásobí. Po koľkých hodinách bude
          <MathFormula formula="1\,000" />-krát viac ako na začiatku?
        </p>
        <p class="text-gray-700 mb-1">
          Rovnica: <MathFormula formula="2^t = 1000" />
        </p>
        <MathFormula display formula="t = \log_2 1000 = \frac{\log 1000}{\log 2} = \frac{3}{0{,}301} \approx 9{,}97 \text{ h}" />
        <p class="text-sm text-gray-600 mt-1">Čiže po necelých 10 hodinách.</p>
      </div>
    </section>

    <!-- ===== Zhrnutie ===== -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p class="font-semibold text-blue-700 mb-2">Exponenciálna funkcia <MathFormula formula="y = a^x" /></p>
          <ul class="list-disc list-inside space-y-1">
            <li><MathFormula formula="a > 1" />: rastúca; <MathFormula formula="0 < a < 1" />: klesajúca</li>
            <li>Prechádza <MathFormula formula="(0, 1)" />, asymptota <MathFormula formula="y = 0" /></li>
            <li>Rovnica: <MathFormula formula="a^x = b \Rightarrow x = \log_a b" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-2">Logaritmická funkcia <MathFormula formula="y = \log_a x" /></p>
          <ul class="list-disc list-inside space-y-1">
            <li>Inverzná k <MathFormula formula="y = a^x" />, os symetrie <MathFormula formula="y = x" /></li>
            <li>Prechádza <MathFormula formula="(1, 0)" />, asymptota <MathFormula formula="x = 0" /></li>
            <li><MathFormula formula="\ln = \log_e" />, <MathFormula formula="\log = \log_{10}" /></li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <p class="font-semibold text-blue-700 mb-2">Kľúčové vzorce</p>
          <div class="flex flex-wrap gap-4">
            <span><MathFormula formula="\log(xy) = \log x + \log y" /></span>
            <span><MathFormula formula="\log\!\left(\tfrac{x}{y}\right) = \log x - \log y" /></span>
            <span><MathFormula formula="\log(x^n) = n\log x" /></span>
            <span><MathFormula formula="\log_a x = \tfrac{\ln x}{\ln a}" /></span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Kvíz ===== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progres -->
        <div data-testid="quiz-progress" class="flex items-center gap-3 mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex-1 bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
            />
          </div>
        </div>

        <!-- Otázka -->
        <div data-testid="quiz-question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="text-gray-800 font-medium text-lg mb-5">{{ currentQuestion.question }}</p>

          <div class="space-y-3">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`quiz-option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              :class="[
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm',
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                  : i === currentQuestion.correctIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : i === selectedAnswer
                      ? 'border-red-400 bg-red-50 text-red-700'
                      : 'border-gray-200 text-gray-400 cursor-not-allowed',
              ]"
              @click="selectAnswer(i)"
            >
              <span class="font-medium mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
            </button>
          </div>

          <!-- Vysvetlenie -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="quiz-feedback"
              :class="[
                'mt-4 p-4 rounded-xl text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800',
              ]"
            >
              <span class="font-semibold">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
              </span>
              {{ currentQuestion.explanation }}
            </div>
          </Transition>
        </div>

        <!-- Tlačidlo Ďalej -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            data-testid="quiz-next-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Výsledok -->
      <Transition name="fade">
        <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ scoreMessage }}</h3>
          <p data-testid="quiz-score" class="text-gray-500 mb-6">
            Získal si <span class="font-semibold text-blue-700">{{ quizScore }} z {{ quiz.length }}</span> bodov.
          </p>
          <button
            data-testid="quiz-reset-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interaktívny graf exponenciálnej a logaritmickej funkcie
const expBase = ref(2)

const expPath = computed(() => {
  const a = expBase.value
  const pts: string[] = []
  for (let xi = -5.8; xi <= 5.81; xi += 0.08) {
    const x = Math.round(xi * 100) / 100
    const ySvg = -Math.pow(a, x)
    pts.push(`${x.toFixed(2)},${ySvg.toFixed(3)}`)
  }
  return 'M ' + pts.join(' L ')
})

const logPath = computed(() => {
  const a = expBase.value
  if (Math.abs(a - 1) < 0.15) return ''
  const lna = Math.log(a)
  const pts: string[] = []
  for (let xi = 0.04; xi <= 5.81; xi += 0.05) {
    const x = Math.round(xi * 100) / 100
    const ySvg = -(Math.log(x) / lna)
    pts.push(`${x.toFixed(2)},${ySvg.toFixed(3)}`)
  }
  return 'M ' + pts.join(' L ')
})

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Ktorý bod leží na grafe každej exponenciálnej funkcie y = aˣ (a > 0, a ≠ 1)?',
    options: ['(1, 0)', '(0, 1)', '(1, 1)', '(0, 0)'],
    correctIndex: 1,
    explanation: 'Pre každé a platí a⁰ = 1, takže bod (0, 1) leží na grafe každej exponenciálnej funkcie.',
  },
  {
    question: 'Čo je hodnota log₂(32)?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation: '32 = 2⁵, teda log₂(32) = 5.',
  },
  {
    question: 'Aký je definičný obor funkcie y = log₃(x)?',
    options: ['Všetky reálne čísla ℝ', 'Kladné reálne čísla (0, +∞)', 'Nezáporné reálne čísla ⟨0, +∞)', 'Celé čísla ℤ'],
    correctIndex: 1,
    explanation: 'Logaritmus je definovaný len pre kladné čísla, teda definičný obor je (0, +∞).',
  },
  {
    question: 'Zjednodušte výraz: log(100) + log(10) − log(1 000)',
    options: ['−1', '0', '1', '2'],
    correctIndex: 1,
    explanation: 'log(100) = 2, log(10) = 1, log(1000) = 3. Teda 2 + 1 − 3 = 0.',
  },
  {
    question: 'Funkcia y = (1/3)ˣ je na celom definičnom obore:',
    options: ['Rastúca', 'Klesajúca', 'Konštantná', 'Ani rastúca ani klesajúca'],
    correctIndex: 1,
    explanation: 'Základ 1/3 je medzi 0 a 1, preto je funkcia klesajúca — väčšie x dáva menšiu hodnotu.',
  },
  {
    question: 'Populácia sa zdvojnásobuje každých 5 rokov. Po 15 rokoch bude populácia:',
    options: ['3-krát väčšia', '6-krát väčšia', '8-krát väčšia', '15-krát väčšia'],
    correctIndex: 2,
    explanation: 'Za 15 rokov prebehne 15/5 = 3 zdvojnásobenia, teda 2³ = 8-krát väčšia populácia.',
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
  }
  else {
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

useSeoMeta({
  title: 'Exponenciálna a logaritmická funkcia | Matematika | Náuka Portál',
  description:
    'Nauč sa exponenciálnu a logaritmickú funkciu: grafy, vlastnosti, vzorce, rovnice a reálne aplikácie (rádioaktivita, úroky). Pre gymnazistov so príkladmi a kvízom.',
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
