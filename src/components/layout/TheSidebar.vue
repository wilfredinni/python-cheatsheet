<script setup lang="ts">
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
</script>

<template>
  <nav>
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
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
