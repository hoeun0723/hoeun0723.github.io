import PostFooter from '@/components/PostDetail/PostFooter'
import useBlogConfig from '@/hooks/useBlogConfig'
import Layout from '@/Layout'
import { PostPageItemType } from '@/types/PostItem.types'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import SEO from '../SEO'

interface PostPageInfoProps {
  postPageInfo: PostPageItemType
  href: string
}

const PostDetail = ({ postPageInfo, href }: PostPageInfoProps) => {
  const { author, favicon, seo, siteName } = useBlogConfig()
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
        siteName={siteName}
        title={title}
        description={summary}
        image={publicURL}
        keywords={categories}
        favicon={favicon}
        seo={seo}
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
