import { Global, css } from '@emotion/react'

import media from './media' // css(@emotion/react)에서 theme를 전달받지 못해서 직접 import해서 사용
import Normalize from './Normalize'

const styles = css`
  ${Normalize}
  * {
    font-family: 'AppleSDGothicNeo', 'Noto Sans', 'sans-serif';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    /* global */
    --z-index-top: 999;
    --z-index-second: 500;
    --padding-xl: 100px;
    --padding-l: 60px;
    --padding-m: 50px;
    --padding-s: 30px;
    --main-content-width: 760px;
    --space-l: 16px;
    --space-m: 12px;
    --space-s: 8px;
    --icon-small: 18px;
    --icon-medium: 24px;
    --icon-large: 36px;
    --icon-xLarge: 64px;
    /* etc */
    --gnb-height: 70px;

    @media ${media.medium} {
      --padding-xl: 90px;
      --padding-l: 40px;
      --padding-m: 30px;
      --padding-s: 20px;
      --space-m: 10px;
      --space-s: 6px;
      --main-content-width: 90%;
      --gnb-height: 50px;
    }

    @media ${media.small} {
      --padding-xl: 80px;
      --padding-l: 30px;
      --padding-m: 20px;
      --space-m: 8px;
      --space-s: 4px;
      --main-content-width: 95%;
      --gnb-height: 50px;
    }
  }

  body,
  body.light {
    --color-background: #f3f5f7;
    --color-background-secondary: #ffffff;
    --color-category-chip: #eceef1;
    --color-text: #00214d;
    --color-heading-text: #000;
    --color-paragraph: #1b2e46;
    --color-anchor-text: #0076d1;
    --color-code-background: #d7dad3;
    --color-code-text: #212529;
    --color-table-background-color: #fff;
    --color-table-background-color-second: #f6f8fa;
    --color-table-border: #d0d7de;
    --color-navigation-shadow: rgba(0, 0, 0, 0.08);

    --color-primary: #218bff;
    --color-secondary: #54aeff;
    /* --color-tertiary: */
    --color-white: #f3f5f7;
    --color-black: #222;
    --color-gray: #5a6072;
    --color-gray-1000: #21232c;
    --color-overlay: #61646bcc;
  }

  body.dark {
    --color-background: #242629;
    --color-background-secondary: #151519;
    --color-category-chip: #242629;
    --color-text: #dbdbdb;
    --color-heading-text: #fff;
    --color-paragraph: #abb5c3;
    --color-anchor-text: #0076d1;
    --color-code-background: #495057;
    --color-code-text: #f8f9fa;
    --color-table-background-color: #151519;
    --color-table-background-color-second: #0d1117;
    --color-table-border: #424242;
    --color-navigation-shadow: rgba(0, 0, 0, 0.08);

    --color-primary: #79c0ff;
    --color-secondary: #1f6feb;
    /* --color-tertiary:  */
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  html,
  body,
  #___gatsby {
    height: 100%;
    scroll-behavior: smooth;
  }

  a,
  a:hover,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul,
  li {
    padding: 0;
    list-style: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={styles} />
}

export default GlobalStyle
