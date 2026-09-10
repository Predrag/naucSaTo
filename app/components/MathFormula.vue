<!-- eslint-disable vue/no-v-html -->
<template>
  <span
    :class="display ? 'flex justify-center my-3' : 'inline'"
    v-html="rendered"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import katex from 'katex'

const props = defineProps<{
  formula: string
  display?: boolean
}>()

const rendered = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      displayMode: props.display ?? false,
      throwOnError: false,
      output: 'html',
    })
  }
  catch {
    return props.formula
  }
})
</script>
