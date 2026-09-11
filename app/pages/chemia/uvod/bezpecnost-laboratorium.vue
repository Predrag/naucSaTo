<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/uvod" class="hover:text-orange-600 transition-colors">Úvod do chémie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Bezpečnosť v laboratóriu</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚠️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Bezpečnosť v laboratóriu</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Každá práca v chemickom laboratóriu vyžaduje dodržiavanie bezpečnostných pravidiel.
      Správne používanie pomôcok a znalosti prvej pomoci sú základom bezpečného experimentovania.
    </p>

    <!-- Section 1: Bezpečnostné pravidlá -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">1. Bezpečnostné pravidlá v laboratóriu</h2>

      <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-red-700 mb-3">⛔ Základné zákazy</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>Nikdy nechutaj ani nečuchaj chemikálie priamo z nádoby</li>
          <li>Nezačínaj pokus bez povolenia vyučujúceho</li>
          <li>Nepoužívaj poškodené pomôcky (prasklé sklo, poškodené káble)</li>
          <li>Nepiješ a neješ v laboratóriu</li>
          <li>Nemiešaj chemikálie bez pokyna od vyučujúceho</li>
        </ul>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-orange-700 mb-3">✅ Povinné zásady</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>Vždy nosiť ochranné okuliare a laboratorný plášť</li>
          <li>Pri práci s kyselinami a zásadami nosiť gumové rukavice</li>
          <li>Pracovať v dobre vetranom priestore alebo pod digestoriom</li>
          <li>Poznať umiestnenie hasiacich prístrojov, lekárničky a bezpečnostnej sprchy</li>
          <li>Zbytky chemikálií likvidovať predpísaným spôsobom</li>
          <li>Po práci dôkladne umyť ruky</li>
        </ul>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-orange-700 mb-4">Bezpečnostné symboly na obaloch chemikálií</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">💀</div>
            <div class="text-sm font-medium text-gray-800">Toxický</div>
            <div class="text-xs text-gray-500 mt-1">napr. <span v-html="km('\\text{HCN}')"></span></div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">🔥</div>
            <div class="text-sm font-medium text-gray-800">Horľavý</div>
            <div class="text-xs text-gray-500 mt-1">napr. <span v-html="km('\\text{C}_2\\text{H}_5\\text{OH}')"></span></div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">🧪</div>
            <div class="text-sm font-medium text-gray-800">Leptavý</div>
            <div class="text-xs text-gray-500 mt-1">napr. <span v-html="km('\\text{H}_2\\text{SO}_4')"></span></div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">💥</div>
            <div class="text-sm font-medium text-gray-800">Výbušný</div>
            <div class="text-xs text-gray-500 mt-1">napr. nitroglycerín</div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">🌡️</div>
            <div class="text-sm font-medium text-gray-800">Oxidujúci</div>
            <div class="text-xs text-gray-500 mt-1">napr. <span v-html="km('\\text{KMnO}_4')"></span></div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100 text-center">
            <div class="text-2xl mb-1">♻️</div>
            <div class="text-sm font-medium text-gray-800">Nebezpečný pre životné prostredie</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Laboratórne pomôcky -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">2. Základné laboratórne pomôcky</h2>

      <!-- SVG Illustration -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-orange-700 mb-4 text-center">Základné sklenené pomôcky</h3>
        <svg
          viewBox="0 0 600 230"
          aria-label="Diagram základných laboratórnych pomôcok: skúmavka, kadička a Erlenmeyerova banka s popiskami ich využitia"
          role="img"
          class="w-full max-w-2xl mx-auto block"
        >
          <!-- Background -->
          <rect width="600" height="230" fill="#fff7ed" rx="12" />

          <!-- === Skúmavka === -->
          <g transform="translate(55, 20)">
            <text x="40" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#c2410c">Skúmavka</text>
            <!-- Body -->
            <rect x="22" y="26" width="36" height="100" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" rx="3" />
            <!-- Rounded bottom -->
            <ellipse cx="40" cy="126" rx="18" ry="9" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" />
            <!-- Rim highlight -->
            <rect x="19" y="24" width="42" height="9" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5" rx="3" />
            <!-- Liquid -->
            <rect x="24" y="82" width="32" height="44" fill="#fde68a" opacity="0.75" />
            <ellipse cx="40" cy="126" rx="16" ry="8" fill="#fde68a" opacity="0.75" />
          </g>

          <!-- === Kadička === -->
          <g transform="translate(195, 18)">
            <text x="55" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#c2410c">Kadička</text>
            <!-- Body (trapezoid) -->
            <polygon points="10,26 100,26 112,148 -2,148" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" />
            <!-- Bottom strip -->
            <rect x="-2" y="143" width="114" height="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" rx="2" />
            <!-- Liquid -->
            <polygon points="12,84 98,84 110,143 0,143" fill="#fde68a" opacity="0.65" />
            <!-- Spout -->
            <polygon points="88,26 112,26 109,38 91,38" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5" />
            <!-- Scale marks -->
            <line x1="94" y1="62" x2="103" y2="62" stroke="#1d4ed8" stroke-width="1.2" />
            <line x1="92" y1="82" x2="101" y2="82" stroke="#1d4ed8" stroke-width="1.2" />
            <line x1="90" y1="102" x2="99" y2="102" stroke="#1d4ed8" stroke-width="1.2" />
            <line x1="88" y1="122" x2="97" y2="122" stroke="#1d4ed8" stroke-width="1.2" />
          </g>

          <!-- === Erlenmeyerova banka === -->
          <g transform="translate(390, 14)">
            <text x="55" y="16" text-anchor="middle" font-size="13" font-weight="bold" fill="#c2410c">Erlenmeyerova</text>
            <text x="55" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#c2410c">banka</text>
            <!-- Neck -->
            <rect x="37" y="34" width="36" height="38" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" />
            <!-- Body -->
            <polygon points="37,70 73,70 112,152 -2,152" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" />
            <!-- Bottom -->
            <rect x="-2" y="147" width="114" height="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" rx="3" />
            <!-- Liquid -->
            <polygon points="40,106 70,106 108,147 2,147" fill="#86efac" opacity="0.65" />
            <!-- Neck rim -->
            <rect x="34" y="31" width="42" height="8" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5" rx="2" />
          </g>

          <!-- Bottom usage labels -->
          <text x="95" y="200" text-anchor="middle" font-size="11" fill="#6b7280">zahrievanie,</text>
          <text x="95" y="213" text-anchor="middle" font-size="11" fill="#6b7280">malé reakcie</text>
          <text x="305" y="200" text-anchor="middle" font-size="11" fill="#6b7280">meranie objemu,</text>
          <text x="305" y="213" text-anchor="middle" font-size="11" fill="#6b7280">zahrievanie roztokov</text>
          <text x="500" y="200" text-anchor="middle" font-size="11" fill="#6b7280">titrácia,</text>
          <text x="500" y="213" text-anchor="middle" font-size="11" fill="#6b7280">miešanie</text>
        </svg>
      </div>

      <!-- Equipment grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-3">🧪 Sklenené pomôcky</h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li><span class="font-medium">Skúmavka</span> — zahrievanie malého množstva látky</li>
            <li><span class="font-medium">Kadička</span> — meranie objemu, zahrievanie roztokov</li>
            <li><span class="font-medium">Destilačná banka</span> — destilácia kvapalín</li>
            <li><span class="font-medium">Odmerná banka</span> — príprava presných roztokov</li>
            <li><span class="font-medium">Petriho miska</span> — kultivácia, odparovanie</li>
            <li><span class="font-medium">Filtračný lievik</span> — filtrácia zmesí</li>
            <li><span class="font-medium">Hodinové sklíčko</span> — sušenie malých vzoriek</li>
            <li><span class="font-medium">Oddeľovací lievik</span> — rozdeľovanie nemieš. kvapalín</li>
            <li><span class="font-medium">Odmerný valec</span> — odmeranie objemu kvapaliny</li>
            <li><span class="font-medium">Pipeta</span> — presné dávkovanie malých objemov</li>
            <li><span class="font-medium">Byreta</span> — titrácia (presné dávkovanie)</li>
            <li><span class="font-medium">Chladič</span> — kondenzácia pár pri destilácii</li>
            <li><span class="font-medium">Kryštalizačná miska</span> — kryštalizácia látok</li>
          </ul>
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-3">🔧 Ostatné pomôcky</h3>
          <ul class="text-gray-700 space-y-1.5 text-sm">
            <li><span class="font-medium">Stojan</span> — upevnenie a uchytenie pomôcok</li>
            <li><span class="font-medium">Držiak</span> — uchytenie sklenených nádob na stojan</li>
            <li><span class="font-medium">Svorka</span> — fixovanie nádoby na stojan</li>
            <li><span class="font-medium">Filtračný kruh</span> — podpora filtračného lievika</li>
            <li><span class="font-medium">Chemické kliešte</span> — manipulácia s horúcimi nádobami</li>
            <li><span class="font-medium">Laboratórna lyžička</span> — odoberanie pevných látok</li>
            <li><span class="font-medium">Teplomer</span> — meranie teploty</li>
            <li><span class="font-medium">Filtračný papier</span> — filtrácia zrazenín</li>
            <li><span class="font-medium">Trojnožka</span> — podpora nádoby pri zahrievaní</li>
            <li><span class="font-medium">Kovová sieťka s ker. vložkou</span> — rovnomerné zahrievanie</li>
            <li><span class="font-medium">Kahan</span> — plynový horák (Bunsenov)</li>
            <li><span class="font-medium">Striekačka</span> — dávkovanie kvapalín bez burety</li>
          </ul>
        </div>
      </div>

      <!-- Calculated example 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">📐 Príklad 1: Riedenie kyseliny (použitie pipety a odmernej banky)</h3>
        <p class="text-gray-700 mb-3">
          Potrebuješ pripraviť 250 ml roztoku kyseliny chlorovodíkovej
          (<span v-html="km('\\text{HCl}')"></span>) s koncentráciou
          <span v-html="km('c = 0{,}5 \\; \\text{mol/l}')"></span>.
          Koľko mililitrov koncentrovanej kyseliny
          (<span v-html="km('c_0 = 12 \\; \\text{mol/l}')"></span>)
          odmeríš pipetou?
        </p>
        <div class="bg-white rounded-lg p-4 border border-blue-100 space-y-2">
          <p class="text-sm font-medium text-blue-700 mb-1">Riešenie — zákon zachovania látky pri riedení:</p>
          <div v-html="km('c_0 \\cdot V_0 = c \\cdot V')"></div>
          <div v-html="km('V_0 = \\dfrac{c \\cdot V}{c_0} = \\dfrac{0{,}5 \\cdot 250}{12} \\approx 10{,}4 \\; \\text{ml}')"></div>
          <p class="text-sm text-gray-600 mt-2">
            Odmeríš <strong>10,4 ml</strong> koncentrovanej kyseliny pipetou a doplníš destilovanou vodou
            na 250 ml v odmernej banke.
          </p>
          <p class="text-sm text-red-700 font-medium mt-1">
            ⚠️ Kyselinu vždy pridávaj do vody, nie vodu do kyseliny!
          </p>
        </div>
      </div>

      <!-- Calculated example 2 -->
      <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
        <h3 class="text-lg font-semibold text-green-800 mb-3">📐 Príklad 2: Navážka tuhej látky (použitie laboratórnej lyžičky a váh)</h3>
        <p class="text-gray-700 mb-3">
          Chceš pripraviť 100 ml roztoku hydroxidu sodného
          (<span v-html="km('\\text{NaOH}')"></span>) s koncentráciou
          <span v-html="km('c = 1 \\; \\text{mol/l}')"></span>.
          Akú hmotnosť <span v-html="km('\\text{NaOH}')"></span> naváži
          laboratórnou lyžičkou na analytické váhy?
          <span class="text-gray-500">(</span><span v-html="km('M_{\\text{NaOH}} = 40 \\; \\text{g/mol}')"></span><span class="text-gray-500">)</span>
        </p>
        <div class="bg-white rounded-lg p-4 border border-green-100 space-y-2">
          <p class="text-sm font-medium text-green-700 mb-1">Riešenie:</p>
          <div v-html="km('n = c \\cdot V = 1 \\; \\text{mol/l} \\cdot 0{,}1 \\; \\text{l} = 0{,}1 \\; \\text{mol}')"></div>
          <div v-html="km('m = n \\cdot M = 0{,}1 \\; \\text{mol} \\cdot 40 \\; \\text{g/mol} = 4 \\; \\text{g}')"></div>
          <p class="text-sm text-gray-600 mt-2">
            Naváži <strong>4 g</strong> <span v-html="km('\\text{NaOH}')"></span>,
            opatrne rozpustí v malom množstve vody (rozpúšťanie je exotermické!) a doplní destilovanou vodou na 100 ml v odmernej banke.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Prvá pomoc -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">3. Prvá pomoc pri chemických nehodách</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 class="font-semibold text-red-700 mb-2">🔥 Zasiahnutie kože (kyseliny, zásady)</h3>
          <ol class="text-gray-700 text-sm space-y-1 list-decimal list-inside">
            <li>Odstráň kontaminovaný odev</li>
            <li>Okamžite oplachuj postihnuté miesto veľkým množstvom vody (min. 15 min.)</li>
            <li>Neprikladaj neutralizačné látky</li>
            <li>Vyhľadaj lekársku pomoc</li>
          </ol>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 class="font-semibold text-red-700 mb-2">👁️ Potriesnenie očí</h3>
          <ol class="text-gray-700 text-sm space-y-1 list-decimal list-inside">
            <li>Okamžite vyplachuj oči pod tečúcou vodou</li>
            <li>Drž viečka otvorené</li>
            <li>Vyplachuj min. 15 minút</li>
            <li>Urýchlene vyhľadaj lekára</li>
          </ol>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 class="font-semibold text-red-700 mb-2">💨 Vdýchnutie výparov</h3>
          <ol class="text-gray-700 text-sm space-y-1 list-decimal list-inside">
            <li>Odvedi postihnutého na čerstvý vzduch</li>
            <li>Uvoľni tesné oblečenie</li>
            <li>Pri bezvedomí použi stabilizovanú polohu</li>
            <li>Zavolaj záchranku (112)</li>
          </ol>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 class="font-semibold text-red-700 mb-2">🧪 Požitie chemikálie</h3>
          <ol class="text-gray-700 text-sm space-y-1 list-decimal list-inside">
            <li><strong>NEVYVOLÁVAJ zvracanie</strong> (nebezpečné pri leptavých látkach)</li>
            <li>Zavolaj toxikologické centrum: <strong>02/5477 4166</strong></li>
            <li>Zavolaj záchranku (112)</li>
            <li>Uchovaj obal chemikálie pre lekára</li>
          </ol>
        </div>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
        <h3 class="font-semibold text-orange-700 mb-4">📞 Dôležité telefónne čísla</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <div class="text-2xl font-bold text-red-600">112</div>
            <div class="text-xs text-gray-600 mt-1">Záchranná služba</div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <div class="text-2xl font-bold text-red-600">155</div>
            <div class="text-xs text-gray-600 mt-1">Rýchla zdravotná pomoc</div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <div class="text-2xl font-bold text-red-600">150</div>
            <div class="text-xs text-gray-600 mt-1">Hasiči</div>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <div class="text-sm font-bold text-red-600">02/5477 4166</div>
            <div class="text-xs text-gray-600 mt-1">Toxikologické centrum</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="text-gray-700 space-y-2">
        <li>✅ <strong>Bezpečnosť na prvom mieste</strong> — ochranné okuliare, plášť a rukavice sú povinné</li>
        <li>✅ <strong>Nikdy nechutaj ani nečuchaj</strong> chemikálie priamo z nádoby</li>
        <li>
          ✅ <strong>Kyseliny vždy pridávaj do vody</strong>
          (<span v-html="km('\\text{H}_2\\text{SO}_4')"></span>,
          <span v-html="km('\\text{HCl}')"></span> atď.)
        </li>
        <li>✅ <strong>Základné sklenené pomôcky:</strong> skúmavka, kadička, odmerná banka, byreta, pipeta</li>
        <li>✅ <strong>Prvá pomoc</strong> — oplachuj vodou (oči/koža), čerstvý vzduch (výpary), zavolaj 112</li>
        <li>✅ <strong>Filtrácia:</strong> filtračný papier + filtračný lievik; <strong>titrácia:</strong> byreta</li>
        <li>✅ <strong>Zákaz jedenia a pitia</strong> v laboratóriu za každých okolností</li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-6">🧠 Kvíz: Otestuj sa!</h2>

      <div v-if="!quizFinished">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4 flex items-center justify-between">
          <span data-testid="quiz-progress" class="text-sm font-medium text-orange-700">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <div class="flex gap-1">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="w-3 h-3 rounded-full"
              :class="i < currentQ ? 'bg-orange-500' : i === currentQ ? 'bg-orange-300' : 'bg-gray-200'"
            ></div>
          </div>
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="currentQ" class="bg-white border border-orange-200 rounded-xl p-6 mb-4">
            <p
              data-testid="quiz-question"
              class="text-lg font-semibold text-gray-800 mb-5"
              v-html="currentQuestion.question"
            ></p>
            <div class="space-y-3">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                class="w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-gray-700"
                :class="optionClass(i)"
                @click="selectAnswer(i)"
                v-html="option"
              ></button>
            </div>
            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="quiz-feedback"
                class="mt-4 p-4 rounded-lg"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'"
              >
                <p
                  class="font-medium"
                  :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'"
                >
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✅ Správne!' : '❌ Nesprávne.' }}
                </p>
                <p class="text-gray-600 text-sm mt-1" v-html="currentQuestion.explanation"></p>
              </div>
            </Transition>
          </div>
        </Transition>

        <button
          v-if="selectedAnswer !== null"
          type="button"
          data-testid="quiz-next-btn"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <div v-else data-testid="quiz-result" class="bg-white border border-orange-200 rounded-xl p-8 text-center">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="quiz-score" class="text-lg text-gray-600 mb-6">
          Skóre: <strong class="text-orange-700">{{ quizScore }} / {{ quiz.length }}</strong>
        </p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo musíš vždy nosiť pri práci v chemickom laboratóriu?',
    options: [
      'Len gumové rukavice',
      'Ochranné okuliare a laboratorný plášť',
      'Len ochranné okuliare',
      'Žiadna ochrana nie je potrebná pri jednoduchých pokusoch',
    ],
    correctIndex: 1,
    explanation: 'V laboratóriu sú povinné ochranné okuliare a laboratorný plášť. Pri práci s kyselinami a zásadami aj gumové rukavice.',
  },
  {
    question: 'Na čo slúži byreta?',
    options: [
      'Na zahrievanie kvapalín nad kahanom',
      'Na filtráciu zmesí cez filtračný papier',
      'Na presné dávkovanie kvapaliny pri titrácii',
      'Na uchovávanie zásobných roztokov chemikálií',
    ],
    correctIndex: 2,
    explanation: 'Byreta je sklenená trubica s kohútom, ktorá umožňuje presné dávkovanie malých objemov kvapaliny. Využíva sa najmä pri titrácii.',
  },
  {
    question: 'Ako správne riedime koncentrovanú kyselinu sírovú '
      + km('\\text{H}_2\\text{SO}_4') + '?',
    options: [
      'Vodu pomaly pridávame do kyseliny',
      'Kyselinu pomaly pridávame do vody za stáleho miešania',
      'Na poradí nezáleží, oboje je bezpečné',
      'Riedime alkoholom, nie vodou',
    ],
    correctIndex: 1,
    explanation:
      'Kyselinu vždy pridávame do vody, nie vodu do kyseliny! Pri opačnom postupe by mohlo dôjsť k explozívnemu varu a rozstriekaniu kyseliny.',
  },
  {
    question:
      'Koľko mililitrov koncentrovanej kyseliny (c₀ = 10 mol/l) potrebuješ na prípravu 500 ml roztoku s c = 1 mol/l?',
    options: ['25 ml', '50 ml', '100 ml', '5 ml'],
    correctIndex: 1,
    explanation:
      'Použijeme vzťah: V₀ = (c · V) / c₀ = (1 · 500) / 10 = 50 ml. Odmeráme 50 ml koncentrovanej kyseliny a doplníme destilovanou vodou na 500 ml.',
  },
  {
    question: 'Čo urobíš ako prvé, keď ti kyselina zasiahne oči?',
    options: [
      'Neutralizuješ ju slabou zásadou (napr. sódou bikarbónou)',
      'Okamžite vypláchuješ oči veľkým množstvom vody minimálne 15 minút',
      'Zakryješ oči a počkáš na príchod zdravotníka',
      'Zakaplieš do očí kvapky zo lekárničky',
    ],
    correctIndex: 1,
    explanation:
      'Pri zasiahnutí očí chemikáliou okamžite vyplachujeme oči pod tečúcou vodou (min. 15 min.) a vyhľadáme lekára. Nikdy nevkladáme neutralizačné látky!',
  },
  {
    question: 'Ktorá dvojica pomôcok sa používa na filtráciu zrazeniny?',
    options: [
      'Byreta a kahan',
      'Filtračný papier a filtračný lievik',
      'Odmerná banka a pipeta',
      'Hodinové sklíčko a teplomer',
    ],
    correctIndex: 1,
    explanation:
      'Na filtráciu sa používa filtračný papier vložený do filtračného lievika upevneného v stojane. Zrazenina zostáva na papieri, kvapalina (filtrát) prechádza dolu do kadičky.',
  },
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

function optionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 opacity-50'
}

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

useHead({
  title: 'Bezpečnosť v laboratóriu — Chémia | NaučSaTo',
  meta: [
    {
      name: 'description',
      content:
        'Bezpečnostné pravidlá v chemickom laboratóriu, základné laboratórne pomôcky a prvá pomoc pri chemických nehodách pre gymnazistov.',
    },
  ],
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
