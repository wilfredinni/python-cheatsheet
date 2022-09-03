<script setup lang="ts">
const reader = useReaderStore()
</script>

<template>
  <div
    :class="[
      'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400',
      // headings
      'prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-medium lg:prose-headings:scroll-mt-20',
      // lead
      'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
      // links
      'prose-a:font-semibold dark:prose-a:text-sky-400',
      // link underline
      'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
      // pre
      'prose-pre:rounded-lg prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
      // hr
      'dark:prose-hr:border-slate-800',
      // table
      'overflow-x-auto prose-thead:leading-6 prose-th:font-semibold prose-th:text-slate-700 prose-td:font-mono prose-td:font-bold prose-td:leading-6 prose-td:text-sky-500 prose-th:dark:text-slate-300 prose-td:dark:text-sky-400',
      // code
      'prose-code:text-sky-500 prose-code:dark:text-sky-400',
      // reader
      reader.isActive ? reader.fontSize : '',
    ]"
  >
    <slot />
  </div>
</template>
