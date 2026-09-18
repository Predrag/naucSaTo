<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📐</span>
      <h1 class="text-4xl font-extrabold text-blue-700">{{ $t('math.title') }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">{{ $t('math.subtitle') }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <component
        :is="section.link ? nuxtLink : 'div'"
        v-for="section in sections"
        :key="section.slug"
        :to="section.link ? localePath(section.link) : undefined"
        :class="[
          'flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200',
          section.link ? 'cursor-pointer' : 'cursor-default',
        ]"
      >
        <div :class="['px-6 py-6 flex items-center gap-3', section.bg]">
          <span class="text-3xl">{{ section.icon }}</span>
          <span class="text-lg font-bold text-white leading-snug">{{ $t(section.titleKey) }}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ $t(section.descKey) }}</p>
          <span
            v-if="section.link"
            class="mt-4 inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1 self-start"
          >
            {{ $t('common.open') }}
          </span>
          <span
            v-else
            class="mt-4 inline-block text-xs font-semibold text-gray-400 bg-gray-100 rounded-full px-3 py-1 self-start"
          >
            {{ $t('common.soon') }}
          </span>
        </div>
      </component>
    </div>

  </div>
</template>

<script setup lang="ts">
import { resolveComponent, computed } from 'vue'

const nuxtLink = resolveComponent('NuxtLink')
const localePath = useLocalePath()
const { t } = useI18n()

useHead({
  title: computed(() => `${t('math.title')} | Náuka Portál`),
})

const sections = [
  { slug: 'cisla-a-vyrazy',         icon: '🔢', titleKey: 'math.numbers',       descKey: 'math.numbers_desc',       bg: 'bg-blue-500',   link: '/matematika/cisla-a-vyrazy' },
  { slug: 'funkcie',                 icon: '📈', titleKey: 'math.functions',     descKey: 'math.functions_desc',     bg: 'bg-indigo-500', link: '/matematika/funkcie' },
  { slug: 'geometria',               icon: '📐', titleKey: 'math.geometry',      descKey: 'math.geometry_desc',      bg: 'bg-cyan-600',   link: '/matematika/geometria' },
  { slug: 'kombinatorika-statistika',icon: '🎲', titleKey: 'math.combinatorics', descKey: 'math.combinatorics_desc', bg: 'bg-violet-500', link: '/matematika/kombinatorika-statistika' },
  { slug: 'logika-a-dokazovanie',    icon: '🧩', titleKey: 'math.logic',         descKey: 'math.logic_desc',         bg: 'bg-slate-600',  link: '/matematika/logika-a-dokazovanie' },
]
</script>
