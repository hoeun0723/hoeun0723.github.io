import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Layout from '@/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundPageWrapper>
        <NotFoundText>404</NotFoundText>
        <NotFoundDescription>
          찾을 수 없는 페이지입니다. <br />
          다른 콘텐츠를 보러 가보시겠어요?
        </NotFoundDescription>
        <GoToMainButton to="/">메인으로</GoToMainButton>
      </NotFoundPageWrapper>
    </Layout>
  )
}

export default NotFoundPage

const NotFoundPageWrapper = styled.div`
  width: var(--main-content-width);
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFoundText = styled.h1`
  ${({ theme: { typography } }) => typography.displayBoldLarge}
  font-size: 150px;

  @media ${({ theme: { media } }) => media.medium} {
    font-size: 100px;
  }
`

const NotFoundDescription = styled.p`
  ${({ theme: { typography } }) => typography.displayRegular}
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media ${({ theme: { media } }) => media.medium} {
    font-size: 20px;
  }
`

const GoToMainButton = styled(Link)`
  ${({ theme: { typography } }) => typography.linkLarge}
  margin-top: var(--padding-s);
  text-decoration: underline;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
`
