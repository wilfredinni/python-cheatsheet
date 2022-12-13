<script setup></script>

<template>
  <base-banner storage-key-name="issue-1-banner">
    <template #shortMsg>
      <a class="mx-auto" href="https://ggt.ink/PWTIPB9" target="_blank">
        <img
          src="/sponsors/kinsta/SVG/PythonCheatSheet_banner_kinsta_logo.svg"
          loading="lazy"
          alt="Deploys by Netlify"
        />
      </a>
    </template>
    <template #message>
      <!-- logo -->
      <a class="mx-auto" href="https://ggt.ink/PWTIPB9" target="_blank">
        <img
          class="hidden lg:flex"
          src="/sponsors/kinsta/SVG/PythonCheatSheet_banner_kinsta_logo.svg"
          loading="lazy"
          alt="Deploys by Netlify"
        />
      </a>

      <!-- md: msg with link -->
      <a class="mx-auto" href="https://ggt.ink/PWTIPB9" target="_blank">
        <img
          class="mx-auto hidden lg:block"
          src="/sponsors/kinsta/SVG/PythonCheatSheet_banner_Text.svg"
          loading="lazy"
          alt="Deploys by Netlify"
        />
      </a>

      <!-- lg: msg without link -->
      <img
        class="mx-auto hidden md:block lg:hidden"
        src="/sponsors/kinsta/SVG/PythonCheatSheet_banner_Text.svg"
        loading="lazy"
        alt="Deploys by Netlify"
      />

      <!-- banner action -->
      <a target="_blank" href="https://ggt.ink/PWTIPB9">
        <img
          class="hidden lg:flex"
          src="/sponsors/kinsta/SVG/PythonCheatSheet_banner_button-main.svg"
          loading="lazy"
          alt="Deploys by Netlify"
        />
      </a>
    </template>
  </base-banner>
</template>
>
