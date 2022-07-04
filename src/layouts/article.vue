<script setup lang="ts">
const core = useCoreStore()
const repository = 'https://github.com/wilfredinni/python-cheatsheet/blob/next/'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar v-show="!core.reader" />
    <the-reader-mode-navbar v-show="core.reader" />

    <div
      class="relative mx-auto flex min-h-screen max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <!-- article -->
      <div
        class="min-w-0 flex-auto px-4 py-12 lg:pr-0 lg:pl-8 xl:px-16"
        :class="[core.reader ? 'max-w-2xl lg:max-w-4xl' : 'lg:max-w-4xl']"
      >
        <article>
          <prose><RouterView /></prose>
        </article>

        <div class="mt-10 flex justify-end border-t dark:border-t-slate-800">
          <a
            target="_blank"
            :href="`${repository}${$route.path}.md`"
            class="mt-5 flex items-center space-x-1.5 text-sm text-slate-600 hover:text-sky-500 dark:text-sky-500"
          >
            <span>Edit this page on github</span>
          </a>
        </div>
      </div>

      <!-- table of content -->
      <div
        v-show="!core.reader"
        class="hidden overflow-x-hidden xl:sticky xl:top-[4.3rem] xl:-mr-6 xl:block xl:h-[calc(100vh-3.6rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6"
      >
        <the-toc />
      </div>
    </div>
  </div>
</template>
