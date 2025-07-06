export enum ProductStatus {
  LIVE = "LIVE",
  PRIVATE = "PRIVATE",
  DEAD = "DEAD",
}

export interface Product {
  duration: [string, string | null]
  productName: string
  experienced: string
  company: string
  status: ProductStatus
  link?: string
}

export const devplay: Product = {
  duration: ["2023-07-23", null],
  productName: "DevPlay Portal",
  experienced: `\
    데브시스터즈에서 맡고 있는 프로젝트입니다. 
    게임의 배포와 운영을 위한 퍼블리싱 플랫폼을 운영하기 위한 사이트이며, 리뉴얼 작업을 진행하고 있습니다.
    디자인시스템의 역할은 어디까지이고, 어느 정도의 확장성을 고려해야 할까, 와 같은 주제에 대해 다시 한번 고민하고 있습니다.
  `,
  company: "Devsisters",
  status: ProductStatus.PRIVATE,
  link: "",
}

export const devsistersEvents: Product = {
  duration: ["2023-07-23", null],
  productName: "이벤트 페이지",
  experienced: `\
    데브시스터즈 웹콘솔셀에서는 이벤트 페이지 작업도 겸하고 있습니다.
    백오피스 웹만 만들다가 가끔 이렇게 CSS와 애니메이션이 가득한 프로젝트를 진행하게 되면 기분을 리프레시하게 됩니다.
    프로젝트를 진행하면서 새 회사의 기술 스택에 익숙해지고 있습니다.
    그동안 별로 좋지 않은 시선으로 바라보던 Tailwind CSS도 막상 사용해보니 생각보다 별 차이 없구나, 라는 생각을 하게 되었습니다.
    다만 여전히 CSS 클래스가 잔뜩 포함된 코드는 읽기엔 영 좋지 않다고 생각합니다.
  `,
  company: "Devsisters",
  status: ProductStatus.LIVE,
  link: "https://cookierun16th.com",
}

export const pilleye: Product = {
  duration: ["2023-07-23", "2025-05-22"],
  productName: "Pilleye",
  experienced: `\
    메딜리티로 이직 후 맡은 프로덕트입니다. 입사 직후부터 2개월간 프로덕트의 초기 구조부터 새로 짜내었습니다. 
    홈페이지와 내부 어드민, B2B 고객을 위한 고객 어드민, 플러터 앱과 웹뷰까지, 하나의 프로덕트를 위한 모든 과정을 함께 했습니다.
    플러터를 진행하면서 새로운 경험을 하게 되어 많은 것을 배웠습니다.
  `,
  company: "Medility",
  status: ProductStatus.LIVE,
  link: "https://pilleye.com",
}

export const realclass: Product = {
  duration: ["2020-08-18", "2023-07-05"],
  productName: "Realclass v2.0",
  experienced: `\
    기존에 알던 지식과 경험을 총동원해 새로운 프로젝트를 진행했습니다. 
    Typescript, Next.js, redux, redux-saga... Showcase에 적은 글의 대부분은 이 프로젝트를 하면서 얻은 경험 중 일부를 적어내려간 것입니다.
    프로젝트의 기본 뼈대를 잡고, 컨벤션을 잡고 코드 리뷰를 진행하며, 여러명의 프론트엔드 개발자가 협업해가며 즐겁게 진행했습니다.
    그동안 제대로 하지 못했던, 프론트엔드 개발자 사이의 협업에 대한 경험을 제대로 해보는 중입니다.
    한편으로는, Next.js를 좀더 깊게 사용하며 SSR / SSG에 대해서도 이해하기 시작했습니다.
    마지막에는 redux를 제거하고 swr 및 recoil로 옮겨가는 작업을 진행했습니다.
  `,
  company: "Qualson",
  status: ProductStatus.LIVE,
  link: "https://realclass.co.kr/new",
}
export const qms: Product = {
  duration: ["2021-12-01", "2023-07-05"],
  productName: "Qualson Management System",
  experienced: `\
    통칭 어드민. 퀄슨의 여러 프로덕트에 공통적으로 사용되는 리얼클래스의 고객 관리, 판매 및 상품 관리용 백오피스를 만들었습니다.
    이 프로젝트를 진행하면서는 기존 어드민에서 사용된 antd 컴포넌트를 제거하고, 손수 한땀 한땀 컴포넌트를 만들었습니다.
    이 과정에서, 기존 회사의 디자인 시스템에서 부족하다고 생각한 부분을 스스로 채워보고자 시도해보았고, 여기에 적용해보았습니다.
    개인적인 디자인 시스템을 만들어보는 경험을 해봤습니다. 이 섹션의 제목을 클릭하시면 피그마로 이동합니다.
  `,
  company: "Qualson",
  status: ProductStatus.PRIVATE,
  link: "https://www.figma.com/file/9bffFe0mlm15ercj4A8y5E/Design-System?node-id=0%3A1&t=iBdP3EHsxfxVlM3a-1",
}
export const junior: Product = {
  duration: ["2020-06-01", "2020-10-30"],
  productName: "English for junior",
  experienced: `\
    비디오와 애니메이션이 가득한 판매용 메인페이지를 만드는 것은 즐거운 경험이었습니다.
    특히 슬라이더의 active 슬라이드가 더 커지게 보이도록 구현하는 과정이 일반적인 슬라이더 라이브러리로는 구현되지 않아서, 한참을 고민하다 그냥 새로 구현했던 것이 기억에 남습니다.
    기술적으로는 Next.js를 처음으로 경험했습니다.
  `,
  company: "Qualson",
  status: ProductStatus.LIVE,
  link: "https://e21.co.kr",
}
export const muzy: Product = {
  duration: ["2020-02-25", "2020-09-30"],
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
  duration: ["2018-05-14", "2020-01-08"],
  productName: "QGIS Plugin for ROKA",
  experienced: `\
    기존에 부대 내에서 사용하던 지형분석 도구들을 QGIS에서도 동작 가능하면서 훨씬 더 깔끔한 인터페이스를 가지도록 PyQt를 사용하여 플러그인으로 재개발했습니다.
    Python에 익숙하지 않았지만, 가지고 있던 기본 지식과 기본 도큐먼트만을 사용해 인터넷 없는 환경에서 프로그래밍하는 것은 색다른 경험이었습니다.
  `,
  company: "ROKA",
  status: ProductStatus.PRIVATE,
}
export const uploadingo: Product = {
  duration: ["2016-10-30", "2018-05-13"],
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
  duration: ["2015-06-01", "2016-10-30"],
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
  duration: ["2015-02-09", "2015-07-31"],
  productName: "moncast.com",
  experienced: `\
    첫 회사의 첫 프로젝트입니다. Angular.js로 작성된 몬캐스트라는 콘텐츠 플랫폼을 유지보수하며, 멀티 이미지 콘텐츠를 추가하는 등의 작업을 진행했습니다.
    공부할 때엔 바닐라 스크립트만 공부했었기에, coffeescript, stylus 등의 도구를 사용하며 빌드 설정은 이렇게 하는거구나, 하는 것들이 제일 기억에 남습니다.
  `,
  company: "Makeus mobile",
  status: ProductStatus.DEAD,
  link: "https://www.148apps.com/app/955367690/",
}
