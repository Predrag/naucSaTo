<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/chemicke-reakcie" class="hover:text-orange-600 transition-colors">Chemické reakcie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Chemické rovnice a stechiometria</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚖️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Chemické rovnice a stechiometria</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10 leading-relaxed">
      Chemické rovnice sú „jazyk chémie" – umožňujú nám presne zapísať, čo sa pri chemickej reakcii deje.
      Stechiometria nás učí, v akých množstvách látky reagujú a vznikajú – základ každého laboratórneho aj priemyselného výpočtu.
    </p>

    <!-- Sekcia 1: Fyzikálne vs chemické zmeny -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">1. Fyzikálne vs chemické zmeny</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3 text-lg">Fyzikálna zmena</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5 font-bold">•</span>Chemické zloženie látky sa <strong>nemení</strong></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5 font-bold">•</span>Zmena skupenstva: topenie, tuhnutie, vyparovanie</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5 font-bold">•</span>Zmena tvaru alebo veľkosti</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5 font-bold">•</span>Väčšinou ľahko reverzibilná</li>
            <li class="flex items-start gap-2 mt-2"><span class="text-blue-600 font-semibold">Pr.:</span><span>Topenie ľadu → voda</span></li>
          </ul>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 class="font-bold text-orange-800 mb-3 text-lg">Chemická zmena (reakcia)</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-0.5 font-bold">•</span>Vznikajú <strong>nové látky</strong> s odlišnými vlastnosťami</li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-0.5 font-bold">•</span>Prejavuje sa svetlom, teplom, zmenou farby, plynom</li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-0.5 font-bold">•</span>Väčšinou ťažko reverzibilná</li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-0.5 font-bold">•</span>Atómy sa nezničia, len inak zoskupia</li>
            <li class="flex items-start gap-2 mt-2"><span class="text-orange-600 font-semibold">Pr.:</span><span>Horenie dreva, korózia železa</span></li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <p class="text-gray-700 leading-relaxed">
          Pri <strong>chemickej reakcii</strong> sa pôvodné látky – <strong>reaktanty</strong> (východiskové látky) –
          premieňajú na nové látky – <strong>produkty</strong>. Reaktanty zapisujeme na ľavú stranu rovnice,
          produkty na pravú stranu, oddelené šípkou.
        </p>
      </div>
    </section>

    <!-- Sekcia 2: Chemická rovnica a zákon zachovania hmotnosti -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">2. Chemická rovnica a zákon zachovania hmotnosti</h2>

      <div class="bg-orange-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-6">
        <h3 class="font-bold text-orange-800 mb-2">Zákon zachovania hmotnosti (Lomonosov–Lavoisier)</h3>
        <p class="text-gray-700 italic mb-2">
          „Celková hmotnosť reaktantov sa rovná celkovej hmotnosti produktov."
        </p>
        <p class="text-gray-700 text-sm">
          Počet atómov každého prvku musí byť na oboch stranách rovnice rovnaký.
          Hmota sa pri chemickej reakcii nevytvára ani nezaniká.
        </p>
      </div>

      <div class="mb-6">
        <h3 class="font-semibold text-gray-800 mb-3 text-lg">Stechiometrický koeficient a vyčísľovanie rovníc</h3>
        <p class="text-gray-700 mb-4">
          <strong>Stechiometrický koeficient</strong> je celé číslo pred chemickým vzorcom.
          Udáva, koľko <em>mólov</em> danej látky sa zúčastňuje reakcie.
          Koeficient 1 sa píše ako voľný (nezapisujeme ho).
        </p>

        <!-- Príklad 1 -->
        <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
          <p class="font-semibold text-orange-700 mb-3">Príklad 1: Syntéza vody</p>
          <div class="space-y-3 text-gray-700">
            <div>
              <p class="text-sm font-medium text-gray-500 mb-1">Nevyčíslená rovnica:</p>
              <div v-html="km('\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}')"/>
            </div>
            <div class="bg-orange-50 rounded-lg p-3">
              <p class="text-sm font-medium text-gray-500 mb-1">Vyčíslená rovnica:</p>
              <div v-html="km('2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}')"/>
            </div>
            <p class="text-sm text-gray-500">
              Kontrola: ľavá strana 4 atómy H, 2 atómy O &rarr; pravá strana 4 atómy H, 2 atómy O ✓
            </p>
          </div>
        </div>

        <!-- Príklad 2 -->
        <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
          <p class="font-semibold text-orange-700 mb-3">Príklad 2: Horenie metánu (zemný plyn)</p>
          <div class="bg-orange-50 rounded-lg p-3 mb-3">
            <div v-html="km('\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}')"/>
          </div>
          <div class="grid grid-cols-4 gap-3 text-center text-sm">
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="font-bold text-gray-800">C</p><p class="text-gray-600">1 = 1 ✓</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="font-bold text-gray-800">H</p><p class="text-gray-600">4 = 4 ✓</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="font-bold text-gray-800">O</p><p class="text-gray-600">4 = 4 ✓</p>
            </div>
            <div class="bg-green-50 rounded-lg p-2">
              <p class="font-bold text-green-700">Vyčíslená ✓</p>
            </div>
          </div>
        </div>

        <!-- Postup -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <h4 class="font-semibold text-gray-800 mb-3">Postup vyčísľovania rovníc</h4>
          <ol class="space-y-2 text-gray-700 text-sm">
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              Začni s najzložitejšou molekulou (najväčší počet rôznych prvkov)
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              Vyčísli prvky, ktoré sa nachádzajú len v jednej zlúčenine na každej strane
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              Kyslík a vodík vyčísľuj nakoniec
            </li>
            <li class="flex items-start gap-3">
              <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
              Skontroluj počty atómov všetkých prvkov na oboch stranách
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Sekcia 3: Typy chemických reakcií -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">3. Typy chemických reakcií</h2>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🔗</span>
            <h3 class="font-bold text-gray-800">Syntéza (zlučovanie)</h3>
          </div>
          <div class="mb-3 text-sm" v-html="km('\\text{A} + \\text{B} \\rightarrow \\text{AB}')"/>
          <p class="text-gray-600 text-sm">Dve alebo viac látok sa spájajú do jednej zlúčeniny.</p>
          <div class="mt-2 bg-gray-50 rounded-lg p-2 text-sm text-gray-700" v-html="km('2\\,\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\,\\text{NaCl}')"/>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">💥</span>
            <h3 class="font-bold text-gray-800">Rozklad (analýza)</h3>
          </div>
          <div class="mb-3 text-sm" v-html="km('\\text{AB} \\rightarrow \\text{A} + \\text{B}')"/>
          <p class="text-gray-600 text-sm">Jedna látka sa rozkladá na dve alebo viac jednoduchších.</p>
          <div class="mt-2 bg-gray-50 rounded-lg p-2 text-sm text-gray-700" v-html="km('2\\,\\text{HgO} \\rightarrow 2\\,\\text{Hg} + \\text{O}_2')"/>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🔄</span>
            <h3 class="font-bold text-gray-800">Substitúcia (jednoduchá)</h3>
          </div>
          <div class="mb-3 text-sm" v-html="km('\\text{A} + \\text{BC} \\rightarrow \\text{AC} + \\text{B}')"/>
          <p class="text-gray-600 text-sm">Aktívnejší prvok vytesní menej aktívny prvok z jeho zlúčeniny.</p>
          <div class="mt-2 bg-gray-50 rounded-lg p-2 text-sm text-gray-700" v-html="km('\\text{Zn} + 2\\,\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2')"/>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">⇄</span>
            <h3 class="font-bold text-gray-800">Dvojitá substitúcia</h3>
          </div>
          <div class="mb-3 text-sm" v-html="km('\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}')"/>
          <p class="text-gray-600 text-sm">Výmena katiónov medzi dvoma zlúčeninami (zrážacie reakcie).</p>
          <div class="mt-2 bg-gray-50 rounded-lg p-2 text-sm text-gray-700" v-html="km('\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3')"/>
        </div>
      </div>
    </section>

    <!-- Sekcia 4: Termochémia -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">4. Termochémia – tepelné efekty reakcií</h2>

      <!-- SVG energetický diagram -->
      <div class="flex justify-center mb-6">
        <figure class="w-full max-w-lg">
          <svg
            viewBox="0 0 480 310"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Energetický diagram exotermickej reakcie znázorňujúci reaktanty, aktivačnú energiu a produkty s vyznačeným ΔH"
            role="img"
            class="w-full h-auto rounded-xl border border-gray-200 bg-white"
          >
            <rect width="480" height="310" fill="#fff" rx="12"/>

            <!-- Grid lines -->
            <line x1="65" y1="60" x2="65" y2="275" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="65" y1="275" x2="425" y2="275" stroke="#e5e7eb" stroke-width="1"/>

            <!-- Axes -->
            <line x1="65" y1="25" x2="65" y2="275" stroke="#9ca3af" stroke-width="2"/>
            <polygon points="65,22 61,32 69,32" fill="#9ca3af"/>
            <line x1="65" y1="275" x2="430" y2="275" stroke="#9ca3af" stroke-width="2"/>
            <polygon points="433,275 423,271 423,279" fill="#9ca3af"/>

            <!-- Axis labels -->
            <text x="20" y="160" fill="#6b7280" font-size="11" font-family="sans-serif" text-anchor="middle" transform="rotate(-90 20 160)">Energia (kJ)</text>
            <text x="248" y="298" fill="#6b7280" font-size="11" font-family="sans-serif" text-anchor="middle">Priebeh reakcie →</text>

            <!-- Title -->
            <text x="248" y="18" fill="#374151" font-size="13" font-family="sans-serif" text-anchor="middle" font-weight="bold">Energetický diagram – exotermická reakcia</text>

            <!-- Reactants plateau -->
            <line x1="75" y1="145" x2="140" y2="145" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
            <text x="107" y="135" fill="#ea580c" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Reaktanty</text>

            <!-- Products plateau -->
            <line x1="335" y1="220" x2="420" y2="220" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
            <text x="377" y="238" fill="#16a34a" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Produkty</text>

            <!-- Reaction path curve -->
            <path
d="M 140,145 C 170,145 178,58 240,58 C 302,58 308,220 335,220"
              fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Activation energy peak marking -->
            <line x1="240" y1="58" x2="240" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
            <line x1="75" y1="145" x2="240" y2="145" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4" opacity="0.6"/>

            <!-- Ea brace/arrow -->
            <line x1="200" y1="58" x2="200" y2="145" stroke="#6366f1" stroke-width="1.5"/>
            <polygon points="200,56 196,66 204,66" fill="#6366f1"/>
            <polygon points="200,147 196,137 204,137" fill="#6366f1"/>
            <text x="155" y="98" fill="#4f46e5" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Eₐ</text>
            <text x="155" y="111" fill="#4f46e5" font-size="10" font-family="sans-serif" text-anchor="middle">(akt. energia)</text>

            <!-- ΔH arrow -->
            <line x1="450" y1="145" x2="450" y2="220" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="450,143 446,153 454,153" fill="#3b82f6"/>
            <polygon points="450,222 446,212 454,212" fill="#3b82f6"/>
            <text x="463" y="185" fill="#1d4ed8" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">ΔH</text>
            <text x="463" y="199" fill="#1d4ed8" font-size="10" font-family="sans-serif" text-anchor="middle">&lt; 0</text>

            <!-- Dashed level lines -->
            <line x1="140" y1="145" x2="450" y2="145" stroke="#f97316" stroke-width="1" stroke-dasharray="4,5" opacity="0.35"/>
            <line x1="75" y1="220" x2="450" y2="220" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,5" opacity="0.35"/>
          </svg>
          <figcaption class="text-center text-sm text-gray-500 mt-2">
            Exotermická reakcia: produkty majú nižšiu energiu ako reaktanty &rarr; energia sa uvoľní (ΔH &lt; 0)
          </figcaption>
        </figure>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-800 mb-3 text-lg">🔥 Exotermická reakcia</h3>
          <div class="mb-3" v-html="km('\\Delta H < 0')"/>
          <ul class="space-y-1.5 text-gray-700 text-sm">
            <li>• Teplo sa <strong>uvoľňuje</strong> do okolia</li>
            <li>• Produkty majú nižšiu energiu ako reaktanty</li>
            <li>• Príklady: horenie, neutralizácia, korózia</li>
          </ul>
          <div
class="mt-3 bg-red-100 rounded-lg p-3 text-sm overflow-x-auto"
            v-html="km('\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}')"/>
          <p class="text-xs text-red-700 mt-1 text-center">ΔH = −890 kJ/mol</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3 text-lg">❄️ Endotermická reakcia</h3>
          <div class="mb-3" v-html="km('\\Delta H > 0')"/>
          <ul class="space-y-1.5 text-gray-700 text-sm">
            <li>• Teplo sa <strong>pohlcuje</strong> z okolia</li>
            <li>• Produkty majú vyššiu energiu ako reaktanty</li>
            <li>• Príklady: fotosyntéza, rozklad uhličitanov</li>
          </ul>
          <div
class="mt-3 bg-blue-100 rounded-lg p-3 text-sm overflow-x-auto"
            v-html="km('\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2')"/>
          <p class="text-xs text-blue-700 mt-1 text-center">ΔH = +178 kJ/mol</p>
        </div>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h3 class="font-semibold text-gray-800 mb-2">1. termochemický zákon (Hessov zákon)</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          <em>Reakčné teplo nezávisí od toho, či reakcia prebehne v jednom kroku alebo vo viacerých krokoch.</em>
          Závisí len od počiatočného a konečného stavu systému.
          To umožňuje vypočítať reakčné teplo nepriamych reakcií pomocou známych entalpií.
        </p>
      </div>
    </section>

    <!-- Sekcia 5: Stechiometrické výpočty -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">5. Stechiometrické výpočty</h2>

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-800 mb-3">Základný vzorec: látkové množstvo</h3>
        <div class="text-center py-2 text-lg" v-html="km('n = \\dfrac{m}{M}')"/>
        <div class="grid grid-cols-3 gap-4 mt-4 text-center text-sm text-gray-700">
          <div class="bg-white rounded-lg p-3">
            <div v-html="km('n')"/>
            <p class="text-gray-500 mt-1">látkové množstvo [mol]</p>
          </div>
          <div class="bg-white rounded-lg p-3">
            <div v-html="km('m')"/>
            <p class="text-gray-500 mt-1">hmotnosť [g]</p>
          </div>
          <div class="bg-white rounded-lg p-3">
            <div v-html="km('M')"/>
            <p class="text-gray-500 mt-1">molárna hmotnosť [g/mol]</p>
          </div>
        </div>
        <p class="text-gray-700 text-sm mt-3 text-center">
          Stechiometrické koeficienty udávajú <strong>molárne pomery</strong> látok v reakcii.
        </p>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-4">
          📝 Príklad 3: Koľko gramov O<sub>2</sub> potrebujeme na spálenie 32 g CH<sub>4</sub>?
        </h3>
        <div class="space-y-4 text-gray-700">
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">1</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Rovnica reakcie (koeficienty: 1 : 2 : 1 : 2):</p>
              <div v-html="km('\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">2</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Látkové množstvo CH<sub>4</sub> (M = 12 + 4·1 = 16 g/mol):</p>
              <div v-html="km('n(\\text{CH}_4) = \\dfrac{m}{M} = \\dfrac{32\\,\\text{g}}{16\\,\\text{g/mol}} = 2\\,\\text{mol}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">3</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Stechiometrický pomer (1 mol CH<sub>4</sub> : 2 mol O<sub>2</sub>):</p>
              <div v-html="km('n(\\text{O}_2) = 2 \\times n(\\text{CH}_4) = 2 \\times 2\\,\\text{mol} = 4\\,\\text{mol}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">4</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Hmotnosť O<sub>2</sub> (M = 2·16 = 32 g/mol):</p>
              <div v-html="km('m(\\text{O}_2) = n \\times M = 4\\,\\text{mol} \\times 32\\,\\text{g/mol} = 128\\,\\text{g}')"/>
            </div>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 font-semibold text-orange-800">
            Výsledok: Na spálenie 32 g CH₄ potrebujeme 128 g O₂.
          </div>
        </div>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5">
        <h3 class="font-bold text-orange-700 mb-4">
          📝 Príklad 4: Koľko gramov NaCl vznikne reakciou 46 g Na s nadbytkom Cl<sub>2</sub>?
        </h3>
        <div class="space-y-4 text-gray-700">
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">1</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Rovnica reakcie:</p>
              <div v-html="km('2\\,\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\,\\text{NaCl}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">2</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Látkové množstvo Na (M = 23 g/mol):</p>
              <div v-html="km('n(\\text{Na}) = \\dfrac{46\\,\\text{g}}{23\\,\\text{g/mol}} = 2\\,\\text{mol}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">3</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Stechiometrický pomer (2 mol Na → 2 mol NaCl), teda 1:1:</p>
              <div v-html="km('n(\\text{NaCl}) = n(\\text{Na}) = 2\\,\\text{mol}')"/>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-1">4</span>
            <div class="flex-1">
              <p class="font-medium text-sm mb-1">Hmotnosť NaCl (M = 23 + 35,5 = 58,5 g/mol):</p>
              <div v-html="km('m(\\text{NaCl}) = 2\\,\\text{mol} \\times 58{,}5\\,\\text{g/mol} = 117\\,\\text{g}')"/>
            </div>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 font-semibold text-orange-800">
            Výsledok: Vznikne 117 g NaCl.
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-3">
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Chemická reakcia mení reaktanty na produkty; fyzikálna zmena nemení chemické zloženie látky</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Zákon zachovania hmotnosti: celkový počet atómov každého prvku je rovnaký na oboch stranách rovnice</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Stechiometrický koeficient udáva molárny pomer látok; koeficienty vždy uvádzame ako najmenšie celé čísla</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Exotermická reakcia: ΔH &lt; 0 (teplo sa uvoľňuje); endotermická: ΔH &gt; 0 (teplo sa pohlcuje)</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Typy reakcií: syntéza (A+B→AB), rozklad (AB→A+B), substitúcia, dvojitá substitúcia</span>
        </div>
        <div class="flex items-start gap-2">
          <span class="text-orange-500 font-bold mt-0.5 shrink-0">✓</span>
          <span class="text-gray-700 text-sm">Stechiometrický výpočet: n = m/M, potom použiť pomery koeficientov z vyčíslenej rovnice</span>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section>
      <h2 class="text-2xl font-bold text-orange-700 mb-6">🧠 Kvíz: Otestuj sa!</h2>
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1.5">
            <div
              v-for="(_, i) in quiz"
              :key="i"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="i < currentQ ? 'bg-orange-500' : i === currentQ ? 'bg-orange-300' : 'bg-gray-200'"
            />
          </div>
        </div>

        <Transition name="fade" mode="out-in">
          <!-- Active quiz -->
          <div v-if="!quizFinished" :key="currentQ">
            <p
              data-testid="quiz-question"
              class="text-lg font-semibold text-gray-800 mb-5 leading-relaxed"
              v-html="currentQuestion.question"
            />

            <div class="space-y-3 mb-6">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                :data-testid="`quiz-option-${i}`"
                type="button"
                class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium text-sm"
                :class="{
                  'border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700 cursor-pointer': selectedAnswer === null,
                  'border-green-400 bg-green-50 text-green-800 cursor-default': selectedAnswer !== null && i === currentQuestion.correctIndex,
                  'border-red-400 bg-red-50 text-red-800 cursor-default': selectedAnswer === i && i !== currentQuestion.correctIndex,
                  'border-gray-100 text-gray-400 opacity-50 cursor-default': selectedAnswer !== null && i !== currentQuestion.correctIndex && i !== selectedAnswer
                }"
                @click="selectAnswer(i)"
                v-html="option"
              />
            </div>

            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="quiz-feedback"
                class="mb-5 p-4 rounded-xl"
                :class="selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'"
              >
                <p
                  class="font-semibold mb-1"
                  :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-800' : 'text-red-800'"
                >
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✅ Správne!' : '❌ Nesprávne' }}
                </p>
                <p class="text-gray-700 text-sm leading-relaxed" v-html="currentQuestion.explanation"/>
              </div>
            </Transition>

            <button
              v-if="selectedAnswer !== null"
              data-testid="quiz-next-btn"
              type="button"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>

          <!-- Result -->
          <div v-else data-testid="quiz-result" class="text-center py-6">
            <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
            <p data-testid="quiz-score" class="text-lg text-gray-600 mb-6">
              Skóre: <strong class="text-orange-600">{{ quizScore }} / {{ quiz.length }}</strong>
            </p>
            <button
              data-testid="quiz-reset-btn"
              type="button"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
              @click="resetQuiz"
            >
              🔄 Skúsiť znova
            </button>
          </div>
        </Transition>
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
    question: 'Čo hovorí zákon zachovania hmotnosti?',
    options: [
      'Hmotnosť reaktantov je vždy väčšia ako hmotnosť produktov',
      'Celková hmotnosť reaktantov sa rovná celkovej hmotnosti produktov',
      'Pri chemickej reakcii vzniká nová hmota',
      'Hmotnosť závisí od teploty a tlaku reakcie'
    ],
    correctIndex: 1,
    explanation:
      'Zákon zachovania hmotnosti (Lomonosov–Lavoisier) hovorí, že hmota sa pri chemickej reakcii nevytvára ani nezaniká – celková hmotnosť reaktantov sa rovná celkovej hmotnosti produktov.'
  },
  {
    question: 'Čo vyjadruje stechiometrický koeficient v chemickej rovnici?',
    options: [
      'Atómovú hmotnosť prvku',
      'Počet protónov v jadre atómu',
      'Molárny pomer látok zúčastňujúcich sa reakcie',
      'Energiu potrebnú na spustenie reakcie'
    ],
    correctIndex: 2,
    explanation:
      'Stechiometrický koeficient je celé číslo pred chemickým vzorcom a udáva molárny pomer látok v reakcii. Napríklad koeficient 2 pred H₂O znamená, že vznikajú 2 móly vody.'
  },
  {
    question: 'Horenie magnézia na vzduchu (2 Mg + O₂ → 2 MgO) je príkladom ktorého typu reakcie?',
    options: [
      'Rozklad',
      'Dvojitá substitúcia',
      'Syntéza (zlučovanie)',
      'Jednoduchá substitúcia'
    ],
    correctIndex: 2,
    explanation:
      'Syntéza (zlučovanie) je reakcia, pri ktorej dve alebo viac látok reagujú za vzniku jednej novej zlúčeniny (schéma A + B → AB). Horenie magnézia je typickým príkladom – Mg a O₂ sa spájajú do MgO.'
  },
  {
    question: 'Pri exotermickej reakcii platí:',
    options: [
      `${km('\\Delta H > 0')} – teplo sa pohlcuje z okolia`,
      `${km('\\Delta H = 0')} – žiadna tepelná zmena',`,
      `${km('\\Delta H < 0')} – teplo sa uvoľňuje do okolia`,
      `${km('\\Delta H < 0')} – teplo sa pohlcuje z okolia`
    ],
    correctIndex: 2,
    explanation:
      'Exotermická reakcia uvoľňuje teplo do okolia, preto je reakčná entalpia záporná (ΔH < 0). Produkty majú nižšiu energiu ako reaktanty. Príklady: horenie, neutralizácia.'
  },
  {
    question: `Koľko mólov O₂ potrebujeme na spálenie 3 mol CH₄? Rovnica: ${km('\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}')}`,
    options: [
      '3 mol',
      '4 mol',
      '6 mol',
      '8 mol'
    ],
    correctIndex: 2,
    explanation:
      'Z rovnice vyplýva, že na 1 mol CH₄ sú potrebné 2 mol O₂ (pomer 1:2). Na 3 mol CH₄ teda potrebujeme 3 × 2 = 6 mol O₂.'
  },
  {
    question: `Koľko gramov H₂O vznikne reakciou 4 g H₂ s nadbytkom O₂? Rovnica: ${km('2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}')}  (M(H₂) = 2 g/mol, M(H₂O) = 18 g/mol)`,
    options: [
      '18 g',
      '32 g',
      '36 g',
      '72 g'
    ],
    correctIndex: 2,
    explanation:
      'n(H₂) = 4 g ÷ 2 g/mol = 2 mol. Z rovnice platí pomer 2 mol H₂ : 2 mol H₂O, teda n(H₂O) = 2 mol. Hmotnosť: m(H₂O) = 2 mol × 18 g/mol = 36 g.'
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

useSeoMeta({
  title: 'Chemické rovnice a stechiometria | Chémia | nauč sa to',
  description:
    'Naučte sa chemické rovnice, zákon zachovania hmotnosti, typy reakcií, termochémiu a stechiometrické výpočty. Interaktívny kvíz pre gymnazistov.'
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
