import { css } from '@emotion/react'

import markdownStyle from './markdown'
import media from './media'

const calcRem = (size: number): string => `${size / 16}rem`

const fonts = {
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

const typography = {
  // Display
  displayBoldLarge: css`
    font-size: ${fonts.SIZE.X_LARGE};
    line-height: 64px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  displayBold: css`
    font-size: ${fonts.SIZE.X_LARGE};
    line-height: 48px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  displayRegular: css`
    font-size: ${fonts.SIZE.X_LARGE};
    line-height: 48px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
  // Link
  linkLarge: css`
    font-size: ${fonts.SIZE.LARGE};
    line-height: 40px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  linkMedium: css`
    font-size: ${fonts.SIZE.MEDIUM};
    line-height: 32px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  linkBase: css`
    font-size: ${fonts.SIZE.BASE};
    line-height: 30px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  linkSmall: css`
    font-size: ${fonts.SIZE.SMALL};
    line-height: 28px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  linkXSmall: css`
    font-size: ${fonts.SIZE.X_SMALL};
    line-height: 20px;
    font-weight: ${fonts.WEIGHT.BOLD};
  `,
  // Text
  textLarge: css`
    font-size: ${fonts.SIZE.LARGE};
    line-height: 40px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
  textMedium: css`
    font-size: ${fonts.SIZE.MEDIUM};
    line-height: 32px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
  textBase: css`
    font-size: ${fonts.SIZE.BASE};
    line-height: 30px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
  textSmall: css`
    font-size: ${fonts.SIZE.SMALL};
    line-height: 28px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
  textXSmall: css`
    font-size: ${fonts.SIZE.X_SMALL};
    line-height: 20px;
    font-weight: ${fonts.WEIGHT.REGULAR};
  `,
}

const theme = { fonts, typography, markdownStyle, media }

export default theme

export type fonts = typeof fonts
export type TypographyType = typeof typography
export type MarkdownStyleType = typeof markdownStyle
export type MediaType = typeof media
