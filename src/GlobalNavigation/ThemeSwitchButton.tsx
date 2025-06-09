import { useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

import themeModeHandler from '@/utils/themeMode'

import * as S from './GlobalNavigation.style'

const ThemeSwitchButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(themeModeHandler.isDarkMode)

  const handleClickThemeToggler = () => {
    themeModeHandler.themeToggler()
    setIsDarkMode(themeModeHandler.isDarkMode)
  }
  return (
    <S.ThemeSwitchButton onClick={handleClickThemeToggler}>
      {isDarkMode ? <FaRegMoon /> : <FiSun />}
    </S.ThemeSwitchButton>
  )
}

export default ThemeSwitchButton