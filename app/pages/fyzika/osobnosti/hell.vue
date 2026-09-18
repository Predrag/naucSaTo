<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ {{ pc.navFyzika }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.navOsobnosti }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Maximilián Hell</span>
    </nav>

    <div class="bg-violet-700 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🔭</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Maximilián Hell</h1>
        <p class="text-violet-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1720 – 1792</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Banská Štiavnica</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌍 {{ pc.badgeVenus }}</span>
        </div>
      </div>
    </div>

    <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.intro"></p>
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
          <span class="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        :href="pc.wikiUrl" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline">
        {{ pc.wikiLinkText }}
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    navFyzika: 'Fyzika',
    navOsobnosti: 'Osobnosti fyziky',
    subtitle: 'Astronóm, jezuitský kňaz',
    badgeVenus: 'Prechod Venuše (1769)',
    intro: 'Maximilián Hell sa narodil <strong>15. mája 1720</strong> v Banskej Štiavnici. Jezuitský kňaz a astronóm pôsobil ako riaditeľ Cisárskej hvezdárne vo Viedni. Viedol vedeckú expedíciu na severné Nórsko, kde pozoroval prechod planéty Venuše cez slnečný disk — meranie, ktoré umožnilo vypočítať vzdialenosť Zeme od Slnka. Zomrel <strong>14. apríla 1792</strong> vo Viedni.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    wikiLabel: 'Odkaz na Wikipédiu',
    wikiUrl: 'https://sk.wikipedia.org/wiki/Maximilián_Hell',
    wikiLinkText: 'Maximilián Hell na sk.wikipedia.org →',
    contributions: [
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
    ],
    facts: [
      'Po návrate z Nórska bol Hell falošne obvinený z falšovania astronomických údajov. Táto krivda ho trvalo poznačila — plne rehabilitovaný bol až o storočie neskôr, keď iný astronóm porovnal jeho záznamy a potvrdil ich presnosť.',
      'Hellova expedícia do Vardø bola jednou z najsevernejších vedeckých výprav Osvietenstva. Na cestu do polárneho kruhu sa vydal vo veku takmer 50 rokov, v čase, keď cesta sama o sebe bola dobrodružstvom.',
      'Po ňom je pomenovaný kráter na Mesiaci. Narodil sa v Banskej Štiavnici — meste slávnom svojimi baňami a dnes zapísanom na zozname UNESCO.',
    ],
  },
  ru: {
    navFyzika: 'Физика',
    navOsobnosti: 'Личности физики',
    subtitle: 'Астроном, иезуитский священник',
    badgeVenus: 'Прохождение Венеры (1769)',
    intro: 'Максимилиан Хелль родился <strong>15 мая 1720 года</strong> в Банской Штявнице. Иезуитский священник и астроном, он был директором Императорской обсерватории в Вене. Он возглавил научную экспедицию на север Норвегии, где наблюдал прохождение планеты Венеры через солнечный диск — измерение, которое позволило вычислить расстояние от Земли до Солнца. Умер <strong>14 апреля 1792 года</strong> в Вене.',
    contributionsTitle: 'Главные вклады в науку',
    factsTitle: 'Интересные факты',
    wikiLabel: 'Ссылка на Википедию',
    wikiUrl: 'https://ru.wikipedia.org/wiki/Хелль,_Максимилиан',
    wikiLinkText: 'Максимилиан Хелль на ru.wikipedia.org →',
    contributions: [
      {
        icon: '🌍',
        title: 'Наблюдение прохождения Венеры (1769)',
        description: 'Руководил экспедицией на самый северный мыс Норвегии (Вардё), где наблюдал прохождение Венеры через солнечный диск. Эти измерения позволили астрономическому сообществу вычислить расстояние от Земли до Солнца — так называемый солнечный параллакс.',
      },
      {
        icon: '🏛️',
        title: 'Директор Венской императорской обсерватории',
        description: 'С 1756 года руководил Императорской и Королевской обсерваторией в Вене. Издавал ежегодные астрономические эфемериды — таблицы положений небесных тел — которыми пользовались мореплаватели и учёные по всей Европе.',
      },
      {
        icon: '🧲',
        title: 'Исследование магнетизма',
        description: 'Исследовал целебные свойства магнитов — тему, популярную в эпоху Просвещения — и отделил подлинные магнитные явления от суеверий, внося вклад в научную дискуссию о магнетизме.',
      },
    ],
    facts: [
      'После возвращения из Норвегии Хелль был ложно обвинён в фальсификации астрономических данных. Эта несправедливость надолго омрачила его репутацию — полностью реабилитирован он был лишь столетие спустя, когда другой астроном сравнил его записи и подтвердил их точность.',
      'Экспедиция Хелля в Вардё была одной из самых северных научных экспедиций эпохи Просвещения. Он отправился в путешествие в Полярный круг в возрасте почти 50 лет, в то время, когда само путешествие было настоящим приключением.',
      'В его честь назван кратер на Луне. Он родился в Банской Штявнице — городе, известном своими шахтами и сегодня включённом в список ЮНЕСКО.',
    ],
  },
  uk: {
    navFyzika: 'Фізика',
    navOsobnosti: 'Особистості фізики',
    subtitle: 'Астроном, єзуїтський священник',
    badgeVenus: 'Проходження Венери (1769)',
    intro: 'Максиміліан Гелль народився <strong>15 травня 1720 року</strong> в Банській Штявниці. Єзуїтський священник і астроном, він був директором Імператорської обсерваторії у Відні. Він очолив наукову експедицію на північ Норвегії, де спостерігав проходження планети Венери через сонячний диск — вимірювання, яке дозволило обчислити відстань від Землі до Сонця. Помер <strong>14 квітня 1792 року</strong> у Відні.',
    contributionsTitle: 'Головні внески в науку',
    factsTitle: 'Цікаві факти',
    wikiLabel: 'Посилання на Вікіпедію',
    wikiUrl: 'https://uk.wikipedia.org/wiki/Максиміліан_Гелль',
    wikiLinkText: 'Максиміліан Гелль на uk.wikipedia.org →',
    contributions: [
      {
        icon: '🌍',
        title: 'Спостереження проходження Венери (1769)',
        description: 'Очолив експедицію на найпівнічніший мис Норвегії (Вардё), де спостерігав проходження Венери через сонячний диск. Ці вимірювання дозволили астрономічній спільноті обчислити відстань від Землі до Сонця — так звану сонячну паралаксу.',
      },
      {
        icon: '🏛️',
        title: 'Директор Віденської цісарської обсерваторії',
        description: 'З 1756 року керував Цісарською та Королівською обсерваторією у Відні. Видавав щорічні астрономічні ефемериди — таблиці положень небесних тіл — якими користувалися мореплавці та вчені по всій Європі.',
      },
      {
        icon: '🧲',
        title: 'Дослідження магнетизму',
        description: 'Досліджував цілющі властивості магнітів — тему, популярну в епоху Просвітництва — і відокремив справжні магнітні явища від забобонів, роблячи внесок у наукову дискусію про магнетизм.',
      },
    ],
    facts: [
      'Після повернення з Норвегії Гелль був хибно звинувачений у фальсифікації астрономічних даних. Ця несправедливість надовго зіпсувала його репутацію — повністю реабілітований він був лише через століття, коли інший астроном порівняв його записи і підтвердив їхню точність.',
      'Експедиція Гелля у Вардё була однією з найпівнічніших наукових експедицій епохи Просвітництва. Він вирушив у подорож до Полярного кола у віці майже 50 років, в той час, коли сама дорога була справжньою пригодою.',
      'На його честь названий кратер на Місяці. Він народився в Банській Штявниці — місті, відомому своїми шахтами і сьогодні внесеному до списку ЮНЕСКО.',
    ],
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
