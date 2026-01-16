import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("auth_token"))
  const isLoggedIn = computed(() => {
    return !!token.value
  })

  function login(newToken) {
    token.value = newToken
    localStorage.setItem("auth_token", newToken)
  }

  function logout() {
    token.value = null
    localStorage.removeItem("auth_token")
  }

  return {
    token,
    isLoggedIn,
    login, logout
  }
})