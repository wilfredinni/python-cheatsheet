<template>
  <div
    class="my-8 flex rounded-2xl bg-amber-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
  >
    <warning-icon class="hidden sm:flex" />
    <div class="ml-4 flex-auto">
      <slot />
    </div>
  </div>
</template>
