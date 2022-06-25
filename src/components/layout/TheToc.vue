<script setup lang="ts">
import type { Ref } from 'vue'

const content: Ref<string[]> = ref([])

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

const route = useRoute()
onMounted(() => createContents())
watch(route, () => {
  nextTick(() => createContents())
})
</script>

<template>
  <nav aria-labelledby="on-this-page-title" className="w-56">
    <h2 class="font-display text-sm font-medium text-slate-900 dark:text-white">
      On this page
    </h2>

    <ul class="mt-4 text-sm">
      <li v-for="(item, index) in content" :key="item">
        <a
          :href="`#${slugify(item)}`"
          class="block py-1 font-medium"
          :class="
            index === 0
              ? 'text-sky-500 '
              : ' text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
          "
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
  <!-- <h5
    class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
  >
    On this page
  </h5>
  <ul class="text-sm leading-6">
    <li v-for="(item, index) in content" :key="item">
      <a
        :href="`#${slugify(item)}`"
        class="block py-1 font-medium"
        :class="
          index === 0
            ? 'text-sky-500 dark:text-sky-400'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
        "
      >
        {{ item }}
      </a>
    </li>
  </ul> -->
</template>
