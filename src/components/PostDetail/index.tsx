import Comment from '@/components/Comment'
import Layout from '@/Layout'
import { PostPageItemType } from '@/types/PostItem.types'

import PostContent from '@/components/PostDetail/PostContent'
import PostHeader from '@/components/PostDetail/PostHeader'
import TableOfContent from '@/components/PostDetail/TableOfContent'

interface PostPageInfoProps {
    postPageInfo: PostPageItemType
}

const PostDetail = ({postPageInfo}:PostPageInfoProps)=> {
    const {
        node: {
            tableOfContents,
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
    } = postPageInfo

    return (
        <Layout>
            <PostHeader title={title} date={date} categories={categories} thumbnail={gatsbyImageData}/>
            <TableOfContent tableOfContents={tableOfContents}/>
            <PostContent html={html}/>
            <Comment/>
        </Layout>
    )
}

export default PostDetail