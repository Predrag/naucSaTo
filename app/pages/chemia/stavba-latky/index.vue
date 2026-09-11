<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/chemia" class="hover:text-orange-600 transition-colors">🧪 Chémia</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Stavba látky a periodická sústava</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚛️</span>
      <h1 class="text-4xl font-extrabold text-orange-700">Stavba látky a periodická sústava</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Atómy, ióny, chemická väzba a periodická sústava prvkov.
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
    slug: 'stavba-atomu',
    icon: '⚛️',
    title: 'Stavba atómu',
    desc: 'Protóny, neutróny, elektróny, jadrové čísla, izotopy, elektrónový obal.',
    bg: 'bg-amber-500',
    link: '/chemia/stavba-latky/stavba-atomu',
  },
  {
    slug: 'periodicka-tabulka',
    icon: '📋',
    title: 'Periodická sústava prvkov',
    desc: 'Periódy, skupiny, kovy, nekovy, polokovy, elektronegativita.',
    bg: 'bg-yellow-600',
    link: '/chemia/stavba-latky/periodicka-tabulka',
  },
  {
    slug: 'chemicka-vazba',
    icon: '🔗',
    title: 'Chemická väzba',
    desc: 'Kovalentná, iónová, vodíková a kovová väzba. Molekuly a kryštály.',
    bg: 'bg-orange-600',
    link: '/chemia/stavba-latky/chemicka-vazba',
  },
  {
    slug: 'nazvoslovie',
    icon: '📝',
    title: 'Názvoslovie zlúčenín',
    desc: 'Oxidačné čísla, názvoslovie oxidov, hydroxidov, kyselín, solí.',
    bg: 'bg-red-500',
    link: '/chemia/stavba-latky/nazvoslovie',
  },
]

useHead({
  title: 'Stavba látky a periodická sústava | Chémia | Náuka Portál',
  meta: [
    { name: 'description', content: 'Stavba atómu, periodická sústava prvkov, chemická väzba a názvoslovie zlúčenín — pre gymnazistov.' },
    { property: 'og:title', content: 'Stavba látky a periodická sústava | Chémia | Náuka Portál' },
    { property: 'og:description', content: 'Stavba atómu, periodická sústava prvkov, chemická väzba a názvoslovie zlúčenín — pre gymnazistov.' },
  ],
})
</script>
