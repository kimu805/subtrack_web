<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import { fetchMe } from './api/users';
import api from './lib/api';

  const auth = useAuthStore()

  onMounted(async () => {
    if (!auth.token) return 

    try {
      const me = await fetchMe()
    } catch {
      auth.logout()
    }
  })
</script>

<template>
  <h1>Subtrack</h1>
  <RouterView />
</template>