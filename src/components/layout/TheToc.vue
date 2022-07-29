<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Ref } from 'vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const xlAndLarger = breakpoints.greater('xl')

interface Toc {
  header: string
  id: string
}

const theToc: Ref<Toc[]> = ref([])
const createToc = () => {
  const h2 = document.getElementsByTagName('h2')
  theToc.value = Array.from(h2).map((item) => {
    return { header: item.innerText, id: item.id }
  })
}

const currentSection = ref('')
const getObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id') as string
        }
      })
    },
    {
      rootMargin: '0px 0px -50% 0px',
    }
  )
  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
}

const initToc = () => {
  if (xlAndLarger.value) {
    createToc()
    getObserver()
  }
}

const route = useRoute()
onMounted(() => {
  initToc()
})

watch(route, () => {
  nextTick(() => {
    initToc()
  })
})
</script>

<template>
  <nav aria-labelledby="on-this-page-title" class="w-56">
    <carbon-ads class="mb-4" />
    <h3 class="font-display text-sm font-medium text-slate-900 dark:text-white">
      On this page
    </h3>

    <ul class="mt-4 text-sm">
      <li v-for="item in theToc" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="block py-1 font-medium transition duration-200"
          :class="
            currentSection === item.id
              ? 'text-sky-500 '
              : ' text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
          "
        >
          {{ item.header }}
        </a>
      </li>
    </ul>
  </nav>
</template>
