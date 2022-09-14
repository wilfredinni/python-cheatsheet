<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <button @click="reader.toggle()">
    <base-badge> Enter reader mode </base-badge>
  </button>
</template>
