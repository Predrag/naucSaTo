<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumb }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Ján Andrej Segner</span>
    </nav>

    <div class="bg-blue-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">💧</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Ján Andrej Segner</h1>
        <p class="text-blue-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1704 – 1777</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Bratislava</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🌊 {{ pc.badge }}</span>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
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
          <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        href="https://sk.wikipedia.org/wiki/Ján_Andrej_Segner" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">
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
    subtitle: 'Matematik, fyzik a inžinier',
    badge: 'Segnerovo koleso',
    intro: 'Ján Andrej Segner sa narodil <strong>9. októbra 1704</strong> v Bratislave. Bol prvým profesorom matematiky na Univerzite v Göttingene a spolupracoval s Leonhardom Eulerom. Vynašiel reaktívnu vodnú turbínu — Segnerovo koleso — predchodcu moderných vodných turbín, a ako prvý zaviedol pojem povrchové napätie kvapalín. Po ňom je pomenovaný kráter na Mesiaci. Zomrel <strong>5. októbra 1777</strong> v Halle v Prusku.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    wikiLabel: 'Odkaz na Wikipédiu',
    wikiLink: 'Ján Andrej Segner na sk.wikipedia.org →',
  },
  ru: {
    breadcrumb: 'Персоналии физики',
    subtitle: 'Математик, физик и инженер',
    badge: 'Колесо Сегнера',
    intro: 'Ян Андрей Сегнер родился <strong>9 октября 1704 года</strong> в Братиславе. Он был первым профессором математики в Гёттингенском университете и сотрудничал с Леонардом Эйлером. Он изобрёл реактивную водяную турбину — колесо Сегнера — предшественника современных водяных турбин, и первым ввёл понятие поверхностного натяжения жидкостей. В его честь назван кратер на Луне. Умер <strong>5 октября 1777 года</strong> в Галле в Пруссии.',
    contributionsTitle: 'Основной вклад в науку',
    factsTitle: 'Интересные факты',
    wikiLabel: 'Ссылка на Википедию',
    wikiLink: 'Ján Andrej Segner на sk.wikipedia.org →',
  },
  uk: {
    breadcrumb: 'Особистості фізики',
    subtitle: 'Математик, фізик та інженер',
    badge: 'Колесо Сегнера',
    intro: 'Ян Андрій Сегнер народився <strong>9 жовтня 1704 року</strong> в Братиславі. Він був першим професором математики в Гетінгенському університеті та співпрацював із Леонардом Ейлером. Він винайшов реактивну водяну турбіну — колесо Сегнера — попередника сучасних водяних турбін, і першим увів поняття поверхневого натягу рідин. На його честь названий кратер на Місяці. Помер <strong>5 жовтня 1777 року</strong> в Галле в Пруссії.',
    contributionsTitle: 'Основний внесок у науку',
    factsTitle: 'Цікаві факти',
    wikiLabel: 'Посилання на Вікіпедію',
    wikiLink: 'Ján Andrej Segner на sk.wikipedia.org →',
  },
}
const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)

const contributionsSk = [
  {
    icon: '🌊',
    title: 'Segnerovo koleso — reaktívna vodná turbína (1750)',
    description: 'Zostrojil prvú reaktívnu vodnú turbínu, kde vytekajúca voda otáča kolesom reakčnou silou — priamy predchodca moderných vodných turbín a raketového pohonu. Euler na základe tohto vynálezu sformuloval matematickú teóriu turbín.',
  },
  {
    icon: '💧',
    title: 'Povrchové napätie kvapalín (1751)',
    description: 'Ako prvý zaviedol a definoval pojem povrchové napätie — fyzikálnu vlastnosť, vďaka ktorej sa napríklad voda správa ako by mala „kožu" na povrchu.',
  },
  {
    icon: '📐',
    title: 'Matematika a dynamika',
    description: 'Prispel k analytickej geometrii a dynamike telies. Spolupracoval s Leonhardom Eulerom, jedným z najväčších matematikov všetkých čias.',
  },
]

const contributionsRu = [
  {
    icon: '🌊',
    title: 'Колесо Сегнера — реактивная водяная турбина (1750)',
    description: 'Создал первую реактивную водяную турбину, в которой вытекающая вода вращает колесо реакционной силой — прямой предшественник современных водяных турбин и ракетного привода. Эйлер на основе этого изобретения сформулировал математическую теорию турбин.',
  },
  {
    icon: '💧',
    title: 'Поверхностное натяжение жидкостей (1751)',
    description: 'Первым ввёл и определил понятие поверхностного натяжения — физического свойства, благодаря которому, например, вода ведёт себя так, как будто имеет «кожу» на поверхности.',
  },
  {
    icon: '📐',
    title: 'Математика и динамика',
    description: 'Внёс вклад в аналитическую геометрию и динамику тел. Сотрудничал с Леонардом Эйлером — одним из величайших математиков всех времён.',
  },
]

const contributionsUk = [
  {
    icon: '🌊',
    title: 'Колесо Сегнера — реактивна водяна турбіна (1750)',
    description: 'Побудував першу реактивну водяну турбіну, в якій вода, що витікає, обертає колесо реакційною силою — прямий попередник сучасних водяних турбін і ракетного приводу. Ейлер на основі цього винаходу сформулював математичну теорію турбін.',
  },
  {
    icon: '💧',
    title: 'Поверхневий натяг рідин (1751)',
    description: 'Першим увів і визначив поняття поверхневого натягу — фізичної властивості, завдяки якій, наприклад, вода поводиться так, ніби має «шкіру» на поверхні.',
  },
  {
    icon: '📐',
    title: 'Математика та динаміка',
    description: 'Зробив внесок в аналітичну геометрію та динаміку тіл. Співпрацював із Леонардом Ейлером — одним із найбільших математиків усіх часів.',
  },
]

const activeContributions = computed(() => {
  if (locale.value === 'ru') return contributionsRu
  if (locale.value === 'uk') return contributionsUk
  return contributionsSk
})

const factsSk = [
  'Segner bol prvým profesorom matematiky na Univerzite v Göttingene (od roku 1735), ktorá sa pod jeho vedením stala jedným z popredných vedeckých centier Európy. Neskôr pôsobil na Univerzite v Halle.',
  'Leonhard Euler — jeden z najvýznamnejších matematikov histórie — sa priamo inšpiroval Segnerovým kolesom pri formulovaní matematickej teórie turbín. Bez Segnerovho praktického vynálezu by Eulerova teória nevznikla tak skoro.',
  'Po Segnerovi je pomenovaný kráter na Mesiaci. Narodil sa v Bratislave — meste, ktoré bolo v tom čase hlavným mestom Uhorska.',
]

const factsRu = [
  'Сегнер был первым профессором математики в Гёттингенском университете (с 1735 года), который под его руководством стал одним из ведущих научных центров Европы. Позднее он работал в Университете Галле.',
  'Леонард Эйлер — один из наиболее значимых математиков в истории — непосредственно вдохновился колесом Сегнера при формулировании математической теории турбин. Без практического изобретения Сегнера теория Эйлера не возникла бы так скоро.',
  'В честь Сегнера назван кратер на Луне. Он родился в Братиславе — городе, который в то время был столицей Венгерского королевства.',
]

const factsUk = [
  'Сегнер був першим професором математики в Гетінгенському університеті (з 1735 року), який під його керівництвом став одним із провідних наукових центрів Європи. Пізніше він працював в Університеті Галле.',
  'Леонард Ейлер — один із найзначніших математиків в історії — безпосередньо надихнувся колесом Сегнера при формулюванні математичної теорії турбін. Без практичного винаходу Сегнера теорія Ейлера не виникла б так скоро.',
  'На честь Сегнера названий кратер на Місяці. Він народився в Братиславі — місті, яке в той час було столицею Угорського королівства.',
]

const activeFacts = computed(() => {
  if (locale.value === 'ru') return factsRu
  if (locale.value === 'uk') return factsUk
  return factsSk
})
</script>
