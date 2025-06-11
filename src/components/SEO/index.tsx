import { Helmet } from 'react-helmet'

import { ConfigType } from '@/types/gatsby.type'

interface SEOProps extends Omit<ConfigType, 'social' | 'utterances'> {
  lang?: string
}

const SEO = ({ lang = 'ko', author, title, description, siteUrl, image, keywords, favicon, seo }: SEOProps) => {
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="icon" href={favicon} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="google-site-verification" content={seo.google} />
      <meta name="naver-site-verification" content={seo.naver} />
      {/* property: og */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale:alternate" content="es_ES" />
    </Helmet>
  )
}

export default SEO
