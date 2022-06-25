<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar />

    <div
      class="relative mx-auto flex min-h-screen max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <!-- sidebar -->
      <div class="hidden lg:relative lg:block lg:flex-none">
        <div class="absolute inset-y-0 right-0 w-[50vw] dark:hidden" />
        <div
          class="sticky top-[3.6rem] -ml-0.5 h-[calc(100vh-3.6rem)] overflow-y-auto overflow-x-hidden py-10 pl-0.5"
        >
          <div
            class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
          />
          <div
            class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
          />
          <div class="w-64 pr-8 xl:w-72 xl:pr-16">
            <the-sidebar />
          </div>
        </div>
      </div>

      <!-- article -->
      <div
        class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16"
      >
        <article>
          <markdown><RouterView /></markdown>
        </article>
      </div>

      <!-- table of content -->
      <div
        class="hidden overflow-x-hidden xl:sticky xl:top-[3.6rem] xl:-mr-6 xl:block xl:h-[calc(100vh-3.6rem)] xl:flex-none xl:overflow-y-auto xl:py-10 xl:pr-6"
      >
        <the-toc />
      </div>
    </div>
  </div>
</template>
