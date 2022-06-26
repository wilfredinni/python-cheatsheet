<template>
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    class="h-8 w-8 flex-none [--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"
  >
    <defs>
      <radialGradient
        id=":rh:-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
      >
        <stop stop-color="#FDE68A" offset=".08"></stop>
        <stop stop-color="#F59E0B" offset=".837"></stop>
      </radialGradient>
      <radialGradient
        id=":rh:-gradient-dark"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
      >
        <stop stop-color="#FDE68A" offset=".08"></stop>
        <stop stop-color="#F59E0B" offset=".837"></stop>
      </radialGradient>
    </defs>
    <g class="dark:hidden">
      <circle cx="20" cy="20" r="12" fill="url(#:rh:-gradient)"></circle>
      <path
        d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
        fill-opacity="0.5"
        class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z"
        class="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill-opacity="0.5"
        stroke="currentColor"
        class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
    <g class="hidden dark:inline">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        fill="url(#:rh:-gradient-dark)"
      ></path>
    </g>
  </svg>
</template>
