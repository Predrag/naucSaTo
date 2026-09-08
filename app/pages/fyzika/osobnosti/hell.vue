<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Maximilián Hell</span>
    </nav>

    <div class="bg-violet-700 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🔭</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Maximilián Hell</h1>
        <p class="text-violet-100 text-lg mb-4">Astronóm, jezuitský kňaz</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1720 – 1792</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Banská Štiavnica</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌍 Prechod Venuše (1769)</span>
        </div>
      </div>
    </div>

    <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Maximilián Hell sa narodil <strong>15. mája 1720</strong> v Banskej Štiavnici.
        Jezuitský kňaz a astronóm pôsobil ako riaditeľ Cisárskej hvezdárne vo Viedni.
        Viedol vedeckú expedíciu na severné Nórsko, kde pozoroval prechod planéty Venuše
        cez slnečný disk — meranie, ktoré umožnilo vypočítať vzdialenosť Zeme od Slnka.
        Zomrel <strong>14. apríla 1792</strong> vo Viedni.
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
          <span class="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a
        href="https://sk.wikipedia.org/wiki/Maximilián_Hell" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline">
        Maximilián Hell na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🌍',
    title: 'Pozorovanie prechodu Venuše (1769)',
    description: 'Viedol expedíciu až na severný cíp Nórska (Vardø), kde pozoroval prechod Venuše cez slnečný disk. Tieto merania umožnili astronomickej komunite vypočítať vzdialenosť Zeme od Slnka — tzv. slnečnú paralaxy.',
  },
  {
    icon: '🏛️',
    title: 'Riaditeľ Viedenskej cisárskej hvezdárne',
    description: 'Od roku 1756 viedol Cisársku a kráľovskú hvezdárnu vo Viedni. Vydával každoročné astronomické efemeridy — tabuľky polohy nebies — ktoré využívali námorníci a vedci po celej Európe.',
  },
  {
    icon: '🧲',
    title: 'Výskum magnetizmu',
    description: 'Skúmal liečebné účinky magnetov — téma populárna v osvietenstve — a odlíšil skutočné magnetické javy od poverčivosti, čím prispel k vedeckej diskusii o magnetizme.',
  },
]

const facts = [
  'Po návrate z Nórska bol Hell falošne obvinený z falšovania astronomických údajov. Táto krivda ho trvalo poznačila — plne rehabilitovaný bol až o storočie neskôr, keď iný astronóm porovnal jeho záznamy a potvrdil ich presnosť.',
  'Hellova expedícia do Vardø bola jednou z najsevernejších vedeckých výprav Osvietenstva. Na cestu do polárneho kruhu sa vydal vo veku takmer 50 rokov, v čase, keď cesta sama o sebe bola dobrodružstvom.',
  'Po ňom je pomenovaný kráter na Mesiaci. Narodil sa v Banskej Štiavnici — meste slávnom svojimi baňami a dnes zapísanom na zozname UNESCO.',
]
</script>
