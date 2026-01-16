<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login as loginApi } from "@/api/auth"

  const email = ref("")
  const password = ref("")
  const error = ref("")

  const auth = useAuthStore()
  const router = useRouter()

  const handleLogin = async () => {
    error.value = ""

    try { 
      const res = await loginApi(email.value, password.value)
      auth.login(res.token)
      router.push("/")
    } catch (e) {
      error.value = "ログインに失敗しました"
    }
  }
</script>

<template>
  <h1>ログイン</h1>

  <div v-if="error" style="color: red">{{ error }}</div>

  <label>email
    <input v-model="email" placeholder="email">
  </label>

  <label>password
    <input v-model="password" type="password" placeholder="password">
  </label>

  <button @click="handleLogin">ログイン</button>
</template>