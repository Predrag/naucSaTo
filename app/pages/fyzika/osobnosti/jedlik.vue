<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ {{ pc.breadcrumbFyzika }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Štefan Anián Jedlík</span>
    </nav>

    <div class="bg-amber-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Štefan Anián Jedlík</h1>
        <p class="text-amber-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1800 – 1895</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.tagOrigin }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🔌 {{ pc.tagInvention }}</span>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.intro" />
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
          <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        href="https://sk.wikipedia.org/wiki/Štefan_Anián_Jedlík" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:underline">
        {{ pc.wikiLink }}
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbFyzika: 'Fyzika',
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Fyzik, vynálezca, benediktínsky kňaz',
    tagOrigin: '🇸🇰 Zemné, Slovensko',
    tagInvention: 'Prvý elektromotor',
    intro: 'Štefan Anián Jedlík sa narodil <strong>13. januára 1800</strong> v Zemnom na Slovensku. Benediktínsky kňaz a profesor fyziky zostrojil prvý fungujúci elektromotor — prototyp dynama — niekoľko rokov pred Wernerom Siemensom, ktorý je dnes bežne považovaný za jeho vynálezcu. Jedlík ho nikdy nepatentoval. Zomrel <strong>13. decembra 1895</strong> v Győri vo veku 95 rokov.',
    sectionContributions: 'Hlavné prínosy vede',
    sectionFacts: 'Zaujímavosti',
    wikiLabel: 'Odkaz na Wikipédiu',
    wikiLink: 'Štefan Anián Jedlík na sk.wikipedia.org →',
    contributions: [
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
    ],
    facts: [
      'Jedlík bol benediktínsky mních, ktorý celý život spojil s vierou a vedou — typický príklad vedca-kňaza 19. storočia. Žil sa dočkal 95 rokov, čo bolo v tej dobe výnimočné.',
      'Zostrojil elektromotor skôr ako Siemens, ale nikdy ho nepatentoval. Skromne predpokladal, že nie je prvý — mýlil sa. Svet si tak dlho myslel, že elektromotor vynašiel niekto iný.',
      'Okrem fyziky sa venoval aj astronomickým pozorovaniams a bol aktívnym členom viacerých vedeckých spoločností v celej Habsburskej monarchii.',
    ],
  },
  ru: {
    breadcrumbFyzika: 'Физика',
    breadcrumbPersonalities: 'Выдающиеся физики',
    subtitle: 'Физик, изобретатель, бенедиктинский священник',
    tagOrigin: '🇸🇰 Земне, Словакия',
    tagInvention: 'Первый электродвигатель',
    intro: 'Штефан Аниан Едлик родился <strong>13 января 1800 года</strong> в Земне, Словакия. Бенедиктинский священник и профессор физики построил первый работающий электродвигатель — прототип динамо — на несколько лет раньше Вернера Сименса, которому сегодня обычно приписывают это изобретение. Едлик никогда не патентовал его. Скончался <strong>13 декабря 1895 года</strong> в Дьёре в возрасте 95 лет.',
    sectionContributions: 'Основной вклад в науку',
    sectionFacts: 'Интересные факты',
    wikiLabel: 'Ссылка на Википедию',
    wikiLink: 'Штефан Аниан Едлик на sk.wikipedia.org →',
    contributions: [
      {
        icon: '🔌',
        title: 'Первый электродвигатель — «блискомагнетический саморотатор» (около 1827 г.)',
        description: 'Построил вращающийся электромагнитный прибор — предшественник динамо и электродвигателя — раньше Сименса и Уитстона. Назвал его «блискомагнетический саморотатор». Никогда не патентовал.',
      },
      {
        icon: '💡',
        title: 'Исследование электромагнетизма',
        description: 'Долгое время изучал явления электромагнитной индукции и свойства электрических разрядов. Преподавал физику в университетах Пешта и Братиславы более 40 лет.',
      },
      {
        icon: '🔬',
        title: 'Оптическая дифракционная решётка',
        description: 'Сконструировал тонкую оптическую дифракционную решётку, которую использовал при исследовании света — инструмент, важный для спектроскопии.',
      },
      {
        icon: '⚡',
        title: 'Электрохимические опыты',
        description: 'Экспериментировал с элементом Вольта и явлениями, связанными с электролизом — областью, находившейся в его время на стыке физики и химии.',
      },
    ],
    facts: [
      'Едлик был бенедиктинским монахом, соединившим всю жизнь веру и науку — типичный пример учёного-священника XIX века. Он прожил 95 лет, что было исключительным долголетием для того времени.',
      'Он построил электродвигатель раньше Сименса, но никогда не патентовал его. Скромно полагая, что не является первым, — он ошибался. Мир долгое время считал, что электродвигатель изобрёл кто-то другой.',
      'Помимо физики, он занимался астрономическими наблюдениями и был активным членом нескольких научных обществ Габсбургской монархии.',
    ],
  },
  uk: {
    breadcrumbFyzika: 'Фізика',
    breadcrumbPersonalities: 'Особистості фізики',
    subtitle: 'Фізик, винахідник, бенедиктинський священник',
    tagOrigin: '🇸🇰 Земне, Словаччина',
    tagInvention: 'Перший електродвигун',
    intro: 'Штефан Аніан Єдлік народився <strong>13 січня 1800 року</strong> в Земне, Словаччина. Бенедиктинський священник і професор фізики побудував перший працюючий електродвигун — прототип динамо — за кілька років до Вернера Сіменса, якому сьогодні зазвичай приписують цей винахід. Єдлік ніколи не патентував його. Помер <strong>13 грудня 1895 року</strong> в Дьорі у віці 95 років.',
    sectionContributions: 'Головний внесок у науку',
    sectionFacts: 'Цікаві факти',
    wikiLabel: 'Посилання на Вікіпедію',
    wikiLink: 'Штефан Аніан Єдлік на sk.wikipedia.org →',
    contributions: [
      {
        icon: '🔌',
        title: 'Перший електродвигун — «блискомагнетичний саморотатор» (близько 1827 р.)',
        description: 'Побудував обертовий електромагнітний прилад — попередник динамо та електродвигуна — раніше від Сіменса та Уітстона. Назвав його «блискомагнетичний саморотатор». Ніколи не патентував.',
      },
      {
        icon: '💡',
        title: 'Дослідження електромагнетизму',
        description: 'Тривалий час вивчав явища електромагнітної індукції та властивості електричних розрядів. Викладав фізику в університетах Пешта та Братислави понад 40 років.',
      },
      {
        icon: '🔬',
        title: 'Оптична дифракційна ґратка',
        description: 'Сконструював тонку оптичну дифракційну ґратку, яку використовував при дослідженні світла — інструмент, важливий для спектроскопії.',
      },
      {
        icon: '⚡',
        title: 'Електрохімічні досліди',
        description: 'Експериментував із елементом Вольта та явищами, пов\'язаними з електролізом — галуззю, що в його часи перебувала на межі фізики та хімії.',
      },
    ],
    facts: [
      'Єдлік був бенедиктинським ченцем, який поєднував усе своє життя віру і науку — типовий приклад вченого-священника XIX століття. Він прожив 95 років, що було винятковим довголіттям для того часу.',
      'Він побудував електродвигун раніше від Сіменса, але ніколи не патентував його. Скромно припускаючи, що не є першим, — він помилявся. Світ довгий час вважав, що електродвигун винайшов хтось інший.',
      'Окрім фізики, він займався астрономічними спостереженнями та був активним членом кількох наукових товариств Габсбурзької монархії.',
    ],
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
