// https://v3.nuxtjs.org/api/configuration/nuxt.config

import type { NuxtConfig } from '@nuxt/schema'

const nuxtConfig: NuxtConfig = {
  css: ['~/assets/css/main.css'],
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  googleFonts: {
    families: {
      'Inter': [200, 300, 400, 700],
      'Roboto': [300, 400, 700],
      'Noto Sans KR': [300, 400, 500, 700],
    },
  },
}

export default defineNuxtConfig(nuxtConfig)
