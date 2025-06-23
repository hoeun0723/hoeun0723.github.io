---
date: '2024-07-30'
title: '[초심자를 위한] 프론트 프로젝트를 처음 시작할 때 : 초기세팅 / 협업시작 준비'
categories: ['초심자를 위한', '초기세팅', '협업']
summary: '프론트 프로젝트를 처음 시작할 때 : 초기세팅 / 협업시작 준비 에 대하여 초심자분들이 이해하기 쉽도록 작성한 내용입니다.'
thumbnail: './thumbnail.png'
---

# 초기세팅 절차들을 순서대로 설명해볼게요!

### 1. 번들러를 활용해 프레임워크 + 언어 로 프로젝트 생성하기

번들러는 뭐고… 프레임워크.. 언어..

이게 다 어려울 수 있는데요 !

**번들러는 여러 개의 자바스크립트 파일과 모듈을 하나의 파일 또는 소수의 파일로 묶어주는 도구에요.**

번들러는 모듈을 묶고, 의존성 관리, 코드 스플리팅, 트리 쉐이킹, 파일 최적화, 번들링 등등.. 다양한 작업을 도와주는 친구입니다.

**vite**라는 번들러에 대해서 설명해볼게요.

기존에는 `create react app` 을 입력해서 프로젝트를 만드는 !!! 즉, **Webpack 번들러**를 활용하여 프로젝트를 만드는 경우가 많았답니다.

그래서 구글에 react로 프로젝트 만들기 !를 치면 Webpack 번들러를 사용한 create react app 을 입력하여 만드는 예시들이 많이 올라와 있답니다.

그렇다면 저는 왜 Vite로 했냐면

1. 빠른 개발 서버 시작
2. 빠른 HMR
3. 간단한 설정
4. 모던 빌드 도구 사용
5. 빠른 프로덕션 빌드
6. 모듈 핫 스와핑
7. 개발 경험 개선

등등의 이유가 있답니다 !! (위 항목들은 각자 찾아보기 !!)

그래서

```bash
yarn create vite
```

를 입력해서

1. 프로젝트명 작성
2. 프레임 워크 고르기 (React or Next.js 등등)
3. 언어 고르기 (js or ts 등등)

을 마치면 프로젝트가 자동으로 생성 됩니다.

- npm 이 아닌 yarn을 사용한 이유
  npm과 yarn은 모두 자바스크립트 패키지 매니저 인데요.
  npm은 node.js에서 함께 제공해주는 기본 패키지 매니저에요. 그래서 가장 많이 사용이 되곤합니다.
  yarn은 facebook이 npm의 몇가지 단점들을 해결하기 위해 개발한 패키지 매니저에요. 더 빠르고, 더 안전하며, 더 일관된 패키지 관리 경험을 제공하는 것을 목표로 하고 있어요.
  위와 같은 특징들 때문에 yarn이 더 업그레이드 된 버전이라고 생각하면 됩니다! 그래서 저는 주로 yarn을 사용해요.

**생성이 된 프로젝트 폴더 구조 (react와 ts)**

```bash
프로젝트명/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

yarn을 설치하고 **`yarn dev`**를 입력하면 개발 서버를 시작할 수 있게 됩니다.

## 2. 폴더 구조 정리

```bash
프로젝트명/
├── node_modules/
├── public/
│   └── ...
├── src/
│   ├── apis/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   ├── hooks/
│   │   ├── quries/
│   ├── layouts/
│   ├── pages/
│   ├── recoil/ /*만약 사용한다면 !! 생성하기*/
│   ├── router/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── App.style.js
│   ├── index.css
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc /*eslint와 prettier는 바로 다음 목차에서 소개합니다.*/
├── commitlint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

저는 주로 프로젝트 폴더 구조를 생성할때 이런식으로 합니다.

기본적으로 `commponents`와 `pages` 폴더를 만들고,

그뒤엔 `api` 코드를 분류해야하고, `hooks` 코드도 분류해야하고 `router`와 `style` 코드도 분류 해야하니! (반복적으로 사용되는 친구들이니까.) 해당 폴더도 생성하고,

그 후에는 어떤 기술들을 사용하냐에 따라서,`assets` 폴더를 만들어 폰트들과 svg들을 관리 해줬고, 상태관리 라이브러리로 recoil을 사용해 `recoil` 폴더를 생성하였으며, 어떠한 값에 대한 명료한 이름을 지어 더 높은 가독성을 가지기 위해 `utils` 폴더를 생성하였습니다.

평소 어떤 코드들을 작성하며 어떻게 분리할 것이고 기본적으로 많이 분류 되어졌던 친구들을 생각하다보니 저 폴더구조를 생성하는것이 익숙해진거 같아요 !!

하지만, hooks 폴더 내부에 queries가 들어가는것도 뭐 api 쪽에 들어가면서 key 값 관리를 다르게 할 수 있는것이고, 초반에 팀원들과 구조를 함께 결정하면서 프로젝트를 진행하다보면 저 구조가 달라질 수 있답니다 !

위 폴더 구조는 React와 javascript로 생성한 프로젝트 폴더 구조에요!

## 3. eslint / prettier

eslint 와 prettier는 우리의 문법을 지켜주는 친구인데요.

일단 이런 친구들에 앞서서 extension 필요한 것들을 조금 깔아두면 좋은데, 맨 밑에 참고 링크 넣어둘게요 !!!! extension 꼭 깔아서 더 좋은 개발 환경 꼭 만들기 !

extension에도 eslint 와 prettier가 있어서 해당 부분에 대한 문법을 체크해서 도와주곤 해요.

문법을 잘 지켜줘야하는 경우가 있는데요. 배포 페이지에서 오류가 나지 않게 하기 위해서 미리 검사를 해줘야한답니다.

https://tyoon9781.tistory.com/entry/vscode-React-Prettier-ESLint-setting

여기 글에 잘 나와 있는거 같아서, 링크 남겨둘게요.

해당 링크를 참고하다보면 위 폴더 구조에서 있었던 파일인 prettier와 eslint 가 있답니다 !! 위 포스트 잘 보면서 설정해주고! 오류 안 나고 저장할때마다 코드 예쁘게 고쳐질 수 있도록 설정해두기 !!

해당 분에 우리가 만약 “함수를 모두 화살표 함수도 만들기로 했다 !!” 등등의 코드 컨벤션에 관련 된 규칙을 넣을 수 있답니다 ! 그렇게 넣어주면 화살표 함수가 아닌 다른 형식의 함수가 만들어졌을때 warning 이 뜨도록 혹은 error 가 나도록 할 수 있어요.

## 4. husky / lint-staged

husky 와 lint-staged는 모두 commit 하기 전에 그리고 commit 도중에 나는 오류를 잡아주는 친구에요.

예를 들면 husky같은 경우는 commit 규칙을 정할때 사용하곤 하는데요!!

(Git hooks를 설정해준다고 합니다!)

- **Git hooks** 란?
  **Git hooks**는 Git에서 특정 이벤트가 발생할 때 자동으로 실행되는 스크립트입니다. 예를 들어, 커밋 전(`pre-commit`), 커밋 후(`post-commit`), 푸시 전(`pre-push`) 등 다양한 시점에 커스텀 스크립트를 실행할 수 있습니다. 이를 통해 코드 스타일 검사, 테스트 실행, 커밋 메시지 형식 검증 등 다양한 자동화를 구현할 수 있습니다. `Husky`와 같은 도구를 사용하면 Git hooks를 쉽게 설정하고 관리할 수 있습니다.

commit 규칙이 왜 중요하냐면.. 저희가 만약에 코딩을 하다가 중간에 작성한 내용이 잘못 됐어요. 그러면 커밋기록을 막 찾아서 그 잘못 작성한 부분을 없애거나 순서를 옮겨야 하잖아요 !! 그래서 commit 을 작은 단위로 자주 해주라고 하고!!

근데 만약에, commit 기록이 막 알아들을 수 없게 자신만의 단어로 해두면 사람들이 해당 부분을 확인하기 어렵겠죠??

우리도 공부할때 자료들이 잘 정리 되어 있어야지 공부하기 쉽잖아요.

그런 것 처럼 commit 도 규칙을 잘 정해서 commit 을 해줘야한 답니다. 그래야지 적절하게 커밋이 저희 레포에 차곡차곡 쌓여요.

저희는 commit 규칙으로

`feat`

`style`

`refactor`

`fix`

`chore`

`docs`

정도를 활용하여

**feat: 버튼 컴포넌트 구현**

이런 식으로 커밋 규칙을 정했죠?

이런 규칙을 도와주는 친구가 husky입니다.

참고 자료를 밑에 남겨둘게요.

- husky commit 규칙 설정하는법
  https://somedaycode.tistory.com/13

## 5. GlobalStyle 적용 / mixin 설정 / theme 설정

- globalstyle 예시
  ```jsx
  import { createGlobalStyle } from 'styled-components'
  import reset from 'styled-reset'

  export const GlobalStyle = createGlobalStyle`
  
  ${reset}
  
   a{
    text-decoration: none;
   }
  
   * {
    box-sizing: border-box;
   }
  
   button {
    cursor: pointer;
    border: none;
   }
   
   textarea {
      outline: none;
   }
  
   :root {
    --vh: 100%;
   }
  
   html, body{
    overflow-x :  hidden;
    color: black;
   }
   
  
   
  #root, body, html {
      scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
      margin: 0 auto;
      padding:0;
      font-size: 62.5%;
      -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
      scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
  
      /* 버튼 클릭 시 색 제거 */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    overflow-x :  hidden;
    color: black;
  }
  #root::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
  }
  
  .custom-toast-margin{
      margin-bottom: 6.4rem;
  }
  `

  export default GlobalStyle
  ```
- mixin 예시
  ```jsx
  import { css } from 'styled-components'

  const mixin = {
    // flex
    flexBox: ({ direction = 'row', align, justify }) => css`
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
    `,
    inlineFlexBox: ({ direction = 'row', align, justify }) => css`
      display: inline-flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
    `,
    flexCenter: ({ direction = 'column' }) => css`
      display: flex;
      flex-direction: ${direction};
      align-items: center;
      justify-content: center;
    `,
  }

  export default mixin
  ```
- theme 예시
  ```jsx
  import { css } from 'styled-components/macro'
  import mixin from './mixin'
  import animation from './animation'

  export const FONT = {
    FAMILY: {
      KOREAN: "'AppleSDGothicNeo', 'Noto Sans KR', sans-serif",
      ENGLISH: "'Open Sans', sans-serif",
    },
    STYLE: {
      BASE: 'normal',
      ITALIC: 'italic',
    },
    WEIGHT: {
      REGULAR: '400',
      BOLD: '700',
    },
    SIZE: {
      // html {font-size: 10px}
      BASE: '1.6rem',
      MEDIUM: '2.4rem',
      MEDIUM_LARGE: '3rem',
      LARGE: '3.6rem',
      X_LARGE: '4.8rem',
      TX_LARGE: '6.4rem',
    },
    HEIGHT: {
      // html {line-height: 10px}
      BASE: '1.6rem',
      MEDIUM: '2.4rem',
      LARGE: '3.2rem',
      LARGE_X_LARGE: '3.5rem',
      X_LARGE: '4rem',
      X_LARGE_TX_LARGE: '4.8rem',
      TX_LARGE: '6.5rem',
      TTX_LARGE: '7.5rem',
    },
  }

  const COLORS = {
    BLUE: {
      900: '#036EFF',
      700: '#81B7FF',
      100: '#e6f1ff',
    },
    YELLOW: {
      900: '#FFBC39',
      700: '#FFD175',
      200: '#FFDE9C',
    },
    RED: {
      600: '#ED3049',
      400: '#F54F62',
      200: '#F09AA4',
    },
    GRAY: {
      fff: '#ffffff',
      200: '#979797',
      300: '#F0F0F0',
      400: '#DEDEDE',
      500: '#c2c2c2',
      600: '#979797',
      700: '#818181',
      800: '#606060',
      900: '#3C3C3C',
      1000: '#000000',
    },
  }

  const fonts = {
    korean: {
      title: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.X_LARGE};
        line-height: ${FONT.HEIGHT.LARGE};
      `,
      subTitle: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.REGULAR};
        font-size: ${FONT.SIZE.MEDIUM};
        line-height: ${FONT.HEIGHT.LARGE};
      `,
      emphasis: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.BASE};
        line-height: ${FONT.HEIGHT.MEDIUM};
      `,
      default: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.REGULAR};
        font-size: ${FONT.SIZE.BASE};
        line-height: ${FONT.HEIGHT.MEDIUM};
      `,
    },
    english: {
      main: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.TX_LARGE};
        line-height: ${FONT.HEIGHT.TTX_LARGE};
      `,
      title: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.MEDIUM};
        line-height: ${FONT.HEIGHT.LARGE};
      `,
      emphasis: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.BASE};
        line-height: ${FONT.HEIGHT.LARGE};
      `,
      default: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.BASE};
        line-height: ${FONT.HEIGHT.MEDIUM};
      `,
      default_no_bold: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.REGULAR};
        font-size: ${FONT.SIZE.BASE};
        line-height: ${FONT.HEIGHT.MEDIUM};
      `,
    },
    main: {
      title: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.TX_LARGE};
        line-height: ${FONT.HEIGHT.TTX_LARGE};
      `,
      subTitle: css`
        font-family: ${FONT.FAMILY.KOREAN};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.X_LARGE};
        line-height: ${FONT.HEIGHT.TX_LARGE};
      `,
      emphasis: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.MEDIUM_LARGE};
        line-height: ${FONT.HEIGHT.X_LARGE};
      `,
      default: css`
        font-family: ${FONT.FAMILY.ENGLISH};
        font-style: ${FONT.STYLE.BASE};
        font-weight: ${FONT.WEIGHT.BOLD};
        font-size: ${FONT.SIZE.MEDIUM};
        line-height: ${FONT.HEIGHT.LARGE_X_LARGE};
      `,
    },
  }

  const colors = {
    primary: {
      normal: COLORS.BLUE[900],
      light: COLORS.BLUE[700],
      shadow: COLORS.BLUE[100],
    },
    secondary: {
      normal: COLORS.YELLOW[900],
      light: COLORS.YELLOW[700],
      shadow: COLORS.YELLOW[200],
    },
    important: {
      normal: COLORS.RED[400],
      light: COLORS.RED[200],
      dark: COLORS.RED[600],
    },
    greyScale: {
      white: COLORS.GRAY.fff,
      normal: COLORS.GRAY[1000],
      assistant: COLORS.GRAY[800],
      subTitle: COLORS.GRAY[700],
      guide: COLORS.GRAY[600],
      pressed: COLORS.GRAY[600],
      placeHolder: COLORS.GRAY[500],
      border: COLORS.GRAY[500],
      nonActive: COLORS.GRAY[400],
      background: COLORS.GRAY[300],
      hover: COLORS.GRAY[200],
    },
  }

  export const zIndex = {
    gnbLevel: 100,
    dropModalLevel: 200,
    modalLayout: 900,
    modalLevel: 950,
    modalContent: 999,
  }

  const deviceSizes = {
    mobile: '375px',
    tablet: '768px',
    pc: '1024px',
  }

  export const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    pc: `screen and (max-width: ${deviceSizes.pc})`,
  }

  const theme = { fonts, colors, COLORS, device, zIndex, mixin, animation }

  export default theme
  ```

**GlobalStyle을 적용하는 이유**

브라우저는 각자 기본적인 스타일을 제공하지만, 이 스타일은 브라우저마다 조금씩 다를 수 있어요. 사파리~ 크롬~ 파이어폭스~ 다양한 브라우저의 렌딩엔진도 다르고 나타내는 css 규격이 다 다르기 때문이에요. 그래서 삼성폰에서는 이쁘게 보였던 폰트들이 아이폰에서는 안 보이기도 했던 거 랍니다.

이러한 차이는 웹사이트의 일관된 디자인을 방해할 수 있어요. **GlobalStyle** 또는 **reset CSS**는 브라우저의 기본 스타일을 제거하거나 표준화하여, 모든 브라우저에서 일관된 스타일을 적용할 수 있게 해줍니다. 이를 통해 개발자는 예측 가능한 디자인과 레이아웃을 구현할 수 있게 돼요.

또한, reset CSS는 기본 여백, 글꼴 크기, 리스트 스타일 등을 초기화하여, 모든 요소가 동일한 스타일로 시작할 수 있게 하여 styling에 도움을 주죠.

저희가 font 부분에서 초기화를 해주지 않아서 폰트 이슈가 있었는데, 해당 부분도 빠르게 globalstyle에 넣어주고 해결 할 수 있었으면 좋겠네요.

**mixin 을 한 이유**

저희가 반복되는 코드들은 컴포넌트로 빼고 ~ 상수로 빼고! 그러잖아요? mixin 도 동일한 개념이에요.

하지만 얘는 flex코드에 초점이 맞춰져 있죠.

이 친구는 필수는 아니지만, flex를 사용한다면 mixin을 적어주는 것이 좋습니다.

반복되는 flex 코드들을 객체화 하여 한줄로 flex 코드를 작성할 수 있기 때문이죠.

**theme 란?**

테마 라고 하죠! 디자이너들과 작업을 하다보면, 공통컴포넌트들과 반복되는 font들 그리고 색상 코드들을 가지고 theme을 만들어줘요. 개발자들은 이거를 띰 이라고 부르는데 ㅋㅋㅋ 그냥 마음대로 읽은거 같기도 해요.

그래서 이것도 역시 동일하게 반복되어지는 색상코드나 폰트들을 상수화 시킨 것들이에요 ! theme 파일을 설정하면 색상 코드나 폰트들을 더 가독성이 높고 재사용성이 높게 사용할 수 있답니다 : )

이것도 필요한 파일인거 같아요.

## 6. 페이지 라우팅

Next.js같은 경우는 폴더 구조별로 라우팅을 자동으로 해주기 때문에 따로 라우팅 설정을 할 필요가 없지만, React로 개발을 하게 된다면, 라우팅 작업이 필요해요 !

그래서 보통 React로 라우팅 설정을 할땐 react-router-dom을 활용하기도 하죠!!

(여기서 조금 더 늘어난 학습 ! javascript에서 routing을 할땐 어떻게 하는지도 알아보세요!)

각 페이지 마다 url을 설정해서 브라우저 내부에서 잘 이동할 수있도록 하려먼 라우팅 설정을 해줘야 하고, react-router-dom 이라는 라이브러리를 설치해야해요

그래서 yarn을 활용하면,

**`yarn add react-router-dom`**을 입력하여 설치하면 된답니다!

그런 후 **`createBrowserRouter`** 를 활용해서 router를 설정해주면 되는데, 객체 형태로 router를 설정하면 layout 컴포넌트로 감싸서 그 하위에 호출이 되도록 할 수 있어서 좋답니다 !!!

저는 이 방식을 사용해서

header가 있는경우,

header가 없는 경우로 구분하여

로그인 전 후에 따라 layout이 다르게 해두었어요!!

- router 코드 예시
  ```jsx
  import React from 'react'
  import { useRoutes } from 'react-router-dom'
  import LayoutWithHeader from 'layouts/LayoutWithHeader'
  import LayoutFullPage from 'layouts/LayoutFullPage'
  import { ROUTE } from 'constant/route.constant'
  import Main from 'pages/Main'
  import { publicRoutesWithHeader, publicRoutesWithFullPage } from './PublicRoutes'
  import { privateRoutesWithHeader } from './PrivateRoutes'
  import etcRoutes from './EtcRoutes'

  export default function Router() {
    const element = [
      {
        path: ROUTE.HOME,
        element: <Main />,
        restricted: false,
      },
      {
        element: <LayoutWithHeader />,
        children: [...publicRoutesWithHeader, ...privateRoutesWithHeader],
      },
      {
        element: <LayoutFullPage />,
        children: [...publicRoutesWithFullPage, ...etcRoutes],
      },
    ]
    return useRoutes(element)
  }

  /*이렇게 layout을 구분해서 그 children으로 다양한 router 페이지를 둠*/
  ```

## 7. 상태관리 라이브러리 세팅(recoil, react-query 등)

그 다음 우리가 사용할 상태관리 라이브러리에 대해서 세팅해야해요.

사실 이 상태관리 라이브러리들은 필수 요소들은 아닌데요!

recoil 과 react-query가 없어도 context api 나, fetch axios등등 다양한 상태들을 클라내부에서 관리할 수 있는 것들이 많이 기존에 부여 되어져 있어요 !

이런 라이브러리를 도입할때는 항상 package.json이 무거워지기 때문에, 도입이유를 확실히 정하고 도입해야해요!!!
그리고 계속해서 좋은 라이브러리들이 많이 나오는 프론트 분야에서는 항상 더 좋은 라이브러리는 없는지 공부하고 알아보고 도입해야한답니다!!

저희는 그냥 빠른 진행을 위해 해당 친구들을 도입했는데, 다음 프로젝트를 진행할땐 무조건 내가 왜 이 라이브러리를 썼는지 합당한 이유가 있어야 한답니다 !! 면접관들이 납득할만한!

**recoil 세팅**

1. yarn add recoil 로 해당 라이브러리를 설치해요
2. recoil 폴더 안에 atom들을 생성하며 사용해요.

**react-query 세팅**

1. yarn add react-query 로 해당 라이브러리를 설치해요
2. key 값 관리를 어떻게 할 것인지 결정해요.
3. 더 자세한 사용법은 해당 노션을 참고해주세요

⇒ [React-query](https://www.notion.so/React-query-7d029d5a0d064fa19fbb88d730564a64?pvs=21)

## 8. 레이아웃 환경 세팅 (화면 상태)

반응형 웹을 사용하거나

로그인 여부에 따라서 레이아웃이 달라지는 경우에 똑같은 레이아웃 코드를 반복적으로 다 써줄 수 없으니까, 해당 레이아웃을 컴포넌트로 분리 할때 필요한 부분이이에요.

- layout full page와 layout header page 코드 예시
  ```jsx
  //LayoutFullPage
  import React from 'react'
  import { Outlet } from 'react-router-dom'
  import ToastNotificationProvider, {
    useToastNotificationAction,
    useToastNotificationState,
  } from 'contexts/ToastNotification'
  import WithProvider from 'hoc/withProvider'
  import { deleteMessage } from 'contexts/ToastNotification/action'
  import ToastNotification from 'components/ToastNotification'
  import * as S from './layout.style'

  export default WithProvider({
    Providers: [ToastNotificationProvider],
    Component: LayoutFullPage,
  })

  function LayoutFullPage() {
    const { toastList } = useToastNotificationState()
    const notifyDispatch = useToastNotificationAction()
    const deleteToastCallback = id => {
      deleteMessage(notifyDispatch, id)
    }
    return (
      <S.AppContainer>
        <S.Full>
          <Outlet />
        </S.Full>
        <ToastNotification
          toastList={toastList}
          col="top"
          row="right"
          autoDelete
          autoDeleteTime={2000}
          deleteCallback={deleteToastCallback}
        />
      </S.AppContainer>
    )
  }
  ```
  ```jsx
  //LayoutHeaderPage
  import React from 'react'
  import GlobalNavigation from 'components/GlobalNavigation'
  import { Outlet } from 'react-router-dom'
  import ToastNotificationProvider, {
    useToastNotificationAction,
    useToastNotificationState,
  } from 'contexts/ToastNotification'
  import WithProvider from 'hoc/withProvider'
  import { deleteMessage } from 'contexts/ToastNotification/action'
  import ToastNotification from 'components/ToastNotification'
  import * as S from './layout.style'

  export default WithProvider({
    Providers: [ToastNotificationProvider],
    Component: LayoutWithHeader,
  })

  function LayoutWithHeader() {
    const { toastList } = useToastNotificationState()
    const notifyDispatch = useToastNotificationAction()
    const deleteToastCallback = id => {
      deleteMessage(notifyDispatch, id)
    }
    return (
      <S.AppContainer>
        <S.Header>
          <GlobalNavigation />
        </S.Header>
        <S.Main>
          <Outlet />
        </S.Main>
        <ToastNotification
          toastList={toastList}
          col="top"
          row="right"
          autoDelete
          autoDeleteTime={2000}
          deleteCallback={deleteToastCallback}
        />
      </S.AppContainer>
    )
  }
  ```

위 코드 예시와 같이 layout을 구분해서 만들면 router 설정을 할때 token여부(=로그인여부)에 따라서 layout을 구분짓게 할 수 있어요 !!

해당 컴포넌트도 따로 폴더를 생성해두면 훨씬 좋죠 : )

## 9. github actions 연결 및 vercel 배포

**github actions**

배포 페이지에 합치기 전에 (=main에 merge하기전에) 코드 오류가 난 부분들이 배포 페이지에 merge 되면 안 되잖아요 ! 배포를 하여 유저들이 있는 상황 속에서 배포페이지에 오류가 나면 사용하고 있는 유저들이 당황할 수가있죠 ! 치명적인 문제가 발생할 수 도 있구요 !

그럴때 마다 오류 체크를 도와주는 CI/CD라는 게 있습니다.

- CI/CD가 정확히 뭐야?
  **CI/CD**는 **Continuous Integration**(지속적 통합)과 **Continuous Deployment** 또는 **Continuous Delivery**(지속적 배포)를 의미합니다.
  1. **Continuous Integration (CI)**: 개발자들이 코드 변경 사항을 주기적으로 통합하여 자동으로 빌드하고 테스트하는 프로세스입니다. 이를 통해 버그를 조기에 발견하고 코드베이스의 일관성을 유지할 수 있습니다.
  2. **Continuous Deployment/Delivery (CD)**: CI를 통해 검증된 코드를 자동으로 배포하는 과정입니다. **Continuous Delivery**는 검증 후 수동 배포를, **Continuous Deployment**는 검증 후 자동 배포를 의미합니다.
  CI/CD를 통해 소프트웨어 개발 및 배포 과정이 자동화되고, 개발 속도와 품질이 향상됩니다.

다양한 CI/CD 툴이 있지만, 저희는 github actions를 활용했는데요, GitHub Actions는 GitHub와 직접 통합되어 있어, 코드 리포지토리와 빌드 및 배포 프로세스를 한 곳에서 관리할 수 있고 무료이기도 하고 보안적으로도 우세하여 해당 툴을 선택하게 되었습니다.

더 자세한 ci/cd 설정방법은 내용이 길어져서 참고 자료 하나 남길게요!

- github actions ci/cd 설정 참고자료
  https://velog.io/@sangwoong/CICD-GitHub-Action으로-CICD-구축하기

**vercel 배포**

사실 배포 하면 제일 무난하게 아는게 aws ec2 배포인데요! aws에서 서버를 파려면 비용도 지불해야하고 토이프로젝트로 서버가 필수적으로 있어야 하는 경우가 아닐때, 부담이 되기도 합니다.

그럴때 바로 프론트 웹 베포를 해주는 vercel이 있는데요!

- vercel이란? + vercel의 장점
  Vercel은 클라우드 플랫폼으로, 프론트엔드 개발자들이 웹 애플리케이션과 웹사이트를 쉽게 배포하고 관리할 수 있도록 돕는 서비스입니다. 특히 Next.js와의 통합이 잘 되어 있으며, 프론트엔드와 서버리스 함수의 배포를 간편하게 처리할 수 있는 기능을 제공합니다.
  ### Vercel의 주요 기능:
  1. **자동 배포**: GitHub, GitLab, Bitbucket과 연동하여 코드가 푸시될 때마다 자동으로 배포가 이루어집니다. 이는 개발자가 코드 변경사항을 빠르게 테스트하고 배포할 수 있도록 도와줍니다.
  2. **서버리스 함수**: Vercel은 서버리스 함수(서버리스 백엔드)를 지원하여, API 엔드포인트를 간편하게 만들고 관리할 수 있습니다. 서버를 관리할 필요 없이 백엔드 로직을 처리할 수 있습니다.
  3. **실시간 미리보기**: 각 풀 리퀘스트마다 실시간으로 미리보기를 제공하여, 코드 변경사항을 배포하기 전에 쉽게 확인할 수 있습니다.
  4. **Global CDN**: 전 세계에 분산된 CDN(Content Delivery Network)을 통해 빠르고 안정적인 콘텐츠 전달이 가능합니다.
  5. **스케일링**: 트래픽이 증가하더라도 자동으로 스케일링되어 성능 저하 없이 서비스를 유지할 수 있습니다.
  6. **Next.js와의 통합**: Next.js의 공식 호스팅 플랫폼으로, Next.js 애플리케이션을 최적화된 상태로 배포할 수 있는 다양한 기능과 최적화가 제공됩니다.
  ### Vercel의 장점:
  1. **간편한 설정과 사용**: 복잡한 설정 없이도 배포가 가능하며, 직관적인 UI와 명령어를 통해 쉽게 작업할 수 있습니다.
  2. **빠른 배포 속도**: 코드 푸시 후 배포까지의 속도가 매우 빠릅니다. 실시간 미리보기와 배포 속도 덕분에 개발 및 피드백 사이클을 단축할 수 있습니다.
  3. **자동 최적화**: Vercel은 자동으로 웹사이트를 최적화하여 빠른 로딩 속도를 유지하며, 성능을 극대화할 수 있도록 돕습니다.
  4. **서버리스 백엔드 지원**: 서버리스 함수와 API 엔드포인트를 쉽게 추가하여, 서버 관리의 복잡함을 줄일 수 있습니다.
  5. **무제한 스케일링**: 서버의 자원을 자동으로 조절하여, 트래픽이 급증해도 안정적으로 서비스를 제공할 수 있습니다.
  6. **개발자 경험 향상**: 실시간 피드백, 간편한 배포 및 미리보기 기능으로 개발자들이 효율적으로 작업할 수 있도록 지원합니다.
  Vercel은 특히 Next.js를 사용하는 개발자들에게 매우 유용하지만, 다른 프론트엔드 프레임워크나 정적 사이트 생성기와 함께 사용할 때도 강력한 선택이 될 수 있습니다.

이 토글 글을 읽어보면 vercel을 사용하는 경우와 장점을 알 수 있을 겁니다 !! 자동으로 해주는 기능들이 많아서 repository를 가지고 오면 정말 어렵지도 않죠!!

vercel 배포는 정말 다 알아서 해주기 때문에 너무 간단하고 쉽지만, 그만큼 제한 적인 부분도 존재합니다. 도메인네임에 vercel.app이 붙는다던지 애니메이션이나 폰트오류가 난다던지 폰 기종에 따라서 웹 페이지에서 접속 되지 않는 경우가 있다던지..

예를들어 python이라는 언어도 굉장히 쉽고 사용하기 편하지만, 제한적이고 안 좋은 점들이 많잖아요!? 그런 느낌이랍니다.. vercel도 간단하게 배포하기엔 좋지만 완전 완벽하고 기업에서도 쓰는 배포툴이라고 할 순 없어요. 불안정하죠 !!

그래서 저는 vercel을 기간이 정해진 프로젝트나 해커톤 같은 곳에서 사용해서 배포하곤 했습니다 !

vercel 배포하는 법도 링크 첨부해둘게요 : )

나중에는 꼭 ec2로 배포하는 연습도 해봤으면 좋겠습니다!

**배포를 어떻게 할건지 결정하는 과정 !**

사실 배포를

1. 프론트 따로, 백엔드 따로 할건지
2. 백엔드가 한번에 할건지 결정하곤 하는데,

정해진 비용이나 파일 무게 같은거를 보고 결정하기도 해요!

저는 현업자들과 하는 프로젝트에서는 백엔드가 합쳐서 한번에 배포를 진행했고요!

토이프로젝트에서는 비용이 없어서 따로 프론트 백 나눠서 각각 배포했어요 !

아무래도 aws 프리티어 버전에서는 프론트+백 한번에 배포하는데 무료가 아닐거기 때문이에요…

백엔드의 역량 + 돈 역량 등등을 신경 쓰고 그리고 프론트 테스트 코드(ex. cypress)등등의 여부에 따라서 적절한 배포 방식을 결정하고 배포를 어떻게 할건지 이야기 나눠보는게 좋답니다 !

---

# **전할말 ! 초기세팅 전에 해야할 일**

사실 이렇게 세팅하는 부분 외에도

1. **코드 컨벤션**
2. **커밋 컨벤션**
3. **라이브러리 선정**
4. **프레임워크 및 언어 선정**
5. **다양한 협업 및 개발 툴 선정**
6. **개발 일정 정하기 + 회의 일정 정하기**
7. **깃허브 orga 생성 및 repo생성 및 issue나 milestone 사용여부 결정**
8. **깃허브 브랜치 전략 정하기**
   1. 참고 : [Git 레포관리](https://www.notion.so/Git-8bbe257337c446ae94df66a216470905?pvs=21)
9. **배포 어떻게 진행할건지!**
10. **프로젝트 볼륨 및 최종 목표 + 각자 목표**
11. **api 명세서 사용여부 or swagger**

등 해줘야하는 것들이 많아요 !!
위 항목들을 다 마무리 한 후에 개발을 시작할때 환경 세팅을 진행해주면 된답니다 !!

위 항목들은 그저 초기세팅할때 체크리스트로 사용할 수 있길 바래요 !!!

## 추가 꿀팁

extension 필요한 것들 꼭 다 깔으십쇼 !!!

- 참고 사이트
  https://mariedays.tistory.com/219

css 확인할때는 브라우저 개발자 도구 유용하게 사용하기

- 참고 사이트
  https://ui.toast.com/weekly-pick/ko_20211027
  https://opentutorials.org/course/580
