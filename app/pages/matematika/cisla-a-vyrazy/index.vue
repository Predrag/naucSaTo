<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Čísla, premenné a výrazy</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔢</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Čísla, premenné a výrazy</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Číselné obory, množiny, mocniny, rovnice a praktické výpočty s percentami.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
  title: 'Čísla, premenné a výrazy | Matematika | Náuka Portál',
  meta: [{ name: 'description', content: 'Číselné obory, množiny, intervaly, mocniny, rovnice, nerovnice a percentuálne výpočty pre gymnazistov.' }],
})

const sections = [
  { slug: 'cisla-a-mnoziny', icon: '🔵', title: 'Čísla a množiny', desc: 'Číselné obory N, Z, Q, R, I; množiny; intervaly; absolútna hodnota.', bg: 'bg-blue-500', link: '/matematika/cisla-a-vyrazy/cisla-a-mnoziny' },
  { slug: 'mocniny-odmocniny', icon: '⚡', title: 'Mocniny a odmocniny', desc: 'Mocniny, odmocniny, pravidlá počítania, vedecký zápis čísla.', bg: 'bg-blue-600', link: '/matematika/cisla-a-vyrazy/mocniny-odmocniny' },
  { slug: 'rovnice-a-nerovnice', icon: '⚖️', title: 'Rovnice a nerovnice', desc: 'Lineárne a kvadratické rovnice, diskriminant, sústavy rovníc, nerovnice.', bg: 'bg-indigo-500', link: '/matematika/cisla-a-vyrazy/rovnice-a-nerovnice' },
  { slug: 'percentualne-vypocty', icon: '💹', title: 'Percentuálne výpočty', desc: 'Percentá, promile, trojčlenka, priama a nepriama úmernosť, úrokovanie.', bg: 'bg-sky-600', link: '/matematika/cisla-a-vyrazy/percentualne-vypocty' },
]
</script>
