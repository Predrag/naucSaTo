<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/mechanika" class="hover:text-emerald-600 transition-colors">Mechanika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Gravitácia a voľný pád</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🌍</span>
      <h1 class="text-4xl font-extrabold text-orange-600">Gravitácia a voľný pád</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Gravitácia drží planéty na obežných dráhach, udržuje nás na Zemi a riadi každý volne padajúci predmet.
      Pochopíme Newtonov zákon, gravitačné zrýchlenie a pád telesa v reálnych podmienkach.
    </p>

    <!-- Section 1: Newtonov gravitačný zákon -->
    <section aria-label="Newtonov gravitačný zákon" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-orange-600 rounded-t-2xl px-6 py-4 -mb-0">Newtonov gravitačný zákon</h2>
      <div class="border border-orange-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Isaac Newton (1687) sformuloval zákon, ktorý opisuje gravitačnú silu medzi dvoma telesami.
          Každé dve telesá s hmotnosťami <MathFormula formula="m_1" /> a <MathFormula formula="m_2" />
          sa navzájom priťahujú silou priamo úmernou súčinu ich hmotností a nepriamo úmernou druhej mocnine
          vzdialenosti <MathFormula formula="r" /> medzi ich stredmi.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5 text-center">
          <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Newtonov gravitačný zákon</p>
          <MathFormula display formula="F = G \frac{m_1 \, m_2}{r^2}" />
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="F" /> — gravitačná sila</p>
              <p class="text-xs text-gray-400 mt-1">jednotka: N (newton)</p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="G" /> — gravitačná konštanta</p>
              <p class="text-xs text-gray-400 mt-1"><MathFormula formula="6{,}674 \times 10^{-11}\;\text{N\,m}^2\text{kg}^{-2}" /></p>
            </div>
            <div class="bg-white rounded-lg p-3">
              <p class="font-semibold text-gray-800"><MathFormula formula="r" /> — vzdialenosť stredov</p>
              <p class="text-xs text-gray-400 mt-1">jednotka: m (meter)</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-blue-800 mb-2">Závislosť od hmotnosti</p>
            <p class="text-sm text-gray-700">
              Ak zdvojnásobíme hmotnosť jedného telesa, gravitačná sila sa
              <span class="font-bold text-blue-700">zdvojnásobí</span>.
              Platí priama úmernosť: <MathFormula formula="F \propto m_1 m_2" />.
            </p>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p class="text-sm font-semibold text-purple-800 mb-2">Závislosť od vzdialenosti</p>
            <p class="text-sm text-gray-700">
              Ak zdvojnásobíme vzdialenosť, sila klesne na
              <span class="font-bold text-purple-700">štvrtinu</span>.
              Nepriama úmernosť: <MathFormula formula="F \propto \frac{1}{r^2}" />.
            </p>
          </div>
        </div>

        <!-- Príklad 1 -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — gravitačná sila Zeme na človeka</p>
          <div class="text-sm text-gray-700 space-y-2">
            <p>Zem: <MathFormula formula="M_Z = 5{,}97 \times 10^{24}\;\text{kg}" />, polomer Zeme: <MathFormula formula="R_Z = 6{,}37 \times 10^{6}\;\text{m}" />, hmotnosť osoby: <MathFormula formula="m = 70\;\text{kg}" /></p>
            <p><MathFormula formula="F = 6{,}674 \times 10^{-11} \cdot \dfrac{5{,}97 \times 10^{24} \cdot 70}{(6{,}37 \times 10^{6})^2} \approx \mathbf{686\;\text{N}}" /></p>
            <p class="text-gray-500 text-xs mt-1">To zodpovedá tiaži tela s hmotnosťou 70 kg na povrchu Zeme.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Gravitačné zrýchlenie a tiaž -->
    <section aria-label="Gravitačné zrýchlenie a tiaž telesa" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-orange-600 rounded-t-2xl px-6 py-4">Gravitačné zrýchlenie a tiaž</h2>
      <div class="border border-orange-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          Na povrchu Zeme sa gravitačná sila na teleso s hmotnosťou <MathFormula formula="m" /> zjednodušuje
          pomocou <strong>gravitačného zrýchlenia</strong> <MathFormula formula="g" />.
          Tiaž telesa <MathFormula formula="G" /> (alebo <MathFormula formula="F_g" />) je sila, ktorou Zem
          priťahuje teleso.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Gravitačné zrýchlenie</p>
            <MathFormula display formula="g = \frac{GM_Z}{R_Z^2} \approx 9{,}81\;\text{m/s}^2" />
            <p class="text-xs text-gray-500 mt-3">Na póloch: 9,83 m/s² &nbsp;|&nbsp; Na rovníku: 9,78 m/s²</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Tiaž telesa</p>
            <MathFormula display formula="F_g = mg" />
            <p class="text-xs text-gray-500 mt-3">Tiaž je vektorová veličina — smeruje zvisle nadol ku stredu Zeme.</p>
          </div>
        </div>

        <!-- Tabuľka — g na rôznych telesách -->
        <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-orange-600 text-white">
                <th scope="col" class="text-left px-5 py-3 font-semibold">Nebeské teleso</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">g (m/s²)</th>
                <th scope="col" class="text-left px-5 py-3 font-semibold">Tiaž osoby 70 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in gravityTable" :key="row.body" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-5 py-3 font-medium text-gray-800">{{ row.body }}</td>
                <td class="px-5 py-3 text-orange-700 font-mono">{{ row.g }}</td>
                <td class="px-5 py-3 text-gray-600">{{ row.weight }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Príklad 2 -->
        <div class="bg-white border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Príklad — tiaž na Mesiaci</p>
          <div class="text-sm text-gray-700 space-y-1">
            <p>Kozmonaut má hmotnosť 80 kg. Aká je jeho tiaž na Mesiaci (<MathFormula formula="g_M = 1{,}62\;\text{m/s}^2" />)?</p>
            <p><MathFormula formula="F_g = m \cdot g_M = 80 \cdot 1{,}62 = \mathbf{129{,}6\;\text{N}}" /></p>
            <p class="text-gray-500 text-xs mt-1">Na Zemi by to bolo 784 N — na Mesiaci váži len asi šestinu.</p>
          </div>
        </div>

        <div class="mt-5 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-yellow-800 mb-1">Pozor — hmotnosť ≠ tiaž!</p>
          <p class="text-sm text-gray-700">
            <strong>Hmotnosť</strong> (kg) je skalárna veličina, nezávisí od miesta merania.
            <strong>Tiaž</strong> (N) je sila, závisí od gravitačného zrýchlenia daného miesta.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Voľný pád -->
    <section aria-label="Voľný pád" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-orange-600 rounded-t-2xl px-6 py-4">Voľný pád</h2>
      <div class="border border-orange-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          <strong>Voľný pád</strong> je pohyb telesa, pri ktorom pôsobí iba gravitácia (zanedbávame vzduchový odpor).
          Teleso začína z pokoja (<MathFormula formula="v_0 = 0" />) a rovnomerne zrýchlene padá nadol.
          Ide o špeciálny prípad rovnomerne zrýchleného pohybu so zrýchlením <MathFormula formula="g" />.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Dráha (výška pádu)</p>
            <MathFormula display formula="h = \tfrac{1}{2}\,g\,t^2" />
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Rýchlosť</p>
            <MathFormula display formula="v = g\,t" />
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <p class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Čas pádu z výšky h</p>
            <MathFormula display formula="t = \sqrt{\dfrac{2h}{g}}" />
          </div>
        </div>

        <!-- Tabuľka hodnôt -->
        <div class="overflow-x-auto rounded-2xl border border-gray-200 mb-5">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-700 text-white">
                <th scope="col" class="text-center px-4 py-3 font-semibold">Čas t (s)</th>
                <th scope="col" class="text-center px-4 py-3 font-semibold">Rýchlosť v (m/s)</th>
                <th scope="col" class="text-center px-4 py-3 font-semibold">Výška pádu h (m)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in fallTable" :key="row.t" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-4 py-3 text-center font-mono text-gray-800">{{ row.t }}</td>
                <td class="px-4 py-3 text-center font-mono text-blue-700">{{ row.v }}</td>
                <td class="px-4 py-3 text-center font-mono text-orange-700">{{ row.h }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Príklady výpočtu -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-sm font-semibold text-gray-900 mb-3">Príklad A — z akej výšky padalo?</p>
            <div class="text-sm text-gray-700 space-y-1">
              <p>Kameň dopadol na zem po <MathFormula formula="t = 3\;\text{s}" />. Z akej výšky padal?</p>
              <p><MathFormula formula="h = \frac{1}{2} \cdot 9{,}81 \cdot 3^2 = \frac{1}{2} \cdot 9{,}81 \cdot 9 \approx \mathbf{44{,}1\;\text{m}}" /></p>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-5">
            <p class="text-sm font-semibold text-gray-900 mb-3">Príklad B — rýchlosť pri dopade</p>
            <div class="text-sm text-gray-700 space-y-1">
              <p>Teleso padá z výšky <MathFormula formula="h = 20\;\text{m}" />. Aká je rýchlosť pri dopade?</p>
              <p><MathFormula formula="t = \sqrt{\dfrac{2 \cdot 20}{9{,}81}} \approx 2{,}02\;\text{s}" /></p>
              <p><MathFormula formula="v = g \cdot t = 9{,}81 \cdot 2{,}02 \approx \mathbf{19{,}8\;\text{m/s}}" /></p>
            </div>
          </div>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p class="text-sm font-semibold text-emerald-800 mb-1">Galileiho pokus — všetky telesá padajú rovnako rýchlo</p>
          <p class="text-sm text-gray-700">
            Galileo Galilei ukázal, že vo vákuu padajú telesá rôznych hmotností rovnako rýchlo —
            gravitačné zrýchlenie <MathFormula formula="g" /> nezávisí od hmotnosti telesa.
            Overil to pokusmi na šikmej veži v Pise.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4: Pád v reálnych podmienkach -->
    <section aria-label="Pád telesa v reálnych podmienkach" class="mb-12">
      <h2 class="text-2xl font-bold text-white bg-orange-600 rounded-t-2xl px-6 py-4">Pád v reálnych podmienkach</h2>
      <div class="border border-orange-200 rounded-b-2xl p-6 bg-white">

        <p class="text-gray-700 leading-relaxed mb-5">
          V skutočnom svete na padajúce teleso okrem gravitácie pôsobí aj
          <strong>vzduchový odpor</strong> <MathFormula formula="F_o" />.
          Čím väčšia rýchlosť, tým väčší odpor. Postupne sa tieto dve sily vyrovnajú a teleso dosiahne
          <strong>terminálnu (konečnú) rýchlosť</strong> — prestane zrýchľovať.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div class="space-y-4">
            <div class="bg-red-50 border border-red-200 rounded-xl p-4">
              <p class="text-sm font-semibold text-red-800 mb-2">Sily pri reálnom páde</p>
              <div class="space-y-2 text-sm text-gray-700">
                <p>Tiaž (smerom nadol): <MathFormula formula="F_g = mg" /></p>
                <p>Vzduchový odpor (smerom nahor): <MathFormula formula="F_o = k \cdot v^2" /></p>
                <p>Výsledná sila: <MathFormula formula="F = F_g - F_o = mg - kv^2" /></p>
              </div>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p class="text-sm font-semibold text-blue-800 mb-2">Terminálna rýchlosť</p>
              <p class="text-sm text-gray-700 mb-3">
                Keď <MathFormula formula="F_g = F_o" />, výsledná sila je nula, zrýchlenie je nula
                a teleso sa pohybuje konštantnou rýchlosťou:
              </p>
              <MathFormula display formula="v_t = \sqrt{\frac{mg}{k}}" />
              <p class="text-xs text-gray-500 mt-2">kde <MathFormula formula="k" /> je koeficient odporu závisí od tvaru a plochy telesa</p>
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="example in terminalExamples" :key="example.name" class="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
              <span class="text-3xl">{{ example.icon }}</span>
              <div>
                <p class="font-semibold text-gray-800 text-sm">{{ example.name }}</p>
                <p class="text-sm text-orange-700 font-mono font-bold">{{ example.speed }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ example.note }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fázy pádu -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p class="text-sm font-semibold text-gray-900 mb-3">Fázy reálneho pádu</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div class="bg-white rounded-lg p-3 border border-gray-100">
              <p class="font-bold text-orange-600 mb-1">① Zrýchľovanie</p>
              <p class="text-gray-600 text-xs"><MathFormula formula="F_g > F_o" /> — sila odporu je malá, teleso zrýchľuje. Zrýchlenie ≈ g.</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-gray-100">
              <p class="font-bold text-blue-600 mb-1">② Spomaľovanie zrýchlenia</p>
              <p class="text-gray-600 text-xs"><MathFormula formula="F_o" /> rastie s <MathFormula formula="v^2" /> — výsledná sila klesá, zrýchlenie sa zmenšuje.</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-gray-100">
              <p class="font-bold text-emerald-600 mb-1">③ Terminálna rýchlosť</p>
              <p class="text-gray-600 text-xs"><MathFormula formula="F_g = F_o" /> — zrýchlenie = 0, rýchlosť konštantná: <MathFormula formula="v = v_t" />.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
      <h3 class="font-bold text-gray-900 mb-4">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Gravitačná sila medzi telesami: <MathFormula formula="F = G \frac{m_1 m_2}{r^2}" />,
          kde <MathFormula formula="G = 6{,}674 \times 10^{-11}\;\text{N\,m}^2/\text{kg}^2" />.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Gravitačné zrýchlenie na povrchu Zeme <MathFormula formula="g \approx 9{,}81\;\text{m/s}^2" />.
          Tiaž telesa <MathFormula formula="F_g = mg" />.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Voľný pád (bez odporu vzduchu): <MathFormula formula="h = \tfrac{1}{2}gt^2" />, <MathFormula formula="v = gt" />.
          Všetky telesá padajú rovnako rýchlo.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          V reálnych podmienkach vzduchový odpor spomaľuje pád. Teleso dosiahne terminálnu rýchlosť
          keď <MathFormula formula="F_g = F_o" />, t.j. <MathFormula formula="v_t = \sqrt{mg/k}" />.
        </li>
        <li class="flex gap-2">
          <span class="text-orange-500 font-bold">✓</span>
          Hmotnosť (kg) je skalár nezávislý od miesta, tiaž (N) závisí od <MathFormula formula="g" /> v danom mieste.
        </li>
      </ul>
    </div>

    <!-- Quiz -->
    <section aria-label="Kvíz">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Otestuj sa</h2>
      <p class="text-gray-500 mb-6">Vyber správnu odpoveď — okamžite uvidíš, či si to vedel.</p>

      <div v-if="quizFinished" data-testid="quiz-result" class="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <p data-testid="quiz-score" class="text-3xl font-extrabold text-gray-900 mb-1">{{ quizScore }} / {{ quiz.length }}</p>
        <p class="text-gray-500 mb-6">{{ scoreMessage }}</p>
        <button
          type="button"
          data-testid="quiz-reset-btn"
          class="px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
          @click="resetQuiz">
          Skúsiť znova
        </button>
      </div>

      <div v-else class="bg-white border border-gray-200 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-2">
          <span data-testid="quiz-progress" class="text-sm font-semibold text-gray-400">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
          <span class="text-sm font-semibold text-orange-600">{{ quizScore }} správnych</span>
        </div>
        <div class="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            class="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
            :style="{ width: `${(currentQ / quiz.length) * 100}%` }" />
        </div>

        <p data-testid="quiz-question" class="text-lg font-semibold text-gray-900 mb-5">{{ currentQuestion.question }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button
            v-for="(option, i) in currentQuestion.options"
            :key="i"
            type="button"
            :data-testid="`quiz-option-${i}`"
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
            {{ option }}
          </button>
        </div>

        <Transition name="fade">
          <div v-if="selectedAnswer !== null">
            <div
              data-testid="quiz-feedback"
              :class="['rounded-xl p-4 mb-4 text-sm',
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800']">
              <p class="font-bold mb-1">{{ selectedAnswer === currentQuestion.correctIndex ? '✓ Správne!' : '✗ Nesprávne' }}</p>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="currentQuestion.explanation" />
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                data-testid="quiz-next-btn"
                class="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
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

// ── Statický obsah ──────────────────────────────────────────────────────────

const gravityTable = [
  { body: 'Zem', g: '9,81', weight: '686 N' },
  { body: 'Mesiac', g: '1,62', weight: '113 N' },
  { body: 'Mars', g: '3,72', weight: '260 N' },
  { body: 'Jupiter', g: '24,79', weight: '1 735 N' },
  { body: 'Slnko', g: '274,0', weight: '19 180 N' },
]

const fallTable = [
  { t: '0', v: '0', h: '0' },
  { t: '1', v: '9,81', h: '4,91' },
  { t: '2', v: '19,62', h: '19,62' },
  { t: '3', v: '29,43', h: '44,15' },
  { t: '4', v: '39,24', h: '78,48' },
  { t: '5', v: '49,05', h: '122,63' },
]

const terminalExamples = [
  {
    icon: '🪨',
    name: 'Kameň (guľatý)',
    speed: '≈ 180 km/h',
    note: 'Malá plocha, veľká hmotnosť — rýchlo padá.',
  },
  {
    icon: '🪂',
    name: 'Padákár (s padákom)',
    speed: '≈ 20 km/h',
    note: 'Veľká plocha padáka výrazne spomaľuje pád.',
  },
  {
    icon: '🏃',
    name: 'Človek (bez padáka)',
    speed: '≈ 195 km/h',
    note: 'Skydiveri dosahujú terminálnu rýchlosť asi po 12 sekundách.',
  },
]

// ── Kvíz ──────────────────────────────────────────────────────────────────

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Čo vyjadruje Newtonov gravitačný zákon?',
    options: [
      'Každé teleso padá rovnakou rýchlosťou bez ohľadu na hmotnosť',
      'Gravitačná sila medzi dvoma telesami závisí priamo od súčinu hmotností a nepriamo od štvorca vzdialenosti',
      'Gravitačná sila závisí len od hmotnosti väčšieho telesa',
      'Gravitačné zrýchlenie je všade vo vesmíre rovnaké',
    ],
    correctIndex: 1,
    explanation: `Newtonov zákon: ${km('F = G\\dfrac{m_1 m_2}{r^2}')}. Sila rastie so súčinom hmotností a klesá so štvorca vzdialenosti. Gravitačné zrýchlenie závisí od telesa (Zem, Mesiac…).`,
  },
  {
    question: 'Aká je tiaž telesa s hmotnosťou 5 kg na povrchu Zeme (g = 9,81 m/s²)?',
    options: ['5 N', '9,81 N', '49,05 N', '0,51 N'],
    correctIndex: 2,
    explanation: `${km('F_g = m \\cdot g = 5 \\cdot 9{,}81 = 49{,}05\\;\\text{N}')}. Hmotnosť je 5 kg (skalár), tiaž je sila 49,05 N (vektor smerujúci nadol).`,
  },
  {
    question: 'Kameň padá voľným pádom z výšky 80 m. Ako dlho padá? (g = 10 m/s²)',
    options: ['2 s', '4 s', '8 s', '16 s'],
    correctIndex: 1,
    explanation: `${km('t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2 \\cdot 80}{10}} = \\sqrt{16} = 4\\;\\text{s}')}.`,
  },
  {
    question: 'S akou rýchlosťou dopadne teleso na zem, ak padá voľným pádom 3 sekundy? (g = 9,81 m/s²)',
    options: ['9,81 m/s', '14,7 m/s', '29,43 m/s', '44,15 m/s'],
    correctIndex: 2,
    explanation: `${km('v = g \\cdot t = 9{,}81 \\cdot 3 = 29{,}43\\;\\text{m/s}')}. Rýchlosť rastie lineárne s časom pádu.`,
  },
  {
    question: 'Čo je terminálna (konečná) rýchlosť pri páde v atmosfére?',
    options: [
      'Maximálna rýchlosť, ktorú môže teleso dosiahnuť vo vákuu',
      'Rýchlosť, pri ktorej je gravitačná sila nulová',
      'Konštantná rýchlosť, pri ktorej sa gravitačná sila rovná vzduchovému odporu',
      'Rýchlosť zvuku v atmosfére',
    ],
    correctIndex: 2,
    explanation: `Pri terminálnej rýchlosti platí ${km('F_g = F_o')}, takže výsledná sila je nula a zrýchlenie je nula. Teleso padá konštantnou rýchlosťou ${km('v_t = \\sqrt{mg/k}')}.`,
  },
  {
    question: 'Astronaut má hmotnosť 90 kg. Aká je jeho tiaž na Marse, kde g = 3,72 m/s²?',
    options: ['90 N', '24,2 N', '334,8 N', '882,9 N'],
    correctIndex: 2,
    explanation: `${km('F_g = m \\cdot g = 90 \\cdot 3{,}72 = 334{,}8\\;\\text{N}')}. Na Zemi by to bolo ${km('90 \\cdot 9{,}81 = 882{,}9\\;\\text{N}')} — na Marse váži len asi 38 % svojej zemskej tiažovej sily.`,
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
