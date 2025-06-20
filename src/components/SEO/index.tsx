import { Helmet } from 'react-helmet'

import { SEOConfigType } from '@/types/gatsby.type'

const SEO = ({
  lang = 'ko',
  author,
  siteName,
  siteUrl,
  title = siteName,
  description,
  image,
  keywords,
  favicon,
  seo,
  readingTime,
}: SEOConfigType) => {
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
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale:alternate" content="es_ES" />
      {/* twitter cards tags additive with th og: tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={siteUrl} />
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
