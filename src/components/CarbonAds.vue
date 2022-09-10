<script setup lang="ts">
const container = ref()
function init() {
  const serve = import.meta.env.VITE_CARBON_SERVE
  const placement = import.meta.env.VITE_CARBON_PLACEMENT
  const s = document.createElement('script')
  s.id = '_carbonads_js'
  s.src = `https://cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`
  s.async = true
  container.value.appendChild(s)
}

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
    class="h-[280px] w-[152px] rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
  >
    <div id="carbonads" ref="container" />
  </div>
</template>
