<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/chemicke-reakcie" class="hover:text-orange-600 transition-colors">Chemické reakcie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Kyseliny, zásady a pH</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🌡️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Kyseliny, zásady a pH</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Kyseliny a zásady stretáme každý deň – od citrónovej šťavy a octu po sódu a čistiace prostriedky.
      Pochopenie Brönstedovej teórie a stupnice pH je základom chémie, biológie aj medicíny.
    </p>

    <!-- pH Scale SVG -->
    <div class="mb-12">
      <h2 class="text-xl font-bold text-gray-700 mb-4 text-center">Stupnica pH (0 – 14) s príkladmi látok</h2>
      <svg
        viewBox="0 0 720 200"
        class="w-full max-w-3xl mx-auto block"
        aria-label="Farebná stupnica pH 0 až 14 s príkladmi bežných látok a farbami indikátorov lakmusu a fenolftaleínu"
        role="img"
      >
        <!-- Background -->
        <rect width="720" height="200" fill="#f9fafb" rx="12" />

        <!-- Gradient bar pH 0-14 -->
        <defs>
          <linearGradient id="phGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"    stop-color="#dc2626" />
            <stop offset="14%"   stop-color="#ea580c" />
            <stop offset="28%"   stop-color="#d97706" />
            <stop offset="42%"   stop-color="#ca8a04" />
            <stop offset="50%"   stop-color="#16a34a" />
            <stop offset="64%"   stop-color="#0891b2" />
            <stop offset="78%"   stop-color="#2563eb" />
            <stop offset="100%"  stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="30" y="70" width="660" height="36" rx="8" fill="url(#phGradient)" />

        <!-- pH number labels 0-14 -->
        <g font-size="11" text-anchor="middle" fill="#374151">
          <text x="30"  y="120">0</text>
          <text x="77"  y="120">1</text>
          <text x="124" y="120">2</text>
          <text x="171" y="120">3</text>
          <text x="218" y="120">4</text>
          <text x="265" y="120">5</text>
          <text x="312" y="120">6</text>
          <text x="360" y="120">7</text>
          <text x="407" y="120">8</text>
          <text x="454" y="120">9</text>
          <text x="501" y="120">10</text>
          <text x="548" y="120">11</text>
          <text x="595" y="120">12</text>
          <text x="642" y="120">13</text>
          <text x="690" y="120">14</text>
        </g>

        <!-- Tick marks -->
        <g stroke="#374151" stroke-width="1">
          <line x1="30"  y1="106" x2="30"  y2="114" />
          <line x1="77"  y1="106" x2="77"  y2="114" />
          <line x1="124" y1="106" x2="124" y2="114" />
          <line x1="171" y1="106" x2="171" y2="114" />
          <line x1="218" y1="106" x2="218" y2="114" />
          <line x1="265" y1="106" x2="265" y2="114" />
          <line x1="312" y1="106" x2="312" y2="114" />
          <line x1="360" y1="106" x2="360" y2="114" />
          <line x1="407" y1="106" x2="407" y2="114" />
          <line x1="454" y1="106" x2="454" y2="114" />
          <line x1="501" y1="106" x2="501" y2="114" />
          <line x1="548" y1="106" x2="548" y2="114" />
          <line x1="595" y1="106" x2="595" y2="114" />
          <line x1="642" y1="106" x2="642" y2="114" />
          <line x1="690" y1="106" x2="690" y2="114" />
        </g>

        <!-- Substance labels above bar -->
        <!-- HCl ~ pH 0 -->
        <line x1="51" y1="70" x2="51" y2="55" stroke="#dc2626" stroke-width="1.5" />
        <text x="51" y="50" text-anchor="middle" font-size="9.5" fill="#dc2626" font-weight="bold">HCl konc.</text>
        <text x="51" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 0</text>

        <!-- Žalúdočná šťava ~ pH 1.5 -->
        <line x1="101" y1="70" x2="101" y2="55" stroke="#ea580c" stroke-width="1.5" />
        <text x="101" y="50" text-anchor="middle" font-size="9.5" fill="#ea580c" font-weight="bold">žal. šťava</text>
        <text x="101" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH 1–2</text>

        <!-- Citrón ~ pH 2.5 -->
        <line x1="154" y1="70" x2="154" y2="55" stroke="#d97706" stroke-width="1.5" />
        <text x="154" y="50" text-anchor="middle" font-size="9.5" fill="#d97706" font-weight="bold">citrón</text>
        <text x="154" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 2,5</text>

        <!-- Káva ~ pH 5 -->
        <line x1="265" y1="70" x2="265" y2="55" stroke="#ca8a04" stroke-width="1.5" />
        <text x="265" y="50" text-anchor="middle" font-size="9.5" fill="#ca8a04" font-weight="bold">káva</text>
        <text x="265" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 5</text>

        <!-- Čistá voda ~ pH 7 -->
        <line x1="360" y1="70" x2="360" y2="55" stroke="#16a34a" stroke-width="1.5" />
        <text x="360" y="50" text-anchor="middle" font-size="9.5" fill="#16a34a" font-weight="bold">voda</text>
        <text x="360" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH = 7</text>

        <!-- Mydlo ~ pH 9 -->
        <line x1="454" y1="70" x2="454" y2="55" stroke="#0891b2" stroke-width="1.5" />
        <text x="454" y="50" text-anchor="middle" font-size="9.5" fill="#0891b2" font-weight="bold">mydlo</text>
        <text x="454" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 9</text>

        <!-- Sóda ~ pH 11 -->
        <line x1="548" y1="70" x2="548" y2="55" stroke="#2563eb" stroke-width="1.5" />
        <text x="548" y="50" text-anchor="middle" font-size="9.5" fill="#2563eb" font-weight="bold">sóda</text>
        <text x="548" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 11</text>

        <!-- NaOH ~ pH 14 -->
        <line x1="690" y1="70" x2="690" y2="55" stroke="#7c3aed" stroke-width="1.5" />
        <text x="690" y="50" text-anchor="middle" font-size="9.5" fill="#7c3aed" font-weight="bold">NaOH</text>
        <text x="690" y="42" text-anchor="middle" font-size="8.5" fill="#9ca3af">pH ≈ 14</text>

        <!-- Region labels below -->
        <text x="150" y="148" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">KYSLÝ</text>
        <text x="360" y="148" text-anchor="middle" font-size="11" fill="#16a34a" font-weight="bold">NEUTRÁLNY</text>
        <text x="570" y="148" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="bold">ZÁSADITÝ</text>

        <!-- Indicator colors legend -->
        <text x="30" y="172" font-size="9" fill="#6b7280">Lakmus: červený pri pH &lt; 7 | modrý pri pH &gt; 7</text>
        <text x="30" y="185" font-size="9" fill="#6b7280">Fenolftaleín: bezfarebný pri pH &lt; 8,2 | ružový pri pH &gt; 8,2</text>
        <text x="400" y="172" font-size="9" fill="#6b7280">Metyloranž: červený pri pH &lt; 3,1 | žltý pri pH &gt; 4,4</text>
      </svg>
    </div>

    <!-- Section 1: Brönstedova teória -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">1. Brönstedova teória kyselín a zásad</h2>

      <p class="text-gray-700 mb-4">
        Podľa Brönsteda a Lowryho (1923) je <strong>kyselina</strong> látka, ktorá odovzdáva protón
        <span v-html="km('\\text{H}^+')" /> (donor protónov), a <strong>zásada</strong> je látka, ktorá
        protón prijíma (akceptor protónov). Táto definícia je širšia ako Arrheniova a platí aj pre
        nevodné roztoky.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-700 mb-2">🔴 Kyselina (donor H⁺)</h3>
          <ul class="text-gray-700 space-y-1 text-sm">
            <li>• <strong>Odovzdáva</strong> protón H⁺</li>
            <li>• Po odovzdaní H⁺ zostáva <strong>konjugovaná zásada</strong></li>
            <li>• Príklady: HCl, H₂SO₄, CH₃COOH, HNO₃</li>
          </ul>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-700 mb-2">🔵 Zásada (akceptor H⁺)</h3>
          <ul class="text-gray-700 space-y-1 text-sm">
            <li>• <strong>Prijíma</strong> protón H⁺</li>
            <li>• Po prijatí H⁺ vzniká <strong>konjugovaná kyselina</strong></li>
            <li>• Príklady: NaOH, NH₃, CO₃²⁻, F⁻</li>
          </ul>
        </div>
      </div>

      <h3 class="font-bold text-gray-800 mb-3">Protolytická reakcia a konjugovaný pár</h3>
      <p class="text-gray-700 mb-3">
        Pri každej protolytickej reakcii sa prenáša protón medzi kyselinou a zásadou.
        Vznikajú dva <strong>konjugované páry</strong>: kyselina 1 – zásada 1 a kyselina 2 – zásada 2.
      </p>

      <div class="bg-gray-50 rounded-xl p-5 mb-5">
        <p class="text-gray-600 text-sm mb-2">Príklad – reakcia kyseliny octovej s vodou:</p>
        <div class="text-center mb-3" v-html="km('\\underbrace{\\text{CH}_3\\text{COOH}}_{\\text{kyselina 1}} + \\underbrace{\\text{H}_2\\text{O}}_{\\text{zásada 2}} \\rightleftharpoons \\underbrace{\\text{CH}_3\\text{COO}^-}_{\\text{zásada 1}} + \\underbrace{\\text{H}_3\\text{O}^+}_{\\text{kyselina 2}}')" />
        <div class="grid grid-cols-2 gap-4 text-sm mt-3">
          <div class="bg-red-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-red-700">Konjugovaný pár 1</p>
            <p class="text-gray-700">CH₃COOH / CH₃COO⁻</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-blue-700">Konjugovaný pár 2</p>
            <p class="text-gray-700">H₃O⁺ / H₂O</p>
          </div>
        </div>
      </div>

      <h3 class="font-bold text-gray-800 mb-3">Amfotérne látky</h3>
      <p class="text-gray-700 mb-4">
        Niektoré látky môžu fungovať ako kyselina aj ako zásada – nazývame ich <strong>amfotérne</strong>
        (amfoprotonické). Typickým príkladom je voda a hydrogenuhličitanový ión.
      </p>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-2">
        <p class="text-sm text-gray-700 mb-2">Voda ako kyselina (odovzdáva H⁺ silnejšej zásade):</p>
        <div class="text-center mb-3" v-html="km('\\text{H}_2\\text{O} + \\text{NH}_3 \\rightleftharpoons \\text{OH}^- + \\text{NH}_4^+')" />
        <p class="text-sm text-gray-700 mb-2">Voda ako zásada (prijíma H⁺ od silnejšej kyseliny):</p>
        <div class="text-center" v-html="km('\\text{H}_2\\text{O} + \\text{HCl} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{Cl}^-')" />
      </div>
    </section>

    <!-- Section 2: Autoprotolýza vody a pH -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">2. Autoprotolýza vody a stupnica pH</h2>

      <p class="text-gray-700 mb-4">
        Čistá voda sa v malom množstve sama ionizuje – hovoríme o <strong>autoprotolýze vody</strong>.
        Rovnovážna poloha je silno na strane vody, no práve táto rovnováha určuje kyslé, neutrálne
        a zásadité prostredie.
      </p>

      <div class="bg-gray-50 rounded-xl p-5 mb-6">
        <p class="text-gray-600 text-sm mb-2">Rovnica autoprotolýzy:</p>
        <div class="text-center mb-2" v-html="km('\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-')" />
        <p class="text-gray-600 text-sm mb-2">Iónový súčin vody pri 25 °C:</p>
        <div class="text-center mb-2" v-html="km('K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14} \\, \\text{mol}^2/\\text{L}^2')" />
        <p class="text-gray-500 text-xs text-center">V čistej vode: [H⁺] = [OH⁻] = 10⁻⁷ mol/L</p>
      </div>

      <h3 class="font-bold text-gray-800 mb-3">Definícia pH a pOH</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-orange-200 rounded-xl p-5">
          <p class="font-bold text-orange-700 mb-2">Definícia pH</p>
          <div class="text-center mb-2" v-html="km('\\text{pH} = -\\log[\\text{H}^+]')" />
          <p class="text-gray-600 text-sm">kde [H⁺] je molárna koncentrácia vodíkových iónov v mol/L</p>
        </div>
        <div class="bg-white border border-blue-200 rounded-xl p-5">
          <p class="font-bold text-blue-700 mb-2">Definícia pOH</p>
          <div class="text-center mb-2" v-html="km('\\text{pOH} = -\\log[\\text{OH}^-]')" />
          <div class="text-center" v-html="km('\\text{pH} + \\text{pOH} = 14')" />
        </div>
      </div>

      <!-- pH scale meaning -->
      <div class="grid grid-cols-3 gap-3 mb-6 text-center text-sm">
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <p class="text-3xl mb-1">🍋</p>
          <p class="font-bold text-red-700">Kyslé</p>
          <div v-html="km('\\text{pH} < 7')" />
          <p class="text-gray-500 text-xs mt-1">[H⁺] &gt; [OH⁻]</p>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-xl p-4">
          <p class="text-3xl mb-1">💧</p>
          <p class="font-bold text-green-700">Neutrálne</p>
          <div v-html="km('\\text{pH} = 7')" />
          <p class="text-gray-500 text-xs mt-1">[H⁺] = [OH⁻]</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p class="text-3xl mb-1">🧼</p>
          <p class="font-bold text-blue-700">Zásadité</p>
          <div v-html="km('\\text{pH} > 7')" />
          <p class="text-gray-500 text-xs mt-1">[H⁺] &lt; [OH⁻]</p>
        </div>
      </div>

      <!-- Numerical example 1 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 1: Výpočet pH roztoku HCl</h3>
        <div class="space-y-2 text-gray-700">
          <p>Vypočítajte pH roztoku HCl s koncentráciou <span v-html="km('c = 0{,}01 \\, \\text{mol/L}')" />.</p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p class="text-sm text-gray-500 font-medium">HCl je silná kyselina – úplne disociuje:</p>
            <div v-html="km('\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-')" />
            <div v-html="km('[\\text{H}^+] = c(\\text{HCl}) = 0{,}01 \\, \\text{mol/L} = 10^{-2} \\, \\text{mol/L}')" />
            <div v-html="km('\\text{pH} = -\\log(10^{-2}) = 2')" />
            <p class="font-semibold text-orange-700">pH = 2 (silne kyslý roztok)</p>
          </div>
        </div>
      </div>

      <!-- Numerical example 2 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 2: Výpočet pH roztoku NaOH</h3>
        <div class="space-y-2 text-gray-700">
          <p>Vypočítajte pH roztoku NaOH s koncentráciou <span v-html="km('c = 0{,}001 \\, \\text{mol/L}')" />.</p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p class="text-sm text-gray-500 font-medium">NaOH je silná zásada – úplne disociuje:</p>
            <div v-html="km('\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-')" />
            <div v-html="km('[\\text{OH}^-] = 10^{-3} \\, \\text{mol/L}')" />
            <div v-html="km('\\text{pOH} = -\\log(10^{-3}) = 3')" />
            <div v-html="km('\\text{pH} = 14 - \\text{pOH} = 14 - 3 = 11')" />
            <p class="font-semibold text-orange-700">pH = 11 (silne zásaditý roztok)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Silné a slabé kyseliny, indikátory -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">3. Silné a slabé kyseliny, indikátory</h2>

      <p class="text-gray-700 mb-4">
        Kyseliny delíme podľa <strong>stupňa disociácie</strong> na silné a slabé. Silné kyseliny
        disociujú v roztoku úplne, slabé len čiastočne – sú v rovnováhe s nedisociovanou formou.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-700 mb-3">Silné kyseliny (úplná disociácia)</h3>
          <ul class="text-gray-700 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{HCl}')" /> – kyselina chlorovodíková
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{H}_2\\text{SO}_4')" /> – kyselina sírová
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{HNO}_3')" /> – kyselina dusičná
              </span>
            </li>
          </ul>
          <div class="mt-3" v-html="km('\\text{HCl} \\xrightarrow{100\\%} \\text{H}^+ + \\text{Cl}^-')" />
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 class="font-bold text-orange-700 mb-3">Slabé kyseliny (čiastočná disociácia)</h3>
          <ul class="text-gray-700 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{CH}_3\\text{COOH}')" /> – kyselina octová (ocot)
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{H}_2\\text{CO}_3')" /> – kyselina uhličitá (sóda)
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-0.5">•</span>
              <span>
                <span v-html="km('\\text{HF}')" /> – kyselina fluorovodíková
              </span>
            </li>
          </ul>
          <div class="mt-3" v-html="km('\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+')" />
        </div>
      </div>

      <h3 class="font-bold text-gray-800 mb-4">Indikátory pH</h3>
      <p class="text-gray-700 mb-4">
        Indikátor je slabá organická kyselina (alebo zásada), ktorej nedisociovaná forma má inú farbu
        ako disociovaná. Menia farbu v závislosti od pH roztoku.
      </p>

      <div class="overflow-x-auto mb-6">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-orange-500 text-white">
              <th class="px-4 py-2 text-left rounded-tl-lg">Indikátor</th>
              <th class="px-4 py-2 text-left">Farba v kyseline (pH &lt; 7)</th>
              <th class="px-4 py-2 text-left">Farba v zásade (pH &gt; 7)</th>
              <th class="px-4 py-2 text-left rounded-tr-lg">Rozsah zmeny</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 bg-white">
              <td class="px-4 py-2 font-semibold">Lakmus</td>
              <td class="px-4 py-2"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded">červená</span></td>
              <td class="px-4 py-2"><span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">modrá</span></td>
              <td class="px-4 py-2 text-gray-500">pH 5 – 8</td>
            </tr>
            <tr class="border-b border-gray-200 bg-gray-50">
              <td class="px-4 py-2 font-semibold">Fenolftaleín</td>
              <td class="px-4 py-2"><span class="bg-gray-100 text-gray-500 px-2 py-0.5 rounded">bezfarebná</span></td>
              <td class="px-4 py-2"><span class="bg-pink-100 text-pink-700 px-2 py-0.5 rounded">ružová</span></td>
              <td class="px-4 py-2 text-gray-500">pH 8,2 – 10</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-2 font-semibold">Metyloranž</td>
              <td class="px-4 py-2"><span class="bg-red-100 text-red-700 px-2 py-0.5 rounded">červená</span></td>
              <td class="px-4 py-2"><span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">žltá</span></td>
              <td class="px-4 py-2 text-gray-500">pH 3,1 – 4,4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 4: Neutralizácia a zrážacie reakcie -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">4. Neutralizácia a zrážacie reakcie</h2>

      <p class="text-gray-700 mb-4">
        <strong>Neutralizácia</strong> je reakcia kyseliny so zásadou, pri ktorej vzniká soľ a voda.
        Netto iónová rovnica neutralizácie je vždy rovnaká: vodíkový ión reaguje s hydroxidovým.
      </p>

      <div class="bg-gray-50 rounded-xl p-5 mb-5">
        <p class="text-gray-600 text-sm mb-2 font-medium">Molekulový zápis (HCl + NaOH):</p>
        <div class="text-center mb-3" v-html="km('\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}')" />
        <p class="text-gray-600 text-sm mb-2 font-medium">Iónový zápis:</p>
        <div class="text-center mb-3" v-html="km('\\text{H}^+ + \\text{Cl}^- + \\text{Na}^+ + \\text{OH}^- \\rightarrow \\text{Na}^+ + \\text{Cl}^- + \\text{H}_2\\text{O}')" />
        <p class="text-gray-600 text-sm mb-2 font-medium">Netto iónová rovnica (skrátený iónový zápis):</p>
        <div class="text-center" v-html="km('\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}')" />
      </div>

      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">Soľ – produkt neutralizácie</h3>
        <p class="text-gray-700 text-sm mb-3">
          Soľ je iónová zlúčenina tvorená katiónom z bázy a aniónom z kyseliny.
          Soľ sama o sebe nie je ani kyselina ani zásada, no jej vodný roztok môže byť kyslý, zásaditý alebo neutrálny
          (v závislosti od hydrolýzy).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-gray-700 mb-1">HCl + NaOH</p>
            <div v-html="km('\\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}')" />
            <p class="text-green-600 text-xs mt-1">roztok pH = 7</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-gray-700 mb-1">CH₃COOH + NaOH</p>
            <div v-html="km('\\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}')" />
            <p class="text-blue-600 text-xs mt-1">roztok pH &gt; 7</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-gray-700 mb-1">HCl + NH₃</p>
            <div v-html="km('\\rightarrow \\text{NH}_4\\text{Cl}')" />
            <p class="text-red-600 text-xs mt-1">roztok pH &lt; 7</p>
          </div>
        </div>
      </div>

      <h3 class="font-bold text-gray-800 mb-3">Zrážacia reakcia</h3>
      <p class="text-gray-700 mb-4">
        Pri zrážacej reakcii sa v roztoku tvorí <strong>zrazenina</strong> (nerozpustná soľ alebo hydroxid).
        Prebieha vtedy, keď produkt má zanedbateľnú rozpustnosť. Zapisujeme ju iónovou rovnicou so šípkou ↓.
      </p>
      <div class="bg-gray-50 rounded-xl p-5 mb-2">
        <p class="text-gray-600 text-sm mb-2">Príklad – zrážanie síranu bárnatého:</p>
        <div class="text-center mb-2" v-html="km('\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}')" />
        <p class="text-gray-600 text-sm mb-2">Netto iónová rovnica:</p>
        <div class="text-center mb-2" v-html="km('\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4\\downarrow')" />
        <p class="text-gray-500 text-xs text-center">BaSO₄ je biela zrazenina – používa sa na dôkaz síranov</p>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li>🔴 <strong>Kyselina (Brönsted)</strong> = donor H⁺; po odovzdaní H⁺ vzniká konjugovaná zásada</li>
        <li>🔵 <strong>Zásada (Brönsted)</strong> = akceptor H⁺; po prijatí H⁺ vzniká konjugovaná kyselina</li>
        <li>💧 <strong>Amfotérne látky</strong> (napr. H₂O, HCO₃⁻) môžu byť kyselina aj zásada</li>
        <li>⚗️ <strong>Autoprotolýza vody:</strong> H₂O ⇌ H⁺ + OH⁻; Kw = 10⁻¹⁴ pri 25 °C</li>
        <li>📏 <strong>pH = −log[H⁺]</strong>; pOH = −log[OH⁻]; pH + pOH = 14</li>
        <li>🍋 pH &lt; 7 = kyslý roztok; pH = 7 = neutrálny; pH &gt; 7 = zásaditý</li>
        <li>⚡ <strong>Silné kyseliny</strong> (HCl, H₂SO₄, HNO₃) – úplná disociácia</li>
        <li>🍵 <strong>Slabé kyseliny</strong> (CH₃COOH, H₂CO₃) – čiastočná disociácia, rovnováha</li>
        <li>🎨 <strong>Indikátory:</strong> lakmus (červ./modrý), fenolftaleín (bezfar./ružový), metyloranž (červ./žltý)</li>
        <li>🧂 <strong>Neutralizácia:</strong> H⁺ + OH⁻ → H₂O; vzniká soľ a voda</li>
        <li>🔽 <strong>Zrážacia reakcia:</strong> vznik nerozpustnej zrazeniny (napr. BaSO₄↓)</li>
      </ul>
    </div>

    <!-- Quiz -->
    <section>
      <h2 class="text-2xl font-bold text-orange-700 mb-6">🧠 Kvíz</h2>

      <div v-if="!quizFinished">
        <p data-testid="quiz-progress" class="text-sm text-gray-500 mb-4">
          Otázka {{ currentQ + 1 }} z {{ quiz.length }}
        </p>

        <Transition name="fade" mode="out-in">
          <div :key="currentQ">
            <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5">
              {{ currentQuestion.question }}
            </p>

            <div class="space-y-3 mb-5">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                type="button"
                :data-testid="`quiz-option-${i}`"
                class="w-full text-left px-5 py-3 rounded-xl border-2 font-medium transition-all"
                :class="getOptionClass(i)"
                @click="selectAnswer(i)"
              >
                {{ option }}
              </button>
            </div>

            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="quiz-feedback"
                class="rounded-xl p-4 mb-5 text-sm"
                :class="
                  selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                "
              >
                <span class="font-bold">
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✅ Správne!' : '❌ Nesprávne.' }}
                </span>
                {{ currentQuestion.explanation }}
              </div>
            </Transition>

            <button
              v-if="selectedAnswer !== null"
              type="button"
              data-testid="quiz-next-btn"
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>
        </Transition>
      </div>

      <div
        v-else
        data-testid="quiz-result"
        class="text-center bg-orange-50 border border-orange-200 rounded-2xl p-8"
      >
        <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
        <p class="text-2xl font-bold text-orange-700 mb-2">{{ scoreMessage }}</p>
        <p data-testid="quiz-score" class="text-gray-600 text-lg mb-6">
          Skóre: {{ quizScore }} / {{ quiz.length }}
        </p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
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
    question: 'Čo je podľa Brönstedovej teórie kyselina?',
    options: [
      'Látka, ktorá prijíma protón H⁺ (akceptor protónov)',
      'Látka, ktorá odovzdáva protón H⁺ (donor protónov)',
      'Látka, ktorá odovzdáva elektróny',
      'Látka, ktorá zvyšuje koncentráciu OH⁻ v roztoku',
    ],
    correctIndex: 1,
    explanation:
      'Brönstedova kyselina je donor protónov H⁺. Zásada je naopak akceptor protónov. Táto definícia je širšia ako Arrheniova a platí aj v nevodnom prostredí.',
  },
  {
    question: 'Aké je pH čistej vody pri 25 °C?',
    options: ['pH = 0', 'pH = 14', 'pH = 7', 'pH = 1'],
    correctIndex: 2,
    explanation:
      'V čistej vode pri 25 °C je [H⁺] = [OH⁻] = 10⁻⁷ mol/L. pH = −log(10⁻⁷) = 7. Čistá voda je neutrálna.',
  },
  {
    question: 'Roztok má [H⁺] = 10⁻³ mol/L. Aké je jeho pH a charakter?',
    options: [
      'pH = 3, kyslý roztok',
      'pH = 11, zásaditý roztok',
      'pH = 3, zásaditý roztok',
      'pH = −3, kyslý roztok',
    ],
    correctIndex: 0,
    explanation:
      'pH = −log(10⁻³) = 3. Keďže pH = 3 < 7, roztok je kyslý. Zodpovedá napr. zriedenému octu alebo jablčnej šťave.',
  },
  {
    question: 'Ktorá z nasledujúcich kyselín je SLABÁ (disociuje len čiastočne)?',
    options: [
      'Kyselina chlorovodíková (HCl)',
      'Kyselina sírová (H₂SO₄)',
      'Kyselina octová (CH₃COOH)',
      'Kyselina dusičná (HNO₃)',
    ],
    correctIndex: 2,
    explanation:
      'CH₃COOH je slabá kyselina – v roztoku je v rovnováhe s nedisociovanou formou. HCl, H₂SO₄ a HNO₃ sú silné kyseliny, ktoré disociujú úplne.',
  },
  {
    question: 'Fenolftaleín v roztoku zmení farbu na ružovú. Čo to znamená?',
    options: [
      'Roztok je kyslý (pH < 7)',
      'Roztok je neutrálny (pH = 7)',
      'Roztok je zásaditý (pH > 8,2)',
      'Roztok je silne kyslý (pH < 3)',
    ],
    correctIndex: 2,
    explanation:
      'Fenolftaleín mení farbu z bezfarebnej na ružovú pri pH > 8,2. Ružová farba indikuje zásadité prostredie. V kyslom a neutrálnom prostredí zostáva bezfarebný.',
  },
  {
    question: 'Čo je netto iónová rovnica neutralizácie silnej kyseliny silnou zásadou?',
    options: [
      'Na⁺ + Cl⁻ → NaCl',
      'H⁺ + OH⁻ → H₂O',
      'HCl + NaOH → NaCl + H₂O',
      'H₂O → H⁺ + OH⁻',
    ],
    correctIndex: 1,
    explanation:
      'Netto iónová (skrátená iónová) rovnica vynecháva ióny, ktoré sa na reakcii nezúčastňujú (Na⁺, Cl⁻ sú diváci). Podstata neutralizácie je vždy: H⁺ + OH⁻ → H₂O.',
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

function getOptionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50 cursor-pointer'
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
