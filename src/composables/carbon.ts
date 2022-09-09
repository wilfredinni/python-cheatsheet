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

  const reload = ref(false)
  function reloadOn(time: number) {
    setInterval(function () {
      if (!reader.isActive) {
        reload.value = true
        nextTick(() => (reload.value = false))
      }
    }, time)
  }

  return { reloadOn, reload }
}
