<script setup lang="ts">
const { theToc, currentSection } = useToc()
const { reloadOn, reload } = useCarbon()

reloadOn(600000)
</script>

<template>
  <nav aria-labelledby="on-this-page-title" class="w-56">
    <carbon-ads v-if="!reload" class="mb-4" />
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
