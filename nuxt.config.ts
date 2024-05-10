// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.DEBUG === "true" },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      APP_URL: process.env.APP_URL,
      DEBUG: process.env.DEBUG === "true",
      API_URL: process.env.API_URL,
      API_VERSION: Number(process.env.API_VERSION)
    }
  }
})
