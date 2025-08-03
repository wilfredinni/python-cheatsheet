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
    class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-sky-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-sky-600"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-sky-900/20"
    />

    <div class="relative space-y-6">
      <!-- Header with icon -->
      <div class="flex items-center gap-4">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50"
        >
          <svg
            class="h-6 w-6 text-sky-600 dark:text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Join the Community
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            <span class="font-medium text-sky-600 dark:text-sky-400"
              >17,202+</span
            >
            Python developers getting updates
          </p>
        </div>
      </div>

      <!-- Form -->
      <form class="space-y-4" @submit.prevent="subscribe">
        <div class="space-y-2">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            autocomplete="email"
            required
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:from-sky-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none dark:focus:ring-offset-gray-800"
        >
          <span v-if="!loading" class="flex items-center justify-center gap-2">
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Subscribe to Newsletter
          </span>
          <span v-else class="flex items-center justify-center gap-2">
            <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
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

      <!-- Footer info -->
      <div class="space-y-3">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Two times a month. No spam.
          <router-link
            to="/newsletter"
            class="text-sky-600 hover:text-sky-700 dark:text-sky-400 hover:underline"
          >
            Learn more
          </router-link>
        </p>

        <!-- Success/Error Messages -->
        <div
          v-if="response?.email"
          class="rounded-lg bg-green-50 p-4 ring-1 ring-green-200 dark:bg-green-900/20 dark:ring-green-800/50"
        >
          <div class="flex items-center gap-2">
            <svg
              class="h-4 w-4 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p class="text-sm font-medium text-green-800 dark:text-green-200">
              Thanks! Check your email to confirm.
            </p>
          </div>
        </div>

        <div
          v-else-if="response?.errors"
          class="rounded-lg bg-blue-50 p-4 ring-1 ring-blue-200 dark:bg-blue-900/20 dark:ring-blue-800/50"
        >
          <div class="flex items-center gap-2">
            <svg
              class="h-4 w-4 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-sm font-medium text-blue-800 dark:text-blue-200">
              You're already subscribed!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
