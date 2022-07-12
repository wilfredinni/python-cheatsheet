<script setup>
const route = useRoute()
const { meta } = useMeta()
useHead(meta)

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

watch(route, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
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
