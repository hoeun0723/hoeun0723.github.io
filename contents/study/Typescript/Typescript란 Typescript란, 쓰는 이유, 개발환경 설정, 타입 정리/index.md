---
date: '2023-10-20'
title: '[Typescript] Typescript란? / 쓰는 이유 / 개발환경 설정 / 타입 정리'
categories: ['공부', 'Typescript']
summary: 'Typescript란? / 쓰는 이유 / 개발환경 설정 / 타입 정리 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# Typescript란?

Typescript는 Javascript에 타입을 부여한 언어이다. MicroSoft에서 개발,유지 중인 오픈 소스 프로그래밍 언어이며 문법은 꽤나 엄격한 편이다.

Typescript는 Javascript의 엔진을 사용하기 때문에, 실행 시 Javascript로 컴파일되어 동작한다. (컴파일 시, Javascript 파일을 생성)

- 결국, Typescript는 Javascript의 확장버전이며, 기존의 Javascript 엔진에서 실행가능하다.

> 타입스크립트는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이다. 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다. C#의 리드 아키텍트이자 델파이, 터보 파스칼의 창시자인 Anders Hejlsberg가 개발에 참여한다. 클라이언트 사이드와 서버 사이드를 위한 개발에 사용할 수 있다. 타입스크립트는 자바스크립트 엔진을 사용하면서 커다란 애플리케이션을 개발할 수 있게 설계된 언어이다.자바스크립트의 슈퍼셋이기 때문에 자바스크립트로 작성된 프로그램이 타입스크립트 프로그램으로도 동작한다. 타입스크립트에서 자신이 원하는 타입을 정의하고 프로그래밍을 하면 자바스크립트로 컴파일되어 실행할 수 있다. 타입스크립트는 모든 운영 체제, 모든 브라우저, 모든 호스트에서 사용 가능한 오픈 소스이다. - 위키 백과 -

<br/>

# Typescript를 쓰는 이유 (장점)

### 컴파일 언어 + 정적 타이핑 제공을 통한 에러 사전 방지

Javascript는 자료형에 대한 타입은 존재하지만, 변수에 타입이 정해져 있지 않는다. (런타임에서 오류를 발견할 수 있는 동적 타입 언어이다.)
하지만, Typescript는 정적 타입의 컴파일 언어로, Typescript complier 또는 babel을 통해 Javascript 코드로 변환된다.

=> 코드 작성 단계에서 type을 체크하여 오류 예방이 가능하여 디버깅 시간 단축
=> 코드 유지 보수성 상승
=> 미리 타입을 결정하기에 실행 속도가 매우 빠름

<br/>

### 유지보수가 용이하여 협업에 도움 / 안정성

시간이 지나 자신의 코드를 수정하거나 다른 사람의 코드를 보거나, 다수의 사람이 프로젝트에 참여하게 되는 경우,
변수와 함수들에 어떤 타입이 어떻게 들어가야 하는지(어떤 타입의 값을 리턴해야하는지, 주석을 세세히 단 것과 마찬가지이다)를 파악할 수 있는 것은 물론, 전체 코드의 흐름을 이해하는데 좋다.

실제로 Javascript를 활용한 프로젝트 진행 시 type이 작성 되어 있지 않아, 함수나 변수 모두 구분이 어려웠다. js-docs를 활용해서 이 문제점을 해결하긴 했지만, Typescript를 반영하면 빠르게 해결 될 일이었다.

<br/>

### 슈퍼셋

![](https://velog.velcdn.com/images/hoeun0723/post/22461bd3-787a-45a4-a730-005e425fa26d/image.png)
Typescript는 Javascript와 100% 호환이 가능하고,
이 외에 클래스,인터페이스 등 객체지향 프로그래밍 패턴을 제공한다.

자바스크립트의 단점은 줄여주고 대신 더 좋은 기능들을 감싼 형태라고 보면 된다.

### 결론은?

1. 높은 수준의 코드 탐색과 디버깅 : 사전에 에러를 발생시켜 버그 제거
2. Javascript의 호환
3. 강력한 생태계 (대부부의 라이브러리 TS 지원 및 VSCode)
4. 점진적 전환 : 특정 기능에만 TS 도입 가능
5. 유지보수의 용이성과 개발의 편리성 (VSCode의 자동완성, 협업에 유리)

~~=> 이렇게 좋은데 안 쓰는 이유는 !?! 안 쓰는게 아니라 못쓰는거에요.. 얼른 공부해야지...
~~
![](https://velog.velcdn.com/images/hoeun0723/post/a07f5d8d-63ac-4071-8ae7-7f379e45f543/image.png)

<br/>

# Typescript 개발 환경 설정

### 1. 프로젝트 폴더 및 ts 파일 생성(index.ts)

```
function sum(a: number, b: number): number{
    return a + b;
}
console.log(sum(10, 20));
```

### 2. NPM 설정파일 생성 및 ts 설치하기

```
npm init -y
```

```
npm install typescript -D
```

### 3. ts 컴파일 명령어 실행하기

```
npx tsc -v //설치 확인

//실행!!
npx tsc 타스파일명.ts
```

### 4. 컴파일 결과물 확인하기

```
function sum() {
    return a + b;
}
console.log(sum(10, 20));
```

[더 자세한 타스 컴파일러 사용법 보러가기](https://www.daleseo.com/tsc/)

# type 지정 방법

변수 뒤에 : 을 붙이고 그 뒤에 타입 이름을 추가하면 된다.

### js와 ts 비교

**js**

```
const taco = 'typescript study';
```

**ts**

```
const taco : string = 'typescript study';
```

**정리하면 !**

```
const(var,let) 변수이름 : 변수 타입 = 나는 변수라네호호
```

_ps. 코드는 SOPT 33기 TS스터디 1주차에서 가져왔습니다 🔥_

# 기본 Type

기본 type에는 12개가 있으며, 기본 type이 아닌 다른 type을 할당한 경우, typescript는 에러를 뱉어냅니다.

1. string
   javascript의 문자열을 의미하는 type을 의미한다.

2. number
   특정 변수가 숫자만 취급한다면 number 타입을 사용한다.

3. boolean
   진위값(true, false)만 취급하는 변수에는 boolean 타입을 사용한다.
   let isLogin : boolean = false;

4. object
   객체 유형의 데이터를 취급할 때는 사용
   const hero: object = {name: 'captain',age:100};

5. Array
   두가지 방식으로 선언 가능
6. 제너릭 배열타입 쓰기 : Array<배열의 데이터 타입>
7. 배열 요소들을 나타내는 type 뒤에 [] 쓰기 : 배열의 데이터 타입[]

```
//문자열 배열
let companies: Array<string> = ['네이버', '삼성', '인프런']
let companies: String[] = ['네이버', '삼성', '인프런'];

//숫자열 배열
let cards: Array<number> = [1,2,3,4];
let cards: number[] = [13, 7,3,4];

//배열은  foos:Array<Foo> 같은 형식 보다  foos:Foo[] 처럼 명시하세요.
//[]를 잘 감지할 수 있어서 무언가가 배열임을 알아차리기 더 쉬워집니다.
```

6. tuple
   요소의 타입과 개수가 고정된 배열을 의미한다.(요소들의 타입이 모두 같을 필요 X)

```
let items: [string, number] = ['hi',1];
```

```
let person: [string, number ];
person = ["minseo", 22];

console.log(person[0].substring(1)); // 성공
console.log(person[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.
```

7. any
   아무 데이터나 취급하겠다는 의미이며 알지 못하는 타입을 표현할 때 사용한다.
   -> typescript에서 javascript의 유연함을 취하려고 할 떄 사용하는 타입
   (사실 typescript에서 any는 거의 안 쓰는 것이 좋다 ! type을 명확히 하기 위해 쓰는건데 any를 써버리면 결국엔 똑같기 때문에.)

```
let Name: any = 'Seojin'
Name = 100;
```

8. 9.null과 undefined
   둘 다 각각 자신의 타입 이름으로 undefined, null로 사용한다.
   다른 모든 타입의 하위 타입이다.
   이때, --strickNullChecks를 허용하면, any와 각 자신 타입에만 할당 할 수 있다.

9. Enum
   특정 값의 집합(상수)를 의미하는 타입이며 enum은 0부터 시작하여 멤버들의 번호를 매기며, 임의의 숫자나 문자열 할당이 가능하다.

```
enum Color {Red = 1, Green, Blue}
const colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.
```

11. void
    결과 값을 반환하지 않는 함수에 설정
    return이 없거나, return이 있음에도 반환값이 없는 경우 void로 지정한다.
    즉, undefined와 null을 가지는 함수의 타입이다.

```
function warn() :void{
	console.log("This is my warning message")
}

let unusable: void = undefined;
	return;
}
```

12. Never
    함수의 끝까지 절대 실행될 수 없는 (i.e 무한 루프) 함수의 타입을 말한다.
    또한, 어떠한 값도 가질 수 없는 함수도 never 타입에 포함된다.
    따라서 Never 타입은 number, string 뿐만 아니라 null, undefined, any 등 어떤 값도 할당할 수 없다.

```
function iwillNotFinish() :never{
	while(true){
		...
	}
} //무한루프의 경우

function throwError():never{
	throw new Error(`omg,,,`);
} //현재 함수는 error만 계속해서 반환하고 있으므로, never 타입에 해당한다.
```

이 또한 스터디 1주차에서 가지고 온 자료인데, 평소 헷갈렸던 type들을 다시 한번 더 정리할 수 있어서 좋았던 거 같다.

이번 TS 스터디를 들어보게 되었는데, 앞으로의 TS 공부가 너무 기대되고, 내 부족한 실력을 잘 다지고 갔으면 좋겠다는 생각을 했다 !!! 앞으로의 TS 공부 화이팅 !!!🔥
