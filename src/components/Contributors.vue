<script setup lang="ts">
import { contributors } from '../../contributors/contributors'
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-center gap-3 sm:justify-start"
  >
    <a
      v-for="{ name, avatar, repository } of contributors"
      v-once
      :key="name"
      :href="repository"
      rel="noopener noreferrer"
      :aria-label="`${name} on GitHub`"
    >
      <!-- loading="lazy" -->
      <img
        class="h-12 w-12 rounded-full"
        :src="avatar"
        width="50"
        height="50"
        :alt="`${name}'s avatar`"
      />
    </a>
  </div>
</template>
