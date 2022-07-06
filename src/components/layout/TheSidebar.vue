<script setup lang="ts">
const navigation = useNavigationStore()
</script>

<template>
  <nav>
    <the-sidebar-navigation
      :navigation="navigation.mainNavigation"
      section-name="Introduction"
    />

    <the-sidebar-navigation
      :navigation="navigation.cheatsheetNavigation"
      section-name="Cheatsheet"
    />
  </nav>
</template>
