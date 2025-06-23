---
date: '2023-11-06'
title: 'react-hook-form (register/handleSubmit/setError)'
categories: ['FE', '문제해결']
summary: 'react-hook-form (register/handleSubmit/setError) 문제 해결을 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

프로젝트를 진행하다가 회원가입 정보를 받고 제출을 할때 form태그를 사용해야하는 경우가 생겼다.

form 태그를 활용하기 위해 공부해 보던 중 많이 사용 된다는 react-hook-form을 알게 되었고, 사용법에 대해 간단히 정리해보고자 한다.

### Register

이 메소드는 input 값이나 선택한 요소 또는 적용 validation을 가지고 오는 역할을 제공해준다.

밑에 register함수의 사용법을 살펴보면 좀 더 이해하기 쉬운데,

```
<input
  onChange={onChange}
  onBlur={onBlur}
  name={name}
  ref={ref}
/>
```

예를 들어 이런식으로 작성해줘야했던 input 태그를

```
const { onChange, onBlur, name, ref } = register('firstName');

<input {...register('firstName')} />
```

이런식으로 위에 register 함수를 선언하고 input 태그에 선언해주면 좀 더 간단한 형식의 input태그가 완성된다.

register 함수를 활용하면 input의 유효성 검사도 쉽게 할 수 있게 된다.

좀 더 다양한 활용 코드를 살펴보면,

```
<input
  {...register("test", {
    minLength: {
      value: 1,
      message: 'error message'
    }
  })}
/>
```

최소길이를 설정하여 넘게 되면 에러메세지를 보내줌.

```
<input
  {...register("test", {
    pattern: {
      value: /[A-Za-z]{3}/,
      message: 'error message'
    }
  })}
/>
```

A부터 z까지 RegExp 개체를 활용하여 value값을 지정해줌. + 에러메세지 포함.

```
<input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/i,
            message: '이메일 형식으로 입력해주세요.',
          },
        })}
        placeholder="email"
/>
```

실제 프로젝트 코드에 활용된 이메일 입력 input 태그.

위와같은 경우들을 살펴 볼 수 있다.

### handleSubmit

handleSubmit은 이름에서도 유추할 수 있듯이, form을 submit하는 상황에서 활용 되는 기능이다.

이 함수는 form validation이 성공적으로 제출 되면 form의 data를 받아오게 된다.

```
const onSubmit = () => {
  throw new Error("에러가 발생했습니다.");
};

<>
  <form
    onSubmit={(e) => {
      handleSubmit(onSubmit)(e)
      // 여기에 넘겨받을 데이터 입력을 위한 코드를 작성하여 줄 수 있다.
      .catch(() => {});
    }}
  />
</>;
```

이런식으로 form태그 상에서 handleSubmit을 선언해주고,

```
handleSubmit(onSubmit)();
```

handleSubmit또한 함수 내부에 선언하여 주면, form 속에 data를 제출 할 수 있게 된다.

여기서 넘겨받은 e를 console.log로 출력해주면 form형식으로 넘겨받은 data가 console 창에 찍히는 것을 확인 할 수 있다.

### setError

이 함수를 register 함수에서 에러를 선언할 때 register함수에서 작성할 수 없었던 에러처리 관련 코드들을 추가하는데 도움을 제공하여 준다.

```
register('registerInput', { minLength: 4 }});
setError('registerInput', { type: 'custom', message: 'custom message' });
```

전체적인 코드를 살펴보자면,

```
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, setError, formState: { errors } } = useForm();

  return (
    <form>
      <input {...register("test")} />
      {errors.test && <p>{errors.test.message}</p>}

      <button
        type="button"
        onClick={() => {
          setError("test", { type: "focus" }, { shouldFocus: true });
        }}
      >
        Set Error Focus
      </button>
      <input type="submit" />
    </form>
  );
};
```

위 코드에선 버튼이 클릭 되었을 때, 에러가 발생하게 되고, 에러메세지는 input 태그 다음 p태그로 감싸져 있는 부분에서 발생하게 된다. 이와 같이 setError를 useForm에서 선언해주게 되면, 다양한 조건들을 setError 함수로 선언하여 error가 발생하는 시점을 다양화 시킬 수 있게 된다.

```
if (password !== verifiedPassword) {
      setError('verifiedPassword', { message: 'Password is not same' }, { shouldFocus: true });
 }
```

예를 들자면 코넥트 프로젝트에선 비밀번호와 비밀번호 확인 문자열이 동일하지 않을 경우에 setError를 호출 하게 지정해 놓았다.

### 실시간 onChange 값 검사

use-react-form 기술을 정리하던 도중 발견 된 사실인데, 실시간으로 유효성 검사가 가능한 방법이 있다는 것을 알게 되었다.

```
useForm({ mode: "onChange" });
```

이렇게 useForm의 모드를 onChange로 설정해주면, 실시간으로 정보가 업데이트 되어 조건을 만족시키지 않았을 때 마다 에러메세지가 계속해서 뜬다고 한다.
input에 validation을 지정해준 후, form으로 감싼 태그 안에 error 코드를 선언해주면 계속해서 onChange 되는 값을 비교하여 에러메세지를 띄울 수 있다.

실제 프로젝트에서 실시간 유효성 검사를 할 수 있는 mode가 있다는 사실을 모르고, useForm 을 직접 custom하여 활용하려고 코드를 고치고 있었는데, mode에 관련 된 부분도 조금 더 찾아보고 반영하여 코드를 작성하면 좋을 것 같다.

위에서 활용된 코드들 상당수가 react-hook form 공식문서에서 가지고 온 코드들이다. setErrors만 봐도 하나의 error가 아닌 여러개의 error들을 출력할 때는 또 다른 방법이 있는데, 그 코드 또한 공식문서에 굉장히 잘 나와져 있다.
이 외에 더 다양한 이 라이브러리 기능들이나 더 완벽한 이해를 바란다면 공식문서를 읽어보는것을 추천한다.

[저번 블로그 비밀번호 까먹음 이슈로 인해 현재 블로그에 재 업로드 합니다.](https://hoeunwang.tistory.com/26)
