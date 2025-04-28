import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {ReactNode} from 'react'

export interface CategoryListProps {
    selectedCategory: string
    categoryList: {
        // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
        [key: string]: number
    }
}

interface CategoryItemProps {
    active: boolean
}

interface GatsbyLinkProps extends CategoryItemProps {
    children: ReactNode
    className?: string
    to: string
}

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;
`

const CategoryItem = styled(({active, ...props}: GatsbyLinkProps)=>
<Link {...props}/>)`
margin-right: 20px;
padding: 5px 0;
font-size: 18px;
font-weight: ${({active})=> (active? '800' : '400')};
cursor: pointer;

&:last-of-type {
margin-right:0;
}
`

const CategoryList = ({selectedCategory, categoryList}:CategoryListProps)=>{
    return(
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name,count])=>(
                <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} key={name}>
                    #{name}({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList