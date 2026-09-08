<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Aurel Bohuslav Stodola</span>
    </nav>

    <div class="bg-slate-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚙️</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Aurel Bohuslav Stodola</h1>
        <p class="text-slate-200 text-lg mb-4">Fyzik, inžinier a vynálezca</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1859 – 1942</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Liptovský Mikuláš</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌡️ Zakladateľ teórie turbín</span>
        </div>
      </div>
    </div>

    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Aurel Bohuslav Stodola sa narodil <strong>10. mája 1859</strong> v Liptovskom Mikuláši.
        Profesor na ETH Zürich položil teoretické a inžinierske základy moderných parných a plynových
        turbín. Jeho učebnica z roku 1903 bola desaťročia celosvetovým štandardom pre inžinierov
        turbín a prvých prúdových motorov. Bol priateľom Alberta Einsteina.
        Zomrel <strong>25. decembra 1942</strong> v Zürichu vo veku 83 rokov.
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
          <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a href="https://sk.wikipedia.org/wiki/Aurel_Stodola" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:underline">
        Aurel Bohuslav Stodola na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🌡️',
    title: 'Teória parných a plynových turbín',
    description: 'Sformuloval matematické a fyzikálne základy pre navrhovanie parných a plynových turbín. Jeho učebnica z roku 1903 bola po desaťročia celosvetovým štandardom — inžinieri prvých prúdových motorov z nej čerpali priamo.',
  },
  {
    icon: '⚡',
    title: 'Prvý plynový turbínový generátor (1939)',
    description: 'Spolupracoval so spoločnosťou Brown Boveri na skonštruovaní jedného z prvých fungujúcich plynových turbínových generátorov — krok, ktorý predznamenal modernú energetiku a letecké motory.',
  },
  {
    icon: '🦾',
    title: 'Mechanická protéza ruky (1915–1916)',
    description: 'Spolupracoval s chirurgom Ferdinandom Sauerbruchom na vývoji jednej z prvých mechanicky poháňaných protéz ruky — prelomový príklad interdisciplinárnej spolupráce fyziky a medicíny.',
  },
  {
    icon: '🔥',
    title: 'Termodynamika a prenos tepla',
    description: 'Výrazne prispel k pochopeniu termodynamiky tepelných strojov, vibráciám turbínových lopatiek a mechanike tekutín pri vysokých teplotách.',
  },
]

const facts = [
  'Stodola bol osobným priateľom Alberta Einsteina — obaja pôsobili vo Švajčiarsku a udržiavali dlhoročný intelektuálny vzťah.',
  'Jeho tvár sa nachádza na slovenskom pamätnom euro mincovom (10 €, 2009). Po ňom je tiež pomenovaná planetoida č. 3981 Stodola a cena Aurel Stodola Award, ktorú udeľujú Slovenské elektrárne.',
  'Napriek pôsobeniu vo Švajčiarsku celý život udržiaval väzby na Slovensko a považoval sa za Slováka — v čase, keď to nebolo politicky jednoduché.',
]
</script>
