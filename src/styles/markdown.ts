import { css } from '@emotion/react'

import media from './media'

const markdownStyle = css`
  // Markdown Style
  word-break: break-all;
  line-height: 1.5;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text);
  background-color: var(--color-background);
  margin: 2rem 0;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }
  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 32px;
  }
  strong {
    font-size: 18px;
    font-weight: 600;
  }
  // TOC 클릭시 헤더가 보이게끔 이동하기 위한 속성
  h1[id],
  h2[id],
  h3[id],
  h4[id],
  h5[id],
  h6[id] {
    scroll-margin-top: 6rem; // 각 태그의 높이 만큼
  }
  * + h1,
  * + h2,
  * + h3 {
    margin-top: 32px;
  }
  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 20px;
  }
  // Adjust Quotation Element Style
  blockquote {
    margin: 12px 0;
    padding: 5px 15px;
    border-left: 5px solid var(--color-text);
    font-weight: 800;
  }
  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 12px 0;
  }
  ul,
  li {
    list-style: disc;
  }
  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }
  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }
  code:not(.grvsc-code) {
    background-color: var(--color-code-background);
    color: var(--color-code-text);
    border-radius: 5px;
    padding: 2px 4px;
  }

  // // Adjust Code Style
  // pre[class*='language-'],
  // .grvsc-container {
  //   margin: 10px 0;
  //   padding: 15px;
  //   font-size: 15px;

  //   ::-webkit-scrollbar-thumb {
  //     background-color: rgba(255, 255, 255, 0.5);
  //     border-radius: 3px;
  //   }
  // }

  // code,
  // code[class*='language-text'],
  // pre[class*='language-text'],
  // .grvsc-container {
  //   padding: 1.6px 4.8px;
  //   font-size: 14.4px;
  //   background-color: var(--color-code-background);
  //   font-weight: bold;
  //   color: var(--color-code-text);
  //   font-size: 14.4px;
  // }

  // code[class*='language-'],
  // pre[class*='language-'],
  // .grvsc-container {
  //   tab-size: 2;
  // }

  table {
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  table tr {
    border-top: 1px solid var(--color-table-border);
    background-color: var(--color-table-background-color);
    color: var(--color-text);
    margin: 0;
    padding: 0;
    &:nth-of-type(2n) {
      background-color: var(--color-table-background-color-second);
    }
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  table tr th {
    display: table-cell;
    font-weight: bold;
    border: 1px solid var(--color-table-border);
    text-align: center;
    margin: 0;
    padding: 6px 13px;
    vertical-align: inherit;
  }
  table tr td {
    border: 1px solid var(--color-table-border);
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  table tr th :first-of-type,
  table tr td :first-of-type {
    margin-top: 0;
  }
  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  // added for image resizingAdd commentMore actions
  img {
    width: 100%;
    max-width: 768px;
  }

  // Markdown Responsive Design
  @media (${media.medium}) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;
    h1 {
      font-size: 23px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 17px;
    }
    img {
      width: 100%;
    }
    hr {
      margin: 50px 0;
    }
  }
`

export default markdownStyle
