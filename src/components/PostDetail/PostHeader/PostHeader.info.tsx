import * as S from '../PostDetail.style'

export interface PostHeadInfoProps {
  title: string
  date: string
  categories: string[]
  readingTime: string
}

const PostHeaderInfo = ({ title, date, categories, readingTime }: PostHeadInfoProps) => {
  return (
    <S.PostHeadInfoWrapper>
      <S.Title>{title}</S.Title>
      <S.PostData>
        <div>{categories.map(v => v.toUpperCase()).join(' / ')}</div>
        <S.PostInfo>
          <span>{date}</span>·<span>{readingTime}</span>
        </S.PostInfo>
      </S.PostData>
    </S.PostHeadInfoWrapper>
  )
}

export default PostHeaderInfo
