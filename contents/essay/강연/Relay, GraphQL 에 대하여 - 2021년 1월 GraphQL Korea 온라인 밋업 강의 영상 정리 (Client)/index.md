---
date: '2024-04-24'
title: 'Relay & GraphQL 에 대하여 - "2021년 1월 GraphQL Korea 온라인 밋업" 강의 영상 정리 (Client)'
categories: ['에세이', '강연']
summary: 'Relay & GraphQL 에 대하여 - "2021년 1월 GraphQL Korea 온라인 밋업" 강의 영상 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

# 글로 정리하게 된 계기

작년 활동했던 SOPT 의 playground(다양한 활동들을 올리는 sopt 자체 플랫폼)에 새롭게 스터디가 하나 올라왔었는데, graphQL 스터디였다.

그때 처음 graphQL 에 존재에 대해 알게 됐고, 너무 신기하고 좋은 기술이라는 생각이 들어서 이와 관련된 강의영상을 듣고, 이에 대해 정리해 보게 되었다.

결론 부터 말하자면, "너무 좋은 기술이라는 생각에 꼭 사용해 보고 싶다"라는 생각이 강하게 들었던 거 같다.

그럼 지금 부터 설명을 시작해보겠다!

해당 포스트는 다음 영상을 시청 한 후, 개인적으로 정리한 내용입니다!
=> https://www.youtube.com/watch?v=5tW_CnVj8og

# GraphQL?

graphQL 에서 진행한 해당 강연은 당근마켓에서 당근일자리(현재 당근알바) 서비스에서 Frontend 개발을 하고 계신 김승욱님(Steve)의 강연이었다.

현재, 당근일자리에선 graphQL 을 사용하고 있는데, 이는 당근 일자리 서비스의 특성과 민첩한 연관성이 있었다.

**당근 일자리 서비스**는

**"당근마켓 내에 존재하는 웹뷰 기반의 어플리케이션" **이었기에,

- **네이티브와 유사하면서 빠릿빠릿한 경험**
- **빠른 개발 및 배포 사이클**
- **웹 서비스로의 확장 가능성**

을 필요시 하였다.

각각의 항목에 대해서 설명해보자면,

- graphQL 은 rest api 와는 다르게, waterfall 방식이 아닌, 하나의 그래프로 data를 fetching 할 수 있기에 **네트워크 횟수를 줄여서 네이티브와 유사한 통신을 구현**해 낼 수 있다.
- 또한, 서버와 클라이언트간에 api 관련 수정 요청 소통 시 rest api 에서는 "endpoint 에 00 field를 추가해주세요" 와 같이 전달해야하지만, graphQL은 "~~ type에 00type이 추가 되어야 할거 같아요"라며 소통 할 수 있고, schema 공유와 type generation 이 가능하기에 **소통이 더 편리**하다.
- 마지막으로, api 의 변경 없이 over fetching 없이, 모바일에서의 환경과 웹에서의 환경이 데이터 호출 량이 다를 경우에 각 상황에서 적절하게 api요청을 할 수 있게 되는 **웹 서비스로의 확장 가능성**
  을 가지고 있었기에, rest api 보다 graphQL 이 더 적절하다고 판단하여 사용하셨다고 한다.

그래서 결론적으로 당근일자리에선 Relay와 GraphQL을 함께 사용하게 되었는데, 이를 통해서 얻고 싶은 것은
=> **유지보수성과 성능이 좋은 서비스를 빠르게 하는것!**
라고 말씀해주셨다.

- Declarative Data Fetching
- React와의 결합성이 좋다.
- Compile Time 에 쿼리를 계산할 수 있다.
  (relay : move fast and ship high-quality apps at scale)

## Relay & GraphQL 개발을 하게 된다면

**1. Graph 서버로 하자고 설득
만약 안된다면 ? code Generator와 Typescript로 멋지게 API 응답처리하기 - 원지혁님 : 'Good' 2. Graphql Schema 정의 3. Relay 기본환경 세팅 - relay-runtime, relay-compiler, graphql, etc (문서를 보고 해보자!) 4. Query 가 뭐지?, Mutation 이 뭐지? 5. Fragment가 뭐지? 기타 등등 뭐지? 6. ! 왜 데이터가 안 들어오지? => Data Masking? 7. Pagination 어떻게 하지? ⇒ Connection? 8. !왜 Store에 Mutation 이 반영이 안되지? 9. !자동으로 Cache 관리가 된다고 했는데, 왜 계속 네트워크를 호출하지? 10. 네트워크 정책(Fetch-Policy)을 어떻게 활용하지?**

을 해야하는데, 여기서 승욱님께서는 1,2,3을 제외한 나머지 부분에 대해서 설명해주셨다.

=> 이 10가지 항목들은, 강의를 다 듣고 난 뒤 다시 한번 더 살펴보면, 아 이게 이런 의미였구나!! 를 깨닫게 해주는 것 같다.

### 강연 정리

레포지토리속 코드를 활용하여 설명을 진행해주셨는데, 이를 듣기 전 미리 알아둬야하는 내용들은

1. **Query, Mutation**
   a. Query -> Data를 가져옴 (Rest get)
   b. Mutation -> Data를 변경함 (Rest post, put, delete)
2. **Fragment** -> Data를 선언하는 단위, Query 에 사용됨
3. **Data Masking** -> 해당 data가 정의된 component에서만 조회가 가능하도록 하여 계층 간 의존성이 생기지 않도록 함
4. **Pagination & Connection** -> cursor 를 기반으로 데이터 slicing and paginating 이 가능하도록 함. Uniquely identify
5. **Store Updater & optimisticUpdater** -> Relay Store를 Update함 & optimisticUpdate를 통해 사용성을 개선함 (좋아요)
6. **Cache & Garbage Collection** -> 정규화된 형태로 데이터를 저장하고, 메모리 관리 규칙에 따라 불필요한 데이터를 삭제함
7. **Fetch-Policy** -> 캐시 데이터 사용 or 네트워크 사용을 정리

## Code를 함께 보며 설명

**⭐repository : **https://github.com/beautifulife/beautifulife-relay-app-example?tab=readme-ov-file

일단 레포를 clone 받아와 코드들을 살펴보았는데, 이를 보면, Relay environment 로 Relay 네트워크 환경을 설정해준것을 확인할 수 있다.

그런후, App.tsx파일에서 RelayEnvironmentProvider 태그로 Router속 페이지들을 감싸주었는데, environment(relay 가 네트워크 호출할때 필요하게 되는 객체)를 받을 수 있도록 했다.

또한, 추가적으로 뒤에서 설명할 Cache를 위한 RelayQueryCacheContext 태그도 함께 확인할 수 있었다.

---

### Point1 (Query, Mutation)

Relay 와 graphQL은 보통

```
const { data, isLoading } = useQuery<TodoPageQuery>(
    graphql`
      query TodoPageQuery($id: ID!) {
        node(id: $id) {
          ... on TodoItem {
            id
            completed
            text
            dbId
          }
          ...Todo_todo
        }
      }
    `,
    { id },
    { fetchPolicy: 'store-and-network' }
  )
```

다음과 같은 구조로 사용 되어 진다. **useQuery** 로 받아온 data를 가지고 사용하곤 하는데,
여기서 추가적으로 **optimisticUpdater** 를 활용하여 사용성을 개선한다고 한다.
optimisticUpdator는 추후에 설명하게 될 Store Updater에서도 사용되어지는데
바로바로 반영이 되어 나타나야하는 부분에 로딩이 생기게 되었을 경우를 대비하기 위한 친구이다.
그래서 변경사항을 먼저 반영 한 뒤, 로딩을 실행하고 로딩이 된 뒤에 결과값이랑 비교해서 또 반영을 수정하도록 작동 되어진다.

위와 같이 relay에서 원하는 쿼리들을 불러와서 반영해주면 되는 것이고, **useMutation** 같은 경우에서는 api 통신시 받는 response 값은 자동 반영이 되어 지는것을 확인 할 수 있을 것이다.

_여기쯤에서의 나의 생각=>_ 위와 같은 클라 코드를 보기 전 서버를 켜서 graphQL docs를 확인했는데, 문서화가 확실히 잘 되어 있고, 협업하기에 편하겠다고 생각했다. 각각의 Fragment들도 확인하기에 너무 좋았고, 추후 수정 반영도 편리할 것이라는 생각이 들었다.

---

### Point2 (Fragment)

**Data를 선언하는 단위**들을 보여주셨는데, 상위 컴포넌트에서 **fragment** 들로 묶여져 있는 형식으로 data를 받아올 수 있는 경우를 보여주셨다.
이를 잘 활용하면 여러개의 api 를 만들어야 했던, rest api 와는 다르게 그래프 형식으로 묶여진 api를 구성할 수 있다라는 판단이 들었다.

_여기쯤에서의 나의 생각=>_ 최근 협업을 진행하며 list 형식의 api를 호출할때 rest api 에서는 waterfall 방식으로 전체 리스트를 다 받는 api 그리고, 한 항목에 대한 detail api 등등 여러개의 api 들을 호출해야하는 경우가 있었는데, grapQL 을 활용하면 이런 경우에서 **네트워크 통신이 줄어들며 굉장히 효율적**으로 반영할 수 있겠다 라고 생각했다. fragment 들이 정의 되어져 있으니 !

---

### Point3 (Data Masking)

api 통신을 하게 되면, 해당 **data가 정의된 component에서만 조회가 가능하도록 하여 계층 간 의존성이 생기지 않는 모습을 확인할 수 있다.**
그래서 예를 들어, 상위컴포넌트에서 하위에 있는 Fragment 속 데이터들을 불러오고 싶어서 "data.어쩌구" 이런식으로 fragment의 항목들을 가지고 오려고 하면, 안 된다.
console.log를 찍어보면 알 수 있는데, 해당 항목들은 모두 fragment의 형식으로 불러오기 때문이다.

그래서 그때 확인하는 것이 **relay masking** 인데, _**mask: false**_ 를 하게 되면 그 안에 있는 frament들까지 상위컴포넌트에서도 다 받을 수 있게 된다.
하지만, 해당 fragment를 받아오는 쿼리문에서는 오류가 날것이다. fragment를 받아오는 형식이었기에!
이와 같이 모든 부분을 수정해야하기 때문에, 상위 컴포넌트에서 해당 값을 가져오고 싶으면 직접 그 값을 다 props로 정의해서 각각의 항목을 받아오도록 하는 방법이 있을 것이라고 말씀해주셨다.

---

### Point4 (Pagination & Connection)

cursor 를 기반으로 데이터 slicing and paginating 이 가능하도록 한다. 그래서 구조가 약간 다른데,

```
const { data, isLoading, hasNext, loadNext } = usePagination(
    graphql`
      fragment TodoListPaginated_query on Query
      @argumentDefinitions(
        after: { type: "String" }
        first: { type: "Int", defaultValue: 2 }
        before: { type: "String" }
        last: { type: "Int" }
      )
      @refetchable(queryName: "TodoListPaginatedRefetchQuery") {
        todosConnection(after: $after, first: $first, before: $before, last: $last)
          @connection(key: "TodoListPaginated_todosConnection") {
          edges {
            node {
              id
              ...Todo_todo
            }
          }
        }
      }
    `,
    props.query
  )
```

(위 코드에서는 usePagination 이라는 hooks를 사용했지만, relay 공식문서에서는 hoc를 사용한 예시코드가 나와 있다고 한다.)

위와 같이 **@refetchable**를 한 후, **query 이름**을 적어주는게 추가적으로 필요하고, **argumentDefinitions** 를 작성해줘야한다. (cursor를 기반으로 그 앞 내용을 가져올건지, 그 뒷 내용을 가져올건지, 어느정도를 가지고 올 건지)

---

### Point5 (Store Updater)

**useMutation** 을 살펴보면 list에서 어떤 항목 삭제를 했을때 바로 반영이 되어지는 모습을 볼 수 가 있다. 하지만, 새로운 list를 추가할 경우에 페이지네이션이 이루어지고, 이런 경우에는 자동 업데이트가 어렵기에, **connection 이라는 것을 정의**해줘야한다.

올려주신 레포지토리에 예시코드들이 잘 나와져 있는데,

```
// POINT: 5. Updater Add
    mutateAddTodo({
      variables: { input: { text: inputValue } },
      configs: [
        {
          type: 'RANGE_ADD',
          parentID: ROOT_ID,
          connectionInfo: [
            {
              key: 'TodoListPaginated_todosConnection',
              rangeBehavior: 'prepend',
            },
          ],
          edgeName: 'addedTodoItemEdge',
        },
      ],
      onCompleted: () => {
        toast.success('Add Todo Success!')
        pop()
      },
      onError: (err) => {
        console.error(err)
        toast.error('Error Occured!')
      },
    })
```

```
// POINT: 5. Updater Delete
  const handleDeleteClick = () => {
    mutateDeleteTodo({
      variables: {
        input: {
          id,
        },
      },
      configs: [
        {
          type: 'RANGE_DELETE',
          parentID: ROOT_ID,
          connectionKeys: [
            {
              key: 'TodoListPaginated_todosConnection',
            },
          ],
          pathToConnection: [ROOT_ID, 'todosConnection'],
          deletedIDFieldName: 'deletedTodoItemId',
        },
      ],
      onCompleted: () => {
        toast.success('Delete Todo Success!')
        pop()
      },
      onError: (err) => {
        console.error(err)
        toast.error('Error Occured')
      },
    })
```

이와 같이 **edgeName**에는 어떤 것을 넣어줘야 하는지 ! **pathToConnection** 은 뭔지 ! 같은 것에 대해서 찾아보려고 공식문서를 찾아봤는데, 잘 나와 있지 않아서 당황할 수 있다고 하셨다. 그래서 어떤것이 response 되는 지 파악하고 **relay 라이브러리를 하나하나 까보면서 확인**하는게 좋을 거 같다고 말씀해주셨다.
(내 값이 어떻게 조회가 되고 있고, 어떤게 반영이 되는지 console로 찍어보거나, 디버그 해가면서 반영하도록)

- updator 코드를 살펴보면 아까 point1 에서 이야기 나눴던 optimisticUpdater도 확인 할 수 있다 : )

나는 보통 공식문서나 구글링을 통해서 찾으며 공부하다가 한계를 느끼면 **좋은 레포지토리 속 코드들을 많이 참고** 하는 편이다. 나보다도 훨씬 더 많은 공부를 하시고 적용해보시면서 작성하신 분들이 많을거기에 ! 그리고 다양한 스타일의 사용법에 대해서 학습 할 수 있기에!
좋은 레포들을 많이 참고하는 편이니, 해당 updater 코드 작성 방식에 대해서도 위에 참고해둔 레포지토리 링크를 타고 들어가 확인하면 좋을 거 같다 : )

---

### Point6 (cache)

이 부분이 해당 **강연을 하는 이유**라고 말씀하실 만큼 중요한 내용이었다.

우리가 페이지를 들어갈때 서버로 부터 데이터를 받아오게 된다. _그러면 계속 그 페이지를 들어갈때마다 요청을 계속 하게 되는가?_
=> graphQL에는 store가 있으니, 한번 요청을 해서 받아온 **데이터를 store에 저장**해두고 호출이 아니라 가져와서 쓰면 되는거 아니냐!
할 수 있는데, 맞다. 실제로 로컬 웹 서버에서 실행을 시켜보면, 데이터를 처음 요청하고 난 후에는 두번 요청을 하지 않는 모습을 볼 수 있다. 하지만,

핸드폰으로 배포페이지를 실행시켜 해당 페이지에 들어가서 network 탭을 살펴보면, 계속해서 네트워크 요청이 가는 모습을 확인할 수 있게 된다.
**이와 같이 development mode인지 production mode인지에 따라 그리고 웹인지 앱인지에 따라서 다 다르게 동작한다고 한다.**

위와 같이 계속해서 데이터를 호출받게 되면 _로딩이 생기게 되는 경우를 대비하기에 어렵다._ 그래서 원래 store에 있는 것을 유지해줘야겠다고 판단하게 된 것이다.

영상속 **relayQueryCache** 파일을 살펴 보면, **CacheStorage**파일안에 **retain ** 이라는 개념을 써서 넣어줬다. 그러면 **store에 저장**되어진다고 한다.
environment 에 retain 안에 키를 넣어주면, 해당 키가 있는 애들은 store에 저장을 해주는! 그런 동작을 보여주게 된다.

그래서 상욱님은 어떻게 했냐면,

1. **retain Query 라는 개념을 hooks**로 만든다.
2. **querynode와 variable** 을 같이 받았다.
3. **useRetainQuery** 가 받은것을 넘겨준다.
4. **reateOperationDescriptor 로 operation** 을 만들어주고, 해당 **retain** 안에 넣어준다.
5. 그 operator의 값들을 **disposable**에 저장
6. **cacheStorageKey**와 함께 storage에 **enque**로 넘겨주게 되면
   => store에 저장되게 되는것이다.
   이런식으로 구현하셨다.

---

### Point7 (fetchPolicy)

당근일자리 페이지에서 보면, 구인공고 페이지가 있는데 이는 이미 마감된 페이지인 경우나 정보가 업데이트 되는 페이지들이 많다고 하셨다. 그래서 이럴때 마다 유저한테 가장 최신의 정보를 보여줘야하기 때문에, _**fetchPolicy: 'store-or-network'**_ 를 활용한다고 하셨다.
(이는 위에서 cache에서 다룬것처럼 store에 저장되어 있으면 store에 있는 값으로 그게 아니라면 network로 데이터를 가져오는 형식을 의미한다.=> 각 상황에 맞춰서 대응하기.)

---

## 결론

Relay & GraphQL에 대한 설명과 다양한 예시에 대해서 살펴 보았는데,
상욱님이 말씀해주신 특징은 이와 같다.
**1. 사용자의 사용성을 높여준다. 2. 개발을 빠르게 할 수 있다. 3. 사람들의 우려 : 자료가 많이 없다. (우리가 익숙하게 사용하고 있는 기술도 처음엔 누군가가 연구 했을 것이다. 그러니 사용해보면 좋다.)**

였다.

해당 강연을 듣고 다니, 나에게도 GraphQL이 너무나 매력적이게 다가왔고, GraphQL로 함께 협업을 해볼 수 있는 백엔드 개발자가 있다면 해보고 싶은 생각이 컸던 거 같다.

실제로 당근알바 페이지에 들어가서 데이터가 호출 되는 경우에 대해서 살펴 봤는데, 정말 사용성이 너무너무 좋았고, 예시코드를 살펴보며 빠른 개발을 도와주는 유용한 도구라는 생각이 많이 들었던 거 같다.
