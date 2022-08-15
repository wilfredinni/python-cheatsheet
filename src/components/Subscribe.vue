<script setup lang="ts">
import { $fetch } from 'ohmyfetch'

const showSubscription = import.meta.env.VITE_NEWSLETTER === 'true' || false

const email = ref('')
const subscribe = async () => {
  const response = await $fetch(
    'https://api.curated.co/api/v3/publications/pythoncheatsheet/email_subscribers',
    {
      method: 'POST',
      body: { email: email.value },
      headers: {
        Accept: 'application/json',
        Authorization: 'Token token="3da1cb3e1a1c1a89d379920435a2456a"',
        'Content-type': 'application/json',
      },
    }
  )
  console.log(response)
  console.log(response.data)
  return response
}
</script>

<template>
  <div
    v-if="showSubscription"
    class="mb-10 rounded-xl border border-slate-300/70 bg-slate-50 px-5 py-5 dark:border-transparent dark:bg-slate-800"
  >
    <p class="text-2xl font-semibold text-slate-800 dark:text-slate-300">
      Subscribe to pythoncheatsheet.org
    </p>
    <prose>
      <p class="text-slate-700 dark:text-slate-400">
        A two times a month and bullshit free
        <a href="https://pythoncheatsheet.curated.co/">publication</a>, full of
        interesting, relevant links.
      </p>
    </prose>

    <form
      class="mt-3 grid gap-y-3 sm:flex sm:space-x-3"
      @submit.prevent="subscribe"
    >
      <input
        v-model="email"
        name="email"
        type="email"
        class="w-full rounded border border-slate-300 px-3 py-2.5 placeholder:text-slate-500 focus:outline-none dark:border-slate-800 dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-400 dark:focus:border-slate-800"
        placeholder="Your email address"
      />
      <button
        class="w-full rounded bg-sky-700 px-4 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-sky-600 sm:w-52"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</template>
