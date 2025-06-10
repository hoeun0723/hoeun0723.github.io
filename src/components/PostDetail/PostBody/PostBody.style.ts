import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
`

export const MarkdownRenderer = styled.article`
  ${({ theme: { markdownStyle } }) => markdownStyle}
`

export const TableOfContent = styled.aside`
  position: absolute;
  height: 100%;
  right: 0px;
  transform: translateX(-16%);
  padding: 1rem;
  font-size: 0.9rem;
  @media (max-width: 1360px) {
    position: relative;
    transform: translateX(0);
    margin: 0 auto;
    width: 768px;
    min-width: 680px;
    > ul {
      width: 768px;
      min-width: 680px;
      padding-left: 2rem;
    }
  }
  > ul {
    display: inline-block;
    position: sticky;
    top: 96px; // gnb 높이 만큼큼
    line-height: 1.25;
    max-height: calc(80vh);
    overflow-y: auto;
    max-width: calc(300px - 4rem);
    word-break: keep-all;
    border-left: 2px solid #eeeeee;
    li {
      margin: 0 0 0.6rem 0.6rem;
      > ul {
        margin: 0 0 0.6rem 0.6rem;
      }
    }
    p {
      margin: 0 0 0.6rem 0;
      border-radius: 5px;
    }
    a {
      display: inline-block;
      width: 100%;
      /* padding: 0.4rem; */
      &:hover {
        color: var(--color-primary);
      }
    }
  }
`
