<script setup lang="ts">
const darkMode = ref(isDark)
const netlifyBadge = computed(() => {
  if (darkMode.value)
    return 'https://www.netlify.com/v3/img/components/netlify-dark.svg'
  return 'https://www.netlify.com/v3/img/components/netlify-light.svg'
})
</script>

<template>
  <a href="https://www.netlify.com" target="_blank">
    <img
      :src="netlifyBadge"
      loading="lazy"
      alt="Deploys by Netlify"
      height="40"
      width="80"
    />
  </a>
</template>
