import styled from '@emotion/styled'

import useBlogConfig from '@/hooks/useBlogConfig'

const Footer = () => {
  const { author } = useBlogConfig()
  return <Container>@ 2025 Developer {author}, Powered By Gatsby.</Container>
}

export default Footer

const Container = styled.footer`
  margin-top: var(--padding-s);
  padding: var(--padding-s) 0;
  text-align: center;
  border-top: 1px solid var(--color-background-secondary);
  ${({ theme: { typography } }) => typography.textBase}
`
