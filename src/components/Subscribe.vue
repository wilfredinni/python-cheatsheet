<script setup lang="ts"></script>

<template>
  <div
    class="rounded-xl bg-gradient-to-r from-sky-100 to-white p-5 dark:from-slate-800 dark:to-gray-900"
  >
    <p class="text-2xl font-semibold text-slate-800 dark:text-slate-300">
      Subscribe to pythoncheatsheet.org
    </p>
    <prose>
      <p class="text-slate-700 dark:text-slate-400">
        A two times a month and bullshit free <a href="">publication</a> full of
        interesting, relevant links.
      </p>
    </prose>

    <div class="mt-3 grid gap-y-2 sm:flex sm:space-x-3">
      <input
        name="email"
        type="email"
        class="dark: dark:focus:ring-none w-full rounded px-3 py-2.5 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:focus:border-slate-800"
        placeholder="Your email address"
      />
      <button
        class="w-full rounded bg-sky-700 px-4 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-sky-600 sm:w-auto"
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
</template>
