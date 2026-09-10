<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Blaise Pascal</span>
    </nav>

    <div class="bg-purple-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">💧</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Blaise Pascal</h1>
        <p class="text-purple-100 text-lg mb-4">Francúzsky fyzik, matematik a filosof</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1623 – 1662</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇫🇷 Francúzsko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: pascal (Pa)</span>
        </div>
      </div>
    </div>

    <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Blaise Pascal sa narodil <strong>19. júna 1623</strong> v Clermont-Ferrand vo Francúzsku.
        Bol zázračným dieťaťom — vo veku 16 rokov napísal významný článok o kuželosečkách a vo veku 18 rokov
        skonštruoval jednu z prvých mechanických kalkulačiek. Objavil základný zákon hydrostatiky
        a spoluzakladal teóriu pravdepodobnosti. Zomrel predčasne vo veku len <strong>39 rokov</strong>
        dňa 19. augusta 1662 v Paríži.
      </p>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Hlavné prínosy vede</h2>
      <div class="space-y-3">
        <div v-for="item in contributions" :key="item.title" class="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl shrink-0">{{ item.icon }}</span>
          <div>
            <p class="font-semibold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-500 mt-0.5">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Zaujímavosti</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in facts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">pascal (Pa) — jednotka tlaku</p>
        <p class="text-sm text-gray-500">1 Pa = 1 N/m² — sila jedného newtona na meter štvorcový</p>
      </div>
      <span class="text-3xl font-bold font-mono text-purple-600 bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center">Pa</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '💧',
    title: 'Pascalov zákon (hydrostatika)',
    description: 'Tlak pôsobiaci na uzavretú kvapalinu sa prenáša rovnomerne vo všetkých smeroch — základ hydrauliky a hydraulického lisu.',
  },
  {
    icon: '🌬️',
    title: 'Vzduch má hmotnosť — existencia vákua',
    description: 'Pomocou ortuťových barometrov experimentálne dokázal, že vzduch má váhu a že vákuum skutočne existuje.',
  },
  {
    icon: '🎲',
    title: 'Teória pravdepodobnosti',
    description: 'Spolu s Pierrom de Fermatom položil základy matematickej teórie pravdepodobnosti prostredníctvom korešpondencie o hazardných hrách.',
  },
  {
    icon: '🖩',
    title: 'Pascalina — mechanická kalkulačka',
    description: 'Vo veku 18 rokov skonštruoval jeden z prvých funkčných mechanických kalkulátorov na sčítanie a odčítanie.',
  },
]

const facts = [
  'Pascal bol zázračné dieťa — jeho otec ho vzdelával výhradne doma. Vo veku 16 rokov napísal vážny vedecký článok o kuželosečkách, ktorý obdivoval sám Descartes.',
  'Programovací jazyk Pascal, ktorý v 60. rokoch 20. storočia vytvoril Niklaus Wirth, bol pomenovaný na jeho počesť ako uznanie Pascaliny za predchodcu moderného počítača.',
  'Pascal zomrel vo veku len 39 rokov. Napriek tomu krátkemu životu nesie jeho meno jednotka SI, Pascalov zákon, Pascalov trojuholník, filozofický argument (Pascalova stávka) aj programovací jazyk.',
]
</script>
