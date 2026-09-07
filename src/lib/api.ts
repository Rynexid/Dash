const DEV_FALLBACK = "http://localhost:8080"

export const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, "") || DEV_FALLBACK

export const API_AUTH = (import.meta.env.VITE_API_AUTH as string | undefined) || "rynote-dashboard-secret"

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: API_AUTH },
  })
  if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`)
  return (await res.json()) as T
}