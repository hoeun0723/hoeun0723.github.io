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
    --color-background: #ffffff;
    --color-background-secondary: #fdf6ec;
    --color-category-chip: #eceae6;
    --color-text: #3a2e27;
    --color-heading-text: #1e1e1e;
    --color-paragraph: #5e5148;
    --color-anchor-text: #c96f2b;
    --color-code-background: #f0e6da;
    --color-code-text: #3a2e27;
    --color-table-background-color: #ffffff;
    --color-table-background-color-second: #f7f3ef;
    --color-table-border: #d8cbc1;
    --color-navigation-shadow: rgba(0, 0, 0, 0.04);
    --color-primary: #d78c49;
    --color-secondary: #a8745d;

    --color-white: #ffffff;
    --color-black: #2e2e2e;
    --color-gray: #7d7066;
    --color-gray-1000: #4d433c;
    --color-overlay: #5c5144cc;
  }

  body.dark {
    --color-background: #1f1b18;
    --color-background-secondary: #2a2522;
    --color-category-chip: #3c3530;
    --color-text: #e7e1dc;
    --color-heading-text: #ffffff;
    --color-paragraph: #d2c4bd;
    --color-anchor-text: #ffcc8f;
    --color-code-background: #3e372f;
    --color-code-text: #ffe9d6;
    --color-table-background-color: #2a2522;
    --color-table-background-color-second: #1a1816;
    --color-table-border: #6f5f55;
    --color-navigation-shadow: rgba(0, 0, 0, 0.08);

    --color-primary: #f5b56b;
    --color-secondary: #d1a175;
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
