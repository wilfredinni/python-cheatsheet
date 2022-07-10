<script setup lang="ts">
defineProps<{
  repository: string
}>()
</script>

<template>
  <footer class="mt-10 flex justify-end border-t dark:border-t-slate-800">
    <a
      target="_blank"
      :href="`${repository}${$route.path}.md`"
      class="mt-5 flex items-center space-x-1.5 text-sm text-slate-600 hover:text-sky-500 dark:text-sky-500"
    >
      <span>Edit this page on github</span>
    </a>
  </footer>
</template>
