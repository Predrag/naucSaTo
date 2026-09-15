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
const ogImage = `${siteUrl}/og-image.svg`

const route = useRoute()
const canonicalUrl = computed(() => `${siteUrl}${route.path}`)

useHead({
  htmlAttrs: { lang: 'sk' },
  title: defaultTitle,
  meta: [
    { name: 'description', content: defaultDesc },
    { name: 'author', content: 'Náuka Portál' },
    { name: 'robots', content: 'index, follow' },
    { name: 'google-site-verification', content: 'DM4SOAhw4ZGj85maPvUWrcUwKse8tQ7XROv3TVt74nw' },
    { name: 'keywords', content: 'fyzika, matematika, chémia, gymnázium, stredná škola, ZŠ, vzdelávanie, učenie, bezplatné, online, Slovensko, mechanika, kinematika, elektrina, optika, atómová fyzika, vzorce, príklady' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Náuka Portál' },
    { property: 'og:title', content: defaultTitle },
    { property: 'og:description', content: defaultDesc },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:locale', content: 'sk_SK' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Náuka Portál — vzdelávanie pre gymnazistov' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: defaultTitle },
    { name: 'twitter:description', content: defaultDesc },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  // JSON-LD štruktúrované dáta — Google lepšie pochopí obsah webu
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Náuka Portál',
        url: siteUrl,
        description: defaultDesc,
        inLanguage: 'sk',
        logo: `${siteUrl}/favicon.ico`,
        sameAs: [],
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'student',
          audienceType: 'Gymnazisti, žiaci stredných škôl',
        },
        teaches: [
          { '@type': 'Course', name: 'Fyzika', url: `${siteUrl}/fyzika` },
          { '@type': 'Course', name: 'Matematika', url: `${siteUrl}/matematika` },
          { '@type': 'Course', name: 'Chémia', url: `${siteUrl}/chemia` },
        ],
      }),
    },
  ],
})
</script>
