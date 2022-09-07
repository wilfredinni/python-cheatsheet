<script setup lang="ts">
const props = defineProps<{
  storageKeyName?: string
}>()

const reader = useReaderStore()

const keyName = computed(() => {
  if (props.storageKeyName) return props.storageKeyName
  return 'showBanner'
})

const showBanner = useLocalStorage(keyName.value, true)
</script>

<template>
  <!--
  <base-banner storage-key-name="issue-1-banner">
    <template #shortMsg>First newsletter Issue is out!</template>
    <template #message>
      ✨ Big news! The first Issue of the Python Cheatsheet newsletter is out!
    </template>
    <template #action>
      <a href="https://news.pythoncheatsheet.org/" class="font-bold underline">
        Read Issue
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </template>
  </base-banner>
  -->
  <div v-if="!reader.isActive && showBanner" class="dark:bg-gray-900">
    <div class="relative bg-sky-400/10">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:px-16 sm:text-center">
          <p class="text-sm font-medium text-sky-600 dark:text-sky-400">
            <span class="md:hidden">
              <slot name="shortMsg">We announced a new product!</slot>
            </span>
            <span class="hidden md:inline">
              <slot name="message">
                Big news! We're excited to announce a brand new product.
              </slot>
            </span>
            <span class="block sm:ml-2 sm:inline-block">
              <slot name="action">
                <a
                  href="https://news.pythoncheatsheet.org/"
                  class="font-bold underline"
                >
                  Read Issue
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </slot>
            </span>
          </p>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:pt-1.5 sm:pr-2"
        >
          <button
            type="button"
            class="flex rounded-md p-2 text-sky-600 transition duration-300 focus:outline-none dark:text-sky-400 dark:hover:text-sky-500"
            @click="showBanner = false"
          >
            <span class="sr-only">Dismiss</span>
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
  </div>
</template>
