<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/optika" class="hover:text-emerald-600 transition-colors">Optika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Šošovky a optické prístroje</span>
    </nav>

    <!-- Header -->
    <div class="bg-orange-500 rounded-2xl p-8 mb-10 text-white">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-4xl">🔬</span>
        <h1 class="text-3xl font-extrabold">Šošovky a optické prístroje</h1>
      </div>
      <p class="text-orange-100 text-lg">Optika · Gymnázium</p>
    </div>

    <!-- Intro -->
    <p class="text-gray-700 text-lg mb-10 leading-relaxed">
      Šošovky sú optické prvky, ktoré lámu svetlo a umožňujú vytvárať obrazy predmetov.
      Nájdeme ich v okuliaroch, mikroskopoch, ďalekohľadoch, fotoaparátoch aj v ľudskom oku.
      Pochopenie ich princípu je základom celej zobrazujúcej optiky.
    </p>

    <!-- ── Section 1: Typy šošoviek ──────────────────────────────────────────── -->
    <section aria-label="Typy šošoviek" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-orange-400 pb-2">
        1. Typy šošoviek
      </h2>

      <p class="text-gray-700 mb-5">
        Šošovka je opticky transparentné teleso ohraničené dvoma (spravidla guľovými) plochami.
        Podľa tvaru rozlišujeme dva základné typy — spojnú a rozptylnú.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Spojná šošovka -->
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔎</span>
            <h3 class="text-xl font-bold text-orange-800">Spojná (konvexná) šošovka</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-3">
            V strede je <strong>hrubšia</strong> ako na okrajoch. Zbieha rovnobežné lúče do
            <strong>ohniska F</strong> na druhej strane šošovky.
          </p>
          <div class="bg-white rounded-lg p-3 text-center mb-3">
            <MathFormula display formula="f > 0" />
          </div>
          <!-- SVG spojná šošovka -->
          <svg viewBox="0 0 220 120" class="w-full" aria-label="Spojná šošovka zbieha lúče do ohniska">
            <defs>
              <marker id="arr-s1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#EA580C"/>
              </marker>
              <marker id="arr-s2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#EA580C"/>
              </marker>
              <marker id="arr-s3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#EA580C"/>
              </marker>
            </defs>
            <!-- Optická os -->
            <line x1="10" y1="60" x2="210" y2="60" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4,3"/>
            <!-- Šošovka — konvexný tvar -->
            <path d="M 108,20 Q 128,60 108,100 Q 88,60 108,20 Z" fill="#FED7AA" stroke="#EA580C" stroke-width="2"/>
            <!-- Lúče prichádzajú -->
            <line x1="10" y1="30" x2="106" y2="30" stroke="#EA580C" stroke-width="2" marker-end="url(#arr-s1)"/>
            <line x1="10" y1="60" x2="106" y2="60" stroke="#EA580C" stroke-width="2" marker-end="url(#arr-s2)"/>
            <line x1="10" y1="90" x2="106" y2="90" stroke="#EA580C" stroke-width="2" marker-end="url(#arr-s3)"/>
            <!-- Lúče sa zbieha do ohniska -->
            <line x1="110" y1="30" x2="165" y2="60" stroke="#EA580C" stroke-width="2"/>
            <line x1="110" y1="60" x2="165" y2="60" stroke="#EA580C" stroke-width="2"/>
            <line x1="110" y1="90" x2="165" y2="60" stroke="#EA580C" stroke-width="2"/>
            <!-- Ohnisko F -->
            <circle cx="165" cy="60" r="4" fill="#EA580C"/>
            <text x="170" y="56" fill="#EA580C" font-size="12" font-weight="bold">F</text>
          </svg>
          <p class="text-xs text-orange-700 mt-2">Využitie: lupa, objektív mikroskopu, okuliar ďalekohľadu, korekcia ďalekozrakosti</p>
        </div>

        <!-- Rozptylná šošovka -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔵</span>
            <h3 class="text-xl font-bold text-blue-800">Rozptylná (konkávna) šošovka</h3>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed mb-3">
            V strede je <strong>tenšia</strong> ako na okrajoch. Rozptyľuje rovnobežné lúče — zdajú sa
            vychádzať z <strong>zdanlivého ohniska</strong> na tej istej strane ako dopadajúce svetlo.
          </p>
          <div class="bg-white rounded-lg p-3 text-center mb-3">
            <MathFormula display formula="f < 0" />
          </div>
          <!-- SVG rozptylná šošovka -->
          <svg viewBox="0 0 220 120" class="w-full" aria-label="Rozptylná šošovka rozptyľuje lúče">
            <defs>
              <marker id="arr-r1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#2563EB"/>
              </marker>
              <marker id="arr-r2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#2563EB"/>
              </marker>
              <marker id="arr-r3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                <polygon points="0 0,7 2.5,0 5" fill="#2563EB"/>
              </marker>
            </defs>
            <!-- Optická os -->
            <line x1="10" y1="60" x2="210" y2="60" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="4,3"/>
            <!-- Šošovka — konkávny tvar -->
            <path d="M 100,20 Q 115,60 100,100 Q 85,60 100,20 Z" fill="none" stroke="#2563EB" stroke-width="2"/>
            <path d="M 116,20 Q 101,60 116,100 Q 131,60 116,20 Z" fill="none" stroke="#2563EB" stroke-width="2"/>
            <path d="M 100,20 Q 115,60 100,100 L 116,100 Q 101,60 116,20 Z" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
            <!-- Lúče prichádzajú -->
            <line x1="10" y1="30" x2="98" y2="30" stroke="#2563EB" stroke-width="2" marker-end="url(#arr-r1)"/>
            <line x1="10" y1="60" x2="98" y2="60" stroke="#2563EB" stroke-width="2" marker-end="url(#arr-r2)"/>
            <line x1="10" y1="90" x2="98" y2="90" stroke="#2563EB" stroke-width="2" marker-end="url(#arr-r3)"/>
            <!-- Lúče sa rozptyľujú -->
            <line x1="118" y1="30" x2="205" y2="15" stroke="#2563EB" stroke-width="2"/>
            <line x1="118" y1="60" x2="205" y2="60" stroke="#2563EB" stroke-width="2"/>
            <line x1="118" y1="90" x2="205" y2="105" stroke="#2563EB" stroke-width="2"/>
            <!-- Zdanlivé ohnisko F' -->
            <circle cx="55" cy="60" r="4" fill="none" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="3,2"/>
            <text x="36" y="56" fill="#2563EB" font-size="12" font-weight="bold">F'</text>
            <!-- Predĺženia lúčov (bodkované) -->
            <line x1="118" y1="30" x2="57" y2="60" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,3"/>
            <line x1="118" y1="90" x2="57" y2="60" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="4,3"/>
          </svg>
          <p class="text-xs text-blue-700 mt-2">Využitie: korekcia krátkozrakosti, okuliar Galileovho ďalekohľadu</p>
        </div>

      </div>

      <!-- Parametre šošovky -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h3 class="font-bold text-gray-900 mb-4">Základné pojmy</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div v-for="pojom in parametre" :key="pojom.symbol" class="bg-white rounded-xl p-4 flex items-start gap-3 border border-gray-100">
            <div class="bg-orange-100 rounded-lg px-2 py-1 text-center min-w-10">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span class="text-orange-800 text-sm font-mono font-bold" v-html="km(pojom.symbol)" />
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">{{ pojom.nazov }}</p>
              <p class="text-gray-500 text-xs mt-0.5">{{ pojom.popis }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 2: Zobrazovacia rovnica ───────────────────────────────────── -->
    <section aria-label="Zobrazovacia rovnica šošovky" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-orange-400 pb-2">
        2. Zobrazovacia rovnica a zväčšenie
      </h2>

      <p class="text-gray-700 mb-5">
        Pomocou zobrazovacej rovnice určíme, kde a ako veľký bude obraz predmetu za šošovkou.
        Platí pre tenké šošovky (hrúbka zanedbateľná oproti ostatným rozmerom).
      </p>

      <!-- Hlavné vzorce -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h3 class="font-bold text-orange-800 mb-3">Zobrazovacia rovnica</h3>
          <div class="bg-white rounded-xl p-4 text-center mb-3">
            <MathFormula display formula="\frac{1}{f} = \frac{1}{a} + \frac{1}{b}" />
          </div>
          <div class="text-sm text-gray-700 space-y-1">
            <p><MathFormula formula="f" /> — ohnisková vzdialenosť (m)</p>
            <p><MathFormula formula="a" /> — vzdialenosť predmetu od šošovky (m)</p>
            <p><MathFormula formula="b" /> — vzdialenosť obrazu od šošovky (m)</p>
          </div>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Zväčšenie</h3>
          <div class="bg-white rounded-xl p-4 text-center mb-3">
            <MathFormula display formula="z = \frac{b}{a}" />
          </div>
          <div class="text-sm text-gray-700 space-y-1">
            <p><span class="font-medium">z &gt; 0</span> — zdanlivý (vzpriamený) obraz</p>
            <p><span class="font-medium">z &lt; 0</span> — reálny (obrátený) obraz</p>
            <p><span class="font-medium">|z| &gt; 1</span> — zväčšený obraz</p>
            <p><span class="font-medium">|z| &lt; 1</span> — zmenšený obraz</p>
          </div>
        </div>
      </div>

      <!-- Konvencie znamienok -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-yellow-800 mb-3">⚠ Konvencie znamienok</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
          <div class="bg-white rounded-lg p-3 border border-yellow-100">
            <p class="font-semibold mb-1">Ohnisková vzdialenosť f</p>
            <p><MathFormula formula="f > 0" /> — spojná šošovka</p>
            <p><MathFormula formula="f < 0" /> — rozptylná šošovka</p>
          </div>
          <div class="bg-white rounded-lg p-3 border border-yellow-100">
            <p class="font-semibold mb-1">Vzdialenosť obrazu b</p>
            <p><MathFormula formula="b > 0" /> — reálny obraz (za šošovkou)</p>
            <p><MathFormula formula="b < 0" /> — zdanlivý obraz (pred šošovkou)</p>
          </div>
          <div class="bg-white rounded-lg p-3 border border-yellow-100">
            <p class="font-semibold mb-1">Vzdialenosť predmetu a</p>
            <p><MathFormula formula="a > 0" /> — predmet pred šošovkou</p>
            <p class="text-gray-400 text-xs mt-1">(bežný prípad)</p>
          </div>
        </div>
      </div>

      <!-- Príklady výpočtu -->
      <div class="space-y-4">
        <!-- Príklad 1 -->
        <div class="bg-green-50 border border-green-300 rounded-xl p-5">
          <h4 class="font-bold text-green-800 mb-2">Príklad 1 — Reálny obraz (spojná šošovka)</h4>
          <p class="text-gray-700 mb-3 text-sm">
            Predmet stojí <MathFormula formula="a = 30\,\text{cm}" /> pred spojnou šošovkou
            s ohniskovou vzdialenosťou <MathFormula formula="f = 10\,\text{cm}" />.
            Kde vznikne obraz? Aké je zväčšenie?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-gray-700 text-sm">
            <p>Zo zobrazovacej rovnice vyjadríme <MathFormula formula="b" />:</p>
            <MathFormula display formula="\frac{1}{b} = \frac{1}{f} - \frac{1}{a} = \frac{1}{10} - \frac{1}{30} = \frac{3 - 1}{30} = \frac{2}{30}" />
            <MathFormula display formula="b = 15\,\text{cm}" />
            <MathFormula display formula="z = \frac{b}{a} = \frac{15}{30} = 0{,}5 \quad \Rightarrow \text{ zmenšený, reálny obraz}" />
            <p class="text-green-800 font-semibold">Obraz je skutočný, obrátený, zmenšený — 15 cm za šošovkou.</p>
          </div>
        </div>

        <!-- Príklad 2 -->
        <div class="bg-green-50 border border-green-300 rounded-xl p-5">
          <h4 class="font-bold text-green-800 mb-2">Príklad 2 — Zdanlivý obraz (predmet medzi F a šošovkou)</h4>
          <p class="text-gray-700 mb-3 text-sm">
            Predmet stojí <MathFormula formula="a = 6\,\text{cm}" /> pred spojnou šošovkou
            s <MathFormula formula="f = 10\,\text{cm}" />. Kde a aký je obraz?
          </p>
          <div class="bg-white rounded-lg p-4 space-y-2 text-gray-700 text-sm">
            <MathFormula display formula="\frac{1}{b} = \frac{1}{10} - \frac{1}{6} = \frac{3 - 5}{30} = -\frac{2}{30}" />
            <MathFormula display formula="b = -15\,\text{cm}" />
            <MathFormula display formula="z = \frac{-15}{6} = -2{,}5 \quad \Rightarrow |z| > 1 \text{ — zväčšený zdanlivý obraz}" />
            <p class="text-green-800 font-semibold">Obraz je zdanlivý, vzpriamený, 2,5× zväčšený — vzniká pred šošovkou (princíp lupy!).</p>
          </div>
        </div>
      </div>

      <!-- Polohy predmetu + charakter obrazu -->
      <div class="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th scope="col" class="text-left px-4 py-3 font-semibold">Poloha predmetu</th>
              <th scope="col" class="text-left px-4 py-3 font-semibold">Charakter obrazu</th>
              <th scope="col" class="text-left px-4 py-3 font-semibold">Príklad použitia</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in obrazyTable" :key="row.poloha" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-4 py-3 text-gray-800 font-medium">{{ row.poloha }}</td>
              <td class="px-4 py-3 text-gray-700">{{ row.charakter }}</td>
              <td class="px-4 py-3 text-orange-700 text-xs">{{ row.priklad }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ── Section 3: Ľudské oko a chyby zraku ───────────────────────────────── -->
    <section aria-label="Ľudské oko a chyby zraku" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-orange-400 pb-2">
        3. Ľudské oko a chyby zraku
      </h2>

      <p class="text-gray-700 mb-5">
        Ľudské oko funguje na princípe spojnej šošovky — biologická šošovka za rohovkou premietá
        obraz na <strong>sietnicu</strong> (svetlocitlivú vrstvu na zadnej stene oka).
        Mozog potom spracováva signály z fotoreceptorov.
      </p>

      <!-- Akomodácia -->
      <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-orange-800 mb-3">Akomodácia</h3>
        <p class="text-gray-700 text-sm mb-3">
          Oko prispôsobuje ohniskovú vzdialenosť šošovky zmenou jej tvaru (ciliárne svaly).
          Tento proces sa nazýva <strong>akomodácia</strong>. Zdravé oko vidí ostro od ~25 cm
          (konvenčná vzdialenosť zreteľného videnia <MathFormula formula="d_0 = 25\,\text{cm}" />)
          až do nekonečna.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <p class="font-semibold text-sm mb-1">Blízky predmet</p>
            <p class="text-xs text-gray-600">Svaly sa stiahnu → šošovka sa vyklenutí → f sa zmenší → lúče sa zbieha skôr</p>
          </div>
          <div class="bg-white rounded-lg p-3 border border-orange-100">
            <p class="font-semibold text-sm mb-1">Vzdialený predmet</p>
            <p class="text-xs text-gray-600">Svaly sa uvoľnia → šošovka sa sploští → f sa zväčší → lúče sa zbieha ďalej</p>
          </div>
        </div>
      </div>

      <!-- Chyby zraku -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

        <!-- Krátkozrakosť -->
        <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">👓</span>
            <h3 class="font-bold text-red-800">Krátkozrakosť (myopia)</h3>
          </div>
          <p class="text-sm text-gray-700 mb-3">
            Obraz vzdialených predmetov sa tvorí <strong>pred sietnicou</strong> — bulbus je príliš dlhý
            alebo šošovka príliš klenutá. Človek vidí dobre zblízka, vzdialené predmety rozmazane.
          </p>
          <div class="bg-white rounded-lg p-3 text-center mb-2">
            <p class="text-xs text-gray-400 mb-1">Korekcia</p>
            <MathFormula display formula="f < 0 \;\text{(rozptylná šošovka)}" />
          </div>
          <p class="text-xs text-red-700">Rozptylná šošovka posunie obraz späť na sietnicu.</p>
        </div>

        <!-- Ďalekozrakosť -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🔭</span>
            <h3 class="font-bold text-blue-800">Ďalekozrakosť (hyperopia)</h3>
          </div>
          <p class="text-sm text-gray-700 mb-3">
            Obraz blízkych predmetov sa tvorí <strong>za sietnicou</strong> — bulbus je príliš krátky
            alebo šošovka príliš sploštená. Človek vidí dobre do diaľky, zblízka rozmazane.
          </p>
          <div class="bg-white rounded-lg p-3 text-center mb-2">
            <p class="text-xs text-gray-400 mb-1">Korekcia</p>
            <MathFormula display formula="f > 0 \;\text{(spojná šošovka)}" />
          </div>
          <p class="text-xs text-blue-700">Spojná šošovka posunie obraz dopredu na sietnicu.</p>
        </div>

      </div>

      <!-- Dioptrie -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h3 class="font-bold text-gray-800 mb-3">Lámavosť šošovky — dioptria</h3>
        <p class="text-gray-700 text-sm mb-3">
          Lámavosť (optická mohutnosť) šošovky sa meria v <strong>dioptriách (dpt)</strong>.
        </p>
        <div class="bg-white rounded-xl p-4 text-center mb-3">
          <MathFormula display formula="\Phi = \frac{1}{f} \quad [\text{dpt} = \text{m}^{-1}]" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
          <div class="bg-white rounded-lg p-2 text-center border">
            <p class="font-semibold">Spojná +2 dpt</p>
            <p><MathFormula formula="f = 50\,\text{cm}" /></p>
            <p class="text-gray-400">(ďalekozrakosť)</p>
          </div>
          <div class="bg-white rounded-lg p-2 text-center border">
            <p class="font-semibold">Neokulár 0 dpt</p>
            <p><MathFormula formula="f \to \infty" /></p>
            <p class="text-gray-400">(ploché sklo)</p>
          </div>
          <div class="bg-white rounded-lg p-2 text-center border">
            <p class="font-semibold">Rozptylná −3 dpt</p>
            <p><MathFormula formula="f = -33\,\text{cm}" /></p>
            <p class="text-gray-400">(krátkozrakosť)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 4: Optické prístroje ──────────────────────────────────────── -->
    <section aria-label="Optické prístroje" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-5 border-b-2 border-orange-400 pb-2">
        4. Optické prístroje
      </h2>

      <div class="space-y-5">

        <!-- Lupa -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔍</span>
            <h3 class="text-xl font-bold text-gray-900">Lupa</h3>
          </div>
          <p class="text-gray-700 text-sm mb-4">
            Lupa je <strong>spojná šošovka</strong> s krátkou ohniskovou vzdialenosťou.
            Predmet sa umiestni <strong>medzi šošovku a ohnisko</strong> (<MathFormula formula="a < f" />)
            — vznikne zväčšený, vzpriamený, zdanlivý obraz na rovnakej strane ako predmet.
          </p>
          <div class="bg-orange-50 rounded-xl p-4 text-center mb-3">
            <p class="text-xs text-gray-400 mb-1">Zväčšenie lupy (pri akomodácii na 25 cm)</p>
            <MathFormula display formula="z_L = \frac{d_0}{f} = \frac{25\,\text{cm}}{f}" />
          </div>
          <p class="text-xs text-gray-500">
            Napr. lupa s <MathFormula formula="f = 5\,\text{cm}" /> dáva zväčšenie
            <MathFormula formula="z_L = 25/5 = 5\times" />.
          </p>
        </div>

        <!-- Mikroskop -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔬</span>
            <h3 class="text-xl font-bold text-gray-900">Mikroskop</h3>
          </div>
          <p class="text-gray-700 text-sm mb-4">
            Mikroskop sa skladá z dvoch spojných šošoviek — <strong>objektívu</strong>
            (krátka ohnisková vzdialenosť, blízko preparátu) a <strong>okulára</strong>
            (slúži ako lupa pre pozorovanie obrazu z objektívu).
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <p class="font-semibold text-purple-800 text-sm mb-2">1. Objektív</p>
              <p class="text-xs text-gray-700">
                Preparát sa umiestni tesne za ohnisko objektívu (<MathFormula formula="a_1 > f_{obj}" />).
                Vznikne <strong>zväčšený reálny obraz</strong> vo vnútri tubusu.
              </p>
            </div>
            <div class="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p class="font-semibold text-indigo-800 text-sm mb-2">2. Okulár</p>
              <p class="text-xs text-gray-700">
                Okulár funguje ako lupa — pozorovateľ vidí ďalej zväčšený <strong>zdanlivý obraz</strong>
                (zvyčajne nastavený na nekonečno).
              </p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Celkové zväčšenie mikroskopu</p>
            <MathFormula display formula="z = z_{obj} \cdot z_{ok}" />
            <p class="text-xs text-gray-500 mt-1">
              Kde <MathFormula formula="z_{obj} = b_1 / a_1" /> a <MathFormula formula="z_{ok} = d_0 / f_{ok}" />
            </p>
          </div>
        </div>

        <!-- Ďalekohľad -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">🔭</span>
            <h3 class="text-xl font-bold text-gray-900">Ďalekohľad</h3>
          </div>
          <p class="text-gray-700 text-sm mb-4">
            Ďalekohľad zväčšuje vzdialené objekty. Taktiež má <strong>objektív a okulár</strong>,
            ale objektív má <em>veľkú</em> ohniskovú vzdialenosť — zhromažďuje svetlo
            a vytvára medziobraz v ohnisku.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div class="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <p class="font-semibold text-emerald-800 text-sm mb-1">Astronomický (Keplerový)</p>
              <p class="text-xs text-gray-700">
                Objektív + okulár: obe spojné šošovky. Obrázok je obrátený. Používa sa v astronómii
                a v prírodovednom pozorovaní.
              </p>
            </div>
            <div class="bg-teal-50 rounded-xl p-4 border border-teal-100">
              <p class="font-semibold text-teal-800 text-sm mb-1">Pozemský (Galileiho)</p>
              <p class="text-xs text-gray-700">
                Objektív spojná + okulár rozptylná šošovka. Obraz je vzpriamený. Divadelný
                alebo turistický ďalekohľad.
              </p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-1">Zväčšenie ďalekohľadu</p>
            <MathFormula display formula="z = \frac{f_{obj}}{f_{ok}}" />
            <p class="text-xs text-gray-500 mt-1">Čím dlhší objektív a kratší okulár, tým väčšie zväčšenie.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Zhrnutie ──────────────────────────────────────────────────────────── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Zhrnutie</h2>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Spojná šošovka (<MathFormula formula="f > 0" />) zbieha lúče; rozptylná (<MathFormula formula="f < 0" />) ich rozptyľuje.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Zobrazovacia rovnica: <MathFormula formula="\frac{1}{f} = \frac{1}{a} + \frac{1}{b}" />;
          zväčšenie: <MathFormula formula="z = b/a" /> (záporné = reálny obrátený obraz).
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Ľudské oko — akomodácia mení ohniskovú vzdialenosť biologickej šošovky.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Krátkozrakosť: obraz pred sietnicou → korekcia rozptylnou šošovkou.
          Ďalekozrakosť: obraz za sietnicou → korekcia spojnou šošovkou.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Lupa: spojná šošovka, predmet medzi F a šošovkou, <MathFormula formula="z_L = d_0/f" />.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Mikroskop: <MathFormula formula="z = z_{obj} \cdot z_{ok}" />.
          Ďalekohľad: <MathFormula formula="z = f_{obj}/f_{ok}" />.
        </li>
      </ul>
    </div>

    <!-- ── Kvíz ──────────────────────────────────────────────────────────────── -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <!-- Výsledok -->
      <div v-if="quizFinished" data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="score" class="text-3xl font-extrabold text-gray-900 mb-1">
          {{ quizScore }} / {{ quiz.length }}
        </p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="reset-btn"
          class="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <!-- Otázky -->
      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <!-- Progres -->
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">
            Otázka {{ currentQ + 1 }} z {{ quiz.length }}
          </span>
          <span class="text-sm font-semibold text-orange-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Otázka -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p
data-testid="question" class="text-lg font-semibold text-gray-900 mb-5"
          v-html="currentQuestion.question" />

        <!-- Možnosti -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`option-${i}`"
            :disabled="selectedAnswer !== null"
            :class="[
              'text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150',
              selectedAnswer === null
                ? 'border-gray-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-100 text-gray-400 cursor-not-allowed',
            ]"
            @click="selectAnswer(i)">
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="option" />
          </button>
        </div>

        <!-- Spätná väzba -->
        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div
              data-testid="feedback"
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">
                {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
              </p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="next-btn"
                class="px-5 py-2.5 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                @click="nextQuestion">
                {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
              </button>
            </div>
          </div>
        </Transition>
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

// ── Statický obsah ────────────────────────────────────────────────────────────

const parametre = [
  { symbol: 'f', nazov: 'Ohnisková vzdialenosť', popis: 'Vzdialenosť ohniska od optického stredu šošovky. f > 0 spojná, f < 0 rozptylná.' },
  { symbol: 'a', nazov: 'Vzdialenosť predmetu', popis: 'Vzdialenosť predmetu od šošovky, vždy kladná pre reálny predmet.' },
  { symbol: 'b', nazov: 'Vzdialenosť obrazu', popis: 'Vzdialenosť obrazu od šošovky. Kladná = reálny obraz, záporná = zdanlivý.' },
  { symbol: 'z', nazov: 'Zväčšenie', popis: 'z = b/a. |z| > 1 zväčšený, |z| < 1 zmenšený. z < 0 obrátený.' },
  { symbol: '\\Phi', nazov: 'Optická mohutnosť (lámavosť)', popis: 'Φ = 1/f v dioptriách [dpt = m⁻¹]. Vyjadruje lámavosť šošovky.' },
  { symbol: 'd_0', nazov: 'Konvenčná vzdialenosť', popis: 'Konvenčná vzdialenosť zreteľného videnia d₀ = 25 cm — referenčná hodnota pre lupy.' },
]

const obrazyTable = [
  { poloha: 'a > 2f', charakter: 'Reálny, obrátený, zmenšený', priklad: 'Fotoaparát, oko pri pohľade na vzdialené predmety' },
  { poloha: 'a = 2f', charakter: 'Reálny, obrátený, rovnako veľký', priklad: 'Zrkadlová kamera pri určitej vzdialenosti' },
  { poloha: 'f < a < 2f', charakter: 'Reálny, obrátený, zväčšený', priklad: 'Objektív mikroskopu, diaprojektor' },
  { poloha: 'a = f', charakter: 'Obraz v nekonečne (rovnobežné lúče)', priklad: 'Maják, reflektory (zdroj v ohnisku)' },
  { poloha: 'a < f', charakter: 'Zdanlivý, vzpriamený, zväčšený', priklad: 'Lupa, okulár mikroskopu/ďalekohľadu' },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Ktorá z nasledujúcich tvrdení platí pre spojnú šošovku?',
    options: [
      'Má zápornú ohniskovú vzdialenosť',
      'Zbieha rovnobežné lúče do ohniska',
      'Rozptyľuje rovnobežné lúče',
      'Vytvára iba zdanlivé obrazy',
    ],
    correctIndex: 1,
    explanation: `Spojná (konvexná) šošovka má ${km('f > 0')} a zbieha rovnobežné lúče do reálneho ohniska na druhej strane šošovky. Rozptylná šošovka má ${km('f < 0')} a lúče rozptyľuje.`,
  },
  {
    question: `Predmet stojí ${km('a = 20\\,\\text{cm}')} pred spojnou šošovkou s ${km('f = 10\\,\\text{cm}')}. Kde vznikne obraz?`,
    options: [
      `${km('b = 5\\,\\text{cm}')}`,
      `${km('b = 10\\,\\text{cm}')}`,
      `${km('b = 20\\,\\text{cm}')}`,
      `${km('b = -20\\,\\text{cm}')}`,
    ],
    correctIndex: 2,
    explanation: `${km('\\frac{1}{b} = \\frac{1}{f} - \\frac{1}{a} = \\frac{1}{10} - \\frac{1}{20} = \\frac{1}{20}')} → ${km('b = 20\\,\\text{cm}')}. Obraz je reálny, obrátený a rovnako veľký (predmet stojí na ${km('2f')}).`,
  },
  {
    question: 'Predmet je umiestnený medzi šošovkou a jej ohniskom (a < f). Aký je charakter obrazu?',
    options: [
      'Reálny, obrátený, zmenšený',
      'Reálny, vzpriamený, zväčšený',
      'Zdanlivý, obrátený, zmenšený',
      'Zdanlivý, vzpriamený, zväčšený',
    ],
    correctIndex: 3,
    explanation: `Keď ${km('a < f')}, vychádza ${km('b < 0')} — obraz je zdanlivý. Zväčšenie ${km('z = b/a')} je záporné, ale keďže b je záporné a a kladné, |z| > 1 a obraz je vzpriamený a zväčšený. Toto je princíp lupy.`,
  },
  {
    question: 'Čím trpí krátkozraký človek a ako sa koriguje táto chyba zraku?',
    options: [
      'Obraz blízkych predmetov sa tvorí za sietnicou — korekcia spojnou šošovkou',
      'Obraz vzdialených predmetov sa tvorí pred sietnicou — korekcia rozptylnou šošovkou',
      'Obraz vzdialených predmetov sa tvorí za sietnicou — korekcia spojnou šošovkou',
      'Obraz blízkych predmetov sa tvorí pred sietnicou — korekcia rozptylnou šošovkou',
    ],
    correctIndex: 1,
    explanation: 'Pri krátkozrakosti (myopii) je bulbus príliš dlhý alebo šošovka príliš klenutá — obraz vzdialených predmetov vzniká pred sietnicou. Korekcia: rozptylná šošovka (f < 0) posunie obraz späť na sietnicu.',
  },
  {
    question: `Lupa má ohniskovú vzdialenosť ${km('f = 5\\,\\text{cm}')}. Aké je jej zväčšenie pri konvenčnej vzdialenosti zreteľného videnia ${km('d_0 = 25\\,\\text{cm}')}?`,
    options: [
      `${km('z_L = 2{,}5\\times')}`,
      `${km('z_L = 5\\times')}`,
      `${km('z_L = 10\\times')}`,
      `${km('z_L = 125\\times')}`,
    ],
    correctIndex: 1,
    explanation: `Zväčšenie lupy: ${km('z_L = \\frac{d_0}{f} = \\frac{25}{5} = 5\\times')}. Lupa s ohniskovou vzdialenosťou 5 cm dáva 5-násobné zväčšenie.`,
  },
  {
    question: 'Z čoho sa skladá mikroskop a aké je jeho celkové zväčšenie?',
    options: [
      'Len z jednej šošovky s veľkou ohniskovou vzdialenosťou; z = f/d₀',
      'Z objektívu a okulára — obe spojné; z = z_obj · z_ok',
      'Z objektívu (spojná) a okulára (rozptylná); z = f_obj/f_ok',
      'Z dvoch rozptylných šošoviek; z = z_obj + z_ok',
    ],
    correctIndex: 1,
    explanation: `Mikroskop má objektív (spojná šošovka s krátkou ohniskovou vzdialenosťou) a okulár (tiež spojná, funguje ako lupa). Celkové zväčšenie: ${km('z = z_{obj} \\cdot z_{ok}')}. Ďalekohľad má podobné zloženie, ale ${km('z = f_{obj}/f_{ok}')}.`,
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
  if (r === 1) return '🏆'
  if (r >= 0.7) return '🎉'
  if (r >= 0.4) return '💪'
  return '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / quiz.length
  if (r === 1) return 'Perfektné! Zvládol si všetky otázky!'
  if (r >= 0.7) return 'Výborne! Látku ovládaš dobre.'
  if (r >= 0.4) return 'Nie je to zlé, ale oplatí sa zopakovať.'
  return 'Prejdi si tému ešte raz a skús to znova.'
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
