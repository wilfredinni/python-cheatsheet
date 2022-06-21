<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})

const { t } = useI18n()
</script>

<template>
  <div>
    <router-link
      to="/about"
      class="mx-auto mt-12 flex w-fit justify-center tracking-wider dark:text-gray-200 text-gray-700 underline"
    >
      {{ t('index.about') }}
    </router-link>
  </div>
</template>
