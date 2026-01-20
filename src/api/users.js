import api from "@/lib/api";

export async function fetchMe() {
  const res = await api.get("/me")
  return await res.data
}