<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <NuxtLink to="/chemia/stavba-latky" class="hover:text-orange-600 transition-colors">Stavba látky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Názvoslovie anorganických zlúčenín</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📝</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Názvoslovie anorganických zlúčenín</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Naučte sa pomenovávať anorganické zlúčeniny – oxidy, hydroxidy, kyseliny a soli –
      pomocou oxidačných čísel a systematického názvoslovia IUPAC.
    </p>

    <!-- Section 1: Oxidačné číslo a vzorce -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Oxidačné číslo a typy vzorcov</h2>

      <p class="text-gray-700 mb-4">
        <strong>Oxidačné číslo</strong> (stupeň oxidácie) je formálny náboj atómu v zlúčenine, ak by
        boli všetky väzby iónové. Zapisuje sa rímskymi číslicami so znamienkom (napr. +II, –I).
        Je kľúčovým nástrojom pri tvorbe názvov a vzorcov anorganických zlúčenín.
      </p>

      <!-- Pravidlá oxidačných čísel -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 class="font-bold text-orange-700 mb-3">Pravidlá pre určovanie oxidačných čísel</h3>
        <ul class="text-gray-700 space-y-2 text-sm">
          <li>• Voľné prvky (napr. <span v-html="km('\\text{Fe},\\; \\text{O}_2,\\; \\text{H}_2')" />) majú oxidačné číslo <strong>0</strong></li>
          <li>• <strong>Vodík</strong> má ox. č. <strong>+I</strong> (výnimka: v hydridoch kovov je –I, napr. NaH)</li>
          <li>• <strong>Kyslík</strong> má ox. č. <strong>–II</strong> (výnimka: v peroxidoch je –I, napr. H₂O₂)</li>
          <li>• Kovy 1. skupiny (Li, Na, K, …) majú vždy ox. č. <strong>+I</strong></li>
          <li>• Kovy 2. skupiny (Mg, Ca, Ba, …) majú vždy ox. č. <strong>+II</strong></li>
          <li>• Súčet oxidačných čísel v neutrálnej molekule = <strong>0</strong></li>
          <li>• Súčet oxidačných čísel v ióne = <strong>náboj iónu</strong></li>
        </ul>
      </div>

      <!-- Typy vzorcov -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Stechiometrický vzorec</h3>
          <p class="text-gray-600 text-sm mb-2">Udáva pomer počtu atómov prvkov v najjednoduchšom vyjadrení.</p>
          <div class="text-center" v-html="km('\\text{CH}_2\\text{O} \\;\\text{(glukóza)}')" />
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Molekulový vzorec</h3>
          <p class="text-gray-600 text-sm mb-2">Udáva skutočný počet atómov v jednej molekule.</p>
          <div class="text-center" v-html="km('\\text{C}_6\\text{H}_{12}\\text{O}_6 \\;\\text{(glukóza)}')" />
        </div>
        <div class="bg-white border border-orange-200 rounded-xl p-4">
          <h3 class="font-bold text-orange-700 mb-2">Štruktúrny vzorec</h3>
          <p class="text-gray-600 text-sm mb-2">Zobrazuje väzby medzi atómami a ich priestorové usporiadanie.</p>
          <div class="text-center text-sm text-gray-500">H–O–H (voda)</div>
        </div>
      </div>

      <!-- Príklad výpočtu ox. čísla 1 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 1: Oxidačné číslo síry v H₂SO₄</h3>
        <div class="space-y-2 text-gray-700">
          <p>Určte oxidačné číslo S v <span v-html="km('\\text{H}_2\\text{SO}_4')" />:</p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p class="text-sm">Vieme: H = +I, O = –II, celkový náboj = 0</p>
            <div v-html="km('2 \\cdot (+1) + x + 4 \\cdot (-2) = 0')" />
            <div v-html="km('2 + x - 8 = 0')" />
            <div v-html="km('x = +6')" />
            <p class="font-semibold text-orange-700">Síra má v H₂SO₄ oxidačné číslo +VI → kyselina sírová(VI)</p>
          </div>
        </div>
      </div>

      <!-- Príklad výpočtu ox. čísla 2 -->
      <div class="bg-white border border-orange-200 rounded-xl p-5 mb-4">
        <h3 class="font-bold text-orange-700 mb-3">📐 Príklad 2: Oxidačné číslo mangánu v MnO₂</h3>
        <div class="space-y-2 text-gray-700">
          <p>Určte oxidačné číslo Mn v <span v-html="km('\\text{MnO}_2')" />:</p>
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <p class="text-sm">Vieme: O = –II, celkový náboj = 0</p>
            <div v-html="km('x + 2 \\cdot (-2) = 0')" />
            <div v-html="km('x - 4 = 0')" />
            <div v-html="km('x = +4')" />
            <p class="font-semibold text-orange-700">Mn má v MnO₂ oxidačné číslo +IV → oxid manganičitý</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Názvoslovie tried zlúčenín -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Názvoslovie tried anorganických zlúčenín</h2>

      <!-- Oxidy -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Oxidy</h3>
        <p class="text-gray-700 mb-3">
          Oxidy sú zlúčeniny prvku s kyslíkom. Vzorec: <span v-html="km('\\text{E}_x\\text{O}_y')" />.
          Názov: <strong>oxid [názov prvku v genitíve + prípona podľa ox. čísla]</strong>.
        </p>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-3">
          <h4 class="font-semibold text-orange-700 mb-2">Prípony podľa oxidačného čísla kovu:</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
            <div class="bg-white rounded-lg p-2 text-center"><strong>+I</strong> → -ný</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+II</strong> → -natý</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+III</strong> → -itý</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+IV</strong> → -ičitý</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+V</strong> → -ičný</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+VI</strong> → -ový</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+VII</strong> → -istý</div>
            <div class="bg-white rounded-lg p-2 text-center"><strong>+VIII</strong> → -ičelý</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div v-for="oxide in oxides" :key="oxide.formula" class="bg-white border border-orange-100 rounded-xl p-3">
            <div class="text-center text-lg font-bold text-orange-700 mb-1" v-html="km(oxide.katex)" />
            <p class="text-center text-gray-700 font-medium text-sm">{{ oxide.name }}</p>
            <p class="text-center text-gray-400 text-xs">ox. č. {{ oxide.oxNum }}</p>
          </div>
        </div>
      </div>

      <!-- Hydroxidy -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Hydroxidy</h3>
        <p class="text-gray-700 mb-3">
          Hydroxidy obsahujú skupinu <span v-html="km('\\text{OH}^-')" /> (hydroxidový ión).
          Vzorec: <span v-html="km('\\text{M(OH)}_n')" />.
          Názov: <strong>hydroxid [kovu + prípona podľa ox. čísla]</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="hydroxide in hydroxides" :key="hydroxide.formula" class="bg-white border border-orange-100 rounded-xl p-3 flex items-center gap-3">
            <div class="text-xl font-bold text-orange-700 w-28 text-center shrink-0" v-html="km(hydroxide.katex)" />
            <div>
              <p class="text-gray-700 font-medium text-sm">{{ hydroxide.name }}</p>
              <p class="text-gray-400 text-xs">ox. č. kovu: {{ hydroxide.oxNum }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kyseliny bezkyslíkaté -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Kyseliny bezkyslíkaté (halogenovodíkové a iné)</h3>
        <p class="text-gray-700 mb-3">
          Vznikajú rozpustením príslušného vodíkového zlúčeniny v&nbsp;vode.
          Názov: <strong>kyselina [názov aniónu s príponou -ovodíková / -ovodíková]</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="acid in acidsNoOxygen" :key="acid.formula" class="bg-white border border-orange-100 rounded-xl p-3 flex items-center gap-3">
            <div class="text-xl font-bold text-orange-700 w-28 text-center shrink-0" v-html="km(acid.katex)" />
            <div>
              <p class="text-gray-700 font-medium text-sm">{{ acid.name }}</p>
              <p class="text-gray-400 text-xs">{{ acid.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kyslíkaté kyseliny -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Kyslíkaté kyseliny (oxokyseliny)</h3>
        <p class="text-gray-700 mb-3">
          Obsahujú kyslík v štruktúre. Názov: <strong>kyselina [centrálny atóm + prípona podľa ox. čísla + -ová/-itá]</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="acid in acidsWithOxygen" :key="acid.formula" class="bg-white border border-orange-100 rounded-xl p-3 flex items-center gap-3">
            <div class="text-xl font-bold text-orange-700 w-32 text-center shrink-0" v-html="km(acid.katex)" />
            <div>
              <p class="text-gray-700 font-medium text-sm">{{ acid.name }}</p>
              <p class="text-gray-400 text-xs">ox. č. {{ acid.oxNum }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Soli -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Soli</h3>
        <p class="text-gray-700 mb-3">
          Soli vznikajú neutralizáciou kyseliny zásadou. Obsahujú kationt kovu a aniont kyseliny.
          Názov: <strong>[názov aniónu (genitív)] + [kationt kovu + prípona]</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="salt in salts" :key="salt.formula" class="bg-white border border-orange-100 rounded-xl p-3 flex items-center gap-3">
            <div class="text-xl font-bold text-orange-700 w-32 text-center shrink-0" v-html="km(salt.katex)" />
            <div>
              <p class="text-gray-700 font-medium text-sm">{{ salt.name }}</p>
              <p class="text-gray-400 text-xs">{{ salt.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Triviálne názvy -->
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-5">
        <h3 class="font-bold text-orange-700 mb-3">Triviálne (zaužívané) názvy</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="text-lg font-bold text-orange-700 mb-1" v-html="km('\\text{H}_2\\text{O}')" />
            <p class="font-semibold text-gray-700">voda</p>
            <p class="text-xs text-gray-400">systematicky: oxid vodný</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="text-lg font-bold text-orange-700 mb-1" v-html="km('\\text{NH}_3')" />
            <p class="font-semibold text-gray-700">amoniak</p>
            <p class="text-xs text-gray-400">systematicky: nitrán (azán)</p>
          </div>
          <div class="bg-white rounded-xl p-3 text-center">
            <div class="text-lg font-bold text-orange-700 mb-1" v-html="km('\\text{H}_2\\text{S}')" />
            <p class="font-semibold text-gray-700">sulfán</p>
            <p class="text-xs text-gray-400">základ: kyselina sirovodíková</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: SVG prehľadová tabuľka -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">Prehľadová tabuľka zlúčenín</h2>
      <p class="text-gray-700 mb-4">
        Tabuľka uvádza 16 najdôležitejších anorganických zlúčenín s ich vzorcami, systematickými názvami
        a oxidačnými číslami centrálneho atómu.
      </p>

      <div class="bg-white border border-orange-200 rounded-2xl p-4 overflow-x-auto">
        <svg
          viewBox="0 0 760 620"
          class="w-full max-w-3xl mx-auto block"
          aria-label="Prehľadová tabuľka 16 anorganických zlúčenín: vzorec, systematický názov, oxidačné číslo"
          role="img"
        >
          <!-- Background -->
          <rect width="760" height="620" fill="#fff7ed" rx="14" />

          <!-- Title -->
          <text x="380" y="36" text-anchor="middle" font-size="16" font-weight="bold" fill="#c2410c">Prehľad anorganických zlúčenín</text>

          <!-- Header row -->
          <rect x="10" y="48" width="740" height="34" rx="6" fill="#ea580c" />
          <text x="80" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Vzorec</text>
          <text x="280" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Systematický názov</text>
          <text x="500" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Trieda</text>
          <text x="670" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Ox. číslo</text>

          <!-- Data rows -->
          <template v-for="(row, i) in tableRows" :key="i">
            <rect
              :x="10" :y="82 + i * 32" width="740" :height="31" :rx="i === tableRows.length - 1 ? 6 : 0"
              :fill="i % 2 === 0 ? '#fff7ed' : '#ffedd5'"
            />
            <text :x="80" :y="103 + i * 32" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">{{ row.formula }}</text>
            <text :x="280" :y="103 + i * 32" text-anchor="middle" font-size="12" fill="#374151">{{ row.name }}</text>
            <rect :x="430" :y="88 + i * 32" width="140" height="20" rx="10" :fill="classBg(row.cls)" />
            <text :x="500" :y="103 + i * 32" text-anchor="middle" font-size="11" font-weight="bold" :fill="classFg(row.cls)">{{ row.cls }}</text>
            <text :x="670" :y="103 + i * 32" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">{{ row.ox }}</text>
          </template>

          <!-- Bottom border -->
          <rect x="10" y="48" width="740" height="570" rx="6" fill="none" stroke="#fdba74" stroke-width="1.5" />
          <!-- Column dividers -->
          <line x1="155" y1="48" x2="155" y2="618" stroke="#fdba74" stroke-width="1" />
          <line x1="420" y1="48" x2="420" y2="618" stroke="#fdba74" stroke-width="1" />
          <line x1="580" y1="48" x2="580" y2="618" stroke="#fdba74" stroke-width="1" />
        </svg>
      </div>
    </section>

    <!-- Zhrnutie -->
    <div class="bg-gray-50 border rounded-2xl p-6 mb-12">
      <h2 class="text-xl font-bold text-gray-800 mb-4">📋 Zhrnutie</h2>
      <ul class="space-y-2 text-gray-700 text-sm">
        <li>🔢 <strong>Oxidačné číslo</strong> = formálny náboj atómu v zlúčenine; H = +I, O = –II (pravidlá)</li>
        <li>📄 <strong>Tri typy vzorcov</strong>: stechiometrický (pomer), molekulový (skutočný počet), štruktúrny (väzby)</li>
        <li>🌫️ <strong>Oxidy</strong>: oxid [prvku + prípona]: SO₂ = oxid sírový(IV), CaO = oxid vápenatý</li>
        <li>💧 <strong>Hydroxidy</strong>: hydroxid [kovu + prípona]: NaOH = hydroxid sodný</li>
        <li>⚗️ <strong>Kyseliny bezkyslíkaté</strong>: kyselina [nekovu]-ovodíková: HCl = kyselina chlorovodíková</li>
        <li>⚗️ <strong>Kyslíkaté kyseliny</strong>: kyselina [centrálny atóm + prípona]: H₂SO₄ = kyselina sírová</li>
        <li>🧂 <strong>Soli</strong>: [aniont] [kationt]: NaCl = chlorid sodný, CaCO₃ = uhličitan vápenatý</li>
        <li>💬 <strong>Triviálne názvy</strong>: voda (H₂O), amoniak (NH₃), sulfán (H₂S)</li>
      </ul>
    </div>

    <!-- Kvíz -->
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

// ── Data: oxidy ──────────────────────────────────────────────────────────────
interface Compound {
  formula: string
  katex: string
  name: string
  oxNum: string
  note?: string
}

const oxides: Compound[] = [
  { formula: 'SO₂', katex: '\\text{SO}_2', name: 'oxid sírový(IV)', oxNum: '+IV' },
  { formula: 'SO₃', katex: '\\text{SO}_3', name: 'oxid sírový(VI)', oxNum: '+VI' },
  { formula: 'CO₂', katex: '\\text{CO}_2', name: 'oxid uhličitý', oxNum: '+IV' },
  { formula: 'CO', katex: '\\text{CO}', name: 'oxid uhoľnatý', oxNum: '+II' },
  { formula: 'CaO', katex: '\\text{CaO}', name: 'oxid vápenatý', oxNum: '+II' },
  { formula: 'Fe₂O₃', katex: '\\text{Fe}_2\\text{O}_3', name: 'oxid železitý', oxNum: '+III' },
  { formula: 'MnO₂', katex: '\\text{MnO}_2', name: 'oxid manganičitý', oxNum: '+IV' },
  { formula: 'Na₂O', katex: '\\text{Na}_2\\text{O}', name: 'oxid sodný', oxNum: '+I' },
  { formula: 'P₂O₅', katex: '\\text{P}_2\\text{O}_5', name: 'oxid fosforečný', oxNum: '+V' },
]

const hydroxides: Compound[] = [
  { formula: 'NaOH', katex: '\\text{NaOH}', name: 'hydroxid sodný', oxNum: '+I' },
  { formula: 'KOH', katex: '\\text{KOH}', name: 'hydroxid draselný', oxNum: '+I' },
  { formula: 'Ca(OH)₂', katex: '\\text{Ca(OH)}_2', name: 'hydroxid vápenatý', oxNum: '+II' },
  { formula: 'Al(OH)₃', katex: '\\text{Al(OH)}_3', name: 'hydroxid hlinitý', oxNum: '+III' },
  { formula: 'Fe(OH)₂', katex: '\\text{Fe(OH)}_2', name: 'hydroxid železnatý', oxNum: '+II' },
  { formula: 'Fe(OH)₃', katex: '\\text{Fe(OH)}_3', name: 'hydroxid železitý', oxNum: '+III' },
]

const acidsNoOxygen: Compound[] = [
  { formula: 'HCl', katex: '\\text{HCl}', name: 'kyselina chlorovodíková', oxNum: '', note: 'chlorovodík vo vode' },
  { formula: 'HBr', katex: '\\text{HBr}', name: 'kyselina bromovodíková', oxNum: '', note: 'bromovodík vo vode' },
  { formula: 'HF', katex: '\\text{HF}', name: 'kyselina fluorovodíková', oxNum: '', note: 'fluorovodík vo vode' },
  { formula: 'H₂S', katex: '\\text{H}_2\\text{S}', name: 'kyselina sirovodíková', oxNum: '', note: 'triviálne: sulfán' },
  { formula: 'HCN', katex: '\\text{HCN}', name: 'kyselina kyanovodíková', oxNum: '', note: 'kyanid vo vode' },
]

const acidsWithOxygen: Compound[] = [
  { formula: 'H₂SO₄', katex: '\\text{H}_2\\text{SO}_4', name: 'kyselina sírová', oxNum: 'S: +VI' },
  { formula: 'H₂SO₃', katex: '\\text{H}_2\\text{SO}_3', name: 'kyselina siričitá', oxNum: 'S: +IV' },
  { formula: 'HNO₃', katex: '\\text{HNO}_3', name: 'kyselina dusičná', oxNum: 'N: +V' },
  { formula: 'HNO₂', katex: '\\text{HNO}_2', name: 'kyselina dusitá', oxNum: 'N: +III' },
  { formula: 'H₃PO₄', katex: '\\text{H}_3\\text{PO}_4', name: 'kyselina fosforečná', oxNum: 'P: +V' },
  { formula: 'H₂CO₃', katex: '\\text{H}_2\\text{CO}_3', name: 'kyselina uhličitá', oxNum: 'C: +IV' },
]

const salts: Compound[] = [
  { formula: 'NaCl', katex: '\\text{NaCl}', name: 'chlorid sodný', oxNum: '', note: 'z HCl + NaOH' },
  { formula: 'CaCO₃', katex: '\\text{CaCO}_3', name: 'uhličitan vápenatý', oxNum: '', note: 'vápenec, mramor' },
  { formula: 'Na₂SO₄', katex: '\\text{Na}_2\\text{SO}_4', name: 'síran sodný', oxNum: '', note: 'z H₂SO₄ + NaOH' },
  { formula: 'KNO₃', katex: '\\text{KNO}_3', name: 'dusičnan draselný', oxNum: '', note: 'ledok – hnojivo' },
  { formula: 'FeCl₃', katex: '\\text{FeCl}_3', name: 'chlorid železitý', oxNum: '', note: 'Fe má ox. č. +III' },
  { formula: 'CaSO₄', katex: '\\text{CaSO}_4', name: 'síran vápenatý', oxNum: '', note: 'sadra' },
]

// ── SVG tabuľka ──────────────────────────────────────────────────────────────
interface TableRow {
  formula: string
  name: string
  cls: string
  ox: string
}

const tableRows: TableRow[] = [
  { formula: 'SO₂', name: 'oxid sírový(IV)', cls: 'Oxid', ox: 'S: +IV' },
  { formula: 'CO₂', name: 'oxid uhličitý', cls: 'Oxid', ox: 'C: +IV' },
  { formula: 'CaO', name: 'oxid vápenatý', cls: 'Oxid', ox: 'Ca: +II' },
  { formula: 'Fe₂O₃', name: 'oxid železitý', cls: 'Oxid', ox: 'Fe: +III' },
  { formula: 'Na₂O', name: 'oxid sodný', cls: 'Oxid', ox: 'Na: +I' },
  { formula: 'NaOH', name: 'hydroxid sodný', cls: 'Hydroxid', ox: 'Na: +I' },
  { formula: 'Ca(OH)₂', name: 'hydroxid vápenatý', cls: 'Hydroxid', ox: 'Ca: +II' },
  { formula: 'Al(OH)₃', name: 'hydroxid hlinitý', cls: 'Hydroxid', ox: 'Al: +III' },
  { formula: 'HCl', name: 'kyselina chlorovodíková', cls: 'Kyselina (b)', ox: 'Cl: −I' },
  { formula: 'H₂S', name: 'kyselina sirovodíková', cls: 'Kyselina (b)', ox: 'S: −II' },
  { formula: 'H₂SO₄', name: 'kyselina sírová', cls: 'Kyselina (k)', ox: 'S: +VI' },
  { formula: 'HNO₃', name: 'kyselina dusičná', cls: 'Kyselina (k)', ox: 'N: +V' },
  { formula: 'H₃PO₄', name: 'kyselina fosforečná', cls: 'Kyselina (k)', ox: 'P: +V' },
  { formula: 'NaCl', name: 'chlorid sodný', cls: 'Soľ', ox: 'Na: +I' },
  { formula: 'CaCO₃', name: 'uhličitan vápenatý', cls: 'Soľ', ox: 'Ca: +II' },
  { formula: 'KNO₃', name: 'dusičnan draselný', cls: 'Soľ', ox: 'K: +I' },
]

function classBg(cls: string): string {
  if (cls === 'Oxid') return '#fed7aa'
  if (cls === 'Hydroxid') return '#bbf7d0'
  if (cls.startsWith('Kyselina')) return '#fecaca'
  return '#e0e7ff'
}

function classFg(cls: string): string {
  if (cls === 'Oxid') return '#c2410c'
  if (cls === 'Hydroxid') return '#15803d'
  if (cls.startsWith('Kyselina')) return '#b91c1c'
  return '#3730a3'
}

// ── Kvíz ─────────────────────────────────────────────────────────────────────
interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const quiz: QuizQuestion[] = [
  {
    question: 'Ako sa volá zlúčenina SO₂?',
    options: [
      'oxid sírový(VI)',
      'oxid sírový(IV)',
      'kyselina siričitá',
      'síran sodný',
    ],
    correctIndex: 1,
    explanation:
      'SO₂: S má ox. č. +IV (S + 2×(–2) = 0 → S = +4). Prípona pre +IV je -ový(IV) → oxid sírový(IV). Oxid sírový(VI) je SO₃.',
  },
  {
    question: 'Čo je správny systematický názov pre Ca(OH)₂?',
    options: [
      'hydroxid vápenný',
      'oxid vápenatý',
      'hydroxid vápenatý',
      'uhličitan vápenatý',
    ],
    correctIndex: 2,
    explanation:
      'Ca(OH)₂ je hydroxid – obsahuje skupinu OH⁻. Ca má ox. č. +II, prípona pre +II je -natý → hydroxid vápenatý.',
  },
  {
    question: 'Aké oxidačné číslo má dusík v HNO₃?',
    options: ['+III', '+II', '+V', '+IV'],
    correctIndex: 2,
    explanation:
      'H(+1) + N(x) + 3×O(–2) = 0 → 1 + x – 6 = 0 → x = +5. Dusík má v HNO₃ oxidačné číslo +V (preto je to kyselina dusičná, nie dusitá).',
  },
  {
    question: 'Ktorý vzorec patrí kyselinám bezkyslíkatým?',
    options: ['H₂SO₄', 'HNO₃', 'HCl', 'H₃PO₄'],
    correctIndex: 2,
    explanation:
      'HCl (kyselina chlorovodíková) neobsahuje kyslík – je to bezkyslíkatá kyselina. Ostatné vzorce (H₂SO₄, HNO₃, H₃PO₄) sú kyslíkaté kyseliny.',
  },
  {
    question: 'Ako sa volá soľ NaCl?',
    options: [
      'síran sodný',
      'chlorid sodný',
      'chlornan sodný',
      'dusičnan sodný',
    ],
    correctIndex: 1,
    explanation:
      'NaCl: Na⁺ (kationt sodný) + Cl⁻ (aniont chloridový). Správny názov je chlorid sodný. Pochádza z kyseliny chlorovodíkovej (HCl).',
  },
  {
    question: 'Aký je triviálny názov pre NH₃?',
    options: ['sulfán', 'voda', 'amoniak', 'metán'],
    correctIndex: 2,
    explanation:
      'NH₃ sa triviálne nazýva amoniak (systematicky: nitrán alebo azán). H₂S je sulfán, H₂O je voda, CH₄ je metán.',
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
