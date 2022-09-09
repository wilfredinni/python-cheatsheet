export function useCarbon() {
  const reader = useReaderStore()

  watch(
    computed(() => reader.isActive),
    () => {
      if (reader.isActive) {
        reload.value = true
        nextTick(() => (reload.value = false))
      }
    }
  )

  return { reload }
}
