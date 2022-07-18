<script setup lang="ts">
defineProps<{
  repository: string
}>()
</script>

<template>
  <footer
    class="mt-10 flex items-center justify-between border-t pt-2 dark:border-t-slate-800"
  >
    <netlify-badge />
    <a
      target="_blank"
      :href="`${repository}${$route.path}.md`"
      class="flex items-center space-x-1.5 text-sm text-slate-500 hover:text-sky-500"
    >
      <span>Edit this page on github</span>
    </a>
  </footer>
</template>
