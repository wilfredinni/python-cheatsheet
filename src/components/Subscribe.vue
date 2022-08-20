<script setup lang="ts">
const showSubscription = import.meta.env.VITE_NEWSLETTER === 'true' || false

const email = ref('')
const newsletter = useNewsletterStore()
const loading = ref(false)
const subscribe = async () => {
  loading.value = true
  await newsletter.subscribe(email.value)
  loading.value = false
}
const response = computed(() => newsletter.getResponse)
</script>

<template>
  <div
    v-if="showSubscription"
    class="mb-10 rounded-xl border border-slate-300/70 bg-slate-50 px-5 py-5 dark:border-transparent dark:bg-slate-800"
  >
    <template v-if="!response">
      <p class="text-2xl font-semibold text-slate-800 dark:text-slate-300">
        Subscribe to pythoncheatsheet.org
      </p>
      <prose>
        <p class="text-slate-700 dark:text-slate-400">
          A two times a month and bullshit free
          <a href="https://pythoncheatsheet.curated.co/">publication</a>, full
          of interesting, relevant links.
        </p>
      </prose>

      <form
        class="mt-3 grid gap-y-3 sm:flex sm:space-x-3"
        @submit.prevent="subscribe"
      >
        <input
          v-model="email"
          required
          name="email"
          type="email"
          class="w-full rounded border border-slate-300 px-3 py-2.5 placeholder:text-slate-500 focus:outline-none dark:border-slate-800 dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-400 dark:focus:border-slate-800"
          placeholder="Your email address"
        />
        <button
          class="w-full rounded bg-sky-700 px-4 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-sky-600 sm:w-52"
        >
          <span v-if="!loading">SUBSCRIBE</span>
          <svg
            v-else
            class="mx-auto h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </button>
      </form>
    </template>

    <template v-else-if="response.email">
      <p class="text-center text-sm text-sky-700 dark:text-slate-300">
        Thank you for subscribing! Please check your email to confirm your
        subscription. Be sure to check your junk folder.
      </p>
    </template>

    <template v-else>
      <p class="text-center text-sm text-sky-700 dark:text-slate-300">
        You are already subscribed. Thanks!
      </p>
    </template>
  </div>
</template>
