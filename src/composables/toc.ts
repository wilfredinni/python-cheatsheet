import type { Ref } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'

export function useToc() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const lgAndLarger = breakpoints.greater('lg')

  interface Toc {
    header: string
    id: string
  }

  const theToc: Ref<Toc[]> = ref([])
  const createToc = () => {
    const h2 = document.getElementsByTagName('h2')
    theToc.value = Array.from(h2).map((item) => {
      return { header: item.innerText, id: item.id }
    })
  }

  const currentSection = ref('')
  const getObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            currentSection.value = entry.target.getAttribute('id') as string
          }
        })
      },
      {
        rootMargin: '0px 0px -50% 0px',
      }
    )
    document.querySelectorAll('article h2').forEach((section) => {
      observer.observe(section)
    })
  }

  const initToc = () => {
    if (lgAndLarger.value) {
      createToc()
      getObserver()
    }
  }

  const route = useRoute()
  onMounted(() => {
    initToc()
  })

  watch(route, () => {
    nextTick(() => {
      initToc()
    })
  })

  return { theToc, currentSection }
}
