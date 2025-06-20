import { Helmet } from 'react-helmet'

import useBlogConfig from '@/hooks/useBlogConfig'
import useStaticImage from '@/hooks/useStaticImage'
import { SEOConfigType } from '@/types/gatsby.type'

const SEO = ({
  //변동
  title,
  pathname,
  description,
  image,
  keywords,
  readingTime,
}: SEOConfigType) => {
  const {
    lang,
    author,
    siteName,
    favicon,
    seo,
    siteUrl,
    mainOgImage,
    description: mainDesc,
    keywords: mainKeywords,
  } = useBlogConfig()
  const target = useStaticImage({ src: mainOgImage })
  const mainOgImagePath = target?.node.publicURL || ''
  // params가 없으면 기본 config type을 사용하기
  const pageUrl = `${siteUrl}${pathname || ``}`
  keywords = keywords || mainKeywords
  description = description || mainDesc
  image = image ? `${siteUrl}${image}` : `${siteUrl}/${mainOgImagePath}`
  title = title || siteName
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="google-site-verification" content={seo.google} />
      <meta name="naver-site-verification" content={seo.naver} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* property: og */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale:alternate" content="es_ES" />
      {/* twitter cards tags additive with th og: tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content={readingTime} />
    </Helmet>
  )
}

export default SEO
