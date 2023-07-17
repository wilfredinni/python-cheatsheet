<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <button @click="reader.toggle()">
    <base-badge-secondary class=""> Enter reader mode </base-badge-secondary>
  </button>
</template>
