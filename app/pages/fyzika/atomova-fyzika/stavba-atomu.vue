<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/atomova-fyzika" class="hover:text-emerald-600 transition-colors">Atómová a jadrová fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Stavba atómu</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚛️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Stavba atómu</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Atóm je najmenšia častica prvku, ktorá si zachováva jeho chemické vlastnosti. Na sklonku 19. storočia
      sa zdalo, že atóm je nedeliteľný — jeho vnútornú štruktúru odhalili až experimenty s rádioaktivitou
      a elektrónovými lúčmi. Dnes vieme, že atóm sa skladá z malého, ale ťažkého jadra a z elektrónového obalu.
    </p>

      <!-- ==================== SEKCIA 1 ==================== -->
      <section aria-label="Rutherfordov model atómu" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-emerald-500">
          1. Rutherfordov experiment a jadrový model
        </h2>

        <p class="text-gray-700 leading-relaxed mb-4">
          V rokoch 1909–1911 Ernest Rutherford so svojimi spolupracovníkmi Geigerom a Marsdenom ostreľoval
          tenkú zlatú fóliu alfa-časticami (jadier hélia). Väčšina alfa-častíc prešla bez odchýlenia, ale
          niektoré sa rozptýlili pod veľkým uhlom — niektoré sa dokonca odrazili späť.
        </p>

        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
          <h3 class="font-semibold text-emerald-800 mb-3">Závery Rutherfordovho experimentu</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 font-bold mt-0.5">→</span>
              Atóm je prevažne prázdny priestor (alfa-častica prechádza voľne).
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 font-bold mt-0.5">→</span>
              Takmer všetka hmotnosť je sústredená v malom, kladne nabitom
              <strong>jadre.</strong>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 font-bold mt-0.5">→</span>
              Záporné <strong>elektróny</strong> obiehajú jadro na oveľa väčšej vzdialenosti.
            </li>
          </ul>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3">Štruktúra jadra</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Atómové jadro obsahuje <strong>Z protónov</strong> (náboj +e, hmotnosť ≈ 1 u) a
          <strong>N neutrónov</strong> (bez náboja, hmotnosť ≈ 1 u). Protóny a neutróny súhrnne
          nazývame <em>nukleóny</em>.
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white border rounded-xl p-4 text-center shadow-sm">
            <div class="text-3xl mb-1" v-html="km('Z')"/>
            <div class="text-sm font-semibold text-emerald-700">Protónové číslo</div>
            <div class="text-xs text-gray-500 mt-1">počet protónov = počet elektrónov</div>
          </div>
          <div class="bg-white border rounded-xl p-4 text-center shadow-sm">
            <div class="text-3xl mb-1" v-html="km('N')"/>
            <div class="text-sm font-semibold text-emerald-700">Neutrónové číslo</div>
            <div class="text-xs text-gray-500 mt-1">počet neutrónov v jadre</div>
          </div>
          <div class="bg-white border rounded-xl p-4 text-center shadow-sm">
            <div class="text-3xl mb-1" v-html="km('A = Z + N')"/>
            <div class="text-sm font-semibold text-emerald-700">Nukleónové číslo</div>
            <div class="text-xs text-gray-500 mt-1">celkový počet nukleónov</div>
          </div>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">
          Chemický prvok sa označuje symbolom
          <span v-html="km('^{A}_{Z}X')"/>,
          kde X je chemický symbol, napr.:
        </p>

        <div class="flex flex-wrap gap-6 mb-4">
          <div class="text-center">
            <div class="text-2xl" v-html="km('^{1}_{1}H')"/>
            <div class="text-xs text-gray-500 mt-1">vodík (1p, 0n)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl" v-html="km('^{4}_{2}He')"/>
            <div class="text-xs text-gray-500 mt-1">hélium (2p, 2n)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl" v-html="km('^{12}_{6}C')"/>
            <div class="text-xs text-gray-500 mt-1">uhlík-12 (6p, 6n)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl" v-html="km('^{238}_{92}U')"/>
            <div class="text-xs text-gray-500 mt-1">urán-238 (92p, 146n)</div>
          </div>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p class="text-amber-800 text-sm">
            <strong>Izotopy</strong> — atómy toho istého prvku (rovnaké Z) s rôznym počtom neutrónov (rôzne N, teda rôzne A).
            Napríklad uhlík má izotopy <span v-html="km('^{12}C,\\,^{13}C,\\,^{14}C')"/>.
          </p>
        </div>
      </section>

      <!-- ==================== SEKCIA 2 ==================== -->
      <section aria-label="Bohrov model vodíka" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-emerald-500">
          2. Elektrónový obal a Bohrov model
        </h2>

        <p class="text-gray-700 leading-relaxed mb-4">
          Elektróny obiehajú jadro v elektrónových obaloch (slupkách). Klasická fyzika nedokázala vysvetliť
          stabilitu atómu — obehnúci elektrón by mal vyžarovať energiu a spirálovo dopadnúť do jadra.
          V roku 1913 Niels Bohr navrhol kvantový model vodíkového atómu.
        </p>

        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h3 class="font-semibold text-blue-800 mb-4">Bohrove postuláty</h3>
          <ol class="space-y-3 text-gray-700 list-decimal list-inside">
            <li>
              Elektrón obieha jadro len po určitých <strong>dovolených kruhových dráhach</strong>
              (stacionárne stavy) — bez vyžarovania.
            </li>
            <li>
              Na každej dráhe platí podmienka kvantovania momentu hybnosti:
              <div class="mt-2 text-center" v-html="km('m_e v r_n = n\\hbar, \\quad n = 1, 2, 3, \\ldots')"/>
            </li>
            <li>
              Elektrón vyžiari alebo pohltí fotón len pri prechode medzi dvoma hladinami:
              <div class="mt-2 text-center" v-html="km('h f = E_m - E_n')"/>
            </li>
          </ol>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3">Energetické hladiny vodíka</h3>
        <p class="text-gray-700 leading-relaxed mb-3">
          Energia elektrónu v n-tom stave vodíkového atómu:
        </p>

        <div class="bg-white border-2 border-emerald-200 rounded-2xl p-5 text-center mb-6 shadow-sm">
          <div class="text-xl" v-html="km('E_n = -\\frac{13{,}6\\text{ eV}}{n^2}, \\quad n = 1, 2, 3, \\ldots')"/>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">
          Záporné znamienko znamená, že elektrón je viazaný (energia 0 zodpovedá voľnému elektrónu).
          Základný stav (n = 1) má energiu –13,6 eV. Na ionizáciu vodíka treba dodať 13,6 eV.
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-emerald-600 text-white">
                <th scope="col" class="px-4 py-2 text-left rounded-tl-lg">Kvantové číslo n</th>
                <th scope="col" class="px-4 py-2 text-center">Séria spektra</th>
                <th scope="col" class="px-4 py-2 text-right rounded-tr-lg">Energia E<sub>n</sub> (eV)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="level in energyLevels" :key="level.n" class="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                <td class="px-4 py-2 font-medium">n = {{ level.n }}</td>
                <td class="px-4 py-2 text-center text-gray-600">{{ level.series }}</td>
                <td class="px-4 py-2 text-right font-mono" v-html="km(level.energy)"/>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3">Emisné čiarové spektrum</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Pri prechode elektrónu z vyšších na nižšie hladiny atóm emituje fotóny s presne definovanými
          frekvenciami — vzniká <strong>čiarové emisné spektrum</strong>.
          Pre vodík sú to série pomenované podľa objaviteľov:
        </p>

        <div class="grid sm:grid-cols-2 gap-3 mb-4">
          <div
v-for="series in spectrumSeries" :key="series.name"
               class="flex items-center gap-3 bg-white border rounded-xl p-3 shadow-sm">
            <div class="w-4 h-4 rounded-full flex-shrink-0" :class="series.color"/>
            <div>
              <div class="font-semibold text-sm">{{ series.name }}</div>
              <div class="text-xs text-gray-500">{{ series.desc }}</div>
            </div>
          </div>
        </div>

        <p class="text-gray-700 leading-relaxed">
          Vlnová dĺžka emitovaného fotónu pri prechode z hladiny m na n (m > n) sa určí
          <strong>Rydbergovou formulou</strong>:
        </p>
        <div class="bg-white border-2 border-emerald-200 rounded-2xl p-5 text-center my-4 shadow-sm">
          <div class="text-xl" v-html="km('\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n^2} - \\frac{1}{m^2}\\right)')"/>
          <div class="text-sm text-gray-500 mt-2">
            kde <span v-html="km('R_H = 1{,}097 \\times 10^7\\,\\text{m}^{-1}')"/> je Rydbergova konštanta
          </div>
        </div>
      </section>

      <!-- ==================== SEKCIA 3 ==================== -->
      <section aria-label="Röntgenové žiarenie a fotoelektrický efekt" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-emerald-500">
          3. Röntgenové žiarenie a fotoelektrický efekt
        </h2>

        <!-- Röntgen -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Röntgenové žiarenie</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Röntgenové žiarenie (X-žiarenie) vzniká prudkým spomalením rýchlych elektrónov v anóde
          röntgenovej trubice (<em>brzdné žiarenie</em>) alebo prechodom elektrónov medzi vnútornými
          slupkami atómov anódy (<em>charakteristické žiarenie</em>). Má elektromagnetickú povahu,
          vlnové dĺžky 0,01 – 10 nm.
        </p>

        <div class="bg-gray-100 rounded-xl p-4 mb-6 text-sm text-gray-700">
          Minimálna vlnová dĺžka brzdného röntgenového žiarenia zodpovedá maximálnej kinetickej
          energii elektrónov urýchlených napätím U:
          <div class="mt-2 text-center" v-html="km('eU = h f_{\\max} = \\frac{hc}{\\lambda_{\\min}}')"/>
        </div>

        <!-- Fotoelektrický efekt -->
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Fotoelektrický efekt</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Fotoelektrický efekt objavil Hertz (1887), vysvetlil Einstein (1905) — za čo dostal Nobelovu cenu.
          Keď dopadne svetlo na kovový povrch, môže vyraziť elektróny (<em>fotoelektróny</em>).
          Výboj nastáva len ak frekvencia svetla prekročí <strong>medzovú frekvenciu</strong>
          <span v-html="km('f_0')"/>. Intenzita svetla ovplyvňuje počet, nie energiu elektrónov.
        </p>

        <div class="bg-white border-2 border-emerald-200 rounded-2xl p-5 mb-6 shadow-sm">
          <h4 class="font-semibold text-emerald-800 mb-3 text-center">Einsteinova rovnica fotoelektrického efektu</h4>
          <div class="text-2xl text-center mb-3" v-html="km('E_k = hf - W_v')"/>
          <div class="grid sm:grid-cols-3 gap-3 text-sm text-gray-600 text-center">
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="font-mono font-semibold" v-html="km('E_k')"/>
              <div>max. kin. energia fotoelektrónu</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="font-mono font-semibold" v-html="km('h = 6{,}626\\times10^{-34}\\,\\text{J·s}')"/>
              <div>Planckova konštanta</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="font-mono font-semibold" v-html="km('W_v')"/>
              <div>výstupná práca kovu</div>
            </div>
          </div>
          <p class="text-xs text-gray-500 text-center mt-3">
            Medzová frekvencia: <span v-html="km('f_0 = W_v / h')"/>
            &nbsp;|&nbsp; Medzová vlnová dĺžka: <span v-html="km('\\lambda_0 = hc / W_v')"/>
          </p>
        </div>

        <!-- PRÍKLADY -->
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Vypočítané príklady</h3>

        <div class="space-y-6">
          <!-- Priklad 1 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-emerald-100 text-emerald-700 font-bold text-sm px-3 py-1 rounded-full">Príklad 1</span>
              <span class="text-gray-700 font-medium">Energetický prechod vo vodíku</span>
            </div>
            <p class="text-gray-700 mb-4">
              Elektrón vo vodíkovom atóme prechádza z hladiny n = 4 na n = 2.
              Určte frekvenciu a vlnovú dĺžku emitovaného fotónu.
            </p>
            <div class="bg-gray-50 rounded-xl p-4 space-y-3 text-gray-700">
              <p><strong>Energia fotónu:</strong></p>
              <div class="text-center" v-html="km('\\Delta E = E_4 - E_2 = -\\frac{13{,}6}{16} - \\left(-\\frac{13{,}6}{4}\\right) = -0{,}85 + 3{,}40 = 2{,}55\\text{ eV}')"/>
              <p><strong>Frekvencia:</strong></p>
              <div class="text-center" v-html="km('f = \\frac{\\Delta E}{h} = \\frac{2{,}55 \\times 1{,}6\\times10^{-19}}{6{,}626\\times10^{-34}} \\approx 6{,}16\\times10^{14}\\text{ Hz}')"/>
              <p><strong>Vlnová dĺžka:</strong></p>
              <div class="text-center" v-html="km('\\lambda = \\frac{c}{f} = \\frac{3\\times10^8}{6{,}16\\times10^{14}} \\approx 487\\text{ nm}')"/>
              <p class="text-emerald-700 font-medium">→ Modré svetlo — Balmerova séria (viditeľná oblasť)</p>
            </div>
          </div>

          <!-- Priklad 2 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-emerald-100 text-emerald-700 font-bold text-sm px-3 py-1 rounded-full">Príklad 2</span>
              <span class="text-gray-700 font-medium">Fotoelektrický efekt — zinok</span>
            </div>
            <p class="text-gray-700 mb-4">
              Na zinkový povrch (výstupná práca <span v-html="km('W_v = 4{,}3\\text{ eV}')"/>)
              dopadá UV svetlo s vlnovou dĺžkou <span v-html="km('\\lambda = 200\\text{ nm}')"/>.
              Určte kinetickú energiu fotoelektrónov.
            </p>
            <div class="bg-gray-50 rounded-xl p-4 space-y-3 text-gray-700">
              <p><strong>Energia fotónu:</strong></p>
              <div class="text-center" v-html="km('E = hf = \\frac{hc}{\\lambda} = \\frac{6{,}626\\times10^{-34} \\cdot 3\\times10^8}{200\\times10^{-9}} \\approx 9{,}94\\times10^{-19}\\text{ J} \\approx 6{,}21\\text{ eV}')"/>
              <p><strong>Kinetická energia elektrónu:</strong></p>
              <div class="text-center" v-html="km('E_k = hf - W_v = 6{,}21 - 4{,}3 = 1{,}91\\text{ eV}')"/>
              <p class="text-emerald-700 font-medium">→ Fotoelektróny vznikajú, pretože <span v-html="km('hf > W_v')"/></p>
            </div>
          </div>

          <!-- Priklad 3 -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-emerald-100 text-emerald-700 font-bold text-sm px-3 py-1 rounded-full">Príklad 3</span>
              <span class="text-gray-700 font-medium">Izotopy — počet nukleónov</span>
            </div>
            <p class="text-gray-700 mb-4">
              Urán-235 (<span v-html="km('^{235}_{92}U')"/>) je fissibilný izotop uránu.
              Koľko protónov, neutrónov a elektrónov obsahuje jeho atóm?
            </p>
            <div class="bg-gray-50 rounded-xl p-4 space-y-2 text-gray-700">
              <div class="flex gap-8">
                <div><span v-html="km('Z = 92')"/> <span class="text-gray-500">→ 92 protónov v jadre</span></div>
              </div>
              <div class="flex gap-8">
                <div><span v-html="km('N = A - Z = 235 - 92 = 143')"/> <span class="text-gray-500">→ 143 neutrónov</span></div>
              </div>
              <div class="flex gap-8">
                <div>Neutrálny atóm: <span class="text-gray-500">92 elektrónov v obale</span></div>
              </div>
              <p class="text-emerald-700 font-medium mt-2">→ 92p, 143n, 92e</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== ZHRNUTIE ==================== -->
      <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
        <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie — kľúčové vzťahy</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div
v-for="item in summary" :key="item.label"
               class="bg-white rounded-xl border p-4 shadow-sm">
            <div class="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-1">{{ item.label }}</div>
            <div class="text-center" v-html="km(item.formula)"/>
            <div class="text-xs text-gray-500 mt-1 text-center">{{ item.note }}</div>
          </div>
        </div>
      </div>

      <!-- ==================== KVÍZ ==================== -->
      <section aria-label="Kvíz o stavbe atómu" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">🧪 Kvíz — Stavba atómu</h2>

        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <!-- Progress -->
          <div class="bg-emerald-50 px-6 py-3 border-b border-gray-100">
            <div
              data-testid="quiz-progress"
              class="flex items-center justify-between text-sm text-gray-600"
            >
              <span v-if="!quizFinished">Otázka {{ currentQ + 1 }} z {{ quiz.length }}</span>
              <span v-else>Hotovo!</span>
              <span class="font-medium text-emerald-700">{{ quizScore }} / {{ quiz.length }}</span>
            </div>
            <div class="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-emerald-500 rounded-full transition-all duration-300"
                :style="{ width: progressWidth }"
              />
            </div>
          </div>

          <!-- Question -->
          <transition name="fade" mode="out-in">
            <div v-if="!quizFinished" :key="currentQ" class="p-6">
              <p
                data-testid="question"
                class="text-gray-800 font-semibold text-lg mb-5 leading-relaxed"
                v-html="currentQuestion.questionHtml || currentQuestion.question"
              />

              <div class="space-y-3">
                <button
                  v-for="(option, i) in currentQuestion.options"
                  :key="i"
                  type="button"
                  :data-testid="`option-${i}`"
                  class="w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-gray-700"
                  :class="optionClass(i)"
                  @click="selectAnswer(i)"
                  v-html="option"
                />
              </div>

              <transition name="fade">
                <div
                  v-if="selectedAnswer !== null"
                  data-testid="feedback"
                  class="mt-4 rounded-xl p-4 text-sm leading-relaxed"
                  :class="selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'"
                  v-html="currentQuestion.explanation"
                />
              </transition>

              <div v-if="selectedAnswer !== null" class="mt-5 flex justify-end">
                <button
                  type="button"
                  data-testid="next-btn"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
                  @click="nextQuestion"
                >
                  {{ currentQ < quiz.length - 1 ? 'Ďalšia otázka →' : 'Zobraziť výsledok →' }}
                </button>
              </div>
            </div>

            <!-- Result -->
            <div v-else data-testid="result" class="p-8 text-center">
              <div class="text-5xl mb-3">{{ scoreEmoji }}</div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ scoreMessage }}</h3>
              <p data-testid="score" class="text-gray-600 mb-6">
                Správne odpovede: <strong>{{ quizScore }}</strong> z {{ quiz.length }}
              </p>
              <button
                type="button"
                data-testid="reset-btn"
                class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
                @click="resetQuiz"
              >
                Skúsiť znova
              </button>
            </div>
          </transition>
        </div>
      </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'

// KaTeX helper
function km(f: string): string {
  return katex.renderToString(f, { throwOnError: false, output: 'html' })
}

// ---- Static data ----

const energyLevels = [
  { n: 1, series: 'základný stav', energy: 'E_1 = -13{,}6\\text{ eV}' },
  { n: 2, series: 'Balmerova (viditeľná)', energy: 'E_2 = -3{,}40\\text{ eV}' },
  { n: 3, series: 'Paschenova (IR)', energy: 'E_3 = -1{,}51\\text{ eV}' },
  { n: 4, series: 'Brackettova (IR)', energy: 'E_4 = -0{,}85\\text{ eV}' },
  { n: 5, series: 'Pfundova (IR)', energy: 'E_5 = -0{,}54\\text{ eV}' },
]

const spectrumSeries = [
  { name: 'Lymanova séria', desc: 'prechody na n=1, UV oblasť', color: 'bg-purple-400' },
  { name: 'Balmerova séria', desc: 'prechody na n=2, viditeľná oblasť', color: 'bg-blue-400' },
  { name: 'Paschenova séria', desc: 'prechody na n=3, infračervená oblasť', color: 'bg-red-300' },
  { name: 'Brackettova séria', desc: 'prechody na n=4, ďaleká IR', color: 'bg-orange-300' },
]

const summary = [
  { label: 'Nukleónové číslo', formula: 'A = Z + N', note: 'Z = počet protónov, N = počet neutrónov' },
  { label: 'Energia hladiny vodíka', formula: 'E_n = -13{,}6\\text{ eV}/n^2', note: 'n = 1, 2, 3, …' },
  { label: 'Frekvencia fotónu', formula: 'h f = E_m - E_n', note: 'pri prechode medzi hladinami' },
  { label: 'Rydbergova formula', formula: '\\tfrac{1}{\\lambda}=R_H\\!\\left(\\tfrac{1}{n^2}-\\tfrac{1}{m^2}\\right)', note: 'R_H = 1,097 × 10⁷ m⁻¹' },
  { label: 'Fotoelektrický efekt', formula: 'E_k = hf - W_v', note: 'Einsteinova rovnica' },
  { label: 'Medzová frekvencia', formula: 'f_0 = W_v / h', note: 'pri E_k = 0' },
]

// ---- Quiz ----

const quiz = [
  {
    question: 'Čo dokázal Rutherfordov experiment s alfa-časticami a zlatou fóliou?',
    options: [
      'Atóm je homogénna guľa kladného náboja (Thomsonov model)',
      'Takmer všetka hmotnosť atómu je sústredená v malom kladne nabitom jadre',
      'Elektróny sú usporiadané v pevnej mriežke',
      'Alfa-častica má záporný náboj',
    ],
    correctIndex: 1,
    explanation: '<strong>Správne!</strong> Väčšina alfa-častíc prešla voľne, ale niektoré sa odrazili — to možno vysvetliť len malým, ťažkým, kladne nabitým jadrom.',
  },
  {
    question: 'Atóm fosforu má protónové číslo Z = 15 a nukleónové číslo A = 31. Koľko neutrónov obsahuje jeho jadro?',
    options: ['15', '31', '16', '46'],
    correctIndex: 2,
    explanation: '<strong>Správne!</strong> N = A − Z = 31 − 15 = <strong>16 neutrónov</strong>.',
  },
  {
    questionHtml: `Elektrón vo vodíku prechádza z hladiny n = 3 na n = 1. Aká je energia emitovaného fotónu? (${km('E_1=-13{,}6\\text{ eV}')})`,
    question: 'Elektrón vo vodíku prechádza z hladiny n = 3 na n = 1. Aká je energia emitovaného fotónu?',
    options: ['12,09 eV', '10,2 eV', '1,89 eV', '13,6 eV'],
    correctIndex: 0,
    explanation: `<strong>Správne!</strong> ${km('\\Delta E = -\\tfrac{13{,}6}{9} - (-13{,}6) = -1{,}51 + 13{,}6 = 12{,}09\\text{ eV}')} — Lymanova séria, UV oblasť.`,
  },
  {
    question: 'Čo je výstupná práca kovu (Wv) vo fotoelektrickom efekte?',
    options: [
      'Energia fotónu dopadajúceho svetla',
      'Minimálna energia potrebná na uvoľnenie elektrónu z povrchu kovu',
      'Kinetická energia fotoelektrónu',
      'Energia väzby protónu v jadre',
    ],
    correctIndex: 1,
    explanation: '<strong>Správne!</strong> Výstupná práca W<sub>v</sub> je minimálna energia, ktorú musí fotón dodať elektrónu, aby ho uvoľnil z povrchu kovu.',
  },
  {
    questionHtml: `Na kovový povrch s výstupnou prácou ${km('W_v = 3{,}0\\text{ eV}')} dopadá svetlo s frekvenciou ${km('f = 1{,}0\\times10^{15}\\text{ Hz}')}. Planckova konštanta ${km('h = 6{,}63\\times10^{-34}\\text{ J·s}')}, ${km('1\\text{ eV}=1{,}6\\times10^{-19}\\text{ J}')}. Aká je kinetická energia fotoelektrónu?`,
    question: 'Na kovový povrch s výstupnou prácou 3,0 eV dopadá svetlo s frekvenciou 1,0×10¹⁵ Hz. Aká je kinetická energia fotoelektrónu?',
    options: ['1,14 eV', '3,0 eV', '4,14 eV', 'Fotoelektróny nevznikajú'],
    correctIndex: 0,
    explanation: `<strong>Správne!</strong> ${km('E_k = hf - W_v = \\tfrac{6{,}63\\times10^{-34}\\cdot10^{15}}{1{,}6\\times10^{-19}} - 3{,}0 \\approx 4{,}14 - 3{,}0 = 1{,}14\\text{ eV}')}`,
  },
  {
    question: 'Čo sú izotopy?',
    options: [
      'Atómy rôznych prvkov s rovnakým nukleónovým číslom',
      'Atómy toho istého prvku s rôznym počtom elektrónov',
      'Atómy toho istého prvku s rôznym počtom neutrónov',
      'Rôzne prvky s rovnakým počtom neutrónov',
    ],
    correctIndex: 2,
    explanation: '<strong>Správne!</strong> Izotopy majú rovnaké Z (rovnaký prvok), ale rôzne N (rôzny počet neutrónov), teda rôzne nukleónové číslo A.',
  },
]

const currentQ = ref(0)
const selectedAnswer = ref<number | null>(null)
const quizScore = ref(0)
const quizFinished = ref(false)

const currentQuestion = computed(() => quiz[currentQ.value] as QuizQuestion)

const progressWidth = computed(() => {
  if (quizFinished.value) return '100%'
  return `${(currentQ.value / quiz.length) * 100}%`
})

function optionClass(i: number) {
  if (selectedAnswer.value === null) {
    return 'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer'
  }
  if (i === currentQuestion.value.correctIndex) {
    return 'border-green-400 bg-green-50 text-green-800'
  }
  if (i === selectedAnswer.value) {
    return 'border-red-400 bg-red-50 text-red-800'
  }
  return 'border-gray-200 opacity-50'
}

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
