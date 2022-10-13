// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [200, 300, 400, 700],
      Roboto: [300, 400, 700],
      "Noto Sans KR": [300, 400, 500, 700],
    },
  },
});
