<template>
  <div class="min-h-screen bg-black text-white overflow-hidden relative">
    <!-- Scroll Progress Indicator - Hide on mobile -->
    <div class="fixed left-8 top-1/2 -translate-y-1/2 h-[60vh] w-[2px] bg-white/10 hidden md:block">
      <div 
        class="w-full bg-gradient-to-b from-white/80 to-white/20 relative"
        :style="{ height: `${scrollProgress}%` }"
      >
        <div 
          class="scroll-indicator-dot absolute top-0 -right-1 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        ></div>
      </div>
    </div>

    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-black via-black/98 to-gray-900/20"></div>

    <!-- Main content - Adjust padding for mobile -->
    <div class="relative container mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div class="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <!-- Header with Project Badge -->
        <div class="space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3 mb-4 sm:mb-6">
            <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-blue-400 flex items-center gap-2">
              <Icon name="lucide:activity" class="w-3 h-3 sm:w-4 sm:h-4" />
              Active Project
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500">
              Virtumed
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-400">Medical Charting Software with AI Integration</p>
          
          <!-- Description -->
          <p class="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            Collaborated with a US-based neurosurgeon and a Canadian PhD student to develop an innovative medical charting 
            software. The platform integrates AI technology to streamline the patient documentation process for healthcare 
            professionals.
          </p>
        </div>

        <!-- Role & Duration -->
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-300 flex items-center gap-2">
              <Icon name="lucide:user" class="w-5 h-5 text-blue-400" />
              Role
            </h3>
            <p class="text-gray-400">Full Stack Developer & UI/UX Designer</p>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-300 flex items-center gap-2">
              <Icon name="lucide:calendar" class="w-5 h-5 text-blue-400" />
              Duration
            </h3>
            <p class="text-gray-400">2024 - Present</p>
          </div>
        </div>

        <!-- Applications Overview -->
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:stethoscope" class="w-5 h-5 text-blue-400" />
              <h3 class="text-lg font-medium text-gray-200">Main Application</h3>
            </div>
            <p class="text-gray-400">Provider-facing platform for medical charting and patient management, used by healthcare professionals for daily documentation.</p>
          </div>
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:git-branch" class="w-5 h-5 text-blue-400" />
              <h3 class="text-lg font-medium text-gray-200">Integrations App</h3>
            </div>
            <p class="text-gray-400">Advanced configuration platform for IT staff to design and manage data flow nodes, defining charting workflows and data processing pipelines.</p>
          </div>
        </div>

        <!-- Key Contributions -->
        <div class="space-y-6">
          <h3 class="text-xl font-medium text-gray-200 flex items-center gap-2">
            <Icon name="lucide:git-pull-request" class="w-5 h-5 text-blue-400" />
            Key Contributions
          </h3>
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h4 class="text-lg font-medium text-gray-300">Integration Application</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:check-circle" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Transformed demo into production-ready node configuration system</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:workflow" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Built workflow designer for medical data processing pipelines</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:database" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Implemented data flow configuration and management system</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-lg font-medium text-gray-300">Development & Planning</h4>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Icon name="lucide:settings" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Designed IT staff configuration interface</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:git-merge" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Created node-based workflow system architecture</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="lucide:users" class="w-5 h-5 text-blue-400 mt-1" />
                  <span class="text-gray-300">Collaborated with medical IT professionals for workflow optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Project Images - Adjust for mobile -->
        <div class="space-y-12 sm:space-y-16 mt-8 sm:mt-12">
          <!-- First Image Section -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col sm:flex-row items-center">
              <img 
                src="/img/virtumed/v2.png" 
                alt="Virtumed Interface"
                class="rounded-xl shadow-2xl w-full sm:w-[85%] transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div class="relative sm:absolute right-0 top-0 sm:top-1/2 sm:-translate-y-1/2 bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-l-xl border border-white/10 w-full sm:w-[25%] mt-4 sm:mt-0 transform sm:translate-x-4 opacity-100 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <h4 class="text-base sm:text-lg font-medium text-white mb-2">Integration App</h4>
                <p class="text-xs sm:text-sm text-gray-300">Advanced configuration platform for IT staff to design and manage data flow nodes, defining charting workflows and data processing pipelines.</p>
              </div>
            </div>
          </div>

          <!-- Second Image Section -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col-reverse sm:flex-row items-center justify-end">
              <div class="relative sm:absolute left-0 top-0 sm:top-1/2 sm:-translate-y-1/2 bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-r-xl border border-white/10 w-full sm:w-[25%] mt-4 sm:mt-0 transform sm:-translate-x-4 opacity-100 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
                <h4 class="text-base sm:text-lg font-medium text-white mb-2">Main Application</h4>
                <p class="text-xs sm:text-sm text-gray-300">Advanced AI assistance for automated medical documentation and real-time suggestions</p>
              </div>
              <img 
                src="/img/virtumed/v1.png" 
                alt="Virtumed AI Integration"
                class="rounded-xl shadow-2xl w-full sm:w-[85%] transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        <!-- Tech Stack - Adjust spacing -->
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:nuxt-icon" class="w-3 h-3 sm:w-4 sm:h-4" />
            Nuxt.js
          </span>
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:vue" class="w-3 h-3 sm:w-4 sm:h-4" />
            Vue.js
          </span>
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:firebase" class="w-3 h-3 sm:w-4 sm:h-4" />
            Firebase
          </span>
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:nodejs-icon" class="w-3 h-3 sm:w-4 sm:h-4" />
            Node.js
          </span>
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:openai-icon" class="w-3 h-3 sm:w-4 sm:h-4" />
            OpenAI
          </span>
          <span class="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
            <Icon name="logos:typescript-icon" class="w-3 h-3 sm:w-4 sm:h-4" />
            TypeScript
          </span>
        </div>

        <!-- Beta Access & Contact -->
        <div class="grid sm:grid-cols-2 gap-8">
          <!-- Beta Access Card -->
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:external-link" class="w-5 h-5 text-blue-400" />
              <h3 class="text-lg font-medium text-gray-200">Beta Access</h3>
            </div>
            <p class="text-gray-300">
              The platform is currently in beta and can be accessed at 
              <a 
                href="https://virtumed2.vercel.app/" 
                target="_blank" 
                class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30"
              >
                virtumed2.vercel.app
              </a>
            </p>
          </div>

          <!-- Professional Reference Card -->
          <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <Icon name="lucide:mail" class="w-5 h-5 text-blue-400" />
              <h3 class="text-lg font-medium text-gray-200">Professional Reference</h3>
            </div>
            <p class="text-gray-300">
              Interested in learning more about my performance and contributions in this role? Feel free to contact 
              <a 
                href="mailto:adamkutak@gmail.com" 
                class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30"
              >
                Adam Kutak
              </a>
              , Co-founder of Virtumed and AI PhD student.
            </p>
          </div>
        </div>

        <!-- Onlia Section -->
        <div class="mt-32 space-y-12">
          <!-- Header with Project Badge -->
          <div class="space-y-4">
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-400 flex items-center gap-2">
                <Icon name="lucide:refresh-cw" class="w-4 h-4" />
                Modernization Project
              </span>
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500">
                Onlia Insurance
              </span>
            </h1>
            <p class="text-xl text-gray-400">Canadian Auto & Home Insurance Platform</p>
            
            <p class="text-gray-300 leading-relaxed max-w-3xl">
              Working on modernizing a legacy insurance platform from 2016, focusing on rebuilding and 
              refactoring the codebase while maintaining existing functionality. The project involves 
              transforming outdated systems into a modern, maintainable architecture.
            </p>
          </div>

          <!-- Role & Duration -->
          <div class="grid sm:grid-cols-2 gap-8">
            <div class="space-y-2">
              <h3 class="text-lg font-medium text-gray-300 flex items-center gap-2">
                <Icon name="lucide:user" class="w-5 h-5 text-purple-400" />
                Role
              </h3>
              <p class="text-gray-400">Full Stack Developer</p>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-medium text-gray-300 flex items-center gap-2">
                <Icon name="lucide:calendar" class="w-5 h-5 text-purple-400" />
                Duration
              </h3>
              <p class="text-gray-400">2024 - Present</p>
            </div>
          </div>

          <!-- Key Contributions -->
          <div class="space-y-6">
            <h3 class="text-xl font-medium text-gray-200 flex items-center gap-2">
              <Icon name="lucide:git-pull-request" class="w-5 h-5" />
              Key Contributions
            </h3>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-medium text-gray-300">Modernization</h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:refresh-cw" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Refactoring legacy codebase to modern standards</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:code" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Implementing new features with updated architecture</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:repeat" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Maintaining feature parity during modernization</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-4">
                <h4 class="text-lg font-medium text-gray-300">Development</h4>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:layout" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Rebuilding UI components with modern frameworks</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:git-merge" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Integration with Salesforce and MuleSoft systems</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <Icon name="lucide:figma" class="w-5 h-5 text-purple-400 mt-1" />
                    <span class="text-gray-300">Collaborating on new design implementations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="space-y-4">
          <h3 class="text-xl font-medium text-gray-200 flex items-center gap-2">
            <Icon name="lucide:code-2" class="w-5 h-5" />
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:angular-icon" class="w-4 h-4" />
              Angular
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:typescript-icon" class="w-4 h-4" />
              TypeScript
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:html-5" class="w-4 h-4" />
              HTML
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:css-3" class="w-4 h-4" />
              CSS
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:salesforce" class="w-4 h-4" />
              Salesforce
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:mulesoft" class="w-4 h-4" />
              MuleSoft
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:jira" class="w-4 h-4" />
              Jira
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
              <Icon name="logos:figma" class="w-4 h-4" />
              Figma
            </span>
          </div>
        </div>

        <!-- Professional Reference Card -->
        <div class="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <div class="flex items-center gap-3">
            <Icon name="lucide:mail" class="w-5 h-5 text-purple-400" />
            <h3 class="text-lg font-medium text-gray-200">Professional Reference</h3>
          </div>
          <p class="text-gray-300">
            Professional references from Onlia are available upon request. Please note that I would need to notify my current employer before providing contact information.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>

<script setup>
const scrollProgress = ref(0)

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrolled = window.scrollY
  scrollProgress.value = (scrolled / documentHeight) * 100
}
</script>
