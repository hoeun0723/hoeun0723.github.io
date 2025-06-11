import useBlogConfig from '@/hooks/useBlogConfig'

import * as S from './MainIndo.style'

const MainInfo = () => {
  const { description } = useBlogConfig()
  return (
    <S.MainInfo>
      <S.Info>{description}</S.Info>
    </S.MainInfo>
  )
}

export default MainInfo
