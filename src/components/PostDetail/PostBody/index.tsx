import * as S from './PostBody.style'
import PostContent from './PostContent'
import TableOfContent from './TableOfContent'

interface PostBodyProps {
    tableOfContents: string
    html: string
}

// 문자열 형태의 HTML 코드를 출력하는 것도 dangerouslySetInnerHTML 속성을 통해 간단하게 구현이 가능
const PostBody = ({tableOfContents, html}: PostBodyProps)=> {
    return (
        <S.Container>
            <TableOfContent tableOfContents={tableOfContents} />
            <PostContent html={html}/>
        </S.Container>
    )
}

export default PostBody