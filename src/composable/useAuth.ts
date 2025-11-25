import { authServices } from '@/services/authServices'
import type { User } from '@supabase/supabase-js'
import { ref } from 'vue'

const user = ref<User | null>(null)
const isLoading = ref(false)

async function login(email: string, password: string) {
  isLoading.value = true
  try {
    const res = await authServices.signIn(email, password)
    user.value = res.data.user ?? null
    return !!user.value
  } catch (error) {
    console.error('Login error:', error)
    return false
  } finally {
    isLoading.value = false
  }
}

async function checkAuth(): Promise<User | null> {
  isLoading.value = true
  try {
    const res = await authServices.getSession()
    return res?.user ?? null
  } catch (error) {
    console.error('Check auth error:', error)
    return null
  } finally {
    isLoading.value = false
  }
}

async function logout() {
  isLoading.value = true
  try {
    await authServices.signOut()
    user.value = null
  } catch (error) {
    console.error('Logout error:', error)
  } finally {
    isLoading.value = false
  }
}

export function useAuth() {
  return { user, isLoading, login, checkAuth, logout }
}
