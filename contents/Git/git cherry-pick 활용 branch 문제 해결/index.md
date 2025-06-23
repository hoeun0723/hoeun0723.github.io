---
date: '2023-11-06'
title: '[Git] git cherry-pick 활용 branch 문제 해결'
categories: ['Git']
summary: 'git cherry-pick 활용 branch 문제 해결을 정리한 내용입니다.'
thumbnail: './thumbnail.png'
---

팀원들과 함께 프로젝트를 진행하던 중,

*기능별*로 branch를 파서 해당 branch에서 작업하도록 이야기 해놓은 *협업 규칙*을 잊고, 그 전에 작업하던 branch에서 새로운 기능을 추가하게 되는 실수가 생기게 되었다.

이러한 과정을 해결하기 위해서는 git cherry-pick을 활용하면 된다.

![git cherry-pick을 사용하게 되는 과정](https://velog.velcdn.com/images/hoeun0723/post/c6af6b5e-ea56-487e-bcba-2639a81e2197/image.png)

사용방법은 다음과 같다.

먼저 새로운 git branch를 생성해준다. 나는 기능별로 branch를 구분하도록 했으니 새롭게 코드를 짜게 되는 기능에 맞춰서 이름을 지정해주었다.

```
git switch -c 새로운 브랜치명
```

브랜치이동(switch)에서 -c까지 입력해주면 해당 브랜치로 바로 이동할 수 있다. (checkout -b 와 같은 원리이다.)
(브랜치 생성할때 주의해야할 점은 새로운 브랜치를 생성하는 명령어를 입력해준 브랜치에서 파생되어 새로운 브랜치가 생성된다는 점을 알아줘야한다.)

```
git cherry-pick 해당 커밋 해쉬값
```

다음으론, 위 코드처럼 git cherry-pick 코드를 작성하면 된다.

commit hash값 확인법
-> git log --oneline을 통해 확인해보거나 git graph가 깔려있는 사람들은 git graph를 확인해도 좋다.

이렇게 cherry-pick을 활용해 commit 기록을 새로운 브랜치로 옮겼을때 간혹가다 충돌이 날 수도 있다.

그럴땐 당황하지 않고, vscode를 사용하는 사람들은 충돌난 부분들을 source control창에서 확인해주어 내가 바꾸려고 하는 코드들을 반영해준 후 파일을 저장하고 staged changes 에 올려주면 충돌이 해결이 날것이다.

이렇게 충돌해결까지 마치면, 내가 실수로 전 branch에 작성한 commit 내용들이 새로운 branch에 잘 옮겨진것을 확인 할 수 있다 ! (다시 한번 더 확인을 위해 git log --oneline 찍어서 branch 위치 확인해보기 !!)

나는.. 충돌을 해결하고 git cherry-pick을 계속 반복해주었는데, 충돌을 해결하면 구지 다시 입력해주지 않아도 된다.

위와 같은 상황이 발생했을때 git cherry-pick을 활용하여 잘 해결해 보도록 하자.

[저번 블로그의 비밀번호 까먹음 이슈로 현재 블로그에 내용 재 업로드 합니다.](https://hoeunwang.tistory.com/22)
