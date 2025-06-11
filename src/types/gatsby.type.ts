import { IGatsbyImageData } from 'gatsby-plugin-image'

export type GatsbyImageDataType = IGatsbyImageData

export interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export interface ConfigType {
  author: string
  title: string
  siteUrl: string
  description: string
  image: string
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
    async: string
  }
}
