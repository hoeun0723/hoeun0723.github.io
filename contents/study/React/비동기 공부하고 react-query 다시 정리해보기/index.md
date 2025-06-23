---
date: '2024-07-29'
title: '[React] 비동기 공부하고 react-query 다시 정리해보기'
categories: ['공부', 'React']
summary: '비동기와 react-query 에 대하여 학습하고 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

리액트 쿼리를 들어보셨나요 ??
서비스제작할때 api 서버로 부터 데이터를 받아올때 해당 라이브러리를 사용했는데요,

react-query 는 서버(api)에서 가져온 데이터를 웹 브라우저 앱에서 사용하기 쉽게 도와주는 기술입니다.

서버는 클라이언트에게 데이터베이스에 있는 정보를 전달해주는 역할을 하는데요, 여기서 서버는 api 서버, 클라이언트는 웹 브라우저에서 실행되는 우리가 작성한 리엑트 앱을 의미합니다.

---

### 비동기에 관하여

react-query에 앞서서 비동기에 관해서 약간 설명을 드리고 싶은데요. 일단 좋은 참고 자료부터 밑 토글에 넣어두겠습니다.

- 좋은 참고 레포 :
  https://github.com/junh0328/prepare_frontend_interview/blob/main/js.md#비동기-프로그래밍

**동기와 비동기의 차이점에 대해서 알고 계시나요 ??**

**동기**는 ⇒ 현재 실행 중인 테스크가 종료될 때까지 다음에 실행될 테스크가 대기하는 방식을 동기! 처리 방식이라고 해요. (synchronous)

**비동기**는 ⇒ 현재 실행 중인 테스크가 종료되지 않은 상태라 해도 다음 테스크를 곧바로 실행하는 방식을 비동기! 라고 하구요. (asynchronous)

그래서 비동기의 대표적인 사례들이 바로

1. setTimeout / setInterval
2. HTTP 요청 (aysnc/await, Promise,fetch 등등..)
3. 이벤트 핸들러 (버튼 클릭시! 페이지 로딩 시! 등등)

가 있어요 !

저희가 작성하고 있는 프론트 코드들은 변수나 함수가 생성이 될때마다

**“실행컨텍스트”**라는 것이 동시에 생성되어져요.

생성된 “실행컨텍스트”들은 윗줄부터 아랫줄까지 순차적으로 **“콜스택”**이라고 불리어지는 스택에 쌓이게 됩니다.

스택의 특징이 무엇일까요 !! 바로 LIFO(last in first out)라는 것인데요!

스택에 쌓이면서 첫번째 순서부터 차례대로 실행되고, 다 실행되면 맨 마지막 실행컨텍스트부터 하나씩 pop 이 됩니다.

이게 바로 저희 코드가 작동하는 방식이에요 !!

그럼 여기서 비동기 코드들은 어떻게 실행이 되어질까요 ??

바로 테스크 큐 라는 queue가 존재하는데요!

콜스택에 동기적인 코드들이 쌓이다가, setTimeout 같은 비동기 코드가 실행이 되어지면, 해당 비동기적인 코드들은 테스크 큐에 저장이 되어집니다.

그러다가 비동기적인 코드들이 실행시점이 되면! 이벤트 루프라는 친구가 테스크 큐에 있던 비동기적인 작업들을 콜스택으로 옮겨줘요. 그러면 콜스택에서 실행이 되어지고 pop 되어지는 과정을 거친답니다.

### Ajax

비동기를 배웠으면 비동기 코드 종류가 다양하다라는 것을 알 수 있었을텐데요.

Ajax에 대해서 먼저 공부해봅시다.

사실 setTimeout과 HTTP요청과는 성격이 약간 다른 비동기 코드라고 할 수 있어요. setTimeout은 클라내부에서 비동기적으로 작동하는 방면에 HTTP요청은 서버로 부터 어떠한 데이터를 받아오고 보내곤 하죠.

Ajax는

**① 브라우저가**

**② 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식**

을 말합니다.

즉, api 서버로 비동기적인 데이터 요청이 이루어지는 것을 모두 Ajax라고 한다는 것이에요.

Ajax의 등장 전에는 지속적으로 HTML태그를 계속해서 받아오면서 전체 HTML 파일을 렌더링 하는 과정을 거치곤 했는데,

Ajax의 등장으로 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없은 부분까지 다시 렌더링하지 않고, 변경할 필요가 있는 부분만 한정적으로 렌더링하는 방식이 가능해졌어요.

즉,

1. 불필요한 데이터 통신 발생 X

2. 리렌더링 없어지면 화면 깜박이는거 X

3. 비동기적인 요청이기에 블로킹 발생 X

가 되어진것이죠.

### 서버에도 상태가?

클라이언트가 서버에게 데이터를 요청하면 Ajax를 활용해 서버에서 데이터를 가지고 오곤 합니다. 근데 이 데이터를 서버의 상태. 라고 이야기 해요.

(클라이언트에서의 상태와는 다르다!)

서버는 특정 시점에 Ajax 요청을 받고 데이터베이스에서 해당 정보를 가지고와 서버의 상태값을 만들어냅니다. 그러고 해당 정보를 그대로 제공할 수 있지만 가공해서 전달하기도 해요.

**클라이언트 상태**

클라이언트에서 상태는 두가지가 있는데요.

1. 우리가 흔히 하는 클라에서 자체적으로 만드는 state
   1. 이건 UI 담당하는 부분으로 모달이 열리고 닫히는거 버튼 클릭 여부 화면 리사이징 여부 등등 메타 정보들을 담은 상태값
2. 서버에게 전달받은 값으로 만드는 state
   1. 서버 데이터들 즉, sever state ⇒ client state 를 의미함.

우리가 react-query를 상태관리 툴! 이라고 했잖아요 !!

그니까, 여기서 말했던 “상태”는 2번의 상태를 의미한 것이기 때문이에요.

2번 상태들은 주로 컴포넌트 생명주기를 파악한 후에 적절한 시점에 ajax 호출을 하고 서버에서 데이터를 받아와요.

그리고 useState를 사용할 경우 데이터를 불러와 setState호출을 통해 응답 당시의 server state를 component state로 감싸주곤 합니다.(useEffect 같은거로 실행이 되어지게끔 !!!)

---

상태관리 툴은 정말 다양한데,

외부 상태관리 툴로는

⇒ Redux, MobX, Zustand, Jotai, Recoil etc…

그리고 내부 상태관리 툴로는

⇒ Context API, useState etx…

등등이 있죠 !!!

우리가 어플이 너무 간단하다면 useState나 context API 만 사용해도 대부분의 상태들을 관리할 수 있을텐데, 복잡도가 올라가고 성능 향상에 대한 필요성이 생기는 시점이 예상되면,

이미 만들어진 상태 관리 도구를 선택하는게 필요하곤 해요.

기존에 Redux나 Mobx를 활용해서 해당 상태관리들을 지속해 나가고 있었지만, 너무나 복잡한 개념이기도 해서 처음 리액트를 사용하는 사람들이 어려움을 겪곤했대요.

하지만 우리가 지금 사용하고 있는 React-query는 hook 기반의 로직들로 되어 있어서 해당 컴포넌트에서 상태 값의 변경을 간편하게 파악하여 리렌더링 유발을 도와주곤 한답니다. 훨씬 다루기 간편해진것이죠 !

### 캐시

react-query를 사용하기 이전에는 state라는 용어는 암묵적으로 클라이언트 state를 가르켰대요.

server state가 없었다기 보다 client state 만으로도 관리해야할 부분이 많았던 거에요.

어떤 어려움이 있었냐면

지속적으로 어떠한 데이터가 바뀌어지는 웹페이지가 있다고 생각해봐요. 그러면 클라이언트는 그 데이터를 실시간적으로 계속해서 호출이 와야 했어요. 그리고 그 바뀐 값에 대하여 서버한테 다시 한번 더 통지를 받았어야 했겠죠?

근데 이런 과정이 클라이언트 뿐만 아니라 서버에서도 api 수정을 지속하며 이어나가줘야 했던 거에요.

그 뿐만 아니라, A페이지에 특정 컴포넌트에서 불러온 데이터를 페이지 전환하여 B페이지에서 재사용하기 위해서라면 A,B 페이지에서는 state store에 해당 데이터가 이미 존재하는지에 대한 로직이 각기 들어가 있어야 하고(재호출 방지), 해당 데이터의 유효성에 대한 로직을 추가로 작성해줘야했습니다.

이러한 불편함이 있었지만, react-query가 도입되고 나서부터는

데이터의 캐시 처리를 간편하게 할 수 있는 인터페이스를 제공해주었기에 어려움을 극복할 수 있었어요.

- 몇 초 이후에는 데이터가 유효하지 않은 것으로 간주하고 데이터를 다시 불러온다.
- 데이터에 변경점이 있는 경우에만 리렌더링을 유발한다.
- 유저가 탭을 이동했다가 다시 돌아왔을 때 데이터를 다시 불러온다.
- 데이터를 다시 호출할때 응답이 오기 전까지는 이전 데이터를 계속 보여준다. 필요에 따라서는 로딩바와 같은 대안 UI를 보여주기 위해 loading state를 기본적으로 제공한다.

이러한 특징을 가졌기에, 클라이언트와 서버의 상태 값을 일치시켜줘야 하는 요구사항에서 부가적으로 생길 수 있는 로직들을 리엑트 쿼리의 api와 인터페이스로 간단하게 해결할 수 있도록 도와주었답니다.

이게 바로 리액트 쿼리의 역사에요. 리액트 쿼리를 왜 사용하게 됐는지 부터 말해보았는데, 사실 이 내용을 먼저 말한 이유는 리액트 쿼리를 사용하기 이전에

완전 초창기인 ajax 호출이던.. fetch api던.. axios던.. 하나씩 다 해봤어야 했는데, 리액트 쿼리부터 냅다 알려준거 같아서 이렇게 이야기가 길어졌답니다.

단순히 더 빠르고 좋은 api 호출을 위해 상태관리툴을 사용하곤 하는데, 저는 개인적으로 다양한 좋은 기술들을 사용해보는것보다, 그 전에 기술들을 다 익혀보고 차례차례 공부해 나가는게 더 도움이 될 것이라고 생각해요. (실제로 제가 부족하다고 생각하는 부분이기도 하구요 !!)

그래서 네에 리액트 쿼리에 대한 설명을 요기까지 마치고 사용방법에 대해서 설명 드리도록 하겠습니다.

참고자료 :

https://github.com/junh0328/prepare_frontend_interview/blob/main/js.md#Ajax

https://www.youtube.com/watch?v=41tFNtwWE3o

# 리액트 쿼리 사용방법

### useQuery

useQuery를 이용해서 데이터 fetching을 할 수 있어요.

useQuery는 HTTP GET 요청을 할 때 주로 사용 되곤 하는데요!

useQuery는 queryKey, queryFb, options를 이용해서 코드를 작성할 수 있습니다.

queryKey는 Query를 unique하게 지칭할 배열,

queryFn은 Promise를 리턴하는 함수,

options는 다양한 옵션들을 전달할 수 있는 객체에요.

```
// QueryFn을 async/await를 이용해서 작성

const { data, error, isLoading } = useQuery(['getPost'], async () => {
  // getPost는 idx값을 받아서 Post 데이터를 가져오는 API
  const data = await getPost(1);

  return data;
});
```

```
// QueryFn을 Promise.prototype.then을 이용해서 작성

const { data, error, isLoading } = useQuery(["/getPost"], () =>
	getPost(1).then((res) => res)
);
```

```
// useQuery를 객체 형태로 작성

const { data, error, isLoading } = useQuery({
	queryKey: ["/getPost"],
    queryFn: () => getPost(1).then((res) => res),
    refetchOnMount: false
});
```

이렇게 async awiat를 이용해서, Promise 프로토타입을 이용해서, 그리고 객체형태로 작성할 수 있습니다.

저희는 주로 객체형태로 작성해서 썼죠??

(예시가 typescript인데, 데이터 type 명시가 사실은 너무 중요해서 예시를 typescript로 가지고 왔네요.. 그냥 타입이 추가적으로 있구나 !! 하고 보시면 될 거 같습니다.)

### useMutation

서버의 데이터를 변경할 때 사용.

HTTP POST, PUT, DELETE 요청을 할 수 있어요.

mutationFn은 queryFn처럼 Promise를 리텅하는 비동기 함수에요.

파라미터를 전달 받을 수 있는 특징을 가지고 있습니다 !!

mutationFn파라미터는 useMutation의 리턴값인 mutate 함수의 인자로 전달 됩니다.

mutationFn에서는 어떻게 동작할지 정의만 하고, mutate 함수를 통해 나중에 실행되는 것이에요.

```
// useMutation 기본 사용법
const { mutate } = useMutation((post: Omit<Post, "id">) => createPost(post), {
    onSuccess: () => { 	// mutate가 정상적으로 실행되면, 함수를 실행합니다.
		console.log("createPost success");
    },
    onError: () => { 	// mutate가 실패하면, 함수를 실행합니다.
    	console.log("createPost error");
    }
});


const post = {
	title: 'title from 123',
    body: 'body from 123',
    userId: 123
};

// useQuery처럼 정의된 함수가 바로 실행되는 것이 아니라, mutate 함수가 실행될 때 실행합니다.
mutate(post);
```

그외 다양한 부분은 공식문서를 읽어보며 사용하는 것이 좋을거 같습니다 ! 가장 기본이 되는 문법 두가지에요 ! useQuery와 useMutation이요!! 그외는 자유롭게 선택해서 사용하곤 해요. 엄청나게 다양한 기술들이 있답니다.

리액트쿼리 다양한 기능들 일부

```
const {
   data,
   dataUpdatedAt,
   error,
   errorUpdatedAt,
   failureCount,
   isError,
   isFetched,
   isFetchedAfterMount,
   isFetching,
   isIdle,
   isLoading,
   isLoadingError,
   isPlaceholderData,
   isPreviousData,
   isRefetchError,
   isRefetching,
   isStale,
   isSuccess,
   refetch,
   remove,
   status,
 } = useQuery(queryKey, queryFn?, {
   cacheTime,
   enabled,
   initialData,
   initialDataUpdatedAt
   isDataEqual,
   keepPreviousData,
   meta,
   notifyOnChangeProps,
   notifyOnChangePropsExclusions,
   onError,
   onSettled,
   onSuccess,
   placeholderData,
   queryKeyHashFn,
   refetchInterval,
   refetchIntervalInBackground,
   refetchOnMount,
   refetchOnReconnect,
   refetchOnWindowFocus,
   retry,
   retryOnMount,
   retryDelay,
   select,
   staleTime,
   structuralSharing,
   suspense,
   useErrorBoundary,
 })

 // or using the object syntax

 const result = useQuery({
   queryKey,
   queryFn,
   enabled,
 })
```

참고자료 :

https://cheolsker.tistory.com/61

# 리액트 쿼리 환경 세팅 (tanstack query)

1. 리액트 환경에서 react-query를 설치한다.

```
npm i @tanstack/react-query
yarn add @tanstack/react-query
```

TanStack Query 의 기능을 사용하기 위해 QueryClient 의 인스턴스를 생성하고 QueryClientProvider 를 최상단에서 감싸주고 QueryClient 인스턴스를 client props로 넣어 애플리케이션에 연결한다.

```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>

    <React.StrictMode>

      <App />

    </React.StrictMode>

  </QueryClientProvider>

);
```

이렇게 QueryClientProvider로 감싸주면 준비는 끝납니다!

참고자료 :

https://jjang-j.tistory.com/55

https://velog.io/@seunghwan7305/리액트-쿼리-튜토리얼-1

## query key 값 관리에 따른 react-query 폴더 관리법

그렇게 하고 난뒤 query key값들을 어떻게 관리 할지를 결정하곤 하는데,

이는 제가 작성한 노션을 함께 참고해두겠습니다!

[react-query 가장 최적의 코드가 무엇일까](https://www.notion.so/react-query-2fb78852deda4786ab823e07c4faddbe?pvs=21)

함께 작성한 블로그 글도 올려둘게요 !

https://velog.io/@hoeun0723/Tanstack-query-react-query-v5

총 두가지 방법이 있는데, 간단하게 소개 하자면

1. query key 값을 한번에 모아서 관리 하자
2. query key 값이 아닌 queries 폴더를 hooks로 관리 하자.

였는데, 둘다 가독성이나 재사용성을 높이기 위한 방법이고, 우리는 api 명세서를 확인 했을 때 한 도메인에 더 많은 api가 들어있는 경우인데,

그럴 경우에 가독성이 떨어지게 되는 1번 방식을 선택하지 않고, 2번 방식을 활용하여 queries 코드를 작성하곤 합니다.

(하지만 1번 방식도 좋은 방식이라고 생각합니다. get method 가 많고 query key를 한번에 확인해야하는 경우가 있다면)

## data, isLoading, isFetching

isLoading과 isFetching의 차이점은

**isLoading**

: 서버에 요청을 보내는 중을 나타내며 boolean을 나타낸다.

**isFetching**

: 데이터 요청 중을 나타내며 boolean을 반환한다.

이에요.

`react-query`의 경우 caching 기능이 있어서, `queryKey`를 사용해 반환된 데이터를 캐싱하는데, 만약 캐싱된 데이터가 있을 경우 해당 데이터를 반환하기까지의 시간동안 `isLoading`은 `false`가 되고 `isFetching`은 `true`가 됩니다.

참고자료 :

https://velog.io/@dnjsdn96/React-react-query-사용하기

# 전할 말

사실 이 외에 react-query에 모든 기능을 다루려면 너무 길어질거 같아 일단 기본적인 왜 사용하는지 그리고 비동기 관련 개념 그리고 세팅하는 방법 그리고 key 값 관리를 위해 폴더 구분하는 방법 등등에 대해서만 적어보았어요.

추가적인 기능에 대해서는 일단 useQuery와 useMutation 먼저 제대로 작성하는 연습을 해보고, Loading그리고 error 처리 등등의 기본적인 기능들을 차례차례 공부해 나가면 좋을 거 같습니다 !!
