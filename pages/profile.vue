<template>
  <div class="min-h-screen bg-black text-white overflow-hidden relative">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-black via-black/98 to-gray-900/20"></div>

    <!-- Main content -->
    <div class="relative container mx-auto px-6 py-24">
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Profile Header -->
        <div class="space-y-8">
          <div class="flex flex-col sm:flex-row items-center gap-8">
            <!-- Profile Image -->
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 rounded-full blur opacity-75"></div>
              <img 
                src="/img/profile/profilepic.JPG" 
                alt="Vittorio Shiffman"
                class="relative w-48 h-48 object-cover rounded-full border-2 border-emerald-500/20"
              />
            </div>
            
            <!-- Name and Location -->
            <div class="text-center sm:text-left">
              <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-emerald-200 to-emerald-500">
                  Vittorio Shiffman
                </span>
              </h1>
              <div class="space-y-3">
                <div class="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                  <Icon name="lucide:map-pin" class="w-4 h-4 text-emerald-400" />
                  Toronto, Ontario
                </div>
                <div class="flex items-center justify-center sm:justify-start gap-4">
                  <a 
                    href="https://github.com/vittorio-sh" 
                    target="_blank"
                    class="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Icon name="lucide:github" class="w-4 h-4" />
                    <span>vittorio-sh</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vittorio-s-b711952b7/" 
                    target="_blank"
                    class="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <Icon name="logos:linkedin-icon" class="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div class="flex items-center justify-center sm:justify-start">
                  <a 
                    href="/resume/resume.pdf" 
                    target="_blank"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
                  >
                    <Icon name="lucide:file-text" class="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="space-y-12">
          <!-- Journey -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-200 flex items-center gap-2">
              <Icon name="lucide:user" class="w-6 h-6 text-emerald-400" />
              About Me
            </h2>
            <p class="text-gray-300 leading-relaxed">
              With five years of dedicated experience in software development, I've cultivated a deep passion for creating innovative solutions 
              and pushing technological boundaries. My journey in coding has been driven by curiosity and a desire to build impactful applications 
              that make a difference.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Beyond coding, I'm an avid triathlete and traveler, bringing the discipline of endurance sports and diverse perspectives into my work. 
              I thrive in the dynamic environment of startups, where I can contribute meaningfully to product development and propose new ideas. 
              The fast-paced nature of startup culture perfectly aligns with my proactive approach to creating clean, efficient code and building 
              intuitive user experiences.
            </p>
          </div>

          <!-- Education -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-200 flex items-center gap-2">
              <Icon name="lucide:graduation-cap" class="w-6 h-6 text-emerald-400" />
              Education
            </h2>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium text-gray-200">Algoma University</h3>
                    <span class="text-sm text-emerald-400">2021-2024</span>
                  </div>
                  <p class="text-gray-400">Bachelor's Degree in Computer Science</p>
                  <p class="text-sm text-gray-500">Fast-tracked program</p>
                </div>
              </div>
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium text-gray-200">Algonquin College</h3>
                    <span class="text-sm text-emerald-400">2020-2021</span>
                  </div>
                  <p class="text-gray-400">Diploma in Computer Programming</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Professional Experience -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-200 flex items-center gap-2">
              <Icon name="lucide:briefcase" class="w-6 h-6 text-emerald-400" />
              Professional Journey
            </h2>
            <div class="space-y-6">
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-gray-200">Virtumed</h3>
                      <span class="text-sm text-gray-400">Part-time (10-20 hours/week)</span>
                    </div>
                    <span class="text-sm text-emerald-400">2024-Present</span>
                  </div>
                  <p class="text-gray-400">Full Stack Developer at an innovative medical software startup</p>
                </div>
              </div>
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-gray-200">Onlia Insurance</h3>
                      <span class="text-sm text-gray-400">Full-time</span>
                    </div>
                    <span class="text-sm text-emerald-400">2024-Present</span>
                  </div>
                  <p class="text-gray-400">Progressed from intern to Full Stack Developer, working on modernizing insurance platforms</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills & Passion -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-200 flex items-center gap-2">
              <Icon name="lucide:code" class="w-6 h-6 text-emerald-400" />
              Skills & Interests
            </h2>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-4">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:sparkles" class="w-5 h-5 text-emerald-400" />
                    <h3 class="text-lg font-medium text-gray-200">Passion for Creation</h3>
                  </div>
                  <p class="text-gray-400">Driven by the desire to build innovative solutions and contribute meaningful features to projects</p>
                </div>
              </div>
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="space-y-4">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:palette" class="w-5 h-5 text-emerald-400" />
                    <h3 class="text-lg font-medium text-gray-200">Design Enthusiasm</h3>
                  </div>
                  <p class="text-gray-400">Combining technical expertise with an eye for design to create engaging user experiences</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-200 flex items-center gap-2">
              <Icon name="lucide:code-2" class="w-6 h-6 text-emerald-400" />
              Technical Skills
            </h2>
            <div class="grid sm:grid-cols-2 gap-8">
              <!-- Column 1 -->
              <div class="space-y-8">
                <!-- Frontend -->
                <div class="space-y-4">
                  <h3 class="text-lg font-medium text-gray-300">Frontend</h3>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:react" class="w-4 h-4" />
                      React
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:nextjs-icon" class="w-4 h-4" />
                      Next.js
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:angular-icon" class="w-4 h-4" />
                      Angular
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:typescript-icon" class="w-4 h-4" />
                      TypeScript
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:tailwindcss-icon" class="w-4 h-4" />
                      TailwindCSS
                    </span>
                  </div>
                </div>

                <!-- Backend -->
                <div class="space-y-4">
                  <h3 class="text-lg font-medium text-gray-300">Backend</h3>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:nodejs-icon" class="w-4 h-4" />
                      Node.js
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:java" class="w-4 h-4" />
                      Java
                    </span>
                  </div>
                </div>
              </div>

              <!-- Column 2 -->
              <div class="space-y-8">
                <!-- Database & Tools -->
                <div class="space-y-4">
                  <h3 class="text-lg font-medium text-gray-300">Database & Tools</h3>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:supabase-icon" class="w-4 h-4" />
                      Supabase
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:mongodb-icon" class="w-4 h-4" />
                      MongoDB
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:mysql" class="w-4 h-4" />
                      MySQL
                    </span>
                    <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                      <Icon name="logos:git-icon" class="w-4 h-4" />
                      Git
                    </span>
                  </div>
                </div>

                <!-- Enterprise Tools -->
                <div class="space-y-4">
                  <h3 class="text-lg font-medium text-gray-300">Enterprise Tools</h3>
                  <div class="flex flex-wrap gap-3">
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
              </div>
            </div>
          </div>
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
</style>