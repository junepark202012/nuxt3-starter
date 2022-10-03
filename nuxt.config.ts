// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtConfig = {
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
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
