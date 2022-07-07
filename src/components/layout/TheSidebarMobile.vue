<script setup lang="ts">
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const isOpen = ref(false)
const navigation = useNavigationStore()
</script>

<template>
  <div class="absolute inset-y-0 left-1.5 flex items-center sm:hidden">
    <button type="button" class="relative" @click="isOpen = true">
      <span class="sr-only">Open navigation</span>
      <MenuIcon class="h-7 w-7 stroke-slate-400" aria-hidden="true" />
    </button>
  </div>

  <Dialog
    class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
    :open="isOpen"
    @close="isOpen = false"
  >
    <DialogPanel
      class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6"
    >
      <DialogTitle class="sr-only">Navigation</DialogTitle>
      <div class="flex items-center">
        <button type="button" @click="isOpen = false">
          <span class="sr-only">Close navigation</span>
          <XIcon class="h-6 w-6 stroke-slate-400" aria-hidden="true" />
        </button>
      </div>
      <nav class="mt-10">
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
      </nav>
    </DialogPanel>
  </Dialog>
</template>
