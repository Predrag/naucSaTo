<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/uvod" class="hover:text-orange-600 transition-colors">Úvod do chémie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Sústavy látok</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧫</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Sústavy látok</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Pochop rozdelenie látok, typy zmesí, vlastnosti roztokov a kvantitatívne veličiny –
      základ pre každý ďalší chemický výpočet.
    </p>

    <!-- Section 1: Látky a ich rozdelenie -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">1. Látky a ich rozdelenie</h2>

      <p class="text-gray-700 mb-4">
        <strong>Látka</strong> je každý materiál, ktorý má hmotnosť a zaberá priestor.
        Látky delíme na <strong>chemicky čisté látky</strong> a <strong>zmesi</strong>.
        Chemicky čisté látky majú stále zloženie a nemožno ich fyzikálnymi metódami rozložiť
        na iné látky.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Prvok</h3>
          <p class="text-gray-600 text-sm mb-3">
            Chemicky čistá látka zložená z atómov <em>jedného druhu</em>.
            Nemožno ju chemicky rozložiť na jednoduchšie látky.
          </p>
          <div class="flex justify-center text-sm" v-html="km('\\text{Fe},\\quad \\text{O}_2,\\quad \\text{Au},\\quad \\text{Cu}')"/>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Zlúčenina</h3>
          <p class="text-gray-600 text-sm mb-3">
            Chemicky čistá látka zložená z atómov <em>dvoch alebo viacerých prvkov</em>
            v stálom hmotnostnom pomere.
          </p>
          <div class="flex justify-center text-sm" v-html="km('\\text{H}_2\\text{O},\\quad \\text{NaCl},\\quad \\text{CO}_2')"/>
        </div>
      </div>

      <div class="bg-gray-50 border rounded-xl p-4 mb-4">
        <h3 class="font-semibold text-gray-700 mb-2">Otvorená vs. uzavretá sústava</h3>
        <ul class="text-gray-600 text-sm space-y-1">
          <li>
            <strong>Otvorená sústava</strong> – vymieňa hmotu aj energiu s okolím
            (napr. hrniec bez pokrievky na ohni)
          </li>
          <li>
            <strong>Uzavretá sústava</strong> – vymieňa len energiu, nie hmotu
            (napr. tlaková nádoba, termoska)
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 2: Zmesi – homogénne a heterogénne -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">2. Zmesi – homogénne a heterogénne</h2>

      <p class="text-gray-700 mb-5">
        <strong>Zmes</strong> je látka zložená z dvoch alebo viacerých zložiek, ktoré si
        zachovávajú svoje vlastnosti. Zložky zmesi možno oddeliť fyzikálnymi metódami.
      </p>

      <!-- SVG diagram typov zmesí -->
      <div class="flex justify-center mb-6">
        <svg
          aria-label="Diagram typov zmesí: homogénna zmes s rovnomernými časticami versus heterogénna zmes s rôznymi typmi a veľkosťami častíc, s príkladmi suspenzia, emulzia, pena, aerosól"
          role="img"
          viewBox="0 0 620 310"
          class="w-full max-w-2xl rounded-xl border border-orange-200"
        >
          <!-- Background -->
          <rect width="620" height="310" fill="#fff7ed" rx="14" />

          <!-- Title -->
          <text x="310" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="#c2410c" font-family="sans-serif">
            Typy zmesí
          </text>

          <!-- ─── Homogeneous box ─── -->
          <rect x="18" y="48" width="280" height="230" rx="12" fill="white" stroke="#fb923c" stroke-width="1.5" />
          <text x="158" y="73" text-anchor="middle" font-size="13" font-weight="bold" fill="#ea580c" font-family="sans-serif">Homogénna zmes</text>
          <text x="158" y="90" text-anchor="middle" font-size="10" fill="#9a3412" font-family="sans-serif">(rovnomerné zloženie)</text>

          <!-- Homogeneous particles – uniform orange dots -->
          <circle cx="60"  cy="122" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="88"  cy="108" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="116" cy="126" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="144" cy="110" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="172" cy="124" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="200" cy="108" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="228" cy="126" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="256" cy="110" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="60"  cy="150" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="88"  cy="166" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="116" cy="150" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="144" cy="168" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="172" cy="150" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="200" cy="166" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="228" cy="150" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="256" cy="168" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="74"  cy="192" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="102" cy="208" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="130" cy="192" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="158" cy="208" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="186" cy="192" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="214" cy="208" r="6" fill="#fb923c" opacity="0.85" />
          <circle cx="242" cy="192" r="6" fill="#fb923c" opacity="0.85" />

          <text x="158" y="250" text-anchor="middle" font-size="10" fill="#6b21a8" font-family="sans-serif">Príklady:</text>
          <text x="158" y="265" text-anchor="middle" font-size="10" fill="#6b21a8" font-family="sans-serif">roztok soli, vzduch, zliatiny</text>

          <!-- ─── Heterogeneous box ─── -->
          <rect x="322" y="48" width="280" height="230" rx="12" fill="white" stroke="#fb923c" stroke-width="1.5" />
          <text x="462" y="73" text-anchor="middle" font-size="13" font-weight="bold" fill="#ea580c" font-family="sans-serif">Heterogénna zmes</text>
          <text x="462" y="90" text-anchor="middle" font-size="10" fill="#9a3412" font-family="sans-serif">(nerovnomerné zloženie)</text>

          <!-- Heterogeneous particles – mixed colors, sizes -->
          <circle cx="355" cy="118" r="9"  fill="#3b82f6" opacity="0.75" />
          <circle cx="385" cy="108" r="5"  fill="#10b981" opacity="0.75" />
          <circle cx="415" cy="132" r="11" fill="#3b82f6" opacity="0.75" />
          <circle cx="448" cy="110" r="5"  fill="#10b981" opacity="0.75" />
          <circle cx="480" cy="122" r="7"  fill="#3b82f6" opacity="0.75" />
          <circle cx="510" cy="108" r="10" fill="#10b981" opacity="0.75" />
          <circle cx="545" cy="130" r="6"  fill="#3b82f6" opacity="0.75" />
          <circle cx="362" cy="158" r="6"  fill="#10b981" opacity="0.75" />
          <circle cx="398" cy="150" r="10" fill="#3b82f6" opacity="0.75" />
          <circle cx="432" cy="164" r="5"  fill="#10b981" opacity="0.75" />
          <circle cx="463" cy="148" r="11" fill="#3b82f6" opacity="0.75" />
          <circle cx="496" cy="162" r="6"  fill="#10b981" opacity="0.75" />
          <circle cx="528" cy="150" r="8"  fill="#3b82f6" opacity="0.75" />
          <circle cx="370" cy="198" r="5"  fill="#3b82f6" opacity="0.75" />
          <circle cx="405" cy="210" r="9"  fill="#10b981" opacity="0.75" />
          <circle cx="440" cy="198" r="6"  fill="#3b82f6" opacity="0.75" />
          <circle cx="472" cy="212" r="11" fill="#10b981" opacity="0.75" />
          <circle cx="508" cy="200" r="5"  fill="#3b82f6" opacity="0.75" />
          <circle cx="540" cy="210" r="8"  fill="#10b981" opacity="0.75" />

          <text x="462" y="250" text-anchor="middle" font-size="10" fill="#6b21a8" font-family="sans-serif">Príklady:</text>
          <text x="462" y="265" text-anchor="middle" font-size="10" fill="#6b21a8" font-family="sans-serif">suspenzia, emulzia, pena, aerosól</text>

          <!-- Legend -->
          <circle cx="378" cy="285" r="5" fill="#3b82f6" opacity="0.75" />
          <text x="388" y="289" font-size="9" fill="#374151" font-family="sans-serif">zložka A</text>
          <circle cx="440" cy="285" r="5" fill="#10b981" opacity="0.75" />
          <text x="450" y="289" font-size="9" fill="#374151" font-family="sans-serif">zložka B</text>
        </svg>
      </div>

      <!-- Types of heterogeneous mixtures -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-1">Suspenzia</h3>
          <p class="text-gray-600 text-sm">
            Tuhé čiastočky rozptýlené v kvapaline. Casticami sú viditeľné alebo sa
            usadzujú. Napr. bahno, zakalená voda.
          </p>
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-1">Emulzia</h3>
          <p class="text-gray-600 text-sm">
            Kvapôčky jednej kvapaliny rozptýlené v inej, vzájomne nemiešateľnej
            kvapaline. Napr. mlieko, majonéza.
          </p>
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-1">Pena</h3>
          <p class="text-gray-600 text-sm">
            Bubliny plynu rozptýlené v kvapaline alebo tuhej látke.
            Napr. šľahačka, pena na mydlenie.
          </p>
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-semibold text-orange-700 mb-1">Aerosól</h3>
          <p class="text-gray-600 text-sm">
            Tuhé alebo kvapalné čiastočky rozptýlené v plyne.
            Napr. dym (tuhý aerosól), hmla (kvapalný aerosól).
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Roztok a hmotnostný zlomok -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">3. Roztok a hmotnostný zlomok</h2>

      <p class="text-gray-700 mb-4">
        <strong>Roztok</strong> je homogénna zmes <strong>rozpúšťadla</strong> (zvyčajne voda)
        a <strong>rozpustenej látky</strong>. <strong>Nasýtený roztok</strong> je taký, v ktorom
        sa pri danej teplote nedokáže rozpustiť viac látky – dosiahla sa hranica
        <strong>rozpustnosti</strong>.
      </p>

      <!-- Mass fraction formula -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">Hmotnostný zlomok</h3>
        <p class="text-gray-700 text-sm mb-3">
          Hmotnostný zlomok <span v-html="km('w')"/> vyjadruje pomer hmotnosti
          zložky k celkovej hmotnosti zmesi:
        </p>
        <div class="flex justify-center mb-3" v-html="km('w = \\dfrac{m_{\\text{zložky}}}{m_{\\text{zmesi}}}')"/>
        <p class="text-gray-500 text-sm text-center">
          Bezrozmerná veličina; v percentách:
          <span v-html="km('w\\,[\\%] = w \\cdot 100')"/>
        </p>
      </div>

      <!-- Example 1 -->
      <div class="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-2">Príklad 1: Výpočet hmotnostného zlomku</h3>
        <p class="text-gray-700 text-sm mb-4">
          V 200 g roztoku je rozpustených 20 g kuchynskej soli
          (<span v-html="km('\\text{NaCl}')"/>). Aký je hmotnostný zlomok soli v roztoku?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-3 text-sm">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Zadané:</span>
            <span v-html="km('m_{\\text{NaCl}} = 20\\,\\text{g},\\quad m_{\\text{zmesi}} = 200\\,\\text{g}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Vzorec:</span>
            <span v-html="km('w = \\dfrac{m_{\\text{zložky}}}{m_{\\text{zmesi}}}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Výpočet:</span>
            <span v-html="km('w = \\dfrac{20\\,\\text{g}}{200\\,\\text{g}} = 0{,}10')"/>
          </div>
          <p class="text-orange-700 font-semibold border-t border-orange-100 pt-2">
            Roztok obsahuje 10 % hmotnostné NaCl.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4: Látkové množstvo a koncentrácia -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">4. Látkové množstvo a koncentrácia</h2>

      <div class="space-y-4 mb-6">
        <!-- Avogadro -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Avogadrova konštanta</h3>
          <p class="text-gray-700 text-sm mb-2">
            Počet elementárnych entít (atómov, molekúl, iónov) v jednom <strong>móle</strong>
            akejkoľvek látky:
          </p>
          <div class="flex justify-center" v-html="km('N_A = 6{,}022 \\times 10^{23}\\,\\text{mol}^{-1}')"/>
        </div>

        <!-- Amount of substance -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Látkové množstvo</h3>
          <p class="text-gray-600 text-sm mb-2">
            Látkové množstvo <span v-html="km('n')"/> [mol] vyjadruje počet entít
            cez Avogadrovu konštantu, alebo hmotnostne:
          </p>
          <div class="flex justify-center mb-2" v-html="km('n = \\dfrac{N}{N_A} = \\dfrac{m}{M}')"/>
          <p class="text-gray-500 text-xs text-center">
            <span v-html="km('N')"/> – počet častíc,
            <span v-html="km('m')"/> – hmotnosť [g],
            <span v-html="km('M')"/> – molárna hmotnosť [g/mol],
            <span v-html="km('A_r')"/> – relatívna atómová hmotnosť
          </p>
        </div>

        <!-- Concentration -->
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Koncentrácia látkového množstva</h3>
          <div class="flex justify-center mb-2" v-html="km('c = \\dfrac{n}{V}\\quad [\\text{mol/L}]')"/>
          <p class="text-gray-500 text-xs text-center">
            <span v-html="km('n')"/> – látkové množstvo [mol],
            <span v-html="km('V')"/> – objem roztoku [L]
          </p>
        </div>
      </div>

      <!-- Example 2 -->
      <div class="border-l-4 border-orange-400 bg-orange-50 rounded-r-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-2">Príklad 2: Výpočet koncentrácie roztoku</h3>
        <p class="text-gray-700 text-sm mb-4">
          Rozpustíme 58,5 g <span v-html="km('\\text{NaCl}')"/>
          (molárna hmotnosť <span v-html="km('M = 58{,}5\\,\\text{g/mol}')"/>)
          vo vode, objem roztoku je 2 litre. Aká je koncentrácia roztoku?
        </p>
        <div class="bg-white rounded-lg p-4 space-y-3 text-sm">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Zadané:</span>
            <span v-html="km('m = 58{,}5\\,\\text{g},\\quad M = 58{,}5\\,\\text{g/mol},\\quad V = 2\\,\\text{L}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Krok 1:</span>
            <span v-html="km('n = \\dfrac{m}{M} = \\dfrac{58{,}5\\,\\text{g}}{58{,}5\\,\\text{g/mol}} = 1\\,\\text{mol}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-gray-400 min-w-20">Krok 2:</span>
            <span v-html="km('c = \\dfrac{n}{V} = \\dfrac{1\\,\\text{mol}}{2\\,\\text{L}} = 0{,}5\\,\\text{mol/L}')"/>
          </div>
          <p class="text-orange-700 font-semibold border-t border-orange-100 pt-2">
            Koncentrácia roztoku NaCl je 0,5 mol/L.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 5: Oddeľovanie zložiek zmesi -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">5. Oddeľovanie zložiek zmesi</h2>

      <p class="text-gray-700 mb-5">
        Fyzikálne metódy využívajú rozdielne fyzikálne vlastnosti zložiek (bod varu, hustota,
        veľkosť častíc, rozpustnosť), pričom zložky zostávajú chemicky nezmenené.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
v-for="method in separationMethods" :key="method.name"
             class="bg-white border border-orange-200 rounded-xl p-4">
          <div class="text-2xl mb-2">{{ method.icon }}</div>
          <h3 class="font-semibold text-orange-700 mb-1">{{ method.name }}</h3>
          <p class="text-gray-600 text-sm mb-2">{{ method.description }}</p>
          <p class="text-gray-400 text-xs">Napr.: {{ method.example }}</p>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Látky delíme na <strong>prvky</strong> a <strong>zlúčeniny</strong>;
            zmesi na <strong>homogénne</strong> (jednotné zloženie) a
            <strong>heterogénne</strong> (viditeľné zložky).
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Typy heterogénnych zmesí: <strong>suspenzia</strong>, <strong>emulzia</strong>,
            <strong>pena</strong>, <strong>aerosól</strong>.
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Hmotnostný zlomok:
            <span v-html="km('w = m_{\\text{zl.}}/m_{\\text{zm.}}')"/>
            (bezrozmerný; v % násobíme 100).
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Avogadrova konštanta:
            <span v-html="km('N_A = 6{,}022 \\times 10^{23}\\,\\text{mol}^{-1}')"/>
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Látkové množstvo:
            <span v-html="km('n = m/M')"/>
            [mol]; Koncentrácia:
            <span v-html="km('c = n/V')"/>
            [mol/L].
          </span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5">▶</span>
          <span>
            Metódy oddeľovania zmesí: destilácia, filtrácia, usadzovanie,
            kryštalizácia, odparovanie.
          </span>
        </li>
      </ul>
    </div>

    <!-- Quiz -->
    <div class="bg-white border border-orange-200 rounded-2xl p-6">
      <h2 class="text-2xl font-bold text-orange-700 mb-6">Kvíz</h2>

      <Transition name="fade" mode="out-in">
        <div v-if="!quizFinished" :key="currentQ">
          <!-- Progress -->
          <div class="flex items-center justify-between mb-4" data-testid="quiz-progress">
            <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} / {{ quiz.length }}</span>
            <div class="flex gap-1">
              <div
                v-for="i in quiz.length"
                :key="i"
                class="w-3 h-3 rounded-full transition-colors"
                :class="
                  i - 1 < currentQ
                    ? 'bg-orange-400'
                    : i - 1 === currentQ
                      ? 'bg-orange-600'
                      : 'bg-gray-200'
                "
              />
            </div>
          </div>

          <!-- Question -->
          <p class="font-semibold text-gray-800 mb-5 text-lg" data-testid="quiz-question">
            {{ currentQuestion.question }}
          </p>

          <!-- Options -->
          <div class="space-y-3 mb-5">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              type="button"
              :data-testid="`quiz-option-${i}`"
              class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm"
              :class="optionClass(i)"
              @click="selectAnswer(i)"
            >
              <span class="font-semibold mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
              {{ option }}
            </button>
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="quiz-feedback"
              class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4 text-sm text-gray-700"
            >
              <span
                class="font-semibold mr-1"
                :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-600' : 'text-red-600'"
              >
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
              </span>
              {{ currentQuestion.explanation }}
            </div>
          </Transition>

          <!-- Next button -->
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="quiz-next-btn"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>

        <!-- Result -->
        <div v-else key="result" data-testid="quiz-result" class="text-center py-6">
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p class="text-gray-500 mb-2" data-testid="quiz-score">
            Skóre: {{ quizScore }} / {{ quiz.length }}
          </p>
          <p class="text-gray-400 text-sm mb-6">{{ Math.round((quizScore / quiz.length) * 100) }} %</p>
          <button
            type="button"
            data-testid="quiz-reset-btn"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
      </Transition>
    </div>
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

const separationMethods = [
  {
    icon: '🌡️',
    name: 'Destilácia',
    description: 'Oddelenie kvapalín s rôznymi teplotami varu pomocou odparovania a kondenzácie.',
    example: 'voda a etanol'
  },
  {
    icon: '🔬',
    name: 'Filtrácia',
    description: 'Oddelenie tuhej látky od kvapaliny prefiltrovaním cez filter (papier, membránu).',
    example: 'piesok z vody'
  },
  {
    icon: '⚗️',
    name: 'Usadzovanie',
    description: 'Tuhé čiastočky sa pôsobením gravitácie usadia na dno nádoby.',
    example: 'íl z riečnej vody'
  },
  {
    icon: '💎',
    name: 'Kryštalizácia',
    description: 'Rozpustená látka sa vylúči z roztoku vo forme pevných kryštálov pri ochladzovaní alebo odparovaní.',
    example: 'soľ z morskej vody'
  },
  {
    icon: '💨',
    name: 'Odparovanie',
    description: 'Kvapalné rozpúšťadlo sa odparí, tuhá rozpustená látka zostane v nádobe.',
    example: 'kuchynská soľ zo soľanky'
  }
]

const quiz: QuizQuestion[] = [
  {
    question: 'Čo charakterizuje homogénnu zmes?',
    options: [
      'Rovnomerné zloženie vo všetkých častiach zmesi',
      'Viditeľné rozhranie medzi zložkami',
      'Zložená výhradne z prvkov (nie zlúčenín)',
      'Tuhé čiastočky rozptýlené v kvapaline'
    ],
    correctIndex: 0,
    explanation: 'Homogénna zmes má rovnomerné zloženie vo všetkých častiach – napr. roztok soli vo vode alebo vzduch.'
  },
  {
    question: 'Ktorý príklad je emulzia?',
    options: [
      'Dym z ohňa',
      'Bahnitá voda z potoka',
      'Mlieko',
      'Pena pri šľahaní vaječných bielkov'
    ],
    correctIndex: 2,
    explanation: 'Mlieko je emulzia – tukové kvapôčky rozptýlené vo vodnom roztoku. Dym je aerosól, bahno suspenzia, bielkova pena je pena.'
  },
  {
    question: 'Vypočítaj hmotnostný zlomok: 30 g cukru v 300 g roztoku.',
    options: [
      'w = 0,05 (5 %)',
      'w = 0,10 (10 %)',
      'w = 0,15 (15 %)',
      'w = 0,30 (30 %)'
    ],
    correctIndex: 1,
    explanation: 'w = m_zložky / m_zmesi = 30 g / 300 g = 0,10 = 10 %. Hmotnostný zlomok je bezrozmerný, v percentách 10 %.'
  },
  {
    question: 'Aká je koncentrácia roztoku, ak 3 moly NaOH sú rozpustené v 1,5 L vody?',
    options: [
      '0,5 mol/L',
      '1,0 mol/L',
      '2,0 mol/L',
      '4,5 mol/L'
    ],
    correctIndex: 2,
    explanation: 'c = n / V = 3 mol / 1,5 L = 2,0 mol/L. Koncentrácia látkového množstva sa vypočíta ako pomer látkového množstva a objemu roztoku.'
  },
  {
    question: 'Akú metódu použijeme na oddelenie etanolu od vody?',
    options: [
      'Filtrácia cez papierový filter',
      'Usadzovanie v separačnej nádobe',
      'Destilácia využívajúca rozdiel teplôt varu',
      'Kryštalizácia pri nízkej teplote'
    ],
    correctIndex: 2,
    explanation: 'Destilácia využíva, že etanol vrie pri 78 °C a voda pri 100 °C. Odparená pára etanolu sa skondenzuje a zachytí zvlášť.'
  },
  {
    question: 'Avogadrova konštanta N_A = 6,022 × 10²³ mol⁻¹ vyjadruje:',
    options: [
      'Hmotnosť jedného mólu atómov vodíka v gramoch',
      'Objem jedného mólu ideálneho plynu pri 0 °C',
      'Počet elementárnych entít (atómov/molekúl) v jednom móle látky',
      'Relatívnu atómovú hmotnosť prvku'
    ],
    correctIndex: 2,
    explanation: 'Avogadrova konštanta N_A udáva počet elementárnych entít (atómov, molekúl, iónov) v jednom móle akejkoľvek látky. Platí: n = N / N_A.'
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
    return 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 bg-white text-gray-400'
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
