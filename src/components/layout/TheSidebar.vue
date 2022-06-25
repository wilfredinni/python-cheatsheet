<script setup lang="ts">
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
</script>

<template>
  <div class="mt-5">
    <h5 class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
      Cheatsheet
    </h5>
    <ul
      class="mb-8 space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2"
    >
      <li v-for="item in pages" :key="item.name">
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
  </div>
</template>
