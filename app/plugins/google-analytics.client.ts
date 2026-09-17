declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = 'G-T7PXZ11SFC'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  // Odošli page_view pri každej client-side navigácii
  router.afterEach((to) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, { page_path: to.fullPath })
    }
  })
})
