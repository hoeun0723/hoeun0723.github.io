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

export const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CategoryItem  = styled(({active, ...props}:GatsbyLinkProps)=><Link {...props}/>)`
    cursor: pointer;
    margin-right: 12px;
    border-radius: 8px;
    padding:0 6px;
    ${({theme: {typography}})=> typography.linkSmall}

    color: var(--color-text);
    background-color: var(--color-background);
    border: 1px solid ${({active})=>(active ? 'var(--color-text);' : 'var(--color-background)')};

    &:last-of-type {
        margin-right: 0;
    }
`

export const AllCategoryTag = styled(CategoryItem)`
    ${({theme: {typography}})=> typography.linkMedium};
`