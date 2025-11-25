<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/composable/useAuth'

const router = useRouter()

function goToHome() {
  router.push({ name: 'home' })
}

function goToHomeAdmin() {
  router.push({ name: 'admin-home' })
}

async function Logout() {
  const { logout } = useAuth()
  await logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a v-on:click="goToHomeAdmin" class="btn btn-ghost text-xl">Portafolio</a>
    </div>
    <div class="flex gap-2">
      <div class="dropdown dropdown-end">
        <a
          class="btn btn-ghost btn-circle tooltip tooltip-left"
          v-on:click="goToHome"
          data-tip="Go to Home"
        >
          <span class="icon-[line-md--home-twotone]"></span>
        </a>
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-8 rounded-full">
              <span>R</span>
            </div>
          </div>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a v-on:click="Logout" class="bg-error text-info-content">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
