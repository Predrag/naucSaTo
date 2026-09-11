<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Chemické reakcie</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚗️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Chemické reakcie</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Chemické rovnice, kinetika, rovnováha, redox a acidobáza.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            class="mt-4 inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-3 py-1 self-start"
          >
            Otvoriť →
          </span>
          <span
            v-else
            class="mt-4 inline-block text-xs font-semibold text-gray-400 bg-gray-100 rounded-full px-3 py-1 self-start"
          >
            Čoskoro
          </span>
        </div>
      </component>
    </div>

  </div>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
const nuxtLink = resolveComponent('NuxtLink')

const sections = [
  {
    slug: 'chemicke-rovnice',
    icon: '⚖️',
    title: 'Chemické rovnice',
    desc: 'Zápis reakcií, vyčíslovanie, stechiometria, zákon zachovania hmotnosti.',
    bg: 'bg-red-500',
    link: '/chemia/chemicke-reakcie/chemicke-rovnice',
  },
  {
    slug: 'rychlost-rovnovaha',
    icon: '⏱️',
    title: 'Rýchlosť reakcie a rovnováha',
    desc: 'Faktory rýchlosti, katalyzátor, chemická rovnováha, Le Chatelier.',
    bg: 'bg-orange-500',
    link: '/chemia/chemicke-reakcie/rychlost-rovnovaha',
  },
  {
    slug: 'acidobaza-pH',
    icon: '🌡️',
    title: 'Kyseliny, zásady a pH',
    desc: 'Brönstedova teória, pH, neutralizácia, soli, amfotérne látky.',
    bg: 'bg-amber-600',
    link: '/chemia/chemicke-reakcie/acidobaza-pH',
  },
  {
    slug: 'redox',
    icon: '⚡',
    title: 'Redoxné reakcie',
    desc: 'Oxidácia, redukcia, oxidačné čísla, elektrolýza, korózia kovov.',
    bg: 'bg-red-600',
    link: '/chemia/chemicke-reakcie/redox',
  },
]

useHead({
  title: 'Chemické reakcie | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Chemické rovnice, kinetika reakcií, chemická rovnováha, redoxné reakcie a acidobázová chémia pre gymnázium.' },
    { property: 'og:title', content: 'Chemické reakcie | Chémia | Náuka Portál' },
    { property: 'og:description', content: 'Chemické rovnice, kinetika reakcií, chemická rovnováha, redoxné reakcie a acidobázová chémia pre gymnázium.' },
  ],
})
</script>
