---
date: '2023-11-06'
title: 'React-Hooks 와 styled-components 활용하여 carousel 만들기'
categories: ['FE', '문제해결', 'carousel', 'hooks', 'styled-components']
summary: 'React-Hooks 와 styled-components 활용하여 carousel 만들기를 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

프로젝트 진행 중,
어떤 목록들을 선택하고 그 목록들을 한 화면에서 나타내어줘야하는 상황에서,
내가 선택한 목록들이 많을 경우에 한 화면에 모든 목록들을 나열하기엔 UI적인 면에서 좋지 않다고 판단되었다.
그래서 해결 방법을 찾던 도중 팀원에게 carousel을 사용해보는건 어떠냐 라는 이야기를 들었고,
여러 자료들을 참고하여 carousel을 구현해 보았다.

먼저 캐러셸을 만들 수 있는 방법은 다양하다.

1. 라이브러리를 활용한다.

- React-Slick

- React-Material-Ui-Carousel

- React Responsive Carousel

2. Reat-Hook 을 사용해 직접 구현한다.

나는 현재 React를 공부하고 있는 사람이고, 아직 초보자이기 때문에, React 라이브러리를 활용하는것도 좋지만, 직접 로직을 이해하며 코드를 짜보는것이 좋겠다고 판단되었다.

그래서 2번 방법을 택하였고, React Hook과 프로젝트에서 활용하고 있는 css 라이브러리 styled component 를 활용하여 제작해보았다.

그럼 먼저 carousel에 구조에 대해서 살펴보도록 하겠다.

![기술 선택 목록 - carousel 구조 설명](https://velog.velcdn.com/images/hoeun0723/post/f94805b0-da62-492f-a13f-8de4b84bbe50/image.png)

허접한 내 그림 실력에 큰 아량을 베풀어 주길 바라며..

위 사진에서 검은색으로 표시된 부분이 바로 기술을 표현할 전체 Container라고 보면 되고,
초록색 부분이 실제 기술들이 보여지는 부분,

그리고 핑크색 부분이 선택한 기술들이 담겨져 있는 Container라고 보면 된다.

나는 양 끝에 있는 화살표 버튼을 눌렀을 경우 뒤에 남겨져 있는 기술들이 보여지길 바랬고, 화살표에 어떠한 onClick 이벤트를 주어야겠다고 생각했다.

```
 // 현재 슬라이드를 나타내는 useState
  const [currentSlide, setCurrentSlide] = useState(0);
// 초록색 부분에서 보여지는 목록 개수
  const viewingSkill = 4;
  // 현재 슬라이드를 제외한 Slide 개수 (skillsImg는 임의로 만들어준 mock data(선택 항목)이다.)
  const TOTAL_SLIDES = skillsImg.length / viewingSkill - 1;
 // 첫번째 슬라이드
  const firstSlide = 0;
  const handleClickNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더이상 이동할 슬라이드가 없다면
      setCurrentSlide(firstSlide); // 첫번째 슬라이드로 이동. ->useState 활용
    } else {
      setCurrentSlide(currentSlide + 1); // 아니라면 다음 슬라이드로 이동.->useState 활용
    }
  };
  const handleClickPrevSlide = () => {
    if (currentSlide === firstSlide) { // 이전버튼을 눌렀는데, 첫번째 슬라이드라면
      setCurrentSlide(TOTAL_SLIDES); // 마지막 슬라이드로 이동 ->useState 활용
    } else {
      setCurrentSlide(currentSlide - 1); // 아니라면 전 슬라이드로 이동 ->useState 활용
    }
  };
```

그렇게 버튼 이벤트가 발생했을 시 실행시키기 위해 작성한 코드가 바로 윗 코드이다.

자세한 설명은 주석으로 작성해 주었다.

이렇게 해준 뒤, 내가 선택한 목록들을 보여주기 위해 어떠한 특정 DOM을 선택해주는 useRef또한 사용해줘야했다.

```
 const slideRef = useRef(null); // slideRef라는 객체 useRef를 활용하여 생성.

  useEffect(() => { // useEffect를 활용하여
    slideRef.current.style.transition = 'all 0.5s ease-in-out'; // 어느 슬라이드를 보여주고 있는지 지정함.
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 가로 슬라이드이기 때문에 translateX를 활용하였다.
  }, [currentSlide]);
```

translateX 을 활용하여 가로로 핑크색 항목들이 이동할 수 있게 했고, 위와 같이 useRef와 useEffect를 활용하여 이동하는 활동을 주었다.

그런 후 , return 부분을 보면

```
<S.SkillBoard> //  검은색 전체 Container부분
  <S.LeftAngle onClick={handleClickPrevSlide} />
    <S.SkillContainer> // 초록색 선택 목록이 보여지는 부분
       <S.SkillSlide ref={slideRef}> // 선택한 항목이 담겨있는 핑크색 Container
           {skillsImg.map(({ imageUrl, id }) => ( // 내가 선택한 목록들을 임시로 만들어둔 mock data
             <S.SkillImage key={id} src={imageUrl} /> // 선택 목록에 대한 이미지
           ))}
        </S.SkillSlide>
   </S.SkillContainer>
  <S.RightAngle onClick={handleClickNextSlide} />
</S.SkillBoard>
```

위와 같이 작성 했다.
검은색 SkillBoard로 감싸주고,
초록색 SkillContainer에서는 overflow:hidden; 이라는 css 속성을 주어 범위가 넘어갔을 시 보여지지 않게 했다.
핑크색 SkillSlide에서는 mock data인 skillsImg라는 데이터를 담을 수 있게 범위를 목록에 맞춰 설정해주었고,
.map 을 사용하여 배열에 있는 값을 가지고 올 수 있게 했다.
또한 각각 옆으로 이동하는 버튼에 대해서는 이미지로 불러온 다음, onClick시 아까 만든 함수들이 실행 될 수 있도록 했다.

styled-components 에 대해서도 살펴보자.

```
// * : 이동 버튼 포함 검은색Container
export const SkillBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20%;
  width: 100%;
  padding: 5px 0px; // height, width, padding은 적절하게 조절하기 !!
`;
// 초록색 Container
export const SkillContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;
  overflow: hidden; // 넘어가는 부분은 안보이게 해주었다.
`;
// 핑크색 Container
export const SkillSlide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;
  gap: 12px; // 각 목록들 사이의 간격 조정. 이것 또한 객체화 해주는게 좋음.
`;
// 선택 항목 Img 크기 지정
export const SkillImage = styled.img`
  object-fit: cover;
  width: 52px;
  height: 52px;
  border-radius: 50%; // 위 그림에서와 같이 동그란 형태로 표현
  box-shadow: 1px 1px 1px 1px #cdcdcd; // 옅은 회색으로 그림자 효과 줌.
`;


// LeftAngle과 RightAngle에 관한 부분은 이미지를 선언 한 후 그 이미지에 대한 적절한 크기 값을 적용해주면 된다.

```

초록색에서는 overflow:hidden이 포인트이고, 핑크색에서는 gap이 포인트 인거 같다. 물론 gap을 활용 안해도 되지만, 초반에 array mock data를 불러왔을 때 나는 항목들의 이미지가 너무 붙어있어서 어찌 해야하나 고민을 많이 한 거 같다.

처음 css를 다뤄보다보니 모르는 부분이 많았지만, 점점 익숙해지고 재미가 있다고 느껴서 앞으로 꾸준히 학습하며 실력을 늘려봐야겠다.

이렇게 위와 같은 방법으로 코드를 작성하면 손쉽게 라이브러리를 사용하지 않고도 carousel을 구현 할 수 있다 !

추가로...

코드를 공부하면서 짜다 보니, 아무래도 변수명을 내 마음대로 작성한 경향이 있었다.
(다른 팀원이 알아보기 어렵고, 숫자들에 대하여 객체화 시켜 네이밍 처리를 해주지 않으니 리펙토링에도 어려웠다.)
추후 pr을 날리고 code review를 받을때 네이밍에 관한 부분에 대한 review를 받았다. 관련 내용을 읽어보고 난 후 네이밍 관련 부분을 수정하였고, 추후 네이밍에 관한 부분도 블로그에 작성해주면 좋을 거 같다고 생각했다. 코드짜는거와 별개로 네이밍도 항상 고민이 많은 거 같다. 익숙해지기 위해선 관련 자료들도 찾아보고 공부한 후 많이 해봐야할 거 같다는 생각이 들었다.

이번 프로젝트에서 css도 처음 다뤄보고 styled-components도 계속 활용 해보고 있는데, 초반에 배우는 과정 중에서 팀원에게 많이 피해를 준거 같아 너무 미안한 마음이 크게 들었다.

하지만 지금은 열심히 공부하여 익숙해진 상태이고, css 는 앞으로 계속해서 접해보면 익숙해지지 않을까 싶다.
storybook 도 이번기회에 사용해 보았는데, 이 또한 많이 익숙해진 상태이다. 익숙해졌지만 완벽하진 않으니 앞으로 많이 사용해보고 익히며 부족한 실력을 길러야 겠다. (필요하다면 styled-components와 css 그리고 storybook에 대해서도 정리해보자!)

참고 자료

peppermint100.log-[JS]React Hooks로 Carousel Slider 만들기

1004walnut - [React] useState, useEffect, useRef을 이용하여 캐러셀 슬라이더 구현하기

[저번 블로그 비밀번호 까먹음 이슈로 인해 현 블로그에 재 업로드 합니다.](https://hoeunwang.tistory.com/32)
