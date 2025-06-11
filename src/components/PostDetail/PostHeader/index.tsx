import { GatsbyImageDataType } from '@/types/gatsby.type'

import * as S from '../PostDetail.style'
import PostHeaderInfo, { PostHeadInfoProps } from './PostHeader.info'

interface PostHeaderProps extends PostHeadInfoProps {
  thumbnail: GatsbyImageDataType
}

const PostHeader = ({ title, date, categories, thumbnail, readingTime }: PostHeaderProps) => {
  return (
    <S.Header>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeaderInfo title={title} date={date} categories={categories} readingTime={readingTime} />
    </S.Header>
  )
}

export default PostHeader
