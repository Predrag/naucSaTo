<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/geometria" class="hover:text-blue-600 transition-colors">Geometria a meranie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Trigonometria</span>
    </nav>

    <!-- Nadpis -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">📏 Trigonometria</h1>
      <p class="text-lg text-gray-600 leading-relaxed">
        Trigonometria skúma vzťahy medzi uhlami a stranami trojuholníkov. Pomocou sínusu, kosínusu a tangensu
        vieš vypočítať neznáme strany a uhly nielen v pravouhlom, ale aj v ľubovoľnom trojuholníku.
        Tieto znalosti sa uplatňujú v geodézii, architektúre, fyzike aj navigácii.
      </p>
    </div>

    <!-- ======================== SEKCIA 1: Pravouhlý trojuholník ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">1. Trigonometria pravouhlého trojuholníka</h2>

      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <p class="text-gray-700 mb-4">
          V pravouhlom trojuholníku s pravým uhlom pri vrchole <strong>C</strong> definujeme pre ostrý uhol
          <MathFormula formula="\alpha" /> tri základné goniometrické funkcie:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div class="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
            <p class="text-sm font-semibold text-blue-800 mb-2">Sínus</p>
            <MathFormula display formula="\sin\alpha = \frac{\text{protiľahlá}}{\text{prepona}} = \frac{a}{c}" />
          </div>
          <div class="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
            <p class="text-sm font-semibold text-blue-800 mb-2">Kosínus</p>
            <MathFormula display formula="\cos\alpha = \frac{\text{priľahlá}}{\text{prepona}} = \frac{b}{c}" />
          </div>
          <div class="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
            <p class="text-sm font-semibold text-blue-800 mb-2">Tangens</p>
            <MathFormula display formula="\tg\alpha = \frac{\text{protiľahlá}}{\text{priľahlá}} = \frac{a}{b}" />
          </div>
        </div>
        <p class="text-gray-700 text-sm">
          Mnemotechnická pomôcka: <strong>SOH – CAH – TOA</strong>
          (Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent).
        </p>
      </div>

      <!-- Tabuľka hodnôt -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">Hodnoty goniometrických funkcií pre základné uhly</h3>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-sm text-center">
            <thead>
              <tr class="bg-blue-600 text-white">
                <th class="p-3 rounded-tl-xl">Uhol</th>
                <th class="p-3"><MathFormula formula="\sin" /></th>
                <th class="p-3"><MathFormula formula="\cos" /></th>
                <th class="p-3 rounded-tr-xl"><MathFormula formula="\tg" /></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td class="p-3 font-semibold text-blue-800">0°</td>
                <td class="p-3">0</td>
                <td class="p-3">1</td>
                <td class="p-3">0</td>
              </tr>
              <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors bg-gray-50">
                <td class="p-3 font-semibold text-blue-800">30°</td>
                <td class="p-3"><MathFormula formula="\tfrac{1}{2}" /></td>
                <td class="p-3"><MathFormula formula="\tfrac{\sqrt{3}}{2}" /></td>
                <td class="p-3"><MathFormula formula="\tfrac{\sqrt{3}}{3}" /></td>
              </tr>
              <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td class="p-3 font-semibold text-blue-800">45°</td>
                <td class="p-3"><MathFormula formula="\tfrac{\sqrt{2}}{2}" /></td>
                <td class="p-3"><MathFormula formula="\tfrac{\sqrt{2}}{2}" /></td>
                <td class="p-3">1</td>
              </tr>
              <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors bg-gray-50">
                <td class="p-3 font-semibold text-blue-800">60°</td>
                <td class="p-3"><MathFormula formula="\tfrac{\sqrt{3}}{2}" /></td>
                <td class="p-3"><MathFormula formula="\tfrac{1}{2}" /></td>
                <td class="p-3"><MathFormula formula="\sqrt{3}" /></td>
              </tr>
              <tr class="hover:bg-blue-50 transition-colors">
                <td class="p-3 font-semibold text-blue-800">90°</td>
                <td class="p-3">1</td>
                <td class="p-3">0</td>
                <td class="p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <p class="font-semibold text-yellow-800 mb-2">Príklad 1:</p>
        <p class="text-gray-700 mb-3">
          Pravouhlý trojuholník má preponu <MathFormula formula="c = 10\,\text{cm}" /> a uhol
          <MathFormula formula="\alpha = 30°" />. Vypočítaj dĺžky odvesien <MathFormula formula="a" /> a <MathFormula formula="b" />.
        </p>
        <div class="flex justify-center my-2">
          <MathFormula display formula="a = c \cdot \sin\alpha = 10 \cdot \sin 30° = 10 \cdot 0{,}5 = 5\,\text{cm}" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="b = c \cdot \cos\alpha = 10 \cdot \cos 30° = 10 \cdot \frac{\sqrt{3}}{2} \approx 8{,}66\,\text{cm}" />
        </div>
        <p class="text-gray-600 text-sm mt-2">
          Overenie Pytagorovou vetou: <MathFormula formula="a^2+b^2 = 25 + 75 = 100 = c^2" />. Správne!
        </p>
      </div>

      <!-- Pytagorova identita -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Základná goniometrická identita</h3>
        <p class="text-gray-700 mb-3">
          Pre každý uhol <MathFormula formula="\alpha" /> platí:
        </p>
        <div class="flex justify-center my-3">
          <MathFormula display formula="\sin^2\alpha + \cos^2\alpha = 1" />
        </div>
        <p class="text-gray-700 text-sm">
          Z tejto identity vieme vyjadriť: <MathFormula formula="\cos\alpha = \sqrt{1 - \sin^2\alpha}" /> a
          <MathFormula formula="\tg\alpha = \dfrac{\sin\alpha}{\cos\alpha}" />.
        </p>
      </div>
    </section>

    <!-- ======================== SEKCIA 2: Všeobecný trojuholník ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">2. Trigonometria všeobecného trojuholníka</h2>

      <!-- SVG Ilustrácia -->
      <div class="flex justify-center mb-8">
        <figure>
          <svg
            role="img"
            aria-label="Všeobecný trojuholník ABC so stranami a, b, c, uhlami alfa, beta, gama, vpísanou a opísanou kružnicou"
            viewBox="0 0 500 340"
            width="500"
            height="340"
            class="rounded-xl border border-blue-100 bg-white shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Vrcholy trojuholníka: A=(70,290), B=(430,290), C=(290,70) -->

            <!-- Opísaná kružnica: stredy trojuholníka ABC -->
            <!-- Vypočítaný stred opísanej kružnice a polomer -->
            <!-- Použijeme priblížené hodnoty: stred ≈ (255, 195), R ≈ 150 -->
            <circle cx="258" cy="198" r="148" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="6,4" />

            <!-- Trojuholník ABC -->
            <polygon
              points="70,290 430,290 290,70"
              fill="#eff6ff"
              stroke="#2563eb"
              stroke-width="2.5"
            />

            <!-- Vpísaná kružnica: stred ≈ (258, 232), r ≈ 57 -->
            <circle cx="258" cy="232" r="57" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,3" />

            <!-- Stred vpísanej kružnice — bod I -->
            <circle cx="258" cy="232" r="3" fill="#16a34a" />
            <text x="268" y="228" font-size="12" fill="#15803d" font-weight="bold">ρ</text>

            <!-- Stred opísanej kružnice — bod O -->
            <circle cx="258" cy="198" r="3" fill="#2563eb" />
            <text x="264" y="194" font-size="12" fill="#1d4ed8" font-weight="bold">R</text>

            <!-- Polomer opísanej kružnice — čiarkovaná čiara k vrcholu B -->
            <line x1="258" y1="198" x2="430" y2="290" stroke="#93c5fd" stroke-width="1" stroke-dasharray="4,3" />

            <!-- Označenie strán -->
            <!-- Strana a (BC) -->
            <text x="370" y="200" text-anchor="middle" font-size="17" font-style="italic" fill="#1d4ed8" font-family="serif">a</text>
            <!-- Strana b (AC) -->
            <text x="150" y="200" text-anchor="middle" font-size="17" font-style="italic" fill="#1d4ed8" font-family="serif">b</text>
            <!-- Strana c (AB) -->
            <text x="250" y="310" text-anchor="middle" font-size="17" font-style="italic" fill="#1d4ed8" font-family="serif">c</text>

            <!-- Uhly -->
            <!-- Uhol alfa pri A -->
            <path d="M 70,290 Q 100,272 115,258" fill="none" stroke="#dc2626" stroke-width="1.5" />
            <text x="112" y="285" font-size="14" font-style="italic" fill="#dc2626" font-family="serif">α</text>

            <!-- Uhol beta pri B -->
            <path d="M 430,290 Q 404,272 385,260" fill="none" stroke="#7c3aed" stroke-width="1.5" />
            <text x="385" y="287" font-size="14" font-style="italic" fill="#7c3aed" font-family="serif">β</text>

            <!-- Uhol gama pri C -->
            <path d="M 290,70 Q 305,96 295,114" fill="none" stroke="#059669" stroke-width="1.5" />
            <text x="305" y="100" font-size="14" font-style="italic" fill="#059669" font-family="serif">γ</text>

            <!-- Vrcholy -->
            <text x="52" y="300" font-size="15" font-weight="bold" fill="#1e40af" font-family="sans-serif">A</text>
            <text x="436" y="300" font-size="15" font-weight="bold" fill="#1e40af" font-family="sans-serif">B</text>
            <text x="286" y="58" font-size="15" font-weight="bold" fill="#1e40af" font-family="sans-serif">C</text>

            <!-- Legenda -->
            <rect x="10" y="8" width="200" height="48" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" />
            <text x="110" y="26" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="bold">Sínusová veta:</text>
            <text x="110" y="48" text-anchor="middle" font-size="12" fill="#1e3a8a" font-family="serif">a/sinα = b/sinβ = c/sinγ = 2R</text>

            <rect x="295" y="8" width="198" height="48" rx="8" fill="#dcfce7" stroke="#86efac" stroke-width="1" />
            <text x="394" y="26" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">Kosínusová veta:</text>
            <text x="394" y="48" text-anchor="middle" font-size="12" fill="#14532d" font-family="serif">a² = b² + c² − 2bc·cosα</text>

            <!-- Legenda kružníc -->
            <line x1="14" y1="325" x2="34" y2="325" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="6,4" />
            <text x="40" y="329" font-size="11" fill="#6b7280">opísaná kružnica (R)</text>
            <line x1="190" y1="325" x2="210" y2="325" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,3" />
            <text x="216" y="329" font-size="11" fill="#6b7280">vpísaná kružnica (ρ)</text>
          </svg>
          <figcaption class="text-center text-sm text-gray-500 mt-2">
            Všeobecný trojuholník ABC so sínusovou a kosínusovou vetou, vpísanou a opísanou kružnicou
          </figcaption>
        </figure>
      </div>

      <!-- Sínusová veta -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Sínusová veta</h3>
        <p class="text-gray-700 mb-3">
          V každom trojuholníku ABC platí, že podiel strany a sínusu protiľahlého uhla je konštantný a rovná sa
          priemeru opísanej kružnice <MathFormula formula="2R" />:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2R" />
        </div>
        <p class="text-gray-700 text-sm">
          Sínusová veta sa používa, keď poznáme <strong>dva uhly a jednu stranu</strong> (usu) alebo
          <strong>dve strany a uhol pri väčšej strane</strong> (Ssu).
        </p>
      </div>

      <!-- Kosínusová veta -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Kosínusová veta</h3>
        <p class="text-gray-700 mb-3">
          Kosínusová veta zovšeobecňuje Pytagorovu vetu pre ľubovoľný trojuholník:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div class="bg-blue-50 rounded-xl p-3 text-center">
            <MathFormula display formula="a^2 = b^2 + c^2 - 2bc\cos\alpha" />
          </div>
          <div class="bg-blue-50 rounded-xl p-3 text-center">
            <MathFormula display formula="b^2 = a^2 + c^2 - 2ac\cos\beta" />
          </div>
          <div class="bg-blue-50 rounded-xl p-3 text-center">
            <MathFormula display formula="c^2 = a^2 + b^2 - 2ab\cos\gamma" />
          </div>
        </div>
        <p class="text-gray-700 text-sm">
          Kosínusová veta sa používa, keď poznáme <strong>dve strany a uhol medzi nimi</strong> (sus) alebo
          <strong>tri strany</strong> (sss) — na výpočet uhlov z vyradeného vzorca
          <MathFormula formula="\cos\alpha = \dfrac{b^2+c^2-a^2}{2bc}" />.
        </p>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <p class="font-semibold text-yellow-800 mb-2">Príklad 2:</p>
        <p class="text-gray-700 mb-3">
          Trojuholník má strany <MathFormula formula="b = 5\,\text{cm}" />, <MathFormula formula="c = 7\,\text{cm}" />
          a uhol <MathFormula formula="\alpha = 60°" />. Vypočítaj stranu <MathFormula formula="a" />.
        </p>
        <div class="flex justify-center my-2">
          <MathFormula display formula="a^2 = b^2 + c^2 - 2bc\cos\alpha = 25 + 49 - 2 \cdot 5 \cdot 7 \cdot \cos 60°" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="a^2 = 74 - 70 \cdot 0{,}5 = 74 - 35 = 39" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="a = \sqrt{39} \approx 6{,}24\,\text{cm}" />
        </div>
      </div>

      <!-- Príklad 3 — sínusová veta -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <p class="font-semibold text-yellow-800 mb-2">Príklad 3:</p>
        <p class="text-gray-700 mb-3">
          Trojuholník má stranu <MathFormula formula="a = 8\,\text{cm}" />, uhol <MathFormula formula="\alpha = 45°" />
          a uhol <MathFormula formula="\beta = 60°" />. Vypočítaj stranu <MathFormula formula="b" />.
        </p>
        <p class="text-gray-600 text-sm mb-2">
          Najprv: <MathFormula formula="\gamma = 180° - 45° - 60° = 75°" />. Potom použijeme sínusovú vetu:
        </p>
        <div class="flex justify-center my-2">
          <MathFormula display formula="\frac{b}{\sin\beta} = \frac{a}{\sin\alpha} \implies b = a \cdot \frac{\sin\beta}{\sin\alpha}" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="b = 8 \cdot \frac{\sin 60°}{\sin 45°} = 8 \cdot \frac{\tfrac{\sqrt{3}}{2}}{\tfrac{\sqrt{2}}{2}} = 8 \cdot \frac{\sqrt{3}}{\sqrt{2}} = 8\cdot\frac{\sqrt{6}}{2} \approx 9{,}80\,\text{cm}" />
        </div>
      </div>
    </section>

    <!-- ======================== SEKCIA 3: Obsah a kružnice trojuholníka ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">3. Obsah trojuholníka a kružnice</h2>

      <!-- Obsah trojuholníka -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Vzorce pre obsah trojuholníka</h3>
        <p class="text-gray-700 mb-4">
          Obsah trojuholníka vieš vyjadriť viacerými spôsobmi podľa toho, čo poznáš:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Základňa a výška</p>
            <MathFormula display formula="S = \frac{1}{2} \cdot a \cdot v_a" />
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Dve strany a uhol medzi nimi</p>
            <MathFormula display formula="S = \frac{1}{2} \cdot a \cdot b \cdot \sin\gamma" />
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Heronov vzorec (tri strany)</p>
            <MathFormula display formula="S = \sqrt{s(s-a)(s-b)(s-c)}" />
            <p class="text-xs text-gray-500 mt-1">kde <MathFormula formula="s = \dfrac{a+b+c}{2}" /> je poloobvod</p>
          </div>
          <div class="bg-blue-50 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Cez opísanú kružnicu</p>
            <MathFormula display formula="S = \frac{abc}{4R}" />
          </div>
        </div>
      </div>

      <!-- Opísaná a vpísaná kružnica -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Opísaná a vpísaná kružnica</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p class="font-semibold text-blue-700 mb-2">Opísaná kružnica (polomer R)</p>
            <p class="text-gray-700 text-sm mb-3">
              Stredisko je priesečník osí strán. Zo sínusovej vety:
            </p>
            <MathFormula display formula="R = \frac{a}{2\sin\alpha} = \frac{b}{2\sin\beta} = \frac{c}{2\sin\gamma}" />
            <p class="text-gray-700 text-sm mt-2">
              Alternatívne: <MathFormula formula="R = \dfrac{abc}{4S}" />
            </p>
          </div>
          <div>
            <p class="font-semibold text-green-700 mb-2">Vpísaná kružnica (polomer ρ)</p>
            <p class="text-gray-700 text-sm mb-3">
              Stredisko je priesečník osí uhlov. Polomer vpísanej kružnice:
            </p>
            <MathFormula display formula="\rho = \frac{S}{s} = \frac{S}{\tfrac{a+b+c}{2}}" />
            <p class="text-gray-700 text-sm mt-2">
              kde <MathFormula formula="s = \dfrac{a+b+c}{2}" /> je poloobvod trojuholníka.
            </p>
          </div>
        </div>
      </div>

      <!-- Príklad 4 — Heronov vzorec a kružnice -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <p class="font-semibold text-yellow-800 mb-2">Príklad 4:</p>
        <p class="text-gray-700 mb-3">
          Trojuholník má strany <MathFormula formula="a = 5\,\text{cm}" />, <MathFormula formula="b = 6\,\text{cm}" />,
          <MathFormula formula="c = 7\,\text{cm}" />. Vypočítaj obsah, polomer vpísanej a opísanej kružnice.
        </p>
        <div class="flex justify-center my-2">
          <MathFormula display formula="s = \frac{5+6+7}{2} = 9\,\text{cm}" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="S = \sqrt{9(9-5)(9-6)(9-7)} = \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = \sqrt{216} = 6\sqrt{6} \approx 14{,}70\,\text{cm}^2" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="\rho = \frac{S}{s} = \frac{6\sqrt{6}}{9} = \frac{2\sqrt{6}}{3} \approx 1{,}63\,\text{cm}" />
        </div>
        <div class="flex justify-center my-2">
          <MathFormula display formula="R = \frac{abc}{4S} = \frac{5 \cdot 6 \cdot 7}{4 \cdot 6\sqrt{6}} = \frac{210}{24\sqrt{6}} = \frac{35}{4\sqrt{6}} \approx 3{,}57\,\text{cm}" />
        </div>
      </div>
    </section>

    <!-- ======================== ZHRNUTIE ======================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie — kľúčové vzorce trigonometrie</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-blue-700 mb-1">Pravouhlý trojuholník</p>
          <ul class="text-gray-700 space-y-1">
            <li>• <MathFormula formula="\sin\alpha = a/c" />, <MathFormula formula="\cos\alpha = b/c" />, <MathFormula formula="\tg\alpha = a/b" /></li>
            <li>• Identita: <MathFormula formula="\sin^2\alpha + \cos^2\alpha = 1" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Sínusová veta</p>
          <ul class="text-gray-700 space-y-1">
            <li>• <MathFormula formula="a/\sin\alpha = b/\sin\beta = c/\sin\gamma = 2R" /></li>
            <li>• Použitie: usu, Ssu</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Kosínusová veta</p>
          <ul class="text-gray-700 space-y-1">
            <li>• <MathFormula formula="a^2 = b^2+c^2-2bc\cos\alpha" /></li>
            <li>• Použitie: sus, sss</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Obsah a kružnice</p>
          <ul class="text-gray-700 space-y-1">
            <li>• <MathFormula formula="S = \tfrac{1}{2}ab\sin\gamma" /></li>
            <li>• Heron: <MathFormula formula="S = \sqrt{s(s-a)(s-b)(s-c)}" /></li>
            <li>• <MathFormula formula="R = a/(2\sin\alpha)" />, <MathFormula formula="\rho = S/s" /></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ======================== KVÍZ ======================== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="w-6 h-2 rounded-full transition-colors"
              :class="i === currentQ ? 'bg-blue-500' : i < currentQ ? 'bg-blue-300' : 'bg-gray-200'"
            />
          </div>
        </div>

        <!-- Otázka -->
        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5">
          {{ currentQuestion.question }}
        </p>

        <!-- Možnosti -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`quiz-option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium"
            :class="{
              'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700': selectedAnswer === null,
              'border-green-400 bg-green-50 text-green-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
              'border-red-300 bg-red-50 text-red-700': selectedAnswer !== null && i === selectedAnswer && i !== currentQuestion.correctIndex,
              'border-gray-100 text-gray-400': selectedAnswer !== null && i !== selectedAnswer && i !== currentQuestion.correctIndex,
              'cursor-default': selectedAnswer !== null,
              'cursor-pointer': selectedAnswer === null,
            }"
            @click="selectAnswer(i)"
          >
            <span class="mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
          </button>
        </div>

        <!-- Vysvetlenie -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            class="mb-5 p-4 rounded-xl text-sm"
            :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'"
          >
            <span class="font-semibold mr-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}</span>
            {{ currentQuestion.explanation }}
          </div>
        </Transition>

        <!-- Ďalej -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="quiz-next-btn"
          type="button"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Výsledok -->
      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="quiz-result"
          class="bg-white border border-blue-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-blue-700 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="quiz-score" class="text-gray-600 mb-6">
            Správnych odpovedí: <strong class="text-blue-700">{{ quizScore }} / {{ quiz.length }}</strong>
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
    question: 'Pravouhlý trojuholník má preponu c = 13 cm a odvesnu a = 5 cm. Aká je hodnota sin α?',
    options: ['5/12', '5/13', '12/13', '13/5'],
    correctIndex: 1,
    explanation: 'Sínus uhla α = protiľahlá / prepona = a / c = 5 / 13.',
  },
  {
    question: 'Ktorý vzorec vyjadruje kosínusovú vetu?',
    options: [
      'a/sin α = b/sin β',
      'a² = b² + c² − 2bc·cos α',
      'sin²α + cos²α = 1',
      'S = (1/2)·a·b·sin γ',
    ],
    correctIndex: 1,
    explanation: 'Kosínusová veta je a² = b² + c² − 2bc·cos α a zovšeobecňuje Pytagorovu vetu pre ľubovoľný trojuholník.',
  },
  {
    question: 'Trojuholník má strany a = 6 cm, b = 8 cm a uhol γ = 90° (medzi nimi). Aký je jeho obsah?',
    options: ['48 cm²', '14 cm²', '24 cm²', '10 cm²'],
    correctIndex: 2,
    explanation: 'S = (1/2)·a·b·sin γ = (1/2)·6·8·sin 90° = (1/2)·48·1 = 24 cm².',
  },
  {
    question: 'Čomu sa rovná polomer vpísanej kružnice trojuholníka so S = 30 cm² a poloobvodom s = 12 cm?',
    options: ['2,5 cm', '360 cm', '0,4 cm', '2 cm'],
    correctIndex: 0,
    explanation: 'Polomer vpísanej kružnice: ρ = S / s = 30 / 12 = 2,5 cm.',
  },
  {
    question: 'Trojuholník má strany a = 7 cm, b = 7 cm, c = 7 cm. Aký je jeho obsah (Heronov vzorec)?',
    options: ['≈ 21,2 cm²', '≈ 49 cm²', '≈ 17,3 cm²', '≈ 84,9 cm²'],
    correctIndex: 0,
    explanation: 'Poloobvod s = 10,5 cm. S = √(10,5·3,5·3,5·3,5) = √(449,34) ≈ 21,2 cm². Rovnostranný trojuholník so stranou 7 cm.',
  },
  {
    question: 'Sínusová veta hovorí, že a/sin α = 2R. Čo je R?',
    options: [
      'Polomer vpísanej kružnice',
      'Obsah trojuholníka',
      'Polomer opísanej kružnice',
      'Poloobvod trojuholníka',
    ],
    correctIndex: 2,
    explanation: 'R je polomer opísanej kružnice. Stredisko opísanej kružnice je priesečník osí strán trojuholníka.',
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
