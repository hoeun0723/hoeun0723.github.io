---
date: '2024-08-05'
title: '[WEB] CORS (origin, SOP, 3가지 해결법)'
categories: ['공부', 'WEB']
summary: 'CORS (origin, SOP, 3가지 해결법) 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# CORS

프로젝트를 진행하며 api 연결을 할때

```
No 'Access-Control-Allow-Origin'header is present on the requested resource.
```

라는 내용이 담겨 있는 오류를 발견한 경우가 많이 있을 것이다.

이런 내용이 담긴 오류가 발생하는 이유는 바로 CORS와 관련이 있는데, CORS에 설명하기 앞서, origin 개념에 대해서 말해보겠다.

### origin

origin 은

```
[프로토콜]://[Host의 IP 주소 또는 URL]:[포트번호]
```

1.프로토콜(HTTP, HTTPS, FTP, ...) 2. URL(a.com, b.com, cat.co.kr, ...) 3. 포트번호(80, 433, 8080, ...)
이 3가지 개념이 합쳐진 것이라고 할 수 있다.

그래서 위 3가지 항목 중에 한가지만 달라도 다른 origin 이라고 할 수 있는 것이다.

### 동일 출처 정책(Same-Origin Policy, SOP)

대부분의 웹 브라우저는 SOP 보안 정책을 준수하는데, 이는 내가 접속한 origin 에서 다른 origin 에 요청한 것을 기본적으로 제한해서 해커로부터의 공격에 방어하는 정책이라고 할 수 있다.

하지만 모든 외부 origin 에서 온 자원들을 사용할 수 없게 했다면 CDN과 같은 것을 사용하기 어려울 수 있기에 특정 HTML Tag
(ex.

```
<img>, <script>, <link>, <iframe>
```

)
은 다른 origin 으로 부터 온 것을 임베딩 할 수 있게 허용해준다.

이렇게 개발을 하다보면 외부 origin 으로부터 자원을 불러오고 싶은 경우가 있는데, 이러한 이유 때문에 CORS가 생겼다. 다른 origin의 데이터를 읽고 싶으면 CORS 표준을 지켜서 내 사이트로부터의 응답에 다른 origin 도 허용해줘! 라고 할 수 있게 된 것이다.

### 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

CORS를 사용해서 하나의 Origin만 읽는게 아니라 내가 명시한 다른 신뢰 가능한 Origin으로부터 받은 리소스를 읽어드릴 수 있다.

CORS는 Simple Request일 수도 있고 Preflight Request일수도 있는데,
**Simple Request인 경우**

> HTTP Method가 GET, POST, HEAD 중 하나
> Content-Type이 아래 중 하나이다
> text/plain
> application/x-www-form-urlencoded
> multipart/form-data

**Preflight Request인 경우**

> Simple Request가 아닌 경우
> 다른 Origin 요청을 보낼 때 미리 내 요청을 받을 수 있는지 확인하기 위해서 사전 요청(Preflight Request)을 보낸다. 그러고 나서 가능하면 나의 실제 요청을 보내고 응답을 받는다.

이러한 CORS 에러를 해결하는 방법은 총3가지 정도가 있다.

## CORS 에러 해결하는 방법 3가지

### 서버 측에서 해결하기

1. 브라우저가 받은 요청이 어떤 Origin에서 시작됐는지 헤더를 추가한다.
2. 서버는 받은 CORS 요청이 유효한지 아닌지 Access-Control-Allow-Origin 헤더로 응답해준다.
   의 과정을 거친다. 그래서 실제로 서버 측에서 header에 보면 CORS를 위해

Access-Control-Allow-Origin : "내가 허용하고 싶은 origin 혹은 전부면 \*"
이런식으로 작성을 해둔다. (api 요청 시 네트워크 탭을 보면 확인 할 수 있다.)

또한 origin 뿐만 아니라, method 나 headers도 허용해줄 때,

```
"Access-Control-Allow-Headers" : "Content-Type",
"Access-Control-Allow-Origin": "https://www.codinggroot.tistory.com",
"Access-Control-Allow-Methods": "OPTIONS, POST, GET"
```

이런식으로 적어주며 CORS 에러를 해결하곤 한다.

### proxy를 활용하여 클라 측에서 해결하기

이 방식은 서버 측에서 CORS 에러를 해결할 수 없고, 프론트에서 로컬로 개발을 진행 중일때 사용하기 좋은 방식인데, (프론트 배포를 했다면 nginx 서버에서 cors 설정을 따로 해줘야한다.)

proxy 서버를 활용하여 호출하는 origin 이 요청을 받는 쪽의 origin 과 동일하게 설정해주면, 다른 origin 으로 인해 생기는 오류를 우회하여 해결할 수 있게 된다.

나는 이 proxy를 라이브러리를 설치하여 사용하곤 했었는데, Node.js를 사용하면 webpack 번들러 내부에서 proxy를 설정하는 방법이 있다고 한다.

### CORS를 끄기

마지막 방법은 CORS를 끄면 된다고 한다. 그저 오류가 안 나는 방법은 오류를 안 보면 된다.... 느낌이랄까..
보안적으로 정말 좋지 않은 경우이기 때문에 단순히 api 통신 확인이나 아니면 뭔가 아주 잠깐 확인이 필요할때만 해보도록 하자.

## 마무리

CORS 에러가 날때마다 그저 해결하기에 급하고 서버측과 클라 측에서 해결하는 방법에 대해서 구별을 하지 않았던 거 같다.
origin 개념에 대해 이해하고 해결하는 방법에 대해서 하나하나 신중하게 공부하다 보니 이에 대한 이해를 할 수 있었다.

**너무너무 훌륭한 참고자료 : **
**https://coding-groot.tistory.com/91**

이 글을 많이 참고하였습니다!

실제 토스 cors 해결 사례
https://docs.tosspayments.com/resources/glossary/cors
