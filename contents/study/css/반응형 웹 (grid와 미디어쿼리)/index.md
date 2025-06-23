---
date: '2024-08-13'
title: '[CSS] 반응형 웹 (grid 와 미디어쿼리)'
categories: ['공부', 'css']
summary: '반응형 웹 (grid 와 미디어쿼리) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# 반응형 웹

반응형 웹을 공부하면서 가장 먼저 생각이 난건 바로 grid였다.

평소 구현을 진행했던 토이프로젝트는 반응형으로 변화하는 디자인(핸드폰,패드,노트북)을 모두 받은 경험이 적었다. 그렇기에 반응형 웹을 구현할 일이 거의 없었다.
너무나 당연하게 습관처럼 grid가 아닌 flex를 써왔던 나였기에 반응형 웹을 만들때 불편한 부분들이 많이 생겼고, 이를 해결하기 위해선 grid의 적절한 사용이 필요하겠구나 라는 생각을 했다.

**반응형 웹의 조건**이 몇가지 있는데,

**1. 그리드 or 플렉스 레이아웃** : 부모요소에 display:grid;혹은 display:flex; 속성을 넣어준다.
**2. 가변형 이미지** : max width, width, min-width등을 이용해 화면 너비에 따라 높이와 너비가 바뀌는 이미지
**3. 미디어 쿼리** : 미디어 쿼리는 화면(screen), 티비(tv), 프린터(print)와 같은 미디어 타입(media type)과 적어도 하나 이상의 표현식(expression)으로 구성된다. 표현식은 width, height, color와 같은 미디어 특성(media feature)들을 이용하여 그 특성들의 상태에 따라 다른 스타일 시트를 적용할 수 있다. 미디어 쿼리는 CSS3에 포함되어 있으며, 컨텐츠의 변경없이 주로 화면의 크기에 따라 스타일 시트를 달리하여 적절한 모양을 보여줄 수 있다.

바로 위 항목들이다.

한번 반응형 웹을 구현해보면서 느낀건
반응형 웹을 구현하는 경우에는 flex 보다 grid의 사용이 중요해지는 순간이 있구나 였다.

## 1차원 flex 와 2차원 grid

2번 항목과 3번 항목을 구현해둔 뒤, 1번 항목에서 나는 항상 flex를 사용해 왔다.
보통 반응형이 아닌 이상, 단순히 행 또는 열 즉, 1차원적으로 생각하고 구현해줘야하는 부분이 많았고, 가로로 정렬할 것인지 세로로 정렬할것인지에 대한 고민만 해왔기 때문이다.

grid와 flex의 차이점을 살펴보자면,

**1. 1차원 vs 2차원 레이아웃:**

flexbox는 1차원 레이아웃 모델로, 주로 행(row) 또는 열(column) 중 하나의 방향에 따라 요소를 배치한다.
grid는 2차원 레이아웃 모델로, 행과 열을 모두 고려하여 요소를 배치할 수 있다.

**2. 복잡한 레이아웃:**

flexbox는 단순한 1차원 레이아웃(예: 내비게이션 바, 단일 행의 카드 레이아웃)에 적합하다.
grid는 더 복잡한 2차원 레이아웃(예: 전체 페이지 레이아웃, 여러 행과 열을 포함한 그리드 시스템)에 적합하다.

**3. 공간 분배:**

flexbox는 요소들 간의 가변적인 간격을 쉽게 조정하고, 기본적으로 요소를 자동 정렬한다.
grid는 명시적인 그리드 시스템을 정의하고, 그리드의 특정 위치에 요소를 배치할 수 있어 더 정교한 레이아웃을 만드는데 적합하다.

---

위 차이점에서 언급한것과 같이 flex 는 네비게이션 바나 단일 행의 카드 레이아웃에 적합한데, 전체 페이지 레이아웃이나 여러 행과 열이 같이 있는 페이지에서는 grid가 반응형 웹에 필요하다.

**flex 사용시 불편했던 점들 + 편리한 점**
평소 flex 사용 시 태그를 여러개 만들어 컴포넌트들을 정렬해야한다는 단점이 있었는데, 이는 이차원을 정렬하는 grid를 사용했다면 쉽게 해결될 문제였었다. 하지만 flex가 마냥 안 좋다고 할 수 없는게 단순한 행/열 레이아웃이 필요하다면 flex가 더 간단하게 구현될 수있다. 그렇기에 항상 장단점을 파악하고 필요한 경우를 파악하며 사용해야겠다고 생각했다.

## 미디어 쿼리

반응형 웹을 구현하며 미디어 쿼리를 사용하곤 했는데, 해당 미디어 쿼리는 지속적으로 변화하는 값에 대해서 감지하고 작동되어져야 하기 때문에 지속적으로 변화하는 값을 인지하는 렌더링 적인 부분에서 좋은 방식이라고 생각이 들지 않았다.
그래서 미디어 쿼리 외에도 다른 감지 방법이 있지 않을까 생각했고 조사했다.

**1. ResizeObserver API**
ResizeObserver는 요소의 크기(너비 및 높이)가 변경될 때 이를 감지하는 최신 JavaScript API다. 이를 통해 요소의 크기 변화에 따른 반응형 동작을 구현할 수 있다.

```
const element = document.querySelector('.container');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('Width:', entry.contentRect.width);
    console.log('Height:', entry.contentRect.height);
    // 크기 변경에 따라 수행할 동작
  }
});

resizeObserver.observe(element);
```

**2. CSS 변수와 calc()**
CSS 변수와 calc() 함수를 사용하면 특정 조건에 따라 동적으로 계산된 값을 CSS 스타일에 적용할 수 있다.

```
:root {
  --dynamic-width: calc(100% - 20px);
}

.container {
  width: var(--dynamic-width);
}
```

**3.window.matchMedia와 JavaScript 이벤트**
JavaScript를 사용해 미디어 쿼리를 프로그램적으로 감지할 수 있다. window.matchMedia와 addEventListener를 사용하여 특정 조건을 감지하고 그에 따른 행동을 할 수 있다.

```
const mediaQuery = window.matchMedia('(max-width: 600px)');

function handleWidthChange(e) {
  if (e.matches) {
    console.log('Width is 600px or less');
    // 특정 동작 수행
  } else {
    console.log('Width is more than 600px');
    // 다른 동작 수행
  }
}

mediaQuery.addListener(handleWidthChange);
handleWidthChange(mediaQuery); // 처음 로딩 시에도 호출
```

위와 같은 다양한 방법에 대해서 알 수 있었고, 장단점을 파악하며 반응형 웹 구현 시 적절한 선택을 해야겠다라는 생각이 들었다.
