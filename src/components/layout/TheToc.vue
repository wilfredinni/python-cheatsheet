<script setup lang="ts">
import type { Ref } from 'vue'

const content: Ref<string[]> = ref([])
const currentSection = ref('')

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const createContents = () => {
  const h2 = document.getElementsByTagName('h2')
  content.value = Array.from(h2).map((item) => item.innerText)
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
      rootMargin: '0px 0px -80% 0px',
    }
  )
  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
}

const route = useRoute()
onMounted(() => {
  createContents()
  getObserver()
})

watch(route, () => {
  nextTick(() => {
    createContents()
    getObserver()
  })
})
</script>

<template>
  <nav aria-labelledby="on-this-page-title" className="w-56">
    <h3 class="font-display text-sm font-medium text-slate-900 dark:text-white">
      On this page
    </h3>

    <ul class="mt-4 text-sm">
      <li v-for="item in content" :key="item">
        <a
          :href="`#${slugify(item)}`"
          class="block py-1 font-medium"
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
