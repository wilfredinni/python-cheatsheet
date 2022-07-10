<script setup lang="ts">
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
</script>

<template>
  <article>
    <h1 class="text-center sm:text-start">Python Cheatsheet</h1>

    <p class="lead text-center sm:text-start">
      Basic Python cheatsheet based on the book
      <a target="_blank" href="https://automatetheboringstuff.com/">
        Automate the Boring Stuff with Python
      </a>
      and many other sources.
    </p>

    <base-warning>
      <base-warning-title>You need to careful!</base-warning-title>
      <base-warning-content>
        This site is under heavy development and the content may be incomplete,
        change at any time or be plain wrong. Consider going to the
        <code>stable</code> version of the
        <a href="https://www.pythoncheatsheet.org">Python Cheatsheet</a>
        for a more complete experience.
      </base-warning-content>
    </base-warning>

    <h2 id="getting-started">Getting started</h2>
    Anyone can forget how to
    <router-link
      to="/cheatsheet/regular-expressions#making-your-own-character-classes"
    >
      make character classes
    </router-link>
    for a regex,
    <router-link to="/cheatsheet/lists-and-tuples#getting-sublists-with-slices">
      slice a list
    </router-link>
    or do a
    <router-link to="/cheatsheet/control-flow#for-loop">for loop</router-link>.
    This Python cheatsheet tries to provide basic reference for beginner and
    advanced developers, lower the entry barrier for newcomers and help veterans
    refresh the old tricks.

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
          <h3
            class="mt-4 font-display text-base text-slate-900 dark:text-white"
          >
            <router-link :to="link.path">
              <span class="absolute -inset-px rounded-xl" />
              {{ link.name }}
            </router-link>
          </h3>
          <p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
            {{ link.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
