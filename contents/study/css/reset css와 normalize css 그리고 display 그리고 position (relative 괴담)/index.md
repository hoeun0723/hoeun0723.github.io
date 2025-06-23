---
date: '2024-08-13'
title: '[CSS] reset.css 와 normalize.css / display / position (relative 괴담)'
categories: ['공부', 'css']
summary: 'reset.css 와 normalize.css / display / position (relative 괴담) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# reset.css 와 normalize.css

일단 먼저 너무너무 좋은 블로그 링크를 함께 공유합니다 !
유태오님께서 작성하신 2021년도 12월 글이에요 https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0

평소 개발을 진행하면서 스타일을 적용하기전 기본적으로 reset.css를 적용하였고
당연하게 내가 전에 사용했던 reset 코드들을 그저 읽지도 않고 복붙 해오며 리셋을 해온 경험이 많았다.

하지만 이번 공부를 진행하며 normalize에 대해서 알게 되었고, 앞으로는 normalize 혹은 나의 상황에 맞는 리셋을 생각하고 적용해봐야겠다 라는 생각이 들었다.

각각에 대해서 설명해보면

### reset.css

reset.css는 기본적으로 제공되는 브라우저 스타일 전부를 제거 하기 위해 사용된다. reset.css가 적용되면 H1...H6, p, strong, em 등 과 같은 표준 요소는 완전히 똑같이 보이며 브라우저가 제공하는 기본적인 styling 이 전혀 없다.

### normalize.css

normalize.css는 브라우저 간 일관된 스타일링을 목표로 한다. H1~H6과 같은 요소는 브라우저간에 일관된 방식으로 굵게 표시됩니다. 추가적인 디자인에 필요한 style 만 CSS 로 작성해주면 된다.

즉, normalize.css는 모든 것을 "해제"하기보다는 유용한 기본값을 보존하는 것이다. 예를 들어, sup 또는 sub 와 같은 요소는 normalize.css가 적용된 후 바로 기대하는 스타일을 보여준다. 반면 reset.css를 포함하면 시각적으로 일반 텍스트와 구별 할 수 없다. 또한 normalize.css 는 reset.css 보다 넓은 범위를 가지고 있으며 HTML5 요소의 표시 설정, 양식 요소의 글꼴 상속 부족, pre-font 크기 렌더링 수정, IE9 의 SVG 오버플로 및 iOS 의 버튼 스타일링 버그 등에 대한 이슈를 해결해준다.

그래서 위에 참고해둔 블로그 링크 글을 읽어보면 reset과 normalize 뿐만 아니라 내 상황에 맞게 css 리셋을 해주고 있는 다양한 케이스들에 대해서 살펴 볼 수 있다. 실제 구글, 카카오 , 네이버 등등의 리셋 코드가 적혀있다.

나도 위 내용을 공부하면서 단순하게 리셋하는 코드를 복붙하지 말고 내 상황에 필요한 리셋 요소들을 세팅해서 사용하는 습관을 들여야겠다고 생각했다.

# display

### 나에게 inline이란 ㅎㅎ..

display 를 공부하면서 든 생각과 눈에 가장 들어왔던 요소는 바로 inline이었다.
평소 display: flex를 거의 습관적으로 작성하면서 block 과 inline의 차이점을 몰랐던 나는 이번 기회에 확실하게 알게 되었다.
block은 간단히 말하자면 width가 전체 너비이다.
하지만 inline은 컨텐츠를 감싸는 형태이기에 width 가 content 너비만큼 지정이 된다. 추가적으로 width와 height를 바꿀 수 없는 특징을 가지고 있다.
그렇다면,
inline-block은 컨텐츠를 감싸는 inline의 특징을 가지고 있으면서 width와 height를 바꿀 수 있다는 block 특징이 합해졌다.

예전 프로젝트를 진행하면서 flex와 inline-flex의 차이점을 몰랐는데, 앞으로는 inline의 개념을 확실하게 이해하고 필요한 상황에 적절하게 사용해야겠다는 생각을 했다.

### grid..넌 할 수 있어

추가적으로 항상 flex가 더 이해하기 편하다는 생각을 하며 flex 사용을 애용 해왔는데,
한 가로 안에 요소들이 피라미드 형식으로 많아지는 형태의 배치는 flex는 여러개의 div태그를 활용해야만 가능하지만, grid는 하나의 div 태그로 배열이 가능하기에 grid 사용을 꾸준하게 공부하며 적절한 상황에 적용하는 연습을 해야겠다는 생각을 했다.

### visibility:hidden

추가적으로 display:none 말고 visibility :hidden에 대해서 알게 됐는데,
평소 button field를 만들며 위치나 겹치는 부분에 대한 힘듦을 해결할 수 있겠다라는 생각을 했다.
display: none은
보이지도 않고 해당 공간도 존재하지 않게 됨
visibility : hidden은
보이지만 않고 해당 공간은 존재. width와 height값을 주었다면 그만큼 공간은 존재하게 됨

# position

position 도 기본적으로 작성하지 않으면 static이 적용 되어지곤 했는데,
작성을 안 하고 넘어가는 경우가 많았다. 반응형 웹을 개발하면서 relative 사용을 자동으로 줄이곤 했으니까 해당 코드를 작성하지 않았던 거 같다. 그리고 추가적으로 fixed 같은 경우는 top button 같은 경우에는 작성해본 경험이 있지만, sticky 는 작성해 본 경험이 없어서 header 같은 경우에 사용을 해봐야겠다는 생각이 들었다.

position 관련 괴담이 있는데, 처음 css를 작성해보는 팀원들과 함께 css 코드를 작성할때 팀원들이 모든 요소들의 배치를 position: relative로 했던 적이 있었다...
정말 다른 화면으로 볼때마다 배치가 달라졌고 깨지는 일이 많았었기에, 해당 연관 구조를 파악하며 코드를 고쳐나갔던 기억이 있다.

내가 그때 당시 코드를 고치는 작업이 힘들었던 기억이 있는걸 보면 나에게도 아직 position 구조 파악이 어려운가보다 생각했고 앞으로 코드만 봐도 머리속으로 그려질 정도의 경지까지 올랐으면 좋겠다고 생각했다.
