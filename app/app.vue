<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'katex/dist/katex.min.css'

useHead({
  htmlAttrs: { lang: 'sk' },
  title: 'NaučSaTo — Fyzika, Matematika, Chémia',
})
</script>
