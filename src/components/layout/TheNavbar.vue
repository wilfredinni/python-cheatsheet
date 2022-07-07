<script setup lang="ts">
const navigation = useNavigationStore()
const route = useRoute()
</script>

<template>
  <nav
    class="sticky top-0 z-40 w-full flex-none bg-white/40 backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
  >
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
      <div class="relative flex h-14 justify-between">
        <the-sidebar-mobile />

        <!-- menu -->
        <div class="ml-14 flex flex-1 items-center space-x-8 sm:ml-0">
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
          class="absolute inset-y-0 right-0 flex items-center space-x-5 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div
            class="hidden border-r border-slate-200 pr-6 dark:border-slate-800 sm:ml-6 sm:flex sm:space-x-6"
          >
            <router-link
              v-for="item in navigation.navbarNavigation"
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
  </nav>
</template>
