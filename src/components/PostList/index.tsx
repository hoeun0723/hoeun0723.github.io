import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import {useMemo} from 'react'

import PostItem from '@/components/PostList/PostItem'
import {PostListItemType} from '@/types/PostItem.types'

export interface PostType {
    node: {
        id: string
        frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
            thumbnail: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }
        }
    }
}

interface PostListProps {
    selectedCategory : string
    posts: PostListItemType[]
}

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768px;
    margin: 0 auto;
    padding: 50px 0 100px;
    
    @media (max-width:768px) {
        grid-template-column:1fr;
        width: 100%;
        padding: 50px 20px;
    }
`

const PostList = ({selectedCategory, posts}:PostListProps)=> {
    // 만약 선택된 카테고리가 존재하면서 All 이 아닌 경우에는 해당 카테고리 값을 가진 포스트 아이템만 필터링 하도록 했고, 그렇지 않은 경우에는 모든 포스트 아이템을 보여주도록 구현
    const postListData = useMemo(
        ()=>
            posts.filter(
                ({
                    node: {
                        frontmatter: {categories},
                    },
                }:PostListItemType)=>(selectedCategory!=='All'?categories.includes(selectedCategory):true),
            ),
            [selectedCategory],
    )

    return(
        <PostListWrapper>
            {postListData.map(({node:{id, fields: {slug}, frontmatter,}}:PostListItemType)=>(
                <PostItem {...frontmatter} link={slug} key={id}/>
            ))}
        </PostListWrapper>
    )
}

export default PostList