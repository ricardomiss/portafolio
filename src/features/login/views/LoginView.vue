<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.8 }">
    <h1 class="text-4xl font-bold">Login Page Coming Soon!</h1>
  </motion.div>
</template>

<style scoped></style>
