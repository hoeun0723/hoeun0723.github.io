// 네이밍 참고 desktop, mobile이 아닌 large, small로 작성한 이유 : https://github.com/airbnb/javascript/tree/master/css-in-javascript#naming
type DeviceType = 'xLarge' | 'large' | 'medium' | 'small'

const breakpoints: Record<DeviceType, number> = {
  xLarge: 1360,
  large: 1200,
  medium: 768,
  small: 600,
}

/**
 * 사용방법 예시
 *  export const Header = styled.div`
 *    height: 400px;
 *    @media ${({ theme }) => theme.media.medium} {
 *    height: 300px;
 *    }
 *  `
 */

const media = {
  xLarge: `screen and (max-width: ${breakpoints.xLarge}px)`,
  large: `screen and (max-width: ${breakpoints.large}px)`,
  medium: `screen and (max-width: ${breakpoints.medium}px)`,
  small: `screen and (max-width: ${breakpoints.small}px)`,
}

export default media
