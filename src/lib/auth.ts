import { createAuthClient } from 'better-auth/client'
import { dashClient } from '@better-auth/infra/client'
import { API_URL } from './api'

export const authClient = createAuthClient({
  baseURL: API_URL,
  plugins: [dashClient()],
})

export const { signIn, signOut, getSession } = authClient