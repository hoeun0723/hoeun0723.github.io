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

const colors = {}

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
  
const theme = { colors, FONTS, typography }

export default theme

export type Colors = typeof colors
export type Fonts = typeof FONTS
export type Typography = typeof typography