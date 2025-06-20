import PostFooter from '@/components/PostDetail/PostFooter'
import Layout from '@/Layout'
import { PostPageItemType } from '@/types/PostItem.types'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import SEO from '../SEO'

interface PostPageInfoProps {
  postPageInfo: PostPageItemType
  pathname: string
}

const PostDetail = ({ postPageInfo, pathname }: PostPageInfoProps) => {
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
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
      fields: { readingTime },
    },
  } = postPageInfo

  return (
    <Layout>
      <SEO
        title={title}
        pathname={pathname}
        description={summary}
        image={publicURL}
        keywords={categories}
        readingTime={readingTime.text}
      />
      <PostHeader
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
        readingTime={readingTime.text}
      />
      <PostBody tableOfContents={tableOfContents} html={html} />
      <PostFooter />
    </Layout>
  )
}

export default PostDetail
