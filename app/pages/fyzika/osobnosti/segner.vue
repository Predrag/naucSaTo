<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Ján Andrej Segner</span>
    </nav>

    <div class="bg-blue-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">💧</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Ján Andrej Segner</h1>
        <p class="text-blue-100 text-lg mb-4">Matematik, fyzik a inžinier</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1704 – 1777</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Bratislava</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌊 Segnerovo koleso</span>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Ján Andrej Segner sa narodil <strong>9. októbra 1704</strong> v Bratislave. Bol prvým
        profesorom matematiky na Univerzite v Göttingene a spolupracoval s Leonhardom Eulerom.
        Vynašiel reaktívnu vodnú turbínu — Segnerovo koleso — predchodcu moderných vodných turbín,
        a ako prvý zaviedol pojem povrchové napätie kvapalín. Po ňom je pomenovaný kráter na Mesiaci.
        Zomrel <strong>5. októbra 1777</strong> v Halle v Prusku.
      </p>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Hlavné prínosy vede</h2>
      <div class="space-y-3">
        <div v-for="item in contributions" :key="item.title" class="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl shrink-0">{{ item.icon }}</span>
          <div>
            <p class="font-semibold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-500 mt-0.5">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Zaujímavosti</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in facts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a href="https://sk.wikipedia.org/wiki/Ján_Andrej_Segner" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">
        Ján Andrej Segner na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🌊',
    title: 'Segnerovo koleso — reaktívna vodná turbína (1750)',
    description: 'Zostrojil prvú reaktívnu vodnú turbínu, kde vytekajúca voda otáča kolesom reakčnou silou — priamy predchodca moderných vodných turbín a raketového pohonu. Euler na základe tohto vynálezu sformuloval matematickú teóriu turbín.',
  },
  {
    icon: '💧',
    title: 'Povrchové napätie kvapalín (1751)',
    description: 'Ako prvý zaviedol a definoval pojem povrchové napätie — fyzikálnu vlastnosť, vďaka ktorej sa napríklad voda správa ako by mala „kožu" na povrchu.',
  },
  {
    icon: '📐',
    title: 'Matematika a dynamika',
    description: 'Prispel k analytickej geometrii a dynamike telies. Spolupracoval s Leonhardom Eulerom, jedným z najväčších matematikov všetkých čias.',
  },
]

const facts = [
  'Segner bol prvým profesorom matematiky na Univerzite v Göttingene (od roku 1735), ktorá sa pod jeho vedením stala jedným z popredných vedeckých centier Európy. Neskôr pôsobil na Univerzite v Halle.',
  'Leonhard Euler — jeden z najvýznamnejších matematikov histórie — sa priamo inšpiroval Segnerovým kolesom pri formulovaní matematickej teórie turbín. Bez Segnerovho praktického vynálezu by Eulerova teória nevznikla tak skoro.',
  'Po Segnerovi je pomenovaný kráter na Mesiaci. Narodil sa v Bratislave — meste, ktoré bolo v tom čase hlavným mestom Uhorska.',
]
</script>
