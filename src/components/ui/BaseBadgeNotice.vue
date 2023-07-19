<template>
  <div class="flex text-sm">
    <div
      class="relative flex items-center gap-x-4 rounded-full px-4 py-1 leading-6 text-gray-600 dark:ring-slate-100/10 dark:text-slate-300 ring-1 ring-slate-900/10 hover:ring-gray-900/20"
    >
      <span class="font-semibold text-sky-600 dark:text-sky-500">
        <slot name="title"> Changelog </slot>
      </span>
      <span
        class="h-4 w-px bg-gray-900/10 dark:bg-gray-100/10"
        aria-hidden="true"
      />
      <p href="#" class="flex items-center gap-x-1 font-semibold">
        <span class="absolute inset-0" aria-hidden="true" />
        <slot name="message"> My message </slot>
      </p>
    </div>
  </div>
</template>
