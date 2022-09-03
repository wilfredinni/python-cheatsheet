<script setup lang="ts">
const reader = useReaderStore()

const fontIndex = computed(() => {
  return reader.fontSizes.findIndex((item) => item === reader.fontSize)
})

const hasNext = computed(() => reader.fontSizes.length - 1 > fontIndex.value)
const increaseFont = () => {
  if (hasNext.value) {
    reader.setFontSize(reader.fontSizes[fontIndex.value + 1])
  }
}

const hasPrevious = computed(() => fontIndex.value !== 0)
const decreaseFont = () => {
  if (hasPrevious.value) {
    reader.setFontSize(reader.fontSizes[fontIndex.value - 1])
  }
}
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full flex-none bg-transparent backdrop-blur dark:border-slate-50/[0.06] lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-8xl px-4 xl:px-10">
      <div class="relative flex h-14 justify-between">
        <div
          class="flex flex-1 items-center justify-end space-x-5 sm:items-center"
        >
          <div
            class="ml-6 space-x-6 border-r border-slate-200 dark:border-slate-800"
          >
            <button
              class="text-slate-400 transition duration-300 dark:text-slate-500"
              :class="
                hasNext ? 'hover:text-sky-500 dark:hover:text-sky-500' : ''
              "
              @click="increaseFont"
            >
              A+
            </button>
            <button
              class="text-slate-400 transition duration-300 dark:text-slate-500"
              :class="
                hasPrevious ? 'hover:text-sky-500 dark:hover:text-sky-500' : ''
              "
              @click="decreaseFont"
            >
              A-
            </button>
            <span class="text-white"> </span>
          </div>

          <base-theme-toggle />

          <button
            class="rounded text-slate-400 transition duration-300 hover:text-sky-500 dark:hover:bg-transparent"
            @click="reader.toggle()"
          >
            <span class="sr-only">close reader mode</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
