import api from "@/lib/api"

export const fetchSubtracks = () => {
  return api.get("/subtracks").then(res => res.data)
}

export const createSubtrack = (data) => {
  return api.post("/subtracks", { subtrack: data })
}

export const deleteSubtrack = (id) => {
  return api.delete(`/subtracks/${id}`)
}