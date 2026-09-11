<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Logika, dôkazy a postupnosti</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧩</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Logika, dôkazy a postupnosti</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Matematická logika, typy dôkazov a číselné postupnosti.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <component
        :is="section.link ? nuxtLink : 'div'"
        v-for="section in sections"
        :key="section.slug"
        :to="section.link || undefined"
        :class="[
          'flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200',
          section.link ? 'cursor-pointer' : 'cursor-default',
        ]"
      >
        <div :class="['px-6 py-6 flex items-center gap-3', section.bg]">
          <span class="text-3xl">{{ section.icon }}</span>
          <span class="text-lg font-bold text-white leading-snug">{{ section.title }}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ section.desc }}</p>
          <span
            v-if="section.link"
            class="mt-4 inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1 self-start"
          >
            Otvoriť →
          </span>
        </div>
      </component>
    </div>

  </div>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
const nuxtLink = resolveComponent('NuxtLink')

useHead({
  title: 'Logika, dôkazy a postupnosti | Matematika | Náuka Portál',
  meta: [{ name: 'description', content: 'Výroky, logické spojky, typy dôkazov, matematická indukcia, aritmetická a geometrická postupnosť.' }],
})

const sections = [
  { slug: 'vyroky-a-logika', icon: '💬', title: 'Výroky a logika', desc: 'Výrok, implikácia, ekvivalencia, logické spojky, kvantifikátory, tautológia, de Morganove pravidlá.', bg: 'bg-slate-600', link: '/matematika/logika-a-dokazovanie/vyroky-a-logika' },
  { slug: 'dokazovanie', icon: '✅', title: 'Dôkazovanie', desc: 'Priamy dôkaz, dôkaz sporom, protipríklad, matematická indukcia.', bg: 'bg-gray-700', link: '/matematika/logika-a-dokazovanie/dokazovanie' },
  { slug: 'postupnosti', icon: '🔄', title: 'Postupnosti a rady', desc: 'Aritmetická a geometrická postupnosť, vzorce pre súčty, nekonečný geometrický rad, sigma notácia.', bg: 'bg-zinc-600', link: '/matematika/logika-a-dokazovanie/postupnosti' },
]
</script>
