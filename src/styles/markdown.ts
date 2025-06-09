import { css } from '@emotion/react'
const MarkdownStyle = css`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  min-width: 680px;
  word-break: break-all;
  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
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
    border-left: 2px solid #000000;
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
  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }
  code[class*='language-text'],
  pre[class*='language-text'] {
    padding: 1.6px 4.8px;
    font-size: 14.4px;
    background-color: rgb(215 218 221); // dark: rgb(73, 80, 87)
    font-weight: bold;
    color: rgb(33, 37, 41); //dark: rgb(248, 249, 250);
    font-size: 14.4px;
  }

  code[class*='language-'],
  pre[class*='language-']{
    tab-size: 2;
  }

  table {
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  table tr {
    border-top: 1px solid #d0d7de;
    background-color: #ffffff; // dark: #0d1117
    margin: 0;
    padding: 0;
  }
  table tr:nth-child(2n) {
    background-color: #f6f8fa; // dark: #161b22
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
    border: 1px solid #d0d7de;
    text-align: center;
    margin: 0;
    padding: 6px 13px;
    vertical-align: inherit;
  }
  table tr td {
    border: 1px solid #d0d7de;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }
  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
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

export default MarkdownStyle