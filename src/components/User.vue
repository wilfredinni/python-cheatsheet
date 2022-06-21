<script setup lang="ts">
const user = useUserStore()
const name = ref('')

const { t } = useI18n()
</script>

<template>
  <div v-if="!user.getUser" class="mt-10">
    <div class="mt-1 flex space-x-4 justify-center">
      <input
        v-model="name"
        type="text"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
        placeholder="Your name"
      />
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-500"
        @click="user.setUser(name)"
      >
        {{ t('user.set_name') }}
      </button>
    </div>
  </div>
  <div v-else class="mt-10 dark:text-gray-200 flex justify-center">
    <button
      type="button"
      class="p-2 bg-red-400 hover:bg-red-500 w-56 rounded font-medium"
      @click="user.setUser('')"
    >
      {{ t('user.salute') }} {{ user.getUser }}
    </button>
  </div>
</template>
