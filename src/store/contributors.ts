import { acceptHMRUpdate, defineStore } from 'pinia'
import { $fetch } from 'ohmyfetch'

interface Contributor {
  login: string
}

export const useContributorsStore = defineStore('contributors', {
  state: () => ({
    projectContributors: [],
  }),

  getters: {
    contributors: (state) => state.projectContributors,
  },

  actions: {
    async fetchContributors() {
      const data =
        (await $fetch<Contributor[]>(
          `https://api.github.com/repos/wilfredinni/python-cheatsheet/contributors?per_page=100&page=1`,
          {
            method: 'get',
            headers: {
              'content-type': 'application/json',
            },
          }
        )) || []
      this.projectContributors.push(...data.map((i) => i.login))
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useContributorsStore, import.meta.hot))
