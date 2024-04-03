// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: Boolean(process.env.DEBUG) },
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
      DEBUG: Boolean(process.env.DEBUG),
      API_URL: process.env.API_URL,
      API_VERSION: Number(process.env.API_VERSION)
    }
  }
})
