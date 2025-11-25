<script setup lang="ts">
import Sidenavbar from './components/sidenavbar.vue'
import Header from './components/header.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'night')
})
</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col">
    <Header />
    <div class="flex flex-row flex-1 w-full h-full">
      <Sidenavbar />
      <div class="flex-1 overflow-auto bg-base-200">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
