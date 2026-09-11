<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/geometria" class="hover:text-blue-600 transition-colors">Geometria a meranie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Analytická geometria</span>
    </nav>

    <!-- Nadpis -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">🗺️ Analytická geometria</h1>
      <p class="text-lg text-gray-600 leading-relaxed">
        Analytická geometria spája algebru s geometriou — každý geometrický útvar opíšeme rovnicou a každú rovnicu znázorníme
        ako útvar v súradnicovej sústave. Naučíš sa pracovať s bodmi, priamkami a kružnicami pomocou súradníc a vzorcov,
        ktoré sú základom mnohých praktických výpočtov.
      </p>
    </div>

    <!-- ======================== SEKCIA 1: Súradnicová sústava a body ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">1. Kartézska súradnicová sústava</h2>

      <!-- Vzdialenosť a stred -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Vzdialenosť dvoch bodov a stred úsečky</h3>
        <p class="text-gray-700 mb-4">
          Každý bod v rovine určíme dvojicou súradníc <MathFormula formula="A(x_1, y_1)" />. Vzdialenosť dvoch bodov
          vypočítame pomocou Pytagorovej vety aplikovanej na pravoúhly trojuholník, ktorého odvesny sú rozdiely súradníc:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
        </div>
        <p class="text-gray-700 mb-4">
          Stred úsečky <MathFormula formula="AB" /> má súradnice rovnajúce sa aritmetickým priemerům súradníc koncových bodov:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="S = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)" />
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 1 — Vzdialenosť a stred</h3>
        <p class="text-gray-700 mb-3">
          Dané body <MathFormula formula="A(1, 2)" /> a <MathFormula formula="B(7, 10)" />.
          Vypočítaj vzdialenosť <MathFormula formula="|AB|" /> a súradnice stredu <MathFormula formula="S" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-gray-700">
            <strong>Vzdialenosť:</strong>
          </p>
          <div class="flex justify-center">
            <MathFormula display formula="|AB| = \sqrt{(7-1)^2 + (10-2)^2} = \sqrt{36 + 64} = \sqrt{100} = 10" />
          </div>
          <p class="text-gray-700 mt-2">
            <strong>Stred:</strong>
          </p>
          <div class="flex justify-center">
            <MathFormula display formula="S = \left(\frac{1+7}{2},\; \frac{2+10}{2}\right) = (4,\; 6)" />
          </div>
        </div>
      </div>

      <!-- SVG Ilustrácia -->
      <div class="flex justify-center mb-8">
        <figure>
          <svg
            role="img"
            aria-label="Súradnicová sústava s priamkou y=2x+1, kružnicou so stredom (2,1) a polomerom 2, priesečníkmi priamky a kružnice, a vzdialenosťou bodu od priamky"
            viewBox="0 0 400 300"
            width="400"
            height="300"
            class="rounded-xl border border-blue-100 bg-white shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Transformácia: stred sústavy (80, 185), mierka 35px/jednotku -->
            <!-- svg_x = 80 + x*35, svg_y = 185 - y*35 -->

            <!-- Mriežka -->
            <g stroke="#e5e7eb" stroke-width="0.5">
              <!-- Zvislé čiary x = -2,-1,0,1,2,3,4,5,6,7,8 -->
              <line x1="10" y1="0" x2="10" y2="300" />
              <line x1="45" y1="0" x2="45" y2="300" />
              <line x1="80" y1="0" x2="80" y2="300" />
              <line x1="115" y1="0" x2="115" y2="300" />
              <line x1="150" y1="0" x2="150" y2="300" />
              <line x1="185" y1="0" x2="185" y2="300" />
              <line x1="220" y1="0" x2="220" y2="300" />
              <line x1="255" y1="0" x2="255" y2="300" />
              <line x1="290" y1="0" x2="290" y2="300" />
              <line x1="325" y1="0" x2="325" y2="300" />
              <line x1="360" y1="0" x2="360" y2="300" />
              <!-- Vodorovné čiary y = -5,-4,-3,-2,-1,0,1,2,3,4,5 -->
              <line x1="0" y1="360" x2="400" y2="360" />
              <line x1="0" y1="325" x2="400" y2="325" />
              <line x1="0" y1="290" x2="400" y2="290" />
              <line x1="0" y1="255" x2="400" y2="255" />
              <line x1="0" y1="220" x2="400" y2="220" />
              <line x1="0" y1="185" x2="400" y2="185" />
              <line x1="0" y1="150" x2="400" y2="150" />
              <line x1="0" y1="115" x2="400" y2="115" />
              <line x1="0" y1="80" x2="400" y2="80" />
              <line x1="0" y1="45" x2="400" y2="45" />
              <line x1="0" y1="10" x2="400" y2="10" />
            </g>

            <!-- Osi -->
            <g stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow)">
              <!-- x-os -->
              <line x1="0" y1="185" x2="395" y2="185" />
              <!-- y-os -->
              <line x1="80" y1="300" x2="80" y2="5" />
            </g>

            <!-- Šípky -->
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 Z" fill="#6b7280" />
              </marker>
            </defs>

            <!-- Popisky osí -->
            <text x="390" y="200" font-size="13" fill="#374151" font-style="italic">x</text>
            <text x="86" y="14" font-size="13" fill="#374151" font-style="italic">y</text>

            <!-- Číselné popisky na osiach -->
            <g font-size="10" fill="#9ca3af" text-anchor="middle">
              <text x="115" y="198">1</text>
              <text x="150" y="198">2</text>
              <text x="185" y="198">3</text>
              <text x="220" y="198">4</text>
              <text x="255" y="198">5</text>
              <text x="45" y="198">-1</text>
              <text x="75" y="153">1</text>
              <text x="75" y="118">2</text>
              <text x="75" y="83">3</text>
              <text x="75" y="48">4</text>
              <text x="70" y="223">-1</text>
              <text x="70" y="258">-2</text>
            </g>

            <!-- Priamka y = 2x + 1 (modrá) -->
            <!-- x=-1.5 → y=-2 → svg(27.5, 255);  x=2.57 → y=6.14 → svg(169.9, 0) -->
            <line
              x1="27" y1="255"
              x2="170" y2="0"
              stroke="#2563eb"
              stroke-width="2"
            />
            <!-- Popisok priamky -->
            <text x="175" y="12" font-size="12" fill="#2563eb" font-weight="bold">y = 2x + 1</text>

            <!-- Kružnica (x-2)²+(y-1)²=4, stred (2,1), r=2 -->
            <!-- Stred v SVG: (80+2*35, 185-1*35) = (150, 150), r_svg=70 -->
            <circle
              cx="150" cy="150"
              r="70"
              fill="rgba(239, 246, 255, 0.6)"
              stroke="#3b82f6"
              stroke-width="2"
            />

            <!-- Stred kružnice (2,1) -->
            <circle cx="150" cy="150" r="3" fill="#1d4ed8" />
            <text x="156" y="163" font-size="11" fill="#1d4ed8" font-weight="bold">S(2,1)</text>

            <!-- Polomer kružnice — horizontálna čiara ku bodu (4,1) -->
            <!-- (4,1) → svg(220, 150) -->
            <line x1="150" y1="150" x2="220" y2="150" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3" />
            <text x="178" y="145" font-size="10" fill="#1d4ed8">r=2</text>

            <!-- Priesečníky priamky a kružnice -->
            <!-- (0,1) → svg(80, 150) -->
            <circle cx="80" cy="150" r="4" fill="#dc2626" />
            <text x="85" y="143" font-size="10" fill="#dc2626" font-weight="bold">(0,1)</text>

            <!-- (0.8, 2.6) → svg(80+28, 185-91) = (108, 94) -->
            <circle cx="108" cy="94" r="4" fill="#dc2626" />
            <text x="113" y="91" font-size="10" fill="#dc2626" font-weight="bold">(0.8; 2.6)</text>

            <!-- Bod P(4,0) a jeho vzdialenosť od priamky 2x-y+1=0 -->
            <!-- P=(4,0) → svg(220, 185) -->
            <!-- Päta kolmice z P na priamku y=2x+1: -->
            <!-- Smer normály k 2x-y+1=0 je (2,-1). Parametricky: (4+2t, 0-t) -->
            <!-- Na priamke: 2(4+2t)-(0-t)+1=0 → 8+4t+t+1=0 → 5t=-9 → t=-1.8 -->
            <!-- Päta: (4+2(-1.8), 0-(-1.8)) = (0.4, 1.8) -->
            <!-- svg(80+14, 185-63) = (94, 122) -->
            <circle cx="220" cy="185" r="4" fill="#7c3aed" />
            <text x="225" y="183" font-size="10" fill="#7c3aed" font-weight="bold">P(4,0)</text>
            <line x1="220" y1="185" x2="94" y2="122" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3" />
            <text x="148" y="172" font-size="10" fill="#7c3aed">d ≈ 4.0</text>

            <!-- Legenda -->
            <g font-size="10" fill="#374151">
              <line x1="235" y1="240" x2="255" y2="240" stroke="#2563eb" stroke-width="2" />
              <text x="260" y="244">y = 2x + 1</text>
              <circle cx="245" cy="258" r="6" fill="none" stroke="#3b82f6" stroke-width="2" />
              <text x="260" y="262">(x−2)²+(y−1)²=4</text>
              <circle cx="245" cy="275" r="3" fill="#dc2626" />
              <text x="260" y="279">priesečníky</text>
            </g>
          </svg>
          <figcaption class="text-center text-sm text-gray-500 mt-2">
            Priamka <strong>y&nbsp;=&nbsp;2x&nbsp;+&nbsp;1</strong> a kružnica <strong>(x−2)²+(y−1)²=4</strong> v súradnicovej sústave
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- ======================== SEKCIA 2: Rovnica priamky ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">2. Rovnica priamky</h2>

      <!-- Všeobecná a smernicová rovnica -->
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="text-base font-semibold text-blue-800 mb-2">Všeobecná rovnica</h3>
          <div class="flex justify-center my-3">
            <MathFormula display formula="ax + by + c = 0" />
          </div>
          <p class="text-gray-700 text-sm">
            Platí pre každú priamku v rovine vrátane zvislých. Koeficienty <MathFormula formula="a, b" />
            určujú smer normálového vektora <MathFormula formula="\vec{n} = (a, b)" />.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="text-base font-semibold text-blue-800 mb-2">Smernicová rovnica</h3>
          <div class="flex justify-center my-3">
            <MathFormula display formula="y = kx + q" />
          </div>
          <p class="text-gray-700 text-sm">
            Platí len pre nezvislé priamky. Koeficient <MathFormula formula="k" /> je <strong>smernica</strong>
            (sklon priamky) a <MathFormula formula="q" /> je priesečník s osou <MathFormula formula="y" />.
          </p>
        </div>
      </div>

      <!-- Smernica -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Smernica priamky</h3>
        <p class="text-gray-700 mb-4">
          Smernica <MathFormula formula="k" /> udáva, o koľko sa zmení hodnota <MathFormula formula="y" />,
          keď sa <MathFormula formula="x" /> zvýši o 1. Pre priamku prechádzajúcu bodmi
          <MathFormula formula="A(x_1, y_1)" /> a <MathFormula formula="B(x_2, y_2)" />:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="k = \tan\alpha = \frac{y_2 - y_1}{x_2 - x_1}" />
        </div>
        <p class="text-gray-700">
          kde <MathFormula formula="\alpha" /> je uhol, ktorý zvierá priamka s kladnou časťou osi <MathFormula formula="x" />.
        </p>
      </div>

      <!-- Vzájomná poloha priamok -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Vzájomná poloha dvoch priamok</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <p class="font-semibold text-green-800 mb-2">Rovnobežné priamky</p>
            <div class="flex justify-center mb-2">
              <MathFormula display formula="k_1 = k_2" />
            </div>
            <p class="text-gray-700 text-sm">Rovnaká smernica, rôzny posun — priamky sa nepretínajú.</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p class="font-semibold text-orange-800 mb-2">Kolmé priamky</p>
            <div class="flex justify-center mb-2">
              <MathFormula display formula="k_1 \cdot k_2 = -1" />
            </div>
            <p class="text-gray-700 text-sm">Súčin smerníc je <MathFormula formula="-1" /> — priamky zvieraju uhol 90°.</p>
          </div>
        </div>
      </div>

      <!-- Vzdialenosť bodu od priamky -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Vzdialenosť bodu od priamky</h3>
        <p class="text-gray-700 mb-4">
          Vzdialenosť bodu <MathFormula formula="P(x_0, y_0)" /> od priamky <MathFormula formula="ax + by + c = 0" />
          je dĺžka kolmice z bodu na priamku:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}" />
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 2 — Rovnica priamky a vzdialenosť bodu</h3>
        <p class="text-gray-700 mb-3">
          Nájdi rovnicu priamky prechádzajúcej bodmi <MathFormula formula="A(1,\,3)" /> a <MathFormula formula="B(4,\,9)" />.
          Potom vypočítaj vzdialenosť bodu <MathFormula formula="C(0,\,0)" /> od tejto priamky.
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-3">
          <p class="font-medium text-gray-800">Krok 1 — smernica:</p>
          <div class="flex justify-center">
            <MathFormula display formula="k = \frac{9 - 3}{4 - 1} = \frac{6}{3} = 2" />
          </div>
          <p class="font-medium text-gray-800">Krok 2 — smernicová rovnica (bod A):</p>
          <div class="flex justify-center">
            <MathFormula display formula="y - 3 = 2(x - 1) \;\Rightarrow\; y = 2x + 1" />
          </div>
          <p class="font-medium text-gray-800">Krok 3 — všeobecná rovnica:</p>
          <div class="flex justify-center">
            <MathFormula display formula="2x - y + 1 = 0" />
          </div>
          <p class="font-medium text-gray-800">Krok 4 — vzdialenosť C(0,0):</p>
          <div class="flex justify-center">
            <MathFormula display formula="d = \frac{|2 \cdot 0 - 1 \cdot 0 + 1|}{\sqrt{4 + 1}} = \frac{1}{\sqrt{5}} = \frac{\sqrt{5}}{5} \approx 0{,}45" />
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SEKCIA 3: Kružnica ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">3. Kružnica a vzájomná poloha s priamkou</h2>

      <!-- Rovnica kružnice -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Stredová rovnica kružnice</h3>
        <p class="text-gray-700 mb-4">
          Kružnica so stredom <MathFormula formula="S(m, n)" /> a polomerom <MathFormula formula="r" />
          obsahuje všetky body, ktorých vzdialenosť od stredu je práve <MathFormula formula="r" />:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="(x - m)^2 + (y - n)^2 = r^2" />
        </div>
        <p class="text-gray-700">
          Kružnica so stredom v počiatku <MathFormula formula="S(0,0)" /> má rovnicu
          <MathFormula formula="x^2 + y^2 = r^2" />.
        </p>
      </div>

      <!-- Príklad 3 -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 3 — Rovnica kružnice</h3>
        <p class="text-gray-700 mb-3">
          Napíš rovnicu kružnice so stredom <MathFormula formula="S(3, -2)" /> prechádzajúcej bodom <MathFormula formula="P(6, 2)" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-3">
          <p class="font-medium text-gray-800">Krok 1 — polomer (vzdialenosť S a P):</p>
          <div class="flex justify-center">
            <MathFormula display formula="r = \sqrt{(6-3)^2 + (2-(-2))^2} = \sqrt{9 + 16} = \sqrt{25} = 5" />
          </div>
          <p class="font-medium text-gray-800">Krok 2 — rovnica kružnice:</p>
          <div class="flex justify-center">
            <MathFormula display formula="(x - 3)^2 + (y + 2)^2 = 25" />
          </div>
        </div>
      </div>

      <!-- Vzájomná poloha priamky a kružnice -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Vzájomná poloha priamky a kružnice</h3>
        <p class="text-gray-700 mb-4">
          Vzájomnú polohu určíme podľa vzdialenosti <MathFormula formula="d" /> stredu kružnice od priamky:
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1">✂️</div>
            <p class="font-semibold text-red-800 mb-1">Sečnica</p>
            <MathFormula display formula="d < r" />
            <p class="text-gray-600 text-sm mt-1">Dva spoločné body</p>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1">👋</div>
            <p class="font-semibold text-yellow-800 mb-1">Dotyčnica</p>
            <MathFormula display formula="d = r" />
            <p class="text-gray-600 text-sm mt-1">Jeden spoločný bod</p>
          </div>
          <div class="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div class="text-2xl mb-1">🚫</div>
            <p class="font-semibold text-green-800 mb-1">Vonkajšia</p>
            <MathFormula display formula="d > r" />
            <p class="text-gray-600 text-sm mt-1">Žiadny spoločný bod</p>
          </div>
        </div>
        <p class="text-gray-700 mt-4 text-sm">
          <strong>Tip:</strong> Polohu možno tiež určiť dosadením rovnice priamky do rovnice kružnice a výpočtom diskriminantu
          <MathFormula formula="D" /> — ak <MathFormula formula="D > 0" /> (dva body), <MathFormula formula="D = 0" /> (jeden bod),
          <MathFormula formula="D < 0" /> (žiadny bod).
        </p>
      </div>

      <!-- Príklad 4 -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 4 — Poloha priamky a kružnice</h3>
        <p class="text-gray-700 mb-3">
          Zisti vzájomnú polohu priamky <MathFormula formula="2x - y + 1 = 0" /> a kružnice
          <MathFormula formula="(x-2)^2 + (y-1)^2 = 4" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4 space-y-3">
          <p class="font-medium text-gray-800">Vzdialenosť stredu S(2,1) od priamky:</p>
          <div class="flex justify-center">
            <MathFormula display formula="d = \frac{|2 \cdot 2 - 1 \cdot 1 + 1|}{\sqrt{4 + 1}} = \frac{|4|}{\sqrt{5}} = \frac{4}{\sqrt{5}} \approx 1{,}79" />
          </div>
          <p class="text-gray-700">
            Pretože <MathFormula formula="d \approx 1{,}79 < r = 2" />, priamka je <strong>sečnica</strong> — pretína kružnicu v dvoch bodoch.
          </p>
          <p class="text-gray-700 text-sm text-gray-500">
            (Priesečníky sme vypočítali dosadením: body (0, 1) a (0,8; 2,6) — viditeľné na ilustrácii.)
          </p>
        </div>
      </div>
    </section>

    <!-- ======================== ZHRNUTIE ======================== -->
    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <p class="font-semibold text-gray-700 mb-2">Základné vzorce:</p>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>• Vzdialenosť bodov: <MathFormula formula="d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}" /></li>
            <li>• Stred úsečky: <MathFormula formula="S = \left(\tfrac{x_1+x_2}{2}, \tfrac{y_1+y_2}{2}\right)" /></li>
            <li>• Smernica: <MathFormula formula="k = \tfrac{y_2-y_1}{x_2-x_1}" /></li>
            <li>• Kolmosť: <MathFormula formula="k_1 \cdot k_2 = -1" /></li>
            <li>• Rovnobežnosť: <MathFormula formula="k_1 = k_2" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-gray-700 mb-2">Rovnice útvarov:</p>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>• Smernicová priamka: <MathFormula formula="y = kx + q" /></li>
            <li>• Všeobecná priamka: <MathFormula formula="ax + by + c = 0" /></li>
            <li>• Vzd. bodu od priamky: <MathFormula formula="d = \tfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}" /></li>
            <li>• Kružnica: <MathFormula formula="(x-m)^2+(y-n)^2=r^2" /></li>
            <li>• Poloha s priamkou: podľa <MathFormula formula="d \lessgtr r" /></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ======================== KVÍZ ======================== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progres -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-4 text-sm text-gray-500">
          <span>Otázka {{ currentQ + 1 }} / {{ quiz.length }}</span>
          <span>Skóre: {{ quizScore }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5 mb-6">
          <div
            class="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
            :style="{ width: ((currentQ + 1) / quiz.length * 100) + '%' }"
          />
        </div>

        <!-- Otázka -->
        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-6">
          {{ currentQuestion.question }}
        </p>

        <!-- Možnosti -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`quiz-option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border transition-all duration-150"
            :class="{
              'border-gray-200 hover:border-blue-300 hover:bg-blue-50': selectedAnswer === null,
              'border-green-400 bg-green-50 text-green-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
              'border-red-400 bg-red-50 text-red-800': selectedAnswer === i && i !== currentQuestion.correctIndex,
              'border-gray-200 opacity-50': selectedAnswer !== null && i !== currentQuestion.correctIndex && i !== selectedAnswer,
              'cursor-not-allowed': selectedAnswer !== null,
              'cursor-pointer': selectedAnswer === null,
            }"
            @click="selectAnswer(i)"
          >
            <span class="font-medium">{{ String.fromCharCode(65 + i) }}.</span> {{ option }}
          </button>
        </div>

        <!-- Spätná väzba -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            class="rounded-xl p-4 mb-4"
            :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'"
          >
            <p class="font-semibold mb-1" :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
            </p>
            <p class="text-gray-700 text-sm">{{ currentQuestion.explanation }}</p>
          </div>
        </Transition>

        <!-- Ďalej -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            data-testid="quiz-next-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Výsledok -->
      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="quiz-result"
          class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="quiz-score" class="text-gray-600 mb-6">
            Dosiahol si <strong>{{ quizScore }} / {{ quiz.length }}</strong> bodov.
          </p>
          <button
            data-testid="quiz-reset-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
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

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aká je vzdialenosť bodov A(1, 2) a B(4, 6)?',
    options: ['3', '4', '5', '7'],
    correctIndex: 2,
    explanation: 'd = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.',
  },
  {
    question: 'Aké sú súradnice stredu úsečky AB, kde A(2, 4) a B(8, 2)?',
    options: ['(3, 3)', '(5, 3)', '(6, 6)', '(10, 6)'],
    correctIndex: 1,
    explanation: 'S = ((2+8)/2, (4+2)/2) = (5, 3).',
  },
  {
    question: 'Priamky y = 3x + 2 a y = −(1/3)x + 5 sú navzájom:',
    options: ['rovnobežné', 'totožné', 'kolmé', 'rôznobežné, ale nie kolmé'],
    correctIndex: 2,
    explanation: 'k₁ · k₂ = 3 · (−1/3) = −1, čo je podmienka kolmosti.',
  },
  {
    question: 'Aká je smernica priamky prechádzajúcej bodmi A(1, 1) a B(3, 5)?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'k = (5 − 1) / (3 − 1) = 4 / 2 = 2.',
  },
  {
    question: 'Ktorá rovnica opisuje kružnicu so stredom S(1, −2) a polomerom r = 3?',
    options: [
      '(x + 1)² + (y − 2)² = 3',
      '(x − 1)² + (y + 2)² = 9',
      '(x − 1)² + (y − 2)² = 9',
      'x² + y² = 9',
    ],
    correctIndex: 1,
    explanation: 'Dosadíme m = 1, n = −2, r² = 9: (x − 1)² + (y + 2)² = 9.',
  },
  {
    question: 'Aká je vzdialenosť bodu P(0, 0) od priamky 3x + 4y − 5 = 0?',
    options: ['1', '√5', '5', '1/5'],
    correctIndex: 0,
    explanation: 'd = |3·0 + 4·0 − 5| / √(9 + 16) = 5 / √25 = 5/5 = 1.',
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
  title: 'Analytická geometria | Matematika | NaucSaTo',
  description: 'Analytická geometria pre gymnazistov: kartézska sústava, vzdialenosť bodov, stred úsečky, rovnica priamky, kružnica a vzájomná poloha útvarov.',
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
