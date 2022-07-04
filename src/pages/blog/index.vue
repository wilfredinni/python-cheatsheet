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
  <prose>
    <h1>Blog</h1>
    <p class="lead">
      These articles provide a deeper look to the the contents of the
      <router-link to="/">Python Cheatsheet</router-link>.
    </p>
  </prose>

  <div class="mt-5">
    <ul class="border-l border-l-slate-200 dark:border-l-slate-800">
      <li
        v-for="article in articles"
        :key="article.path"
        class="my-4 flex rounded-r-2xl px-6 py-5 hover:bg-sky-50 hover:dark:bg-slate-800/60 hover:dark:ring-1 hover:dark:ring-slate-300/10"
      >
        <router-link :to="article.path">
          <span class="text-sm font-medium text-sky-500">
            Posted on {{ article.children[0]?.meta?.date }}
          </span>
          <h2 class="text-lg font-semibold text-slate-600 dark:text-slate-300">
            {{ article.children[0]?.meta?.title }}
          </h2>

          <p class="text-slate-600 line-clamp-2 dark:text-slate-400">
            {{ article.children[0]?.meta?.description }}
          </p>
          <div class="mt-3 flex items-center text-sm font-medium text-sky-500">
            Read more
            <svg
              class="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
