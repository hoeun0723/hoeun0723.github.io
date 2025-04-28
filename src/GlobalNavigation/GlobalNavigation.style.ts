import styled from '@emotion/styled'
import {Link} from 'gatsby'

export const Container = styled.header<{isHidden: boolean}>`
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top: ${({isHidden})=> (isHidden ? -60 : 0)}px;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: #ffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(5px);
    opacity: ${({isHidden})=> (isHidden? 0 : 1)};
    transition: top 0.5s, opacity 0.5s;
    z-index: 999;
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
        gap: 12px;
    }
`

export const NavLink = styled(Link)``