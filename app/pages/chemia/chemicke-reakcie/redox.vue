<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/chemicke-reakcie" class="hover:text-orange-600 transition-colors">Chemické reakcie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Redoxné reakcie</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚡</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Redoxné reakcie</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Redoxné reakcie sú chemické reakcie, pri ktorých dochádza k presunu elektrónov medzi reaktantmi.
      Sú základom korózie, batérií, elektrolýzy aj mnohých biologických procesov.
    </p>

    <!-- Section 1: Oxidácia a redukcia -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Oxidácia a redukcia</h2>

      <p class="text-gray-700 mb-4">
        Redoxné reakcie vždy prebiehajú súčasne – ak jedna látka oxiduje, iná sa redukuje.
        Preto hovoríme o redoxných (redukčno-oxidačných) reakciách.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 class="font-bold text-orange-700 mb-2">🔴 Oxidácia</h3>
          <ul class="text-gray-700 space-y-1 text-sm">
            <li>• <strong>Zvyšovanie</strong> oxidačného čísla</li>
            <li>• <strong>Odovzdávanie</strong> elektrónov</li>
            <li>• Látka, ktorá oxiduje = <strong>redukovadlo</strong></li>
          </ul>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-700 mb-2">🔵 Redukcia</h3>
          <ul class="text-gray-700 space-y-1 text-sm">
            <li>• <strong>Znižovanie</strong> oxidačného čísla</li>
            <li>• <strong>Prijímanie</strong> elektrónov</li>
            <li>• Látka, ktorá sa redukuje = <strong>oxidovadlo</strong></li>
          </ul>
        </div>
      </div>

      <p class="text-gray-700 mb-3">Príklad redoxnej reakcie – zinok s meďnatými iónmi:</p>

      <div class="bg-gray-50 rounded-xl p-5 mb-4 text-center">
        <div
          class="text-lg mb-4"
          v-html="km('\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}')"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="bg-orange-50 rounded-lg p-3">
            <p class="font-semibold text-orange-700 mb-1">Oxidácia (Zn = redukovadlo)</p>
            <div v-html="km('\\text{Zn}^{0} \\rightarrow \\text{Zn}^{2+} + 2e^-')" />
            <p class="text-gray-600 mt-1">Oxidačné číslo: 0 → +2</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-3">
            <p class="font-semibold text-blue-700 mb-1">Redukcia (Cu²⁺ = oxidovadlo)</p>
            <div v-html="km('\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}^{0}')" />
            <p class="text-gray-600 mt-1">Oxidačné číslo: +2 → 0</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Oxidačné čísla -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Oxidačné čísla a vyčísľovanie rovníc</h2>

      <p class="text-gray-700 mb-4">
        Oxidačné číslo (stupeň oxidácie) je formálny náboj atómu v zlúčenine, ak by boli všetky
        väzby iónové. Zapisuje sa rímskymi číslicami (napr. Fe(II), Mn(VII)) alebo arabskými
        číslicami so znamienkom nad symbolom prvku.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">Pravidlá pre určovanie oxidačných čísel</h3>
        <ul class="text-gray-700 space-y-2 text-sm">
          <li>
            • Voľné prvky (napr.
            <span v-html="km('\\text{Fe, O}_2, \\text{H}_2')" />)
            majú oxidačné číslo <strong>0</strong>
          </li>
          <li>• Vodík má oxidačné číslo <strong>+I</strong> (výnimka: hydridy kovov –I)</li>
          <li>• Kyslík má oxidačné číslo <strong>–II</strong> (výnimka: peroxidy –I)</li>
          <li>• Súčet oxidačných čísel v neutrálnej molekule = <strong>0</strong></li>
          <li>• Súčet oxidačných čísel v ióne = <strong>náboj iónu</strong></li>
        </ul>
      </div>

      <!-- Calculated example 1 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 1: Oxidačné číslo mangánu v KMnO₄</h3>
        <div class="space-y-2 text-gray-700">
          <p>
            Určte oxidačné číslo Mn v
            <span v-html="km('\\text{KMnO}_4')" />:
          </p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p>Vieme: K má +I, O má –II, celkový náboj molekuly = 0</p>
            <div v-html="km('(+1) + x + 4 \\cdot (-2) = 0')" />
            <div v-html="km('1 + x - 8 = 0')" />
            <div v-html="km('x = +7')" />
            <p class="font-semibold text-orange-700">Mn má oxidačné číslo +VII (manganistan – silné oxidovadlo)</p>
          </div>
          <p class="text-sm text-gray-500">
            KMnO₄ sa pri reakciách redukuje: Mn klesá z +VII na +II (v kyslom prostredí) alebo +IV (v neutrálnom).
          </p>
        </div>
      </div>

      <!-- Calculated example 2 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 2: Vyčíslenie redoxnej reakcie – Fe s HCl</h3>
        <div class="space-y-2 text-gray-700">
          <p>Vyčíslite redoxnú reakciu železa s kyselinou chlorovodíkovou:</p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-3">
            <div>
              <p class="text-xs text-gray-500 mb-1 font-medium">Nevyčíslená rovnica:</p>
              <div v-html="km('\\text{Fe} + \\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2')" />
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1 font-medium">Čiastkové reakcie (zmena oxidačného čísla):</p>
              <div class="mb-1" v-html="km('\\text{Oxidácia: } \\overset{0}{\\text{Fe}} \\rightarrow \\overset{+II}{\\text{Fe}}^{2+} + 2e^-')" />
              <div v-html="km('\\text{Redukcia: } 2\\overset{+I}{\\text{H}}^{+} + 2e^- \\rightarrow \\overset{0}{\\text{H}}_2')" />
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1 font-medium">Počty elektrónov sú zhodné (2e⁻), rovnica je vyčíslená:</p>
              <div v-html="km('\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2')" />
            </div>
            <p class="font-semibold text-orange-700">Fe = redukovadlo &nbsp;|&nbsp; H⁺ = oxidovadlo</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Elektrochemický rad napätia kovov -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Elektrochemický rad napätia kovov</h2>

      <p class="text-gray-700 mb-4">
        Elektrochemický rad napätia kovov zoraďuje kovy podľa ich schopnosti odovzdávať elektróny
        (oxidovať sa). Kov stojaci vľavo vytlačí kov stojaci vpravo z jeho soli – je aktívnejší.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6 overflow-x-auto">
        <div class="text-center mb-4 font-bold text-orange-700">Elektrochemický rad napätia kovov</div>
        <div class="flex items-end justify-center gap-1 flex-nowrap min-w-max mx-auto">
          <template v-for="(metal, index) in electrochemicalSeries" :key="metal.symbol">
            <div class="text-center">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow"
                :class="metal.active === 'high' ? 'bg-orange-500' : metal.active === 'neutral' ? 'bg-gray-400' : 'bg-blue-500'"
              >
                {{ metal.symbol }}
              </div>
              <div class="text-xs text-gray-500 mt-1 whitespace-nowrap">{{ metal.name }}</div>
            </div>
            <div v-if="index < electrochemicalSeries.length - 1" class="text-gray-400 font-bold text-lg mb-5 px-0.5">
              →
            </div>
          </template>
        </div>
        <div class="flex justify-between mt-4 text-xs text-gray-500 pt-2 border-t border-orange-200">
          <span>← silnejšie redukovadlá (aktívnejšie kovy)</span>
          <span>slabšie redukovadlá (ušľachtilé kovy) →</span>
        </div>
      </div>

      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-3">Pravidlo vytlačovania kovov</h3>
        <p class="text-gray-700 mb-3">
          Zinok (aktívnejší, stojí vľavo od medi) vytlačí meď z roztoku síranu meďnatého:
        </p>
        <div class="text-center mb-3" v-html="km('\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}\\downarrow')" />
        <p class="text-gray-700 text-sm">
          Meď (menej aktívna, stojí vpravo) <strong>nevytlačí</strong> zinok z roztoku síranu zinočnatého – reakcia neprebehne.
        </p>
      </div>
    </section>

    <!-- Section 4: Korózia kovov -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Korózia kovov a spôsoby ochrany</h2>

      <p class="text-gray-700 mb-4">
        Korózia je samovoľná redoxná reakcia kovu s prostredím (kyslíkom, vodou, kyselinami),
        pri ktorej dochádza k degradácii kovu. Najčastejšia je korózia železa – hrdzavenie.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">Korózia železa (hrdzavenie)</h3>
        <p class="text-gray-700 mb-3 text-sm">V prítomnosti vody a kyslíka prebieha oxidácia:</p>
        <div class="text-center mb-2" v-html="km('4\\text{Fe} + 3\\text{O}_2 + 6\\text{H}_2\\text{O} \\rightarrow 4\\text{Fe(OH)}_3')" />
        <div class="text-center text-sm text-gray-600 mt-1">
          Fe(OH)₃ sa ďalej dehydratuje na hrdzu:
          <span v-html="km('\\text{Fe}_2\\text{O}_3 \\cdot n\\text{H}_2\\text{O}')" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Spôsoby ochrany pred koróziou</h3>
          <ul class="text-gray-700 space-y-1 text-sm">
            <li>🎨 <strong>Náter, lakování</strong> – izolácia od prostredia</li>
            <li>🔧 <strong>Galvanizácia (pozinkovanie)</strong> – vrstva Zn chráni aj po poškodení</li>
            <li>⚙️ <strong>Chromovanie, niklování</strong> – dekoratívna ochrana</li>
            <li>🦺 <strong>Katódová ochrana</strong> – aktívnejší kov (Mg, Zn) sa „obetuje"</li>
            <li>🏗️ <strong>Nerezová oceľ</strong> – zliatina s Cr (~18 %) a Ni (~8 %)</li>
          </ul>
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Galvanický článok a korózia</h3>
          <p class="text-gray-700 text-sm mb-2">
            Ak sa dotýkajú dva rôzne kovy v elektrolyte, vytvorí sa galvanický článok.
            Aktívnejší kov koroduje omnoho rýchlejšie ako samostatný kov.
          </p>
          <p class="text-gray-700 text-sm">
            Príklad: skrutka z Fe v kontakte s Cu plechom v morskej vode → Fe koroduje extrémne rýchlo.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 5: Electrolysis -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Elektrolýza NaCl</h2>

      <p class="text-gray-700 mb-4">
        Elektrolýza je <em>nespontánna</em> redoxná reakcia, ktorú poháňa elektrický prúd.
        Na <strong>katóde</strong> (záporná elektróda) prebieha redukcia, na <strong>anóde</strong>
        (kladná elektróda) prebieha oxidácia. Priebeh závisí od toho, či elektrolyzujeme
        roztok alebo taveninu NaCl.
      </p>

      <!-- SVG Diagram -->
      <div class="bg-white border border-orange-200 rounded-2xl p-6 mb-6">
        <h3 class="font-bold text-orange-700 mb-4 text-center">Diagram: Elektrolýza vodného roztoku NaCl</h3>
        <svg
          viewBox="0 0 580 360"
          class="w-full max-w-2xl mx-auto block"
          aria-label="Diagram elektrolýzy vodného roztoku NaCl – anóda, katóda, pohyb iónov, produkty H2 a Cl2"
          role="img"
        >
          <!-- Background -->
          <rect width="580" height="360" fill="#f9fafb" rx="14" />

          <!-- External circuit wires -->
          <line x1="110" y1="55" x2="245" y2="55" stroke="#374151" stroke-width="2.5" />
          <line x1="335" y1="55" x2="470" y2="55" stroke="#374151" stroke-width="2.5" />
          <line x1="110" y1="55" x2="110" y2="108" stroke="#374151" stroke-width="2.5" />
          <line x1="470" y1="55" x2="470" y2="108" stroke="#374151" stroke-width="2.5" />

          <!-- Power source -->
          <rect x="245" y="33" width="90" height="44" rx="8" fill="#1d4ed8" stroke="#1e40af" stroke-width="1.5" />
          <text x="290" y="52" text-anchor="middle" font-size="13" font-weight="bold" fill="white">zdroj</text>
          <text x="258" y="67" text-anchor="middle" font-size="13" font-weight="bold" fill="#fbbf24">+</text>
          <text x="322" y="67" text-anchor="middle" font-size="13" font-weight="bold" fill="#fbbf24">−</text>

          <!-- Electron flow arrows -->
          <text x="165" y="49" font-size="16" fill="#374151">←</text>
          <text x="390" y="49" font-size="16" fill="#374151">←</text>
          <text x="158" y="42" font-size="10" fill="#6b7280">e⁻</text>
          <text x="383" y="42" font-size="10" fill="#6b7280">e⁻</text>

          <!-- Electrolyte container -->
          <rect x="70" y="108" width="440" height="210" rx="14" fill="#dbeafe" stroke="#93c5fd" stroke-width="2" />
          <text x="290" y="220" text-anchor="middle" font-size="13" fill="#1e40af" opacity="0.45">vodný roztok NaCl</text>

          <!-- Cathode electrode (left) -->
          <rect x="93" y="103" width="20" height="188" rx="5" fill="#6b7280" stroke="#4b5563" stroke-width="1.5" />
          <text x="103" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#111827">Katóda (−)</text>

          <!-- Anode electrode (right) -->
          <rect x="467" y="103" width="20" height="188" rx="5" fill="#111827" stroke="#000" stroke-width="1.5" />
          <text x="477" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#111827">Anóda (+)</text>

          <!-- H2 bubbles at cathode -->
          <circle cx="128" cy="160" r="7" fill="none" stroke="#3b82f6" stroke-width="1.8" opacity="0.85" />
          <circle cx="142" cy="138" r="6" fill="none" stroke="#3b82f6" stroke-width="1.8" opacity="0.7" />
          <circle cx="132" cy="118" r="5" fill="none" stroke="#3b82f6" stroke-width="1.8" opacity="0.55" />
          <text x="155" y="140" font-size="14" font-weight="bold" fill="#2563eb">H₂↑</text>

          <!-- Cl2 bubbles at anode -->
          <circle cx="452" cy="160" r="7" fill="none" stroke="#d97706" stroke-width="1.8" opacity="0.85" />
          <circle cx="438" cy="138" r="6" fill="none" stroke="#d97706" stroke-width="1.8" opacity="0.7" />
          <circle cx="447" cy="118" r="5" fill="none" stroke="#d97706" stroke-width="1.8" opacity="0.55" />
          <text x="398" y="140" font-size="14" font-weight="bold" fill="#d97706">Cl₂↑</text>

          <!-- Na+ ions moving toward cathode -->
          <text x="195" y="248" font-size="13" fill="#1d4ed8" font-weight="bold">Na⁺</text>
          <text x="175" y="248" font-size="17" fill="#1d4ed8">←</text>
          <text x="240" y="268" font-size="13" fill="#1d4ed8" font-weight="bold">Na⁺</text>
          <text x="220" y="268" font-size="17" fill="#1d4ed8">←</text>

          <!-- Cl- ions moving toward anode -->
          <text x="320" y="248" font-size="13" fill="#16a34a" font-weight="bold">Cl⁻</text>
          <text x="350" y="248" font-size="17" fill="#16a34a">→</text>
          <text x="300" y="268" font-size="13" fill="#16a34a" font-weight="bold">Cl⁻</text>
          <text x="330" y="268" font-size="17" fill="#16a34a">→</text>

          <!-- Cathode reaction box -->
          <rect x="72" y="162" width="118" height="44" rx="7" fill="white" fill-opacity="0.88" stroke="#3b82f6" stroke-width="1.2" />
          <text x="131" y="178" text-anchor="middle" font-size="9.5" fill="#1e3a8a">2H₂O + 2e⁻ →</text>
          <text x="131" y="196" text-anchor="middle" font-size="9.5" fill="#1e3a8a">H₂ + 2OH⁻</text>

          <!-- Anode reaction box -->
          <rect x="390" y="162" width="118" height="44" rx="7" fill="white" fill-opacity="0.88" stroke="#d97706" stroke-width="1.2" />
          <text x="449" y="178" text-anchor="middle" font-size="9.5" fill="#92400e">2Cl⁻ →</text>
          <text x="449" y="196" text-anchor="middle" font-size="9.5" fill="#92400e">Cl₂ + 2e⁻</text>

          <!-- NaOH product note -->
          <text x="290" y="300" text-anchor="middle" font-size="11" fill="#7c3aed">V roztoku vzniká NaOH (Na⁺ + OH⁻)</text>
        </svg>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 class="font-bold text-blue-700 mb-2">Elektrolýza roztoku NaCl</h3>
          <p class="text-gray-700 text-sm mb-2">Na katóde sa vylučuje voda (nie Na⁺, lebo Na je príliš aktívny):</p>
          <div class="text-sm mb-1" v-html="km('\\text{Katóda: } 2\\text{H}_2\\text{O} + 2e^- \\rightarrow \\text{H}_2 + 2\\text{OH}^-')" />
          <div class="text-sm mb-3" v-html="km('\\text{Anóda: } 2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-')" />
          <p class="text-gray-600 text-xs font-medium">Produkty: H₂, Cl₂, NaOH (chloralkálový proces)</p>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Elektrolýza taveniny NaCl</h3>
          <p class="text-gray-700 text-sm mb-2">Nie je prítomná voda – Na⁺ sa vylučuje priamo:</p>
          <div class="text-sm mb-1" v-html="km('\\text{Katóda: } \\text{Na}^+ + e^- \\rightarrow \\text{Na}')" />
          <div class="text-sm mb-3" v-html="km('\\text{Anóda: } 2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-')" />
          <p class="text-gray-600 text-xs font-medium">Produkty: Na (tekutý kov), Cl₂ (Down-ov článok)</p>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li>⚡ <strong>Oxidácia</strong> = zvyšovanie oxid. čísla = odovzdávanie e⁻; látka = <strong>redukovadlo</strong></li>
        <li>⚡ <strong>Redukcia</strong> = znižovanie oxid. čísla = prijímanie e⁻; látka = <strong>oxidovadlo</strong></li>
        <li>🔢 Súčet oxidačných čísel v neutrálnej molekule = 0; H = +I, O = –II (väčšinou)</li>
        <li>🧮 Vyčísľovanie: počty odovzdaných a prijatých elektrónov sa musia rovnať</li>
        <li>🔋 <strong>Elektrochemický rad</strong>: Na, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au – aktivita klesá zľava doprava</li>
        <li>⬆️ Aktívnejší kov vytlačí menej aktívny kov z roztoku jeho soli</li>
        <li>🔴 <strong>Korózia</strong> = samovoľná redoxná degradácia kovu; ochrana: náter, galvanizácia, katódová ochrana, nerez</li>
        <li>⚗️ <strong>Elektrolýza roztoku NaCl</strong>: katóda → H₂ + OH⁻, anóda → Cl₂; produkt: NaOH</li>
        <li>⚗️ <strong>Elektrolýza taveniny NaCl</strong>: katóda → Na (kov), anóda → Cl₂</li>
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

interface ElectrochemicalMetal {
  symbol: string
  name: string
  active: 'high' | 'neutral' | 'low'
}

const electrochemicalSeries: ElectrochemicalMetal[] = [
  { symbol: 'Na', name: 'sodík', active: 'high' },
  { symbol: 'Mg', name: 'horčík', active: 'high' },
  { symbol: 'Al', name: 'hliník', active: 'high' },
  { symbol: 'Zn', name: 'zinok', active: 'high' },
  { symbol: 'Fe', name: 'železo', active: 'high' },
  { symbol: 'Pb', name: 'olovo', active: 'high' },
  { symbol: 'H', name: 'vodík', active: 'neutral' },
  { symbol: 'Cu', name: 'meď', active: 'low' },
  { symbol: 'Ag', name: 'striebro', active: 'low' },
  { symbol: 'Au', name: 'zlato', active: 'low' },
]

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo je oxidácia z hľadiska presunu elektrónov?',
    options: [
      'Prijímanie elektrónov a znižovanie oxidačného čísla',
      'Odovzdávanie elektrónov a zvyšovanie oxidačného čísla',
      'Prijímanie protónov z kyseliny',
      'Odovzdávanie protónov zásade',
    ],
    correctIndex: 1,
    explanation:
      'Oxidácia = odovzdávanie elektrónov = zvyšovanie oxidačného čísla. Látka, ktorá oxiduje, sa nazýva redukovadlo.',
  },
  {
    question: 'Aké oxidačné číslo má síra v H₂SO₄?',
    options: ['+IV', '+VI', '+II', '–II'],
    correctIndex: 1,
    explanation:
      'H(+1)×2 + S(x) + O(–2)×4 = 0 → 2 + x – 8 = 0 → x = +6. Síra má v H₂SO₄ oxidačné číslo +VI.',
  },
  {
    question: 'Ktorý kov z elektrochemického radu je najaktívnejší (najsilnejšie redukovadlo)?',
    options: ['Zlato (Au)', 'Meď (Cu)', 'Sodík (Na)', 'Železo (Fe)'],
    correctIndex: 2,
    explanation:
      'Na začiatku elektrochemického radu stojí sodík – je najaktívnejší, najľahšie odovzdáva elektróny. Zlato je na konci (najušľachtilejší kov).',
  },
  {
    question: 'Čo vzniká na katóde pri elektrolýze vodného roztoku NaCl?',
    options: ['Sodík (Na)', 'Chlór (Cl₂)', 'Kyslík (O₂)', 'Vodík (H₂)'],
    correctIndex: 3,
    explanation:
      'Pri elektrolýze roztoku NaCl sa na katóde redukuje voda: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Sodík sa nevylučuje, lebo Na⁺ je oveľa ťažšie redukovateľný ako H₂O.',
  },
  {
    question: 'Zinok ponorím do roztoku síranu meďnatého (CuSO₄). Čo sa stane?',
    options: [
      'Nič, meď je aktívnejšia ako zinok',
      'Zinok sa rozpustí a meď sa vylúči na jeho povrchu',
      'Oba kovy sa rovnomerne rozpustia',
      'Meď sa rozpustí a zinok sa vylúči',
    ],
    correctIndex: 1,
    explanation:
      'Zn je aktívnejší ako Cu (stojí vľavo v elektrochemickom rade). Zn → Zn²⁺ + 2e⁻ (oxidácia) a Cu²⁺ + 2e⁻ → Cu (redukcia). Meď sa vylúči na povrchu zinku.',
  },
  {
    question: 'Čo je oxidovadlo v reakcii: Fe + 2HCl → FeCl₂ + H₂?',
    options: ['Fe (železo)', 'Cl⁻ (chloridový ión)', 'H⁺ (vodíkový ión)', 'FeCl₂'],
    correctIndex: 2,
    explanation:
      'H⁺ prijíma elektróny (2H⁺ + 2e⁻ → H₂) – jeho oxidačné číslo klesá z +I na 0. H⁺ je teda oxidovadlo. Fe je redukovadlo (oxiduje sa z 0 na +II).',
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
