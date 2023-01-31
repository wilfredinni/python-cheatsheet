<script setup lang="ts">
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
</script>

<template>
  <section>
    <prose>
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
    <prose>
      <h2 class="mb-4">
        Get in touch <span class="ml-1 text-red-500"> ❤</span>
      </h2>
      <p>
        If you want to promote your product or event, or anything that would
        give value from being shared to an audience of dedicated Python
        developers, let's talk!
      </p>
    </prose>
  </section>

  <!-- links -->
  <section class="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <base-customizable-link-card
      title="Website"
      path="mailto:carlos@pythoncheatsheet.org"
      :is-external="true"
    >
      Place your logo or Ad on the front or all pages.
      <prose class="prose-sm">
        <ul>
          <li>80k+ monthly visits</li>
          <li>100k+ Ad impressions</li>
        </ul>
      </prose>
    </base-customizable-link-card>

    <base-customizable-link-card
      title="Newsletter"
      path="https://ggt.ink/2CUG8y7"
      :is-external="true"
    >
      Reach an ever-growing number of Python developers.
      <prose class="prose-sm">
        <ul>
          <li>2000+ Subscribers</li>
          <li>80/100 weekly subscribers</li>
        </ul>
      </prose>
    </base-customizable-link-card>

    <base-customizable-link-card
      title="GitHub"
      path="https://ggt.ink/Q5HjIVK"
      :is-external="true"
    >
      If you find this project useful, consider becoming an Sponsor on GitHub.
    </base-customizable-link-card>
  </section>

  <section class="mt-8">
    <prose>
      <p>
        Feel free to contact us at
        <a href="mailto:carlos@pythoncheatsheet.org"
          >carlos@pythoncheatsheet.org</a
        >
      </p>
    </prose>
  </section>

  <section class="mt-10">
    <prose>
      <h2 class="mb-4">Sponsors</h2>
      <p>
        Thanks to all the current and previous sponsors of Python Cheatsheet
      </p>
    </prose>

    <div class="mt-4 flex flex-wrap gap-4">
      <kinsta />
      <practity />
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: fullPage
</route>
