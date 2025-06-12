import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.header<{ isHidden: boolean }>`
  width: 100%;
  height: var(--gnb-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? -60 : 0)}px;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  backdrop-filter: blur(5px);
  transition: top 0.5s, opacity 0.5s;
  z-index: var(--z-index-top);

  ${({ theme: { typography } }) => typography.linkMedium};

  color: var(--color-text);
  background-color: var(--color-background-secondary);
  box-shadow: var(--color-navigation-shadow);
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
`

export const BlogTitle = styled.div``

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

export const NavLinks = styled.nav`
  > ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const NavLink = styled(Link)``

export const ThemeSwitchButton = styled.button`
  width: 24px;
  height: 24px;
  > svg {
    width: var(--icon-medium);
    height: var(--icon-medium);
  }
`
