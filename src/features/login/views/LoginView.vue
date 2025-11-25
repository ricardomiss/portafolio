<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composable/useAuth'

const { user, isLoading, login } = useAuth()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

async function submit() {
  if (await login(form.email, form.password)) {
    router.push({ name: 'admin-home' })
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      @submit.prevent="submit"
      class="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4"
    >
      <h2 class="text-2xl font-bold text-center mb-4">Sign in</h2>
      <div>
        <label class="block text-neutral-content mb-1" for="email">Email</label>
        <input
          v-model="form.email"
          id="email"
          type="email"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label class="block text-neutral-content mb-1" for="password">Password</label>
        <input
          v-model="form.password"
          id="password"
          type="password"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <button v-if="!isLoading" class="btn btn-soft btn-success" type="submit">Sign in</button>
      <button v-else class="btn btn-soft" disabled>
        <span class="loading loading-spinner"></span>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
