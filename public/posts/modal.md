# Modal system

범용적인 모달을 위한 구조 설계

## 모달을 어떻게 열 것인가

모달 시스템의 설계에서 가장 중요하면서 가장 까다로웠던 부분은, 모달을 어떻게 열 것인가- 였다.
이 부분에서 중요하게 유지해야 할 점으로 염두에 두었던 점이 두 가지가 있다.

첫 번째로는 모달을 열 때, **언제 어디서든 어떤 모달이든 띄울 수 있어야 한다**는 점이었다.
그렇기 때문에 `<SomeModal visible={true} />` 방식으로 특정 페이지에 특정 모달을 제한하는 방식은 옵션이 아니었다.
대신 이 부분을 적용하기 위해 (그리고 거의 항상 같이 사용하는, `redux`와 같은) 전역 스토어를 활용한다.
때문에 모달을 연다는 것은, 타입과 속성을 한번에 담아 액션으로 `dispatch(openModal({ type, props }))` 하는 것과 동일한 의미가 된다.
사실, 이 문제는 이미 [이 글](https://fourwingsy.medium.com/afd1923797d8)을 쓰던 시점에 이미 원하던 모습에 90% 가까워졌다고 생각한다. 지금의 구조와는 디테일한 부분에서 차이가 조금 있다.
`redux`를 사용하지 않는다면? 음 그런 경우에 부딛히면, 그 때 생각해봐야지. (나중에 나중에)

두 번째는 **모달 타입에 따른 속성값 일치 여부가 타입시스템으로 검증 가능**할 수 있는 것을 목표로 삼았다. 타입스크립트와 모달 시스템의 조화를 이루는 것.
하지만 첫 번째 목표를 위해 이미 `redux`를 사용중이었기 때문에, 이 문제는 `openModal()의 타입을 어떻게 정의할 것인가?`와 같은 질문이 된다.
일단, 차근차근 하나씩 생각해보자.

```tsx
// this action creator will return
openModal('Alert', { message: 'Hello' })

// this action
{ type: '@modal/OPEN_MODAL', payload: { type: 'Alert', props: { message: 'Hello' } } }

// and trigger rendering this Component
<Alert message="Hello" />
```

`<Alert />` 이라는 컴포넌트가 정의되어 있을 것이다. 여기에서 이 컴포넌트의 이름과 props 정도는 알아낼 수 있다. Alert의 props는 `interface AlertProps { message: string }`를 받는다고 하자.
하지만 `<Confirm />` 이라는 컴포넌트도 존재하며, 이 컴포넌트의 props는 `interface ConfirmProps { onConfirm(): void }` 때,
이 두 케이스를 모두 커버하는 하나의 액션을 만들어낼 수 있을까?

## 타입시스템으로 검증 가능한 액션 만들어내기

일단 첫 구상은 이런 것에서 시작했다.

```js
import Alert from "./Alert"
import Confirm from "./Confirm"

// make map of components
const modals = { Alert, Confirm }

// extract some useful types
type Modals = typeof modals
type ModalType = keyof Modals
type ModalProps<T extends ModalType> = React.ComponentProps<Modals[T]>

type Test1 = ModalProps<'Alert'> // == { message: string }
type Test2 = ModalProps<'Confirm'> // == { onConfirm(): void }
```

그러니까 'Alert'만 있으면 `{ message: string }` 라는 타입을 뽑아낼 수가 있다.
이제 payload의 타입을 이렇게 표현할 수 있다.

```ts
type OpenModalPayload<T extends ModalType> = { type: T; props: ModalProps<T> }
```

아주 멋지다! 이제 이걸로 액션을 만들어보자.
타입스크립트와 리덕스를 사용하고 있자니, 웬만하면 둘 중 하나의 라이브러리에 기준을 맞추게 되는 것 같다.
`@reduxjs/toolkit` 혹은 `typesafe-actions`. 요즘엔 리덕스툴킷이 "공식"의 이름을 업고 승기를 이미 잡아가는 듯 하다.
한번 `@reduxjs/toolkit`의 createAction에 이 Payload 타입을 적용해보자!

```ts
import { createAction } from "@reduxjs/toolkit"
const openModal = createAction<OpenModalPayload<ModalType>>("@modal/OPEN_MODAL")
openModal({ type: "Alert", props: { message: "test" } }) Error, OK
openM
openModal({ type: "Alert", props: { onConfirm: () => {} } }) or, OK
```

깔끔하다!

## 난관 봉착

TBD... 아 이걸 어떻게 설명하지
