<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'

import { ref } from 'vue'

const enabled = ref(isDark)
</script>

<template>
  <Switch
    v-model="enabled"
    :class="[enabled ? 'bg-gray-600' : 'bg-gray-200']"
    class="relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        enabled ? 'translate-x-5 bg-gray-800' : 'translate-x-0 bg-white',
      ]"
      class="pointer-events-none relative inline-block h-6 w-6 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
    >
      <span
        :class="[
          enabled
            ? 'opacity-0 duration-100 ease-out'
            : 'opacity-100 duration-200 ease-in',
        ]"
        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <SunIcon class="h-5 text-gray-600" />
      </span>
      <span
        :class="[
          enabled
            ? 'opacity-100 duration-200 ease-in'
            : 'opacity-0 duration-100 ease-out',
        ]"
        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <MoonIcon class="h-5 text-white" />
      </span>
    </span>
  </Switch>
</template>
