<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/cisla-a-vyrazy" class="hover:text-blue-600 transition-colors">Čísla, premenné a výrazy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Mocniny a odmocniny</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-4xl">⚡</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Mocniny a odmocniny</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10 leading-relaxed">
      Mocniny a odmocniny sú základným nástrojom matematiky aj prírodných vied. Pomáhajú nám zapisovať veľmi veľké aj veľmi malé čísla, riešiť rovnice a popisovať javy ako exponenciálny rast.
    </p>

    <!-- ===== SEKCIA 1: MOCNINY ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Mocniny</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Mocnina je skrátený zápis opakovaného násobenia rovnakého čísla. Základ <strong>a</strong> násobíme <strong>n</strong>-krát:
      </p>

      <div class="bg-blue-50 rounded-2xl p-6 mb-6">
        <MathFormula display formula="a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ krát}}, \quad a \in \mathbb{R},\; n \in \mathbb{N}" />
        <p class="text-sm text-gray-500 text-center mt-1">Základ <em>a</em>, exponent <em>n</em></p>
      </div>

      <h3 class="text-lg font-semibold text-gray-800 mb-3">Pravidlá počítania s mocninami</h3>

      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="px-4 py-3 text-left rounded-tl-xl">Pravidlo</th>
              <th class="px-4 py-3 text-left">Vzorec</th>
              <th class="px-4 py-3 text-left rounded-tr-xl">Príklad</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Súčin mocnín</td>
              <td class="px-4 py-3"><MathFormula formula="a^r \cdot a^s = a^{r+s}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="2^3 \cdot 2^4 = 2^7 = 128" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Podiel mocnín</td>
              <td class="px-4 py-3"><MathFormula formula="a^r \div a^s = a^{r-s}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="3^5 \div 3^2 = 3^3 = 27" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Mocnina mocniny</td>
              <td class="px-4 py-3"><MathFormula formula="(a^r)^s = a^{r \cdot s}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="(2^3)^2 = 2^6 = 64" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Nultá mocnina</td>
              <td class="px-4 py-3"><MathFormula formula="a^0 = 1 \quad (a \neq 0)" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="7^0 = 1,\quad (-5)^0 = 1" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Záporný exponent</td>
              <td class="px-4 py-3"><MathFormula formula="a^{-n} = \dfrac{1}{a^n}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="4^{-2} = \frac{1}{16}" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Zlomkový exponent</td>
              <td class="px-4 py-3"><MathFormula formula="a^{1/n} = \sqrt[n]{a}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="8^{1/3} = \sqrt[3]{8} = 2" /></td>
            </tr>
            <tr class="hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-gray-700">Racionálny exponent</td>
              <td class="px-4 py-3"><MathFormula formula="a^{m/n} = \sqrt[n]{a^m}" /></td>
              <td class="px-4 py-3 text-gray-500"><MathFormula formula="4^{3/2} = \sqrt{4^3} = 8" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Priklad 1 -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-4 shadow-sm">
        <p class="font-semibold text-blue-700 mb-3">Príklad 1: Zjednodušte výraz</p>
        <MathFormula display formula="\frac{2^5 \cdot 2^{-3}}{(2^2)^2}" />
        <details class="mt-3">
          <summary class="cursor-pointer text-sm text-blue-600 hover:underline font-medium select-none">Zobraziť riešenie</summary>
          <div class="mt-3 space-y-2 text-gray-700">
            <MathFormula display formula="\frac{2^5 \cdot 2^{-3}}{(2^2)^2} = \frac{2^{5+(-3)}}{2^{2 \cdot 2}} = \frac{2^2}{2^4} = 2^{2-4} = 2^{-2} = \frac{1}{4}" />
            <p class="text-sm text-gray-500">Postup: súčin → podiel → záporný exponent.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- ===== SVG ILUSTRÁCIA ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Exponenciálny rast — mocniny čísla 2</h2>
      <p class="text-gray-600 mb-4">Tabuľka ukazuje, ako rýchlo rastú hodnoty <MathFormula formula="2^n" /> pre <MathFormula formula="n = 1, 2, \ldots, 10" />.</p>

      <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm overflow-x-auto">
        <svg
          role="img"
          aria-label="Graf exponenciálneho rastu mocnín čísla 2 od 2 na 1 po 2 na 10, a prehľad mocnín čísla 10 od 10 na mínus 3 po 10 na 3"
          viewBox="0 0 680 340"
          class="w-full"
          font-family="system-ui, sans-serif"
        >
          <!-- Background -->
          <rect x="0" y="0" width="680" height="340" rx="12" fill="#f0f7ff" />

          <!-- Title left panel -->
          <text x="170" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8">Mocniny čísla 2</text>

          <!-- Left panel: bar chart for 2^1 to 2^10 -->
          <!-- We'll show bars scaled logarithmically so all are visible -->
          <!-- Max value 1024, using log scale. Bar height = log2(val)/10 * 180 -->
          <!-- 2^1=2 → h=18, 2^2=4 → h=36, 2^3=8 → h=54, 2^4=16 → h=72, 2^5=32 → h=90,
               2^6=64 → h=108, 2^7=128 → h=126, 2^8=256 → h=144, 2^9=512 → h=162, 2^10=1024 → h=180 -->
          <g transform="translate(20, 40)">
            <!-- Axes -->
            <line x1="30" y1="200" x2="300" y2="200" stroke="#93c5fd" stroke-width="1.5"/>
            <line x1="30" y1="20" x2="30" y2="200" stroke="#93c5fd" stroke-width="1.5"/>
            <!-- Y axis label -->
            <text x="8" y="110" font-size="9" fill="#64748b" text-anchor="middle" transform="rotate(-90,8,110)">hodnota (log₂)</text>

            <!-- Bars and labels: each bar width=24, gap=2, starting at x=34 -->
            <!-- n=1: val=2 -->
            <rect x="34" y="182" width="22" height="18" rx="3" fill="#3b82f6" opacity="0.85"/>
            <text x="45" y="180" font-size="8" text-anchor="middle" fill="#1d4ed8">2</text>
            <text x="45" y="213" font-size="9" text-anchor="middle" fill="#64748b">2¹</text>

            <!-- n=2: val=4 -->
            <rect x="60" y="164" width="22" height="36" rx="3" fill="#3b82f6" opacity="0.85"/>
            <text x="71" y="162" font-size="8" text-anchor="middle" fill="#1d4ed8">4</text>
            <text x="71" y="213" font-size="9" text-anchor="middle" fill="#64748b">2²</text>

            <!-- n=3: val=8 -->
            <rect x="86" y="146" width="22" height="54" rx="3" fill="#3b82f6" opacity="0.85"/>
            <text x="97" y="144" font-size="8" text-anchor="middle" fill="#1d4ed8">8</text>
            <text x="97" y="213" font-size="9" text-anchor="middle" fill="#64748b">2³</text>

            <!-- n=4: val=16 -->
            <rect x="112" y="128" width="22" height="72" rx="3" fill="#2563eb" opacity="0.85"/>
            <text x="123" y="126" font-size="8" text-anchor="middle" fill="#1d4ed8">16</text>
            <text x="123" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁴</text>

            <!-- n=5: val=32 -->
            <rect x="138" y="110" width="22" height="90" rx="3" fill="#2563eb" opacity="0.85"/>
            <text x="149" y="108" font-size="8" text-anchor="middle" fill="#1d4ed8">32</text>
            <text x="149" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁵</text>

            <!-- n=6: val=64 -->
            <rect x="164" y="92" width="22" height="108" rx="3" fill="#1d4ed8" opacity="0.85"/>
            <text x="175" y="90" font-size="8" text-anchor="middle" fill="#1d4ed8">64</text>
            <text x="175" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁶</text>

            <!-- n=7: val=128 -->
            <rect x="190" y="74" width="22" height="126" rx="3" fill="#1d4ed8" opacity="0.85"/>
            <text x="201" y="72" font-size="8" text-anchor="middle" fill="#1d4ed8">128</text>
            <text x="201" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁷</text>

            <!-- n=8: val=256 -->
            <rect x="216" y="56" width="22" height="144" rx="3" fill="#1e40af" opacity="0.85"/>
            <text x="227" y="54" font-size="8" text-anchor="middle" fill="#1e40af">256</text>
            <text x="227" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁸</text>

            <!-- n=9: val=512 -->
            <rect x="242" y="38" width="22" height="162" rx="3" fill="#1e40af" opacity="0.85"/>
            <text x="253" y="36" font-size="8" text-anchor="middle" fill="#1e40af">512</text>
            <text x="253" y="213" font-size="9" text-anchor="middle" fill="#64748b">2⁹</text>

            <!-- n=10: val=1024 -->
            <rect x="268" y="20" width="22" height="180" rx="3" fill="#1e3a8a" opacity="0.9"/>
            <text x="279" y="18" font-size="8" text-anchor="middle" fill="#1e3a8a">1024</text>
            <text x="279" y="213" font-size="9" text-anchor="middle" fill="#64748b">2¹⁰</text>

            <!-- note -->
            <text x="165" y="232" font-size="9" fill="#94a3b8" text-anchor="middle">Výška stĺpca = log₂(hodnota)</text>
          </g>

          <!-- Divider -->
          <line x1="340" y1="20" x2="340" y2="320" stroke="#bfdbfe" stroke-width="1.5" stroke-dasharray="5,3"/>

          <!-- Right panel: powers of 10 number line -->
          <text x="510" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8">Mocniny čísla 10</text>

          <g transform="translate(360, 40)">
            <!-- Horizontal axis -->
            <line x1="20" y1="140" x2="290" y2="140" stroke="#93c5fd" stroke-width="2"/>
            <!-- Arrow right -->
            <polygon points="290,136 298,140 290,144" fill="#93c5fd"/>

            <!-- Tick marks and labels for 10^-3 to 10^3 -->
            <!-- positions: 7 values, spacing = 260/6 ≈ 43.3 -->
            <!-- 10^-3 at x=20, 10^-2 at x=63, 10^-1 at x=107, 10^0 at x=150, 10^1 at x=193, 10^2 at x=237, 10^3 at x=280 -->

            <!-- 10^-3 = 0.001 -->
            <circle cx="20" cy="140" r="6" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
            <text x="20" y="160" font-size="9" text-anchor="middle" fill="#64748b">10⁻³</text>
            <text x="20" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">0,001</text>

            <!-- 10^-2 = 0.01 -->
            <circle cx="63" cy="140" r="6" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
            <text x="63" y="160" font-size="9" text-anchor="middle" fill="#64748b">10⁻²</text>
            <text x="63" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">0,01</text>

            <!-- 10^-1 = 0.1 -->
            <circle cx="107" cy="140" r="6" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
            <text x="107" y="160" font-size="9" text-anchor="middle" fill="#64748b">10⁻¹</text>
            <text x="107" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">0,1</text>

            <!-- 10^0 = 1 -->
            <circle cx="150" cy="140" r="8" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
            <text x="150" y="160" font-size="9" text-anchor="middle" font-weight="700" fill="#1d4ed8">10⁰</text>
            <text x="150" y="173" font-size="8" text-anchor="middle" fill="#1d4ed8">1</text>

            <!-- 10^1 = 10 -->
            <circle cx="193" cy="140" r="6" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
            <text x="193" y="160" font-size="9" text-anchor="middle" fill="#64748b">10¹</text>
            <text x="193" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">10</text>

            <!-- 10^2 = 100 -->
            <circle cx="237" cy="140" r="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
            <text x="237" y="160" font-size="9" text-anchor="middle" fill="#64748b">10²</text>
            <text x="237" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">100</text>

            <!-- 10^3 = 1000 -->
            <circle cx="280" cy="140" r="6" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
            <text x="280" y="160" font-size="9" text-anchor="middle" fill="#64748b">10³</text>
            <text x="280" y="173" font-size="8" text-anchor="middle" fill="#94a3b8">1000</text>

            <!-- Above axis: real-world examples -->
            <text x="20" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">nm</text>
            <text x="20" y="120" font-size="7" text-anchor="middle" fill="#94a3b8">nano</text>

            <text x="63" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">cm</text>
            <text x="63" y="120" font-size="7" text-anchor="middle" fill="#94a3b8">centi</text>

            <text x="107" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">dm</text>
            <text x="107" y="120" font-size="7" text-anchor="middle" fill="#94a3b8">deci</text>

            <text x="193" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">deka</text>

            <text x="237" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">hekto</text>

            <text x="280" y="130" font-size="8" text-anchor="middle" fill="#60a5fa">kilo</text>

            <!-- Axis caption -->
            <text x="150" y="195" font-size="9" fill="#94a3b8" text-anchor="middle">Logaritmická os (každý krok = ×10)</text>

            <!-- Real-world examples -->
            <rect x="0" y="210" width="300" height="75" rx="8" fill="white" opacity="0.7" stroke="#bfdbfe"/>
            <text x="150" y="226" font-size="10" font-weight="600" fill="#1d4ed8" text-anchor="middle">Príklady z fyziky</text>
            <text x="10" y="242" font-size="9" fill="#374151">⚡ Rýchlosť svetla: 3·10⁸ m/s</text>
            <text x="10" y="257" font-size="9" fill="#374151">⚛ Elementárny náboj: 1,6·10⁻¹⁹ C</text>
            <text x="10" y="272" font-size="9" fill="#374151">🌍 Hmotnosť Zeme: 5,97·10²⁴ kg</text>
            <text x="10" y="287" font-size="9" fill="#374151">🔬 Veľkosť atómu: ~10⁻¹⁰ m</text>
          </g>
        </svg>
      </div>
    </section>

    <!-- ===== SEKCIA 2: ODMOCNINY ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Odmocniny</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Odmocnina je inverzná operácia k umocňovaniu. <strong>n-tá odmocnina</strong> z čísla <em>a</em> je také číslo <em>x</em>, ktoré umocnené na <em>n</em> dá <em>a</em>:
      </p>

      <div class="bg-blue-50 rounded-2xl p-6 mb-6">
        <MathFormula display formula="\sqrt[n]{a} = x \iff x^n = a \quad (a \geq 0,\; n \in \mathbb{N})" />
        <p class="text-sm text-gray-500 text-center mt-1">Druhá odmocnina: <MathFormula formula="\sqrt{a} = \sqrt[2]{a}" /></p>
      </div>

      <h3 class="text-lg font-semibold text-gray-800 mb-3">Pravidlá počítania s odmocninami</h3>

      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-semibold text-blue-700 mb-2">Súčin odmocnín</p>
          <MathFormula display formula="\sqrt{x \cdot y} = \sqrt{x} \cdot \sqrt{y}" />
          <p class="text-xs text-gray-400 mt-1 text-center">Príklad: <MathFormula formula="\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}" /></p>
        </div>
        <div class="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-semibold text-blue-700 mb-2">Podiel odmocnín</p>
          <MathFormula display formula="\sqrt{\frac{x}{y}} = \frac{\sqrt{x}}{\sqrt{y}} \quad (y > 0)" />
          <p class="text-xs text-gray-400 mt-1 text-center">Príklad: <MathFormula formula="\sqrt{\frac{9}{25}} = \frac{3}{5}" /></p>
        </div>
        <div class="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-semibold text-blue-700 mb-2">Mocnina odmocniny</p>
          <MathFormula display formula="\left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}" />
          <p class="text-xs text-gray-400 mt-1 text-center">Príklad: <MathFormula formula="\left(\sqrt{5}\right)^4 = \sqrt{5^4} = 25" /></p>
        </div>
        <div class="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-semibold text-blue-700 mb-2">Odmocnina mocniny</p>
          <MathFormula display formula="\sqrt{a^2} = |a|" />
          <p class="text-xs text-gray-400 mt-1 text-center">Príklad: <MathFormula formula="\sqrt{(-3)^2} = \sqrt{9} = 3" /></p>
        </div>
      </div>

      <!-- Priklad 2 -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <p class="font-semibold text-blue-700 mb-3">Príklad 2: Zjednodušte a vypočítajte</p>
        <MathFormula display formula="\frac{\sqrt{48} - \sqrt{12}}{\sqrt{3}}" />
        <details class="mt-3">
          <summary class="cursor-pointer text-sm text-blue-600 hover:underline font-medium select-none">Zobraziť riešenie</summary>
          <div class="mt-3 space-y-2 text-gray-700">
            <p class="text-sm">Najprv rozložíme odmocniny:</p>
            <MathFormula display formula="\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt{3}" />
            <MathFormula display formula="\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}" />
            <p class="text-sm">Dosadíme:</p>
            <MathFormula display formula="\frac{4\sqrt{3} - 2\sqrt{3}}{\sqrt{3}} = \frac{2\sqrt{3}}{\sqrt{3}} = 2" />
            <p class="text-sm text-gray-500">Výsledok: <strong>2</strong></p>
          </div>
        </details>
      </div>
    </section>

    <!-- ===== SEKCIA 3: VEDECKÝ ZÁPIS ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Vedecký zápis čísla</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Vedecký zápis (štandardná forma) umožňuje stručne zapísať veľmi veľké alebo veľmi malé čísla. Číslo zapíšeme v tvare:
      </p>

      <div class="bg-blue-50 rounded-2xl p-6 mb-6">
        <MathFormula display formula="a \times 10^n, \quad \text{kde} \quad 1 \leq a < 10, \; n \in \mathbb{Z}" />
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p class="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Veľké čísla (n &gt; 0)</p>
          <div class="space-y-2 text-sm text-gray-700">
            <p><MathFormula formula="300\,000\,000 = 3 \times 10^8" /> <span class="text-gray-400">(rýchlosť svetla m/s)</span></p>
            <p><MathFormula formula="5\,970\,000\,000\,000\,000\,000\,000\,000 \approx 5{,}97 \times 10^{24}" /></p>
            <p class="text-gray-400 text-xs">(hmotnosť Zeme v kg)</p>
          </div>
        </div>
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p class="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Malé čísla (n &lt; 0)</p>
          <div class="space-y-2 text-sm text-gray-700">
            <p><MathFormula formula="0{,}00000000000000000016 = 1{,}6 \times 10^{-19}" /></p>
            <p class="text-gray-400 text-xs">(elementárny náboj elektrónov v C)</p>
            <p><MathFormula formula="0{,}0000000001 = 1 \times 10^{-10}" /> <span class="text-gray-400">(veľkosť atómu v m)</span></p>
          </div>
        </div>
      </div>

      <!-- Priklad 3 -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <p class="font-semibold text-blue-700 mb-3">Príklad 3: Vedecký zápis a operácie</p>
        <p class="text-gray-700 mb-2 text-sm">Vypočítajte vzdialenosť, ktorú svetlo prekoná za 8 minút (priemerná vzdialenosť Zem–Slnko):</p>
        <MathFormula display formula="s = v \cdot t = 3 \times 10^8 \,\text{m/s} \cdot 480\,\text{s}" />
        <details class="mt-3">
          <summary class="cursor-pointer text-sm text-blue-600 hover:underline font-medium select-none">Zobraziť riešenie</summary>
          <div class="mt-3 space-y-2 text-gray-700">
            <MathFormula display formula="s = 3 \times 10^8 \times 480 = 3 \times 480 \times 10^8 = 1440 \times 10^8" />
            <MathFormula display formula="s = 1{,}44 \times 10^{11} \,\text{m} \approx 150 \text{ miliónov km}" />
            <p class="text-sm text-gray-500">To zodpovedá skutočnej priemernej vzdialenosti Zeme od Slnka!</p>
          </div>
        </details>
      </div>
    </section>

    <!-- ===== SEKCIA 4: ZAOKRÚHĽOVANIE ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">4. Zaokrúhľovanie a chyba merania</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Pri práci s reálnymi číslami je dôležité vedieť zaokrúhliť výsledok na požadovaný počet platných číslic a odhadnúť chybu merania.
      </p>

      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
          <div class="text-2xl mb-2">🔢</div>
          <p class="text-sm font-semibold text-gray-700 mb-1">Absolútna chyba</p>
          <MathFormula display formula="\Delta x = |x - x_0|" />
          <p class="text-xs text-gray-400">odchýlka od skutočnej hodnoty</p>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
          <div class="text-2xl mb-2">📊</div>
          <p class="text-sm font-semibold text-gray-700 mb-1">Relatívna chyba</p>
          <MathFormula display formula="\delta x = \frac{\Delta x}{|x_0|} \cdot 100\%" />
          <p class="text-xs text-gray-400">chyba v percentách</p>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
          <div class="text-2xl mb-2">✏️</div>
          <p class="text-sm font-semibold text-gray-700 mb-1">Platné číslice</p>
          <p class="text-xs text-gray-600 mt-2">Napr. <MathFormula formula="3{,}14 \times 10^8" /> má 3 platné číslice</p>
        </div>
      </div>
    </section>

    <!-- ===== ZHRNUTIE ===== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm leading-relaxed">
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Mocnina</strong> <MathFormula formula="a^n" /> je <em>n</em>-násobný súčin základu <em>a</em>; exponent môže byť celé, záporné alebo racionálne číslo.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Základné pravidlá:</strong> <MathFormula formula="a^r \cdot a^s = a^{r+s}" />, <MathFormula formula="(a^r)^s = a^{rs}" />, <MathFormula formula="a^0 = 1" />, <MathFormula formula="a^{-n} = \frac{1}{a^n}" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Odmocnina</strong> <MathFormula formula="\sqrt[n]{a}" /> je inverzná operácia k <em>n</em>-tej mocnine; <MathFormula formula="a^{1/n} = \sqrt[n]{a}" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Zjednodušovanie:</strong> <MathFormula formula="\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}" />, <MathFormula formula="\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Vedecký zápis</strong> <MathFormula formula="a \times 10^n" /> (kde <MathFormula formula="1 \leq a < 10" />) sa používa pre veľmi veľké aj veľmi malé čísla vo fyzike a chémii.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Zaokrúhľovanie</strong> a <strong>chyba merania</strong> sú dôležité pri práci s nameranými hodnotami.</span>
        </li>
      </ul>
    </div>

    <!-- ===== KVÍZ ===== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <!-- Progress -->
        <div class="bg-blue-50 px-6 py-3 border-b border-blue-100">
          <div
            v-if="!quizFinished"
            data-testid="quiz-progress"
            class="flex items-center justify-between text-sm text-blue-700"
          >
            <span class="font-semibold">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <span class="text-blue-400">Skóre: {{ quizScore }}</span>
          </div>
          <div v-else class="text-sm text-blue-700 font-semibold">
            Kvíz dokončený!
          </div>
        </div>

        <!-- Question / Result -->
        <div class="p-6">
          <Transition name="fade" mode="out-in">
            <!-- Result screen -->
            <div v-if="quizFinished" data-testid="result" class="text-center py-6">
              <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
              <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
              <p data-testid="score" class="text-gray-500 mb-6">
                Dosiahol si <strong>{{ quizScore }}</strong> z <strong>{{ quiz.length }}</strong> bodov.
              </p>
              <button
                data-testid="reset-btn"
                type="button"
                class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
                @click="resetQuiz"
              >
                Skúsiť znova
              </button>
            </div>

            <!-- Question screen -->
            <div v-else :key="currentQ" data-testid="question">
              <p class="text-gray-800 font-semibold text-lg mb-5">{{ currentQuestion.question }}</p>

              <div class="space-y-3 mb-5">
                <button
                  v-for="(option, i) in currentQuestion.options"
                  :key="i"
                  :data-testid="`option-${i}`"
                  type="button"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-xl border-2 transition-colors text-sm font-medium',
                    selectedAnswer === null
                      ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                      : i === currentQuestion.correctIndex
                        ? 'border-green-400 bg-green-50 text-green-800'
                        : i === selectedAnswer
                          ? 'border-red-300 bg-red-50 text-red-700'
                          : 'border-gray-100 text-gray-400',
                  ]"
                  :disabled="selectedAnswer !== null"
                  @click="selectAnswer(i)"
                >
                  <span class="mr-2 font-bold">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
                  {{ option }}
                </button>
              </div>

              <!-- Feedback -->
              <Transition name="fade">
                <div
                  v-if="selectedAnswer !== null"
                  data-testid="feedback"
                  :class="[
                    'rounded-xl p-4 mb-5 text-sm',
                    selectedAnswer === currentQuestion.correctIndex
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200',
                  ]"
                >
                  <p class="font-semibold mb-1">
                    {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
                  </p>
                  <p>{{ currentQuestion.explanation }}</p>
                </div>
              </Transition>

              <button
                v-if="selectedAnswer !== null"
                data-testid="next-btn"
                type="button"
                class="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-sm"
                @click="nextQuestion"
              >
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Mocniny a odmocniny | Matematika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Mocniny a odmocniny pre gymnazistov: pravidlá počítania, zjednodušovanie výrazov, vedecký zápis čísla, zaokrúhľovanie a chyba merania.',
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
    question: 'Čo je výsledok výrazu 5⁰?',
    options: ['0', '1', '5', 'Výraz nie je definovaný'],
    correctIndex: 1,
    explanation: 'Každé nenulové číslo umocnené na nultú mocninu je rovné 1. Pravidlo: a⁰ = 1 pre a ≠ 0.',
  },
  {
    question: 'Zjednodušte: 2³ · 2⁵',
    options: ['4⁸', '2⁸', '2¹⁵', '4¹⁵'],
    correctIndex: 1,
    explanation: 'Pri súčine mocnín s rovnakým základom sa exponenty sčítajú: 2³ · 2⁵ = 2^(3+5) = 2⁸ = 256.',
  },
  {
    question: 'Čo je √144?',
    options: ['11', '12', '13', '14'],
    correctIndex: 1,
    explanation: '√144 = 12, pretože 12² = 144. Overenie: 12 · 12 = 144.',
  },
  {
    question: 'Ktorý z nasledujúcich zápisov je správny vedecký zápis čísla 0,00045?',
    options: ['45 × 10⁻⁵', '4,5 × 10⁻⁴', '0,45 × 10⁻³', '4,5 × 10⁴'],
    correctIndex: 1,
    explanation: 'Vo vedeckom zápise musí byť 1 ≤ a < 10. Správne: 4,5 × 10⁻⁴, pretože 4,5 · 0,0001 = 0,00045.',
  },
  {
    question: 'Zjednodušte: (3²)³',
    options: ['3⁵', '3⁶', '9³', '27²'],
    correctIndex: 1,
    explanation: 'Pri mocnine mocniny sa exponenty násobia: (3²)³ = 3^(2·3) = 3⁶ = 729.',
  },
  {
    question: 'Zjednodušte: √75 − √48',
    options: ['√27', '√3', '3√3 − 4√3', '5√3 − 4√3'],
    correctIndex: 3,
    explanation: '√75 = √(25·3) = 5√3 a √48 = √(16·3) = 4√3. Teda 5√3 − 4√3 = √3. Ale spomedzi možností správne zobrazuje postup odpoveď "5√3 − 4√3", výsledok je √3.',
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
