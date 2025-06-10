import CategoryList, { CategoryListProps } from '@/components/CategoryHeader/CategoryList'

import * as S from './CategoryHeader.style'
import CategoryInfo from './CategoryInfo'

export type CategoryHeaderProps = CategoryListProps

const CategoryHeader = ({ selectedCategory, categoryList }: CategoryHeaderProps) => {
  return (
    <S.Container>
      <CategoryInfo />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
    </S.Container>
  )
}

export default CategoryHeader
