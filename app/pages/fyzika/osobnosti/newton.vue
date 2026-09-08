<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Vedci</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Isaac Newton</span>
    </nav>

    <div class="bg-emerald-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🍎</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Isaac Newton</h1>
        <p class="text-emerald-100 text-lg mb-4">Anglický fyzik a matematik</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1643 – 1727</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇬🇧 Anglicko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 Jednotka: newton (N)</span>
        </div>
      </div>
    </div>

    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Sir Isaac Newton bol jeden z najvplyvnejších vedcov v dejinách ľudstva. Narodil sa
        <strong>4. januára 1643</strong> v Woolsthorpe v Anglicku. Sformuloval tri základné zákony pohybu,
        zákon všeobecnej gravitácie a spoločne s Leibnizom objavil diferenciálny a integrálny počet.
        Zomrel <strong>20. marca 1727</strong> v Londýne.
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
          <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Jednotka SI</p>
        <p class="font-bold text-gray-900">newton (N) — jednotka sily</p>
        <p class="text-sm text-gray-500">1 N = 1 kg·m/s² — sila, ktorá udeľuje 1 kg zrýchlenie 1 m/s²</p>
      </div>
      <span class="text-4xl font-bold font-mono text-emerald-600 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center">N</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🔵',
    title: 'Tri zákony pohybu',
    description: 'Základ klasickej mechaniky — zákon zotrvačnosti, zákon sily (F = ma) a zákon akcie a reakcie.',
  },
  {
    icon: '🌍',
    title: 'Zákon všeobecnej gravitácie',
    description: 'Každé dve telesá sa navzájom priťahujú silou úmernou súčinu ich hmotností a nepriamo úmernou štvorcu ich vzdialenosti.',
  },
  {
    icon: '∫',
    title: 'Diferenciálny a integrálny počet',
    description: 'Nezávisle od Leibniza vyvinul matematický aparát, bez ktorého by moderná fyzika nemohla existovať.',
  },
  {
    icon: '🔭',
    title: 'Optika a prvý zrkadlový ďalekohľad',
    description: 'Dokázal, že biele svetlo sa skladá zo všetkých farieb spektra. V roku 1668 skonštruoval prvý praktický zrkadlový ďalekohľad.',
  },
]

const facts = [
  'Jeho „zázračný rok" (1665–1666) — keď sa izoloval kvôli moru — priniesol jeho najdôležitejšie objavy: gravitáciu, diferenciálny počet aj optiku, všetko pred dovŕšením 26 rokov.',
  'Newton sa tajne venoval alchýmii a snažil sa nájsť „kameň mudrcov". Po jeho smrti bolo v jeho tele nájdené veľké množstvo ortuti — pravdepodobne z alchymistických pokusov.',
  'Okrem vedy pôsobil ako člen parlamentu, riaditeľ Kráľovskej mincovne a predseda Kráľovskej spoločnosti — výnimočná kombinácia vedeckých aj verejných rolí.',
]
</script>
