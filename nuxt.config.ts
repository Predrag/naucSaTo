// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxtjs/eslint-module',
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
    '@oro.ad/nuxt-claude-devtools'
  ]
})