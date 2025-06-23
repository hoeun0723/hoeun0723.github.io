---
date: '2024-07-25'
title: '[Javascript] 이벤트 / 모듈시스템(CommonJS,AMD,UMD,ES6)'
categories: ['공부', 'Javascript']
summary: '이벤트 / 모듈시스템(CommonJS,AMD,UMD,ES6) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# 이벤트 (JS에서)

이벤트란 사용자의 행동이나 브라우저에서 발생하는 특정 상황에 대해 웹 페이지가 반응하도록 하는 메커니즘을 의미한다.

이벤트가 발생하는 경우는 버튼 클릭이나 스크롤 정도로만 알고 있었는데, 다양한 이벤트 종류가 있다는 것을 보고 놀랐었다. 놀람과 동시에 이렇게 다양한 모든 부분에서 이벤트가 있구나를 깨달았다.

- 마우스 이벤트
- 키보드 이벤트
- 포커스 이벤트
- 폼 이벤트
- 값 변경 이벤트
- DOM 뮤테이션 이벤트
- 뷰 이벤트
- 리소스 이벤트
  가 있는데, 단순한 마우스 클릭 이벤트뿐만 아니라, 폼 이벤트에서 submit 같은 이벤트들도 구분하고 있고 DOM 관련 이벤트가 있어 이를 분류 한다는 사실도 흥미롭게 느껴졌다.

### 이벤트 전파(event propagation)

DOM 트리상에 존재하는 모든 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파된다. 노드들로 이루어진 트리이기에 연관관계가 있기 때문이다.
이러한 현상을 이벤트 전파라고 한다.

사용자의 다양한 입력을 통해 동적으로 생성되는 이벤트 객체는 이벤트를 발생시킨 타깃을 중심으로 DOM 트리를 통해 전파된다.
전파되는 방향에 따라 3단계로 구분할 수 있는데,

1. 캡처링 단계 : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
2. 타깃 단계 : 이벤트가 이벤트 타깃에 도달
3. 버블링 단계 : 이벤트가 하위 요소에서 상위 요소 방향으로 전파

가 있다.

브라우저는 기본적으로 이벤트 버블링 단계에서 이벤트를 캐치하는데,
이에 대해서 설명해보자면,

```
<html>
	<body>
    <div>div 태그</div>
    </body>
</html>
```

위와 같은 구조에서 캡처링 단계라면 html > body > div 순으로 1. 상위 노드에서 2. 하위 노드로 내려오면서 이벤트를 캐치한다.
그런 후 이벤트 타깃까지 도달하고,
해당 타깃 노드에서 상위노드까지 올라가는 버블링 단계를 거친다.
바로 이 과정에서 이벤트를 캐치하곤 한다.

(하지만 addEventListener 메서드 중 세번째 인수로 true를 넣어준다면 캡처링 단계에서도 이벤트 객체를 캐치할 수 있다.)

### 이벤트 위임 (event delegation)

연속 되는 태그에 대해서 공통적으로 이벤트를 줘야할 때 우리가 이벤트 핸들러를 바인딩할 해당 요소의 부모 요소에게 이를 위임하여 이벤트를 진행하는 것을 이벤트 위임이라고 한다.

```
<!DOCTYPE html>
<html>
  <head>
    <title>eventDelegation</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="container">
      <button class="btn-number">1</button>
      <button class="btn-number">2</button>
      <button class="btn-number">3</button>
      <button class="btn-number">4</button>
      <button class="btn-number">5</button>
    </div>
    <script>
      const div = document.querySelector('div');

      div.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
      });
    </script>
  </body>
</html>
```

예를 들면 위와 같은 코드에서는 버튼 모두가 실행이 되어진다. 상위 컴포넌트인 div태그에서의 이벤트가 발생되며 이벤트 위임이 되었기 때문이다.

그래서 이러한 현상이 발생 되며 내 의도와는 다르게 모든 태그에서의 이벤트 방지를 막을 수 있도록 하는 e.preventDefault를 사용하거나 e.stopPropagation을 사용하기도 한다.
e.preventDefault는 요소 태그의 기본 동작을 중단하고, e.stopPropagation은 이벤트 전파를 중지시켜 상위태그의 해당 콜백 함수를 호출하도록 하는 기능을 가진다.

보통 코드를 작성하면서 form 형태로 제출할때 input 태그와 버튼 태그를 한번에 상위태그에서 이벤트가 발생했을때 기본 동작들을 작동시키려고 하면 모두 다 적용 되는 경우가 있어 각각 하위 컴포넌트들에게 이벤트가 발생할때 마다 반복적으로 어떠한 동작들을 작동시키곤 했는데, 위와 같은 메소드들을 활용하여 적절하게 코드를 작성해야겠다고 생각했다.

### 추가적으로 이벤트 루프에 관하여

비동기 부분을 공부하면서 event loop에 대해서도 공부해 보았는데, 해당 이벤트 루프는 콜스택이 비어 있을때 텍스트 큐에 있던 비동기 작업들을 불러와서 콜스택에 적용해주는 역할을 한다는 것을 알 수 있었다.
Node.js와의 관계성에 대해서 알게 되었고 해당 하는 이벤트루프와 콜스택 그리고 텍스트 큐에 대해서 위치가 어디었는지에 대해서도 해답을 알게 되었다.
![](https://velog.velcdn.com/images/hoeun0723/post/bddc013a-4325-4c4d-a029-17afe11e3067/image.png)

# 모듈 시스템 (CommonJS,AMD,UMD,ES6)

모듈이란?
여러 기능들에 관한 코드가 모여있는 하나의 파일로 다음과 같은 것들을 위해 사용된다.

1. 유지보수성
2. 네임스페이스화
3. 재사용성
   이러한 장점들을 살리기 위해서 모듈 개념들이 필요했고 JS에선 모듈을 개발하기 위해 다양한 모듈러들을 만들었다.

사실 간단히 말하자면 export import야 ! 라고 말하면 조금 더 이해가 쉬울 수도 있는데, 내 말로 설명해보자면 외부에 있는 파일들이나 함수 및 변수들을 모듈로 export 하고 import 해서 불러오는 과정을 의미한다.
(export import 개념은 es6에서 나온거여서 추후 가서 이어서 설명하겠다.)

### CommonJS

가장 먼저 나온게 CommonJS 라는 모듈러 인데, 이는 자바스크립트의 공식 스펙이 브라우저만 지원했기 때문에 이를 서버사이드 및 데스크탑 어플리케이션에서 지원하기 위한 노력으로 인해 나왔다고 한다.
위에서 말했던 import 와는 다르게 CommonJS에서 다른 모듈을 사용할때 require을 사용한다. 또한 모듈을 해당 스코프 밖으로 보낼 때에는 module.exports를 사용하곤 하는데, Node.js에서는 현재 이 방식을 사용하고 있다고 한다.

**exports vs module.exports**
module.exports 외에도 exports를 사용하기도 하는데 이 관계에 대해서 설명해보자면,

- module.exports는 빈 객체를 참조 한다.
- exports는 module.exports를 참조한다.
- require는 항상 module.exports를 리턴받는다.
  즉, 함수를 모듈 밖으로 내보내고자 할떄 2가지 모두 다 가능한 것이다.

하지만, 차이점이 있는데 module.exports는 객체를 참고하고 exports는 modules.exports를 참조한다. 그래서,

```
exports.printHelloWorld = printHelloWorld;
module.exports = { printHelloWorld };
```

이와 같은 특성을 가지고 있다.
exports 를 사용하면 직접 module.exports 를 수정하지 않고 객체의 멤버를 만들거나 수정하는 방식으로 사용한다. 따라서, exports 에 어떤 값을 할당하거나 새로운 객체를 할당했다고 하더라도 결국 require 는 module.exports 를 리턴받기 때문에 잠재적인 버그를 피할 수가 있다.

이러한 부분을 공부하면서 나는 exports를 더 자주 사용하곤 했던 거 같은데, module.exports가 존재하는 이유는 무엇이고 어떤 경우에 사용되는지 궁금하여 찾아보았다.

찾아본 결과, mudule.exports는 한번에 모든 객체를 바꾸는 작용을 하고 exports는 각각에 객체에 접근이 가능했기에 여러개의 객체를 export 하는 경우는 exports 사용이 더 유용하다라는 사실을 알 수 있었다.
![](https://velog.velcdn.com/images/hoeun0723/post/61ffb717-fc9a-4c5e-8904-bc7c95ab8d29/image.png)

### AMD(Asynchronous Module Definition)

AMD는 CommonJS 그룹에서 나온 사람들이 만든 그룹으로 비동기 모듈에 대한 표준안을 다루는 그룹을 말한다.
AMD의 스펙을 잘 구현한 모듈로는 RequireHS가 있다.
비동기 모듈에 대한 표준안을 다룸으로써 서버쪽에 장점이 많은 CommonJS와는 다르게 브라우저 쪽에서 더 큰 효과를 발휘한다.
브라우저는 모든 모듈이 다 로딩될때까지 기다릴 수 없기에 비동기 모듈 로딩방식으로 구현을 해놓았다.
이 방식에서 사용하는 함수는 define()과 require()이 있다.

RequireJS의 장점에 대해서 조금 더 알고 싶어서 찾아본 결과,
![](https://velog.velcdn.com/images/hoeun0723/post/e0cb071c-f032-432b-a30a-6c01bd3a0e67/image.png)
이러한 장점을 가지고 있었다.
그래서 해당 모듈러를 사용하는 경우는 비동기적인 브라우저 로딩이 많은 경우에 사용하면 좋겠구나 라는 생각을 했다.

### UMD(Universal Module Definition)

UMD는 간단히 말하면 CommonJS와 AMD가 합쳐진 개념이다. 통합시킨 개념이랄까 !?

그래서 공식 UMD 소스코드를 살펴보면,

```
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
```

이렇게 define을 사용하는 AMD 속성이 있고, module.exports를 사용하는 CommonJS도 있다.

통합하는 방식은 2개의 인자를 전달받는 함수를 실행하는 것으로, 첫번째 인자는 Browser 쪽을 구현할 root 에 넘길 값으로 undefined 이면 this 로 아니라면 self , 즉 window 로 설정한다. 그리고 2번째 인자로 빈 객체 리터럴을 리턴하는 함수를 보낸다. 이렇게 되면 각각의 환경에서 모두 모듈개념을 사용할 수 있게 된다.

### ES6(ES2015)

이게 바로 위에서 언급했던 import export 구문을 사용ㅎ아는 방식이다.
내가 즐겨 사용하긴 했지만 모든 브라우저에서 지원하지 않기 때문에 Babel의 @babel/plugin-transform-modules-commonjs 를 통해 변환시켜서 사용해야한다.

moduleA.js

```
const A = () => {};
export default A;
```

moduleB.js

```
export const B = () => {};
```

index.js

```

import A from 'moduleA';
import {B} from 'moduleB';
```

이렇게 위와 같이 export로 내보내고 import로 불러와서 사용하는 형식이다.

한가지 더 알아봐야할 점은 default의 유무 인데, export를 사용할때는 named export와 default export를 사용할 수 있는데, default export는 모듈 내에서 한번만 사용할 수 있고, named export는 여러번 사용할 수 있다.
그렇기에 내가 평소에 styled-components를 사용해서 style 파일을 코드 분리 시켰을 경우에는 export default 들이 아닌 export const들로 컴포넌트들을 선언했던 것이었고, 함수파일에서는 하나의 함수만 존재했기에 export default를 했던 것이었다.

그렇게 default export로 내보내면 import 에선 내보낸 이름 그대로 바로 사용할 수 있지만, named export로 내보내면 {} 로 묶어서 불러와야 한다. 이것이 기본적인 사용법이고 별칭(alias)을 as 로 주어서 다른 이름으로 사용할 수도 있고 \* 와일드카드를 사용하여 한번에 불러오거나 내보낼 수도 있다.

그래서 나도

```
import * as S from 'style.js';
```

이런 식으로 사용해왔던 거 같다.

여기에서 추가적으로 default 와 named export에 대해서도 알 수 있어서 좋았다.

내가 평소에 아무렇지 않게 사용해 오던 것들에 대해서 새롭게 알게 된 부분들이 많았다. 한번쯤 의문을 가질 뻔 했던 것들이었는데, 뷰를 구현하고 코드를 클린하게 하는데에만 관심이 많았지 정작 이 코드 자체에 진짜 흐름과 전체적인 기본기에 대한 파악이 부족하다라는 생각이 많이 들었던 거 같다.

모듈 부분 좋은 참고 자료
https://d2.naver.com/helloworld/12864
