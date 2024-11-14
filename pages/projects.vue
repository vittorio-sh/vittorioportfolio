<template>
  <Head>
    <title>FitVault - Projects</title>
  </Head>

  <div class="min-h-screen bg-black text-white overflow-hidden relative">
    <!-- Scroll Progress Indicator -->
    <div class="fixed left-8 top-1/2 -translate-y-1/2 h-[60vh] w-[2px] bg-white/10">
      <div 
        class="w-full bg-gradient-to-b from-white/80 to-white/20 relative"
        :style="{ height: `${scrollProgress}%` }"
      >
        <div 
          class="absolute top-0 -right-1 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        ></div>
      </div>
    </div>

    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-black via-black/98 to-gray-900/20"></div>

    <!-- Main content -->
    <div class="relative container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto space-y-12">
        <!-- Header with Project Badge -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-6">
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-400 flex items-center gap-2">
              <Icon name="lucide:archive" class="w-4 h-4" />
              Archived Project
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-200 to-orange-500">
              Fit Vault
            </span>
          </h1>
          <p class="text-xl text-gray-400">Fitness Social Platform for Professional Workout Guides</p>
          
          <!-- Project Links -->
          <div class="flex items-center gap-4 pt-2">
            <a 
              href="https://github.com/vittorio-sh/fitvault" 
              target="_blank"
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
            >
              <Icon name="lucide:github" class="w-4 h-4" />
              View Source
            </a>
            <button 
              @click="openModal"
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 hover:bg-orange-500/20 transition-colors"
            >
              <Icon name="lucide:external-link" class="w-4 h-4" />
              <span class="flex items-center gap-2">
                Live Demo 
                <span class="text-xs bg-orange-500/20 px-2 py-0.5 rounded-full">Archived</span>
              </span>
            </button>
          </div>
          
          <!-- Description -->
          <p class="text-gray-300 leading-relaxed max-w-3xl">
            A social platform designed for fitness professionals to share detailed exercise tutorials and workout guides. 
            The platform enables trainers to upload comprehensive video demonstrations along with supplementary information 
            to help users perfect their form and understand the mechanics of each exercise.
          </p>
        </div>

        <!-- Features Overview -->
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:users" class="w-5 h-5 text-orange-400" />
              <h3 class="text-lg font-medium text-gray-200">Social Platform</h3>
            </div>
            <p class="text-gray-400">Complete authentication system with public profiles for fitness professionals to showcase their content.</p>
          </div>
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:video" class="w-5 h-5 text-orange-400" />
              <h3 class="text-lg font-medium text-gray-200">Exercise Library</h3>
            </div>
            <p class="text-gray-400">Searchable database of professional workout demonstrations with detailed exercise information.</p>
          </div>
        </div>

        <!-- Video Section -->
        <div class="space-y-6">
          <div class="relative group">
            <!-- Video container -->
            <div class="relative rounded-xl overflow-hidden">
              <video 
                ref="videoPlayer"
                class="w-full aspect-video object-cover"
                preload="auto"
                muted
                loop
                playsinline
              >
                <source src="/videos/demo.MOV" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              
              <!-- Subtle overlay for better contrast -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none"></div>
            </div>
          </div>

          <!-- Video features/highlights -->

        </div>

        <!-- Tech Stack -->
        <div class="space-y-4">
          <h3 class="text-xl font-medium text-gray-200 flex items-center gap-2">
            <Icon name="lucide:code-2" class="w-5 h-5 text-orange-400" />
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:nextjs-icon" class="w-4 h-4" />
              Next.js
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:react" class="w-4 h-4" />
              React
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:typescript-icon" class="w-4 h-4" />
              TypeScript
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:tailwindcss-icon" class="w-4 h-4" />
              TailwindCSS
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:supabase-icon" class="w-4 h-4" />
              Supabase
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Node.js</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-gray-900 border border-white/10 rounded-2xl p-6 max-w-md w-full space-y-4">
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-medium text-gray-200 flex items-center gap-2">
              <Icon name="lucide:info" class="w-5 h-5 text-orange-400" />
              Project Status
            </h3>
            <button 
              @click="closeModal"
              class="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>
          
          <p class="text-gray-300 leading-relaxed">
            The live demo is currently unavailable as the Supabase database has been deactivated. While you can clone and run the project locally, 
            full functionality won't be available due to the offline database.
          </p>
          
          <p class="text-gray-300 leading-relaxed">
            You can still review the code structure and implementation details in the GitHub repository.
          </p>

          <div class="flex justify-end gap-3 pt-4">
            <button 
              @click="closeModal"
              class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <a 
              href="https://github.com/vittorio-sh/fitvault" 
              target="_blank"
              class="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 hover:bg-orange-500/20 transition-colors"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Update the professional work section - move it up and enhance visibility -->
    <div class="mt-8 pt-8 border-t border-white/10">
      <div class="flex flex-col items-center text-center space-y-8">
        <h3 class="text-3xl font-semibold text-white">
          Check Out My Professional Work
        </h3>
        <p class="text-gray-100 max-w-2xl text-xl font-medium leading-relaxed">
          Interested in seeing my professional contributions? View my work experience and enterprise-level projects.
        </p>
        <NuxtLink 
          to="/work" 
          class="group relative inline-flex items-center gap-2 px-6 py-3"
        >
          <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500/50 to-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div class="relative flex items-center gap-2 px-10 py-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 transition-colors">
            <span class="text-xl font-medium">View Professional Work</span>
            <Icon name="lucide:arrow-right" class="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollProgress = ref(0)
const isModalOpen = ref(false)
const videoPlayer = ref(null)

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  if (videoPlayer.value) {
    videoPlayer.value.playbackRate = 1.5
    // Wait for video to be loaded
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      videoPlayer.value.play()
        .catch(error => {
          console.log('Autoplay failed:', error)
        })
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  if (videoPlayer.value) {
    videoPlayer.value.pause()
    videoPlayer.value.removeEventListener('loadedmetadata', () => {})
  }
})

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrolled = window.scrollY
  scrollProgress.value = (scrolled / documentHeight) * 100
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

/* Smooth transition for scroll indicator */
.bg-gradient-to-b {
  transition: height 0.1s ease-out;
}

/* Optional: Add subtle pulse animation to the dot */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
  }
}

.rounded-full {
  animation: pulse 2s infinite;
}

/* Optional: Add backdrop blur when modal is open */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>
