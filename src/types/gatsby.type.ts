import { IGatsbyImageData } from 'gatsby-plugin-image'

export type GatsbyImageDataType = IGatsbyImageData

export interface GatsbyImgProps {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

export interface SiteMetaData {
  author: string
  title: string
  siteUrl: string
  description: string
  image: string
  keywords: string[]
  favicon: string
}
