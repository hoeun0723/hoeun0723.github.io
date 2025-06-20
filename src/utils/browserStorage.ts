import { isBrowser } from '@/utils'
export interface BrowserStorage {
  set: <T extends string>(key: string, value: T) => void
  get: <T extends string | object>(key: string) => T | null
  reset: () => void
}

const browserStorage: BrowserStorage = {
  set: (key, value) => {
    const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
    isBrowser && localStorage.setItem(key, serializedValue)
  },
  get: key => {
    const value = isBrowser && localStorage.getItem(key)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value ? JSON.parse(value) : null
  },
  reset: () => {
    isBrowser && localStorage.clear()
  },
}

export default browserStorage
