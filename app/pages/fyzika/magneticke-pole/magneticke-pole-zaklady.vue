<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-blue-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/magneticke-pole" class="hover:text-blue-600 transition-colors">Magnetické pole</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Magnetické pole — základy</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧭</span>
      <h1 class="text-4xl font-extrabold text-blue-700">{{ activeTitle ?? 'Magnetické pole — základy' }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Magnetické pole obklopuje magnety aj vodiče s prúdom. Pochopenie jeho štruktúry a vlastností je základom elektrotechniky, motorov a mnohých moderných technológií.
    </p>

    <!-- Section 1: Čo je magnetické pole -->
    <section aria-label="Čo je magnetické pole" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5">Čo je magnetické pole?</h2>

      <p class="text-gray-700 mb-5">
        Magnetické pole je <strong>silové pole</strong>, ktoré existuje v okolí magnetov a elektrických vodičov, ktorými preteká prúd. Pôsobí silami na iné magnety a pohybujúce sa nabité častice.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🧲</span>
            <h3 class="text-xl font-bold text-blue-800">Zdroje magnetického poľa</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> Stále (permanentné) magnety</li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> Vodiče s elektrickým prúdom</li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> Pohybujúce sa nabité častice</li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> Zem (geomagnetické pole)</li>
          </ul>
        </div>

        <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">📐</span>
            <h3 class="text-xl font-bold text-indigo-800">Magnetická indukcia B</h3>
          </div>
          <p class="text-sm text-gray-700 mb-3">
            Základná veličina charakterizujúca magnetické pole je <strong>magnetická indukcia</strong>.
          </p>
          <div class="bg-white rounded-lg p-3 text-center">
            <MathFormula display formula="\vec{B} \quad [\text{T}]\ \text{(tesla)}" />
          </div>
          <p class="text-xs text-gray-500 mt-2">Vektorová veličina — má veľkosť aj smer.</p>
        </div>

      </div>

      <!-- Tabuľka veličín -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-blue-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Veličina</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Poznámka</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in velicinyTable" :key="row.name" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ row.name }}</td>
              <td class="px-5 py-3 text-blue-700" v-html="row.symbol" />
              <td class="px-5 py-3 text-indigo-700">{{ row.unit }}</td>
              <td class="px-5 py-3 text-gray-600">{{ row.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Typické hodnoty B -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Typické hodnoty magnetickej indukcie</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div v-for="val in typickeHodnoty" :key="val.label" class="bg-white rounded-lg p-3 text-center border border-gray-100">
            <p class="text-xs text-gray-400 mb-1">{{ val.label }}</p>
            <p class="font-bold text-blue-700 text-sm">{{ val.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Magnetické indukčné čiary -->
    <section aria-label="Magnetické indukčné čiary" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Magnetické indukčné čiary</h2>
      <p class="text-gray-500 mb-5">
        Magnetické pole znázorňujeme pomocou indukčných čiar — imaginárnych kriviek, ktoré zobrazujú štruktúru poľa.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Vlastnosti čiar -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5">
          <h3 class="font-bold text-gray-900 mb-4">Vlastnosti indukčných čiar</h3>
          <ul class="space-y-3">
            <li v-for="prop in indukcneCiary" :key="prop.title" class="flex gap-3">
              <span class="text-xl mt-0.5">{{ prop.icon }}</span>
              <div>
                <p class="font-semibold text-sm text-gray-900">{{ prop.title }}</p>
                <p class="text-xs text-gray-500">{{ prop.desc }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- SVG: tyčový magnet -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center">
          <h3 class="font-bold text-gray-900 mb-4 self-start">Tyčový magnet — indukčné čiary</h3>
          <svg viewBox="0 0 260 190" class="w-full max-w-xs" aria-label="Magnetické indukčné čiary okolo tyčového magnetu">
            <!-- Indukčné čiary (elipsy) -->
            <ellipse cx="130" cy="95" rx="110" ry="75" fill="none" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,2"/>
            <ellipse cx="130" cy="95" rx="85" ry="55" fill="none" stroke="#60A5FA" stroke-width="1.5"/>
            <ellipse cx="130" cy="95" rx="60" ry="38" fill="none" stroke="#3B82F6" stroke-width="1.5"/>
            <!-- Šípky na čiarach (smer: od N k S vonku) -->
            <polygon points="40,95 34,90 34,100" fill="#3B82F6"/>
            <polygon points="220,95 226,90 226,100" fill="#60A5FA"/>
            <polygon points="130,20 125,26 135,26" fill="#93C5FD"/>
            <!-- Magnet — telo -->
            <rect x="90" y="78" width="80" height="34" rx="4" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
            <!-- N pól -->
            <rect x="90" y="78" width="40" height="34" rx="4" fill="#3B82F6"/>
            <text x="110" y="100" fill="white" font-size="15" font-weight="bold" text-anchor="middle">N</text>
            <!-- S pól -->
            <rect x="130" y="78" width="40" height="34" rx="4" fill="#EF4444"/>
            <text x="150" y="100" fill="white" font-size="15" font-weight="bold" text-anchor="middle">S</text>
            <!-- Popis -->
            <text x="32" y="88" fill="#3B82F6" font-size="10">von</text>
            <text x="214" y="88" fill="#60A5FA" font-size="10">dnu</text>
          </svg>
          <p class="text-xs text-gray-500 mt-2 text-center">Čiary vychádzajú zo severného pólu (N) a vstupujú do južného (S). Vnútri magnetu pokračujú od S k N.</p>
        </div>

      </div>

      <!-- Hustota čiar = intenzita poľa -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <div class="flex gap-3 items-start">
          <span class="text-2xl">💡</span>
          <div>
            <p class="font-bold text-blue-900 mb-1">Hustota čiar = intenzita poľa</p>
            <p class="text-sm text-gray-700">
              Čím hustejšie sú indukčné čiary v danom mieste, tým <strong>silnejšie je magnetické pole</strong>. Tam, kde sú čiary rovnobežné a rovnako husté, hovoríme o <strong>homogénnom (rovnomernom) magnetickom poli</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Stály magnet a zemské magnetické pole -->
    <section aria-label="Stály magnet a zemské magnetické pole" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Stály magnet a Zem ako magnet</h2>
      <p class="text-gray-500 mb-5">
        Stály magnet je <strong>magnetický dipól</strong> — má vždy dva póly, ktoré nemožno od seba oddeliť.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <div class="bg-white border border-gray-200 rounded-2xl p-5">
          <h3 class="font-bold text-gray-900 mb-4">Magnetický dipól</h3>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex gap-2">
              <span class="font-bold text-blue-600 w-6">N</span>
              <span>Severný pól (north) — indukčné čiary <strong>vychádzajú</strong></span>
            </li>
            <li class="flex gap-2">
              <span class="font-bold text-red-600 w-6">S</span>
              <span>Južný pól (south) — indukčné čiary <strong>vstupujú</strong></span>
            </li>
            <li class="flex gap-2 pt-2 border-t border-gray-100">
              <span class="text-yellow-500 font-bold">!</span>
              <span>Rovnomenné póly sa <strong>odpudzujú</strong>, rôznomenné sa <strong>priťahujú</strong></span>
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-500 font-bold">!</span>
              <span>Magnet <strong>nemožno rozdeliť</strong> na dva samostatné monopóly — vždy vzniknú dva dipóly</span>
            </li>
          </ul>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🌍</span>
            <h3 class="font-bold text-green-900">Geomagnetické pole</h3>
          </div>
          <p class="text-sm text-gray-700 mb-3">
            Zem správa ako obrovský tyčový magnet. Jej magnetické pole vzniká pohybmi roztaveného železa v zemskom jadre.
          </p>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex gap-2"><span class="text-green-600 font-bold">•</span> Magnetický severný pól Zeme sa nachádza pri geografickom južnom póle</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">•</span> Kompas ukazuje smerom k magnetickému severnému pólu</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">•</span> <MathFormula formula="B \approx 25\text{–}65\;\mu\text{T}" /> na povrchu Zeme</li>
            <li class="flex gap-2"><span class="text-green-600 font-bold">•</span> Chráni Zem pred slnečným vetrom</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Section 4: Oerstedov pokus a Ampérovo pravidlo -->
    <section aria-label="Oerstedov pokus a Ampérovo pravidlo pravej ruky" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Oerstedov pokus a Ampérovo pravidlo</h2>
      <p class="text-gray-500 mb-5">
        V roku 1820 Hans Christian Oersted objavil, že elektrický prúd vo vodiči vytvára magnetické pole — spojil tak elektrickú a magnetickú fyziku.
      </p>

      <!-- Oerstedov pokus -->
      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-gray-900 mb-3">Oerstedov pokus</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p class="text-sm text-gray-700 mb-3">
              Keď Oersted položil kompas vedľa vodiča a pustil prúd, ihla kompasu sa vychýlila. Po vypnutí prúdu sa ihla vrátila do pôvodnej polohy.
            </p>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p class="text-sm font-semibold text-yellow-800 mb-1">Záver pokusu:</p>
              <p class="text-sm text-gray-700">
                Elektrický prúd vytvára okolo vodiča <strong>magnetické pole</strong>. Smer magnetického poľa závisí od smeru prúdu.
              </p>
            </div>
          </div>
          <!-- SVG: priamy vodič s prúdom a indukčnými čiarami -->
          <div class="flex flex-col items-center">
            <svg viewBox="0 0 200 200" class="w-full max-w-xs" aria-label="Magnetické pole okolo priameho vodiča s prúdom">
              <!-- Kružnice indukčných čiar -->
              <circle cx="100" cy="100" r="70" fill="none" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,2"/>
              <circle cx="100" cy="100" r="50" fill="none" stroke="#60A5FA" stroke-width="1.5"/>
              <circle cx="100" cy="100" r="30" fill="none" stroke="#3B82F6" stroke-width="2"/>
              <!-- Šípky smeru (proti smeru hodinových ručičiek pre prúd smerom nahor) -->
              <polygon points="100,30 95,38 105,38" fill="#93C5FD" transform="rotate(180,100,100)"/>
              <polygon points="100,50 95,58 105,58" fill="#60A5FA" transform="rotate(180,100,100)"/>
              <polygon points="100,70 95,78 105,78" fill="#3B82F6" transform="rotate(180,100,100)"/>
              <!-- Vodič -->
              <rect x="94" y="10" width="12" height="180" rx="3" fill="#6B7280"/>
              <!-- Prúd — šípky -->
              <polygon points="100,15 95,28 105,28" fill="#FCD34D"/>
              <polygon points="100,90 95,103 105,103" fill="#FCD34D"/>
              <polygon points="100,150 95,163 105,163" fill="#FCD34D"/>
              <text x="112" y="30" fill="#FCD34D" font-size="10" font-weight="bold">I</text>
            </svg>
            <p class="text-xs text-gray-500 mt-1 text-center">Kruhové magnetické indukčné čiary okolo priameho vodiča s prúdom</p>
          </div>
        </div>
      </div>

      <!-- Ampérovo pravidlo pravej ruky -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-900 mb-3">Pravidlo pravej ruky — priamy vodič</h3>
          <div class="bg-white rounded-lg p-4 mb-3 text-center">
            <span class="text-5xl">🤜</span>
          </div>
          <p class="text-sm text-gray-700">
            Uchopíme vodič pravou rukou tak, aby <strong>palec ukazoval v smere prúdu</strong>. Ohnuté prsty potom ukazujú <strong>smer magnetických indukčných čiar</strong> (smer obiehania okolo vodiča).
          </p>
        </div>

        <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <h3 class="font-bold text-indigo-900 mb-3">Pravidlo pravej ruky — solenoid (cievka)</h3>
          <div class="bg-white rounded-lg p-4 mb-3 text-center">
            <span class="text-5xl">✊</span>
          </div>
          <p class="text-sm text-gray-700">
            Uchopíme cievku pravou rukou tak, aby <strong>prsty ukazovali v smere prúdu v závitkoch</strong>. Palec potom ukazuje <strong>smer severného pólu</strong> (smer poľa vo vnútri solenoidu).
          </p>
        </div>

      </div>
    </section>

    <!-- Section 5: Solenoid -->
    <section aria-label="Solenoid — cievka" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Solenoid — rovnomerné magnetické pole</h2>
      <p class="text-gray-500 mb-5">
        Solenoid je cievka navinutá do valcového tvaru. Vo vnútri solenoidu vzniká <strong>homogénne (rovnomerné) magnetické pole</strong>.
      </p>

      <div class="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <!-- SVG: solenoid -->
        <div class="flex justify-center mb-4">
          <svg viewBox="0 0 320 130" class="w-full max-w-md" aria-label="Solenoid s magnetickým poľom vo vnútri">
            <!-- Pole vo vnútri — rovnobežné čiary -->
            <line x1="50" y1="65" x2="270" y2="65" stroke="#3B82F6" stroke-width="2"/>
            <line x1="50" y1="50" x2="270" y2="50" stroke="#60A5FA" stroke-width="1.5"/>
            <line x1="50" y1="80" x2="270" y2="80" stroke="#60A5FA" stroke-width="1.5"/>
            <!-- Šípky smeru -->
            <polygon points="270,65 260,60 260,70" fill="#3B82F6"/>
            <polygon points="270,50 260,46 260,54" fill="#60A5FA"/>
            <polygon points="270,80 260,76 260,84" fill="#60A5FA"/>
            <!-- Závitky cievky (uprostenené) -->
            <ellipse cx="80"  cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <ellipse cx="110" cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <ellipse cx="140" cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <ellipse cx="170" cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <ellipse cx="200" cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <ellipse cx="230" cy="65" rx="8" ry="38" fill="none" stroke="#6B7280" stroke-width="2.5"/>
            <!-- N a S póly -->
            <rect x="36" y="42" width="22" height="46" rx="4" fill="#3B82F6" opacity="0.85"/>
            <text x="47" y="70" fill="white" font-size="14" font-weight="bold" text-anchor="middle">N</text>
            <rect x="242" y="42" width="22" height="46" rx="4" fill="#EF4444" opacity="0.85"/>
            <text x="253" y="70" fill="white" font-size="14" font-weight="bold" text-anchor="middle">S</text>
            <!-- Popis -->
            <text x="155" y="120" fill="#3B82F6" font-size="11" text-anchor="middle">homogénne pole B vo vnútri</text>
          </svg>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-sm font-semibold text-gray-900 mb-2">Magnetická indukcia vo vnútri solenoidu:</p>
            <MathFormula display formula="B = \mu_0 \cdot n \cdot I" />
            <p class="text-xs text-gray-500 mt-1">kde <MathFormula formula="n" /> je počet závitkov na meter dĺžky [m<sup>-1</sup>], <MathFormula formula="I" /> je prúd [A]</p>
          </div>
          <div class="space-y-2">
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">Permeabilita vákua</p>
              <MathFormula display formula="\mu_0 = 4\pi \times 10^{-7}\;\text{T}\cdot\text{m/A}" />
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-xs text-gray-400 mb-1">Počet závitkov na meter</p>
              <MathFormula display formula="n = \frac{N}{l}" />
            </div>
          </div>
        </div>
      </div>

      <!-- Príklad výpočtu -->
      <div class="bg-white border border-gray-200 rounded-xl p-5">
        <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — výpočet indukcie solenoidu</p>
        <div class="text-sm text-gray-700 space-y-2">
          <p>Solenoid má 500 závitkov, dĺžku 25 cm a preteká ním prúd 2 A. Aká je magnetická indukcia vo vnútri?</p>
          <div class="bg-gray-50 rounded-lg p-3 space-y-1">
            <p><strong>Dáno:</strong> <MathFormula formula="N = 500,\quad l = 0{,}25\;\text{m},\quad I = 2\;\text{A}" /></p>
            <p><strong>Počet závitkov na meter:</strong></p>
            <MathFormula display formula="n = \frac{N}{l} = \frac{500}{0{,}25} = 2000\;\text{m}^{-1}" />
            <p><strong>Magnetická indukcia:</strong></p>
            <MathFormula display formula="B = \mu_0 \cdot n \cdot I = 4\pi \times 10^{-7} \cdot 2000 \cdot 2 \approx 5{,}0 \times 10^{-3}\;\text{T} = 5{,}0\;\text{mT}" />
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span> Magnetické pole je silové pole v okolí magnetov a vodičov s prúdom. Charakterizuje ho <strong>magnetická indukcia</strong> <MathFormula formula="\vec{B}" /> [T].</li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span> Magnetické indukčné čiary sú <strong>uzavreté krivky</strong> — vychádzajú z N pólu a vstupujú do S pólu. Hustota čiar vyjadruje intenzitu poľa.</li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span> Stály magnet je <strong>dipól</strong> (N a S pól). Magnety sa nedajú rozdeliť na monopóly. Zem má vlastné geomagnetické pole.</li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span> <strong>Oerstedov pokus</strong> dokázal, že elektrický prúd vytvára magnetické pole. Smer poľa určuje <strong>Ampérovo pravidlo pravej ruky</strong>.</li>
        <li class="flex gap-2"><span class="text-blue-500 font-bold">✓</span> Solenoid vytvára homogénne pole vo vnútri: <MathFormula formula="B = \mu_0 n I" />, kde <MathFormula formula="n" /> je počet závitkov na meter.</li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-blue-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div class="bg-blue-500 h-1.5 rounded-full transition-all duration-300" :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">{{ currentQuestion.question }}</p>

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
                ? 'border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
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
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-blue-50 border border-blue-200 text-blue-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
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

const velicinyTable = [
  { name: 'Magnetická indukcia', symbol: km('\\vec{B}'), unit: 'T (tesla)', note: 'Vektorová — základná veličina poľa' },
  { name: 'Elektrický prúd', symbol: km('I'), unit: 'A (ampér)', note: 'Zdroj magnetického poľa' },
  { name: 'Permeabilita vákua', symbol: km('\\mu_0'), unit: 'T·m/A', note: km('4\\pi \\times 10^{-7}\\;\\text{T}\\cdot\\text{m/A}') },
  { name: 'Počet závitkov/meter', symbol: km('n'), unit: 'm⁻¹', note: 'Pre solenoid: n = N/l' },
]

const typickeHodnoty = [
  { label: 'Zemské magnetické pole', value: '25–65 μT' },
  { label: 'Chladničkový magnet', value: '~5 mT' },
  { label: 'MRI prístroj', value: '1,5–3 T' },
  { label: 'Neodymový magnet', value: '1–1,4 T' },
  { label: 'Silný laboratórny magnet', value: 'až 45 T' },
  { label: 'Neutronová hviezda', value: '10⁸ T' },
]

const indukcneCiary = [
  { icon: '🔄', title: 'Uzavreté krivky', desc: 'Na rozdiel od elektrického poľa nikde nezačínajú ani nekončia — sú to uzavreté slučky.' },
  { icon: '🧭', title: 'Smer od N k S (vonku)', desc: 'Vonku magnetu smerujú od severného pólu k južnému. Vnútri magnetu od S k N.' },
  { icon: '📏', title: 'Hustota = intenzita', desc: 'Čím hustejšie čiary, tým silnejšie pole. V homogénnom poli sú rovnobežné a rovnomerne husté.' },
  { icon: '🚫', title: 'Nepretínajú sa', desc: 'Dve indukčné čiary sa nikdy nemôžu pretínať — v každom bode má pole práve jeden smer.' },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Akú jednotku má magnetická indukcia B?',
    options: ['Ampér (A)', 'Tesla (T)', 'Weber (Wb)', 'Henry (H)'],
    correctIndex: 1,
    explanation: 'Magnetická indukcia sa meria v teslách [T]. Jednotka je pomenovaná po Nikole Teslovi. Platí: 1 T = 1 kg/(A·s²).',
  },
  {
    question: 'Čo dokázal Oerstedov pokus (1820)?',
    options: [
      'Magnetické pole pôsobí silou na nabitú časticu',
      'Elektrický prúd vytvára okolo vodiča magnetické pole',
      'Magnety priťahujú železo',
      'Magnetické pole môže indukovať elektrický prúd',
    ],
    correctIndex: 1,
    explanation: 'Oersted pozoroval vychýlenie kompasovej ihly pri zapnutí prúdu — dokázal tým, že elektrický prúd vytvára magnetické pole. Tým spojil elektrickú a magnetickú fyziku.',
  },
  {
    question: 'Ako sú usporiadané magnetické indukčné čiary vo vnútri solenoidu?',
    options: [
      'Sú kruhové a neusporiadané',
      'Vychádzajú z povrchu závitkov radiálne',
      'Sú rovnobežné, rovnomerne husté — homogénne pole',
      'Neexistujú, pole je nulové',
    ],
    correctIndex: 2,
    explanation: 'Vo vnútri solenoidu je magnetické pole homogénne (rovnomerné) — indukčné čiary sú rovnobežné a rovnomerne husté. Je to rovnaký typ poľa, aké vytvárajú polové nadstavce elektromagnetu.',
  },
  {
    question: 'Solenoid má 1000 závitkov, dĺžku 50 cm a preteká ním prúd 1 A. Aká je magnetická indukcia vo vnútri?',
    options: ['0,8 mT', '2,5 mT', '1,26 mT', '4,0 mT'],
    correctIndex: 2,
    explanation: `${km('n = 1000/0{,}5 = 2000\\;\\text{m}^{-1}')}. ${km('B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\cdot 2000 \\cdot 1 \\approx 2{,}51 \\times 10^{-3}\\;\\text{T} \\approx 2{,}51\\;\\text{mT}')}. Najbližšia odpoveď je 2,5 mT.`,
  },
  {
    question: 'Čo sa stane, ak rozrežeme tyčový magnet na polovicu?',
    options: [
      'Vzniknú dva samostatné monopóly — jeden len N, druhý len S',
      'Oba kúsky stratia magnetické vlastnosti',
      'Vzniknú dva nové dipóly, každý s vlastným N a S pólom',
      'Vznikne jeden silnejší magnet a jeden slabší',
    ],
    correctIndex: 2,
    explanation: 'Magnet sa nedá rozdeliť na monopóly. Pri rozrezaní vzniknú dva menšie dipóly — každý má severný aj južný pól. Tento jav platí dookola až na úroveň atómov.',
  },
  {
    question: 'Podľa pravidla pravej ruky pre priamy vodič: palec ukazuje v smere prúdu. Čo ukazujú ohnuté prsty?',
    options: [
      'Smer magnetickej sily na vodič',
      'Smer severného pólu vytvoreného poľa',
      'Smer magnetických indukčných čiar (obiehanie okolo vodiča)',
      'Smer elektrického poľa vodiča',
    ],
    correctIndex: 2,
    explanation: 'Ampérovo pravidlo pravej ruky pre vodič: palec = smer prúdu, ohnuté prsty = smer, v ktorom krúžia magnetické indukčné čiary okolo vodiča. Pre cievku (solenoid): prsty = smer prúdu v závitkoch, palec = smer severného pólu.',
  },
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const { locale } = useI18n()

const titleRu = 'Магнитное поле — основы'
const titleUk = 'Магнітне поле — основи'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

const quizRu: QuizQuestion[] = [
  {
    question: 'Какая единица измерения магнитной индукции B?',
    options: ['Ампер (A)', 'Тесла (T)', 'Вебер (Wb)', 'Генри (H)'],
    correctIndex: 1,
    explanation: 'Магнитная индукция измеряется в теслах [T]. Единица названа в честь Николы Теслы. Справедливо: 1 T = 1 кг/(А·с²).',
  },
  {
    question: 'Что доказал опыт Эрстеда (1820)?',
    options: [
      'Магнитное поле действует силой на заряженную частицу',
      'Электрический ток создаёт вокруг проводника магнитное поле',
      'Магниты притягивают железо',
      'Магнитное поле может индуцировать электрический ток',
    ],
    correctIndex: 1,
    explanation: 'Эрстед наблюдал отклонение стрелки компаса при включении тока — доказал, что электрический ток создаёт магнитное поле. Это объединило электричество и магнетизм.',
  },
  {
    question: 'Как расположены магнитные силовые линии внутри соленоида?',
    options: [
      'Они круговые и беспорядочные',
      'Выходят с поверхности витков радиально',
      'Параллельны и равномерно распределены — однородное поле',
      'Не существуют, поле равно нулю',
    ],
    correctIndex: 2,
    explanation: 'Внутри соленоида магнитное поле однородное — силовые линии параллельны и равномерно распределены. Это тот же тип поля, что создают полюсные наконечники электромагнита.',
  },
  {
    question: 'Соленоид имеет 1000 витков, длину 50 см и ток 1 А. Какова магнитная индукция внутри?',
    options: ['0,8 мТл', '2,5 мТл', '1,26 мТл', '4,0 мТл'],
    correctIndex: 2,
    explanation: `${km('n = 1000/0{,}5 = 2000\\;\\text{m}^{-1}')}. ${km('B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\cdot 2000 \\cdot 1 \\approx 2{,}51 \\times 10^{-3}\\;\\text{T} \\approx 2{,}51\\;\\text{mT}')}. Ближайший ответ — 2,5 мТл.`,
  },
  {
    question: 'Что произойдёт, если разрезать стержневой магнит пополам?',
    options: [
      'Возникнут два отдельных монополя — один только N, другой только S',
      'Оба кусочка потеряют магнитные свойства',
      'Возникнут два новых диполя, каждый со своим N и S полюсом',
      'Один станет сильнее, другой слабее',
    ],
    correctIndex: 2,
    explanation: 'Магнит нельзя разделить на монополи. При разрезании возникнут два меньших диполя — каждый имеет северный и южный полюс. Это справедливо вплоть до уровня атомов.',
  },
  {
    question: 'Согласно правилу правой руки для прямого проводника: большой палец указывает в направлении тока. Что показывают согнутые пальцы?',
    options: [
      'Направление магнитной силы на проводник',
      'Направление северного полюса создаваемого поля',
      'Направление магнитных силовых линий (обход вокруг проводника)',
      'Направление электрического поля проводника',
    ],
    correctIndex: 2,
    explanation: 'Правило правой руки для проводника: большой палец = направление тока, согнутые пальцы = направление, в котором закручиваются магнитные силовые линии вокруг проводника. Для катушки (соленоида): пальцы = направление тока в витках, большой палец = направление северного полюса.',
  },
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Яка одиниця вимірювання магнітної індукції B?',
    options: ['Ампер (A)', 'Тесла (T)', 'Вебер (Wb)', 'Генрі (H)'],
    correctIndex: 1,
    explanation: 'Магнітна індукція вимірюється в теслах [T]. Одиниця названа на честь Ніколи Тесли. Справедливо: 1 T = 1 кг/(А·с²).',
  },
  {
    question: 'Що довів дослід Ерстеда (1820)?',
    options: [
      'Магнітне поле діє силою на заряджену частинку',
      'Електричний струм створює навколо провідника магнітне поле',
      'Магніти притягують залізо',
      'Магнітне поле може індукувати електричний струм',
    ],
    correctIndex: 1,
    explanation: 'Ерстед спостерігав відхилення стрілки компаса при вмиканні струму — довів, що електричний струм створює магнітне поле. Це об\'єднало електрику та магнетизм.',
  },
  {
    question: 'Як розташовані магнітні силові лінії всередині соленоїда?',
    options: [
      'Вони кругові та безладні',
      'Виходять з поверхні витків радіально',
      'Паралельні та рівномірно розподілені — однорідне поле',
      'Не існують, поле рівне нулю',
    ],
    correctIndex: 2,
    explanation: 'Всередині соленоїда магнітне поле однорідне — силові лінії паралельні та рівномірно розподілені. Це той самий тип поля, що створюють полюсні наконечники електромагніту.',
  },
  {
    question: 'Соленоїд має 1000 витків, довжину 50 см і струм 1 А. Яка магнітна індукція всередині?',
    options: ['0,8 мТл', '2,5 мТл', '1,26 мТл', '4,0 мТл'],
    correctIndex: 2,
    explanation: `${km('n = 1000/0{,}5 = 2000\\;\\text{m}^{-1}')}. ${km('B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\cdot 2000 \\cdot 1 \\approx 2{,}51 \\times 10^{-3}\\;\\text{T} \\approx 2{,}51\\;\\text{mT}')}. Найближча відповідь — 2,5 мТл.`,
  },
  {
    question: 'Що станеться, якщо розрізати стрижневий магніт навпіл?',
    options: [
      'Виникнуть два окремі монополи — один лише N, інший лише S',
      'Обидва шматки втратять магнітні властивості',
      'Виникнуть два нових диполи, кожен зі своїм N та S полюсом',
      'Один стане сильнішим, а інший слабшим',
    ],
    correctIndex: 2,
    explanation: 'Магніт не можна розділити на монополи. При розрізанні виникнуть два менших диполи — кожен має північний та південний полюс. Це справедливо аж до рівня атомів.',
  },
  {
    question: 'Згідно з правилом правої руки для прямого провідника: великий палець вказує в напрямку струму. Що показують зігнуті пальці?',
    options: [
      'Напрямок магнітної сили на провідник',
      'Напрямок північного полюса поля, що створюється',
      'Напрямок магнітних силових ліній (обхід навколо провідника)',
      'Напрямок електричного поля провідника',
    ],
    correctIndex: 2,
    explanation: 'Правило правої руки для провідника: великий палець = напрямок струму, зігнуті пальці = напрямок, в якому закручуються магнітні силові лінії навколо провідника. Для котушки (соленоїда): пальці = напрямок струму у витках, великий палець = напрямок північного полюса.',
  },
]

const activeQuiz = computed(() => {
  if (locale.value === 'ru') return quizRu
  if (locale.value === 'uk') return quizUk
  return quiz
})

const currentQuestion = computed(() => activeQuiz.value[currentQ.value] as QuizQuestion)

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
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
