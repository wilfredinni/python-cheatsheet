export function useScrollBehavior() {
  const router = useRouter()
  router.options.scrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    else return { top: 0, behavior: 'smooth' }
  }
}
