<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ Fyzika</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Heinrich Hertz</span>
    </nav>

    <div class="bg-orange-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📡</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Heinrich Hertz</h1>
        <p class="text-orange-100 text-lg mb-4">{{ pc.nationality }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1857 – 1894</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.country }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.unit }}</span>
        </div>
      </div>
    </div>

    <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
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
          <span class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">{{ pc.siUnitLabel }}</p>
        <p class="font-bold text-gray-900">{{ pc.siUnitName }}</p>
        <p class="text-sm text-gray-500">{{ pc.siUnitDesc }}</p>
      </div>
      <span class="text-3xl font-bold font-mono text-orange-600 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center">Hz</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbPersonalities: 'Osobnosti fyziky',
    nationality: 'Nemecký fyzik',
    country: '🇩🇪 Nemecko',
    unit: '📐 Jednotka: hertz (Hz)',
    intro: 'Heinrich Rudolf Hertz sa narodil <strong>22. februára 1857</strong> v Hamburgu v Nemecku. Bol prvým človekom, ktorý experimentálne vyprodukoval a detegoval elektromagnetické vlny, čím potvrdil Maxwellovu teóriu. Objavil tiež fotoelektrický efekt, ktorý neskôr vysvetlil Einstein. Zomrel predčasne vo veku len <strong>36 rokov</strong> dňa 1. januára 1894 v Bonne.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    siUnitLabel: 'Jednotka SI',
    siUnitName: 'hertz (Hz) — jednotka frekvencie',
    siUnitDesc: '1 Hz = 1/s — počet kmitov alebo opakovaní za sekundu',
  },
  ru: {
    breadcrumbPersonalities: 'Выдающиеся физики',
    nationality: 'Немецкий физик',
    country: '🇩🇪 Германия',
    unit: '📐 Единица: герц (Гц)',
    intro: 'Генрих Рудольф Герц родился <strong>22 февраля 1857 года</strong> в Гамбурге, Германия. Он стал первым человеком, который экспериментально произвёл и обнаружил электромагнитные волны, тем самым подтвердив теорию Максвелла. Он также открыл фотоэлектрический эффект, который впоследствии объяснил Эйнштейн. Герц скончался преждевременно в возрасте всего <strong>36 лет</strong> 1 января 1894 года в Бонне.',
    contributionsTitle: 'Основные достижения в науке',
    factsTitle: 'Интересные факты',
    siUnitLabel: 'Единица СИ',
    siUnitName: 'герц (Гц) — единица частоты',
    siUnitDesc: '1 Гц = 1/с — количество колебаний или повторений в секунду',
  },
  uk: {
    breadcrumbPersonalities: 'Видатні фізики',
    nationality: 'Німецький фізик',
    country: '🇩🇪 Німеччина',
    unit: '📐 Одиниця: герц (Гц)',
    intro: 'Генріх Рудольф Герц народився <strong>22 лютого 1857 року</strong> в Гамбурзі, Німеччина. Він став першою людиною, яка експериментально виробила й виявила електромагнітні хвилі, тим самим підтвердивши теорію Максвелла. Він також відкрив фотоелектричний ефект, який згодом пояснив Ейнштейн. Герц помер передчасно у віці лише <strong>36 років</strong> 1 січня 1894 року в Бонні.',
    contributionsTitle: 'Основні здобутки в науці',
    factsTitle: 'Цікаві факти',
    siUnitLabel: 'Одиниця СІ',
    siUnitName: 'герц (Гц) — одиниця частоти',
    siUnitDesc: '1 Гц = 1/с — кількість коливань або повторень за секунду',
  },
}
const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)

const contributionsSk = [
  {
    icon: '📡',
    title: 'Prvé experimentálne elektromagnetické vlny',
    description: 'V rokoch 1886–1888 ako prvý vyprodukoval a detegoval rádiové vlny, čím potvrdil Maxwellove rovnice elektromagnetizmu.',
  },
  {
    icon: '💡',
    title: 'Fotoelektrický efekt',
    description: 'V roku 1887 objavil, že svetlo dokáže vyraziť elektróny z povrchu kovu. Tento jav neskôr vysvetlil Einstein a získal zaň Nobelovu cenu.',
  },
  {
    icon: '📶',
    title: 'Meranie rýchlosti elektromagnetických vĺn',
    description: 'Experimentálne overil, že elektromagnetické vlny sa šíria rýchlosťou svetla — dôkaz, že svetlo je elektromagnetické vlnenie.',
  },
  {
    icon: '🔭',
    title: 'Parabolická anténa',
    description: 'Skonštruoval prvú parabolickú anténu na vysielanie a príjem elektromagnetických vĺn — predchodca moderných antén.',
  },
]

const contributionsRu = [
  {
    icon: '📡',
    title: 'Первые экспериментальные электромагнитные волны',
    description: 'В 1886–1888 годах первым получил и обнаружил радиоволны, тем самым подтвердив уравнения Максвелла для электромагнетизма.',
  },
  {
    icon: '💡',
    title: 'Фотоэлектрический эффект',
    description: 'В 1887 году обнаружил, что свет может выбивать электроны с поверхности металла. Это явление впоследствии объяснил Эйнштейн и получил за него Нобелевскую премию.',
  },
  {
    icon: '📶',
    title: 'Измерение скорости электромагнитных волн',
    description: 'Экспериментально подтвердил, что электромагнитные волны распространяются со скоростью света — доказательство того, что свет является электромагнитным излучением.',
  },
  {
    icon: '🔭',
    title: 'Параболическая антенна',
    description: 'Сконструировал первую параболическую антенну для передачи и приёма электромагнитных волн — предшественник современных антенн.',
  },
]

const contributionsUk = [
  {
    icon: '📡',
    title: 'Перші експериментальні електромагнітні хвилі',
    description: 'У 1886–1888 роках першим отримав і виявив радіохвилі, тим самим підтвердивши рівняння Максвелла для електромагнетизму.',
  },
  {
    icon: '💡',
    title: 'Фотоелектричний ефект',
    description: 'У 1887 році виявив, що світло може вибивати електрони з поверхні металу. Це явище згодом пояснив Ейнштейн і отримав за нього Нобелівську премію.',
  },
  {
    icon: '📶',
    title: 'Вимірювання швидкості електромагнітних хвиль',
    description: 'Експериментально підтвердив, що електромагнітні хвилі поширюються зі швидкістю світла — доказ того, що світло є електромагнітним випромінюванням.',
  },
  {
    icon: '🔭',
    title: 'Параболічна антена',
    description: 'Сконструював першу параболічну антену для передачі та прийому електромагнітних хвиль — попередник сучасних антен.',
  },
]

const activeContributions = computed(() => {
  if (locale.value === 'ru') return contributionsRu
  if (locale.value === 'uk') return contributionsUk
  return contributionsSk
})

const factsSk = [
  'Po predvedení rádiových vĺn Hertz vyhlásil, že nevidí pre tento objav žiadne praktické využitie. O menej ako desaťročie neskôr Guglielmo Marconi použil tieto vlny na vynájdenie rádiovej komunikácie.',
  'Hertz zomrel vo veku len 36 rokov na granulomatózu s polyangiitídou (autoimunitné ochorenie). Jeho synovec Gustav Hertz neskôr získal Nobelovu cenu za fyziku (1925).',
  'Každý deň používame jeho meno ako jednotku — frekvencia Wi-Fi (2,4 GHz / 5 GHz), taktovacia frekvencia procesora (napr. 3,5 GHz) aj rádiové stanice sú vyjadrené v hertzoch.',
]

const factsRu = [
  'После демонстрации радиоволн Герц заявил, что не видит никакого практического применения для этого открытия. Менее чем через десятилетие Гульельмо Маркони использовал эти волны для изобретения радиосвязи.',
  'Герц умер в возрасте всего 36 лет от гранулематоза с полиангиитом (аутоиммунное заболевание). Его племянник Густав Герц впоследствии получил Нобелевскую премию по физике (1925).',
  'Каждый день мы используем его имя как единицу — частота Wi-Fi (2,4 ГГц / 5 ГГц), тактовая частота процессора (например, 3,5 ГГц) и радиостанции выражаются в герцах.',
]

const factsUk = [
  'Після демонстрації радіохвиль Герц заявив, що не бачить жодного практичного застосування для цього відкриття. Менш ніж через десятиліття Гульєльмо Марконі використав ці хвилі для винаходу радіозв\'язку.',
  'Герц помер у віці лише 36 років від гранулематозу з поліангіїтом (автоімунне захворювання). Його племінник Густав Герц згодом отримав Нобелівську премію з фізики (1925).',
  'Щодня ми використовуємо його ім\'я як одиницю — частота Wi-Fi (2,4 ГГц / 5 ГГц), тактова частота процесора (наприклад, 3,5 ГГц) і радіостанції виражаються в герцах.',
]

const activeFacts = computed(() => {
  if (locale.value === 'ru') return factsRu
  if (locale.value === 'uk') return factsUk
  return factsSk
})
</script>
