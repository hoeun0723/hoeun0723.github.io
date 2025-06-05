import styled from '@emotion/styled'
import { GatsbyImageDataType } from '@/types/gatsby.type'

import PostHeaderInfo, {PostHeadInfoProps} from './PostHeader.info'
import * as S from './PostHeader.style'
interface PostHeaderProps extends PostHeadInfoProps {
    thumbnail: GatsbyImageDataType
}

const PostHeader = ({title,date,categories, thumbnail}:PostHeaderProps) => {
    return(
        <S.PostHeadWrapper>
            <S.BackgroundImage image={thumbnail} alt="thumbnail"/>
            <PostHeaderInfo title={title} date={date} categories={categories}/>
        </S.PostHeadWrapper>
    )
}

export default PostHeader