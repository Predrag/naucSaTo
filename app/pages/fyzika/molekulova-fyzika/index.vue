<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Molekulová fyzika a termodynamika</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🌡️</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Molekulová fyzika a termodynamika</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Skúma vnútornú stavbu látok, tepelné deje a vlastnosti plynov, kvapalín a tuhých látok.
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
    slug: 'casticova-stavba',
    icon: '⚛️',
    title: 'Časticová stavba látok',
    description: 'Atómy, molekuly, kryštalické a amorfné látky, vnútorná energia.',
    bg: 'bg-blue-500',
    link: '/fyzika/molekulova-fyzika/casticova-stavba',
  },
  {
    slug: 'tlak-kapaliny-plyny',
    icon: '💧',
    title: 'Tlak v kvapalinách a plynoch',
    description: 'Hydrostatický tlak, Pascalov zákon, Archimedov zákon, atmosferický tlak.',
    bg: 'bg-cyan-500',
    link: '/fyzika/molekulova-fyzika/tlak-kapaliny-plyny',
  },
  {
    slug: 'idealny-plyn',
    icon: '🔬',
    title: 'Ideálny plyn',
    description: 'Stavová rovnica, izodeje — izobarický, izochorický, izotermický a adiabatický dej.',
    bg: 'bg-teal-500',
    link: '/fyzika/molekulova-fyzika/idealny-plyn',
  },
  {
    slug: 'zmeny-skupenstva',
    icon: '🧊',
    title: 'Zmeny skupenstva',
    description: 'Topenie, tuhnutie, vyparovanie, kondenzácia, sublimácia. Nasýtené pary.',
    bg: 'bg-sky-500',
    link: '/fyzika/molekulova-fyzika/zmeny-skupenstva',
  },
  {
    slug: 'vlhkost-vzduchu',
    icon: '🌦️',
    title: 'Vlhkosť vzduchu',
    description: 'Relatívna a absolútna vlhkosť, rosný bod, využitie v praxi.',
    bg: 'bg-indigo-500',
    link: '/fyzika/molekulova-fyzika/vlhkost-vzduchu',
  },
]
</script>
