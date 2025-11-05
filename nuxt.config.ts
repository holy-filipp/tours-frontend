// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/colada-nuxt', '@pinia/nuxt', '@nuxt/ui', '@nuxt/content', '@nuxt/eslint', 'nuxt-svgo'],
  css: ['~/assets/css/main.css'],
  svgo: {
    dts: true,
  },
  ui: {
    colorMode: false
  }
})