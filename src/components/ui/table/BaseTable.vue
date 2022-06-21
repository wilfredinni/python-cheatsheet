<script setup lang="ts">
defineProps({
  titleHeaders: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          class="scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 supports-scrollbars:pr-2 max-h-96 overflow-hidden lg:max-h-96 lg:overflow-auto"
        >
          <table class="w-full border-collapse text-left">
            <thead>
              <tr>
                <th
                  v-for="(header, index) in titleHeaders"
                  :key="index"
                  scope="col"
                  class="sticky top-0 z-10 p-0 text-sm font-semibold leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  <div
                    class="border-b border-slate-200 py-2 pr-2 dark:border-slate-800/20"
                  >
                    {{ header }}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="align-baseline">
              <slot />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="mt-5 flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 sm:rounded-md">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="(header, index) in titleHeaders"
                  :key="index"
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <slot></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> -->
</template>
