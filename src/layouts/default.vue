<script setup>
const content = ref([])

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const createContents = () => {
  const h2 = document.getElementsByTagName('h2')
  return Array.from(h2).map((item) => item.innerText)
}

const route = useRoute()
onMounted(() => (content.value = createContents()))
watch(route, () => {
  nextTick(() => {
    content.value = createContents()
  })
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar />

    <div class="pb-6">
      <div
        class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-4 lg:px-8"
      >
        <div class="hidden pt-6 lg:col-span-3 lg:block xl:col-span-3">
          <nav
            aria-label="Sidebar"
            class="fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pt-5 lg:block"
          >
            <the-sidebar />
          </nav>
        </div>

        <main class="px-3 sm:px-0 lg:col-span-9 xl:col-span-7">
          <markdown>
            <RouterView />
          </markdown>
        </main>

        <aside class="hidden xl:col-span-2 xl:block">
          <div
            class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block"
          >
            <h5
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
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
