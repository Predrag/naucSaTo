<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧪</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Chémia</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Vyber si tému, ktorú si chceš preštudovať.
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
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ section.description }}</p>
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

useHead({
  title: 'Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Bezpečnosť v laboratóriu, atómy, chemické reakcie, organická chémia — bezplatné materiály z chémie pre gymnazistov.' },
    { property: 'og:title', content: 'Chémia | Náuka Portál' },
    { property: 'og:description', content: 'Bezpečnosť v laboratóriu, atómy, chemické reakcie, organická chémia — bezplatné materiály z chémie pre gymnazistov.' },
  ],
})

const sections = [
  {
    slug: 'uvod',
    icon: '🔬',
    title: 'Úvod do chémie',
    description: 'Bezpečnosť v laboratóriu, látky a zmesi, molárna hmotnosť, Avogadrova konštanta.',
    bg: 'bg-orange-500',
    link: '/chemia/uvod',
  },
  {
    slug: 'stavba-latky',
    icon: '⚛️',
    title: 'Stavba látky a periodická sústava',
    description: 'Atóm, jadro, elektróny, ióny, izotopy, periodická tabuľka prvkov, chemická väzba.',
    bg: 'bg-amber-500',
    link: '/chemia/stavba-latky',
  },
  {
    slug: 'chemicke-reakcie',
    icon: '⚗️',
    title: 'Chemické reakcie',
    description: 'Chemické rovnice, stechiometria, rýchlosť reakcií, rovnováha, redox, acidobáza, pH.',
    bg: 'bg-red-500',
    link: '/chemia/chemicke-reakcie',
  },
  {
    slug: 'anorganicka-chemia',
    icon: '🪨',
    title: 'Anorganická chémia',
    description: 'Vodík, voda, kovy, nekovy a ich zlúčeniny. Praktické anorganické látky.',
    bg: 'bg-stone-500',
    link: '/chemia/anorganicka-chemia',
  },
  {
    slug: 'organicka-chemia',
    icon: '🌿',
    title: 'Organická chémia',
    description: 'Uhľovodíky, alkány, alkény, alkíny, arény, deriváty, polyméry, ropa.',
    bg: 'bg-green-600',
    link: '/chemia/organicka-chemia',
  },
]
</script>
