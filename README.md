# YG's Portfolio

## About directory structures

- pages: 라우터 용도로 사용합니다.
- src/pages: 실제 페이지를 구현합니다.
- src/pages/${PAGE}/sections: 페이지를 구성하는 섹션입니다. 페이지 컴포넌트는 단순해지고, 읽기 쉬워집니다.
- src/pages/${PAGE}/components: 해당 페이지에서만 사용되는 컴포넌트입니다.
- src/components: 공용 컴포넌트입니다. 일반적으로 두 개 이상의 페이지에서 사용됩니다.
