// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL || 'http://localhost:5000/',
    }
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

 // buildModules: ['@nuxt/typescript-build'], 
  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  antd:{
    // Options
    extractStyle: true
  },
})
