<template>
  <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">

    <!-- SVG canvas -->
    <div class="bg-gray-50 relative">
      <svg :viewBox="`0 0 ${W} ${H}`" class="w-full select-none" :aria-label="stepLabel">
        <defs>
          <marker id="va-a" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#3B82F6"/></marker>
          <marker id="va-b" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#8B5CF6"/></marker>
          <marker id="va-r" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#10B981"/></marker>
        </defs>

        <!-- Ľahká mriežka -->
        <g stroke="#E5E7EB" stroke-width="1">
          <line v-for="x in gridX" :key="`gx${x}`" :x1="x" y1="0" :x2="x" :y2="H"/>
          <line v-for="y in gridY" :key="`gy${y}`" x1="0" :y1="y" :x2="W" :y2="y"/>
        </g>

        <!-- Osi -->
        <line :x1="ox - 10" :y1="oy" :x2="W - 20" :y2="oy" stroke="#9CA3AF" stroke-width="1.5"/>
        <line :x1="ox" :y1="25" :x2="ox" :y2="H - 10" stroke="#9CA3AF" stroke-width="1.5"/>
        <text :x="W - 18" :y="oy + 14" fill="#9CA3AF" font-size="12">x</text>
        <text :x="ox + 5" y="22" fill="#9CA3AF" font-size="12">y</text>

        <!-- Vektor A -->
        <line
          :x1="ox" :y1="oy" :x2="aEx" :y2="aEy"
          stroke="#3B82F6" stroke-width="3" marker-end="url(#va-a)"
          :style="styleA"/>
        <VecLabel
          letter="A"
          :x="(ox + aEx) / 2 + labelOff(aAngle).dx"
          :y="(oy + aEy) / 2 + labelOff(aAngle).dy"
          color="#3B82F6" :font-size="14"/>

        <!-- Vektor B (začína na konci A) -->
        <line
          :x1="aEx" :y1="aEy" :x2="bEx" :y2="bEy"
          stroke="#8B5CF6" stroke-width="3" marker-end="url(#va-b)"
          :style="{ ...styleB, opacity: phase >= 2 ? 1 : 0 }"/>
        <VecLabel
v-if="phase >= 2"
          letter="B"
          :x="(aEx + bEx) / 2 + labelOff(bAngle).dx"
          :y="(aEy + bEy) / 2 + labelOff(bAngle).dy"
          color="#8B5CF6" :font-size="14"/>

        <!-- Výslednica R -->
        <line
          :x1="ox" :y1="oy" :x2="bEx" :y2="bEy"
          stroke="#10B981" stroke-width="3" marker-end="url(#va-r)"
          :style="{ ...styleR, opacity: phase >= 3 ? 1 : 0 }"/>
        <VecLabel
v-if="phase >= 3"
          letter="R"
          :x="(ox + bEx) / 2 + labelOff(Math.atan2(oy - bEy, bEx - ox) * 180 / Math.PI).dx"
          :y="(oy + bEy) / 2 + labelOff(Math.atan2(oy - bEy, bEx - ox) * 180 / Math.PI).dy"
          color="#10B981" :font-size="14"/>

        <!-- Info: veľkosť výslednice — VecLabel + text vedľa -->
        <g v-if="phase >= 3">
          <text :x="W - 10" y="22" fill="#10B981" font-size="12" text-anchor="end" font-weight="bold">
            | = {{ rDisplay }}
          </text>
          <VecLabel letter="R" :x="W - 52" :y="22" color="#10B981" :font-size="12"/>
        </g>
      </svg>

      <!-- Stavový popis (krok animácie) -->
      <div class="absolute top-3 left-3 text-xs font-semibold text-gray-500 bg-white/80 rounded-lg px-2 py-1">
        {{ stepLabel }}
      </div>
    </div>

    <!-- Dynamická rovnica -->
    <div class="px-5 py-4 bg-emerald-50 border-t border-b border-emerald-100">
      <p class="text-xs font-semibold text-emerald-700 mb-1 text-center uppercase tracking-wide">Veľkosť výslednice</p>
      <MathFormula display :formula="generalFormula" />
      <MathFormula display :formula="substitutedFormula" />
    </div>

    <!-- Ovládacie prvky -->
    <div class="p-5 space-y-4">

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <!-- Vektor A -->
        <div>
          <p class="text-sm font-bold text-blue-700 mb-2">
            Vektor <MathFormula formula="\vec{A}" /> — veľkosť: {{ aLen }}, uhol: {{ aAngle }}°
          </p>
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-400 w-16 shrink-0">Veľkosť</span>
              <input v-model.number="aLen" type="range" min="40" max="130" class="flex-1 accent-blue-500" @input="onSlider">
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-400 w-16 shrink-0">Uhol</span>
              <input v-model.number="aAngle" type="range" min="-75" max="75" class="flex-1 accent-blue-500" @input="onSlider">
            </div>
          </div>
        </div>

        <!-- Vektor B -->
        <div>
          <p class="text-sm font-bold text-purple-700 mb-2">
            Vektor <MathFormula formula="\vec{B}" /> — veľkosť: {{ bLen }}, uhol: {{ bAngle }}°
          </p>
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-400 w-16 shrink-0">Veľkosť</span>
              <input v-model.number="bLen" type="range" min="40" max="130" class="flex-1 accent-purple-500" @input="onSlider">
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-400 w-16 shrink-0">Uhol</span>
              <input v-model.number="bAngle" type="range" min="-75" max="75" class="flex-1 accent-purple-500" @input="onSlider">
            </div>
          </div>
        </div>
      </div>

      <!-- Tlačidlá -->
      <div class="flex flex-wrap gap-3 pt-1">
        <button
type="button"
          class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50"
          :disabled="animating"
          @click="runAnimation">
          <span>{{ animating ? '⏳' : '▶' }}</span>
          {{ animating ? 'Animujem…' : 'Animovať' }}
        </button>
        <button
type="button"
          class="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
          @click="showAll">
          Zobraziť všetko
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// ── Rozmery SVG ───────────────────────────────────────────────────────────────
const W = 420
const H = 280
const ox = 80
const oy = 200

// ── Stav sliderov ─────────────────────────────────────────────────────────────
const aLen   = ref(110)
const aAngle = ref(35)
const bLen   = ref(90)
const bAngle = ref(-20)
const phase  = ref(3)
const animating = ref(false)

// ── Dash offsets (null = čiara plne viditeľná bez dasharray) ─────────────────
const dashA = ref<number | null>(null)
const dashB = ref<number | null>(null)
const dashR = ref<number | null>(null)

// ── Mriežka ───────────────────────────────────────────────────────────────────
const gridX = Array.from({ length: 10 }, (_, i) => (i + 1) * 40)
const gridY = Array.from({ length: 7 },  (_, i) => (i + 1) * 40)

// ── Súradnice ─────────────────────────────────────────────────────────────────
const toRad = (d: number) => d * Math.PI / 180

const aEx = computed(() => ox + aLen.value * Math.cos(toRad(aAngle.value)))
const aEy = computed(() => oy - aLen.value * Math.sin(toRad(aAngle.value)))
const bEx = computed(() => aEx.value + bLen.value * Math.cos(toRad(bAngle.value)))
const bEy = computed(() => aEy.value - bLen.value * Math.sin(toRad(bAngle.value)))

const rLen     = computed(() => Math.hypot(bEx.value - ox, bEy.value - oy))
const rDisplay = computed(() => rLen.value.toFixed(1))

// ── Dynamická rovnica ─────────────────────────────────────────────────────────
const alphaDeg = computed(() => Math.round(aAngle.value - bAngle.value))

const generalFormula = computed(() =>
  'R = \\sqrt{A^2 + B^2 + 2 \\cdot A \\cdot B \\cdot \\cos\\alpha}',
)

const substitutedFormula = computed(() => {
  const a     = aLen.value
  const b     = bLen.value
  const alpha = alphaDeg.value
  const inner = Math.round(a ** 2 + b ** 2 + 2 * a * b * Math.cos(alpha * Math.PI / 180))
  const r     = rLen.value.toFixed(1)
  return `= \\sqrt{${a}^2 + ${b}^2 + 2 \\cdot ${a} \\cdot ${b} \\cdot \\cos ${alpha}°} = \\sqrt{${inner}} \\approx ${r}`
})

// ── Štýly čiar (stroke-dasharray + stroke-dashoffset) ─────────────────────────
const styleA = computed(() =>
  dashA.value === null ? {} : { strokeDasharray: aLen.value, strokeDashoffset: dashA.value },
)
const styleB = computed(() =>
  dashB.value === null ? {} : { strokeDasharray: bLen.value, strokeDashoffset: dashB.value },
)
const styleR = computed(() =>
  dashR.value === null ? {} : { strokeDasharray: rLen.value, strokeDashoffset: dashR.value },
)

// ── Label offset ──────────────────────────────────────────────────────────────
function labelOff(angleDeg: number) {
  const rad  = toRad(angleDeg)
  const perp = rad + Math.PI / 2
  return { dx: Math.cos(perp) * 14, dy: -Math.sin(perp) * 14 }
}

// ── Popis kroku ───────────────────────────────────────────────────────────────
const stepLabel = computed(() => {
  if (phase.value === 1) return 'Krok 1: Nakreslíme vektor A⃗'
  if (phase.value === 2) return 'Krok 2: Na koniec A⃗ pripojíme B⃗'
  if (phase.value === 3) return 'Krok 3: Výslednica R⃗ = A⃗ + B⃗'
  return ''
})

// ── Animácia pomocou requestAnimationFrame (spoľahlivé v SSR + Nuxt) ──────────
function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2
}

function tweenDash(
  dashRef: ReturnType<typeof ref<number | null>>,
  fromLen: number,
  duration: number,
): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now()
    dashRef.value = fromLen

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1)
      dashRef.value = fromLen * (1 - easeInOutSine(t))
      if (t < 1) {
        requestAnimationFrame(tick)
      }
      else {
        dashRef.value = null
        resolve()
      }
    }

    requestAnimationFrame(tick)
  })
}

// ── Hlavná animácia ───────────────────────────────────────────────────────────
async function runAnimation() {
  if (animating.value) return
  animating.value = true

  // Reset
  dashA.value = aLen.value
  dashB.value = bLen.value
  dashR.value = rLen.value
  phase.value = 1

  await tweenDash(dashA, aLen.value, 700)

  phase.value = 2
  await tweenDash(dashB, bLen.value, 700)

  phase.value = 3
  await tweenDash(dashR, rLen.value, 700)

  animating.value = false
}

function showAll() {
  phase.value = 3
  dashA.value = null
  dashB.value = null
  dashR.value = null
}

function onSlider() {
  dashA.value = null
  dashB.value = null
  dashR.value = null
}
</script>
