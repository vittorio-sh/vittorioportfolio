import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.jpg'], // Add this line
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  shadcn: {
    /**
     * Prefix for all the imported components
     * @default ""
     */
    prefix: '',
    /**
     * Directory that the component library will be generated at
     * @default "~/components/ui"
     */
    componentDir: './components/ui'
  }
})