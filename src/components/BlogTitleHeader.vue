<script setup lang="ts">
interface Frontmatter {
  date: string
  updated: string
}

defineProps<{
  frontmatter: Frontmatter
  title: string
}>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <span
        class="hidden font-display text-sm font-medium text-sky-500 sm:flex"
      >
        Posted on {{ frontmatter.date }}
      </span>
      <span class="ml-2 hidden text-slate-400 sm:flex">·</span>
      <span class="font-display text-sm text-slate-400 sm:ml-2">
        Updated on {{ frontmatter.updated }}
      </span>
    </div>
    <h1>{{ title }}</h1>
  </div>
</template>
