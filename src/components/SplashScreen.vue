<script setup lang="ts">
import { motion } from 'motion-v'
const emit = defineEmits(['finish'])
</script>

<template>
  <div>
    <!-- Content -->
    <div class="fixed inset-0 z-50 flex flex-row justify-center items-center">

        <motion.img
          :initial="{ opacity: 1}"
          :animate="{
            scale: [1, 0.8, 0.8, 0.8, 0.8],
            opacity: [1, 1, 1, 1, 1],
            x: [0, 0, -280, -280, -280],
            y: [0, -150, -150, -150, -150]
          }"
          :transition="{ 
            duration: 1,
            times: [0, 0.5, 0.8, 0.9, 1],
            delay: 2
           }"
           @animationComplete="emit('finish')"
          src="./profile.jpg" 
          class="w-1/5 h-1/2 mx-5 rounded-lg" />

        <motion.h1
          :initial="{ opacity: 1 }"
          :animate="{ x: 100, opacity: 0 }"
          :transition="{ duration: 0.5, delay: 1.5 }"
          class="text-4xl font-bold text-white">
            Ricardo Miss
        </motion.h1>
    </div>
  </div>
</template>

<style scoped></style>
