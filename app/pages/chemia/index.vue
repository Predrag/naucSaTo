<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🧪</span>
      <h1 class="text-4xl font-extrabold text-orange-700">{{ $t('chemistry.title') }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">{{ $t('chemistry.subtitle') }}</p>

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
            class="mt-4 inline-block text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-3 py-1 self-start"
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
  title: computed(() => `${t('chemistry.title')} | Náuka Portál`),
})

const sections = [
  { slug: 'uvod',             icon: '🔬', titleKey: 'chemistry.intro',      descKey: 'chemistry.intro_desc',      bg: 'bg-orange-500', link: '/chemia/uvod' },
  { slug: 'stavba-latky',     icon: '⚛️', titleKey: 'chemistry.structure',  descKey: 'chemistry.structure_desc',  bg: 'bg-amber-500',  link: '/chemia/stavba-latky' },
  { slug: 'chemicke-reakcie', icon: '⚗️', titleKey: 'chemistry.reactions',  descKey: 'chemistry.reactions_desc',  bg: 'bg-red-500',    link: '/chemia/chemicke-reakcie' },
  { slug: 'anorganicka',      icon: '🪨', titleKey: 'chemistry.inorganic',  descKey: 'chemistry.inorganic_desc',  bg: 'bg-stone-500',  link: '/chemia/anorganicka-chemia' },
  { slug: 'organicka',        icon: '🌿', titleKey: 'chemistry.organic',    descKey: 'chemistry.organic_desc',    bg: 'bg-green-600',  link: '/chemia/organicka-chemia' },
]
</script>
