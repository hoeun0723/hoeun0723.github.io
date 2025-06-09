import styled from '@emotion/styled'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './PostHeader.style'

export interface PostHeadInfoProps {
    title: string
    date: string
    categories: string[]
}

const PostHeaderInfo = ({title, date, categories}: PostHeadInfoProps) => {
    const goBackPage = () => window.history.back()

    return(
        <S.PostHeadInfoWrapper>
            <S.PrevPageIcon onClick={goBackPage}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </S.PrevPageIcon>
            <S.Title>{title}</S.Title>
            <S.PostData>
                <div>{categories.map(v=>v.toUpperCase()).join(' / ')}</div>
                <div>{date}</div>
            </S.PostData>
        </S.PostHeadInfoWrapper>
    )
}

export default PostHeaderInfo