import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GatsbyImageDataType } from '@/types/gatsby.type'

//Header
interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 64px;

  @media ${({ theme }) => theme.media.medium} {
    height: 300px;
  }
`

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--main-content-width);
  height: 100%;
  margin: 0 auto;
  padding: var(--padding-l) var(--space-m);
  color: var(--color-white);
  background-color: transparent;
  position: relative;
  z-index: var(--z-index-second);
`

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${({ theme: { typography } }) => typography.displayBoldLarge};

  @media ${({ theme }) => theme.media.medium} {
    ${({ theme: { typography } }) => typography.displayBold};
  }
`

export const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  ${({ theme: { typography } }) => typography.linkMedium}

  @media ${({ theme: { media } }) => media.medium} {
    flex-direction: column;
    align-items: flex-start;
    ${({ theme: { typography } }) => typography.linkBase}
  }
  @media ${({ theme: { media } }) => media.small} {
    ${({ theme: { typography } }) => typography.linkSmall}
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 8px;
`

// Body
export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: var(--main-content-width);
  margin: 0 auto;
`

export const MarkdownRenderer = styled.article`
  ${({ theme: { markdownStyle } }) => markdownStyle}
`

export const TableOfContent = styled.aside`
  position: absolute;
  height: 100%;
  right: -45%;
  font-size: 0.9rem;
  max-width: 240px;
  > ul {
    display: inline-block;
    position: sticky;
    top: 96px; // gnb높이 만큼
    line-height: 1.25;
    max-height: 80vh;
    overflow-y: auto;
    word-break: keep-all;
    border-left: 1px solid var(--color-text);
    padding-left: 0%.5rem;
    li {
      margin: 0 0 0.3rem 0.3rem;
      > ul {
        margin: 0 0 0.3rem 0.3rem;
      }
    }
    p {
      margin: 0 0 0.3rem 0;
      border-radius: 5px;
    }
    a {
      display: inline-block;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  @media (max-width: 1460px) {
    right: -38%;
  }
  @media ${({ theme: { media } }) => media.xLarge} {
    position: relative;
    right: 0;
    max-width: 100%;
    > ul {
      padding-left: 1rem;
    }
  }
`

// Footer

export const Footer = styled.div`
  width: var(--main-content-width);
  margin: var(--padding-s) auto;
  border-top: 1px solid var(--color-background-secondary);
  padding-top: var(--padding-s);
`

// gatsby-plugin-image 라이브러리에서 제공해주는 GatsbyImage 컴포넌트에는 기본적으로 적용되어있는 인라인 스타일이 존재하는데,
// 인라인 스타일은 !important 속성이 없으면 스타일 적용 순위에서 밀리기 때문에 아래와 같이 styled(GatsbyImage) 과 같이 넘기지 않고 함수 내부에서 props를 받아 스타일과 함께 GatsbyImage 컴포넌트에 넘겨주도록 구현
// 하지만 !important 속성은 가능한 사용하지 말아야 하는 속성이기 때문에 위의 코드와 같이 직접 인라인으로 포지션 스타일을 넘겨주었습니다.
export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media ${({ theme }) => theme.media.medium} {
    height: 300px;
  }
`
