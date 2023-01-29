import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [
      { name: 'Blog', path: '/blog', internal: true },
      {
        name: 'Newsletter',
        path: 'https://ggt.ink/PoVKNkO',
        internal: false,
      },
    ],
    mainNavigation: [
      {
        name: 'Getting started',
        path: '/',
      },
      {
        name: 'Contributing',
        path: '/contributing',
      },
    ],
    cheatsheetNavigation: [
      {
        name: 'Basics',
        path: '/cheatsheet/basics',
        updated: false,
      },
      {
        name: 'Built-in functions',
        path: '/cheatsheet/built-in-functions',
        updated: true,
      },
      {
        name: 'Control flow',
        path: '/cheatsheet/control-flow',
        updated: false,
      },
      {
        name: 'Functions',
        path: '/cheatsheet/functions',
        updated: false,
      },

      {
        name: 'List and Tuples',
        path: '/cheatsheet/lists-and-tuples',
        updated: false,
      },
      {
        name: 'Dictionaries',
        path: '/cheatsheet/dictionaries',
        updated: true,
      },
      {
        name: 'Sets',
        path: '/cheatsheet/sets',
        updated: false,
      },
      {
        name: 'Comprehensions',
        path: '/cheatsheet/comprehensions',
        updated: false,
      },
      {
        name: 'Manipulating strings',
        path: '/cheatsheet/manipulating-strings',
        updated: false,
      },
      {
        name: 'String formatting',
        path: '/cheatsheet/string-formatting',
        updated: false,
      },
      {
        name: 'Regular expressions',
        path: '/cheatsheet/regular-expressions',
        updated: false,
      },
      {
        name: 'Files and directory paths',
        path: '/cheatsheet/file-directory-path',
        updated: false,
      },
      {
        name: 'Reading and writing files',
        path: '/cheatsheet/reading-and-writing-files',
        updated: false,
      },
      {
        name: 'Json and Yaml',
        path: '/cheatsheet/json-yaml',
        updated: false,
      },
      {
        name: 'Exception handling',
        path: '/cheatsheet/exception-handling',
        updated: false,
      },
      {
        name: 'Debugging',
        path: '/cheatsheet/debugging',
        updated: false,
      },
      {
        name: 'Args and Kwargs',
        path: '/cheatsheet/args-and-kwargs',
        updated: false,
      },
      {
        name: 'Context manager',
        path: '/cheatsheet/context-manager',
        updated: false,
      },
      {
        name: 'Main: top level script',
        path: '/cheatsheet/main',
        updated: false,
      },
      {
        name: 'setup.py',
        path: '/cheatsheet/setup-py',
        updated: false,
      },
      {
        name: 'Dataclasses',
        path: '/cheatsheet/dataclasses',
        updated: false,
      },
      {
        name: 'Virtual environments',
        path: '/cheatsheet/virtual-environments',
        updated: false,
      },
    ],
    standardLibraryNavigation: [
      {
        name: 'Datetime',
        path: '/modules/datetime-module',
      },
      {
        name: 'Itertools',
        path: '/modules/itertools-module',
      },
      {
        name: 'Json',
        path: '/modules/json-module',
      },
      {
        name: 'Random',
        path: '/modules/random-module',
      },
      {
        name: 'Os',
        path: '/modules/os-module',
      },
      {
        name: 'Pathlib',
        path: '/modules/pathlib-module',
      },
      {
        name: 'Shelve',
        path: '/modules/shelve-module',
      },
      {
        name: 'Zipfile',
        path: '/modules/zipfile-module',
      },
    ],
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
