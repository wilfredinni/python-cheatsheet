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

  <div>
    <ul>
      <li v-for="article in articles" :key="article.path">
        <h2>{{ article.children[0]?.meta?.title }}</h2>
        <p>{{ article.children[0]?.meta?.date }}</p>
        <p>{{ article.children[0]?.meta?.description }}</p>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
