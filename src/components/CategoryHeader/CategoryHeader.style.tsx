import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {ReactNode} from 'react'

export const Container = styled.div`
    width: 768px;
    padding: 1rem;
    margin: 0 auto;
    color: var(--color-heading-text);
    background-color: var(--color-background-secondary);
    box-shadow: rgba(0,0,0,0.08) 0px 0px 15px;
    border: 2px solid var(--color-table-border);
    border-radius: 12px;
`

export const CategoryInfo = styled.div`
    margin-bottom: 12px;
`

export const Info = styled.div``

// category list
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

export const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => <Link {...props} />)`
  cursor: pointer;
  margin-right: 12px;
  border-radius: 8px;
  padding: 0 6px;
  ${({ theme: { typography } }) => typography.linkSmall}
  color: var(--color-text);
  background-color: var(--color-category-chip);
  border: 1px solid ${({ active }) => (active ? 'var(--color-text);' : 'var(--color-background)')};
  &:last-of-type {
    margin-right: 0;
  }
`

export const AllCategoryTag = styled(CategoryItem)`
  ${({ theme: { typography } }) => typography.linkMedium};
`