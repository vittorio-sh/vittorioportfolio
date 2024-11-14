<template>
  <div class="h-screen bg-black text-white overflow-hidden relative">
    <!-- Shine effect background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.03] animate-shine"></div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-tr from-black via-black/98 to-gray-900/20"></div>
    
    <!-- Main content -->
    <div class="relative h-full flex flex-col items-center justify-center px-6">
      <div class="w-full max-w-4xl text-center space-y-8">
        <!-- Name with centered gradient -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500">
            Vittorio Shiffman
          </span>
        </h1>

        <!-- Role -->
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200">
          Full Stack Developer
        </h2>

        <!-- Description -->
        <p class="max-w-2xl mx-auto text-gray-400 text-lg sm:text-xl leading-relaxed">
          Based in Canada, I bring ideas to life through code. Specializing in front-end development, 
          I've contributed to both startups and established companies, crafting seamless digital experiences.
        </p>

        <!-- CTA Buttons -->
        <div class="flex items-center justify-center gap-6 pt-8">
          <Button asChild 
            class="relative group overflow-hidden bg-black hover:bg-black/90 text-white border border-white/20 px-8 py-6 rounded-xl
                   transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <NuxtLink to="/work" class="flex items-center gap-2">
              <span class="relative z-10 font-medium">View Work Experience</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </Button>
          
          <Button asChild 
            class="relative group overflow-hidden bg-white hover:bg-white/90 text-black px-8 py-6 rounded-xl
                   transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <NuxtLink to="/contact" class="flex items-center gap-2">
              <span class="relative z-10 font-medium">Get in Touch</span>
              <Icon name="lucide:mail" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<style scoped>
/* Name gradient animation */
@keyframes shine {
  from {
    background-position: 200% center;
  }
  to {
    background-position: -200% center;
  }
}

h1 span {
  background-size: 200% auto;
  animation: shine 10s linear infinite;
}

/* Background shine animation */
@keyframes backgroundShine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: backgroundShine 8s linear infinite;
}

/* Button hover effects */
.group::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: 0.5s;
}

.group:hover::before {
  left: 100%;
}

/* White button pulse animation */
@keyframes subtle-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
  }
}

.bg-white {
  animation: subtle-pulse 3s infinite;
}
</style> 