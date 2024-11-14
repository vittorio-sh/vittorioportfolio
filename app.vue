<script setup>
const router = useRouter()

onMounted(() => {
  router.push('/dashboard')
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Navbar />
  </div>
</template>