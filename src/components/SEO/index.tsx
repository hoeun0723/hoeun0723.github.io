import { Helmet } from 'react-helmet'

interface SEOProps {
  lang?: string
  author: string
  title: string
  description: string
  url: string
  image: string
  keywords: string[]
  favicon: string
}

const SEO = ({ lang = 'ko', author, title, description, url, image, keywords, favicon }: SEOProps) => {
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="icon" href={favicon} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      {/* property: og */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}

export default SEO
