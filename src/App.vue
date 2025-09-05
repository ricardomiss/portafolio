<script setup lang="ts">
import { motion } from 'motion-v'
import HeaderNav from '@/components/HeaderNav.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import AboutMe from '@/components/AboutMe.vue'
import Introduction from '@/components/Introduction.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen p-2">
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
