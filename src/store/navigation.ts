import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [
      { name: 'Blog', path: '/blog', internal: true },
      {
        name: 'Newsletter',
        path: 'https://news.pythoncheatsheet.org/',
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
      },
      {
        name: 'Built-in functions',
        path: '/cheatsheet/built-in-functions',
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
    ],
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
