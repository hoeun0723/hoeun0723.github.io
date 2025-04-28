import '@emotion/react'
import {Colors, Fonts, Typography} from './theme'

declare module '@emotion/react' {
    export interface Theme {
        colors: Colors
        FONTS: Fonts
        typography: Typography
    }
}