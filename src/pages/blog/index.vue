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

const latestArticle = computed(() => articles.value[0])
const otherArticles = computed(() => articles.value.slice(1))
</script>

<template>
  <div v-if="latestArticle" class="mb-12">
    <router-link
      :to="latestArticle.path"
      class="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div class="md:flex">
        <div class="md:w-1/2">
          <img
            v-if="latestArticle.children[0]?.meta?.socialImage"
            :src="latestArticle.children[0]?.meta?.socialImage"
            alt=""
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-700"
          >
            <svg
              class="h-12 w-12 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18"
              />
            </svg>
          </div>
        </div>
        <div class="p-6 md:w-1/2">
          <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {{ latestArticle.children[0]?.meta?.title }}
          </h2>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ latestArticle.children[0]?.meta?.description }}
          </p>
          <div class="mt-4 flex items-center justify-between">
            <time class="text-sm text-slate-500 dark:text-slate-400">
              {{ latestArticle.children[0]?.meta?.date }}
            </time>
            <div class="flex items-center text-sm font-medium text-sky-500">
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
        </div>
      </div>
    </router-link>
  </div>

  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <router-link
      v-for="article in otherArticles"
      :key="article.path"
      :to="article.path"
      class="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div class="relative overflow-hidden">
        <img
          v-if="article.children[0]?.meta?.socialImage"
          :src="article.children[0]?.meta?.socialImage"
          alt=""
          class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          v-else
          class="flex h-48 w-full items-center justify-center bg-slate-100 dark:bg-slate-700"
        >
          <svg
            class="h-12 w-12 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18"
            />
          </svg>
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
          {{ article.children[0]?.meta?.title }}
        </h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {{ article.children[0]?.meta?.description }}
        </p>
        <div class="mt-4 flex items-center justify-between">
          <time class="text-xs text-slate-500 dark:text-slate-400">
            {{ article.children[0]?.meta?.date }}
          </time>
          <div class="flex items-center text-sm font-medium text-sky-500">
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
      </div>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
