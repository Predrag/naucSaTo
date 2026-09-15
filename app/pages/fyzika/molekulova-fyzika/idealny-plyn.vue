<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/molekulova-fyzika" class="hover:text-emerald-600 transition-colors">Molekulová fyzika a termodynamika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Ideálny plyn</span>
    </nav>

    <!-- Header -->
    <div class="bg-teal-600 text-white rounded-2xl p-8 mb-10 shadow-lg">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">🔬 Ideálny plyn</h1>
      <p class="text-teal-100 text-lg">Molekulová fyzika a termodynamika</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg leading-relaxed mb-10">
      Ideálny plyn je zjednodušený model plynu, ktorý nám umožňuje popísať správanie skutočných plynov
      jednoduchými matematickými zákonmi. Slúži ako základ celej termodynamiky a je neodmysliteľnou
      súčasťou stredoškolskej fyziky.
    </p>

    <!-- Section 1: Model ideálneho plynu -->
    <section aria-label="Model ideálneho plynu" class="mb-12">
      <h2 class="text-2xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">Model ideálneho plynu</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Ideálny plyn je model, v ktorom predpokladáme, že:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li>Molekuly sú bodové hmotné body — nemajú vlastný objem.</li>
        <li>Medzi molekulami nepôsobia žiadne príťažlivé ani odpudivé sily (okrem zrážok).</li>
        <li>Zrážky molekúl navzájom a so stenami nádoby sú dokonalo pružné.</li>
        <li>Molekuly sa pohybujú chaoticky (neusporiadane) všetkými smermi.</li>
      </ul>

      <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-teal-800 mb-2">Kedy platí model ideálneho plynu?</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          Skutočné plyny sa správajú ako ideálny plyn pri <strong>nízkych tlakoch</strong> a
          <strong>vysokých teplotách</strong>. Za bežných podmienok (izbová teplota, atmosferický tlak)
          sa väčšina plynov (vzduch, dusík, kyslík) od ideálneho plynu odlišuje len minimálne.
        </p>
      </div>

      <p class="text-gray-700 mb-4">Stav ideálneho plynu je jednoznačne určený tromi stavovými veličinami:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-2xl font-bold text-teal-600 mb-1" v-html="km('p')"/>
          <div class="text-gray-600 text-sm">Tlak [Pa]</div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-2xl font-bold text-teal-600 mb-1" v-html="km('V')"/>
          <div class="text-gray-600 text-sm">Objem [m³]</div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
          <div class="text-2xl font-bold text-teal-600 mb-1" v-html="km('T')"/>
          <div class="text-gray-600 text-sm">Teplota [K]</div>
        </div>
      </div>
    </section>

    <!-- Section 2: Stavová rovnica -->
    <section aria-label="Stavová rovnica ideálneho plynu" class="mb-12">
      <h2 class="text-2xl font-bold text-teal-700 mb-4 border-b-2 border-teal-200 pb-2">Stavová rovnica ideálneho plynu</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Všetky tri stavové veličiny spája <strong>stavová rovnica ideálneho plynu</strong>. Táto rovnica
        nám hovorí, ako sa správa daná látka plynu v rôznych podmienkach.
      </p>

      <div class="bg-teal-600 text-white rounded-2xl p-6 mb-6 text-center">
        <div class="text-sm text-teal-200 mb-3 uppercase tracking-wide font-semibold">Stavová rovnica ideálneho plynu</div>
        <div class="text-2xl" v-html="km('pV = nRT')"/>
        <div class="text-teal-100 text-sm mt-3">kde <span class="inline-block" v-html="km('R = 8{,}314\\,\\text{J/(mol}\\cdot\\text{K)}')"/> je molárna plynová konštanta</div>
      </div>

      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr class="bg-teal-600 text-white">
              <th scope="col" class="px-4 py-3 text-left">Veličina</th>
              <th scope="col" class="px-4 py-3 text-left">Symbol</th>
              <th scope="col" class="px-4 py-3 text-left">Jednotka</th>
              <th scope="col" class="px-4 py-3 text-left">Poznámka</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3">Tlak</td>
              <td class="px-4 py-3" v-html="km('p')"/>
              <td class="px-4 py-3">Pa (Pascal)</td>
              <td class="px-4 py-3">Sila pôsobiaca na jednotku plochy</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3">Objem</td>
              <td class="px-4 py-3" v-html="km('V')"/>
              <td class="px-4 py-3">m³</td>
              <td class="px-4 py-3">Priestor zaujatý plynom</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3">Látkové množstvo</td>
              <td class="px-4 py-3" v-html="km('n')"/>
              <td class="px-4 py-3">mol</td>
              <td class="px-4 py-3">Počet mólov látky</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3">Molárna plynová konštanta</td>
              <td class="px-4 py-3" v-html="km('R')"/>
              <td class="px-4 py-3">J/(mol·K)</td>
              <td class="px-4 py-3">R = 8,314 J/(mol·K)</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3">Termodynamická teplota</td>
              <td class="px-4 py-3" v-html="km('T')"/>
              <td class="px-4 py-3">K (Kelvin)</td>
              <td class="px-4 py-3">T = t + 273,15; t je Celziova teplota</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 class="font-bold text-amber-800 mb-3">Príklad 1: Výpočet tlaku plynu zo stavovej rovnice</h3>
        <p class="text-gray-700 mb-3 text-sm">
          V nádobe o objeme <span v-html="km('V = 2{,}0\\,\\text{m}^3')"/> je
          <span v-html="km('n = 3{,}0\\,\\text{mol}')"/> ideálneho plynu pri teplote
          <span v-html="km('t = 27\\,\\text{°C}')"/>. Aký je tlak plynu?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm space-y-2">
          <p class="text-gray-600 font-semibold">Riešenie:</p>
          <p class="text-gray-700">Prepočet teploty na Kelviny:
            <span v-html="km('T = t + 273{,}15 = 27 + 273 = 300\\,\\text{K}')"/>
          </p>
          <p class="text-gray-700">Zo stavovej rovnice vyjadríme tlak:</p>
          <div class="text-center my-3" v-html="km('p = \\dfrac{nRT}{V} = \\dfrac{3{,}0 \\cdot 8{,}314 \\cdot 300}{2{,}0}')"/>
          <div class="text-center font-bold text-teal-700 text-base" v-html="km('p \\approx 3741\\,\\text{Pa} \\approx 3{,}74\\,\\text{kPa}')"/>
        </div>
      </div>
    </section>

    <!-- Section 3: Izotermický, izochorický, izobarický, adiabatický dej -->
    <section aria-label="Deje v ideálnom plyne" class="mb-12">
      <h2 class="text-2xl font-bold text-teal-700 mb-6 border-b-2 border-teal-200 pb-2">Deje v ideálnom plyne</h2>

      <!-- Izotermický -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Izotermický dej <span class="text-gray-500 font-normal text-base">(T = konšt.)</span></h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Pri izotermickom deji ostáva <strong>teplota plynu konštantná</strong>. Plyn musí byť v tepelnom
          kontakte s okolím, ktoré pohlcuje alebo dodáva teplo. Platí <strong>Boyle-Mariottov zákon</strong>:
        </p>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4 text-center">
          <div class="text-sm text-blue-600 mb-2 font-semibold">Boyle-Mariottov zákon</div>
          <div v-html="km('p_1 V_1 = p_2 V_2 = \\text{konšt.}')"/>
          <div class="text-gray-500 text-sm mt-3">Graf v p-V diagrame: <strong>hyperbola</strong> (izotermická krivka)</div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Objem a tlak sú <strong>nepriamo úmerné</strong>: ak sa objem zmenší na polovicu, tlak sa zdvojnásobí.
          Príkladom je stlačenie plynu pumpou pri pomalom, plynulom pohybe piestu.
        </p>
      </div>

      <!-- Izochorický -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Izochorický dej <span class="text-gray-500 font-normal text-base">(V = konšt.)</span></h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Pri izochorickom deji ostáva <strong>objem plynu konštantný</strong> — napríklad plyn uzavretý
          v tuhej nádobe. Platí <strong>Gay-Lussacov zákon (I.)</strong>:
        </p>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-4 text-center">
          <div class="text-sm text-purple-600 mb-2 font-semibold">Gay-Lussacov zákon (I.)</div>
          <div v-html="km('\\dfrac{p_1}{T_1} = \\dfrac{p_2}{T_2} = \\text{konšt.}')"/>
          <div class="text-gray-500 text-sm mt-3">Graf v p-V diagrame: <strong>zvislá úsečka</strong> (V = konšt.)</div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Tlak a teplota (v Kelvinoch) sú <strong>priamo úmerné</strong>. Keď zohrievame plyn v uzavretej
          nádobe, tlak rastie. Preto môže dôjsť k výbuchu nádob vystavených veľkému teplu.
        </p>
      </div>

      <!-- Izobarický -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Izobarický dej <span class="text-gray-500 font-normal text-base">(p = konšt.)</span></h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Pri izobarickom deji ostáva <strong>tlak plynu konštantný</strong> — napríklad plyn pod pohyblivým
          piestom s konštantným záťažím. Platí <strong>Charlesov zákon (Gay-Lussacov II.)</strong>:
        </p>
        <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-4 text-center">
          <div class="text-sm text-green-600 mb-2 font-semibold">Charlesov zákon (Gay-Lussacov II.)</div>
          <div v-html="km('\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2} = \\text{konšt.}')"/>
          <div class="text-gray-500 text-sm mt-3">Graf v p-V diagrame: <strong>vodorovná úsečka</strong> (p = konšt.)</div>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Objem a teplota (v Kelvinoch) sú <strong>priamo úmerné</strong>. Zohrievaním plynu pri konštantnom
          tlaku sa jeho objem zväčšuje. Príkladom je nafukovanie balóna teplým vzduchom.
        </p>
      </div>

      <!-- Adiabatický -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Adiabatický dej <span class="text-gray-500 font-normal text-base">(bez výmeny tepla)</span></h3>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Pri adiabatickkom deji <strong>neprebieha výmena tepla</strong> medzi plynom a okolím — plyn je
          tepelne izolovaný alebo dej prebieha príliš rýchlo. Menia sa tlak, objem aj teplota súčasne.
        </p>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-orange-800 mb-1">Adiabatická kompresia (stlačenie):</p>
              <p class="text-gray-700">Plyn sa <strong>zahrieva</strong> — teplota rastie. Príklad: dieselový motor, kde sa vzduch stlačí natoľko, že vznieti palivo.</p>
            </div>
            <div>
              <p class="font-semibold text-orange-800 mb-1">Adiabatická expanzia (rozpínanie):</p>
              <p class="text-gray-700">Plyn sa <strong>ochladzuje</strong> — teplota klesá. Príklad: ochladzovanie vzduchu pri stúpaní v atmosfére (vznik oblakov).</p>
            </div>
          </div>
          <div class="text-gray-500 text-xs mt-3 border-t border-orange-200 pt-2">
            Adiabatická krivka je v p-V diagrame strmšia hyperbola ako izotermická.
          </div>
        </div>
      </div>

      <!-- Prehľad dejov v p-V diagrame -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h3 class="font-semibold text-gray-800 mb-3">Prehľad izolejí v p-V diagrame</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-10 h-0.5 bg-blue-500 inline-block flex-shrink-0"/>
              <span class="text-gray-700"><strong>Izotermická</strong> — hyperbola (T = konšt.)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-10 h-0.5 bg-purple-500 inline-block flex-shrink-0"/>
              <span class="text-gray-700"><strong>Izochorická</strong> — zvislá úsečka (V = konšt.)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-10 h-0.5 bg-green-500 inline-block flex-shrink-0"/>
              <span class="text-gray-700"><strong>Izobarická</strong> — vodorovná úsečka (p = konšt.)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-10 h-0.5 bg-orange-500 inline-block flex-shrink-0"/>
              <span class="text-gray-700"><strong>Adiabatická</strong> — strmšia hyperbola</span>
            </div>
          </div>
          <div class="text-gray-600">
            <p class="mb-2">Plocha pod krivkou v p-V diagrame zodpovedá <strong>práci vykonanej plynom</strong>.</p>
            <p>Pri izochorickom deji plyn žiadnu prácu nevykoná, pretože objem sa nemení (plocha = 0).</p>
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-amber-800 mb-3">Príklad 2: Izotermický dej — stlačenie plynu</h3>
        <p class="text-gray-700 mb-3 text-sm">
          Piest pumpy stlačuje vzduch pri konštantnej teplote. Vzduch mal objem
          <span v-html="km('V_1 = 0{,}5\\,\\text{l}')"/> pri tlaku
          <span v-html="km('p_1 = 100\\,\\text{kPa}')"/>.
          Po stlačení má objem <span v-html="km('V_2 = 0{,}1\\,\\text{l}')"/>. Aký je nový tlak?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm space-y-2">
          <p class="text-gray-600 font-semibold">Riešenie (Boyle-Mariottov zákon):</p>
          <p class="text-gray-700">Z <span v-html="km('p_1 V_1 = p_2 V_2')"/> vyjadríme <span v-html="km('p_2')"/>:</p>
          <div class="text-center my-3" v-html="km('p_2 = \\dfrac{p_1 V_1}{V_2} = \\dfrac{100 \\cdot 0{,}5}{0{,}1}')"/>
          <div class="text-center font-bold text-teal-700 text-base" v-html="km('p_2 = 500\\,\\text{kPa} = 0{,}5\\,\\text{MPa}')"/>
          <p class="text-gray-500 text-xs mt-2">Objem klesol 5-krát, tlak vzrástol 5-krát — nepriama úmernosť.</p>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-amber-800 mb-3">Príklad 3: Izobarický dej — ohrev plynu</h3>
        <p class="text-gray-700 mb-3 text-sm">
          Plyn pri konštantnom tlaku má pri teplote
          <span v-html="km('t_1 = 27\\,\\text{°C}')"/> objem
          <span v-html="km('V_1 = 3\\,\\text{l}')"/>.
          Na akú teplotu treba plyn zohrieť, aby sa objem zväčšil na
          <span v-html="km('V_2 = 4\\,\\text{l}')"/>?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm space-y-2">
          <p class="text-gray-600 font-semibold">Riešenie (Charlesov zákon):</p>
          <p class="text-gray-700">Prepočet teploty: <span v-html="km('T_1 = 27 + 273 = 300\\,\\text{K}')"/></p>
          <p class="text-gray-700">Z <span v-html="km('V_1/T_1 = V_2/T_2')"/> vyjadríme <span v-html="km('T_2')"/>:</p>
          <div class="text-center my-3" v-html="km('T_2 = \\dfrac{V_2 \\cdot T_1}{V_1} = \\dfrac{4 \\cdot 300}{3} = 400\\,\\text{K}')"/>
          <p class="text-gray-700">Prepočet späť na °C: <span v-html="km('t_2 = 400 - 273 = 127\\,\\text{°C}')"/></p>
          <div class="text-center font-bold text-teal-700 text-base" v-html="km('t_2 = 127\\,\\text{°C}')"/>
        </div>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 class="font-bold text-amber-800 mb-3">Príklad 4: Izochorický dej — zohrievanie v nádobe</h3>
        <p class="text-gray-700 mb-3 text-sm">
          Plyn v uzavretej nádobe má pri teplote
          <span v-html="km('T_1 = 300\\,\\text{K}')"/> tlak
          <span v-html="km('p_1 = 150\\,\\text{kPa}')"/>.
          Plyn zohrievame na teplotu <span v-html="km('T_2 = 450\\,\\text{K}')"/>. Aký bude nový tlak?
        </p>
        <div class="bg-white rounded-lg p-4 text-sm space-y-2">
          <p class="text-gray-600 font-semibold">Riešenie (Gay-Lussacov zákon I.):</p>
          <p class="text-gray-700">Z <span v-html="km('p_1/T_1 = p_2/T_2')"/> vyjadríme <span v-html="km('p_2')"/>:</p>
          <div class="text-center my-3" v-html="km('p_2 = \\dfrac{p_1 \\cdot T_2}{T_1} = \\dfrac{150 \\cdot 450}{300} = 225\\,\\text{kPa}')"/>
          <div class="text-center font-bold text-teal-700 text-base" v-html="km('p_2 = 225\\,\\text{kPa}')"/>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-teal-700 mb-3">Kľúčové vzorce</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-teal-500 font-bold mt-0.5 flex-shrink-0">▶</span>
              <div>
                <div class="font-medium text-gray-700">Stavová rovnica:</div>
                <div class="mt-1" v-html="km('pV = nRT,\\quad R = 8{,}314\\,\\text{J/(mol}\\cdot\\text{K)}')"/>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 font-bold mt-0.5 flex-shrink-0">▶</span>
              <div>
                <div class="font-medium text-gray-700">Izotermický dej (T = konšt.):</div>
                <div class="mt-1" v-html="km('p_1 V_1 = p_2 V_2')"/>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 font-bold mt-0.5 flex-shrink-0">▶</span>
              <div>
                <div class="font-medium text-gray-700">Izochorický dej (V = konšt.):</div>
                <div class="mt-1" v-html="km('\\dfrac{p_1}{T_1} = \\dfrac{p_2}{T_2}')"/>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 font-bold mt-0.5 flex-shrink-0">▶</span>
              <div>
                <div class="font-medium text-gray-700">Izobarický dej (p = konšt.):</div>
                <div class="mt-1" v-html="km('\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}')"/>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-teal-700 mb-3">Dôležité upozornenia</h3>
          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-red-500 flex-shrink-0 font-bold">!</span>
              Teplota musí byť vždy v <strong>Kelvinoch</strong>:
              <span class="inline-block" v-html="km('T = t + 273{,}15')"/>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 flex-shrink-0 font-bold">!</span>
              Tlak v <strong>Pascaloch (Pa)</strong>, objem v <strong>m³</strong> pri použití R
            </li>
            <li class="flex items-start gap-2">
              <span class="text-teal-500 flex-shrink-0">✓</span>
              R = 8,314 J/(mol·K) — molárna plynová konštanta
            </li>
            <li class="flex items-start gap-2">
              <span class="text-teal-500 flex-shrink-0">✓</span>
              Pri adiabatickej kompresii sa plyn <strong>zahrieva</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-teal-500 flex-shrink-0">✓</span>
              Izotermická krivka v p-V diagrame je <strong>hyperbola</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-teal-500 flex-shrink-0">✓</span>
              Pri izochorickom deji plyn nevykoná žiadnu prácu
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz o ideálnom plyne" class="mb-12">
      <h2 class="text-2xl font-bold text-teal-700 mb-6">Kvíz: Otestuj sa!</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="w-3 h-3 rounded-full transition-colors"
              :class="i < currentQ ? 'bg-teal-500' : i === currentQ ? 'bg-teal-300' : 'bg-gray-200'"
            />
          </div>
        </div>

        <!-- Question -->
        <div data-testid="question" class="mb-6">
          <p class="text-lg font-medium text-gray-800" v-html="currentQuestion.question"/>
        </div>

        <!-- Options -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            :disabled="selectedAnswer !== null"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm"
            :class="{
              'border-gray-200 hover:border-teal-300 hover:bg-teal-50 cursor-pointer': selectedAnswer === null,
              'border-teal-500 bg-teal-50 text-teal-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
              'border-red-300 bg-red-50 text-red-700': selectedAnswer !== null && selectedAnswer === i && i !== currentQuestion.correctIndex,
              'border-gray-100 text-gray-400': selectedAnswer !== null && selectedAnswer !== i && i !== currentQuestion.correctIndex,
              'cursor-not-allowed': selectedAnswer !== null
            }"
            @click="selectAnswer(i)"
          >
            <span class="font-semibold mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <span v-html="option"/>
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            class="rounded-xl p-4 mb-4 text-sm"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-teal-50 border border-teal-200 text-teal-800'
              : 'bg-red-50 border border-red-200 text-red-800'"
          >
            <div class="font-semibold mb-1">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
            </div>
            <div v-html="currentQuestion.explanation"/>
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          type="button"
          data-testid="next-btn"
          class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <div data-testid="score" class="text-lg text-gray-600 mb-6">
          Skóre: <span class="font-bold text-teal-600">{{ quizScore }} / {{ quiz.length }}</span>
        </div>
        <button
          type="button"
          data-testid="reset-btn"
          class="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
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

function km(f: string) {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

useHead({
  title: 'Ideálny plyn | Molekulová fyzika | Fyzika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Ideálny plyn, stavová rovnica pV=nRT, izotermický dej (Boyle-Mariott), izochorický dej (Gay-Lussac), izobarický dej (Charles), adiabatický dej. Výpočtové príklady a kvíz.'
    }
  ]
})

const quiz = [
  {
    question: 'Čo vyjadruje stavová rovnica ideálneho plynu <em>pV = nRT</em>?',
    options: [
      'Závislosť rýchlosti molekúl od tlaku plynu',
      'Vzťah medzi tlakom, objemom, látkovým množstvom a teplotou plynu',
      'Energiu jednej molekuly pri danej teplote',
      'Závislosť hustoty plynu od nadmorskej výšky'
    ],
    correctIndex: 1,
    explanation: 'Stavová rovnica <em>pV = nRT</em> popisuje stav ideálneho plynu cez štyri veličiny: tlak <em>p</em>, objem <em>V</em>, látkové množstvo <em>n</em> a termodynamickú teplotu <em>T</em>. Konštanta <em>R = 8,314 J/(mol·K)</em> je molárna plynová konštanta.'
  },
  {
    question: 'Aká je hodnota molárnej plynovej konštanty R?',
    options: [
      '6,022 × 10²³ J/(mol·K)',
      '1,38 × 10⁻²³ J/K',
      '8,314 J/(mol·K)',
      '273,15 J/(mol·K)'
    ],
    correctIndex: 2,
    explanation: 'Molárna plynová konštanta <em>R = 8,314 J/(mol·K)</em>. Číslo 6,022 × 10²³ je Avogadrova konštanta (počet molekúl v 1 móle) a 1,38 × 10⁻²³ J/K je Boltzmannova konštanta (pre jednu molekulu).'
  },
  {
    question: 'Plyn má objem V₁ = 4 l pri tlaku p₁ = 200 kPa. Teplota sa nemení. Aký bude tlak po stlačení na objem V₂ = 2 l?',
    options: [
      '100 kPa',
      '200 kPa',
      '400 kPa',
      '800 kPa'
    ],
    correctIndex: 2,
    explanation: 'Izotermický dej — Boyle-Mariottov zákon: <em>p₁V₁ = p₂V₂</em>, teda <em>p₂ = p₁V₁/V₂ = 200 · 4/2 = 400 kPa</em>. Objem sa zmenšil na polovicu, tlak sa zdvojnásobil — nepriama úmernosť.'
  },
  {
    question: 'Plyn v uzavretej nádobe má pri T₁ = 300 K tlak p₁ = 150 kPa. Aký bude tlak pri T₂ = 600 K?',
    options: [
      '75 kPa',
      '150 kPa',
      '300 kPa',
      '450 kPa'
    ],
    correctIndex: 2,
    explanation: 'Izochorický dej — Gay-Lussacov zákon (I.): <em>p₁/T₁ = p₂/T₂</em>, teda <em>p₂ = p₁ · T₂/T₁ = 150 · 600/300 = 300 kPa</em>. Teplota sa zdvojnásobila, tlak tiež — priama úmernosť.'
  },
  {
    question: 'Čo sa deje s teplotou plynu pri rýchlej adiabatickej kompresii (stlačení)?',
    options: [
      'Teplota zostáva konštantná — teplo odchádza do okolia',
      'Teplota klesá — plyn vykonáva prácu',
      'Teplota rastie — práca sa mení na vnútornú energiu',
      'Teplota závisí len od objemu nádoby'
    ],
    correctIndex: 2,
    explanation: 'Pri adiabatickej kompresii (bez výmeny tepla s okolím) sa vykonaná práca premení na vnútornú energiu plynu — teplota rastie. Príkladom je dieselový motor: vzduch sa stlačí tak, že sa ohrieje na teplotu vznitia paliva.'
  },
  {
    question: 'Plyn pri konštantnom tlaku má pri T₁ = 300 K objem V₁ = 6 l. Na akú teplotu ho treba zohrieť, aby objem vzrástol na V₂ = 9 l?',
    options: [
      '200 K',
      '350 K',
      '450 K',
      '550 K'
    ],
    correctIndex: 2,
    explanation: 'Izobarický dej — Charlesov zákon: <em>V₁/T₁ = V₂/T₂</em>, teda <em>T₂ = V₂ · T₁/V₁ = 9 · 300/6 = 450 K</em>. Objem vzrástol 1,5-násobne, teplota (v Kelvinoch) tiež — priama úmernosť.'
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
