<script setup lang="ts">
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const route = useRoute()

const topMenu = [
  { name: 'Blog', path: '/blog' },
  { name: 'Timeless Python', path: '/timeless-python' },
]

const pages = [
  {
    name: 'Basics',
    path: '/cheatsheet/basics',
  },
  {
    name: 'Control flow',
    path: '/cheatsheet/control-flow',
  },
  {
    name: 'Functions',
    path: '/cheatsheet/functions',
  },

  {
    name: 'List and Tuples',
    path: '/cheatsheet/lists-and-tuples',
  },
  {
    name: 'Dictionaries',
    path: '/cheatsheet/dictionaries',
  },
  {
    name: 'Sets',
    path: '/cheatsheet/sets',
  },
  {
    name: 'Itertools module',
    path: '/cheatsheet/itertools',
  },
  {
    name: 'Comprehensions',
    path: '/cheatsheet/comprehensions',
  },
  {
    name: 'Manipulating strings',
    path: '/cheatsheet/manipulating-strings',
  },
  {
    name: 'String formatting',
    path: '/cheatsheet/string-formatting',
  },
  {
    name: 'Regular expressions',
    path: '/cheatsheet/regular-expressions',
  },
  {
    name: 'Files and directory paths',
    path: '/cheatsheet/file-directory-path',
  },
  {
    name: 'Reading and writing files',
    path: '/cheatsheet/reading-and-writing-files',
  },
  {
    name: 'Json and Yaml',
    path: '/cheatsheet/json-yaml',
  },
  {
    name: 'Exception handling',
    path: '/cheatsheet/exception-handling',
  },
  {
    name: 'Debugging',
    path: '/cheatsheet/debugging',
  },
  {
    name: 'Args and Kwargs',
    path: '/cheatsheet/args-and-kwargs',
  },
  {
    name: 'Context manager',
    path: '/cheatsheet/context-manager',
  },
  {
    name: 'Main: top level script',
    path: '/cheatsheet/main',
  },
  {
    name: 'setup.py',
    path: '/cheatsheet/setup-py',
  },
  {
    name: 'Dataclasses',
    path: '/cheatsheet/dataclasses',
  },
  {
    name: 'Virtual environments',
    path: '/cheatsheet/virtual-environments',
  },
]

const mainPages = [
  {
    name: 'Getting started',
    path: '/',
  },
  {
    name: 'Contributing',
    path: '/contributing',
  },
]

const isOpen = ref(false)
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full flex-none bg-white/40 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
      <div class="relative flex h-14 justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" class="relative" @click="isOpen = true">
            <span class="sr-only">Open navigation</span>
            <MenuIcon class="h-6 w-6 stroke-slate-400" aria-hidden="true" />
          </button>
        </div>

        <!-- menu -->
        <div
          class="flex flex-1 items-center justify-center space-x-8 sm:items-center sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img
                class="h-5 w-auto"
                src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
                alt="Workflow"
              />
            </router-link>
          </div>

          <div class="pointer-events-auto relative bg-white dark:bg-slate-900">
            <button
              type="button"
              class="dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                class="mr-3 flex-none"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
              </svg>
              Quick search...<span
                class="ml-auto flex-none pl-3 text-xs font-semibold"
              >
                Ctrl K
              </span>
            </button>
          </div>
        </div>

        <!-- actions -->
        <div
          class="absolute inset-y-0 right-0 flex items-center space-x-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div
            class="hidden border-r border-slate-200 pr-6 dark:border-slate-800 sm:ml-6 sm:flex sm:space-x-6"
          >
            <router-link
              v-for="item in topMenu"
              :key="item.name"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="
                route.path === item.path
                  ? 'text-sky-600 dark:text-sky-400'
                  : 'text-slate-700 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400'
              "
            >
              {{ item.name }}
            </router-link>
            <base-reader-mode />
          </div>

          <base-theme-toggle />
          <a
            target="_blank"
            href="https://github.com/wilfredinni/python-cheatsheet/tree/next"
            class="hidden sm:flex"
          >
            <github-icon />
            <span class="sr-only">python cheatsheet repository</span>
          </a>
        </div>
      </div>
    </div>

    <Dialog
      class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
      :open="isOpen"
      @close="isOpen = false"
    >
      <DialogPanel
        class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6"
      >
        <DialogTitle class="sr-only">Navigation</DialogTitle>
        <div class="flex items-center">
          <button type="button" @click="isOpen = false">
            <span class="sr-only">Close navigation</span>
            <XIcon class="h-6 w-6 stroke-slate-400" aria-hidden="true" />
          </button>
        </div>
        <nav class="mt-10">
          <h3
            class="font-display text-base font-medium text-slate-900 dark:text-white"
          >
            Introduction
          </h3>
          <ul
            class="mt-2 mb-6 space-y-2 border-l-2 border-slate-100 text-base dark:border-slate-800 lg:mt-4 lg:space-y-1.5 lg:border-slate-200 lg:text-sm"
          >
            <li v-for="item in mainPages" :key="item.name" class="relative">
              <router-link
                :to="item.path"
                class="-ml-px block border-l border-transparent pl-4"
                :class="
                  $route.path === item.path
                    ? 'border-current font-semibold text-sky-500 dark:text-sky-400'
                    : 'text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
                "
                @click="isOpen = false"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <h3
            class="font-display text-base font-medium text-slate-900 dark:text-white"
          >
            Cheatsheet
          </h3>
          <ul
            class="mt-2 space-y-2 border-l-2 border-slate-100 text-base dark:border-slate-800 lg:mt-4 lg:space-y-1.5 lg:border-slate-200 lg:text-sm"
          >
            <li v-for="item in pages" :key="item.name" class="relative">
              <router-link
                :to="item.path"
                class="-ml-px block border-l border-transparent pl-4"
                :class="
                  $route.path === item.path
                    ? 'border-current font-semibold text-sky-500 dark:text-sky-400'
                    : 'text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
                "
                @click="isOpen = false"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </nav>
</template>
