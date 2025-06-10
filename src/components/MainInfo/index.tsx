import BLOG_CONFIG from '@/constant/blog.config'

import * as S from './MainIndo.style'

const MainInfo = () => {
  return (
    <S.MainInfo>
      <S.Info>{BLOG_CONFIG.introduction}</S.Info>
    </S.MainInfo>
  )
}

export default MainInfo
