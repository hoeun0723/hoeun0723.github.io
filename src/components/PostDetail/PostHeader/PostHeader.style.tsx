import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GatsbyImageDataType } from '@/types/gatsby.type'

interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: var(--color-white);
  background-color: transparent;
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 8px;
`

export const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-white);
  color: var(--color-black);
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
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
  ${({ theme: { typography } }) => typography.displayBoldLarge}

  @media (max-width:768px) {
    font-size: 30px;
  }
`

export const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  ${({ theme: { typography } }) => typography.linkMedium}

  @media (max-width:768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
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

  @media (max-width: 768px) {
    height: 300px;
  }
`
