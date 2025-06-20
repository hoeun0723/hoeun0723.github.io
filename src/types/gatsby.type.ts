import { IGatsbyImageData } from 'gatsby-plugin-image'

export type GatsbyImageDataType = IGatsbyImageData

export interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export interface SEOConfigType {
  title?: string
  pathname?: string
  description?: string
  image?: string
  keywords?: string[]
  readingTime?: string
}

/**
 * blog-config.js의 정보 타입
 */
export interface ConfigType {
  lang: 'ko' | 'en'
  author: string
  siteName: string
  description: string
  siteUrl: string
  profileImage: string
  mainOgImage: string
  keywords: string[]
  favicon: string
  social: {
    email: string
    github: string
    til: string
  }
  seo: {
    google: string
    naver: string
  }
  utterances: {
    src: string
    repo: string
    theme: string
    label: string
    crossorigin: string
    issueTerm: string
    async: string
  }
  giscus: {
    src: string
    data_repo: string
    data_repo_id: string
    data_category: string
    data_category_id: string
    data_mapping: string
    data_strict: string
    data_reactions_enabled: string
    data_emit_metadata: string
    data_input_position: string
    data_theme: string
    data_lang: string
    crossorigin: string
  }
}
