<script setup lang="ts">
const container = ref()
let hasInitalized = false
function init() {
  if (!hasInitalized) {
    hasInitalized = true
    const s = document.createElement('script')
    s.id = '_carbonads_js'
    s.src = `https://cdn.carbonads.com/carbon.js?serve=CK7D62JL&placement=wwwpythoncheatsheetorg`
    s.async = true
    container.value.appendChild(s)
  }
}
onMounted(() => {
  // if the page is loaded when aside is active, load carbon directly.
  // otherwise, only load it if the page resizes to wide enough. this avoids
  // loading carbon at all on mobile where it's never shown
  init()
})
</script>

<template>
  <!-- <script id="_carbonads_projs" type="text/javascript" src="https://srv.carbonads.net/ads/CK7D62JL.json?segment=placement:wwwpythoncheatsheetorg&amp;callback=_carbonads_go"></script> -->
  <!-- <div id="carbonads" ref="container" class="mt-2" /> -->
  <div id="carbonads" ref="container" class="mt-2" />
</template>

<style scoped>
body {
  background: #eee;
}

#carbonads {
  display: block;
  overflow: hidden;
  padding: 1em;
  max-width: 158px;
  background: #f8fafc;
  text-align: center;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  border: 1px solid #0ea5e9;
  border-radius: 5px;
}

.dark #carbonads {
  background: #1e293b;
  color: #cbd5e1;
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
