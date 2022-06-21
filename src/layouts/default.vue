<script setup>
import { SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-white shadow dark:border-b dark:border-gray-800 dark:bg-gray-900"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-12 justify-between">
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
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-5 w-auto"
                src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a
                href="#"
                class="inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Cheatsheet
              </a>
              <a
                href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-200"
              >
                Blog
              </a>
              <a
                href="#"
                class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-200"
              >
                About
              </a>
            </div>
          </div>

          <!-- actions -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <base-theme-toggle />
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
            class="sticky top-6 divide-y divide-gray-300"
          >
            test
            <!-- Your content -->
          </nav>
        </div>

        <main class="px-3 sm:px-0 lg:col-span-9 xl:col-span-7">
          <!-- Your content -->
          <RouterView />
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
