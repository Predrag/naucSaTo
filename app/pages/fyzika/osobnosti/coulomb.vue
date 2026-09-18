<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" :aria-label="pc.breadcrumbNavLabel" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Charles-Augustin de Coulomb</span>
    </nav>

    <div class="bg-yellow-500 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Charles-Augustin de Coulomb</h1>
        <p class="text-yellow-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1736 – 1806</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.countryTag }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.unitTag }}</span>
        </div>
      </div>
    </div>

    <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.bio"></p>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.sectionContributions }}</h2>
      <div class="space-y-3">
        <div v-for="item in pc.contributions" :key="item.title" class="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl shrink-0">{{ item.icon }}</span>
          <div>
            <p class="font-semibold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-500 mt-0.5">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.sectionFacts }}</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in pc.facts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">{{ pc.siLabel }}</p>
        <p class="font-bold text-gray-900">{{ pc.siTitle }}</p>
        <p class="text-sm text-gray-500">{{ pc.siDesc }}</p>
      </div>
      <span class="text-4xl font-bold font-mono text-yellow-600 bg-yellow-50 w-16 h-16 rounded-xl flex items-center justify-center">C</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbNavLabel: 'Navigačná cesta',
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Francúzsky fyzik a vojenský inžinier',
    countryTag: '🇫🇷 Francúzsko',
    unitTag: '📐 Jednotka: coulomb (C)',
    bio: 'Charles-Augustin de Coulomb sa narodil <strong>14. júna 1736</strong> v Angoulême vo Francúzsku. Pred tým, ako sa stal fyzikom, strávil 8 rokov ako vojenský inžinier na Martiniku. Sformuloval Coulombov zákon elektrostatickej sily a vynašiel torznú váhu — precízny prístroj na meranie malých síl. Zomrel <strong>23. augusta 1806</strong> v Paríži.',
    sectionContributions: 'Hlavné prínosy vede',
    sectionFacts: 'Zaujímavosti',
    siLabel: 'Jednotka SI',
    siTitle: 'coulomb (C) — jednotka elektrického náboja',
    siDesc: '1 C = 1 A·s — náboj prenesený prúdom 1 ampér za 1 sekundu',
    contributions: [
      {
        icon: '⚡',
        title: 'Coulombov zákon elektrostatiky',
        description: 'Elektrostatická sila medzi dvoma nábojmi je úmerná súčinu nábojov a nepriamo úmerná štvorcu ich vzdialenosti: F = k·q₁·q₂/r².',
      },
      {
        icon: '⚖️',
        title: 'Torzná váha',
        description: 'Vynašiel precízny prístroj na meranie veľmi malých síl pomocou krútiaceho momentu tenkého vlákna — umožnil mu odvodiť svoj zákon experimentálne.',
      },
      {
        icon: '🧲',
        title: 'Zákon magnetických pólov',
        description: 'Stanovil, že magnetické póly sa priťahujú a odpudzujú podľa rovnakého inverzného zákona štvorcu ako elektrické náboje.',
      },
      {
        icon: '🔩',
        title: 'Trenie a mechanika pôdy',
        description: 'Vykonal základný výskum trenia a mechaniky zemín, ktorý sa dodnes používa v stavebnom inžinierstve.',
      },
    ],
    facts: [
      'Predtým, ako sa Coulomb venoval fyzike, strávil 8 rokov ako vojenský inžinier prestavbou pevností na Martiniku (francúzske Karibik). Tato práca trvalo poškodila jeho zdravie.',
      'Coulombov zákon je matematicky identický s Newtonovým zákonom gravitácie — oba sú zákonmi inverzného štvorca. Je to krásny príklad toho, ako rovnaká matematická štruktúra sa objavuje v úplne rôznych oblastiach fyziky.',
      'Jeho meno je vyryté na Eiffelovej veži v Paríži medzi 72 francúzskymi vedcami a inžiniermi. Okrem jednotky SI nesie jeho meno aj Coulombova konštanta, Coulombov zákon a ďalšie fyzikálne pojmy.',
    ],
  },
  ru: {
    breadcrumbNavLabel: 'Навигационный путь',
    breadcrumbPersonalities: 'Личности физики',
    subtitle: 'Французский физик и военный инженер',
    countryTag: '🇫🇷 Франция',
    unitTag: '📐 Единица: кулон (C)',
    bio: 'Шарль-Огюстен де Кулон родился <strong>14 июня 1736 года</strong> в Ангулеме, Франция. Прежде чем стать физиком, он провёл 8 лет военным инженером на Мартинике. Он сформулировал закон Кулона об электростатической силе и изобрёл крутильные весы — точный прибор для измерения малых сил. Умер <strong>23 августа 1806 года</strong> в Париже.',
    sectionContributions: 'Основные достижения в науке',
    sectionFacts: 'Интересные факты',
    siLabel: 'Единица СИ',
    siTitle: 'кулон (C) — единица электрического заряда',
    siDesc: '1 C = 1 А·с — заряд, перенесённый током 1 ампер за 1 секунду',
    contributions: [
      {
        icon: '⚡',
        title: 'Закон Кулона в электростатике',
        description: 'Электростатическая сила между двумя зарядами пропорциональна произведению зарядов и обратно пропорциональна квадрату расстояния между ними: F = k·q₁·q₂/r².',
      },
      {
        icon: '⚖️',
        title: 'Крутильные весы',
        description: 'Изобрёл точный прибор для измерения очень малых сил с помощью крутящего момента тонкой нити — это позволило ему экспериментально вывести свой закон.',
      },
      {
        icon: '🧲',
        title: 'Закон магнитных полюсов',
        description: 'Установил, что магнитные полюса притягиваются и отталкиваются по тому же закону обратных квадратов, что и электрические заряды.',
      },
      {
        icon: '🔩',
        title: 'Трение и механика грунта',
        description: 'Провёл основополагающие исследования трения и механики грунтов, которые по сей день применяются в строительной инженерии.',
      },
    ],
    facts: [
      'Прежде чем Кулон занялся физикой, он провёл 8 лет военным инженером, перестраивая крепости на Мартинике (французские Карибы). Эта работа надолго подорвала его здоровье.',
      'Закон Кулона математически идентичен закону всемирного тяготения Ньютона — оба являются законами обратных квадратов. Это прекрасный пример того, как одна и та же математическая структура появляется в совершенно разных областях физики.',
      'Его имя выгравировано на Эйфелевой башне в Париже среди 72 французских учёных и инженеров. Помимо единицы СИ, его именем названы константа Кулона, закон Кулона и другие физические понятия.',
    ],
  },
  uk: {
    breadcrumbNavLabel: 'Навігаційний шлях',
    breadcrumbPersonalities: 'Особистості фізики',
    subtitle: 'Французький фізик і військовий інженер',
    countryTag: '🇫🇷 Франція',
    unitTag: '📐 Одиниця: кулон (C)',
    bio: 'Шарль-Огюстен де Кулон народився <strong>14 червня 1736 року</strong> в Ангулемі, Франція. Перш ніж стати фізиком, він провів 8 років військовим інженером на Мартиніці. Він сформулював закон Кулона про електростатичну силу й винайшов крутильні ваги — точний прилад для вимірювання малих сил. Помер <strong>23 серпня 1806 року</strong> в Парижі.',
    sectionContributions: 'Основні досягнення у науці',
    sectionFacts: 'Цікаві факти',
    siLabel: 'Одиниця СІ',
    siTitle: 'кулон (C) — одиниця електричного заряду',
    siDesc: '1 C = 1 А·с — заряд, перенесений струмом 1 ампер за 1 секунду',
    contributions: [
      {
        icon: '⚡',
        title: 'Закон Кулона в електростатиці',
        description: 'Електростатична сила між двома зарядами пропорційна добутку зарядів і обернено пропорційна квадрату відстані між ними: F = k·q₁·q₂/r².',
      },
      {
        icon: '⚖️',
        title: 'Крутильні ваги',
        description: 'Винайшов точний прилад для вимірювання дуже малих сил за допомогою крутного моменту тонкої нитки — це дозволило йому експериментально вивести свій закон.',
      },
      {
        icon: '🧲',
        title: 'Закон магнітних полюсів',
        description: 'Встановив, що магнітні полюси притягуються і відштовхуються за тим самим законом обернених квадратів, що й електричні заряди.',
      },
      {
        icon: '🔩',
        title: 'Тертя та механіка ґрунту',
        description: 'Провів основоположні дослідження тертя та механіки ґрунтів, які й досі використовуються в будівельній інженерії.',
      },
    ],
    facts: [
      "Перш ніж Кулон зайнявся фізикою, він провів 8 років військовим інженером, перебудовуючи фортеці на Мартиніці (французькі Кариби). Ця робота надовго підірвала його здоров'я.",
      "Закон Кулона математично ідентичний закону всесвітнього тяжіння Ньютона — обидва є законами обернених квадратів. Це чудовий приклад того, як одна й та сама математична структура з'являється в абсолютно різних галузях фізики.",
      "Його ім'я викарбувано на Ейфелевій вежі в Парижі серед 72 французьких учених та інженерів. Окрім одиниці СІ, його іменем названі константа Кулона, закон Кулона та інші фізичні поняття.",
    ],
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
