import { useAuthStore } from "@/stores/auth"

const API_BASE = "http://localhost:3000/api"

export async function apiFetch(path, options = {}) {
  const auth = useAuthStore()

  const headers = {
    "Content-Type": "application/json",
    ...options.headers
  }

  if (auth.token) {
    headers["Authorization"] = `Bearer ${auth.token}`
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options, headers
  })

  if (res.status === 401) { 
    auth.logout()
    throw new Error("Unauthorized")
  }

  return res
}