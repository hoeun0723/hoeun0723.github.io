import React from 'react'
import {graphql} from 'gatsby'

import PostContent from '@/components/PostDetail/PostContent'
import PostHeader from '@/components/PostDetail/PostHeader'
import Layout from '@/Layout'
import { PostFrontmatterType } from '@/types/PostItem.types'

export interface PostPageItemType {
    node: {
        html: string
        frontmatter: PostFrontmatterType
    }
}

interface PostTemplateProps {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성
        }
    }
}

const PostTemplate = ({
    data: {
        allMarkdownRemark: {edges},
    },
}:PostTemplateProps)=> {
    const {
        node: {
            html,
            frontmatter: {
                title,
                summary,
                date,
                categories,
                thumbnail: {
                    childImageSharp: {gatsbyImageData},
                },
            },
        },
    } = edges[0]

    return (
        <Layout>
            <PostHeader title={title} date={date} categories={categories} thumbnail={gatsbyImageData}/>
            <PostContent html={html}/>
        </Layout>
    )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
    query queryMarkdownDataBySlug($slug: String) {
        allMarkdownRemark(filter: {field: {slug: {eq: $slug}}}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        summary
                        date(formatString: "YYYY.MM.DD.")
                        categories
                        thumbnail {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`