<template>
  <div
    class="text-xs relative flex items-center rounded-full px-4 py-0.5 leading-6 text-sky-600 dark:text-sky-500 dark:ring-slate-100/10 ring-1 ring-slate-900/10 hover:ring-gray-900/20"
  >
    <strong class="line-clamp-1 font-semibold">
      <slot></slot>
    </strong>
    <svg
      width="3"
      height="6"
      class="ml-3 overflow-visible text-sky-600 dark:text-sky-500"
      aria-hidden="true"
    >
      <path
        d="M0 0L3 3L0 6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </div>
</template>
