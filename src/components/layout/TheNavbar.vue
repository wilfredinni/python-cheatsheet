<script setup lang="ts">
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const route = useRoute()

const topMenu = [
  { name: 'Blog', path: '/blog' },
  { name: 'Timeless Python', path: '/timeless-python' },
]
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="sticky top-0 z-40 w-full flex-none bg-white/40 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
      <div class="relative flex h-14 justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
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
          >
            <github-icon />
            <span class="sr-only">python cheatsheet repository</span>
          </a>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pt-2 pb-4">
        <DisclosureButton
          v-for="item in topMenu"
          :key="item.name"
          as="div"
          class="block py-2 pl-3 pr-4 text-base font-medium"
          :class="
            route.path === item.path
              ? 'border-l-4 border-cyan-500 bg-cyan-50 text-cyan-700 dark:bg-cyan-50/5 dark:text-cyan-400'
              : 'text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400'
          "
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
