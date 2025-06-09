import {useEffect, useRef} from 'react'

import BLOG_CONFIG from '@/constant/blog.config'
import { useThemeModeProviderState } from '@/context/ThemeMode.Provider'

const useUtterance = () => {
    const {isDarkMode} = useThemeModeProviderState()
    const utteranceTheme = isDarkMode ? 'github-dark' : 'github-light'
    const utteranceElement = useRef<HTMLDivElement>(null)

    const createUtterance = () => {
        const utterances: HTMLScriptElement = document.createElement('script')
        const attributes = { ... BLOG_CONFIG.utterances, theme: utteranceTheme }

        Object.entries(attributes).forEach(([key,value])=> {
            utterances.setAttribute(key, value)
        })
        utteranceElement.current?.appendChild(utterances)
    }

    const setThemeUtterance = (iframe: HTMLIFrameElement) => {
        const msg = {
            type: 'set-theme',
            theme: utteranceTheme,
        }
        iframe.contentWindow?.postMessage(msg, 'https://utteranc.es')
    }

    useEffect(() => {
        if(utteranceElement.current === null) return
        const utteranceIframe = document.querySelector('iframe.utterance-frame') as HTMLIFrameElement
        utteranceIframe ? setThemeUtterance(utteranceIframe) : createUtterance()
    },[isDarkMode])

    return {utteranceElement}
}

export default useUtterance

