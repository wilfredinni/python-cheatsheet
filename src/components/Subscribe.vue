<script setup lang="ts">
const showSubscription = import.meta.env.VITE_NEWSLETTER === 'true' || false
</script>

<template>
  <div
    v-if="showSubscription"
    class="rounded-xl border border-slate-300/70 bg-slate-50 px-5 py-5 dark:border-transparent dark:bg-slate-800"
  >
    <p class="text-2xl font-semibold text-slate-800 dark:text-slate-300">
      Subscribe to pythoncheatsheet.org
    </p>
    <prose>
      <p class="text-slate-700 dark:text-slate-400">
        A two times a month and bullshit free <a href="">publication</a>, full
        of interesting, relevant links.
      </p>
    </prose>

    <div class="mt-3 grid gap-y-3 sm:flex sm:space-x-3">
      <input
        name="email"
        type="email"
        class="w-full rounded border border-slate-300 px-3 py-2.5 placeholder:text-slate-500 focus:outline-none dark:border-slate-800 dark:bg-slate-700 dark:placeholder:text-slate-400 dark:focus:border-slate-800"
        placeholder="Your email address"
      />
      <button
        class="w-full rounded bg-sky-700 px-4 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-sky-600 sm:w-52"
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
</template>
