import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import Image from '@/components/Common/Image'
import BLOG_CONFIG from '@/constant/blog.config'
import { copyToClipBoard } from '@/utils'

import * as S from './Bio.style'

const Bio = () => {
  const onClickMailConfig = () => {
    copyToClipBoard(BLOG_CONFIG.social.email)
  }
  return (
    <S.Container>
      <Image src="profile-image.png" isCircle />
      <S.Info>
        <S.Author>{BLOG_CONFIG.author}</S.Author>
        <S.Desc>{BLOG_CONFIG.description}</S.Desc>
        <S.Socials>
          <li>
            <a href="#" onClick={onClickMailConfig}>
              <HiOutlineMail />
              Mail
            </a>
          </li>
          <li>
            <a href={BLOG_CONFIG.social.github} target="_blank">
              <FaGithub />
              Github
            </a>
          </li>
          <li>
            <a href={BLOG_CONFIG.social.til} target="_blank">
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
