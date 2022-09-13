<script setup lang="ts">
import { onMounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const container = ref()

const placeholder = ref(false)
const init = () => {
  placeholder.value = true
  const serve = import.meta.env.VITE_CARBON_SERVE
  const placement = import.meta.env.VITE_CARBON_PLACEMENT
  const s = document.createElement('script')
  s.id = '_carbonads_js'
  s.src = `https://cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`
  s.async = true
  container.value.appendChild(s)
  debouncedFn()
}

const debouncedFn = useDebounceFn(() => {
  placeholder.value = false
}, 100)

const loadCarbon = import.meta.env.VITE_LOAD_CARBON || false

onMounted(() => {
  if (loadCarbon === 'true') {
    init()
  }
})
</script>

<template>
  <div
    v-if="loadCarbon === 'true'"
    class="relative h-[255px] w-[152px] rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
  >
    <div id="carbonads" ref="container" />

    <Transition>
      <div
        v-show="placeholder"
        class="absolute top-0 h-[252px] w-[150px] rounded-md bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
      />
    </Transition>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
