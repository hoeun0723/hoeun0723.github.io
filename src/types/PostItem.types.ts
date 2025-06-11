import { GatsbyImageDataType } from './gatsby.type'

export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: GatsbyImageDataType
    }
    publicURL: string
  }
}

export interface PostListItemType {
  node: {
    tableOfContent: string
    id: string
    fields: {
      slug: string
      readingTime: {
        text: string
      }
    }
    frontmatter: PostFrontmatterType
  }
}

export interface PostType {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

export interface PostPageItemType {
  node: {
    tableOfContents: string
    html: string
    frontmatter: PostFrontmatterType
    fields: {
      slug: string
      readingTime: {
        text: string
      }
    }
  }
}
