<script setup lang="ts">
// const showNewsletterForm = useLocalStorage('showNewsletterForm', true)
const showSubscription = import.meta.env.VITE_NEWSLETTER === 'true' || false
const showNewsletterForm = ref(true)

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
</script>

<template>
  <div
    v-if="showNewsletterForm && showSubscription && !reader.isActive"
    class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
  >
    <div class="space-y-4">
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Join the Community
        </h3>
        <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-medium text-sky-600 dark:text-sky-400"
            >17,202+</span
          >
          Python developers getting updates
        </p>
      </div>

      <form class="space-y-3" @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          autocomplete="email"
          required
          class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-500 transition focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-slate-400"
        />
        <button
          type="submit"
          :disabled="loading"
          class="w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-offset-slate-800"
        >
          <span v-if="!loading">Subscribe to Newsletter</span>
          <span v-else class="flex items-center">
            <svg
              class="mr-2 h-4 w-4 animate-spin"
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
            Subscribing...
          </span>
        </button>
      </form>

      <p class="text-xs text-slate-500 dark:text-slate-400">
        Two times a month. No spam.
        <router-link
          to="/newsletter"
          class="text-sky-600 hover:text-sky-700 dark:text-sky-400 underline"
        >
          Learn more
        </router-link>
      </p>

      <!-- Success/Error Messages -->
      <div
        v-if="response?.email"
        class="rounded-md bg-green-50 p-3 dark:bg-green-900/20"
      >
        <p class="text-xs text-green-700 dark:text-green-300">
          ✅ Thanks! Check your email to confirm.
        </p>
      </div>

      <div
        v-else-if="response?.errors"
        class="rounded-md bg-blue-50 p-3 dark:bg-blue-900/20"
      >
        <p class="text-xs text-blue-700 dark:text-blue-300">
          You're already subscribed!
        </p>
      </div>
    </div>
  </div>
</template>
