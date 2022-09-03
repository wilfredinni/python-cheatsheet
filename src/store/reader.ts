import { acceptHMRUpdate, defineStore } from 'pinia'

export const useReaderStore = defineStore('reader', {
  state: () => ({
    readerMode: false,
    availableFontSizes: [
      'prose-sm',
      'prose-md',
      'prose-lg',
      'prose-xl',
      'prose-2xl',
    ],
    currentFontSize: 'prose-xl',
  }),

  getters: {
    isActive: (state) => state.readerMode,
    fontSize: (state) => state.currentFontSize,
    fontSizes: (state) => state.availableFontSizes,
  },

  actions: {
    toggle() {
      this.currentFontSize = 'prose-xl'
      this.readerMode = !this.readerMode
    },

    setFontSize(size: string) {
      this.currentFontSize = size
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useReaderStore, import.meta.hot))
}
