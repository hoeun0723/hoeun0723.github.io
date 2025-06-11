import '@emotion/react'
import { FontsType, TypographyType, MarkdownStyleType, MediaType } from './theme'
declare module '@emotion/react' {
  export interface Theme {
    fonts: FontsType
    typography: TypographyType
    markdownStyle: MarkdownStyleType
    media: MediaType
  }
}
