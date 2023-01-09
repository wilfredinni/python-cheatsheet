<script setup lang="ts">
const container = ref()

const placeholder = ref(false)
const init = () => {
  const carbonScript = document.getElementById('_carbonads_projs')
  if (carbonScript) carbonScript.remove()

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
  if (loadCarbon === 'true') init()
})
</script>

<template>
  <div class="mt-4 space-y-1.5">
    <!-- <vps-server /> -->
    <div
      v-if="loadCarbon === 'true'"
      class="relative flex h-[270px] w-[200px] justify-center rounded-md bg-slate-100/70 dark:border-slate-700 dark:bg-slate-800"
    >
      <div id="carbonads" ref="container" class="mb-40 h-full" />

      <Transition>
        <div
          v-show="placeholder"
          class="absolute top-0 h-full w-full rounded-md bg-slate-100/70 dark:border-slate-700 dark:bg-slate-800"
        />
      </Transition>
    </div>
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
