<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">⚡ {{ pc.navFyzika }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Isaac Newton</span>
    </nav>

    <div class="bg-emerald-600 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">🍎</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Isaac Newton</h1>
        <p class="text-emerald-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1643 – 1727</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.country }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">{{ pc.unit }}</span>
        </div>
      </div>
    </div>

    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
      <p class="text-gray-700 leading-relaxed" v-html="pc.bio"></p>
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
          <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
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
      <span class="text-4xl font-bold font-mono text-emerald-600 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center">N</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    navFyzika: 'Fyzika',
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Anglický fyzik a matematik',
    country: '🇬🇧 Anglicko',
    unit: '📐 Jednotka: newton (N)',
    bio: 'Sir Isaac Newton bol jeden z najvplyvnejších vedcov v dejinách ľudstva. Narodil sa <strong>4. januára 1643</strong> v Woolsthorpe v Anglicku. Sformuloval tri základné zákony pohybu, zákon všeobecnej gravitácie a spoločne s Leibnizom objavil diferenciálny a integrálny počet. Zomrel <strong>20. marca 1727</strong> v Londýne.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    siLabel: 'Jednotka SI',
    siName: 'newton (N) — jednotka sily',
    siDesc: '1 N = 1 kg·m/s² — sila, ktorá udeľuje 1 kg zrýchlenie 1 m/s²',
    contributions: [
      {
        icon: '🔵',
        title: 'Tri zákony pohybu',
        description: 'Základ klasickej mechaniky — zákon zotrvačnosti, zákon sily (F = ma) a zákon akcie a reakcie.',
      },
      {
        icon: '🌍',
        title: 'Zákon všeobecnej gravitácie',
        description: 'Každé dve telesá sa navzájom priťahujú silou úmernou súčinu ich hmotností a nepriamo úmernou štvorcu ich vzdialenosti.',
      },
      {
        icon: '∫',
        title: 'Diferenciálny a integrálny počet',
        description: 'Nezávisle od Leibniza vyvinul matematický aparát, bez ktorého by moderná fyzika nemohla existovať.',
      },
      {
        icon: '🔭',
        title: 'Optika a prvý zrkadlový ďalekohľad',
        description: 'Dokázal, že biele svetlo sa skladá zo všetkých farieb spektra. V roku 1668 skonštruoval prvý praktický zrkadlový ďalekohľad.',
      },
    ],
    facts: [
      'Jeho „zázračný rok" (1665–1666) — keď sa izoloval kvôli moru — priniesol jeho najdôležitejšie objavy: gravitáciu, diferenciálny počet aj optiku, všetko pred dovŕšením 26 rokov.',
      'Newton sa tajne venoval alchýmii a snažil sa nájsť „kameň mudrcov". Po jeho smrti bolo v jeho tele nájdené veľké množstvo ortuti — pravdepodobne z alchymistických pokusov.',
      'Okrem vedy pôsobil ako člen parlamentu, riaditeľ Kráľovskej mincovne a predseda Kráľovskej spoločnosti — výnimočná kombinácia vedeckých aj verejných rolí.',
    ],
  },
  ru: {
    navFyzika: 'Физика',
    breadcrumbPersonalities: 'Выдающиеся физики',
    subtitle: 'Английский физик и математик',
    country: '🇬🇧 Англия',
    unit: '📐 Единица: ньютон (Н)',
    bio: 'Сэр Исаак Ньютон был одним из наиболее влиятельных учёных в истории человечества. Он родился <strong>4 января 1643 года</strong> в Вулсторпе, Англия. Сформулировал три основных закона движения, закон всемирного тяготения и совместно с Лейбницем открыл дифференциальное и интегральное исчисление. Умер <strong>20 марта 1727 года</strong> в Лондоне.',
    contributionsTitle: 'Главные вклады в науку',
    factsTitle: 'Интересные факты',
    siLabel: 'Единица СИ',
    siName: 'ньютон (Н) — единица силы',
    siDesc: '1 Н = 1 кг·м/с² — сила, придающая телу массой 1 кг ускорение 1 м/с²',
    contributions: [
      {
        icon: '🔵',
        title: 'Три закона движения',
        description: 'Основа классической механики — закон инерции, закон силы (F = ma) и закон действия и противодействия.',
      },
      {
        icon: '🌍',
        title: 'Закон всемирного тяготения',
        description: 'Любые два тела притягиваются друг к другу с силой, пропорциональной произведению их масс и обратно пропорциональной квадрату расстояния между ними.',
      },
      {
        icon: '∫',
        title: 'Дифференциальное и интегральное исчисление',
        description: 'Независимо от Лейбница разработал математический аппарат, без которого современная физика не могла бы существовать.',
      },
      {
        icon: '🔭',
        title: 'Оптика и первый зеркальный телескоп',
        description: 'Доказал, что белый свет состоит из всех цветов спектра. В 1668 году сконструировал первый практический зеркальный телескоп.',
      },
    ],
    facts: [
      'Его «чудесный год» (1665–1666) — когда он изолировался из-за чумы — принёс его важнейшие открытия: гравитацию, дифференциальное исчисление и оптику, — всё это до достижения 26 лет.',
      'Ньютон тайно занимался алхимией и пытался найти «философский камень». После его смерти в его теле было обнаружено большое количество ртути — вероятно, из алхимических опытов.',
      'Помимо науки, он был членом парламента, директором Королевского монетного двора и президентом Королевского общества — исключительное сочетание научных и общественных ролей.',
    ],
  },
  uk: {
    navFyzika: 'Фізика',
    breadcrumbPersonalities: 'Видатні фізики',
    subtitle: 'Англійський фізик і математик',
    country: '🇬🇧 Англія',
    unit: '📐 Одиниця: ньютон (Н)',
    bio: 'Сер Ісаак Ньютон був одним з найвпливовіших вчених в історії людства. Він народився <strong>4 січня 1643 року</strong> у Вулсторпі, Англія. Сформулював три основні закони руху, закон всесвітнього тяжіння і разом з Лейбніцем відкрив диференціальне та інтегральне числення. Помер <strong>20 березня 1727 року</strong> в Лондоні.',
    contributionsTitle: 'Головні внески у науку',
    factsTitle: 'Цікаві факти',
    siLabel: 'Одиниця СІ',
    siName: 'ньютон (Н) — одиниця сили',
    siDesc: '1 Н = 1 кг·м/с² — сила, що надає тілу масою 1 кг прискорення 1 м/с²',
    contributions: [
      {
        icon: '🔵',
        title: 'Три закони руху',
        description: 'Основа класичної механіки — закон інерції, закон сили (F = ma) та закон дії і протидії.',
      },
      {
        icon: '🌍',
        title: 'Закон всесвітнього тяжіння',
        description: 'Будь-які два тіла притягуються одне до одного з силою, пропорційною добутку їхніх мас і обернено пропорційною квадрату відстані між ними.',
      },
      {
        icon: '∫',
        title: 'Диференціальне та інтегральне числення',
        description: 'Незалежно від Лейбніца розробив математичний апарат, без якого сучасна фізика не могла б існувати.',
      },
      {
        icon: '🔭',
        title: 'Оптика та перший дзеркальний телескоп',
        description: 'Довів, що біле світло складається з усіх кольорів спектра. У 1668 році сконструював перший практичний дзеркальний телескоп.',
      },
    ],
    facts: [
      'Його «чудесний рік» (1665–1666) — коли він ізолювався через чуму — приніс його найважливіші відкриття: гравітацію, диференціальне числення та оптику, — і все це до досягнення 26 років.',
      'Ньютон таємно займався алхімією і намагався знайти «філософський камінь». Після його смерті в його тілі було знайдено велику кількість ртуті — імовірно, з алхімічних дослідів.',
      'Окрім науки, він був членом парламенту, директором Королівського монетного двору та головою Королівського товариства — виняткове поєднання наукових і громадських ролей.',
    ],
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
