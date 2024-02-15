<template>
  <a
    href="https://www.javascriptcheatsheet.org/"
    class="text-xs relative flex items-center rounded-full px-4 py-0.5 leading-6 text-sky-600 dark:text-sky-500 dark:ring-slate-100/10 ring-1 ring-slate-900/10 hover:ring-gray-900/20"
  >
    <strong class="line-clamp-1 font-semibold">
      <slot>
        <span class="hidden xl:flex items-center">
          ✨
          <!-- <img
            src="https://www.javascriptcheatsheet.org/icons/javascript_logo.png"
            alt="javascript cheatsheet"
            class="h-4 w-4 rounded-sm mr-1.5"
          /> -->
          Read Online
          <span class="mx-1.5">·</span>
          JavaScript Cheatsheet
        </span>
        <span class="hidden md:block xl:hidden">
          ✨ Javascript Cheatsheet
        </span>
        <span class="md:hidden xl:hidden"> ✨ JVS </span>
      </slot>
    </strong>
    <svg
      width="3"
      height="6"
      class="ml-3 overflow-visible text-sky-600 dark:text-sky-400"
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
  </a>
</template>
