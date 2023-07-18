<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!reader.isActive" />
    <the-navbar-reader v-show="reader.isActive" />
    <div class="relative mx-auto flex max-w-8xl sm:px-2 lg:px-8 xl:px-12">
      <router-view />
    </div>
  </div>
</template>
