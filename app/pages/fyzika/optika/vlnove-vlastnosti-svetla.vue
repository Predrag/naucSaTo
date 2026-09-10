<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/optika" class="hover:text-emerald-600 transition-colors">Optika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Vlnové vlastnosti svetla</span>
    </nav>

    <!-- Header -->
    <div class="bg-red-500 rounded-2xl p-8 mb-10 text-white">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-4xl">🌈</span>
        <h1 class="text-3xl font-extrabold">Vlnové vlastnosti svetla</h1>
      </div>
      <p class="text-red-100 text-lg">Optika · Gymnázium</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Svetlo je elektromagnetické vlnenie. Práve preto vykazuje javy typické pre vlny — rozkladá sa
      na spektrum, interferuje, ohýba sa na prekážkach a dá sa polarizovať. Pochopenie týchto javov
      viedlo k vzniku kvantovel fyziky a vyústilo do objavu fotónu.
    </p>

    <!-- ── Section 1: Disperzia ──────────────────────────────────────────────── -->
    <section aria-label="Disperzia svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        1. Disperzia svetla
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Biele svetlo je <strong>zmes vlnení rôznych vlnových dĺžok</strong>. V rôznych prostrediach
        (napr. sklo, voda) sa rôzne vlnové dĺžky lámu rôzne — každá má iný index lomu. Rozkladanie
        bieleho svetla na farebné spektrum sa nazýva <strong>disperzia</strong>.
      </p>

      <!-- Index lomu závisí od vlnovej dĺžky -->
      <div class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-red-800 mb-3">Závislosť indexu lomu od vlnovej dĺžky</h3>
        <p class="text-gray-700 mb-3 text-sm leading-relaxed">
          Index lomu skla pre fialové svetlo je väčší ako pre červené. Preto sa fialová farba láme viac
          a pri prechode hranolom alebo kvapkou dažďa sa spektrum rozloží.
        </p>
        <div class="bg-white rounded-xl p-4 text-center">
          <MathFormula display formula="n_{\text{fialová}} > n_{\text{zelená}} > n_{\text{červená}}" />
        </div>
      </div>

      <!-- Spektrum farieb -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Viditeľné spektrum</h3>
        <div class="overflow-x-auto rounded-2xl border border-gray-200">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-700 text-white">
                <th scope="col" class="text-left px-4 py-3 font-semibold">Farba</th>
                <th scope="col" class="text-left px-4 py-3 font-semibold">Vlnová dĺžka λ (nm)</th>
                <th scope="col" class="text-left px-4 py-3 font-semibold">Poznámka</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in spectrumTable" :key="row.color" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-4 py-3 font-medium flex items-center gap-2">
                  <span class="inline-block w-4 h-4 rounded-full" :style="{ background: row.hex }" />
                  {{ row.color }}
                </td>
                <td class="px-4 py-3 text-gray-700">{{ row.lambda }}</td>
                <td class="px-4 py-3 text-gray-500">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SVG hranol -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 flex justify-center mb-5">
        <svg viewBox="0 0 320 180" class="w-full max-w-sm" aria-label="Rozklad bieleho svetla hranolom na spektrum">
          <!-- Hranol -->
          <polygon points="120,20 240,160 0,160" fill="#E0F2FE" stroke="#38BDF8" stroke-width="2"/>
          <!-- Biely lúč (dopadajúci) -->
          <line x1="0" y1="80" x2="95" y2="80" stroke="#374151" stroke-width="2.5" marker-end="url(#arr-w)"/>
          <defs>
            <marker id="arr-w" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0 0,7 2.5,0 5" fill="#374151"/>
            </marker>
          </defs>
          <text x="30" y="74" fill="#374151" font-size="11" font-weight="bold">Biele svetlo</text>
          <!-- Rozložené lúče -->
          <line x1="152" y1="92" x2="305" y2="55" stroke="#8B5CF6" stroke-width="2"/>
          <line x1="152" y1="96" x2="305" y2="75" stroke="#3B82F6" stroke-width="2"/>
          <line x1="152" y1="100" x2="305" y2="95" stroke="#22C55E" stroke-width="2"/>
          <line x1="152" y1="104" x2="305" y2="115" stroke="#EAB308" stroke-width="2"/>
          <line x1="152" y1="108" x2="305" y2="135" stroke="#EF4444" stroke-width="2"/>
          <!-- Popisky farieb -->
          <text x="308" y="58" fill="#8B5CF6" font-size="10" font-weight="bold">fialová</text>
          <text x="308" y="78" fill="#3B82F6" font-size="10" font-weight="bold">modrá</text>
          <text x="308" y="98" fill="#22C55E" font-size="10" font-weight="bold">zelená</text>
          <text x="308" y="118" fill="#EAB308" font-size="10" font-weight="bold">žltá</text>
          <text x="308" y="138" fill="#EF4444" font-size="10" font-weight="bold">červená</text>
        </svg>
      </div>

      <!-- Dúha -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <h3 class="font-semibold text-gray-900 mb-2">Dúha — disperzia v prírode</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          Dúha vzniká <strong>disperziou a odrazom</strong> slnečného svetla v kvapkách dažďa.
          Každá kvapka rozloží svetlo na spektrum, pričom červená farba odchádza z kvapky pod uhlom
          ≈ 42°, fialová pod ≈ 40°. Pozorovateľ vidí každú farbu z iných kvapiek.
        </p>
      </div>
    </section>

    <!-- ── Section 2: Interferencia ─────────────────────────────────────────── -->
    <section aria-label="Interferencia svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        2. Interferencia svetla
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Interferencia je <strong>skladanie vlnení</strong>. Keď sa stretnú dva koherentné svetelné lúče
        (rovnaká frekvencia, stály fázový rozdiel), zosilnia sa alebo zoslabia — podľa toho, aký majú
        <strong>dráhový rozdiel</strong> Δ.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Konštruktívna -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
          <h3 class="font-bold text-emerald-800 mb-3">Konštruktívna interferencia</h3>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">
            Vlny sa <strong>zosilňujú</strong> — maximum intenzity. Nastáva, keď dráhový rozdiel je
            celočíselný násobok vlnovej dĺžky.
          </p>
          <div class="bg-white rounded-xl p-3 text-center">
            <MathFormula display formula="\Delta = k \lambda \quad (k = 0, \pm 1, \pm 2, \ldots)" />
          </div>
        </div>

        <!-- Deštruktívna -->
        <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h3 class="font-bold text-red-800 mb-3">Deštruktívna interferencia</h3>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">
            Vlny sa <strong>zoslabia</strong> — minimum intenzity (tma). Nastáva, keď dráhový rozdiel
            je polopárny násobok vlnovej dĺžky.
          </p>
          <div class="bg-white rounded-xl p-3 text-center">
            <MathFormula display formula="\Delta = \left(k + \tfrac{1}{2}\right)\lambda \quad (k = 0, \pm 1, \ldots)" />
          </div>
        </div>

      </div>

      <!-- SVG: interferenčné pruhy -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Interferenčné pruhy (Youngov pokus)</p>
        <svg viewBox="0 0 340 120" class="w-full" aria-label="Interferenčné pruhy na tienidli">
          <!-- Tienidlo -->
          <rect x="0" y="0" width="340" height="120" fill="#1F2937"/>
          <!-- Pruhy: striedanie svetlých a tmavých -->
          <rect x="0" y="0" width="340" height="120" fill="url(#interference-grad)"/>
          <defs>
            <linearGradient id="interference-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"    stop-color="#1F2937"/>
              <stop offset="8%"    stop-color="#FEF9C3"/>
              <stop offset="16%"   stop-color="#1F2937"/>
              <stop offset="24%"   stop-color="#FDE68A"/>
              <stop offset="32%"   stop-color="#1F2937"/>
              <stop offset="40%"   stop-color="#FBBF24"/>
              <stop offset="48%"   stop-color="#1F2937"/>
              <stop offset="56%"   stop-color="#F59E0B" stop-opacity="0.9"/>
              <stop offset="64%"   stop-color="#1F2937"/>
              <stop offset="72%"   stop-color="#FDE68A"/>
              <stop offset="80%"   stop-color="#1F2937"/>
              <stop offset="88%"   stop-color="#FEF9C3"/>
              <stop offset="100%"  stop-color="#1F2937"/>
            </linearGradient>
          </defs>
          <text x="170" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold" opacity="0.7">svetlé = konštruktívna, tmavé = deštruktívna</text>
        </svg>
      </div>

      <!-- Tenké vrstvy -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 class="font-semibold text-blue-800 mb-2">Interferencia na tenkých vrstvách</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          Dúhové farby na mydlovej bubline alebo olejovej škvrne na vode sú dôsledkom
          <strong>interferencie svetla odrazeného od predného a zadného povrchu</strong> tenkej vrstvy.
          Rôzne hrúbky vrstvy zosilnia rôzne farby.
        </p>
      </div>
    </section>

    <!-- ── Section 3: Difrakčná mriežka ─────────────────────────────────────── -->
    <section aria-label="Difrakčná mriežka" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        3. Difrakčná mriežka
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Difrakčná mriežka je optický prvok s <strong>tisíckami rovnobežných štrbín</strong> na milimeter.
        Svetlo sa na každej štrbine ohýba (difrakuje) a vlnenia z jednotlivých štrbín spolu interferujú —
        pre každú vlnovú dĺžku vznikajú maximá pod iným uhlom. Mriežka teda rozkladá svetlo na spektrum,
        podobne ako hranol, ale oveľa presnejšie.
      </p>

      <!-- Základná rovnica -->
      <div class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-red-800 mb-3">Základná rovnica difrakčnej mriežky</h3>
        <div class="bg-white rounded-xl p-4 text-center mb-3">
          <MathFormula display formula="d \cdot \sin\alpha = k \cdot \lambda" />
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-700">
          <div class="bg-white rounded-lg p-2 text-center">
            <MathFormula formula="d" />
            <p class="mt-1 text-gray-500">mriežková konštanta (vzdialenosť štrbín)</p>
          </div>
          <div class="bg-white rounded-lg p-2 text-center">
            <MathFormula formula="\alpha" />
            <p class="mt-1 text-gray-500">uhol difrakcie k-tého maxima</p>
          </div>
          <div class="bg-white rounded-lg p-2 text-center">
            <MathFormula formula="k" />
            <p class="mt-1 text-gray-500">rád difrakcie (0, ±1, ±2, …)</p>
          </div>
          <div class="bg-white rounded-lg p-2 text-center">
            <MathFormula formula="\lambda" />
            <p class="mt-1 text-gray-500">vlnová dĺžka svetla</p>
          </div>
        </div>
      </div>

      <!-- Mriežková konštanta -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-900 mb-3">Mriežková konštanta</h3>
        <p class="text-sm text-gray-700 mb-3">
          Ak mriežka má <em>N</em> štrbín na milimeter, mriežková konštanta je:
        </p>
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <MathFormula display formula="d = \frac{1}{N} \quad [\text{mm alebo m}]" />
        </div>
        <p class="text-xs text-gray-500 mt-2">
          Príklad: mriežka 500 štrbín/mm → <MathFormula formula="d = \frac{1}{500}\;\text{mm} = 2 \times 10^{-6}\;\text{m} = 2\;\mu\text{m}" />
        </p>
      </div>

      <!-- Meranie vlnovej dĺžky — príklad -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <h3 class="font-semibold text-gray-900 mb-3">Meranie vlnovej dĺžky — príklad</h3>
        <p class="text-sm text-gray-700 mb-3 leading-relaxed">
          Mriežka s <MathFormula formula="d = 2\;\mu\text{m}" /> zobrazuje prvý rád maxima (<MathFormula formula="k=1" />)
          červeného lasera pod uhlom <MathFormula formula="\alpha = 19{,}6°" />.
          Vlnová dĺžka:
        </p>
        <div class="bg-gray-50 rounded-lg p-4 text-center">
          <MathFormula display formula="\lambda = \frac{d\cdot\sin\alpha}{k} = \frac{2{,}0 \times 10^{-6} \cdot \sin 19{,}6°}{1} \approx 670\;\text{nm}" />
        </div>
      </div>
    </section>

    <!-- ── Section 4: Spektrá ─────────────────────────────────────────────────── -->
    <section aria-label="Spektrá svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        4. Spektrá svetla
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Spojité spektrum -->
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h3 class="font-bold text-orange-800 mb-2">Spojité spektrum</h3>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">
            Žeravé (horúce) tuhé teleso alebo hustý plyn vyžaruje <strong>všetky vlnové dĺžky</strong>
            viditeľného svetla bez prerušenia. Spektrum tvorí plynulý farebný pás od červenej po fialovú.
          </p>
          <p class="text-xs text-gray-500 italic">Príklady: žiarovka, Slnko (približne), uhlíkový oblúk</p>
          <!-- Mini spektrum bar -->
          <div class="mt-3 h-5 rounded-full" style="background: linear-gradient(to right, #EF4444, #F97316, #EAB308, #22C55E, #3B82F6, #8B5CF6);" />
        </div>

        <!-- Čiarové spektrum -->
        <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5">
          <h3 class="font-bold text-violet-800 mb-2">Emisné čiarové spektrum</h3>
          <p class="text-sm text-gray-700 mb-3 leading-relaxed">
            Rozžeravené plyny nízkeho tlaku (atómy) žiaria len na <strong>určitých vlnových dĺžkach</strong>
            — podľa energetických hladín daného prvku. Spektrum tvorí ostré čiary na tmavom pozadí.
          </p>
          <p class="text-xs text-gray-500 italic">Príklady: sodíková lampa (žltá), ortuťová lampa, neón (červená)</p>
          <!-- Čiarové spektrum simulácia -->
          <div class="mt-3 relative h-5 rounded-full bg-gray-900 overflow-hidden">
            <div class="absolute top-0 bottom-0 w-1 rounded" style="left: 15%; background: #8B5CF6;" />
            <div class="absolute top-0 bottom-0 w-1 rounded" style="left: 30%; background: #3B82F6;" />
            <div class="absolute top-0 bottom-0 w-1.5 rounded" style="left: 55%; background: #22C55E;" />
            <div class="absolute top-0 bottom-0 w-2 rounded" style="left: 72%; background: #EAB308;" />
            <div class="absolute top-0 bottom-0 w-1 rounded" style="left: 88%; background: #EF4444;" />
          </div>
        </div>

      </div>

      <!-- Absorpčné spektrum -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <h3 class="font-semibold text-gray-900 mb-2">Absorpčné spektrum</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          Keď biele svetlo prechádza chladnejším plynom, atómy pohlcujú (absorbujú) práve tie vlnové dĺžky,
          ktoré by sami vyžarovali. Vo spojitom spektre sa objavia tmavé čiary —
          <strong>Fraunhoferove čiary</strong>. Takto identifikujeme prvky v atmosférach hviezd.
        </p>
      </div>
    </section>

    <!-- ── Section 5: Fotoelektrický efekt ───────────────────────────────────── -->
    <section aria-label="Fotoelektrický efekt" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        5. Fotoelektrický efekt
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Fotoelektrický efekt je <strong>vyrazenie elektrónov z kovu svetlom</strong>. Klasická vlnová teória
        ho nedokázala vysvetliť — elektrón sa uvoľní len ak frekvencia svetla presiahne medzovú hodnotu,
        bez ohľadu na intenzitu. Einstein (1905) vysvetlil jav kvantovou teóriou: svetlo sa šíri
        v <strong>kvantách — fotónoch</strong>.
      </p>

      <!-- Energia fotónu -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-5">
        <h3 class="font-bold text-yellow-800 mb-3">Energia fotónu</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2">Závislosť od frekvencie</p>
            <MathFormula display formula="E = h \cdot f" />
          </div>
          <div class="bg-white rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2">Závislosť od vlnovej dĺžky</p>
            <MathFormula display formula="E = \frac{h \cdot c}{\lambda}" />
          </div>
        </div>
        <div class="mt-3 bg-white rounded-lg p-3 text-xs text-gray-600 grid grid-cols-3 gap-2 text-center">
          <div><MathFormula formula="h = 6{,}626 \times 10^{-34}\;\text{J·s}" /><p class="text-gray-400 mt-1">Planckova konštanta</p></div>
          <div><MathFormula formula="f" /> — frekvencia (Hz)<p class="text-gray-400 mt-1"/></div>
          <div><MathFormula formula="c = 3 \times 10^8\;\text{m/s}" /><p class="text-gray-400 mt-1">rýchlosť svetla</p></div>
        </div>
      </div>

      <!-- Einsteinova rovnica -->
      <div class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-5">
        <h3 class="font-bold text-red-800 mb-3">Einsteinova rovnica fotoelektrického efektu</h3>
        <div class="bg-white rounded-xl p-4 text-center mb-3">
          <MathFormula display formula="E_k = h \cdot f - W_v" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-700">
          <div class="bg-white rounded-lg p-3 text-center">
            <MathFormula formula="E_k = \tfrac{1}{2}m_e v^2" />
            <p class="text-gray-500 mt-1">kinetická energia vyrazeného elektrónu</p>
          </div>
          <div class="bg-white rounded-lg p-3 text-center">
            <MathFormula formula="h \cdot f" />
            <p class="text-gray-500 mt-1">energia dopadajúceho fotónu</p>
          </div>
          <div class="bg-white rounded-lg p-3 text-center">
            <MathFormula formula="W_v" />
            <p class="text-gray-500 mt-1">výstupná práca — energia potrebná na vyrazenie elektrónu z kovu</p>
          </div>
        </div>
      </div>

      <!-- Medzová frekvencia -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-5">
        <h3 class="font-semibold text-gray-900 mb-3">Medzová frekvencia a vlnová dĺžka</h3>
        <p class="text-sm text-gray-700 mb-3">
          Elektrón sa uvoľní len ak <MathFormula formula="h\cdot f \geq W_v" />. Medzová (prahová) frekvencia:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <MathFormula display formula="f_0 = \frac{W_v}{h}" />
          </div>
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <MathFormula display formula="\lambda_0 = \frac{h \cdot c}{W_v}" />
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-3">
          Ak <MathFormula formula="f < f_0" /> (alebo <MathFormula formula="\lambda > \lambda_0" />), elektrón sa nevyrazí
          — nezáleží na intenzite svetla.
        </p>
      </div>

      <!-- Záverné porovnanie -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <h3 class="font-semibold text-gray-900 mb-3">Dualita vlna–častica</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="font-bold text-blue-800 mb-1">Svetlo ako vlna</p>
            <ul class="text-gray-700 space-y-1 text-xs list-disc list-inside">
              <li>interferencia, difrakcia</li>
              <li>disperzia, polarizácia</li>
              <li>vlnová dĺžka, frekvencia</li>
            </ul>
          </div>
          <div class="bg-amber-50 rounded-lg p-4">
            <p class="font-bold text-amber-800 mb-1">Svetlo ako fotón (častica)</p>
            <ul class="text-gray-700 space-y-1 text-xs list-disc list-inside">
              <li>fotoelektrický efekt</li>
              <li>energia E = hf</li>
              <li>hybnosť fotónu <MathFormula formula="p = h/\lambda" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 6: Polarizácia ─────────────────────────────────────────────── -->
    <section aria-label="Polarizácia svetla" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-red-400 pb-2">
        6. Polarizácia svetla
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Bežné svetlo je <strong>nepolarizované</strong> — elektrické pole kmitá vo všetkých smeroch
        kolmo na smer šírenia. <strong>Polarizáciou</strong> obmedzíme kmitanie len na jeden smer.
        Svetlo je priečne vlnenie, preto sa dá polarizovať (na rozdiel od zvuku, ktorý je pozdĺžne vlnenie).
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div v-for="pm in polarizaciaMetody" :key="pm.label" class="bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl">{{ pm.icon }}</span>
          <p class="font-bold text-gray-900 mt-2 mb-1">{{ pm.label }}</p>
          <p class="text-xs text-gray-500 leading-relaxed">{{ pm.desc }}</p>
        </div>
      </div>

      <!-- Malusov zákon -->
      <div class="bg-red-50 border border-red-200 rounded-xl p-5">
        <h3 class="font-semibold text-red-800 mb-3">Malusov zákon</h3>
        <p class="text-sm text-gray-700 mb-3">
          Keď polarizované svetlo prechádza druhým polarizátorom (analyzátorom) otočeným o uhol <MathFormula formula="\varphi" />
          voči prvému, intenzita sa zníži podľa:
        </p>
        <div class="bg-white rounded-xl p-4 text-center">
          <MathFormula display formula="I = I_0 \cdot \cos^2\varphi" />
        </div>
        <p class="text-xs text-gray-500 mt-2">
          Pri <MathFormula formula="\varphi = 90°" /> je <MathFormula formula="I = 0" /> — polarizátory sú „skrížené", svetlo neprechádza.
          Využitie: LCD displeje, polarizačné okuliare.
        </p>
      </div>
    </section>

    <!-- ── Zhrnutie ───────────────────────────────────────────────────────────── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-4">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Disperzia</strong>: biele svetlo sa v prostredí rozkladá na farebné spektrum, lebo rôzne vlnové dĺžky majú rôzny index lomu.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Interferencia</strong>: konštruktívna pri <MathFormula formula="\Delta = k\lambda" />, deštruktívna pri <MathFormula formula="\Delta = (k+\tfrac{1}{2})\lambda" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Difrakčná mriežka</strong>: <MathFormula formula="d\cdot\sin\alpha = k\lambda" /> — umožňuje presné meranie vlnových dĺžok.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Spektrá</strong>: spojité (žeravé teleso) vs. čiarové (žeravý plyn — emisné, absorpčné).</span>
        </li>
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Fotoelektrický efekt</strong>: <MathFormula formula="E_k = hf - W_v" />, fotón má energiu <MathFormula formula="E = hf = hc/\lambda" />, <MathFormula formula="h = 6{,}626\times10^{-34}\;\text{J·s}" />.</span>
        </li>
        <li class="flex gap-2">
          <span class="text-red-500 font-bold">✓</span>
          <span><strong>Polarizácia</strong>: svetlo je priečne vlnenie; Malusov zákon <MathFormula formula="I = I_0\cos^2\varphi" />.</span>
        </li>
      </ul>
    </div>

    <!-- ── Kvíz ───────────────────────────────────────────────────────────────── -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <!-- Výsledok -->
      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <!-- Aktívna otázka -->
      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <span class="text-sm font-semibold text-red-500">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-red-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">
          {{ currentQuestion.question }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
            :disabled="selectedAnswer !== null"
            :class="[
              'text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150',
              selectedAnswer === null
                ? 'border-gray-200 text-gray-700 hover:border-red-400 hover:bg-red-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            {{ option }}
          </button>
        </div>

        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div
              data-testid="quiz-feedback"
              :class="[
                'rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800',
              ]">
              <p class="font-bold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
              </p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
                @click="nextQuestion">
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ── Statický obsah ──────────────────────────────────────────────────────────

const spectrumTable = [
  { color: 'Fialová', lambda: '380 – 450', hex: '#8B5CF6', note: 'Najkratšia viditeľná vlnová dĺžka, najväčší lom' },
  { color: 'Modrá',   lambda: '450 – 495', hex: '#3B82F6', note: 'Rozptýlená v atmosfére — preto modré nebo' },
  { color: 'Zelená',  lambda: '495 – 570', hex: '#22C55E', note: 'Oko naň najcitlivejšie' },
  { color: 'Žltá',    lambda: '570 – 590', hex: '#EAB308', note: 'Sodíkové výbojky' },
  { color: 'Oranžová',lambda: '590 – 620', hex: '#F97316', note: '' },
  { color: 'Červená', lambda: '620 – 750', hex: '#EF4444', note: 'Najdlhšia viditeľná vlnová dĺžka, najmenší lom' },
]

const polarizaciaMetody = [
  {
    icon: '🔲',
    label: 'Polarizačný filter',
    desc: 'Materiál prepúšťa len kmitanie v jednom smere. Používa sa vo fotografii, LCD displejoch.',
  },
  {
    icon: '💧',
    label: 'Odrazom od plochy',
    desc: 'Svetlo odrazené od vody alebo skla je čiastočne polarizované — preto polarizačné okuliare potláčajú odlesky.',
  },
  {
    icon: '🔬',
    label: 'Dvojlomom',
    desc: 'Kryštály ako kalcit (Island spar) rozdelia lúč na dva rôzne polarizované lúče.',
  },
]

// ── Kvíz ────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je príčinou disperzie svetla v skle?',
    options: [
      'Rôzna rýchlosť svetla vo vákuu pre rôzne farby',
      'Rôzny index lomu skla pre rôzne vlnové dĺžky',
      'Rôzna amplitúda svetelných vĺn',
      'Ohýbanie svetla na hranách skla',
    ],
    correctIndex: 1,
    explanation: 'Disperzia vzniká preto, že index lomu závisí od vlnovej dĺžky — <em>n</em> je väčší pre kratšie vlnové dĺžky (fialová). Vo vákuu sa všetky farby šíria rovnakou rýchlosťou c.',
  },
  {
    question: 'Pri akej podmienke nastane konštruktívna interferencia dvoch svetelných vĺn?',
    options: [
      `Dráhový rozdiel ${km('\\Delta = (k+\\frac{1}{2})\\lambda')}`,
      `Dráhový rozdiel ${km('\\Delta = k\\lambda')} kde k = 0, ±1, ±2, …`,
      'Amplitúdy oboch vĺn musia byť rovnaké',
      'Frekvencie oboch vĺn musia byť rôzne',
    ],
    correctIndex: 1,
    explanation: `Konštruktívna interferencia (maximum) nastáva pri celočíselnom dráhovom rozdiele: ${km('\\Delta = k\\lambda')}. Deštruktívna (minimum) pri ${km('\\Delta = (k+\\frac{1}{2})\\lambda')}.`,
  },
  {
    question: `Difrakčná mriežka má ${km('d = 1{,}5\\;\\mu\\text{m}')}. Pre aký uhol nastane 1. maximum červeného svetla s ${km('\\lambda = 660\\;\\text{nm}')}?`,
    options: ['26°', '44°', '34°', '56°'],
    correctIndex: 0,
    explanation: `${km('\\sin\\alpha = \\frac{k\\lambda}{d} = \\frac{1 \\cdot 660\\times10^{-9}}{1{,}5\\times10^{-6}} = 0{,}44 \\Rightarrow \\alpha \\approx 26°')}`,
  },
  {
    question: 'Aká je energia fotónu viditeľného zeleného svetla s vlnovou dĺžkou 550 nm? (h = 6,626×10⁻³⁴ J·s, c = 3×10⁸ m/s)',
    options: [
      '3,62 × 10⁻¹⁹ J',
      '1,20 × 10⁻²⁵ J',
      '5,50 × 10⁻¹⁵ J',
      '8,80 × 10⁻³⁴ J',
    ],
    correctIndex: 0,
    explanation: `${km('E = \\frac{hc}{\\lambda} = \\frac{6{,}626\\times10^{-34}\\cdot 3\\times10^8}{550\\times10^{-9}} \\approx 3{,}62\\times10^{-19}\\;\\text{J}')}`,
  },
  {
    question: 'Výstupná práca kovu je Wv = 2,3 eV. Svetlo frekvencie f = 8×10¹⁴ Hz naň dopadne. Čo nastane?',
    options: [
      'Elektrón sa neuvoľní — frekvencia je príliš nízka',
      'Elektrón sa uvoľní s kinetickou energiou ≈ 1,0 eV',
      'Elektrón sa uvoľní bez kinetickej energie',
      'Elektrón sa uvoľní s kinetickou energiou ≈ 2,3 eV',
    ],
    correctIndex: 1,
    explanation: `${km('E = hf = 6{,}626\\times10^{-34}\\cdot 8\\times10^{14} \\approx 5{,}3\\times10^{-19}\\;\\text{J} \\approx 3{,}3\\;\\text{eV}')} → ${km('E_k = 3{,}3 - 2{,}3 = 1{,}0\\;\\text{eV}')}. Elektrón sa uvoľní.`,
  },
  {
    question: 'Polarizované svetlo intenzity I₀ prechádza analyzátorom otočeným o 60° voči polarizátoru. Aká je výsledná intenzita?',
    options: [
      '0,25 I₀',
      '0,50 I₀',
      '0,75 I₀',
      '0,87 I₀',
    ],
    correctIndex: 0,
    explanation: `Malusov zákon: ${km('I = I_0\\cos^2\\varphi = I_0\\cos^2 60° = I_0\\cdot(0{,}5)^2 = 0{,}25\\;I_0')}.`,
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
  if (r === 1) return '🏆'
  if (r >= 0.7) return '🎉'
  if (r >= 0.4) return '💪'
  return '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length
  if (r === 1) return 'Perfektné! Zvládol si všetky otázky!'
  if (r >= 0.7) return 'Výborne! Látku ovládaš dobre.'
  if (r >= 0.4) return 'Nie je to zlé, ale oplatí sa zopakovať.'
  return 'Prejdi si tému ešte raz a skús to znova.'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
