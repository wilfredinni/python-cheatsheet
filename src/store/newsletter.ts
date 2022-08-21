import { acceptHMRUpdate, defineStore } from 'pinia'
import { $fetch } from 'ohmyfetch'

interface newsletterResponse {
  id?: number
  email?: string
  error_message?: string
  errors?: string[]
  success?: boolean
}

export const useNewsletterStore = defineStore('useNewsletterStore', {
  state: () => ({
    response: null as newsletterResponse | null,
  }),

  getters: {
    getResponse: (state) => state.response,
  },

  actions: {
    async subscribe(email: string) {
      const curatedKey = import.meta.env.VITE_CURATED_KEY || null

      const response = await $fetch(
        `/api/publications/16436/email_subscribers`,
        {
          method: 'POST',
          body: { email: email },
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Token token="${curatedKey}"`,
          },
        }
      ).catch((error) => error.data)

      this.response = response
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsletterStore, import.meta.hot))
}
