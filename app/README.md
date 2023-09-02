# YG's portfolio

## 구성

Next.js 13 (WIP: + appdir) 기반으로 구성하였으며, 아래 구조를 갖습니다.

- 홈 (index)
- 커스텀 페이지 (activity)
- MDX 기반의 페이지 (showcase)
- TODO: 블로그 (blog)

## About directory structures

- @types: 전역 타입 및 타이핑이 되지 않은 라이브러리의 `d.ts` 파일들이 있습니다. 써드파티에 의한 `window.thirdParty` 같은 변수의 타입도 여기에서 관리합니다.
- components: 공용 컴포넌트입니다. 일반적으로 두 개 이상의 페이지에서 사용됩니다.
- constants: 공용 상수들을 모아둡니다. ex. 페이지와 모달에 공통으로 사용되는 경우, 여기에 둡니다.
- examples: 쇼케이스 페이지 상단에 보여줄 동작하는 예제 컴포넌트를 보관합니다.
- hocs: Higher Order Components 들을 모아둡니다. `Context`는 대부분 HOC로 내려주는 방식을 취하고 있어, 여기에 함께 둡니다.
  - Context를 참조하는 `useSomeContext()` 같은 훅도 여기에 포함됩니다.
- icons: SVG 아이콘을 모아둡니다. 각 아이콘은 width, height, color 값을 props로 받습니다.
- modals: 모달은, 개념적으로 하나의 페이지로 봅니다. 때문에 컴포넌트가 아닌 별개의 폴더로 따로 관리합니다.
  - 모달을 관리하기 위핸 register, Container 등이 여기에 포함됩니다.
- pages: 실제 페이지를 구현합니다.
  - pages/Layout: 페이지의 공통 레이아웃을 구성합니다.
  - pages/${PAGE}/sections: 페이지를 구성하는 섹션입니다. 페이지 컴포넌트는 단순해지고, 읽기 쉬워집니다.
  - pages/${PAGE}/sections/${SECTION}/components: 해당 섹션에서만 사용되는 컴포넌트를 모아둡니다.
- styles: CSS-in-js 관련 공통 코드를 모아둡니다.
- utils: 재사용 될 법한, 간단한 함수들을 모아둡니다. 분류 기준은 **재사용 가능성**이므로 한 번만 사용되는 함수도 여기에 있을 수 있습니다.
