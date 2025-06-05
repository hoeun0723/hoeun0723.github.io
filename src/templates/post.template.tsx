import { graphql } from "gatsby";
import React from "react";

import PostDetail from "@/components/PostDetail";
import { PostPageItemType } from "@/types/PostItem.types";

interface PostTemplateProps {
    data: {
        allMarkdownRemark: {
            edges: PostPageItemType[]
        }
    }
}

const PostTemplate = ({
    data: {
        allMarkdownRemark: {edges},
    },
}:PostTemplateProps)=>{
    return <PostDetail postPageInfo={edges[0]}/>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
    query queryMarkdownDataBySlug($slug: String) {
        allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
            edges {
                node {
                    tableOfContents
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