<script setup lang="ts"></script>

<template>
  <main class="h-full px-4 py-10 text-center text-gray-700 dark:bg-gray-800">
    <div class="flex items-center justify-center space-x-3">
      <base-theme-local />

      <base-theme-toggle />
    </div>

    <div class="flex justify-center">
      <RouterView />
    </div>
  </main>
</template>
