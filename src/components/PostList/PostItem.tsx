import {PostFrontmatterType} from '@/types/PostItem.types'

import * as S from './PostList.style'

export interface PostItemProps extends PostFrontmatterType {link: string}

const PostItem= ({
    title,
    date,
    categories,
    summary,
    link,
}:PostItemProps) =>{
    return(
        <S.PostItemWrapper to={link}>
            <S.PostItemContent>
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
                <S.Category>
                    {categories.map(category =>(
                        <S.CategoryItem key={category}>{category}</S.CategoryItem>
                    ))}
                </S.Category>
                <S.Summary>{summary}</S.Summary>
            </S.PostItemContent>
        </S.PostItemWrapper>
    )
}

export default PostItem

