<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Vedci</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Charles-Augustin de Coulomb</span>
    </nav>

    <div class="bg-yellow-500 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Charles-Augustin de Coulomb</h1>
        <p class="text-yellow-100 text-lg mb-4">Francúzsky fyzik a vojenský inžinier</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1736 – 1806</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇫🇷 Francúzsko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: coulomb (C)</span>
        </div>
      </div>
    </div>

    <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Charles-Augustin de Coulomb sa narodil <strong>14. júna 1736</strong> v Angoulême vo Francúzsku.
        Pred tým, ako sa stal fyzikom, strávil 8 rokov ako vojenský inžinier na Martiniku.
        Sformuloval Coulombov zákon elektrostatickej sily a vynašiel torznú váhu — precízny prístroj
        na meranie malých síl. Zomrel <strong>23. augusta 1806</strong> v Paríži.
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
          <span class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">coulomb (C) — jednotka elektrického náboja</p>
        <p class="text-sm text-gray-500">1 C = 1 A·s — náboj prenesený prúdom 1 ampér za 1 sekundu</p>
      </div>
      <span class="text-4xl font-bold font-mono text-yellow-600 bg-yellow-50 w-16 h-16 rounded-xl flex items-center justify-center">C</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '⚡',
    title: 'Coulombov zákon elektrostatiky',
    description: 'Elektrostatická sila medzi dvoma nábojmi je úmerná súčinu nábojov a nepriamo úmerná štvorcu ich vzdialenosti: F = k·q₁·q₂/r².',
  },
  {
    icon: '⚖️',
    title: 'Torzná váha',
    description: 'Vynašiel precízny prístroj na meranie veľmi malých síl pomocou krútiaceho momentu tenkého vlákna — umožnil mu odvodiť svoj zákon experimentálne.',
  },
  {
    icon: '🧲',
    title: 'Zákon magnetických pólov',
    description: 'Stanovil, že magnetické póly sa priťahujú a odpudzujú podľa rovnakého inverzného zákona štvorcu ako elektrické náboje.',
  },
  {
    icon: '🔩',
    title: 'Trenie a mechanika pôdy',
    description: 'Vykonal základný výskum trenia a mechaniky zemín, ktorý sa dodnes používa v stavebnom inžinierstve.',
  },
]

const facts = [
  'Predtým, ako sa Coulomb venoval fyzike, strávil 8 rokov ako vojenský inžinier prestavbou pevností na Martiniku (francúzske Karibik). Tato práca trvalo poškodila jeho zdravie.',
  'Coulombov zákon je matematicky identický s Newtonovým zákonom gravitácie — oba sú zákonmi inverzného štvorca. Je to krásny príklad toho, ako rovnaká matematická štruktúra sa objavuje v úplne rôznych oblastiach fyziky.',
  'Jeho meno je vyryté na Eiffelovej veži v Paríži medzi 72 francúzskymi vedcami a inžiniermi. Okrem jednotky SI nesie jeho meno aj Coulombova konštanta, Coulombov zákon a ďalšie fyzikálne pojmy.',
]
</script>
