<script setup lang="ts">
import { contributors } from '../../contributors/contributors'

// Split contributors into groups for better visual organization
const contributorGroups = computed(() => {
  const groups = []
  const groupSize = Math.min(12, contributors.length) // Show max 12 contributors prominently
  for (let i = 0; i < Math.min(contributors.length, groupSize); i += 6) {
    groups.push(contributors.slice(i, i + 6))
  }
  return groups
})

const totalContributors = computed(() => contributors.length)
const displayedContributors = computed(() => Math.min(12, contributors.length))
const remainingContributors = computed(() =>
  Math.max(0, totalContributors.value - displayedContributors.value),
)
</script>

<template>
  <div class="space-y-8">
    <!-- Main Contributors Display -->
    <div class="space-y-6">
      <div
        v-for="(group, groupIndex) in contributorGroups"
        :key="groupIndex"
        class="flex flex-wrap items-center justify-center gap-4"
      >
        <div
          v-for="({ name, avatar, repository }, index) in group"
          :key="name"
          class="group relative"
        >
          <a
            :href="repository"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${name} on GitHub`"
            class="block relative"
          >
            <!-- Avatar with enhanced styling -->
            <div
              class="relative overflow-hidden rounded-full ring-4 ring-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl dark:ring-gray-800"
              :class="{
                'h-16 w-16': groupIndex === 0 && index < 3, // First 3 are larger
                'h-14 w-14': groupIndex === 0 && index >= 3, // Next 3 in first group
                'h-12 w-12': groupIndex === 1, // Second group
              }"
            >
              <img
                :src="avatar"
                :alt="`${name}'s avatar`"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                width="64"
                height="64"
              />

              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <!-- GitHub icon on hover -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
              >
                <svg
                  class="h-6 w-6 text-white drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </div>
            </div>

            <!-- Name tooltip -->
            <div
              class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
            >
              <div
                class="bg-gray-900 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap dark:bg-white dark:text-gray-900"
              >
                {{ name }}
                <div
                  class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"
                ></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Stats and Summary -->
    <div class="text-center">
      <div
        class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <template v-if="remainingContributors > 0">
          Showing {{ displayedContributors }} of
          {{ totalContributors }} contributors
        </template>
        <template v-else>
          {{ totalContributors }} amazing contributors
        </template>
      </div>

      <p
        v-if="remainingContributors > 0"
        class="mt-2 text-sm text-gray-600 dark:text-gray-400"
      >
        +{{ remainingContributors }} more contributors helping make this project
        awesome
      </p>
    </div>
  </div>
</template>
