<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">📐</span>
      <h1 class="text-4xl font-extrabold text-blue-700">Matematika</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Vyber si tému, ktorú si chceš preštudovať.
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
            class="mt-4 inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1 self-start"
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

useHead({
  title: 'Matematika | Náuka Portál',
  meta: [
    { name: 'description', content: 'Čísla, funkcie, geometria, kombinatorika, logika — bezplatné materiály z matematiky pre gymnazistov.' },
    { property: 'og:title', content: 'Matematika | Náuka Portál' },
    { property: 'og:description', content: 'Čísla, funkcie, geometria, kombinatorika, logika — bezplatné materiály z matematiky pre gymnazistov.' },
  ],
})

const sections = [
  {
    slug: 'cisla-a-vyrazy',
    icon: '🔢',
    title: 'Čísla, premenné a výrazy',
    description: 'Číselné obory, množiny, intervaly, mocniny, odmocniny, rovnice, nerovnice, percentá a úrokovanie.',
    bg: 'bg-blue-500',
    link: '/matematika/cisla-a-vyrazy',
  },
  {
    slug: 'funkcie',
    icon: '📈',
    title: 'Funkcie a grafy',
    description: 'Lineárna, kvadratická, exponenciálna, logaritmická a goniometrické funkcie — definície, grafy, vlastnosti.',
    bg: 'bg-indigo-500',
    link: '/matematika/funkcie',
  },
  {
    slug: 'geometria',
    icon: '📐',
    title: 'Geometria a meranie',
    description: 'Planimetria, trigonometria, priestorové telesá (povrch, objem) a analytická geometria.',
    bg: 'bg-cyan-600',
    link: '/matematika/geometria',
  },
  {
    slug: 'kombinatorika-statistika',
    icon: '🎲',
    title: 'Kombinatorika a štatistika',
    description: 'Permutácie, variácie, kombinácie, pravdepodobnosť, štatistické ukazovatele a histogram.',
    bg: 'bg-violet-500',
    link: '/matematika/kombinatorika-statistika',
  },
  {
    slug: 'logika-a-dokazovanie',
    icon: '🧩',
    title: 'Logika, dôkazy a postupnosti',
    description: 'Výroky, logické spojky, kvantifikátory, typy dôkazov, matematická indukcia, aritmetická a geometrická postupnosť.',
    bg: 'bg-slate-600',
    link: '/matematika/logika-a-dokazovanie',
  },
]
</script>
