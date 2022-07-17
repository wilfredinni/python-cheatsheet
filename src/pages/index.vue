<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import ReferenceIcon from '~/components/icons/ReferenceIcon.vue'
import PluginIcon from '~/components/icons/PluginIcon.vue'

const links = [
  {
    path: '/blog',
    name: 'Blog',
    description: `Read detailed articles about Python and it's ecosystem.`,
    icon: ReferenceIcon,
  },
  {
    path: '/contributing',
    name: 'Contribute',
    description: `Get to know how easy is to contribute to this project.`,
    icon: PluginIcon,
  },
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <article>
    <prose>
      <div class="flex justify-center sm:hidden">
        <img
          class="h-20 w-auto"
          src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
          alt="python-cheatsheet"
        />
      </div>

      <h1 v-if="smAndLarger">Python Cheatsheet</h1>
      <h1
        v-else
        class="mb-2 bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300"
      >
        Python Cheatsheet
      </h1>

      <p class="lead mt-0 text-center sm:text-start">
        Based on the book
        <a target="_blank" href="https://automatetheboringstuff.com/">
          Automate the Boring Stuff with Python
        </a>
        and many other sources.
      </p>
    </prose>

    <div
      className="not-prose mt-10 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <div
        v-for="link in links"
        :key="link.name"
        class="group relative rounded-xl border border-slate-200 dark:border-slate-800"
      >
        <div
          class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition duration-300 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]"
        />
        <div class="relative overflow-hidden rounded-xl p-6">
          <component :is="link.icon" class="h-8 w-8" />
          <p class="mt-4 font-display text-base text-slate-900 dark:text-white">
            <router-link :to="link.path">
              <span class="absolute -inset-px rounded-xl" />
              {{ link.name }}
            </router-link>
          </p>
          <p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
            {{ link.description }}
          </p>
        </div>
      </div>
    </div>

    <prose class="hidden sm:block">
      <h2 id="getting-started">Getting started</h2>
      <p>
        Anyone can forget how to
        <router-link
          to="/cheatsheet/regular-expressions#making-your-own-character-classes"
        >
          make character classes
        </router-link>
        for a regex,
        <router-link
          to="/cheatsheet/lists-and-tuples#getting-sublists-with-slices"
        >
          slice a list
        </router-link>
        or do a
        <router-link to="/cheatsheet/control-flow#for-loop"
          >for loop</router-link
        >. This Python cheatsheet tries to provide basic reference for beginner
        and advanced developers, lower the entry barrier for newcomers and help
        veterans refresh the old tricks.
      </p>
    </prose>

    <div class="mt-10">
      <prose><h2 class="text-center sm:text-start">Contributors</h2></prose>
      <contributors class="py-10" />
    </div>
  </article>
</template>
