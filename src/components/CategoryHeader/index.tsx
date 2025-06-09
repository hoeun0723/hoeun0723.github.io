import CategoryList, { CategoryListProps } from "@/components/CategoryHeader/CategoryList"
import CategoryInfo from "./CategoryInfo"
import * as S from './CategoryHeader.style'

export type CategoryHeaderProps = CategoryListProps

const CategoryHeader = ({selectedCategory, categoryList}: CategoryHeaderProps) => {
    return (
        <S.Container>
            <CategoryInfo/>
            <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
        </S.Container>
    )
}

export default CategoryHeader