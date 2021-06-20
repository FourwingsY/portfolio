export interface Work {
  duration: [Date, Date | null]
  projectName: string
  projectDetail: string
  company: string
}

export const realclass: Work = {
  duration: [new Date(2020, 7, 18), null],
  projectName: "Realclass v2.0",
  projectDetail: "기존 여러 서비스를 한데 모으는 새로운 서비스 개발",
  company: "Qualson",
}
export const junior: Work = {
  duration: [new Date(2020, 5, 1), new Date(2020, 9, 30)],
  projectName: "English for junior",
  projectDetail: "애니메이션 가득한 판매용 소개 페이지",
  company: "Qualson",
}
export const muzy: Work = {
  duration: [new Date(2020, 1, 25), new Date(2020, 9, 30)],
  projectName: "Okay Doctor",
  projectDetail: "오케이닥터 사이트 유지보수, 쿠폰시스템 도입, 새로운 챌린지 시스템 추가",
  company: "Qualson",
}
export const qgis: Work = {
  duration: [new Date(2018, 4, 14), new Date(2020, 0, 8)],
  projectName: "QGIS Plugin for ROKA",
  projectDetail: "군대에서 필요한 지형정보 분석 및 좌표 계산 플러그인 개발",
  company: "ROKA",
}
export const uploadingo: Work = {
  duration: [new Date(2015, 11, 1), new Date(2018, 4, 14)],
  projectName: "Uploadingo",
  projectDetail: "페이스북과 유튜브용 CMS 및 노출/재생 등 수치 시각화 도구",
  company: "Makeus mobile",
}
export const dingo: Work = {
  duration: [new Date(2015, 2, 9), new Date(2015, 10, 30)],
  projectName: "Dingo.com",
  projectDetail: "피키캐스트를 꿈꿨던, 컨텐츠 커뮤니티",
  company: "Makeus mobile",
}
