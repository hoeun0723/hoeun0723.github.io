import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import Image from '@/components/Common/Image'
import useBlogConfig from '@/hooks/useBlogConfig'
import { copyToClipBoard } from '@/utils'

import * as S from './Bio.style'

const Bio = () => {
  const { social, author, description } = useBlogConfig()
  const onClickMailConfig = () => {
    copyToClipBoard(social.email)
  }
  return (
    <S.Container>
      <Image src="profile-image.png" isCircle />
      <S.Info>
        <S.Author>{author}</S.Author>
        <S.Desc>{description}</S.Desc>
        <S.Socials>
          <li>
            <a href="#" onClick={onClickMailConfig}>
              <HiOutlineMail />
              Mail
            </a>
          </li>
          <li>
            <a href={social.github} target="_blank">
              <FaGithub />
              Github
            </a>
          </li>
          <li>
            <a href={social.til} target="_blank">
              <FaGithub />
              TIL
            </a>
          </li>
        </S.Socials>
      </S.Info>
    </S.Container>
  )
}

export default Bio
