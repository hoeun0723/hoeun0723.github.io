import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import ThemeModeProvider from '@/context/ThemeMode.Provider'
import GlobalNavigation from '@/GlobalNavigation'
import Styles from '@/styles'

import * as S from './Layout.style'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeModeProvider>
      <Styles>
        <S.Container>
          <GlobalNavigation />
          <main>{children}</main>
          <Footer />
        </S.Container>
      </Styles>
    </ThemeModeProvider>
  )
}

export default Layout
