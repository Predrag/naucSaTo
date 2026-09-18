<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/funkcie" class="hover:text-blue-600 transition-colors">Funkcie a grafy</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Základy funkcie</span>
    </nav>

    <!-- Title -->
    <h1 class="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
      📊 {{ activeTitle ?? 'Základy funkcie' }}
    </h1>
    <p class="text-gray-600 text-lg mb-10 leading-relaxed">
      Funkcia je jedným z najdôležitejších pojmov matematiky. Opisuje vzťah medzi dvoma veličinami —
      každému prvku z definičného oboru priraďuje práve jednu funkčnú hodnotu. Funkcie sa používajú
      všade: vo fyzike, ekonomike, informatike aj v bežnom živote.
    </p>

    <!-- ─── Section 1: Definícia a základné pojmy ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Definícia a základné pojmy</h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        <strong>Funkcia</strong> <MathFormula formula="f" /> je zobrazenie, ktoré každému prvku
        <MathFormula formula="x" /> z definičného oboru <MathFormula formula="D(f)" /> priraďuje
        práve jednu hodnotu <MathFormula formula="f(x)" /> z oboru hodnôt <MathFormula formula="H(f)" />.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-blue-800 mb-3">Základné pojmy:</h3>
        <ul class="space-y-2 text-gray-700">
          <li>
            <strong>Definičný obor D(f)</strong> — množina všetkých hodnôt
            <MathFormula formula="x" />, pre ktoré je funkcia definovaná
          </li>
          <li>
            <strong>Obor hodnôt H(f)</strong> — množina všetkých hodnôt, ktoré funkcia nadobúda
          </li>
          <li>
            <strong>Predpis funkcie</strong> — matematická formula, napr.
            <MathFormula formula="f(x) = x^2" />
          </li>
          <li>
            <strong>Funkčná hodnota</strong> — výsledok <MathFormula formula="f(x_0)" /> pre
            konkrétne <MathFormula formula="x_0 \in D(f)" />
          </li>
          <li>
            <strong>Graf funkcie</strong> — množina bodov
            <MathFormula formula="\{[x,\, f(x)] \mid x \in D(f)\}" /> v kartézskej súradnicovej
            sústave
          </li>
        </ul>
      </div>

      <!-- Example 1 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 1: Výpočet funkčnej hodnoty</h3>
        <p class="text-gray-700 mb-3">
          Nech <MathFormula formula="f(x) = 2x^2 - 3x + 1" />. Vypočítajte
          <MathFormula formula="f(2)" /> a <MathFormula formula="f(-1)" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="font-medium text-gray-700 mb-2">Riešenie:</p>
          <MathFormula display formula="f(2) = 2 \cdot 2^2 - 3 \cdot 2 + 1 = 8 - 6 + 1 = 3" />
          <MathFormula display formula="f(-1) = 2 \cdot (-1)^2 - 3 \cdot (-1) + 1 = 2 + 3 + 1 = 6" />
        </div>
      </div>

      <!-- SVG Illustration -->
      <div class="flex justify-center mb-3">
        <svg
          role="img"
          aria-label="Graf párnej funkcie y=x² (parabola, modrá) a nepárnej funkcie y=x³ (červená) v kartézskej súradnicovej sústave. Os y je osou súmernosti paraboly."
          viewBox="-125 -120 250 240"
          width="400"
          height="380"
          class="border border-gray-200 rounded-2xl bg-white shadow-sm"
        >
          <!-- Light grid -->
          <line x1="-110" y1="-100" x2="110" y2="-100" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="-110" y1="-50" x2="110" y2="-50" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="-110" y1="50" x2="110" y2="50" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="-110" y1="100" x2="110" y2="100" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="-100" y1="-110" x2="-100" y2="110" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="-50" y1="-110" x2="-50" y2="110" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="50" y1="-110" x2="50" y2="110" stroke="#e2e8f0" stroke-width="0.8" />
          <line x1="100" y1="-110" x2="100" y2="110" stroke="#e2e8f0" stroke-width="0.8" />

          <!-- Axes -->
          <line x1="-115" y1="0" x2="113" y2="0" stroke="#475569" stroke-width="1.5" />
          <line x1="0" y1="113" x2="0" y2="-113" stroke="#475569" stroke-width="1.5" />

          <!-- Axis arrows -->
          <polygon points="115,0 107,-4 107,4" fill="#475569" />
          <polygon points="0,-115 -4,-107 4,-107" fill="#475569" />

          <!-- Axis labels -->
          <text x="119" y="5" font-size="13" fill="#475569" font-family="serif" font-style="italic">x</text>
          <text x="5" y="-118" font-size="13" fill="#475569" font-family="serif" font-style="italic">y</text>
          <text x="-12" y="14" font-size="11" fill="#475569">O</text>

          <!-- Tick marks -->
          <line x1="50" y1="-4" x2="50" y2="4" stroke="#475569" stroke-width="1" />
          <line x1="-50" y1="-4" x2="-50" y2="4" stroke="#475569" stroke-width="1" />
          <line x1="100" y1="-4" x2="100" y2="4" stroke="#475569" stroke-width="1" />
          <line x1="-100" y1="-4" x2="-100" y2="4" stroke="#475569" stroke-width="1" />
          <line x1="-4" y1="-50" x2="4" y2="-50" stroke="#475569" stroke-width="1" />
          <line x1="-4" y1="50" x2="4" y2="50" stroke="#475569" stroke-width="1" />
          <line x1="-4" y1="-100" x2="4" y2="-100" stroke="#475569" stroke-width="1" />

          <!-- Tick labels -->
          <text x="46" y="16" font-size="10" fill="#64748b">1</text>
          <text x="-58" y="16" font-size="10" fill="#64748b">-1</text>
          <text x="96" y="16" font-size="10" fill="#64748b">2</text>
          <text x="-108" y="16" font-size="10" fill="#64748b">-2</text>
          <text x="5" y="-47" font-size="10" fill="#64748b">1</text>
          <text x="5" y="56" font-size="10" fill="#64748b">-1</text>
          <text x="5" y="-97" font-size="10" fill="#64748b">2</text>

          <!-- Parabola y = x² (blue) — 1 unit = 50px, SVG y inverted -->
          <!-- SVG_x = x*50, SVG_y = -(x²)*50 -->
          <polyline
            fill="none"
            stroke="#2563eb"
            stroke-width="2.5"
            stroke-linejoin="round"
            points="-110,-121 -100,-100 -90,-81 -80,-64 -70,-49 -60,-36 -50,-25 -40,-16 -30,-9 -20,-4 -10,-1 0,0 10,-1 20,-4 30,-9 40,-16 50,-25 60,-36 70,-49 80,-64 90,-81 100,-100 110,-121"
          />

          <!-- Cubic y = x³ (red) — 1 unit = 50px, y inverted -->
          <!-- SVG_y = -(x³)*50. At x=±1.26, y=±2 fits in range -->
          <polyline
            fill="none"
            stroke="#dc2626"
            stroke-width="2.5"
            stroke-linejoin="round"
            points="-110,121 -100,100 -90,72.9 -80,51.2 -70,34.3 -60,21.6 -50,12.5 -40,6.4 -30,2.7 -20,0.8 -10,0.1 0,0 10,-0.1 20,-0.8 30,-2.7 40,-6.4 50,-12.5 60,-21.6 70,-34.3 80,-51.2 90,-72.9 100,-100 110,-121"
          />

          <!-- Axis of symmetry (y-axis dashed annotation for parabola) -->
          <line x1="0" y1="-115" x2="0" y2="-25" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5" />
          <text x="6" y="-75" font-size="9" fill="#2563eb" opacity="0.75">os súmernosti</text>

          <!-- Function labels -->
          <text x="68" y="-56" font-size="12" fill="#2563eb" font-weight="bold">y = x²</text>
          <text x="62" y="68" font-size="12" fill="#dc2626" font-weight="bold">y = x³</text>
        </svg>
      </div>
      <p class="text-center text-sm text-gray-500 mb-4">
        Graf párnej funkcie <MathFormula formula="y = x^2" /> (modrá) a nepárnej
        <MathFormula formula="y = x^3" /> (červená)
      </p>
    </section>

    <!-- ─── Section 2: Vlastnosti funkcií ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Vlastnosti funkcií</h2>

      <!-- Monotónnosť + Ohraničenosť -->
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
          <h3 class="font-semibold text-green-800 mb-3">Monotónnosť</h3>
          <p class="text-gray-700 text-sm mb-1"><strong>Rastúca</strong> na intervale <MathFormula formula="I" />:</p>
          <MathFormula display formula="x_1 < x_2 \;\Rightarrow\; f(x_1) < f(x_2)" />
          <p class="text-gray-700 text-sm mt-3 mb-1"><strong>Klesajúca</strong> na intervale <MathFormula formula="I" />:</p>
          <MathFormula display formula="x_1 < x_2 \;\Rightarrow\; f(x_1) > f(x_2)" />
          <p class="text-gray-600 text-sm mt-2">Funkcia je <strong>monotónna</strong>, ak je buď rastúca alebo klesajúca na celom <MathFormula formula="D(f)" />.</p>
        </div>

        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5">
          <h3 class="font-semibold text-purple-800 mb-3">Ohraničenosť</h3>
          <p class="text-gray-700 text-sm mb-1"><strong>Ohraničená zdola</strong>: existuje <MathFormula formula="m" /> také, že</p>
          <MathFormula display formula="f(x) \geq m \quad \forall x \in D(f)" />
          <p class="text-gray-700 text-sm mt-3 mb-1"><strong>Ohraničená zhora</strong>: existuje <MathFormula formula="M" /> také, že</p>
          <MathFormula display formula="f(x) \leq M \quad \forall x \in D(f)" />
        </div>
      </div>

      <!-- Nulové body -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Nulové body a priesečníky s osami</h3>
        <p class="text-gray-700 mb-3">
          <strong>Nulový bod</strong> funkcie <MathFormula formula="f" /> je také číslo
          <MathFormula formula="x_0 \in D(f)" />, pre ktoré platí <MathFormula formula="f(x_0) = 0" />.
          Geometricky sú to priesečníky grafu s osou <MathFormula formula="x" />.
          Priesečník grafu s osou <MathFormula formula="y" /> sa určí dosadením <MathFormula formula="x = 0" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="font-medium text-gray-700 mb-2">
            Príklad: Nulové body <MathFormula formula="f(x) = x^2 - 4" />
          </p>
          <MathFormula display formula="x^2 - 4 = 0 \implies x^2 = 4 \implies x_{1,2} = \pm 2" />
          <p class="text-gray-600 text-sm mt-1">
            Nulové body sú <MathFormula formula="x_1 = -2" /> a <MathFormula formula="x_2 = 2" />.
            Priesečník s osou <MathFormula formula="y" />: <MathFormula formula="f(0) = -4" />.
          </p>
        </div>
      </div>

      <!-- Example 2 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Príklad 2: Maximum a minimum na intervale</h3>
        <p class="text-gray-700 mb-3">
          Nájdite maximum a minimum funkcie <MathFormula formula="f(x) = -x^2 + 4x - 3" />
          na intervale <MathFormula formula="\langle 0,\, 4 \rangle" />.
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="font-medium text-gray-700 mb-2">Riešenie:</p>
          <p class="text-gray-700 mb-1">Vrchol paraboly (ramená smerujú dolu, <MathFormula formula="a = -1" />):</p>
          <MathFormula display formula="x_v = -\frac{b}{2a} = -\frac{4}{2 \cdot (-1)} = 2" />
          <MathFormula display formula="f(2) = -(4) + 8 - 3 = 1 \quad \Rightarrow \textbf{ maximum} = 1" />
          <p class="text-gray-700 mb-1">Hodnoty na hraniciach intervalu:</p>
          <MathFormula display formula="f(0) = -3, \quad f(4) = -16 + 16 - 3 = -3 \quad \Rightarrow \textbf{ minimum} = -3" />
        </div>
      </div>
    </section>

    <!-- ─── Section 3: Párne, nepárne a periodické funkcie ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">3. Párne, nepárne a periodické funkcie</h2>

      <div class="grid md:grid-cols-3 gap-5 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-2">Párna funkcia</h3>
          <p class="text-gray-700 text-sm mb-2">
            Súmerná podľa osi <MathFormula formula="y" />:
          </p>
          <MathFormula display formula="f(-x) = f(x)" />
          <p class="text-gray-600 text-sm mt-2">
            Príklady: <MathFormula formula="x^2" />, <MathFormula formula="x^4" />,
            <MathFormula formula="\cos x" />
          </p>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h3 class="font-semibold text-red-800 mb-2">Nepárna funkcia</h3>
          <p class="text-gray-700 text-sm mb-2">
            Stredová súmernosť podľa <MathFormula formula="O" />:
          </p>
          <MathFormula display formula="f(-x) = -f(x)" />
          <p class="text-gray-600 text-sm mt-2">
            Príklady: <MathFormula formula="x^3" />, <MathFormula formula="x" />,
            <MathFormula formula="\sin x" />
          </p>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h3 class="font-semibold text-yellow-800 mb-2">Periodická funkcia</h3>
          <p class="text-gray-700 text-sm mb-2">
            Opakuje sa s periódou <MathFormula formula="T > 0" />:
          </p>
          <MathFormula display formula="f(x + T) = f(x)" />
          <p class="text-gray-600 text-sm mt-2">
            Príklad: <MathFormula formula="\sin x" /> s <MathFormula formula="T = 2\pi" />
          </p>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 class="font-semibold text-gray-800 mb-3">Overenie párnosti / nepárnosti</h3>
        <p class="text-gray-700 mb-3">
          Postup: dosadíme <MathFormula formula="-x" /> a zistíme, či dostaneme
          <MathFormula formula="f(x)" /> (párna) alebo <MathFormula formula="-f(x)" /> (nepárna),
          prípadne ani jedno (ani párna, ani nepárna).
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="font-medium text-gray-700 mb-2">
            Príklad: Je <MathFormula formula="f(x) = x^4 - 2x^2 + 1" /> párna?
          </p>
          <MathFormula display formula="f(-x) = (-x)^4 - 2(-x)^2 + 1 = x^4 - 2x^2 + 1 = f(x) \;\checkmark" />
          <p class="text-gray-600 text-sm mt-1">Áno, funkcia je <strong>párna</strong>.</p>
        </div>
      </div>
    </section>

    <!-- ─── Section 4: Zložená a inverzná funkcia ─── -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">4. Zložená a inverzná funkcia</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <h3 class="font-semibold text-indigo-800 mb-2">Zložená funkcia <MathFormula formula="f \circ g" /></h3>
          <MathFormula display formula="(f \circ g)(x) = f\!\left(g(x)\right)" />
          <p class="text-gray-700 text-sm mt-3 mb-2">
            Najskôr sa aplikuje <MathFormula formula="g" />, výsledok sa dosadí do <MathFormula formula="f" />.
            Pozor: <MathFormula formula="f \circ g \neq g \circ f" /> vo všeobecnosti.
          </p>
          <div class="bg-white rounded-xl p-3 mt-2">
            <p class="text-gray-600 text-sm">
              <strong>Príklad:</strong> <MathFormula formula="g(x) = x + 1" />,
              <MathFormula formula="f(x) = x^2" />:
            </p>
            <MathFormula display formula="(f \circ g)(x) = f(x+1) = (x+1)^2" />
          </div>
        </div>

        <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5">
          <h3 class="font-semibold text-teal-800 mb-2">Inverzná funkcia <MathFormula formula="f^{-1}" /></h3>
          <p class="text-gray-700 text-sm mb-2">
            Existuje iba pre <strong>prosté funkcie</strong> (rôznym <MathFormula formula="x" />
            zodpovedajú rôzne <MathFormula formula="f(x)" />).
          </p>
          <MathFormula display formula="f^{-1}(y) = x \;\iff\; f(x) = y" />
          <p class="text-gray-600 text-sm mt-2">
            Graf <MathFormula formula="f^{-1}" /> je súmerný s grafom <MathFormula formula="f" />
            podľa priamky <MathFormula formula="y = x" />.
          </p>
          <div class="bg-white rounded-xl p-3 mt-2">
            <p class="text-gray-600 text-sm">
              <strong>Príklad:</strong> Pre <MathFormula formula="f(x) = 2x + 3" />:<br>
              <MathFormula formula="y = 2x + 3 \;\Rightarrow\; f^{-1}(x) = \tfrac{x-3}{2}" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Zhrnutie ─── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700">
        <li>
          • <strong>Funkcia</strong> priraďuje každému <MathFormula formula="x \in D(f)" />
          práve jednu hodnotu <MathFormula formula="f(x) \in H(f)" />.
        </li>
        <li>
          • <strong>Rastúca</strong>: väčší argument → väčšia hodnota;
          <strong>klesajúca</strong>: väčší argument → menšia hodnota.
        </li>
        <li>
          • <strong>Párna</strong>: <MathFormula formula="f(-x) = f(x)" />
          (os súmernosti je os <MathFormula formula="y" />);
          <strong>nepárna</strong>: <MathFormula formula="f(-x) = -f(x)" />
          (stredová súmernosť podľa <MathFormula formula="O" />).
        </li>
        <li>
          • <strong>Periodická</strong> s periódou <MathFormula formula="T" />:
          <MathFormula formula="f(x+T) = f(x)" /> pre všetky <MathFormula formula="x \in D(f)" />.
        </li>
        <li>
          • <strong>Nulové body</strong> sú hodnoty <MathFormula formula="x_0" />, kde
          <MathFormula formula="f(x_0) = 0" /> (priesečníky grafu s osou <MathFormula formula="x" />).
        </li>
        <li>
          • <strong>Zložená funkcia</strong>:
          <MathFormula formula="(f \circ g)(x) = f(g(x))" />.
        </li>
        <li>
          • <strong>Inverzná funkcia</strong> <MathFormula formula="f^{-1}" /> existuje
          iba pre prosté funkcie; jej graf je súmerný s grafom <MathFormula formula="f" />
          podľa <MathFormula formula="y = x" />.
        </li>
      </ul>
    </div>

    <!-- ─── Kvíz ─── -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz: Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="text-sm text-gray-500 mb-4">
          Otázka {{ currentQ + 1 }} / {{ activeQuiz.length }}
          <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQ + 1) / activeQuiz.length) * 100}%` }"
            />
          </div>
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
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            :class="optionClass(i)"
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
            class="rounded-xl p-4 mb-4 text-sm"
            :class="
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            "
          >
            <strong>
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
            </strong>
            {{ currentQuestion.explanation }}
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="quiz-next-btn"
          type="button"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < activeQuiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <Transition name="fade">
        <div
          v-if="quizFinished"
          data-testid="quiz-result"
          class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center"
        >
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="quiz-score" class="text-gray-600 mb-6">
            Správne odpovede: <strong>{{ quizScore }}</strong> / {{ activeQuiz.length }}
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
    question: 'Čo je definičný obor D(f) funkcie?',
    options: [
      'Množina všetkých hodnôt, ktoré funkcia nadobúda',
      'Množina všetkých hodnôt x, pre ktoré je funkcia definovaná',
      'Graf funkcie v súradnicovej sústave',
      'Predpis funkcie'
    ],
    correctIndex: 1,
    explanation:
      'Definičný obor D(f) je množina všetkých hodnôt argumentu x, pre ktoré je funkcia definovaná (má zmysel).'
  },
  {
    question: 'Akú podmienku spĺňa párna funkcia?',
    options: [
      'f(−x) = −f(x)',
      'f(x + T) = f(x)',
      'f(−x) = f(x)',
      'f(x₁) < f(x₂) pre x₁ < x₂'
    ],
    correctIndex: 2,
    explanation:
      'Párna funkcia spĺňa f(−x) = f(x). Jej graf je súmerný podľa osi y. Nepárna funkcia spĺňa f(−x) = −f(x).'
  },
  {
    question: 'Aká je funkčná hodnota f(3) pre f(x) = x² − 2x + 1?',
    options: ['4', '6', '10', '2'],
    correctIndex: 0,
    explanation: 'f(3) = 3² − 2·3 + 1 = 9 − 6 + 1 = 4.'
  },
  {
    question: 'Čo sú nulové body funkcie?',
    options: [
      'Body, kde funkcia nadobúda minimum',
      'Priesečníky grafu funkcie s osou y',
      'Hodnoty x, pre ktoré f(x) = 0',
      'Body, kde funkcia nie je definovaná'
    ],
    correctIndex: 2,
    explanation:
      'Nulové body sú hodnoty x₀ ∈ D(f), pre ktoré f(x₀) = 0. Geometricky sú to priesečníky grafu s osou x.'
  },
  {
    question: 'Pre aké funkcie existuje inverzná funkcia f⁻¹?',
    options: [
      'Pre všetky funkcie',
      'Iba pre párne funkcie',
      'Iba pre prosté (injektívne) funkcie',
      'Iba pre periodické funkcie'
    ],
    correctIndex: 2,
    explanation:
      'Inverzná funkcia existuje iba pre prosté funkcie — také, kde rôznym hodnotám x zodpovedajú rôzne hodnoty f(x).'
  },
  {
    question: 'Ak g(x) = x + 2 a f(x) = x², čo je (f∘g)(x)?',
    options: ['x² + 2', '(x + 2)²', 'x² · (x + 2)', '2x²'],
    correctIndex: 1,
    explanation:
      '(f∘g)(x) = f(g(x)) = f(x + 2) = (x + 2)². Najskôr aplikujeme g, výsledok dosadíme do f.'
  }
]

const { locale } = useI18n()

const titleRu = 'Основы функции'
const titleUk = 'Основи функції'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

const quizRu: QuizQuestion[] = [
  {
    question: 'Что такое область определения D(f) функции?',
    options: [
      'Множество всех значений, которые принимает функция',
      'Множество всех значений x, при которых функция определена',
      'График функции в системе координат',
      'Формула функции'
    ],
    correctIndex: 1,
    explanation:
      'Область определения D(f) — это множество всех значений аргумента x, при которых функция определена (имеет смысл).'
  },
  {
    question: 'Какому условию удовлетворяет чётная функция?',
    options: [
      'f(−x) = −f(x)',
      'f(x + T) = f(x)',
      'f(−x) = f(x)',
      'f(x₁) < f(x₂) при x₁ < x₂'
    ],
    correctIndex: 2,
    explanation:
      'Чётная функция удовлетворяет условию f(−x) = f(x). Её график симметричен относительно оси y. Нечётная функция удовлетворяет f(−x) = −f(x).'
  },
  {
    question: 'Каково значение функции f(3) для f(x) = x² − 2x + 1?',
    options: ['4', '6', '10', '2'],
    correctIndex: 0,
    explanation: 'f(3) = 3² − 2·3 + 1 = 9 − 6 + 1 = 4.'
  },
  {
    question: 'Что такое нули функции?',
    options: [
      'Точки, где функция принимает минимум',
      'Точки пересечения графика функции с осью y',
      'Значения x, при которых f(x) = 0',
      'Точки, где функция не определена'
    ],
    correctIndex: 2,
    explanation:
      'Нули функции — это значения x₀ ∈ D(f), при которых f(x₀) = 0. Геометрически это точки пересечения графика с осью x.'
  },
  {
    question: 'Для каких функций существует обратная функция f⁻¹?',
    options: [
      'Для всех функций',
      'Только для чётных функций',
      'Только для взаимно однозначных (инъективных) функций',
      'Только для периодических функций'
    ],
    correctIndex: 2,
    explanation:
      'Обратная функция существует только для взаимно однозначных функций — тех, у которых разным значениям x соответствуют разные значения f(x).'
  },
  {
    question: 'Если g(x) = x + 2 и f(x) = x², чему равно (f∘g)(x)?',
    options: ['x² + 2', '(x + 2)²', 'x² · (x + 2)', '2x²'],
    correctIndex: 1,
    explanation:
      '(f∘g)(x) = f(g(x)) = f(x + 2) = (x + 2)². Сначала применяем g, результат подставляем в f.'
  }
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Що таке область визначення D(f) функції?',
    options: [
      'Множина всіх значень, які приймає функція',
      'Множина всіх значень x, для яких функція визначена',
      'Графік функції в системі координат',
      'Формула функції'
    ],
    correctIndex: 1,
    explanation:
      'Область визначення D(f) — це множина всіх значень аргументу x, для яких функція визначена (має сенс).'
  },
  {
    question: 'Якій умові задовольняє парна функція?',
    options: [
      'f(−x) = −f(x)',
      'f(x + T) = f(x)',
      'f(−x) = f(x)',
      'f(x₁) < f(x₂) при x₁ < x₂'
    ],
    correctIndex: 2,
    explanation:
      'Парна функція задовольняє умові f(−x) = f(x). Її графік симетричний відносно осі y. Непарна функція задовольняє f(−x) = −f(x).'
  },
  {
    question: 'Яке значення функції f(3) для f(x) = x² − 2x + 1?',
    options: ['4', '6', '10', '2'],
    correctIndex: 0,
    explanation: 'f(3) = 3² − 2·3 + 1 = 9 − 6 + 1 = 4.'
  },
  {
    question: 'Що таке нулі функції?',
    options: [
      'Точки, де функція приймає мінімум',
      'Точки перетину графіка функції з віссю y',
      'Значення x, для яких f(x) = 0',
      'Точки, де функція не визначена'
    ],
    correctIndex: 2,
    explanation:
      'Нулі функції — це значення x₀ ∈ D(f), для яких f(x₀) = 0. Геометрично це точки перетину графіка з віссю x.'
  },
  {
    question: 'Для яких функцій існує обернена функція f⁻¹?',
    options: [
      'Для всіх функцій',
      'Тільки для парних функцій',
      'Тільки для взаємно однозначних (ін\'єктивних) функцій',
      'Тільки для періодичних функцій'
    ],
    correctIndex: 2,
    explanation:
      'Обернена функція існує тільки для взаємно однозначних функцій — тих, у яких різним значенням x відповідають різні значення f(x).'
  },
  {
    question: 'Якщо g(x) = x + 2 і f(x) = x², чому дорівнює (f∘g)(x)?',
    options: ['x² + 2', '(x + 2)²', 'x² · (x + 2)', '2x²'],
    correctIndex: 1,
    explanation:
      '(f∘g)(x) = f(g(x)) = f(x + 2) = (x + 2)². Спочатку застосовуємо g, результат підставляємо в f.'
  }
]

const activeQuiz = computed(() => {
  if (locale.value === 'ru') return quizRu
  if (locale.value === 'uk') return quizUk
  return quiz
})

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => activeQuiz.value[currentQ.value] as QuizQuestion)

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 text-gray-700 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 bg-white text-gray-400 cursor-default'
}

function selectAnswer(i: number): void {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = i
  if (i === currentQuestion.value.correctIndex) quizScore.value++
}

function nextQuestion(): void {
  if (currentQ.value < activeQuiz.value.length - 1) {
    currentQ.value++
    selectedAnswer.value = null
  } else {
    quizFinished.value = true
  }
}

function resetQuiz(): void {
  currentQ.value = 0
  selectedAnswer.value = null
  quizScore.value = 0
  quizFinished.value = false
}

const scoreEmoji = computed(() => {
  const r = quizScore.value / activeQuiz.value.length
  return r === 1 ? '🏆' : r >= 0.7 ? '🎉' : r >= 0.4 ? '💪' : '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / activeQuiz.value.length
  return r === 1
    ? 'Perfektné!'
    : r >= 0.7
      ? 'Výborne!'
      : r >= 0.4
        ? 'Oplatí sa zopakovať.'
        : 'Skús znova.'
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
