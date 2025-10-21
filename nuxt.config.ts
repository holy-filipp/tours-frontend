// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/colada-nuxt', '@nuxt/ui', '@nuxt/content', '@nuxt/eslint', 'nuxt-svgo', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  svgo: {
    dts: true,
  },
  ui: {
    colorMode: false
  },
  runtimeConfig: {
    API_BASE_URL: 'http://127.0.0.1:8000/api/'
  }
})