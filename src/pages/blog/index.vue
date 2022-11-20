<script setup>
useHead({
  title: 'Blog - Python Cheatsheet',
  meta: [
    {
      name: 'description',
      content:
        'These articles provide a deeper look to the the contents of the Python Cheatsheet.',
    },
  ],
})

const router = useRouter()

const articles = computed(() => {
  const routes = router.options.routes
  const posts = routes.filter((route) => {
    const path = route.path.split('/')[1]
    return path === 'blog' && route.path !== '/blog'
  })
  return posts.sort(function (a, b) {
    return (
      new Date(b.children[0]?.meta?.date) - new Date(a.children[0]?.meta?.date)
    )
  })
})
</script>

<template>
  <div>
    <h1
      class="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl"
    >
      Blog
    </h1>
    <p class="mt-6 text-base text-slate-600 dark:text-slate-400">
      These articles provide a more in-depth look at the contents of the
      <router-link
        class="-underline-offset-4 font-medium text-sky-600 underline"
        to="/"
        >Python Cheatsheet</router-link
      >.
    </p>
  </div>

  <div class="sm:mt-13 mt-20">
    <div
      class="md:border-l md:border-slate-100 md:pl-6 md:dark:border-slate-700/40"
    >
      <div class="flex max-w-3xl flex-col space-y-16">
        <article
          v-for="article in articles"
          v-once
          :key="article.path"
          class="md:grid md:grid-cols-4 md:items-baseline"
        >
          <div class="group relative flex flex-col items-start md:col-span-3">
            <h2
              class="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100"
            >
              <div
                class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-slate-100/60 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-800/60 sm:-inset-x-6 sm:rounded-2xl"
              />
              <router-link :to="article.path">
                <span
                  class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
                />
                <span class="relative z-10">
                  {{ article.children[0]?.meta?.title }}
                </span>
              </router-link>
            </h2>
            <time
              class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-slate-400 dark:text-slate-500 md:hidden"
              datetime="2022-09-05"
            >
              <span
                class="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span
                  class="h-4 w-0.5 rounded-full bg-slate-200 dark:bg-slate-500"
                />
              </span>
              September 5, 2022
            </time>
            <p
              class="relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400"
            >
              {{ article.children[0]?.meta?.description }}
            </p>
            <div
              aria-hidden="true"
              class="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-500"
            >
              Read article
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                class="ml-1 h-4 w-4 stroke-current"
              >
                <path
                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <time
            class="relative z-10 order-first mt-1 mb-3 hidden items-center text-sm text-slate-400 dark:text-slate-500 md:block"
            datetime="2022-09-05"
          >
            {{ article.children[0]?.meta?.date }}
          </time>
        </article>
      </div>
    </div>

    <subscription-form class="mt-12" />
    <the-footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
