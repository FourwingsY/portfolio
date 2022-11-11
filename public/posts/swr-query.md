---
title: SWR vs React Query
author: HS Yang
written: 2022.11.05
---
# SWR vs React Query

퀄슨 프론트엔드 개발팀에서는 대부분의 프로젝트를 Next.js를 사용해 진행한다. 약간 오래된 프로젝트의 경우 아직 redux를 혼용해서 사용하고 있지만, 점진적으로 recoil이나 SWR 같은 훅 기반의 툴로 넘어가고 있다. 

처음 훅 기반 도구로 전환할 때, 우리는 큰 생각 없이 Next.js를 만든 vercel의 SWR이 아마 가장 잘 맞을 것이라고 생각하고 SWR을 채택했던 듯 하다. 과거의 슬랙을 조금 찾아보니, 누군가 SWR을 시험적으로 도입했었고, 그 이후 별다른 고민 없이 SWR을 계속 사용하게 된 것 같다.

하지만 최근, React Query가 더 좋아보인다, 라는 의견도 슬금슬금 나오고 있어, 이 두 라이브러리의 차이점에 대해 알아보았다.

## 각 라이브러리의 의도

첫째로 알아볼 것은 각 라이브러리가 어떤 의도를 가지고, **어떤 문제를 해결하기 위해 만들어졌는지** 이다.

이런 의도는 보통 각 라이브러리 설명의 가장 첫째 문단에 등장하는데, 이 부분을 확실하게 짚고 넘어가고 나면, 같은 문제에 대해 왜 서로 다른 접근방식을 택했는지를 이해할 수 있다. 따라서, 라이브러리를 비교할 때 가장 중점적으로 보아야 하는 부분이다.

### SWR

> SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.\
> SWR은 stale: 캐시에서 데이터를 찾아 먼저 반환하고, revalidate: 데이터 가져오기 요청을 보내어, 결과적으로 최신의 데이터를 사용하기 위한 전략입니다.

여기에서는 가장 마지막 표현이 핵심인데, SWR이 리액트에서 사용된다는 점을 생각하면, SWR은 "최신의 데이터를 사용해 렌더링" 하기 위한 목적을 가진다. 

하지만 놓쳐서는 안되는 **결과적으로** 라는 표현을 곱씹어보면, 최신의 데이터를 사용하는 것보다 빠르게 캐시 데이터로 렌더링을 하는 것에 더 높은 우선순위를 두었다는 의미이다.

### React Query

> React Query ... makes fetching, caching, synchronizing and updating server state in your React applications a breeze.\
> ...React Query는 리액트 어플리케이션에서 서버 상태를 가져오고, 캐싱하고, 동기화하며, 업데이트하는 작업을 손쉽게 만들어주는 라이브러리입니다.

이 표현의 핵심은 **Server state**인데, 이게 대체 뭘 의미하는걸까? 소개 문단을 조금 더 내리면 이런 내용이 나온다. 

> Is persisted remotely in a location you do not control or own\
> 당신이 컨트롤할 수 없는 영역에 지속적으로 존재하며
>
> Requires asynchronous APIs for fetching and updating\
> 데이터를 읽고, 쓰려면 비동기 API가 필요하며
> 
> Implies shared ownership and can be changed by other people without your knowledge\
> 당신이 모르는 새에 다른 사람들에 의해 값이 바뀔 수도 있으며
> 
> Can potentially become "out of date" in your applications if you're not careful\
> 주의해서 관리하지 않으면 "구식" 정보가 되어버릴 가능성이 존재하는

그런 상태를 Server state라고 부르고 있다.

그러니까... 가장 간단하게 이해하자면, 백엔드 서버 너머에 존재하는 Database를 상상하면 될 것 같다.

그런데, 그 이야기가 왜 나왔을까? Frontend 영역에서 Database를 관리해야 한다는 이야기일까? 라고 생각하면 또 바로 다음 문단에서 우리의 궁금증을 해소해준다.

> Caching\
> 렌더링을 빠르게 하려면 캐싱을 해야 할거고\
> (사실 이 데이터 캐싱이 아래 대부분의 문제를 불러일으키는 원인이다)
> 
> Deduping multiple requests for the same data into a single request\
> 여러 컴포넌트에서 같은 데이터를 필요로 할 때 요청을 여러번 보내고 싶지는 않을 것이고
>
> Updating "out of date" data in the background\
> 캐싱했던 데이터가 "구식" 데이터가 되지 않게 업데이트도 해 줘야 하는데
>
> Knowing when data is "out of date"\
> 그 "구식"이 되는 시점이 언제인지도 파악해야 하고
> 
> Reflecting updates to data as quickly as possible\
> 최대한 빠르게 업데이트를 반영하고 싶을텐데
>
> Performance optimizations like pagination and lazy loading data\
> 페이징이나 레이지로딩같은 최적화도 적용해야 하고
>
> Managing memory and garbage collection of server state\
> 캐싱하고 있던 데이터가 메모리를 넘칠 정도로 많아지지 않게 메모리 관리까지 필요할 수도 있고
> 
> Memoizing query results with structural sharing\
> structural sharing도 놓칠 수 없지\
> (이 용어가 익숙하진 않겠지만, 데이터의 일부에만 변화가 생겼을 때, 새 객체를 만들지 않고 기존 객체들을 재사용하는 방식인데\
> 리듀서를 작성할 때, 우리가 왜 `{ ...state, ...updatedData }` 처럼 destructing을 했었는지를 떠올려보자.)


요약하자면 redux에서 store를 쓰듯이, API 호출을 줄이기 위해 *API를 통해 불러온 데이터를 한 번만 불러와 저장해두고 반복해서 쓰려고* 할 때
그 저장된 데이터를 server state 라고 부르는 것이고, 이 데이터들을 관리할 때 꽤 많은 문제들이 발생할 수 있다는 말을 아주 길게 써 두었다.

그러니까 React Query는 **API 호출로 받아온 데이터를 쉽게 관리할 수 있도록 지원**해주는 라이브러리다.

### 비교

SWR은 빠르게 렌더링하는데에 필요한 데이터를 제공하는데에 초점을 맞추고 있고 React Query는 API 호출로 받아온 데이터를 관리하는데에 초점을 맞추고 있다.
얼핏 보면 같은 일을 동일하게 할 수 있는 라이브러리인데, 이 의도의 차이가 어떤 부분에서 차이를 가지는지 한번 알아보자.


## 캐싱

두 라이브러리가 각자의 목적을 달성하기 위해 가장 중요하게 생각하는 부분은 "캐싱"이다. 

한 번 불러온 데이터를 서로 다른 컴포넌트의 렌더링에 반복해서 사용하기 위해서는 어딘가에 저장해야 하고, 이 데이터를 반복해서 꺼내쓸 수 있어야 한다.

이 때, React Query에서 지적했던 것 처럼, 개발자에게는 몇 가지 고민거리가 같이 생기는데, 주목할만한 주제를 뽑자면 다음과 같다.

> **Deduping**: Deduping multiple requests for the same data into a single request\
> 여러 컴포넌트에서 같은 데이터를 필요로 할 때 요청을 여러번 보내고 싶지는 않을 것이고
>
> **Revalidating**: Updating "out of date" data in the background\
> 캐싱했던 데이터가 "구식" 데이터가 되지 않게 업데이트도 해 줘야 하는데
>
> **Stale**: Knowing when data is "out of date"\
> 그 "구식"이 되는 시점이 언제인지도 파악해야 하고

### Deduping

두 라이브러리 모두 Deduping 을 지원한다. SWR의 경우 `dedupingInterval` 옵션을 제공하고, React Query는 하나의 리퀘스트가 끝나기 전까지 들어온 요청들을 자동으로 deduping 해 준다.

Q: React Query는 `dedupingInterval` 옵션이 없나? 이 옵션을 대체할 무언가가 있나?

A: React Query는 `staleTime` 옵션을 제공하고 있다. staleTime은 "받아온 데이터의 유통기한이 얼마인가"를 지정하는 값이고, 이 시간이 지나기 전에 데이터를 읽어가려고 할 때에는 아직 유통기한이 남은-캐싱된- 데이터를 반환한다.

Q: 두 옵션의 동작 간에 차이가 없나?

A: 거의 비슷하지만 약간의 차이가 있다. 그 차이는 컴포넌트가 처음으로 mount 될 때 눈에 띄는데, 기본적으로 SWR은 컴포넌트가 최초로 mount 될 때에는 "무조건 데이터를 다시 가져온다." React Query는 마운팅 때에도 캐싱했던 데이터를 그대로 반환하는 것과 대조적이다. 
예를 들어, A, B 두 페이지가 있고, 각 페이지에서 React Query를 사용해 불러오는 데이터에 dedupingInterval과 staleTime을 둘 다 10초로 설정해 두었다고 가정해보자. 유저가 10초 내에 A -> B -> A 로 페이지를 옮겨다닐 경우 유저가 두 번째로 A 페이지에 진입했을 때, SWR은 A 페이지를 캐싱된 데이터로 먼저 렌더링 한 뒤 새로운 데이터를 불러오고 리렌더링을 실행하지만, React Query는 처음 A 페이지를 그릴 때 받아왔던 데이터의 유효기간이 남아있으므로 추가적인 요청을 하지 않고 아까 보았단 A 페이지를 동일하게 그릴 것이다.

### Revalidating

Q: 그렇다면 데이터를 "다시 가져오는" 시점은 어떻게 되는가? SWR은 컴포넌트가 마운팅 될 때 뿐인가?

A: 정확하게는 `useSWR` 또는 `useQuery` 훅이 실행될 때, 데이터를 새로 가져올지, 캐시 데이터를 반환할지 결정한다. SWR의 경우, (별도의 옵션을 설정하지 않는다면) 처음으로 훅이 실행되는 시점에 무조건 새 데이터를 가져오는 편이고, `mutate` 함수를 통해 사용자가 다시 불러오거나, 덮어쓸 수 있다. React Query는 `staleTime`이 지나지 않은 데이터가 있다면 새로 가져오지 않는 것을 기본으로 하고, 이 시간이 지났다면 데이터를 알아서 가져오도록 관리해주는 방식이다. React Query는 데이터를 mutate한다는 표현 대신 `invalidateQueries`, 캐시를 무효화 한다-는 표현을 쓴다. 데이터를 덮어쓰는 함수는 `setQueryData`로 분리되어있다. 물론 두 라이브러리 모두 데이터가 업데이트 되지 전까지는 캐싱된 데이터를 반환한다.

Q: 일정 간격으로 자동으로 다시 데이터를 polling 할 수도 있나?

A: 둘 모두 동일하게 지원한다. Window focus 때 revalidate 하는 옵션도 동일하게 존재한다. 

Q: React Query에는 useMutation 이 있는데, 이것은 React Query의 장점으로 칠 수 있지 않나?

A: 그 훅은 Post/Put/Patch/Delete 같은 요청을 useQuery처럼 다루기 위한 훅일 뿐, 받아왔던 데이터의 Revalidating과는 다른 관점의 이야기이다. 이 섹션에서는 이야기하지 않는다.

### Stale

Q. React Query에는 `staleTime`이 있어서 캐시의 유효기간을 지정할 수 있다고 했다. SWR은 Stale 관련된 기능이 있나?

A. SWR에는 stale에 대한 개념이 없다. SWR은 데이터를 캐싱하고 관리하기 위한 라이브러리가 아니라, 최신의 데이터로 렌더링하는데에 초점을 맞추고 있다. React Query와 비교하자면, 첫 렌더링 시에는 `staleTime`이 항상 0인 상태라고 볼 수 있지만, 한번 렌더링 되고 언마운트 되기 전까지는 `staleTime`이 무한대인 상태에 가깝다. 동일한 화면, 혹은 컴포넌트 내에서는 캐싱된 데이터가 끝까지 사용된다. 

## 결론

그렇다면 두 라이브러리 중 어떤 라이브러리를 선택하는 게 좋을까?

SWR은 페이지 렌더링에 집중한다. Next.js가 SSG, Static Site Generation을 통해 HTML로 페이지를 내려주는 방식을 권장하는 것과 같은 맥락이라고 보여진다. static한 HTML이 뼈대가 되고, 데이터가 한 번 채워진 후에는 유저의 액션, 이벤트가 발생할 때 새로운 데이터로 업데이트하면 된다. 항상 최신의 데이터로 렌더링해줘야 하는 페이지가 많을 때 적합할 것 같다. 서버 사이드 렌더링까지 충분히 고려된 것으로 보인다.

React Query는 조금 더 데이터 관리에 집중한다. 각 데이터별로 적절한 캐싱 기간을 지정할 수 있다. 어떤 데이터는 한 번 받아온 뒤 세션이 끝날 때 까지 다시 요청을 하지 않아도 될 수도 있고, 어떤 데이터는 항상 최신으로 불러와야 할 수도 있다. SPA가 빠릿하게 동작하기 위해서는 API를 통해 받아온 데이터를 캐싱한 뒤 최대한 재사용하면서 네트워크 콜을 최대한 줄이는게 좋다-는 명제를 충실히 이행하기 위한 도구이다. 유저의 페이지 이동이 잦은 사이트라면, 페이지 이동 시 전에 불러온 데이터를 그대로 사용하고 추가적으로 요청하지 않는 React Query가 적합할 것 같다. 

### 우리에게는 무엇이 더 적절한가

리얼클래스를 개발하는 관점에서 상상해서 비교해보자. 리얼클래스의 데이터들은 대개 "공개 데이터"와 "개인 학습 데이터"로 구분된다. 

공개 데이터는 거의 변하지 않으므로 React Query의 캐싱 옵션이 꽤 쓸만할 것 같다. 하지만 SWR에서도 `revalidateIfStale: false` 옵션을 주면, 최초 1회만 불러오는 방식으로 처리할 수 있다. 

그렇다면 개인 학습 데이터는 어떨까? 두 가지 케이스를 고려해볼 수 있겠다. 첫째로, 유저가 학습 중인 화면이 있다. 이 화면에서 필요한 데이터 중 하나는 유저의 지난 학습 기록을 가져와 이어하기 등을 확인하기 위한 데이터가 있다. 이 데이터는 렌더링이 조금 늦더라도 최대한 새 데이터를 가져와 보여주는 것이 유저에게 더 적절하다. 캐시로 된 데이터를 안 쓰는게 좋다는 점에서는, React Query의 `invalidateQueries`를 사용하면 적절할 것 같다. SWR에서도 mutate를 통해 데이터를 비워버릴 수도 있긴 하지만 네이밍의 적절함에 대해 React Query에 1점을 준다.

두 번째 케이스는 학습 진행도 데이터인데, 리얼클래스의 학습은 단계가 많이 나누어져 있기 때문에 다음 단계로 이동할 때 revalidate 해주면 된다. 또한 학습을 끝내고 학습 홈으로 돌아가는 과정에서도 동일하게 고려될 수 있겠다. 리얼클래스의 각 단계 학습은 최소한 30초, 길면 (영상 시청이므로) 10분 가량 소요된다. 따라서 학습 기록은 2-3초만에 이동한 경우 실질적으로는 업데이트되었다고 여길 필요가 없기 때문에, 10초 이상 지난 경우에만 다시 받아와도 좋을 듯 하다. `staleTime`이 꽤 적절하게 사용될 만한 케이스인 것 같다. 물론 SWR을 사용하면 페이지를 이동할 때 마다 revalidate 해주는 기본 옵션을 사용해도 큰 문제가 없다. React Query가 약간 더 적절한 것 같지만, 옵션 설정을 신경쓰는 것에 비해 얻어가는 이득이 거의 없다시피 하다고 판단해 비긴 것으로 하겠다.

이 외의 관점에서 React Query의 가장 큰 매력 포인트는 공식 DevTools를 제공한다는 점이다. 여기에 1점의 가산점을 준다.

간단하게 비교를 해 봤지만, React Query가 약간 더 적절할 수 있겠다는 생각이 든다. 하지만 이 정도 차이는 현재 잘 작동하고 있는 라이브러리를 교체하는 수고를 들일 정도는 아니라고 보인다. 어쩌면 새 프로젝트를 진행하게 된다면, 그 곳에는 React Query를 고려해볼 만 하지 않을까? 
