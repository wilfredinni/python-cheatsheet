<script setup lang="ts">
import docsearch from '@docsearch/js'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  docsearch({
    container: import.meta.env.VITE_DOCSEARCH_CONTAINER,
    appId: import.meta.env.VITE_DOCSEARCH_APP_ID,
    indexName: import.meta.env.VITE_DOCSEARCH_INDEX_NAME,
    apiKey: import.meta.env.VITE_DOCSEARCH_API_KEY,

    navigator: {
      navigate({ itemUrl }) {
        const { pathname, hash } = new URL(itemUrl)
        if (route.path === pathname) {
          window.location.assign(pathname + hash)
        } else {
          router.push(pathname)
        }
      },
    },
  })
})
</script>

<template>
  <div id="docsearch" />
</template>
