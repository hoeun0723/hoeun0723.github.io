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

export const Title = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 20px;
    font-weight: 700;
`

export const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
`

export const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin: 10px -5px;
`

export const CategoryItem = styled.div`
    margin: 2.5px 5px;
    padding: 3px 5px;
    border-radius: 3px;
    background: black;
    font-size: 14px;
    font-weight: 700;
    color: white;
`

export const Summary = styled.div`
    display: -webkit-box;
    overflow: hidden;
    margin-top: auto;
    text-overflow: ellipsis;
    white-space: normal;
    overflow-wrap: break-word;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    opacity: 0.8;
`
