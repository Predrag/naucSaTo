<template>
  <div class="relative" ref="container">
    <button
      type="button"
      class="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      :aria-label="`Jazyk: ${currentLang.label}`"
      @click="isOpen = !isOpen"
    >
      <span class="text-base leading-none">{{ currentLang.flag }}</span>
      <span class="hidden sm:inline font-medium">{{ currentLang.label }}</span>
      <svg class="w-3 h-3 text-gray-400 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-[300] min-w-[150px]"
      >
        <!-- Docs: useSwitchLocalePath() cez NuxtLink -->
        <NuxtLink
          v-for="lang in langs"
          :key="lang.code"
          :to="switchLocalePath(lang.code)"
          class="flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors hover:bg-gray-50"
          :class="locale === lang.code ? 'text-teal-700 bg-teal-50 font-semibold' : 'text-gray-700'"
          @click="isOpen = false"
        >
          <span class="text-base leading-none">{{ lang.flag }}</span>
          <span>{{ lang.label }}</span>
          <svg v-if="locale === lang.code" class="w-3.5 h-3.5 ml-auto text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const container = ref<HTMLElement | null>(null)

const langs = [
  { code: 'sk', flag: '🇸🇰', label: 'Slovenský' },
  { code: 'ru', flag: '🇷🇺', label: 'Ruský' },
  { code: 'uk', flag: '🇺🇦', label: 'Ukrajinský' },
]

const currentLang = computed(() => langs.find(l => l.code === locale.value) ?? langs[0])


function onClickOutside(e: MouseEvent) {
  if (container.value && !container.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside, true))
onUnmounted(() => document.removeEventListener('click', onClickOutside, true))
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}
</style>
