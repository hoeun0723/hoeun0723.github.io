import {useMemo, useState} from 'react'

import themeModeHandler,{ThemeModeType} from '@/utils/themeMode'

export type ThemeModeStateType = Pick<ThemeModeType, 'isDarkMode' | 'themeMode'>

export type ThemeModeActionType = Pick<ThemeModeType, 'themeToggler'>

export const themeInitMode = {
    isDarkMode: themeModeHandler.isDarkMode,
    themeMode: themeModeHandler.themeMode,
}

const useThemeMode = () => {
    const [themeMode, setThemeMode] = useState(themeInitMode.themeMode)
    const [isDarkMode, setIsDarkMode] = useState(themeInitMode.isDarkMode)

    const themeToggler = () => {
        themeModeHandler.themeToggler()
        setIsDarkMode(themeModeHandler.isDarkMode)
        setThemeMode(themeModeHandler.themeMode)
    }

    const states = useMemo(()=> ({isDarkMode, themeMode}),[isDarkMode,themeMode])
    const actions = useMemo(()=> ({themeToggler}),[themeToggler])

    return {
        states,
        actions,
    }
}

export default useThemeMode
