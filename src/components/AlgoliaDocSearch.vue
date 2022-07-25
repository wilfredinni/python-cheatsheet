<script setup lang="ts">
import docsearch from '@docsearch/js'

onMounted(() => {
  docsearch({
    container: import.meta.env.VITE_DOCSEARCH_CONTAINER,
    appId: import.meta.env.VITE_DOCSEARCH_APP_ID,
    indexName: import.meta.env.VITE_DOCSEARCH_INDEX_NAME,
    apiKey: import.meta.env.VITE_DOCSEARCH_API_KEY,
  })
})
</script>

<template>
  <div id="docsearch" />
</template>
