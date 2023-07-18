<template>
  <div class="relative isolate sm:pt-14">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
          width="200"
          height="100"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="80%"
        stroke-width="0"
        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
      />
    </svg>
    <div
      class="mx-auto max-w-8xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10"
    >
      <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <div class="flex">
          <div
            class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            <span class="font-semibold text-sky-600">Notice</span>
            <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
            <p href="#" class="flex items-center gap-x-1 font-bold">
              <span class="absolute inset-0" aria-hidden="true" />
              The Newsletter is Temporary on hold
            </p>
          </div>
        </div>
        <h1
          class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          Keep up to date with Python!
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Python Cheatsheet newsletter is a weekly and bullshit free
          publication, full of interesting, relevant links
        </p>
        <div class="relative mt-6">
          <input
            type="email"
            placeholder="Email address"
            autocomplete="email"
            aria-label="Email address"
            class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 bg-white"
          />
          <div class="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              class="flex aspect-square h-full items-center justify-center rounded-xl bg-sky-600 text-white transition hover:bg-sky-500"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-10 flex items-center gap-x-6">
          <router-link
            to="/sponsor"
            class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
          >
            Sponsor
          </router-link>
          <a
            href="https://news.pythoncheatsheet.org/"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Latest Issue <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div
        class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow w-[600px]"
      >
        <div
          class="h-[40rem] w-[36rem] right-0 top-32 absolute rounded-2xl border-t border-l bg-white p-10 space-y-10"
        >
          <div v-for="i in 4" :key="i" class="space-y-4">
            <p class="bg-slate-200 h-8 w-32 rounded-xl"></p>
            <p class="w-[30rem] h-6 bg-slate-200 rounded-xl"></p>
            <p class="w-full h-6 bg-slate-200 rounded-xl"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: fullWidth
</route>
