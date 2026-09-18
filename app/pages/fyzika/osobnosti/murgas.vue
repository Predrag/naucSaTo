<template>
  <div class="max-w-3xl mx-auto px-4 py-12">

    <nav data-testid="breadcrumb" aria-label="Navigačná cesta" class="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
      <NuxtLink to="/fyzika" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPhysics }}</NuxtLink>
      <span>/</span>
      <NuxtLink to="/fyzika/osobnosti" class="hover:text-emerald-600 transition-colors">{{ pc.breadcrumbPersonalities }}</NuxtLink>
      <span>/</span>
      <span class="text-gray-700 font-medium">Jozef Murgaš</span>
    </nav>

    <div class="bg-green-700 rounded-2xl p-8 mb-8 text-white flex flex-col sm:flex-row items-start gap-6">
      <span class="text-7xl">📻</span>
      <div>
        <h1 class="text-4xl font-extrabold mb-1">Jozef Murgaš</h1>
        <p class="text-green-100 text-lg mb-4">{{ pc.subtitle }}</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <span class="bg-white/20 rounded-full px-3 py-1">🗓 1864 – 1929</span>
          <span class="bg-white/20 rounded-full px-3 py-1">🇸🇰 Tajov, {{ pc.slovakia }}</span>
          <span class="bg-white/20 rounded-full px-3 py-1">📡 {{ pc.tagWireless }}</span>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
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
          <span class="w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="text-gray-700 leading-relaxed text-sm">{{ fact }}</p>
        </div>
      </div>
    </section>

    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <p class="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-3">{{ pc.wikiLabel }}</p>
      <a
        href="https://sk.wikipedia.org/wiki/Jozef_Murgaš" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline">
        {{ pc.wikiLink }}
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const pageContent = {
  sk: {
    breadcrumbPhysics: '⚡ Fyzika',
    breadcrumbPersonalities: 'Osobnosti fyziky',
    subtitle: 'Vynálezca, kňaz, maliar a botanik',
    slovakia: 'Slovensko',
    tagWireless: 'Bezdrôtová telegrafia',
    intro: 'Jozef Murgaš sa narodil <strong>17. februára 1864</strong> v Tajove pri Banskej Bystrici. Rímskokatolícky kňaz, maliar a botanik bol zároveň priekopníkom bezdrôtovej komunikácie. V roku 1904 si patentoval kľúčové vylepšenia bezdrôtovej telegrafie a v roku 1905 údajne preniesol prvé hovorené slovo pomocou rádiových vĺn. Finančné problémy ho donútili predať patenty Marconimu. Zomrel <strong>26. marca 1929</strong> vo Wilkes-Barre v Pensylvánii, USA.',
    contributionsTitle: 'Hlavné prínosy vede',
    factsTitle: 'Zaujímavosti',
    contributions: [
      {
        icon: '📡',
        title: 'Tónový systém bezdrôtovej telegrafie (1904)',
        description: 'Patentoval systém bezdrôtovej telegrafie využívajúci hudobné tóny namiesto jednoduchých kliknutí — umožňoval rýchlejší a spoľahlivejší prenos správ. Získal dva patenty v USA (č. 750 429 a č. 750 430).',
      },
      {
        icon: '🗣️',
        title: 'Prvý prenos hovoreného slova rádiovými vlnami (1905)',
        description: 'Dňa 27. apríla 1905 údajne preniesol prvé hovorené slovo pomocou elektromagnetických vĺn — pred Fessendenom, ktorý je bežne za toto pripisovaný. Historické záznamy sú predmetom diskusií.',
      },
      {
        icon: '🎨',
        title: 'Maliarstvo a botanika',
        description: 'Bol uznávaným maliarom krajiniek a portétov. Venoval sa aj botanike — objavil niekoľko nových druhov rastlín v okolí Pensylvánie, kde pôsobil ako farár.',
      },
    ],
    facts: [
      'Murgaš bol skutočným renesančným človekom — súčasne kňazom, maliarom, botanikom a vynálezcom. Keď emigroval do USA, jeho obrazy sa predávali popri patentoch na rádiové zariadenia.',
      'Finančná tieseň ho donútila predať všetky svoje patenty Guglielmu Marconimu. Práve preto dnes slávu za rozvoj rádia nesie Marconi, nie Murgaš. Príbeh zabudnutého vynálezcu, ktorého objavenie prišlo neskoro.',
      'V jeho rodnom Tajove pri Banskej Bystrici stojí pamätník. V americkom Wilkes-Barre, kde pôsobil ako farár a vynálezca, je po ňom pomenovaná ulica a škola.',
    ],
    wikiLabel: 'Odkaz na Wikipédiu',
    wikiLink: 'Jozef Murgaš na sk.wikipedia.org →',
  },
  ru: {
    breadcrumbPhysics: '⚡ Физика',
    breadcrumbPersonalities: 'Личности физики',
    subtitle: 'Изобретатель, священник, художник и ботаник',
    slovakia: 'Словакия',
    tagWireless: 'Беспроводная телеграфия',
    intro: 'Йозеф Мургаш родился <strong>17 февраля 1864 года</strong> в Тайове близ Банской Быстрицы. Римско-католический священник, художник и ботаник был также пионером беспроводной связи. В 1904 году он запатентовал ключевые усовершенствования беспроводной телеграфии, а в 1905 году предположительно передал первое произнесённое слово с помощью радиоволн. Финансовые трудности вынудили его продать патенты Маркони. Умер <strong>26 марта 1929 года</strong> в Уилкс-Барре, Пенсильвания, США.',
    contributionsTitle: 'Главные вклады в науку',
    factsTitle: 'Интересные факты',
    contributions: [
      {
        icon: '📡',
        title: 'Тональная система беспроводной телеграфии (1904)',
        description: 'Запатентовал систему беспроводной телеграфии, использующую музыкальные тоны вместо простых щелчков — это позволяло быстрее и надёжнее передавать сообщения. Получил два патента в США (№ 750 429 и № 750 430).',
      },
      {
        icon: '🗣️',
        title: 'Первая передача произнесённого слова по радиоволнам (1905)',
        description: '27 апреля 1905 года предположительно передал первое произнесённое слово с помощью электромагнитных волн — раньше Фессендена, которому обычно приписывают это достижение. Исторические записи являются предметом дискуссий.',
      },
      {
        icon: '🎨',
        title: 'Живопись и ботаника',
        description: 'Был признанным художником пейзажей и портретов. Занимался также ботаникой — открыл несколько новых видов растений в окрестностях Пенсильвании, где служил приходским священником.',
      },
    ],
    facts: [
      'Мургаш был настоящим человеком эпохи Возрождения — одновременно священником, художником, ботаником и изобретателем. Когда он эмигрировал в США, его картины продавались наряду с патентами на радиооборудование.',
      'Финансовые трудности вынудили его продать все свои патенты Гульельмо Маркони. Именно поэтому сегодня славу за развитие радио несёт Маркони, а не Мургаш. История забытого изобретателя, открытие которого пришло слишком поздно.',
      'В его родном Тайове близ Банской Быстрицы стоит памятник. В американском Уилкс-Барре, где он служил священником и работал изобретателем, его именем названы улица и школа.',
    ],
    wikiLabel: 'Ссылка на Википедию',
    wikiLink: 'Йозеф Мургаш на sk.wikipedia.org →',
  },
  uk: {
    breadcrumbPhysics: '⚡ Фізика',
    breadcrumbPersonalities: 'Особистості фізики',
    subtitle: 'Винахідник, священник, художник і ботанік',
    slovakia: 'Словаччина',
    tagWireless: 'Бездротова телеграфія',
    intro: 'Йозеф Мургаш народився <strong>17 лютого 1864 року</strong> в Тайові поблизу Банської Бистриці. Римсько-католицький священник, художник і ботанік був також піонером бездротового зв\'язку. У 1904 році він запатентував ключові вдосконалення бездротової телеграфії, а в 1905 році нібито передав перше вимовлене слово за допомогою радіохвиль. Фінансові труднощі змусили його продати патенти Марконі. Помер <strong>26 березня 1929 року</strong> у Вілкс-Баррі, Пенсільванія, США.',
    contributionsTitle: 'Головні внески в науку',
    factsTitle: 'Цікаві факти',
    contributions: [
      {
        icon: '📡',
        title: 'Тональна система бездротової телеграфії (1904)',
        description: 'Запатентував систему бездротової телеграфії, яка використовує музичні тони замість простих клацань — це дозволяло швидше і надійніше передавати повідомлення. Отримав два патенти в США (№ 750 429 і № 750 430).',
      },
      {
        icon: '🗣️',
        title: 'Перша передача вимовленого слова радіохвилями (1905)',
        description: '27 квітня 1905 року нібито передав перше вимовлене слово за допомогою електромагнітних хвиль — раніше за Фессендена, якому зазвичай приписують це досягнення. Історичні записи є предметом дискусій.',
      },
      {
        icon: '🎨',
        title: 'Живопис і ботаніка',
        description: 'Був визнаним художником пейзажів і портретів. Займався також ботанікою — відкрив кілька нових видів рослин у околицях Пенсільванії, де служив парафіяльним священником.',
      },
    ],
    facts: [
      'Мургаш був справжньою людиною доби Відродження — одночасно священником, художником, ботаніком і винахідником. Коли він емігрував до США, його картини продавалися поряд із патентами на радіообладнання.',
      'Фінансова скрута змусила його продати всі свої патенти Гульєльмо Марконі. Саме тому сьогодні славу за розвиток радіо несе Марконі, а не Мургаш. Історія забутого винахідника, відкриття якого прийшло надто пізно.',
      'У його рідному Тайові поблизу Банської Бистриці стоїть пам\'ятник. В американському Вілкс-Баррі, де він служив священником і працював винахідником, його іменем названо вулицю і школу.',
    ],
    wikiLabel: 'Посилання на Вікіпедію',
    wikiLink: 'Йозеф Мургаш на sk.wikipedia.org →',
  },
}

const pc = computed(() => pageContent[locale.value as keyof typeof pageContent] ?? pageContent.sk)
</script>
