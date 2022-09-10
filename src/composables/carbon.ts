export function useCarbon() {
  const route = useRoute()
  const reader = useReaderStore()

  const reload = ref(false)

  watch(
    computed(() => reader.isActive),
    () => {
      if (reader.isActive) {
        reload.value = true
        nextTick(() => (reload.value = false))
      }
    }
  )

  watch(
    computed(() => route.path),
    () => {
      reload.value = true
      nextTick(() => (reload.value = false))
    }
  )

  return { reload }
}
