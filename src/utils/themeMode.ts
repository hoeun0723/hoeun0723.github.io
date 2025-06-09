import browserStorage from "./browserStorage";

type ThemeMode = 'dark' | 'light'

export interface ThemeModeType {
    $body: HTMLElement
    isDarkMode: boolean
    themeMode: ThemeMode
    themeToggler: () => void
}

// prefers-color-scheme 값을 확인 해 시스템의 컬러모드 초기값으로 사용
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//이전에 방문했다면 localstorage에 theme 값이 저장되어 있을 예정
const localTheme = browserStorage.get('theme') as ThemeMode

/**
 * localStorage 에 저장된 값이 없으면 os에 지정된 prefers-color-scheme 에 따라 테마를 선택하기
 */
const initialTheme = localTheme || prefersColorScheme

class ThemeModeHandler implements ThemeModeType {
    $body = document.querySelector('body') as HTMLElement
    isDarkMode
    themeMode
    constructor() {
        this.$body.classList.add(initialTheme)
        this.isDarkMode = initialTheme === 'dark'
        this.themeMode = initialTheme
    }
    themeToggler() {
        this.isDarkMode = this.$body.classList.contains('dark')
        if(this.isDarkMode) {
            this.setLightMode()
        } else {
            this.setDarkMode()
        }
    }
    setDarkMode() {
        this.$body.classList.remove('light')
        this.$body.classList.add('dark')
        browserStorage.set('theme','dark')
        this.isDarkMode = true
        this.themeMode = 'dark'
    }
    setLightMode() {
        this.$body.classList.remove('dark')
        this.$body.classList.add('light')
        browserStorage.set('theme','light')
        this.isDarkMode = false
        this.themeMode = 'light'
    }
}

const themeModeHandler = new ThemeModeHandler()

export default themeModeHandler