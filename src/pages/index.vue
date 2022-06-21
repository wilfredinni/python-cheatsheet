<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})

const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold text-gray-700 dark:text-gray-200 m-auto">
      {{ t('index.title') }}
    </h1>

    <div
      class="mt-3 flex justify-center text-lg font-semibold tracking-wider text-gray-700 dark:text-gray-200"
    >
      {{ t('index.description') }}
    </div>

    <user />

    <router-link
      to="/about"
      class="mx-auto mt-12 flex w-fit justify-center tracking-wider dark:text-gray-200 text-gray-700 underline"
    >
      {{ t('index.about') }}
    </router-link>
  </div>
</template>
