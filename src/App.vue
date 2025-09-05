<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import HeaderNav from '@/components/HeaderNav.vue'
import SplashScreen from '@/components/SplashScreen.vue'

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
const showLoader = ref(!isMobileDevice())
</script>

<template>
    <SplashScreen v-if="showLoader" @finish="showLoader = false" />

    <div v-else class="flex justify-center items-center h-screen w-screen p-2">
      <div class="h-full lg:w-8/12 grid grid-cols-9 grid-rows-11 gap-2 gridboxes">
        <!-- Header -->
        <motion.div
          class="col-span-9 row-span-1 header"
          :initial="{ y: -100, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ duration: 1, delay: 0.5 }"
        >
          <HeaderNav />
        </motion.div>
        <RouterView />
      </div>
    </div>
</template>

<style scoped></style>
