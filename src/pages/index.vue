<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = useDark()
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
  <section class="relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 -z-10">
      <!-- Gradient background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900"
      />

      <!-- Subtle pattern overlay -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_50%)]"
      />

      <!-- Floating shapes -->
      <div
        class="absolute top-20 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200/30 to-indigo-300/30 blur-3xl dark:from-sky-400/10 dark:to-indigo-500/10"
      />
      <div
        class="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-green-200/20 to-teal-300/20 blur-3xl dark:from-green-400/5 dark:to-teal-500/5"
      />
    </div>

    <div class="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <!-- Logo for mobile -->
        <div class="mb-8 flex justify-center sm:hidden">
          <div class="relative">
            <img
              class="h-20 w-auto transition-transform duration-300 hover:scale-105"
              :src="
                isDark
                  ? 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo.svg'
                  : 'https://raw.githubusercontent.com/wilfredinni/python-cheatsheet/refs/heads/master/public/logo-light.svg'
              "
              alt="python-cheatsheet"
            />
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-400/20 blur-xl"
            />
          </div>
        </div>

        <!-- Main heading -->
        <div class="mb-8">
          <div v-if="smAndLarger" class="mb-6">
            <h1
              class="bg-gradient-to-r from-indigo-600 via-sky-600 to-green-600 bg-clip-text font-display text-6xl font-bold tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300 sm:text-7xl"
            >
              Python Cheatsheet
            </h1>
          </div>
          <h1
            v-else
            class="mb-6 bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300"
          >
            Python Cheatsheet
          </h1>

          <!-- Subtitle -->
          <p
            class="mx-auto max-w-3xl text-xl leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl sm:leading-9"
          >
            Your comprehensive Python reference guide
          </p>
        </div>

        <!-- Description -->
        <div class="mx-auto mb-12 max-w-2xl">
          <p class="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Master Python with confidence. Based on the book
            <a
              target="_blank"
              href="https://automatetheboringstuff.com/"
              class="inline-flex items-center font-medium text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Automate the Boring Stuff with Python
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
            and many other trusted sources.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <router-link
            to="/cheatsheet/basics"
            class="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:from-sky-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Start Learning
            <svg
              class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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

          <router-link
            to="/builtin"
            class="group inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
          >
            Browse Functions
            <svg
              class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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

        <!-- Stats or features -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="text-center">
            <div
              class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              100+
            </div>
            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Built-in Functions
            </div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              15+
            </div>
            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Topic Areas
            </div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            >
              1M+
            </div>
            <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
              Developers Helped
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter and Carbon Ads -->
    <div class="relative px-4 pb-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div
          class="flex flex-col items-stretch justify-center gap-8 lg:flex-row"
        >
          <!-- Subscription Form -->
          <div class="flex flex-1 max-w-2xl mx-auto lg:mx-0">
            <subscription-form class="w-full h-full" />
          </div>

          <!-- Carbon Ads -->
          <div class="flex flex-shrink-0 justify-center lg:justify-end">
            <carbon-ads class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features/Getting Started Section -->
  <section class="relative py-24 sm:py-32">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-950 dark:to-slate-950"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.05)_0%,transparent_50%)]"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          Quick Reference for Every Developer
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          From beginners to seasoned developers, find exactly what you need with
          our comprehensive Python reference
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1: Regular Expressions -->
        <div
          class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-sky-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-sky-600"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-sky-900/20"
          />
          <div class="relative">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50"
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              Regular Expressions
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Master pattern matching with comprehensive regex examples and
              character classes
            </p>
            <router-link
              to="/cheatsheet/regular-expressions#making-your-own-character-classes"
              class="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Learn regex patterns
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

        <!-- Feature 2: Lists and Data Structures -->
        <div
          class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-green-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-green-600"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-green-900/20"
          />
          <div class="relative">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50"
            >
              <svg
                class="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              Lists & Tuples
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Slice lists, manipulate data structures, and work with Python's
              core data types
            </p>
            <router-link
              to="/cheatsheet/lists-and-tuples#getting-sublists-with-slices"
              class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              Explore data structures
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

        <!-- Feature 3: Control Flow -->
        <div
          class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-purple-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-purple-600"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-900/20"
          />
          <div class="relative">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50"
            >
              <svg
                class="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              Control Flow
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Master loops, conditionals, and program flow control with
              practical examples
            </p>
            <router-link
              to="/cheatsheet/control-flow#for-loop"
              class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Master control flow
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
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Ready to dive deeper? Explore our comprehensive cheatsheet sections
        </p>
        <router-link
          to="/cheatsheet/basics"
          class="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:from-sky-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5"
        >
          Browse All Topics
          <svg
            class="ml-2 h-4 w-4"
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

  <!-- Latest Blog Posts Section -->
  <section class="relative py-24 sm:py-32">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.04)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.08)_0%,transparent_50%)]"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col items-center justify-between gap-4 mb-12 sm:flex-row sm:items-end"
      >
        <div class="text-center sm:text-left">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Latest from the Blog
          </h2>
          <p
            class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Deep dive into Python concepts, tutorials, and the latest
            developments in the ecosystem
          </p>
        </div>

        <div class="hidden sm:block">
          <router-link
            to="/blog"
            class="group inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-md dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
          >
            View All Posts
            <svg
              class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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

      <!-- Blog Posts Grid -->
      <div
        v-if="latestPosts.length > 0"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <router-link
          v-for="post in latestPosts"
          :key="post.path"
          :to="post.path"
          class="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
        >
          <div class="relative overflow-hidden">
            <img
              v-if="post.children?.[0]?.meta?.socialImage"
              :src="String(post.children[0]?.meta?.socialImage || '')"
              alt=""
              class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              v-else
              class="flex h-48 w-full items-center justify-center bg-slate-100 dark:bg-slate-700"
            >
              <svg
                class="h-12 w-12 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <div class="flex-1">
              <h2
                class="text-xl font-semibold text-slate-800 dark:text-slate-100"
              >
                {{
                  (post.children?.[0]?.meta?.title as string)?.replace(
                    ' - Python Cheatsheet',
                    '',
                  ) || 'Untitled Post'
                }}
              </h2>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {{
                  post.children?.[0]?.meta?.description ||
                  'Explore this comprehensive Python guide with practical examples and best practices.'
                }}
              </p>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <time class="text-xs text-slate-500 dark:text-slate-400">
                {{ post.children?.[0]?.meta?.date || 'Unknown date' }}
              </time>
              <div class="flex items-center text-sm font-medium text-sky-500">
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  class="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-12">
        <div class="mb-4">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
          No blog posts yet
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          Check back soon for the latest Python insights and tutorials.
        </p>
      </div>

      <!-- View All Posts Link for Mobile -->
      <div class="text-center mt-12 sm:hidden">
        <router-link
          to="/blog"
          class="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-sky-700 hover:shadow-xl hover:-translate-y-0.5"
        >
          View All Posts
          <svg
            class="ml-2 h-4 w-4"
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
  <section class="relative py-24 sm:py-32">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.06)_0%,transparent_50%)]"
      />
      <!-- Decorative shapes -->
      <div
        class="absolute top-24 left-8 h-24 w-24 rounded-full bg-gradient-to-br from-sky-200/20 to-indigo-300/20 blur-2xl dark:from-sky-400/10 dark:to-indigo-500/10"
      />
      <div
        class="absolute bottom-24 right-8 h-32 w-32 rounded-full bg-gradient-to-br from-green-200/15 to-teal-300/15 blur-2xl dark:from-green-400/5 dark:to-teal-500/5"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4"
        >
          Amazing Contributors
        </h2>
        <p
          class="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Made possible by the wonderful developers who contribute their time
          and expertise to make Python learning accessible to everyone
        </p>

        <!-- Stats -->
        <div
          class="flex items-center justify-center gap-8 mb-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Open Source</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-sky-500"></div>
            <span>Community Driven</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-purple-500"></div>
            <span>Always Growing</span>
          </div>
        </div>
      </div>

      <!-- Contributors Grid with Enhanced Design -->
      <div class="mb-12">
        <enhanced-contributors />
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="inline-flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://github.com/wilfredinni/python-cheatsheet/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            See all contributors
            <svg
              class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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

          <a
            href="https://github.com/wilfredinni/python-cheatsheet"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            Contribute on GitHub
            <svg
              class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: homepage
</route>
