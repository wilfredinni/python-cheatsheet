<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = useDark()
const { description } = useMeta()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')

// Get latest blog posts
const latestPosts = computed(() => {
  const routes = router.options.routes
  const posts = routes.filter((route) => {
    const path = route.path.split('/')[1]
    return path === 'blog' && route.path !== '/blog'
  })
  return posts
    .sort((a, b) => {
      const dateA = a.children?.[0]?.meta?.date
      const dateB = b.children?.[0]?.meta?.date
      if (!dateA || !dateB) return 0
      return (
        new Date(dateB as string).getTime() -
        new Date(dateA as string).getTime()
      )
    })
    .slice(0, 3)
})
</script>

<template>
  <!-- Hero Section -->
  <section class="relative">
    <div class="relative px-4 pb-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl w-full">
        <!-- Logo for mobile -->
        <div class="flex justify-center sm:hidden mb-8">
          <img
            class="h-20 w-auto"
            :src="
              isDark
                ? 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo.svg'
                : 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo-light.svg'
            "
            alt="python-cheatsheet"
          />
        </div>

        <!-- Title and description -->
        <div class="prose prose-xl mx-auto w-full">
          <base-title
            v-if="smAndLarger"
            id="python-cheatsheet"
            title="Python Cheatsheet"
            :description="description"
          >
            <h1 class="text-5xl font-bold bg-gradient-to-r">
              Python Cheatsheet
            </h1>
          </base-title>
          <h1
            v-else
            class="mb-4 bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300"
          >
            Python Cheatsheet
          </h1>

          <p
            class="lead text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          >
            Your comprehensive Python reference guide. Based on the book
            <a
              target="_blank"
              href="https://automatetheboringstuff.com/"
              class="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Automate the Boring Stuff with Python
            </a>
            and many other trusted sources.
          </p>
        </div>

        <!-- Subscription Form and Carbon Ads -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div
            class="flex flex-col lg:flex-row items-stretch justify-start gap-8"
          >
            <!-- Subscription Form -->
            <div class="flex-1 max-w-2xl flex">
              <subscription-form class="w-full h-full" />
            </div>

            <!-- Carbon Ads -->
            <div class="flex-shrink-0 flex">
              <carbon-ads class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Getting Started Section -->
  <section class="pt-16 sr-only">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <prose class="mx-auto">
        <h2
          id="getting-started"
          class="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6"
        >
          Getting Started
        </h2>
        <p
          class="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Anyone can forget how to
          <router-link
            to="/cheatsheet/regular-expressions#making-your-own-character-classes"
            class="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            make character classes
          </router-link>
          for a regex,
          <router-link
            to="/cheatsheet/lists-and-tuples#getting-sublists-with-slices"
            class="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            slice a list
          </router-link>
          or do a
          <router-link
            to="/cheatsheet/control-flow#for-loop"
            class="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            for loop
          </router-link>
          . This Python cheatsheet tries to provide basic reference for beginner
          and advanced developers, lower the entry barrier for newcomers and
          help veterans refresh the old tricks.
        </p>
      </prose>
    </div>
  </section>

  <!-- Latest Blog Posts Section -->
  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-start justify-between mb-2">
        <div class="text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Latest from the Blog
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mb-4">
            Deep dive into Python concepts, tutorials, and the latest
            developments..
          </p>
        </div>

        <div class="hidden sm:block">
          <router-link
            to="/blog"
            class="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors duration-200"
          >
            View All Posts
            <svg
              class="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
        </div>
      </div>

      <div v-if="latestPosts.length > 0" class="space-y-4">
        <article v-for="post in latestPosts" :key="post.path" class="group">
          <router-link
            :to="post.path"
            class="flex items-center justify-between p-4 rounded-lg border border-slate-200 bg-white hover:bg-gray-50 dark:border-slate-700 dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <div class="flex-1 min-w-0">
              <h3 class="text-lg dark:text-gray-300 transition-colors truncate">
                {{
                  (post.children?.[0]?.meta?.title as string)?.replace(
                    ' - Python Cheatsheet',
                    '',
                  ) || 'Untitled Post'
                }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {{ post.children?.[0]?.meta?.date || 'Unknown date' }}
              </p>
            </div>

            <div class="flex items-center text-sky-600 dark:text-gray-400 ml-4">
              <svg
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </router-link>
        </article>
      </div>

      <!-- View All Posts Link for Mobile -->
      <div class="text-center mt-12 sm:hidden">
        <router-link
          to="/blog"
          class="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors duration-200"
        >
          View All Posts
          <svg
            class="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Contributors Section -->
  <section class="py-16">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- Header with title and link -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Amazing Contributors
        </h2>
        <a
          href="https://github.com/wilfredinni/python-cheatsheet/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors duration-200"
        >
          See all contributors
          <svg
            class="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <!-- Description text -->
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Made possible by the wonderful developers who contribute their time and
        expertise.
      </p>

      <!-- Contributors component -->
      <div class="flex justify-center">
        <contributors />
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: fullPage
</route>
