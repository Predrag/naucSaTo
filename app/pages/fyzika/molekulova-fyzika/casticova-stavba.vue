<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/molekulova-fyzika" class="hover:text-emerald-600 transition-colors">Molekulová fyzika a termodynamika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Časticová stavba látok</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚛️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Časticová stavba látok</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">Atómy, molekuly a ich pohyb – základy molekulovej fyziky</p>

    <!-- Intro -->
    <p class="text-lg text-gray-700 mb-10 leading-relaxed">
      Všetka hmota okolo nás sa skladá z nepatrne malých častíc –
      <strong>atómov</strong> a <strong>molekúl</strong>.
      Pochopenie ich správania je kľúčom k vysvetleniu tepelných javov, skupenstiev látok aj
      tepelnej rozťažnosti.
    </p>

    <!-- ===== Section 1: Atómy a molekuly ===== -->
    <section aria-label="Atómy a molekuly" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        1. Atómy a molekuly
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Atóm</strong> je najmenšia častica chemického prvku, ktorá si zachováva jeho
        chemické vlastnosti. Skladá sa z jadra (protóny a neutróny) a elektrónového obalu.
        <strong>Molekula</strong> je najmenšia častica látky schopná samostatnej existencie –
        tvorí ju jeden alebo viac atómov chemicky viazaných dohromady.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-blue-800 mb-4">Základné veličiny a vzorce</h3>
        <div class="space-y-4 text-gray-700">
          <div class="flex flex-wrap items-center gap-3">
            <span class="font-medium w-52 shrink-0">Avogadrova konštanta:</span>
            <span v-html="km('N_A = 6{,}022 \\times 10^{23} \\, \\mathrm{mol}^{-1}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="font-medium w-52 shrink-0">Molárna hmotnosť:</span>
            <span v-html="km('M = m_0 \\cdot N_A')"/>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="font-medium w-52 shrink-0">Hmotnosť jednej molekuly:</span>
            <span v-html="km('m_0 = \\dfrac{M}{N_A}')"/>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="font-medium w-52 shrink-0">Počet molekúl:</span>
            <span v-html="km('N = n \\cdot N_A')"/>
          </div>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-amber-800 mb-3">Príklad 1: Hmotnosť molekuly vody</h3>
        <p class="text-gray-700 mb-3">
          Vypočítaj hmotnosť jednej molekuly vody (H₂O),
          ak molárna hmotnosť vody je
          <span v-html="km('M = 18 \\, \\mathrm{g/mol}')"/>.
        </p>
        <div class="bg-white rounded-lg p-4 space-y-3">
          <p class="text-gray-600">
            <strong>Dané:</strong>
            <span v-html="km('M = 18 \\, \\mathrm{g/mol} = 0{,}018 \\, \\mathrm{kg/mol}')"/>,
            <span v-html="km('N_A = 6{,}022 \\times 10^{23} \\, \\mathrm{mol}^{-1}')"/>
          </p>
          <div class="flex justify-center my-2" v-html="kd('m_0 = \\frac{M}{N_A} = \\frac{0{,}018}{6{,}022 \\times 10^{23}} \\approx 2{,}99 \\times 10^{-26} \\, \\mathrm{kg}')"/>
          <p class="text-emerald-700 font-semibold">Výsledok: m₀ ≈ 3 × 10⁻²⁶ kg</p>
        </div>
      </div>
    </section>

    <!-- ===== Section 2: Brownov pohyb a medzimolekulové sily ===== -->
    <section aria-label="Brownov pohyb a medzimolekulové sily" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        2. Brownov pohyb a medzimolekulové sily
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        V roku 1827 botanik <strong>Robert Brown</strong> pozoroval, že peľové zrná vo vode
        sa pohybujú nepravidelne a neustále. Tento jav je dôsledkom náhodných nárazov molekúl
        tekutiny na pozorovanú časticou. Je priamym experimentálnym dôkazom, že molekuly sú
        v neustálom <strong>tepelnom pohybe</strong>.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 class="font-semibold text-green-800 mb-3">Brownov pohyb – vlastnosti</h3>
          <ul class="text-gray-700 space-y-2 text-sm">
            <li class="flex gap-2"><span class="shrink-0">•</span><span>Chaotický, náhodný, neprestajný pohyb</span></li>
            <li class="flex gap-2"><span class="shrink-0">•</span><span>So rastúcou teplotou sa zosilňuje</span></li>
            <li class="flex gap-2"><span class="shrink-0">•</span><span>Menšie a ľahšie častice sa pohybujú výraznejšie</span></li>
            <li class="flex gap-2"><span class="shrink-0">•</span><span>Difúzia – samovoľné miešanie látok</span></li>
          </ul>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <h3 class="font-semibold text-purple-800 mb-3">Medzimolekulové sily</h3>
          <ul class="text-gray-700 space-y-2 text-sm">
            <li class="flex gap-2"><span class="shrink-0">•</span><span>Elektromagnetickej povahy</span></li>
            <li class="flex gap-2"><span class="shrink-0">•</span>
              <span><strong>Príťažlivé</strong> pre <span v-html="km('r > r_0')"/></span>
            </li>
            <li class="flex gap-2"><span class="shrink-0">•</span>
              <span><strong>Odpudivé</strong> pre <span v-html="km('r < r_0')"/></span>
            </li>
            <li class="flex gap-2"><span class="shrink-0">•</span>
              <span>Rovnovážna vzdialenosť <span v-html="km('r_0 \\approx 10^{-10} \\, \\mathrm{m}')"/></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-100 border border-gray-300 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-gray-800 mb-3">Závislosť medzimolekulovej sily od vzdialenosti</h3>
        <div class="space-y-2 text-gray-700">
          <div class="flex items-center gap-3">
            <span class="inline-block w-3 h-3 rounded-full bg-green-500 shrink-0"/>
            <span>Pre <span v-html="km('r > r_0')"/>: sila je <strong>príťažlivá</strong> – molekuly sa k sebe priťahujú</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="inline-block w-3 h-3 rounded-full bg-yellow-500 shrink-0"/>
            <span>Pre <span v-html="km('r = r_0')"/>: sila je <strong>nulová</strong> – rovnovážna poloha</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="inline-block w-3 h-3 rounded-full bg-red-500 shrink-0"/>
            <span>Pre <span v-html="km('r < r_0')"/>: sila je <strong>odpudivá</strong> – molekuly sa odpudzujú</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Section 3: Skupenstvá látok ===== -->
    <section aria-label="Skupenstvá látok z pohľadu časticovej stavby" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        3. Skupenstvá látok z pohľadu časticovej stavby
      </h2>

      <div class="grid md:grid-cols-3 gap-5 mb-8">
        <div class="bg-blue-50 border border-blue-300 rounded-xl p-5 text-center">
          <div class="text-4xl mb-3">🧊</div>
          <h3 class="font-bold text-blue-800 mb-3">Tuhé látky</h3>
          <ul class="text-gray-700 text-sm text-left space-y-1">
            <li>• Molekuly v pevných polohách</li>
            <li>• Kmitajú okolo rovnovážnych polôh</li>
            <li>• Silné medzimolekulové sily</li>
            <li>• Stály tvar aj objem</li>
          </ul>
        </div>
        <div class="bg-cyan-50 border border-cyan-300 rounded-xl p-5 text-center">
          <div class="text-4xl mb-3">💧</div>
          <h3 class="font-bold text-cyan-800 mb-3">Kvapaliny</h3>
          <ul class="text-gray-700 text-sm text-left space-y-1">
            <li>• Molekuly v blízkosti susedov</li>
            <li>• Voľne sa pohybujú</li>
            <li>• Stredne silné sily</li>
            <li>• Stály objem, nestály tvar</li>
          </ul>
        </div>
        <div class="bg-sky-50 border border-sky-300 rounded-xl p-5 text-center">
          <div class="text-4xl mb-3">💨</div>
          <h3 class="font-bold text-sky-800 mb-3">Plyny</h3>
          <ul class="text-gray-700 text-sm text-left space-y-1">
            <li>• Molekuly ďaleko od seba</li>
            <li>• Pohybujú sa veľmi rýchlo</li>
            <li>• Zanedbateľné sily</li>
            <li>• Nestály tvar ani objem</li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-yellow-800 mb-4">Kryštalické vs. amorfné tuhé látky</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span class="text-lg">💎</span> Kryštalické látky
            </h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• Pravidelné usporiadanie – <strong>kryštalická mriežka</strong></li>
              <li>• Ostrý bod topenia</li>
              <li>• Anizotropné vlastnosti (v rôznych smeroch rôzne)</li>
              <li>• Príklady: kuchynská soľ, diamant, ľad, kremeň</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <span class="text-lg">🔮</span> Amorfné látky
            </h4>
            <ul class="text-gray-700 text-sm space-y-1">
              <li>• <strong>Nepravidelné</strong> usporiadanie molekúl</li>
              <li>• Mäknú postupne v rozmedzí teplôt</li>
              <li>• Izotropné vlastnosti (rovnaké vo všetkých smeroch)</li>
              <li>• Príklady: sklo, živica, guma, vosk</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Section 4: Vnútorná energia a teplota ===== -->
    <section aria-label="Vnútorná energia a teplota" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        4. Vnútorná energia a teplota
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        <strong>Vnútorná energia</strong> telesa je súhrn kinetickej energie tepelného pohybu
        všetkých molekúl a potenciálnej energie ich vzájomného pôsobenia (medzimolekulové sily).
      </p>

      <div class="flex justify-center mb-6">
        <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center w-full max-w-md">
          <p class="text-gray-600 text-sm mb-2">Vnútorná energia</p>
          <div v-html="kd('U = E_k + E_p')"/>
          <p class="text-gray-500 text-xs mt-2">
            <span v-html="km('E_k')"/> – kinetická energia,
            <span v-html="km('E_p')"/> – potenciálna energia molekúl
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 class="font-semibold text-orange-800 mb-3">Stredná kinetická energia molekuly</h3>
          <p class="text-gray-700 text-sm mb-3">
            Pre ideálny plyn platí, že stredná kinetická energia molekuly závisí
            <em>výlučne</em> od termodynamickej teploty:
          </p>
          <div class="flex justify-center my-2" v-html="kd('\\bar{E}_k = \\frac{3}{2} k_B T')"/>
          <p class="text-gray-600 text-xs mt-3">
            <span v-html="km('k_B = 1{,}38 \\times 10^{-23} \\, \\mathrm{J/K}')"/>
            – Boltzmannova konštanta,
            <span v-html="km('T')"/> – teplota v kelvinoch
          </p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-semibold text-red-800 mb-3">Teplota a termodynamická teplota</h3>
          <p class="text-gray-700 text-sm mb-3">
            Teplota je miera strednej kinetickej energie tepelného pohybu molekúl.
            Čím vyššia teplota, tým rýchlejší pohyb molekúl. Súvislosť stupníc:
          </p>
          <div class="flex justify-center my-2" v-html="kd('T \\,[\\mathrm{K}] = t \\,[°\\mathrm{C}] + 273{,}15')"/>
          <p class="text-gray-600 text-xs mt-2">Absolútna nula: T = 0 K = −273,15 °C</p>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-amber-800 mb-3">Príklad 2: Stredná kinetická energia molekuly</h3>
        <p class="text-gray-700 mb-3">
          Vypočítaj strednú kinetickú energiu molekuly plynu pri teplote t = 27 °C.
        </p>
        <div class="bg-white rounded-lg p-4 space-y-3">
          <p class="text-gray-600">
            <strong>Dané:</strong> t = 27 °C
            <span v-html="km('\\Rightarrow T = 300 \\, \\mathrm{K}')"/>,
            <span v-html="km('k_B = 1{,}38 \\times 10^{-23} \\, \\mathrm{J/K}')"/>
          </p>
          <div
            class="flex justify-center my-2"
            v-html="kd('\\bar{E}_k = \\frac{3}{2} k_B T = \\frac{3}{2} \\cdot 1{,}38 \\times 10^{-23} \\cdot 300 \\, \\mathrm{J}')"/>
          <div
            class="flex justify-center my-2"
            v-html="kd('\\bar{E}_k = 6{,}21 \\times 10^{-21} \\, \\mathrm{J}')"/>
          <p class="text-emerald-700 font-semibold">
            Výsledok: <span v-html="km('\\bar{E}_k \\approx 6{,}21 \\times 10^{-21} \\, \\mathrm{J}')"/>
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Section 5: Tepelná rozťažnosť ===== -->
    <section aria-label="Tepelná rozťažnosť" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        5. Tepelná rozťažnosť
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Pri zahrievaní sa amplitude kmitania molekúl zväčšujú a stredná rovnovážna vzdialenosť
        medzi nimi rastie. Následkom toho sa zväčšujú rozmery telesa – ide o
        <strong>tepelnú rozťažnosť</strong>. Tento jav treba zohľadniť napríklad pri
        stavbe mostov, koľajníc alebo teplotných kompenzátoroch potrubí.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-teal-50 border border-teal-200 rounded-xl p-5">
          <h3 class="font-semibold text-teal-800 mb-3">Dĺžková rozťažnosť</h3>
          <div class="flex justify-center mb-3" v-html="kd('\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta t')"/>
          <div class="flex justify-center mb-3" v-html="kd('l = l_0 \\,(1 + \\alpha \\,\\Delta t)')"/>
          <p class="text-gray-600 text-sm">
            <span v-html="km('\\alpha \\, [\\mathrm{K}^{-1}]')"/> – koeficient dĺžkovej rozťažnosti<br>
            <span v-html="km('l_0')"/> – počiatočná dĺžka<br>
            <span v-html="km('\\Delta t')"/> – zmena teploty
          </p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 class="font-semibold text-emerald-800 mb-3">Objemová rozťažnosť</h3>
          <div class="flex justify-center mb-3" v-html="kd('\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta t')"/>
          <div class="flex justify-center mb-3" v-html="kd('V = V_0 \\,(1 + \\beta \\,\\Delta t)')"/>
          <p class="text-gray-600 text-sm">
            <span v-html="km('\\beta \\approx 3\\alpha \\, [\\mathrm{K}^{-1}]')"/> – koeficient objemovej rozťažnosti<br>
            <span v-html="km('V_0')"/> – počiatočný objem<br>
            Platí pre izotropné tuhé látky aj kvapaliny
          </p>
        </div>
      </div>

      <!-- Tabuľka koeficientov -->
      <div class="bg-gray-100 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-gray-800 mb-3">Koeficienty dĺžkovej rozťažnosti vybraných materiálov</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-700">
            <thead>
              <tr class="bg-gray-200">
                <th scope="col" class="text-left p-2 rounded-tl-lg">Látka</th>
                <th scope="col" class="text-right p-2 rounded-tr-lg">
                  <span v-html="km('\\alpha \\, [10^{-6} \\, \\mathrm{K}^{-1}]')"/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="p-2">Oceľ</td><td class="text-right p-2">12</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="p-2">Meď</td><td class="text-right p-2">17</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="p-2">Hliník</td><td class="text-right p-2">23</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="p-2">Sklo</td><td class="text-right p-2">9</td>
              </tr>
              <tr>
                <td class="p-2">Invar (Fe–Ni zliatina)</td><td class="text-right p-2">1,5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-amber-800 mb-3">Príklad 3: Predĺženie oceľového mosta</h3>
        <p class="text-gray-700 mb-3">
          Oceľový most má pri teplote 0 °C dĺžku
          <span v-html="km('l_0 = 500 \\, \\mathrm{m}')"/>.
          Aká bude jeho dĺžka pri teplote 40 °C?
          <span v-html="km('(\\alpha_{\\text{oceľ}} = 12 \\times 10^{-6} \\, \\mathrm{K}^{-1})')"/>
        </p>
        <div class="bg-white rounded-lg p-4 space-y-3">
          <p class="text-gray-600">
            <strong>Dané:</strong>
            <span v-html="km('l_0 = 500 \\, \\mathrm{m}')"/>,
            <span v-html="km('\\Delta t = 40 \\, \\mathrm{K}')"/>,
            <span v-html="km('\\alpha = 12 \\times 10^{-6} \\, \\mathrm{K}^{-1}')"/>
          </p>
          <p class="text-gray-600"><strong>Predĺženie:</strong></p>
          <div
            class="flex justify-center my-2"
            v-html="kd('\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta t = 500 \\cdot 12 \\times 10^{-6} \\cdot 40 = 0{,}24 \\, \\mathrm{m}')"/>
          <p class="text-gray-600"><strong>Nová dĺžka:</strong></p>
          <div
            class="flex justify-center my-2"
            v-html="kd('l = l_0 + \\Delta l = 500 + 0{,}24 = 500{,}24 \\, \\mathrm{m}')"/>
          <p class="text-emerald-700 font-semibold">
            Výsledok: most sa predĺži o <strong>24 cm</strong>. Preto musia mať mosty kompenzačné dilatačné medzery.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Zhrnutie ===== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span>Látky sa skladajú z <strong>atómov a molekúl</strong> v neustálom tepelnom pohybe;
            počet molekúl v 1 mole je
            <span v-html="km('N_A = 6{,}022 \\times 10^{23}')"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span><strong>Brownov pohyb</strong> – chaotický pohyb drobných tuhých teliesok v tekutine –
            je priamym dôkazom tepelného pohybu molekúl; so teplotou sa zosilňuje.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span><strong>Medzimolekulové sily</strong>: príťažlivé pre
            <span v-html="km('r > r_0')"/>, odpudivé pre
            <span v-html="km('r < r_0')"/>, nulové pri rovnovážnej vzdialenosti
            <span v-html="km('r_0 \\approx 10^{-10} \\, \\mathrm{m}')"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span>Tri skupenstvá sa líšia usporiadaním a pohybom molekúl.
            <strong>Kryštalické</strong> látky majú pravidelné usporiadanie a ostrý bod topenia;
            <strong>amorfné</strong> látky mäknú v rozmedzí teplôt.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span><strong>Vnútorná energia</strong>:
            <span v-html="km('U = E_k + E_p')"/>
            – súčet kinetickej a potenciálnej energie všetkých molekúl.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span><strong>Teplota</strong> je mierou strednej kinetickej energie molekúl:
            <span v-html="km('\\bar{E}_k = \\tfrac{3}{2}k_B T')"/>.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
          <span><strong>Tepelná rozťažnosť</strong>:
            <span v-html="km('\\Delta l = l_0 \\alpha \\Delta t')"/> (dĺžková),
            <span v-html="km('\\Delta V = V_0 \\beta \\Delta t')"/> (objemová),
            kde <span v-html="km('\\beta \\approx 3\\alpha')"/>.</span>
        </li>
      </ul>
    </div>

    <!-- ===== Kvíz ===== -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="h-2 w-8 rounded-full transition-colors"
              :class="i < currentQ ? 'bg-emerald-400' : i === currentQ ? 'bg-blue-500' : 'bg-gray-200'"
            />
          </div>
        </div>

        <!-- Question -->
        <p
          data-testid="question"
          class="text-lg font-medium text-gray-800 mb-5"
          v-html="currentQuestion.question"
        />

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-gray-700"
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
            class="rounded-xl p-4 mb-5"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-emerald-50 border border-emerald-200'
              : 'bg-red-50 border border-red-200'"
          >
            <p
              class="font-semibold mb-1"
              :class="selectedAnswer === currentQuestion.correctIndex
                ? 'text-emerald-700' : 'text-red-700'"
            >
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
            </p>
            <p class="text-gray-700 text-sm" v-html="currentQuestion.explanation"/>
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          type="button"
          data-testid="next-btn"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div
        v-else
        data-testid="result"
        class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
      >
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-600 mb-6">
          Dosiahol si <strong>{{ quizScore }} z {{ quiz.length }}</strong> bodov.
        </p>
        <button
          type="button"
          data-testid="reset-btn"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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

function kd(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html', displayMode: true })
}

// --------------- KVÍZ ---------------
const quiz = [
  {
    question: 'Čo je Brownov pohyb?',
    options: [
      'Pohyb Zeme okolo Slnka spôsobený gravitáciou',
      'Chaotický pohyb malých tuhých tepliesok v tekutine spôsobený nárazmi molekúl tekutiny',
      'Pravidelné kmitanie molekúl v kryštalickej mriežke',
      'Rovnomerný pohyb molekúl plynu v jednom smere'
    ],
    correctIndex: 1,
    explanation: 'Brownov pohyb je nepravidelný chaotický pohyb drobných tuhých teliesok (napr. peľových zŕn) v tekutine. Je zapríčinený nerovnomernými nárazmi molekúl tekutiny na pozorovanú časticou a je priamym dôkazom tepelného pohybu molekúl.'
  },
  {
    question: 'Čo vyjadruje teplota z pohľadu molekulovej fyziky?',
    options: [
      'Celkovú vnútornú energiu telesa',
      'Potenciálnu energiu vzájomného pôsobenia molekúl',
      'Mieru strednej kinetickej energie tepelného pohybu molekúl',
      'Počet molekúl v jednotkovom objeme'
    ],
    correctIndex: 2,
    explanation: 'Teplota je fyzikálna veličina, ktorá vyjadruje mieru strednej kinetickej energie tepelného pohybu molekúl. Pre ideálny plyn platí: stredná kinetická energia molekuly = (3/2) k_B T.'
  },
  {
    question: 'Oceľová koľajnica má pri 0 °C dĺžku 25 m. Koeficient dĺžkovej rozťažnosti ocele je α = 12 × 10⁻⁶ K⁻¹. O koľko sa predĺži pri zahriatí na 50 °C?',
    options: [
      '0,015 mm',
      '15 mm',
      '1,5 mm',
      '150 mm'
    ],
    correctIndex: 1,
    explanation: 'Δl = l₀ · α · Δt = 25 · 12 × 10⁻⁶ · 50 = 0,015 m = 15 mm. Preto sa medzi koľajnicami nechávajú dilatačné medzery.'
  },
  {
    question: 'Čím sa líšia kryštalické a amorfné tuhé látky?',
    options: [
      'Kryštalické sú vždy priehľadné, amorfné vždy nepriehľadné',
      'Kryštalické majú pravidelné usporiadanie a ostrý bod topenia; amorfné majú nepravidelné usporiadanie a mäknú postupne',
      'Amorfné látky majú vyššiu hustotu ako kryštalické',
      'Kryštalické látky nemajú medzimolekulové sily'
    ],
    correctIndex: 1,
    explanation: 'Kryštalické látky (soľ, diamant, ľad) majú pravidelné usporiadanie molekúl – kryštalickú mriežku – a topia sa pri presne definovanej teplote. Amorfné látky (sklo, guma, živica) majú nepravidelné usporiadanie a mäknú v rozmedzí teplôt.'
  },
  {
    question: 'Medzimolekulová sila medzi dvoma molekulami je:',
    options: [
      'Vždy príťažlivá bez ohľadu na vzdialenosť',
      'Vždy odpudivá bez ohľadu na vzdialenosť',
      'Príťažlivá pre r > r₀, nulová pri r = r₀ a odpudivá pre r < r₀',
      'Nulová pre všetky vzdialenosti väčšie ako 1 nm'
    ],
    correctIndex: 2,
    explanation: 'Medzimolekulová sila závisí od vzdialenosti: pri r > r₀ je príťažlivá (molekuly sa k sebe priťahujú), pri r = r₀ je nulová (rovnovážna poloha, r₀ ≈ 10⁻¹⁰ m), pri r < r₀ je odpudivá (molekuly sa odpudzujú).'
  },
  {
    question: 'Vnútorná energia telesa je:',
    options: [
      'Kinetická energia pohybu telesa ako celku',
      'Potenciálna energia telesa v gravitačnom poli Zeme',
      'Súčet kinetickej energie tepelného pohybu všetkých molekúl a potenciálnej energie ich vzájomného pôsobenia',
      'Iba kinetická energia molekúl bez potenciálnej zložky'
    ],
    correctIndex: 2,
    explanation: 'Vnútorná energia U = E_k + E_p zahŕňa kinetickú energiu tepelného pohybu všetkých molekúl (kmitanie, rotácia, translačný pohyb) aj potenciálnu energiu ich vzájomného pôsobenia daného medzimolekulovými silami.'
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
    return 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-emerald-400 bg-emerald-50'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50'
  }
  return 'border-gray-200 opacity-60'
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
