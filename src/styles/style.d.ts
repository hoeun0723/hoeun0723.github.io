import '@emotion/react'
import { FontsType, TypographyType, MarkdownStyleType } from './theme'

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontsType
    typography: TypographyType
    markdownStyle: MarkdownStyleType
  }
}
