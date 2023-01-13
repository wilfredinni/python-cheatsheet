<script setup lang="ts">
const showSubscription = import.meta.env.VITE_NEWSLETTER === 'true' || false

const reader = useReaderStore()
const newsletter = useNewsletterStore()
const email = ref('')
const loading = ref(false)

const subscribe = async () => {
  loading.value = true
  await newsletter.subscribe(email.value)
  loading.value = false
}

const response = computed(() => newsletter.getResponse)

const showNewsletterForm = useLocalStorage('showNewsletterForm', true)
</script>

<template>
  <div
    v-if="showSubscription && !reader.isActive && showNewsletterForm"
    class="mb-8 rounded-xl border border-slate-300/70 bg-slate-50 px-5 py-5 dark:border-transparent dark:bg-slate-800"
  >
    <div class="flex justify-end">
      <button @click="showNewsletterForm = false">
        <span class="sr-only">close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-slate-700 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <p
      class="mb-1 text-center text-xl font-semibold text-slate-800 dark:text-slate-300 sm:text-start"
    >
      Subscribe to pythoncheatsheet.org
    </p>
    <prose>
      <p class="text-center text-slate-700 dark:text-slate-400 sm:text-start">
        A weekly and bullshit free
        <a href="https://ggt.ink/PoVKNkO" rel="noreferrer">publication</a>, full
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
        class="w-full rounded border border-slate-300 px-3 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none dark:border-slate-800 dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-400 dark:focus:border-slate-800"
        placeholder="Your email address"
      />
      <button
        class="w-full rounded bg-sky-700 px-4 py-2.5 font-medium tracking-wide text-white hover:bg-sky-600 sm:w-52 sm:text-xs"
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

    <template v-if="response?.email">
      <p
        class="mx-3 mt-3 text-center text-sm font-medium text-sky-700 dark:text-sky-400"
      >
        Thank you for subscribing! Please check your email to confirm your
        subscription. Be sure to check your junk folder.
      </p>
    </template>

    <template v-else-if="response?.success == false">
      <p
        class="mt-2 text-center text-sm font-medium text-sky-700 dark:text-sky-400"
      >
        You are already subscribed. Thanks!
      </p>
    </template>
  </div>
</template>
