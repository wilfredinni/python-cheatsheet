<template>
  <div
    class="my-8 flex rounded-2xl bg-sky-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
  >
    <light-bulb-icon class="hidden sm:flex" />
    <div class="flex-auto sm:ml-4">
      <slot />
    </div>
  </div>
</template>
