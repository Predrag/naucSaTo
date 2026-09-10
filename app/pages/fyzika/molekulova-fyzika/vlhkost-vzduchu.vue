<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/molekulova-fyzika" class="hover:text-emerald-600 transition-colors">Molekulová fyzika a termodynamika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Vlhkosť vzduchu</span>
    </nav>

    <!-- Header -->
    <div class="bg-indigo-600 text-white rounded-2xl p-8 mb-10">
      <h1 class="text-4xl font-bold mb-3">🌦️ Vlhkosť vzduchu</h1>
      <p class="text-indigo-100 text-lg">Molekulová fyzika a termodynamika</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Vzduch okolo nás nikdy nie je úplne suchý — vždy obsahuje určité množstvo vodnej pary.
      Vlhkosť vzduchu ovplyvňuje naše zdravie, počasie aj technické zariadenia.
      Pochopenie pojmov ako absolútna vlhkosť, relatívna vlhkosť a rosný bod je základom meteorológie aj každodenného života.
    </p>

    <!-- Sekcia 1: Absolútna vlhkosť -->
    <section aria-label="Absolútna vlhkosť" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
        1. Absolútna vlhkosť
      </h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Absolútna vlhkosť</strong> udáva skutočné množstvo vodnej pary obsiahnutej v jednotkovom objeme vzduchu.
        Je to teda hustota vodnej pary v danom prostredí.
      </p>
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Vzorec pre absolútnu vlhkosť</h3>
        <MathFormula display formula="\rho = \frac{m}{V} \quad [\text{kg/m}^3]" />
        <div class="mt-4 text-gray-700">
          <p><span class="font-medium">kde:</span></p>
          <ul class="ml-4 mt-2 space-y-1">
            <li><span v-html="km('\\rho')"/> — absolútna vlhkosť vzduchu [kg/m³]</li>
            <li><span v-html="km('m')"/> — hmotnosť vodnej pary [kg]</li>
            <li><span v-html="km('V')"/> — objem vzduchu [m³]</li>
          </ul>
        </div>
      </div>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Absolútna vlhkosť závisí od teploty vzduchu — teplý vzduch môže pojať viac vodnej pary ako studený.
        Pri danej teplote existuje <strong>maximálna absolútna vlhkosť</strong> <span v-html="km('\\rho_{\\max}')"/>,
        teda maximálne množstvo vodnej pary, ktoré môže vzduch pri tejto teplote obsahovať.
        Takýto vzduch nazývame <strong>nasýtený</strong>.
      </p>
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-indigo-600 text-white">
              <th scope="col" class="p-3 text-left rounded-tl-lg">Teplota t [°C]</th>
              <th scope="col" class="p-3 text-left">Max. abs. vlhkosť ρ<sub>max</sub> [g/m³]</th>
              <th scope="col" class="p-3 text-left rounded-tr-lg">Tlak nasýtenej pary [Pa]</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white hover:bg-indigo-50 transition-colors">
              <td class="p-3 border-b border-gray-200">0</td>
              <td class="p-3 border-b border-gray-200">4,85</td>
              <td class="p-3 border-b border-gray-200">611</td>
            </tr>
            <tr class="bg-gray-50 hover:bg-indigo-50 transition-colors">
              <td class="p-3 border-b border-gray-200">10</td>
              <td class="p-3 border-b border-gray-200">9,40</td>
              <td class="p-3 border-b border-gray-200">1 228</td>
            </tr>
            <tr class="bg-white hover:bg-indigo-50 transition-colors">
              <td class="p-3 border-b border-gray-200">20</td>
              <td class="p-3 border-b border-gray-200">17,3</td>
              <td class="p-3 border-b border-gray-200">2 338</td>
            </tr>
            <tr class="bg-gray-50 hover:bg-indigo-50 transition-colors">
              <td class="p-3 border-b border-gray-200">30</td>
              <td class="p-3 border-b border-gray-200">30,4</td>
              <td class="p-3 border-b border-gray-200">4 243</td>
            </tr>
            <tr class="bg-white hover:bg-indigo-50 transition-colors">
              <td class="p-3 border-b border-gray-200">40</td>
              <td class="p-3 border-b border-gray-200">51,1</td>
              <td class="p-3 border-b border-gray-200">7 378</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Sekcia 2: Relatívna vlhkosť -->
    <section aria-label="Relatívna vlhkosť" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
        2. Relatívna vlhkosť
      </h2>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Relatívna vlhkosť</strong> je pomer absolútnej vlhkosti k maximálnej absolútnej vlhkosti pri rovnakej teplote.
        Vyjadruje, na koľko percent je vzduch "nasýtený" vodnou parou. Práve relatívna vlhkosť je tá hodnota,
        ktorú vidíme na meteorologických správach.
      </p>
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Vzorec pre relatívnu vlhkosť</h3>
        <MathFormula display formula="\varphi = \frac{\rho}{\rho_{\max}} \cdot 100\,\% \quad [\%]" />
        <div class="mt-4 text-gray-700">
          <ul class="ml-4 space-y-1">
            <li><span v-html="km('\\varphi')"/> — relatívna vlhkosť [%]</li>
            <li><span v-html="km('\\rho')"/> — absolútna vlhkosť vzduchu [kg/m³]</li>
            <li><span v-html="km('\\rho_{\\max}')"/> — maximálna absolútna vlhkosť pri danej teplote [kg/m³]</li>
          </ul>
        </div>
      </div>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Relatívnu vlhkosť môžeme vyjadriť aj pomocou tlakov vodnej pary:
      </p>
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
        <MathFormula display formula="\varphi = \frac{p}{p_0} \cdot 100\,\% \quad [\%]" />
        <div class="mt-4 text-gray-700">
          <ul class="ml-4 space-y-1">
            <li><span v-html="km('p')"/> — tlak vodnej pary v ovzduší [Pa]</li>
            <li><span v-html="km('p_0')"/> — tlak nasýtenej vodnej pary pri danej teplote [Pa]</li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">🌵</div>
          <div class="font-semibold text-blue-800">Suchý vzduch</div>
          <div class="text-blue-600 text-sm mt-1">φ &lt; 40 %</div>
          <div class="text-gray-600 text-xs mt-2">Dráždi sliznice, nepríjemný</div>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">😊</div>
          <div class="font-semibold text-green-800">Optimálny vzduch</div>
          <div class="text-green-600 text-sm mt-1">φ = 40 – 60 %</div>
          <div class="text-gray-600 text-xs mt-2">Ideálny pre zdravie a pohodu</div>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
          <div class="text-3xl mb-2">💧</div>
          <div class="font-semibold text-orange-800">Vlhký vzduch</div>
          <div class="text-orange-600 text-sm mt-1">φ &gt; 70 %</div>
          <div class="text-gray-600 text-xs mt-2">Riziko plesní, dusno</div>
        </div>
      </div>
    </section>

    <!-- Sekcia 3: Rosný bod a meranie -->
    <section aria-label="Rosný bod a meranie vlhkosti" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
        3. Rosný bod a meranie vlhkosti
      </h2>
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Rosný bod</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Rosný bod</strong> (teplota rosného bodu) je teplota, na ktorú treba ochladiť vzduch,
        aby sa stal nasýteným — to jest aby relatívna vlhkosť dosiahla 100 %.
        Pri ďalšom ochladzovaní začína vodná para kondenzovať — vzniká rosa, hmla alebo oblaky.
      </p>
      <div class="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-6">
        <div class="flex gap-3">
          <span class="text-2xl">💡</span>
          <div>
            <p class="font-semibold text-yellow-800 mb-1">Prečo sa potia okná?</p>
            <p class="text-gray-700 text-sm">
              Keď je vonkajšia teplota nízka, sklo okna sa ochladí pod rosný bod vnútorného vzduchu.
              Vodná para z teplého interiérového vzduchu kondenzuje na studenom skle a vznikajú kvapôčky vody.
            </p>
          </div>
        </div>
      </div>
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Prístroje na meranie vlhkosti</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-gray-800 mb-3">💈 Vlasový vlhkomer (hygrometer)</h4>
          <p class="text-gray-700 text-sm leading-relaxed">
            Využíva vlastnosť ľudského vlasu meniť svoju dĺžku vplyvom vlhkosti.
            Vlhký vlas sa predĺži, suchý sa skráti. Zmena dĺžky sa prenáša na stupnicu.
            Je jednoduchý, ale menej presný.
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 class="font-bold text-gray-800 mb-3">🌡️ Psychrometer (Augustov psychrometer)</h4>
          <p class="text-gray-700 text-sm leading-relaxed">
            Skladá sa z dvoch teplomerov — suchého a mokrého (obtočeného navlhčenou tkaninou).
            Výpar vody z mokrého teplomera ho ochladzuje. Z rozdielu teplôt
            <span v-html="km('\\Delta t = t_{\\text{suchý}} - t_{\\text{mokrý}}')"/>
            sa pomocou psychrometrickej tabuľky určí relatívna vlhkosť.
          </p>
        </div>
      </div>
      <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6">
        <h4 class="font-semibold text-indigo-800 mb-3">Princíp psychrometra</h4>
        <p class="text-gray-700 text-sm mb-3">
          Čím je vzduch suchší, tým intenzívnejšie sa vyparuje voda z mokrého teplomera a tým viac sa ochladzuje.
          Pri relatívnej vlhkosti 100 % je výpar nulový a oba teplomery ukazujú rovnakú teplotu.
        </p>
        <MathFormula display formula="\Delta t = t_{\text{suchý}} - t_{\text{mokrý}}" />
        <p class="text-gray-600 text-sm mt-2">Väčší rozdiel teplôt → nižšia relatívna vlhkosť</p>
      </div>
    </section>

    <!-- Sekcia 4: Vypočítané príklady -->
    <section aria-label="Vypočítané príklady" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
        4. Vypočítané príklady
      </h2>

      <!-- Príklad 1 -->
      <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-6 mb-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-3">Príklad 1: Výpočet relatívnej vlhkosti</h3>
        <div class="bg-gray-50 rounded-lg p-4 mb-4">
          <p class="text-gray-700">
            V miestnosti pri teplote 20 °C je absolútna vlhkosť vzduchu
            <span v-html="km('\\rho = 10{,}4\\,\\text{g/m}^3')"/>.
            Maximálna absolútna vlhkosť pri 20 °C je
            <span v-html="km('\\rho_{\\max} = 17{,}3\\,\\text{g/m}^3')"/>.
            Vypočítajte relatívnu vlhkosť.
          </p>
        </div>
        <div class="space-y-3">
          <p class="font-medium text-gray-700">Riešenie:</p>
          <p class="text-gray-700">Dosadíme do vzorca pre relatívnu vlhkosť:</p>
          <MathFormula display formula="\varphi = \frac{\rho}{\rho_{\max}} \cdot 100\,\% = \frac{10{,}4}{17{,}3} \cdot 100\,\% \approx 60{,}1\,\%" />
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p class="font-semibold text-indigo-800">
              Výsledok: <span v-html="km('\\varphi \\approx 60\\,\\%')"/> — optimálna vlhkosť pre bývanie.
            </p>
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-6 mb-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-3">Príklad 2: Hmotnosť vodnej pary v miestnosti</h3>
        <div class="bg-gray-50 rounded-lg p-4 mb-4">
          <p class="text-gray-700">
            V obývacej izbe s rozmermi 5 m × 4 m × 2,5 m je pri teplote 22 °C relatívna vlhkosť 55 %.
            Maximálna absolútna vlhkosť pri 22 °C je
            <span v-html="km('\\rho_{\\max} = 19{,}4\\,\\text{g/m}^3')"/>.
            Aká hmotnosť vodnej pary sa nachádza v izbe?
          </p>
        </div>
        <div class="space-y-3">
          <p class="font-medium text-gray-700">Riešenie:</p>
          <p class="text-gray-700">Objem miestnosti:</p>
          <MathFormula display formula="V = 5 \cdot 4 \cdot 2{,}5 = 50\,\text{m}^3" />
          <p class="text-gray-700">Absolútna vlhkosť z relatívnej vlhkosti:</p>
          <MathFormula display formula="\rho = \frac{\varphi}{100\,\%} \cdot \rho_{\max} = \frac{55}{100} \cdot 19{,}4 = 10{,}67\,\text{g/m}^3" />
          <p class="text-gray-700">Hmotnosť vodnej pary:</p>
          <MathFormula display formula="m = \rho \cdot V = 10{,}67\,\text{g/m}^3 \cdot 50\,\text{m}^3 = 533{,}5\,\text{g} \approx 0{,}53\,\text{kg}" />
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p class="font-semibold text-indigo-800">
              Výsledok: V miestnosti je skrytých asi 0,53 kg vodnej pary!
            </p>
          </div>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-6 mb-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-3">Príklad 3: Rosný bod — kondenzácia na okne</h3>
        <div class="bg-gray-50 rounded-lg p-4 mb-4">
          <p class="text-gray-700">
            V miestnosti je teplota 20 °C a relatívna vlhkosť 60 %.
            Absolútna vlhkosť vzduchu je teda
            <span v-html="km('\\rho = 0{,}6 \\cdot 17{,}3 = 10{,}38\\,\\text{g/m}^3')"/>.
            Pri akej teplote nastane kondenzácia (rosný bod), ak vieme,
            že maximálna vlhkosť pri 12 °C je 10,64 g/m³ a pri 11 °C je 10,01 g/m³?
          </p>
        </div>
        <div class="space-y-3">
          <p class="font-medium text-gray-700">Riešenie:</p>
          <p class="text-gray-700">
            Rosný bod nastane, keď
            <span v-html="km('\\rho_{\\max}(t_{\\text{rosný}}) = \\rho = 10{,}38\\,\\text{g/m}^3')"/>.
          </p>
          <p class="text-gray-700">Porovnáme s tabuľkovými hodnotami:</p>
          <ul class="ml-4 text-gray-700 space-y-1 text-sm">
            <li>
              Pri 12 °C:
              <span v-html="km('\\rho_{\\max} = 10{,}64\\,\\text{g/m}^3 > 10{,}38\\,\\text{g/m}^3')"/>
              → vzduch ešte nenasýtený
            </li>
            <li>
              Pri 11 °C:
              <span v-html="km('\\rho_{\\max} = 10{,}01\\,\\text{g/m}^3 < 10{,}38\\,\\text{g/m}^3')"/>
              → vzduch by bol prenasýtený
            </li>
          </ul>
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p class="font-semibold text-indigo-800">
              Rosný bod je medzi 11 °C a 12 °C — okno chladnejšie ako ~11,7 °C sa bude "potiť".
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sekcia 5: Vplyv vlhkosti -->
    <section aria-label="Vplyv vlhkosti na zdravie a techniku" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
        5. Vplyv vlhkosti na zdravie a techniku
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-800 mb-3">🏥 Vplyv na zdravie</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex gap-2"><span>•</span><span>Príliš suchý vzduch (φ &lt; 30 %) dráždi sliznice, spôsobuje suchú pokožku a zvyšuje náchylnosť na infekcie</span></li>
            <li class="flex gap-2"><span>•</span><span>Príliš vlhký vzduch (φ &gt; 70 %) podporuje rast plesní a roztočov, čo môže spôsobiť alergie</span></li>
            <li class="flex gap-2"><span>•</span><span>Optimum pre ľudský organizmus: φ = 40 – 60 %</span></li>
            <li class="flex gap-2"><span>•</span><span>Vysoká vlhkosť pri vysokých teplotách zhoršuje pocit tepla, pretože brzdí odparovanie potu z pokožky</span></li>
          </ul>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">⚙️ Vplyv na techniku</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex gap-2"><span>•</span><span>Vysoká vlhkosť spôsobuje koróziu kovov a degradáciu elektrických obvodov</span></li>
            <li class="flex gap-2"><span>•</span><span>V skladoch potravín a archívoch sa udržuje nízka vlhkosť (pod 50 %), aby sa predišlo plesniam</span></li>
            <li class="flex gap-2"><span>•</span><span>V hudobných nástrojoch (napr. husle, klavír) môže zmena vlhkosti deformovať drevo</span></li>
            <li class="flex gap-2"><span>•</span><span>Priemyselné procesy (textilný priemysel, tlačiarne) vyžadujú presnú kontrolu vlhkosti</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové vzorce</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-lg p-3 border border-gray-200">
              <p class="text-sm text-gray-500 mb-1">Absolútna vlhkosť:</p>
              <MathFormula formula="\rho = m / V \;\; [\text{kg/m}^3]" />
            </div>
            <div class="bg-white rounded-lg p-3 border border-gray-200">
              <p class="text-sm text-gray-500 mb-1">Relatívna vlhkosť:</p>
              <MathFormula formula="\varphi = (\rho / \rho_{\max}) \cdot 100\,\%" />
            </div>
            <div class="bg-white rounded-lg p-3 border border-gray-200">
              <p class="text-sm text-gray-500 mb-1">Relatívna vlhkosť cez tlak:</p>
              <MathFormula formula="\varphi = (p / p_0) \cdot 100\,\%" />
            </div>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové pojmy</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li><strong>Absolútna vlhkosť ρ:</strong> hustota vodnej pary v ovzduší [kg/m³]</li>
            <li><strong>Relatívna vlhkosť φ:</strong> pomer ρ k ρ<sub>max</sub> v percentách</li>
            <li><strong>Nasýtený vzduch:</strong> φ = 100 %, vzduch nemôže pojať viac pary</li>
            <li><strong>Rosný bod:</strong> teplota, pri ktorej nastáva kondenzácia (φ = 100 %)</li>
            <li><strong>Psychrometer:</strong> prístroj na meranie vlhkosti (suchý + mokrý teplomer)</li>
            <li><strong>Hygrometer:</strong> vlasový vlhkomer — využíva rozťažnosť vlasu</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">🧠 Otestuj sa</h2>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div v-if="!quizFinished">
          <!-- Progress -->
          <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
            <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <div class="flex gap-1">
              <div
                v-for="(q, i) in quiz"
                :key="i"
                class="w-3 h-3 rounded-full transition-colors"
                :class="i < currentQ ? 'bg-indigo-500' : i === currentQ ? 'bg-indigo-300' : 'bg-gray-200'"
              />
            </div>
          </div>

          <!-- Question -->
          <p data-testid="question" class="text-lg font-semibold text-gray-800 mb-6" v-html="currentQuestion.question"/>

          <!-- Options -->
          <div class="space-y-3 mb-6">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              class="w-full text-left p-4 rounded-xl border-2 transition-all duration-200"
              :class="{
                'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer': selectedAnswer === null,
                'border-green-500 bg-green-50': selectedAnswer !== null && i === currentQuestion.correctIndex,
                'border-red-400 bg-red-50': selectedAnswer === i && i !== currentQuestion.correctIndex,
                'border-gray-200 opacity-60': selectedAnswer !== null && i !== currentQuestion.correctIndex && i !== selectedAnswer,
                'cursor-not-allowed': selectedAnswer !== null
              }"
              @click="selectAnswer(i)"
              v-html="option"
            />
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div v-if="selectedAnswer !== null" data-testid="feedback" class="mb-4">
              <div
                class="p-4 rounded-xl"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-300'
                  : 'bg-red-50 border border-red-300'"
              >
                <p
                  class="font-semibold mb-1"
                  :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-800' : 'text-red-800'"
                >
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✅ Správne!' : '❌ Nesprávne' }}
                </p>
                <p class="text-gray-700 text-sm" v-html="currentQuestion.explanation"/>
              </div>
            </div>
          </Transition>

          <!-- Next button -->
          <div class="flex justify-end">
            <button
              v-if="selectedAnswer !== null"
              data-testid="next-btn"
              type="button"
              class="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </div>

        <!-- Result -->
        <div v-else data-testid="result" class="text-center py-8">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
          <p data-testid="score" class="text-gray-600 mb-6">
            Získal si {{ quizScore }} z {{ quiz.length }} bodov ({{ Math.round(quizScore / quiz.length * 100) }} %)
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            @click="resetQuiz"
          >
            Skúsiť znova
          </button>
        </div>
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

const quiz = [
  {
    question: 'Čo vyjadruje absolútna vlhkosť vzduchu?',
    options: [
      'Percentuálne vyjadrenie nasýtenia vzduchu vodnou parou',
      'Skutočné množstvo vodnej pary v 1 m³ vzduchu [kg/m³ alebo g/m³]',
      'Teplotu, pri ktorej nastáva kondenzácia vodnej pary',
      'Rozdiel teplôt suchého a mokrého teplomera v psychrometri'
    ],
    correctIndex: 1,
    explanation: 'Absolútna vlhkosť ρ je hustota vodnej pary v ovzduší — udáva hmotnosť vodnej pary v 1 m³ vzduchu. Meria sa v kg/m³ alebo g/m³ a závisí od teploty vzduchu.'
  },
  {
    question: 'Vzduch pri 20 °C má absolútnu vlhkosť 8,65 g/m³. Maximálna vlhkosť pri 20 °C je 17,3 g/m³. Aká je relatívna vlhkosť?',
    options: [
      '25 %',
      '40 %',
      '50 %',
      '60 %'
    ],
    correctIndex: 2,
    explanation: 'φ = (ρ / ρ_max) × 100 % = (8,65 / 17,3) × 100 % = 0,5 × 100 % = 50 %.'
  },
  {
    question: 'Čo je rosný bod?',
    options: [
      'Maximálna teplota, pri ktorej môže existovať vodná para v atmosfére',
      'Teplota, na ktorú treba vzduch ochladiť, aby sa stal nasýteným (φ = 100 %)',
      'Teplota topenia ľadu pri normálnom atmosferickom tlaku',
      'Teplota, pri ktorej je relatívna vlhkosť presne 50 %'
    ],
    correctIndex: 1,
    explanation: 'Rosný bod je teplota, na ktorú musíme ochladiť vzduch, aby sa stal nasýteným (φ = 100 %). Pri ďalšom ochladzovaní nastáva kondenzácia — vzniká rosa, hmla alebo oblaky.'
  },
  {
    question: 'Na akom princípe pracuje psychrometer (Augustov)?',
    options: [
      'Meria zmenu dĺžky ľudského vlasu spôsobenú vlhkosťou',
      'Meria tlak vodnej pary na membránu',
      'Porovnáva teploty suchého a mokrého teplomera — výpar ochladzuje mokrý teplomer',
      'Meria optickú absorpciu infračerveného žiarenia vodnou parou'
    ],
    correctIndex: 2,
    explanation: 'Augustov psychrometer obsahuje dva teplomery: suchý a mokrý (obtočený navlhčenou tkaninou). Výpar vody z mokrého teplomera ho ochladzuje. Z rozdielu teplôt sa pomocou tabuľky určí relatívna vlhkosť.'
  },
  {
    question: 'Miestnosť má objem 60 m³. Absolútna vlhkosť vzduchu je 12 g/m³. Aká hmotnosť vodnej pary je v miestnosti?',
    options: [
      '72 g',
      '720 g',
      '5 g',
      '1 200 g'
    ],
    correctIndex: 1,
    explanation: 'm = ρ × V = 12 g/m³ × 60 m³ = 720 g = 0,72 kg. Také množstvo vodnej pary je skryté v bežnej obytnej miestnosti!'
  },
  {
    question: 'Aká relatívna vlhkosť je optimálna pre zdravie a pohodu v obytných priestoroch?',
    options: [
      '10 – 20 %',
      '40 – 60 %',
      '70 – 80 %',
      '90 – 100 %'
    ],
    correctIndex: 1,
    explanation: 'Optimálna relatívna vlhkosť pre bývanie je 40 – 60 %. Pod 30 % vzduch dráždi sliznice a vysušuje pokožku. Nad 70 % hrozí rast plesní a roztočov, čo spôsobuje alergie.'
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
