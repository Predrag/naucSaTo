<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <!-- Header -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚡</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Fyzika</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Vyber si tému, ktorú si chceš preštudovať.
    </p>

    <!-- Topic grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <component
        :is="topic.link ? nuxtLink : 'div'"
        v-for="topic in topics"
        :key="topic.slug"
        :to="topic.link || undefined"
        :class="[
          'flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200',
          topic.link ? 'cursor-pointer' : 'cursor-default',
        ]"
      >
        <div :class="['px-8 py-8 flex items-center gap-4', topic.bg]">
          <span class="text-4xl">{{ topic.icon }}</span>
          <span class="text-xl font-bold text-white leading-tight">{{ topic.title }}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ topic.description }}</p>
          <span
            v-if="topic.link"
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

const topics = [
  {
    slug: 'uvod',
    icon: '📏',
    title: 'Úvod do fyziky',
    description: 'Fyzikálne veličiny, jednotky SI, meranie a experimentovanie. Základ, bez ktorého sa nezaobídeme.',
    bg: 'bg-emerald-500',
    link: '/fyzika/uvod',
  },
  {
    slug: 'mechanika',
    icon: '🏎️',
    title: 'Mechanika',
    description: 'Kinematika, dynamika, pohyb, sily a Newtonove zákony. Fyzika v každodennom svete.',
    bg: 'bg-teal-500',
    link: '/fyzika/mechanika',
  },
  {
    slug: 'termodynamika',
    icon: '🌡️',
    title: 'Molekulová fyzika a termodynamika',
    description: 'Teplo, teplota, skupenstvá látok, ideálny plyn a termodynamické deje.',
    bg: 'bg-orange-500',
    link: '/fyzika/molekulova-fyzika',
  },
  {
    slug: 'elektricky-prud',
    icon: '🔌',
    title: 'Elektrický prúd',
    description: 'Elektrický náboj, napätie, odpor, Ohmov zákon a elektrické obvody.',
    bg: 'bg-yellow-500',
    link: '/fyzika/elektricky-prud',
  },
  {
    slug: 'magnetizmus',
    icon: '🧲',
    title: 'Magnetické pole',
    description: 'Magnety, magnetické pole, elektromagnety a elektromagnetická indukcia.',
    bg: 'bg-blue-500',
    link: '/fyzika/magneticke-pole',
  },
  {
    slug: 'kmity-vlnenie',
    icon: '〰️',
    title: 'Kmity a vlnenie',
    description: 'Mechanické kmitanie, vlnenie, zvuk a jeho vlastnosti.',
    bg: 'bg-purple-500',
    link: '/fyzika/kmity-vlnenie',
  },
  {
    slug: 'optika',
    icon: '🔭',
    title: 'Optika',
    description: 'Svetlo, odraz, lom, šošovky, zrkadlá a optické prístroje.',
    bg: 'bg-sky-500',
    link: '/fyzika/optika',
  },
  {
    slug: 'atomova-fyzika',
    icon: '⚛️',
    title: 'Atómová a jadrová fyzika',
    description: 'Štruktúra atómu, rádioaktivita, jadrové reakcie a energia.',
    bg: 'bg-red-500',
    link: '/fyzika/atomova-fyzika',
  },
]
</script>
