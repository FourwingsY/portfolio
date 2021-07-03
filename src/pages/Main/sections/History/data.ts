export enum ProductStatus {
  LIVE = "LIVE",
  PRIVATE = "PRIVATE",
  DEAD = "DEAD",
}

export interface Product {
  duration: [Date, Date | null]
  productName: string
  experienced: string
  company: string
  status: ProductStatus
  link?: string
}

export const realclass: Product = {
  duration: [new Date(2020, 7, 18), null],
  productName: "Realclass v2.0",
  experienced: `\
    기존에 알던 지식과 경험을 총동원해 새로운 프로젝트를 진행했습니다. 
    Typescript, Next.js, redux, redux-saga... Showcase에 적은 글의 대부분은 이 프로젝트를 하면서 얻은 경험 중 일부를 적어내려간 것입니다.
    프로젝트의 기본 뼈대를 잡고, 컨벤션을 잡아가며, 다섯명의 프론트엔드 개발자가 협업해가며 즐겁게 진행했습니다.
    다섯명이 협업했지만, 제대로 된 코드 리뷰를 진행했기 때문에, 전체 프로젝트의 구조와 코드를 웬만큼은 파악하고 있다고 할 수 있습니다.
    Next.js를 좀더 깊게 사용하며 SSR / SSG에 대해서도 이해하기 시작했습니다.
  `,
  company: "Qualson",
  status: ProductStatus.LIVE,
  link: "https://realclass.co.kr/new",
}
export const crm: Product = {
  duration: [new Date(2020, 10, 1), new Date(2020, 3, 20)],
  productName: "Customer Relation Management",
  experienced: `\
    통칭 백오피스. 리얼클래스의 고객 관리, 판매 및 상품 관리용 페이지를 만들었습니다.
    백오피스를 개발하며 굉장히 복잡한 모델을 다루기도 했습니다. 특히 환불 관련된 부분은 혀를 내두를 정도였습니다.
    그래도 그나마 기존에 했던 업로딩고가 나름 백오피스에 가까운 서비스였기 때문에 쉽게 적응할 수 있었습니다. 
    수많은 CRUD 폼을 작성해봤던 경험을 다시 한번 활용해볼 수 있는 기회였습니다.
    빠른 개발을 위해 컴포넌트를 일일이 만드는 대신 ant.design 컴포넌트를 활용했습니다.
    컴포넌트를 가져다 쓰는 것의 장점과 단점을 동시에 느낄 수 있었습니다.
  `,
  company: "Qualson",
  status: ProductStatus.PRIVATE,
}
export const junior: Product = {
  duration: [new Date(2020, 5, 1), new Date(2020, 9, 30)],
  productName: "English for junior",
  experienced: `\
    비디오와 애니메이션이 가득한 판매용 메인페이지를 만드는 것은 즐거운 경험이었습니다.
    특히 슬라이더의 active 슬라이드가 더 커지게 보이도록 구현하는 과정이 일반적인 슬라이더 라이브러리로는 구현되지 않아서, 
    한참을 고민하다 그냥 새로 구현했던 것이 기억에 남습니다.
    기술적으로는 Next.js를 처음으로 경험했습니다.
  `,
  company: "Qualson",
  status: ProductStatus.LIVE,
  link: "https://e21.co.kr",
}
export const muzy: Product = {
  duration: [new Date(2020, 1, 25), new Date(2020, 8, 30)],
  productName: "Okay Doctor",
  experienced: `\
    팝송으로 영어를 배운다-는 오케이닥터의 사이트 유지보수를 진행했습니다.
    쿠폰 시스템을 새로 적용하는 것과, 환급 챌린지를 변경하는 업무도 진행했습니다.
    전 회사에서는 미디어를 업로드하고 관리하는 방식에 초점을 맞췄었다면, 
    이 곳에서는 미디어를 조작해가며 컨트롤하는 일이 굉장히 많았습니다. 웹페이지에 음악 플레이어가 백그라운드로 깔려있었습니다.
    HOC를 잘못 사용하면 코드가 복잡해지고 이해하기 힘들어진다는 사실을 꽤 깊이 깨달았습니다.
    Rxjs를 살짝 맛볼 수 있었습니다. 취향은 아니었습니다.
    (회사 일이 아닌) 개인적으로 이 사이트를 통째로 새로 만들어보면서 굉장히 많은 성장을 할 수 있었던 것 같습니다.
    현재 사이트는 살아있지만 판매는 중지된 상태입니다.
  `,
  company: "Qualson",
  status: ProductStatus.LIVE,
  link: "https://okaydoctor.co.kr",
}
export const qgis: Product = {
  duration: [new Date(2018, 4, 14), new Date(2020, 0, 8)],
  productName: "QGIS Plugin for ROKA",
  experienced: `\
    기존에 부대 내에서 사용하던 지형분석 도구들을 QGIS에서도 동작 가능하면서 훨씬 더 깔끔한 인터페이스를 가지도록 PyQt를 사용하여 플러그인으로 재개발했습니다.
    Python에 익숙하지 않았지만, 가지고 있던 기본 지식과 기본 도큐먼트만을 사용해 인터넷 없는 환경에서 프로그래밍하는 것은 색다른 경험이었습니다.
  `,
  company: "ROKA",
  status: ProductStatus.PRIVATE,
}
export const uploadingo: Product = {
  duration: [new Date(2016, 9, 30), new Date(2018, 4, 14)],
  productName: "Uploadingo",
  experienced: `\
    사내 업무용 콘텐츠 매니지먼트 플랫폼인 업로딩고를 개발했습니다. 
    복잡한 폼의 CRUD를 다뤄보았고, 다양한 그래프를 그려보았습니다.
    사내용으로 개발했던 툴이었지만, 2017년 후반기 즈음부터는 모회사인 메이크어스와 비슷하게 콘텐츠를 다루는 기업들에게 솔루션으로 판매하기도 했습니다. 
    이 프로젝트 중에는 선임 프론트엔드 개발자가 퇴사하면서 선임 개발자로서의 역할도 경험했습니다. 
    또한 redux와 Typescript를 일부 적용하면서 새로운 기술에 적응해나가는 경험을 할 수 있었습니다.
  `,
  company: "Makeus mobile",
  status: ProductStatus.DEAD,
  link: "https://www.facebook.com/uploadingo1/",
}
export const dingo: Product = {
  duration: [new Date(2015, 5, 1), new Date(2016, 9, 30)],
  productName: "Dingo.tv",
  experienced: `\
    React와 순수한 Flux를 사용해 몬캐스트의 리뉴얼 버전이나 다름없는 dingo.tv를 개발했습니다. 
    앞서 기 개발된 코드 베이스를 경험했다면, 이 때엔 하나의 레포지토리를 처음부터 만들어보는 경험을 했습니다. 
  `,
  company: "Makeus mobile",
  status: ProductStatus.DEAD,
  link: "https://apkpure.com/kr/com.makeus.dingo.kr",
}
export const moncast: Product = {
  duration: [new Date(2015, 1, 9), new Date(2015, 6, 31)],
  productName: "moncast.com",
  experienced: `\
    첫 회사의 첫 프로젝트입니다. Angular.js로 작성된 몬캐스트라는 콘텐츠 플랫폼을 유지보수하며, 멀티 이미지 콘텐츠를 추가하는 등의 작업을 진행했습니다.
  `,
  company: "Makeus mobile",
  status: ProductStatus.DEAD,
  link: "https://www.148apps.com/app/955367690/",
}
