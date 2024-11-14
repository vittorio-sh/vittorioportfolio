<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import cssLogo from '~/assets/img/logo/css-3.svg'
import firebaseLogo from '~/assets/img/logo/firebase-1.svg'
import htmlLogo from '~/assets/img/logo/html-1.svg'
import mongoLogo from '~/assets/img/logo/mongodb-icon-2.svg'
import nextLogo from '~/assets/img/logo/next-js.svg'
import notionLogo from '~/assets/img/logo/notion-2.svg'
import nuxtLogo from '~/assets/img/logo/nuxt-2.svg'
import reactLogo from '~/assets/img/logo/react-2.svg'
import tsLogo from '~/assets/img/logo/typescript.svg'
import vueLogo from '~/assets/img/logo/vue-9.svg'

const logos = ref<{ id: number; x: number; y: number; opacity: number; scale: number; image: string }[]>([])
const containerRef = ref<HTMLDivElement | null>(null)

const logoImages = [
    cssLogo,
    firebaseLogo,
    htmlLogo,
    mongoLogo,
    nextLogo,
    notionLogo,
    nuxtLogo,
    reactLogo,
    tsLogo,
    vueLogo
]

const padding = 100

const addLogo = () => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  
  const side = Math.random() > 0.5 ? 'left' : 'right'
  
  let x
  if (side === 'left') {
    x = padding + Math.random() * (rect.width * 0.13)
  } else {
    x = (rect.width * 0.8) + Math.random() * (rect.width * 0.2 - padding)
  }
  
  const y = padding + Math.random() * (rect.height - 2 * padding)
  
  const logo = {
    id: Date.now(),
    x,
    y,
    opacity: 0,
    scale: 0.3 + Math.random() * 0.15,
    image: logoImages[Math.floor(Math.random() * logoImages.length)]
  }
  
  logos.value.push(logo)
  
  setTimeout(() => {
    const index = logos.value.findIndex(l => l.id === logo.id)
    if (index !== -1) {
      logos.value[index].opacity = 0.3
    }
  }, 50)
  
  setTimeout(() => {
    const index = logos.value.findIndex(l => l.id === logo.id)
    if (index !== -1) {
      logos.value[index].opacity = 0
      setTimeout(() => {
        logos.value = logos.value.filter(l => l.id !== logo.id)
      }, 800)
    }
  }, 2000)
}

let interval: NodeJS.Timer | null = null

onMounted(() => {
  interval = setInterval(addLogo, 700)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 overflow-hidden pointer-events-none">
    <template v-for="logo in logos" :key="logo.id">
      <div
        class="absolute w-24 h-24 transition-all duration-800"
        :style="{
          transform: `translate(${logo.x}px, ${logo.y}px) scale(${logo.scale})`,
          opacity: logo.opacity
        }"
      >
        <img 
          :src="logo.image" 
          class="w-full h-full object-contain filter invert opacity-80"
          alt="Tech Logo"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
</style> 