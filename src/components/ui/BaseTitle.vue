<script setup lang="ts">
const { share, isSupported } = useShare()

const props = defineProps<{
  title: string
  description: string
}>()

function startShare() {
  share({
    title: props.title,
    text: props.description,
    url: location.href,
  })
}
</script>

<template>
  <div
    class="not-prose group mb-8 grid w-full grid-cols-12 content-center leading-[1.1111111]"
  >
    <h1
      class="doc-title col-span-11 text-[2.25em] font-medium text-slate-900 dark:text-white"
    >
      <slot />
    </h1>
    <div
      class="flex w-full justify-end text-slate-400 opacity-0 transition duration-200 group-hover:opacity-100"
    >
      <button
        v-if="isSupported"
        class="transition duration-200 hover:text-sky-500"
        @click="startShare"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Share</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.doc-title {
  font-family: Lexend, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';
}
</style>
