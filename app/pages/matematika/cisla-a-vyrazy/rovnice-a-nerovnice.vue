<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/cisla-a-vyrazy" class="hover:text-blue-600 transition-colors">Čísla, premenné a výrazy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Rovnice a nerovnice</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl" aria-hidden="true">⚖️</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Rovnice a nerovnice</h1>
    </div>
    <p class="text-gray-600 text-lg mb-10 leading-relaxed">
      Rovnice a nerovnice sú základným nástrojom matematiky — pomocou nich modelujeme reálne situácie, hľadáme neznáme hodnoty a popisujeme intervaly riešení. Na gymnáziu sa stretneš s lineárnymi aj kvadratickými prípadmi, sústavami rovníc a zápismi riešení intervalmi.
    </p>

    <!-- ==================== SVG ILUSTRÁCIA ==================== -->
    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
      <h2 class="text-lg font-semibold text-blue-800 mb-4 text-center">Parabola a diskriminant — tri prípady</h2>
      <svg
        viewBox="0 0 660 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tri paraboly zobrazujúce prípady diskriminantu D väčší ako nula, D rovné nula a D menší ako nula s vyznačenými koreňmi na osi x"
        role="img"
        class="w-full max-w-2xl mx-auto block"
      >
        <!-- Mriežka pozadia -->
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e7ff" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="660" height="220" fill="#f0f4ff" rx="12"/>
        <rect width="660" height="220" fill="url(#grid)" rx="12"/>

        <!-- === PRÍPAD 1: D > 0 (dve reálne korene) === -->
        <g transform="translate(10, 0)">
          <!-- Osi -->
          <line x1="110" y1="10" x2="110" y2="210" stroke="#94a3b8" stroke-width="1.2"/>
          <line x1="30" y1="130" x2="200" y2="130" stroke="#94a3b8" stroke-width="1.2"/>
          <!-- Šípky -->
          <polygon points="110,8 106,16 114,16" fill="#94a3b8"/>
          <polygon points="202,130 194,126 194,134" fill="#94a3b8"/>
          <!-- Parabola: y = (x-3)² - 36 → normalizovaná -->
          <!-- body: x od -5 do 5, y = x²-16, prekl. na canvas -->
          <!-- canvas: x∈[30,200], y∈[10,210], stred x=110, os y=130 -->
          <!-- f(x) = x² - 16, scale: 1px = 5units horiz, 3px = 1unit vert -->
          <path
            d="M 40,110 Q 75,42 110,130 Q 145,42 180,110"
            fill="none"
            stroke="#2563eb"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <!-- Korene — priesečníky s osou x -->
          <circle cx="62" cy="130" r="5" fill="#1d4ed8" stroke="white" stroke-width="2"/>
          <circle cx="158" cy="130" r="5" fill="#1d4ed8" stroke="white" stroke-width="2"/>
          <!-- Popisky koreňov -->
          <text x="57" y="150" font-size="12" fill="#1e40af" font-family="sans-serif" text-anchor="middle">x₁</text>
          <text x="163" y="150" font-size="12" fill="#1e40af" font-family="sans-serif" text-anchor="middle">x₂</text>
          <!-- Nadpis -->
          <rect x="35" y="168" width="150" height="36" rx="6" fill="#dbeafe"/>
          <text x="110" y="183" font-size="11" fill="#1e3a8a" font-family="sans-serif" text-anchor="middle" font-weight="600">D &gt; 0</text>
          <text x="110" y="197" font-size="10" fill="#1e40af" font-family="sans-serif" text-anchor="middle">2 reálne korene</text>
        </g>

        <!-- === PRÍPAD 2: D = 0 (jeden dvojnásobný koreň) === -->
        <g transform="translate(220, 0)">
          <line x1="110" y1="10" x2="110" y2="210" stroke="#94a3b8" stroke-width="1.2"/>
          <line x1="30" y1="130" x2="200" y2="130" stroke="#94a3b8" stroke-width="1.2"/>
          <polygon points="110,8 106,16 114,16" fill="#94a3b8"/>
          <polygon points="202,130 194,126 194,134" fill="#94a3b8"/>
          <!-- Parabola dotýkajúca sa osi x -->
          <path
            d="M 40,95 Q 75,175 110,130 Q 145,175 180,95"
            fill="none"
            stroke="#7c3aed"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <!-- Jeden dvojnásobný koreň -->
          <circle cx="110" cy="130" r="6" fill="#7c3aed" stroke="white" stroke-width="2"/>
          <text x="110" y="150" font-size="12" fill="#6d28d9" font-family="sans-serif" text-anchor="middle">x₁=x₂</text>
          <!-- Nadpis -->
          <rect x="35" y="168" width="150" height="36" rx="6" fill="#ede9fe"/>
          <text x="110" y="183" font-size="11" fill="#4c1d95" font-family="sans-serif" text-anchor="middle" font-weight="600">D = 0</text>
          <text x="110" y="197" font-size="10" fill="#5b21b6" font-family="sans-serif" text-anchor="middle">1 dvojnásobný koreň</text>
        </g>

        <!-- === PRÍPAD 3: D < 0 (žiadny reálny koreň) === -->
        <g transform="translate(430, 0)">
          <line x1="110" y1="10" x2="110" y2="210" stroke="#94a3b8" stroke-width="1.2"/>
          <line x1="30" y1="130" x2="200" y2="130" stroke="#94a3b8" stroke-width="1.2"/>
          <polygon points="110,8 106,16 114,16" fill="#94a3b8"/>
          <polygon points="202,130 194,126 194,134" fill="#94a3b8"/>
          <!-- Parabola nad osou x -->
          <path
            d="M 40,80 Q 75,32 110,52 Q 145,32 180,80"
            fill="none"
            stroke="#dc2626"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <!-- Vrchol paraboly -->
          <circle cx="110" cy="52" r="4" fill="#dc2626" stroke="white" stroke-width="2"/>
          <text x="110" y="45" font-size="11" fill="#b91c1c" font-family="sans-serif" text-anchor="middle">V</text>
          <!-- Šrafovanie — os x nedotýka -->
          <line x1="30" y1="130" x2="200" y2="130" stroke="#fca5a5" stroke-width="2" stroke-dasharray="6,4"/>
          <!-- Nadpis -->
          <rect x="35" y="168" width="150" height="36" rx="6" fill="#fee2e2"/>
          <text x="110" y="183" font-size="11" fill="#7f1d1d" font-family="sans-serif" text-anchor="middle" font-weight="600">D &lt; 0</text>
          <text x="110" y="197" font-size="10" fill="#991b1b" font-family="sans-serif" text-anchor="middle">žiadny reálny koreň</text>
        </g>
      </svg>
      <p class="text-center text-sm text-blue-600 mt-3">
        Poloha paraboly voči osi <em>x</em> závisí od hodnoty diskriminantu <MathFormula formula="D = b^2 - 4ac"/>.
      </p>
    </div>

    <!-- ==================== SEKCIA 1: Lineárna rovnica ==================== -->
    <section aria-labelledby="sekcia-linearna" class="mb-12">
      <h2 id="sekcia-linearna" class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
        1. Lineárna rovnica
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Lineárna rovnica s jednou neznámou má tvar <MathFormula formula="ax + b = 0"/>, kde <MathFormula formula="a \neq 0"/>.
        Riešime ju tak, že neznámu <MathFormula formula="x"/> izolujeme na jednu stranu rovnice.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-blue-800 mb-3">Vzorec — riešenie lineárnej rovnice</h3>
        <MathFormula display formula="ax + b = 0 \implies x = -\frac{b}{a}"/>
        <p class="text-sm text-gray-600 mt-2">Platí pre <MathFormula formula="a \neq 0"/>. Ak <MathFormula formula="a = 0"/>, rovnica buď nemá riešenie, alebo je splnená pre každé <MathFormula formula="x"/>.</p>
      </div>

      <!-- Príklad 1 -->
      <div class="border border-gray-200 rounded-xl p-5 mb-6 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 1: Riešenie lineárnej rovnice</h3>
        <p class="text-gray-700 mb-2">Vyriešte rovnicu <MathFormula formula="3x - 9 = 0"/>.</p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <p><span class="font-medium">Postup:</span></p>
          <p>Tu máme <MathFormula formula="a = 3"/>, <MathFormula formula="b = -9"/>.</p>
          <MathFormula display formula="x = -\frac{b}{a} = -\frac{-9}{3} = \frac{9}{3} = 3"/>
          <p class="font-medium text-blue-700">Riešenie: <MathFormula formula="x = 3"/></p>
          <p class="text-gray-500">Overenie: <MathFormula formula="3 \cdot 3 - 9 = 9 - 9 = 0 \checkmark"/></p>
        </div>
      </div>

      <!-- Sústava rovníc -->
      <h3 class="text-xl font-semibold text-blue-600 mb-3">Sústava dvoch lineárnych rovníc</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Sústava dvoch lineárnych rovníc s dvoma neznámymi:
      </p>
      <MathFormula display formula="\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}"/>
      <p class="text-gray-700 mb-4 mt-2 leading-relaxed">
        Riešime dvoma základnými metódami:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 class="font-semibold text-blue-800 mb-2">Dosadzovacia metóda</h4>
          <p class="text-sm text-gray-700">Z jednej rovnice vyjadríme jednu neznámu a dosadíme do druhej rovnice. Tým dostaneme rovnicu s jednou neznámou, ktorú vyriešime.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h4 class="font-semibold text-blue-800 mb-2">Sčítavacia metóda</h4>
          <p class="text-sm text-gray-700">Rovnice vhodne upravíme (vynásobíme) tak, aby sa koeficienty jednej neznámej rovnali (prípadne boli opačné) a odčítame alebo sčítame rovnice.</p>
        </div>
      </div>

      <!-- Príklad 2 - sústava -->
      <div class="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 2: Sústava rovníc — dosadzovacia metóda</h3>
        <p class="text-gray-700 mb-2">Vyriešte sústavu:
          <MathFormula display formula="\begin{cases} x + y = 5 \\ 2x - y = 4 \end{cases}"/>
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <p><span class="font-medium">Krok 1:</span> Z prvej rovnice vyjadríme <MathFormula formula="y"/>:</p>
          <MathFormula display formula="y = 5 - x"/>
          <p><span class="font-medium">Krok 2:</span> Dosadíme do druhej rovnice:</p>
          <MathFormula display formula="2x - (5 - x) = 4 \implies 3x - 5 = 4 \implies x = 3"/>
          <p><span class="font-medium">Krok 3:</span> Dosadíme späť:</p>
          <MathFormula display formula="y = 5 - 3 = 2"/>
          <p class="font-medium text-blue-700">Riešenie: <MathFormula formula="x = 3, \quad y = 2"/></p>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 2: Kvadratická rovnica ==================== -->
    <section aria-labelledby="sekcia-kvadraticka" class="mb-12">
      <h2 id="sekcia-kvadraticka" class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
        2. Kvadratická rovnica
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Kvadratická rovnica má tvar <MathFormula formula="ax^2 + bx + c = 0"/>, kde <MathFormula formula="a \neq 0"/>.
        Na určenie počtu a hodnôt koreňov používame <strong>diskriminant</strong>.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-blue-800 mb-3">Diskriminant a korene</h3>
        <MathFormula display formula="D = b^2 - 4ac"/>
        <MathFormula display formula="x_{1,2} = \frac{-b \pm \sqrt{D}}{2a}"/>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm">
          <div class="bg-blue-100 rounded-lg p-3 text-center">
            <p class="font-semibold text-blue-900"><MathFormula formula="D > 0"/></p>
            <p class="text-blue-700">2 rôzne reálne korene</p>
          </div>
          <div class="bg-purple-100 rounded-lg p-3 text-center">
            <p class="font-semibold text-purple-900"><MathFormula formula="D = 0"/></p>
            <p class="text-purple-700">1 dvojnásobný koreň</p>
          </div>
          <div class="bg-red-100 rounded-lg p-3 text-center">
            <p class="font-semibold text-red-900"><MathFormula formula="D < 0"/></p>
            <p class="text-red-700">Žiadny reálny koreň</p>
          </div>
        </div>
      </div>

      <!-- Príklad 3 - kvadratická -->
      <div class="border border-gray-200 rounded-xl p-5 mb-6 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 3: Kvadratická rovnica</h3>
        <p class="text-gray-700 mb-2">Vyriešte rovnicu <MathFormula formula="x^2 - 5x + 6 = 0"/>.</p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <p><span class="font-medium">Koeficienty:</span> <MathFormula formula="a=1,\; b=-5,\; c=6"/></p>
          <p><span class="font-medium">Diskriminant:</span></p>
          <MathFormula display formula="D = (-5)^2 - 4 \cdot 1 \cdot 6 = 25 - 24 = 1 > 0"/>
          <p><span class="font-medium">Korene:</span></p>
          <MathFormula display formula="x_{1,2} = \frac{5 \pm \sqrt{1}}{2} = \frac{5 \pm 1}{2}"/>
          <MathFormula display formula="x_1 = \frac{5+1}{2} = 3, \quad x_2 = \frac{5-1}{2} = 2"/>
          <p class="font-medium text-blue-700">Riešenie: <MathFormula formula="x_1 = 3, \quad x_2 = 2"/></p>
        </div>
      </div>

      <!-- Vietove vzťahy -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-blue-800 mb-3">Vietove vzťahy</h3>
        <p class="text-gray-700 text-sm mb-3">
          Ak sú <MathFormula formula="x_1, x_2"/> koreňmi rovnice <MathFormula formula="ax^2 + bx + c = 0"/>, platia vzťahy:
        </p>
        <MathFormula display formula="x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a}"/>
        <p class="text-sm text-gray-600 mt-2">
          Overenie na príklade 3: <MathFormula formula="3 + 2 = 5 = -\frac{-5}{1}"/> a <MathFormula formula="3 \cdot 2 = 6 = \frac{6}{1}"/>. ✓
        </p>
      </div>

      <!-- Rozklad na súčin -->
      <h3 class="text-xl font-semibold text-blue-600 mb-3">Rozklad na súčin (faktorový tvar)</h3>
      <p class="text-gray-700 mb-3 leading-relaxed">
        Keď poznáme korene <MathFormula formula="x_1, x_2"/>, môžeme kvadratický trinóm rozložiť:
      </p>
      <MathFormula display formula="ax^2 + bx + c = a(x - x_1)(x - x_2)"/>
      <p class="text-gray-700 mb-4 text-sm">
        Pre náš príklad: <MathFormula formula="x^2 - 5x + 6 = (x-3)(x-2)"/>.
      </p>

      <!-- Príklad 4 - rozklad -->
      <div class="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 4: Rozklad kvadratického trojčlena</h3>
        <p class="text-gray-700 mb-2">Rozložte <MathFormula formula="2x^2 - 8x + 6"/> na súčin.</p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <p><span class="font-medium">Krok 1:</span> Vytkneme koeficient <MathFormula formula="a=2"/>:</p>
          <MathFormula display formula="2(x^2 - 4x + 3)"/>
          <p><span class="font-medium">Krok 2:</span> Nájdeme korene <MathFormula formula="x^2 - 4x + 3 = 0"/>:</p>
          <MathFormula display formula="D = 16 - 12 = 4, \quad x_{1,2} = \frac{4 \pm 2}{2}"/>
          <MathFormula display formula="x_1 = 3, \quad x_2 = 1"/>
          <p><span class="font-medium">Výsledok:</span></p>
          <MathFormula display formula="2x^2 - 8x + 6 = 2(x-3)(x-1)"/>
          <p class="font-medium text-blue-700">Rozklad: <MathFormula formula="2(x-3)(x-1)"/></p>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 3: Nerovnice ==================== -->
    <section aria-labelledby="sekcia-nerovnice" class="mb-12">
      <h2 id="sekcia-nerovnice" class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
        3. Lineárne a kvadratické nerovnice
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Nerovnice riešime podobne ako rovnice, ale výsledkom nie je jedno číslo — je to <strong>množina čísel</strong> (interval alebo zjednotenie intervalov).
      </p>

      <!-- Lineárna nerovnica -->
      <h3 class="text-xl font-semibold text-blue-600 mb-3">Lineárna nerovnica</h3>

      <div class="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-5">
        <p class="text-amber-800 font-semibold text-sm">Dôležité pravidlo:</p>
        <p class="text-amber-700 text-sm mt-1">
          Pri násobení alebo delení nerovnice <strong>záporným číslom</strong> sa zmení orientácia nerovnosti:
          <MathFormula formula="{<}\;\longrightarrow\;{>}"/> a naopak!
        </p>
      </div>

      <!-- Príklad 5 - lineárna nerovnica -->
      <div class="border border-gray-200 rounded-xl p-5 mb-6 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 5: Lineárna nerovnica</h3>
        <p class="text-gray-700 mb-2">Vyriešte nerovnicu <MathFormula formula="-2x + 4 > 10"/>.</p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <MathFormula display formula="-2x + 4 > 10"/>
          <MathFormula display formula="-2x > 6"/>
          <p>Delíme číslom <MathFormula formula="-2"/> — orientácia sa zmení!</p>
          <MathFormula display formula="x < -3"/>
          <p class="font-medium text-blue-700">Riešenie: <MathFormula formula="x \in (-\infty,\; -3)"/></p>
        </div>
      </div>

      <!-- Kvadratická nerovnica -->
      <h3 class="text-xl font-semibold text-blue-600 mb-3">Kvadratická nerovnica</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Pri kvadratickej nerovnici analyzujeme, kde je parabola <MathFormula formula="y = ax^2 + bx + c"/> nad alebo pod osou <MathFormula formula="x"/>. Postup:
      </p>
      <ol class="list-decimal list-inside text-gray-700 space-y-1 mb-5 ml-2">
        <li>Nájdeme korene kvadratickej rovnice <MathFormula formula="ax^2 + bx + c = 0"/>.</li>
        <li>Určíme, či parabola otvára nahor (<MathFormula formula="a > 0"/>) alebo nadol (<MathFormula formula="a < 0"/>).</li>
        <li>Podľa toho zapíšeme riešenie intervalmi.</li>
      </ol>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h4 class="font-semibold text-blue-800 mb-2">Pravidlo pre <MathFormula formula="a > 0"/> (parabola nahor)</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li><MathFormula formula="ax^2 + bx + c < 0"/>: riešenie je <strong>medzi koreňmi</strong>: <MathFormula formula="x \in (x_1, x_2)"/></li>
          <li><MathFormula formula="ax^2 + bx + c > 0"/>: riešenie je <strong>vne koreňov</strong>: <MathFormula formula="x \in (-\infty, x_1) \cup (x_2, +\infty)"/></li>
        </ul>
      </div>

      <!-- Príklad 6 - kvadratická nerovnica -->
      <div class="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 6: Kvadratická nerovnica</h3>
        <p class="text-gray-700 mb-2">Vyriešte nerovnicu <MathFormula formula="x^2 - 4 < 0"/>.</p>
        <div class="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
          <p><span class="font-medium">Krok 1:</span> Korene rovnice <MathFormula formula="x^2 - 4 = 0"/>:</p>
          <MathFormula display formula="x^2 = 4 \implies x_1 = -2, \quad x_2 = 2"/>
          <p><span class="font-medium">Krok 2:</span> Koeficient <MathFormula formula="a = 1 > 0"/> — parabola otvára nahor.</p>
          <p><span class="font-medium">Krok 3:</span> Hľadáme, kde je parabola <em>pod</em> osou <MathFormula formula="x"/> (teda <MathFormula formula="< 0"/>): medzi koreňmi.</p>
          <p class="font-medium text-blue-700">Riešenie: <MathFormula formula="x \in (-2,\; 2)"/></p>
        </div>
      </div>
    </section>

    <!-- ==================== ZHRNUTIE ==================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Lineárna rovnica</strong> <MathFormula formula="ax+b=0"/>: riešenie <MathFormula formula="x=-b/a"/> (pre <MathFormula formula="a\neq 0"/>).</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Kvadratická rovnica</strong> <MathFormula formula="ax^2+bx+c=0"/>: diskriminant <MathFormula formula="D=b^2-4ac"/>, korene <MathFormula formula="x_{1,2}=(-b\pm\sqrt{D})/(2a)"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Vietove vzťahy:</strong> <MathFormula formula="x_1+x_2=-b/a"/> a <MathFormula formula="x_1\cdot x_2=c/a"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Sústava rovníc:</strong> riešime dosadzovacou alebo sčítavacou metódou.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Lineárna nerovnica:</strong> pri násobení/delení záporným číslom sa mení orientácia nerovnosti.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Kvadratická nerovnica:</strong> riešime cez parabolu — medzi koreňmi (ak <MathFormula formula="a>0"/> a <MathFormula formula="<0"/>) alebo vne koreňov (ak <MathFormula formula="a>0"/> a <MathFormula formula=">0"/>).</span>
        </li>
      </ul>
    </div>

    <!-- ==================== KVÍZ ==================== -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span>Skóre: {{ quizScore }}</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${((currentQ) / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Question -->
        <p data-testid="quiz-question" class="text-lg font-medium text-gray-800 mb-5">
          {{ currentQuestion.question }}
        </p>

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`quiz-option-${i}`"
            type="button"
            :disabled="selectedAnswer !== null"
            :class="[
              'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200',
              selectedAnswer === null
                ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                : selectedAnswer === i
                  ? i === currentQuestion.correctIndex
                    ? 'border-green-400 bg-green-50 text-green-800 font-semibold'
                    : 'border-red-400 bg-red-50 text-red-800'
                  : i === currentQuestion.correctIndex && selectedAnswer !== null
                    ? 'border-green-300 bg-green-50 text-green-700'
                    : 'border-gray-200 text-gray-500 cursor-not-allowed opacity-60'
            ]"
            @click="selectAnswer(i)"
          >
            {{ option }}
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            :class="[
              'rounded-xl p-4 mb-4 text-sm',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <p class="font-semibold mb-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}
            </p>
            <p>{{ currentQuestion.explanation }}</p>
          </div>
        </Transition>

        <!-- Next button -->
        <div class="text-right">
          <button
            v-if="selectedAnswer !== null"
            data-testid="quiz-next-btn"
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Result -->
      <div
        v-else
        data-testid="quiz-result"
        class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
      >
        <p class="text-5xl mb-4">{{ scoreEmoji }}</p>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="quiz-score" class="text-gray-500 mb-6">
          Dosiahol si <strong>{{ quizScore }}</strong> z <strong>{{ quiz.length }}</strong> bodov.
        </p>
        <button
          data-testid="quiz-reset-btn"
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
  title: 'Rovnice a nerovnice | Matematika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Lineárne a kvadratické rovnice, diskriminant, Vietove vzťahy, sústava rovníc, lineárne a kvadratické nerovnice. Kompletný výklad pre gymnazistov.',
    },
  ],
})

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aké je riešenie lineárnej rovnice 2x + 10 = 0?',
    options: ['x = 5', 'x = -5', 'x = 2', 'x = -2'],
    correctIndex: 1,
    explanation: 'Dosadíme do vzorca: x = -b/a = -10/2 = -5. Overenie: 2·(-5) + 10 = -10 + 10 = 0 ✓',
  },
  {
    question: 'Diskriminant kvadratickej rovnice x² - 6x + 9 = 0 je rovný:',
    options: ['D = 0', 'D = 36', 'D = -36', 'D = 9'],
    correctIndex: 0,
    explanation: 'D = b² - 4ac = (-6)² - 4·1·9 = 36 - 36 = 0. Rovnica má jeden dvojnásobný koreň.',
  },
  {
    question: 'Koreňmi rovnice x² - 7x + 12 = 0 sú:',
    options: ['x₁=3, x₂=4', 'x₁=2, x₂=6', 'x₁=-3, x₂=-4', 'x₁=1, x₂=12'],
    correctIndex: 0,
    explanation: 'D = 49 - 48 = 1. Korene: x = (7 ± 1)/2, teda x₁ = 4 a x₂ = 3. Overenie Vietom: 3+4=7=7/1 ✓, 3·4=12=12/1 ✓',
  },
  {
    question: 'Súčet koreňov rovnice 3x² + 6x - 9 = 0 podľa Vietových vzťahov je:',
    options: ['−2', '2', '−3', '3'],
    correctIndex: 0,
    explanation: 'Podľa Vietových vzťahov: x₁ + x₂ = -b/a = -6/3 = -2.',
  },
  {
    question: 'Riešením lineárnej nerovnice −3x > 12 je:',
    options: ['x > −4', 'x < −4', 'x > 4', 'x < 4'],
    correctIndex: 1,
    explanation: 'Delíme záporným číslom −3, orientácia sa zmení: x < 12/(−3) = −4. Riešenie: x ∈ (−∞, −4).',
  },
  {
    question: 'Riešením kvadratickej nerovnice x² − 9 > 0 je:',
    options: [
      'x ∈ (−3, 3)',
      'x ∈ (−∞, −3) ∪ (3, +∞)',
      'x ∈ [−3, 3]',
      'x ∈ ℝ',
    ],
    correctIndex: 1,
    explanation: 'Korene sú x₁ = −3 a x₂ = 3. Koeficient a = 1 > 0, parabola otvára nahor. Nerovnica > 0 platí vne koreňov: x ∈ (−∞, −3) ∪ (3, +∞).',
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
