import { isBrowser } from '@/utils'
type BrowserStorageValue<T> = T extends string ? string : Record<string, unknown>

interface BrowserStorage {
  set: <T extends string | Record<string, unknown>>(key: string, value: T) => void
  get: <T extends string | Record<string, unknown>>(key: string) => BrowserStorageValue<T> | null
  reset: () => void
}

const browserStorage: BrowserStorage = {
  set: (key, value) => {
    const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
    isBrowser && localStorage.setItem(key, serializedValue)
  },
  get: key => {
    const item = isBrowser ? localStorage.getItem(key) : null
    if (item === null) return null
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(item)
    } catch {
      return item
    }
  },
  reset: () => {
    isBrowser && localStorage.clear()
  },
}

export default browserStorage
