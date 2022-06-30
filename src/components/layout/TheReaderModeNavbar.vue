<script setup lang="ts">
import { XIcon } from '@heroicons/vue/outline'

const core = useCoreStore()
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full flex-none bg-white/25 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-4xl px-4 lg:pr-0 lg:pl-8 xl:px-16">
      <div class="relative flex h-14 justify-between">
        <div class="flex flex-1 items-center justify-between sm:items-center">
          <button
            class="rounded text-slate-400 hover:bg-sky-100 hover:text-sky-600 dark:hover:bg-transparent"
            @click="core.toggle()"
          >
            <span class="sr-only">close reader mode</span>
            <x-icon class="h-5" />
          </button>

          <base-theme-toggle />
        </div>
      </div>
    </div>
  </nav>
</template>
