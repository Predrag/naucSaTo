<template>
  <div class="max-w-4xl mx-auto px-4 py-12">

    <!-- Breadcrumb -->
    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/uvod" class="hover:text-emerald-600 transition-colors">Úvod do fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Medzinárodná sústava jednotiek</span>
    </nav>

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🌍</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Medzinárodná sústava jednotiek</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Sústava SI je medzinárodný štandard pre meranie fyzikálnych veličín, ktorý sa používa vo vede aj v bežnom živote.
    </p>

    <!-- Intro box -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
      <h2 class="text-lg font-bold text-emerald-800 mb-2">Čo je sústava SI?</h2>
      <p class="text-gray-700 leading-relaxed">
        <strong>SI</strong> (z francúzskeho <em>Système International d'Unités</em>) je medzinárodná sústava
        jednotiek prijatá väčšinou krajín sveta. Zavádza jednotné jednotky pre všetky fyzikálne veličiny,
        aby sa vedci a technici po celom svete navzájom rozumeli — bez ohľadu na jazyk.
      </p>
    </div>

    <!-- Section 1: Base units -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">7 základných jednotiek SI</h2>
      <p class="text-gray-500 mb-5">
        Všetky ostatné jednotky sú odvodené práve z týchto siedmich.
      </p>
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-emerald-600 text-white">
              <th class="text-left px-5 py-3 font-semibold">Fyzikálna veličina</th>
              <th class="text-left px-5 py-3 font-semibold">Jednotka</th>
              <th class="text-left px-5 py-3 font-semibold">Značka</th>
              <th class="text-left px-5 py-3 font-semibold hidden sm:table-cell">Príklad použitia</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(unit, i) in baseUnits" :key="unit.quantity" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
              <td class="px-5 py-3 font-medium text-gray-800">{{ unit.quantity }}</td>
              <td class="px-5 py-3 text-gray-700">{{ unit.name }}</td>
              <td class="px-5 py-3 font-mono font-bold text-emerald-700">{{ unit.symbol }}</td>
              <td class="px-5 py-3 text-gray-500 hidden sm:table-cell">{{ unit.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 2: Prefixes -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Predpony SI</h2>
      <p class="text-gray-500 mb-5">
        Predpony sa pridávajú pred základnú jednotku, aby sme vyjadrili veľmi veľké alebo veľmi malé hodnoty.
        Napríklad: <strong>1 km = 1 000 m</strong>, <strong>1 mm = 0,001 m</strong>.
      </p>
      <div class="overflow-x-auto rounded-2xl border border-gray-200">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-gray-700 text-white">
              <th class="text-left px-5 py-3 font-semibold">Predpona</th>
              <th class="text-left px-5 py-3 font-semibold">Značka</th>
              <th class="text-left px-5 py-3 font-semibold">Hodnota</th>
              <th class="text-left px-5 py-3 font-semibold hidden sm:table-cell">Príklad</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(prefix, i) in prefixes"
              :key="prefix.name"
              :class="[i % 2 === 0 ? 'bg-white' : 'bg-gray-50', prefix.highlight ? 'font-semibold' : '']"
            >
              <td class="px-5 py-3 text-gray-800">{{ prefix.name }}</td>
              <td class="px-5 py-3 font-mono font-bold" :class="prefix.positive ? 'text-blue-600' : 'text-orange-600'">{{ prefix.symbol }}</td>
              <td class="px-5 py-3 text-gray-700">{{ prefix.value }}</td>
              <td class="px-5 py-3 text-gray-500 hidden sm:table-cell">{{ prefix.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 3: Derived units -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Odvodené jednotky</h2>
      <p class="text-gray-500 mb-5">
        Odvodené jednotky vznikajú kombináciou základných jednotiek. Niektoré majú vlastné meno, iné sa zapisujú ako zlomok.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="unit in derivedUnits"
          :key="unit.name"
          class="rounded-xl border border-gray-200 bg-white p-4 flex gap-4 items-start"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold font-mono text-white" :class="unit.color">
            {{ unit.symbol }}
          </div>
          <div>
            <p class="font-semibold text-gray-900">{{ unit.name }} <span class="text-gray-400 font-normal text-sm">({{ unit.quantity }})</span></p>
            <p class="text-sm text-gray-500 mt-0.5">{{ unit.definition }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Converter -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Prevodník jednotiek</h2>
      <p class="text-gray-500 mb-5">Zadaj hodnotu a vyber jednotky — výsledok sa prepočíta okamžite.</p>

      <div class="bg-white border border-gray-200 rounded-2xl p-6">

        <!-- Category tabs -->
        <div class="flex flex-wrap gap-2 mb-7">
          <button
            v-for="(cat, i) in converterCategories"
            :key="cat.name"
            :class="[
              'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors',
              selectedCategoryIndex === i
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
            @click="selectCategory(i)"
          >
            {{ cat.icon }} {{ cat.name }}
          </button>
        </div>

        <!-- Converter row -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">

          <!-- From -->
          <div class="flex-1">
            <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Hodnota</label>
            <div class="flex rounded-xl border border-gray-300 overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
              <input
                v-model.number="fromValue"
                type="number"
                placeholder="0"
                data-testid="converter-input"
                class="flex-1 min-w-0 px-4 py-3 text-lg font-semibold text-gray-900 outline-none bg-white"
              >
              <select
                v-model="fromUnitIndex"
                class="px-3 py-3 bg-gray-50 border-l border-gray-300 text-sm font-semibold text-gray-700 outline-none cursor-pointer"
              >
                <option v-for="(unit, j) in activeCategory?.units ?? []" :key="unit.symbol" :value="j">
                  {{ unit.symbol }}
                </option>
              </select>
            </div>
          </div>

          <!-- Swap button -->
          <div class="flex justify-center sm:pb-1">
            <button
              class="w-10 h-10 rounded-full bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 text-gray-500 flex items-center justify-center text-lg transition-colors"
              title="Prehodiť jednotky"
              data-testid="converter-swap"
              @click="swapUnits"
            >
              ⇄
            </button>
          </div>

          <!-- To -->
          <div class="flex-1">
            <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Výsledok</label>
            <div class="flex rounded-xl border border-emerald-200 bg-emerald-50 overflow-hidden">
              <div data-testid="converter-result" class="flex-1 min-w-0 px-4 py-3 text-lg font-bold text-emerald-700 truncate">
                {{ result }}
              </div>
              <select
                v-model="toUnitIndex"
                class="px-3 py-3 bg-emerald-100 border-l border-emerald-200 text-sm font-semibold text-emerald-700 outline-none cursor-pointer"
              >
                <option v-for="(unit, j) in activeCategory?.units ?? []" :key="unit.symbol" :value="j">
                  {{ unit.symbol }}
                </option>
              </select>
            </div>
          </div>

        </div>

        <!-- Equation hint -->
        <p v-if="equationHint" data-testid="equation-hint" class="mt-4 text-sm text-gray-400 text-center">
          {{ equationHint }}
        </p>

      </div>
    </section>

    <!-- Summary box -->
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h3 class="font-bold text-gray-900 mb-3">Zhrnutie</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Sústava SI má <strong>7 základných jednotiek</strong> — meter, kilogram, sekunda, ampér, kelvin, mól, kandela.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Predponami (kilo, mega, mili, mikro…) meníme veľkosť jednotky vždy o násobok 10.</li>
        <li class="flex gap-2"><span class="text-emerald-500 font-bold">✓</span> Odvodené jednotky (newton, joule, watt…) vznikajú kombináciou základných.</li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  converterCategories,
  convertTemp,
  convertLinear,
  formatNumber,
  type LinearUnit,
} from '~/utils/converter'

const selectedCategoryIndex = ref(0)
const fromValue = ref<number>(1)
const fromUnitIndex = ref(0)
const toUnitIndex = ref(1)

const activeCategory = computed(() => converterCategories[selectedCategoryIndex.value])

function selectCategory(i: number) {
  selectedCategoryIndex.value = i
  fromUnitIndex.value = 0
  toUnitIndex.value = 1
  fromValue.value = 1
}

function swapUnits() {
  const tmp = fromUnitIndex.value
  fromUnitIndex.value = toUnitIndex.value
  toUnitIndex.value = tmp
}

const result = computed(() => {
  const raw = fromValue.value
  if (isNaN(raw)) return '—'
  const cat = activeCategory.value
  if (!cat) return '—'
  const from = cat.units[fromUnitIndex.value]
  const to   = cat.units[toUnitIndex.value]
  if (!from || !to) return '—'
  if (from.symbol === to.symbol) return formatNumber(raw)
  if (from.isTemp) return formatNumber(convertTemp(raw, from.symbol, to.symbol))
  const linear = from as LinearUnit
  const toLinear = to as LinearUnit
  return formatNumber(convertLinear(raw, linear.factor, toLinear.factor))
})

const equationHint = computed(() => {
  const raw = fromValue.value
  if (isNaN(raw)) return ''
  const cat = activeCategory.value
  if (!cat) return ''
  const from = cat.units[fromUnitIndex.value]
  const to   = cat.units[toUnitIndex.value]
  if (!from || !to || from.symbol === to.symbol) return ''
  return `${formatNumber(raw)} ${from.symbol} = ${result.value} ${to.symbol}`
})

// ── Static data ─────────────────────────────────────────────────────────────

const baseUnits = [
  { quantity: 'Dĺžka', name: 'meter', symbol: 'm', example: 'výška človeka ≈ 1,75 m' },
  { quantity: 'Hmotnosť', name: 'kilogram', symbol: 'kg', example: 'hmotnosť knihy ≈ 0,5 kg' },
  { quantity: 'Čas', name: 'sekunda', symbol: 's', example: 'trvanie jedného úderu srdca ≈ 0,8 s' },
  { quantity: 'Elektrický prúd', name: 'ampér', symbol: 'A', example: 'nabíjačka telefónu ≈ 2 A' },
  { quantity: 'Termodynamická teplota', name: 'kelvin', symbol: 'K', example: '0 °C = 273,15 K' },
  { quantity: 'Látkové množstvo', name: 'mól', symbol: 'mol', example: '1 mol vody = 18 g' },
  { quantity: 'Svietivosť', name: 'kandela', symbol: 'cd', example: 'sviečka ≈ 1 cd' },
]

const prefixes = [
  { name: 'tera',  symbol: 'T',  value: '10¹²',  example: '1 TB = 10¹² B',   positive: true  },
  { name: 'giga',  symbol: 'G',  value: '10⁹',   example: '1 GHz = 10⁹ Hz',  positive: true  },
  { name: 'mega',  symbol: 'M',  value: '10⁶',   example: '1 MW = 10⁶ W',    positive: true, highlight: true },
  { name: 'kilo',  symbol: 'k',  value: '10³',   example: '1 km = 10³ m',     positive: true, highlight: true },
  { name: 'hekto', symbol: 'h',  value: '10²',   example: '1 hPa = 100 Pa',   positive: true  },
  { name: 'deka',  symbol: 'da', value: '10¹',   example: '1 dag = 10 g',     positive: true  },
  { name: 'deci',  symbol: 'd',  value: '10⁻¹',  example: '1 dl = 0,1 l',    positive: false },
  { name: 'centi', symbol: 'c',  value: '10⁻²',  example: '1 cm = 0,01 m',   positive: false, highlight: true },
  { name: 'mili',  symbol: 'm',  value: '10⁻³',  example: '1 mm = 0,001 m',  positive: false, highlight: true },
  { name: 'mikro', symbol: 'μ',  value: '10⁻⁶',  example: '1 μm = 10⁻⁶ m',  positive: false },
  { name: 'nano',  symbol: 'n',  value: '10⁻⁹',  example: '1 nm = 10⁻⁹ m',  positive: false },
  { name: 'piko',  symbol: 'p',  value: '10⁻¹²', example: '1 pF = 10⁻¹² F', positive: false },
]

const derivedUnits = [
  { name: 'Newton',   symbol: 'N',  quantity: 'sila',       definition: '1 N = 1 kg·m/s² — sila, ktorá udeľuje 1 kg zrýchlenie 1 m/s²', color: 'bg-emerald-500' },
  { name: 'Joule',    symbol: 'J',  quantity: 'energia, práca', definition: '1 J = 1 N·m = 1 kg·m²/s²', color: 'bg-teal-500' },
  { name: 'Watt',     symbol: 'W',  quantity: 'výkon',      definition: '1 W = 1 J/s — energia za sekundu', color: 'bg-blue-500' },
  { name: 'Pascal',   symbol: 'Pa', quantity: 'tlak',       definition: '1 Pa = 1 N/m² — sila na jednotku plochy', color: 'bg-purple-500' },
  { name: 'Hertz',    symbol: 'Hz', quantity: 'frekvencia', definition: '1 Hz = 1/s — počet opakovaní za sekundu', color: 'bg-orange-500' },
  { name: 'Coulomb',  symbol: 'C',  quantity: 'el. náboj',  definition: '1 C = 1 A·s — množstvo elektrického náboja', color: 'bg-yellow-500' },
]
</script>
