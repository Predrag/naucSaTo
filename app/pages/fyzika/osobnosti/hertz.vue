<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Vedci</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Heinrich Hertz</span>
    </nav>

    <div class="bg-orange-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Heinrich Hertz</h1>
        <p class="text-orange-100 text-lg mb-4">Nemecký fyzik</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1857 – 1894</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇩🇪 Nemecko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: hertz (Hz)</span>
        </div>
      </div>
    </div>

    <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Heinrich Rudolf Hertz sa narodil <strong>22. februára 1857</strong> v Hamburgu v Nemecku.
        Bol prvým človekom, ktorý experimentálne vyprodukoval a detegoval elektromagnetické vlny,
        čím potvrdil Maxwellovu teóriu. Objavil tiež fotoelektrický efekt, ktorý neskôr vysvetlil Einstein.
        Zomrel predčasne vo veku len <strong>36 rokov</strong> dňa 1. januára 1894 v Bonne.
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
          <span class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">hertz (Hz) — jednotka frekvencie</p>
        <p class="text-sm text-gray-500">1 Hz = 1/s — počet kmitov alebo opakovaní za sekundu</p>
      </div>
      <span class="text-3xl font-bold font-mono text-orange-600 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center">Hz</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '📡',
    title: 'Prvé experimentálne elektromagnetické vlny',
    description: 'V rokoch 1886–1888 ako prvý vyprodukoval a detegoval rádiové vlny, čím potvrdil Maxwellove rovnice elektromagnetizmu.',
  },
  {
    icon: '💡',
    title: 'Fotoelektrický efekt',
    description: 'V roku 1887 objavil, že svetlo dokáže vyraziť elektróny z povrchu kovu. Tento jav neskôr vysvetlil Einstein a získal zaň Nobelovu cenu.',
  },
  {
    icon: '📶',
    title: 'Meranie rýchlosti elektromagnetických vĺn',
    description: 'Experimentálne overil, že elektromagnetické vlny sa šíria rýchlosťou svetla — dôkaz, že svetlo je elektromagnetické vlnenie.',
  },
  {
    icon: '🔭',
    title: 'Parabolická anténa',
    description: 'Skonštruoval prvú parabolickú anténu na vysielanie a príjem elektromagnetických vĺn — predchodca moderných antén.',
  },
]

const facts = [
  'Po predvedení rádiových vĺn Hertz vyhlásil, že nevidí pre tento objav žiadne praktické využitie. O menej ako desaťročie neskôr Guglielmo Marconi použil tieto vlny na vynájdenie rádiovej komunikácie.',
  'Hertz zomrel vo veku len 36 rokov na granulomatózu s polyangiitídou (autoimunitné ochorenie). Jeho synovec Gustav Hertz neskôr získal Nobelovu cenu za fyziku (1925).',
  'Každý deň používame jeho meno ako jednotku — frekvencia Wi-Fi (2,4 GHz / 5 GHz), taktovacia frekvencia procesora (napr. 3,5 GHz) aj rádiové stanice sú vyjadrené v hertzoch.',
]
</script>
