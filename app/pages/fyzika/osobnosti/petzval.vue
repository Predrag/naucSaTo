<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Jozef Maximilián Petzval</span>
    </nav>

    <div class="bg-indigo-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📷</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Jozef Maximilián Petzval</h1>
        <p class="text-indigo-100 text-lg mb-4">Fyzik, matematik a vynálezca</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1807 – 1891</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Spišská Belá</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Zakladateľ modernej optiky</span>
        </div>
      </div>
    </div>

    <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Jozef Maximilián Petzval sa narodil <strong>6. januára 1807</strong> v Spišskej Belej
        (vtedy Rakúske cisárstvo, dnes Slovensko). Považuje sa za zakladateľa modernej optiky
        a modernej fotografie. Ako profesor matematiky na Viedenskej univerzite skonštruoval
        fotografický objektív, ktorý skrátil expozičný čas z 30 minút na menej ako 30 sekúnd
        a umožnil masovú fotografiu. Zomrel <strong>17. septembra 1891</strong> vo Viedni vo veku 84 rokov.
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
          <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a
        href="https://sk.wikipedia.org/wiki/Jozef_Maximilián_Petzval"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline"
      >
        Jozef Maximilián Petzval na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '📷',
    title: 'Petzvalov fotografický objektív (1840)',
    description: 'Skonštruoval objektív s 16-násobne vyššou priepustnosťou svetla (f/3,6 oproti f/16). Expozičný čas sa skrátil z 30 minút na 15–30 sekúnd, čo umožnilo masovú portrétnu fotografiu. Objektív sa používal v kamerách až do 20. rokov 20. storočia.',
  },
  {
    icon: '🔭',
    title: 'Geometrická optika a teória aberácií',
    description: 'Zakladateľ modernej geometrickej optiky. Definoval Petzvalov povrch — zakrivenú rovinu ostrého obrazu v optických sústavách. Zdokonalil mikroskopy, navrhol dvojoký ďalekohľad a divadelné okuliare.',
  },
  {
    icon: '💡',
    title: 'Prenosný reflektor',
    description: 'Vytvoril prenosný svetlomet s priemerom 1,3 m a dosahom 2,7 km — predchodca moderných svetlometov.',
  },
  {
    icon: '∫',
    title: 'Matematika — Laplaceova transformácia',
    description: 'Samostatne prepracoval matematickú metódu, ktorá sa dnes nazýva Laplaceova transformácia. Pre spor so žiakom ju nakoniec pomenovali po Laplacovi namiesto po Petzvalovi.',
  },
  {
    icon: '🎵',
    title: 'Akustika a balistika',
    description: 'Skúmal kmitanie strún a teóriu hudobných nástrojov. Navrhol klavír s trojitou klávesnicou. Venoval sa aj balistike a analytickej mechanike.',
  },
]

const facts = [
  'Na prednášky na Viedenskej univerzite prichádzal na čiernom arabskom koni — jeho výstrednosť bola medzi študentmi legendárna. Bol tiež uznávaným šermiarom.',
  'V roku 1859 mu ukradli rukopisy s celým životným vedeckým dielom. Nikdy ich neobnovil a táto strata ho trvalo zasiahla.',
  'Posledné roky života prežil ako takmer pustovník na vrchu Kahlenberg pri Viedni. Podľa legendy pred smrťou povedal: „Porazil som svetlo, mám ho pevne v rukách."',
  'Po ňom je pomenovaný lunárny kráter, planetoida (3716 Petzval) aj Rakúska Petzvalova medaila za zásluhy o vedeckú fotografiu, udeľovaná od roku 1928. V jeho rodnej Spišskej Belej sa nachádza Múzeum fotografie Petzval.',
]
</script>
