import '@emotion/react'
import {COLORS, FONTS, Typography, MarkdownStyleType} from './theme'

declare module '@emotion/react' {
    export interface Theme {
        COLORS: COLORS
        FONTS: FONTS
        typography: Typography
        MarkdownStyle: MarkdownStyleType
    }
}