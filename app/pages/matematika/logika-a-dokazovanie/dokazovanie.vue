<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/logika-a-dokazovanie" class="hover:text-blue-600 transition-colors">Logika, dôkazy a postupnosti</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Dôkazovanie</span>
    </nav>

    <!-- Title -->
    <h1 class="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
      <span>✅</span>
      <span>Dôkazovanie</span>
    </h1>

    <!-- Intro -->
    <p class="text-lg text-gray-600 mb-10 leading-relaxed">
      Matematika nie je len o počítaní — jej srdcom je <strong>dôkazovanie</strong>. Dôkaz je
      logická argumentácia, ktorá nesporne overí pravdivosť tvrdenia. Bez dôkazu je matematika
      len dohadom. Na tejto stránke si ukážeme základné pojmy, rôzne typy dôkazov a mocnú
      metódu matematickej indukcie.
    </p>

    <!-- ============================
         SEKCIA 1: Základné pojmy
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">1. Základné pojmy</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Axióma</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Základné tvrdenie, ktoré <strong>prijímame bez dôkazu</strong> ako východisko.
            Je to „pravidlo hry", na ktorom stavíme celú teóriu.
            Príklad: <em>Dvoma rôznymi bodmi prechádza práve jedna priamka.</em>
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Definícia</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Presné vymedzenie pojmu. Definícia stanovuje, <strong>čo daný pojem znamená</strong>,
            a musí byť jednoznačná.
            Príklad: <em>Prvočíslo je prirodzené číslo väčšie ako 1, ktoré má práve dvoch deliteľov.</em>
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Veta (tvrdenie)</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Matematické tvrdenie, ktoré <strong>treba dokázať</strong>. Má tvar
            „ak platí predpoklad, potom platí záver" (implikácia
            <MathFormula formula="P \Rightarrow Q" />).
            Pred dôkazom nazývame tvrdenie <em>hypotézou</em>.
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Dôkaz</h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Konečná postupnosť logicky správnych krokov, ktorá vychádza z axióm, definícií
            a už dokázaných viet a vedie k záveru. Každý krok musí byť <strong>odôvodnený</strong>.
          </p>
        </div>
      </div>

      <!-- Ekvivalencia -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
        <h3 class="font-bold text-gray-800 text-lg mb-2">Ekvivalencia tvrdení</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">
          Tvrdenia <MathFormula formula="P" /> a <MathFormula formula="Q" /> sú
          <strong>ekvivalentné</strong> (<MathFormula formula="P \Leftrightarrow Q" />), ak platí
          súčasne <MathFormula formula="P \Rightarrow Q" /> aj <MathFormula formula="Q \Rightarrow P" />.
          Čítame „<em>P práve vtedy, keď Q</em>". Dokázať ekvivalenciu teda znamená dokázať obe
          implikácie.
        </p>
        <p class="text-gray-600 text-sm italic">
          Príklad: Celé číslo je párne práve vtedy, keď jeho štvorec je párny.
        </p>
      </div>
    </section>

    <!-- ============================
         SEKCIA 2: Typy dôkazov
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">2. Typy dôkazov</h2>

      <!-- SVG schéma -->
      <div class="flex justify-center mb-8">
        <svg
          role="img"
          aria-label="Schéma priameho dôkazu a dôkazu sporom"
          viewBox="0 0 680 280"
          class="w-full max-w-2xl h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Background panels -->
          <rect x="10" y="10" width="310" height="260" rx="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <rect x="360" y="10" width="310" height="260" rx="16" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>

          <!-- Left panel title -->
          <text x="165" y="38" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8">Priamy dôkaz</text>

          <!-- Left: Predpoklady box -->
          <rect x="60" y="52" width="210" height="38" rx="8" fill="#3b82f6"/>
          <text x="165" y="75" text-anchor="middle" font-family="sans-serif" font-size="13" fill="white" font-weight="bold">Predpoklady (P)</text>

          <!-- Arrow down -->
          <line x1="165" y1="90" x2="165" y2="118" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>

          <!-- Left: Kroky box -->
          <rect x="55" y="118" width="220" height="44" rx="8" fill="white" stroke="#93c5fd" stroke-width="1.5"/>
          <text x="165" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#374151">Logické kroky</text>
          <text x="165" y="153" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b7280">(odvodenie, algebraická úprava…)</text>

          <!-- Arrow down -->
          <line x1="165" y1="162" x2="165" y2="190" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>

          <!-- Left: Záver box -->
          <rect x="60" y="190" width="210" height="38" rx="8" fill="#1d4ed8"/>
          <text x="165" y="213" text-anchor="middle" font-family="sans-serif" font-size="13" fill="white" font-weight="bold">Záver (Q)  ✓</text>

          <!-- Right panel title -->
          <text x="515" y="38" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">Dôkaz sporom</text>

          <!-- Right: Predpoklady + negácia -->
          <rect x="380" y="52" width="210" height="38" rx="8" fill="#ef4444"/>
          <text x="485" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white" font-weight="bold">Predpoklady (P)</text>
          <text x="485" y="83" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">+ negácia záveru (¬Q)</text>

          <!-- Arrow down -->
          <line x1="485" y1="90" x2="485" y2="118" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>

          <!-- Right: Odvodenie box -->
          <rect x="375" y="118" width="220" height="44" rx="8" fill="white" stroke="#fca5a5" stroke-width="1.5"/>
          <text x="485" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#374151">Odvodenie dôsledkov</text>
          <text x="485" y="153" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b7280">(z P a ¬Q logickými krokmi)</text>

          <!-- Arrow down -->
          <line x1="485" y1="162" x2="485" y2="190" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>

          <!-- Right: Spor box -->
          <rect x="390" y="190" width="190" height="38" rx="8" fill="#991b1b"/>
          <text x="485" y="213" text-anchor="middle" font-family="sans-serif" font-size="13" fill="white" font-weight="bold">SPOR!  ∴ Q platí</text>

          <!-- Label -->
          <text x="165" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b7280">P ⇒ Q (priamo)</text>
          <text x="485" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b7280">P ∧ ¬Q → spor, teda Q</text>

          <!-- Arrow markers -->
          <defs>
            <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/>
            </marker>
            <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444"/>
            </marker>
          </defs>
        </svg>
      </div>

      <!-- Priamy dôkaz -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2.1 Priamy dôkaz</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Z predpokladov odvodíme záver priamymi logickými krokmi. Je to najčastejší typ dôkazu.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-4">
          <p class="font-semibold text-blue-800 mb-2">Príklad 1: Súčet dvoch párnych čísel je párny</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Predpoklady:</strong> Nech <MathFormula formula="a, b" /> sú párne celé čísla.</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Krok 1:</strong> Keďže <MathFormula formula="a" /> je párne, platí <MathFormula formula="a = 2m" /> pre nejaké celé číslo <MathFormula formula="m" />.</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Krok 2:</strong> Keďže <MathFormula formula="b" /> je párne, platí <MathFormula formula="b = 2n" /> pre nejaké celé číslo <MathFormula formula="n" />.</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Krok 3:</strong> <MathFormula formula="a + b = 2m + 2n = 2(m+n)" />.</p>
          <p class="text-gray-700 text-sm"><strong>Záver:</strong> Keďže <MathFormula formula="m+n" /> je celé číslo, <MathFormula formula="a+b" /> je párne. <span class="text-blue-700 font-bold">□</span></p>
        </div>
      </div>

      <!-- Dôkaz sporom -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2.2 Dôkaz sporom (nepriamy dôkaz)</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Predpokladáme, že záver <strong>neplatí</strong> (negácia záveru), a z toho odvodíme
          spor — tvrdenie, ktoré je zjavne nepravdivé alebo odporuje predpokladom. Tento spor
          dokazuje, že naša negácia bola nesprávna, a teda záver musí platiť.
        </p>

        <div class="bg-red-50 border-l-4 border-red-400 rounded-r-2xl p-5 mb-4">
          <p class="font-semibold text-red-800 mb-2">Príklad 2: <MathFormula formula="\sqrt{2}" /> je iracionálne číslo</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Predpokladáme spor:</strong> <MathFormula formula="\sqrt{2}" /> je racionálne, teda <MathFormula formula="\sqrt{2} = \frac{p}{q}" />, kde <MathFormula formula="p, q \in \mathbb{Z}" />, <MathFormula formula="q \neq 0" /> a zlomok je v základnom tvare (nemajú spoločného deliteľa).</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Krok 1:</strong> <MathFormula formula="2 = \frac{p^2}{q^2}" />, teda <MathFormula formula="p^2 = 2q^2" />. Preto <MathFormula formula="p^2" /> je párne, a teda <MathFormula formula="p" /> je párne: <MathFormula formula="p = 2k" />.</p>
          <p class="text-gray-700 text-sm mb-1"><strong>Krok 2:</strong> Dosadíme: <MathFormula formula="(2k)^2 = 2q^2" />, teda <MathFormula formula="4k^2 = 2q^2" />, teda <MathFormula formula="q^2 = 2k^2" />. Preto <MathFormula formula="q" /> je tiež párne.</p>
          <p class="text-gray-700 text-sm"><strong>Spor:</strong> Ale ak sú obe <MathFormula formula="p" /> aj <MathFormula formula="q" /> párne, zlomok nebol v základnom tvare. <strong>Spor!</strong> Teda <MathFormula formula="\sqrt{2}" /> je iracionálne. <span class="text-red-700 font-bold">□</span></p>
        </div>
      </div>

      <!-- Protipríklad -->
      <div class="mb-4">
        <h3 class="text-xl font-bold text-gray-800 mb-3">2.3 Protipríklad</h3>
        <p class="text-gray-700 mb-3 leading-relaxed">
          Ak chceme <strong>vyvrátiť</strong> všeobecné tvrdenie tvaru „pre všetky
          <MathFormula formula="x" /> platí <MathFormula formula="P(x)" />", stačí nájsť
          jeden konkrétny prípad, kde tvrdenie neplatí — tzv. <strong>protipríklad</strong>.
        </p>
        <div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-4">
          <p class="text-sm text-gray-700">
            <strong>Tvrdenie (nepravdivé):</strong> „Pre každé prirodzené číslo <MathFormula formula="n" /> je číslo
            <MathFormula formula="n^2 + n + 41" /> prvočíslo."
          </p>
          <p class="text-sm text-gray-700 mt-2">
            <strong>Protipríklad:</strong> Pre <MathFormula formula="n = 41" />:
            <MathFormula formula="41^2 + 41 + 41 = 41 \cdot (41 + 1 + 1) = 41 \cdot 43" />,
            čo je deliteľné číslom 41 — nie je to prvočíslo.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================
         SEKCIA 3: Matematická indukcia
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">3. Matematická indukcia</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Matematická indukcia je metóda dokazovania tvrdení pre všetky prirodzené čísla
        <MathFormula formula="n \geq 1" />. Funguje podobne ako domino: ak padne prvý kameň
        a každý kameň strhne nasledujúci, padnú všetky.
      </p>

      <!-- Princíp -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="font-bold text-blue-800 text-lg mb-4">Princíp matematickej indukcie</h3>
        <div class="space-y-3">
          <div class="flex gap-3 items-start">
            <span class="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</span>
            <div>
              <p class="font-semibold text-gray-800">Základ indukcie</p>
              <p class="text-gray-700 text-sm">Overíme, že tvrdenie <MathFormula formula="P(n)" /> platí pre <MathFormula formula="n = 1" /> (niekedy aj pre iné začiatočné <MathFormula formula="n" />).</p>
            </div>
          </div>
          <div class="flex gap-3 items-start">
            <span class="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</span>
            <div>
              <p class="font-semibold text-gray-800">Indukčný krok</p>
              <p class="text-gray-700 text-sm">
                Predpokladáme (indukčný predpoklad), že <MathFormula formula="P(k)" /> platí pre nejaké
                <MathFormula formula="k \geq 1" />. Za tohto predpokladu dokážeme, že platí aj <MathFormula formula="P(k+1)" />.
              </p>
            </div>
          </div>
          <div class="flex gap-3 items-start">
            <span class="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
            <div>
              <p class="font-semibold text-gray-800">Záver</p>
              <p class="text-gray-700 text-sm">Z krokov 1 a 2 vyplýva, že <MathFormula formula="P(n)" /> platí pre všetky <MathFormula formula="n \in \mathbb{N}" />.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Príklad 3: Súčet prvých n čísel -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-6">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 3: Dokážte, že
          <MathFormula display formula="1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}" />
        </p>
        <p class="font-semibold text-gray-700 mb-1">Základ indukcie (<MathFormula formula="n=1" />):</p>
        <p class="text-gray-700 text-sm mb-3">
          Ľavá strana: <MathFormula formula="1" />. Pravá strana: <MathFormula formula="\frac{1 \cdot 2}{2} = 1" />. Platí. ✓
        </p>
        <p class="font-semibold text-gray-700 mb-1">Indukčný predpoklad:</p>
        <p class="text-gray-700 text-sm mb-3">
          Predpokladajme, že pre nejaké <MathFormula formula="k \geq 1" /> platí:
          <MathFormula display formula="1 + 2 + \cdots + k = \frac{k(k+1)}{2}" />
        </p>
        <p class="font-semibold text-gray-700 mb-1">Indukčný krok (dokážeme pre <MathFormula formula="k+1" />):</p>
        <p class="text-gray-700 text-sm mb-1">
          <MathFormula display formula="1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1)" />
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <MathFormula display formula="= (k+1)\!\left(\frac{k}{2} + 1\right) = (k+1) \cdot \frac{k+2}{2} = \frac{(k+1)(k+2)}{2}" />
        </p>
        <p class="text-gray-700 text-sm">
          Čo je presne vzorec pre <MathFormula formula="n = k+1" />. <span class="text-blue-700 font-bold">□</span>
        </p>
      </div>

      <!-- Príklad 4: Súčet geometrickej postupnosti -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 4: Dokážte, že pre <MathFormula formula="q \neq 1" /> platí:
          <MathFormula display formula="1 + q + q^2 + \cdots + q^n = \frac{q^{n+1} - 1}{q - 1}" />
        </p>
        <p class="font-semibold text-gray-700 mb-1">Základ indukcie (<MathFormula formula="n=0" />):</p>
        <p class="text-gray-700 text-sm mb-3">
          Ľavá strana: <MathFormula formula="1" />. Pravá strana: <MathFormula formula="\frac{q - 1}{q-1} = 1" />. Platí. ✓
        </p>
        <p class="font-semibold text-gray-700 mb-1">Indukčný predpoklad:</p>
        <p class="text-gray-700 text-sm mb-3">
          Predpokladajme platnosť pre <MathFormula formula="n = k" />:
          <MathFormula display formula="1 + q + \cdots + q^k = \frac{q^{k+1} - 1}{q - 1}" />
        </p>
        <p class="font-semibold text-gray-700 mb-1">Indukčný krok:</p>
        <p class="text-gray-700 text-sm mb-1">
          <MathFormula display formula="1 + q + \cdots + q^k + q^{k+1} = \frac{q^{k+1}-1}{q-1} + q^{k+1} = \frac{q^{k+1}-1 + q^{k+1}(q-1)}{q-1}" />
        </p>
        <p class="text-gray-700 text-sm">
          <MathFormula display formula="= \frac{q^{k+1} - 1 + q^{k+2} - q^{k+1}}{q-1} = \frac{q^{k+2} - 1}{q-1}" />
        </p>
        <p class="text-gray-700 text-sm mt-1">
          Čo je vzorec pre <MathFormula formula="n = k+1" />. <span class="text-blue-700 font-bold">□</span>
        </p>
      </div>
    </section>

    <!-- ============================
         ZHRNUTIE
         ============================ -->
    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Axióma</strong> — prijímame bez dôkazu; <strong>definícia</strong> — presné vymedzenie pojmu; <strong>veta</strong> — tvrdenie, ktoré treba dokázať.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Priamy dôkaz</strong>: z predpokladov odvodíme záver logickými krokmi.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Dôkaz sporom</strong>: predpokladáme negáciu záveru, odvodíme spor, záver teda platí.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Protipríklad</strong>: jediný prípad, kde tvrdenie neplatí, stačí na vyvrátenie všeobecného tvrdenia.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Matematická indukcia</strong>: základ (<MathFormula formula="n=1" />) + indukčný krok (<MathFormula formula="P(k) \Rightarrow P(k+1)" />) → platí pre všetky <MathFormula formula="n" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span><strong>Ekvivalencia</strong> <MathFormula formula="P \Leftrightarrow Q" />: treba dokázať obe implikácie <MathFormula formula="P \Rightarrow Q" /> aj <MathFormula formula="Q \Rightarrow P" />.</span>
        </li>
      </ul>
    </section>

    <!-- ============================
         KVÍZ
         ============================ -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz: Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex justify-between items-center mb-4">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-medium text-blue-600">Skóre: {{ quizScore }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${((currentQ) / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Question -->
        <p data-testid="quiz-question" class="font-semibold text-gray-800 text-lg mb-5 leading-snug">
          {{ currentQuestion.question }}
        </p>

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`quiz-option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm"
            :class="optionClass(i)"
            @click="selectAnswer(i)"
          >
            <span class="font-medium mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            class="rounded-xl p-4 text-sm mb-5"
            :class="selectedAnswer === currentQuestion.correctIndex ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-red-50 border border-red-300 text-red-800'"
          >
            <strong>{{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}</strong>
            {{ currentQuestion.explanation }}
          </div>
        </Transition>

        <!-- Next button -->
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

      <!-- Result -->
      <Transition name="fade">
        <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ scoreMessage }}</h3>
          <p data-testid="quiz-score" class="text-gray-500 mb-6">
            Dosiahol si {{ quizScore }} z {{ quiz.length }} bodov.
          </p>
          <button
            data-testid="quiz-reset-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
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

// ── Quiz types & data ──────────────────────────────────────────────────────
interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je axióma v matematike?',
    options: [
      'Tvrdenie, ktoré treba dokázať pomocou iných viet.',
      'Základné tvrdenie prijímané bez dôkazu.',
      'Príklad, ktorý vyvracia všeobecné tvrdenie.',
      'Výrok, ktorý je vždy nepravdivý.',
    ],
    correctIndex: 1,
    explanation: 'Axióma je základné východiskové tvrdenie, ktoré prijímame bez dôkazu. Na axiómach stavíme celú matematickú teóriu.',
  },
  {
    question: 'Aká je stratégia dôkazu sporom?',
    options: [
      'Z predpokladov odvodíme záver priamymi krokmi.',
      'Nájdeme jeden prípad, kde záver neplatí.',
      'Predpokladáme negáciu záveru a odvodíme spor.',
      'Overíme tvrdenie pre n = 1 a potom pre n = k+1.',
    ],
    correctIndex: 2,
    explanation: 'Pri dôkaze sporom predpokladáme, že záver neplatí (negácia záveru), a z predpokladov spolu s touto negáciou odvodíme spor. Spor dokazuje, že záver musí platiť.',
  },
  {
    question: 'Čo je protipríklad a na čo slúži?',
    options: [
      'Dôkaz, že tvrdenie platí pre všetky prirodzené čísla.',
      'Konkrétny prípad, ktorý vyvracia všeobecné tvrdenie.',
      'Predpoklad, z ktorého vychádza priamy dôkaz.',
      'Tvrdenie ekvivalentné pôvodnému, ale ľahšie dokazateľné.',
    ],
    correctIndex: 1,
    explanation: 'Protipríklad je jeden konkrétny prípad, kde všeobecné tvrdenie neplatí. Na vyvrátenie tvrdenia "pre všetky x platí P(x)" stačí nájsť jedno x, pre ktoré P(x) neplatí.',
  },
  {
    question: 'Aký je základ indukcie pri matematickej indukcii?',
    options: [
      'Predpokladáme, že tvrdenie platí pre n = k.',
      'Dokážeme, že z P(k) vyplýva P(k+1).',
      'Overíme, že tvrdenie platí pre n = 1 (alebo iné začiatočné n).',
      'Nájdeme protipríklad pre n = 0.',
    ],
    correctIndex: 2,
    explanation: 'Základ indukcie je prvý krok — overíme platnosť tvrdenia pre najmenšiu hodnotu n (zvyčajne n = 1). Bez tohto kroku by indukcia nefungovala.',
  },
  {
    question: 'Aký je výsledok súčtu 1 + 2 + 3 + ... + 10?',
    options: [
      '45',
      '50',
      '55',
      '60',
    ],
    correctIndex: 2,
    explanation: 'Podľa vzorca n(n+1)/2 dostaneme pre n = 10: 10 · 11 / 2 = 110 / 2 = 55.',
  },
  {
    question: 'Tvrdenia P a Q sú ekvivalentné (P ⟺ Q). Čo to znamená?',
    options: [
      'Z P vyplýva Q, ale z Q nemusí vyplývať P.',
      'P a Q sú obe nepravdivé.',
      'Platí súčasne P ⇒ Q aj Q ⇒ P.',
      'P a Q majú rovnaký počet symbolov.',
    ],
    correctIndex: 2,
    explanation: 'Ekvivalencia P ⟺ Q znamená, že platí obojsmerná implikácia: P ⇒ Q aj Q ⇒ P. Tvrdenia sú pravdivé zároveň alebo nepravdivé zároveň.',
  },
]

// ── Quiz state ─────────────────────────────────────────────────────────────
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

// ── Option styling ─────────────────────────────────────────────────────────
function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer text-gray-700'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-100 bg-gray-50 text-gray-400'
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
