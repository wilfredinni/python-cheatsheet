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
  <div
    v-for="item in pages"
    :key="item.name"
    class="pb-1.5 dark:text-slate-400"
  >
    <router-link :to="item.path"> {{ item.name }} </router-link>
  </div>
</template>
