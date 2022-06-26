<template>
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    class="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
  >
    <defs>
      <radialGradient
        id=":r9:-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 21 -21 0 12 3)"
      >
        <stop stop-color="#0EA5E9"></stop>
        <stop stop-color="#22D3EE" offset=".527"></stop>
        <stop stop-color="#818CF8" offset="1"></stop>
      </radialGradient>
      <radialGradient
        id=":r9:-gradient-dark"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 21 -21 0 16 7)"
      >
        <stop stop-color="#0EA5E9"></stop>
        <stop stop-color="#22D3EE" offset=".527"></stop>
        <stop stop-color="#818CF8" offset="1"></stop>
      </radialGradient>
    </defs>
    <g class="dark:hidden">
      <circle cx="12" cy="12" r="12" fill="url(#:r9:-gradient)"></circle>
      <path
        d="m8 8 9 21 2-10 10-2L8 8Z"
        fill-opacity="0.5"
        class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
    <g class="hidden dark:inline">
      <path
        d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
        fill="url(#:r9:-gradient-dark)"
        stroke="url(#:r9:-gradient-dark)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
</template>
