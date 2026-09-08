<template>
  <g :transform="`translate(${x}, ${y})`">
    <!-- Šípka nad písmenom -->
    <line
      :x1="-hw" y1="-16" :x2="hw - 2" y2="-16"
      :stroke="color" stroke-width="1.3"
    />
    <polygon
      :points="`${hw - 4},-18.5 ${hw + 1},-16 ${hw - 4},-13.5`"
      :fill="color"
    />
    <!-- Písmeno -->
    <text
      x="0" y="0"
      :fill="color"
      :font-size="fontSize"
      font-weight="bold"
      text-anchor="middle"
    >{{ letter }}</text>
    <!-- Voliteľný prefix (napr. "−" pred písmenom) -->
  </g>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  letter: string   // napr. "A", "B", "R", "F"
  x: number
  y: number
  color: string
  fontSize?: number
}>()

const fontSize = computed(() => props.fontSize ?? 13)
// Polovica šírky šípky závisí od dĺžky textu
const hw = computed(() => props.letter.length * 3.5 + 3)
</script>
