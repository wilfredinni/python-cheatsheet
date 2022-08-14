<script setup lang="ts"></script>

<template>
  <div
    class="rounded-lg bg-gradient-to-r from-sky-100 to-white p-5 dark:from-slate-800 dark:to-gray-900"
  >
    <p class="text-2xl font-semibold text-slate-800 dark:text-slate-200">
      Subscribe to pythoncheatsheet.org
    </p>
    <p class="mt-3 text-slate-700 dark:text-slate-400">
      A two times a week and bullshit free publication full of interesting,
      relevant links.
    </p>
    <div class="mt-3 grid gap-y-2 sm:flex sm:space-x-3">
      <input
        name="email"
        type="email"
        class="dark: dark:focus:ring-none w-full rounded px-3 py-3 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:focus:border-slate-800"
        placeholder="Your email address"
      />
      <button
        class="w-full rounded bg-sky-700 px-4 py-3 font-medium tracking-wide text-white sm:w-auto"
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
</template>
