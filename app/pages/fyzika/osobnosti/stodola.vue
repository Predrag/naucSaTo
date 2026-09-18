<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Aurel Bohuslav Stodola</span>
    </nav>

    <div class="bg-slate-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚙️</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Aurel Bohuslav Stodola</h1>
        <p class="text-slate-200 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1859 – 1942</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Liptovský Mikuláš</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌡️ {{ pc.tagTurbines }}</span>
        </div>
      </div>
    </div>

    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.intro"></p>
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
          <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        href="https://sk.wikipedia.org/wiki/Aurel_Stodola" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:underline">
        Aurel Bohuslav Stodola na sk.wikipedia.org →
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Fyzik, inžinier a vynálezca',
    tagTurbines: 'Zakladateľ teórie turbín',
    intro: 'Aurel Bohuslav Stodola sa narodil <strong>10. mája 1859</strong> v Liptovskom Mikuláši. Profesor na ETH Zürich položil teoretické a inžinierske základy moderných parných a plynových turbín. Jeho učebnica z roku 1903 bola desaťročia celosvetovým štandardom pre inžinierov turbín a prvých prúdových motorov. Bol priateľom Alberta Einsteina. Zomrel <strong>25. decembra 1942</strong> v Zürichu vo veku 83 rokov.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    wikiLabel: 'Odkaz na Wikipédiu',
    pageTitle: 'Aurel Bohuslav Stodola – Fyzik a inžinier',
    pageDescription: 'Aurel Bohuslav Stodola – slovenský fyzik a inžinier, zakladateľ teórie parných a plynových turbín, profesor ETH Zürich.',
  },
  ru: {
    breadcrumbPersonalities: 'Личности физики',
    subtitle: 'Физик, инженер и изобретатель',
    tagTurbines: 'Основоположник теории турбин',
    intro: 'Аурел Богуслав Стодола родился <strong>10 мая 1859 года</strong> в Липтовском Микулаше. Профессор ETH Цюрих заложил теоретические и инженерные основы современных паровых и газовых турбин. Его учебник 1903 года был десятилетиями мировым стандартом для инженеров турбин и первых реактивных двигателей. Он был другом Альберта Эйнштейна. Умер <strong>25 декабря 1942 года</strong> в Цюрихе в возрасте 83 лет.',
    contributionsTitle: 'Основные вклады в науку',
    factsTitle: 'Интересные факты',
    wikiLabel: 'Ссылка на Википедию',
    pageTitle: 'Аурел Богуслав Стодола – Физик и инженер',
    pageDescription: 'Аурел Богуслав Стодола – словацкий физик и инженер, основоположник теории паровых и газовых турбин, профессор ETH Цюрих.',
  },
  uk: {
    breadcrumbPersonalities: 'Особистості фізики',
    subtitle: 'Фізик, інженер та винахідник',
    tagTurbines: 'Засновник теорії турбін',
    intro: 'Аурел Богуслав Стодола народився <strong>10 травня 1859 року</strong> в Ліптовському Мікулаші. Професор ETH Цюрих заклав теоретичні та інженерні основи сучасних парових і газових турбін. Його підручник 1903 року був десятиліттями світовим стандартом для інженерів турбін і перших реактивних двигунів. Він був другом Альберта Ейнштейна. Помер <strong>25 грудня 1942 року</strong> в Цюриху у віці 83 років.',
    contributionsTitle: 'Основні внески в науку',
    factsTitle: 'Цікаві факти',
    wikiLabel: 'Посилання на Вікіпедію',
    pageTitle: 'Аурел Богуслав Стодола – Фізик та інженер',
    pageDescription: 'Аурел Богуслав Стодола – словацький фізик та інженер, засновник теорії парових і газових турбін, професор ETH Цюрих.',
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)

const contributions = [
  {
    icon: '🌡️',
    title: 'Teória parných a plynových turbín',
    description: 'Sformuloval matematické a fyzikálne základy pre navrhovanie parných a plynových turbín. Jeho učebnica z roku 1903 bola po desaťročia celosvetovým štandardom — inžinieri prvých prúdových motorov z nej čerpali priamo.',
  },
  {
    icon: '⚡',
    title: 'Prvý plynový turbínový generátor (1939)',
    description: 'Spolupracoval so spoločnosťou Brown Boveri na skonštruovaní jedného z prvých fungujúcich plynových turbínových generátorov — krok, ktorý predznamenal modernú energetiku a letecké motory.',
  },
  {
    icon: '🦾',
    title: 'Mechanická protéza ruky (1915–1916)',
    description: 'Spolupracoval s chirurgom Ferdinandom Sauerbruchom na vývoji jednej z prvých mechanicky poháňaných protéz ruky — prelomový príklad interdisciplinárnej spolupráce fyziky a medicíny.',
  },
  {
    icon: '🔥',
    title: 'Termodynamika a prenos tepla',
    description: 'Výrazne prispel k pochopeniu termodynamiky tepelných strojov, vibráciám turbínových lopatiek a mechanike tekutín pri vysokých teplotách.',
  },
]

const contributionsRu = [
  {
    icon: '🌡️',
    title: 'Теория паровых и газовых турбин',
    description: 'Сформулировал математические и физические основы для проектирования паровых и газовых турбин. Его учебник 1903 года был десятилетиями мировым стандартом — инженеры первых реактивных двигателей черпали из него напрямую.',
  },
  {
    icon: '⚡',
    title: 'Первый газотурбинный генератор (1939)',
    description: 'Сотрудничал с компанией Brown Boveri в создании одного из первых работающих газотурбинных генераторов — шаг, предвосхитивший современную энергетику и авиационные двигатели.',
  },
  {
    icon: '🦾',
    title: 'Механический протез руки (1915–1916)',
    description: 'Сотрудничал с хирургом Фердинандом Зауэрбрухом над разработкой одного из первых механически управляемых протезов руки — революционный пример междисциплинарного сотрудничества физики и медицины.',
  },
  {
    icon: '🔥',
    title: 'Термодинамика и теплообмен',
    description: 'Значительно способствовал пониманию термодинамики тепловых машин, вибрациям лопаток турбин и механике жидкостей при высоких температурах.',
  },
]

const contributionsUk = [
  {
    icon: '🌡️',
    title: 'Теорія парових і газових турбін',
    description: 'Сформулював математичні та фізичні основи для проектування парових і газових турбін. Його підручник 1903 року був десятиліттями світовим стандартом — інженери перших реактивних двигунів черпали з нього безпосередньо.',
  },
  {
    icon: '⚡',
    title: 'Перший газотурбінний генератор (1939)',
    description: 'Співпрацював з компанією Brown Boveri у створенні одного з перших працюючих газотурбінних генераторів — крок, що передвістив сучасну енергетику та авіаційні двигуни.',
  },
  {
    icon: '🦾',
    title: 'Механічний протез руки (1915–1916)',
    description: 'Співпрацював з хірургом Фердинандом Зауербрухом у розробці одного з перших механічно керованих протезів руки — проривний приклад міждисциплінарної співпраці фізики та медицини.',
  },
  {
    icon: '🔥',
    title: 'Термодинаміка і теплообмін',
    description: 'Значно сприяв розумінню термодинаміки теплових машин, вібраціям лопатей турбін і механіці рідин при високих температурах.',
  },
]

const activeContributions = computed(() => {
  if (locale.value === 'ru') return contributionsRu
  if (locale.value === 'uk') return contributionsUk
  return contributions
})

const facts = [
  'Stodola bol osobným priateľom Alberta Einsteina — obaja pôsobili vo Švajčiarsku a udržiavali dlhoročný intelektuálny vzťah.',
  'Jeho tvár sa nachádza na slovenskom pamätnom euro mincovom (10 €, 2009). Po ňom je tiež pomenovaná planetoida č. 3981 Stodola a cena Aurel Stodola Award, ktorú udeľujú Slovenské elektrárne.',
  'Napriek pôsobeniu vo Švajčiarsku celý život udržiaval väzby na Slovensko a považoval sa za Slováka — v čase, keď to nebolo politicky jednoduché.',
]

const factsRu = [
  'Стодола был личным другом Альберта Эйнштейна — оба работали в Швейцарии и поддерживали многолетние интеллектуальные отношения.',
  'Его лицо изображено на словацкой памятной монете (10 €, 2009). В его честь также названы астероид № 3981 Stodola и премия Aurel Stodola Award, которую присуждают Словацкие электростанции.',
  'Несмотря на работу в Швейцарии, он всю жизнь поддерживал связи со Словакией и считал себя словаком — в то время, когда это было политически непросто.',
]

const factsUk = [
  'Стодола був особистим другом Альберта Ейнштейна — обидва працювали у Швейцарії та підтримували багаторічні інтелектуальні стосунки.',
  'Його обличчя зображено на словацькій пам\'ятній монеті (10 €, 2009). На його честь також названо астероїд № 3981 Stodola та премія Aurel Stodola Award, яку присуджують Словацькі електростанції.',
  'Незважаючи на роботу в Швейцарії, він усе життя підтримував зв\'язки зі Словаччиною і вважав себе словаком — у той час, коли це було політично непросто.',
]

const activeFacts = computed(() => {
  if (locale.value === 'ru') return factsRu
  if (locale.value === 'uk') return factsUk
  return facts
})

useHead(computed(() => ({
  title: pc.value.pageTitle,
  meta: [{ name: 'description', content: pc.value.pageDescription }],
})))
</script>
