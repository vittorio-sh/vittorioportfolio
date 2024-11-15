<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// Updated color mapping for each route
const routeColors = {
  '/dashboard': 'text-white hover:text-white bg-white/10',
  '/work': 'text-blue-400 hover:text-blue-400 bg-blue-500/10',
  '/projects': 'text-orange-400 hover:text-orange-400 bg-orange-500/10',
  '/profile': 'text-emerald-400 hover:text-emerald-400 bg-emerald-500/10',
  '/contact': 'text-purple-400 hover:text-purple-400 bg-purple-500/10'
}

const navItems = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: 'lucide:home',
  },
  {
    name: 'Work',
    href: '/work',
    icon: 'lucide:briefcase',
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: 'lucide:folder-git',
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: 'lucide:user',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: 'lucide:mail',
  },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu when route changes
watch(route, () => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <!-- Desktop Navigation -->
  <nav class="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform hidden md:block">
    <div class="border-white/30 border rounded-full p-[1px]">
      <div
        class="flex items-center gap-8 rounded-full bg-black/95 px-12 py-1.5 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md supports-[backdrop-filter]:bg-black/80"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="group relative flex items-center justify-center"
        >
          <Button
            variant="ghost"
            size="icon"
            :class="cn(
              'rounded-full transition-colors w-9 h-9',
              route.path === item.href
                ? routeColors[item.href]
                : 'text-gray-500 hover:bg-white/10 hover:text-white'
            )"
          >
            <Icon :name="item.icon" class="h-5 w-5" />
            <span class="sr-only">{{ item.name }}</span>
          </Button>
          <!-- Hover Label -->
          <span 
            class="pointer-events-none absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
          >
            {{ item.name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation -->
  <div class="fixed top-4 right-4 z-50 md:hidden">
    <!-- Mobile Menu Button -->
    <Button
      variant="ghost"
      size="icon"
      class="rounded-full bg-black/95 border border-white/30 w-10 h-10"
      @click="toggleMobileMenu"
    >
      <Icon 
        :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" 
        class="h-5 w-5 text-white"
      />
    </Button>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-14 right-0 w-48 py-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/10 shadow-lg"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
          :class="route.path === item.href ? routeColors[item.href] : ''"
        >
          <Icon :name="item.icon" class="h-4 w-4" />
          {{ item.name }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Smooth fade for hover label */
.group span {
  transition: opacity 0.2s ease;
}

/* Add backdrop blur support for Safari */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}
</style>
