<template>
  <div
    class="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5 text-slate-500 dark:text-slate-400 transition duration-300"
  >
    <strong class="line-clamp-1 font-semibold">
      <slot></slot>
    </strong>
    <svg
      width="3"
      height="6"
      class="ml-3 overflow-visible text-slate-500 dark:text-slate-400"
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
