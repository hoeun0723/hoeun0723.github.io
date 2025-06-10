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
  }
}

export interface PostListItemType {
  node: {
    tableOfContent: string
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type PostFrontmatterTypeOmitThumbnail = Omit<PostFrontmatterType, 'thumbnail'>

export interface PostListItemOmitThumbnail {
  node: {
    tableOfContent: string
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterTypeOmitThumbnail
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
  }
}
