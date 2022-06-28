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
    <prose>
      <h1>Getting started</h1>

      <p class="lead">
        Basic cheatsheet for Python mostly based on the book
        <a href="https://automatetheboringstuff.com/">
          Automate the Boring Stuff with Python
        </a>
        and many other sources.
      </p>

      <base-warning>
        <base-warning-title>You need to careful!</base-warning-title>
        <base-warning-content>
          This site is under heavy development and the content may be
          incomplete, change at any time or be plain wrong. Consider going to
          the <code>stable</code> version of the
          <a href="https://www.pythoncheatsheet.org">Python Cheatsheet</a>
          for a more complete experience.
        </base-warning-content>
      </base-warning>

      <h2 id="overview">Overview</h2>
      Anyone can forget how to
      <a href="">make character classes</a> for a regex,
      <a href="">slice a list</a> or do a <a href="">for loop</a>. This Python
      cheatsheet tries to provide basic reference for beginner and advanced
      developers, lower the entry barrier for newcomers and help veterans
      refresh the old tricks.
    </prose>

    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div
        v-for="link in links"
        :key="link.name"
        class="group relative rounded-xl border border-slate-200 dark:border-slate-800"
      >
        <div
          class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]"
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
