// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //Add this to the previously done work in nuxt.config.ts
  css: ['~/assets/css/main.css'],
  //Add Pinia
  modules: ['@pinia/nuxt'],
})