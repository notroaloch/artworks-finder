export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  colorMode: {
    preference: 'system',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-08-09',
});
