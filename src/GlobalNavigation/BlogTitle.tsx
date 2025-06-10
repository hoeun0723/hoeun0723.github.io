import BLOG_CONFIG from '@/constant/blog.config'

import * as S from './GlobalNavigation.style'

const BlogTitle = () => {
  return (
    <S.BlogTitle>
      <a href="/">{BLOG_CONFIG.title}</a>
    </S.BlogTitle>
  )
}

export default BlogTitle
