<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">James Prescott Joule</span>
    </nav>

    <div class="bg-teal-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🔋</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">James Prescott Joule</h1>
        <p class="text-teal-100 text-lg mb-4">Anglický fyzik</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1818 – 1889</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇬🇧 Anglicko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: joule (J)</span>
        </div>
      </div>
    </div>

    <div class="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        James Prescott Joule sa narodil <strong>24. decembra 1818</strong> v Salford v Anglicku.
        Bol z veľkej časti samouk — vedecké experimenty vykonával popri riadení rodinného pivovaru.
        Dokázal, že teplo a mechanická energia sú vzájomne prevoditeľné, čím položil základ
        prvého zákona termodynamiky. Zomrel <strong>11. októbra 1889</strong> v Sale.
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
          <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">joule (J) — jednotka energie a práce</p>
        <p class="text-sm text-gray-500">1 J = 1 N·m = 1 kg·m²/s²</p>
      </div>
      <span class="text-4xl font-bold font-mono text-teal-600 bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center">J</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🌡️',
    title: 'Mechanický ekvivalent tepla',
    description: 'Experimentálne dokázal, že teplo a mechanická energia sú prevoditeľné pri pevnom pomere — základ zachovania energie.',
  },
  {
    icon: '⚡',
    title: 'Joulov zákon elektrického ohrevu',
    description: 'Teplo vzniknuté vo vodiči je úmerné odporu a druhej mocnine prúdu: Q = I²·R·t.',
  },
  {
    icon: '🌡️',
    title: 'Absolútna Kelvinova stupnica',
    description: 'Spolupracoval s lordom Kelvinom na zavedení absolútnej teplotnej stupnice.',
  },
  {
    icon: '❌',
    title: 'Vyvrátenie teórie kalorika',
    description: 'Dokázal, že teplo nie je látka (kalorická tekutina), ale forma pohybu — čím odmietol vtedy panujúcu teóriu.',
  },
]

const facts = [
  'Joule bol z veľkej časti samouk a experimenty vykonával popri riadení rodinného pivovaru — nikdy nepôsobil ako profesionálny vedec na univerzite.',
  'Na jeho náhrobku je vyryté číslo 772,55 — presná hodnota, ktorú experimentálne určil pre množstvo práce (v ft·lb) potrebnej na ohrev 1 libry vody o 1 °F. Roky sa snažil toto meranie zdokonaliť.',
  'Keď prvýkrát prezentoval svoje zistenia vedeckej obci, väčšina vedcov bola hlboko skeptická. Napriek odmietaniu vytrval a nakoniec sformuloval jeden zo základných zákonov fyziky.',
]
</script>
