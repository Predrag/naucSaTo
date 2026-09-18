<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ {{ pc.navFyzika }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.navOsobnosti }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">James Prescott Joule</span>
    </nav>

    <div class="bg-teal-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🔋</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">James Prescott Joule</h1>
        <p class="text-teal-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1818 – 1889</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇬🇧 {{ pc.country }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 {{ pc.unitBadge }}</span>
        </div>
      </div>
    </div>

    <div class="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.bio" />
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.contributionsTitle }}</h2>
      <div class="space-y-3">
        <div v-for="item in activeContributions" :key="item.title" class="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4">
          <span class="text-2xl shrink-0">{{ item.icon }}</span>
          <div>
            <p class="font-semibold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-500 mt-0.5">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.factsTitle }}</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in activeFacts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">{{ pc.siLabel }}</p>
        <p class="font-bold text-gray-900">{{ pc.siName }}</p>
        <p class="text-sm text-gray-500">1 J = 1 N·m = 1 kg·m²/s²</p>
      </div>
      <span class="text-4xl font-bold font-mono text-teal-600 bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center">J</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    navFyzika: 'Fyzika',
    navOsobnosti: 'Osobnosti fyziky',
    subtitle: 'Anglický fyzik',
    country: 'Anglicko',
    unitBadge: 'Jednotka: joule (J)',
    bio: 'James Prescott Joule sa narodil <strong>24. decembra 1818</strong> v Salford v Anglicku. Bol z veľkej časti samouk — vedecké experimenty vykonával popri riadení rodinného pivovaru. Dokázal, že teplo a mechanická energia sú vzájomne prevoditeľné, čím položil základ prvého zákona termodynamiky. Zomrel <strong>11. októbra 1889</strong> v Sale.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    siLabel: 'Jednotka SI',
    siName: 'joule (J) — jednotka energie a práce',
  },
  ru: {
    navFyzika: 'Физика',
    navOsobnosti: 'Личности физики',
    subtitle: 'Английский физик',
    country: 'Англия',
    unitBadge: 'Единица: джоуль (Дж)',
    bio: 'Джеймс Прескотт Джоуль родился <strong>24 декабря 1818 года</strong> в Солфорде, Англия. Он был в основном самоучкой — научные эксперименты проводил параллельно с управлением семейной пивоварней. Доказал, что теплота и механическая энергия взаимопреобразуемы, тем самым заложив основу первого закона термодинамики. Умер <strong>11 октября 1889 года</strong> в Сейле.',
    contributionsTitle: 'Основные вклады в науку',
    factsTitle: 'Интересные факты',
    siLabel: 'Единица СИ',
    siName: 'джоуль (Дж) — единица энергии и работы',
  },
  uk: {
    navFyzika: 'Фізика',
    navOsobnosti: 'Особистості фізики',
    subtitle: 'Англійський фізик',
    country: 'Англія',
    unitBadge: 'Одиниця: джоуль (Дж)',
    bio: 'Джеймс Прескотт Джоуль народився <strong>24 грудня 1818 року</strong> у Солфорді, Англія. Він був здебільшого самоуком — наукові експерименти проводив паралельно з управлінням сімейним пивоварним заводом. Довів, що теплота і механічна енергія взаємоперетворювані, тим самим заклавши основу першого закону термодинаміки. Помер <strong>11 жовтня 1889 року</strong> у Сейлі.',
    contributionsTitle: 'Основні внески у науку',
    factsTitle: 'Цікаві факти',
    siLabel: 'Одиниця СІ',
    siName: 'джоуль (Дж) — одиниця енергії та роботи',
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)

const contributions = [
  {
    icon: '🌡️',
    title: 'Mechanický ekvivalent tepla',
    description: 'Experimentálne dokázal, že teplo a mechanická energia sú prevoditeľné pri pevnom pomere — základ zachovania energie.',
  },
  {
    icon: '⚡',
    title: 'Joulov zákon elektrického ohrevu',
    description: 'Teplo vzniknuté vo vodiči je úmerné odporu a druhej mocnine prúdu: Q = I²·R·t.',
  },
  {
    icon: '🌡️',
    title: 'Absolútna Kelvinova stupnica',
    description: 'Spolupracoval s lordom Kelvinom na zavedení absolútnej teplotnej stupnice.',
  },
  {
    icon: '❌',
    title: 'Vyvrátenie teórie kalorika',
    description: 'Dokázal, že teplo nie je látka (kalorická tekutina), ale forma pohybu — čím odmietol vtedy panujúcu teóriu.',
  },
]

const contributionsRu = [
  {
    icon: '🌡️',
    title: 'Механический эквивалент теплоты',
    description: 'Экспериментально доказал, что теплота и механическая энергия взаимопреобразуемы при фиксированном соотношении — основа сохранения энергии.',
  },
  {
    icon: '⚡',
    title: 'Закон Джоуля об электрическом нагреве',
    description: 'Теплота, выделяемая в проводнике, пропорциональна сопротивлению и квадрату тока: Q = I²·R·t.',
  },
  {
    icon: '🌡️',
    title: 'Абсолютная Кельвиновская шкала',
    description: 'Сотрудничал с лордом Кельвином при введении абсолютной шкалы температуры.',
  },
  {
    icon: '❌',
    title: 'Опровержение теории теплорода',
    description: 'Доказал, что теплота — это не вещество (калорическая жидкость), а форма движения, опровергнув тем самым господствовавшую тогда теорию.',
  },
]

const contributionsUk = [
  {
    icon: '🌡️',
    title: 'Механічний еквівалент теплоти',
    description: 'Експериментально довів, що теплота і механічна енергія взаємоперетворювані при фіксованому співвідношенні — основа збереження енергії.',
  },
  {
    icon: '⚡',
    title: 'Закон Джоуля про електричне нагрівання',
    description: 'Теплота, що виділяється у провіднику, пропорційна опору та квадрату струму: Q = I²·R·t.',
  },
  {
    icon: '🌡️',
    title: 'Абсолютна Кельвінова шкала',
    description: 'Співпрацював з лордом Кельвіном при запровадженні абсолютної шкали температури.',
  },
  {
    icon: '❌',
    title: 'Спростування теорії теплороду',
    description: 'Довів, що теплота — це не речовина (калорична рідина), а форма руху, спростувавши тодішню панівну теорію.',
  },
]

const activeContributions = computed(() => {
  if (locale.value === 'ru') return contributionsRu
  if (locale.value === 'uk') return contributionsUk
  return contributions
})

const facts = [
  'Joule bol z veľkej časti samouk a experimenty vykonával popri riadení rodinného pivovaru — nikdy nepôsobil ako profesionálny vedec na univerzite.',
  'Na jeho náhrobku je vyryté číslo 772,55 — presná hodnota, ktorú experimentálne určil pre množstvo práce (v ft·lb) potrebnej na ohrev 1 libry vody o 1 °F. Roky sa snažil toto meranie zdokonaliť.',
  'Keď prvýkrát prezentoval svoje zistenia vedeckej obci, väčšina vedcov bola hlboko skeptická. Napriek odmietaniu vytrval a nakoniec sformuloval jeden zo základných zákonov fyziky.',
]

const factsRu = [
  'Джоуль был в основном самоучкой и проводил эксперименты, управляя семейной пивоварней — он никогда не работал профессиональным учёным в университете.',
  'На его надгробии выгравировано число 772,55 — точное значение, которое он экспериментально определил для количества работы (в фут-фунтах), необходимой для нагрева 1 фунта воды на 1 °F. Годами он стремился усовершенствовать это измерение.',
  'Когда он впервые представил свои открытия научному сообществу, большинство учёных отнеслись к ним с глубоким скептицизмом. Несмотря на отказы, он настоял на своём и в конечном итоге сформулировал один из основных законов физики.',
]

const factsUk = [
  'Джоуль був здебільшого самоуком і проводив експерименти, керуючи сімейним пивоварним заводом — він ніколи не працював професійним вченим в університеті.',
  'На його надгробку викарбувано число 772,55 — точне значення, яке він експериментально визначив для кількості роботи (у фут-фунтах), необхідної для нагрівання 1 фунта води на 1 °F. Роками він прагнув удосконалити це вимірювання.',
  'Коли він вперше представив свої відкриття науковій спільноті, більшість вчених поставилися до них з глибоким скептицизмом. Незважаючи на відмови, він наполягав на своєму і зрештою сформулював один з основних законів фізики.',
]

const activeFacts = computed(() => {
  if (locale.value === 'ru') return factsRu
  if (locale.value === 'uk') return factsUk
  return facts
})
</script>
