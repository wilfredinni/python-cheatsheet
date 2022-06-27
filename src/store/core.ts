import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCoreStore = defineStore('core', {
  state: () => ({
    readerMode: false,
  }),

  getters: {
    reader: (state) => state.readerMode,
  },

  actions: {
    toggle() {
      this.readerMode = !this.readerMode
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCoreStore, import.meta.hot))
