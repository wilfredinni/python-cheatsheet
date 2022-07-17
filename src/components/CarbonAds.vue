<script setup lang="ts">
defineProps<{
  vertical?: boolean
}>()

const container = ref()
let hasInitalized = false
const loadCarbon = import.meta.env.VITE_LOAD_CARBON || false
function init() {
  if (!hasInitalized) {
    const serve = import.meta.env.VITE_CARBON_SERVE
    const placement = import.meta.env.VITE_CARBON_PLACEMENT
    hasInitalized = true
    const s = document.createElement('script')
    s.id = '_carbonads_js'
    s.src = `https://cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`
    s.async = true
    container.value.appendChild(s)
  }
}
onMounted(() => {
  if (loadCarbon === 'true') {
    init()
  }
})
</script>

<template>
  <div
    v-if="loadCarbon === 'true'"
    id="carbonads"
    ref="container"
    class="vertical"
  />
</template>
