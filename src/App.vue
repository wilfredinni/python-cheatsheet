<script setup>
import { Head } from '@vueuse/head'

useHead({
  title: 'Python Cheatsheet - Python Cheatsheet',
  meta: [
    {
      name: 'description',
      content:
        'Anyone can forget how to make character classes for a regex, slice a list or do a for loop. This cheat sheet tries to provide a basic reference for beginner and advanced developers, lower the entry barrier for newcomers and help veterans refresh the old tricks.',
    },
    {
      name: 'author',
      content: 'Python Cheatsheet',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:image',
      content:
        'https://raw.githubusercontent.com/wilfredinni/pysheetBlog/master/img/logo.png',
    },
    {
      property: 'twitter:image',
      content:
        'https://raw.githubusercontent.com/wilfredinni/pysheetBlog/master/img/logo.png',
    },
    {
      name: 'twitter:site',
      content: '@pyCheatsheet',
    },
    {
      name: 'twitter:creator',
      content: '@pyCheatsheet',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#1f2937' : '#ffffff')),
    },
  ],
})

const inProduction = import.meta.env.PROD
if (inProduction) {
  useScriptTag(
    `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GTAG}`,
    () => {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', import.meta.env.VITE_GTAG)
    }
  )
}

const route = useRoute()
const base_url = import.meta.env.VITE_BASE_URL || 'localhost:3000'
watch(route, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <Head>
    <link rel="canonical" :href="`https://${base_url}${$route.path}`" />
    <meta property="og:url" :href="`https://${base_url}${$route.path}`" />
  </Head>
  <RouterView />
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #868686;
}

/* Track */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

/* Handle */
.dark ::-webkit-scrollbar-thumb {
  background: #6b7280;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dfe0e2;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9ca3af;
}
</style>
