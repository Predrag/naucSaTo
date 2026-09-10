<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Jozef Murgaš</span>
    </nav>

    <div class="bg-green-700 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📻</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Jozef Murgaš</h1>
        <p class="text-green-100 text-lg mb-4">Vynálezca, kňaz, maliar a botanik</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1864 – 1929</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Tajov, Slovensko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📡 Bezdrôtová telegrafia</span>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Jozef Murgaš sa narodil <strong>17. februára 1864</strong> v Tajove pri Banskej Bystrici.
        Rímskokatolícky kňaz, maliar a botanik bol zároveň priekopníkom bezdrôtovej komunikácie.
        V roku 1904 si patentoval kľúčové vylepšenia bezdrôtovej telegrafie a v roku 1905
        údajne preniesol prvé hovorené slovo pomocou rádiových vĺn. Finančné problémy ho
        donútili predať patenty Marconimu. Zomrel <strong>26. marca 1929</strong>
        vo Wilkes-Barre v Pensylvánii, USA.
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
          <span class="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a
        href="https://sk.wikipedia.org/wiki/Jozef_Murgaš" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline">
        Jozef Murgaš na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '📡',
    title: 'Tónový systém bezdrôtovej telegrafie (1904)',
    description: 'Patentoval systém bezdrôtovej telegrafie využívajúci hudobné tóny namiesto jednoduchých kliknutí — umožňoval rýchlejší a spoľahlivejší prenos správ. Získal dva patenty v USA (č. 750 429 a č. 750 430).',
  },
  {
    icon: '🗣️',
    title: 'Prvý prenos hovoreného slova rádiovými vlnami (1905)',
    description: 'Dňa 27. apríla 1905 údajne preniesol prvé hovorené slovo pomocou elektromagnetických vĺn — pred Fessendenom, ktorý je bežne za toto pripisovaný. Historické záznamy sú predmetom diskusií.',
  },
  {
    icon: '🎨',
    title: 'Maliarstvo a botanika',
    description: 'Bol uznávaným maliarom krajiniek a portétov. Venoval sa aj botanike — objavil niekoľko nových druhov rastlín v okolí Pensylvánie, kde pôsobil ako farár.',
  },
]

const facts = [
  'Murgaš bol skutočným renesančným človekom — súčasne kňazom, maliarom, botanikom a vynálezcom. Keď emigroval do USA, jeho obrazy sa predávali popri patentoch na rádiové zariadenia.',
  'Finančná tieseň ho donútila predať všetky svoje patenty Guglielmu Marconimu. Práve preto dnes slávu za rozvoj rádia nesie Marconi, nie Murgaš. Príbeh zabudnutého vynálezcu, ktorého objavenie prišlo neskoro.',
  'V jeho rodnom Tajove pri Banskej Bystrici stojí pamätník. V americkom Wilkes-Barre, kde pôsobil ako farár a vynálezca, je po ňom pomenovaná ulica a škola.',
]
</script>
