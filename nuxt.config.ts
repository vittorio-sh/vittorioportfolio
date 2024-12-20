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
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.PNG'],
    build: {
      rollupOptions: {
        external: [
          '/img/virtumed/virtumed-pic1.PNG',
          '/img/virtumed/virtumed-pic2.PNG',
          '/img/**/*.jpg',
          '/img/**/*.JPG',
          '/img/**/*.PNG'
        ]
      }
    }
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
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/work',
        '/projects',
        '/profile',
        '/contact',
        '/dashboard'
      ]
    }
  },
  routeRules: {
    '/': { redirect: '/work' }
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  }
})