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
    '@oro.ad/nuxt-claude-devtools',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'sk',
    locales: [
      { code: 'sk', language: 'sk-SK', file: 'sk.json', name: 'Slovenský' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json', name: 'Ruský' },
      { code: 'uk', language: 'uk-UA', file: 'uk.json', name: 'Ukrajinský' },
    ],
    lazy: true,
    langDir: 'locales',
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://naukaportal.netlify.app',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'sk' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-T7PXZ11SFC',
          async: true,
        },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-T7PXZ11SFC',{'send_page_view':false});`,
        },
      ],
    },
  },
})