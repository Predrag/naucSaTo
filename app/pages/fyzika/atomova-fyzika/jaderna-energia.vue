<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/atomova-fyzika" class="hover:text-emerald-600 transition-colors">Atómová a jadrová fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Jadrová energia</span>
    </nav>

    <!-- Header -->
    <div class="bg-red-700 rounded-2xl p-8 mb-10 text-white">
      <h1 class="text-3xl font-bold mb-2">💥 Jadrová energia</h1>
      <p class="text-red-200 text-lg">Väzbová energia, štiepenie, syntéza a jadrové reaktory</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Jadrová energia je energia uložená v atómovom jadre. Vychádza z Einsteinovho vzťahu
      <span v-html="km('E = mc^2')"/>, ktorý hovorí, že hmotnosť je ekvivalentná energii.
      Štiepením alebo splynutím jadier môžeme získať obrovské množstvo energie —
      milióny krát viac ako pri chemických reakciách.
    </p>

    <!-- Section 1: Väzbová energia -->
    <section aria-label="Väzbová energia" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
        1. Väzbová energia a hmotnostný úbytok
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Hmotnosť atómového jadra je vždy <strong>menšia</strong> ako súčet hmotností jednotlivých nukleónov.
        Tento rozdiel sa nazýva <strong>hmotnostný úbytok</strong> (defekt hmotnosti)
        <span v-html="km('\\Delta m')"/> a zodpovedá <strong>väzbovej energii</strong>,
        ktorá drží jadro pohromade.
      </p>

      <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-red-800 mb-5 text-lg">Základné vzťahy</h3>
        <div class="space-y-5">
          <div>
            <p class="text-gray-600 text-sm mb-2">Hmotnostný úbytok:</p>
            <div class="flex justify-center" v-html="km('\\Delta m = Z \\cdot m_p + N \\cdot m_n - m_{\\text{jadra}}')"/>
          </div>
          <div>
            <p class="text-gray-600 text-sm mb-2">Väzbová energia (Einsteinov vzťah):</p>
            <div class="flex justify-center" v-html="km('E_v = \\Delta m \\cdot c^2')"/>
          </div>
          <div>
            <p class="text-gray-600 text-sm mb-2">Väzbová energia na nukleón:</p>
            <div class="flex justify-center" v-html="km('\\varepsilon = \\dfrac{E_v}{A}')"/>
          </div>
        </div>
      </div>

      <p class="text-gray-600 text-sm mb-6">
        kde <span v-html="km('Z')"/> = počet protónov,
        <span v-html="km('N')"/> = počet neutrónov,
        <span v-html="km('A = Z + N')"/> = nukleónové číslo,
        <span v-html="km('c = 3{,}0 \\times 10^8 \\text{ m/s}')"/>
      </p>

      <!-- Example 1 -->
      <div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-yellow-800 mb-3">Príklad 1: Väzbová energia hélia</h3>
        <p class="text-gray-700 mb-3">
          Jadro hélia <span v-html="km('^{4}_{2}\\text{He}')"/> obsahuje 2 protóny a 2 neutróny.
        </p>
        <div class="space-y-2 text-gray-700">
          <p>Hmotnosť jadra: <span v-html="km('m_{\\text{He}} = 4{,}0026 \\text{ u}')"/></p>
          <p>Súčet hmotností nukleónov:</p>
          <div class="flex justify-center my-2" v-html="km('2 \\cdot 1{,}0073 + 2 \\cdot 1{,}0087 = 4{,}0320 \\text{ u}')"/>
          <p>Hmotnostný úbytok: <span v-html="km('\\Delta m = 4{,}0320 - 4{,}0026 = 0{,}0294 \\text{ u}')"/></p>
          <p>Väzbová energia:</p>
          <div class="flex justify-center my-2" v-html="km('E_v = 0{,}0294 \\times 931{,}5 \\approx 27{,}4 \\text{ MeV}')"/>
          <p>Väzbová energia na nukleón: <span v-html="km('\\varepsilon = \\dfrac{27{,}4}{4} \\approx 6{,}85 \\text{ MeV/nukleón}')"/></p>
        </div>
        <p class="text-xs text-gray-500 mt-3 italic">* Prepočet: 1 u = 931,5 MeV/c²</p>
      </div>

      <div class="bg-gray-100 rounded-xl p-4">
        <p class="text-gray-700 text-sm">
          <strong>Krivka väzbovej energie:</strong> Väzbová energia na nukleón dosahuje maximum okolo
          <span v-html="km('A \\approx 56')"/> (železo Fe). Jadrá <em>ľahšie</em> ako Fe
          uvoľňujú energiu pri <strong>syntéze</strong>, jadrá <em>ťažšie</em> ako Fe pri
          <strong>štiepení</strong>.
        </p>
      </div>
    </section>

    <!-- Section 2: Štiepenie -->
    <section aria-label="Štiepenie jadra uránu" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
        2. Štiepenie jadra — jadrová fisia
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Jadrové štiepenie (fisia)</strong> nastáva, keď ťažké jadro pohltí neutrón a rozštiepí sa
        na dve menšie jadrá. Súčasne sa uvoľnia 2 – 3 neutróny a obrovské množstvo energie.
      </p>

      <div class="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-red-800 mb-4">Štiepenie uránu-235</h3>
        <div class="flex justify-center overflow-x-auto" v-html="km('^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\;\\rightarrow\\; ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\;^{1}_{0}\\text{n} + \\approx 200\\text{ MeV}')"/>
        <p class="text-gray-600 text-sm text-center mt-3">
          Jedna štiepna reakcia uvoľní ~200 MeV<br>
          (porovnaj: spaľovanie uhlia ~4 eV na atóm — rozdiel miliónov krát!)
        </p>
      </div>

      <h3 class="text-xl font-semibold text-gray-800 mb-4">Reťazová reakcia</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Neutróny uvoľnené pri štiepení môžu vyvolať ďalšie štiepenia — vzniká <strong>reťazová reakcia</strong>.
        Podmienkou je dosiahnutie <strong>kritickej hmotnosti</strong> štiepneho materiálu.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-xl p-4">
          <div class="text-3xl mb-2">⚖️</div>
          <h4 class="font-semibold text-green-800 mb-1">Podkritická</h4>
          <p class="text-sm text-gray-600">Menej ako 1 neutrón vyvolá ďalšie štiepenie. Reakcia postupne zanikne.</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div class="text-3xl mb-2">⚡</div>
          <h4 class="font-semibold text-yellow-800 mb-1">Kritická</h4>
          <p class="text-sm text-gray-600">Práve 1 neutrón pokračuje. Kontrolovaná reakcia — základ jadrového reaktora.</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <div class="text-3xl mb-2">💥</div>
          <h4 class="font-semibold text-red-800 mb-1">Nadkritická</h4>
          <p class="text-sm text-gray-600">Viac ako 1 neutrón. Exponenciálny rast — atómová bomba.</p>
        </div>
      </div>

      <!-- Example 2 -->
      <div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-6">
        <h3 class="font-semibold text-yellow-800 mb-3">Príklad 2: Energia z 1 kg uránu-235</h3>
        <div class="space-y-3 text-gray-700">
          <p>Počet atómov v 1 kg <span v-html="km('^{235}\\text{U}')"/>:</p>
          <div class="flex justify-center my-2" v-html="km('N = \\dfrac{1000}{235} \\cdot 6{,}022 \\times 10^{23} \\approx 2{,}56 \\times 10^{24} \\text{ atómov}')"/>
          <p>Energia uvoľnená jedným štiepením:</p>
          <div class="flex justify-center my-2" v-html="km('E_1 = 200 \\text{ MeV} = 200 \\times 10^6 \\times 1{,}6 \\times 10^{-19} \\text{ J} = 3{,}2 \\times 10^{-11} \\text{ J}')"/>
          <p>Celková energia:</p>
          <div class="flex justify-center my-2" v-html="km('E = 2{,}56 \\times 10^{24} \\times 3{,}2 \\times 10^{-11} \\approx 8{,}2 \\times 10^{13} \\text{ J} \\approx 82 \\text{ TJ}')"/>
          <p class="text-sm text-gray-500 bg-white rounded-lg p-3 border border-yellow-200 mt-2">
            To zodpovedá energii ~2 700 ton uhlia alebo 20 000 ton TNT!
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Jadrový reaktor -->
    <section aria-label="Jadrový reaktor" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
        3. Jadrový reaktor
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Jadrový reaktor udržiava <strong>riadenú reťazovú reakciu</strong> štiepenia.
        Uvoľnené teplo sa využíva na výrobu elektrickej energie cez parnú turbínu a generátor.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 class="font-semibold text-gray-800 mb-4">Hlavné časti reaktora</h3>
          <div class="space-y-4">
            <div class="flex gap-3">
              <span class="text-xl shrink-0">⚛️</span>
              <div>
                <p class="font-medium text-gray-700">Palivo</p>
                <p class="text-sm text-gray-500">
                  Obohatený urán (3 – 5 % <span v-html="km('^{235}\\text{U}')"/>)
                  vo forme palivových tyčí z UO₂.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl shrink-0">💧</span>
              <div>
                <p class="font-medium text-gray-700">Moderátor</p>
                <p class="text-sm text-gray-500">
                  Spomaľuje rýchle neutróny na tepelné (voda, ťažká voda, grafit).
                  Pomalé neutróny sú účinnejšie pri štiepení.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl shrink-0">🔧</span>
              <div>
                <p class="font-medium text-gray-700">Riadiace tyče</p>
                <p class="text-sm text-gray-500">
                  Pohlcujú neutróny (bór, kadmium).
                  Zasunutím/vysunutím regulujú výkon reaktora.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl shrink-0">🌊</span>
              <div>
                <p class="font-medium text-gray-700">Chladivo</p>
                <p class="text-sm text-gray-500">
                  Odvádza teplo z aktívnej zóny (voda, CO₂, tekuté kovy).
                  Ohrieva paru pre turbíny.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="text-xl shrink-0">🛡️</span>
              <div>
                <p class="font-medium text-gray-700">Biologická ochrana</p>
                <p class="text-sm text-gray-500">
                  Hrubý betónový a oceľový štít absorbuje žiarenie a chráni obsluhu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-semibold text-blue-800 mb-5">Princíp výroby elektriny</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">1</div>
              <p class="text-sm text-gray-700">Štiepenie uránu → teplo</p>
            </div>
            <p class="text-gray-400 text-center text-lg">↓</p>
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">2</div>
              <p class="text-sm text-gray-700">Chladivo odvádza teplo</p>
            </div>
            <p class="text-gray-400 text-center text-lg">↓</p>
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">3</div>
              <p class="text-sm text-gray-700">Výmenník tepla → para</p>
            </div>
            <p class="text-gray-400 text-center text-lg">↓</p>
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">4</div>
              <p class="text-sm text-gray-700">Parná turbína → generátor</p>
            </div>
            <p class="text-gray-400 text-center text-lg">↓</p>
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">5</div>
              <p class="text-sm text-gray-700">Elektrická energia → rozvodná sieť</p>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-5">Účinnosť jadrovej elektrárne: ~33 – 40 %</p>
        </div>
      </div>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <p class="text-gray-700 text-sm">
          <strong>Slovensko a jadrová energia:</strong> Slovensko vyrába viac ako 50 % elektriny z jadra.
          Elektrárne Mochovce (reaktory VVER) a Bohunice patria medzi najvýznamnejšie v strednej Európe.
        </p>
      </div>
    </section>

    <!-- Section 4: Jadrová syntéza -->
    <section aria-label="Jadrová syntéza — fúzia" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
        4. Jadrová syntéza — fúzia
      </h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        <strong>Jadrová fúzia</strong> je opačný proces — ľahké jadrá sa spájajú a uvoľňujú energiu.
        Je to zdroj energie hviezd. Na kilogram paliva poskytne ešte viac energie ako fisia.
      </p>

      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-purple-800 mb-4">Fúzna reakcia D-T</h3>
        <div class="flex justify-center overflow-x-auto mb-4" v-html="km('^{2}_{1}\\text{D} + ^{3}_{1}\\text{T} \\;\\rightarrow\\; ^{4}_{2}\\text{He} + ^{1}_{0}\\text{n} + 17{,}6\\text{ MeV}')"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div class="bg-white rounded-lg p-3 border border-purple-100">
            <p class="font-medium text-gray-700 mb-1">Deutérium (D):</p>
            <p class="text-gray-500">Izotop vodíka, hojne zastúpený v morskej vode (1 z každých ~6 400 atómov)</p>
          </div>
          <div class="bg-white rounded-lg p-3 border border-purple-100">
            <p class="font-medium text-gray-700 mb-1">Trícium (T):</p>
            <p class="text-gray-500">Rádioaktívny izotop vodíka, vyrába sa v reaktore z lítia</p>
          </div>
        </div>
      </div>

      <!-- Example 3 -->
      <div class="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-yellow-800 mb-3">Príklad 3: Porovnanie fúzie a štiepenia</h3>
        <div class="space-y-4 text-gray-700">
          <div class="bg-white rounded-lg p-4 border border-yellow-200">
            <p class="font-medium mb-2">Štiepenie <span v-html="km('^{235}\\text{U}')"/> — energia na nukleón:</p>
            <div class="flex justify-center" v-html="km('\\dfrac{200\\text{ MeV}}{235\\text{ u}} \\approx 0{,}85\\text{ MeV/u}')"/>
          </div>
          <div class="bg-white rounded-lg p-4 border border-yellow-200">
            <p class="font-medium mb-2">Fúzia D + T — energia na nukleón:</p>
            <div class="flex justify-center" v-html="km('\\dfrac{17{,}6\\text{ MeV}}{5\\text{ u}} = 3{,}52\\text{ MeV/u}')"/>
          </div>
          <p class="text-sm text-gray-600 bg-amber-50 rounded-lg p-3 border border-amber-200">
            Fúzia je zhruba 4-krát energeticky účinnejšia na jednotku hmotnosti paliva ako štiepenie!
          </p>
        </div>
      </div>

      <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-red-800 mb-3">Podmienky pre fúziu</h3>
        <p class="text-gray-700 mb-3">
          Jadrá sa musia priblížiť na vzdialenosť pôsobenia jadrovej sily
          (~<span v-html="km('10^{-15}')"/> m), čo vyžaduje prekonanie elektrostatického odpudzovania.
          Potrebná teplota:
        </p>
        <div class="flex justify-center mb-3" v-html="km('T \\approx 10^{8}\\text{ K}\\quad (100\\text{ miliónov kelvinov}!)')"/>
        <p class="text-sm text-gray-600">
          Pri takýchto teplotách existuje hmota vo forme <strong>plazmy</strong>.
          Udržiavanie plazmy sa rieši magnetickým uväznením (tokamak ITER) alebo inerciálnym uväznením (laser).
        </p>
      </div>

      <div class="bg-gray-100 rounded-xl p-4">
        <p class="text-gray-700 text-sm">
          <strong>ITER a budúcnosť fúzie:</strong> Medzinárodný projekt ITER vo Francúzsku buduje
          najväčší tokamak sveta. Cieľom je dosiahnuť Q &gt; 1 (viac energie von ako dovnútra).
          Komerčné fúzne elektrárne sa predpokladajú po roku 2050.
        </p>
      </div>
    </section>

    <!-- Section 5: Výhody a riziká -->
    <section aria-label="Výhody a riziká jadrovej energetiky" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
        5. Výhody a riziká jadrovej energetiky
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
          <h3 class="font-semibold text-green-800 mb-4">Výhody</h3>
          <ul class="space-y-3">
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-green-600 font-bold shrink-0">✓</span>
              <span>Nízke emisie CO₂ počas prevádzky (prakticky bez skleníkových plynov)</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-green-600 font-bold shrink-0">✓</span>
              <span>Vysoká hustota energie — malé množstvo paliva, obrovská energia</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-green-600 font-bold shrink-0">✓</span>
              <span>Nepretržitá výroba — nezávisí od počasia (na rozdiel od solárnej/veternej)</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-green-600 font-bold shrink-0">✓</span>
              <span>Dlhodobá zásobovanosť palivom (urán, thorium)</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-green-600 font-bold shrink-0">✓</span>
              <span>Nízke prevádzkové náklady po výstavbe elektrárne</span>
            </li>
          </ul>
        </div>

        <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h3 class="font-semibold text-red-800 mb-4">Riziká a nevýhody</h3>
          <ul class="space-y-3">
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-red-600 font-bold shrink-0">✗</span>
              <span>Rádioaktívny odpad — tisíce rokov zostáva nebezpečný</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-red-600 font-bold shrink-0">✗</span>
              <span>Riziko havárie (Černobyľ 1986, Fukušima 2011)</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-red-600 font-bold shrink-0">✗</span>
              <span>Vysoké investičné náklady a dlhá doba výstavby</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-red-600 font-bold shrink-0">✗</span>
              <span>Riziko šírenia jadrových zbraní (proliferácia)</span>
            </li>
            <li class="flex gap-2 text-sm text-gray-700">
              <span class="text-red-600 font-bold shrink-0">✗</span>
              <span>Termálne znečistenie vodných tokov (chladiaca voda)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Kľúčové vzorce</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span>Väzbová energia: <span v-html="km('E_v = \\Delta m \\cdot c^2')"/></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span>Hmotnostný úbytok: <span v-html="km('\\Delta m = Z m_p + N m_n - m_{\\text{jadra}}')"/></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span>Ekvivalencia: <span v-html="km('E = mc^2')"/>, 1 u = 931,5 MeV/c²</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span>Fisia U-235: ~200 MeV na štiepenie</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span>Fúzia D+T: 17,6 MeV, <span v-html="km('T \\approx 10^8')"/> K</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Pojmy na zapamätanie</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span><strong>Moderátor</strong> — spomaľuje rýchle neutróny na tepelné</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span><strong>Riadiace tyče</strong> — pohlcujú neutróny, regulujú výkon</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span><strong>Kritická hmotnosť</strong> — min. množstvo pre reťazovú reakciu</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span><strong>Plazma</strong> — ionizovaný plyn pri fúzii (T > 10⁸ K)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-500 shrink-0 mt-0.5">▸</span>
              <span><strong>Tokamak</strong> — zariadenie na magnetické uväznenie plazmy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz — jadrová energia" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Otestuj sa</h2>

      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="mb-6">
          <div class="flex justify-between text-sm text-gray-500 mb-2">
            <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
            <span>Skóre: {{ quizScore }} / {{ quiz.length }}</span>
          </div>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              class="h-2 bg-red-500 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
            />
          </div>
        </div>

        <div v-if="!quizFinished">
          <!-- Question -->
          <p
            data-testid="question"
            class="text-gray-800 font-medium mb-5 text-lg leading-relaxed"
            v-html="currentQuestion.question"
          />

          <!-- Options -->
          <div class="space-y-3 mb-6">
            <button
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              :data-testid="`option-${i}`"
              type="button"
              :disabled="selectedAnswer !== null"
              :class="[
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm',
                selectedAnswer === null
                  ? 'border-gray-200 hover:border-red-300 hover:bg-red-50 cursor-pointer'
                  : i === currentQuestion.correctIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : i === selectedAnswer
                      ? 'border-red-400 bg-red-50 text-red-800'
                      : 'border-gray-200 bg-gray-50 text-gray-400 cursor-default'
              ]"
              @click="selectAnswer(i)"
              v-html="option"
            />
          </div>

          <!-- Feedback -->
          <Transition name="fade">
            <div
              v-if="selectedAnswer !== null"
              data-testid="feedback"
              :class="[
                'rounded-xl p-4 mb-5 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              ]"
            >
              <p class="font-semibold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? 'Správne!' : 'Nesprávne.' }}
              </p>
              <p v-html="currentQuestion.explanation"/>
            </div>
          </Transition>

          <!-- Next button -->
          <button
            v-if="selectedAnswer !== null"
            data-testid="next-btn"
            type="button"
            class="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka' : 'Zobraziť výsledok' }}
          </button>
        </div>

        <!-- Result -->
        <div v-else data-testid="result" class="text-center py-6">
          <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
          <p class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</p>
          <p data-testid="score" class="text-gray-600 mb-6">
            Dosiahol si {{ quizScore }} z {{ quiz.length }} bodov
          </p>
          <button
            data-testid="reset-btn"
            type="button"
            class="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
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

useHead({
  title: 'Jadrová energia | Atómová fyzika | NaučSa.to',
  meta: [
    {
      name: 'description',
      content:
        'Jadrová energia pre gymnazistov: väzbová energia, štiepenie uránu-235, reťazová reakcia, jadrový reaktor, jadrová fúzia D+T. Vzorce, príklady, kvíz.'
    }
  ]
})

const quiz = [
  {
    question: 'Čo vyjadruje Einsteinov vzorec ' + km('E = mc^2') + '?',
    options: [
      'Kinetickú energiu pohybujúceho sa telesa',
      'Ekvivalenciu hmotnosti a energie',
      'Energiu fotónu elektromagnetického žiarenia',
      'Tlakovú energiu plynu'
    ],
    correctIndex: 1,
    explanation:
      km('E = mc^2') +
      ' hovorí, že hmotnosť a energia sú ekvivalentné — každá hmotnosť zodpovedá určitej energii. Je to základ pochopenia jadrovej energie.'
  },
  {
    question:
      'Aké množstvo energie sa uvoľní pri štiepení jedného jadra ' +
      km('^{235}\\text{U}') +
      '?',
    options: ['Asi 4 eV', 'Asi 1 keV', 'Asi 200 MeV', 'Asi 17,6 GeV'],
    correctIndex: 2,
    explanation:
      'Pri štiepení U-235 sa uvoľní ~200 MeV, čo je milióny krát viac ako pri chemických reakciách (~4 eV pri spaľovaní uhlia).'
  },
  {
    question: 'Aká je funkcia moderátora v jadrovom reaktore?',
    options: [
      'Pohlcuje neutróny a reguluje výkon reaktora',
      'Odvádza teplo z aktívnej zóny',
      'Spomaľuje rýchle neutróny na tepelné',
      'Chráni obsluhu pred žiarením'
    ],
    correctIndex: 2,
    explanation:
      'Moderátor (voda, ťažká voda, grafit) spomaľuje rýchle neutróny na tepelné. Tepelné neutróny sú oveľa účinnejšie pri vyvolávaní štiepenia ' +
      km('^{235}\\text{U}') +
      '.'
  },
  {
    question: 'Koľko energie uvoľní fúzna reakcia D + T?',
    options: ['4,3 MeV', '17,6 MeV', '200 MeV', '931,5 MeV'],
    correctIndex: 1,
    explanation:
      'Reakcia ' +
      km('^{2}\\text{D} + ^{3}\\text{T} \\rightarrow ^{4}\\text{He} + \\text{n}') +
      ' uvoľní 17,6 MeV. Na kilogram paliva je to ~4-krát viac ako pri štiepení uránu.'
  },
  {
    question:
      'Akú minimálnu teplotu vyžaduje jadrová fúzia, aby prebehla?',
    options: [
      'Asi 1 000 K (horenie zemného plynu)',
      'Asi 1 milión K (povrch Slnka)',
      'Asi 100 miliónov K',
      'Asi 1 miliarda K'
    ],
    correctIndex: 2,
    explanation:
      'Fúzna reakcia vyžaduje ' +
      km('T \\approx 10^8\\text{ K}') +
      ' (100 miliónov kelvinov), aby jadrá prekonali elektrostatické odpudzovacie sily a priblížili sa na dosah jadrovej sily.'
  },
  {
    question:
      'Hmotnostný úbytok jadra ' +
      km('^{4}\\text{He}') +
      ' je 0,0294 u. Vypočítaj väzbovú energiu. (1 u = 931,5 MeV)',
    options: ['Asi 0,03 MeV', 'Asi 2,74 MeV', 'Asi 27,4 MeV', 'Asi 274 MeV'],
    correctIndex: 2,
    explanation:
      km('E_v = \\Delta m \\cdot 931{,}5 = 0{,}0294 \\times 931{,}5 \\approx 27{,}4\\text{ MeV}') +
      '. Na nukleón je to 27,4 / 4 ≈ 6,85 MeV/nukleón — typická hodnota pre stabilné jadrá.'
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
