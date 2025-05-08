import { css } from '@emotion/react'

const calcRem = (size: number): string => `${size / 16}rem`

const FONTS = {
  SIZE: {
    X_SMALL: calcRem(12),
    SMALL: calcRem(14),
    BASE: calcRem(16),
    MEDIUM: calcRem(18),
    LARGE: calcRem(24),
    X_LARGE: calcRem(32),
  },
  WEIGHT: {
    REGULAR: 400,
    MEDIUM: 500,
    BOLD: 700,
  },
  FAMILY: {
    BASE: "'AppleSDGothicNeo', 'Noto Sans', sans-serif",
    LOGO: "'AppleSDGothicNeo', 'Noto Sans', sans-serif",
  },
}

const COLORS = {
    GREYSCALE: {
        '050': '#FAFAFA',
        '100': '#F5F5F5',
        '200': '#EEEEEE',
        '300': '#E0E0E0',
        '400': '#BDBDBD',
        '500': '#9E9E9E',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
    },
    BLACK: '#000',
    WHITE: '#FFF',
}

const color = {}

const typography = {
    // Display
    displayBold: css`
      font-size: ${FONTS.SIZE.X_LARGE};
      line-height: 48px;
      font-weight: ${FONTS.WEIGHT.BOLD};
    `,
    displayRegular: css`
      font-size: ${FONTS.SIZE.X_LARGE};
      line-height: 48px;
      font-weight: ${FONTS.WEIGHT.REGULAR};
    `,
    // Link
    linkLarge: css`
      font-size: ${FONTS.SIZE.LARGE};
      line-height: 40px;
      font-weight: ${FONTS.WEIGHT.BOLD};
    `,
    linkMedium: css`
      font-size: ${FONTS.SIZE.MEDIUM};
      line-height: 32px;
      font-weight: ${FONTS.WEIGHT.BOLD};
    `,
    linkSmall: css`
      font-size: ${FONTS.SIZE.SMALL};
      line-height: 28px;
      font-weight: ${FONTS.WEIGHT.BOLD};
    `,
    linkXSmall: css`
      font-size: ${FONTS.SIZE.X_SMALL};
      line-height: 20px;
      font-weight: ${FONTS.WEIGHT.BOLD};
    `,
    // Text
    textLarge: css`
      font-size: ${FONTS.SIZE.LARGE};
      line-height: 40px;
      font-weight: ${FONTS.WEIGHT.REGULAR};
    `,
    textMedium: css`
      font-size: ${FONTS.SIZE.MEDIUM};
      line-height: 32px;
      font-weight: ${FONTS.WEIGHT.REGULAR};
    `,
    textSmall: css`
      font-size: ${FONTS.SIZE.SMALL};
      line-height: 28px;
      font-weight: ${FONTS.WEIGHT.REGULAR};
    `,
    textXSmall: css`
      font-size: ${FONTS.SIZE.X_SMALL};
      line-height: 20px;
      font-weight: ${FONTS.WEIGHT.REGULAR};
    `,
  }
  
const theme = { FONTS, typography, COLORS, color }

export default theme

export type COLORS = typeof COLORS
export type Color = typeof color
export type FONTS = typeof FONTS
export type Typography = typeof typography