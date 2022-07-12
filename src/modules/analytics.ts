import VueGtag from 'vue-gtag'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const inProduction = import.meta.env.PROD
  if (inProduction) {
    const gTag = import.meta.env.VITE_GTAG || 'tag'
    app.use(VueGtag, {
      config: { id: gTag },
    })
  }
}
