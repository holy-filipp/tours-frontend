// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/eslint', 'nuxt-svgo', '@peterbud/nuxt-query', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  svgo: {
    dts: true,
  },
  ui: {
    colorMode: false
  },
  nuxtQuery: {
    autoImports: ['useQuery', 'useMutation'],
    devtools: true
  }
})