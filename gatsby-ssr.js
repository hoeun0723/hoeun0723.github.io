import React from 'react'

const functionToScript = callbackFn => String(callbackFn)

const setInitThemeMode = () => {
  if (typeof window !== 'undefined') {
    const $body = document.querySelector('body')
    // prefers-color-scheme 값을 확인 해 시스템의 컬러모드 초기값으로 사용
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
    // 이젠에 방문했다면 local storage 에 theme 값이 저장되어 있을 예정
    const localTheme = localStorage.getItem('theme')
    /**
     * local storage에 저장된 값이 없으면 os에 지정된 prefers-color-scheme에 따라 테마를 선택하기
     */
    const initialTheme = localTheme || prefersColorScheme
    $body?.classList.add(initialTheme)
  }
}

const setInitThemeModeScript = functionToScript(setInitThemeMode)
const codeRunOnClient = `(${setInitThemeModeScript})()`

const MagicScriptTag = () => {
  return <script dangerouslySetInnerHTML={{ __html: codeRunOnClient }} />
}

// 주로 사용하는 폰트들
const FONTS = ['/fonts/AppleSDGothicNeoR.woff2', '/fonts/AppleSDGothicNeoM.woff2', '/fonts/AppleSDGothicNeoB.woff2']

const fontsLinks = FONTS.map(font => (
  <link rel="preload" href={font} as="font" type="font/woff2" crossOrigin="anonymous" key="interFont" />
))

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(fontsLinks), setPreBodyComponents(<MagicScriptTag key="setInitThemeMode-script" />)
}
