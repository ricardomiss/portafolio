<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goToBlog() {
  router.push({ name: 'blog-home' })
}
</script>

<template>
  <ul class="menu gap-7">
    <li>
      <a class="tooltip tooltip-right" data-tip="Blog">
        <span class="icon-[material-symbols--post-outline-rounded] text-lg"></span>
      </a>
    </li>
  </ul>
</template>

<style scoped></style>
