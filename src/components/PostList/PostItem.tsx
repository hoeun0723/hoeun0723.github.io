import { PostFrontmatterType } from '@/types/PostItem.types'

import * as S from './PostList.style'

export interface PostItemProps extends PostFrontmatterType {
  link: string
  readingTime: string
}

const PostItem = ({ title, date, categories, summary, link, readingTime }: PostItemProps) => {
  return (
    <S.PostItemWrapper to={link}>
      <S.PostItemContent>
        <S.Title>{title}</S.Title>
        <S.Info>
          <span>{date}</span>·<span>{readingTime}</span>
        </S.Info>
        <S.Category>
          {categories.map(category => (
            <S.CategoryItem key={category}>{category}</S.CategoryItem>
          ))}
        </S.Category>
        <S.Summary>{summary}</S.Summary>
      </S.PostItemContent>
    </S.PostItemWrapper>
  )
}

export default PostItem
