import { useState } from "react";

import ThemeSwitchButton from '@/components/ThemeSwitchButton'

import BlogTitle from "./BlogTitle";
import * as S from './GlobalNavigation.style'

const ROUTE_LINKS = [
    {label: 'Home', url: '/'},
    {label: 'About', url: '/about'},
]

const GlobalNavigation = () => {
    const [isHidden, setIsHidden]
 = useState(false) // 스크롤 내리면 없어지게 하기기
    return (
        <S.Container isHidden={isHidden} >
            <BlogTitle/>
            <S.NavLinks>
                <ul>
                    <ThemeSwitchButton/>
                    {ROUTE_LINKS.map(route => (
                        <S.NavLink key={route.url} to={route.url}>
                            {route.label}
                        </S.NavLink>
                    ))}
                </ul>
            </S.NavLinks>
        </S.Container>
    )
}

export default GlobalNavigation