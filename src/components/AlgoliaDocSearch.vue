<script setup>
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
        if (route.path === itemUrl) window.location.assign(itemUrl)
        else router.push(itemUrl)
      },
    },

    transformItems(items) {
      return items.map((item) => {
        const { pathname, hash } = new URL(item.url)
        return Object.assign({}, item, {
          url: pathname + hash,
        })
      })
    },

    hitComponent({ hit, children }) {
      return {
        __v: null,
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,

        props: {
          href: hit.url,

          onClick(event) {
            if (isSpecialClick(event)) return

            // we rely on the native link scrolling when user is already on
            // the right anchor because Router doesn't support duplicated
            // history entries.
            if (route.path === hit.url) return

            // if the hits goes to another page, we prevent the native link
            // behavior to leverage the Router loading feature.
            if (route.path !== hit.url) event.preventDefault()

            router.push(hit.url)
          },

          children,
        },
      }
    },
  })
})

function isSpecialClick(event) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}
</script>

<template>
  <div id="docsearch" />
</template>
