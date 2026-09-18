<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/kombinatorika-statistika" class="hover:text-blue-600 transition-colors">Kombinatorika a štatistika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Pravdepodobnosť</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-5xl" aria-hidden="true">🎯</span>
      <h1 class="text-4xl font-extrabold text-blue-700">{{ activeTitle ?? 'Pravdepodobnosť' }}</h1>
    </div>
    <p class="text-gray-600 text-lg leading-relaxed mb-10">
      Pravdepodobnosť nám umožňuje vyjadriť číslom, ako je „istý" alebo „nepravdepodobný" nejaký
      náhodný jav. Stretáme sa s ňou všade – pri hrách, počasí, medicíne aj ekonómii.
    </p>

    <!-- Section 1: Základné pojmy -->
    <section aria-label="Základné pojmy" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Základné pojmy</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Pravdepodobnosť sa zaoberá <strong>náhodnými dejmi</strong> – takými, ktorých výsledok
        vopred nepoznáme, hoci podmienky môžeme zopakovať.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div class="font-bold text-blue-800 mb-1">Náhodný pokus</div>
          <p class="text-sm text-gray-700">Dej, ktorý môžeme opakovať a ktorého výsledok závisí od náhody. Príklad: hod kockou, mincou.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div class="font-bold text-blue-800 mb-1">Elementárny jav</div>
          <p class="text-sm text-gray-700">Jeden konkrétny možný výsledok pokusu. Pri hode kockou je elementárnym javom každé číslo 1–6.</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div class="font-bold text-blue-800 mb-1">Udalosť</div>
          <p class="text-sm text-gray-700">Podmnožina elementárnych javov. Napr. udalosť „padlo párne číslo" = {2, 4, 6}.</p>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
        <h3 class="font-semibold text-blue-800 mb-3">Špeciálne udalosti</h3>
        <div class="space-y-2 text-gray-700 text-sm">
          <div class="flex items-start gap-2">
            <span class="font-mono text-blue-600 font-bold">Ω</span>
            <span><strong>Istý jav</strong> – nastane vždy. Obsahuje všetky elementárne javy.
              <MathFormula formula="P(\Omega) = 1" />
            </span>
          </div>
          <div class="flex items-start gap-2">
            <span class="font-mono text-blue-600 font-bold">∅</span>
            <span><strong>Nemožný jav</strong> – nenastane nikdy.
              <MathFormula formula="P(\emptyset) = 0" />
            </span>
          </div>
          <div class="flex items-start gap-2">
            <span class="font-mono text-blue-600 font-bold">A'</span>
            <span><strong>Doplnková udalosť</strong> – nastane vtedy, keď A nenastane.
              <MathFormula formula="P(A') = 1 - P(A)" />
            </span>
          </div>
        </div>
      </div>

      <!-- SVG: Vennov diagram + tabuľka kocky -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
        <h3 class="font-semibold text-gray-800 mb-4 text-center">Ilustrácia: Vennov diagram a hod kockou</h3>
        <div class="flex flex-col md:flex-row gap-6 items-center justify-center">

          <!-- Vennov diagram -->
          <div>
            <p class="text-xs text-gray-500 text-center mb-2">Zjednotenie A ∪ B</p>
            <svg
              role="img"
              aria-label="Vennov diagram znázorňujúci zjednotenie udalostí A a B – dve prekrývajúce sa kružnice v obdĺžniku predstavujúcom istý jav"
              width="240"
              height="160"
              viewBox="0 0 240 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Omega rectangle -->
              <rect x="4" y="4" width="232" height="152" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
              <text x="218" y="22" font-size="13" fill="#1d4ed8" font-family="serif" font-style="italic">Ω</text>

              <!-- Circle A -->
              <circle cx="88" cy="80" r="52" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="2"/>
              <!-- Circle B -->
              <circle cx="152" cy="80" r="52" fill="#60a5fa" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="2"/>

              <!-- Intersection highlight -->
              <clipPath id="clipA">
                <circle cx="88" cy="80" r="52"/>
              </clipPath>
              <circle cx="152" cy="80" r="52" fill="#1d4ed8" fill-opacity="0.3" clip-path="url(#clipA)" stroke="none"/>

              <!-- Labels -->
              <text x="62" y="84" font-size="15" fill="#1e3a8a" font-family="serif" font-style="italic" font-weight="bold">A</text>
              <text x="166" y="84" font-size="15" fill="#1e3a8a" font-family="serif" font-style="italic" font-weight="bold">B</text>
              <text x="113" y="84" font-size="10" fill="#1e3a8a" font-family="serif">A∩B</text>

              <!-- Union label -->
              <text x="72" y="148" font-size="11" fill="#1d4ed8" font-family="sans-serif">A ∪ B (modrá plocha)</text>
            </svg>
          </div>

          <!-- Tabuľka kocky -->
          <div class="overflow-x-auto">
            <p class="text-xs text-gray-500 text-center mb-2">Pravdepodobnosti pri hode kockou</p>
            <table class="text-sm border-collapse">
              <thead>
                <tr class="bg-blue-600 text-white">
                  <th class="px-3 py-2 border border-blue-400 text-left">Udalosť</th>
                  <th class="px-3 py-2 border border-blue-400">Priaznivé javy</th>
                  <th class="px-3 py-2 border border-blue-400">P(A)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="px-3 py-2 border border-gray-200 text-gray-700">Padne 6</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-gray-600">1</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-blue-700 font-mono">1/6</td>
                </tr>
                <tr class="bg-blue-50">
                  <td class="px-3 py-2 border border-gray-200 text-gray-700">Padne párne</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-gray-600">3</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-blue-700 font-mono">1/2</td>
                </tr>
                <tr class="bg-white">
                  <td class="px-3 py-2 border border-gray-200 text-gray-700">Padne viac ako 4</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-gray-600">2</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-blue-700 font-mono">1/3</td>
                </tr>
                <tr class="bg-blue-50">
                  <td class="px-3 py-2 border border-gray-200 text-gray-700">Padne aspoň 1</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-gray-600">6</td>
                  <td class="px-3 py-2 border border-gray-200 text-center text-blue-700 font-mono">1</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 2: Klasická definícia a operácie s udalosťami -->
    <section aria-label="Klasická definícia pravdepodobnosti" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Klasická definícia pravdepodobnosti</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Ak má pokus <strong>n rovnako pravdepodobných</strong> elementárnych javov a udalosti A
        priaznivých je <strong>m</strong>, potom:
      </p>

      <div class="bg-blue-600 text-white rounded-2xl p-6 mb-6 text-center shadow-md">
        <div class="text-xs text-blue-200 uppercase tracking-widest mb-3 font-semibold">Klasická definícia</div>
        <MathFormula display formula="P(A) = \frac{m}{n} = \frac{\text{počet priaznivých javov}}{\text{počet všetkých javov}}" />
        <p class="text-blue-100 text-sm mt-3">pričom platí <MathFormula formula="0 \leq P(A) \leq 1" /></p>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">🎲</span>
          <h3 class="font-bold text-amber-800">Príklad 1: Hod kockou</h3>
        </div>
        <p class="text-gray-700 mb-3">
          Aká je pravdepodobnosť, že pri hode kockou padne číslo väčšie ako 4?
        </p>
        <div class="bg-white rounded-lg p-4 border border-amber-200">
          <p class="text-sm text-gray-700 mb-1"><strong>Riešenie:</strong></p>
          <p class="text-sm text-gray-600 mb-1">Všetky možnosti: n = 6 (čísla 1, 2, 3, 4, 5, 6)</p>
          <p class="text-sm text-gray-600 mb-1">Priaznivé javy: m = 2 (čísla 5 a 6)</p>
          <MathFormula display formula="P(A) = \frac{m}{n} = \frac{2}{6} = \frac{1}{3} \approx 0{,}333" />
          <p class="text-sm text-blue-700 font-semibold mt-1">Pravdepodobnosť je 1/3, čiže približne 33,3 %.</p>
        </div>
      </div>

      <h3 class="text-lg font-semibold text-blue-800 mb-3">Operácie s udalosťami</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div class="font-bold text-blue-700 mb-2">Navzájom sa vylučujúce udalosti</div>
          <p class="text-sm text-gray-600 mb-3">Udalosti A a B nemôžu nastať súčasne (<MathFormula formula="A \cap B = \emptyset" />).</p>
          <MathFormula display formula="P(A \cup B) = P(A) + P(B)" />
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div class="font-bold text-blue-700 mb-2">Obecný prípad zjednotenia</div>
          <p class="text-sm text-gray-600 mb-3">Keď A a B môžu nastať súčasne, musíme odpočítať prienik:</p>
          <MathFormula display formula="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
        </div>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">🃏</span>
          <h3 class="font-bold text-amber-800">Príklad 2: Výber karty</h3>
        </div>
        <p class="text-gray-700 mb-3">
          Z balíčka 52 kariet náhodne vyberieme jednu. Aká je pravdepodobnosť, že to bude kráľ alebo srdce?
        </p>
        <div class="bg-white rounded-lg p-4 border border-amber-200">
          <p class="text-sm text-gray-700 mb-1"><strong>Riešenie:</strong></p>
          <p class="text-sm text-gray-600 mb-1">A = kráľ: <MathFormula formula="P(A) = \frac{4}{52}" /></p>
          <p class="text-sm text-gray-600 mb-1">B = srdce: <MathFormula formula="P(B) = \frac{13}{52}" /></p>
          <p class="text-sm text-gray-600 mb-1">A ∩ B = kráľ srdce: <MathFormula formula="P(A \cap B) = \frac{1}{52}" /></p>
          <MathFormula display formula="P(A \cup B) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13} \approx 0{,}308" />
          <p class="text-sm text-blue-700 font-semibold mt-1">Pravdepodobnosť je 4/13, teda asi 30,8 %.</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Podmienená pravdepodobnosť a nezávislé udalosti -->
    <section aria-label="Podmienená pravdepodobnosť a nezávislé udalosti" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Podmienená pravdepodobnosť a nezávislé udalosti</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Niekedy nás zaujíma pravdepodobnosť udalosti A za predpokladu, že udalosť B už nastala.
        Hovoríme o <strong>podmienenej pravdepodobnosti</strong>.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <div class="font-semibold text-blue-800 mb-2">Podmienená pravdepodobnosť</div>
        <MathFormula display formula="P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0" />
        <p class="text-sm text-gray-600 mt-2">Čítame: „Pravdepodobnosť A za podmienky B."</p>
      </div>

      <h3 class="text-lg font-semibold text-blue-800 mb-3">Nezávislé udalosti</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Udalosti A a B sú <strong>nezávislé</strong>, ak výsledok jednej neovplyvňuje výsledok druhej.
        Nastanie B nám neposkytuje žiadnu informáciu o A.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <div class="font-semibold text-blue-800 mb-2">Súčin pravdepodobností (nezávislé udalosti)</div>
        <MathFormula display formula="P(A \cap B) = P(A) \cdot P(B)" />
        <p class="text-sm text-gray-600 mt-2">
          Príklad: dva hody mincou sú nezávislé – výsledok prvého hodu neovplyvní druhý.
        </p>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">🪙</span>
          <h3 class="font-bold text-amber-800">Príklad 3: Dva hody mincou</h3>
        </div>
        <p class="text-gray-700 mb-3">
          Hodíme mincou dvakrát. Aká je pravdepodobnosť, že oba razy padne orol?
        </p>
        <div class="bg-white rounded-lg p-4 border border-amber-200">
          <p class="text-sm text-gray-700 mb-1"><strong>Riešenie:</strong></p>
          <p class="text-sm text-gray-600 mb-2">Hody sú nezávislé. <MathFormula formula="P(\text{orol}) = \frac{1}{2}" /></p>
          <MathFormula display formula="P(\text{orol} \cap \text{orol}) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4} = 0{,}25" />
          <p class="text-sm text-blue-700 font-semibold mt-1">Pravdepodobnosť je 1/4, čiže 25 %.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Bernoulliho schéma -->
    <section aria-label="Bernoulliho schéma" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Bernoulliho schéma</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Bernoulliho schéma opisuje situáciu, kde opakujeme <strong>n nezávislých pokusov</strong>,
        pričom každý má len dva výsledky: <em>úspech</em> (pravdepodobnosť p) alebo <em>neúspech</em>
        (pravdepodobnosť 1 − p). Hľadáme pravdepodobnosť práve k úspechov.
      </p>

      <div class="bg-blue-600 text-white rounded-2xl p-6 mb-6 text-center shadow-md">
        <div class="text-xs text-blue-200 uppercase tracking-widest mb-3 font-semibold">Bernoulliho schéma</div>
        <MathFormula display formula="P(X = k) = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}" />
        <div class="grid grid-cols-3 gap-2 mt-4 text-xs text-blue-200">
          <div><span class="font-mono text-white">n</span> — počet pokusov</div>
          <div><span class="font-mono text-white">k</span> — počet úspechov</div>
          <div><span class="font-mono text-white">p</span> — pravdep. úspechu</div>
        </div>
      </div>

      <!-- Príklad 4 -->
      <div class="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">🎯</span>
          <h3 class="font-bold text-amber-800">Príklad 4: Hod kockou 5-krát</h3>
        </div>
        <p class="text-gray-700 mb-3">
          Hodíme kockou 5-krát. Aká je pravdepodobnosť, že šestka padne práve 2-krát?
        </p>
        <div class="bg-white rounded-lg p-4 border border-amber-200">
          <p class="text-sm text-gray-700 mb-2"><strong>Riešenie:</strong></p>
          <p class="text-sm text-gray-600 mb-1">n = 5, k = 2, p = 1/6, 1 − p = 5/6</p>
          <MathFormula display formula="P(X = 2) = \binom{5}{2} \cdot \left(\frac{1}{6}\right)^2 \cdot \left(\frac{5}{6}\right)^3" />
          <MathFormula display formula="= 10 \cdot \frac{1}{36} \cdot \frac{125}{216} = \frac{1250}{7776} \approx 0{,}161" />
          <p class="text-sm text-blue-700 font-semibold mt-1">Pravdepodobnosť je asi 16,1 %.</p>
        </div>
      </div>

      <h3 class="text-lg font-semibold text-blue-800 mb-3">Geometrická pravdepodobnosť</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Pri <strong>geometrickej pravdepodobnosti</strong> sa pravdepodobnosť udalosti rovná pomeru
        dĺžok, plôch alebo objemov – podľa toho, aký „geometrický" priestor tvorí priaznivá oblasť.
      </p>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
        <MathFormula display formula="P(A) = \frac{\text{priaznivá oblasť}}{\text{celková oblasť}}" />
        <p class="text-sm text-gray-600 mt-2">
          <strong>Príklad:</strong> Náhodný bod hodíme do štvorca so stranou 1 m.
          V strede je kruh s polomerom 0,3 m. Pravdepodobnosť, že bod dopadne do kruhu:
          <MathFormula formula="P = \frac{\pi \cdot 0{,}3^2}{1^2} = 0{,}09\pi \approx 28{,}3\,\%" />
        </p>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="space-y-3 text-gray-700 text-sm">
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Pravdepodobnosť je číslo z intervalu <MathFormula formula="[0, 1]" />. Hodnota 0 znamená nemožný jav, hodnota 1 istý jav.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Klasická definícia: <MathFormula formula="P(A) = m/n" /> (priaznivé / všetky), platí pre rovnako pravdepodobné javy.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Doplnková udalosť: <MathFormula formula="P(A') = 1 - P(A)" />. Užitočná, keď je ľahšie vypočítať opak.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Navzájom sa vylučujúce udalosti: <MathFormula formula="P(A \cup B) = P(A) + P(B)" />.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Nezávislé udalosti: <MathFormula formula="P(A \cap B) = P(A) \cdot P(B)" />.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Podmienená pravdepodobnosť: <MathFormula formula="P(A|B) = P(A \cap B) / P(B)" />.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-blue-500 font-bold mt-0.5">▸</span>
          <span>Bernoulliho schéma: <MathFormula formula="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" /> – opakovanie nezávislých pokusov.</span>
        </li>
      </ul>
    </div>

    <!-- Kvíz -->
    <section aria-label="Kvíz" class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">🧠 Kvíz: Otestuj sa</h2>

      <div v-if="!quizFinished">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-4">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ activeQuiz.length }}</span>
          <div class="flex gap-1">
            <span
              v-for="(_, i) in activeQuiz"
              :key="i"
              :class="[
                'w-3 h-3 rounded-full transition-colors',
                i < currentQ ? 'bg-blue-500' : i === currentQ ? 'bg-blue-300' : 'bg-gray-200'
              ]"
            />
          </div>
        </div>

        <!-- Question -->
        <div data-testid="question" class="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
          <p class="text-gray-800 font-medium text-lg leading-relaxed">{{ currentQuestion.question }}</p>
        </div>

        <!-- Options -->
        <div class="space-y-3 mb-4">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`option-${i}`"
            type="button"
            :disabled="selectedAnswer !== null"
            :class="[
              'w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium',
              selectedAnswer === null
                ? 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                : selectedAnswer === i
                  ? i === currentQuestion.correctIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-red-400 bg-red-50 text-red-800'
                  : i === currentQuestion.correctIndex
                    ? 'border-green-400 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-gray-50 text-gray-400',
              'disabled:cursor-default'
            ]"
            @click="selectAnswer(i)"
          >
            <span class="mr-2 font-mono text-blue-500">{{ String.fromCharCode(65 + i) }}.</span>
            {{ option }}
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            :class="[
              'rounded-xl p-4 mb-4 text-sm',
              selectedAnswer === currentQuestion.correctIndex
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            ]"
          >
            <span class="font-bold mr-1">
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
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < activeQuiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="result" class="bg-white border-2 border-blue-200 rounded-2xl p-8 text-center shadow-sm">
        <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
        <div class="text-2xl font-bold text-blue-700 mb-1">{{ scoreMessage }}</div>
        <div data-testid="score" class="text-gray-600 mb-6">
          Správne odpovede: <span class="font-bold text-blue-600">{{ quizScore }}</span> / {{ activeQuiz.length }}
        </div>
        <button
          data-testid="reset-btn"
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
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

useHead({
  title: 'Pravdepodobnosť | Kombinatorika a štatistika | Matematika',
  meta: [
    {
      name: 'description',
      content: 'Klasická definícia pravdepodobnosti, doplnková udalosť, nezávislé javy, podmienená pravdepodobnosť, Bernoulliho schéma a geometrická pravdepodobnosť pre gymnazistov.',
    },
  ],
})

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Aká je pravdepodobnosť, že pri hode kockou padne číslo väčšie ako 4?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctIndex: 1,
    explanation: 'Čísla väčšie ako 4 sú 5 a 6 – teda 2 priaznivé javy z 6. P = 2/6 = 1/3.',
  },
  {
    question: 'Ak P(A) = 0,3, aká je pravdepodobnosť doplnkovej udalosti A\'?',
    options: ['0,3', '0,5', '0,7', '1,3'],
    correctIndex: 2,
    explanation: 'Doplnková udalosť: P(A\') = 1 − P(A) = 1 − 0,3 = 0,7.',
  },
  {
    question: 'Udalosti A a B sú nezávislé. P(A) = 0,4 a P(B) = 0,5. Čo je P(A ∩ B)?',
    options: ['0,1', '0,2', '0,45', '0,9'],
    correctIndex: 1,
    explanation: 'Pre nezávislé udalosti platí P(A ∩ B) = P(A) · P(B) = 0,4 · 0,5 = 0,2.',
  },
  {
    question: 'Udalosti A a B sa navzájom vylučujú, P(A) = 0,3, P(B) = 0,4. Čo je P(A ∪ B)?',
    options: ['0,1', '0,12', '0,7', '0,58'],
    correctIndex: 2,
    explanation: 'Pre navzájom sa vylučujúce udalosti: P(A ∪ B) = P(A) + P(B) = 0,3 + 0,4 = 0,7.',
  },
  {
    question: 'Hodíme spravodlivou mincou 3-krát. Aká je pravdepodobnosť, že orol padne práve 2-krát? (Bernoulliho schéma)',
    options: ['1/8', '3/8', '1/2', '6/8'],
    correctIndex: 1,
    explanation: 'P(X=2) = C(3,2) · (1/2)² · (1/2)¹ = 3 · 1/4 · 1/2 = 3/8.',
  },
  {
    question: 'Podmienená pravdepodobnosť P(A|B) sa vypočíta ako:',
    options: ['P(A) + P(B)', 'P(A) · P(B)', 'P(A ∩ B) / P(B)', 'P(A ∪ B) / P(B)'],
    correctIndex: 2,
    explanation: 'Podmienená pravdepodobnosť je definovaná vzorcom P(A|B) = P(A ∩ B) / P(B).',
  },
]

const { locale } = useI18n()

const titleRu = 'Вероятность'
const titleUk = 'Імовірність'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

const quizRu: QuizQuestion[] = [
  {
    question: 'Какова вероятность того, что при броске кубика выпадет число больше 4?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctIndex: 1,
    explanation: 'Числа больше 4 — это 5 и 6, то есть 2 благоприятных исхода из 6. P = 2/6 = 1/3.',
  },
  {
    question: 'Если P(A) = 0,3, какова вероятность дополнительного события A\'?',
    options: ['0,3', '0,5', '0,7', '1,3'],
    correctIndex: 2,
    explanation: 'Дополнительное событие: P(A\') = 1 − P(A) = 1 − 0,3 = 0,7.',
  },
  {
    question: 'События A и B независимы. P(A) = 0,4 и P(B) = 0,5. Чему равно P(A ∩ B)?',
    options: ['0,1', '0,2', '0,45', '0,9'],
    correctIndex: 1,
    explanation: 'Для независимых событий: P(A ∩ B) = P(A) · P(B) = 0,4 · 0,5 = 0,2.',
  },
  {
    question: 'События A и B взаимно исключают друг друга, P(A) = 0,3, P(B) = 0,4. Чему равно P(A ∪ B)?',
    options: ['0,1', '0,12', '0,7', '0,58'],
    correctIndex: 2,
    explanation: 'Для взаимно исключающих событий: P(A ∪ B) = P(A) + P(B) = 0,3 + 0,4 = 0,7.',
  },
  {
    question: 'Подбрасываем честную монету 3 раза. Какова вероятность того, что орёл выпадет ровно 2 раза? (Схема Бернулли)',
    options: ['1/8', '3/8', '1/2', '6/8'],
    correctIndex: 1,
    explanation: 'P(X=2) = C(3,2) · (1/2)² · (1/2)¹ = 3 · 1/4 · 1/2 = 3/8.',
  },
  {
    question: 'Условная вероятность P(A|B) вычисляется как:',
    options: ['P(A) + P(B)', 'P(A) · P(B)', 'P(A ∩ B) / P(B)', 'P(A ∪ B) / P(B)'],
    correctIndex: 2,
    explanation: 'Условная вероятность определяется формулой P(A|B) = P(A ∩ B) / P(B).',
  },
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Яка імовірність того, що при киданні кубика випаде число більше 4?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctIndex: 1,
    explanation: 'Числа більші за 4 — це 5 і 6, тобто 2 сприятливих результати з 6. P = 2/6 = 1/3.',
  },
  {
    question: 'Якщо P(A) = 0,3, яка імовірність доповняльної події A\'?',
    options: ['0,3', '0,5', '0,7', '1,3'],
    correctIndex: 2,
    explanation: 'Доповняльна подія: P(A\') = 1 − P(A) = 1 − 0,3 = 0,7.',
  },
  {
    question: 'Події A і B незалежні. P(A) = 0,4 і P(B) = 0,5. Чому дорівнює P(A ∩ B)?',
    options: ['0,1', '0,2', '0,45', '0,9'],
    correctIndex: 1,
    explanation: 'Для незалежних подій: P(A ∩ B) = P(A) · P(B) = 0,4 · 0,5 = 0,2.',
  },
  {
    question: 'Події A і B взаємно виключають одна одну, P(A) = 0,3, P(B) = 0,4. Чому дорівнює P(A ∪ B)?',
    options: ['0,1', '0,12', '0,7', '0,58'],
    correctIndex: 2,
    explanation: 'Для взаємно виключних подій: P(A ∪ B) = P(A) + P(B) = 0,3 + 0,4 = 0,7.',
  },
  {
    question: 'Підкидаємо чесну монету 3 рази. Яка імовірність того, що орел випаде рівно 2 рази? (Схема Бернуллі)',
    options: ['1/8', '3/8', '1/2', '6/8'],
    correctIndex: 1,
    explanation: 'P(X=2) = C(3,2) · (1/2)² · (1/2)¹ = 3 · 1/4 · 1/2 = 3/8.',
  },
  {
    question: 'Умовна імовірність P(A|B) обчислюється як:',
    options: ['P(A) + P(B)', 'P(A) · P(B)', 'P(A ∩ B) / P(B)', 'P(A ∪ B) / P(B)'],
    correctIndex: 2,
    explanation: 'Умовна імовірність визначається формулою P(A|B) = P(A ∩ B) / P(B).',
  },
]

const activeQuiz = computed(() => {
  if (locale.value === 'ru') return quizRu
  if (locale.value === 'uk') return quizUk
  return quiz
})

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => activeQuiz.value[currentQ.value] as QuizQuestion)

function selectAnswer(i: number) {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = i
  if (i === currentQuestion.value.correctIndex) quizScore.value++
}

function nextQuestion() {
  if (currentQ.value < activeQuiz.value.length - 1) {
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
  const r = quizScore.value / activeQuiz.value.length
  return r === 1 ? '🏆' : r >= 0.7 ? '🎉' : r >= 0.4 ? '💪' : '📚'
})

const scoreMessage = computed(() => {
  const r = quizScore.value / activeQuiz.value.length
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
