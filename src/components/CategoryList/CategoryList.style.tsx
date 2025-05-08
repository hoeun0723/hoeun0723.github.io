import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {ReactNode} from 'react'

interface CategoryItemProps {
    active: boolean
}

interface GatsbyLinkProps extends CategoryItemProps {
    children: ReactNode
    className?: string
    to: string
}

export const Container = styled.div``

export const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;
`

export const CategoryItem = styled(({active, ...props}: GatsbyLinkProps)=>
<Link {...props}/>)`
cursor: pointer;
margin-right: 20px;
padding: 5px 0;
color: ${({active, theme: {COLORS}})=> (active?COLORS.BLACK : COLORS.GREYSCALE['700'])};

${({theme: {typography}})=> typography.linkMedium};

&:last-of-type {
margin-right:0;
}
`