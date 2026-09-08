<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Vedci</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">James Watt</span>
    </nav>

    <div class="bg-blue-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚙️</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">James Watt</h1>
        <p class="text-blue-100 text-lg mb-4">Škótsky vynálezca a strojný inžinier</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1736 – 1819</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Škótsko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: watt (W)</span>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        James Watt sa narodil <strong>19. januára 1736</strong> v Greenocku v Škótsku.
        Ako strojný inžinier dramaticky zdokonalil existujúci parný stroj — jeho vynálezy sa stali
        hnacou silou priemyselnej revolúcie a navždy zmenili civilizáciu. Zomrel
        <strong>25. augusta 1819</strong> v Birminghame.
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

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">watt (W) — jednotka výkonu</p>
        <p class="text-sm text-gray-500">1 W = 1 J/s — energia prenesená alebo vykonaná práca za sekundu</p>
      </div>
      <span class="text-4xl font-bold font-mono text-blue-600 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">W</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🏭',
    title: 'Samostatný kondenzátor parného stroja',
    description: 'V roku 1765 vynašiel separátny kondenzátor, ktorý drasticky zvýšil účinnosť parného stroja a znížil spotrebu paliva.',
  },
  {
    icon: '⚡',
    title: 'Dvojčinný parný stroj',
    description: 'Skonštruoval stroj, kde para tlačí piest striedavo z oboch strán — dvojnásobný výkon oproti predchádzajúcim strojom.',
  },
  {
    icon: '🐴',
    title: 'Konina ako jednotka výkonu',
    description: 'Zaviedol pojem „horsepower" (koňská sila) na porovnanie výkonu parného stroja s koňmi, aby obchodníci pochopili výhody stroja.',
  },
  {
    icon: '🌍',
    title: 'Priemyselná revolúcia',
    description: 'Jeho zdokonalenia parného stroja boli kľúčovou technológiou, ktorá umožnila priemyselnú revolúciu v 18. a 19. storočí.',
  },
]

const facts = [
  'Watt nevynašiel parný stroj — zásadne zdokonalil existujúci Newcomenov stroj. Rozdiel je dôležitý: bolo to inžinierske génius aplikované na hotový vynález, nie objavenie niečoho nového.',
  'Naučil sa nemčinu a taliančinu výhradne preto, aby mohol čítať viac vedeckej literatúry v originálnych jazykoch.',
  'Heriot-Watt University v Edinburghu aj James Watt College v Greenocku nesú jeho meno — výnimočná pocta byť eponymom dvoch inštitúcií vyššieho vzdelávania.',
]
</script>
