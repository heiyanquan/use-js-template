<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div>{{ { mounted } }}</div>
</template>

<style>
html.dark {
  background: #222;
  color: white;
}
</style>
