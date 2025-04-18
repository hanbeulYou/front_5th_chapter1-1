## 과제 체크포인트

### 배포 링크

https://hanbeulyou.github.io/front_5th_chapter1-1/

### 기본과제

#### 1) 라우팅 구현:

- [x] History API를 사용하여 SPA 라우터 구현
  - [x] '/' (홈 페이지)
  - [x] '/login' (로그인 페이지)
  - [x] '/profile' (프로필 페이지)
- [x] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [x] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [x] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.

#### 2) 사용자 관리 기능:

- [x] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [x] 사용자 정보 저장 (이름, 간단한 소개)
  - [x] 로그인 상태 관리 (로그인/로그아웃 토글)
- [x] 로그인 폼 구현
  - [x] 사용자 이름 입력 및 검증
  - [x] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [x] 로그아웃 기능 구현
  - [x] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

#### 3) 프로필 페이지 구현:

- [x] 현재 로그인한 사용자의 정보 표시
  - [x] 사용자 이름
  - [x] 간단한 소개
- [x] 프로필 수정 기능
  - [x] 사용자 소개 텍스트 수정 가능
  - [x] 수정된 정보 LocalStorage에 저장

#### 4) 컴포넌트 기반 구조 설계:

- [x] 재사용 가능한 컴포넌트 작성
  - [x] Header 컴포넌트
  - [x] Footer 컴포넌트
- [x] 페이지별 컴포넌트 작성
  - [x] HomePage 컴포넌트
  - [x] ProfilePage 컴포넌트
  - [x] NotFoundPage 컴포넌트

#### 5) 상태 관리 초기 구현:

- [x] 간단한 상태 관리 시스템 설계
  - [x] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [x] 상태 변경 함수 구현
  - [x] 상태 업데이트 시 관련 컴포넌트 리렌더링

#### 6) 이벤트 처리 및 DOM 조작:

- [x] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [x] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)

#### 7) 라우팅 예외 처리:

- [x] 잘못된 라우트 접근 시 404 페이지 표시

### 심화과제

#### 1) 해시 라우터 구현

- [x] location.hash를 이용하여 SPA 라우터 구현
  - [x] '/#/' (홈 페이지)
  - [x] '/#/login' (로그인 페이지)
  - [x] '/#/profile' (프로필 페이지)

#### 2) 라우트 가드 구현

- [x] 로그인 상태에 따른 접근 제어
- [x] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션

#### 3) 이벤트 위임

- [x] 이벤트 위임 방식으로 이벤트를 관리하고 있다.

## 과제 셀프회고

1주차 과제를 마무리했습니다.
이번 과제를 통해 리액트에서 자연스럽게 사용하던 SPA와 라우팅 개념을, 바닐라 JS 환경에서 직접 구현해보며 깊이 있게 이해할 수 있는 좋은 기회가 되었습니다.
특히 배포 과정에서 예상치 못한 다양한 이슈를 마주하면서, SPA 구조와 정적 파일 서버에 대한 개념을 보다 명확히 정리할 수 있었습니다.

### 🧠 기술적 성장

#### SPA 라우터

그동안은 바닐라 JS로 개발할 때 단순히 링크를 클릭해 HTML 페이지를 로드하는 방식만 사용해왔습니다.

이러한 방식은 결국 매 요청마다 전체 HTML을 새로 불러오는 구조로, SPA의 개념을 제대로 이해하지 못한 상태였습니다.

하지만 이번 과제에서는 history API를 직접 활용해 라우터 구조를 설계하면서, SPA 라우팅의 원리를 스스로 구현해보았습니다.

이를 통해 라우터가 단순히 "페이지를 전환하는 도구"가 아니라, 브라우저의 동작을 제어하고 사용자 경험을 책임지는 중요한 역할임을 알게 되었습니다.

더 나아가 성능과 사용자 흐름까지 고려한 라우터 설계의 필요성도 느꼈습니다.

---

#### History API & Hash Router

이전 회사에서 진행했던 프로젝트에서도 SPA 페이지를 내부 플랫폼에 배포한 경험이 있었습니다.

당시에도 GitHub Pages처럼 새로고침 시 흰 화면만 보이는 문제가 있었고, HashRouter를 사용하면 해결된다는 점은 알았지만 정확한 원인을 이해하지 못한 채 넘어갔습니다.

이번 학습을 통해 그 이유를 명확히 이해할 수 있었고, History API와 Hash Router의 차이점, 그리고 정적 파일 서버에서의 경로 처리 방식까지 폭넓게 학습할 수 있었습니다.

---

#### 이벤트 위임

리액트에서는 컴포넌트 내에서 직접 이벤트 핸들러를 지정하는 것이 너무나 자연스러웠습니다.

하지만 이번 과제에서는 JS로 동적으로 생성된 DOM 요소에 이벤트가 바인딩되지 않는 문제를 마주했고, 이 과정에서 이벤트 위임(Event Delegation) 기법의 필요성을 체감했습니다.

document 단에서 data-link, data-action 속성을 기반으로 이벤트를 처리해야 했고, 이를 통해 프레임워크가 제공하는 편리함 뒤에는 많은 복잡성과 설계가 숨어 있다는 사실을 느낄 수 있었습니다.

---

### 🤔 아쉬웠던 부분과 고민들

> 배포에 너무 많은 시간을 쏟았습니다

배포에 너무 많은 시간을 쏟았습니다 이번 과제에서 가장 많은 시간을 소모한 부분은 배포였습니다.

처음에는 단순히 Vite로 빌드하고 GitHub Pages에 올리면 끝날 거라고 생각했는데, SPA 특성상 히스토리 모드에서는 404가 뜨는 문제가 발생하면서 예상보다 훨씬 많은 시간을 쓰게 되었습니다.

처음엔 단순히 "왜 안 뜨지?" 정도였는데, 점점 이유를 파고들다 보니 정적 파일 서버가 라우팅을 처리하지 못한다는 구조적인 한계에 도달하게 되었고, 이를 우회하기 위한 방법들을 공부하고 적용해야 했습니다.

'이렇게까지 해야 하나?' 싶기도 했지만, 결과적으로는 GitHub Pages와 Vercel 같은 플랫폼의 동작 방식 차이, 그리고 history API와 hash router의 본질적인 차이에 대해 알 수 있는 좋은 기회가 되었습니다.

다만, 배포 환경에 이렇게까지 의존적인 구조라면, 개발자가 이를 매번 고려해야 하는지에 대해서는 고민이 남습니다.

> 라우터 구조가 마음에 들지 않습니다

지금의 라우터는 말 그대로 급하게 기능을 붙여 만든 구조에 가깝습니다.
기능은 동작하지만, 뭔가 깔끔하지 않고 손대기가 꺼려지는 코드가 되어버렸습니다.

특히 싱글톤으로 구현하긴 했지만, HashRouter와 HistoryRouter를 하나로 처리하려다 보니 내부 분기처리가 늘어나면서 코드의 명확성이 떨어졌습니다.

"이걸 나눈다면 어디서 나누는 게 좋을까?", "라우터 내부에 상태를 얼마나 들고 있어야 할까?" 같은 질문이 계속 머리에 맴돌았지만, 딱히 명쾌한 답을 찾지는 못했습니다.

지금은 일단 되는 코드지만, 유지보수나 확장성을 생각하면 이대로 두기 어렵다는 생각이 강하게 남았습니다.

하지만 아직 구체적인 개선 방안이 떠오르지 않아, 리팩토링에는 선뜻 손을 대지 못했습니다.

> 관심사 분리에 대한 감이 부족하다고 느꼈습니다

비즈니스 로직과 UI, 이벤트 처리 등을 적절히 나눠보고자 했지만, 실제로 코드를 나누다 보면 어디까지 나누는 것이 맞는지에 대한 기준이 흐릿하게 느껴졌습니다.

"여긴 UI니까 분리해야지" 하고 나누긴 했는데, 오히려 모듈 간에 상호 의존성이 복잡해지고, 관심사를 분리했다기보다 파일만 분산된 느낌이 들기도 했습니다.

특히 이벤트 위임 로직과 라우터, DOM 조작이 얽히는 부분에서는 "이게 맞는 방향일까?" 하는 고민이 많았습니다.

리팩토링을 하면서 코드가 깔끔해지는 게 아니라 혼란스러워지는 느낌이 들기도 했고요.

아직은 구조적인 고민을 스스로 해결하기엔 부족한 점이 많다는 걸 다시 한번 느꼈습니다.
