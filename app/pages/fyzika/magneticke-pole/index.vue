<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Magnetické pole</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧲</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Magnetické pole</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Magnetické pole, pôsobenie na vodiče a náboje, elektromagnetická indukcia.
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
            class="mt-4 inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 self-start"
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
    slug: 'magneticke-pole-zaklady',
    icon: '🧭',
    title: 'Magnetické pole — základy',
    description: 'Magnetická indukcia B, magnetické indukčné čiary, Ampérovo pravidlo pravej ruky.',
    bg: 'bg-blue-500',
    link: '/fyzika/magneticke-pole/magneticke-pole-zaklady',
  },
  {
    slug: 'sila-na-vodic',
    icon: '⚡',
    title: 'Sila na vodič s prúdom',
    description: 'Flemingovo pravidlo ľavej ruky, F=BIl·sinα, elektromotor.',
    bg: 'bg-indigo-500',
    link: '/fyzika/magneticke-pole/sila-na-vodic',
  },
  {
    slug: 'elektromagneticka-indukcia',
    icon: '🔄',
    title: 'Elektromagnetická indukcia',
    description: 'Faradayov zákon, Lenzov zákon, generátor elektrickej energie.',
    bg: 'bg-purple-500',
    link: '/fyzika/magneticke-pole/elektromagneticka-indukcia',
  },
  {
    slug: 'striedavy-prud',
    icon: '〰️',
    title: 'Striedavý prúd',
    description: 'Generátor, frekvencia, amplitúda, efektívna hodnota, transformátor.',
    bg: 'bg-violet-500',
    link: '/fyzika/magneticke-pole/striedavy-prud',
  },
]
</script>
