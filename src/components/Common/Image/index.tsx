import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useMemo } from 'react'

import { GatsbyImageDataType } from '@/types/gatsby.type'

const ImageSizeMap = {
  s: '32px',
  m: '64px',
  l: '128px',
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const assetsImages = useStaticQuery<AssetsImageType>(imageQuery)

  const target = useMemo(
    () => assetsImages.images.edges.find(({ node }) => src === node.relativePath),
    [assetsImages, src],
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
`

export default Image

const imageQuery = graphql`
    query {
        images: allFile(filter: {sourceInstanceName: {eq: "assets}}) {
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
