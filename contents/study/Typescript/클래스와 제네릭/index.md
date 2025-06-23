---
date: '2023-11-18'
title: '[Typescript] 클래스 / 제네릭'
categories: ['공부', 'Typescript']
summary: 'Typescript에서 클래스 / 제네릭 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

SOPT 33기 Typescript스터디 6주차 내용 리뷰입니다.

# 클래스

## 클래스란?

> 여러가지 유사한 객체를 쉽게 생성하는 자바스크립트 최신 문법!

```
function Fruits(name,size) {
this.name = name;
this.size = size;
}

//새로운 객체 생성
const Apple = new Fruits('사과','medium');
const Cherry = new Fruits('체리','small');
```

이걸 class로 변환한다면, =>

```
function Fruits {
 constructor(name, size) {
    this.name = name;
    this.size =  size;
  }
}

//새로운 객체 생성
const Apple = new Fruits('사과','medium');
const Cherry = new Fruits('체리','small');
```

이렇게 된다!

## 클래스의 기본 문법

```
class Fruits{
  constructor(name, size) {
    this.name = name;
    this.size =  size;
    }

	eat(){
		console.log('냠냠');
	}

}
```

객체를 생성해주는 생성자 메서드는 **constructor**!

→ 클래스 메서드는 **sayHi**!

→ **name**과 **status**는 **클래스 필드** 또는 **클래스 속성**이라고 부른다!

```
const Apple = new Fruits('사과','medium');
```

그리고 이거는 **클래스 인스턴스**! 이다.

## 클래스의 상속

```
class Fruits {
  constructor(name, size) {
    this.name = name;
    this.size =  size;
    }

	eat(){
		console.log('냠냠');
	}
}

class Red extends Fruits{ //Person 클래스 상속 받음
	constructor(name, size){
		super(name, size); // 부모 클래스의 생성자 호출
		this.eat();
		}

	cook(){
		console.log('요리의 재료는'+ this.size + this.name + '입니다!' );}
} // 부모크래스의 속성이나 메서드 접근 가능

```

```
const Blueberry = new Fruits('블루베리', 'small');
Member.cook(); //요리 재료는 small 블루베리 입니다 !

```

클래스 상속시에 클래스 인스턴스 뿐만 아니라, 자식 클래스 코드 내부에서도
부모 클래스의 속성이나 메서드에 접근할 수 있다! 😊
→ 이렇게 클래스를 상속받으면 기존 클래스에 정의된 속성과 메서드를 재활용할 수 있다.

## 1. 타입스크립트의 클래스

```
class Fruits {
  constructor(name, size) {
    this.name = name;
    this.size =  size;
    }

	sum(a: number, b: number):number{
		return a+b;
      }

}
```

생성자 메서드 함수인 name과 age에 타입 지정 !
// 클래스 메서드 함수의 파라미터, 반환타입 모두 타입지정

**BUT!!**

**에러가 난다. 왜일까?**
생성자 메서드에서 사용될 클래스 속성들을 미리 정의해줘야하기 때문에!

```
class Fruits {
	name: string;
	size: string; // 생성자 메서드에 사용될 클래스 속성 정의

  constructor(name: string, size: string; ) {
    this.name = name;
    this.size =  size;
	}

	sum(a: number, b: number):number{
		return a+b;
        }

}

```

이런식으로 작성해주면 해결할 수 있다 :)

## 2. 클래스의 접근 제어자

클래스의 타입을 정의할 때 알아두면 좋은 클래스** 접근 제어자**들
→ 클래스의 노출 범의를 정할 수 있음

→ 의도치 않게 특정 객체 값이 바뀔 때 의도치 않은 에러 발생 확률을 낮출 수 있음
**예시**

```
//점수 통과 구별해주는 코드

class scoreClassifier{
	testScore: number;

	constructor(testScore: number){
		this.testScore = testScore;

	}

	test(){
		if (this.testScore > 80){
				console.log("통과입니다");
		}
	}
}

const myScore = new scoreClassifier(90);
myScore.test(); //통과입니다
```

근데 만약에 객체에 접근해서 숫자를 바꾼다면?

```
myScore.testScore = 60;
myScore.test(); // 고장!
```

이렇게!!

### Public

public 접근 제어자는 클래스 안에 선언된 속성과 메서드를 어디서든 접근 가능하게 한다.

### Private

Private 접근 제어자는 클래스 외부에서 클래스의 속성과 메서드를 접근할 수 없다.

### Protected

Protected 클래스 코드 외부에서 선언된 속성과 메서드 사용할 수 없으나,
상속받은 클래스에서는 사용 가능!

# 제네릭

# 제네릭이란?

_타입이 들어간 언어(C#, Java … )에서 가장 많이 활용되는 문법 재사용성이 높은 컴포넌트를 만들 때 자주 활용 됨. 함수를 호출하는 시점에 타입을 지정하여 넘겨줄 수 있는 것_

**기존의 타입 선언**

```
function printInfo(info: string): string {
	return info;
}
```

**제네릭을 사용한 타입 선언**

```
function printInfo<T>(info: T): T {
	return info;
}
```

# 제네릭의 기본 문법

```
function printInfo(info) {
	console.log(info);
	return info;
}

printInfo(10); // 숫자 10
printInfo('하이'); // 문자열 하이
printInfo(true); // 진위값 true
```

타입스크립트에서 다음과 같이 선언하면?
=> 모든 타입이 any로 지정 된다.
=> 그래서 ! 제네릭으로 사용하기!!
**함수에서 전달받는 인자를 T로 지정해두고, 함수를 호출할 때 파라미터의 타입인 T의 값을 결정해서 넘겨주면 된다.(T를 내가 지정하는 타입으로 대체하는 거라고 생각하면 됨!)**

```
function printInfo<T>(info: T): T {
	console.log(info);
	return info;
}

printInfo<number>(10);
printInfo<string>('하이');
printInfo<boolean>(true);
```

이런식으로!

# 기본 타입 정의 방식과 제네릭의 차이점

## 1. 함수와 제네릭

기존에 함수를 정의하는 방법에 따른다면 아래와 같이 정의할 수 있다.

```
function printInfo(info: string) {
	console.log(info);
	info.split('').reverse().join(''); // string의 내장 메소드 사용 가능
	return info;
}

printInfo('a');

printInfo(10); // string 타입이 아니라 에러 발생
printInfo(true); // string 타입이 아니라 에러 발생
```

함수의 내부에서 해당 타입의 내장 메소드, 속성들에 접근하여 사용 가능

다른 타입에도 동작하게 하려면
=>

```
function printStrInfo(info: string) {
	console.log(info);
	return info;
}

function printNumInfo(info: number) {
	console.log(info);
	return info;
}

printStrInfo('a');
printNumInfo(10);
```

💡 동일한 로직임에도 불구하고 타입이 다르기 때문에 타입에 따른 함수를 각각 선언해주어야 한다.

중복되는 코드도 늘어남, 가독성도 좋지 못함 → **유지보수가 어려워진다!**

### 유니온 타입을 사용해서 해결하면 되지 않나요?🤔

넵! 유니온 타입을 이용해서 여러 타입을 인자로 받을 수 있도록 구현하면 해결 가능 !

```
function printInfo(info: string | number) {
	console.log(info);
	return info;
}

printInfo('a');
printInfo(10);
```

이렇게!! 인자로 전달하는 과정에서의 타입에 대해서는 해결이 가능!
하지만, 함수 내부에서 전달받은 인자로 어떠한 로직을 작성할 때 문제가 발생한다.

### 그래서 제네릭을 활용하면 된다!!

1. 타입 제한을 통한 해결
2. 반환값에도 제네릭을 지정하여 해결

### 화살표 함수에서 제네릭 사용하기

```
const toArr = <T>(a: T, b: T): T[] => {
	...
}
```

### 하나의 함수에서 제네릭을 여러개 지정해서 사용할 수 있을까?

=> 가능합니다 !

```
function createTuple<T, U>(v1: T, v2: U): [T, U] {
	return [v1, v2];
}

const t1 = createTuple<string, number>('hi', 2);
```

## 2. 인터페이스에 제네릭 선언하기

```
interface Choice<T> {
	value: T;
	selected: boolean;
}

const langChoice: Choice<string> = {value: 'ko', selected: false};
const numChoice: Choice<number> = {value: 10, selected: false};
```

이렇게! 제네릭을 이용하여 인터페이스를 선언하게 되면,바뀔 수 있는 value값에 대해 대비할 수 있다.

제네릭 자체에 리터럴 객체 타입도 할당 가능

```
interface Album<T> {
	singer: string;
	price: number;
	option: T; // option 속성에는 다양한 데이터 자료가 들어온다고 가정
}

// 제네릭 타입에 객체 할당
const album1: Album<{ photoCard: string; draw: boolean }> = {
	singer: 'day6',
	price: 100000,
	option: { photoCard: '영현', draw: false },
}

const album2: Album<string> = {
	singer: 'aespa',
	price: 5000,
	option: 'good',
}
```

## 3. 제네릭 클래스

인터페이스와 동일하다.

```
class GenericCalc<T> {
	num1: T;
	num2: T;
	sum: (x: T, y: T) => T;
}

let sumAnswer = new GenericCalc<number>();
```

## 4. type alias와 제네릭

```
type MyType<T> = T[] | T;

const number_arr: MyType<number> = [1,2,3,4,5];
const number_num: MyType<number> = 12345;

const string_arr: MyType<string> = ['1', '2', '3', '4', '5'];
const string_str: MyType<string> = '12345';
```

# 타입 제한

**제네릭**을 좀 더 **엄격**하게 쓰고 싶다거나, **더 많은 옵션을 지정**하여 사용하고 싶은 경우 **타입 제한**을 사용한다.

**반환된 값**에 대하여 해당 타입이 제공하는 메소드들에 접근하는 것 가능

```
function printInfo<T>(info: T): T {
	return info;
}

const info = printInfo<string>('hi');
info.length // 에러 발생하지 않음
```

### 만약, 제네릭으로 지정된 함수 내부에서 특정 타입에 대한 메소드를 사용하려했을때 에러가 발생했다면? 이유는 무엇일까

```
function printInfoLength<T>(info: T): T {
	info.forEach(str => console.log(str)); // 에러 발생!

	return info;
}

printInfoLength<string[]>(['hi', 'my','name', 'is']);
```

이유는 간단하다 ! 함수가 호출될 때 어떤 타입이 T로 지정되어 넘어올지 모르기 때문!

## 이에 대한 해결 방법

### 1. 타입 제한으로 해결하기

T가 배열일 것이다 라는 힌트를 주어서 내부에서 접근 가능하도록 구현한다!

```
function printInfoLength<T>(info: T[]): T[] {
	info.forEach(el => console.log(el.length));

	return info;
}

const strArrLength =  printInfoLength<string>(['hi', 'my','name', 'is']);
const numArrLength =  printInfoLength<number>([0, 1, 2, 3]);
```

### 2. 정의된 타입으로 타입 제한하기

💡 T에 타입을 미리 알려주는 것이 아닌 **정의된 타입**을 사용해서 타입을 제한한다!

인터페이스로 타입을 지정해두고, 해당 타입을 **extends**하여 전달하기 !

이렇게 하면 T가 무엇이 올진 모르더라도 **length라는 속성을 사용할 수 있음** 알려주는 것

```
interface LengthType {
	length: number;
}

function printInfoLength<T extends LengthType>(info: T): T {
	console.log(info.length); // 에러 발생하지 않음!

	return info;
}

printInfoLength('hello 나는 문자열'); // length가 메소드로 적용됨
printInfoLength({ length: 10 }); //length를 가진 객체도 전달 가능!

printInfoLength({ len: 10 }); //에러 발생 len이라는 값이 없기 때문 !
printInfoLength(10); // 에러 발생 number에는 length 내장함수가 없기 때문 !!
```

### 3. keyof를 사용하여 제한하기

정의한 인터페이스에 있는 key값만을 인자로 전달받겠다고 함수를 제약할 수 있다.

```
interface FoodCart {
	name: string;
	price: number;
	quantity: number;
}

function getFoodCartOption<T extends keyof FoodCart>(foodOption: T): T {
	return foodOption;
}

getFoodCartOption<string>('a'); // 에러 발생
getFoodCartOption('name');
```

## 조건부 타입

_조건부 타입이란 입력된 제네릭 타입에 따라 타입을 결정하는 기능을 말한다. 삼항연산자를 통해서 조건부로 타입을 지정해줄 수 있다!_

```
// 제네릭이 number이면 넘버배열, 아니면 문자열배열
type IsNumType<T> = T extends number ? number[] : string[];

type numArr = IsNumType<number>; // type T1 = number[]
type strArr = IsNumType<string>; // type T2 = string[]

const a: numArr = [1000, 2000, 3000];
const b: strArr = ['왕호은', '권혜인', '신수연'];
```

```
// 제네릭 T는 `boolean` 타입으로 제한.
// 제네릭 T에 true가 들어오면 number 타입으로, false가 들어오면 string 타입으로 data 속성을 타입 지정
interface isDataNum<T extends boolean> {
   data: T extends true ? number : string;
   isNum: T;
}

const num: isDataNum<true> = {
   data: 1999, // Number
   isNum: true,
};

const str: isDataNum<false> = {
   data: '문다현', // String
   isNum: false,
};
```
