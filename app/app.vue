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

const siteUrl = 'https://naukaportal.netlify.app'
const defaultTitle = 'Náuka Portál — Fyzika, Matematika, Chémia'
const defaultDesc = 'Bezplatné vysvetlenia, príklady a cvičenia z fyziky, matematiky a chémie pre žiakov ZŠ a SŠ na Slovensku. Bez registrácie, zadarmo.'

useHead({
  htmlAttrs: { lang: 'sk' },
  title: defaultTitle,
  meta: [
    { name: 'description', content: defaultDesc },
    { name: 'author', content: 'Náuka Portál' },
    { name: 'google-site-verification', content: 'DM4SOAhw4ZGj85maPvUWrcUwKse8tQ7XROv3TVt74nw' },
    { name: 'keywords', content: 'fyzika, matematika, chémia, gymnázium, stredná škola, ZŠ, vzdelávanie, učenie, bezplatné, online, Slovensko, mechanika, kinematika, elektrina, optika, atómová fyzika, vzorce, príklady' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Náuka Portál' },
    { property: 'og:title', content: defaultTitle },
    { property: 'og:description', content: defaultDesc },
    { property: 'og:url', content: siteUrl },
    { property: 'og:locale', content: 'sk_SK' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: defaultTitle },
    { name: 'twitter:description', content: defaultDesc },
  ],
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
})
</script>
