import Bio from '@/components/Bio'
import Comment from '@/components/Comment'

import * as S from '../PostDetail.style'

const PostFooter = () => {
  return (
    <S.Footer>
      <Bio />
      <Comment />
    </S.Footer>
  )
}

export default PostFooter
