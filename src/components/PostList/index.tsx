import { useMemo } from 'react'

import PostItem from '@/components/PostList/PostItem'
import { PostListItemType } from '@/types/PostItem.types'

import * as S from './PostList.style'

export interface PostListProps {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList = ({ selectedCategory, posts }: PostListProps) => {
  // 만약 선택된 카테고리가 존재하면서 All 이 아닌 경우에는 해당 카테고리 값을 가진 포스트 아이템만 필터링 하도록 했고, 그렇지 않은 경우에는 모든 포스트 아이템을 보여주도록 구현
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) => (selectedCategory !== 'All' ? categories.includes(selectedCategory) : true),
      ),
    [selectedCategory],
  )

  return (
    <S.Container>
      {postListData.map(
        ({
          node: {
            id,
            fields: { slug, readingTime },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem key={id} link={slug} readingTime={readingTime.text} {...frontmatter} />
        ),
      )}
    </S.Container>
  )
}

export default PostList
