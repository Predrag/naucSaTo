<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumb }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Blaise Pascal</span>
    </nav>

    <div class="bg-purple-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">💧</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Blaise Pascal</h1>
        <p class="text-purple-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1623 – 1662</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇫🇷 {{ pc.country }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 {{ pc.unitBadge }}</span>
        </div>
      </div>
    </div>

    <div class="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.intro" />
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.contributionsTitle }}</h2>
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
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.factsTitle }}</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in pc.facts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">{{ pc.siLabel }}</p>
        <p class="font-bold text-gray-900">{{ pc.siName }}</p>
        <p class="text-sm text-gray-500">{{ pc.siDesc }}</p>
      </div>
      <span class="text-3xl font-bold font-mono text-purple-600 bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center">Pa</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumb: 'Osobnosti fyziky',
    subtitle: 'Francúzsky fyzik, matematik a filosof',
    country: 'Francúzsko',
    unitBadge: 'Jednotka: pascal (Pa)',
    intro: 'Blaise Pascal sa narodil <strong>19. júna 1623</strong> v Clermont-Ferrand vo Francúzsku. Bol zázračným dieťaťom — vo veku 16 rokov napísal významný článok o kuželosečkách a vo veku 18 rokov skonštruoval jednu z prvých mechanických kalkulačiek. Objavil základný zákon hydrostatiky a spoluzakladal teóriu pravdepodobnosti. Zomrel predčasne vo veku len <strong>39 rokov</strong> dňa 19. augusta 1662 v Paríži.',
    contributionsTitle: 'Hlavné prínosy vede',
    contributions: [
      {
        icon: '💧',
        title: 'Pascalov zákon (hydrostatika)',
        description: 'Tlak pôsobiaci na uzavretú kvapalinu sa prenáša rovnomerne vo všetkých smeroch — základ hydrauliky a hydraulického lisu.',
      },
      {
        icon: '🌬️',
        title: 'Vzduch má hmotnosť — existencia vákua',
        description: 'Pomocou ortuťových barometrov experimentálne dokázal, že vzduch má váhu a že vákuum skutočne existuje.',
      },
      {
        icon: '🎲',
        title: 'Teória pravdepodobnosti',
        description: 'Spolu s Pierrom de Fermatom položil základy matematickej teórie pravdepodobnosti prostredníctvom korešpondencie o hazardných hrách.',
      },
      {
        icon: '🖩',
        title: 'Pascalina — mechanická kalkulačka',
        description: 'Vo veku 18 rokov skonštruoval jeden z prvých funkčných mechanických kalkulátorov na sčítanie a odčítanie.',
      },
    ],
    factsTitle: 'Zaujímavosti',
    facts: [
      'Pascal bol zázračné dieťa — jeho otec ho vzdelával výhradne doma. Vo veku 16 rokov napísal vážny vedecký článok o kuželosečkách, ktorý obdivoval sám Descartes.',
      'Programovací jazyk Pascal, ktorý v 60. rokoch 20. storočia vytvoril Niklaus Wirth, bol pomenovaný na jeho počesť ako uznanie Pascaliny za predchodcu moderného počítača.',
      'Pascal zomrel vo veku len 39 rokov. Napriek tomu krátkemu životu nesie jeho meno jednotka SI, Pascalov zákon, Pascalov trojuholník, filozofický argument (Pascalova stávka) aj programovací jazyk.',
    ],
    siLabel: 'Jednotka SI',
    siName: 'pascal (Pa) — jednotka tlaku',
    siDesc: '1 Pa = 1 N/m² — sila jedného newtona na meter štvorcový',
  },
  ru: {
    breadcrumb: 'Личности физики',
    subtitle: 'Французский физик, математик и философ',
    country: 'Франция',
    unitBadge: 'Единица: паскаль (Па)',
    intro: 'Блез Паскаль родился <strong>19 июня 1623 года</strong> в Клермон-Ферране во Франции. Он был вундеркиндом — в 16 лет написал значительную работу о конических сечениях, которой восхищался сам Декарт, а в 18 лет сконструировал один из первых механических калькуляторов. Он открыл основной закон гидростатики и стал одним из основателей теории вероятностей. Умер рано, в возрасте <strong>39 лет</strong>, 19 августа 1662 года в Париже.',
    contributionsTitle: 'Основные вклады в науку',
    contributions: [
      {
        icon: '💧',
        title: 'Закон Паскаля (гидростатика)',
        description: 'Давление, воздействующее на замкнутую жидкость, передаётся равномерно во всех направлениях — основа гидравлики и гидравлического пресса.',
      },
      {
        icon: '🌬️',
        title: 'Воздух имеет вес — существование вакуума',
        description: 'С помощью ртутных барометров экспериментально доказал, что воздух имеет вес и что вакуум действительно существует.',
      },
      {
        icon: '🎲',
        title: 'Теория вероятностей',
        description: 'Вместе с Пьером де Ферма заложил основы математической теории вероятностей посредством переписки об азартных играх.',
      },
      {
        icon: '🖩',
        title: 'Паскалина — механический калькулятор',
        description: 'В 18 лет сконструировал один из первых функционирующих механических калькуляторов для сложения и вычитания.',
      },
    ],
    factsTitle: 'Интересные факты',
    facts: [
      'Паскаль был вундеркиндом — его отец обучал его исключительно на дому. В 16 лет он написал серьёзную научную работу о конических сечениях, которой восхищался сам Декарт.',
      'Язык программирования Pascal, созданный Никлаусом Виртом в 1960-х годах, был назван в его честь в знак признания Паскалины предшественницей современного компьютера.',
      'Паскаль умер в возрасте всего 39 лет. Несмотря на столь короткую жизнь, его именем названы единица СИ, закон Паскаля, треугольник Паскаля, философский аргумент (Пари Паскаля) и язык программирования.',
    ],
    siLabel: 'Единица СИ',
    siName: 'паскаль (Па) — единица давления',
    siDesc: '1 Па = 1 Н/м² — сила одного ньютона на квадратный метр',
  },
  uk: {
    breadcrumb: 'Особистості фізики',
    subtitle: 'Французький фізик, математик і філософ',
    country: 'Франція',
    unitBadge: 'Одиниця: паскаль (Па)',
    intro: 'Блез Паскаль народився <strong>19 червня 1623 року</strong> в Клермон-Феррані у Франції. Він був вундеркіндом — у 16 років написав значну наукову роботу про конічні перерізи, якою захоплювався сам Декарт, а у 18 років сконструював один із перших механічних калькуляторів. Він відкрив основний закон гідростатики і став одним із засновників теорії ймовірностей. Помер передчасно у віці <strong>39 років</strong>, 19 серпня 1662 року в Парижі.',
    contributionsTitle: 'Основні внески у науку',
    contributions: [
      {
        icon: '💧',
        title: 'Закон Паскаля (гідростатика)',
        description: 'Тиск, що діє на замкнену рідину, передається рівномірно в усіх напрямках — основа гідравліки та гідравлічного преса.',
      },
      {
        icon: '🌬️',
        title: 'Повітря має масу — існування вакууму',
        description: 'За допомогою ртутних барометрів експериментально довів, що повітря має вагу і що вакуум дійсно існує.',
      },
      {
        icon: '🎲',
        title: 'Теорія ймовірностей',
        description: 'Разом із П\'єром де Ферма заклав основи математичної теорії ймовірностей через листування про азартні ігри.',
      },
      {
        icon: '🖩',
        title: 'Паскаліна — механічний калькулятор',
        description: 'У 18 років сконструював один із перших функціонуючих механічних калькуляторів для додавання та віднімання.',
      },
    ],
    factsTitle: 'Цікаві факти',
    facts: [
      'Паскаль був вундеркіндом — його батько навчав його виключно вдома. У 16 років він написав серйозну наукову роботу про конічні перерізи, якою захоплювався сам Декарт.',
      'Мова програмування Pascal, створена Ніклаусом Віртом у 1960-х роках, була названа на його честь як визнання Паскаліни попередницею сучасного комп\'ютера.',
      'Паскаль помер у віці лише 39 років. Попри таке коротке життя, його ім\'ям названі одиниця СІ, закон Паскаля, трикутник Паскаля, філософський аргумент (парі Паскаля) та мова програмування.',
    ],
    siLabel: 'Одиниця СІ',
    siName: 'паскаль (Па) — одиниця тиску',
    siDesc: '1 Па = 1 Н/м² — сила одного ньютона на квадратний метр',
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
