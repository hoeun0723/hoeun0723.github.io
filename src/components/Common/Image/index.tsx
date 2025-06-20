import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import useStaticImage from '@/hooks/useStaticImage'

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

interface GatsbyImgProps extends Omit<ImageProps, 'src'> {
  image: IGatsbyImageData
  alt: string
  className?: string
}

const Image = ({ src, size = 'm', isCircle = false, ...rest }: ImageProps) => {
  const target = useStaticImage({ src })
  if (!target) return null

  const {
    node: { childImageSharp, publicURL },
  } = target

  return <SImage size={size} isCircle={isCircle} image={childImageSharp.gatsbyImageData} alt={publicURL} {...rest} />
}

const SImage = styled(({ isCircle, ...rest }: GatsbyImgProps) => <GatsbyImage {...rest} />)`
  width: ${({ size }) => size && ImageSizeMap[size]};
  height: ${({ size }) => size && ImageSizeMap[size]};
  border-radius: ${({ isCircle }) => isCircle && '50%'};
  &.gatsby-image-wrapper {
    z-index: 0; // IOS에서 border-radius 적용안되는 버그 해결
    min-width: ${({ size }) => size && ImageSizeMap[size]};
  }
`

export default Image
