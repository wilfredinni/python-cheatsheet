<script setup lang="ts"></script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:bg-gray-800 h-full">
    <div class="flex items-center justify-center space-x-3">
      <base-theme-local />

      <base-theme-toggle />
    </div>

    <div class="justify-center flex mt-10">
      <RouterView />
    </div>
  </main>
</template>
