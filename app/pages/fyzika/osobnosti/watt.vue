<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" :aria-label="pc.breadcrumbAriaLabel" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ {{ pc.fyzika }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">James Watt</span>
    </nav>

    <div class="bg-blue-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">⚙️</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">James Watt</h1>
        <p class="text-blue-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1736 – 1819</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.country }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.unit }}</span>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.intro"></p>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.contributionsTitle }}</h2>
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
      <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ pc.factsTitle }}</h2>
      <div class="space-y-4">
        <div v-for="(fact, i) in facts" :key="i" class="flex gap-4 items-start">
          <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
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
      <span class="text-4xl font-bold font-mono text-blue-600 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">W</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbAriaLabel: 'Navigačná cesta',
    fyzika: 'Fyzika',
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Škótsky vynálezca a strojný inžinier',
    country: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Škótsko',
    unit: '📐 Jednotka: watt (W)',
    intro: 'James Watt sa narodil <strong>19. januára 1736</strong> v Greenocku v Škótsku. Ako strojný inžinier dramaticky zdokonalil existujúci parný stroj — jeho vynálezy sa stali hnacou silou priemyselnej revolúcie a navždy zmenili civilizáciu. Zomrel <strong>25. augusta 1819</strong> v Birminghame.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    siLabel: 'Jednotka SI',
    siTitle: 'watt (W) — jednotka výkonu',
    siDesc: '1 W = 1 J/s — energia prenesená alebo vykonaná práca za sekundu',
  },
  ru: {
    breadcrumbAriaLabel: 'Навигационный путь',
    fyzika: 'Физика',
    breadcrumbPersonalities: 'Личности физики',
    subtitle: 'Шотландский изобретатель и инженер-механик',
    country: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландия',
    unit: '📐 Единица: ватт (Вт)',
    intro: 'Джеймс Уатт родился <strong>19 января 1736 года</strong> в Гриноке, Шотландия. Как инженер-механик, он кардинально усовершенствовал существующий паровой двигатель — его изобретения стали движущей силой промышленной революции и навсегда изменили цивилизацию. Умер <strong>25 августа 1819 года</strong> в Бирмингеме.',
    contributionsTitle: 'Основной вклад в науку',
    factsTitle: 'Интересные факты',
    siLabel: 'Единица СИ',
    siTitle: 'ватт (Вт) — единица мощности',
    siDesc: '1 Вт = 1 Дж/с — энергия, переданная или работа, выполненная за секунду',
  },
  uk: {
    breadcrumbAriaLabel: 'Навігаційний шлях',
    fyzika: 'Фізика',
    breadcrumbPersonalities: 'Особистості фізики',
    subtitle: 'Шотландський винахідник та інженер-механік',
    country: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландія',
    unit: '📐 Одиниця: ват (Вт)',
    intro: 'Джеймс Ватт народився <strong>19 січня 1736 року</strong> в Грінок, Шотландія. Як інженер-механік, він кардинально вдосконалив існуючий паровий двигун — його винаходи стали рушійною силою промислової революції та назавжди змінили цивілізацію. Помер <strong>25 серпня 1819 року</strong> в Бірмінгемі.',
    contributionsTitle: 'Основний внесок у науку',
    factsTitle: 'Цікаві факти',
    siLabel: 'Одиниця СІ',
    siTitle: 'ват (Вт) — одиниця потужності',
    siDesc: '1 Вт = 1 Дж/с — енергія, передана або робота, виконана за секунду',
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)

const contributionsSk = [
  {
    icon: '🏭',
    title: 'Samostatný kondenzátor parného stroja',
    description: 'V roku 1765 vynašiel separátny kondenzátor, ktorý drasticky zvýšil účinnosť parného stroja a znížil spotrebu paliva.',
  },
  {
    icon: '⚡',
    title: 'Dvojčinný parný stroj',
    description: 'Skonštruoval stroj, kde para tlačí piest striedavo z oboch strán — dvojnásobný výkon oproti predchádzajúcim strojom.',
  },
  {
    icon: '🐴',
    title: 'Konina ako jednotka výkonu',
    description: 'Zaviedol pojem „horsepower" (koňská sila) na porovnanie výkonu parného stroja s koňmi, aby obchodníci pochopili výhody stroja.',
  },
  {
    icon: '🌍',
    title: 'Priemyselná revolúcia',
    description: 'Jeho zdokonalenia parného stroja boli kľúčovou technológiou, ktorá umožnila priemyselnú revolúciu v 18. a 19. storočí.',
  },
]

const contributionsRu = [
  {
    icon: '🏭',
    title: 'Отдельный конденсатор парового двигателя',
    description: 'В 1765 году изобрёл отдельный конденсатор, который резко повысил КПД парового двигателя и снизил расход топлива.',
  },
  {
    icon: '⚡',
    title: 'Паровой двигатель двойного действия',
    description: 'Сконструировал машину, в которой пар толкает поршень попеременно с обеих сторон — вдвое большая мощность по сравнению с предыдущими машинами.',
  },
  {
    icon: '🐴',
    title: 'Лошадиная сила как единица мощности',
    description: 'Ввёл понятие «лошадиная сила» для сравнения мощности парового двигателя с лошадьми, чтобы купцы могли понять преимущества машины.',
  },
  {
    icon: '🌍',
    title: 'Промышленная революция',
    description: 'Его усовершенствования парового двигателя стали ключевой технологией, которая сделала возможной промышленную революцию XVIII–XIX веков.',
  },
]

const contributionsUk = [
  {
    icon: '🏭',
    title: 'Окремий конденсатор парового двигуна',
    description: 'У 1765 році винайшов окремий конденсатор, який різко підвищив ефективність парового двигуна та знизив споживання палива.',
  },
  {
    icon: '⚡',
    title: 'Паровий двигун подвійної дії',
    description: 'Сконструював машину, в якій пара штовхає поршень почергово з обох боків — вдвічі більша потужність порівняно з попередніми машинами.',
  },
  {
    icon: '🐴',
    title: 'Кінська сила як одиниця потужності',
    description: 'Ввів поняття «кінська сила» для порівняння потужності парового двигуна з кіньми, щоб торговці могли зрозуміти переваги машини.',
  },
  {
    icon: '🌍',
    title: 'Промислова революція',
    description: 'Його вдосконалення парового двигуна стали ключовою технологією, що уможливила промислову революцію XVIII–XIX століть.',
  },
]

const contributions = computed(() => {
  if (locale.value === 'ru') return contributionsRu
  if (locale.value === 'uk') return contributionsUk
  return contributionsSk
})

const factsSk = [
  'Watt nevynašiel parný stroj — zásadne zdokonalil existujúci Newcomenov stroj. Rozdiel je dôležitý: bolo to inžinierske génius aplikované na hotový vynález, nie objavenie niečoho nového.',
  'Naučil sa nemčinu a taliančinu výhradne preto, aby mohol čítať viac vedeckej literatúry v originálnych jazykoch.',
  'Heriot-Watt University v Edinburghu aj James Watt College v Greenocku nesú jeho meno — výnimočná pocta byť eponymom dvoch inštitúcií vyššieho vzdelávania.',
]

const factsRu = [
  'Уатт не изобрёл паровой двигатель — он кардинально усовершенствовал существующую машину Ньюкомена. Различие важно: это было инженерное гение, применённое к уже готовому изобретению, а не открытие чего-то нового.',
  'Он выучил немецкий и итальянский языки исключительно для того, чтобы читать больше научной литературы в оригинале.',
  'Heriot-Watt University в Эдинбурге и James Watt College в Гриноке носят его имя — исключительная честь быть эпонимом двух высших учебных заведений.',
]

const factsUk = [
  'Ватт не винайшов паровий двигун — він кардинально вдосконалив існуючу машину Ньюкомена. Різниця важлива: це було інженерне генієство, застосоване до вже готового винаходу, а не відкриття чогось нового.',
  'Він вивчив німецьку та італійську мови виключно для того, щоб читати більше наукової літератури в оригіналі.',
  'Heriot-Watt University в Единбурзі та James Watt College в Грінок носять його ім\'я — виняткова честь бути епонімом двох вищих навчальних закладів.',
]

const facts = computed(() => {
  if (locale.value === 'ru') return factsRu
  if (locale.value === 'uk') return factsUk
  return factsSk
})
</script>
