<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">⚡</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">{{ $t('physics.title') }}</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      {{ $t('physics.subtitle') }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <component
        :is="topic.link ? nuxtLink : 'div'"
        v-for="topic in topics"
        :key="topic.slug"
        :to="topic.link ? localePath(topic.link) : undefined"
        :class="[
          'flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200',
          topic.link ? 'cursor-pointer' : 'cursor-default',
        ]"
      >
        <div :class="['px-8 py-8 flex items-center gap-4', topic.bg]">
          <span class="text-4xl">{{ topic.icon }}</span>
          <span class="text-xl font-bold text-white leading-tight">{{ $t(topic.titleKey) }}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ $t(topic.descKey) }}</p>
          <span
            v-if="topic.link"
            class="mt-4 inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 self-start"
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
import { resolveComponent } from 'vue'

const nuxtLink = resolveComponent('NuxtLink')
const localePath = useLocalePath()
const { t } = useI18n()

const topics = [
  { slug: 'uvod',          icon: '📏', titleKey: 'physics.intro',      descKey: 'physics.intro_desc',      bg: 'bg-emerald-500', link: '/fyzika/uvod' },
  { slug: 'mechanika',     icon: '🏎️', titleKey: 'physics.mechanics',  descKey: 'physics.mechanics_desc',  bg: 'bg-teal-500',    link: '/fyzika/mechanika' },
  { slug: 'termodynamika', icon: '🌡️', titleKey: 'physics.molecular',  descKey: 'physics.molecular_desc',  bg: 'bg-orange-500',  link: '/fyzika/molekulova-fyzika' },
  { slug: 'elektricky',    icon: '🔌', titleKey: 'physics.electricity', descKey: 'physics.electricity_desc', bg: 'bg-yellow-500', link: '/fyzika/elektricky-prud' },
  { slug: 'magnetizmus',   icon: '🧲', titleKey: 'physics.magnetic',   descKey: 'physics.magnetic_desc',   bg: 'bg-blue-500',    link: '/fyzika/magneticke-pole' },
  { slug: 'kmity',         icon: '〰️', titleKey: 'physics.waves',      descKey: 'physics.waves_desc',      bg: 'bg-purple-500',  link: '/fyzika/kmity-vlnenie' },
  { slug: 'optika',        icon: '🔭', titleKey: 'physics.optics',     descKey: 'physics.optics_desc',     bg: 'bg-sky-500',     link: '/fyzika/optika' },
  { slug: 'atomova',       icon: '⚛️', titleKey: 'physics.atomic',     descKey: 'physics.atomic_desc',     bg: 'bg-red-500',     link: '/fyzika/atomova-fyzika' },
]

useHead({
  title: computed(() => `${t('physics.title')} | Náuka Portál`),
  meta: [
    { name: 'description', content: computed(() => t('physics.intro_desc')) },
  ],
})
</script>
