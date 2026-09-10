<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/magneticke-pole" class="hover:text-emerald-600 transition-colors">Magnetické pole</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Striedavý prúd</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">〰️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Striedavý prúd</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">Prúd, ktorý periodicky mení svoju veľkosť aj smer</p>

    <!-- Intro -->
    <div class="mb-10 text-gray-700 text-lg leading-relaxed">
      <p>
        Striedavý prúd (AC — <em>alternating current</em>) je elektrický prúd, ktorý periodicky mení svoju veľkosť
        aj smer. V Európe (vrátane Slovenska) je štandardná frekvencia elektrickej siete <strong>f&nbsp;=&nbsp;50&nbsp;Hz</strong>,
        čo znamená 50 úplných kmitov za sekundu. Striedavý prúd umožňuje pomocou transformátorov jednoducho meniť
        napätie, čo je kľúčové pre efektívny prenos elektrickej energie na diaľku.
      </p>
    </div>

    <!-- Sekcia 1: Okamžitá hodnota -->
    <section aria-label="Okamžitá hodnota striedavého prúdu" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-4 border-b-2 border-violet-200 pb-2">
        1. Okamžitá hodnota striedavého prúdu
      </h2>

      <p class="text-gray-700 mb-4">
        Striedavý prúd vzniká otáčaním vodiča v homogénnom magnetickom poli. Výsledkom je
        harmonické (sínusové) kmitanie elektrického napätia a prúdu. Matematicky ho opisujeme
        pomocou <em>okamžitých hodnôt</em>.
      </p>

      <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-violet-800 mb-4">Okamžité hodnoty napätia a prúdu</h3>
        <div class="space-y-4">
          <div class="text-center text-xl" v-html="km('u(t) = U_{max} \\cdot \\sin(\\omega t)')" />
          <div class="text-center text-xl" v-html="km('i(t) = I_{max} \\cdot \\sin(\\omega t)')" />
          <div class="text-center text-xl" v-html="km('\\omega = 2\\pi f')" />
        </div>
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-violet-700">
          <p><strong>u(t), i(t)</strong> — okamžité hodnoty napätia [V] a prúdu [A]</p>
          <p><strong>U<sub>max</sub>, I<sub>max</sub></strong> — amplitúdy (maximálne hodnoty)</p>
          <p><strong>ω</strong> — uhlová frekvencia [rad/s]</p>
          <p><strong>f</strong> — frekvencia [Hz], v sieti f = 50 Hz → ω ≈ 314 rad/s</p>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
        <h3 class="font-semibold text-blue-800 mb-2">Uhlová frekvencia siete (f = 50 Hz)</h3>
        <div class="text-center" v-html="km('\\omega = 2\\pi \\cdot 50 \\approx 314{,}2 \\text{ rad/s}')" />
      </div>

      <!-- Príklad 1 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 1 — Okamžitá hodnota napätia</h3>
        <p class="text-gray-700 mb-3">
          Maximálna hodnota napätia v sieti je U<sub>max</sub> = 325 V a frekvencia f = 50 Hz.
          Aká je okamžitá hodnota napätia v čase t = 5 ms?
        </p>
        <div class="space-y-3 text-sm">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="km('\\omega = 2\\pi \\cdot 50 = 314 \\text{ rad/s}')" />
          <div v-html="km('u(0{,}005) = 325 \\cdot \\sin(314 \\cdot 0{,}005)')" />
          <div v-html="km('u(0{,}005) = 325 \\cdot \\sin(1{,}570) = 325 \\cdot 1 = 325 \\text{ V}')" />
          <p class="text-green-700 font-medium">
            Výsledok: u = 325 V — napätie je práve v maxime (sin 90° = 1).
          </p>
        </div>
      </div>
    </section>

    <!-- Sekcia 2: Efektívna hodnota -->
    <section aria-label="Efektívna hodnota striedavého prúdu" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-4 border-b-2 border-violet-200 pb-2">
        2. Efektívna hodnota
      </h2>

      <p class="text-gray-700 mb-4">
        Keďže okamžitá hodnota striedavého prúdu sa neustále mení, zavádzame
        <strong>efektívnu hodnotu</strong>. Efektívna hodnota je rovnaká ako hodnota jednosmerného
        prúdu, ktorý by za rovnaký čas vykonal na rovnakom odpore rovnaké množstvo práce (tepla).
        Práve efektívne hodnoty zobrazujú bežné voltmetre a ampérmetre.
      </p>

      <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-violet-800 mb-4">Vzorce pre efektívne hodnoty</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-xl p-5 text-center shadow-sm">
            <p class="text-sm text-gray-500 mb-3">Efektívne napätie</p>
            <div v-html="km('U_{ef} = \\dfrac{U_{max}}{\\sqrt{2}}')" />
            <div class="mt-3 text-sm" v-html="km('U_{ef} \\approx 0{,}707 \\cdot U_{max}')" />
          </div>
          <div class="bg-white rounded-xl p-5 text-center shadow-sm">
            <p class="text-sm text-gray-500 mb-3">Efektívny prúd</p>
            <div v-html="km('I_{ef} = \\dfrac{I_{max}}{\\sqrt{2}}')" />
            <div class="mt-3 text-sm" v-html="km('I_{ef} \\approx 0{,}707 \\cdot I_{max}')" />
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-5">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 2 — Maximálne napätie siete</h3>
        <p class="text-gray-700 mb-3">
          Voltmeter v zásuvke ukazuje U<sub>ef</sub> = 230 V. Aká je skutočná amplitúda napätia?
        </p>
        <div class="space-y-3 text-sm">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="km('U_{max} = U_{ef} \\cdot \\sqrt{2}')" />
          <div v-html="km('U_{max} = 230 \\cdot 1{,}414 \\doteq 325 \\text{ V}')" />
          <p class="text-green-700 font-medium">Výsledok: U<sub>max</sub> ≈ 325 V</p>
        </div>
      </div>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p class="text-amber-800 text-sm">
          <strong>Zaujímavosť:</strong> Keď vidíte na zásuvke "230 V", je to efektívna hodnota.
          Skutočná amplitúda napätia dosahuje až 325 V — preto je elektrina nebezpečná aj pri
          zdanlivom "nízkym" napätí!
        </p>
      </div>
    </section>

    <!-- Sekcia 3: Výkon -->
    <section aria-label="Výkon striedavého prúdu" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-4 border-b-2 border-violet-200 pb-2">
        3. Výkon striedavého prúdu
      </h2>

      <p class="text-gray-700 mb-4">
        Pri striedavom prúde závisí výkon nielen od napätia a prúdu, ale aj od
        <strong>fázového posunu φ</strong> medzi nimi. Fázový posun vzniká pri zapojení
        reaktančných prvkov (kondenzátory, cievky). Cosínus tohto uhla sa nazýva
        <strong>účinník (faktor výkonu)</strong>.
      </p>

      <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-violet-800 mb-3">Vzorec pre výkon</h3>
        <div class="text-center text-xl mb-4" v-html="km('P = U_{ef} \\cdot I_{ef} \\cdot \\cos\\varphi')" />
        <div class="text-sm text-violet-700 space-y-1">
          <p><strong>P</strong> — činný výkon [W]</p>
          <p><strong>cos φ</strong> — účinník (faktor výkonu), hodnota od 0 do 1</p>
          <p>Pre čisto odporové spotrebiče (žiarovka, variča): cos φ = 1, teda <span class="inline" v-html="km('P = U_{ef} \\cdot I_{ef}')" /></p>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 3 — Výkon elektromotora</h3>
        <p class="text-gray-700 mb-3">
          Elektromotor je napájaný napätím U<sub>ef</sub> = 230 V, odoberá prúd I<sub>ef</sub> = 4 A
          a jeho účinník je cos φ = 0,8. Aký je jeho činný výkon?
        </p>
        <div class="space-y-3 text-sm">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="km('P = U_{ef} \\cdot I_{ef} \\cdot \\cos\\varphi')" />
          <div v-html="km('P = 230 \\cdot 4 \\cdot 0{,}8')" />
          <div v-html="km('P = 736 \\text{ W}')" />
          <p class="text-green-700 font-medium">Výsledok: P = 736 W</p>
          <p class="text-gray-500 text-xs mt-1">
            Zdanlivý výkon by bol S = 230 · 4 = 920 VA — motor odberá viac, ale len 736 W mení na mechanickú prácu.
          </p>
        </div>
      </div>
    </section>

    <!-- Sekcia 4: Transformátor -->
    <section aria-label="Transformátor" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-4 border-b-2 border-violet-200 pb-2">
        4. Transformátor
      </h2>

      <p class="text-gray-700 mb-4">
        Transformátor mení napätie striedavého prúdu. Skladá sa z dvoch vinutí (primárneho
        a sekundárneho) navinutých na spoločnom feromagnetickom jadre. Premenlivý magnetický tok
        indukovaný primárnym vinutím indukuje napätie v sekundárnom vinutí — to je princíp
        elektromagnetickej indukcie.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5">
          <h3 class="font-semibold text-violet-800 mb-3">Transformátorová rovnica</h3>
          <div class="text-center text-lg" v-html="km('\\dfrac{U_1}{U_2} = \\dfrac{N_1}{N_2} = \\dfrac{I_2}{I_1}')" />
          <div class="mt-4 text-sm text-violet-700 space-y-1">
            <p><strong>U<sub>1</sub>, U<sub>2</sub></strong> — napätie primárneho / sekundárneho vinutia [V]</p>
            <p><strong>N<sub>1</sub>, N<sub>2</sub></strong> — počet závitov primárneho / sekundárneho vinutia</p>
            <p><strong>I<sub>1</sub>, I<sub>2</sub></strong> — prúd primárneho / sekundárneho vinutia [A]</p>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 class="font-semibold text-gray-800 mb-3">Typy transformátorov</h3>
          <ul class="text-sm text-gray-700 space-y-3">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 font-bold text-base mt-0.5">▲</span>
              <div>
                <strong>Zvyšujúci (step-up):</strong> N<sub>2</sub> &gt; N<sub>1</sub><br>
                <span class="text-gray-500">Zvyšuje napätie, znižuje prúd. Použitie: prenos energie.</span>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 font-bold text-base mt-0.5">▼</span>
              <div>
                <strong>Znižujúci (step-down):</strong> N<sub>2</sub> &lt; N<sub>1</sub><br>
                <span class="text-gray-500">Znižuje napätie, zvyšuje prúd. Použitie: nabíjačky, rozvody.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 4 — Výpočet počtu závitov</h3>
        <p class="text-gray-700 mb-3">
          Transformátor má primárne napätie U<sub>1</sub> = 230 V a sekundárne napätie U<sub>2</sub> = 12 V.
          Primárne vinutie má N<sub>1</sub> = 920 závitov. Koľko závitov má sekundárne vinutie?
        </p>
        <div class="space-y-3 text-sm">
          <p class="text-gray-600 font-medium">Riešenie:</p>
          <div v-html="km('\\dfrac{N_2}{N_1} = \\dfrac{U_2}{U_1}')" />
          <div v-html="km('N_2 = N_1 \\cdot \\dfrac{U_2}{U_1} = 920 \\cdot \\dfrac{12}{230}')" />
          <div v-html="km('N_2 = 48 \\text{ závitov}')" />
          <p class="text-green-700 font-medium">Výsledok: N<sub>2</sub> = 48 závitov (znižujúci transformátor)</p>
        </div>
      </div>
    </section>

    <!-- Sekcia 5: Prenos energie -->
    <section aria-label="Prenos elektrickej energie na diaľku" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-4 border-b-2 border-violet-200 pb-2">
        5. Prenos energie na diaľku
      </h2>

      <p class="text-gray-700 mb-4">
        Pri prenose elektrickej energie na stovky kilometrov vznikajú v prenosovom vedení
        tepelné straty — Joulovo teplo. Aby boli tieto straty čo najmenšie, prenáša sa
        energia pri <strong>veľmi vysokom napätí a malom prúde</strong>.
      </p>

      <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-violet-800 mb-3">Straty výkonu v prenosovom vedení</h3>
        <div class="text-center text-xl mb-4" v-html="km('P_{strata} = R \\cdot I^2')" />
        <p class="text-sm text-violet-700 mb-5">
          Straty rastú s druhou mocninou prúdu. Znížením prúdu na polovicu znížime straty
          štyrikrát. Preto sa používajú zvyšujúce transformátory pred vedením a znižujúce za ním.
        </p>
        <div class="bg-white rounded-xl p-4 text-sm text-gray-700">
          <h4 class="font-semibold text-gray-800 mb-3">Schéma distribúcie energie</h4>
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Elektráreň ~10 kV</span>
              <span class="text-gray-400">→</span>
              <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">Zvyšujúci trafo</span>
              <span class="text-gray-400">→</span>
              <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">Prenosová sústava 400 kV</span>
            </div>
            <div class="flex flex-wrap items-center gap-2 ml-4">
              <span class="text-gray-400">→</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Distribučná sústava 22 kV</span>
              <span class="text-gray-400">→</span>
              <span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full font-medium">Znižujúci trafo</span>
              <span class="text-gray-400">→</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Odberateľ 230 V</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Príklad 5 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 5 — Porovnanie strát pri prenose</h3>
        <p class="text-gray-700 mb-4">
          Elektráreň prenáša výkon P = 1 MW cez vedenie s odporom R = 10 Ω.
          Porovnaj straty pri napätí 1 kV a 100 kV.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div class="bg-red-50 border border-red-200 rounded-xl p-4">
            <p class="font-semibold text-red-800 mb-2">Pri U = 1 kV:</p>
            <div v-html="km('I = \\dfrac{P}{U} = \\dfrac{10^6}{10^3} = 1000 \\text{ A}')" />
            <div class="mt-2" v-html="km('P_{st} = R \\cdot I^2 = 10 \\cdot 10^6 = 10 \\text{ MW}')" />
            <p class="text-red-700 mt-2 font-medium">Straty 10 × väčšie ako prenášaný výkon!</p>
          </div>
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <p class="font-semibold text-green-800 mb-2">Pri U = 100 kV:</p>
            <div v-html="km('I = \\dfrac{P}{U} = \\dfrac{10^6}{10^5} = 10 \\text{ A}')" />
            <div class="mt-2" v-html="km('P_{st} = R \\cdot I^2 = 10 \\cdot 100 = 1000 \\text{ W}')" />
            <p class="text-green-700 mt-2 font-medium">Straty len 0,1 % prenášaného výkonu!</p>
          </div>
        </div>
        <p class="text-gray-500 text-xs mt-3">
          Záver: Zvýšením napätia 100-násobne (z 1 kV na 100 kV) sme znížili straty 10 000-násobne.
        </p>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie — Striedavý prúd</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 class="font-semibold text-violet-700 mb-2">Kľúčové vzorce</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Okamžité napätie: <span class="inline" v-html="km('u(t) = U_{max}\\sin(\\omega t)')" /></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Uhlová frekvencia: <span class="inline" v-html="km('\\omega = 2\\pi f')" /></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Efektívne napätie: <span class="inline" v-html="km('U_{ef} = U_{max}/\\sqrt{2}')" /></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Výkon: <span class="inline" v-html="km('P = U_{ef} \\cdot I_{ef} \\cdot \\cos\\varphi')" /></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Transformátor: <span class="inline" v-html="km('U_1/U_2 = N_1/N_2 = I_2/I_1')" /></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Straty vedenia: <span class="inline" v-html="km('P_{st} = R \\cdot I^2')" /></span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-violet-700 mb-2">Dôležité hodnoty (SK / EÚ sieť)</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Frekvencia: f = 50 Hz</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Uhlová frekvencia: ω ≈ 314 rad/s</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Efektívne napätie: U<sub>ef</sub> = 230 V</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Maximálne napätie: U<sub>max</sub> ≈ 325 V</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-violet-500 mt-0.5 shrink-0">•</span>
              <span>Prenosové napätia: 110 kV, 220 kV, 400 kV</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — Striedavý prúd" class="mb-12">
      <h2 class="text-2xl font-bold text-violet-700 mb-6">Otestuj sa — Striedavý prúd</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-4">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="h-2 w-8 rounded-full transition-colors duration-300"
              :class="i < currentQ ? 'bg-violet-500' : i === currentQ ? 'bg-violet-300' : 'bg-gray-200'"
            />
          </div>
        </div>

        <!-- Question -->
        <div data-testid="question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="text-lg font-medium text-gray-800" v-html="currentQuestion.question" />
        </div>

        <!-- Options -->
        <div class="space-y-3 mb-4">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            class="w-full text-left px-5 py-3 rounded-xl border-2 transition-all font-medium"
            :class="optionClass(i)"
            @click="selectAnswer(i)"
            v-html="option"
          />
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            class="rounded-xl p-4 mb-4"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'"
          >
            <p class="font-semibold mb-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
            </p>
            <p class="text-sm" v-html="currentQuestion.explanation" />
          </div>
        </Transition>

        <!-- Next button -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="next-btn"
            class="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-600 mb-6">
          Dosiahol si <strong>{{ quizScore }} z {{ quiz.length }}</strong> bodov
        </p>
        <button
          type="button"
          data-testid="reset-btn"
          class="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
import katex from 'katex'

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// --------------- Kvíz ---------------
const quiz = [
  {
    question: 'Aká je frekvencia striedavého prúdu v európskej elektrickej sieti?',
    options: ['25 Hz', '50 Hz', '60 Hz', '100 Hz'],
    correctIndex: 1,
    explanation:
      'V Európe (vrátane Slovenska) je štandardná frekvencia <strong>50 Hz</strong>. V Severnej Amerike sa používa 60 Hz.'
  },
  {
    question: 'Ktorý vzorec správne vyjadruje vzťah medzi efektívnou a maximálnou hodnotou napätia?',
    options: [
      km('U_{ef} = 2 \\cdot U_{max}'),
      km('U_{ef} = \\sqrt{2} \\cdot U_{max}'),
      km('U_{ef} = \\dfrac{U_{max}}{\\sqrt{2}}'),
      km('U_{ef} = \\dfrac{U_{max}}{2}')
    ],
    correctIndex: 2,
    explanation:
      'Platí ' +
      km('U_{ef} = \\dfrac{U_{max}}{\\sqrt{2}} \\approx 0{,}707 \\cdot U_{max}') +
      '. Efektívna hodnota je vždy menšia ako maximálna.'
  },
  {
    question: 'Sieťové napätie je U<sub>ef</sub> = 230 V. Aká je amplitúda (maximálna hodnota) napätia?',
    options: ['163 V', '230 V', '280 V', '325 V'],
    correctIndex: 3,
    explanation:
      km('U_{max} = U_{ef} \\cdot \\sqrt{2} = 230 \\cdot 1{,}414 \\doteq 325 \\text{ V}') +
      '. Skutočné napätie v zásuvke dosahuje až 325 V!'
  },
  {
    question:
      'Transformátor má N<sub>1</sub> = 500 závitov a N<sub>2</sub> = 100 závitov. Primárne napätie je 250 V. Aké je sekundárne napätie?',
    options: ['20 V', '50 V', '125 V', '1 250 V'],
    correctIndex: 1,
    explanation:
      km('U_2 = U_1 \\cdot \\dfrac{N_2}{N_1} = 250 \\cdot \\dfrac{100}{500} = 50 \\text{ V}') +
      '. Ide o znižujúci transformátor (N<sub>2</sub> &lt; N<sub>1</sub>).'
  },
  {
    question: 'Prečo sa elektrická energia prenáša na diaľku pri vysokom napätí?',
    options: [
      'Lebo transformátory pracujú len pri vysokom napätí',
      'Lebo pri vysokom napätí tečie menší prúd a straty P = RI² sú omnoho menšie',
      'Lebo nízke napätie prechádza cez vzduch a spôsobuje skraty',
      'Lebo vysoké napätie sa ľahšie transformuje na konci vedenia'
    ],
    correctIndex: 1,
    explanation:
      'Straty v prenosovom vedení sú ' +
      km('P_{st} = R \\cdot I^2') +
      '. Pri rovnakom prenášanom výkone platí ' +
      km('P = U \\cdot I') +
      ', teda pri vyššom U je prúd I menší a straty sú oveľa nižšie.'
  },
  {
    question:
      'Elektromotor je napájaný napätím U<sub>ef</sub> = 230 V, odoberá prúd I<sub>ef</sub> = 2 A a jeho účinník je cos φ = 0,9. Aký je jeho činný výkon?',
    options: ['207 W', '414 W', '460 W', '920 W'],
    correctIndex: 1,
    explanation:
      km('P = U_{ef} \\cdot I_{ef} \\cdot \\cos\\varphi = 230 \\cdot 2 \\cdot 0{,}9 = 414 \\text{ W}') + '.'
  }
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

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 hover:border-violet-400 hover:bg-violet-50 text-gray-700'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-500 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-700'
  }
  return 'border-gray-200 text-gray-400'
}

useHead({
  title: 'Striedavý prúd | Magnetické pole | Fyzika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content:
        'Striedavý prúd pre gymnazistov: okamžitá a efektívna hodnota, výkon, transformátor a prenos energie na diaľku. Vzorce, vypočítané príklady a interaktívny kvíz.'
    }
  ]
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
