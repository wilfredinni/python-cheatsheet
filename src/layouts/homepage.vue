<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!reader.isActive" />
    <the-navbar-reader v-show="reader.isActive" />

    <!-- Main content without sidebar -->
    <div class="relative">
      <router-view />

      <!-- Footer -->
      <the-footer
        repository="https://github.com/wilfredinni/python-cheatsheet/blob/master/src/pages"
      />
    </div>
  </div>
</template>

<style scoped>
.overflow-overlay {
  overflow-y: overlay;
}
</style>
