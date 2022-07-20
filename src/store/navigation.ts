import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [
      { name: 'Blog', path: '/blog', internal: true },
      {
        name: 'Timeless Python',
        path: 'https://timelesspython.com/',
        internal: false,
      },
    ],
    cheatsheetNavigation: [
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
      {
        name: 'Changelog',
        path: '/changelog',
      },
    ],
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
