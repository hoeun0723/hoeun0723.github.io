import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ReactNode } from 'react'

export const Container = styled.div`
  width: var(--main-content-width);
  padding: 1rem;
  margin: 0 auto;
  color: var(--color-heading-text);
  background-color: var(--color-background-secondary);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 15px;
  border: 2px solid var(--color-table-border);
  border-radius: 12px;
`

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
  gap: var(--space-m);
`

export const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => <Link {...props} />)`
  cursor: pointer;
  border-radius: 8px;
  padding: 0 var(--space-s);
  ${({ theme: { typography } }) => typography.linkSmall}
  color: var(--color-text);
  background-color: var(--color-category-chip);
  border: 2px solid ${({ active }) => (active ? 'var(--color-text);' : 'var(--color-background)')};

  &:hover {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const AllCategoryTag = styled(CategoryItem)`
  ${({ theme: { typography } }) => typography.linkMedium};
`
