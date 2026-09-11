<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/logika-a-dokazovanie" class="hover:text-blue-600 transition-colors">Logika, dôkazy a postupnosti</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Postupnosti a rady</span>
    </nav>

    <!-- Title -->
    <h1 class="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
      <span>🔄</span>
      <span>Postupnosti a rady</span>
    </h1>

    <!-- Intro -->
    <p class="text-lg text-gray-600 mb-10 leading-relaxed">
      <strong>Postupnosť</strong> je usporiadaný zoznam čísel, kde každému prirodzenému číslu
      <MathFormula formula="n" /> priraďujeme práve jedno reálne číslo — <em>n-tý člen</em>
      <MathFormula formula="a_n" />. Postupnosti sú základom pre pochopenie
      <strong>radov</strong> (nekonečných súčtov), konvergencie a mnohých aplikácií
      v prírodných vedách aj financiách.
    </p>

    <!-- ============================
         SEKCIA 1: Základné pojmy
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">1. Základné pojmy a vlastnosti postupností</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Formálne je postupnosť <strong>funkcia</strong>
        <MathFormula formula="a : \mathbb{N} \to \mathbb{R}" />, ktorú zapisujeme ako
        <MathFormula formula="(a_n)_{n=1}^{\infty}" /> alebo skrátene <MathFormula formula="(a_n)" />.
        Prvý člen je <MathFormula formula="a_1" />, druhý <MathFormula formula="a_2" /> atď.
      </p>

      <!-- Vlastnosti -->
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Rastúca postupnosť</h3>
          <p class="text-gray-700 text-sm leading-relaxed mb-2">
            <MathFormula formula="a_{n+1} > a_n" /> pre každé <MathFormula formula="n \in \mathbb{N}" />.
          </p>
          <p class="text-gray-500 text-sm italic">Príklad: 1, 3, 5, 7, 9, … (nepárne čísla)</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Klesajúca postupnosť</h3>
          <p class="text-gray-700 text-sm leading-relaxed mb-2">
            <MathFormula formula="a_{n+1} < a_n" /> pre každé <MathFormula formula="n \in \mathbb{N}" />.
          </p>
          <p class="text-gray-500 text-sm italic">Príklad: 10, 5, 2,5, 1,25, … (delíme 2)</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Ohraničená postupnosť</h3>
          <p class="text-gray-700 text-sm leading-relaxed mb-2">
            Existuje <MathFormula formula="M > 0" /> také, že
            <MathFormula formula="|a_n| \leq M" /> pre všetky <MathFormula formula="n" />.
          </p>
          <p class="text-gray-500 text-sm italic">Príklad: 1, −1, 1, −1, … (ohraničená, ale nekonvergentná)</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 text-lg mb-2">Konvergentná postupnosť</h3>
          <p class="text-gray-700 text-sm leading-relaxed mb-2">
            Má <strong>limitu</strong>: <MathFormula formula="\lim_{n \to \infty} a_n = L" />.
            Členy sa blížia k číslu <MathFormula formula="L" />.
          </p>
          <p class="text-gray-500 text-sm italic">Príklad: 1, 1/2, 1/3, 1/4, … → limita 0</p>
        </div>
      </div>

      <!-- Rekurentná postupnosť -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
        <h3 class="font-bold text-gray-800 text-lg mb-2">Rekurentná postupnosť — Fibonacciho čísla</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">
          Niektoré postupnosti definujeme <strong>rekurentne</strong> — každý člen vyjadrujeme
          pomocou predchádzajúcich. Slávnym príkladom je Fibonacciho postupnosť:
        </p>
        <MathFormula display formula="a_1 = 1, \quad a_2 = 1, \quad a_n = a_{n-1} + a_{n-2} \text{ pre } n \geq 3" />
        <p class="text-gray-600 text-sm mt-3">
          Prvých 10 členov: <strong>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …</strong>
          Fibonacciho čísla sa vyskytujú v prírode (listy, šišky, slnečnice) aj v informatike.
        </p>
      </div>
    </section>

    <!-- ============================
         SEKCIA 2: Aritmetická postupnosť
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">2. Aritmetická postupnosť</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Aritmetická postupnosť je taká, kde každé dva susedné členy majú rovnaký rozdiel
        <MathFormula formula="d" /> (nazývaný <strong>diferencia</strong>):
        <MathFormula formula="a_{n+1} - a_n = d" />.
      </p>

      <!-- Vzorce -->
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">n-tý člen</h3>
          <MathFormula display formula="a_n = a_1 + (n-1) \cdot d" />
          <p class="text-gray-600 text-sm mt-2">kde <MathFormula formula="a_1" /> je prvý člen a <MathFormula formula="d" /> je diferencia.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Súčet prvých n členov</h3>
          <MathFormula display formula="S_n = \frac{n \cdot (a_1 + a_n)}{2}" />
          <p class="text-gray-600 text-sm mt-2">alebo ekvivalentne: <MathFormula formula="S_n = \frac{n}{2}(2a_1 + (n-1)d)" /></p>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 1: Aritmetická postupnosť 3, 7, 11, 15, …
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>Diferencia:</strong> <MathFormula formula="d = 7 - 3 = 4" />
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>10. člen:</strong> <MathFormula formula="a_{10} = 3 + (10-1) \cdot 4 = 3 + 36 = 39" />
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>Súčet prvých 10 členov:</strong>
        </p>
        <MathFormula display formula="S_{10} = \frac{10 \cdot (3 + 39)}{2} = \frac{10 \cdot 42}{2} = 5 \cdot 42 = 210" />
        <p class="text-gray-500 text-sm mt-1">Overenie: 3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 + 35 + 39 = 210 ✓</p>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 2: Gaussov trik — súčet 1 + 2 + 3 + … + 100
        </p>
        <p class="text-gray-700 text-sm mb-2">
          Ide o aritmetickú postupnosť s <MathFormula formula="a_1 = 1" />,
          <MathFormula formula="d = 1" />, <MathFormula formula="n = 100" />.
        </p>
        <MathFormula display formula="S_{100} = \frac{100 \cdot (1 + 100)}{2} = \frac{100 \cdot 101}{2} = 5\,050" />
        <p class="text-gray-500 text-sm mt-2">
          Legendárne — takto vraj vypočítal výsledok desaťročný Gauss v škole za pár sekúnd.
        </p>
      </div>
    </section>

    <!-- ============================
         SEKCIA 3: Geometrická postupnosť a rady
         ============================ -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">3. Geometrická postupnosť a nekonečné rady</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Geometrická postupnosť je taká, kde každé dva susedné členy majú rovnaký
        <strong>kvocient</strong> <MathFormula formula="q" />:
        <MathFormula formula="\frac{a_{n+1}}{a_n} = q" /> (kde <MathFormula formula="a_n \neq 0" />).
      </p>

      <!-- Vzorce -->
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">n-tý člen</h3>
          <MathFormula display formula="a_n = a_1 \cdot q^{n-1}" />
          <p class="text-gray-600 text-sm mt-2">kde <MathFormula formula="a_1" /> je prvý člen a <MathFormula formula="q" /> je kvocient.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Súčet prvých n členov</h3>
          <MathFormula display formula="S_n = a_1 \cdot \frac{1 - q^n}{1 - q} \quad (q \neq 1)" />
          <p class="text-gray-600 text-sm mt-2">Pre <MathFormula formula="q = 1" />: <MathFormula formula="S_n = n \cdot a_1" /></p>
        </div>
      </div>

      <!-- Nekonečný geometrický rad -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="font-bold text-blue-800 text-lg mb-3">Nekonečný geometrický rad</h3>
        <p class="text-gray-700 text-sm mb-3 leading-relaxed">
          Ak <MathFormula formula="|q| < 1" />, súčet nekonečného geometrického radu
          <strong>konverguje</strong> (má konečnú hodnotu):
        </p>
        <MathFormula display formula="S = \sum_{k=1}^{\infty} a_k = \frac{a_1}{1 - q} \quad \text{pre } |q| < 1" />
        <p class="text-gray-700 text-sm mt-3">
          Ak <MathFormula formula="|q| \geq 1" />, rad <strong>diverguje</strong> — čiastočné súčty rastú donekonečna (alebo kmitajú).
        </p>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-4">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 3: Geometrická postupnosť 2, 6, 18, 54, …
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>Kvocient:</strong> <MathFormula formula="q = 6/2 = 3" />
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>8. člen:</strong> <MathFormula formula="a_8 = 2 \cdot 3^{8-1} = 2 \cdot 3^7 = 2 \cdot 2187 = 4374" />
        </p>
        <p class="text-gray-700 text-sm mb-1">
          <strong>Súčet prvých 5 členov:</strong>
        </p>
        <MathFormula display formula="S_5 = 2 \cdot \frac{1 - 3^5}{1 - 3} = 2 \cdot \frac{1 - 243}{-2} = 2 \cdot 121 = 242" />
        <p class="text-gray-500 text-sm mt-1">Overenie: 2 + 6 + 18 + 54 + 162 = 242 ✓</p>
      </div>

      <!-- Príklad 4 — nekonečný rad + SVG -->
      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-6">
        <p class="font-semibold text-blue-800 mb-3">
          Príklad 4: Nekonečný rad
          <MathFormula formula="1 + \tfrac{1}{2} + \tfrac{1}{4} + \tfrac{1}{8} + \cdots" />
        </p>
        <p class="text-gray-700 text-sm mb-2">
          Tu <MathFormula formula="a_1 = 1" />, <MathFormula formula="q = \tfrac{1}{2}" />,
          teda <MathFormula formula="|q| = \tfrac{1}{2} < 1" /> — rad konverguje:
        </p>
        <MathFormula display formula="S = \frac{1}{1 - \tfrac{1}{2}} = \frac{1}{\tfrac{1}{2}} = 2" />
        <p class="text-gray-600 text-sm mt-2">
          Grafický dôkaz konvergencie vidíte na ilustrácii nižšie — súčet plôch sa blíži k ploche celého štvorca.
        </p>
      </div>

      <!-- SVG: grafický dôkaz 1 + 1/2 + 1/4 + ... = 2 -->
      <div class="flex justify-center mb-6">
        <svg
          role="img"
          aria-label="Grafický dôkaz konvergencie geometrickej rady 1 + 1/2 + 1/4 + ... = 2: štvorec rozdelený na polovice."
          viewBox="0 0 520 300"
          class="w-full max-w-xl h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#cbd5e1" stroke-width="1"/>
            </pattern>
          </defs>

          <!-- Background -->
          <rect x="10" y="10" width="500" height="280" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

          <!-- Title -->
          <text x="260" y="38" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">
            Grafický dôkaz: 1 + ½ + ¼ + ⅛ + … = 2
          </text>

          <!-- Two unit squares side by side (each 100×100), centered -->
          <!-- Left square: value = 1 (fully filled) -->
          <rect x="70" y="60" width="160" height="160" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="150" y="148" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="white">1</text>

          <!-- Right square: progressively halved, starting with 1/2 -->
          <!-- Half = top half of right square (filled) -->
          <rect x="250" y="60" width="160" height="80" rx="0" fill="#60a5fa" stroke="#3b82f6" stroke-width="1"/>
          <text x="330" y="104" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="white">½</text>

          <!-- Quarter = top-right of bottom half -->
          <rect x="330" y="140" width="80" height="80" rx="0" fill="#93c5fd" stroke="#3b82f6" stroke-width="1"/>
          <text x="370" y="184" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af">¼</text>

          <!-- Eighth = bottom-left of remaining quarter -->
          <rect x="250" y="180" width="80" height="40" rx="0" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
          <text x="290" y="204" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e40af">⅛</text>

          <!-- 1/16 = top portion of remaining eighth -->
          <rect x="250" y="140" width="80" height="40" rx="0" fill="#dbeafe" stroke="#3b82f6" stroke-width="0.8"/>
          <text x="290" y="162" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#3b82f6">1/16</text>

          <!-- Remaining (hatched) -->
          <rect x="330" y="220" width="80" height="20" rx="0" fill="url(#hatch)" stroke="#94a3b8" stroke-width="0.8"/>
          <text x="370" y="232" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#94a3b8">…</text>

          <!-- Border around right square -->
          <rect x="250" y="60" width="160" height="160" rx="4" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>

          <!-- Labels below squares -->
          <text x="150" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#374151">Plná plocha = 1</text>
          <text x="330" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#374151">Delená plocha → 1</text>

          <!-- Arrow + sum label -->
          <line x1="70" y1="258" x2="410" y2="258" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,2"/>
          <text x="240" y="278" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">
            Celková plocha = 1 + 1 = 2  ✓
          </text>
        </svg>
      </div>

      <!-- Sigma notácia -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
        <h3 class="font-bold text-gray-800 text-lg mb-3">Sigma notácia</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-3">
          Súčet členov postupnosti zapisujeme pomocou gréckeho písmena <strong>Σ (sigma)</strong>:
        </p>
        <MathFormula display formula="\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \cdots + a_n" />
        <p class="text-gray-700 text-sm mt-3 mb-2">
          Dolný index (<MathFormula formula="k=1" />) je začiatočná hodnota, horný index
          (<MathFormula formula="n" />) je konečná. Nekonečný súčet:
        </p>
        <MathFormula display formula="\sum_{k=1}^{\infty} a_k = \lim_{n \to \infty} S_n" />
        <p class="text-gray-600 text-sm mt-2">
          Príklady: <MathFormula formula="\displaystyle\sum_{k=1}^{5} k^2 = 1 + 4 + 9 + 16 + 25 = 55" /> &emsp;
          <MathFormula formula="\displaystyle\sum_{k=0}^{\infty} \!\left(\tfrac{1}{2}\right)^k = 2" />
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
          <span>
            <strong>Postupnosť</strong> je funkcia <MathFormula formula="\mathbb{N} \to \mathbb{R}" />;
            môže byť rastúca, klesajúca, ohraničená, konvergentná.
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span>
            <strong>Aritmetická postupnosť</strong>: <MathFormula formula="a_n = a_1 + (n-1)d" />,
            súčet <MathFormula formula="S_n = \tfrac{n(a_1+a_n)}{2}" />.
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span>
            <strong>Geometrická postupnosť</strong>: <MathFormula formula="a_n = a_1 \cdot q^{n-1}" />,
            súčet <MathFormula formula="S_n = a_1\tfrac{1-q^n}{1-q}" /> (pre <MathFormula formula="q \neq 1" />).
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span>
            <strong>Nekonečný geometrický rad</strong> konverguje pre <MathFormula formula="|q| < 1" />:
            <MathFormula formula="S = \tfrac{a_1}{1-q}" />.
            Klasický príklad: <MathFormula formula="1 + \tfrac{1}{2} + \tfrac{1}{4} + \cdots = 2" />.
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span>
            <strong>Sigma notácia</strong>: <MathFormula formula="\sum_{k=1}^{n} a_k" /> — skrátený zápis súčtu.
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-blue-500 font-bold mt-0.5">•</span>
          <span>
            <strong>Rekurentná postupnosť</strong> (napr. Fibonacci): každý člen závisí od predchádzajúcich.
            <MathFormula formula="a_n = a_{n-1} + a_{n-2}" />, <MathFormula formula="a_1 = a_2 = 1" />.
          </span>
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
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
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
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-300 text-green-800'
              : 'bg-red-50 border border-red-300 text-red-800'"
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
    question: 'Aký je vzorec pre n-tý člen aritmetickej postupnosti?',
    options: [
      'aₙ = a₁ · qⁿ⁻¹',
      'aₙ = a₁ + (n − 1) · d',
      'aₙ = a₁ / (1 − q)',
      'aₙ = n · (a₁ + aₙ) / 2',
    ],
    correctIndex: 1,
    explanation: 'n-tý člen aritmetickej postupnosti je aₙ = a₁ + (n − 1) · d, kde d je diferencia (spoločný rozdiel susedných členov).',
  },
  {
    question: 'Aký je súčet prvých 50 prirodzených čísel (1 + 2 + 3 + … + 50)?',
    options: [
      '1 250',
      '1 275',
      '2 550',
      '2 500',
    ],
    correctIndex: 1,
    explanation: 'Použijeme vzorec Sₙ = n·(a₁ + aₙ)/2 = 50·(1 + 50)/2 = 50·51/2 = 1 275.',
  },
  {
    question: 'Geometrická postupnosť má prvý člen a₁ = 3 a kvocient q = 2. Čo je 5. člen?',
    options: [
      '24',
      '48',
      '36',
      '96',
    ],
    correctIndex: 1,
    explanation: 'a₅ = a₁ · q⁴ = 3 · 2⁴ = 3 · 16 = 48.',
  },
  {
    question: 'Pre akú podmienku konverguje nekonečný geometrický rad?',
    options: [
      'q > 0',
      'q < 1',
      '|q| < 1',
      'q ≠ 1',
    ],
    correctIndex: 2,
    explanation: 'Nekonečný geometrický rad konverguje práve vtedy, keď |q| < 1. Nestačí q < 1, lebo napr. pre q = −2 rad diverguje.',
  },
  {
    question: 'Čo vyjadruje sigma notácia ∑ₖ₌₁ⁿ aₖ?',
    options: [
      'Súčin členov a₁ · a₂ · … · aₙ.',
      'n-tý člen postupnosti.',
      'Súčet a₁ + a₂ + … + aₙ.',
      'Limitu postupnosti pre n → ∞.',
    ],
    correctIndex: 2,
    explanation: 'Sigma notácia ∑ₖ₌₁ⁿ aₖ je skrátený zápis súčtu a₁ + a₂ + … + aₙ. Index k prechádza od 1 do n.',
  },
  {
    question: 'Aké sú prvé štyri členy Fibonacciho postupnosti?',
    options: [
      '1, 2, 4, 8',
      '0, 1, 1, 2',
      '1, 1, 2, 3',
      '1, 2, 3, 5',
    ],
    correctIndex: 2,
    explanation: 'Fibonacciho postupnosť začína a₁ = 1, a₂ = 1, a každý ďalší člen je súčtom dvoch predchádzajúcich: a₃ = 2, a₄ = 3, a₅ = 5, …',
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
