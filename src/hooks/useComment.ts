import { useEffect, useRef } from 'react'

import { useThemeModeProviderState } from '@/context/ThemeMode.Provider'

import useBlogConfig from './useBlogConfig'

/**
 * ex: data_repo -> data-repo
 */
const underBarToDash = (obj: { [key: string]: string }) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = key.replace(/_/g, '-')
    acc[newKey] = value
    return acc
  }, {} as { [key: string]: string })

const useComment = () => {
  const { isDarkMode } = useThemeModeProviderState()
  const { giscus: CONFIG } = useBlogConfig()
  const commentTheme = isDarkMode ? 'dark' : 'light'
  const $commentElement = useRef<HTMLDivElement>(null)
  const $iframe = useRef<HTMLIFrameElement | null>(null)

  const setIframeElement = () => {
    $iframe.current = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement
  }

  const createScriptElement = () => {
    const $script: HTMLScriptElement = document.createElement('script')
    const configWithTheme = { ...CONFIG, data_theme: commentTheme }
    const attributes = underBarToDash(configWithTheme)
    Object.entries(attributes).forEach(([key, value]) => {
      $script.setAttribute(key, value)
    })
    $commentElement.current?.appendChild($script)
    setIframeElement()
  }

  const setCommentTheme = ($iframe: HTMLIFrameElement) => {
    // version: utterance
    // const msg = {
    //      type: 'set-theme',
    //      theme: utteranceTheme,
    // }
    // iframe.contentWindow?.postMessage(msg, 'https://itteranc.es')

    // version:giscus
    const msg = { giscus: { setConfig: { theme: commentTheme } } }
    $iframe.contentWindow?.postMessage(msg, 'https://giscus.app')
  }

  useEffect(() => {
    if ($commentElement.current === null) return
    $iframe.current ? setCommentTheme($iframe.current) : createScriptElement()
  }, [isDarkMode, $iframe])
  return { $commentElement }
}

export default useComment
