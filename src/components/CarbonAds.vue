<script setup lang="ts">
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
  <div v-if="loadCarbon === 'true'" id="carbonads" ref="container" />
</template>

<style scoped>
#carbonads {
  z-index: 1;
  display: block;
  overflow: hidden;
  padding: 0.7em;
  max-width: 150px;
  background: #f8fafc;
  text-align: center;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
}

.dark #carbonads {
  background: #1e293b;
  color: #cbd5e1;
  border: 1px solid #334155;
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

#carbonads span {
  display: block;
  overflow: hidden;
}

.carbon-img {
  display: block;
  margin: 0 auto 8px;
  line-height: 1;
}

.carbon-text {
  display: block;
  margin-bottom: 18px;
}

.carbon-poweredby {
  display: block;
  text-transform: uppercase !important;
  letter-spacing: 1px;
  font-size: 10px;
  line-height: 1;
}
</style>
