// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
    runtimeConfig: {
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
    },
  },
    ssr: true, // important for SSR

    nitro: {
      preset: 'netlify' // explicitly target static output for Netlify
    }
})