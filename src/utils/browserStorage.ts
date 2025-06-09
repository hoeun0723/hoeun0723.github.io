export interface BrowserStorage {
    set: <T extends string>(key: string, value: T) => void
    get: (key: string) => string | null
    reset: () => void
}

const browserStorage: BrowserStorage = {
    set: (key, value) => {
        if(typeof value === 'string') {
            localStorage.setItem(key,value)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    },
    get: key => {
        return localStorage.getItem(key) || null
    },
    reset: () => {
        localStorage.clear()
    },
}

export default browserStorage