---
date: '2024-08-05'
title: '[초심자를 위한] Github(issue,milestone,pr)와 브랜치 전략 등 협업하기'
categories: ['초심자를 위한', 'github', 'branch전략', '협업']
summary: 'Github(issue,milestone,pr)와 브랜치 전략 등 협업하기 에 대하여 초심자분들이 이해하기 쉽도록 작성한 내용입니다.'
thumbnail: './thumbnail.png'
---

처음 프로젝트를 시작할때 github를 활용해서 함께 코드를 공유하며 협업을 진행하곤 하는데요!

github organization을 생성하고 repository를 만드는것보다 훨씬 더 많은 할일이 있답니다.

그에 대해서 하나하나 설명해보도록 할게요

# Github 에 다양한 개념 및 협업 방식

먼저 github 에는 다양한 개념들이 있는데 이에 대해서 알아야 해요.

### git

git은 소스 코드 관리를 위한 분산 버전 관리 시스템이에요.
명령줄 인터페이스와 함께 다양한 그래픽 인터페이스 도구와 통합되어 사용되며, GitHub, GitLab 등의 온라인 플랫폼과 함께 사용되면 팀 협업이 더욱 원활해집니다!

말이 너무 어려우니 간단하게 설명하자면 깃은 크게 1. 버전 관리, 백업, 협업을 목표로 이를 도와주는 코드 관리 시스템이라고 할 수 있어요 ! 위에서 설명한 것과 같이 github를 사용하면 더욱 더 협업이 원활해 진답니다!

### Issue

github로 협업하기 위해 repository를 생성하고 나면 Issue 탭을 확인할 수 있는데요.

Issue는 개발자간 idea, work, bug 등을 다루기 위해 깃허브에서 사용 됩니다.

세부적인 사항에 대해서 설명해보자면

- 아이디어 구현에 관한 논의
- 작업 진행상황 추적
- 기능 제안 수락, 질문, 요청 지원 또는 버그 보고
- 정교한 코드 구현

등등이 있어요!

그래서 보통 Issue를 등록할땐,

1. 이슈 탭을 연다.
2. 해당 문제, 상황을 재현할 수 있는 최대한 많은 정보를 담는다.
3. 해당 환경 정보 등 관련이 있는 모든 정보를 적는다.

이 과정을 거치고

1. label이나 assin즉, 담당자를 지정하곤 하죠.
2. 그렇게 해당 담당자가 해당 Issue를 해결하게 되면 issue를 closed하는 과정까지 거칩니다.

Issue는 제목 옆의 이슈번호로 pr과 같이 고유번호로 사용하여 프로젝트 어디서든지 언급 가능해요.

이슈에서 중요한 점은 **`기능 브랜치를 이슈 단위로 생성한다는 것`**

**→**  그래서 가장 추천되는 작업방식은 브랜치 하나에 이슈 하나씩 처리하는 식으로 진행하는 것이에요.

실제로 저도 프로젝트를 진행하며 Issue를 생성할땐 브랜치에 명시하며 이슈 하나에 브랜치 하나씩 할당하여 진행하곤 한답니다!

- issue 기반 branch 생성
  branch 네이밍을 통해서 작업의 의도를 갖게 하는 것은 한계가 있습니다.
  Github Issue는 각각의 유니크한 값인 Issue Number를 갖습니다. 
  이 숫자를 기반으로 branch를 이름을 갖게 하여 해당 branch의 명확한 작업 의도합니다.
  github만 사용할 때에는 issue를 생성한 후 직접 develop 브랜치 내에 feature/#issue 브랜치 생성을 진행하곤 해요
  pr을 닫을땐, development 세션을 활용하여 이슈를 태그하면 됩니다!
  https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue
  https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue

https://jwher.github.io/posts/github-issue/

https://kyounghwan01.github.io/blog/etc/git/git-issue/#이슈-해결

### PR

pr은 pull request의 약자로 자신의 작업 브랜치를 다른 브랜치에 병합하려고 할 때 사용하는 방법입니다. 이를 통해서 코드 리뷰 및 협업이 가능해지곤 하는데요!

pr을 하는 과정은

1. 브랜치 생성
2. 코드 작업
3. pr 생성 (병합을 원하는 브랜치로)
4. 코드 리뷰
5. 테스트 및 검증
6. 병합 (merge)

위와 같은 과정을 가지죠.

코드를 병합하기 위해 가장 많이 하게 될 과정일겁니다.

### template

그런 후 이 부분은 repository를 만들자마자 해줘야하는 과정인데,

Issue와 PR 같이 어떠한 기록을 꾸준하게 쓰기 위해서 보통 템플릿을 설정해두곤 합니다. Issue나 PR을 오남용할 수 있고, 확인을 위한 가독성이 좋지 않을 수 있기 때문이에요. 그래서 어떤 정보를 포함해야하는 지 등을 명시할 수 있습니다.

그래서 이슈 템플릿은

```jsx
## 제목
제목 적기

## 요약 (개요)
* 요약을 적으면 됩니다.

## 주의 사항
주의사항을 적으면 됩니다.
```

PR 템플릿은

```jsx
## 제목 + #이슈넘버
ex) github oauth 구현 #1

## 요약 (개요)
요약을 적으면 됩니다

## 작업 내용(to-do list)
[x] 완료 목록
[ ] 진행 중 목록

## 주의 사항
주의사항을 적으면 됩니다

## 테스트 결과
테스트 결과를 넣으면 됩니다

## 이슈 태그
관련된 이슈를 모두 태그하면 됩니다.
ex) #3 #1
```

이런 식으로 작성하곤 하죠.

### milestone

마일스톤을 알기 위해선 애자일 방법론을 먼저 알아야 하는데요.

애자일 방법론은 자동차를 만들기 위해 차체 ⇒ 창문 ⇒ 핸들 ⇒ 바퀴… 이렇게 순차적으로 꼼꼼히 만드는 방식이 아닌 먼저 자동차가 굴러가게끔 만들고 싲가한다는 거에요. 그니까, 짧은 개발주기를 여러번 가지는 개발방법입니다!

milestone은 개발 기간을 설정하고 목표에 도달할 때까지 이슈를 관리해줍니다.

프로젝트 관리자는 마일스톤을 통해 이슈와 머지 요청을 쉽게 추적할 수 있죠.

저는 주로 이 milestone을 개발 스프린트를 잡을 때 마다 세웠었는데 실제로 Issue와pr merge에 도움을 주며 스프린트를 지속적으로 해결하며 개발을 진행할 수 있었어요.

하지만 milestone을 github내부에서 설정하지 않고 따로 Jira나 Notion 등을 사용하여 관리하는 방식도 있죠. 하지만, milestone은 직접적으로 연관 되어 있다는 장점을 가지고 있습니다.

저는 milestone을 다음과 같은 절차로 사용했어요

> 💡 [milestone] -> 기능(branch)에 대한 각각의 설명

1. milestone 생성 (다 되면 close 누르면 됨.)
2. milestone 해당하는 issue들을 생성할 수 있음.
3. issue는 --> (기능, 해야할일, 문서작업, 버그 수정, 버그 아닌가요?? 이런거 수정 필요해 보입니다.) 등 프로젝트에 관한 일들을 모두 적어 두는거임.
4. issue완료되면 close 누르면 됨.
5. issue 내에서 branch 생성 할 수 있음.
6. 그치만 그래도 되는데 branch그냥 미리 만들어서 pr보낼때 issue를 설정해줄 수 있음.~! 이 방법으로 하기. 이름 같은거 설정해줄 수 있음 번호로!!

### Projects

milestone 뿐만 아니라, Projects 탭에 들어가면 실제 칸반보드(로드맵)를 만들 수 있는 기능도 있어요 !!! 칸반보드가 필요한 상황이라면 github 칸반보드를 사용해봐도 좋답니다 !

- 칸반보드(로드맵)란?
  **_칸반 보드_**는 작업을 시각화하고, 진행 중인 작업을 제한하며 효율성(또는 플로우)를 극대화하는 물리적 또는 디지털 프로젝트 관리 도구입니다.

Project에서 칸반보드 사용 예시

> 💡 [projects] -> 로드맵 기능

1. 프로젝트 생성(백엔드, 프론트엔드)
2. add a columm --> 로드맵처럼 생성 할 수 있음(해야할일, 하는중, 완료)
3. 카드를 등록해서 옮길 수 있는데, 그걸 issue로 하는거임.
4. issue 쓰고 projects 왼쪽에 있는거 누르면 이동 가능함.
5. 그러면 columm으로 이동하고 싶다! 하면 issue 옆에 있는 projects 누르면 columm 선택할 수 있음.

### labels

pr이나 issue를 생성하면 우측에 이를 구분할 수 있는 label을 달 수 있게 되어 있는데요, git convention 정리 한 내용을 label로 적어두면 좋습니다! 예를들면 commit 할 때 사용하는 컨벤션태그들 또는 백,프론트 이런것들이요 !!

그렇게 label을 달아두면 내가 작성한 이슈나 pr을 한눈에 쉽게 알아볼 수 있어요.

### git commit convention

Git commit convention은 Git 저장소에서 커밋 메시지를 작성할 때 따르는 일련의 규칙이나 가이드라인을 의미해요.

보통 자주 쓰이는 commit convention 들이

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 변경 (예: README 수정)
- **style**: 코드 포맷팅, 세미콜론 누락 등 비즈니스 로직에 영향을 주지 않는 변경
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가 또는 기존 테스트 수정
- **chore**: 빌드 프로세스 또는 보조 도구와 관련된 변경 (예: 패키지 매니저 설정)

가 있죠 ! 저희도 이렇게 사용하여 `제목`과 `본문`을 한 줄 띄워 분리, 제목은 아래 convention에 따르고 본문은 필요한 경우 작성한거 같아요 !

# branch 전략⭐

github 에는 branch 가 존재하는데요. main branch 에서 다양한 branch 로 파생되어 코드를 분리하여 구현하고 합치는데 도움을 주곤해요

브랜치를 다루는데 있어서 브랜치 전략을 정해야하는데요. 초반 협업을 시작하며 해당 브랜치 전략도 정하는것이 좋습니다.

브랜치 전략 중에서 **`git flow`** 전략이라는 것이 있는데, 이 전략에 대해서 설명해볼게요.

Git Flow란?

기본적으로 5가지 브랜치로 이뤄집니다.

이슈단위로 feature브랜치를 생성하며, 주된 개발 프로세스는 develop브랜치에서 이뤄져요.

![](https://velog.velcdn.com/images/hoeun0723/post/3ede53c9-c8ad-43c7-b471-d39b2123a948/image.png)
사진 출처 : https://gyoogle.dev/blog/github/Git%20vs%20GitHub%20vs%20GitLab%20Flow.html

**Master**: 릴리즈 시 사용하는 최종 단계 메인 브랜치로, Tag를 통해 버전 관리를 한다.

**Develop**: 다음 릴리즈 버전 개발을 진행하는 브랜치로 추가 기능 구현이 필요해지면, 해당 브랜치에서 다시 브랜치(Feature)를 내어 개발을 진행하고, 완료된 기능은 다시 Develop 브랜치로 Merge한다.

**Feature**: Develop 브랜치에서 기능 구현을 할 때 만드는 브랜치로 한 기능 단위마다 Feature 브랜치를 생성하는게 원칙이다.

**Release**: Develop에서 파생된 브랜치로, Master 브랜치로 현재 코드가 Merge 될 수 있는지 테스트하고, 이 과정에서 발생한 버그를 고치는 공간이다. 확인 결과 이상이 없다면, 해당 브랜치는 Master와 Merge한다.

**Hotfix**: Mater브랜치의 버그를 수정하는 브랜치로 검수를 해도 릴리즈된 Master 브랜치에서 버그가 발견되는 경우가 존재한다. 이때 Hotfix 브랜치를 내어 버그 수정을 진행한다. 디버그가 완료되면 Master, Develop 브랜치에 Merge해주고 브랜치를 닫는다.

**상황에 맞게 git flow 전략을 응용한 브랜치 전략⇒**

프로젝트와 개발자들의 상황에 맞게 가장 적절한 브랜치 전략을 정해서 사용하곤 하는데, 제가 응용한 사례에 대해서 설명해볼게요!

1. 브랜치 관리

`main브랜치`와 `develop브랜치`를 나눈 뒤, develop브랜치에서 파트(FE|BE)별 브랜치를 만들어서 관리했다.

주된 작업은 파트별 develop브랜치에서 진행했으며, 개발자는 파트별 브랜치에서 feature브랜치를 만들어서 작업했다. 작업이 완료된 이후 pr을 통해 파트별 develop브랜치로 merge했다.

이후 각 파트별 작업이 완료되면 develop브랜치를 최신화했다.

```jsx
.
└── Co-nect
      develop
          ├── develop-FE
          │    ├── FE/feature/#12-login_page
          │    └── FE/feature
          └── ****develop-BE ****
                ├── BE/feature
                └── BE/feature

# 브랜치 네이밍:
# [BE|FE]/<feature>/<#이슈번호>-<세부내용>
# 예시: FE/feature/#12-login_page
```

![](https://velog.velcdn.com/images/hoeun0723/post/d9f3177c-f324-405d-b06d-9974a72e6dd2/image.png)

2. 레포지토리 관리

fork를 활용해서 공통 레포지토리를 upstream으로 사용하고 개인 레포지토리를 Origin으로 사용했다. 개발자 개인별 작업은 개인 레포지토리에서 자유롭게 진행하고 확실한 코드만 upstream에 반영했다.

![](https://velog.velcdn.com/images/hoeun0723/post/2833216c-7676-42d3-aee9-1e3e3fc1dafd/image.png)

3. 장점

remote와 origin을 따로 공통으로 관리하는 코드를 안전하게 관리할 수 있다.

`개인 로컬 → 개인 원격 저장소 → 공통 원격 저장소` 이런식으로 관리하기 때문에 혹시 모를 실수를 방지할 수 있다.

4. 문제

**1. 브랜치 계층이 많아 최신화하기 번거롭다.**

파트별 브랜치(front, back)은 개발과정에서 자주 최신화되지만 develop브랜치를 자주 최신하지 못해 문제가 발생했다.

develop브랜치에 합쳐야할 적절한 시기를 자주 놓쳐 불필요한 conflict문제가 자주 발생했다.

**2. 프로젝트 규모에 비해 복잡하다.**

아직 배포도 제대로 안되었고, 버전1도 출시하지 않는 상황에서 과도한 전략인 것 같다.

이렇게 응용하고 진행하다가 문제점을 발견할 수 도 있는데요. 항상 개발자들의 상황에 맞는 최선의 branch 전략을 가져 가는게 좋답니다.

실제로 위 방식에서의 문제점이 생겨서 다른 브랜치 전략을 진행한 경험에 대해서도 적어볼게요.

---

**새로 정한 브랜치 전략 및 레포지로리 관리**

gitflow전략으로 그대로 따라하자.

`front, back이라는 파트별 브랜치를 없애고 develop브랜치에서 바로 feature브랜치를 생성`한다.

fork를 하지 말고 `공통 레포지로리를 origin`으로 사용

```jsx
.
└── main (origin)
      ├─ deploy # 배포 브랜치
      └─ develop
            ├── FE/#12-login_page
            ├── FE/
            ├── BE/#11-something
            └── BE/

# 브랜치 네이밍:
# [BE|FE]/<feature>/<#이슈번호>-<세부내용>
# 예시: FE/feature/#12-login_page
```

**3-1. feature단위**

기능 단위로 feature브랜치를 생성한다.

우리 프로젝트에서는 기능 단위로 이슈를 생성하기 때문에 `이슈별로 브랜치를 생성`한다.

**3-2. develop 기능 반영하기**

feature작업이 끝나면 pr을 통해 develop에 반영한다.

`develop브랜치가 업데이트되면 나머지 팀원들은 작업하던 브랜치 및 개인 로컬에 develop브랜치를 최신화`한다.

**⚠️ 주의사항**

절대 임의로 develop브랜치에 commit하지 않는다. 혹시나 하게 된다면 확실한 방법으로 팀원모두에게 알려야한다.

**3-3. deploy브랜치**

배포 브랜치입니다.

해당 내용을 정리해둔 노션 : [https://dear-phosphorus-929.notion.site/Git-8bbe257337c446ae94df66a216470905?pvs=4](https://www.notion.so/8bbe257337c446ae94df66a216470905?pvs=21)

이렇게 어떤 방식으로 브랜치 전략을 정할 것인지 팀원들과 이야기 해보는게 좋아요.

실제로 다양한 브랜치 전략을 사용해 보지 않았어서 중간에 브랜치 전략을 바꿔야 되는 과정이 있었지만, 다양한 전략에 대한 응용 법과 장단점에 대해서 알 수 있게 되었어요.

# Fetch / Pull + fork

### Git Fetch / Pull

두 방법은 모두 원격 저장소의 커밋들을 로컬 저장소로 가져와 합치는 방법이에요.

### Fetch(가져오기)

- remote repository에 있는 변경사항들을 local repository에 가져오기 전에 변경 내용을 확인하고 싶을 때 사용하고,
- pull과 다르게 우선 repository의 내용을 가져오기 때문에 conflict이 발생하지 않습니다.

### Pull(가져와서 병합하기)

- fetch와 다르게 local directory에 변경내용을 합칩니다.

### Upstream / Downstream

- upstream과 downstream은 상대적인 개념
- origin과 local을 기준으로 생각하면 origin이 upstream, local이 downstream입니다. push와 pull을 기준으로 생각했을 때 origin으로부터 local로 흐르는 관계가 형성되기 때문이에요.
- local에서 origin으로 push한다.
- origin에서 local로 pull한다.
- 예시: `git push -u origin main` -> `u`는 `-set-upstream` 옵션의 줄임으로 upstream으로 설정한다는 뜻.

### Fork와 Upstream 관계

- `original repository: upstream`
- `copy repository(내가 forked한 repository): origin`
- `local과 origin의 관계`에선 local이 downstream, origin이 upstream이었는데, `fork한 repository를 기준`으로 보면 origin이 downstream, 원본 remote가 upstream이라는 관계가 됨. 그래서 GitHub로 협업을 할 때는 보통 다음과 같은 프로세스 거처야 해요.

```bash
1. '원본 remote repository'(upstream)를 깃허브에서 fork
2. 'fork한 remote repository'(origin)를 깃 클라이언트로 clone
3. 기능을 완성할 때까지 반복
  - 'clone한 repository'(local)에 commit
  - local에서 origin으로 push
4. upstream에 반영하기 (PR: Pull Request)
  - PR을 등록하기 전 upstream에 바뀐 내용이 없는 경우
    - origin에서 upstream으로 PR
  - PR을 등록하기 전 upstream에 바뀐 내용이 있는 경우
    - upstream을 local로 pull
    - local에서 origin으로 push
    - origin에서 upstream으로 PR

```

- upstream repository 추가

```bash
git remote add {브랜치명} {repository_url}
```

- upstream repository 변경 내역 확인

```bash
git fetch upstream {브랜치명}
```

- upstream repository 변경 내역 반영

```bash
// local의 main으로 chekout 후 merge
git checkout main
git merge upstream/main

// 아니면 rebase 사용

```

🔍 참고자료

- [누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/intro/intro1_2.html)
- [Git - 생활코딩](https://opentutorials.org/module/1215)
- [Git fork와 clone 의 차이점 - velog](https://velog.io/@imacoolgirlyo/Git-fork%EC%99%80-clone-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-5sjuhwfzgp)
- [Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)
- [GitHub에서 협업을 위한 remote repository와 upstream 이해하기](https://pers0n4.io/github-remote-repository-and-upstream/)

# CI/CD(github actions)

위에서 PR을 설명하면서 5번 항목에 “테스트 및 검증”이 있었는데요.

이에 대해서도 조금은 더 설명해보도록 하겠습니다.

CI/CD 에 대해서 같이 말해보면 좋을 거 같아요 !

CI는 코드를 병합하는 과정 중에 오류 체크를 도와주고 빌드와 테스트를 동시에 시행해줘서 코드 병합이 잘 될수 있도록 도와주는 친구이고,

CD는 배포를 자동으로 도와줘서 production 에 올리기 전까지의 과정과 실제로 배포까지도 도와주는 친구에요!

CI/CD를 도와주는 친구중에는 github actions 가 있는데 실제로 github actions를 활용해 CI/CD 기능을 활용하곤 해요.

하지만, 몇가지 의문점이 들 수 도 있는데, github actions 를 설정하지 않았는데, pr을 올리면 자동으로 충돌 난 곳을 찾아주고 자동으로 테스트 및 빌드를 해주는 모습을 볼 수 있을 거에요.

이러한 기능이 바로 CI의 일부인데, Github는 자체적으로 Github Actions라는 CI/CD 도구를 제공해요.

이를 통해서 위와 같은 다양한 CI 작업을 자동화 할 수 있었던 거에요!

그렇다면 왜 github actions를 활용하냐 ! 할 수 있겠지만, CI 감지 뿐만 아니라 더 추가적인 빌드, 테스트, 배포 등 다양한 CI/CD 작업을 설정하고 실행 할 수 있기 때문이에요!

그래서 더 통합적이고 자동화된 방식으로 처리할 수 있답니다!

# 마무리

위와 같은 내용들을 살펴보면 github에서 얼마나 다양한 기능들을 제공하고 있는지 알 수 있어요 !

설명하지 않은 기능들도 훨씬 많은데, 자주 쓰여지는 것들만 설명해 봤습니다 !!!

이 글을 통해서 앞으로 github 활용을 잘 할 수 있었음 좋겠어요 😊
