import styled from '@emotion/styled'

export const Container = styled.div`
    position: relative;
`

export const MarkdownRenderer = styled.article`
    ${({theme: {MarkdownStyle}})=> MarkdownStyle}
`

export const TableOfContent = styled.aside`
    position: absolute;
    height: 100%;
    right: 0px;
    /* transform: translateX(100%); */
  padding: 1rem 1rem 1rem 5.5rem;
  font-size: 0.85rem;
  @media (max-width: 1360px) {
    position: relative;
  }
  > ul {
    display: inline-block;
    position: sticky;
    top: calc(96px);
    line-height: 1.25;
    max-height: calc(80vh);
    overflow-y: auto;
    max-width: calc(300px - 4rem);
    word-break: keep-all;
  }
`