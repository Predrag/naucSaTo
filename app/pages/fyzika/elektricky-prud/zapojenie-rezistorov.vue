<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/elektricky-prud" class="hover:text-emerald-600 transition-colors">Elektrický prúd</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Zapojenie rezistorov</span>
    </nav>

    <!-- Header -->
    <div class="bg-orange-600 text-white rounded-2xl p-8 mb-10">
      <h1 class="text-3xl font-bold mb-2">🔗 Zapojenie rezistorov</h1>
      <p class="text-orange-100 text-lg">Sériové, paralelné a kombinované zapojenie — Kirchhoffove zákony — delič napätia</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg leading-relaxed mb-10">
      Rezistory v elektrických obvodoch možno zapojiť rôznymi spôsobmi. Spôsob zapojenia určuje, aký celkový odpor
      obvod kladie elektrickému prúdu, ako sa rozdeľuje napätie a ako tečú prúdy. Poznáme tri základné typy:
      <strong>sériové</strong>, <strong>paralelné</strong> a <strong>kombinované</strong> zapojenie, ktorých analýzu
      nám uľahčujú Kirchhoffove zákony.
    </p>

    <!-- ==================== SEKCIA 1: Sériové zapojenie ==================== -->
    <section aria-label="Sériové zapojenie rezistorov" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
        1. Sériové zapojenie
      </h2>

      <p class="text-gray-700 leading-relaxed mb-5">
        Pri <strong>sériovom zapojení</strong> sú rezistory radené jeden za druhým do jedinej vetvy obvodu.
        Rovnaký prúd prechádza cez každý rezistor. Ak sa niektorý rezistor preruší (napr. vyhorí), celý obvod
        prestane fungovať — to je nevýhoda sériového zapojenia.
      </p>

      <!-- Vlastnosti box -->
      <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-orange-800 mb-3">Vlastnosti sériového zapojenia</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Prúd je rovnaký vo všetkých častiach: <span v-html="km('I = I_1 = I_2 = \\ldots = I_n')"/></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Napätia sa sčítajú: <span v-html="km('U = U_1 + U_2 + \\ldots + U_n')"/></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Celkový odpor je väčší ako každý jednotlivý odpor</span>
          </li>
        </ul>
      </div>

      <!-- Vzorec -->
      <div class="bg-gray-900 text-white rounded-2xl p-6 mb-6 text-center">
        <p class="text-gray-400 text-sm mb-3">Celkový odpor — sériové zapojenie</p>
        <div v-html="km('R_s = R_1 + R_2 + \\ldots + R_n')"/>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 1: Tri rezistory v sérii</h3>
        <p class="text-gray-700 mb-3">
          Tri rezistory <span v-html="km('R_1 = 10\\,\\Omega')"/>,
          <span v-html="km('R_2 = 20\\,\\Omega')"/> a
          <span v-html="km('R_3 = 30\\,\\Omega')"/> sú zapojené sériovo k zdroju napätia
          <span v-html="km('U = 12\\,\\text{V}')"/>.
          Aký prúd prechádza obvodom a aké napätia sú na jednotlivých rezistoroch?
        </p>
        <div class="space-y-2 text-sm">
          <div><span class="text-gray-500">Celkový odpor:</span>
            <span v-html="km('\\quad R_s = 10 + 20 + 30 = 60\\,\\Omega')"/>
          </div>
          <div><span class="text-gray-500">Prúd obvodom:</span>
            <span v-html="km('\\quad I = \\dfrac{U}{R_s} = \\dfrac{12}{60} = 0{,}2\\,\\text{A}')"/>
          </div>
          <div><span class="text-gray-500">Napätia:</span>
            <span v-html="km('\\quad U_1 = I \\cdot R_1 = 0{,}2 \\cdot 10 = 2\\,\\text{V}')"/>
          </div>
          <div>
            <span v-html="km('\\quad U_2 = 0{,}2 \\cdot 20 = 4\\,\\text{V}')"/>,
            <span v-html="km('\\quad U_3 = 0{,}2 \\cdot 30 = 6\\,\\text{V}')"/>
          </div>
          <div class="text-green-700 font-medium">
            Overenie: <span v-html="km('U_1 + U_2 + U_3 = 2 + 4 + 6 = 12\\,\\text{V} \\checkmark')"/>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 2: Paralelné zapojenie ==================== -->
    <section aria-label="Paralelné zapojenie rezistorov" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
        2. Paralelné zapojenie
      </h2>

      <p class="text-gray-700 leading-relaxed mb-5">
        Pri <strong>paralelnom zapojení</strong> sú oba konce každého rezistora pripojené k rovnakým dvom uzlom.
        Na každom rezistore je rovnaké napätie (napätie zdroja). Ak sa jeden rezistor preruší, ostatné vetvy
        fungujú naďalej — to je výhoda paralelného zapojenia (napr. domová elektroinštalácia).
      </p>

      <!-- Vlastnosti box -->
      <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-orange-800 mb-3">Vlastnosti paralelného zapojenia</h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Napätie je rovnaké na všetkých rezistoroch: <span v-html="km('U = U_1 = U_2 = \\ldots = U_n')"/></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Prúdy sa sčítajú: <span v-html="km('I = I_1 + I_2 + \\ldots + I_n')"/></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 font-bold mt-0.5">•</span>
            <span>Celkový odpor je menší ako každý jednotlivý odpor</span>
          </li>
        </ul>
      </div>

      <!-- Vzorce grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-900 text-white rounded-2xl p-5 text-center">
          <p class="text-gray-400 text-sm mb-3">Všeobecný vzorec</p>
          <div v-html="km('\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\ldots + \\dfrac{1}{R_n}')"/>
        </div>
        <div class="bg-gray-900 text-white rounded-2xl p-5 text-center">
          <p class="text-gray-400 text-sm mb-3">Pre dva rezistory</p>
          <div v-html="km('R_p = \\dfrac{R_1 \\cdot R_2}{R_1 + R_2}')"/>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 2: Dva rezistory paralelne</h3>
        <p class="text-gray-700 mb-3">
          Rezistory <span v-html="km('R_1 = 6\\,\\Omega')"/> a
          <span v-html="km('R_2 = 12\\,\\Omega')"/> sú zapojené paralelne k batérii
          <span v-html="km('U = 6\\,\\text{V}')"/>.
          Nájdite celkový odpor, celkový prúd a prúdy jednotlivými rezistormi.
        </p>
        <div class="space-y-2 text-sm">
          <div><span class="text-gray-500">Celkový odpor:</span>
            <span v-html="km('\\quad R_p = \\dfrac{6 \\cdot 12}{6 + 12} = \\dfrac{72}{18} = 4\\,\\Omega')"/>
          </div>
          <div><span class="text-gray-500">Celkový prúd:</span>
            <span v-html="km('\\quad I = \\dfrac{U}{R_p} = \\dfrac{6}{4} = 1{,}5\\,\\text{A}')"/>
          </div>
          <div><span class="text-gray-500">Prúd cez <span v-html="km('R_1')"/>:</span>
            <span v-html="km('\\quad I_1 = \\dfrac{U}{R_1} = \\dfrac{6}{6} = 1\\,\\text{A}')"/>
          </div>
          <div><span class="text-gray-500">Prúd cez <span v-html="km('R_2')"/>:</span>
            <span v-html="km('\\quad I_2 = \\dfrac{U}{R_2} = \\dfrac{6}{12} = 0{,}5\\,\\text{A}')"/>
          </div>
          <div class="text-green-700 font-medium">
            Overenie: <span v-html="km('I_1 + I_2 = 1 + 0{,}5 = 1{,}5\\,\\text{A} \\checkmark')"/>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 3: Kirchhoffove zákony ==================== -->
    <section aria-label="Kirchhoffove zákony" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
        3. Kirchhoffove zákony
      </h2>

      <p class="text-gray-700 leading-relaxed mb-5">
        Kirchhoffove zákony sú fundamentálne pravidlá pre analýzu ľubovoľného elektrického obvodu.
        Formuloval ich nemecký fyzik Gustav Robert Kirchhoff v roku 1845. Sú základom pre riešenie
        zložitých obvodov, kde nestačí jednoduché sériové ani paralelné zjednodušenie.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- I. zákon -->
        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5">
          <h3 class="font-bold text-purple-800 mb-2">I. Kirchhoffov zákon (uzlový)</h3>
          <p class="text-gray-700 text-sm mb-4">
            Algebraický súčet prúdov v uzle je nula. Súčet prúdov <em>vtekajúcich</em> do uzla sa rovná
            súčtu prúdov <em>vytekajúcich</em> z uzla.
          </p>
          <div class="bg-white rounded-xl p-3 text-center mb-3">
            <div v-html="km('\\sum_{k} I_k = 0')"/>
          </div>
          <p class="text-xs text-purple-700">
            Zákon zachovania náboja — náboj sa v uzle nehromadí ani nestráca.
          </p>
        </div>

        <!-- II. zákon -->
        <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5">
          <h3 class="font-bold text-teal-800 mb-2">II. Kirchhoffov zákon (slučkový)</h3>
          <p class="text-gray-700 text-sm mb-4">
            Algebraický súčet napätí (úbytkov a zdrojov) v ľubovoľnej uzavretej slučke obvodu je nula.
          </p>
          <div class="bg-white rounded-xl p-3 text-center mb-3">
            <div v-html="km('\\sum_{k} U_k = 0')"/>
          </div>
          <p class="text-xs text-teal-700">
            Zákon zachovania energie — energia sa v slučke zachováva.
          </p>
        </div>
      </div>

      <!-- Delič napätia -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-yellow-800 mb-3">Delič napätia</h3>
        <p class="text-gray-700 text-sm mb-4">
          Sériové zapojenie dvoch rezistorov tvorí <strong>delič napätia</strong>. Napätie zdroja sa delí
          medzi rezistory v pomere ich odporov. Vzorce deliča priamo vyplývajú z Ohmovho zákona a
          II. Kirchhoffovho zákona.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="text-xs text-gray-500 mb-2">Napätie na <span v-html="km('R_1')"/></div>
            <div v-html="km('U_1 = U \\cdot \\dfrac{R_1}{R_1 + R_2}')"/>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="text-xs text-gray-500 mb-2">Napätie na <span v-html="km('R_2')"/></div>
            <div v-html="km('U_2 = U \\cdot \\dfrac{R_2}{R_1 + R_2}')"/>
          </div>
        </div>
      </div>

      <!-- Príklad 3: Delič napätia -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 3: Delič napätia</h3>
        <p class="text-gray-700 mb-3">
          Rezistory <span v-html="km('R_1 = 40\\,\\Omega')"/> a
          <span v-html="km('R_2 = 60\\,\\Omega')"/> tvoria sériový delič pri napätí
          <span v-html="km('U = 100\\,\\text{V}')"/>.
          Aké napätie je na každom rezistore?
        </p>
        <div class="space-y-2 text-sm">
          <div>
            <span v-html="km('U_1 = 100 \\cdot \\dfrac{40}{40 + 60} = 100 \\cdot 0{,}4 = 40\\,\\text{V}')"/>
          </div>
          <div>
            <span v-html="km('U_2 = 100 \\cdot \\dfrac{60}{40 + 60} = 100 \\cdot 0{,}6 = 60\\,\\text{V}')"/>
          </div>
          <div class="text-green-700 font-medium">
            Overenie: <span v-html="km('U_1 + U_2 = 40 + 60 = 100\\,\\text{V} \\checkmark')"/>
          </div>
          <p class="text-gray-500 text-xs pt-1">
            Napätie sa delí v pomere odporov: <span v-html="km('40\\,\\Omega : 60\\,\\Omega = 2 : 3')"/>, teda aj napätia sú v pomere 2 : 3.
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== SEKCIA 4: Kombinované zapojenie ==================== -->
    <section aria-label="Kombinované zapojenie rezistorov" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
        4. Kombinované zapojenie
      </h2>

      <p class="text-gray-700 leading-relaxed mb-5">
        V praxi sa najčastejšie stretávame s <strong>kombinovaným zapojením</strong>, kde sú niektoré rezistory
        v sérii a iné paralelne. Riešenie prebieha postupným zjednodušovaním obvodu od vnútra smerom von.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-5">
        <h3 class="font-semibold text-orange-800 mb-3">Postup riešenia kombinovaného zapojenia</h3>
        <ol class="space-y-2 text-gray-700 list-none">
          <li class="flex gap-3">
            <span class="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <span>Identifikuj skupiny rezistorov v sérii a paralelne</span>
          </li>
          <li class="flex gap-3">
            <span class="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <span>Vypočítaj náhradný odpor najvnútornejšej skupiny</span>
          </li>
          <li class="flex gap-3">
            <span class="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <span>Nahraď skupinu jedným náhradným rezistorom a opakuj</span>
          </li>
          <li class="flex gap-3">
            <span class="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            <span>Z celkového odporu a napätia nájdi celkový prúd, potom spätne prúdy vo vetvách</span>
          </li>
        </ol>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-5">
        <h3 class="font-semibold text-green-800 mb-3">Príklad 4: Kombinované zapojenie</h3>
        <p class="text-gray-700 mb-3">
          Rezistor <span v-html="km('R_1 = 5\\,\\Omega')"/> je zapojený sériovo s paralelnou
          kombináciou <span v-html="km('R_2 = 6\\,\\Omega')"/> a
          <span v-html="km('R_3 = 12\\,\\Omega')"/>.
          Zdroj má napätie <span v-html="km('U = 9\\,\\text{V}')"/>.
          Nájdite celkový prúd a napätie na paralelnej kombinácii.
        </p>
        <div class="space-y-2 text-sm">
          <div>
            <span class="text-gray-500">Paralelný odpor <span v-html="km('R_{23}')"/>:</span>
            <span v-html="km('\\quad R_{23} = \\dfrac{6 \\cdot 12}{6 + 12} = \\dfrac{72}{18} = 4\\,\\Omega')"/>
          </div>
          <div>
            <span class="text-gray-500">Celkový odpor:</span>
            <span v-html="km('\\quad R = R_1 + R_{23} = 5 + 4 = 9\\,\\Omega')"/>
          </div>
          <div>
            <span class="text-gray-500">Celkový prúd:</span>
            <span v-html="km('\\quad I = \\dfrac{U}{R} = \\dfrac{9}{9} = 1\\,\\text{A}')"/>
          </div>
          <div>
            <span class="text-gray-500">Napätie na paralelnej kombinácii:</span>
            <span v-html="km('\\quad U_{23} = I \\cdot R_{23} = 1 \\cdot 4 = 4\\,\\text{V}')"/>
          </div>
          <div>
            <span class="text-gray-500">Napätie na <span v-html="km('R_1')"/>:</span>
            <span v-html="km('\\quad U_1 = I \\cdot R_1 = 1 \\cdot 5 = 5\\,\\text{V}')"/>
          </div>
          <div class="text-green-700 font-medium">
            Overenie: <span v-html="km('U_1 + U_{23} = 5 + 4 = 9\\,\\text{V} \\checkmark')"/>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== ZHRNUTIE ==================== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>

      <div class="overflow-x-auto mb-5">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th scope="col" class="p-3 text-left font-semibold text-gray-700 rounded-tl-lg">Vlastnosť</th>
              <th scope="col" class="p-3 text-center font-semibold text-gray-700">Sériové</th>
              <th scope="col" class="p-3 text-center font-semibold text-gray-700 rounded-tr-lg">Paralelné</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-200 bg-white">
              <td class="p-3 text-gray-700 font-medium">Rovnaká veličina</td>
              <td class="p-3 text-center">prúd <span v-html="km('I')"/></td>
              <td class="p-3 text-center">napätie <span v-html="km('U')"/></td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="p-3 text-gray-700 font-medium">Sčítavajú sa</td>
              <td class="p-3 text-center">napätia <span v-html="km('U_1 + U_2 + \\ldots')"/></td>
              <td class="p-3 text-center">prúdy <span v-html="km('I_1 + I_2 + \\ldots')"/></td>
            </tr>
            <tr class="border-t border-gray-200 bg-white">
              <td class="p-3 text-gray-700 font-medium">Celkový odpor</td>
              <td class="p-3 text-center"><span v-html="km('R_s = \\sum R_i')"/></td>
              <td class="p-3 text-center"><span v-html="km('\\dfrac{1}{R_p} = \\sum \\dfrac{1}{R_i}')"/></td>
            </tr>
            <tr class="border-t border-gray-200">
              <td class="p-3 text-gray-700 font-medium">Hodnota odporu</td>
              <td class="p-3 text-center text-gray-600">väčší ako najväčší</td>
              <td class="p-3 text-center text-gray-600">menší ako najmenší</td>
            </tr>
            <tr class="border-t border-gray-200 bg-white">
              <td class="p-3 text-gray-700 font-medium">Výpadok jedného</td>
              <td class="p-3 text-center text-red-600">preruší celý obvod</td>
              <td class="p-3 text-center text-green-600">ostatné fungujú</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-white border border-gray-200 rounded-xl p-3">
          <p class="text-sm font-semibold text-gray-700 mb-1">I. Kirchhoffov zákon (uzlový)</p>
          <p class="text-gray-600 text-sm">
            <span v-html="km('\\sum I_k = 0')"/> — súčet prúdov v uzle je nula
            (vtekajúce = vytekajúce)
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-3">
          <p class="text-sm font-semibold text-gray-700 mb-1">II. Kirchhoffov zákon (slučkový)</p>
          <p class="text-gray-600 text-sm">
            <span v-html="km('\\sum U_k = 0')"/> — súčet napätí v uzavretej slučke je nula
          </p>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-3 md:col-span-2">
          <p class="text-sm font-semibold text-gray-700 mb-1">Delič napätia</p>
          <p class="text-gray-600 text-sm">
            Pre sériový delič: <span v-html="km('U_2 = U \\cdot \\dfrac{R_2}{R_1 + R_2}')"/>
            — napätia sú v rovnakom pomere ako odpory
          </p>
        </div>
      </div>
    </div>

    <!-- ==================== KVÍZ ==================== -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Kvíz: Zapojenie rezistorov</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div class="flex justify-between items-center mb-3">
          <span data-testid="quiz-progress" class="text-sm text-gray-500">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }} &nbsp;|&nbsp; Skóre: {{ quizScore }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-orange-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: (currentQ / quiz.length * 100) + '%' }"
          />
        </div>

        <!-- Question -->
        <p
          data-testid="question"
          class="text-gray-800 font-medium text-lg mb-5 leading-relaxed"
          v-html="currentQuestion.question"
        />

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`option-${i}`"
            type="button"
            :class="[
              'w-full text-left p-4 rounded-xl border-2 transition-all text-sm',
              selectedAnswer === null
                ? 'border-gray-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-green-500 bg-green-50'
                  : selectedAnswer === i
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 opacity-50 cursor-default'
            ]"
            @click="selectAnswer(i)"
          >
            <span class="font-bold text-gray-400 mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <span v-html="option"/>
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            :class="[
              'rounded-xl p-4 mb-4 text-sm leading-relaxed',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <span class="font-semibold">
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
            </span>
            {{ currentQuestion.explanation }}
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="next-btn"
          type="button"
          class="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-500 mb-6">
          Dosiahol si {{ quizScore }} z {{ quiz.length }} bodov
        </p>
        <button
          data-testid="reset-btn"
          type="button"
          class="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
          @click="resetQuiz"
        >
          Skúsiť znova
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ---- Kvíz ----------------------------------------------------------------

const quiz = [
  {
    question: 'Tri rezistory 10 Ω, 20 Ω a 30 Ω sú zapojené sériovo. Aký je ich celkový odpor?',
    options: ['20 Ω', '5,45 Ω', '60 Ω', '30 Ω'],
    correctIndex: 2,
    explanation: 'Pri sériovom zapojení sa odpory sčítajú: Rs = 10 + 20 + 30 = 60 Ω.'
  },
  {
    question: 'Dva rezistory 6 Ω a 12 Ω sú zapojené paralelne. Aký je ich celkový odpor?',
    options: ['18 Ω', '9 Ω', '2 Ω', '4 Ω'],
    correctIndex: 3,
    explanation: 'Pre dva paralelné rezistory: Rp = (6 · 12) / (6 + 12) = 72 / 18 = 4 Ω.'
  },
  {
    question: 'Čo je rovnaké vo všetkých častiach sériového zapojenia?',
    options: ['Napätie', 'Výkon', 'Prúd', 'Odpor'],
    correctIndex: 2,
    explanation: 'Pri sériovom zapojení prechádza rovnaký prúd cez každý rezistor. Napätia sa naopak sčítavajú.'
  },
  {
    question: 'Čo vyjadruje I. Kirchhoffov zákon?',
    options: [
      'Súčet napätí v uzavretej slučke je nula',
      'Súčet prúdov v uzle je nula',
      'Celkový odpor je súčet odporov',
      'Výkon sa rovná súčinu napätia a prúdu'
    ],
    correctIndex: 1,
    explanation: 'I. Kirchhoffov zákon (uzlový): algebraický súčet prúdov v uzle je nula, čo odráža zachovanie elektrického náboja.'
  },
  {
    question: 'Rezistory R₁ = 100 Ω a R₂ = 300 Ω tvoria sériový delič napätia pri U = 12 V. Aké napätie je na R₂?',
    options: ['3 V', '4 V', '9 V', '6 V'],
    correctIndex: 2,
    explanation: 'U₂ = U · R₂/(R₁ + R₂) = 12 · 300/400 = 12 · 0,75 = 9 V.'
  },
  {
    question: 'Rezistor R₁ = 8 Ω je sériovo s paralelnou kombináciou R₂ = R₃ = 4 Ω. Aký je celkový odpor?',
    options: ['16 Ω', '10 Ω', '6 Ω', '4 Ω'],
    correctIndex: 1,
    explanation: 'Paralelný odpor: R₂₃ = (4 · 4)/(4 + 4) = 2 Ω. Celkový: R = 8 + 2 = 10 Ω.'
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

// ---- SEO -----------------------------------------------------------------

useSeoMeta({
  title: 'Zapojenie rezistorov | Elektrický prúd | NaucSaTo',
  description: 'Sériové a paralelné zapojenie rezistorov, Kirchhoffove zákony, delič napätia — interaktívna lekcia s príkladmi a kvízom pre gymnazistov.'
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
