import { isBrowser } from '@/utils'

import browserStorage from './browserStorage'

const THEME_MODE_DARK = 'dark' as const
const THEME_MODE_LIGHT = 'light' as const

type ThemeMode = typeof THEME_MODE_DARK | typeof THEME_MODE_LIGHT

export interface ThemeModeType {
  $body: HTMLElement | undefined
  isDarkMode: boolean
  themeMode: ThemeMode
  themeToggler: () => void
}

// prefers-color-scheme 값을 확인 해 시스템의 컬러모드 초기값으로 사용
const prefersColorScheme = isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//이전에 방문했다면 localstorage에 theme 값이 저장되어 있을 예정
const localTheme = browserStorage.get('theme') as ThemeMode

/**
 * localStorage 에 저장된 값이 없으면 os에 지정된 prefers-color-scheme 에 따라 테마를 선택하기
 */
const initialTheme = localTheme || prefersColorScheme

class ThemeModeHandler implements ThemeModeType {
  $body: HTMLElement | undefined
  isDarkMode: boolean
  themeMode: ThemeMode
  constructor() {
    this.$body = isBrowser ? (document.querySelector('body') as HTMLElement) : undefined
    this.isDarkMode = initialTheme === THEME_MODE_DARK
    this.themeMode = initialTheme
    this.setInitMode()
  }
  setInitMode() {
    this.$body?.classList.add(initialTheme)
  }
  themeToggler() {
    this.isDarkMode = this.$body!.classList.contains(THEME_MODE_DARK)
    if (this.isDarkMode) {
      this.setMode(THEME_MODE_LIGHT)
    } else {
      this.setMode(THEME_MODE_DARK)
    }
  }
  setMode(themeMode: ThemeMode) {
    this.$body?.classList.remove(THEME_MODE_LIGHT, THEME_MODE_DARK)
    this.$body?.classList.add(themeMode)
    browserStorage.set('theme', themeMode)
    this.isDarkMode = themeMode === THEME_MODE_DARK
    this.themeMode = themeMode
  }
}

const themeModeHandler = new ThemeModeHandler()

export default themeModeHandler
