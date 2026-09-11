<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/matematika" class="hover:text-blue-600 transition-colors">📐 Matematika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Geometria a meranie</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📐</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Geometria a meranie</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Od rovinných útvarov cez priestorové telesá až po analytickú geometriu.
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
  title: 'Geometria a meranie | Matematika | Náuka Portál',
  meta: [{ name: 'description', content: 'Planimetria, trigonometria, stereometria a analytická geometria pre gymnazistov.' }],
})

const sections = [
  { slug: 'planimetria', icon: '🔺', title: 'Planimetria', desc: 'Trojuholník (Pytagor, zhodnosť, podobnosť), štvoruholníky, kružnica, obvod a obsah útvarov.', bg: 'bg-cyan-600', link: '/matematika/geometria/planimetria' },
  { slug: 'trigonometria', icon: '📏', title: 'Trigonometria', desc: 'Sínusová a kosínusová veta, obsah trojuholníka, goniometria v pravouhlom trojuholníku.', bg: 'bg-teal-600', link: '/matematika/geometria/trigonometria' },
  { slug: 'stereometria', icon: '🧊', title: 'Stereometria', desc: 'Kocka, kváder, hranol, ihlan, valec, kužeľ, guľa — povrch a objem, siete telies.', bg: 'bg-blue-700', link: '/matematika/geometria/stereometria' },
  { slug: 'analyticka-geometria', icon: '🗺️', title: 'Analytická geometria', desc: 'Súradnicová sústava, vzdialenosť bodov, rovnica priamky, kružnice a ich vzájomná poloha.', bg: 'bg-sky-700', link: '/matematika/geometria/analyticka-geometria' },
]
</script>
