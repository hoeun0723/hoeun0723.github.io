import { IGatsbyImageData } from 'gatsby-plugin-image'

export type GatsbyImageDataType = IGatsbyImageData

export interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export interface SEOConfigType {
  lang?: string
  author: string
  siteName: string
  siteUrl: string
  title?: string
  description: string
  image: string
  keywords: string[]
  favicon: string
  seo: {
    google: string
    naver: string
  }
  readingTime?: string
}

export interface ConfigType extends SEOConfigType {
  social: {
    email: string
    github: string
    til: string
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
