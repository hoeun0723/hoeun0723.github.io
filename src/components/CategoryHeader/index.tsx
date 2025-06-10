import CategoryList, { CategoryListProps } from '@/components/CategoryHeader/CategoryList'

import * as S from './CategoryHeader.style'
import Bio from '../Bio'

export type CategoryHeaderProps = CategoryListProps

const CategoryHeader = ({ selectedCategory, categoryList }: CategoryHeaderProps) => {
  return (
    <S.Container>
      <Bio />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
    </S.Container>
  )
}

export default CategoryHeader
