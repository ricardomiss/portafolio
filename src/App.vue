<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import HeaderNav from '@/components/HeaderNav.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import AboutMe from '@/components/AboutMe.vue'
import Introduction from '@/components/Introduction.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import Skills from './components/Skills.vue'

const showLoader = ref(true)
</script>

<template>
    <SplashScreen v-if="showLoader" @finish="showLoader = false" />

    <div v-else class="flex justify-center items-center h-screen w-screen p-2">
      <div class="h-full w-8/12 grid grid-cols-9 grid-rows-11 gap-2 gridboxes">
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
