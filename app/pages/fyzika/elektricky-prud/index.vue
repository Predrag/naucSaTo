<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Elektrický prúd</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔌</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Elektrický prúd</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Prúd, napätie, odpor, Ohmov zákon, obvody a premena elektrickej energie.
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
    slug: 'elektricke-veliciny',
    icon: '⚡',
    title: 'Elektrické veličiny',
    description: 'Elektrický prúd I, napätie U, odpor R — definície a jednotky.',
    bg: 'bg-yellow-500',
    link: '/fyzika/elektricky-prud/elektricke-veliciny',
  },
  {
    slug: 'ohmov-zakon',
    icon: '📊',
    title: 'Ohmov zákon',
    description: 'U=IR, závislosť odporu od geometrie a teploty vodiča.',
    bg: 'bg-amber-500',
    link: '/fyzika/elektricky-prud/ohmov-zakon',
  },
  {
    slug: 'zapojenie-rezistorov',
    icon: '🔗',
    title: 'Zapojenie rezistorov',
    description: 'Sériové a paralelné zapojenie, výpočet celkového odporu.',
    bg: 'bg-orange-500',
    link: '/fyzika/elektricky-prud/zapojenie-rezistorov',
  },
  {
    slug: 'elektricka-praca-vykon',
    icon: '💡',
    title: 'Elektrická práca a výkon',
    description: 'W=UIt, P=UI, Joulov zákon, istič.',
    bg: 'bg-red-500',
    link: '/fyzika/elektricky-prud/elektricka-praca-vykon',
  },
]
</script>
