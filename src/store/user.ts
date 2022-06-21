import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: '',
  }),

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    setUser(user: string) {
      this.user = user
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
