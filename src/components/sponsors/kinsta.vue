<template>
  <a
    href="https://kinsta.com/application-hosting/?utm_source=pythoncheatsheet&utm_medium=digital&utm_campaign=python-hosting&utm_content=banner"
    rel="noreferrer"
    class="rounded-md border dark:border-slate-700"
  >
    <div
      class="relative w-[200px] justify-center rounded-md bg-white p-2 opacity-80 transition duration-300 hover:opacity-100 dark:bg-slate-800"
    >
      <img
        :src="`/sponsors/kinsta/${
          isDark
            ? 'kinsta-logo-alpha-white.png'
            : 'kinsta-logo-alpha-purple.png'
        }`"
        alt="kinsta"
        class="mx-auto my-2.5"
        width="100"
        height="50"
      />
    </div>
  </a>
</template>
