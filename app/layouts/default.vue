<template>
  <div class="min-h-screen flex flex-col bg-white">

    <!-- Navigation -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#14BF96"/>
            <path d="M8 22L16 10L24 22H8Z" fill="white" opacity="0.9"/>
          </svg>
          <span class="text-lg font-bold text-gray-900">NaučSaTo</span>
        </NuxtLink>

        <ul class="hidden md:flex items-center gap-1 flex-1">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              active-class="bg-gray-100 text-gray-900"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          to="/matematika"
          class="shrink-0 px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
        >
          Začať sa učiť
        </NuxtLink>

      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400">
      <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#14BF96"/>
              <path d="M8 22L16 10L24 22H8Z" fill="white" opacity="0.9"/>
            </svg>
            <span class="text-white font-bold">NaučSaTo</span>
          </div>
          <p class="text-sm leading-relaxed">
            Bezplatné vzdelávacie materiály z prírodných vied pre žiakov ZŠ a SŠ na Slovensku.
          </p>
        </div>
        <div>
          <p class="text-white text-sm font-semibold mb-3">Predmety</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/matematika" class="hover:text-white transition-colors">Matematika</NuxtLink></li>
            <li><NuxtLink to="/fyzika" class="hover:text-white transition-colors">Fyzika</NuxtLink></li>
            <li><NuxtLink to="/chemia" class="hover:text-white transition-colors">Chémia</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="text-white text-sm font-semibold mb-3">Pre koho?</p>
          <ul class="space-y-2 text-sm">
            <li>Žiaci základných škôl</li>
            <li>Žiaci stredných škôl</li>
            <li>Každý, kto sa chce učiť</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-600">
          © {{ new Date().getFullYear() }} NaučSaTo. Všetky práva vyhradené.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const navItems = [
  { to: '/matematika', label: 'Matematika' },
  { to: '/fyzika', label: 'Fyzika' },
  { to: '/chemia', label: 'Chémia' },
]
</script>
