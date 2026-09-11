<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/funkcie" class="hover:text-blue-600 transition-colors">Funkcie a grafy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Goniometrické funkcie</span>
    </nav>

    <!-- Title -->
    <h1 class="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
      〰️ Goniometrické funkcie
    </h1>
    <p class="text-gray-600 text-lg mb-10 leading-relaxed">
      Goniometrické funkcie — sínus, kosínus, tangens a kotangens — opisujú vzťah medzi uhlom
      a pomerom strán pravouhlého trojuholníka. Pomocou <strong>jednotkovej kružnice</strong>
      ich môžeme definovať pre ľubovoľný uhol, nielen ostrý. Uplatňujú sa v geometrii, fyzike,
      technike aj spracovaní signálov.
    </p>

    <!-- ─── Section 1: Jednotková kružnica ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Jednotková kružnica</h2>
      <p class="text-gray-700 mb-5 leading-relaxed">
        Jednotková kružnica je kružnica so stredom v počiatku súradnicovej sústavy a polomerom
        <MathFormula formula="r = 1" />. Pre každý uhol <MathFormula formula="\alpha" />
        definujeme bod <MathFormula formula="P" /> na kružnici a jeho súradnice priamo definujú
        goniometrické funkcie:
      </p>

      <MathFormula display formula="P = (\cos \alpha,\; \sin \alpha)" />

      <!-- SVG: unit circle with α = 60° -->
      <div class="flex justify-center my-8">
        <svg
          role="img"
          aria-label="Jednotková kružnica s vyznačeným bodom P=(cos 60°, sin 60°) a pravouhlým trojuholníkom vo vnútri kružnice"
          viewBox="0 0 360 320"
          width="360"
          height="320"
          class="max-w-full"
        >
          <defs>
            <marker id="gon-arrX" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
            </marker>
            <marker id="gon-arrY" markerWidth="8" markerHeight="8" refX="3" refY="0" orient="auto">
              <path d="M0,6 L3,0 L6,6 z" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Axes -->
          <line x1="20" y1="165" x2="340" y2="165" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#gon-arrX)" />
          <line x1="175" y1="305" x2="175" y2="15" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#gon-arrY)" />

          <!-- Axis labels -->
          <text x="334" y="179" font-size="13" fill="#6b7280" font-family="sans-serif">x</text>
          <text x="162" y="12" font-size="13" fill="#6b7280" font-family="sans-serif">y</text>
          <text x="160" y="180" font-size="12" fill="#9ca3af" font-family="sans-serif">O</text>

          <!-- Tick: r=1 on x-axis -->
          <line x1="290" y1="160" x2="290" y2="170" stroke="#9ca3af" stroke-width="1.5" />
          <text x="284" y="184" font-size="11" fill="#9ca3af" font-family="sans-serif">1</text>

          <!-- Tick: r=1 on y-axis -->
          <line x1="170" y1="50" x2="180" y2="50" stroke="#9ca3af" stroke-width="1.5" />
          <text x="184" y="54" font-size="11" fill="#9ca3af" font-family="sans-serif">1</text>

          <!-- Unit circle (radius = 115px → point at 60° is at x=175+57.5=232.5, y=165-99.6=65.4) -->
          <circle cx="175" cy="165" r="115" fill="none" stroke="#3b82f6" stroke-width="2" />

          <!-- Angle arc (from 0° to 60°, radius 34) -->
          <!-- Arc from (175+34, 165) to (175+34*cos60°,165-34*sin60°) = (209,165) → (192,135.6) -->
          <path d="M 209,165 A 34,34 0 0,0 192,135.6" fill="none" stroke="#f59e0b" stroke-width="2" />
          <text x="213" y="155" font-size="12" fill="#d97706" font-family="sans-serif" font-style="italic">α = 60°</text>

          <!-- Right triangle fill -->
          <!-- center (175,165), foot (232.5,165), P (232.5, 65.4) -->
          <polygon points="175,165 232.5,165 232.5,65.4" fill="#dbeafe" fill-opacity="0.6" />

          <!-- Hypotenuse / radius line to P -->
          <line x1="175" y1="165" x2="232.5" y2="65.4" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round" />

          <!-- Horizontal leg: cos α -->
          <line x1="175" y1="165" x2="232.5" y2="165" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" />

          <!-- Vertical leg: sin α -->
          <line x1="232.5" y1="165" x2="232.5" y2="65.4" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" />

          <!-- Right angle mark -->
          <rect x="221.5" y="154" width="11" height="11" fill="none" stroke="#6b7280" stroke-width="1.5" />

          <!-- Point P -->
          <circle cx="232.5" cy="65.4" r="5" fill="#1d4ed8" />
          <text x="239" y="62" font-size="13" font-weight="bold" fill="#1d4ed8" font-family="sans-serif">P</text>

          <!-- cos label (green) -->
          <text x="188" y="183" font-size="12" fill="#16a34a" font-weight="bold" font-family="sans-serif">cos 60° = ½</text>

          <!-- sin label (red) -->
          <text x="238" y="118" font-size="12" fill="#dc2626" font-weight="bold" font-family="sans-serif">sin 60° = √3/2</text>

          <!-- Radius label -->
          <text x="192" y="113" font-size="12" fill="#1d4ed8" font-family="sans-serif" font-style="italic">r = 1</text>

          <!-- Dashed projections to axes -->
          <line x1="232.5" y1="65.4" x2="232.5" y2="165" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" />
          <line x1="175" y1="65.4" x2="232.5" y2="65.4" stroke="#16a34a" stroke-width="1" stroke-dasharray="4 3" opacity="0.5" />
        </svg>
      </div>

      <!-- ═══ Interaktívny jednotkový kruh ═══ -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny jednotkový kruh</h3>

        <!-- Slider pre uhol α -->
        <div class="mb-4">
          <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
            <span>Uhol <em>α</em></span>
            <span class="font-bold text-blue-600">α = {{ ucAngle }}°</span>
          </label>
          <input v-model.number="ucAngle" type="range" min="0" max="360" step="1" class="w-full accent-blue-500 cursor-pointer" />
          <div class="flex justify-between text-xs text-gray-400 mt-0.5">
            <span>0°</span><span>90°</span><span>180°</span><span>270°</span><span>360°</span>
          </div>
        </div>

        <!-- Hodnoty sin a cos -->
        <div class="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div class="bg-red-50 rounded-xl py-2 px-3 text-center">
            <span class="text-red-700 font-semibold">sin {{ ucAngle }}° = </span>
            <span class="font-bold text-red-800">{{ ucSinLabel }}</span>
          </div>
          <div class="bg-green-50 rounded-xl py-2 px-3 text-center">
            <span class="text-green-700 font-semibold">cos {{ ucAngle }}° = </span>
            <span class="font-bold text-green-800">{{ ucCosLabel }}</span>
          </div>
        </div>

        <!-- SVG jednotková kružnica -->
        <svg
          viewBox="-1.6 -1.6 3.2 3.2"
          width="100%"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Jednotková kružnica pre uhol α=${ucAngle}°, sin=${ucSinLabel}, cos=${ucCosLabel}`"
          class="block"
        >
          <defs>
            <marker id="ucArrX" markerWidth="0.12" markerHeight="0.12" refX="0.1" refY="0.06" orient="auto">
              <polygon points="0 0, 0.12 0.06, 0 0.12" fill="#6b7280" />
            </marker>
            <marker id="ucArrY" markerWidth="0.12" markerHeight="0.12" refX="0.06" refY="0.1" orient="auto">
              <polygon points="0 0.12, 0.06 0, 0.12 0.12" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Jemná mriežka -->
          <g stroke="#f3f4f6" stroke-width="0.025">
            <line x1="-1" y1="-1.5" x2="-1" y2="1.5" />
            <line x1="1" y1="-1.5" x2="1" y2="1.5" />
            <line x1="-1.5" y1="-1" x2="1.5" y2="-1" />
            <line x1="-1.5" y1="1" x2="1.5" y2="1" />
          </g>

          <!-- Osi -->
          <line x1="-1.5" y1="0" x2="1.5" y2="0" stroke="#6b7280" stroke-width="0.03" marker-end="url(#ucArrX)" />
          <line x1="0" y1="1.5" x2="0" y2="-1.5" stroke="#6b7280" stroke-width="0.03" marker-end="url(#ucArrY)" />
          <text x="1.45" y="0.1" font-size="0.12" fill="#374151" font-family="sans-serif" font-style="italic">x</text>
          <text x="0.06" y="-1.45" font-size="0.12" fill="#374151" font-family="sans-serif" font-style="italic">y</text>

          <!-- Popisky -1 a 1 -->
          <g font-size="0.1" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text x="1" y="0.16">1</text>
            <text x="-1" y="0.16">-1</text>
            <text x="-0.12" y="-0.96">1</text>
            <text x="-0.12" y="1.06">-1</text>
          </g>

          <!-- Jednotková kružnica -->
          <circle cx="0" cy="0" r="1" fill="none" stroke="#3b82f6" stroke-width="0.04" />

          <!-- Oblúk uhla (polyline aproximácia) -->
          <path :d="ucArcPath" fill="#fef3c7" fill-opacity="0.5" stroke="#f59e0b" stroke-width="0.03" />

          <!-- Polomer / hypotenúza -->
          <line x1="0" y1="0" :x2="ucPoint.x" :y2="-ucPoint.y" stroke="#1d4ed8" stroke-width="0.05" stroke-linecap="round" />

          <!-- cos α — horizontálna priemerka (zelená) -->
          <line x1="0" y1="0" :x2="ucPoint.x" y2="0" stroke="#16a34a" stroke-width="0.05" stroke-linecap="round" />
          <!-- prerušovaná projekcia na x-os -->
          <line :x1="ucPoint.x" :y1="-ucPoint.y" :x2="ucPoint.x" y2="0" stroke="#16a34a" stroke-width="0.025" stroke-dasharray="0.06,0.04" />

          <!-- sin α — vertikálna priemerka (červená) -->
          <line :x1="ucPoint.x" y1="0" :x2="ucPoint.x" :y2="-ucPoint.y" stroke="#dc2626" stroke-width="0.05" stroke-linecap="round" />
          <!-- prerušovaná projekcia na y-os -->
          <line x1="0" :y1="-ucPoint.y" :x2="ucPoint.x" :y2="-ucPoint.y" stroke="#dc2626" stroke-width="0.025" stroke-dasharray="0.06,0.04" />

          <!-- Bod P -->
          <circle :cx="ucPoint.x" :cy="-ucPoint.y" r="0.07" fill="#1d4ed8" stroke="white" stroke-width="0.025" />
          <text
            :x="ucPoint.x + (ucPoint.x >= 0 ? 0.1 : -0.1)"
            :y="-ucPoint.y + (ucPoint.y <= 0 ? -0.12 : 0.15)"
            font-size="0.11"
            font-weight="bold"
            fill="#1d4ed8"
            font-family="sans-serif"
            :text-anchor="ucPoint.x >= 0 ? 'start' : 'end'"
          >P</text>

          <!-- Popis uhla -->
          <text x="0.37" y="-0.07" font-size="0.1" fill="#d97706" font-family="sans-serif" font-style="italic">α={{ ucAngle }}°</text>

          <!-- Popis cos (zelený) -->
          <text
            :x="ucPoint.x / 2"
            y="0.14"
            font-size="0.1"
            fill="#16a34a"
            font-family="sans-serif"
            text-anchor="middle"
            font-weight="bold"
          >cos = {{ ucCosLabel }}</text>

          <!-- Popis sin (červený) -->
          <text
            :x="ucPoint.x + (ucPoint.x >= 0 ? 0.12 : -0.12)"
            :y="-ucPoint.y / 2 + 0.04"
            font-size="0.1"
            fill="#dc2626"
            font-family="sans-serif"
            :text-anchor="ucPoint.x >= 0 ? 'start' : 'end'"
            font-weight="bold"
          >sin = {{ ucSinLabel }}</text>
        </svg>

        <!-- Legenda -->
        <div class="flex gap-4 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-blue-700 inline-block" /> polomer r = 1</span>
          <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-green-600 inline-block" /> cos α (x-súradnica)</span>
          <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-red-600 inline-block" /> sin α (y-súradnica)</span>
        </div>
      </div>

      <!-- Definition box -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-blue-800 mb-3">Definícia goniometrických funkcií</h3>
        <div class="space-y-2 text-gray-700">
          <p><MathFormula formula="\sin \alpha" /> &mdash; y-súradnica bodu P na jednotkovej kružnici</p>
          <p><MathFormula formula="\cos \alpha" /> &mdash; x-súradnica bodu P na jednotkovej kružnici</p>
          <p>
            <MathFormula formula="\tg \alpha = \dfrac{\sin \alpha}{\cos \alpha}" />
            &mdash; definovaný pre <MathFormula formula="\alpha \neq 90° + k \cdot 180°,\; k \in \mathbb{Z}" />
          </p>
          <p>
            <MathFormula formula="\cotg \alpha = \dfrac{\cos \alpha}{\sin \alpha}" />
            &mdash; definovaný pre <MathFormula formula="\alpha \neq k \cdot 180°,\; k \in \mathbb{Z}" />
          </p>
        </div>
      </div>

      <p class="text-gray-700 mb-3">
        Z Pytagorovej vety aplikovanej na pravouhlý trojuholník v jednotkovej kružnici plynie
        <strong>základný goniometrický vzťah</strong>:
      </p>
      <MathFormula display formula="\sin^2 \alpha + \cos^2 \alpha = 1" />
      <p class="text-gray-600 text-sm mt-2">
        Tento vzťah platí pre každý uhol <MathFormula formula="\alpha" /> a je základom mnohých
        goniometrických identít a dôkazov.
      </p>
    </section>

    <!-- ─── Section 2: Špeciálne uhly ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Hodnoty pre špeciálne uhly</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Hodnoty pre uhly 0°, 30°, 45°, 60°, 90° treba vedieť naspamäť.
        Pomôcka pre sínus: <MathFormula formula="\sin 0°, \sin 30°, \sin 45°, \sin 60°, \sin 90°" />
        sú postupne <MathFormula formula="\tfrac{\sqrt{0}}{2},\tfrac{\sqrt{1}}{2},\tfrac{\sqrt{2}}{2},\tfrac{\sqrt{3}}{2},\tfrac{\sqrt{4}}{2}" />.
        Kosínus ide v opačnom poradí.
      </p>

      <!-- Special values table -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-center border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="px-4 py-3 font-semibold">Uhol α</th>
              <th class="px-4 py-3 font-semibold">sin α</th>
              <th class="px-4 py-3 font-semibold">cos α</th>
              <th class="px-4 py-3 font-semibold">tg α</th>
              <th class="px-4 py-3 font-semibold">cotg α</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in specialAngles" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-blue-50'">
              <td class="px-4 py-3 font-bold text-blue-700">{{ row.angle }}</td>
              <td class="px-4 py-3 text-gray-700">{{ row.sin }}</td>
              <td class="px-4 py-3 text-gray-700">{{ row.cos }}</td>
              <td class="px-4 py-3 text-gray-700">{{ row.tg }}</td>
              <td class="px-4 py-3 text-gray-700">{{ row.cotg }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Example 1 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-5">
        <h3 class="font-bold text-green-800 mb-3">Príklad 1: Overenie základného vzťahu pre α = 60°</h3>
        <p class="text-gray-700 mb-2">
          Overíme identitu <MathFormula formula="\sin^2 60° + \cos^2 60° = 1" />.
        </p>
        <p class="text-gray-700 mb-1">
          Dosadíme: <MathFormula formula="\sin 60° = \dfrac{\sqrt{3}}{2}" /> a
          <MathFormula formula="\cos 60° = \dfrac{1}{2}" />:
        </p>
        <MathFormula display formula="\left(\frac{\sqrt{3}}{2}\right)^2 + \left(\frac{1}{2}\right)^2 = \frac{3}{4} + \frac{1}{4} = \frac{4}{4} = 1 \checkmark" />
      </div>

      <!-- Example 2 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 class="font-bold text-green-800 mb-3">Príklad 2: Výpočet tangensu z tabuľkových hodnôt</h3>
        <p class="text-gray-700 mb-2">
          Vypočítame <MathFormula formula="\tg 30°" /> pomocou vzorca
          <MathFormula formula="\tg \alpha = \dfrac{\sin \alpha}{\cos \alpha}" />.
        </p>
        <MathFormula display formula="\tg 30° = \frac{\sin 30°}{\cos 30°} = \frac{\tfrac{1}{2}}{\tfrac{\sqrt{3}}{2}} = \frac{1}{2} \cdot \frac{2}{\sqrt{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3} \approx 0{,}577" />
        <p class="text-gray-600 text-sm mt-2">
          Výsledok sme racionalizovali: <MathFormula formula="\dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}" />.
        </p>
      </div>
    </section>

    <!-- ─── Section 3: Grafy ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Grafy goniometrických funkcií</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Každá goniometrická funkcia má charakteristický tvar, ktorý sa pravidelne opakuje
        — hovoríme o <strong>perióde</strong>. Sínus a kosínus sú ohraničené hodnotami
        <MathFormula formula="\langle -1, 1 \rangle" />, tangens a kotangens naopak nadobúdajú
        všetky reálne hodnoty.
      </p>

      <div class="grid gap-5 md:grid-cols-2 mb-8">
        <!-- Sine -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">
            Graf sínusu: <MathFormula formula="y = \sin x" />
          </h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li>Perióda: <MathFormula formula="T = 2\pi \approx 6{,}28" /></li>
            <li>Amplitúda: <MathFormula formula="A = 1" /></li>
            <li>Obor hodnôt: <MathFormula formula="\langle -1,\, 1 \rangle" /></li>
            <li>Nulové body: <MathFormula formula="x = k\pi,\; k \in \mathbb{Z}" /></li>
            <li>Maximum (<MathFormula formula="y=1" />): <MathFormula formula="x = \tfrac{\pi}{2} + 2k\pi" /></li>
            <li>Minimum (<MathFormula formula="y=-1" />): <MathFormula formula="x = -\tfrac{\pi}{2} + 2k\pi" /></li>
          </ul>
        </div>

        <!-- Cosine -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">
            Graf kosínusu: <MathFormula formula="y = \cos x" />
          </h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li>Perióda: <MathFormula formula="T = 2\pi \approx 6{,}28" /></li>
            <li>Amplitúda: <MathFormula formula="A = 1" /></li>
            <li>Obor hodnôt: <MathFormula formula="\langle -1,\, 1 \rangle" /></li>
            <li>Nulové body: <MathFormula formula="x = \tfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z}" /></li>
            <li>Maximum (<MathFormula formula="y=1" />): <MathFormula formula="x = 2k\pi" /></li>
            <li>Minimum (<MathFormula formula="y=-1" />): <MathFormula formula="x = \pi + 2k\pi" /></li>
          </ul>
        </div>

        <!-- Tangent -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">
            Graf tangensu: <MathFormula formula="y = \tg x" />
          </h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li>Perióda: <MathFormula formula="T = \pi \approx 3{,}14" /></li>
            <li>Obor hodnôt: <MathFormula formula="\mathbb{R} = (-\infty,\, +\infty)" /></li>
            <li>Nulové body: <MathFormula formula="x = k\pi,\; k \in \mathbb{Z}" /></li>
            <li>Zvislé asymptoty: <MathFormula formula="x = \tfrac{\pi}{2} + k\pi" /></li>
            <li>Na každom intervale rastúca funkcia</li>
          </ul>
        </div>

        <!-- Cotangent -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-semibold text-blue-800 mb-3">
            Graf kotangensu: <MathFormula formula="y = \cotg x" />
          </h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li>Perióda: <MathFormula formula="T = \pi \approx 3{,}14" /></li>
            <li>Obor hodnôt: <MathFormula formula="\mathbb{R} = (-\infty,\, +\infty)" /></li>
            <li>Nulové body: <MathFormula formula="x = \tfrac{\pi}{2} + k\pi,\; k \in \mathbb{Z}" /></li>
            <li>Zvislé asymptoty: <MathFormula formula="x = k\pi" /></li>
            <li>Na každom intervale klesajúca funkcia</li>
          </ul>
        </div>
      </div>

      <!-- ═══ Interaktívny graf sin/cos ═══ -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny graf y = A · sin(B · x) a y = A · cos(B · x)</h3>

        <div class="grid sm:grid-cols-2 gap-5 mb-4">
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Amplitúda <em>A</em></span>
              <span class="font-bold text-blue-600">A = {{ goniA }}</span>
            </label>
            <input v-model.number="goniA" type="range" min="0.5" max="3" step="0.5" class="w-full accent-blue-500 cursor-pointer" />
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0,5</span><span>1</span><span>1,5</span><span>2</span><span>2,5</span><span>3</span>
            </div>
          </div>
          <div>
            <label class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Frekvencia <em>B</em></span>
              <span class="font-bold text-blue-600">B = {{ goniB }}</span>
            </label>
            <input v-model.number="goniB" type="range" min="0.5" max="3" step="0.5" class="w-full accent-blue-500 cursor-pointer" />
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0,5</span><span>1</span><span>1,5</span><span>2</span><span>2,5</span><span>3</span>
            </div>
          </div>
        </div>

        <!-- Info: amplitúda a perióda -->
        <div class="grid sm:grid-cols-3 gap-2 mb-4 text-sm">
          <div class="bg-blue-50 rounded-xl py-2 px-3 text-center">
            <span class="text-blue-700">Amplitúda: </span><strong class="text-blue-800">{{ goniA }}</strong>
          </div>
          <div class="bg-purple-50 rounded-xl py-2 px-3 text-center">
            <span class="text-purple-700">Perióda: </span><strong class="text-purple-800">T = {{ goniPeriod }}</strong>
          </div>
          <div class="bg-gray-50 rounded-xl py-2 px-3 text-center">
            <span class="text-gray-600">Obor hodnôt: </span><strong class="text-gray-700">⟨−{{ goniA }}, {{ goniA }}⟩</strong>
          </div>
        </div>

        <!-- Toggles -->
        <div class="flex gap-4 mb-3 text-sm">
          <label for="goni-show-sin" class="flex items-center gap-2 cursor-pointer">
            <input id="goni-show-sin" v-model="showSin" type="checkbox" class="accent-blue-500 w-4 h-4" />
            <span class="text-blue-700 font-medium">sin (modrá)</span>
          </label>
          <label for="goni-show-cos" class="flex items-center gap-2 cursor-pointer">
            <input id="goni-show-cos" v-model="showCos" type="checkbox" class="accent-red-500 w-4 h-4" />
            <span class="text-red-700 font-medium">cos (červená)</span>
          </label>
        </div>

        <!-- SVG Graf -->
        <svg
          viewBox="-7 -3.6 14 7.2"
          width="100%"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Graf y=${goniA}·sin(${goniB}x) a y=${goniA}·cos(${goniB}x), perióda T=${goniPeriod}`"
          class="block"
        >
          <defs>
            <clipPath id="goniClip">
              <rect x="-7" y="-3.6" width="14" height="7.2" />
            </clipPath>
            <marker id="gArrX" markerWidth="0.35" markerHeight="0.35" refX="0.28" refY="0.175" orient="auto">
              <polygon points="0 0, 0.35 0.175, 0 0.35" fill="#6b7280" />
            </marker>
            <marker id="gArrY" markerWidth="0.35" markerHeight="0.35" refX="0.175" refY="0.28" orient="auto">
              <polygon points="0 0.35, 0.175 0, 0.35 0.35" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Jemná mriežka (pri každom π/2 ≈ 1.571) -->
          <g stroke="#f3f4f6" stroke-width="0.05">
            <line v-for="k in [-4,-3,-2,-1,1,2,3,4]" :key="`gx${k}`"
              :x1="k * Math.PI / 2" y1="-3.5" :x2="k * Math.PI / 2" y2="3.5" />
            <line v-for="k in [-3,-2,-1,1,2,3]" :key="`gy${k}`"
              x1="-7" :y1="k" x2="7" :y2="k" />
          </g>

          <!-- Zvislé čiary pri π, 2π, -π, -2π (výraznejšie) -->
          <g stroke="#e5e7eb" stroke-width="0.06">
            <line v-for="k in [-2,-1,1,2]" :key="`gxp${k}`"
              :x1="k * Math.PI" y1="-3.5" :x2="k * Math.PI" y2="3.5" />
          </g>

          <!-- Amplitúdové čiary (pruh) -->
          <line x1="-7" :y1="-goniA" x2="7" :y2="-goniA" stroke="#dbeafe" stroke-width="0.06" stroke-dasharray="0.2,0.15" />
          <line x1="-7" :y1="goniA" x2="7" :y2="goniA" stroke="#dbeafe" stroke-width="0.06" stroke-dasharray="0.2,0.15" />

          <!-- Osi -->
          <line x1="-6.8" y1="0" x2="6.8" y2="0" stroke="#6b7280" stroke-width="0.07" marker-end="url(#gArrX)" />
          <line x1="0" y1="3.4" x2="0" y2="-3.4" stroke="#6b7280" stroke-width="0.07" marker-end="url(#gArrY)" />
          <text x="6.6" y="0.28" font-size="0.3" fill="#374151" font-family="sans-serif" font-style="italic">x</text>
          <text x="0.15" y="-3.2" font-size="0.3" fill="#374151" font-family="sans-serif" font-style="italic">y</text>

          <!-- x-os popisky (v π) -->
          <g font-size="0.28" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text :x="-2 * Math.PI" y="0.4">−2π</text>
            <text :x="-Math.PI" y="0.4">−π</text>
            <text x="0" y="0.4">0</text>
            <text :x="Math.PI" y="0.4">π</text>
            <text :x="2 * Math.PI" y="0.4">2π</text>
          </g>

          <!-- y-os popisky -->
          <g font-size="0.28" fill="#9ca3af" text-anchor="end" font-family="sans-serif">
            <text v-for="k in [-3,-2,-1,1,2,3]" :key="`glby${k}`" x="-0.15" :y="-k + 0.1">{{ k }}</text>
          </g>

          <!-- Graf sínusu (modrý) -->
          <path
            v-if="showSin"
            :d="sinPath"
            fill="none"
            stroke="#2563eb"
            stroke-width="0.12"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-path="url(#goniClip)"
          />

          <!-- Graf kosínusu (červený) -->
          <path
            v-if="showCos"
            :d="cosPath"
            fill="none"
            stroke="#dc2626"
            stroke-width="0.12"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-path="url(#goniClip)"
          />

          <!-- Amplitúda popisky -->
          <text v-if="goniA <= 3.2" x="-6.7" :y="-goniA - 0.15" font-size="0.25" fill="#93c5fd" font-family="sans-serif">A = {{ goniA }}</text>
          <text v-if="goniA <= 3.2" x="-6.7" :y="goniA + 0.32" font-size="0.25" fill="#93c5fd" font-family="sans-serif">−A = −{{ goniA }}</text>
        </svg>

        <!-- Legenda -->
        <div class="flex gap-5 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span v-if="showSin" class="flex items-center gap-1.5"><span class="w-5 h-0.5 bg-blue-600 inline-block" /> y = {{ goniA }}·sin({{ goniB }}x)</span>
          <span v-if="showCos" class="flex items-center gap-1.5"><span class="w-5 h-0.5 bg-red-600 inline-block" /> y = {{ goniA }}·cos({{ goniB }}x)</span>
        </div>
      </div>

      <!-- ═══ Interaktívny graf tan/cot ═══ -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-semibold text-gray-800 mb-4">🎮 Interaktívny graf y = A · tg(B · x) a y = A · cotg(B · x)</h3>

        <div class="grid sm:grid-cols-2 gap-5 mb-4">
          <div>
            <label for="tan-a-slider" class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Amplitúda <em>A</em></span>
              <span class="font-bold text-blue-600">A = {{ goniTanA }}</span>
            </label>
            <input id="tan-a-slider" v-model.number="goniTanA" type="range" min="0.5" max="2" step="0.5" class="w-full accent-blue-500 cursor-pointer" />
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0,5</span><span>1</span><span>1,5</span><span>2</span>
            </div>
          </div>
          <div>
            <label for="tan-b-slider" class="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>Frekvencia <em>B</em></span>
              <span class="font-bold text-blue-600">B = {{ goniTanB }}</span>
            </label>
            <input id="tan-b-slider" v-model.number="goniTanB" type="range" min="0.5" max="2" step="0.5" class="w-full accent-blue-500 cursor-pointer" />
            <div class="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0,5</span><span>1</span><span>1,5</span><span>2</span>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="grid sm:grid-cols-2 gap-2 mb-4 text-sm">
          <div class="bg-amber-50 rounded-xl py-2 px-3 text-center">
            <span class="text-amber-700">Perióda: </span>
            <strong class="text-amber-800">T = π/{{ goniTanB }} ≈ {{ tanPeriodVal }}</strong>
          </div>
          <div class="bg-gray-50 rounded-xl py-2 px-3 text-center">
            <span class="text-gray-600">Obor hodnôt: </span>
            <strong class="text-gray-700">ℝ (−∞, +∞)</strong>
          </div>
        </div>

        <!-- Toggles -->
        <div class="flex gap-4 mb-3 text-sm">
          <label for="show-tan" class="flex items-center gap-2 cursor-pointer">
            <input id="show-tan" v-model="showTan" type="checkbox" class="accent-amber-500 w-4 h-4" />
            <span class="text-amber-700 font-medium">tg (oranžová)</span>
          </label>
          <label for="show-cot" class="flex items-center gap-2 cursor-pointer">
            <input id="show-cot" v-model="showCot" type="checkbox" class="accent-purple-500 w-4 h-4" />
            <span class="text-purple-700 font-medium">cotg (fialová)</span>
          </label>
        </div>

        <!-- SVG Graf -->
        <svg
          viewBox="-7 -4.2 14 8.4"
          width="100%"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          :aria-label="`Graf tangensa y=${goniTanA}·tg(${goniTanB}x) a kotangensa, perióda T=π/${goniTanB}`"
          class="block"
        >
          <defs>
            <clipPath id="tanClip">
              <rect x="-7" y="-4.2" width="14" height="8.4" />
            </clipPath>
            <marker id="tArrX" markerWidth="0.35" markerHeight="0.35" refX="0.28" refY="0.175" orient="auto">
              <polygon points="0 0, 0.35 0.175, 0 0.35" fill="#6b7280" />
            </marker>
            <marker id="tArrY" markerWidth="0.35" markerHeight="0.35" refX="0.175" refY="0.28" orient="auto">
              <polygon points="0 0.35, 0.175 0, 0.35 0.35" fill="#6b7280" />
            </marker>
          </defs>

          <!-- Jemná mriežka -->
          <g stroke="#f3f4f6" stroke-width="0.05">
            <line v-for="k in [-4,-3,-2,-1,1,2,3,4]" :key="`tgx${k}`"
              :x1="k * Math.PI / 2" y1="-4" :x2="k * Math.PI / 2" y2="4" />
            <line v-for="k in [-4,-3,-2,-1,1,2,3,4]" :key="`tgy${k}`"
              x1="-7" :y1="k" x2="7" :y2="k" />
          </g>

          <!-- Asymptoty tangensa (prerušované) -->
          <g v-if="showTan">
            <line
              v-for="ax in tanAsymptotes"
              :key="`ta${ax}`"
              :x1="ax" y1="-4.1"
              :x2="ax" y2="4.1"
              stroke="#fbbf24"
              stroke-width="0.07"
              stroke-dasharray="0.2,0.15"
              opacity="0.7"
            />
          </g>

          <!-- Asymptoty kotangensa (prerušované) -->
          <g v-if="showCot">
            <line
              v-for="ax in cotAsymptotes"
              :key="`ca${ax}`"
              :x1="ax" y1="-4.1"
              :x2="ax" y2="4.1"
              stroke="#c084fc"
              stroke-width="0.07"
              stroke-dasharray="0.2,0.15"
              opacity="0.7"
            />
          </g>

          <!-- Osi -->
          <line x1="-6.8" y1="0" x2="6.8" y2="0" stroke="#6b7280" stroke-width="0.07" marker-end="url(#tArrX)" />
          <line x1="0" y1="4" x2="0" y2="-4" stroke="#6b7280" stroke-width="0.07" marker-end="url(#tArrY)" />
          <text x="6.6" y="0.28" font-size="0.3" fill="#374151" font-family="sans-serif" font-style="italic">x</text>
          <text x="0.15" y="-3.75" font-size="0.3" fill="#374151" font-family="sans-serif" font-style="italic">y</text>

          <!-- x-os popisky -->
          <g font-size="0.28" fill="#9ca3af" text-anchor="middle" font-family="sans-serif">
            <text :x="-2 * Math.PI" y="0.42">−2π</text>
            <text :x="-Math.PI" y="0.42">−π</text>
            <text x="0" y="0.42">0</text>
            <text :x="Math.PI" y="0.42">π</text>
            <text :x="2 * Math.PI" y="0.42">2π</text>
          </g>

          <!-- y-os popisky -->
          <g font-size="0.28" fill="#9ca3af" text-anchor="end" font-family="sans-serif">
            <text v-for="k in [-3,-2,-1,1,2,3]" :key="`tlby${k}`" x="-0.15" :y="-k + 0.1">{{ k }}</text>
          </g>

          <!-- Graf tangensa (oranžový) — po segmentoch -->
          <path
            v-if="showTan"
            :d="tanPath"
            fill="none"
            stroke="#f59e0b"
            stroke-width="0.13"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-path="url(#tanClip)"
          />

          <!-- Graf kotangensa (fialový) — po segmentoch -->
          <path
            v-if="showCot"
            :d="cotPath"
            fill="none"
            stroke="#a855f7"
            stroke-width="0.13"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-path="url(#tanClip)"
          />
        </svg>

        <!-- Legenda -->
        <div class="flex gap-5 text-xs text-gray-600 mt-2 justify-center flex-wrap">
          <span v-if="showTan" class="flex items-center gap-1.5">
            <span class="w-5 h-0.5 bg-amber-500 inline-block" /> y = {{ goniTanA }}·tg({{ goniTanB }}x)
          </span>
          <span v-if="showTan" class="flex items-center gap-1.5">
            <span class="w-4 h-0.5 bg-amber-300 inline-block" style="border-top: 1.5px dashed #fbbf24" />
            asymptoty tg
          </span>
          <span v-if="showCot" class="flex items-center gap-1.5">
            <span class="w-5 h-0.5 bg-purple-500 inline-block" /> y = {{ goniTanA }}·cotg({{ goniTanB }}x)
          </span>
          <span v-if="showCot" class="flex items-center gap-1.5">
            <span class="w-4 h-0.5 bg-purple-300 inline-block" style="border-top: 1.5px dashed #c084fc" />
            asymptoty cotg
          </span>
        </div>
      </div>

      <!-- Example 3 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 class="font-bold text-green-800 mb-3">Príklad 3: Vlastnosti upraveného sínusu</h3>
        <p class="text-gray-700 mb-3">
          Určíme amplitúdu a periódu funkcie <MathFormula formula="y = 2\sin(3x)" />.
        </p>
        <ul class="text-gray-700 space-y-2">
          <li>
            <strong>Amplitúda:</strong>
            <MathFormula formula="A = 2" /> — funkcia nadobúda hodnoty v intervale
            <MathFormula formula="\langle -2,\, 2 \rangle" />
          </li>
          <li>
            <strong>Perióda:</strong>
            <MathFormula formula="T = \dfrac{2\pi}{3} \approx 2{,}09" /> — trojnásobok rýchlejší ako základný sínus.
            Všeobecne pre <MathFormula formula="y = a\sin(bx)" /> platí
            <MathFormula formula="T = \dfrac{2\pi}{|b|}" />
          </li>
        </ul>
      </div>
    </section>

    <!-- ─── Section 4: Goniometrické rovnice ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Goniometrické rovnice</h2>
      <p class="text-gray-700 mb-5 leading-relaxed">
        Goniometrické rovnice sú rovnice, v ktorých sa neznáma vyskytuje ako argument
        goniometrickej funkcie. Keďže sú tieto funkcie periodické, majú spravidla
        <strong>nekonečne veľa riešení</strong> — vyjadrujeme ich pomocou celého čísla
        <MathFormula formula="k \in \mathbb{Z}" />.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-blue-800 mb-4">Vzorce pre všeobecné riešenie</h3>
        <div class="space-y-5 text-gray-700">
          <div>
            <p class="font-semibold mb-1">Rovnica <MathFormula formula="\sin x = a" /> (pre <MathFormula formula="|a| \leq 1" />):</p>
            <MathFormula display formula="x = \arcsin a + 2k\pi \qquad \text{alebo} \qquad x = \pi - \arcsin a + 2k\pi,\quad k \in \mathbb{Z}" />
          </div>
          <div>
            <p class="font-semibold mb-1">Rovnica <MathFormula formula="\cos x = a" /> (pre <MathFormula formula="|a| \leq 1" />):</p>
            <MathFormula display formula="x = \pm\arccos a + 2k\pi,\quad k \in \mathbb{Z}" />
          </div>
          <div>
            <p class="font-semibold mb-1">Rovnica <MathFormula formula="\tg x = a" />:</p>
            <MathFormula display formula="x = \arctan a + k\pi,\quad k \in \mathbb{Z}" />
          </div>
        </div>
      </div>

      <!-- Example 4 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-5">
        <h3 class="font-bold text-green-800 mb-3">
          Príklad 4: Riešenie rovnice <MathFormula formula="\sin x = \tfrac{1}{2}" /> na <MathFormula formula="\langle 0°, 360° \rangle" />
        </h3>
        <div class="space-y-2 text-gray-700">
          <p>
            Keďže <MathFormula formula="\arcsin \tfrac{1}{2} = 30°" />, zo vzorca dostaneme:
          </p>
          <p>Prvé riešenie: <MathFormula formula="x_1 = 30°" /></p>
          <p>Druhé riešenie: <MathFormula formula="x_2 = 180° - 30° = 150°" /></p>
          <p class="font-semibold text-green-800 mt-2">
            Odpoveď: <MathFormula formula="x \in \{30°,\; 150°\}" />
          </p>
        </div>
      </div>

      <!-- Example 5 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 class="font-bold text-green-800 mb-3">
          Príklad 5: Riešenie rovnice <MathFormula formula="\cos x = 0" /> na <MathFormula formula="\langle 0°, 360° \rangle" />
        </h3>
        <div class="space-y-2 text-gray-700">
          <p>
            Z tabuľky: <MathFormula formula="\cos 90° = 0" /> a <MathFormula formula="\cos 270° = 0" />.
          </p>
          <p>
            Zo vzorca: <MathFormula formula="x = \pm\arccos 0 + k\cdot 360° = \pm 90° + k\cdot 360°" />
          </p>
          <p class="font-semibold text-green-800 mt-2">
            Odpoveď: <MathFormula formula="x \in \{90°,\; 270°\}" />
          </p>
        </div>
      </div>
    </section>

    <!-- ─── Zhrnutie ─── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2.5 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Na jednotkovej kružnici: <MathFormula formula="P = (\cos \alpha,\; \sin \alpha)" />,
            polomer <MathFormula formula="r = 1" />
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Základná identita: <MathFormula formula="\sin^2 \alpha + \cos^2 \alpha = 1" />
            (platí pre každý uhol)
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Perióda sínusu a kosínusu <MathFormula formula="T = 2\pi" />,
            tangensu a kotangensu <MathFormula formula="T = \pi" />
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Kľúčové hodnoty: sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2;
            kosínus v opačnom poradí
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Tangens nie je definovaný pre <MathFormula formula="\alpha = 90° + k \cdot 180°" />;
            kotangens nie je definovaný pre <MathFormula formula="\alpha = k \cdot 180°" />
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold shrink-0">•</span>
          <span>
            Goniometrické rovnice majú nekonečne veľa riešení — zapisujeme s
            parametrom <MathFormula formula="k \in \mathbb{Z}" />
          </span>
        </li>
      </ul>
    </div>

    <!-- ─── Kvíz ─── -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progress bar -->
        <div data-testid="quiz-progress" class="flex items-center gap-3 mb-6">
          <span class="text-sm text-gray-500 shrink-0">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <div class="flex-1 bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
            />
          </div>
          <span class="text-sm font-semibold text-blue-600 shrink-0">{{ quizScore }} b.</span>
        </div>

        <!-- Question card -->
        <div data-testid="question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="text-lg font-semibold text-gray-800 mb-5">{{ currentQuestion.question }}</p>

          <div class="space-y-3">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              type="button"
              :data-testid="`option-${i}`"
              :disabled="selectedAnswer !== null"
              class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 font-medium"
              :class="optionClass(i)"
              @click="selectAnswer(i)"
            >
              <span class="mr-2 font-bold">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
            </button>
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              class="mt-5 p-4 rounded-xl text-sm"
              :class="selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'"
            >
              <p class="font-bold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
              </p>
              <p>{{ currentQuestion.explanation }}</p>
            </div>
          </Transition>
        </div>

        <!-- Next button -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="next-btn"
            class="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Result screen -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-600 text-lg mb-6">
          Skóre:
          <span class="font-bold text-blue-600">{{ quizScore }} / {{ quiz.length }}</span>
        </p>
        <button
          type="button"
          data-testid="reset-btn"
          class="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Goniometrické funkcie | Funkcie a grafy | Matematika | NaucSaTo',
  meta: [
    {
      name: 'description',
      content:
        'Goniometrické funkcie pre gymnazistov: jednotková kružnica, sínus, kosínus, tangens, kotangens, špeciálne uhly, grafy a rovnice. Príklady s riešením a kvíz.',
    },
  ],
})

// ─── Interaktívny jednotkový kruh ─────────────────────────────────────────────
const ucAngle = ref(60)

const ucPoint = computed(() => {
  const rad = ucAngle.value * Math.PI / 180
  return { x: Math.cos(rad), y: Math.sin(rad) }
})

const ucSinLabel = computed(() => {
  const v = Math.sin(ucAngle.value * Math.PI / 180)
  const r = Math.round(v * 1000) / 1000
  return r === 0 ? '0' : r === 1 ? '1' : r === -1 ? '−1' : r.toFixed(3)
})

const ucCosLabel = computed(() => {
  const v = Math.cos(ucAngle.value * Math.PI / 180)
  const r = Math.round(v * 1000) / 1000
  return r === 0 ? '0' : r === 1 ? '1' : r === -1 ? '−1' : r.toFixed(3)
})

const ucArcPath = computed(() => {
  const alpha = ucAngle.value * Math.PI / 180
  const r = 0.28
  const steps = Math.max(8, Math.round(ucAngle.value / 2))
  const pts = [`${r},0`]
  for (let i = 1; i <= steps; i++) {
    const t = alpha * i / steps
    pts.push(`${(r * Math.cos(t)).toFixed(4)},${(-r * Math.sin(t)).toFixed(4)}`)
  }
  return `M 0,0 L ${pts.join(' L ')} Z`
})

// ─── Interaktívny graf sin/cos ─────────────────────────────────────────────────
const goniA = ref(1)
const goniB = ref(1)
const showSin = ref(true)
const showCos = ref(true)

const goniPeriod = computed(() => {
  const t = (2 * Math.PI / goniB.value)
  return `2π/${goniB.value}` + (goniB.value !== 1 ? ` ≈ ${t.toFixed(2)}` : ' ≈ 6,28')
})

const sinPath = computed(() => {
  const a = goniA.value
  const b = goniB.value
  const pts: string[] = []
  for (let xi = -7; xi <= 7.01; xi += 0.08) {
    const x = xi
    const ySvg = -(a * Math.sin(b * x))
    pts.push(`${x.toFixed(3)},${ySvg.toFixed(4)}`)
  }
  return 'M ' + pts.join(' L ')
})

const cosPath = computed(() => {
  const a = goniA.value
  const b = goniB.value
  const pts: string[] = []
  for (let xi = -7; xi <= 7.01; xi += 0.08) {
    const x = xi
    const ySvg = -(a * Math.cos(b * x))
    pts.push(`${x.toFixed(3)},${ySvg.toFixed(4)}`)
  }
  return 'M ' + pts.join(' L ')
})

// ─── Interaktívny graf tan/cot ────────────────────────────────────────────────
const goniTanA = ref(1)
const goniTanB = ref(1)
const showTan = ref(true)
const showCot = ref(false)

const tanPeriodVal = computed(() => (Math.PI / goniTanB.value).toFixed(2))

function buildDiscPath(fn: (x: number) => number, YMAX = 4.1): string {
  const segments: string[][] = []
  let current: string[] = []
  for (let xi = -7; xi <= 7.01; xi += 0.05) {
    const x = Math.round(xi * 100) / 100
    const y = fn(x)
    if (!isFinite(y) || Math.abs(y) > YMAX) {
      if (current.length > 1) segments.push([...current])
      current = []
    }
    else {
      current.push(`${x.toFixed(2)},${(-y).toFixed(3)}`)
    }
  }
  if (current.length > 1) segments.push(current)
  return segments.map(s => 'M ' + s.join(' L ')).join(' ')
}

const tanPath = computed(() =>
  buildDiscPath(x => goniTanA.value * Math.tan(goniTanB.value * x)))

const cotPath = computed(() =>
  buildDiscPath((x) => {
    const s = Math.sin(goniTanB.value * x)
    return Math.abs(s) < 0.008 ? Infinity : goniTanA.value * Math.cos(goniTanB.value * x) / s
  }))

const tanAsymptotes = computed(() => {
  const period = Math.PI / goniTanB.value
  const offset = Math.PI / (2 * goniTanB.value)
  const res: number[] = []
  for (let k = -12; k <= 12; k++) {
    const x = offset + k * period
    if (x > -7 && x < 7) res.push(Math.round(x * 10000) / 10000)
  }
  return res
})

const cotAsymptotes = computed(() => {
  const period = Math.PI / goniTanB.value
  const res: number[] = []
  for (let k = -12; k <= 12; k++) {
    const x = k * period
    if (x > -7 && x < 7) res.push(Math.round(x * 10000) / 10000)
  }
  return res
})

// ─── Tabuľka špeciálnych uhlov ───────────────────────────────────────────────
const specialAngles = [
  { angle: '0°',  sin: '0',     cos: '1',     tg: '0',      cotg: '—'     },
  { angle: '30°', sin: '1/2',   cos: '√3/2',  tg: '√3/3',   cotg: '√3'    },
  { angle: '45°', sin: '√2/2',  cos: '√2/2',  tg: '1',      cotg: '1'     },
  { angle: '60°', sin: '√3/2',  cos: '1/2',   tg: '√3',     cotg: '√3/3'  },
  { angle: '90°', sin: '1',     cos: '0',     tg: '—',      cotg: '0'     },
]

// ─── Kvíz ────────────────────────────────────────────────────────────────────
interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je sin 30°?',
    options: ['√3/2', '1/2', '√2/2', '1'],
    correctIndex: 1,
    explanation:
      'sin 30° = 1/2. Táto hodnota zodpovedá y-súradnici bodu na jednotkovej kružnici pri uhle 30°.',
  },
  {
    question: 'Čo je cos 60°?',
    options: ['√3/2', '√2/2', '0', '1/2'],
    correctIndex: 3,
    explanation:
      'cos 60° = 1/2. Všimni si symetriu: sin 30° = cos 60° = 1/2, pretože 30° a 60° sú komplementárne uhly.',
  },
  {
    question: 'Aká je perióda funkcie y = sin x?',
    options: ['π', '2π', 'π/2', '4π'],
    correctIndex: 1,
    explanation:
      'Perióda sínusu je T = 2π ≈ 6,28. Po uplynutí tejto vzdialenosti sa grafik funkcie presne zopakuje.',
  },
  {
    question: 'Čo je tg 45°?',
    options: ['√3', '1/√3', '0', '1'],
    correctIndex: 3,
    explanation:
      'tg 45° = sin 45° / cos 45° = (√2/2) / (√2/2) = 1. Je to aj jediný kladný uhol, kde sú sínus a kosínus rovnaké.',
  },
  {
    question: 'Ktorý výraz predstavuje základnú goniometrickú identitu?',
    options: [
      'sin α · cos α = 1',
      'sin α + cos α = 1',
      'sin²α + cos²α = 1',
      'sin²α − cos²α = 0',
    ],
    correctIndex: 2,
    explanation:
      'sin²α + cos²α = 1 plynie z Pytagorovej vety na jednotkovej kružnici (r = 1) a platí pre každý uhol α.',
  },
  {
    question: 'Pre ktoré hodnoty α nie je definovaný tg α?',
    options: [
      'α = k · 360°, k ∈ ℤ',
      'α = 90° + k · 180°, k ∈ ℤ',
      'α = k · 180°, k ∈ ℤ',
      'α = 45° + k · 90°, k ∈ ℤ',
    ],
    correctIndex: 1,
    explanation:
      'tg α = sin α / cos α, preto tg α nie je definovaný práve vtedy, keď cos α = 0 — to nastáva pre α = 90° + k·180°.',
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

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 text-gray-700 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-500 bg-green-50 text-green-800 cursor-default'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800 cursor-default'
  }
  return 'border-gray-200 bg-gray-50 text-gray-400 cursor-default'
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
