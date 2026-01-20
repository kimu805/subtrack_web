<script setup>
import api from '@/lib/api';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

  const email = ref("")
  const password = ref("")
  const auth = useAuthStore()
  const router = useRouter()

  const submit = async () => {
    const res = await api.post("/login", {
      email: email.value,
      password: password.value
    })

    auth.login(res.data.token)
    router.push("/")
  }
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button>login</button>
  </form>
</template>