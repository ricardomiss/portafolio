<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { createToaster } from '@meforma/vue-toaster'
const toaster = createToaster({
  position: 'top-right',
  duration: 1500,
  pauseOnHover: false,
  maxToasts: 5,
})
function copyEmail(): void {
  navigator.clipboard.writeText('ricardomissdev@yahoo.com').then(() => {
    toaster.success('Email copied to clipboard!')
  })
}
</script>

<template>
  <a class="btnNetworks" href="https://github.com/ricardomiss">
    <Icon icon="mdi:github" width="32" height="32" />
  </a>
  <a class="btnNetworks" href="https://www.linkedin.com/in/ricardomiss">
    <Icon icon="mdi:linkedin" width="32" height="32" />
  </a>
  <a class="btnNetworks" href="https://discord.gg/bNNTBfB8">
    <Icon icon="ic:baseline-discord" width="32" height="32" />
  </a>
  <a class="btnNetworks" href="mailto:ricardomissdev@yahoo.com" @click="copyEmail">
    <Icon icon="mdi:email" width="32" height="32" />
  </a>
</template>

<style scoped></style>
