<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/funkcie" class="hover:text-blue-600 transition-colors">Funkcie a grafy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Lineárna a kvadratická funkcia</span>
    </nav>

    <!-- Nadpis -->
    <h1 class="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
      <span aria-hidden="true">📉</span>
      Lineárna a kvadratická funkcia
    </h1>
    <p class="text-gray-600 text-lg mb-10 max-w-2xl">
      Dve najdôležitejšie funkcie strednej školy. Naučíš sa čítať ich grafy, nájsť vrchol paraboly,
      smernicový tvar priamky a riešiť kvadratické nerovnice pomocou grafu.
    </p>

    <!-- ===== SEKCIA 1: Lineárna funkcia ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Lineárna funkcia</h2>
      <p class="text-gray-700 mb-4">
        Lineárna funkcia má predpis <MathFormula formula="y = kx + q" />, kde <MathFormula formula="k" /> je
        <strong>smernica</strong> a <MathFormula formula="q" /> je <strong>priesečník s osou y</strong>.
        Graf je priamka.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">Smernica k</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li><MathFormula formula="k > 0" /> → funkcia je <strong>rastúca</strong></li>
            <li><MathFormula formula="k < 0" /> → funkcia je <strong>klesajúca</strong></li>
            <li><MathFormula formula="k = 0" /> → funkcia je <strong>konštantná</strong> (vodorovná priamka)</li>
          </ul>
          <div class="mt-3 pt-3 border-t border-blue-200">
            <p class="text-sm text-gray-700">Smernica vyjadruje sklon priamky cez uhol:</p>
            <MathFormula display formula="k = \tan(\alpha)" />
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">Rovnica priamky z dvoch bodov</h3>
          <p class="text-sm text-gray-700 mb-3">
            Ak poznáme body <MathFormula formula="A(x_1, y_1)" /> a <MathFormula formula="B(x_2, y_2)" />:
          </p>
          <MathFormula display formula="k = \frac{y_2 - y_1}{x_2 - x_1}" />
          <p class="text-sm text-gray-700 mt-2">
            Potom dosadíme jeden bod do <MathFormula formula="y = kx + q" /> a vyjadríme <MathFormula formula="q" />.
          </p>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm mb-6">
        <h3 class="font-semibold text-gray-800 mb-3">
          <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-sm font-bold mr-2">Príklad 1</span>
          Nájdi rovnicu priamky prechádzajúcej bodmi A(1, 3) a B(4, 9).
        </h3>
        <div class="space-y-2 text-gray-700">
          <p><strong>1. Smernica:</strong></p>
          <MathFormula display formula="k = \frac{9 - 3}{4 - 1} = \frac{6}{3} = 2" />
          <p><strong>2. Dosadíme bod A(1, 3) do y = 2x + q:</strong></p>
          <MathFormula display formula="3 = 2 \cdot 1 + q \quad \Rightarrow \quad q = 1" />
          <p class="mt-2 font-semibold text-blue-700">Výsledok: <MathFormula formula="y = 2x + 1" /></p>
          <p class="text-sm text-gray-500">Funkcia je rastúca (k = 2 &gt; 0), pretína os y v bode (0, 1).</p>
        </div>
      </div>

      <!-- Interaktívny graf lineárnej funkcie -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-4">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny graf lineárnej funkcie</h3>

        <!-- Sliders -->
        <div class="grid sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Smernica <em>k</em></span>
              <span class="font-bold text-blue-600">k = {{ linearK }}</span>
            </label>
            <input
              v-model.number="linearK"
              type="range"
              min="-5"
              max="5"
              step="0.5"
              class="w-full accent-blue-500 cursor-pointer"
            >
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>−5</span><span>0</span><span>5</span>
            </div>
          </div>
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Posunutie <em>q</em></span>
              <span class="font-bold text-blue-600">q = {{ linearQ }}</span>
            </label>
            <input
              v-model.number="linearQ"
              type="range"
              min="-5"
              max="5"
              step="0.5"
              class="w-full accent-blue-500 cursor-pointer"
            >
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>−5</span><span>0</span><span>5</span>
            </div>
          </div>
        </div>

        <!-- Aktuálna rovnica -->
        <p class="text-center text-base font-mono font-semibold text-blue-700 bg-blue-50 rounded-xl py-2 mb-4">
          {{ linearEquation }}
        </p>

        <!-- SVG Graf -->
        <svg
          viewBox="-5.8 -5.8 11.6 11.6"
          width="100%"
          height="320"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Interaktívny graf lineárnej funkcie ${linearEquation}`"
          class="block"
        >
          <!-- Jemná mriežka -->
          <g stroke="#f3f4f6" stroke-width="0.06">
            <line v-for="i in gridLines" :key="`gx${i}`" :x1="i" y1="-5.5" :x2="i" y2="5.5" />
            <line v-for="i in gridLines" :key="`gy${i}`" x1="-5.5" :y1="i" x2="5.5" :y2="i" />
          </g>
          <!-- Hrubšia mriežka každé 2 -->
          <g stroke="#e5e7eb" stroke-width="0.04">
            <line v-for="i in [-4,-2,2,4]" :key="`hx${i}`" :x1="i" y1="-5.5" :x2="i" y2="5.5" />
            <line v-for="i in [-4,-2,2,4]" :key="`hy${i}`" x1="-5.5" :y1="i" x2="5.5" :y2="i" />
          </g>

          <!-- Osi -->
          <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#6b7280" stroke-width="0.09" marker-end="url(#axArrowX)" />
          <line x1="0" y1="5.5" x2="0" y2="-5.5" stroke="#6b7280" stroke-width="0.09" marker-end="url(#axArrowY)" />
          <defs>
            <marker id="axArrowX" markerWidth="0.5" markerHeight="0.5" refX="0.4" refY="0.25" orient="auto">
              <polygon points="0 0, 0.5 0.25, 0 0.5" fill="#6b7280" />
            </marker>
            <marker id="axArrowY" markerWidth="0.5" markerHeight="0.5" refX="0.25" refY="0.4" orient="auto">
              <polygon points="0 0.5, 0.25 0, 0.5 0.5" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Popisky osí -->
          <text x="5.4" y="0.45" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">x</text>
          <text x="0.18" y="-5.25" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">y</text>

          <!-- Číslice na osiach -->
          <g font-size="0.3" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`lblx${i}`" :x="i" y="0.55">{{ i }}</text>
          </g>
          <g font-size="0.3" fill="#9ca3af" text-anchor="end" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`lbly${i}`" x="-0.18" :y="-i + 0.1">{{ i }}</text>
          </g>

          <!-- Línia y = kx + q -->
          <line
            :x1="-5.8"
            :y1="-(linearK * -5.8 + linearQ)"
            :x2="5.8"
            :y2="-(linearK * 5.8 + linearQ)"
            stroke="#2563eb"
            stroke-width="0.14"
            stroke-linecap="round"
          />

          <!-- Priesečník s os. y: (0, q) → SVG (0, -q) -->
          <circle cx="0" :cy="-linearQ" r="0.2" fill="#7c3aed" stroke="white" stroke-width="0.07" />
          <text
            x="0.28"
            :y="-linearQ - 0.28"
            font-size="0.32"
            fill="#7c3aed"
            font-family="sans-serif"
            font-weight="bold"
          >(0, {{ linearQ }})</text>

          <!-- Priesečník s os. x (len ak k ≠ 0 a leží v zobrazenom rozsahu) -->
          <template v-if="Math.abs(linearK) > 0.01 && Math.abs(xIntercept) <= 5.2">
            <circle :cx="xIntercept" cy="0" r="0.2" fill="#059669" stroke="white" stroke-width="0.07" />
            <text
              :x="xIntercept"
              y="-0.32"
              font-size="0.32"
              fill="#059669"
              font-family="sans-serif"
              font-weight="bold"
              text-anchor="middle"
            >({{ xInterceptLabel }}, 0)</text>
          </template>

          <!-- Popis rovnice na grafe -->
          <text
            :x="linearK >= 0 ? 2.5 : -5.2"
            :y="-(linearK * (linearK >= 0 ? 2.5 : -5.2) + linearQ) - 0.4"
            font-size="0.38"
            fill="#1d4ed8"
            font-family="sans-serif"
            font-style="italic"
            :text-anchor="linearK >= 0 ? 'start' : 'start'"
          >{{ linearEquation }}</text>
        </svg>

        <!-- Legenda -->
        <div class="flex gap-4 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-violet-600 inline-block flex-shrink-0" />
            priesečník s os. y:&nbsp;<strong>(0, {{ linearQ }})</strong>
          </span>
          <span v-if="Math.abs(linearK) > 0.01" class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-emerald-600 inline-block flex-shrink-0" />
            priesečník s os. x:&nbsp;<strong>({{ xInterceptLabel }}, 0)</strong>
          </span>
          <span v-else class="flex items-center gap-1.5 text-gray-400">
            <span class="w-3 h-3 rounded-full bg-gray-300 inline-block flex-shrink-0" />
            k = 0 → priamka rovnobežná s os. x, priesečník s os. x neexistuje
          </span>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 2: Kvadratická funkcia ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Kvadratická funkcia</h2>
      <p class="text-gray-700 mb-4">
        Kvadratická funkcia má predpis <MathFormula formula="y = ax^2 + bx + c" /> (kde <MathFormula formula="a \neq 0" />).
        Graf je <strong>parabola</strong>.
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
          <div class="text-2xl mb-2">⬆️</div>
          <p class="text-sm font-semibold text-blue-800"><MathFormula formula="a > 0" /></p>
          <p class="text-xs text-gray-600 mt-1">Parabola otvorená nahor, má <strong>minimum</strong></p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
          <div class="text-2xl mb-2">⬇️</div>
          <p class="text-sm font-semibold text-blue-800"><MathFormula formula="a < 0" /></p>
          <p class="text-xs text-gray-600 mt-1">Parabola otvorená nadol, má <strong>maximum</strong></p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
          <div class="text-2xl mb-2">📍</div>
          <p class="text-sm font-semibold text-blue-800">Vrchol V</p>
          <p class="text-xs text-gray-600 mt-1">Extrém funkcie, leží na osi súmernosti</p>
        </div>
      </div>

      <!-- Kľúčové vzorce -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-blue-800 mb-4">Kľúčové vzorce</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-1">Os súmernosti paraboly:</p>
            <MathFormula display formula="x_V = -\frac{b}{2a}" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-1">Súradnica vrcholu:</p>
            <MathFormula display formula="V = \left(-\frac{b}{2a},\; f\!\left(-\frac{b}{2a}\right)\right)" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-1">Diskriminant (priesečníky s os. x):</p>
            <MathFormula display formula="D = b^2 - 4ac" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-1">Viètove vzťahy (korene x₁, x₂):</p>
            <MathFormula display formula="x_1 + x_2 = -\frac{b}{a}, \quad x_1 \cdot x_2 = \frac{c}{a}" />
          </div>
        </div>
      </div>

      <!-- Diskriminant a priesečníky -->
      <div class="mb-6">
        <h3 class="font-semibold text-gray-800 mb-3">Počet priesečníkov s osou x podľa D:</h3>
        <div class="grid md:grid-cols-3 gap-3 text-sm text-center">
          <div class="border border-green-200 bg-green-50 rounded-xl p-3">
            <p class="font-bold text-green-700"><MathFormula formula="D > 0" /></p>
            <p class="text-gray-600">dva rôzne korene <MathFormula formula="x_1 \neq x_2" /></p>
          </div>
          <div class="border border-yellow-200 bg-yellow-50 rounded-xl p-3">
            <p class="font-bold text-yellow-700"><MathFormula formula="D = 0" /></p>
            <p class="text-gray-600">dvojnásobný koreň <MathFormula formula="x_1 = x_2" /></p>
          </div>
          <div class="border border-red-200 bg-red-50 rounded-xl p-3">
            <p class="font-bold text-red-700"><MathFormula formula="D < 0" /></p>
            <p class="text-gray-600">žiadny reálny koreň</p>
          </div>
        </div>
      </div>

      <!-- Interaktívny graf kvadratickej funkcie -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny graf kvadratickej funkcie</h3>

        <!-- Sliders a, b, c -->
        <div class="grid sm:grid-cols-3 gap-5 mb-4">
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Koef. <em>a</em></span>
              <span class="font-bold text-blue-600">a = {{ quadA }}</span>
            </label>
            <input v-model.number="quadA" type="range" min="-3" max="3" step="0.5" class="w-full accent-blue-500 cursor-pointer" >
            <div class="flex justify-between text-xs text-gray-400 mt-0.5"><span>−3</span><span>0</span><span>3</span></div>
          </div>
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Koef. <em>b</em></span>
              <span class="font-bold text-blue-600">b = {{ quadB }}</span>
            </label>
            <input v-model.number="quadB" type="range" min="-5" max="5" step="0.5" class="w-full accent-blue-500 cursor-pointer" >
            <div class="flex justify-between text-xs text-gray-400 mt-0.5"><span>−5</span><span>0</span><span>5</span></div>
          </div>
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Koef. <em>c</em></span>
              <span class="font-bold text-blue-600">c = {{ quadC }}</span>
            </label>
            <input v-model.number="quadC" type="range" min="-5" max="5" step="0.5" class="w-full accent-blue-500 cursor-pointer" >
            <div class="flex justify-between text-xs text-gray-400 mt-0.5"><span>−5</span><span>0</span><span>5</span></div>
          </div>
        </div>

        <!-- Upozornenie pre a=0 -->
        <div v-if="quadA === 0" class="bg-yellow-50 border border-yellow-300 rounded-xl p-3 mb-3 text-sm text-yellow-800">
          ⚠️ Pre <strong>a = 0</strong> nie je funkcia kvadratická — je lineárna. Nastav a ≠ 0.
        </div>

        <!-- Rovnica + info -->
        <div v-if="quadA !== 0" class="grid sm:grid-cols-3 gap-2 mb-3 text-sm">
          <div class="bg-blue-50 rounded-xl py-2 px-3 text-center font-mono font-semibold text-blue-700">
            {{ quadEquation }}
          </div>
          <div class="bg-gray-50 rounded-xl py-2 px-3 text-center text-gray-700">
            Vrchol&nbsp;<strong class="text-red-600">V({{ quadFmt(quadVertexX) }}, {{ quadFmt(quadVertexY) }})</strong>
          </div>
          <div :class="['rounded-xl py-2 px-3 text-center', quadDiscriminant > 0 ? 'bg-green-50 text-green-800' : quadDiscriminant === 0 ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-800']">
            D = {{ quadFmt(quadDiscriminant) }}
            <span class="text-xs ml-1">
              {{ quadDiscriminant > 0 ? '(2 korene)' : quadDiscriminant === 0 ? '(1 koreň)' : '(žiadny)' }}
            </span>
          </div>
        </div>

        <!-- SVG Graf -->
        <svg
          v-if="quadA !== 0"
          viewBox="-5.8 -5.8 11.6 11.6"
          width="100%"
          height="320"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Graf kvadratickej funkcie ${quadEquation}`"
          class="block"
        >
          <defs>
            <clipPath id="quadClip">
              <rect x="-5.8" y="-5.8" width="11.6" height="11.6" />
            </clipPath>
            <marker id="qArrowX" markerWidth="0.5" markerHeight="0.5" refX="0.4" refY="0.25" orient="auto">
              <polygon points="0 0, 0.5 0.25, 0 0.5" fill="#6b7280" />
            </marker>
            <marker id="qArrowY" markerWidth="0.5" markerHeight="0.5" refX="0.25" refY="0.4" orient="auto">
              <polygon points="0 0.5, 0.25 0, 0.5 0.5" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Jemná mriežka -->
          <g stroke="#f3f4f6" stroke-width="0.06">
            <line v-for="i in gridLines" :key="`qgx${i}`" :x1="i" y1="-5.5" :x2="i" y2="5.5" />
            <line v-for="i in gridLines" :key="`qgy${i}`" x1="-5.5" :y1="i" x2="5.5" :y2="i" />
          </g>

          <!-- Osi -->
          <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#6b7280" stroke-width="0.09" marker-end="url(#qArrowX)" />
          <line x1="0" y1="5.5" x2="0" y2="-5.5" stroke="#6b7280" stroke-width="0.09" marker-end="url(#qArrowY)" />
          <text x="5.35" y="0.45" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">x</text>
          <text x="0.18" y="-5.2" font-size="0.45" fill="#374151" font-family="serif" font-style="italic">y</text>

          <!-- Číslice na osiach -->
          <g font-size="0.3" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`qlx${i}`" :x="i" y="0.55">{{ i }}</text>
          </g>
          <g font-size="0.3" fill="#9ca3af" text-anchor="end" font-family="sans-serif">
            <text v-for="i in [-4,-3,-2,-1,1,2,3,4]" :key="`qly${i}`" x="-0.18" :y="-i + 0.1">{{ i }}</text>
          </g>

          <!-- Os súmernosti (prerušovaná) -->
          <line
            :x1="quadVertexX" y1="-5.5"
            :x2="quadVertexX" y2="5.5"
            stroke="#93c5fd"
            stroke-width="0.08"
            stroke-dasharray="0.22,0.14"
            clip-path="url(#quadClip)"
          />
          <text
            :x="quadVertexX + 0.15"
            y="-4.8"
            font-size="0.3"
            fill="#3b82f6"
            font-family="sans-serif"
          >x = {{ quadFmt(quadVertexX) }}</text>

          <!-- Parabola -->
          <path
            :d="quadPath"
            fill="none"
            stroke="#2563eb"
            stroke-width="0.13"
            stroke-linejoin="round"
            stroke-linecap="round"
            clip-path="url(#quadClip)"
          />

          <!-- Vrchol (červený) -->
          <circle :cx="quadVertexX" :cy="-quadVertexY" r="0.2" fill="#dc2626" stroke="white" stroke-width="0.07" />
          <text
            :x="quadVertexX + (quadVertexX > 3 ? -0.3 : 0.28)"
            :y="-quadVertexY + (quadA > 0 ? 0.5 : -0.32)"
            font-size="0.32"
            fill="#dc2626"
            font-family="sans-serif"
            font-weight="bold"
            :text-anchor="quadVertexX > 3 ? 'end' : 'start'"
          >V({{ quadFmt(quadVertexX) }}, {{ quadFmt(quadVertexY) }})</text>

          <!-- Priesečníky s os. x (zelené) -->
          <template v-if="quadDiscriminant >= 0">
            <g v-for="(root, ri) in quadRoots" :key="`root${ri}`">
              <circle
                v-if="Math.abs(root) <= 5.5"
                :cx="root"
                cy="0"
                r="0.2"
                fill="#059669"
                stroke="white"
                stroke-width="0.07"
              />
              <text
                v-if="Math.abs(root) <= 5.5"
                :x="root"
                y="-0.35"
                font-size="0.28"
                fill="#059669"
                font-family="sans-serif"
                text-anchor="middle"
              >x{{ ri + 1 }}={{ quadFmt(root) }}</text>
            </g>
          </template>

          <!-- Priesečník s os. y (fialový) — vždy (0, c) -->
          <circle
            v-if="Math.abs(quadC) <= 5.3"
            cx="0"
            :cy="-quadC"
            r="0.2"
            fill="#7c3aed"
            stroke="white"
            stroke-width="0.07"
          />
          <text
            v-if="Math.abs(quadC) <= 5.3"
            x="0.28"
            :y="-quadC - 0.3"
            font-size="0.28"
            fill="#7c3aed"
            font-family="sans-serif"
          >(0, {{ quadC }})</text>
        </svg>

        <!-- Legenda -->
        <div v-if="quadA !== 0" class="flex gap-4 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-red-600 inline-block" /> vrchol paraboly</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-600 inline-block" /> priesečník s os. x</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-violet-600 inline-block" /> priesečník s os. y</span>
          <span class="flex items-center gap-1.5"><span class="h-0.5 w-5 bg-blue-300 inline-block" style="border-top: 2px dashed #93c5fd" /> os súmernosti</span>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">
          <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-sm font-bold mr-2">Príklad 2</span>
          Analyzuj funkciu <MathFormula formula="y = x^2 - 4x + 3" />.
        </h3>
        <div class="space-y-2 text-gray-700 text-sm">
          <p><strong>Koeficienty:</strong> <MathFormula formula="a = 1, \; b = -4, \; c = 3" /></p>
          <p><strong>Os súmernosti:</strong></p>
          <MathFormula display formula="x_V = -\frac{-4}{2 \cdot 1} = \frac{4}{2} = 2" />
          <p><strong>Vrchol:</strong></p>
          <MathFormula display formula="y_V = 2^2 - 4 \cdot 2 + 3 = 4 - 8 + 3 = -1 \quad \Rightarrow \quad V(2,\,-1)" />
          <p><strong>Diskriminant:</strong></p>
          <MathFormula display formula="D = (-4)^2 - 4 \cdot 1 \cdot 3 = 16 - 12 = 4 > 0" />
          <p><strong>Korene (priesečníky s os. x):</strong></p>
          <MathFormula display formula="x_{1,2} = \frac{4 \pm \sqrt{4}}{2} = \frac{4 \pm 2}{2} \quad \Rightarrow \quad x_1 = 1, \; x_2 = 3" />
          <p><strong>Overenie Vièta:</strong> <MathFormula formula="x_1 + x_2 = 4 = \tfrac{4}{1}" />, <MathFormula formula="x_1 \cdot x_2 = 3 = \tfrac{3}{1}" /> ✓</p>
          <p class="mt-2 font-semibold text-blue-700">Záver: parabola otvorenou nahor (a=1&gt;0), minimum v bode V(2, −1).</p>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 3: Kvadratická nerovnica z grafu ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Kvadratická nerovnica z grafu</h2>
      <p class="text-gray-700 mb-4">
        Graf paraboly nám umožňuje priamo odčítať riešenie kvadratickej nerovnice — stačí určiť,
        kde je graf <em>nad</em> alebo <em>pod</em> osou x.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
          <h3 class="font-semibold text-green-800 mb-2">Nerovnica <MathFormula formula="ax^2 + bx + c > 0" /></h3>
          <p class="text-sm text-gray-700">Hľadáme, kde je graf <strong>nad osou x</strong>.</p>
          <ul class="text-sm text-gray-600 mt-2 space-y-1">
            <li>• Ak <MathFormula formula="a > 0" /> a <MathFormula formula="D > 0" />: riešenie je <MathFormula formula="x \in (-\infty, x_1) \cup (x_2, +\infty)" /></li>
            <li>• Ak <MathFormula formula="a < 0" /> a <MathFormula formula="D > 0" />: riešenie je <MathFormula formula="x \in (x_1, x_2)" /></li>
          </ul>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h3 class="font-semibold text-orange-800 mb-2">Nerovnica <MathFormula formula="ax^2 + bx + c < 0" /></h3>
          <p class="text-sm text-gray-700">Hľadáme, kde je graf <strong>pod osou x</strong>.</p>
          <ul class="text-sm text-gray-600 mt-2 space-y-1">
            <li>• Ak <MathFormula formula="a > 0" /> a <MathFormula formula="D > 0" />: riešenie je <MathFormula formula="x \in (x_1, x_2)" /></li>
            <li>• Ak <MathFormula formula="a < 0" /> a <MathFormula formula="D > 0" />: riešenie je <MathFormula formula="x \in (-\infty, x_1) \cup (x_2, +\infty)" /></li>
          </ul>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">
          <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg text-sm font-bold mr-2">Príklad 3</span>
          Riešenie nerovnice <MathFormula formula="x^2 - 4x + 3 < 0" />.
        </h3>
        <div class="space-y-2 text-gray-700 text-sm">
          <p>Z príkladu 2 vieme, že parabola (<MathFormula formula="a = 1 > 0" />) pretína os x v bodoch <MathFormula formula="x_1 = 1" /> a <MathFormula formula="x_2 = 3" />.</p>
          <p>Hľadáme, kde je parabola <strong>pod osou x</strong> (hodnoty y &lt; 0) → medzi koreňmi.</p>
          <MathFormula display formula="x^2 - 4x + 3 < 0 \quad \Rightarrow \quad x \in (1,\, 3)" />
          <p class="font-semibold text-blue-700">Riešenie: <MathFormula formula="x \in (1, 3)" /></p>
        </div>
      </div>
    </section>

    <!-- ===== ZHRNUTIE ===== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <h3 class="font-semibold text-blue-700 mb-2">Lineárna funkcia <MathFormula formula="y = kx + q" /></h3>
          <ul class="space-y-1">
            <li>• <MathFormula formula="k" /> = smernica = <MathFormula formula="\tan(\alpha)" /></li>
            <li>• <MathFormula formula="q" /> = priesečník s osou y</li>
            <li>• <MathFormula formula="k > 0" /> rastúca, <MathFormula formula="k < 0" /> klesajúca, <MathFormula formula="k = 0" /> konštantná</li>
            <li>• Z dvoch bodov: <MathFormula formula="k = \frac{y_2 - y_1}{x_2 - x_1}" /></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-blue-700 mb-2">Kvadratická funkcia <MathFormula formula="y = ax^2 + bx + c" /></h3>
          <ul class="space-y-1">
            <li>• Graf je parabola</li>
            <li>• Os súmernosti: <MathFormula formula="x_V = -\frac{b}{2a}" /></li>
            <li>• <MathFormula formula="a > 0" /> → min, <MathFormula formula="a < 0" /> → max</li>
            <li>• <MathFormula formula="D > 0" /> → 2 korene, <MathFormula formula="D = 0" /> → 1, <MathFormula formula="D < 0" /> → žiadny</li>
            <li>• Vièt: <MathFormula formula="x_1 + x_2 = -b/a" />, <MathFormula formula="x_1 x_2 = c/a" /></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ===== KVÍZ ===== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <!-- Progress -->
        <div class="bg-blue-50 px-6 py-3 border-b border-gray-100">
          <div class="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span data-testid="quiz-progress">
              {{ quizFinished ? 'Kvíz dokončený' : `Otázka ${currentQ + 1} z ${quiz.length}` }}
            </span>
            <span>{{ quizScore }} / {{ quiz.length }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5">
            <div
              class="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
              :style="{ width: `${((quizFinished ? quiz.length : currentQ) / quiz.length) * 100}%` }"
            />
          </div>
        </div>

        <div class="p-6">
          <Transition name="fade" mode="out-in">
            <!-- Výsledok -->
            <div v-if="quizFinished" key="result" class="text-center py-4" data-testid="result">
              <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
              <p class="text-xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
              <p class="text-gray-600 mb-2">
                Správne odpovede: <span data-testid="score" class="font-bold text-blue-700">{{ quizScore }} / {{ quiz.length }}</span>
              </p>
              <p class="text-sm text-gray-500 mb-6">{{ Math.round((quizScore / quiz.length) * 100) }} %</p>
              <button
                type="button"
                data-testid="reset-btn"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
                @click="resetQuiz"
              >
                Skúsiť znova
              </button>
            </div>

            <!-- Otázka -->
            <div v-else :key="`q-${currentQ}`" data-testid="question">
              <p class="text-gray-800 font-medium mb-5 text-base leading-relaxed">
                {{ currentQuestion.question }}
              </p>

              <div class="space-y-3 mb-5">
                <button
                  v-for="(option, i) in currentQuestion.options"
                  :key="i"
                  type="button"
                  :data-testid="`option-${i}`"
                  :disabled="selectedAnswer !== null"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium',
                    selectedAnswer === null
                      ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                      : i === currentQuestion.correctIndex
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : selectedAnswer === i
                          ? 'border-red-400 bg-red-50 text-red-800'
                          : 'border-gray-200 text-gray-400 cursor-not-allowed'
                  ]"
                  @click="selectAnswer(i)"
                >
                  <span class="font-bold mr-2 text-blue-600">{{ String.fromCharCode(65 + i) }}.</span>
                  {{ option }}
                </button>
              </div>

              <Transition name="fade">
                <div
                  v-if="selectedAnswer !== null"
                  data-testid="feedback"
                  :class="[
                    'rounded-xl p-4 text-sm mb-4',
                    selectedAnswer === currentQuestion.correctIndex
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  ]"
                >
                  <span class="font-semibold mr-1">
                    {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
                  </span>
                  {{ currentQuestion.explanation }}
                </div>
              </Transition>

              <div class="flex justify-end">
                <button
                  v-if="selectedAnswer !== null"
                  type="button"
                  data-testid="next-btn"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm"
                  @click="nextQuestion"
                >
                  {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interaktívny graf lineárnej funkcie
const linearK = ref(1)
const linearQ = ref(0)

const xIntercept = computed(() => -linearQ.value / linearK.value)

const xInterceptLabel = computed(() => {
  const v = xIntercept.value
  return Number.isInteger(v) ? String(v) : v.toFixed(2)
})

const gridLines = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]

const linearEquation = computed(() => {
  const k = linearK.value
  const q = linearQ.value
  let kPart = ''
  if (k === 1) kPart = 'x'
  else if (k === -1) kPart = '−x'
  else if (k === 0) kPart = ''
  else kPart = `${k < 0 ? k : k}x`
  let qPart = ''
  if (q > 0) qPart = kPart ? ` + ${q}` : `${q}`
  else if (q < 0) qPart = ` − ${Math.abs(q)}`
  else qPart = ''
  if (k === 0 && q === 0) return 'y = 0'
  if (k === 0) return `y = ${q}`
  return `y = ${kPart}${qPart}`
})

// Interaktívny graf kvadratickej funkcie
const quadA = ref(1)
const quadB = ref(0)
const quadC = ref(0)

const quadDiscriminant = computed(() => quadB.value ** 2 - 4 * quadA.value * quadC.value)
const quadVertexX = computed(() => -quadB.value / (2 * quadA.value))
const quadVertexY = computed(() => quadA.value * quadVertexX.value ** 2 + quadB.value * quadVertexX.value + quadC.value)

const quadRoots = computed(() => {
  const D = quadDiscriminant.value
  const a = quadA.value
  const b = quadB.value
  if (D < 0) return []
  if (D === 0) return [-b / (2 * a)]
  const sqrtD = Math.sqrt(D)
  return [(-b - sqrtD) / (2 * a), (-b + sqrtD) / (2 * a)]
})

const quadPath = computed(() => {
  const a = quadA.value
  const b = quadB.value
  const c = quadC.value
  const pts: string[] = []
  for (let xi = -5.8; xi <= 5.81; xi += 0.1) {
    const x = Math.round(xi * 10) / 10
    const ySvg = -(a * x * x + b * x + c)
    pts.push(`${x.toFixed(1)},${ySvg.toFixed(3)}`)
  }
  return 'M ' + pts.join(' L ')
})

const quadEquation = computed(() => {
  const a = quadA.value
  const b = quadB.value
  const c = quadC.value
  const aPart = a === 1 ? 'x²' : a === -1 ? '−x²' : `${a}x²`
  let bPart = ''
  if (b === 1) bPart = ' + x'
  else if (b === -1) bPart = ' − x'
  else if (b > 0) bPart = ` + ${b}x`
  else if (b < 0) bPart = ` − ${Math.abs(b)}x`
  let cPart = ''
  if (c > 0) cPart = ` + ${c}`
  else if (c < 0) cPart = ` − ${Math.abs(c)}`
  return `y = ${aPart}${bPart}${cPart}`
})

function quadFmt(n: number): string {
  const r = Math.round(n * 100) / 100
  return Number.isInteger(r) ? String(r) : r.toFixed(2)
}

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Lineárna funkcia y = −3x + 5 je:',
    options: ['Rastúca', 'Klesajúca', 'Konštantná', 'Kvadratická'],
    correctIndex: 1,
    explanation: 'Smernica k = −3 < 0, takže funkcia je klesajúca.',
  },
  {
    question: 'Aká je smernica priamky prechádzajúcej bodmi A(0, 2) a B(4, 10)?',
    options: ['k = 0,5', 'k = 1', 'k = 2', 'k = 4'],
    correctIndex: 2,
    explanation: 'k = (10 − 2) / (4 − 0) = 8 / 4 = 2.',
  },
  {
    question: 'Kde leží os súmernosti paraboly y = 2x² − 8x + 1?',
    options: ['x = −2', 'x = 2', 'x = 4', 'x = −4'],
    correctIndex: 1,
    explanation: 'xV = −b/(2a) = −(−8)/(2·2) = 8/4 = 2.',
  },
  {
    question: 'Parabola y = −x² + 4x − 3 má:',
    options: ['Minimum v bode V(2, 1)', 'Maximum v bode V(2, 1)', 'Minimum v bode V(−2, −3)', 'Žiadny extrém'],
    correctIndex: 1,
    explanation: 'a = −1 < 0 → parabola otvorená nadol → maximum. xV = 4/2 = 2, yV = −4+8−3 = 1. V(2,1).',
  },
  {
    question: 'Koľko reálnych koreňov má rovnica x² + 2x + 5 = 0?',
    options: ['Žiadny', 'Jeden (dvojnásobný)', 'Dva rôzne', 'Závisí od a'],
    correctIndex: 0,
    explanation: 'D = 4 − 4·1·5 = 4 − 20 = −16 < 0 → žiadny reálny koreň.',
  },
  {
    question: 'Riešenie nerovnice x² − x − 6 < 0 (korene x₁ = −2, x₂ = 3, a = 1) je:',
    options: ['x ∈ (−∞, −2) ∪ (3, +∞)', 'x ∈ (−2, 3)', 'x ∈ [−2, 3]', 'x ∈ ∅'],
    correctIndex: 1,
    explanation: 'Pre a > 0 je parabola pod osou x práve medzi koreňmi: x ∈ (−2, 3).',
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
  title: 'Lineárna a kvadratická funkcia | Matematika | Náuka Portál',
  description: 'Kompletný výklad lineárnej a kvadratickej funkcie pre gymnazistov: smernica, parabola, vrchol, diskriminant, Viètove vzťahy a nerovnice z grafu. S kvízom.',
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
