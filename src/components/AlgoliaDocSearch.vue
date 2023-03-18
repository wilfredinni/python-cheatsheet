<script setup lang="ts">
import docsearch from '@docsearch/js'

const router = useRouter()
const route = useRoute()

const userOptions = {
  container: '#docsearch',
  appId: import.meta.env.VITE_DOCSEARCH_APP_ID,
  indexName: import.meta.env.VITE_DOCSEARCH_INDEX_NAME,
  apiKey: import.meta.env.VITE_DOCSEARCH_API_KEY,
}

function initialize() {
  const options = Object.assign({}, userOptions, {
    navigator: {
      navigate({ itemUrl }: { itemUrl: string }) {
        const { pathname: hitPathname } = new URL(
          window.location.origin + itemUrl
        )

        // router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname) {
          window.location.assign(window.location.origin + itemUrl)
        } else {
          router.push(itemUrl)
        }
      },
    },

    transformItems(items: any[]) {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url),
        })
      })
    },

    hitComponent({ hit, children }: { hit: any; children: any }) {
      return {
        __v: 1,
        type: 'a',
        constructor: undefined,

        props: {
          href: hit.url,
          children,

          onClick(event: MouseEvent) {
            if (isSpecialClick(event)) return

            // we rely on the native link scrolling when user is already on
            // the right anchor because Router doesn't support duplicated
            // history entries.
            if (route.fullPath === hit.url) return

            const { pathname: hitPathname } = new URL(
              window.location.origin + hit.url
            )
            // if the hits goes to another page, we prevent the native link
            // behavior to leverage the Router loading feature.
            if (route.path !== hitPathname) event.preventDefault()

            // router doesn't handle same-page navigation so we use the native
            // browser location API for anchor navigation
            if (route.path === hitPathname) {
              window.location.assign(window.location.origin + hit.url)
            } else {
              router.push(hit.url)
            }
          },
        },
      }
    },
  })

  // @ts-ignore: Unreachable code error
  docsearch(options)
}

/**
 * Check if event is special click to avoid closing the DocSearch too soon.
 */
const isSpecialClick = (event: MouseEvent) =>
  event.button === 1 ||
  event.altKey ||
  event.ctrlKey ||
  event.metaKey ||
  event.shiftKey

/**
 * Gets the relative path from an absolute URL provided by the DocSearch instance.
 */
const getRelativePath = (absoluteUrl: string) => {
  const { pathname, hash } = new URL(absoluteUrl)
  const url = window.location.origin
  const relativeUrl = pathname.replace(url, '/') + hash
  return relativeUrl.replace(/\/+$/, '')
}

onMounted(() => {
  initialize()
})
</script>

<template>
  <div id="docsearch" />
</template>
