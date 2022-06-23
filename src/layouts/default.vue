<script setup></script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <the-navbar />

    <div class="pb-6">
      <div
        class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-4 lg:px-8"
      >
        <div class="hidden pt-6 lg:col-span-3 lg:block xl:col-span-3">
          <nav
            aria-label="Sidebar"
            class="fixed inset-0 top-[5.255rem] left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pt-5 lg:block"
          >
            <the-sidebar />
          </nav>
        </div>

        <main class="px-3 sm:px-0 lg:col-span-9 xl:col-span-7">
          <markdown>
            <RouterView />
          </markdown>
        </main>

        <aside class="hidden xl:col-span-2 xl:block">
          <div class="sticky top-6 space-y-4">
            <!-- Your content -->
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
