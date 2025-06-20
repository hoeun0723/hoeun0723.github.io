import { IGatsbyImageData } from 'gatsby-plugin-image'

import * as S from '../PostDetail.style'
import PostHeaderInfo, { PostHeadInfoProps } from './PostHeader.info'

interface PostHeaderProps extends PostHeadInfoProps {
  thumbnail: IGatsbyImageData
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
