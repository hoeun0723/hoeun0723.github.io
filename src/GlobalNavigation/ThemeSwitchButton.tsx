import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

import { useThemeModeProviderState, useThemeModeProviderAction } from '@/context/ThemeMode.Provider'

import * as S from './GlobalNavigation.style'

const ThemeSwitchButton = () => {
  const { isDarkMode } = useThemeModeProviderState()
  const { themeToggler } = useThemeModeProviderAction()

  return <S.ThemeSwitchButton onClick={themeToggler}>{isDarkMode ? <FaRegMoon /> : <FiSun />}</S.ThemeSwitchButton>
}

export default ThemeSwitchButton
