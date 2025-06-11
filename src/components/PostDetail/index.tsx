import PostFooter from '@/components/PostDetail/PostFooter'
import Layout from '@/Layout'
import { PostPageItemType } from '@/types/PostItem.types'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import SEO from '../SEO'

interface PostPageInfoProps {
  postPageInfo: PostPageItemType
  href: string
  author: string
  favicon: string
  seo: {
    google: string
    naver: string
  }
}

const PostDetail = ({ postPageInfo, href, author, favicon, seo }: PostPageInfoProps) => {
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
        author={author}
        siteUrl={href}
        title={title}
        description={summary}
        image={publicURL}
        keywords={categories}
        favicon={favicon}
        seo={seo}
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
