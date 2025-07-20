<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['prev-page', 'next-page'])

const prev = () => {
  emit('prev-page')
}

const next = () => {
  emit('next-page')
}
</script>

<template>
  <div class="mt-12 flex items-center justify-between gap-x-8 max-w-lg mx-auto">
    <button
      :disabled="currentPage === 1"
      class="rounded-lg border border-slate-300/70 p-4 text-left transition duration-300 hover:border-sky-500 hover:bg-sky-400/5 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:hover:border-sky-400"
      @click="prev"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">Previous</span>
      <span class="mt-1 block font-medium text-sky-500 dark:text-sky-400">
        Newer posts
      </span>
    </button>

    <span class="font-medium text-slate-700 dark:text-slate-300">
      {{ currentPage }} / {{ totalPages }}
    </span>

    <button
      :disabled="currentPage === totalPages"
      class="rounded-lg border border-slate-300/70 p-4 text-right transition duration-300 hover:border-sky-500 hover:bg-sky-400/5 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:hover:border-sky-400"
      @click="next"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">Next</span>
      <span class="mt-1 block font-medium text-sky-500 dark:text-sky-400">
        Older posts
      </span>
    </button>
  </div>
</template>
