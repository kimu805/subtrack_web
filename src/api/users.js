import { apiFetch } from "./client";

export async function fetchMe() {
  const res = await apiFetch("/me")
  return await res.json()
}