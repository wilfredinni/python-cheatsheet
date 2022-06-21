<script setup lang="ts">
const { availableLocales, locale } = useI18n()
</script>

<template>
  <select
    v-model="locale"
    class="rounded py-0.5 focus:outline-none dark:text-gray-800"
  >
    <option v-for="lang in availableLocales" :key="lang" :value="lang">
      {{ lang }}
    </option>
  </select>
</template>
