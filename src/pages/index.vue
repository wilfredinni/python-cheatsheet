<script setup lang="ts">
// const router = useRouter()
</script>

<template>
  <div>
    <!-- <h1>test</h1>
    <base-disclaimer>
      <base-disclaimer-title> Anyone can forget</base-disclaimer-title>
      <base-disclaimer-content>
        Anyone can forget how to make character classes for a regex, slice a
        list or do a for loop. This cheat sheet tries to provide a basic
        reference for beginner and advanced developers, lower the entry barrier
        for newcomers and help veterans refresh the old tricks.
      </base-disclaimer-content>
    </base-disclaimer> -->
    <div class="relative z-10 text-center">
      <div class="relative">
        <p
          class="inline bg-gradient-to-r from-indigo-300 via-sky-400 to-indigo-300 bg-clip-text font-display text-4xl tracking-tight text-transparent"
        >
          Welcome to the Python Cheatsheet.
        </p>
        <markdown>
          <p class="mt-3 text-xl tracking-tight text-slate-400">
            Anyone can forget how to make
            <router-link to="/contributing"
              >character classes for a regex</router-link
            >, slice a list or do a for loop. This cheat sheet tries to provide
            a basic reference for beginner and advanced developers, lower the
            entry barrier for newcomers and help veterans refresh the old
            tricks.
          </p>
        </markdown>
        <div class="mt-8 flex justify-center space-x-4">
          <a
            class="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
            href="/"
            >Get started</a
          ><a
            class="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
            href="/"
            >View on GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
