<template>
  <div class="h-screen bg-black text-white overflow-hidden relative">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-black via-black/98 to-gray-900/20"></div>

    <!-- Main content -->
    <div class="relative h-full flex flex-col items-center justify-center px-6">
      <div class="w-full max-w-4xl space-y-8">
        <!-- Header -->
        <div class="space-y-4 text-center">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500">
              Let's Connect
            </span>
          </h1>
        </div>

        <!-- Contact Form Steps -->
        <div class="max-w-2xl mx-auto">
          <!-- Step 1: Initial Button -->
          <div v-if="currentStep === 0" class="text-center">
            <button 
              @click="currentStep = 1"
              class="px-8 py-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 
                     hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <span class="text-2xl font-medium text-white flex items-center gap-3">
                Start Connection
                <Icon name="lucide:arrow-right" 
                      class="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <!-- Step 2: Purpose Selection -->
          <div v-if="currentStep === 1" class="space-y-4">
            <div class="grid gap-3">
              <button 
                v-for="option in purposeOptions" 
                :key="option.id"
                @click="selectPurpose(option)"
                class="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 
                       transition-colors text-left group"
              >
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg bg-purple-500/10">
                    <Icon :name="option.icon" class="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 class="text-white font-medium">{{ option.title }}</h4>
                    <p class="text-white/80">{{ option.description }}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 3: Contact Details -->
          <div v-if="currentStep === 2" class="space-y-4">
            <div class="space-y-3">
              <input 
                v-model="formData.name"
                type="text"
                placeholder="Your Name *"
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                       placeholder:text-gray-500 focus:border-purple-500/50 outline-none"
                required
              />
              <input 
                v-model="formData.company"
                type="text"
                placeholder="Company (Optional)"
                class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white 
                       placeholder:text-gray-500 focus:border-purple-500/50 outline-none"
              />
            </div>

            <!-- Navigation Buttons -->
            <div v-if="currentStep > 0" class="flex justify-between mt-4">
              <button 
                @click="currentStep--"
                class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 
                       hover:bg-white/10 transition-colors text-white"
              >
                Back
              </button>
              <button 
                v-if="currentStep === 2"
                @click="sendEmail"
                :disabled="!formData.name"
                class="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 
                       hover:bg-purple-500/20 transition-colors text-white 
                       disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add this after your main content div and before closing the root div -->
    <div class="absolute bottom-8 left-0 right-0">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="mailto:vittorio.shiffman@gmail.com" 
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 
                 hover:bg-purple-500/20 transition-all duration-300 text-white"
        >
          <Icon name="lucide:mail" class="w-5 h-5" />
          vittorio.shiffman@gmail.com
        </a>
        <a 
          href="tel:+16479398486" 
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 
                 hover:bg-purple-500/20 transition-all duration-300 text-white"
        >
          <Icon name="lucide:phone" class="w-5 h-5" />
          (647) 939-8486
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentStep = ref(0)
const formData = ref({
  purpose: '',
  name: '',
  company: ''
})

const purposeOptions = [
  {
    id: 'connect',
    title: 'Let\'s Connect',
    description: 'Have a chat with Vittorio',
    icon: 'lucide:coffee',
    subject: 'Let\'s Connect'
  },
  {
    id: 'hire',
    title: 'Hire for a Position',
    description: 'Discuss full-time employment opportunities',
    icon: 'lucide:briefcase',
    subject: 'Employment Opportunity'
  },
  {
    id: 'contract',
    title: 'Contract Work',
    description: 'Collaborate on a specific project',
    icon: 'lucide:file-check',
    subject: 'Contract Work Opportunity'
  }
]

const selectPurpose = (option) => {
  formData.value.purpose = option
  currentStep.value = 2
}

const sendEmail = () => {
  const subject = encodeURIComponent(formData.value.purpose.subject)
  let body = `Hi Vittorio,\n\nI'm ${formData.value.name}`
  
  if (formData.value.company) {
    body += ` from ${formData.value.company}`
  }
  
  body += `.\n\nI would like to connect with you regarding ${formData.value.purpose.title.toLowerCase()}.\n\nBest regards,\n${formData.value.name}`
  
  const mailtoLink = `mailto:vittorio.shiffman@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
}
</script>

<style scoped>
.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}
</style>