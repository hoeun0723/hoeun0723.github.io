import { ThemeProvider } from '@emotion/react'
 import { ReactNode } from 'react'
 
 import GlobalStyle from '@/styles/GlobalStyle'
 import theme from '@/styles/theme'
 
 interface StylesProps {
   children: ReactNode
 }
 
 const Styles = ({ children }: StylesProps) => {
   return (
     <ThemeProvider theme={theme}>
       <GlobalStyle />
       {children}
     </ThemeProvider>
   )
 }
 
 export default Styles