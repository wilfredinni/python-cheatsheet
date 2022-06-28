<script setup>
const router = useRouter()

const articles = computed(() => {
  const routes = router.options.routes
  const posts = routes.filter((route) => {
    const path = route.path.split('/')[1]
    return path === 'blog' && route.path !== '/blog'
  })
  return posts
})
</script>

<template>
  <prose>
    <h1>Blog</h1>
    <p class="lead">
      Basic cheatsheet for Python mostly based on the book
      <a href="https://automatetheboringstuff.com/">
        Automate the Boring Stuff with Python
      </a>
      and many other sources.
    </p>
  </prose>

  <div class="mt-5">
    <ul>
      <li
        v-for="article in articles"
        :key="article.path"
        class="my-4 flex rounded-2xl border-l border-l-sky-200 px-6 py-5 hover:bg-sky-50 dark:border-l-sky-900 hover:dark:bg-slate-800/60 hover:dark:ring-1 hover:dark:ring-slate-300/10"
      >
        <router-link :to="article.path">
          <span class="font-display text-sm font-semibold text-sky-500">
            Posted on {{ article.children[0]?.meta?.date }}
          </span>
          <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-300">
            {{ article.children[0]?.meta?.title }}
          </h2>

          <p class="text-slate-700 line-clamp-2 dark:text-slate-400">
            {{ article.children[0]?.meta?.description }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
