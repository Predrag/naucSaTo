<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/magneticke-pole" class="hover:text-emerald-600 transition-colors">Magnetické pole</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Sila na vodič s prúdom</span>
    </nav>

    <!-- Header -->
    <div class="bg-indigo-600 rounded-2xl p-8 mb-10 text-white">
      <h1 class="text-3xl font-bold mb-2">⚡ Sila na vodič s prúdom</h1>
      <p class="text-indigo-100 text-lg">
        Ampérova sila, Flemingovo pravidlo, Lorentzova sila a pohyb nabitých častíc v magnetickom poli
      </p>
    </div>

    <!-- Intro -->
    <div class="mb-10">
      <p class="text-gray-700 text-lg leading-relaxed">
        Keď vodičom preteká elektrický prúd a vodič sa nachádza v magnetickom poli, pôsobí naň magnetická sila —
        <strong>Ampérova sila</strong>. Tento jav je základom fungovania elektromotora.
        Nabitá častica pohybujúca sa v magnetickom poli zažíva <strong>Lorentzovu silu</strong>,
        ktorá je zodpovedná za kruhový pohyb elektrónov a protónov v urýchľovačoch aj v prírode.
      </p>
    </div>

    <!-- ─── Section 1: Ampérova sila ─── -->
    <section aria-label="Ampérova sila" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        1. Ampérova sila
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Na vodič dĺžky <em>l</em> s prúdom <em>I</em>, umiestnený v magnetickom poli s indukciou <em>B</em>,
        pôsobí sila. Jej veľkosť závisí od uhla <em>α</em> medzi smerom prúdu a smerom
        magnetického poľa.
      </p>

      <!-- Vzorec -->
      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Ampérova sila</h3>
        <MathFormula display formula="F = BIl\sin\alpha" />
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div><MathFormula formula="F" /> — Ampérova sila <span class="text-gray-500">[N]</span></div>
          <div><MathFormula formula="B" /> — magnetická indukcia <span class="text-gray-500">[T]</span></div>
          <div><MathFormula formula="I" /> — elektrický prúd <span class="text-gray-500">[A]</span></div>
          <div><MathFormula formula="l" /> — dĺžka vodiča v poli <span class="text-gray-500">[m]</span></div>
          <div class="col-span-2">
            <MathFormula formula="\alpha" /> — uhol medzi smerom prúdu a smerom
            <MathFormula formula="\vec{B}" />
          </div>
        </div>
      </div>

      <!-- Špeciálne prípady -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
        <p class="text-yellow-800 text-sm font-semibold mb-2">Špeciálne prípady:</p>
        <ul class="space-y-2 text-sm text-gray-700">
          <li class="flex gap-2">
            <span class="text-yellow-600 font-bold mt-0.5">•</span>
            <span>
              <MathFormula formula="\alpha = 90°" /> (vodič kolmý na
              <MathFormula formula="\vec{B}" />):
              <MathFormula formula="F = BIl" /> — sila je <strong>maximálna</strong>
            </span>
          </li>
          <li class="flex gap-2">
            <span class="text-yellow-600 font-bold mt-0.5">•</span>
            <span>
              <MathFormula formula="\alpha = 0°" /> (vodič rovnobežný s
              <MathFormula formula="\vec{B}" />):
              <MathFormula formula="F = 0" /> — sila je <strong>nulová</strong>
            </span>
          </li>
        </ul>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-sm font-semibold">Príklad 1</span>
          Vodič kolmý na magnetické pole
        </h3>
        <p class="text-gray-700 mb-4">
          Vodič dĺžky <MathFormula formula="l = 0{,}5\ \text{m}" /> leží kolmo na magnetické pole
          s indukciou <MathFormula formula="B = 0{,}3\ \text{T}" />.
          Vodičom preteká prúd <MathFormula formula="I = 4\ \text{A}" />.
          Akú Ampérovu silu naň magnetické pole pôsobí?
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-600 font-medium mb-2">Riešenie (<MathFormula formula="\alpha = 90°,\quad \sin 90° = 1" />):</p>
          <div class="my-2" v-html="km('F = BIl\\sin 90° = 0{,}3 \\cdot 4 \\cdot 0{,}5 \\cdot 1 = 0{,}6\\ \\text{N}')" />
          <p class="text-indigo-700 font-semibold mt-3">Výsledok: F = 0,6 N</p>
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-sm font-semibold">Príklad 2</span>
          Vodič pod uhlom 30°
        </h3>
        <p class="text-gray-700 mb-4">
          Vodič dĺžky <MathFormula formula="l = 0{,}2\ \text{m}" /> zviera s magnetickým poľom
          <MathFormula formula="B = 0{,}5\ \text{T}" /> uhol <MathFormula formula="30°" />.
          Prúd vo vodiči je <MathFormula formula="I = 3\ \text{A}" />.
          Vypočítaj Ampérovu silu.
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-600 font-medium mb-2">Riešenie:</p>
          <div class="my-2" v-html="km('F = BIl\\sin\\alpha = 0{,}5 \\cdot 3 \\cdot 0{,}2 \\cdot \\sin 30° = 0{,}3 \\cdot 0{,}5 = 0{,}15\\ \\text{N}')" />
          <p class="text-indigo-700 font-semibold mt-3">Výsledok: F = 0,15 N</p>
        </div>
      </div>
    </section>

    <!-- ─── Section 2: Flemingovo pravidlo ─── -->
    <section aria-label="Flemingovo pravidlo ľavej ruky" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        2. Flemingovo pravidlo ľavej ruky
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Flemingovo pravidlo ľavej ruky určuje <strong>smer Ampérovej sily</strong>.
        Natiahneme ľavú ruku tak, aby prsty smerovali v smere elektrického prúdu
        a siločiary magnetického poľa vstupovali do dlane — odtiahnutý palec potom ukazuje
        smer sily pôsobiacej na vodič.
      </p>

      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-5">Tri smery — tri prsty</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl p-4 text-center shadow-sm">
            <div class="text-4xl mb-2">👍</div>
            <p class="font-semibold text-gray-800">Palec</p>
            <p class="text-sm text-gray-500 mt-1">Smer sily <MathFormula formula="\vec{F}" /></p>
          </div>
          <div class="bg-white rounded-xl p-4 text-center shadow-sm">
            <div class="text-4xl mb-2">☝️</div>
            <p class="font-semibold text-gray-800">Štyri prsty</p>
            <p class="text-sm text-gray-500 mt-1">Smer prúdu <MathFormula formula="I" /></p>
          </div>
          <div class="bg-white rounded-xl p-4 text-center shadow-sm">
            <div class="text-4xl mb-2">🤚</div>
            <p class="font-semibold text-gray-800">Dlaň</p>
            <p class="text-sm text-gray-500 mt-1">Vstupujú siločiary <MathFormula formula="\vec{B}" /></p>
          </div>
        </div>
        <div class="mt-5 bg-white rounded-xl p-4">
          <p class="text-sm text-gray-700">
            <strong>Dôležité:</strong> Pravidlo platí pre konvenčný smer prúdu (od + k −).
            Pre elektróny (záporný náboj) je smer sily <strong>opačný</strong>.
          </p>
        </div>
      </div>

      <!-- Tabuľka prípadov -->
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-indigo-600 text-white">
              <th scope="col" class="px-4 py-3 text-left font-semibold">Smer prúdu</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold">Smer B</th>
              <th scope="col" class="px-4 py-3 text-left font-semibold">Smer sily</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b border-gray-100">
              <td class="px-4 py-3">vpravo →</td>
              <td class="px-4 py-3">hore ↑</td>
              <td class="px-4 py-3 font-medium text-indigo-700">von z obrazovky ⊙</td>
            </tr>
            <tr class="bg-gray-50 border-b border-gray-100">
              <td class="px-4 py-3">vpravo →</td>
              <td class="px-4 py-3">von ⊙</td>
              <td class="px-4 py-3 font-medium text-indigo-700">dole ↓</td>
            </tr>
            <tr class="bg-white">
              <td class="px-4 py-3">hore ↑</td>
              <td class="px-4 py-3">von ⊙</td>
              <td class="px-4 py-3 font-medium text-indigo-700">vpravo →</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ─── Section 3: Elektromotor ─── -->
    <section aria-label="Elektromotor a krútiaci moment" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        3. Princíp elektromotora — krútiaci moment
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        V elektromotoree sa v magnetickom poli otáča vodivá slučka (cievka) s prúdom.
        Na protiľahlé strany cievky pôsobia Ampérove sily opačných smerov —
        vzniká tak <strong>krútiaci moment</strong>, ktorý otáča hriadeľom motora.
      </p>

      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Krútiaci moment na cievku</h3>
        <MathFormula display formula="M = BISN\cos\alpha" />
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div><MathFormula formula="M" /> — krútiaci moment <span class="text-gray-500">[N·m]</span></div>
          <div><MathFormula formula="B" /> — magnetická indukcia <span class="text-gray-500">[T]</span></div>
          <div><MathFormula formula="I" /> — elektrický prúd <span class="text-gray-500">[A]</span></div>
          <div><MathFormula formula="S" /> — plocha jedného závitu <span class="text-gray-500">[m²]</span></div>
          <div><MathFormula formula="N" /> — počet závitov <span class="text-gray-500">[-]</span></div>
          <div>
            <MathFormula formula="\alpha" /> — uhol roviny cievky a
            <MathFormula formula="\vec{B}" />
          </div>
        </div>
        <div class="mt-4 bg-white rounded-xl p-3">
          <p class="text-sm text-gray-700">
            Moment je <strong>maximálny</strong> pri <MathFormula formula="\alpha = 0°" />
            (rovina cievky rovnobežná s <MathFormula formula="\vec{B}" />)
            a <strong>nulový</strong> pri <MathFormula formula="\alpha = 90°" />
            (rovina cievky kolmá na <MathFormula formula="\vec{B}" />).
          </p>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-sm font-semibold">Príklad 3</span>
          Krútiaci moment na cievku elektromotora
        </h3>
        <p class="text-gray-700 mb-4">
          Obdĺžniková cievka má <MathFormula formula="N = 50" /> závitov a plochu
          <MathFormula formula="S = 0{,}01\ \text{m}^2" />. Nachádza sa v magnetickom poli
          <MathFormula formula="B = 0{,}2\ \text{T}" />, prúdom
          <MathFormula formula="I = 2\ \text{A}" />.
          Aký je maximálny krútiaci moment?
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-600 font-medium mb-2">Riešenie (<MathFormula formula="\alpha = 0°,\quad \cos 0° = 1" />):</p>
          <div class="my-2" v-html="km('M_{\\max} = BISN\\cos 0° = 0{,}2 \\cdot 2 \\cdot 0{,}01 \\cdot 50 \\cdot 1 = 0{,}2\\ \\text{N{\\cdot}m}')" />
          <p class="text-indigo-700 font-semibold mt-3">Výsledok: M = 0,2 N·m</p>
        </div>
      </div>
    </section>

    <!-- ─── Section 4: Lorentzova sila ─── -->
    <section aria-label="Lorentzova sila" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        4. Lorentzova sila
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Lorentzova sila pôsobí na <strong>nabitú časticu</strong> pohybujúcu sa v magnetickom poli.
        Je to mikroskopická verzia Ampérovej sily — pôsobí na jednotlivé nabité častice,
        nie na celý vodič. Smer určíme opäť Flemingovým pravidlom ľavej ruky,
        pričom záporný náboj (elektrón) smer sily <em>obracia</em>.
      </p>

      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Lorentzova sila</h3>
        <MathFormula display formula="F = qvB\sin\alpha" />
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div><MathFormula formula="F" /> — Lorentzova sila <span class="text-gray-500">[N]</span></div>
          <div><MathFormula formula="q" /> — náboj častice <span class="text-gray-500">[C]</span></div>
          <div><MathFormula formula="v" /> — rýchlosť častice <span class="text-gray-500">[m/s]</span></div>
          <div><MathFormula formula="B" /> — magnetická indukcia <span class="text-gray-500">[T]</span></div>
          <div class="col-span-2">
            <MathFormula formula="\alpha" /> — uhol medzi
            <MathFormula formula="\vec{v}" /> a <MathFormula formula="\vec{B}" />
          </div>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p class="text-blue-800 font-semibold text-sm mb-2">Vzťah k Ampérovej sile:</p>
        <p class="text-sm text-gray-700">
          Ampérova sila je <em>súčet</em> Lorentzových síl na všetky voľné elektróny vo vodiči.
          Keď dosadíme vzťah pre prúd, z <MathFormula formula="F = qvB" />
          dostaneme <MathFormula formula="F = BIl\sin\alpha" />.
        </p>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-sm font-semibold">Príklad 4</span>
          Lorentzova sila na protón
        </h3>
        <p class="text-gray-700 mb-4">
          Protón (<MathFormula formula="q = 1{,}6 \times 10^{-19}\ \text{C}" />) sa pohybuje rýchlosťou
          <MathFormula formula="v = 3 \times 10^6\ \text{m/s}" /> kolmo na magnetické pole
          <MathFormula formula="B = 0{,}4\ \text{T}" />.
          Aká Lorentzova sila naň pôsobí?
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-600 font-medium mb-2">Riešenie (<MathFormula formula="\alpha = 90°" />):</p>
          <div class="my-2" v-html="km('F = qvB\\sin 90° = 1{,}6 \\times 10^{-19} \\cdot 3 \\times 10^6 \\cdot 0{,}4 \\cdot 1')" />
          <div class="my-2" v-html="km('F = 1{,}92 \\times 10^{-13}\\ \\text{N}')" />
          <p class="text-indigo-700 font-semibold mt-3">Výsledok: F = 1,92 × 10⁻¹³ N</p>
        </div>
      </div>
    </section>

    <!-- ─── Section 5: Pohyb nabitej častice ─── -->
    <section aria-label="Pohyb nabitej častice v magnetickom poli" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        5. Pohyb nabitej častice — kruhová dráha
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Keď nabitá častica vstúpi kolmo na siločiary homogénneho magnetického poľa,
        Lorentzova sila je vždy <strong>kolmá na rýchlosť</strong> — správa sa ako dostredivá sila.
        Výsledkom je <strong>rovnomerný pohyb po kružnici</strong>.
        Magnetická sila nemení veľkosť rýchlosti, iba jej smer.
      </p>

      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Polomer kružnice nabitej častice</h3>
        <p class="text-sm text-gray-600 mb-3">Lorentzova sila = dostredivá sila:</p>
        <MathFormula display formula="qvB = \frac{mv^2}{r}" />
        <p class="text-sm text-gray-600 my-3">Po úprave:</p>
        <MathFormula display formula="r = \frac{mv}{qB}" />
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div><MathFormula formula="r" /> — polomer kružnice <span class="text-gray-500">[m]</span></div>
          <div><MathFormula formula="m" /> — hmotnosť častice <span class="text-gray-500">[kg]</span></div>
          <div><MathFormula formula="v" /> — rýchlosť <span class="text-gray-500">[m/s]</span></div>
          <div><MathFormula formula="q" /> — náboj <span class="text-gray-500">[C]</span></div>
        </div>
        <div class="mt-4 bg-white rounded-xl p-3 text-sm text-gray-700">
          Väčší polomer: vyššia rýchlosť, väčšia hmotnosť, slabšie pole, menší náboj.
        </div>
      </div>

      <!-- Príklad 5 -->
      <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span class="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-sm font-semibold">Príklad 5</span>
          Elektrón v magnetickom poli
        </h3>
        <p class="text-gray-700 mb-4">
          Elektrón (<MathFormula formula="m = 9{,}1 \times 10^{-31}\ \text{kg}" />,
          <MathFormula formula="q = 1{,}6 \times 10^{-19}\ \text{C}" />) sa pohybuje rýchlosťou
          <MathFormula formula="v = 2 \times 10^6\ \text{m/s}" /> kolmo na magnetické pole
          <MathFormula formula="B = 0{,}05\ \text{T}" />.
          Aký je polomer jeho kruhovej dráhy?
        </p>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-600 font-medium mb-2">Riešenie:</p>
          <div class="my-2" v-html="km('r = \\frac{mv}{qB} = \\frac{9{,}1 \\times 10^{-31} \\cdot 2 \\times 10^6}{1{,}6 \\times 10^{-19} \\cdot 0{,}05}')" />
          <div class="my-2" v-html="km('r = \\frac{1{,}82 \\times 10^{-24}}{8{,}0 \\times 10^{-21}} \\approx 2{,}28 \\times 10^{-4}\\ \\text{m} \\approx 0{,}23\\ \\text{mm}')" />
          <p class="text-indigo-700 font-semibold mt-3">Výsledok: r ≈ 0,23 mm</p>
        </div>
      </div>

      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <p class="text-green-800 font-semibold text-sm mb-2">Aplikácie v praxi:</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li class="flex gap-2"><span class="text-green-500 font-bold">•</span>
            <span><strong>Cyklotrón</strong> — urýchľovač nabitých častíc (fyzika vysokých energií)</span>
          </li>
          <li class="flex gap-2"><span class="text-green-500 font-bold">•</span>
            <span><strong>Hmotnostný spektrometer</strong> — separácia izotopov podľa hmotnosti</span>
          </li>
          <li class="flex gap-2"><span class="text-green-500 font-bold">•</span>
            <span><strong>Magnetická rezonancia (MRI)</strong> — lekárske zobrazovanie</span>
          </li>
          <li class="flex gap-2"><span class="text-green-500 font-bold">•</span>
            <span><strong>Aurorae</strong> — pohyb nabitých častíc slnečného vetra v zemskom poli</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ─── Section 6: Hallový jav ─── -->
    <section aria-label="Hallový jav" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
        6. Hallový jav
      </h2>

      <p class="text-gray-700 mb-6 leading-relaxed">
        Hallový jav nastáva, keď vodičom preteká prúd a zároveň je vodič v magnetickom poli
        kolmom na prúd. Lorentzova sila tlačí nosiče náboja nabok, na jednej strane vodiča
        sa hromadí kladný náboj a na druhej záporný. Vzniká priečne elektrické napätie —
        <strong>Hallovo napätie</strong>.
      </p>

      <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-indigo-800 mb-3">Hallovo napätie</h3>
        <MathFormula display formula="U_H = \frac{IB}{ned}" />
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div><MathFormula formula="U_H" /> — Hallovo napätie <span class="text-gray-500">[V]</span></div>
          <div><MathFormula formula="n" /> — hustota nosičov náboja <span class="text-gray-500">[m⁻³]</span></div>
          <div><MathFormula formula="e" /> — elementárny náboj <span class="text-gray-500">[C]</span></div>
          <div><MathFormula formula="d" /> — hrúbka vodiča v smere <MathFormula formula="\vec{B}" /> <span class="text-gray-500">[m]</span></div>
        </div>
      </div>

      <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <p class="text-purple-800 font-semibold text-sm mb-2">Využitie Hallového javu:</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li class="flex gap-2"><span class="text-purple-500 font-bold">•</span>
            <span><strong>Hallové sondy</strong> — presné meranie magnetickej indukcie</span>
          </li>
          <li class="flex gap-2"><span class="text-purple-500 font-bold">•</span>
            <span><strong>Bezdotykové snímače polohy</strong> — napr. v automobiloch (ABS)</span>
          </li>
          <li class="flex gap-2"><span class="text-purple-500 font-bold">•</span>
            <span><strong>Určenie typu polovodiča</strong> — polarita napätia odlíši n-typ od p-typu</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ─── Zhrnutie ─── -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie</h2>
      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Ampérova sila:</strong>
            <MathFormula formula="F = BIl\sin\alpha" /> — pôsobí na vodič s prúdom v magnetickom poli;
            smer určíme Flemingovým pravidlom ľavej ruky.
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Flemingovo pravidlo:</strong>
            prsty → prúd <MathFormula formula="I" />, dlaň → pole
            <MathFormula formula="\vec{B}" />, palec → sila <MathFormula formula="\vec{F}" />.
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Krútiaci moment elektromotora:</strong>
            <MathFormula formula="M = BISN\cos\alpha" /> — základ premeny elektrickej energie na mechanickú.
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Lorentzova sila:</strong>
            <MathFormula formula="F = qvB\sin\alpha" /> — pôsobí na nabitú časticu;
            je vždy kolmá na <MathFormula formula="\vec{v}" />.
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Kruhová dráha nabitej častice:</strong>
            <MathFormula formula="r = \dfrac{mv}{qB}" /> — polomer kružnice v homogénnom poli.
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-indigo-500 font-bold text-lg mt-0.5">▸</span>
          <div>
            <strong>Hallový jav:</strong> priečne napätie
            <MathFormula formula="U_H = \dfrac{IB}{ned}" /> — základ Hallových sond
            na meranie magnetického poľa.
          </div>
        </div>
      </div>
    </div>

    <!-- ─── Kvíz ─── -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Kvíz: Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-6">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <div class="flex gap-1">
            <div
              v-for="i in quiz.length"
              :key="i"
              class="h-2 rounded-full transition-colors"
              :class="[
                i - 1 < currentQ  ? 'w-6 bg-indigo-500' :
                i - 1 === currentQ ? 'w-6 bg-indigo-300' :
                                     'w-6 bg-gray-200'
              ]"
            />
          </div>
        </div>

        <!-- Question -->
        <div data-testid="question" class="mb-6">
          <p class="text-gray-800 font-medium text-lg" v-html="currentQuestion.question" />
        </div>

        <!-- Options -->
        <div class="space-y-3 mb-6">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium"
            :class="getOptionClass(i)"
            @click="selectAnswer(i)"
            v-html="option"
          />
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            class="mb-4 p-4 rounded-xl"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'"
          >
            <p
              class="font-semibold"
              :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'"
            >
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}
            </p>
            <p class="text-sm text-gray-700 mt-1" v-html="currentQuestion.explanation" />
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="next-btn"
          type="button"
          class="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
        <div class="text-5xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-lg text-gray-600 mb-6">
          Dosiahol si <strong>{{ quizScore }}</strong> z <strong>{{ quiz.length }}</strong> bodov
        </p>
        <button
          data-testid="reset-btn"
          type="button"
          class="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
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
  title: 'Sila na vodič s prúdom — Magnetické pole — Fyzika',
  meta: [
    {
      name: 'description',
      content:
        'Ampérova sila, Flemingovo pravidlo ľavej ruky, krútiaci moment elektromotora, Lorentzova sila a Hallový jav. Gymnázium, slovenčina.'
    }
  ]
})

// ─── Kvíz ───────────────────────────────────────────────────────────────────

const quiz = [
  {
    question:
      'Vodič dĺžky 0,4 m s prúdom 5 A je umiestnený <strong>kolmo</strong> na magnetické pole s indukciou 0,2 T. Aká Ampérova sila naň pôsobí?',
    options: ['0,1 N', '0,4 N', '0,5 N', '1,0 N'],
    correctIndex: 1,
    explanation:
      'F = BIl · sin 90° = 0,2 · 5 · 0,4 · 1 = <strong>0,4 N</strong>. Sinus 90° = 1, takže stačí F = BIl.'
  },
  {
    question:
      'Čo určuje <strong>Flemingovo pravidlo ľavej ruky</strong>?',
    options: [
      'Smer magnetického poľa okolo vodiča s prúdom',
      'Smer Ampérovej sily pôsobiacej na vodič s prúdom',
      'Smer indukovaného elektrického prúdu',
      'Veľkosť magnetickej indukcie'
    ],
    correctIndex: 1,
    explanation:
      'Flemingovo pravidlo ľavej ruky určuje <strong>smer Ampérovej sily</strong>: prsty → prúd, dlaň → siločiary B, palec → sila.'
  },
  {
    question:
      'Nabitá častica sa pohybuje <strong>rovnobežne</strong> so siločiarami magnetického poľa (α = 0°). Aká Lorentzova sila na ňu pôsobí?',
    options: ['Maximálna — F = qvB', 'Polovičná — F = qvB/2', 'Nulová — F = 0', 'Závisí len od náboja'],
    correctIndex: 2,
    explanation:
      'F = qvB · sin 0° = qvB · 0 = <strong>0</strong>. Keď je rýchlosť rovnobežná s poľom, Lorentzova sila je nulová.'
  },
  {
    question:
      'Aký tvar opisuje dráha nabitej častice vstupujúcej <strong>kolmo</strong> do homogénneho magnetického poľa?',
    options: ['Priamku', 'Parabolu', 'Kružnicu', 'Špirálu'],
    correctIndex: 2,
    explanation:
      'Lorentzova sila je vždy kolmá na rýchlosť — správa sa ako dostredivá sila. Výsledkom je rovnomerný pohyb po <strong>kružnici</strong>.'
  },
  {
    question:
      'Cievka s N = 100 závitmi a plochou S = 0,02 m² sa nachádza v poli B = 0,1 T, prúd I = 1 A, uhol α = 0°. Aký je krútiaci moment?',
    options: ['0,02 N·m', '0,2 N·m', '2 N·m', '20 N·m'],
    correctIndex: 1,
    explanation:
      'M = BISN · cos 0° = 0,1 · 1 · 0,02 · 100 · 1 = <strong>0,2 N·m</strong>.'
  },
  {
    question:
      'Ako sa zmení polomer kruhovej dráhy elektróna v magnetickom poli, ak zdvojnásobíme magnetickú indukciu B (ostatné veličiny ostanú rovnaké)?',
    options: [
      'Polomer sa zdvojnásobí',
      'Polomer sa zmenší na polovicu',
      'Polomer sa nezmení',
      'Polomer sa štvornásobí'
    ],
    correctIndex: 1,
    explanation:
      'Z vzorca r = mv / (qB) vidíme, že r je nepriamo úmerný B. Ak B zdvojnásobíme, r sa <strong>zmenší na polovicu</strong>.'
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

function getOptionClass(i: number): string {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 text-gray-700 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 text-gray-400 cursor-default'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
