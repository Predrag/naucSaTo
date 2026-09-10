<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Mechanika</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🏎️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Mechanika</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Mechanika skúma pohyb telies a sily, ktoré ho spôsobujú. Je základom celej klasickej fyziky.
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
    slug: 'kinematika',
    icon: '📈',
    title: 'Kinematika',
    description: 'Popis pohybu telies — rýchlosť, zrýchlenie, rovnomerný a rovnomerne zmenený pohyb. Bez riešenia príčin pohybu.',
    bg: 'bg-blue-500',
    link: '/fyzika/mechanika/kinematika',
  },
  {
    slug: 'newtonove-zakony',
    icon: '⚖️',
    title: 'Newtonove zákony pohybu',
    description: 'Tri základné zákony dynamiky — zákon zotrvačnosti, zákon sily (F = ma) a zákon akcie a reakcie.',
    bg: 'bg-emerald-500',
    link: '/fyzika/mechanika/newtonove-zakony',
  },
  {
    slug: 'gravitacia',
    icon: '🌍',
    title: 'Gravitácia a voľný pád',
    description: 'Newtonov gravitačný zákon, gravitačné zrýchlenie g a pohyb telies v gravitačnom poli Zeme.',
    bg: 'bg-orange-500',
    link: '/fyzika/mechanika/gravitacia',
  },
  {
    slug: 'vrhy',
    icon: '🎯',
    title: 'Vrhy telies',
    description: 'Vodorovný vrh, šikmý vrh a ich vlastnosti. Rozklad pohybu na zložky.',
    bg: 'bg-red-500',
    link: '/fyzika/mechanika/vrhy',
  },
  {
    slug: 'pohyb-po-kruznici',
    icon: '🔄',
    title: 'Pohyb po kružnici',
    description: 'Rovnomerný pohyb po kružnici, uhlová rýchlosť, perióda, frekvencia a dostredivá sila.',
    bg: 'bg-purple-500',
    link: '/fyzika/mechanika/pohyb-po-kruznici',
  },
  {
    slug: 'praca-energia',
    icon: '⚡',
    title: 'Práca a energia',
    description: 'Mechanická práca, kinetická a potenciálna energia, zákon zachovania energie a výkon.',
    bg: 'bg-yellow-500',
    link: '/fyzika/mechanika/praca-energia',
  },
  {
    slug: 'mechanika-tekutin',
    icon: '💧',
    title: 'Mechanika tekutín',
    description: 'Tlak v kvapalinách a plynoch, Pascalov zákon, Archimedov zákon a vztlaková sila.',
    bg: 'bg-cyan-500',
    link: '/fyzika/mechanika/mechanika-tekutin',
  },
  {
    slug: 'hybnost',
    icon: '🏉',
    title: 'Hybnosť',
    description: 'Hybnosť p = mv, zákon zachovania hybnosti, impulz sily, nárazy telies.',
    bg: 'bg-teal-500',
    link: '/fyzika/mechanika/hybnost',
  },
  {
    slug: 'trenie',
    icon: '⛰️',
    title: 'Trenie a naklonená rovina',
    description: 'Statické a dynamické trenie, koeficienty trenia, rozklad sily na naklonenej rovine.',
    bg: 'bg-slate-500',
    link: '/fyzika/mechanika/trenie',
  },
]
</script>
