<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
        @click.self="close"
      >
        <Transition name="modal">
          <div v-if="isOpen" class="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

            <!-- Input -->
            <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
              </svg>
              <input
                ref="inputRef"
                v-model="query"
                type="text"
                placeholder="Vyhľadaj tému, vedca, jednotku…"
                class="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                @keydown.escape="close"
                @keydown.arrow-down.prevent="moveDown"
                @keydown.arrow-up.prevent="moveUp"
                @keydown.enter.prevent="selectActive"
              >
              <kbd class="hidden sm:inline-flex items-center gap-1 text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">Esc</kbd>
            </div>

            <!-- Results -->
            <ul v-if="results.length" class="max-h-80 overflow-y-auto py-2" role="listbox">
              <li
                v-for="(result, i) in results"
                :key="result.item.path"
                role="option"
                :aria-selected="i === activeIndex"
                :class="[
                  'flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors',
                  i === activeIndex ? 'bg-emerald-50' : 'hover:bg-gray-50',
                ]"
                @click="navigate(result.item.path)"
                @mouseenter="activeIndex = i"
              >
                <span class="mt-0.5 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full px-2 py-0.5 shrink-0 whitespace-nowrap">
                  {{ result.item.category }}
                </span>
                <div class="min-w-0">
                  <p class="font-semibold text-gray-900 text-sm truncate">{{ result.item.title }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ result.item.description }}</p>
                </div>
              </li>
            </ul>

            <!-- Empty state -->
            <div v-else-if="query" class="px-4 py-8 text-center text-gray-400 text-sm">
              Žiadne výsledky pre „{{ query }}"
            </div>

            <!-- Hint (no query) -->
            <div v-else class="px-4 py-4 flex flex-wrap gap-2">
              <button
                v-for="hint in hints"
                :key="hint"
                class="text-xs text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                @click="query = hint"
              >
                {{ hint }}
              </button>
            </div>

            <!-- Footer -->
            <div class="border-t border-gray-100 px-4 py-2 flex items-center gap-4 text-xs text-gray-400">
              <span><kbd class="border border-gray-200 rounded px-1">↑↓</kbd> navigácia</span>
              <span><kbd class="border border-gray-200 rounded px-1">Enter</kbd> otvoriť</span>
              <span><kbd class="border border-gray-200 rounded px-1">Esc</kbd> zavrieť</span>
            </div>

          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { searchIndex } from '~/utils/searchIndex'

const router = useRouter()
const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

const hints = ['Newton', 'SI jednotky', 'Petzval', 'Optika', 'Elektrina', 'Turbína']

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1.5 },
    { name: 'keywords', weight: 1 },
    { name: 'category', weight: 0.5 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
})

const results = computed(() =>
  query.value.trim().length < 2 ? [] : fuse.search(query.value).slice(0, 8),
)

watch(query, () => { activeIndex.value = 0 })

function open() {
  isOpen.value = true
  query.value = ''
  nextTick(() => inputRef.value?.focus())
}

function close() {
  isOpen.value = false
}

function moveDown() {
  if (results.value.length) activeIndex.value = (activeIndex.value + 1) % results.value.length
}

function moveUp() {
  if (results.value.length) activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length
}

function selectActive() {
  const active = results.value[activeIndex.value]
  if (active) navigate(active.item.path)
}

function navigate(path: string) {
  router.push(path)
  close()
}

// Ctrl+K / Cmd+K
function onKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value ? close() : open()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

defineExpose({ open, close })
</script>

<style scoped>
.backdrop-enter-active, .backdrop-leave-active { transition: opacity 0.15s ease; }
.backdrop-enter-from, .backdrop-leave-to { opacity: 0; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.97) translateY(-8px); }
</style>
