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
      <!-- Profile Picture -->
      <div class="col-span-2 row-span-5">
        <img class="w-full h-full object-cover" src="/profile.jpg" alt="avatar" />
      </div>
      <!-- Social Links -->
      <motion.div
        class="col-span-4 row-span-1 social-links"
        :initial="{ x: -100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1, delay: 0.5 }"
      >
        <SocialLinks />
      </motion.div>
      <!-- About Me -->
      <motion.div
        class="col-span-3 row-span-7 font-sansation"
        :initial="{ x: 100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1, delay: 0.5 }"
      >
        <AboutMe />
      </motion.div>
      <!-- Introduction -->
      <motion.div
        class="col-span-4 row-span-4 introduction"
        :initial="{ x: -100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1, delay: 0.5 }"
      >
        <Introduction />
      </motion.div>
      <!-- Portafolios -->
      <motion.div
        class="col-span-4 row-span-5"
        :initial="{ x: -100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1, delay: 0.5 }"
      ></motion.div>
      <!-- Random GIF -->
      <motion.div
        class="col-span-2 row-span-2 relative"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1.25 }"
      >
        <img
          class="h-full w-full object-fill"
          src="https://giffiles.alphacoders.com/221/221698.gif"
          alt="bocchi"
        />
        <span
          class="absolute inset-0 flex justify-center items-end text-red-600 text-lg font-bold pointer-events-none"
        >
          Don't hire me!
        </span>
      </motion.div>
      <!-- Skills -->
      <motion.div
        class="col-span-5 row-span-3 skills"
        :initial="{ x: 100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 1, delay: 0.5 }"
      >
        <Skills />
      </motion.div>
    </div>
  </div>
</template>

<style scoped></style>
