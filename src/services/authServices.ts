import { supabaseClient } from '@/services/supabase'
import type { Session } from '@supabase/supabase-js'

export const authServices = {
  async signIn(email: string, password: string) {
    return await supabaseClient.auth.signInWithPassword({ email, password })
  },

  async signOut() {
    return await supabaseClient.auth.signOut()
  },

  async getSession(): Promise<Session | null> {
    const res = await supabaseClient.auth.getSession()
    return res.data.session ?? null
  },
}
