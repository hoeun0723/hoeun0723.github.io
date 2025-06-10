import * as S from './PostHeader.style'

export interface PostHeadInfoProps {
  title: string
  date: string
  categories: string[]
}

const PostHeaderInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  return (
    <S.PostHeadInfoWrapper>
      <S.Title>{title}</S.Title>
      <S.PostData>
        <div>{categories.map(v => v.toUpperCase()).join(' / ')}</div>
        <div>{date}</div>
      </S.PostData>
    </S.PostHeadInfoWrapper>
  )
}

export default PostHeaderInfo
