import * as S from './CategoryList.style';

export interface CategoryListProps {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}


const CategoryList = ({selectedCategory, categoryList}:CategoryListProps)=>{
    const {All: AllCategoryTag, ...restCategoryList} = categoryList
    return(
        <S.Container>
            <S.AllCategoryTag to="/?catgory=All" active>
                전체 {AllCategoryTag}개의 포스팅
            </S.AllCategoryTag>
            {Object.entries(categoryList).map(([name,count])=>(
                <S.CategoryItem key={name} to={`/#category=${name}`} active={name === selectedCategory}>
                    #{name}({count})
                </S.CategoryItem>
            ))}
        </S.Container>
    )
}

export default CategoryList