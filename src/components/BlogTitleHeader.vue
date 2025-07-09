<script setup lang="ts">
interface Frontmatter {
  date: string
  updated: string
  tags: string
  socialImage?: string
}

const props = defineProps<{
  frontmatter: Frontmatter
  title: string
}>()

const reader = useReaderStore()
const tags = props.frontmatter.tags?.split(', ')
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
      <span
        v-if="frontmatter.updated"
        class="font-display text-sm text-slate-400 sm:ml-2"
      >
        Updated on {{ frontmatter.updated }}
      </span>
    </div>
    <h1 :class="tags && !reader.isActive ? 'mb-0' : ''">{{ title }}</h1>

    <div
      v-if="tags && !reader.isActive"
      class="mb-10 mt-3 flex flex-wrap gap-3 text-xs text-slate-50 dark:text-white"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded bg-sky-500 px-1.5 py-1 dark:bg-sky-600"
      >
        #{{ tag }}
      </span>
    </div>

    <img
      v-if="frontmatter.socialImage"
      :src="frontmatter.socialImage"
      :alt="`Image for ${title}`"
      class="w-full rounded-lg my-4"
    />
  </div>
</template>
