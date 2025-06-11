import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useMemo } from 'react'

import { GatsbyImageDataType } from '@/types/gatsby.type'

const ImageSizeMap = {
  s: 'var(--icon-medium)',
  m: 'var(--icon-large)',
  l: 'var(--icon-xLarge)',
}

type ImageSize = keyof typeof ImageSizeMap

interface ImageProps {
  src: string
  size?: ImageSize
  isCircle?: boolean
}

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

interface GatsbyImgProps extends Omit<ImageProps, 'src'> {
  image: GatsbyImageDataType
  alt: string
  className?: string
}

const Image = ({ src, size = 'm', isCircle = false, ...rest }: ImageProps) => {
  const assetImages = useStaticQuery<AssetsImageType>(imageQuery)

  const target = useMemo(
    () => assetImages.images.edges.find(({ node }) => src === node.relativePath),
    [assetImages, src],
  )

  if (!target) return null

  const {
    node: { childImageSharp, publicURL },
  } = target

  return <SImage size={size} isCircle={isCircle} image={childImageSharp.gatsbyImageData} alt={publicURL} {...rest} />
}

const SImage = styled((props: GatsbyImgProps) => <GatsbyImage {...props} />)`
  width: ${({ size }) => size && ImageSizeMap[size]};
  height: ${({ size }) => size && ImageSizeMap[size]};
  border-radius: ${({ isCircle }) => isCircle && '50%'};
  &.gatsby-image-wrapper {
    z-index: 0; // IOS에서 border-radius 적용안되는 버그 해결
    min-width: ${({ size }) => size && ImageSizeMap[size]};
  }
`

export default Image

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
