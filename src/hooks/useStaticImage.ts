import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useMemo } from 'react'

interface ImageNode {
  node: {
    relativePath: string
    extension: string
    publicURL: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface AssetsImageType {
  images: {
    edges: ImageNode[]
  }
}

export interface useStaticImageProps {
  src: string
}

const useStaticImage = ({ src }: useStaticImageProps) => {
  const assetImages = useStaticQuery<AssetsImageType>(imageQuery)

  const target = useMemo(
    () => assetImages.images.edges.find(({ node }) => src === node.relativePath),
    [assetImages, src],
  )

  return target
}

export default useStaticImage

const imageQuery = graphql`
  query {
    images: allFile(filter: { sourceInstanceName: { eq: "static" } }) {
      edges {
        node {
          relativePath
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
