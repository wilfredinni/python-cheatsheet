<script setup lang="ts">
useHead({
  title: '404 Not Found',
  meta: [
    {
      name: 'description',
      content:
        'These articles provide a deeper look to the the contents of the Python Cheatsheet.',
    },
  ],
})
</script>

<template>
  <div class="flex min-h-full flex-col bg-gray-900 pt-16 pb-12">
    <main
      class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      <div class="flex flex-shrink-0 justify-center">
        <router-link to="/" class="inline-flex">
          <span class="sr-only">Python Cheatsheet</span>
          <img
            class="h-12 w-auto"
            src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
            alt="python-cheatsheet"
          />
        </router-link>
      </div>
      <div class="py-12">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-wide text-sky-400">
            404 error
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-base text-slate-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <router-link
              to="/"
              class="text-base font-medium text-sky-400 hover:text-sky-500"
            >
              Go back home<span aria-hidden="true"> &rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
