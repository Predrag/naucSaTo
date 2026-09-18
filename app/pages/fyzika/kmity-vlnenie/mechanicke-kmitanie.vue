<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/kmity-vlnenie" class="hover:text-emerald-600 transition-colors">Kmity a vlnenie</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Mechanické kmitanie</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔔</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">{{ activeTitle ?? 'Mechanické kmitanie' }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">Perióda, frekvencia, harmonické kmitanie a rezonancia — základ pre pochopenie kmitov, vĺn a zvuku.</p>

    <!-- Intro -->
    <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-10">
      <p class="text-gray-700 leading-relaxed">
        <strong>Kmitavý pohyb</strong> je periodický pohyb, pri ktorom teleso opakovane prechádza
        rovnakými polohami. Stretávame sa s ním všade — od hodinového kyvadla cez struny hudobných
        nástrojov až po atómy v kryštálovej mriežke. Pochopenie kmitania je základom akustiky, optiky
        aj kvantovej fyziky.
      </p>
    </div>

    <!-- ===== SEKCIA 1: Základné pojmy ===== -->
    <section aria-label="Základné pojmy kmitavého pohybu" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
        <span class="text-purple-600">1.</span> Základné pojmy
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        Kmitavý pohyb opisujeme pomocou štyroch základných veličín. Ich vzájomné vzťahy sú kľúčové
        pre riešenie akýchkoľvek úloh o kmitaní.
      </p>

      <!-- Tabuľka veličín -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-purple-700 text-white">
              <th scope="col" class="text-left px-5 py-3 font-semibold">Veličina</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Symbol</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th scope="col" class="text-left px-5 py-3 font-semibold">Definícia</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="px-5 py-3 font-medium text-gray-800">Perióda</td>
              <td class="px-5 py-3 text-purple-700"><MathFormula formula="T" /></td>
              <td class="px-5 py-3 text-gray-600">s (sekunda)</td>
              <td class="px-5 py-3 text-gray-600">Čas jedného úplného kmitu</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-5 py-3 font-medium text-gray-800">Frekvencia</td>
              <td class="px-5 py-3 text-purple-700"><MathFormula formula="f" /></td>
              <td class="px-5 py-3 text-gray-600">Hz (hertz)</td>
              <td class="px-5 py-3 text-gray-600">Počet kmitov za sekundu</td>
            </tr>
            <tr class="bg-white">
              <td class="px-5 py-3 font-medium text-gray-800">Uhlová frekvencia</td>
              <td class="px-5 py-3 text-purple-700"><MathFormula formula="\omega" /></td>
              <td class="px-5 py-3 text-gray-600">rad/s</td>
              <td class="px-5 py-3 text-gray-600">Rýchlosť zmeny fázy kmitania</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-5 py-3 font-medium text-gray-800">Amplitúda</td>
              <td class="px-5 py-3 text-purple-700"><MathFormula formula="A" /></td>
              <td class="px-5 py-3 text-gray-600">m (meter)</td>
              <td class="px-5 py-3 text-gray-600">Maximálna výchylka od rovnovážnej polohy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Kľúčové vzorce -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
        <p class="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-4">Základné vzťahy</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl p-4 text-center border border-purple-100">
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">Frekvencia</p>
            <MathFormula display formula="f = \frac{1}{T}" />
          </div>
          <div class="bg-white rounded-xl p-4 text-center border border-purple-100">
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">Perióda</p>
            <MathFormula display formula="T = \frac{1}{f}" />
          </div>
          <div class="bg-white rounded-xl p-4 text-center border border-purple-100">
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">Uhlová frekvencia</p>
            <MathFormula display formula="\omega = 2\pi f = \frac{2\pi}{T}" />
          </div>
        </div>
      </div>

      <!-- Príklad 1 -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Príklad 1: Perióda a frekvencia kyvadla</h3>
        <p class="text-gray-700 mb-4">
          Kyvadlo hodín vykoná 90 kmitov za 45 sekúnd. Vypočítajte periódu, frekvenciu
          a uhlovú frekvenciu kmitania.
        </p>
        <div class="space-y-3 text-gray-700">
          <p class="font-medium">Dané: N = 90, t = 45 s</p>
          <div>
            <p class="text-sm text-gray-500 mb-1">Perióda:</p>
            <MathFormula display formula="T = \frac{t}{N} = \frac{45\,\text{s}}{90} = 0{,}5\,\text{s}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Frekvencia:</p>
            <MathFormula display formula="f = \frac{1}{T} = \frac{1}{0{,}5\,\text{s}} = 2\,\text{Hz}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Uhlová frekvencia:</p>
            <MathFormula display formula="\omega = 2\pi f = 2\pi \cdot 2\,\text{Hz} \approx 12{,}6\,\text{rad/s}" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 2: Harmonické kmitanie ===== -->
    <section aria-label="Harmonické kmitanie — rovnice pohybu" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
        <span class="text-purple-600">2.</span> Harmonické kmitanie
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        <strong>Harmonické kmitanie</strong> je najjednoduchší druh kmitavého pohybu — výchylka sa mení
        ako sínus alebo kosínus času. Ideálne príklady sú pružinový oscilátor alebo matematické
        kyvadlo pri malých výchylkách (do asi 5°).
      </p>

      <!-- Rovnice pohybu -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
        <p class="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-5">Rovnice harmonického kmitania</p>

        <div class="space-y-6">
          <div class="bg-white rounded-xl p-4 border border-purple-100">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">1</span>
              <p class="font-semibold text-gray-800">Výchylka (poloha)</p>
            </div>
            <MathFormula display formula="x(t) = A \cdot \cos(\omega t + \varphi_0)" />
            <p class="text-xs text-gray-500 mt-2">
              kde <MathFormula formula="\varphi_0" /> je počiatočná fáza [rad]
            </p>
          </div>

          <div class="bg-white rounded-xl p-4 border border-purple-100">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">2</span>
              <p class="font-semibold text-gray-800">Okamžitá rýchlosť</p>
            </div>
            <MathFormula display formula="v(t) = -A\omega \cdot \sin(\omega t + \varphi_0)" />
            <p class="text-xs text-gray-500 mt-2">
              Maximálna rýchlosť: <MathFormula formula="v_{\max} = A\omega" />
            </p>
          </div>

          <div class="bg-white rounded-xl p-4 border border-purple-100">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
              <p class="font-semibold text-gray-800">Okamžité zrýchlenie</p>
            </div>
            <MathFormula display formula="a(t) = -A\omega^2 \cdot \cos(\omega t + \varphi_0)" />
            <p class="text-xs text-gray-500 mt-2">
              Maximálne zrýchlenie: <MathFormula formula="a_{\max} = A\omega^2" />.
              Platí aj: <MathFormula formula="a = -\omega^2 x" /> — zrýchlenie je vždy opačné ku výchylke.
            </p>
          </div>
        </div>
      </div>

      <!-- Dôležitá súvislosť -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
        <h3 class="font-semibold text-amber-800 mb-3">Fázový posun medzi veličinami</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-4">
          Rýchlosť je deriváciou výchylky, zrýchlenie je deriváciou rýchlosti. Preto:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm">
          <div class="bg-white rounded-xl p-3 border border-amber-200">
            <p class="font-bold text-purple-700 mb-1">Výchylka x</p>
            <MathFormula formula="\cos(\omega t)" />
            <p class="text-xs text-gray-500 mt-1">referencia (0°)</p>
          </div>
          <div class="bg-white rounded-xl p-3 border border-amber-200">
            <p class="font-bold text-blue-700 mb-1">Rýchlosť v</p>
            <MathFormula formula="-\sin(\omega t)" />
            <p class="text-xs text-gray-500 mt-1">oneskorená o 90°</p>
          </div>
          <div class="bg-white rounded-xl p-3 border border-amber-200">
            <p class="font-bold text-red-700 mb-1">Zrýchlenie a</p>
            <MathFormula formula="-\cos(\omega t)" />
            <p class="text-xs text-gray-500 mt-1">oneskorená o 180°</p>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-3 text-center">
          Keď je výchylka maximálna → rýchlosť je nulová. Keď teleso prechádza rovnovážnou polohou → rýchlosť je maximálna.
        </p>
      </div>

      <!-- Príklad 2 -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Príklad 2: Maximálna rýchlosť a zrýchlenie</h3>
        <p class="text-gray-700 mb-4">
          Teleso kmitá harmonicky s amplitúdou A = 0,1 m a frekvenciou f = 5 Hz.
          Vypočítajte uhlovú frekvenciu, maximálnu rýchlosť a maximálne zrýchlenie telesa.
        </p>
        <div class="space-y-3 text-gray-700">
          <p class="font-medium">Dané: A = 0,1 m, f = 5 Hz</p>
          <div>
            <p class="text-sm text-gray-500 mb-1">Uhlová frekvencia:</p>
            <MathFormula display formula="\omega = 2\pi f = 2\pi \cdot 5 = 10\pi \approx 31{,}4\,\text{rad/s}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Maximálna rýchlosť:</p>
            <MathFormula display formula="v_{\max} = A\omega = 0{,}1\,\text{m} \cdot 10\pi\,\text{rad/s} \approx 3{,}14\,\text{m/s}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Maximálne zrýchlenie:</p>
            <MathFormula display formula="a_{\max} = A\omega^2 = 0{,}1 \cdot (10\pi)^2 \approx 98{,}7\,\text{m/s}^2 \approx 10\,g" />
          </div>
          <p class="text-sm text-gray-500 bg-blue-100 rounded-lg px-3 py-2">
            Maximálne zrýchlenie je takmer 10-násobok gravitačného zrýchlenia!
          </p>
        </div>
      </div>
    </section>

    <!-- ===== SEKCIA 3: Nútené kmitanie, rezonancia, útlm ===== -->
    <section aria-label="Nútené kmitanie, rezonancia a útlm" class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
        <span class="text-purple-600">3.</span> Nútené kmitanie, rezonancia a útlm
      </h2>

      <p class="text-gray-700 mb-5 leading-relaxed">
        V reálnom svete teleso nikdy nekmieta donekonečna — odpor prostredia spôsobuje <strong>útlm</strong>.
        Vonkajšia periodická sila môže kmitanie udržiavať alebo zosilňovať — vtedy hovoríme
        o <strong>nútenom kmitaní</strong> a <strong>rezonancii</strong>.
      </p>

      <!-- Tri typy kmitania -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 class="font-semibold text-gray-800 mb-2">Voľné kmitanie</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Teleso kmieta vlastnou <strong>prirodzenou frekvenciou</strong>
            <MathFormula formula="f_0" /> bez vonkajšej sily. V ideálnom prípade (bez trenia)
            kmieta stále rovnakou amplitúdou.
          </p>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h3 class="font-semibold text-orange-800 mb-2">Tlmené kmitanie</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Amplitúda sa postupne zmenšuje vplyvom odporu prostredia (trenie, odpor vzduchu).
            Energia sa premieňa na <strong>teplo</strong>.
          </p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-2xl p-5">
          <h3 class="font-semibold text-purple-800 mb-2">Nútené kmitanie</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Vonkajšia periodická sila (budiaca sila) s frekvenciou <MathFormula formula="f" />
            udržiava alebo zosilňuje kmitanie. Teleso kmieta frekvenciou budiacej sily.
          </p>
        </div>
      </div>

      <!-- Rezonancia -->
      <div class="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-red-800 mb-3">Rezonancia</h3>
        <p class="text-gray-700 mb-3 leading-relaxed">
          <strong>Rezonancia</strong> nastáva, keď sa frekvencia budiacej sily rovná
          vlastnej frekvencii telesa:
        </p>
        <MathFormula display formula="f_{\text{budiaca}} = f_0" />
        <p class="text-gray-700 mt-3 mb-4 leading-relaxed">
          Pri rezonancii amplitúda kmitania rastie na veľmi vysoké hodnoty — sústava
          absorbuje maximálnu energiu z budiacej sily.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p class="text-sm font-semibold text-red-700 mb-2">Nebezpečné prípady:</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>— most Tacoma Narrows (1940) — zrútenie vplyvom vetra</li>
              <li>— rezonancia budov pri zemetrasení</li>
              <li>— únava materiálu strojov</li>
            </ul>
          </div>
          <div>
            <p class="text-sm font-semibold text-green-700 mb-2">Využitie rezonancie:</p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>— ozvučnica gitary a huslí</li>
              <li>— MRI (magnetická rezonancia)</li>
              <li>— ladenie rádiového prijímača</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Príklad 3 -->
      <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 class="text-lg font-semibold text-blue-800 mb-3">Príklad 3: Vlastná frekvencia pružinového oscilátora</h3>
        <p class="text-gray-700 mb-4">
          Teleso s hmotnosťou m = 0,4 kg je zavesené na pružine s tuhosťou k = 100 N/m.
          Vypočítajte vlastnú uhlovú frekvenciu, vlastnú frekvenciu a periódu kmitania.
        </p>
        <div class="space-y-3 text-gray-700">
          <p class="font-medium">Dané: m = 0,4 kg, k = 100 N/m</p>
          <div>
            <p class="text-sm text-gray-500 mb-1">Vlastná uhlová frekvencia:</p>
            <MathFormula display formula="\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{100\,\text{N/m}}{0{,}4\,\text{kg}}} = \sqrt{250} \approx 15{,}8\,\text{rad/s}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Vlastná frekvencia:</p>
            <MathFormula display formula="f_0 = \frac{\omega_0}{2\pi} = \frac{15{,}8}{2\pi} \approx 2{,}51\,\text{Hz}" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Perióda vlastného kmitania:</p>
            <MathFormula display formula="T_0 = \frac{1}{f_0} \approx \frac{1}{2{,}51} \approx 0{,}40\,\text{s}" />
          </div>
          <p class="text-sm text-gray-500 bg-blue-100 rounded-lg px-3 py-2">
            Ak by sme pôsobili vonkajšou silou s frekvenciou 2,51 Hz, nastala by rezonancia.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== ZHRNUTIE ===== -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-5">Zhrnutie — Mechanické kmitanie</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Základné veličiny</h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>— <strong>Perióda T</strong> — čas jedného kmitu [s]</li>
            <li>— <strong>Frekvencia</strong> <MathFormula formula="f = 1/T" /> [Hz]</li>
            <li>— <strong>Uhlová frekvencia</strong> <MathFormula formula="\omega = 2\pi f" /> [rad/s]</li>
            <li>— <strong>Amplitúda A</strong> — max. výchylka [m]</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Harmonické kmitanie</h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>— Výchylka: <MathFormula formula="x = A\cos(\omega t + \varphi_0)" /></li>
            <li>— Rýchlosť: <MathFormula formula="v = -A\omega\sin(\omega t)" /></li>
            <li>— Zrýchlenie: <MathFormula formula="a = -A\omega^2\cos(\omega t)" /></li>
            <li>— Platí vždy: <MathFormula formula="a = -\omega^2 x" /></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Typy kmitania</h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>— <strong>Voľné</strong> — vlastná frekvencia, bez strát</li>
            <li>— <strong>Tlmené</strong> — klesajúca amplitúda (trenie)</li>
            <li>— <strong>Nútené</strong> — vonkajšia budiaca sila</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">Rezonancia</h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>— Podmienka: <MathFormula formula="f_{\text{budiaca}} = f_0" /></li>
            <li>— Amplitúda narastá na maximum</li>
            <li>— Využitie: hudobné nástroje, MRI, rádiá</li>
            <li>— Riziko: zrútenie konštrukcií</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ===== KVÍZ ===== -->
    <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 class="text-xl font-bold text-gray-800 mb-1">Kvíz — Mechanické kmitanie</h2>
      <p class="text-gray-500 text-sm mb-6">Otestujte si vedomosti — 6 otázok (mix výpočty + definície + aplikácie)</p>

      <div v-if="!quizFinished">
        <!-- Progress bar -->
        <div data-testid="quiz-progress" class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-purple-600">Skóre: {{ quizScore }} / {{ quiz.length }}</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            class="bg-purple-500 h-2 rounded-full transition-all duration-300"
            :style="{ width: (currentQ / quiz.length * 100) + '%' }"
          />
        </div>

        <!-- Otázka -->
        <div data-testid="question" class="mb-5">
          <p class="text-gray-800 font-medium text-lg leading-relaxed" v-html="currentQuestion.question"/>
        </div>

        <!-- Možnosti -->
        <div class="space-y-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="'option-' + i"
            :class="[
              'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm',
              selectedAnswer === null
                ? 'border-gray-200 hover:border-purple-400 hover:bg-purple-50 cursor-pointer'
                : i === currentQuestion.correctIndex
                  ? 'border-green-500 bg-green-50 text-green-800 font-medium'
                  : i === selectedAnswer
                    ? 'border-red-400 bg-red-50 text-red-700'
                    : 'border-gray-100 text-gray-400 cursor-default'
            ]"
            @click="selectAnswer(i)"
          >
            <span class="font-bold mr-2 text-gray-400">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
            <span v-html="option"/>
          </button>
        </div>

        <!-- Spätná väzba -->
        <Transition name="fade">
          <div
            v-if="selectedAnswer !== null"
            data-testid="feedback"
            :class="[
              'rounded-xl p-4 mb-5 text-sm leading-relaxed',
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

        <!-- Tlačidlo Ďalej -->
        <div class="flex justify-end">
          <button
            v-if="selectedAnswer !== null"
            type="button"
            data-testid="next-btn"
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            @click="nextQuestion"
          >
            {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok' }}
          </button>
        </div>
      </div>

      <!-- Výsledok -->
      <div v-else data-testid="result" class="text-center py-8">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
        <p data-testid="score" class="text-gray-500 mb-8">
          Dosiahli ste <strong class="text-gray-800">{{ quizScore }}</strong>
          z <strong class="text-gray-800">{{ quiz.length }}</strong> bodov
          ({{ Math.round(quizScore / quiz.length * 100) }} %)
        </p>
        <button
          type="button"
          data-testid="reset-btn"
          class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

// --------------- KVÍZ ---------------
const quiz = [
  {
    question: 'Kyvadlo vykoná 80 kmitov za 40 sekúnd. Aká je jeho frekvencia?',
    options: ['0,5 Hz', '1 Hz', '2 Hz', '80 Hz'],
    correctIndex: 2,
    explanation: `${km('f = N/t = 80/40 = 2\\,\\text{Hz}')}. Frekvencia je počet úplných kmitov za sekundu.`
  },
  {
    question: 'Čo vyjadruje amplitúda harmonického kmitania?',
    options: [
      'Čas jedného úplného kmitu',
      'Maximálnu výchylku telesa od rovnovážnej polohy',
      'Počet kmitov za sekundu',
      'Rýchlosť telesa v rovnovážnej polohe'
    ],
    correctIndex: 1,
    explanation: 'Amplitúda A je maximálna výchylka telesa od rovnovážnej polohy. Udáva sa v metroch a závisí od počiatočných podmienok (napr. s akou silou sme teleso vychy­lili).'
  },
  {
    question: `Teleso kmitá podľa rovnice ${km('x(t)=A\\cos(\\omega t)')}. Kedy je jeho rýchlosť najväčšia?`,
    options: [
      'Keď je výchylka maximálna (teleso je v krajnej polohe)',
      'Keď je výchylka nulová (teleso prechádza rovnovážnou polohou)',
      'Keď je zrýchlenie maximálne',
      'Rýchlosť sa nemení — je vždy rovnaká'
    ],
    correctIndex: 1,
    explanation: `Rýchlosť ${km('v = -A\\omega\\sin(\\omega t)')} je maximálna, keď ${km('|\\sin(\\omega t)| = 1')} — teda keď výchylka ${km('x = 0')}. V krajných polohách je rýchlosť nulová.`
  },
  {
    question: `Harmonický oscilátor má amplitúdu A = 0,2 m a uhlovú frekvenciu ${km('\\omega = 10\\,\\text{rad/s}')}. Aké je jeho maximálne zrýchlenie?`,
    options: ['2 m/s²', '10 m/s²', '20 m/s²', '200 m/s²'],
    correctIndex: 2,
    explanation: `${km('a_{\\max} = A\\omega^2 = 0{,}2\\,\\text{m} \\cdot (10)^2 = 0{,}2 \\cdot 100 = 20\\,\\text{m/s}^2')}`
  },
  {
    question: 'Kedy nastáva rezonancia pri nútenom kmitaní?',
    options: [
      'Keď je frekvencia budiacej sily dvojnásobkom vlastnej frekvencie sústavy',
      'Keď je frekvencia budiacej sily rovná vlastnej frekvencii sústavy',
      'Keď je amplitúda budiacej sily maximálna',
      'Keď je sústava dokonale tlmená'
    ],
    correctIndex: 1,
    explanation: `Rezonancia nastáva pri ${km('f_{\\text{budiaca}} = f_0')}. Vtedy sústava absorbuje maximálnu energiu a amplitúda kmitania narastá na veľmi vysoké hodnoty.`
  },
  {
    question: `Aká je vlastná uhlová frekvencia pružinového oscilátora s tuhosťou k = 400 N/m a hmotnosťou m = 4 kg?`,
    options: [
      `${km('5\\,\\text{rad/s}')}`,
      `${km('10\\,\\text{rad/s}')}`,
      `${km('100\\,\\text{rad/s}')}`,
      `${km('40\\,\\text{rad/s}')}`
    ],
    correctIndex: 1,
    explanation: `${km('\\omega_0 = \\sqrt{k/m} = \\sqrt{400/4} = \\sqrt{100} = 10\\,\\text{rad/s}')}`
  }
]

const quizRu: QuizQuestion[] = [
  {
    question: 'Маятник совершает 80 колебаний за 40 секунд. Какова его частота?',
    options: ['0,5 Гц', '1 Гц', '2 Гц', '80 Гц'],
    correctIndex: 2,
    explanation: `${km('f = N/t = 80/40 = 2\\,\\text{Гц}')}. Частота — количество полных колебаний в секунду.`
  },
  {
    question: 'Что выражает амплитуда гармонических колебаний?',
    options: [
      'Время одного полного колебания',
      'Максимальное отклонение тела от положения равновесия',
      'Количество колебаний в секунду',
      'Скорость тела в положении равновесия'
    ],
    correctIndex: 1,
    explanation: 'Амплитуда A — максимальное отклонение тела от положения равновесия. Измеряется в метрах и зависит от начальных условий (например, с какой силой было отклонено тело).'
  },
  {
    question: `Тело колеблется по уравнению ${km('x(t)=A\\cos(\\omega t)')}. Когда его скорость наибольшая?`,
    options: [
      'Когда отклонение максимально (тело находится в крайнем положении)',
      'Когда отклонение равно нулю (тело проходит через положение равновесия)',
      'Когда ускорение максимально',
      'Скорость не изменяется — всегда постоянна'
    ],
    correctIndex: 1,
    explanation: `Скорость ${km('v = -A\\omega\\sin(\\omega t)')} наибольшая, когда ${km('|\\sin(\\omega t)| = 1')} — то есть когда отклонение ${km('x = 0')}. В крайних положениях скорость равна нулю.`
  },
  {
    question: `Гармонический осциллятор имеет амплитуду A = 0,2 м и угловую частоту ${km('\\omega = 10\\,\\text{рад/с}')}. Каково его максимальное ускорение?`,
    options: ['2 м/с²', '10 м/с²', '20 м/с²', '200 м/с²'],
    correctIndex: 2,
    explanation: `${km('a_{\\max} = A\\omega^2 = 0{,}2\\,\\text{м} \\cdot (10)^2 = 0{,}2 \\cdot 100 = 20\\,\\text{м/с}^2')}`
  },
  {
    question: 'Когда возникает резонанс при вынужденных колебаниях?',
    options: [
      'Когда частота вынуждающей силы вдвое больше собственной частоты системы',
      'Когда частота вынуждающей силы равна собственной частоте системы',
      'Когда амплитуда вынуждающей силы максимальна',
      'Когда система полностью затухает'
    ],
    correctIndex: 1,
    explanation: `Резонанс возникает при ${km('f_{\\text{буд}} = f_0')}. Тогда система поглощает максимальную энергию и амплитуда колебаний резко возрастает.`
  },
  {
    question: 'Какова собственная угловая частота пружинного осциллятора с жёсткостью k = 400 Н/м и массой m = 4 кг?',
    options: [
      `${km('5\\,\\text{рад/с}')}`,
      `${km('10\\,\\text{рад/с}')}`,
      `${km('100\\,\\text{рад/с}')}`,
      `${km('40\\,\\text{рад/с}')}`
    ],
    correctIndex: 1,
    explanation: `${km('\\omega_0 = \\sqrt{k/m} = \\sqrt{400/4} = \\sqrt{100} = 10\\,\\text{рад/с}')}`
  }
]

const quizUk: QuizQuestion[] = [
  {
    question: 'Маятник здійснює 80 коливань за 40 секунд. Яка його частота?',
    options: ['0,5 Гц', '1 Гц', '2 Гц', '80 Гц'],
    correctIndex: 2,
    explanation: `${km('f = N/t = 80/40 = 2\\,\\text{Гц}')}. Частота — кількість повних коливань за секунду.`
  },
  {
    question: 'Що виражає амплітуда гармонічних коливань?',
    options: [
      'Час одного повного коливання',
      'Максимальне відхилення тіла від положення рівноваги',
      'Кількість коливань за секунду',
      'Швидкість тіла в положенні рівноваги'
    ],
    correctIndex: 1,
    explanation: 'Амплітуда A — максимальне відхилення тіла від положення рівноваги. Вимірюється в метрах і залежить від початкових умов (наприклад, з якою силою ми відхилили тіло).'
  },
  {
    question: `Тіло коливається за рівнянням ${km('x(t)=A\\cos(\\omega t)')}. Коли його швидкість найбільша?`,
    options: [
      'Коли відхилення максимальне (тіло знаходиться в крайньому положенні)',
      'Коли відхилення дорівнює нулю (тіло проходить через положення рівноваги)',
      'Коли прискорення максимальне',
      'Швидкість не змінюється — завжди постійна'
    ],
    correctIndex: 1,
    explanation: `Швидкість ${km('v = -A\\omega\\sin(\\omega t)')} найбільша, коли ${km('|\\sin(\\omega t)| = 1')} — тобто коли відхилення ${km('x = 0')}. У крайніх положеннях швидкість дорівнює нулю.`
  },
  {
    question: `Гармонічний осцилятор має амплітуду A = 0,2 м і кутову частоту ${km('\\omega = 10\\,\\text{рад/с}')}. Яке його максимальне прискорення?`,
    options: ['2 м/с²', '10 м/с²', '20 м/с²', '200 м/с²'],
    correctIndex: 2,
    explanation: `${km('a_{\\max} = A\\omega^2 = 0{,}2\\,\\text{м} \\cdot (10)^2 = 0{,}2 \\cdot 100 = 20\\,\\text{м/с}^2')}`
  },
  {
    question: 'Коли виникає резонанс при вимушених коливаннях?',
    options: [
      'Коли частота вимушуючої сили вдвічі більша за власну частоту системи',
      'Коли частота вимушуючої сили дорівнює власній частоті системи',
      'Коли амплітуда вимушуючої сили максимальна',
      'Коли система повністю загасає'
    ],
    correctIndex: 1,
    explanation: `Резонанс виникає при ${km('f_{\\text{збудж}} = f_0')}. Тоді система поглинає максимальну енергію і амплітуда коливань різко зростає.`
  },
  {
    question: 'Яка власна кутова частота пружинного осцилятора з жорсткістю k = 400 Н/м і масою m = 4 кг?',
    options: [
      `${km('5\\,\\text{рад/с}')}`,
      `${km('10\\,\\text{рад/с}')}`,
      `${km('100\\,\\text{рад/с}')}`,
      `${km('40\\,\\text{рад/с}')}`
    ],
    correctIndex: 1,
    explanation: `${km('\\omega_0 = \\sqrt{k/m} = \\sqrt{400/4} = \\sqrt{100} = 10\\,\\text{рад/с}')}`
  }
]

const { locale } = useI18n()

const titleRu = 'Механические колебания'
const titleUk = 'Механічні коливання'
const activeTitle = computed(() => locale.value === 'ru' ? titleRu : locale.value === 'uk' ? titleUk : null)

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

// --------------- SEO ---------------
useHead({
  title: 'Mechanické kmitanie | Fyzika | Náuka Portál',
  meta: [
    {
      name: 'description',
      content: 'Perióda, frekvencia, uhlová frekvencia, harmonické kmitanie, rezonancia a útlm. Vzorce, tri vypočítané príklady a kvíz pre gymnazistov.'
    }
  ]
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
