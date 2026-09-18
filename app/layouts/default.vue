<template>
  <div class="min-h-screen flex flex-col bg-white">

    <!-- Navigation -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav aria-label="Hlavná navigácia" class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        <NuxtLink :to="localePath('index')" class="flex items-center gap-2.5 shrink-0 group">
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="navLogoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#0ea5e9"/>
                <stop offset="100%" stop-color="#10b981"/>
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#navLogoGrad)"/>
            <circle cx="32" cy="32" r="5.5" fill="white"/>
            <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92"/>
            <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92" transform="rotate(60 32 32)"/>
            <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92" transform="rotate(-60 32 32)"/>
          </svg>
          <span class="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">Náuka Portál</span>
        </NuxtLink>

        <ul class="hidden md:flex items-center gap-1 flex-1">
          <li v-for="item in navItems" :key="item.labelKey">
            <NuxtLink
              :to="localePath(item.to)"
              class="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              active-class="bg-gray-100 text-gray-900"
            >
              {{ $t(item.labelKey) }}
            </NuxtLink>
          </li>
        </ul>

        <div class="flex items-center gap-1">
          <!-- Prepínač jazykov -->
          <LanguageSwitcher />

          <!-- Search button -->
          <button
            type="button"
            data-testid="search-trigger"
            class="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            @click="searchModal?.open()"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
            <span class="hidden sm:inline">{{ $t('nav.search') }}</span>
            <kbd class="hidden md:inline-flex items-center text-xs border border-gray-300 rounded px-1 py-0.5 text-gray-400">Ctrl K</kbd>
          </button>
        </div>

        <!-- <NuxtLink
          to="/matematika"
          class="shrink-0 hidden sm:block px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
        >
          Začať sa učiť
        </NuxtLink> -->

      </nav>
    </header>

    <SearchModal ref="searchModal" />

    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400">
      <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#0ea5e9"/>
                  <stop offset="100%" stop-color="#10b981"/>
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="16" fill="url(#footerLogoGrad)"/>
              <circle cx="32" cy="32" r="5.5" fill="white"/>
              <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92"/>
              <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92" transform="rotate(60 32 32)"/>
              <ellipse cx="32" cy="32" rx="26" ry="9" fill="none" stroke="white" stroke-width="2.2" opacity="0.92" transform="rotate(-60 32 32)"/>
            </svg>
            <span class="text-white font-bold">Náuka Portál</span>
          </div>
          <p class="text-sm leading-relaxed">{{ $t('footer.tagline') }}</p>
        </div>
        <div>
          <p class="text-white text-sm font-semibold mb-3">{{ $t('footer.subjects_title') }}</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink :to="localePath('matematika')" class="hover:text-white transition-colors">{{ $t('subjects.math') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('fyzika')" class="hover:text-white transition-colors">{{ $t('subjects.physics') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('chemia')" class="hover:text-white transition-colors">{{ $t('subjects.chemistry') }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="text-white text-sm font-semibold mb-3">{{ $t('footer.for_whom_title') }}</p>
          <ul class="space-y-2 text-sm">
            <li>{{ $t('footer.students_primary') }}</li>
            <li>{{ $t('footer.students_secondary') }}</li>
            <li>{{ $t('footer.everyone') }}</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-600">
          © {{ new Date().getFullYear() }} Náuka Portál. {{ $t('footer.rights') }}
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const localePath = useLocalePath()

// Named routes podľa Nuxt file-based routing (pages/matematika/index.vue → 'matematika')
const navItems = [
  { to: 'matematika', labelKey: 'subjects.math' },
  { to: 'fyzika', labelKey: 'subjects.physics' },
  { to: 'chemia', labelKey: 'subjects.chemistry' },
]

const searchModal = ref(null)
</script>
