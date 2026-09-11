<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/kombinatorika-statistika" class="hover:text-blue-600 transition-colors">Kombinatorika a štatistika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Kombinatorika</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-4 mb-4">
      <span class="text-5xl" aria-hidden="true">🔢</span>
      <h1 class="text-4xl font-bold text-blue-700">Kombinatorika</h1>
    </div>

    <!-- Intro -->
    <p class="text-gray-600 text-lg leading-relaxed mb-12">
      Kombinatorika je odvetvie matematiky, ktoré sa zaoberá systematickým počítaním, usporiadaním a
      výberom prvkov z množín. Poskytuje odpovede na otázky ako: „Koľkými spôsobmi môžeme usporiadať
      5 kníh na polici?" alebo „Koľko rôznych lotto stávok existuje?" Kombinatorické myslenie je
      základom pravdepodobnosti, štatistiky aj informatiky.
    </p>

    <!-- Section 1: Základné pravidlá -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-5">1. Základné pravidlá počítania</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">Pravidlo súčtu</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Ak môžeme niečo urobiť <strong>jedným z n₁ spôsobov</strong> alebo
            <strong>jedným z n₂ spôsobov</strong> a tieto situácie sa navzájom vylučujú,
            celkový počet spôsobov je súčet:
          </p>
          <MathFormula display formula="|A \cup B| = |A| + |B|" />
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">Pravidlo súčinu</h3>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Ak výber prebieha v <strong>k nezávislých etapách</strong> a i-tá etapa
            má <MathFormula formula="n_i" /> možností, celkový počet spôsobov je súčin:
          </p>
          <MathFormula display formula="n_1 \cdot n_2 \cdot \ldots \cdot n_k" />
        </div>
      </div>

      <div class="bg-white border border-blue-200 rounded-2xl p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 1 — Výber oblečenia</h3>
        <p class="text-gray-700 mb-3">
          Máme 3 košele, 4 nohavice a 2 páry topánok. Koľkými spôsobmi sa môžeme obliecť?
        </p>
        <p class="text-gray-700 mb-2">
          Výber sa skladá z 3 nezávislých etáp — uplatníme pravidlo súčinu:
        </p>
        <MathFormula display formula="3 \cdot 4 \cdot 2 = 24 \text{ spôsobov}" />
      </div>
    </section>

    <!-- Section 2: Faktoriál a permutácie -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-5">2. Faktoriál a permutácie</h2>

      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Faktoriál</h3>
        <p class="text-gray-700 mb-3 leading-relaxed">
          Faktoriál prirodzeného čísla <MathFormula formula="n" /> je súčin všetkých prirodzených
          čísel od 1 po <MathFormula formula="n" />. Špeciálne definujeme <MathFormula formula="0! = 1" />:
        </p>
        <MathFormula display formula="n! = 1 \cdot 2 \cdot 3 \cdot \ldots \cdot n, \qquad 0! = 1" />
        <div class="mt-4 bg-gray-50 border rounded-xl p-4 text-gray-600 text-sm">
          <span class="font-medium">Prvých niekoľko hodnôt: </span>
          <MathFormula formula="1!=1,\ \ 2!=2,\ \ 3!=6,\ \ 4!=24,\ \ 5!=120,\ \ 6!=720" />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Permutácie bez opakovania</h3>
        <p class="text-gray-700 mb-3 leading-relaxed">
          Permutácia je každé <strong>usporiadanie všetkých n rôznych prvkov</strong>.
          Záleží na poradí a každý prvok sa použije práve raz. Počet permutácií:
        </p>
        <MathFormula display formula="P_n = n!" />
      </div>

      <div class="bg-white border border-blue-200 rounded-2xl p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 2 — Usporiadanie kníh</h3>
        <p class="text-gray-700 mb-3">
          Koľkými spôsobmi môžeme usporiadať 5 rôznych kníh na polici?
        </p>
        <p class="text-gray-700 mb-2">
          Prvú knihu môžeme vybrať 5 spôsobmi, druhú 4, tretiu 3, štvrtú 2, piatu 1.
          Podľa pravidla súčinu:
        </p>
        <MathFormula display formula="P_5 = 5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120 \text{ spôsobov}" />
      </div>
    </section>

    <!-- Section 3: Variácie -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-5">3. Variácie</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">
        Variácia je výber <strong>k prvkov z n</strong>, kde na <strong>poradí záleží</strong>.
        Rozlišujeme dve situácie podľa toho, či sa prvky môžu opakovať.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">Bez opakovania</h3>
          <p class="text-gray-700 mb-4 text-sm leading-relaxed">
            Každý prvok môžeme použiť najviac raz. Prvú pozíciu obsadíme n spôsobmi,
            druhú (n−1), ..., k-tú (n−k+1) spôsobmi:
          </p>
          <MathFormula display formula="V_k(n) = \frac{n!}{(n-k)!} = n \cdot (n-1) \cdots (n-k+1)" />
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">S opakovaním</h3>
          <p class="text-gray-700 mb-4 text-sm leading-relaxed">
            Prvky sa môžu opakovať — na každej z k pozícií máme vždy n možností,
            preto jednoducho umocníme:
          </p>
          <MathFormula display formula="V'_k(n) = n^k" />
        </div>
      </div>

      <div class="space-y-4">
        <div class="bg-white border border-blue-200 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 3 — Štvorciferné PIN kódy</h3>
          <p class="text-gray-700 mb-2">
            Koľko rôznych 4-ciferných PIN kódov z číslic 0–9 existuje (číslice sa môžu opakovať)?
          </p>
          <MathFormula display formula="V'_4(10) = 10^4 = 10\,000 \text{ kódov}" />
        </div>

        <div class="bg-white border border-blue-200 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 4 — Medailové umiestnenia</h3>
          <p class="text-gray-700 mb-2">
            Z 8 bežcov sa udeľujú medaily za 1., 2. a 3. miesto. Koľko možností existuje?
          </p>
          <MathFormula display formula="V_3(8) = \frac{8!}{(8-3)!} = \frac{8!}{5!} = 8 \cdot 7 \cdot 6 = 336 \text{ spôsobov}" />
        </div>
      </div>
    </section>

    <!-- Section 4: Kombinácie a Pascalov trojuholník -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-5">4. Kombinácie a Pascalov trojuholník</h2>

      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Kombinácie bez opakovania</h3>
        <p class="text-gray-700 mb-3 leading-relaxed">
          Pri kombinácii vyberáme <strong>k prvkov z n</strong>, ale <strong>nezáleží na poradí</strong>
          — každú skupinu počítame len raz. Počet kombinácií (čítame „n nad k"):
        </p>
        <MathFormula display formula="\binom{n}{k} = C(n,k) = \frac{n!}{k!\,(n-k)!}" />
        <p class="text-gray-700 mt-3">
          Platí symetria: <MathFormula formula="\binom{n}{k} = \binom{n}{n-k}" />, napr.
          <MathFormula formula="\binom{10}{3} = \binom{10}{7} = 120" />.
        </p>
      </div>

      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 5 — Slovenská lotéria</h3>
        <p class="text-gray-700 mb-2">
          V lotte „Šestka" sa vyberá 6 čísel z 49. Koľko rôznych stávok existuje?
        </p>
        <MathFormula display formula="\binom{49}{6} = \frac{49 \cdot 48 \cdot 47 \cdot 46 \cdot 45 \cdot 44}{6!} = \frac{10\,068\,347\,520}{720} = 13\,983\,816" />
        <p class="text-gray-600 text-sm mt-2">
          Šanca výhry je teda 1 : 13 983 816 — to je menej ako 0,000007 %.
        </p>
      </div>

      <!-- Pascal's Triangle SVG -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Pascalov trojuholník</h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Pascalov trojuholník zobrazuje hodnoty <MathFormula formula="\binom{n}{k}" /> pre každý riadok n
          a stĺpec k. Každý prvok je súčtom dvoch prvkov presne nad ním:
        </p>
        <MathFormula display formula="\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}" />

        <div class="flex justify-center overflow-x-auto mt-6">
          <svg
            role="img"
            aria-label="Pascalov trojuholník — prvých 6 riadkov s hodnotami C(n,k). Zvýraznený vzťah: C(3,1) + C(3,2) = C(4,2), teda 3+3=6."
            viewBox="0 0 560 360"
            width="560"
            height="360"
            class="max-w-full"
          >
            <!-- Background -->
            <rect width="560" height="360" rx="16" fill="#eff6ff" />

            <!-- Title -->
            <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af" font-family="sans-serif">Pascalov trojuholník</text>

            <!-- Row labels (n=) -->
            <text x="36" y="70" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=0</text>
            <text x="36" y="120" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=1</text>
            <text x="36" y="170" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=2</text>
            <text x="36" y="220" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=3</text>
            <text x="36" y="270" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=4</text>
            <text x="36" y="320" text-anchor="end" font-size="11" fill="#6b7280" font-family="sans-serif">n=5</text>

            <!-- Highlight lines: C(3,1)+C(3,2) → C(4,2) -->
            <line x1="228" y1="231" x2="280" y2="255" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3" />
            <line x1="308" y1="231" x2="280" y2="255" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3" />

            <!-- Row 0: C(0,0)=1 -->
            <circle cx="280" cy="60" r="21" fill="#3b82f6" />
            <text x="280" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Row 1: C(1,0)=1, C(1,1)=1 -->
            <circle cx="240" cy="110" r="21" fill="#3b82f6" />
            <text x="240" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>
            <circle cx="320" cy="110" r="21" fill="#3b82f6" />
            <text x="320" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Row 2: C(2,0)=1, C(2,1)=2, C(2,2)=1 -->
            <circle cx="200" cy="160" r="21" fill="#3b82f6" />
            <text x="200" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>
            <circle cx="280" cy="160" r="21" fill="#2563eb" />
            <text x="280" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">2</text>
            <circle cx="360" cy="160" r="21" fill="#3b82f6" />
            <text x="360" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Row 3: C(3,0)=1, C(3,1)=3[hl], C(3,2)=3[hl], C(3,3)=1 -->
            <circle cx="160" cy="210" r="21" fill="#3b82f6" />
            <text x="160" y="215" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- C(3,1)=3 highlighted -->
            <circle cx="228" cy="210" r="23" fill="#1d4ed8" stroke="#f59e0b" stroke-width="3" />
            <text x="228" y="215" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">3</text>

            <!-- C(3,2)=3 highlighted -->
            <circle cx="308" cy="210" r="23" fill="#1d4ed8" stroke="#f59e0b" stroke-width="3" />
            <text x="308" y="215" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">3</text>

            <circle cx="376" cy="210" r="21" fill="#3b82f6" />
            <text x="376" y="215" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Row 4: C(4,0)=1, C(4,1)=4, C(4,2)=6[hl result], C(4,3)=4, C(4,4)=1 -->
            <circle cx="120" cy="260" r="21" fill="#3b82f6" />
            <text x="120" y="265" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>
            <circle cx="192" cy="260" r="21" fill="#2563eb" />
            <text x="192" y="265" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">4</text>

            <!-- C(4,2)=6 — result of 3+3 -->
            <circle cx="268" cy="260" r="23" fill="#ea580c" stroke="#f59e0b" stroke-width="3" />
            <text x="268" y="265" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">6</text>

            <circle cx="344" cy="260" r="21" fill="#2563eb" />
            <text x="344" y="265" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">4</text>
            <circle cx="416" cy="260" r="21" fill="#3b82f6" />
            <text x="416" y="265" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Row 5: 1,5,10,10,5,1 -->
            <circle cx="80" cy="310" r="21" fill="#3b82f6" />
            <text x="80" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>
            <circle cx="152" cy="310" r="21" fill="#2563eb" />
            <text x="152" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">5</text>
            <circle cx="224" cy="310" r="21" fill="#2563eb" />
            <text x="224" y="315" text-anchor="middle" font-size="12" font-weight="bold" fill="white" font-family="sans-serif">10</text>
            <circle cx="296" cy="310" r="21" fill="#2563eb" />
            <text x="296" y="315" text-anchor="middle" font-size="12" font-weight="bold" fill="white" font-family="sans-serif">10</text>
            <circle cx="368" cy="310" r="21" fill="#2563eb" />
            <text x="368" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">5</text>
            <circle cx="440" cy="310" r="21" fill="#3b82f6" />
            <text x="440" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">1</text>

            <!-- Legend -->
            <circle cx="80" cy="344" r="9" fill="#1d4ed8" stroke="#f59e0b" stroke-width="2" />
            <text x="95" y="349" font-size="11" fill="#374151" font-family="sans-serif">sčítavané členy</text>
            <circle cx="200" cy="344" r="9" fill="#ea580c" stroke="#f59e0b" stroke-width="2" />
            <text x="215" y="349" font-size="11" fill="#374151" font-family="sans-serif">výsledok: 3+3=6</text>
          </svg>
        </div>
        <p class="text-center text-sm text-gray-500 mt-2">
          Zvýraznený vzťah: <MathFormula formula="\binom{3}{1} + \binom{3}{2} = 3 + 3 = 6 = \binom{4}{2}" />
        </p>
      </div>
    </section>

    <!-- Section 5: Binomická veta -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-5">5. Binomická veta</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Binomická veta popisuje rozvoj n-tej mocniny dvojčlena <MathFormula formula="(a+b)^n" />.
        Koeficienty tohto rozvoja sú práve kombinačné čísla — hodnoty z Pascalovho trojuholníka:
      </p>
      <MathFormula display formula="(a+b)^n = \sum_{k=0}^{n} \binom{n}{k}\, a^{n-k}\, b^k" />

      <div class="bg-white border border-blue-200 rounded-2xl p-6 mt-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Príklad 6 — Rozvoj <MathFormula formula="(a+b)^4" /></h3>
        <MathFormula display formula="(a+b)^4 = \binom{4}{0}a^4 + \binom{4}{1}a^3b + \binom{4}{2}a^2b^2 + \binom{4}{3}ab^3 + \binom{4}{4}b^4" />
        <MathFormula display formula="= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4" />
        <p class="text-gray-600 text-sm mt-2">
          Koeficienty 1, 4, 6, 4, 1 sú práve 5. riadok Pascalovho trojuholníka (n = 4).
        </p>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <div class="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span><strong>Pravidlo súčtu:</strong> alternatívne možnosti → sčítame počty</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span><strong>Pravidlo súčinu:</strong> nezávislé etapy → počty násobíme</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Faktoriál:</strong> <MathFormula formula="n! = n \cdot (n{-}1) \cdots 1,\quad 0!=1" /></div>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Permutácie:</strong> <MathFormula formula="P_n = n!" /> (usporiadanie n prvkov)</div>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Variácie bez op.:</strong> <MathFormula formula="V_k(n) = \frac{n!}{(n-k)!}" /></div>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Variácie s op.:</strong> <MathFormula formula="V'_k(n) = n^k" /></div>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Kombinácie:</strong> <MathFormula formula="\binom{n}{k} = \frac{n!}{k!(n-k)!}" /></div>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Pascalov vzťah:</strong> <MathFormula formula="\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}" /></div>
        </div>
        <div class="flex items-start gap-2 sm:col-span-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <div><strong>Binomická veta:</strong> <MathFormula formula="(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k" /></div>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <div class="bg-white border border-blue-200 rounded-2xl p-6">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz — otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-3 text-sm text-gray-500">
          <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span>Skóre: {{ quizScore }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Question -->
        <p data-testid="quiz-question" class="text-gray-800 font-medium text-lg mb-5">
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
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer disabled:cursor-default"
            :class="{
              'border-gray-200 hover:border-blue-300 hover:bg-blue-50': selectedAnswer === null,
              'border-green-400 bg-green-50 text-green-900': selectedAnswer !== null && i === currentQuestion.correctIndex,
              'border-red-400 bg-red-50 text-red-900': selectedAnswer === i && i !== currentQuestion.correctIndex,
              'border-gray-200 bg-white opacity-50': selectedAnswer !== null && i !== currentQuestion.correctIndex && i !== selectedAnswer,
            }"
            @click="selectAnswer(i)"
          >
            <span class="font-semibold mr-2 text-blue-600">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            class="mb-5 p-4 rounded-xl text-sm leading-relaxed"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'"
          >
            <span class="font-semibold mr-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
            </span>
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
      <div v-else data-testid="quiz-result" class="text-center py-6">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
        <p data-testid="quiz-score" class="text-gray-600 mb-6">
          Správne odpovede: <strong>{{ quizScore }}</strong> z <strong>{{ quiz.length }}</strong>
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
    </div>
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
    question: 'Koľko rôznych trojciferných čísel môžeme zostaviť z číslic 1, 2, 3, 4, 5 (bez opakovania)?',
    options: ['60', '125', '10', '20'],
    correctIndex: 0,
    explanation: 'Variácie bez opakovania: V₃(5) = 5!/(5−3)! = 5·4·3 = 60. Keby sa číslice mohli opakovať, bolo by to 5³ = 125.',
  },
  {
    question: 'Koľko rôznych spôsobov existuje na usporiadanie písmen slova RADAR (5 písmen: 2× R, 2× A, 1× D)?',
    options: ['30', '120', '60', '10'],
    correctIndex: 0,
    explanation: 'Permutácie s opakovaním: 5!/(2!·2!·1!) = 120/4 = 30 spôsobov.',
  },
  {
    question: 'Z 10 žiakov vyberáme 3-člennú skupinu (na poradí nezáleží). Koľko možností existuje?',
    options: ['720', '30', '120', '210'],
    correctIndex: 2,
    explanation: 'Kombinácie: C(10,3) = 10!/(3!·7!) = (10·9·8)/(3·2·1) = 720/6 = 120.',
  },
  {
    question: 'Koľko rôznych 4-ciferných PIN kódov z číslic 0–9 existuje, keď sa číslice môžu opakovať?',
    options: ['5 040', '3 024', '10 000', '210'],
    correctIndex: 2,
    explanation: 'Variácie s opakovaním: V\'₄(10) = 10⁴ = 10 000. Bez opakovania by bolo V₄(10) = 10!/6! = 5 040.',
  },
  {
    question: 'Pomocou Pascalovho vzťahu vypočítaj C(5,2) + C(5,3). Výsledok sa rovná:',
    options: ['C(6,4) = 15', 'C(6,2) = 15', 'C(6,3) = 20', 'C(5,4) = 5'],
    correctIndex: 2,
    explanation: 'Pascalov vzťah: C(n,k)+C(n,k+1)=C(n+1,k+1). Tu: C(5,2)+C(5,3) = C(6,3) = 6!/(3!·3!) = 20.',
  },
  {
    question: 'Na turnaji hrá každý tím s každým práve raz. Zúčastnilo sa 6 tímov. Koľko zápasov sa odohráva?',
    options: ['30', '15', '36', '12'],
    correctIndex: 1,
    explanation: 'Každý zápas je dvojica tímov — na poradí nezáleží. C(6,2) = 6!/(2!·4!) = (6·5)/2 = 15 zápasov.',
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
