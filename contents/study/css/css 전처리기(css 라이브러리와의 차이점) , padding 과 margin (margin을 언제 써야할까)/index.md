---
date: '2024-08-19'
title: '[CSS] css 전처리기(css 라이브러리와의 차이점은?) / padding과 margin (margin을 언제 써야할까?)'
categories: ['공부', 'css']
summary: 'css 전처리기(css 라이브러리와의 차이점은?) / padding과 margin (margin을 언제 써야할까?) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# CSS 전처리기

전 스터디에서 다양한 css 라이브러리를 찾아보면서 scss 관련 내용을 작성한 적이 있는데,
scss의 형태가 마치 css의 업그레이드 버전 같아, 그렇다고 적어둔 내용이 있었다.

scss 확장자 파일의 코드가 바로 css 전처리기 였는데,

**css 전처리기(CSS Preprocessor)란**
css 작성의 효율성과 유지보수를 높이기 위해 사용되는 도구이다. 전처리기를 사용하면 CSS보다 더 강력한 기능을 이용하여 스타일을 작성하고, 이를 일반 CSS로 컴파일할 수 있다.
전처리기를 통해 다음과 같은 기능을 사용할 수 있는데,

1. 변수(Variables): CSS 전처리기에서는 변수를 정의하여 코드에서 반복되는 값을 하나의 변수로 관리할 수 있다. 예를 들어, 색상이나 폰트 크기 등을 변수로 정의하면, 여러 곳에서 사용할 때 일관성을 유지할 수 있다.

2. 중첩(Nesting): 전처리기를 사용하면 CSS 선택자를 중첩하여 작성할 수 있다. 이는 HTML 구조를 더 직관적으로 반영하는 방식으로 스타일을 작성할 수 있게 도와준다.

3. Mixin: 자주 사용하는 CSS 코드 블록을 재사용 가능한 형태로 만들어, 필요할 때마다 호출하여 사용할 수 있다. 이는 코드의 중복을 줄이고, 유지보수를 쉽게 해준다.

4. 연산(Operations): CSS 전처리기에서는 수학 연산을 통해 동적으로 값을 계산할 수 있다. 예를 들어, 너비와 높이 등을 계산하여 할당할 수 있다.

5. 부분화(Partial & Import): 스타일 코드를 여러 파일로 분리한 후 필요할 때 이를 가져올 수 있다. 이는 코드의 구조를 더 잘 관리할 수 있게 해준다.

의 기능을 제공해준다.

### css 전처리기의 종류

1. Sass (Syntactically Awesome Stylesheets): 가장 널리 사용되는 전처리기 중 하나로, .scss 또는 .sass 확장자 사용.
2. LESS (Leaner Style Sheets): 주로 Bootstrap에서 사용되며, .less 확장자 사용.
3. Stylus: 간결한 문법을 제공하며, .styl 확장자 사용.
   등등
   이 있고,

css 전처리기는 일반 css 코드로 컴파일 해야하므로 빌드 과정을 한번 더 거친다.

### 그럼 css 라이브러리와의 차이점은 무엇일까?

- **CSS 전처리기:** 주로 코드 작성과 구조화에 중점을 둔 도구로, 개발자가 보다 효율적이고 유지보수 가능한 CSS를 작성할 수 있도록 돕는다. 전처리기는 CSS의 기능을 확장하여 더 복잡한 스타일링 요구를 충족시키는 데 사용한다.
- **CSS 라이브러리:** 주로 빠른 개발과 일관된 UI 구현에 중점을 둔 도구로, 이미 정의된 스타일과 컴포넌트를 재사용함으로써 개발 시간을 줄이고 일관된 디자인을 유지하는 데 도움이 된다.

이 두 가지 도구는 서로 다른 목적을 가지고 있고, 프로젝트에 따라 적절히 선택하거나 병행해서 사용할 수 있다. 예를 들어, CSS 전처리기를 사용하여 기본 스타일을 작성하는 것이고, CSS 라이브러리를 사용하여 반복적인 UI 요소를 쉽게 스타일링할 수 있는것이다.

평소 css 관련 코드를 작성할때 라이브러리 도입을 고민했는데, 상황에 따라서 다양한 css 전처리기를 사용해보는것도 좋을 거 같다라는 생각을 했다.

# Padding과 Margin

보통 css 개발을 할때 padding 과 margin 을 활용해서 눈에 보이지 않은 간격들을 생성하고 디자인을 구현하곤 하는데,
padding을 쓰는 경우는 많았지만 margin 보단 gap 또는 flex를 활용했던 내 모습이 떠올라 해당 부분에 대해서 더 알아보고 싶다는 생각을 했다.

### 그래서 padding 과 margin 의 차이점은?

Padding: 요소 안쪽의 여백을 설정한다. 내용과 경계선 사이의 간격.
Margin: 요소 바깥쪽의 여백을 설정한다. 요소와 다른 요소 사이의 간격.
요약:

**Padding = 요소 내부의 여백
Margin = 요소 외부의 여백**

### margin 을 쓰는 경우

보통 margin은 border 외부에 생기는 간격이기 때문에 눈에 보이지 않아 즐겨 사용하지 않았던 기억이 난다.
gap을 쓰거나, flex를 써서 정렬을 했고 (반응형을 고려해야했기 때문에.)
혹은 겉에 감싸진 부모 컴포넌트에 padding을 넣어주고 속에 자식 컴포넌트들을 위치시켜주는!

그런 활동을 많이 했었기에 margin에 대해서 좋은 인식을 가지고 있지 않았다. 반응형에 방해가 된다고 생각했기 떄문이다.

하지만, 생각해보니 간격이 내 생각과 다르게 불규칙적인 경우나 다른 부분이 존재할때면 margin이 필요하겠다 생각했다.
필요한 부분에서 margin을 사용하고, 반응형 웹을 고려하며 해당 간격 코드들을 작성하는 연습을 꾸준히 해야겠다는 생각도 역시 들었다.
