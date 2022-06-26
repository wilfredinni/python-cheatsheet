<template>
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    fill="none"
    class="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
  >
    <defs>
      <radialGradient
        id=":rf:-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 21 -21 0 12 11)"
      >
        <stop stop-color="#0EA5E9"></stop>
        <stop stop-color="#22D3EE" offset=".527"></stop>
        <stop stop-color="#818CF8" offset="1"></stop>
      </radialGradient>
      <radialGradient
        id=":rf:-gradient-dark"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
      >
        <stop stop-color="#0EA5E9"></stop>
        <stop stop-color="#22D3EE" offset=".527"></stop>
        <stop stop-color="#818CF8" offset="1"></stop>
      </radialGradient>
    </defs>
    <g class="dark:hidden">
      <circle cx="12" cy="20" r="12" fill="url(#:rf:-gradient)"></circle>
      <path
        d="M27 12.13 19.87 5 13 11.87v14.26l14-14Z"
        class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
        fill-opacity="0.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z"
        class="fill-[var(--icon-background)]"
        fill-opacity="0.5"
      ></path>
      <path
        d="M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10"
        class="stroke-[color:var(--icon-foreground)]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z"
        fill-opacity="0.5"
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
        d="M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"
        fill="url(#:rf:-gradient-dark)"
      ></path>
    </g>
  </svg>
</template>
