<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/matematika/logika-a-dokazovanie" class="hover:text-blue-600 transition-colors">Logika, dôkazy a postupnosti</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Výroky a logika</span>
    </nav>

    <!-- Title -->
    <div class="flex items-center gap-4 mb-6">
      <span class="text-5xl">💬</span>
      <h1 class="text-4xl font-bold text-blue-700">Výroky a logika</h1>
    </div>

    <!-- Intro -->
    <p class="text-lg text-gray-600 mb-12 leading-relaxed">
      Logika je základom matematického myslenia. Naučíme sa pracovať s výrokmi — tvrdeniami, ktoré môžu byť pravdivé alebo nepravdivé — a spájať ich pomocou logických spojok. Tieto nástroje nám umožnia budovať matematické dôkazy a odhaľovať skryté súvislosti.
    </p>

    <!-- Section 1: Čo je výrok? -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">1. Čo je výrok?</h2>
      <p class="text-gray-700 mb-4">
        <strong>Výrok</strong> je tvrdenie, ktorému vieme jednoznačne priradiť pravdivostnú hodnotu — buď
        <span class="text-green-600 font-semibold">pravda (P, 1)</span> alebo
        <span class="text-red-600 font-semibold">nepravda (N, 0)</span>.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 class="font-semibold text-green-700 mb-2">✓ Sú výrokmi:</h3>
          <ul class="space-y-1 text-gray-700">
            <li>„2 + 2 = 4" <span class="text-green-600">(pravda)</span></li>
            <li>„5 je párne číslo" <span class="text-red-600">(nepravda)</span></li>
            <li>„Praha leží v Čechách" <span class="text-green-600">(pravda)</span></li>
            <li>„Každé prvočíslo je nepárne" <span class="text-red-600">(nepravda, 2 je prvočíslo)</span></li>
          </ul>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 class="font-semibold text-red-700 mb-2">✗ Nie sú výrokmi:</h3>
          <ul class="space-y-1 text-gray-700">
            <li>„Koľko je 2 + 2?" <span class="text-gray-500">(otázka)</span></li>
            <li>„Vypočítaj x + 3 = 7" <span class="text-gray-500">(príkaz)</span></li>
            <li>„Toto číslo je veľké" <span class="text-gray-500">(subjektívne)</span></li>
            <li>„x &gt; 5" <span class="text-gray-500">(otvorený výrok — závisí od x)</span></li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
        <p class="text-blue-800">
          <strong>Otvorený výrok</strong> (propozičná funkcia) <MathFormula formula="V(x)" /> obsahuje premennú
          a stáva sa výrokom až po dosadení konkrétnej hodnoty. Napríklad
          <MathFormula formula="V(x){:}\, x^2 = 9" /> — pre <MathFormula formula="x = 3" /> je pravdivý,
          pre <MathFormula formula="x = 5" /> nepravdivý.
        </p>
      </div>
    </section>

    <!-- Section 2: Logické spojky -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">2. Logické spojky</h2>
      <p class="text-gray-700 mb-6">
        Z jednoduchých výrokov tvoríme zložené výroky pomocou <strong>logických spojok</strong>.
        Pravdivosť zloženého výroku závisí od pravdivosti jeho zložiek.
      </p>

      <!-- Negation -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <h3 class="font-bold text-lg text-blue-600 mb-2">
          Negácia <MathFormula formula="\neg A" />
        </h3>
        <p class="text-gray-700 mb-3">
          Negácia výroku A je pravdivá práve vtedy, keď A je nepravdivé, a naopak. Čítame „nie A".
        </p>
        <div class="overflow-x-auto mb-3">
          <table class="border-collapse border border-gray-300 text-center">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-gray-300 px-8 py-2">A</th>
                <th class="border border-gray-300 px-8 py-2"><MathFormula formula="\neg A" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-8 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-8 py-2 text-red-600 font-medium">N</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-8 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-8 py-2 text-green-600 font-medium">P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-gray-600 text-sm">
          <strong>Príklad:</strong> A = „5 je párne". Potom ¬A = „5 nie je párne" —
          čo je <span class="text-green-600">pravda</span>.
        </p>
      </div>

      <!-- Conjunction -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <h3 class="font-bold text-lg text-blue-600 mb-2">
          Konjunkcia <MathFormula formula="A \wedge B" /> (A a zároveň B)
        </h3>
        <p class="text-gray-700 mb-3">
          Konjunkcia je pravdivá len vtedy, keď sú <strong>oba</strong> výroky pravdivé.
        </p>
        <div class="overflow-x-auto mb-3">
          <table class="border-collapse border border-gray-300 text-center">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-gray-300 px-6 py-2">A</th>
                <th class="border border-gray-300 px-6 py-2">B</th>
                <th class="border border-gray-300 px-6 py-2"><MathFormula formula="A \wedge B" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Disjunction -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <h3 class="font-bold text-lg text-blue-600 mb-2">
          Disjunkcia <MathFormula formula="A \vee B" /> (A alebo B)
        </h3>
        <p class="text-gray-700 mb-3">
          Disjunkcia je nepravdivá len vtedy, keď sú <strong>oba</strong> výroky nepravdivé.
          (Inkluzívne „alebo" — platí aj keď platia oba.)
        </p>
        <div class="overflow-x-auto mb-3">
          <table class="border-collapse border border-gray-300 text-center">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-gray-300 px-6 py-2">A</th>
                <th class="border border-gray-300 px-6 py-2">B</th>
                <th class="border border-gray-300 px-6 py-2"><MathFormula formula="A \vee B" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Implication -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <h3 class="font-bold text-lg text-blue-600 mb-2">
          Implikácia <MathFormula formula="A \Rightarrow B" /> (ak A, tak B)
        </h3>
        <p class="text-gray-700 mb-3">
          Implikácia je nepravdivá <strong>iba</strong> vtedy, keď predpoklad A je pravdivý a záver B je
          nepravdivý. Ak predpoklad neplatí, implikácia je vždy pravdivá.
        </p>
        <div class="overflow-x-auto mb-3">
          <table class="border-collapse border border-gray-300 text-center">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-gray-300 px-6 py-2">A</th>
                <th class="border border-gray-300 px-6 py-2">B</th>
                <th class="border border-gray-300 px-6 py-2"><MathFormula formula="A \Rightarrow B" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-red-50">
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-700 font-bold">N ← jediný prípad!</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-gray-600 text-sm">
          <strong>Príklad:</strong> „Ak je číslo deliteľné 4, tak je deliteľné 2." (pravda)
        </p>
      </div>

      <!-- Equivalence -->
      <div class="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow-sm">
        <h3 class="font-bold text-lg text-blue-600 mb-2">
          Ekvivalencia <MathFormula formula="A \Leftrightarrow B" /> (A práve vtedy, keď B)
        </h3>
        <p class="text-gray-700 mb-3">
          Ekvivalencia je pravdivá vtedy, keď majú oba výroky rovnakú pravdivostnú hodnotu.
        </p>
        <div class="overflow-x-auto mb-3">
          <table class="border-collapse border border-gray-300 text-center">
            <thead class="bg-blue-100">
              <tr>
                <th class="border border-gray-300 px-6 py-2">A</th>
                <th class="border border-gray-300 px-6 py-2">B</th>
                <th class="border border-gray-300 px-6 py-2"><MathFormula formula="A \Leftrightarrow B" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-red-600 font-medium">N</td>
                <td class="border border-gray-300 px-6 py-2 text-green-600 font-medium">P</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Section 3: SVG Illustration -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">3. Vizualizácia: Implikácia a množinové diagramy</h2>

      <div class="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
        <svg
          role="img"
          aria-label="Pravdivostná tabuľka pre implikáciu A⇒B a Vennove diagramy pre konjunkciu A∧B a disjunkciu A∨B"
          viewBox="0 0 720 310"
          class="w-full max-w-2xl mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Truth Table panel -->
          <rect x="10" y="10" width="270" height="290" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="145" y="36" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">Tabuľka pravdivosti: A ⇒ B</text>

          <!-- Header -->
          <rect x="20" y="46" width="250" height="32" rx="4" fill="#3b82f6" />
          <text x="80" y="67" text-anchor="middle" font-size="13" font-weight="bold" fill="white">A</text>
          <text x="145" y="67" text-anchor="middle" font-size="13" font-weight="bold" fill="white">B</text>
          <text x="230" y="67" text-anchor="middle" font-size="13" font-weight="bold" fill="white">A ⇒ B</text>

          <!-- Row 1 -->
          <rect x="20" y="80" width="250" height="44" fill="white" />
          <text x="80" y="106" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>
          <text x="145" y="106" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>
          <text x="230" y="106" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>

          <!-- Row 2 highlighted -->
          <rect x="20" y="126" width="250" height="44" fill="#fee2e2" />
          <text x="80" y="152" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>
          <text x="145" y="152" text-anchor="middle" font-size="14" fill="#dc2626" font-weight="600">N</text>
          <text x="230" y="152" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="700">N ← !</text>

          <!-- Row 3 -->
          <rect x="20" y="172" width="250" height="44" fill="white" />
          <text x="80" y="198" text-anchor="middle" font-size="14" fill="#dc2626" font-weight="600">N</text>
          <text x="145" y="198" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>
          <text x="230" y="198" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>

          <!-- Row 4 -->
          <rect x="20" y="218" width="250" height="44" fill="#f0fdf4" />
          <text x="80" y="244" text-anchor="middle" font-size="14" fill="#dc2626" font-weight="600">N</text>
          <text x="145" y="244" text-anchor="middle" font-size="14" fill="#dc2626" font-weight="600">N</text>
          <text x="230" y="244" text-anchor="middle" font-size="14" fill="#16a34a" font-weight="600">P</text>

          <text x="145" y="288" text-anchor="middle" font-size="10" fill="#6b7280">Nepravdivá iba keď A=P, B=N</text>

          <!-- Venn diagrams panel -->
          <rect x="295" y="10" width="415" height="290" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="502" y="36" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">Vennove diagramy</text>

          <!-- A∧B label -->
          <text x="380" y="58" text-anchor="middle" font-size="12" font-weight="600" fill="#1d4ed8">A ∧ B (prienik)</text>

          <!-- A∧B circles -->
          <circle cx="358" cy="125" r="52" fill="#bfdbfe" fill-opacity="0.7" stroke="#3b82f6" stroke-width="2" />
          <circle cx="408" cy="125" r="52" fill="#bfdbfe" fill-opacity="0.7" stroke="#3b82f6" stroke-width="2" />
          <!-- Intersection highlight via clipPath -->
          <defs>
            <clipPath id="clip-and">
              <circle cx="358" cy="125" r="52" />
            </clipPath>
          </defs>
          <circle cx="408" cy="125" r="52" fill="#1d4ed8" fill-opacity="0.65" clip-path="url(#clip-and)" />
          <text x="332" y="130" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="600">A</text>
          <text x="434" y="130" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="600">B</text>
          <text x="383" y="130" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A∧B</text>

          <!-- A∨B label -->
          <text x="608" y="58" text-anchor="middle" font-size="12" font-weight="600" fill="#1d4ed8">A ∨ B (zjednotenie)</text>

          <!-- A∨B circles — both fully colored -->
          <circle cx="583" cy="125" r="52" fill="#3b82f6" fill-opacity="0.4" stroke="#3b82f6" stroke-width="2" />
          <circle cx="633" cy="125" r="52" fill="#3b82f6" fill-opacity="0.4" stroke="#3b82f6" stroke-width="2" />
          <text x="557" y="130" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="600">A</text>
          <text x="659" y="130" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="600">B</text>
          <text x="608" y="168" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="bold">celá plocha = A∨B</text>

          <!-- Contrapositive note box -->
          <rect x="305" y="200" width="395" height="90" rx="8" fill="white" stroke="#bfdbfe" stroke-width="1.5" />
          <text x="502" y="222" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Kontraponácia</text>
          <text x="502" y="243" text-anchor="middle" font-size="12" fill="#374151">A ⇒ B  je logicky ekvivalentná s</text>
          <text x="502" y="264" text-anchor="middle" font-size="14" fill="#1d4ed8" font-weight="bold">¬B ⇒ ¬A</text>
          <text x="502" y="282" text-anchor="middle" font-size="10" fill="#6b7280">(obrátená a znegovaná implikácia)</text>
        </svg>
      </div>
    </section>

    <!-- Section 4: De Morgan & Tautológia -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">4. De Morganove pravidlá a tautológia</h2>

      <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-blue-800 mb-3">De Morganove pravidlá</h3>
        <p class="text-gray-700 mb-4">Tieto pravidlá nám hovoria, ako negácia „preniká" cez logické spojky:</p>
        <div class="space-y-3">
          <div class="bg-white rounded-lg p-4 border border-blue-200">
            <MathFormula display formula="\neg(A \wedge B) \Leftrightarrow \neg A \vee \neg B" />
            <p class="text-gray-600 text-sm mt-1">„Negácia konjunkcie = disjunkcia negácií"</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-blue-200">
            <MathFormula display formula="\neg(A \vee B) \Leftrightarrow \neg A \wedge \neg B" />
            <p class="text-gray-600 text-sm mt-1">„Negácia disjunkcie = konjunkcia negácií"</p>
          </div>
        </div>
      </div>

      <!-- Example 1 -->
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
        <h3 class="font-semibold text-yellow-800 mb-3">Príklad 1: Aplikácia De Morganových pravidiel</h3>
        <p class="text-gray-700 mb-3">
          Neguj výrok: „Číslo x je deliteľné 2 <strong>a zároveň</strong> deliteľné 3."
        </p>
        <div class="bg-white rounded-lg p-4 border border-yellow-200 space-y-2">
          <p class="text-gray-700">
            <strong>Pôvodný výrok:</strong> <MathFormula formula="A \wedge B" /> kde A = „x del. 2",
            B = „x del. 3"
          </p>
          <p class="text-gray-700">
            <strong>Negácia (De Morgan):</strong>
            <MathFormula formula="\neg(A \wedge B) = \neg A \vee \neg B" />
          </p>
          <p class="text-green-700 font-medium">
            Výsledok: „Číslo x nie je deliteľné 2 <strong>alebo</strong> nie je deliteľné 3."
          </p>
        </div>
      </div>

      <!-- Tautology & Contradiction -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 class="font-bold text-green-700 mb-2">Tautológia</h3>
          <p class="text-gray-700 mb-3">
            Výrok, ktorý je <strong>vždy pravdivý</strong>, bez ohľadu na pravdivosť zložiek.
          </p>
          <MathFormula display formula="A \vee \neg A" />
          <p class="text-green-600 text-sm mt-1">
            „Platí A alebo neplatí A" — vždy pravda.
          </p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <h3 class="font-bold text-red-700 mb-2">Kontradikcia</h3>
          <p class="text-gray-700 mb-3">
            Výrok, ktorý je <strong>vždy nepravdivý</strong>, bez ohľadu na pravdivosť zložiek.
          </p>
          <MathFormula display formula="A \wedge \neg A" />
          <p class="text-red-600 text-sm mt-1">
            „Platí A a zároveň neplatí A" — vždy nepravda.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 5: Quantifiers & Contrapositive -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">5. Kvantifikátory a kontraponácia</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-2">
            Všeobecný kvantifikátor <MathFormula formula="\forall" />
          </h3>
          <p class="text-gray-700 mb-2">Čítame: „<strong>pre každé</strong> x z M platí V(x)"</p>
          <MathFormula display formula="\forall x \in M{:}\ V(x)" />
          <p class="text-gray-600 text-sm mt-2">
            <strong>Príklad:</strong>
            <MathFormula formula="\forall x \in \mathbb{N}{:}\ x + 1 > x" /> (pravda)
          </p>
          <p class="text-gray-600 text-sm mt-2">
            <strong>Negácia:</strong>
            <MathFormula formula="\neg(\forall x \in M{:}\ V(x))\ \Leftrightarrow\ \exists x \in M{:}\ \neg V(x)" />
          </p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-2">
            Existenčný kvantifikátor <MathFormula formula="\exists" />
          </h3>
          <p class="text-gray-700 mb-2">Čítame: „<strong>existuje</strong> x z M také, že V(x)"</p>
          <MathFormula display formula="\exists x \in M{:}\ V(x)" />
          <p class="text-gray-600 text-sm mt-2">
            <strong>Príklad:</strong>
            <MathFormula formula="\exists x \in \mathbb{Z}{:}\ x^2 = 4" /> (pravda, x = ±2)
          </p>
          <p class="text-gray-600 text-sm mt-2">
            <strong>Negácia:</strong>
            <MathFormula formula="\neg(\exists x \in M{:}\ V(x))\ \Leftrightarrow\ \forall x \in M{:}\ \neg V(x)" />
          </p>
        </div>
      </div>

      <!-- Example 2: Contrapositive proof -->
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
        <h3 class="font-bold text-purple-800 mb-3">Príklad 2: Kontraponácia v praxi</h3>
        <p class="text-gray-700 mb-3">
          Dokážme: „Ak je <MathFormula formula="n^2" /> párne, tak n je párne."
        </p>
        <div class="bg-white rounded-lg p-4 border border-purple-200 space-y-3">
          <p class="text-gray-700">
            <strong>Pôvodná implikácia:</strong>
            <MathFormula formula="n^2 \text{ párne} \Rightarrow n \text{ párne}" />
          </p>
          <p class="text-gray-700">
            Priamy dôkaz je komplikovaný. Použijeme <strong>kontraponáciu</strong>:
          </p>
          <p class="text-gray-700">
            <strong>Kontraponácia:</strong>
            <MathFormula formula="n \text{ nepárne} \Rightarrow n^2 \text{ nepárne}" />
          </p>
          <p class="text-gray-700">
            Ak <MathFormula formula="n = 2k + 1" /> (nepárne), potom:
          </p>
          <MathFormula display formula="n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1" />
          <p class="text-green-700 font-semibold">
            Teda <MathFormula formula="n^2" /> je nepárne. Kontraponácia platí, teda platí aj pôvodná implikácia. ∎
          </p>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Zhrnutie</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Výrok</strong> — tvrdenie s jednoznačnou pravdivostnou hodnotou (P/N)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Negácia</strong> <MathFormula formula="\neg A" /> — opačná hodnota</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Konjunkcia</strong> <MathFormula formula="A \wedge B" /> — pravdivá iba ak oba platia</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Disjunkcia</strong> <MathFormula formula="A \vee B" /> — nepravdivá iba ak oba neplatia</span>
          </li>
        </ul>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Implikácia</strong> <MathFormula formula="A \Rightarrow B" /> — nepravdivá iba ak A=P, B=N</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Ekvivalencia</strong> <MathFormula formula="A \Leftrightarrow B" /> — rovnaké pravdivostné hodnoty</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>De Morgan:</strong> <MathFormula formula="\neg(A \wedge B) = \neg A \vee \neg B" /></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-500 mt-0.5">•</span>
            <span><strong>Kontraponácia:</strong> <MathFormula formula="(A \Rightarrow B) \Leftrightarrow (\neg B \Rightarrow \neg A)" /></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Quiz -->
    <section>
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Otestuj sa</h2>

      <div v-if="!quizFinished" class="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
        <!-- Progress -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-3 text-sm text-gray-500">
          <span>Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-blue-600 font-medium">Skóre: {{ quizScore }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            class="bg-blue-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${((currentQ + 1) / quiz.length) * 100}%` }"
          />
        </div>

        <!-- Question -->
        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-800 mb-5">
          {{ currentQuestion.question }}
        </p>

        <!-- Options -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            :data-testid="`quiz-option-${i}`"
            type="button"
            class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium"
            :class="{
              'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700': selectedAnswer === null,
              'border-green-400 bg-green-50 text-green-800': selectedAnswer !== null && i === currentQuestion.correctIndex,
              'border-red-400 bg-red-50 text-red-800': selectedAnswer !== null && i === selectedAnswer && i !== currentQuestion.correctIndex,
              'border-gray-100 text-gray-400': selectedAnswer !== null && i !== selectedAnswer && i !== currentQuestion.correctIndex,
            }"
            @click="selectAnswer(i)"
          >
            <span class="mr-2">{{ ['A', 'B', 'C', 'D'][i] }}.</span>{{ option }}
          </button>
        </div>

        <!-- Feedback -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="quiz-feedback"
            class="rounded-xl p-4 mb-4"
            :class="selectedAnswer === currentQuestion.correctIndex
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'"
          >
            <p
              class="font-semibold mb-1"
              :class="selectedAnswer === currentQuestion.correctIndex ? 'text-green-700' : 'text-red-700'"
            >
              {{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne.' }}
            </p>
            <p class="text-gray-700 text-sm">{{ currentQuestion.explanation }}</p>
          </div>
        </Transition>

        <!-- Next button -->
        <button
          v-if="selectedAnswer !== null"
          data-testid="quiz-next-btn"
          type="button"
          class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
          @click="nextQuestion"
        >
          {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledky' }}
        </button>
      </div>

      <!-- Result -->
      <div v-else data-testid="quiz-result" class="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="quiz-score" class="text-gray-600 mb-6 text-lg">
          Dosiahol si <span class="font-bold text-blue-600">{{ quizScore }} z {{ quiz.length }}</span> bodov.
        </p>
        <button
          data-testid="quiz-reset-btn"
          type="button"
          class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
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

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Ktoré z nasledujúcich tvrdení JE výrokom?',
    options: [
      'Koľko je 3 + 5?',
      '7 je prvočíslo.',
      'x > 10',
      'Vypočítaj obvod štvorca so stranou a.',
    ],
    correctIndex: 1,
    explanation:
      '„7 je prvočíslo" je výrok — tvrdenie s jednoznačnou pravdivostnou hodnotou (pravda). Otázky a príkazy výrokmi nie sú. „x > 10" je otvorený výrok závisí od hodnoty premennej x.',
  },
  {
    question: 'Implikácia A ⇒ B je NEPRAVDIVÁ iba vtedy, keď:',
    options: [
      'A je nepravdivé a B je pravdivé',
      'A aj B sú pravdivé',
      'A je pravdivé a B je nepravdivé',
      'A aj B sú nepravdivé',
    ],
    correctIndex: 2,
    explanation:
      'Implikácia A ⇒ B je nepravdivá výlučne vtedy, keď predpoklad A platí (P), ale záver B neplatí (N). Vo všetkých ostatných troch prípadoch je implikácia pravdivá — vrátane situácie, keď predpoklad neplatí.',
  },
  {
    question: 'Čo hovorí De Morganovo pravidlo o negácii konjunkcie?',
    options: [
      '¬(A ∧ B) = ¬A ∧ ¬B',
      '¬(A ∧ B) = ¬A ∨ ¬B',
      '¬(A ∧ B) = A ∨ B',
      '¬(A ∧ B) = A ∧ B',
    ],
    correctIndex: 1,
    explanation:
      'De Morganovo pravidlo: ¬(A ∧ B) = ¬A ∨ ¬B. Negácia konjunkcie je disjunkcia negácií. Analogicky platí: ¬(A ∨ B) = ¬A ∧ ¬B.',
  },
  {
    question: 'Výrok A ∨ ¬A je príkladom:',
    options: [
      'Kontradikcie',
      'Otvoreného výroku',
      'Tautológie',
      'Ekvivalencie',
    ],
    correctIndex: 2,
    explanation:
      'A ∨ ¬A je tautológia — je vždy pravdivá bez ohľadu na hodnotu A. Ak A=P: P∨N=P. Ak A=N: N∨P=P. Oproti tomu kontradikcia A ∧ ¬A je vždy nepravdivá.',
  },
  {
    question: 'Čo je kontraponácia implikácie A ⇒ B?',
    options: [
      'B ⇒ A',
      '¬A ⇒ ¬B',
      '¬B ⇒ ¬A',
      'A ⇒ ¬B',
    ],
    correctIndex: 2,
    explanation:
      'Kontraponácia výroku A ⇒ B je ¬B ⇒ ¬A — obrátená a znegovaná implikácia. Tieto dve implikácie sú logicky ekvivalentné. Pozor: samotná obrátená implikácia B ⇒ A ekvivalentná nie je.',
  },
  {
    question: 'Negácia výroku „∀x ∈ ℕ: x² ≥ 0" je:',
    options: [
      '∀x ∈ ℕ: x² < 0',
      '∃x ∈ ℕ: x² < 0',
      '∃x ∈ ℕ: x² ≥ 0',
      '∀x ∈ ℕ: x² > 0',
    ],
    correctIndex: 1,
    explanation:
      'Negácia všeobecného kvantifikátora: ¬(∀x ∈ M: V(x)) ⟺ ∃x ∈ M: ¬V(x). Teda negácia „pre každé x platí x²≥0" je „existuje x také, že x²<0". Pôvodný výrok je pravdivý, takže jeho negácia je nepravdivá.',
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
