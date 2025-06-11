import styled from '@emotion/styled'

const Footer = () => {
  return <Container>@ 2025 Developer Hoeun, Powered By Gatsby</Container>
}

export default Footer

const Container = styled.footer`
  margin-top: var(--padding-s);
  padding: var(--padding-s) 0;
  text-align: center;
  border-top: 1px solid var(--color-background-secondary);
  ${({ theme: { typography } }) => typography.textBase}
`
