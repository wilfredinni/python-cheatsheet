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
  <div v-if="!reader.isActive && showBanner">
    <div class="kinsta-background">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 md:px-0 lg:px-8">
        <div class="sm:px-16 sm:text-center">
          <p class="text-sm font-medium text-sky-600 dark:text-sky-400">
            <span class="flex items-center text-white md:hidden">
              <slot name="shortMsg">We announced a new product!</slot>
            </span>
            <span class="md hidden items-center md:flex md:justify-between">
              <slot name="message">
                Big news! We're excited to announce a brand new product.
              </slot>
            </span>
          </p>
        </div>
        <div
          class="absolute inset-y-0 right-0 items-start pt-1 pr-1 sm:pt-1.5 sm:pr-2"
        >
          <button
            type="button"
            class="hidden rounded-md p-2 text-white transition duration-300 focus:outline-none dark:hover:text-slate-300 sm:block"
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

<style scoped>
.kinsta-background {
  background-color: #5333ed;
}
</style>
