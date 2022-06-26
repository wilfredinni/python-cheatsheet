<script setup lang="ts">
import GridIcon from '~/components/icons/GridIcon.vue'
import ArrowIcon from '~/components/icons/ArrowIcon.vue'
const route = useRoute()
const pages = [
  {
    name: 'Basics',
    path: '/chapter/basics',
  },
  {
    name: 'Control flow',
    path: '/chapter/control-flow',
  },
  {
    name: 'Functions',
    path: '/chapter/functions',
  },
  {
    name: 'Exception handling',
    path: '/chapter/exception-handling',
  },
  {
    name: 'List and Tuples',
    path: '/chapter/lists-and-tuples',
  },
  {
    name: 'Dictionaries',
    path: '/chapter/dictionaries',
  },
  {
    name: 'Sets',
    path: '/chapter/sets',
  },
  {
    name: 'Itertools module',
    path: '/chapter/itertools',
  },
  {
    name: 'Comprehensions',
    path: '/chapter/comprehensions',
  },
  {
    name: 'Manipulating strings',
    path: '/chapter/manipulating-strings',
  },
  {
    name: 'String formatting',
    path: '/chapter/string-formatting',
  },
  {
    name: 'Regular expressions',
    path: '/chapter/regular-expressions',
  },
  {
    name: 'Files and directory paths',
    path: '/chapter/file-directory-path',
  },
  {
    name: 'Reading and writing files',
    path: '/chapter/reading-and-writing-files',
  },
  {
    name: 'Json and Yaml',
    path: '/chapter/json-yaml',
  },
  {
    name: 'Debugging',
    path: '/chapter/debugging',
  },
  {
    name: 'Lambda functions',
    path: '/chapter/lambda-functions',
  },
  {
    name: 'Ternary conditional operator',
    path: '/chapter/ternary-operator',
  },
  {
    name: 'Args and Kwargs',
    path: '/chapter/args-and-kwargs',
  },
  {
    name: 'Context manager',
    path: '/chapter/context-manager',
  },
  {
    name: 'Main: top level script',
    path: '/chapter/main',
  },
  {
    name: 'setup.py',
    path: '/chapter/setup-py',
  },
  {
    name: 'Dataclasses',
    path: '/chapter/dataclasses',
  },
  {
    name: 'Virtual environments',
    path: '/chapter/virtual-environments',
  },
]

const mainPages = [
  {
    name: 'Getting started',
    path: '/',
    icon: ArrowIcon,
  },
  {
    name: 'Contributing',
    path: '/contributing',
    icon: GridIcon,
  },
]
</script>

<template>
  <nav>
    <ul class="mb-5 space-y-4">
      <li v-for="page in mainPages" :key="page.path">
        <router-link
          :to="page.path"
          class="group flex items-center font-medium lg:text-sm lg:leading-6"
          :class="
            route.path === page.path
              ? 'font-semibold text-sky-500 dark:text-sky-400'
              : 'text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
          "
        >
          <component :is="page.icon" class="mr-2 h-5" />
          {{ page.name }}
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
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
