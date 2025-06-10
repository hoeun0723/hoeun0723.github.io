import { isBrowser } from '@/utils'
export interface BrowserStorage {
  set: <T extends string>(key: string, value: T) => void
  get: (key: string) => string | null
  reset: () => void
}

const browserStorage: BrowserStorage = {
  set: (key, value) => {
    if (typeof value === 'string') {
      isBrowser && localStorage.setItem(key, value)
    } else {
      isBrowser && localStorage.setItem(key, JSON.stringify(value))
    }
  },
  get: key => {
    return (isBrowser && localStorage.getItem(key)) || null
  },
  reset: () => {
    isBrowser && localStorage.clear()
  },
}

export default browserStorage
