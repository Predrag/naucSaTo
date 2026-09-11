<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/geometria" class="hover:text-blue-600 transition-colors">Geometria a meranie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Stereometria</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-4 mb-6">
      <span class="text-5xl">🧊</span>
      <h1 class="text-4xl font-bold text-blue-700">Stereometria</h1>
    </div>

    <!-- Intro -->
    <p class="text-lg text-gray-600 mb-12 leading-relaxed">
      Stereometria je časť geometrie, ktorá sa zaoberá trojrozmernými telesami — ich objemom, povrchom, sieťami
      a vzájomnými polohami priamok a rovín v priestore. Stretávame sa s ňou pri výpočtoch objemu nádrží,
      plochy plechoviek alebo pri stavebníctve.
    </p>

    <!-- Section 1: Hranoly -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Hranolovité telesá</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        <strong>Hranol</strong> je teleso ohraničené dvoma rovnobežnými zhodnými základňami (mnohohranmi) a bočnými
        stenami, ktoré sú rovnobežníky. Špeciálnymi prípadmi sú kocka a kváder. Objem hranola sa vždy vypočíta
        ako obsah základne krát výška, objem ihlana je presne jedna tretina toho.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <!-- Kocka -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 class="font-bold text-blue-800 mb-4 text-lg">Kocka (strana <em>a</em>)</h3>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = a^3" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Povrch:</span>
              <MathFormula display formula="S = 6a^2" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Telesová uhlopriečka:</span>
              <MathFormula display formula="u = a\sqrt{3}" />
            </div>
          </div>
        </div>

        <!-- Kváder -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 class="font-bold text-blue-800 mb-4 text-lg">Kváder (strany <em>a</em>, <em>b</em>, <em>c</em>)</h3>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = abc" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Povrch:</span>
              <MathFormula display formula="S = 2(ab + bc + ac)" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Telesová uhlopriečka:</span>
              <MathFormula display formula="u = \sqrt{a^2 + b^2 + c^2}" />
            </div>
          </div>
        </div>

        <!-- Hranol -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 class="font-bold text-blue-800 mb-4 text-lg">Hranol</h3>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = S_{\text{základ}} \cdot v" />
            </div>
          </div>
          <p class="text-gray-500 text-sm mt-3">
            <MathFormula formula="S_{\text{základ}}" /> je obsah základne, <MathFormula formula="v" /> je výška hranola.
          </p>
        </div>

        <!-- Ihlan -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 class="font-bold text-blue-800 mb-4 text-lg">Ihlan (pravidelný)</h3>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = \frac{1}{3} \cdot S_{\text{základ}} \cdot v" />
            </div>
          </div>
          <p class="text-gray-500 text-sm mt-3">
            Objem ihlana je presne tretina objemu hranola s rovnakou základňou a výškou.
          </p>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-bold text-green-800 mb-3">Príklad 1: Objem a povrch akvária</h3>
        <p class="text-gray-700 mb-4">
          Akvárium má tvar kvádra s rozmermi <strong>80 cm × 40 cm × 50 cm</strong>.
          Koľko litrov vody pojme a aká plocha skla je potrebná (bez vrchnáka)?
        </p>
        <div class="space-y-3">
          <p class="text-gray-700 font-medium">Riešenie:</p>
          <p class="text-gray-600">a = 80 cm, b = 40 cm, c = 50 cm</p>
          <div>
            <p class="text-gray-600 text-sm mb-1">Objem:</p>
            <MathFormula display formula="V = abc = 80 \cdot 40 \cdot 50 = 160\,000 \text{ cm}^3 = 160 \text{ l}" />
          </div>
          <div>
            <p class="text-gray-600 text-sm mb-1">Povrch (5 stien, bez vrchnáka):</p>
            <MathFormula display formula="S = 2(ab + ac) + bc = 2(3200 + 4000) + 2000 = 16\,400 \text{ cm}^2 = 1{,}64 \text{ m}^2" />
          </div>
          <p class="text-green-700 font-medium">Akvárium pojme 160 litrov vody, sklo zaberá 1,64 m².</p>
        </div>
      </div>
    </section>

    <!-- Section 2: Rotačné telesá -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Rotačné telesá</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Rotačné telesá vznikajú otočením rovinného tvaru okolo osi symetrie. Medzi základné patria
        <strong>valec</strong> (rotácia obdĺžnika), <strong>kužeľ</strong> (rotácia pravouhlého trojuholníka)
        a <strong>guľa</strong> (rotácia polkruhu). Objem kužeľa je vždy tretina objemu valca s rovnakým
        polomerom a výškou.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <!-- Valec -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3 text-lg">Valec</h3>
          <p class="text-xs text-gray-500 mb-3">polomer <em>r</em>, výška <em>v</em></p>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = \pi r^2 v" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Povrch:</span>
              <MathFormula display formula="S = 2\pi r^2 + 2\pi r v" />
            </div>
            <p class="text-gray-500 text-xs">
              = <MathFormula formula="2\pi r(r + v)" />
            </p>
          </div>
        </div>

        <!-- Kužeľ -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3 text-lg">Kužeľ</h3>
          <p class="text-xs text-gray-500 mb-3">polomer <em>r</em>, výška <em>v</em>, tvornica <em>l</em></p>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = \frac{1}{3}\pi r^2 v" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Tvornica:</span>
              <MathFormula display formula="l = \sqrt{r^2 + v^2}" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Povrch:</span>
              <MathFormula display formula="S = \pi r^2 + \pi r l" />
            </div>
          </div>
        </div>

        <!-- Guľa -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3 text-lg">Guľa</h3>
          <p class="text-xs text-gray-500 mb-3">polomer <em>r</em></p>
          <div class="space-y-3">
            <div>
              <span class="text-gray-600 text-sm">Objem:</span>
              <MathFormula display formula="V = \frac{4}{3}\pi r^3" />
            </div>
            <div>
              <span class="text-gray-600 text-sm">Povrch:</span>
              <MathFormula display formula="S = 4\pi r^2" />
            </div>
          </div>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 class="font-bold text-green-800 mb-3">Príklad 2: Povrch a objem plechovky</h3>
        <p class="text-gray-700 mb-4">
          Plechovka nápoja má tvar valca s priemerom <strong>6,6 cm</strong> a výškou <strong>11,5 cm</strong>.
          Aká plocha plechu je potrebná na jej výrobu a koľko mililitrov pojme?
        </p>
        <div class="space-y-3">
          <p class="text-gray-700 font-medium">Riešenie:</p>
          <p class="text-gray-600">r = 3,3 cm, v = 11,5 cm</p>
          <div>
            <p class="text-gray-600 text-sm mb-1">Povrch (plocha plechu):</p>
            <MathFormula display formula="S = 2\pi r^2 + 2\pi r v = 2\pi \cdot 3{,}3^2 + 2\pi \cdot 3{,}3 \cdot 11{,}5" />
            <MathFormula display formula="S \approx 68{,}4 + 238{,}4 \approx 306{,}8 \text{ cm}^2" />
          </div>
          <div>
            <p class="text-gray-600 text-sm mb-1">Objem:</p>
            <MathFormula display formula="V = \pi r^2 v = \pi \cdot 10{,}89 \cdot 11{,}5 \approx 393{,}6 \text{ cm}^3 = 393{,}6 \text{ ml}" />
          </div>
          <p class="text-green-700 font-medium">Plech zaberá ≈ 306,8 cm², plechovka pojme ≈ 394 ml (reálne plechovky majú 330 nebo 500 ml — rozdiel je daný hrúbkou stien).</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Siete telies + SVG -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Siete telies</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Sieť telesa je rovinný tvar, ktorý po zložení vytvorí dané teleso. Siete nám pomáhajú pochopiť,
        z akých plôch sa povrch skladá, a odvodiť vzorce pre výpočet povrchu. Každé teleso môže mať viacero
        rôznych sietí.
      </p>

      <!-- SVG illustration -->
      <div class="flex justify-center mb-8">
        <svg
          role="img"
          aria-label="Siete troch telies: kocky zo 6 štvorcov, valca z obdĺžnika a dvoch kruhov, kužeľa z výseku a kruhu"
          viewBox="0 0 720 310"
          class="w-full max-w-2xl rounded-2xl border border-blue-100 bg-blue-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Header -->
          <text x="360" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af" font-family="sans-serif">Siete telies</text>

          <!-- ===== KOCKA ===== -->
          <!-- Cross-shaped net: top, left, front, right, far-right, bottom -->
          <!-- Top face -->
          <rect x="70" y="45" width="56" height="56" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- Left face -->
          <rect x="14" y="101" width="56" height="56" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- Front face -->
          <rect x="70" y="101" width="56" height="56" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- Right face -->
          <rect x="126" y="101" width="56" height="56" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- Far-right face -->
          <rect x="182" y="101" width="56" height="56" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- Bottom face -->
          <rect x="70" y="157" width="56" height="56" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>

          <!-- Dimension label -->
          <line x1="70" y1="224" x2="126" y2="224" stroke="#6b7280" stroke-width="1" marker-end="url(#arr)"/>
          <line x1="126" y1="224" x2="70" y2="224" stroke="#6b7280" stroke-width="1" marker-end="url(#arr2)"/>
          <text x="98" y="237" text-anchor="middle" font-size="11" fill="#4b5563" font-style="italic" font-family="sans-serif">a</text>

          <!-- Cube title -->
          <text x="112" y="262" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af" font-family="sans-serif">Kocka</text>
          <text x="112" y="276" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">6 štvorcov, strana a</text>

          <!-- Divider 1 -->
          <line x1="255" y1="35" x2="255" y2="285" stroke="#c7d2fe" stroke-width="1" stroke-dasharray="5,3"/>

          <!-- ===== VALEC ===== -->
          <!-- Lateral rectangle: width=2πr≈126, height=v=80 -->
          <rect x="275" y="95" width="126" height="80" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="1"/>
          <!-- width label -->
          <text x="338" y="89" text-anchor="middle" font-size="10" fill="#4b5563" font-family="sans-serif">2πr</text>
          <!-- height label -->
          <text x="410" y="138" text-anchor="start" font-size="10" fill="#4b5563" font-family="sans-serif" transform="translate(0,0)"> v</text>
          <!-- vertical brace for height -->
          <line x1="407" y1="95" x2="407" y2="175" stroke="#6b7280" stroke-width="1"/>

          <!-- Top circle -->
          <ellipse cx="338" cy="75" rx="30" ry="12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="338" y="78" text-anchor="middle" font-size="10" fill="#1e40af" font-family="sans-serif" font-style="italic">r</text>
          <!-- dashed connections circle→rect top -->
          <line x1="308" y1="75" x2="275" y2="95" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3,2"/>
          <line x1="368" y1="75" x2="401" y2="95" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3,2"/>

          <!-- Bottom circle -->
          <ellipse cx="338" cy="195" rx="30" ry="12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="338" y="198" text-anchor="middle" font-size="10" fill="#1e40af" font-family="sans-serif" font-style="italic">r</text>
          <!-- dashed connections circle→rect bottom -->
          <line x1="308" y1="195" x2="275" y2="175" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3,2"/>
          <line x1="368" y1="195" x2="401" y2="175" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3,2"/>

          <!-- Cylinder title -->
          <text x="338" y="230" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af" font-family="sans-serif">Valec</text>
          <text x="338" y="244" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">2 kruhy + obdĺžnik</text>

          <!-- Divider 2 -->
          <line x1="455" y1="35" x2="455" y2="285" stroke="#c7d2fe" stroke-width="1" stroke-dasharray="5,3"/>

          <!-- ===== KUŽEĽ ===== -->
          <!-- Sector approximation: center at (590,175), radius 115, arc from -60° to +30° approx -->
          <!-- Let's draw a proper sector for cone net -->
          <!-- Center of sector at (590, 200), radius l=110 -->
          <!-- Arc from angle -100° to -10° (approx representing slant height sector) -->
          <path
            d="M 590 195 L 500 148 A 105 105 0 0 1 680 130 Z"
            fill="#bfdbfe"
            stroke="#1d4ed8"
            stroke-width="1.5"
          />
          <!-- label l on slant left -->
          <text x="535" y="165" text-anchor="middle" font-size="10" fill="#1e40af" font-family="sans-serif" font-style="italic">l</text>
          <!-- label l on slant right -->
          <text x="645" y="155" text-anchor="middle" font-size="10" fill="#1e40af" font-family="sans-serif" font-style="italic">l</text>
          <!-- arc label -->
          <text x="590" y="120" text-anchor="middle" font-size="10" fill="#4b5563" font-family="sans-serif">výsek (πrl)</text>

          <!-- Base circle of cone -->
          <ellipse cx="590" cy="222" rx="34" ry="13" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="590" y="225" text-anchor="middle" font-size="10" fill="#1e40af" font-family="sans-serif" font-style="italic">r</text>
          <!-- dashed line sector→base circle -->
          <line x1="590" y1="195" x2="590" y2="209" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3,2"/>

          <!-- Cone title -->
          <text x="590" y="254" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af" font-family="sans-serif">Kužeľ</text>
          <text x="590" y="268" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">kruh + výsek (polomer = l)</text>
        </svg>
      </div>

      <p class="text-gray-600 text-sm text-center mb-6">
        Tvornica <MathFormula formula="l" /> kužeľa tvorí polomer výseku v sieti.
        Obvod kružnice výseku sa rovná obvodu podstavy kužeľa.
      </p>
    </section>

    <!-- Section 4: Vzájomná poloha -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Vzájomná poloha priamok a rovín v priestore</h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Na rozdiel od roviny, v priestore sa dve priamky nemusia ani pretínať, ani byť rovnobežné —
        môžu byť <strong>mimobežné</strong>. Takéto priamky neleží v spoločnej rovine a nemajú spoločný bod.
        Príkladom sú hrany kocky, ktoré na seba nenadväzujú.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <!-- Priamky -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-4">Vzájomná poloha dvoch priamok</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex gap-3">
              <span class="text-blue-500 font-bold mt-0.5">1.</span>
              <div>
                <strong>Totožné</strong> — splývajú v jednu priamku
              </div>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500 font-bold mt-0.5">2.</span>
              <div>
                <strong>Rovnobežné</strong> — ležia v jednej rovine, nemajú spoločný bod
              </div>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500 font-bold mt-0.5">3.</span>
              <div>
                <strong>Rôznobežné</strong> — ležia v jednej rovine, majú práve jeden spoločný bod
              </div>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-500 font-bold mt-0.5">4.</span>
              <div>
                <strong>Mimobežné</strong> — neleží v jednej rovine, nemajú spoločný bod
                <span class="block text-sm text-gray-500 mt-1">Napr. horná predná hrana kocky a pravá zadná hrana</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Roviny -->
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 class="font-bold text-blue-800 mb-3">Priamka a rovina</h3>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li class="flex gap-2"><span class="text-blue-400">•</span> Priamka <strong>leží v rovine</strong></li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> Priamka je <strong>rovnobežná</strong> s rovinou — nemajú spoločný bod</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> Priamka <strong>pretína</strong> rovinu — jeden spoločný bod</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> Priamka je <strong>kolmá</strong> na rovinu — špeciálny prípad pretínania</li>
            </ul>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 class="font-bold text-blue-800 mb-3">Dve roviny</h3>
            <ul class="space-y-2 text-gray-700 text-sm">
              <li class="flex gap-2"><span class="text-blue-400">•</span> <strong>Totožné</strong> — splývajú</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> <strong>Rovnobežné</strong> — nemajú spoločný bod</li>
              <li class="flex gap-2"><span class="text-blue-400">•</span> <strong>Rôznobežné</strong> — pretnú sa v priamke (os priesečníka)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie vzorcov</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Hranolovité telesá</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>
              <span class="font-medium">Kocka (strana a):</span>
              <MathFormula formula="V = a^3" />,
              <MathFormula formula="S = 6a^2" />,
              <MathFormula formula="u = a\sqrt{3}" />
            </li>
            <li>
              <span class="font-medium">Kváder (a,b,c):</span>
              <MathFormula formula="V = abc" />,
              <MathFormula formula="S = 2(ab+bc+ac)" />
            </li>
            <li>
              <span class="font-medium">Hranol:</span>
              <MathFormula formula="V = S_z \cdot v" />
            </li>
            <li>
              <span class="font-medium">Ihlan:</span>
              <MathFormula formula="V = \tfrac{1}{3} S_z \cdot v" />
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-3">Rotačné telesá</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>
              <span class="font-medium">Valec:</span>
              <MathFormula formula="V = \pi r^2 v" />,
              <MathFormula formula="S = 2\pi r(r+v)" />
            </li>
            <li>
              <span class="font-medium">Kužeľ (tvornica </span><MathFormula formula="l = \sqrt{r^2+v^2}" /><span class="font-medium">):</span>
              <MathFormula formula="V = \tfrac{1}{3}\pi r^2 v" />,
              <MathFormula formula="S = \pi r(r+l)" />
            </li>
            <li>
              <span class="font-medium">Guľa:</span>
              <MathFormula formula="V = \tfrac{4}{3}\pi r^3" />,
              <MathFormula formula="S = 4\pi r^2" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Kvíz -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Kvíz: Otestuj sa</h2>

      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
        <Transition name="fade" mode="out-in">
          <!-- Quiz in progress -->
          <div v-if="!quizFinished" :key="currentQ">
            <div data-testid="quiz-progress" class="flex justify-between items-center mb-4">
              <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
              <span class="text-sm font-medium text-blue-600">{{ quizScore }} bodov</span>
            </div>

            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-6">
              <div
                class="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
              />
            </div>

            <p data-testid="question" class="text-lg font-medium text-gray-800 mb-6">
              {{ currentQuestion.question }}
            </p>

            <div class="space-y-3 mb-6">
              <button
                v-for="(option, i) in currentQuestion.options"
                :key="i"
                :data-testid="`option-${i}`"
                type="button"
                :disabled="selectedAnswer !== null"
                :class="[
                  'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200',
                  selectedAnswer === null
                    ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                    : selectedAnswer === i
                      ? i === currentQuestion.correctIndex
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-400 bg-red-50 text-red-800'
                      : i === currentQuestion.correctIndex
                        ? 'border-green-400 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-400 cursor-default',
                ]"
                @click="selectAnswer(i)"
              >
                <span class="font-medium mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
                {{ option }}
              </button>
            </div>

            <Transition name="fade">
              <div
                v-if="selectedAnswer !== null"
                data-testid="feedback"
                :class="[
                  'rounded-xl p-4 mb-4 text-sm',
                  selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800',
                ]"
              >
                <span class="font-medium">
                  {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
                </span>
                {{ currentQuestion.explanation }}
              </div>
            </Transition>

            <button
              v-if="selectedAnswer !== null"
              data-testid="next-btn"
              type="button"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
              @click="nextQuestion"
            >
              {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
            </button>
          </div>

          <!-- Quiz result -->
          <div v-else data-testid="result" class="text-center py-8">
            <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
            <p data-testid="score" class="text-gray-600 mb-6">
              Získal si <strong>{{ quizScore }}</strong> z <strong>{{ quiz.length }}</strong> bodov
            </p>
            <button
              data-testid="reset-btn"
              type="button"
              class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-xl transition-colors duration-200"
              @click="resetQuiz"
            >
              Skúsiť znova
            </button>
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aký je objem kocky so stranou a = 4 cm?',
    options: ['48 cm³', '64 cm³', '96 cm³', '16 cm³'],
    correctIndex: 1,
    explanation: 'V = a³ = 4³ = 64 cm³. Objem kocky je kocka dĺžky strany.',
  },
  {
    question: 'Kváder má rozmery a = 3 cm, b = 4 cm, c = 5 cm. Aký je jeho povrch?',
    options: ['94 cm²', '60 cm²', '47 cm²', '120 cm²'],
    correctIndex: 0,
    explanation: 'S = 2(ab + bc + ac) = 2(12 + 20 + 15) = 2 · 47 = 94 cm².',
  },
  {
    question: 'Čo je tvornica kužeľa (l)?',
    options: [
      'Výška kužeľa meraná od vrcholu kolmo na podstavu',
      'Polomer podstavy kužeľa',
      'Úsečka spájajúca vrchol kužeľa s bodom na kružnici podstavy',
      'Obvod podstavy kužeľa',
    ],
    correctIndex: 2,
    explanation: 'Tvornica l je úsečka od vrcholu kužeľa k ľubovoľnému bodu kružnice podstavy. Platí l = √(r² + v²) podľa Pytagorovej vety.',
  },
  {
    question: 'Valec má polomer r = 3 cm a výšku v = 10 cm. Aký je jeho objem?',
    options: ['90π cm³', '30π cm³', '180π cm³', '9π cm³'],
    correctIndex: 0,
    explanation: 'V = πr²v = π · 3² · 10 = π · 9 · 10 = 90π ≈ 282,7 cm³.',
  },
  {
    question: 'Guľa má polomer r = 6 cm. Aký je jej povrch?',
    options: ['36π cm²', '144π cm²', '288π cm²', '72π cm²'],
    correctIndex: 1,
    explanation: 'S = 4πr² = 4π · 6² = 4π · 36 = 144π ≈ 452,4 cm².',
  },
  {
    question: 'Aká je vzájomná poloha dvoch priamok, ktoré neleží v spoločnej rovine a nemajú spoločný bod?',
    options: ['Rovnobežné', 'Rôznobežné', 'Mimobežné', 'Totožné'],
    correctIndex: 2,
    explanation: 'Mimobežné priamky neleží v spoločnej rovine a nemajú žiadny spoločný bod. Príklad: protľahlé hrany kocky, ktoré na seba nenadväzujú.',
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
