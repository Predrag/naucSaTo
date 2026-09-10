<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">Osobnosti fyziky</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Štefan Anián Jedlík</span>
    </nav>

    <div class="bg-amber-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Štefan Anián Jedlík</h1>
        <p class="text-amber-100 text-lg mb-4">Fyzik, vynálezca, benediktínsky kňaz</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1800 – 1895</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Zemné, Slovensko</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🔌 Prvý elektromotor</span>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed">
        Štefan Anián Jedlík sa narodil <strong>13. januára 1800</strong> v Zemnom na Slovensku.
        Benediktínsky kňaz a profesor fyziky zostrojil prvý fungujúci elektromotor — prototyp dynama —
        niekoľko rokov pred Wernerom Siemensom, ktorý je dnes bežne považovaný za jeho vynálezcu.
        Jedlík ho nikdy nepatentoval. Zomrel <strong>13. decembra 1895</strong> v Győri vo veku 95 rokov.
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
          <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">Odkaz na Wikipédiu</p>
      <a
        href="https://sk.wikipedia.org/wiki/Štefan_Anián_Jedlík" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:underline">
        Štefan Anián Jedlík na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const contributions = [
  {
    icon: '🔌',
    title: 'Prvý elektromotor — „bleskomagnetický samootáčač" (okolo 1827)',
    description: 'Zostrojil rotačný elektromagnetický prístroj — predchodca dynama a elektromotora — skôr ako Siemens a Wheatstone. Nazval ho „bleskomagnetický samootáčač". Nikdy ho nepatentoval.',
  },
  {
    icon: '💡',
    title: 'Výskum elektromagnetizmu',
    description: 'Dlhodobo skúmal javy elektromagnetickej indukcie a vlastnosti elektrických výbojov. Prednášal fyziku na univerzite v Pešti a Bratislave viac ako 40 rokov.',
  },
  {
    icon: '🔬',
    title: 'Optická difrakčná mriežka',
    description: 'Skonštruoval jemnú optickú difrakčnú mriežku, ktorú využíval pri výskume svetla — nástroj dôležitý pre spektroskopiu.',
  },
  {
    icon: '⚡',
    title: 'Elektrochemické pokusy',
    description: 'Experimentoval s Voltovým článkom a javmi súvisiacimi s elektrolýzou — oblasti, ktoré boli v jeho dobe na hranici fyziky a chémie.',
  },
]

const facts = [
  'Jedlík bol benediktínsky mních, ktorý celý život spojil s vierou a vedou — typický príklad vedca-kňaza 19. storočia. Žil sa dočkal 95 rokov, čo bolo v tej dobe výnimočné.',
  'Zostrojil elektromotor skôr ako Siemens, ale nikdy ho nepatentoval. Skromne predpokladal, že nie je prvý — mýlil sa. Svet si tak dlho myslel, že elektromotor vynašiel niekto iný.',
  'Okrem fyziky sa venoval aj astronomickým pozorovaniams a bol aktívnym členom viacerých vedeckých spoločností v celej Habsburskej monarchii.',
]
</script>
