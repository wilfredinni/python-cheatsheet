<script setup lang="ts">
useHead({
  title: 'Python Cheatsheet',
  meta: [
    {
      name: 'description',
      content:
        'Anyone can forget how to make character classes for a regex, slice a list or do a for loop. This cheat sheet tries to provide a basic reference for beginner and advanced developers, lower the entry barrier for newcomers and help veterans refresh the old tricks.',
    },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#1f2937' : '#ffffff')),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'
      ),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8f9399;
}

/* Track */
.dark ::-webkit-scrollbar-track {
  background: #6b7280;
}

/* Handle */
.dark ::-webkit-scrollbar-thumb {
  background: #374151;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9ca3af;
}
</style>
