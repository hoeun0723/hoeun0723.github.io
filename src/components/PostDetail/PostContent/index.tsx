import styled from '@emotion/styled'
import * as S from './PostContent.style'

interface PostContentProps {
    html: string
}

// 문자열 형태의 HTML 코드를 출력하는 것도 dangerouslySetInnerHTML 속성을 통해 간단하게 구현이 가능
const PostContent = ({html}: PostContentProps)=> {
    return <S.MarkdownRenderer dangerouslySetInnerHTML={{__html: html}}/>
}

export default PostContent