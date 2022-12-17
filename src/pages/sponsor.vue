<script setup lang="ts">
// import { breakpointsTailwind } from '@vueuse/core'

useHead({
  title: 'Sponsor - Python Cheatsheet',
  meta: [
    {
      name: 'description',
      content:
        'Sponsor Python Cheatsheet and reach an ever-growing number of developers',
    },
  ],
})

// const breakpoints = useBreakpoints(breakpointsTailwind)
// const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <section>
    <prose>
      <!-- <base-title
        id="Sponsorship Opportunities"
        title="Python Cheatsheet"
        description="Python Cheatsheet relies on the support of sponsors to content for the Python community."
      >
        <h1>Sponsorship Opportunities</h1>
      </base-title> -->
      <h1
        class="mb-4 bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300 sm:text-start"
      >
        Sponsorship Opportunities
      </h1>

      <p class="lead mt-0 text-center sm:text-start">
        Python Cheatsheet relies on the support of sponsors to content for the
        Python community
      </p>
    </prose>
  </section>

  <section class="mt-10">
    <div class="grid gap-4 xl:grid-cols-2">
      <prose>
        <h2>Website</h2>
        <p>Your logo or Ad can be placed on the front or all pages</p>
        <ul>
          <li>80k+ monthly visits</li>
          <li>100k+ monthly Ads impressions</li>
        </ul>

        <h2>Newsletter</h2>
        <p>
          Sponsor Python Cheatsheet
          <a target="_blank" href="https://ggt.ink/PoVKNkO">Newsletter</a> and
          reach an ever-growing number of Python developers.
        </p>
        <ul>
          <li>1500+ Subscribers</li>
          <li>Between 100 and 80 new subscribers every week</li>
        </ul>
        <p>
          <a target="_blank" href="https://ggt.ink/2CUG8y7">Book 4 weeks</a> and
          get a discount.
        </p>

        <h2>GitHub Sponsors</h2>
        <p>
          If you find this project useful, consider
          <a href="https://ggt.ink/Q5HjIVK"> becoming an Sponsor</a> on GitHub.
        </p>
      </prose>

      <div>
        <prose class="">
          <h2 class="mb-4">
            Get in touch <span class="ml-1 text-red-500"> ❤</span>
          </h2>
          <p>
            If you want to promote your product or event, or anything that would
            give value from being shared to an audience of dedicated Python
            developers, let's talk!
          </p>
        </prose>

        <form name="contact" class="mt-5" netlify>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col md:col-span-1">
              <label
                class="mb-1 text-sm font-medium opacity-80 dark:text-slate-300"
              >
                Name
                <input
                  required
                  type="text"
                  name="name"
                  class="w-full rounded border border-slate-300 px-3 py-1.5 text-sm placeholder:text-slate-500 focus:border-sky-400 focus:outline-none dark:border-slate-500 dark:bg-gray-900 dark:text-slate-300"
                />
              </label>
            </div>
            <div class="flex flex-col md:col-span-1">
              <label
                class="mb-1 text-sm font-medium opacity-80 dark:text-slate-300"
              >
                Email
                <input
                  required
                  type="email"
                  name="email"
                  class="w-full rounded border border-slate-300 px-3 py-1.5 text-sm placeholder:text-slate-500 focus:border-sky-400 focus:outline-none dark:border-slate-500 dark:bg-gray-900 dark:text-slate-300"
                />
              </label>
            </div>

            <div class="col-span-2 mt-1 flex flex-col" data-v-ee6a3ebf="">
              <label
                class="mb-1 text-sm font-medium opacity-80 dark:text-slate-300"
              >
                Message

                <textarea
                  required
                  name="message"
                  class="h-60 rounded border border-slate-300 p-2 outline-none focus:border-sky-400 dark:border-slate-500 dark:bg-gray-900 dark:text-slate-300"
                />
              </label>
            </div>
          </div>

          <div class="mt-3 flex justify-end">
            <button
              type="submit"
              class="rounded bg-sky-700 px-4 py-2.5 text-right font-medium text-white hover:bg-sky-600 sm:text-xs"
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: fullPage
</route>
