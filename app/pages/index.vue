<template>
  <div>

    <!-- Hero -->
    <section class="bg-gradient-to-b from-teal-50 to-white py-24 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          Každý žiak si zaslúži<br>
          <span class="text-teal-600">skvelé vzdelanie.</span>
        </h1>
        <p class="text-lg text-gray-500 mb-10">
          Bezplatné vysvetlenia, príklady a cvičenia z matematiky, fyziky a chémie — pre žiakov ZŠ a SŠ.
        </p>
        <!-- <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink to="/matematika" class="px-7 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm text-base">
            Začať sa učiť
          </NuxtLink>
          <a href="#predmety" class="px-7 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors text-base">
            Zobraziť predmety
          </a>
        </div> -->

        <!-- Subject badges -->
        <div class="flex flex-wrap justify-center gap-3 mt-1">
          <span class="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium">📐 Matematika</span>
          <span class="flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium">⚡ Fyzika</span>
          <span class="flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium">🧪 Chémia</span>
        </div>
      </div>
    </section>

    <!-- Subject cards -->
    <section id="predmety" class="max-w-6xl mx-auto px-6 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Vyber si predmet</h2>
      <p class="text-gray-500 mb-8">Klikni na predmet a začni sa učiť hneď teraz.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <NuxtLink to="/matematika" class="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white">
          <div class="bg-blue-500 px-8 py-10 flex justify-center">
            <span class="text-6xl">📐</span>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Matematika</h3>
            <p class="text-sm text-gray-500 leading-relaxed flex-1">
              Zlomky, rovnice, geometria, funkcie — od základov po maturitu.
            </p>
            <span class="mt-5 text-sm font-semibold text-blue-600 group-hover:underline">Otvoriť predmet →</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/fyzika" class="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white">
          <div class="bg-emerald-500 px-8 py-10 flex justify-center">
            <span class="text-6xl">⚡</span>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Fyzika</h3>
            <p class="text-sm text-gray-500 leading-relaxed flex-1">
              Mechanika, elektrina, optika, teplo — fyzika z každodenného života.
            </p>
            <span class="mt-5 text-sm font-semibold text-emerald-600 group-hover:underline">Otvoriť predmet →</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/chemia" class="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white">
          <div class="bg-orange-500 px-8 py-10 flex justify-center">
            <span class="text-6xl">🧪</span>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Chémia</h3>
            <p class="text-sm text-gray-500 leading-relaxed flex-1">
              Prvky, reakcie, periodická tabuľka — chémia bez zbytočnej záhady.
            </p>
            <span class="mt-5 text-sm font-semibold text-orange-600 group-hover:underline">Otvoriť predmet →</span>
          </div>
        </NuxtLink>

      </div>
    </section>

    <!-- Why section -->
    <!-- <section class="border-t border-gray-100 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div class="flex gap-4 items-start">
          <div class="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg shrink-0">✓</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-1">Prehľadne a jednoducho</h4>
            <p class="text-sm text-gray-500 leading-relaxed">Vysvetlenia bez zbytočného žargónu, krok za krokom.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">🎓</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-1">Pre ZŠ aj SŠ</h4>
            <p class="text-sm text-gray-500 leading-relaxed">Obsah pre rôzne úrovne — od základov po maturitu.</p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">🆓</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-1">Úplne zadarmo</h4>
            <p class="text-sm text-gray-500 leading-relaxed">Bez registrácie, bez poplatkov. Hneď a pre každého.</p>
          </div>
        </div>

      </div>
    </section> -->

  </div>
</template>
