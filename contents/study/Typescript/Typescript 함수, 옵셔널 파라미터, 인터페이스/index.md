---
date: '2023-10-30'
title: '[Typescript] Typescript 함수 / 옵셔널 파라미터 / 인터페이스'
categories: ['공부', 'Typescript']
summary: 'Typescript 함수 / 옵셔널 파라미터 / 인터페이스 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

Typescript 스터디 2주차 배운 내용을 다시 한번 더 복습하고 적어보려 한다!!!!
확실히 저번 1주차 보다 더 흥미로운 부분들이 많았던 거 같다.

# 함수

### 함수의 기본적인 타입 선언

- 함수 타입은 매개변수 와 반환타입 이 존재

### 함수의 인자

**타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주
undefined 나 null도 인자로 넘겨야함**

```
function sum(a:number, b:number) : number{
	return a+b;
}

sum(10,30)//40
sum(10) //에러:매개변수 개수 부족
sum(10, 20, 30)//에러:매개변수 개수 과다

```

**만약!! 선택적 매개변수(옵셔널 파라미터)를 원한다면 어떻게 해야할까?**
=> 간단하다! 매개변수 이름 끝에 '?'를 붙이면 된다 !

**기본 초기화 매개변수란?**

- 함수나 메서드의 매개변수에 기본값을 할당하는 기능
- 기본 초기화 매개변수를 사용하면 함수 호출 시 일부 또는 모든 인수를 생략 할 수 있으며, 생략된 인수에는 기본값이 자동으로 할당된다!

**나머지 매개변수**

- 함수에 동적인 수의 인수를 전달하고 그들을 배열로 처리해준다!

# 인터페이스

### 인터페이스란?

=> 아마 typescript에서 중요하게 여겨지는 부분 중 하나가 아닐까 생각한다!!! 잘 읽어보기

- 타입스크립트에서 인터페이스란 객체 타입을 정의할 때 사용하는 문법을 의미한다.
- 인터페이스를 인자로 받아 사용할 때, 속성 개수와 인자로 받는 개체 속성 개수는 일치할 필요가 없다.

```
<Page firstOne = {fisdf~~~ } />


function Page(props){
	const { firstOne, lastOne, others } = props;
	return (
		...
	)
}
```

**인터페이스 예시 =>**

```
interface PageProps {
	firstOne: string;
	lastOne: string;
	others: string[];
}
```

### 읽기 전용 프로퍼티

일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야해서, 프로퍼티 앞에 readonly를 넣어 지정한다.
그렇게 되면, 값을 수정하려고 해도 수정이 되지 않는다!
**사용 예시**

```
interface Page {
	readonly firstOne: string;
	lastOne: string;
}
```

### 인터페이스 상속, 확장

상속은 객체 간 관계를 형성하는 방법을 의미하며, 부모 내용을 자식이 물려받아 사용하거나 확장하는 기법을 의미한다.

**인터페이스 상속**
한 인터페이스의 멤버를 다른 인터페이스에 복사하는 것!!
주의해야할 점 : 상위 인터페이스 정의된 타입을 사용해야 한다.

```
interface Clothes {
	type: string;
	size: number;
}

interface Brand {
	brand: string;
}

interface Sweaters {
	type: string; ... } = 비효율!

interface Sweaters extends Clothes, Brand {
	color: string;
}


let myClothes = { } as Sweaters;
myClothes.type = 'boots';
myShoes.size=225;
myShoes.brand='dont care';
myShoes.color = 'black';
```

### 인덱서블 타입 (인덱싱 타입)

**인덱싱이란?**
객체의 특정 속성을 접근하거나, 배열의 인덱스로 특정 요소에 접근하는 방식
**배열 인덱싱 타입이란? string[] <Array>**
특정 인덱스를 사용하여 값을 가져오는 타입을 지정하는 방법
배열 또는 배열과 유사한 데이터 구조에서 값을 검색하고 가져올 때 사용된다!

```
interface Family {
	[name: number ] : string;
}

interface Age {
	age: number
}

interface PropsType exteds Family, Age  {
type: string
}

function 함수이름(props: PropsType)

let FamilyList:Family  = ['mom' ,'dad' , 'brother']
FamilyList[0]; // 'mom'
```

**객체 인덱싱 타입이란?**
객체의 프로퍼티에 동적으로 접근하고 값을 가져오거나 설정하는 타입인데, 특정 프로퍼티 이름을 사용하여 객체의 값에 접근하는데 사용된다!
중괄호 내부에 문자열 또는 숫자 리터럴 타입을 사용한다!

```
interface MyDictionary  {
   [ level : string ]: number
};

let item: MyDictionary = { hi : 100 }
```

**인덱스 시그니처란?**

속성 이름을 명시하지 않고, 속성 이름의 타입과 속성 값의 타입을 정의하는 문법이다.

```
interface Clothes {
	type: string;
	size: number;
	[property : string ] : string | number;
}

let myClothes: Clothes {
	type: 'boots',
	size: 225,
	color: 'black'
	years: false //error
}
```

하지만 인덱스 시그니처는 코드 자동완성이 되지 않기 때문에 남발하지 않아야 한다고 한다!!

# 결론

⇒ 객체 속성 이름, 속성 값이 정해짐 : 속성 이름 & 속성 값 타입 명시해서 정의

⇒ 속성 이름 모름, 속성 이름의 타입 & 값의 타입을 앎 : 인덱스 시그니처 사용
