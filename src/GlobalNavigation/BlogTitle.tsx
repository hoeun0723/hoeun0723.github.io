import useBlogConfig from '@/hooks/useBlogConfig'

import * as S from './GlobalNavigation.style'

const BlogTitle = () => {
  const { title } = useBlogConfig()
  return (
    <S.BlogTitle>
      <a href="/">{title}</a>
    </S.BlogTitle>
  )
}

export default BlogTitle
