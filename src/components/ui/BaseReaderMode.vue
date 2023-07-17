<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <button @click="reader.toggle()">
    <base-badge class=""> Enter reader mode </base-badge>
  </button>
</template>
