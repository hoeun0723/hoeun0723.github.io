import * as S from '../PostDetail.style'
import PostContent, { PostContentProps } from './PostContent'
import TableOfContent, { TableOfContentProps } from './TableOfContent'
interface PostBodyProps extends PostContentProps, TableOfContentProps {}

// 문자열 형태의 HTML 코드를 출력하는 것도 dangerouslySetInnerHTML 속성을 통해 간단하게 구현이 가능
const PostBody = ({ tableOfContents, html }: PostBodyProps) => {
  return (
    <S.Body>
      <TableOfContent tableOfContents={tableOfContents} />
      <PostContent html={html} />
    </S.Body>
  )
}

export default PostBody
