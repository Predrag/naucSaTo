<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumb }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Jozef Maximilián Petzval</span>
    </nav>

    <div class="bg-indigo-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📷</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Jozef Maximilián Petzval</h1>
        <p class="text-indigo-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1807 – 1891</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Spišská Belá</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📐 {{ pc.founderTag }}</span>
        </div>
      </div>
    </div>

    <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8">
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
          <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        href="https://sk.wikipedia.org/wiki/Jozef_Maximilián_Petzval"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline"
      >
        {{ pc.wikiLink }}
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumb: 'Osobnosti fyziky',
    subtitle: 'Fyzik, matematik a vynálezca',
    founderTag: 'Zakladateľ modernej optiky',
    intro: 'Jozef Maximilián Petzval sa narodil <strong>6. januára 1807</strong> v Spišskej Belej (vtedy Rakúske cisárstvo, dnes Slovensko). Považuje sa za zakladateľa modernej optiky a modernej fotografie. Ako profesor matematiky na Viedenskej univerzite skonštruoval fotografický objektív, ktorý skrátil expozičný čas z 30 minút na menej ako 30 sekúnd a umožnil masovú fotografiu. Zomrel <strong>17. septembra 1891</strong> vo Viedni vo veku 84 rokov.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    wikiLabel: 'Odkaz na Wikipédiu',
    wikiLink: 'Jozef Maximilián Petzval na sk.wikipedia.org →',
    contributions: [
      {
        icon: '📷',
        title: 'Petzvalov fotografický objektív (1840)',
        description: 'Skonštruoval objektív s 16-násobne vyššou priepustnosťou svetla (f/3,6 oproti f/16). Expozičný čas sa skrátil z 30 minút na 15–30 sekúnd, čo umožnilo masovú portrétnu fotografiu. Objektív sa používal v kamerách až do 20. rokov 20. storočia.',
      },
      {
        icon: '🔭',
        title: 'Geometrická optika a teória aberácií',
        description: 'Zakladateľ modernej geometrickej optiky. Definoval Petzvalov povrch — zakrivenú rovinu ostrého obrazu v optických sústavách. Zdokonalil mikroskopy, navrhol dvojoký ďalekohľad a divadelné okuliare.',
      },
      {
        icon: '💡',
        title: 'Prenosný reflektor',
        description: 'Vytvoril prenosný svetlomet s priemerom 1,3 m a dosahom 2,7 km — predchodca moderných svetlometov.',
      },
      {
        icon: '∫',
        title: 'Matematika — Laplaceova transformácia',
        description: 'Samostatne prepracoval matematickú metódu, ktorá sa dnes nazýva Laplaceova transformácia. Pre spor so žiakom ju nakoniec pomenovali po Laplacovi namiesto po Petzvalovi.',
      },
      {
        icon: '🎵',
        title: 'Akustika a balistika',
        description: 'Skúmal kmitanie strún a teóriu hudobných nástrojov. Navrhol klavír s trojitou klávesnicou. Venoval sa aj balistike a analytickej mechanike.',
      },
    ],
    facts: [
      'Na prednášky na Viedenskej univerzite prichádzal na čiernom arabskom koni — jeho výstrednosť bola medzi študentmi legendárna. Bol tiež uznávaným šermiarom.',
      'V roku 1859 mu ukradli rukopisy s celým životným vedeckým dielom. Nikdy ich neobnovil a táto strata ho trvalo zasiahla.',
      'Posledné roky života prežil ako takmer pustovník na vrchu Kahlenberg pri Viedni. Podľa legendy pred smrťou povedal: „Porazil som svetlo, mám ho pevne v rukách."',
      'Po ňom je pomenovaný lunárny kráter, planetoida (3716 Petzval) aj Rakúska Petzvalova medaila za zásluhy o vedeckú fotografiu, udeľovaná od roku 1928. V jeho rodnej Spišskej Belej sa nachádza Múzeum fotografie Petzval.',
    ],
  },
  ru: {
    breadcrumb: 'Физики-новаторы',
    subtitle: 'Физик, математик и изобретатель',
    founderTag: 'Основатель современной оптики',
    intro: 'Йозеф Максимилиан Петцваль родился <strong>6 января 1807 года</strong> в Спишской Беле (тогда Австрийская империя, ныне Словакия). Он считается основателем современной оптики и современной фотографии. Будучи профессором математики Венского университета, он создал фотографический объектив, который сократил время экспозиции с 30 минут до менее чем 30 секунд и сделал возможной массовую фотографию. Умер <strong>17 сентября 1891 года</strong> в Вене в возрасте 84 лет.',
    contributionsTitle: 'Главные вклады в науку',
    factsTitle: 'Интересные факты',
    wikiLabel: 'Ссылка на Википедию',
    wikiLink: 'Jozef Maximilián Petzval на sk.wikipedia.org →',
    contributions: [
      {
        icon: '📷',
        title: 'Объектив Петцваля (1840)',
        description: 'Сконструировал объектив с 16-кратным увеличением светопропускания (f/3,6 против f/16). Время экспозиции сократилось с 30 минут до 15–30 секунд, что сделало возможным массовое портретное фотографирование. Объектив использовался в камерах вплоть до 1920-х годов.',
      },
      {
        icon: '🔭',
        title: 'Геометрическая оптика и теория аберраций',
        description: 'Основатель современной геометрической оптики. Определил поверхность Петцваля — изогнутую плоскость резкого изображения в оптических системах. Усовершенствовал микроскопы, разработал бинокль и театральный бинокль.',
      },
      {
        icon: '💡',
        title: 'Переносной прожектор',
        description: 'Создал переносной прожектор диаметром 1,3 м с дальностью действия 2,7 км — предшественник современных прожекторов.',
      },
      {
        icon: '∫',
        title: 'Математика — преобразование Лапласа',
        description: 'Самостоятельно разработал математический метод, который сегодня называется преобразованием Лапласа. Из-за спора с учеником метод в итоге был назван в честь Лапласа, а не Петцваля.',
      },
      {
        icon: '🎵',
        title: 'Акустика и баллистика',
        description: 'Исследовал колебания струн и теорию музыкальных инструментов. Предложил конструкцию рояля с тройной клавиатурой. Занимался также баллистикой и аналитической механикой.',
      },
    ],
    facts: [
      'На лекции в Венском университете он приезжал на чёрном арабском скакуне — его экстравагантность стала легендой среди студентов. Он также был признанным фехтовальщиком.',
      'В 1859 году у него похитили рукописи со всем его научным трудом. Он так и не восстановил их, и эта потеря навсегда подкосила его.',
      'Последние годы жизни провёл почти как отшельник на горе Кальценберг близ Вены. По легенде, перед смертью он сказал: «Я победил свет, он крепко в моих руках».',
      'В его честь названы лунный кратер, малая планета (3716 Петцваль), а также Австрийская медаль Петцваля за заслуги в области научной фотографии, вручаемая с 1928 года. В его родной Спишской Беле находится Музей фотографии Петцваля.',
    ],
  },
  uk: {
    breadcrumb: 'Постаті фізики',
    subtitle: 'Фізик, математик і винахідник',
    founderTag: 'Засновник сучасної оптики',
    intro: 'Йозеф Максиміліан Петцваль народився <strong>6 січня 1807 року</strong> в Спіській Білій (тоді Австрійська імперія, нині Словаччина). Він вважається засновником сучасної оптики та сучасної фотографії. Як професор математики Віденського університету, він сконструював фотографічний об\'єктив, який скоротив час витримки з 30 хвилин до менш ніж 30 секунд і зробив масову фотографію можливою. Помер <strong>17 вересня 1891 року</strong> у Відні у віці 84 років.',
    contributionsTitle: 'Головні внески в науку',
    factsTitle: 'Цікаві факти',
    wikiLabel: 'Посилання на Вікіпедію',
    wikiLink: 'Jozef Maximilián Petzval на sk.wikipedia.org →',
    contributions: [
      {
        icon: '📷',
        title: 'Об\'єктив Петцваля (1840)',
        description: 'Сконструював об\'єктив із 16-разовим збільшенням світлопропускання (f/3,6 проти f/16). Час витримки скоротився з 30 хвилин до 15–30 секунд, що зробило масову портретну фотографію можливою. Об\'єктив використовувався в камерах аж до 1920-х років.',
      },
      {
        icon: '🔭',
        title: 'Геометрична оптика і теорія аберацій',
        description: 'Засновник сучасної геометричної оптики. Визначив поверхню Петцваля — зігнуту площину різкого зображення в оптичних системах. Удосконалив мікроскопи, розробив бінокль і театральний бінокль.',
      },
      {
        icon: '💡',
        title: 'Переносний прожектор',
        description: 'Створив переносний прожектор діаметром 1,3 м із дальністю дії 2,7 км — попередник сучасних прожекторів.',
      },
      {
        icon: '∫',
        title: 'Математика — перетворення Лапласа',
        description: 'Самостійно розробив математичний метод, який сьогодні називається перетворенням Лапласа. Через суперечку з учнем метод зрештою був названий на честь Лапласа, а не Петцваля.',
      },
      {
        icon: '🎵',
        title: 'Акустика і балістика',
        description: 'Досліджував коливання струн і теорію музичних інструментів. Запропонував конструкцію роялю з потрійною клавіатурою. Займався також балістикою і аналітичною механікою.',
      },
    ],
    facts: [
      'На лекції у Віденському університеті він приїжджав на чорному арабському скакуні — його екстравагантність стала легендою серед студентів. Він також був визнаним фехтувальником.',
      'У 1859 році в нього вкрали рукописи з усією його науковою спадщиною. Він так і не відновив їх, і ця втрата назавжди його підкосила.',
      'Останні роки життя провів майже як відлюдник на горі Кальценберг поблизу Відня. За легендою, перед смертю він сказав: «Я переміг світло, воно міцно в моїх руках».',
      'На його честь названо місячний кратер, мала планета (3716 Петцваль), а також Австрійська медаль Петцваля за заслуги в галузі наукової фотографії, що вручається з 1928 року. У його рідній Спіській Білій знаходиться Музей фотографії Петцваля.',
    ],
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
