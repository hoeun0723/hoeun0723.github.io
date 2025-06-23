---
date: '2024-01-19'
title: 'Tanstack-query / react-query v5'
categories: ['FE', '문제해결', 'tanstack-query', 'react-query']
summary: 'Tanstack-query / react-query v5에 대하여 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# 데이터 패칭 라이브러리

react-query 는 우리가 알고 있는 데이터 패칭을 도와주는 유명한 라이브러리 중 하나 이다.

useEffect를 무분별하게 활용하여 데이터 요청을 하던 부분을 react-query는 좀 더 효율성 있고 가독성이 높게 도와준다.

이번 SOPT 33기 활동을 하며 많은 라이브러리를 고민하던중, 데이터 패칭 부분에서 react-query를 사용하게 되었고, react-query에 대해 고민하고 공부하게 되었다.

# react-query란?

React-Query는 데이터를 불러오고 캐싱하며, 서버 데이터와의 동기화 및 업데이트 하는 작업을 개발자가 쉽고 간단하게 할 수 있도록 도와주는 라이브러리이다.
즉, ‘비동기 로직을 쉽게 다룰수 있게 해준다’ 라고 이해하면 된다.

**장단점 및 핵심기능**

- 데이터 캐싱 기능
- 동일한 데이터에 대한 중복 요청을 제거
- 백그라운드에서 “오래된” 데이터 업데이트
- 데이터 업데이트를 최대한 신속하게 반영
- 페이지네이션 및 데이터 지연 로드와 같은 성능 최적화
- 서버 상태의 메모리 및 가비지 수집 관리
- 구조적 공유로 쿼리 결과 메모하기

여기서! 캐싱이란?
=> 특정 데이터의 복사본을 저장하여 이후 동일한 데이터의 재접근 속도를 높이는 것

프로젝트 규모가 커지면, 서버에서 관리할 데이터와 클라에서 관리할 데이터가 분리될 필요성을 느끼고, recoil이나 redux 를 활용해서 하는 전역 상태관리 뿐만 아니라 서버 데이터 관리를 할 필요도 있어진다.

# useQuery / useMutation

### useQuery

Server State를 읽어오는 hook (read)
그래서 보통 GET method인 경우에 이걸 활용하여 데이터 패칭을 한다.
useQuery의 반환 값을 활용하여 성공, 실패 처리 가능 ( isFetching, isLoading, error, state 등 )
useQuery 첫 번째 인자인 QueryKey에 따라서 캐싱 처리. 캐싱된 쿼리의 QueryKey와 동일한 요청을 하는 쿼리는 같은 것으로 인식하여 fetch하지 않고 캐싱된 쿼리 그대로 사용.

> 여기서 QueryKey는 user
> string, array, object 등 유니크한 값이면 된다.
> array일 경우 순서가 서로 바뀌어도 unique
> object는 순서가 바뀌면 같은 값으로 인식
> 두 번째 인자 fetcher는 프로미스를 반환하는 함수여야 한다.
> 세 번째 인자 options에는 캐시 만료 시점, refetch 시점, 초기값 등을 설정할 수 있으며 생략 가능하다.

### useMutation

Server State를 변경시키는 hook (create, update, delete)
그래서 보통 GET 외에 다른 method 를 가진 api 요청일 경우에 사용한다.
return 값 중 mutate는,mutationFn 을 trigger하는 함수이다.
객체로 받은 variables를 mutationFn에 넘겨준다.

# query key 값 관리에 대하여

이렇게 좋은 react-query에도 단점이 존재하는데, `컴포넌트 내부에서 사용되기 때문에 프로젝트 내 규칙을 미리 설립하지 않으면 컴포넌트 종속적인 코드가 될 우려가 있다.` 이다.

저번 프로젝트 진행 시 react-query key값을 어떻게 관리 할 것이냐에 대해서 회의를 했었기 때문에 이번 프로젝트에서도 query key 값 관리를 많이 고민 한 거 같다.

고민 한 내용을 담은 노션 정리 링크 : https://walnut-stinger-e4f.notion.site/react-query-2fb78852deda4786ab823e07c4faddbe?pvs=4

총 두가지 방법이 있었는데, 간단하게 소개 하자면

1. query key 값을 한번에 모아서 관리 하자
2. query key 값이 아닌 queries 폴더를 hooks로 관리 하자.

였는데, 둘다 가독성이나 재사용성을 높이기 위한 방법이었고, 우리는 api 명세서를 확인 했을 때 한 도메인에 더 많은 api가 들어있는 경우 였는데,
그럴 경우에 가독성이 떨어지게 되는 1번 방식을 선택하지 않고, 2번 방식을 활용하여 queries 코드를 작성하게 되었다.

(하지만 1번 방식도 좋은 방식이라고 생각한다. get method 가 많고 query key를 한번에 확인해야하는 경우가 있다면)

# Suspense / ErrorBoundary

이번 react-query 가 업데이트 되면서, suspense와 erroeboundary의 활용 방식이 달라졌고, 해당 내용을 조금 적어보려 한다.

### undfined

typescript를 활용하다보니, 받아 온 데이터의 타입을 다 지정해줘야했고,

suspense 처리를 마지막에 할 생각 이었던 우리는 옵서녈 파라미터를 활용하거나 조건문을 활용해서 undefined 처리를 해줘야했다.

하지만, 하나하나 undefined 관련 처리를 하게 되면, 필수 적으로 들어가야 하는 값들에서의 undefined가 처리 될 경우 가 있었고, 골치 아파 하던 참에 suspense를 한번에 설정해주자는 생각을 했다.

### suspense를 활용하여 로딩 화면 보여주기

react-query 내부에 suspense를 사용하려던 이유는 데이터 패칭 시에 로딩 되는 경우에 loading view 를 보여주게 하기 위해서 였다.

tanstack-query에서 기존 버전과 어떻게 사용법이 달라졌는지 작성해보겠다.

`기존`
QueryClientProvider를 최상단에 감싸준 후,

```
const queryClient = new QueryClient({
 	 defaultOptions: {
   	 	queries: {
     	 suspense: true,
   	 	},
  	},
})
```

```
	<Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
       <GlobalStyle />
    </Suspense>
```

해당 부분을 추가하여 주는 방식이었다. defaultOptions에 suspense의 boolean값 을 설정해주는 !!
하지만, v5로 업데이트 된 후,

`현재`

```
 	<Suspense fallback={<Loading />}>
       <RouterProvider router={router} />
       <GlobalStyle />
	</Suspense>
```

```
const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: [MY_GIFT_QUERY_KEY[0], roomId],
    queryFn: () => getMyGift(roomId),
  });
```

suspense로 감싸주는 것은 동일하지만, query 함수를 작성할때, useQuery가 아닌, useSuspenseQuery를 사용해주는 방식이었다.

업데이트가 되면서 boolean 값이 아닌, useSuspenseQuery로 변경하여 사용해주는 방식을 가져가게 되었고, 이전에 undefined도 받아와서 골칫거리였던 부분도 useSuspenseQuery를 사용하며 해결 할 수 있게 되었다고 한다.

**참고자료 :**

https://www.youtube.com/watch?v=n-ddI9Lt7Xs&t=42s

# 그외

그 외에도 정말 다양한 기술들이 있고, 많은 옵션들이 있기 때문에, react-query를 잘 활용해서 데이터 패칭을 효율적으로 하면 좋을 거 같다.
