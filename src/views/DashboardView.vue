<script setup>
import { createSubtrack, fetchSubtracks } from '@/api/subtracks';
import { onMounted, ref } from 'vue';

  const subtracks = ref([])
  const amount = ref("")
  const memo = ref("")

  onMounted(async () => {
    subtracks.value = await fetchSubtracks()
  })

  const submit = async () => {
    await createSubtrack({
      amount: amount.value,
      memo: memo.value,
      date: new Date().toISOString().slice(0, 10)
    })
    subtracks.value = await fetchSubtracks()
    amount.value = ""
    memo.value = ""
  }
</script>

<template>
  <h1>Dashboard</h1>
  <h2>新規作成</h2>
  <input v-model="amount" type="number" placeholder="料金">
  <input v-model="memo" type="text" placeholder="メモ">
  <button @click="submit">登録</button>
  <h2>一覧</h2>
  <ul>
    <li v-for="subtrack in subtracks" :key="subtrack.id">{{ subtrack }}</li>
  </ul>
</template>