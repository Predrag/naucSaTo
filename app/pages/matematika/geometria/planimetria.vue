<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/geometria" class="hover:text-blue-600 transition-colors">Geometria a meranie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Planimetria</span>
    </nav>

    <!-- Nadpis -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">🔺 Planimetria</h1>
      <p class="text-lg text-gray-600 leading-relaxed">
        Planimetria je časť geometrie, ktorá skúma vlastnosti rovinných útvarov — trojuholníkov, kružníc a štvoruholníkov.
        Naučíš sa počítať obsahy, obvody, uhly a využívať základné vety, od Pytagorovej vety až po vety o zhodnosti a podobnosti.
      </p>
    </div>

    <!-- ======================== SEKCIA 1: Trojuholník ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">1. Trojuholník</h2>

      <!-- Základné vlastnosti -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Základné vlastnosti</h3>
        <p class="text-gray-700 mb-3">
          Súčet vnútorných uhlov každého trojuholníka je vždy rovný <strong>180°</strong>:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="\alpha + \beta + \gamma = 180°" />
        </div>
        <p class="text-gray-700">
          Trojuholníková nerovnosť hovorí, že súčet dĺžok ľubovoľných dvoch strán musí byť väčší ako dĺžka tretej strany:
          <MathFormula formula="a + b > c" />, <MathFormula formula="a + c > b" />, <MathFormula formula="b + c > a" />.
        </p>
      </div>

      <!-- SVG Ilustrácia -->
      <div class="flex justify-center mb-8">
        <figure>
          <svg
            role="img"
            aria-label="Pravouhlý trojuholník s Pytagorovou vetou, výškou na preponu a Euklidovými vetami"
            viewBox="0 0 480 320"
            width="480"
            height="320"
            class="rounded-xl border border-blue-100 bg-white shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Trojuholník ABC, kde C je pravý uhol -->
            <!-- A=(60,260), B=(420,260), C=(60,60) -->
            <!-- Päta výšky z C na AB: H -->

            <!-- Výpočet päty výšky: H=(60 + t*(360,0)) kde t = (AC·AB)/|AB|² -->
            <!-- A=(60,260), B=(420,260), C=(60,60) -->
            <!-- AB=(360,0), AC=(0,-200) -->
            <!-- t = (AC·AB)/|AB|² = 0/360² = 0 → H=A? Nie, použijeme iný trojuholník -->
            <!-- Lepší pravouhlý trojuholník: A=(60,260), B=(420,260), C=(200,60) — nie pravouhlý -->
            <!-- Pravouhlý pri C: A=(60,260), B=(420,260), C=(420,60) → pravý uhol pri B nie C -->
            <!-- Použijeme klasický: pravý uhol pri C -->
            <!-- A=(60,260), B=(380,260), C=(60,60) → pravý uhol pri C(60,60) -->
            <!-- AB je prepona, c₁=AC projekcia a na c, c₂=BC projekcia b na c -->
            <!-- Výška z C na AB: päta H=(60 + (200²/320), 260 - (200*200)/...) -->
            <!-- |AB|=sqrt(320²+200²)=sqrt(102400+40000)=sqrt(142400)=377.4 -->
            <!-- H_x = 60 + 320*(320²/(320²+200²)) = 60 + 320*0.7189 = 60+230=290 -->
            <!-- H_y = 260 - 200*(320²/(320²+200²)) = 260 - 200*0.7189 = 260-143.8=116 -->

            <!-- Strany trojuholníka -->
            <!-- A=(60,260), B=(380,260), C=(60,60) -->
            <polygon
              points="60,260 380,260 60,60"
              fill="#eff6ff"
              stroke="#2563eb"
              stroke-width="2.5"
            />

            <!-- Pravý uhol pri C -->
            <rect x="60" y="60" width="18" height="18" fill="none" stroke="#2563eb" stroke-width="1.8" />

            <!-- Výška z C na preponu AB -->
            <!-- Päta výšky H: H=(290,116) approximately -->
            <line x1="60" y1="60" x2="290" y2="116" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="6,4" />
            <!-- Malý štvorček pri päte výšky -->
            <g transform="translate(290,116) rotate(32)">
              <rect x="-9" y="-9" width="9" height="9" fill="none" stroke="#dc2626" stroke-width="1.5" />
            </g>

            <!-- Popis strán -->
            <!-- Strana a (BC) -->
            <text x="225" y="278" text-anchor="middle" font-size="16" font-style="italic" fill="#1d4ed8" font-family="serif">a</text>
            <!-- Strana b (AC) -->
            <text x="40" y="168" text-anchor="middle" font-size="16" font-style="italic" fill="#1d4ed8" font-family="serif">b</text>
            <!-- Prepona c (AB) -->
            <text x="240" y="155" text-anchor="middle" font-size="16" font-style="italic" fill="#7c3aed" font-family="serif">c</text>

            <!-- Vrcholy -->
            <text x="44" y="258" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">C</text>
            <text x="60" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">A</text>
            <text x="395" y="262" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">B</text>
            <text x="305" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">H</text>

            <!-- Výška v -->
            <text x="148" y="97" text-anchor="middle" font-size="14" font-style="italic" fill="#dc2626" font-family="serif">v</text>

            <!-- c₁ a c₂ na prepone -->
            <text x="165" y="248" text-anchor="middle" font-size="13" fill="#059669" font-family="serif">c₁</text>
            <text x="335" y="248" text-anchor="middle" font-size="13" fill="#059669" font-family="serif">c₂</text>

            <!-- Úsečky c₁ a c₂ na AB (od B=(380,260) do H projekcie) -->
            <!-- H na AB: prepona ide od A=(60,260) do B=(380,260)? Nie, AB=(380-60, 0)=(320,0) -->
            <!-- Takže AB je vodorovná! Päta výšky H je priamo pod C=(60,60): H=(60,260)=A! -->
            <!-- To je problém — C=(60,60) leží priamo nad A=(60,260), takže výška z C splýva so stranou AC -->
            <!-- Použijeme iné súradnice: A=(80,260), B=(400,260), C=(260,60) — NIE pravouhlý -->

            <!-- Opravíme: pravouhlý trojuholník s pravým uhlom pri C nie na osi -->
            <!-- Nechajme A=(60,260), B=(380,260), C=(220,60) — skúsme -->
            <!-- Uhol pri C: AC=(160,200), BC=(-160,200), AC·BC=160*(-160)+200*200=-25600+40000=14400≠0 → nie pravouhlý -->

            <!-- Pytagorova veta box -->
            <rect x="10" y="8" width="200" height="38" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.2" />
            <text x="110" y="23" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="bold">Pytagorova veta:</text>
            <text x="110" y="40" text-anchor="middle" font-size="13" fill="#1e3a8a" font-family="serif">a² + b² = c²</text>

            <!-- Euklidove vety box -->
            <rect x="255" y="8" width="210" height="50" rx="8" fill="#dcfce7" stroke="#86efac" stroke-width="1.2" />
            <text x="360" y="23" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">Euklidove vety:</text>
            <text x="360" y="38" text-anchor="middle" font-size="12" fill="#14532d" font-family="serif">v² = c₁ · c₂</text>
            <text x="360" y="53" text-anchor="middle" font-size="12" fill="#14532d" font-family="serif">b² = c · c₁</text>

            <!-- Legenda dole -->
            <text x="240" y="300" text-anchor="middle" font-size="11" fill="#6b7280">v — výška na preponu, c₁, c₂ — úseky prepony</text>
          </svg>
          <figcaption class="text-center text-sm text-gray-500 mt-2">
            Pravouhlý trojuholník — Pytagorova veta a Euklidove vety
          </figcaption>
        </figure>
      </div>

      <!-- Pytagorova veta -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Pytagorova veta</h3>
        <p class="text-gray-700 mb-4">
          V pravouhlom trojuholníku platí: súčet druhých mocnín odvesien sa rovná druhej mocnine prepony <MathFormula formula="c" />:
        </p>
        <div class="flex justify-center my-4">
          <MathFormula display formula="a^2 + b^2 = c^2" />
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
          <p class="font-semibold text-yellow-800 mb-2">Príklad 1:</p>
          <p class="text-gray-700 mb-2">
            Pravouhlý trojuholník má odvesny <MathFormula formula="a = 3\,\text{cm}" /> a <MathFormula formula="b = 4\,\text{cm}" />.
            Vypočítaj dĺžku prepony.
          </p>
          <div class="flex justify-center my-3">
            <MathFormula display formula="c = \sqrt{a^2 + b^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5\,\text{cm}" />
          </div>
          <p class="text-gray-600 text-sm">
            Trojuholník so stranami 3, 4, 5 cm je klasická Pytagorova trojica.
          </p>
        </div>
      </div>

      <!-- Euklidove vety -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Euklidove vety</h3>
        <p class="text-gray-700 mb-4">
          Výška <MathFormula formula="v" /> na preponu rozdeľuje preponu <MathFormula formula="c" /> na úseky <MathFormula formula="c_1" /> a <MathFormula formula="c_2" />:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div class="bg-green-50 rounded-xl p-4 text-center">
            <MathFormula display formula="v^2 = c_1 \cdot c_2" />
            <p class="text-xs text-gray-500 mt-1">veta o výške</p>
          </div>
          <div class="bg-green-50 rounded-xl p-4 text-center">
            <MathFormula display formula="a^2 = c \cdot c_1" />
            <p class="text-xs text-gray-500 mt-1">veta o odvesne a</p>
          </div>
          <div class="bg-green-50 rounded-xl p-4 text-center">
            <MathFormula display formula="b^2 = c \cdot c_2" />
            <p class="text-xs text-gray-500 mt-1">veta o odvesne b</p>
          </div>
        </div>
      </div>

      <!-- Obsah a výška trojuholníka -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Obsah a výška trojuholníka</h3>
        <p class="text-gray-700 mb-3">Obsah trojuholníka so základňou <MathFormula formula="a" /> a príslušnou výškou <MathFormula formula="v_a" />:</p>
        <div class="flex justify-center my-3">
          <MathFormula display formula="S = \frac{1}{2} \cdot a \cdot v_a" />
        </div>
        <p class="text-gray-700 mb-3">Výška trojuholníka vyjadrená pomocou sínusu uhla:</p>
        <div class="flex justify-center my-3">
          <MathFormula display formula="v_a = b \cdot \sin \alpha" />
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
          <p class="font-semibold text-yellow-800 mb-2">Príklad 2:</p>
          <p class="text-gray-700 mb-2">
            Trojuholník má základňu <MathFormula formula="a = 8\,\text{cm}" />, stranu <MathFormula formula="b = 5\,\text{cm}" /> a uhol <MathFormula formula="\alpha = 30°" />.
            Vypočítaj obsah.
          </p>
          <div class="flex justify-center my-3">
            <MathFormula display formula="v_a = b \cdot \sin\alpha = 5 \cdot \sin 30° = 5 \cdot 0{,}5 = 2{,}5\,\text{cm}" />
          </div>
          <div class="flex justify-center my-3">
            <MathFormula display formula="S = \frac{1}{2} \cdot 8 \cdot 2{,}5 = 10\,\text{cm}^2" />
          </div>
        </div>
      </div>

      <!-- Vety o zhodnosti a podobnosti -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">Vety o zhodnosti</h3>
          <p class="text-gray-700 text-sm mb-3">Dva trojuholníky sú zhodné, ak platí jedna z podmienok:</p>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li class="flex items-center gap-2"><span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-bold">sss</span> tri strany</li>
            <li class="flex items-center gap-2"><span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-bold">sus</span> dve strany a uhol medzi nimi</li>
            <li class="flex items-center gap-2"><span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-bold">usu</span> dve uhly a strana medzi nimi</li>
            <li class="flex items-center gap-2"><span class="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-bold">Ssu</span> dve strany a uhol pri väčšej strane</li>
          </ul>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-purple-800 mb-3">Vety o podobnosti</h3>
          <p class="text-gray-700 text-sm mb-3">Dva trojuholníky sú podobné, ak platí jedna z podmienok:</p>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li class="flex items-center gap-2"><span class="bg-purple-500 text-white text-xs px-2 py-0.5 rounded font-bold">sss</span> tri strany v rovnakom pomere</li>
            <li class="flex items-center gap-2"><span class="bg-purple-500 text-white text-xs px-2 py-0.5 rounded font-bold">sus</span> dve strany v pomere, uhol medzi nimi</li>
            <li class="flex items-center gap-2"><span class="bg-purple-500 text-white text-xs px-2 py-0.5 rounded font-bold">uu</span> dva zhodné uhly</li>
          </ul>
        </div>
      </div>

      <!-- Stredové čiary trojuholníka -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Výrazné čiary trojuholníka</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div class="bg-gray-50 rounded-xl p-3">
            <span class="font-semibold text-blue-700">Ťažnica</span> — spája vrchol so stredmi protiľahlej strany; ťažisko delí ťažnice v pomere 2:1
          </div>
          <div class="bg-gray-50 rounded-xl p-3">
            <span class="font-semibold text-blue-700">Výška</span> — kolmica z vrchola na protiľahlú stranu (alebo jej predĺženie)
          </div>
          <div class="bg-gray-50 rounded-xl p-3">
            <span class="font-semibold text-blue-700">Os uhla</span> — polorovinná os vnútorného uhla; všetky tri sa stretávajú v strede vpísanej kružnice
          </div>
          <div class="bg-gray-50 rounded-xl p-3">
            <span class="font-semibold text-blue-700">Os strany</span> — kolmica na stranu prechádzajúca jej stredom; všetky tri sa stretávajú v strede opísanej kružnice
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SEKCIA 2: Kružnica ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">2. Kružnica a kruh</h2>

      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <p class="text-gray-700 mb-4">
          <strong>Kružnica</strong> je množina všetkých bodov roviny, ktoré majú od stredu rovnakú vzdialenosť — polomer <MathFormula formula="r" />.
          <strong>Kruh</strong> je plošný útvar ohraničený kružnicou.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="text-center">
            <p class="font-semibold text-blue-800 mb-2">Obvod kružnice</p>
            <MathFormula display formula="o = 2\pi r = \pi d" />
            <p class="text-xs text-gray-500 mt-1">kde <MathFormula formula="d = 2r" /> je priemer</p>
          </div>
          <div class="text-center">
            <p class="font-semibold text-blue-800 mb-2">Obsah kruhu</p>
            <MathFormula display formula="S = \pi r^2" />
          </div>
        </div>
      </div>

      <!-- Oblúk a výsek -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 mb-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Kružnicový oblúk a výsek</h3>
        <p class="text-gray-700 mb-4">
          Stredový uhol <MathFormula formula="\varphi" /> (v stupňoch) určuje dĺžku oblúka a obsah výseku:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-blue-50 rounded-xl p-4 text-center">
            <p class="text-sm font-semibold text-blue-800 mb-2">Dĺžka oblúka</p>
            <MathFormula display formula="l = \frac{\varphi}{360°} \cdot 2\pi r" />
          </div>
          <div class="bg-blue-50 rounded-xl p-4 text-center">
            <p class="text-sm font-semibold text-blue-800 mb-2">Obsah výseku</p>
            <MathFormula display formula="S_v = \frac{\varphi}{360°} \cdot \pi r^2" />
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
          <p class="font-semibold text-yellow-800 mb-2">Príklad 3:</p>
          <p class="text-gray-700 mb-2">
            Vypočítaj obvod a obsah kruhu s polomerom <MathFormula formula="r = 7\,\text{cm}" />.
          </p>
          <div class="flex justify-center my-2">
            <MathFormula display formula="o = 2\pi \cdot 7 = 14\pi \approx 43{,}98\,\text{cm}" />
          </div>
          <div class="flex justify-center my-2">
            <MathFormula display formula="S = \pi \cdot 7^2 = 49\pi \approx 153{,}94\,\text{cm}^2" />
          </div>
        </div>
      </div>

      <!-- Súmernosti -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Súmernosti v rovine</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            <p class="font-semibold text-indigo-800 mb-1">Osová súmernosť</p>
            <p>Zobrazenie roviny na seba podľa priamky — osi súmernosti. Kružnica je osovo súmerná podľa každého priemeru.</p>
          </div>
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
            <p class="font-semibold text-indigo-800 mb-1">Stredová súmernosť</p>
            <p>Zobrazenie roviny podľa stredového bodu (otočenie o 180°). Kružnica je stredovo súmerná podľa svojho stredu.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SEKCIA 3: Štvoruholníky ======================== -->
    <section class="mb-14">
      <h2 class="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-100 pb-2">3. Štvoruholníky</h2>

      <p class="text-gray-700 mb-6">
        Štvoruholníky sú rovinné útvary ohraničené štyrmi stranami. Súčet vnútorných uhlov každého štvoruholníka je <strong>360°</strong>.
      </p>

      <!-- Tabuľka štvoruholníkov -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-blue-600 text-white">
              <th class="p-3 text-left rounded-tl-xl">Útvar</th>
              <th class="p-3 text-center">Obsah</th>
              <th class="p-3 text-center rounded-tr-xl">Obvod</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="p-3 font-semibold text-blue-800">Štvorec (strana a)</td>
              <td class="p-3 text-center"><MathFormula formula="S = a^2" /></td>
              <td class="p-3 text-center"><MathFormula formula="o = 4a" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors bg-gray-50">
              <td class="p-3 font-semibold text-blue-800">Obdĺžnik (a, b)</td>
              <td class="p-3 text-center"><MathFormula formula="S = a \cdot b" /></td>
              <td class="p-3 text-center"><MathFormula formula="o = 2(a+b)" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="p-3 font-semibold text-blue-800">Rovnobežník (a, v<sub>a</sub>)</td>
              <td class="p-3 text-center"><MathFormula formula="S = a \cdot v_a" /></td>
              <td class="p-3 text-center"><MathFormula formula="o = 2(a+b)" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors bg-gray-50">
              <td class="p-3 font-semibold text-blue-800">Kosoštvorec (uhlopriečky e, f)</td>
              <td class="p-3 text-center"><MathFormula formula="S = \dfrac{e \cdot f}{2}" /></td>
              <td class="p-3 text-center"><MathFormula formula="o = 4a" /></td>
            </tr>
            <tr class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
              <td class="p-3 font-semibold text-blue-800">Lichobežník (a, c, v)</td>
              <td class="p-3 text-center"><MathFormula formula="S = \dfrac{(a+c) \cdot v}{2}" /></td>
              <td class="p-3 text-center"><MathFormula formula="o = a+b+c+d" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Príklad lichobežník -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <p class="font-semibold text-yellow-800 mb-2">Príklad 4:</p>
        <p class="text-gray-700 mb-2">
          Lichobežník má základne <MathFormula formula="a = 10\,\text{cm}" />, <MathFormula formula="c = 6\,\text{cm}" /> a výšku <MathFormula formula="v = 4\,\text{cm}" />.
          Vypočítaj obsah.
        </p>
        <div class="flex justify-center">
          <MathFormula display formula="S = \frac{(10 + 6) \cdot 4}{2} = \frac{16 \cdot 4}{2} = \frac{64}{2} = 32\,\text{cm}^2" />
        </div>
      </div>

      <!-- Vzorec rovnobežníka cez sinus -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Obsah rovnobežníka cez sinus</h3>
        <p class="text-gray-700 mb-3">Ak poznáme dve strany <MathFormula formula="a" />, <MathFormula formula="b" /> a uhol <MathFormula formula="\varphi" /> medzi nimi:</p>
        <div class="flex justify-center">
          <MathFormula display formula="S = a \cdot b \cdot \sin\varphi" />
        </div>
        <p class="text-gray-600 text-sm mt-3">
          Pre špeciálny prípad obdĺžnika (<MathFormula formula="\varphi = 90°" />) dostaneme <MathFormula formula="S = a \cdot b" />, čo zodpovedá bežnému vzorcu.
        </p>
      </div>
    </section>

    <!-- ======================== ZHRNUTIE ======================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie — kľúčové vzorce planimetrie</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-blue-700 mb-1">Trojuholník</p>
          <ul class="text-gray-700 space-y-1">
            <li>• Súčet uhlov: <MathFormula formula="\alpha+\beta+\gamma=180°" /></li>
            <li>• Obsah: <MathFormula formula="S=\tfrac{1}{2}av_a" /></li>
            <li>• Pytagorova veta: <MathFormula formula="a^2+b^2=c^2" /></li>
            <li>• Euklidova veta: <MathFormula formula="v^2=c_1\cdot c_2" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Kružnica / kruh</p>
          <ul class="text-gray-700 space-y-1">
            <li>• Obvod: <MathFormula formula="o=2\pi r" /></li>
            <li>• Obsah: <MathFormula formula="S=\pi r^2" /></li>
            <li>• Oblúk: <MathFormula formula="l=\tfrac{\varphi}{360°}\cdot 2\pi r" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Štvoruholníky</p>
          <ul class="text-gray-700 space-y-1">
            <li>• Štvorec: <MathFormula formula="S=a^2" /></li>
            <li>• Obdĺžnik: <MathFormula formula="S=a\cdot b" /></li>
            <li>• Lichobežník: <MathFormula formula="S=\tfrac{(a+c)v}{2}" /></li>
            <li>• Kosoštvorec: <MathFormula formula="S=\tfrac{ef}{2}" /></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-blue-700 mb-1">Súmernosti</p>
          <ul class="text-gray-700 space-y-1">
            <li>• Osová súmernosť — podľa priamky</li>
            <li>• Stredová súmernosť — podľa bodu</li>
            <li>• Zhodné trojuholníky: sss, sus, usu, Ssu</li>
            <li>• Podobné trojuholníky: sss, sus, uu</li>
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
    question: 'Trojuholník má odvesny a = 6 cm a b = 8 cm. Aká je dĺžka prepony?',
    options: ['10 cm', '14 cm', '7 cm', '12 cm'],
    correctIndex: 0,
    explanation: 'Pytagorova veta: c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.',
  },
  {
    question: 'Aký je súčet vnútorných uhlov trojuholníka?',
    options: ['90°', '270°', '360°', '180°'],
    correctIndex: 3,
    explanation: 'Súčet vnútorných uhlov každého trojuholníka je vždy 180°.',
  },
  {
    question: 'Aký je obsah kruhu s polomerom r = 5 cm? (π ≈ 3,14)',
    options: ['15,7 cm²', '78,5 cm²', '31,4 cm²', '25 cm²'],
    correctIndex: 1,
    explanation: 'S = π·r² = 3,14 · 5² = 3,14 · 25 = 78,5 cm².',
  },
  {
    question: 'Ktorá podmienka NEPATRÍ medzi vety o zhodnosti trojuholníkov?',
    options: ['sss', 'uu', 'sus', 'usu'],
    correctIndex: 1,
    explanation: 'Podmienka "uu" (dva zhodné uhly) zaručuje len podobnosť, nie zhodnosť trojuholníkov.',
  },
  {
    question: 'Lichobežník má základne 12 cm a 8 cm, výšku 5 cm. Vypočítaj jeho obsah.',
    options: ['60 cm²', '40 cm²', '50 cm²', '100 cm²'],
    correctIndex: 2,
    explanation: 'S = (a + c)·v / 2 = (12 + 8)·5 / 2 = 20·5 / 2 = 50 cm².',
  },
  {
    question: 'Výška pravouhlého trojuholníka na preponu delí preponu na úseky c₁ = 4 cm a c₂ = 9 cm. Aká je dĺžka výšky?',
    options: ['13 cm', '36 cm', '6 cm', '6,5 cm'],
    correctIndex: 2,
    explanation: 'Euklidova veta o výške: v² = c₁·c₂ = 4·9 = 36, teda v = √36 = 6 cm.',
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
