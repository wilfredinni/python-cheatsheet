import { acceptHMRUpdate, defineStore } from 'pinia'
import { $fetch } from 'ohmyfetch'

interface newsletterResponse {
  id?: number
  newsletter?: string
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
      const grudgetToken = import.meta.env.VITE_GRUDGET_TOKEN || null
      const baseUrl = import.meta.env.VITE_GRUDGET_ENDPOINT || null
      const newsletter = import.meta.env.VITE_GRUDGET_NEWSLETTER || null

      const response = await $fetch(`${baseUrl}/newsletter/subscribers/`, {
        method: 'POST',
        body: { email: email, newsletter: newsletter },
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `token ${grudgetToken}`,
        },
      }).catch((error) => error.data)

      this.response = response
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsletterStore, import.meta.hot))
}
