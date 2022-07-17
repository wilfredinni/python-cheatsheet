<script setup lang="ts">
import type { Ref } from 'vue'

const toc: Ref<string[]> = ref([])
const currentSection = ref('')

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const createToc = () => {
  const h2 = document.getElementsByTagName('h2')
  toc.value = Array.from(h2).map((item) => item.innerText)
}

const insetH2Id = () => {
  document.querySelectorAll('article h2').forEach((header) => {
    const h2 = header as HTMLElement
    header.setAttribute('id', slugify(h2.innerText))
  })
}

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

const route = useRoute()
onMounted(() => {
  createToc()
  insetH2Id()
  getObserver()
})

watch(route, () => {
  nextTick(() => {
    createToc()
    insetH2Id()
    getObserver()
  })
})
</script>

<template>
  <nav aria-labelledby="on-this-page-title" class="w-56">
    <carbon-ads class="mb-5" />

    <h3 class="font-display text-sm font-medium text-slate-900 dark:text-white">
      On this page
    </h3>

    <ul class="mt-4 text-sm">
      <li v-for="item in toc" :key="item">
        <a
          :href="`#${slugify(item)}`"
          class="block py-1 font-medium transition duration-200"
          :class="
            currentSection === slugify(item)
              ? 'text-sky-500 '
              : ' text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
          "
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>
