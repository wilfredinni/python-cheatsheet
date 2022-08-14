<script setup lang="ts">
const route = useRoute()
const navigation = useNavigationStore()

const changelogPath = [{ name: 'Changelog', path: '/changelog' }]
const allRoutes = [
  ...changelogPath,
  ...navigation.mainNavigation,
  ...navigation.cheatsheetNavigation,
  ...navigation.standardLibraryNavigation,
]

const previous = computed(() => {
  try {
    const index = allRoutes.findIndex((item) => item.path === route.path)
    return allRoutes[index - 1]
  } catch (err) {
    return null
  }
})

const next = computed(() => {
  try {
    const index = allRoutes.findIndex((item) => item.path === route.path)
    return allRoutes[index + 1]
  } catch (err) {
    return null
  }
})
</script>

<template>
  <div class="mt-5 grid grid-cols-1 gap-4 pt-5 text-slate-400 sm:grid-cols-2">
    <router-link
      v-if="previous"
      :to="previous.path"
      class="grid w-full rounded-lg border border-slate-300/70 p-5 transition duration-300 hover:border-sky-500 hover:bg-sky-400/5 dark:border-slate-800 dark:hover:border-sky-400"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">
        Previous page
      </span>
      <span class="font-medium text-sky-500 dark:text-sky-400">
        {{ previous.name }}
      </span>
    </router-link>
    <div v-else />
    <router-link
      v-if="next"
      :to="next.path"
      class="grid w-full rounded-lg border border-slate-300/70 p-5 text-end transition duration-300 hover:border-sky-500 hover:bg-sky-400/5 dark:border-slate-800 dark:hover:border-sky-400"
    >
      <span class="text-sm text-slate-500 dark:text-slate-400">
        Next page
      </span>
      <span class="font-medium text-sky-500 dark:text-sky-400">
        {{ next.name }}
      </span>
    </router-link>
    <div v-else />
  </div>
</template>
