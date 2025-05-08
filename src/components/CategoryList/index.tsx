import * as S from './CategoryList.style';

export interface CategoryListProps {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}


const CategoryList = ({selectedCategory, categoryList}:CategoryListProps)=>{
    return(
        <S.CategoryListWrapper>
            {Object.entries(categoryList).map(([name,count])=>(
                <S.CategoryItem key={name} to={`/#category=${name}`} active={name === selectedCategory}>
                    #{name}({count})
                </S.CategoryItem>
            ))}
        </S.CategoryListWrapper>
    )
}

export default CategoryList