<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import { fetchMe } from './api/users';

  const auth = useAuthStore()

  onMounted(async () => {
    if (!auth.token) return 

    try {
      const me = await fetchMe()
      console.log("login user", me)
    } catch {
      auth.logout()
    }
  })
</script>

<template>
  <h1>Subtrack</h1>
  <RouterView />
</template>