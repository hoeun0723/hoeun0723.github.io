import Bio from '@/components/Bio'
import Comment from '@/components/Comment'

import * as S from './PostFooter.style'

const PostFooter = () => {
  return (
    <S.Container>
      <Bio />
      <Comment />
    </S.Container>
  )
}

export default PostFooter
