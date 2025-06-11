import styled from '@emotion/styled'

import Layout from '@/Layout'

const About = () => {
  return (
    <Layout>
      <LayoutStyle>
        <h1>준비중입니다..✍️</h1>
      </LayoutStyle>
    </Layout>
  )
}

const LayoutStyle = styled.div`
  width: var(--main-content-width);
  margin: 0 auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default About
