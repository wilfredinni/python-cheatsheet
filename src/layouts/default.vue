<script setup>
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="sticky top-0 z-40 w-full flex-none bg-white/25 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
            <router-link to="/" class="flex flex-shrink-0 items-center">
              <img
                class="h-5 w-auto"
                src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
                alt="Workflow"
              />
            </router-link>

            <div
              class="pointer-events-auto relative bg-white dark:bg-slate-900"
            >
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
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-sky-600 dark:text-sky-300"
              >
                Cheatsheet
              </a>
              <a
                href="#"
                class="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400"
              >
                Blog
              </a>
              <a
                href="#"
                class="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400"
              >
                About
              </a>
            </div>
            <base-theme-toggle />
            <a
              target="_blank"
              href="https://github.com/wilfredinni/python-cheatsheet/tree/next"
            >
              <svg
                viewBox="0 0 16 16"
                class="h-5 w-5 text-slate-500 hover:text-slate-600"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pt-2 pb-4">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton
            as="a"
            href="#"
            class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >Dashboard</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >Team</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >Projects</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >Calendar</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="pb-6">
      <div
        class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-4 lg:px-8"
      >
        <div class="hidden pt-6 lg:col-span-3 lg:block xl:col-span-3">
          <nav
            aria-label="Sidebar"
            class="fixed inset-0 top-[3.655rem] left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pt-5 lg:block"
          >
            <div
              v-for="route in $router.getRoutes()"
              :key="route.path"
              class="pb-1.5 dark:text-slate-400"
            >
              <router-link :to="route.path">
                {{ route.name }}
              </router-link>
            </div>
            <!-- Your content -->
          </nav>
        </div>

        <main class="px-3 sm:px-0 lg:col-span-9 xl:col-span-7">
          <!-- Your content -->
          <markdown>
            <RouterView />
          </markdown>
        </main>

        <aside class="hidden xl:col-span-2 xl:block">
          <div class="sticky top-6 space-y-4">
            <!-- Your content -->
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
