import styled from '@emotion/styled'
import {Link} from 'gatsby'

// PostList에 대한 스타일
export const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
  }
`

// PostItem에 대한 스타일
export const PostItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    transition: 0.3s box-shadow;
    cursor: pointer;

    background-color: var(--color-background-secondary);

    &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
`


export const PostItemContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const Title = styled.h2`
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    ${({theme: {typography}})=> typography.linkLarge}
`

export const Date = styled.span`
    ${({theme: {typography}})=> typography.textSmall}
    color: ${({theme: {COLORS}})=> COLORS.GREYSCALE[600]};
    line-height: 16px;
`

export const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin: 10px -5px;
`

export const CategoryItem = styled.div`
    margin: 2.5px 5px;
    padding: 6px 12px;
    border-radius: 8px;
    ${({theme:{typography}})=>typography.textSmall}
    line-height: 18px;
    background-color: var(--color-category-chip);
    color: var(--color-text);
`

export const Summary = styled.p`
    // 두줄 이상 ... 처리
    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인 수
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

    color: var(--color-paragraph);
    ${({theme:{typography}})=> typography.textSmall};
`
