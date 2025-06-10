import { css } from '@emotion/react'

import AppleSDGothicNeo_Bold from './AppleSDGothicNeoB.ttf'
import AppleSDGothicNeo_Medium from './AppleSDGothicNeoM.ttf'
import AppleSDGothicNeo_Regular from './AppleSDGothicNeoR.ttf'

export default css`
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'), url(${AppleSDGothicNeo_Bold}) format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'), url(${AppleSDGothicNeo_Medium}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'), url(${AppleSDGothicNeo_Regular}) format('truetype');
    font-weight: 400;
  }
`
