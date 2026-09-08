<template>
  <div class="max-w-6xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Vedci</span>
    </nav>

    <div class="flex items-center gap-3 mb-3">
      <span class="text-4xl">🔬</span>
      <h1 class="text-4xl font-extrabold text-emerald-700">Osobnosti fyziky</h1>
    </div>
    <p class="text-gray-500 text-lg mb-10">
      Ľudia, ktorých objavy zmenili náš pohľad na svet.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="scientist in scientists"
        :key="scientist.slug"
        :to="`/fyzika/osobnosti/${scientist.slug}`"
        class="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
      >
        <div :class="['px-6 py-6 flex items-center gap-4', scientist.bg]">
          <span class="text-4xl">{{ scientist.icon }}</span>
          <div>
            <p class="text-xl font-extrabold text-white">{{ scientist.name }}</p>
            <p class="text-sm text-white/80">{{ scientist.years }}</p>
          </div>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="text-sm text-gray-500 leading-relaxed flex-1">{{ scientist.description }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="inline-block text-xs font-bold text-white rounded-full px-3 py-1" :class="scientist.unitBg">
              {{ scientist.unit }}
            </span>
            <span class="text-sm font-semibold text-emerald-600">Čítať →</span>
          </div>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const scientists = [
  {
    slug: 'newton',
    icon: '🍎',
    name: 'Isaac Newton',
    years: '1643 – 1727',
    bg: 'bg-emerald-600',
    unit: 'newton (N)',
    unitBg: 'bg-emerald-500',
    description: 'Anglický fyzik a matematik, ktorý sformuloval tri zákony pohybu a zákon všeobecnej gravitácie.',
  },
  {
    slug: 'joule',
    icon: '🔋',
    name: 'James Prescott Joule',
    years: '1818 – 1889',
    bg: 'bg-teal-600',
    unit: 'joule (J)',
    unitBg: 'bg-teal-500',
    description: 'Anglický fyzik, ktorý dokázal, že teplo a mechanická energia sú vzájomne prevoditeľné.',
  },
  {
    slug: 'watt',
    icon: '⚙️',
    name: 'James Watt',
    years: '1736 – 1819',
    bg: 'bg-blue-600',
    unit: 'watt (W)',
    unitBg: 'bg-blue-500',
    description: 'Škótsky vynálezca, ktorého zdokonalenie parného stroja naštartovalo priemyselnú revolúciu.',
  },
  {
    slug: 'pascal',
    icon: '💧',
    name: 'Blaise Pascal',
    years: '1623 – 1662',
    bg: 'bg-purple-600',
    unit: 'pascal (Pa)',
    unitBg: 'bg-purple-500',
    description: 'Francúzsky vedec a matematik, ktorý objavil základný zákon hydrostatiky a vynašiel mechanickú kalkulačku.',
  },
  {
    slug: 'hertz',
    icon: '📡',
    name: 'Heinrich Hertz',
    years: '1857 – 1894',
    bg: 'bg-orange-600',
    unit: 'hertz (Hz)',
    unitBg: 'bg-orange-500',
    description: 'Nemecký fyzik, ktorý ako prvý experimentálne potvrdil existenciu elektromagnetických vĺn.',
  },
  {
    slug: 'coulomb',
    icon: '⚡',
    name: 'Charles-Augustin de Coulomb',
    years: '1736 – 1806',
    bg: 'bg-yellow-600',
    unit: 'coulomb (C)',
    unitBg: 'bg-yellow-500',
    description: 'Francúzsky fyzik, ktorý sformuloval zákon elektrických síl a vynašiel torznú váhu.',
  },
  {
    slug: 'petzval',
    icon: '📷',
    name: 'Jozef Maximilián Petzval',
    years: '1807 – 1891',
    bg: 'bg-indigo-600',
    unit: 'Optika & fotografia',
    unitBg: 'bg-indigo-500',
    description: 'Fyzik a matematik zo Spišskej Belej, zakladateľ modernej optiky a modernej fotografie.',
  },
  {
    slug: 'jedlik',
    icon: '⚡',
    name: 'Štefan Anián Jedlík',
    years: '1800 – 1895',
    bg: 'bg-amber-600',
    unit: 'Elektromagnetizmus',
    unitBg: 'bg-amber-500',
    description: 'Benediktínsky kňaz z Zemného, ktorý zostrojil prvý elektromotor pred Siemensom — a nikdy ho nepatentoval.',
  },
  {
    slug: 'segner',
    icon: '💧',
    name: 'Ján Andrej Segner',
    years: '1704 – 1777',
    bg: 'bg-blue-600',
    unit: 'Mechanika tekutín',
    unitBg: 'bg-blue-500',
    description: 'Bratislavský matematik a fyzik, vynálezca reaktívnej vodnej turbíny a zakladateľ pojmu povrchové napätie.',
  },
  {
    slug: 'stodola',
    icon: '⚙️',
    name: 'Aurel Bohuslav Stodola',
    years: '1859 – 1942',
    bg: 'bg-slate-600',
    unit: 'Termodynamika',
    unitBg: 'bg-slate-500',
    description: 'Inžinier z Liptovského Mikuláša, zakladateľ teórie parných a plynových turbín, priateľ Einsteina.',
  },
  {
    slug: 'hell',
    icon: '🔭',
    name: 'Maximilián Hell',
    years: '1720 – 1792',
    bg: 'bg-violet-700',
    unit: 'Astronómia',
    unitBg: 'bg-violet-600',
    description: 'Jezuitský astronóm z Banskej Štiavnice, riaditeľ Viedenskej hvezdárne, pozorovateľ prechodu Venuše (1769).',
  },
  {
    slug: 'murgas',
    icon: '📻',
    name: 'Jozef Murgaš',
    years: '1864 – 1929',
    bg: 'bg-green-700',
    unit: 'Rádiové vlny',
    unitBg: 'bg-green-600',
    description: 'Kňaz, maliar a vynálezca z Tajova, priekopník bezdrôtovej komunikácie, ktorého patenty skončili u Marconiho.',
  },
]
</script>
