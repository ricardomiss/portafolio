import { useAuth } from '@/composable/useAuth'

export async function isAuthenticated(): Promise<boolean> {
  const { checkAuth } = useAuth()
  return !!(await checkAuth())
}
