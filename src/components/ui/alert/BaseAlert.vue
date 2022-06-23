<script setup lang="ts">
import { PropType } from 'vue'
import { colorObject, iconObject } from '~/types/ui'
import { ColorType } from './types'

import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/vue/solid'

defineProps({
  alertType: {
    type: String as PropType<ColorType>,
    default: 'success',
  },
})

const alertBackground: colorObject = {
  success: 'bg-green-50',
  info: 'bg-sky-50',
  warning: 'bg-yellow-50',
  error: 'bg-red-50',
}

const alertIcon: iconObject = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  warning: ExclamationIcon,
  error: XCircleIcon,
}

const alertIconColor: colorObject = {
  success: 'text-green-400',
  info: 'text-sky-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
}

const alertTextColor: colorObject = {
  success: 'text-green-800',
  info: 'text-sky-800',
  warning: 'text-yellow-800',
  error: 'text-red-800',
}
</script>

<template>
  <div
    class="mb-5 flex w-full rounded-md p-4"
    :class="alertBackground[alertType]"
  >
    <div class="flex items-center">
      <div class="hidden shrink-0 sm:block">
        <component
          :is="alertIcon[alertType]"
          class="h-5 w-5"
          :class="alertIconColor[alertType]"
          aria-hidden="true"
        />
      </div>
      <div
        class="ml-3 flex w-full items-center justify-between text-sm font-medium"
        :class="alertTextColor[alertType]"
      >
        <slot>Alert message</slot>
      </div>
    </div>
  </div>
</template>
