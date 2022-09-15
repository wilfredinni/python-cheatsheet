<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!reader.isActive" />
    <the-navbar-reader v-show="reader.isActive" />

    <div
      class="relative mx-auto flex min-h-screen max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <!-- article -->
      <div
        class="min-w-0 flex-auto px-4 py-12 lg:pr-0 lg:pl-8 xl:px-16"
        :class="[reader.isActive ? 'max-w-2xl lg:max-w-4xl' : 'lg:max-w-4xl']"
      >
        <article>
          <RouterView />
        </article>
      </div>

      <div
        v-show="!reader.isActive"
        class="hidden w-56 overflow-x-hidden xl:sticky xl:top-[3.6rem] xl:-mr-6 xl:block xl:h-[calc(100vh-3.6rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6"
      >
        <div class="flex h-full flex-col justify-end">
          <carbon-ads />
        </div>
      </div>
    </div>
  </div>
</template>
