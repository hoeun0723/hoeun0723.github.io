---
date: '2023-10-17'
title: '[React] React / React Hooks / useSate (useState 동작 방식, 리렌더링)'
categories: ['공부', 'React']
summary: 'React / React Hooks / useSate (useState 동작 방식, 리렌더링) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

33기 활동을 하며 React Hooks 스터디에 들어가게 됐는데, 1주차 발표를 맡게 되었다. 관련 내용에 대해서 발표 하기 위해 간단한 아티클을 작성해보려고 한다 !

useState에 대해 알아보기 전에 React와 React Hooks에 대해서 간단히 알아보고 가자!
_(내용의 대부분은 UMC 1기 활동 당시 React 스터디 내용을 많이 참고 하였습니다. 찰스에게 무한 감사를..🔥)_

<br/>
<br/>
<br/>

**React의 핵심 개념인 Component, JSX, Props, 그리고 State에 대하여!**

# React의 핵심 개념

## 사용자 정의 태그, Component 단위의 설계

- Component는 부품으로 사용된다. **재활용 가능한** UI 구성의 기본 단위!
- 이 부품들을 모아서 하나의 화면을 만든다!
- Component를 통해 기존 html의 반복적인 코드사용과 유지 보수에 대한 문제점을 해결 할 수 있다.

참고자료 : https://ko.reactjs.org/docs/components-and-props.html

## JSX 문법

- JSX(JavaScript XML) : JS에 XML을 추가한 JS 확장 문법
- 쉽게 말해 JS 함수 내에 html 문법을 사용하는것
- 브라우저가 이해할 수 없는 JSX 문법은 Babel을 통해 일반 JS 형태릐 코드로 변환된다.

참고자료 : https://ko.reactjs.org/docs/introducing-jsx.html

## Props

props는 3가지 관점에서 이해해 볼 수 있다.

### **1) Component에 전달되는 '데이터'**

- 리액트의 데이터 전달 방향은 부모 -> 자식
- 리액트에서는 자식 컴포넌트에게 데이터를 Props라는 이름의 소포상자에 담아 전달해준다.

### **2) Component의 Input**

- 함수형 Component를 다룬다.

### **3) Component를 사용하는 외부자를 위한 것**

```
<img src"./lion.png" alt="사자" />
```

- html 태그의 src와 alt 속성(props)에 원하는 값을 입력하여 사용한다.
- 우리가 만들 Component, 즉 사용자 정의 태그도 마찬가지로 props를 통해 입력 받을 수 있다.

참고자료 : https://ko.reactjs.org/docs/components-and-props.html

## State

- Component의 내부(상태) 값. 당연히 각 Component 내부에서 관리 됨.
- 앱의 유동적이고 변화하는 데이터를 다루기 위해 사용.
- 함수형 Component에서는 useState() Hook을 통해 state를 생성하고 관리함.

### useState

```
const FunctionalComponent = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default FunctionalComponent;
```

- const [ state 값 저장 변수, state 값 갱신 함수 ] = useState('초기값');
- 'state 값 갱신 함수' 네이밍은 일반적으로 state 값 앞에 set을 붙여서 지어준다.
- state는 반드시 setState 함수로만 업데이트 해줘야한다.
- Component의 바로 아래 로컬 scope에 선언해주어야 한다. (Component의 로컬 함수에서 선언 불가능)

### useState는 어떻게 동작하나요?

```
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum(num + 1);
	console.log(num);
}
// 어떤 값이 콘솔 로그로 찍히게 될까요?
```

- useState는 비동기
  - setState 함수는 화면에 렌더링된 state를 호출 즉시 변경하지 않는다.
    - state 변경사항을 대기열에 집어넣고, 컴포넌트에게 새로운 state를 사용하기 위해 re-render 해야한다고 알리는 역할.
    - 리액트는 성능향상을 위해 setState를 연속으로 호출하면 배치(Batch) 처리하여 한번에 렌더링
      - 배치(Batch) : React가 더 나은 성능을 위해 여러개의 state 업데이트를 하나의 리렌더링으로 묶는 것 React는 16ms 동안 변경된 상태 값들을 하나로 묶는다. (16ms 단위로 배치를 진행한다.)

```
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum(num + 1);
	setNum(num + 1);
	setNum(num + 1);
}
// +3 을 기대하는 로직이지만, +1씩만 증가함
```

setState 함수에 값을 인자로 바로 넘겨주는 것이 아닌, updator 함수를 넘겨줌으로써 이전의 state 값을 가져와 변경사항을 처리할 수 있다.

```
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum((prev) => prev + 1);
	setNum((prev) => prev + 1);
	setNum((prev) => prev + 1);
}
```

**그럼 이제, 함수형 Component와 관련된 핵심 기술인 React Hooks에 대해 알아보자.**

# React Hooks

## React Hooks라는 기술은 왜 등장했을까?

React Hooks는 클래스형 Component를 사용하지 않고도 state를 사용할 수 있는 기술이다. 좀 더 자세히 알아보자.

## 클래스형 Component => 함수형 Component

클래스형 Component의 단점을 개선하여 함수형 Component가 탄생하였다.

**함수형 Component**는 클래스형 Component에 비해** 더 짧고 심플한 코드 작성**이 가능해졌으며, 성능 또한 더 좋다.

**클래스형 Component 예시**

```
import React, { Component } from 'react';

export default class ClassCpnt extends Component {
 render() {
   return (
     <div>Hello</div>
   )
 }
}
```

**함수형 Component 예시**

```
import React from 'react';

export default function FunctionCpnt() {
    return (
        <div>Hello</div>
    )
}
```

하지만, 함수형 Component에서는 클래스형 Component에서 사용되었던 state와 Lifecycle Method를 사용할 수 없었다. 그래서 Hooks 탄생 전에는 울며 겨자먹기로 클래스형 Component를 사용하는 경우가 종종 있었다고 한다.

### React Component의 생명주기

React Class Component는 **3가지 생명주기 함수**를 가진다.

- componentDidMount : Component가 Mount된 직후 호출됨
- componentDidUpdate : Component가 갱신되었을 때 호출됨
- componentWillUnmount : Component가 제거되기 직전에 호출됨

이러한 문제점들을 해결하고자 React 16.8에서 함수형 Component에 state와 Lifecycle Method 기능을 제공해주는 React Hooks 라는 기술이 추가 되었다.

_React Hooks는 함수형 Component에서 state와 Lifecycle Method을 연동할 수 있게 해주는 함수_

## 대표적인 React Hooks 중 useState

### 클래스형, 함수형 state 활용 비교해보기

**클래스형 Component에서의 state 활용**

```
class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      darkMode: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    const { title } = this.props;
    return (
      ...
    )
  }
}
```

**함수형 Component에서 state 활용**

```
const Card = ({ title }) => {
    const [darkMode, setDarkMode] = useState(true);

    const handleChange = (event) => {
        setDarkMode(!darkMode);
    }

    return (
        ...
    )
}
```
