<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/cisla-a-vyrazy" class="hover:text-blue-600 transition-colors">Čísla, premenné a výrazy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Čísla a množiny</span>
    </nav>

    <!-- Nadpis -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-4xl">🔵</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Čísla a množiny</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Číselné obory, vzťahy medzi nimi, operácie s množinami, intervaly a absolútna hodnota — základné stavebné kamene matematiky.
    </p>

    <!-- ===== SEKCIA 1: Číselné obory ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Číselné obory</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Čísla delíme do viacerých <strong>číselných oborov</strong> podľa toho, aké vlastnosti majú. Každý väčší obor obsahuje predchádzajúci — hovoríme o <em>inklúzii</em>.
      </p>

      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="px-4 py-3 text-left font-semibold">Obor</th>
              <th class="px-4 py-3 text-left font-semibold">Symbol</th>
              <th class="px-4 py-3 text-left font-semibold">Popis</th>
              <th class="px-4 py-3 text-left font-semibold">Príklady</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-green-700">Prirodzené</td>
              <td class="px-4 py-3 font-bold"><MathFormula formula="\mathbb{N}" /></td>
              <td class="px-4 py-3 text-gray-600">Kladné celé čísla (niekedy aj 0)</td>
              <td class="px-4 py-3 text-gray-600">1, 2, 3, 4, …</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-blue-700">Celé</td>
              <td class="px-4 py-3 font-bold"><MathFormula formula="\mathbb{Z}" /></td>
              <td class="px-4 py-3 text-gray-600">Prirodzené + nula + záporné celé</td>
              <td class="px-4 py-3 text-gray-600">…, −2, −1, 0, 1, 2, …</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-indigo-700">Racionálne</td>
              <td class="px-4 py-3 font-bold"><MathFormula formula="\mathbb{Q}" /></td>
              <td class="px-4 py-3 text-gray-600">Dajú sa zapísať ako zlomok <MathFormula formula="\tfrac{p}{q},\; q\neq 0" /></td>
              <td class="px-4 py-3 text-gray-600">½, 0,75, −3, 0,3̄</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-purple-700">Iracionálne</td>
              <td class="px-4 py-3 font-bold"><MathFormula formula="\mathbb{I}" /></td>
              <td class="px-4 py-3 text-gray-600">Nedajú sa zapísať ako zlomok; neperiodický rozvoj</td>
              <td class="px-4 py-3 text-gray-600">π, √2, e</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium text-rose-700">Reálne</td>
              <td class="px-4 py-3 font-bold"><MathFormula formula="\mathbb{R}" /></td>
              <td class="px-4 py-3 text-gray-600">Racionálne ∪ Iracionálne — celá číselná os</td>
              <td class="px-4 py-3 text-gray-600">všetky vyššie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-gray-700 mb-3">Vzťah medzi obormi — každý je podmnožinou nasledujúceho:</p>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-center">
        <MathFormula display formula="\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}, \quad \mathbb{I} \subset \mathbb{R}, \quad \mathbb{Q} \cap \mathbb{I} = \emptyset" />
      </div>

      <!-- SVG ilustrácia -->
      <div class="flex justify-center mb-6">
        <svg
          role="img"
          aria-label="Číselná os s vyznačenými číselnými obormi: prirodzené (zelené), celé (modré), racionálne, iracionálne a reálne čísla"
          viewBox="0 0 640 200"
          class="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Os -->
          <line x1="40" y1="100" x2="610" y2="100" stroke="#94a3b8" stroke-width="2" />
          <!-- Šípky -->
          <polygon points="610,95 625,100 610,105" fill="#94a3b8" />
          <polygon points="40,95 25,100 40,105" fill="#94a3b8" />

          <!-- Popis osi -->
          <text x="628" y="104" font-size="13" fill="#64748b" font-family="serif">ℝ</text>

          <!-- Celé záporné čísla (modré body) -->
          <circle cx="120" cy="100" r="5" fill="#3b82f6" />
          <text x="116" y="120" font-size="11" fill="#3b82f6" text-anchor="middle">−3</text>
          <circle cx="180" cy="100" r="5" fill="#3b82f6" />
          <text x="176" y="120" font-size="11" fill="#3b82f6" text-anchor="middle">−2</text>
          <circle cx="240" cy="100" r="5" fill="#3b82f6" />
          <text x="236" y="120" font-size="11" fill="#3b82f6" text-anchor="middle">−1</text>

          <!-- Nula -->
          <circle cx="300" cy="100" r="5" fill="#3b82f6" />
          <text x="300" y="120" font-size="11" fill="#3b82f6" text-anchor="middle">0</text>

          <!-- Prirodzené čísla (zelené body) -->
          <circle cx="360" cy="100" r="6" fill="#22c55e" stroke="#16a34a" stroke-width="1.5" />
          <text x="360" y="120" font-size="11" fill="#16a34a" text-anchor="middle">1</text>
          <circle cx="420" cy="100" r="6" fill="#22c55e" stroke="#16a34a" stroke-width="1.5" />
          <text x="420" y="120" font-size="11" fill="#16a34a" text-anchor="middle">2</text>
          <circle cx="480" cy="100" r="6" fill="#22c55e" stroke="#16a34a" stroke-width="1.5" />
          <text x="480" y="120" font-size="11" fill="#16a34a" text-anchor="middle">3</text>

          <!-- Racionálne (zlomok) -->
          <circle cx="330" cy="100" r="4" fill="#a78bfa" />
          <text x="330" y="85" font-size="10" fill="#7c3aed" text-anchor="middle">½</text>

          <!-- Iracionálne čísla -->
          <circle cx="389" cy="100" r="4" fill="#f59e0b" />
          <text x="389" y="85" font-size="10" fill="#d97706" text-anchor="middle">√2</text>
          <circle cx="449" cy="100" r="4" fill="#f59e0b" />
          <text x="449" y="85" font-size="10" fill="#d97706" text-anchor="middle">π</text>

          <!-- Legenda -->
          <circle cx="55" cy="160" r="5" fill="#22c55e" stroke="#16a34a" stroke-width="1.5" />
          <text x="65" y="164" font-size="11" fill="#374151">N — prirodzené</text>
          <circle cx="175" cy="160" r="5" fill="#3b82f6" />
          <text x="185" y="164" font-size="11" fill="#374151">Z — celé (vrátane záporných)</text>
          <circle cx="380" cy="160" r="4" fill="#a78bfa" />
          <text x="390" y="164" font-size="11" fill="#374151">Q — racionálne</text>
          <circle cx="490" cy="160" r="4" fill="#f59e0b" />
          <text x="500" y="164" font-size="11" fill="#374151">I — iracionálne</text>
        </svg>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-2">Príklad 1: Zaraď čísla do oborov</p>
        <p class="text-gray-700 mb-2">Ku každému číslu urči, do ktorých oborov patrí: <strong>−5, 0, ¾, √3, 2,7̄</strong></p>
        <div class="mt-3 space-y-1 text-sm text-gray-700">
          <p>• <strong>−5</strong>: patrí do <MathFormula formula="\mathbb{Z}, \mathbb{Q}, \mathbb{R}" /> (celé číslo, dá sa zapísať ako −5/1)</p>
          <p>• <strong>0</strong>: patrí do <MathFormula formula="\mathbb{Z}, \mathbb{Q}, \mathbb{R}" /> (nula je celé aj racionálne číslo)</p>
          <p>• <strong>¾</strong>: patrí do <MathFormula formula="\mathbb{Q}, \mathbb{R}" /> (zlomok → racionálne, desatinný rozvoj 0,75 je konečný)</p>
          <p>• <strong>√3</strong>: patrí do <MathFormula formula="\mathbb{I}, \mathbb{R}" /> (iracionálne — neperiodický nekonečný rozvoj)</p>
          <p>• <strong>2,7̄ = 2,777…</strong>: patrí do <MathFormula formula="\mathbb{Q}, \mathbb{R}" /> (periodický rozvoj → racionálne, rovná sa 25/9)</p>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 2: Množiny a operácie ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Množiny a operácie s nimi</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Množina</strong> je súbor navzájom rozlíšiteľných objektov — <em>prvkov</em>. Množiny zapisujeme pomocou zložených zátvoriek, napr.
        <MathFormula formula="A = \{1, 2, 3\}" />.
        Ak množina neobsahuje žiadny prvok, ide o <strong>prázdnu množinu</strong> <MathFormula formula="\emptyset" />.
      </p>

      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-bold text-blue-700 mb-2">Zjednotenie <MathFormula formula="A \cup B" /></p>
          <p class="text-sm text-gray-600">Prvky, ktoré patria do <em>A alebo B</em> (alebo oboch).</p>
          <div class="mt-2 text-center">
            <MathFormula display formula="A \cup B = \{x \mid x \in A \text{ alebo } x \in B\}" />
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-bold text-blue-700 mb-2">Prienik <MathFormula formula="A \cap B" /></p>
          <p class="text-sm text-gray-600">Prvky, ktoré patria <em>súčasne do A aj B</em>.</p>
          <div class="mt-2 text-center">
            <MathFormula display formula="A \cap B = \{x \mid x \in A \text{ a zároveň } x \in B\}" />
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p class="text-sm font-bold text-blue-700 mb-2">Doplnok <MathFormula formula="A'" /></p>
          <p class="text-sm text-gray-600">Prvky <em>univerza</em>, ktoré <em>nepatria</em> do A.</p>
          <div class="mt-2 text-center">
            <MathFormula display formula="A' = \{x \in U \mid x \notin A\}" />
          </div>
        </div>
      </div>

      <!-- Vennove diagramy SVG -->
      <div class="flex flex-wrap justify-center gap-8 mb-6">
        <!-- Zjednotenie -->
        <figure class="text-center">
          <svg viewBox="0 0 160 100" class="w-40 h-24" aria-label="Vennov diagram — zjednotenie A∪B" role="img">
            <circle cx="60" cy="50" r="38" fill="#3b82f6" fill-opacity="0.4" stroke="#2563eb" stroke-width="1.5" />
            <circle cx="100" cy="50" r="38" fill="#3b82f6" fill-opacity="0.4" stroke="#2563eb" stroke-width="1.5" />
            <text x="42" y="50" font-size="13" fill="#1e40af" font-weight="bold">A</text>
            <text x="110" y="50" font-size="13" fill="#1e40af" font-weight="bold">B</text>
          </svg>
          <figcaption class="text-xs text-gray-500 mt-1"><MathFormula formula="A \cup B" /></figcaption>
        </figure>
        <!-- Prienik -->
        <figure class="text-center">
          <svg viewBox="0 0 160 100" class="w-40 h-24" aria-label="Vennov diagram — prienik A∩B" role="img">
            <circle cx="60" cy="50" r="38" fill="#e0e7ff" stroke="#93c5fd" stroke-width="1.5" />
            <circle cx="100" cy="50" r="38" fill="#e0e7ff" stroke="#93c5fd" stroke-width="1.5" />
            <clipPath id="left-circle">
              <circle cx="60" cy="50" r="38" />
            </clipPath>
            <circle cx="100" cy="50" r="38" fill="#3b82f6" fill-opacity="0.6" clip-path="url(#left-circle)" />
            <text x="42" y="50" font-size="13" fill="#1e40af" font-weight="bold">A</text>
            <text x="108" y="50" font-size="13" fill="#1e40af" font-weight="bold">B</text>
          </svg>
          <figcaption class="text-xs text-gray-500 mt-1"><MathFormula formula="A \cap B" /></figcaption>
        </figure>
        <!-- Doplnok -->
        <figure class="text-center">
          <svg viewBox="0 0 160 100" class="w-40 h-24" aria-label="Vennov diagram — doplnok A'" role="img">
            <rect x="5" y="5" width="150" height="90" rx="8" fill="#bfdbfe" fill-opacity="0.5" stroke="#93c5fd" stroke-width="1.5" />
            <circle cx="75" cy="50" r="32" fill="white" stroke="#3b82f6" stroke-width="1.5" />
            <text x="68" y="54" font-size="13" fill="#1e40af" font-weight="bold">A</text>
            <text x="120" y="26" font-size="11" fill="#1d4ed8">A'</text>
          </svg>
          <figcaption class="text-xs text-gray-500 mt-1"><MathFormula formula="A'" /> (doplnok)</figcaption>
        </figure>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5">
        <p class="font-semibold text-blue-800 mb-2">Príklad 2: Operácie s množinami</p>
        <p class="text-gray-700 mb-3">
          Nech <MathFormula formula="A = \{1, 2, 3, 4, 5\}" /> a <MathFormula formula="B = \{3, 4, 5, 6, 7\}" />. Určte <MathFormula formula="A \cup B" /> a <MathFormula formula="A \cap B" />.
        </p>
        <div class="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Zjednotenie:</strong>
            <MathFormula display formula="A \cup B = \{1, 2, 3, 4, 5, 6, 7\}" />
            (všetky prvky z oboch množín, každý raz)
          </p>
          <p>
            <strong>Prienik:</strong>
            <MathFormula display formula="A \cap B = \{3, 4, 5\}" />
            (len prvky, ktoré sú v oboch množinách súčasne)
          </p>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 3: Intervaly ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Intervaly</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Interval</strong> je súvislá podmnožina reálnych čísel medzi dvoma hranicami <em>a</em> a <em>b</em>.
        Podľa toho, či sú hranice zahrnuté, rozlišujeme:
      </p>

      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-blue-500 text-white">
              <th class="px-4 py-3 text-left font-semibold">Typ</th>
              <th class="px-4 py-3 text-left font-semibold">Zápis</th>
              <th class="px-4 py-3 text-left font-semibold">Podmienka</th>
              <th class="px-4 py-3 text-left font-semibold">Graf</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium">Otvorený</td>
              <td class="px-4 py-3"><MathFormula formula="(a,\, b)" /></td>
              <td class="px-4 py-3"><MathFormula formula="a < x < b" /></td>
              <td class="px-4 py-3 text-gray-500">○———○ (bez krajných bodov)</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium">Uzavretý</td>
              <td class="px-4 py-3"><MathFormula formula="\langle a,\, b \rangle" /></td>
              <td class="px-4 py-3"><MathFormula formula="a \leq x \leq b" /></td>
              <td class="px-4 py-3 text-gray-500">●———● (vrátane krajných bodov)</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium">Zľava otvorený</td>
              <td class="px-4 py-3"><MathFormula formula="(a,\, b\rangle" /></td>
              <td class="px-4 py-3"><MathFormula formula="a < x \leq b" /></td>
              <td class="px-4 py-3 text-gray-500">○———●</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium">Zľava uzavretý</td>
              <td class="px-4 py-3"><MathFormula formula="\langle a,\, b)" /></td>
              <td class="px-4 py-3"><MathFormula formula="a \leq x < b" /></td>
              <td class="px-4 py-3 text-gray-500">●———○</td>
            </tr>
            <tr class="bg-white hover:bg-blue-50 transition-colors">
              <td class="px-4 py-3 font-medium">Neohraničený</td>
              <td class="px-4 py-3"><MathFormula formula="(a,\, +\infty)" /></td>
              <td class="px-4 py-3"><MathFormula formula="x > a" /></td>
              <td class="px-4 py-3 text-gray-500">○———→</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ===== SEKCIA 4: Absolútna hodnota ===== -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Absolútna hodnota</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Absolútna hodnota</strong> čísla <MathFormula formula="x" /> (píšeme <MathFormula formula="|x|" />) udáva
        <em>vzdialenosť čísla x od nuly na číselnej osi</em>. Je vždy nezáporná.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <MathFormula display formula="|x| = \begin{cases} x & \text{ak } x \geq 0 \\ -x & \text{ak } x < 0 \end{cases}" />
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p class="font-semibold text-blue-700 mb-2">Rovnica s absolútnou hodnotou</p>
          <p class="text-sm text-gray-700 mb-2">
            Rovnica <MathFormula formula="|x| = 3" /> má dve riešenia:
          </p>
          <MathFormula display formula="|x| = 3 \;\Rightarrow\; x = 3 \;\text{alebo}\; x = -3" />
          <p class="text-xs text-gray-500 mt-1">Čísla 3 aj −3 sú vo vzdialenosti 3 od nuly.</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p class="font-semibold text-blue-700 mb-2">Nerovnica s absolútnou hodnotou</p>
          <p class="text-sm text-gray-700 mb-2">
            Nerovnica <MathFormula formula="|x| < 3" /> znamená:
          </p>
          <MathFormula display formula="|x| < 3 \;\Rightarrow\; -3 < x < 3" />
          <p class="text-xs text-gray-500 mt-1">Teda <MathFormula formula="x \in (-3,\, 3)" /></p>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5">
        <p class="font-semibold text-blue-800 mb-2">Príklad 3: Rovnica s absolútnou hodnotou</p>
        <p class="text-gray-700 mb-3">Riešte rovnicu <MathFormula formula="|2x - 4| = 6" />.</p>
        <div class="space-y-2 text-sm text-gray-700">
          <p>Rovnica <MathFormula formula="|A| = 6" /> má riešenie, keď <MathFormula formula="A = 6" /> alebo <MathFormula formula="A = -6" />.</p>
          <p><strong>Prípad 1:</strong> <MathFormula formula="2x - 4 = 6 \;\Rightarrow\; 2x = 10 \;\Rightarrow\; x = 5" /></p>
          <p><strong>Prípad 2:</strong> <MathFormula formula="2x - 4 = -6 \;\Rightarrow\; 2x = -2 \;\Rightarrow\; x = -1" /></p>
          <p class="font-medium pt-1">Riešenia: <MathFormula formula="x_1 = 5,\quad x_2 = -1" /></p>
          <p class="text-gray-500">Skúška: <MathFormula formula="|2 \cdot 5 - 4| = |6| = 6\;\checkmark,\quad |2 \cdot (-1) - 4| = |-6| = 6\;\checkmark" /></p>
        </div>
      </div>
    </section>

    <!-- ===== ZHRNUTIE ===== -->
    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">→</span><span>Číselné obory: <MathFormula formula="\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}" />, iracionálne čísla (<MathFormula formula="\mathbb{I}" />) sú súčasťou <MathFormula formula="\mathbb{R}" />, ale nie <MathFormula formula="\mathbb{Q}" />.</span></li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">→</span><span>Racionálne čísla majú <strong>konečný alebo periodický</strong> desatinný rozvoj; iracionálne sú <strong>nekonečné neperiodické</strong>.</span></li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">→</span><span>Množina = súbor prvkov; základné operácie: <MathFormula formula="A \cup B" /> (zjednotenie), <MathFormula formula="A \cap B" /> (prienik), <MathFormula formula="A'" /> (doplnok).</span></li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">→</span><span>Intervalový zápis: otvorená zátvorka <MathFormula formula="(" /> = bod <em>nezahrnutý</em>; ostrá zátvorka <MathFormula formula="\langle" /> = bod <em>zahrnutý</em>.</span></li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">→</span><span>Absolútna hodnota: <MathFormula formula="|x|" /> = vzdialenosť od nuly; <MathFormula formula="|x| = k \;\Rightarrow\; x = k \text{ alebo } x = -k" />.</span></li>
      </ul>
    </section>

    <!-- ===== KVÍZ ===== -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz: Otestuj sa</h2>

      <Transition name="fade" mode="out-in">
        <div v-if="!quizFinished" :key="currentQ" class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <!-- Progress -->
          <div data-testid="quiz-progress" class="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <span>Skóre: {{ quizScore }}</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
            <div
              class="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQ) / quiz.length) * 100}%` }"
            />
          </div>

          <!-- Question -->
          <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5">
            {{ currentQuestion.question }}
          </p>

          <!-- Options -->
          <div class="space-y-3 mb-4">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`quiz-option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              :class="[
                'w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150',
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                  : i === currentQuestion.correctIndex
                  ? 'border-green-500 bg-green-50 text-green-800 cursor-default'
                  : selectedAnswer === i
                  ? 'border-red-400 bg-red-50 text-red-800 cursor-default'
                  : 'border-gray-200 bg-gray-50 text-gray-400 cursor-default',
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
                'rounded-xl px-4 py-3 text-sm mb-4',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200',
              ]"
            >
              <strong>{{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nie je to tak.' }}</strong>
              {{ currentQuestion.explanation }}
            </div>
          </Transition>

          <!-- Next button -->
          <button
            v-if="selectedAnswer !== null"
            data-testid="quiz-next-btn"
            type="button"
            class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>

        <!-- Result -->
        <div v-else data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
          <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
          <p class="text-2xl font-extrabold text-gray-800 mb-1">{{ scoreMessage }}</p>
          <p data-testid="quiz-score" class="text-gray-500 mb-6">
            Dosiahol si <strong>{{ quizScore }} z {{ quiz.length }}</strong> bodov.
          </p>
          <button
            data-testid="quiz-reset-btn"
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-2.5 rounded-xl transition-colors"
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

useHead({
  title: 'Čísla a množiny | Matematika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Číselné obory N, Z, Q, R, I, vzťahy medzi nimi, množiny, operácie, intervaly a absolútna hodnota. Interaktívny výklad pre gymnazistov.',
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
    question: 'Ktoré z nasledujúcich čísel je iracionálne?',
    options: ['0,333…  (teda 1/3)', '√9', 'π', '−7'],
    correctIndex: 2,
    explanation: 'π ≈ 3,14159… má nekonečný neperiodický desatinný rozvoj, preto je iracionálne. √9 = 3 je prirodzené, 1/3 je racionálne, −7 je celé.',
  },
  {
    question: 'Ktorý vzťah medzi číselnými obormi je správny?',
    options: ['ℚ ⊂ ℤ ⊂ ℕ', 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', 'ℝ ⊂ ℚ ⊂ ℤ', 'ℤ ⊂ ℕ ⊂ ℚ'],
    correctIndex: 1,
    explanation: 'Správne poradie inklúzie je ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — každý väčší obor obsahuje predchádzajúci.',
  },
  {
    question: 'Nech A = {2, 4, 6, 8} a B = {4, 6, 10}. Čo je A ∩ B?',
    options: ['{2, 4, 6, 8, 10}', '{4, 6}', '{2, 8, 10}', '{}'],
    correctIndex: 1,
    explanation: 'Prienik obsahuje len prvky, ktoré sú súčasne v A aj B. Také sú 4 a 6.',
  },
  {
    question: 'Ktorý zápis intervalu zodpovedá podmienke −2 ≤ x < 5?',
    options: ['(−2, 5)', '⟨−2, 5⟩', '⟨−2, 5)', '(−2, 5⟩'],
    correctIndex: 2,
    explanation: '−2 je zahrnuté (≤), preto ostrá zátvorka ⟨ zľava; 5 nie je zahrnuté (<), preto guľatá zátvorka ) sprava. Výsledok: ⟨−2, 5).',
  },
  {
    question: 'Koľko riešení má rovnica |x − 1| = 4?',
    options: ['Žiadne', 'Jedno: x = 5', 'Dve: x = 5 alebo x = −3', 'Nekonečne veľa'],
    correctIndex: 2,
    explanation: '|x − 1| = 4 → x − 1 = 4 (x = 5) alebo x − 1 = −4 (x = −3). Rovnica má dve riešenia.',
  },
  {
    question: 'Číslo 2,454545… (periodické) patrí do oboru:',
    options: ['Len do ℝ', 'ℚ (racionálne)', 'ℤ (celé)', 'ℕ (prirodzené)'],
    correctIndex: 1,
    explanation: 'Periodický desatinný rozvoj je znakom racionálneho čísla. 2,454545… = 27/11 ∈ ℚ. Patrí teda aj do ℝ, ale najvlastnejší obor je ℚ.',
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
