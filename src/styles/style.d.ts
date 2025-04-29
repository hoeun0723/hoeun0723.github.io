import '@emotion/react'
import {COLORS, Color, FONTS, Typography} from './theme'

declare module '@emotion/react' {
    export interface Theme {
        COLORS: COLORS
        color: Color
        FONTS: FONTS
        typography: Typography
    }
}