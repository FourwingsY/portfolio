interface Highway {
  id: string
  name: string
  isOpened?: boolean
}

export const HIGHWAYS: Highway[] = [
  { id: "1", name: "경부" },
  { id: "15", name: "서해안" },
  { id: "17-1", name: "익산평택" },
  { id: "17-2", name: "평택파주" },
  { id: "25-1", name: "호남" },
  { id: "25-2", name: "논산천안" },
  { id: "27", name: "순천완주" },
  { id: "29", name: "세종포천" },
  { id: "35-1", name: "중부" },
  { id: "35-2", name: "통영대전" },
  { id: "37", name: "제2중부" },
  { id: "45", name: "중부내륙" },
  { id: "55", name: "중앙" },
  { id: "65", name: "동해" },
  { id: "10", name: "남해" },
  { id: "12-1", name: "광주대구" },
  { id: "12-2", name: "무안광주" },
  { id: "14", name: "함양울산" },
  { id: "16", name: "울산" },
  { id: "20", name: "새만금포항" },
  { id: "30", name: "서산영덕" },
  { id: "32", name: "당진청주" },
  { id: "40", name: "평택제천" },
  { id: "50", name: "영동" },
  { id: "52", name: "광주원주" },
  { id: "100", name: "수도권제1순환" },
  { id: "300", name: "대전남부순환" },
  { id: "400", name: "수도권제2순환" },
  { id: "500", name: "광주외곽순환" },
  { id: "600", name: "부산외곽순환" },
  { id: "700", name: "대구외곽순환" },
  { id: "110", name: "제2경인" },
  { id: "120", name: "경인" },
  { id: "130", name: "인천공항" },
  { id: "102", name: "남해제1지선" },
  { id: "104", name: "남해제2지선" },
  { id: "105", name: "남해제3지선" },
  { id: "151", name: "서천공주" },
  { id: "153", name: "평택시흥" },
  { id: "171", name: "오산화성·용인서울" },
  { id: "173", name: "익산평택지선" },
  { id: "202", name: "새만금포항지선1", isOpened: false },
  { id: "204", name: "새만금포항지선2" },
  { id: "251", name: "호남지선" },
  { id: "253", name: "고창담양" },
  { id: "255", name: "강진광주", isOpened: false },
  { id: "292", name: "세종포천오송지선", isOpened: false },
  { id: "301", name: "상주영천" },
  { id: "451", name: "중부내륙지선" },
  { id: "551", name: "중앙지선" },
]

export interface RestAreaGroup {
  name: string
  type: string
  center: { lat: number; lng: number }
  notes?: string
  accessRoutes: {
    highwayId: string
    direction: string
  }[]
}

export const REST_AREA_GROUPS: RestAreaGroup[] = [
  {
    name: "양산휴게소",
    type: "단방향",
    center: { lat: 37.601776, lng: 129.073636 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "언양휴게소",
    type: "단방향",
    center: { lat: 35.597942, lng: 129.141801 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "건천휴게소",
    type: "상하행",
    center: { lat: 35.831305, lng: 129.109277 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "경산휴게소",
    type: "단방향",
    center: { lat: 35.879323, lng: 128.810331 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "칠곡휴게소",
    type: "상하행",
    center: { lat: 36.0159, lng: 128.429659 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "김천휴게소",
    type: "상하행",
    center: { lat: 36.130179, lng: 128.164396 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "추풍령휴게소",
    type: "상하행",
    center: { lat: 36.200032, lng: 128.001786 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "신탄진휴게소",
    type: "단방향",
    center: { lat: 36.426439, lng: 127.418106 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "황간휴게소",
    type: "상하행",
    center: { lat: 36.249168, lng: 127.853753 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "죽암휴게소",
    type: "상하행",
    center: { lat: 36.49179255, lng: 127.42995555 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "천안삼거리휴게소",
    type: "단방향",
    center: { lat: 36.787809, lng: 127.173455 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "입장거봉포도휴게소",
    type: "단방향",
    center: { lat: 36.942997, lng: 127.192467 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "안성휴게소",
    type: "상하행",
    center: { lat: 37.045044, lng: 127.13864805 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "죽전휴게소",
    type: "단방향",
    center: { lat: 37.332371, lng: 127.104795 },
    accessRoutes: [{ highwayId: "1", direction: "서울" }],
  },
  {
    name: "서울만남의광장휴게소",
    type: "단방향",
    center: { lat: 37.460166, lng: 127.041908 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "기흥휴게소",
    type: "단방향",
    center: { lat: 37.235125, lng: 127.104595 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "망향휴게소",
    type: "단방향",
    center: { lat: 36.85565, lng: 127.180929 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "천안호두휴게소",
    type: "단방향",
    center: { lat: 36.730226, lng: 127.263879 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "옥산휴게소",
    type: "단방향",
    center: { lat: 36.657743, lng: 127.369817 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "옥천만남휴게소",
    type: "단방향",
    center: { lat: 36.308718, lng: 127.572308 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "평사휴게소",
    type: "단방향",
    center: { lat: 35.885522, lng: 128.867541 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "경주휴게소",
    type: "단방향",
    center: { lat: 35.724761, lng: 129.19295 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "통도사휴게소",
    type: "단방향",
    center: { lat: 35.488841, lng: 129.090775 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },
  {
    name: "금강휴게소",
    type: "양방향",
    center: { lat: 36.279148, lng: 127.672231 },
    accessRoutes: [{ highwayId: "1", direction: "양방향" }],
  },

  // 서해안 고속도로 휴게소
  {
    name: "함평천지휴게소",
    type: "상하행",
    center: { lat: 35.100217, lng: 126.480271 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "고창고인돌휴게소",
    type: "상하행",
    center: { lat: 35.465362, lng: 126.673674 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "부안고려청자휴게소",
    type: "상하행",
    center: { lat: 35.671613, lng: 126.733333 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "군산휴게소",
    type: "상하행",
    center: { lat: 35.999711, lng: 126.813334 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "서천휴게소",
    type: "상하행",
    center: { lat: 36.130717, lng: 126.6271595 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "대천휴게소",
    type: "상하행",
    center: { lat: 36.373726, lng: 126.557006 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "홍성휴게소",
    type: "상하행",
    center: { lat: 36.552507, lng: 126.580692 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "서산휴게소",
    type: "상하행",
    center: { lat: 36.7385925, lng: 126.5656655 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "화성휴게소",
    type: "상하행",
    center: { lat: 37.1435545, lng: 126.88018455 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "매송휴게소",
    type: "상하행",
    center: { lat: 37.264927, lng: 126.890169 },
    accessRoutes: [
      { highwayId: "15", direction: "서울" },
      { highwayId: "15", direction: "목포" },
    ],
  },
  {
    name: "목감휴게소",
    type: "단방향",
    notes: "확장공사중",
    center: { lat: 37.389413, lng: 126.869751 },
    accessRoutes: [{ highwayId: "15", direction: "서울" }],
  },
  {
    name: "행담도휴게소",
    type: "양방향",
    center: { lat: 36.944819, lng: 126.807525 },
    accessRoutes: [{ highwayId: "15", direction: "양방향" }],
  },
  {
    name: "고양휴게소",
    type: "상하행",
    center: { lat: 37.630883, lng: 126.851291 },
    accessRoutes: [
      { highwayId: "17-2", direction: "서울" },
      { highwayId: "17-2", direction: "문산" },
    ],
  },
  {
    name: "광명휴게소",
    type: "상하행",
    notes: "건설중",
    center: { lat: 37.430449, lng: 126.854334 },
    accessRoutes: [
      { highwayId: "17-2", direction: "서울" },
      { highwayId: "17-1", direction: "익산평택" },
    ],
  },
  {
    name: "평택호휴게소",
    type: "양방향",
    center: { lat: 36.923642, lng: 126.916432 },
    accessRoutes: [{ highwayId: "17-1", direction: "양방향" }],
  },
  {
    name: "예산예당호휴게소",
    type: "양방향",
    center: { lat: 36.628682, lng: 126.781031 },
    accessRoutes: [{ highwayId: "17-1", direction: "양방향" }],
  },

  // 호남고속도로 휴게소
  {
    name: "주암휴게소",
    type: "상하행",
    center: { lat: 35.076392, lng: 127.264931 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },
  {
    name: "곡성기차마을휴게소",
    type: "상하행",
    center: { lat: 35.259065, lng: 127.151739 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },
  {
    name: "백양사휴게소",
    type: "상하행",
    center: { lat: 35.393721, lng: 126.806369 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },
  {
    name: "정읍녹두장군휴게소",
    type: "상하행",
    center: { lat: 35.60072, lng: 126.863171 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },
  {
    name: "이서휴게소",
    type: "상하행",
    center: { lat: 35.802934, lng: 127.024732 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },
  {
    name: "여산휴게소",
    type: "상하행",
    center: { lat: 36.048541, lng: 127.103524 },
    accessRoutes: [
      { highwayId: "25-1", direction: "논산" },
      { highwayId: "25-1", direction: "순천" },
    ],
  },

  // 논산천안고속도로 휴게소
  {
    name: "이인휴게소",
    type: "단방향",
    center: { lat: 36.353047, lng: 127.06895 },
    accessRoutes: [{ highwayId: "25-2", direction: "천안" }],
  },
  {
    name: "정안알밤휴게소",
    type: "상하행",
    center: { lat: 36.57035, lng: 127.11365 },
    accessRoutes: [
      { highwayId: "25-2", direction: "천안" },
      { highwayId: "25-2", direction: "논산" },
    ],
  },
  {
    name: "탄천휴게소",
    type: "단방향",
    center: { lat: 36.31905, lng: 127.070694 },
    accessRoutes: [{ highwayId: "25-2", direction: "논산" }],
  },

  // 순천완주고속도로 휴게소
  {
    name: "황전휴게소",
    type: "상하행",
    center: { lat: 35.151105, lng: 127.454414 },
    accessRoutes: [
      { highwayId: "27", direction: "완주" },
      { highwayId: "27", direction: "순천" },
    ],
  },
  {
    name: "춘향휴게소",
    type: "상하행",
    center: { lat: 35.337224, lng: 127.35265 },
    accessRoutes: [
      { highwayId: "27", direction: "완주" },
      { highwayId: "27", direction: "순천" },
    ],
  },
  {
    name: "오수휴게소",
    type: "상하행",
    center: { lat: 35.540598, lng: 127.310445 },
    accessRoutes: [
      { highwayId: "27", direction: "완주" },
      { highwayId: "27", direction: "순천" },
    ],
  },

  // 제2중부 연결
  {
    name: "마장프리미엄휴게소",
    type: "상하행",
    center: { lat: 37.263849, lng: 127.407043 },
    accessRoutes: [
      { highwayId: "35-1", direction: "하남" },
      { highwayId: "37", direction: "마장" },
    ],
  },
  {
    name: "이천쌀휴게소",
    type: "상하행",
    center: { lat: 37.293979, lng: 127.378203 },
    accessRoutes: [
      { highwayId: "35-1", direction: "하남" },
      { highwayId: "37", direction: "하남" },
    ],
  },

  // 세종포천고속도로 휴게소
  {
    name: "고삼호수휴게소",
    type: "양방향",
    center: { lat: 37.076602, lng: 127.29511 },
    accessRoutes: [{ highwayId: "29", direction: "양방향" }],
  },
  {
    name: "처인휴게소",
    type: "양방향",
    center: { lat: 37.341068, lng: 127.220413 },
    accessRoutes: [{ highwayId: "29", direction: "양방향" }],
  },
  {
    name: "별내휴게소",
    type: "단방향",
    center: { lat: 37.690814, lng: 127.129848 },
    accessRoutes: [{ highwayId: "29", direction: "포천" }],
  },
  {
    name: "의정부휴게소",
    type: "단방향",
    center: { lat: 37.732815, lng: 127.115345 },
    accessRoutes: [{ highwayId: "29", direction: "세종" }],
  },

  // 중부고속도로 휴게소
  {
    name: "오창휴게소",
    type: "상하행",
    center: { lat: 36.757531, lng: 127.481843 },
    accessRoutes: [
      { highwayId: "35-1", direction: "하남" },
      { highwayId: "35-1", direction: "청주" },
    ],
  },
  {
    name: "음성휴게소",
    type: "상하행",
    center: { lat: 37.020851, lng: 127.482513 },
    accessRoutes: [
      { highwayId: "35-1", direction: "하남" },
      { highwayId: "35-1", direction: "청주" },
    ],
  },
  {
    name: "이천휴게소",
    type: "상하행",
    center: { lat: 37.264574, lng: 127.403687 },
    accessRoutes: [
      { highwayId: "35-1", direction: "하남" },
      { highwayId: "35-1", direction: "청주" },
    ],
  },
  {
    name: "하남드림휴게소",
    type: "양방향",
    center: { lat: 37.530281, lng: 127.206084 },
    accessRoutes: [{ highwayId: "35-1", direction: "양방향" }],
  },

  // 통영대전고속도로 휴게소
  {
    name: "고성공룡나라휴게소",
    type: "상하행",
    center: { lat: 35.054238, lng: 128.257561 },
    accessRoutes: [
      { highwayId: "35-2", direction: "대전" },
      { highwayId: "35-2", direction: "통영" },
    ],
  },
  {
    name: "산청휴게소",
    type: "상하행",
    center: { lat: 35.333513, lng: 127.938023 },
    accessRoutes: [
      { highwayId: "35-2", direction: "대전" },
      { highwayId: "35-2", direction: "통영" },
    ],
  },
  {
    name: "함양휴게소",
    type: "상하행",
    center: { lat: 35.5514665, lng: 127.75949155 },
    accessRoutes: [
      { highwayId: "35-2", direction: "대전" },
      { highwayId: "35-2", direction: "통영" },
    ],
  },
  {
    name: "덕유산휴게소",
    type: "상하행",
    center: { lat: 35.814954, lng: 127.644661 },
    accessRoutes: [
      { highwayId: "35-2", direction: "대전" },
      { highwayId: "35-2", direction: "통영" },
    ],
  },
  {
    name: "인삼랜드휴게소",
    type: "상하행",
    center: { lat: 36.1537815, lng: 127.4968175 },
    accessRoutes: [
      { highwayId: "35-2", direction: "대전" },
      { highwayId: "35-2", direction: "통영" },
    ],
  },

  // 중부내륙고속도로 휴게소
  {
    name: "남한강휴게소",
    type: "양방향",
    center: { lat: 37.482832, lng: 127.466508 },
    accessRoutes: [{ highwayId: "45", direction: "양방향" }],
  },
  {
    name: "서여주휴게소",
    type: "상하행",
    center: { lat: 37.27901, lng: 127.579292 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "충주휴게소",
    type: "상하행",
    center: { lat: 37.022702, lng: 127.838184 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "괴산휴게소",
    type: "상하행",
    center: { lat: 36.831675, lng: 127.958993 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "문경휴게소",
    type: "상하행",
    center: { lat: 36.620808, lng: 128.151186 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "선산휴게소",
    type: "상하행",
    center: { lat: 36.276082, lng: 128.250021 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "남성주참외휴게소",
    type: "상하행",
    notes: "구 남성주휴게소",
    center: { lat: 35.863718, lng: 128.31836 },
    accessRoutes: [
      { highwayId: "45", direction: "양평" },
      { highwayId: "45", direction: "창원" },
    ],
  },
  {
    name: "대합휴게소",
    type: "양방향",
    notes: "건설중",
    center: { lat: 35.608792, lng: 128.457752 },
    accessRoutes: [{ highwayId: "45", direction: "양방향" }],
  },
  {
    name: "영산휴게소",
    type: "단방향",
    center: { lat: 35.429794, lng: 128.495915 },
    accessRoutes: [{ highwayId: "45", direction: "창원" }],
  },
  {
    name: "칠서휴게소",
    type: "단방향",
    center: { lat: 35.37088, lng: 128.496807 },
    accessRoutes: [{ highwayId: "45", direction: "양평" }],
  },

  // 중앙고속도로 휴게소
  {
    name: "춘천휴게소",
    type: "양방향",
    center: { lat: 37.81268, lng: 127.766078 },
    accessRoutes: [{ highwayId: "55", direction: "양방향" }],
  },
  {
    name: "홍천강휴게소",
    type: "단방향",
    center: { lat: 37.712386, lng: 127.827719 },
    accessRoutes: [{ highwayId: "55", direction: "춘천" }],
  },
  {
    name: "원주휴게소",
    type: "상하행",
    center: { lat: 37.434868, lng: 127.9304155 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "치악휴게소",
    type: "상하행",
    center: { lat: 37.25517, lng: 128.048692 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "단양팔경휴게소",
    type: "상하행",
    center: { lat: 36.969181, lng: 128.304879 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "안동휴게소",
    type: "상하행",
    center: { lat: 36.553299, lng: 128.643533 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "군위휴게소",
    type: "상하행",
    center: { lat: 36.266279, lng: 128.575813 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "동명휴게소",
    type: "상하행",
    center: { lat: 36.006708, lng: 128.547947 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },
  {
    name: "청도새마을휴게소",
    type: "상하행",
    notes: "구 청도휴게소",
    center: { lat: 35.594993, lng: 128.768217 },
    accessRoutes: [
      { highwayId: "55", direction: "춘천" },
      { highwayId: "55", direction: "부산" },
    ],
  },

  // 동해고속도로 휴게소
  {
    name: "구정휴게소",
    type: "상하행",
    center: { lat: 37.722613, lng: 128.852694 },
    accessRoutes: [
      { highwayId: "65", direction: "삼척" },
      { highwayId: "65", direction: "속초" },
    ],
  },
  {
    name: "옥계휴게소",
    type: "단방향",
    center: { lat: 37.616198, lng: 129.060129 },
    accessRoutes: [{ highwayId: "65", direction: "속초" }],
  },
  {
    name: "동해휴게소",
    type: "단방향",
    center: { lat: 37.601548, lng: 129.074159 },
    accessRoutes: [{ highwayId: "65", direction: "삼척" }],
  },
  {
    name: "영덕휴게소",
    type: "단방향",
    notes: "건설중",
    center: { lat: 36.281769, lng: 129.363622 },
    accessRoutes: [{ highwayId: "65", direction: "포항" }],
  },
  {
    name: "포항휴게소",
    type: "단방향",
    notes: "건설중",
    center: { lat: 36.263, lng: 129.371964 },
    accessRoutes: [{ highwayId: "65", direction: "영덕" }],
  },
  {
    name: "외동휴게소",
    type: "상하행",
    center: { lat: 35.6728, lng: 129.28691 },
    accessRoutes: [
      { highwayId: "65", direction: "부산" },
      { highwayId: "65", direction: "포항" },
    ],
  },
  {
    name: "장안휴게소",
    type: "상하행",
    center: { lat: 35.380406, lng: 129.247357 },
    accessRoutes: [
      { highwayId: "65", direction: "부산" },
      { highwayId: "65", direction: "포항" },
    ],
  },

  // 남해고속도로 휴게소
  {
    name: "장흥정남진휴게소",
    type: "양방향",
    center: { lat: 34.720894, lng: 126.931319 },
    accessRoutes: [{ highwayId: "10", direction: "양방향" }],
  },
  {
    name: "보성녹차휴게소",
    type: "상하행",
    center: { lat: 34.807313, lng: 127.181003 },
    accessRoutes: [
      { highwayId: "10", direction: "영암" },
      { highwayId: "10", direction: "순천" },
    ],
  },
  {
    name: "섬진강휴게소",
    type: "상하행",
    center: { lat: 34.985185, lng: 127.770013 },
    accessRoutes: [
      { highwayId: "10", direction: "부산" },
      { highwayId: "10", direction: "순천" },
    ],
  },
  {
    name: "사천휴게소",
    type: "상하행",
    center: { lat: 35.07407, lng: 128.011696 },
    accessRoutes: [
      { highwayId: "10", direction: "부산" },
      { highwayId: "10", direction: "순천" },
    ],
  },
  {
    name: "진주휴게소",
    type: "단방향",
    center: { lat: 35.159772, lng: 128.12201 },
    accessRoutes: [{ highwayId: "10", direction: "부산" }],
  },
  {
    name: "문산휴게소",
    type: "단방향",
    center: { lat: 35.171374, lng: 128.151591 },
    accessRoutes: [{ highwayId: "10", direction: "순천" }],
  },
  {
    name: "함안휴게소",
    type: "양방향",
    center: { lat: 35.294385, lng: 128.345862 },
    accessRoutes: [{ highwayId: "10", direction: "양방향" }],
  },
  {
    name: "진영휴게소",
    type: "상하행",
    center: { lat: 35.278899, lng: 128.716347 },
    accessRoutes: [
      { highwayId: "10", direction: "부산" },
      { highwayId: "10", direction: "순천" },
      { highwayId: "600", direction: "창원" },
    ],
  },

  // 무안광주/광주대구 고속도로 휴게소
  {
    name: "함평나비휴게소",
    type: "상하행",
    center: { lat: 35.03774, lng: 126.510244 },
    accessRoutes: [
      { highwayId: "12-2", direction: "무안" },
      { highwayId: "12-2", direction: "광주" },
    ],
  },
  {
    name: "강천산휴게소",
    type: "상하행",
    center: { lat: 35.36506, lng: 127.105104 },
    accessRoutes: [
      { highwayId: "12-1", direction: "광주" },
      { highwayId: "12-1", direction: "대구" },
    ],
  },
  {
    name: "지리산휴게소",
    type: "상하행",
    center: { lat: 35.482647, lng: 127.566955 },
    accessRoutes: [
      { highwayId: "12-1", direction: "광주" },
      { highwayId: "12-1", direction: "대구" },
    ],
  },
  {
    name: "함양산삼골동서만남의광장휴게소",
    type: "상하행",
    center: { lat: 35.551387, lng: 127.805246 },
    accessRoutes: [
      { highwayId: "12-1", direction: "광주" },
      { highwayId: "12-1", direction: "대구" },
    ],
  },
  {
    name: "거창韓휴게소",
    type: "상하행",
    center: { lat: 35.707666, lng: 128.057454 },
    accessRoutes: [
      { highwayId: "12-1", direction: "광주" },
      { highwayId: "12-1", direction: "대구" },
    ],
  },
  {
    name: "논공휴게소",
    type: "상하행",
    center: { lat: 35.766205, lng: 128.403201 },
    accessRoutes: [
      { highwayId: "12-1", direction: "광주" },
      { highwayId: "12-1", direction: "대구" },
    ],
  },

  // 함양울산고속도로 휴게소
  {
    name: "밀양영남루휴게소",
    type: "상하행",
    center: { lat: 35.491109, lng: 128.664538 },
    accessRoutes: [
      { highwayId: "14", direction: "함양" },
      { highwayId: "14", direction: "울산" },
    ],
  },
  {
    name: "울주휴게소",
    type: "상하행",
    center: { lat: 35.511991, lng: 129.129477 },
    accessRoutes: [
      { highwayId: "14", direction: "함양" },
      { highwayId: "14", direction: "울산" },
    ],
  },

  // 새만금포항고속도로 휴게소
  {
    name: "진안마이산휴게소",
    type: "상하행",
    notes: "구 진안휴게소",
    center: { lat: 35.776359, lng: 127.425821 },
    accessRoutes: [
      { highwayId: "20", direction: "완주" },
      { highwayId: "20", direction: "포항" },
    ],
  },
  {
    name: "와촌휴게소",
    type: "단방향",
    center: { lat: 35.951819, lng: 128.775563 },
    accessRoutes: [{ highwayId: "20", direction: "포항" }],
  },
  {
    name: "청통휴게소",
    type: "단방향",
    center: { lat: 35.993928, lng: 128.859145 },
    accessRoutes: [{ highwayId: "20", direction: "완주" }],
  },
  {
    name: "영천휴게소",
    type: "상하행",
    center: { lat: 36.052161, lng: 129.043513 },
    accessRoutes: [
      { highwayId: "20", direction: "완주" },
      { highwayId: "20", direction: "포항" },
    ],
  },

  // 서산영덕고속도로 휴게소
  {
    name: "예산휴게소",
    type: "상하행",
    center: { lat: 36.62144455, lng: 126.843 },
    accessRoutes: [
      { highwayId: "30", direction: "당진" },
      { highwayId: "30", direction: "영덕" },
    ],
  },
  {
    name: "공주휴게소",
    type: "상하행",
    center: { lat: 36.4978125, lng: 127.16579555 },
    accessRoutes: [
      { highwayId: "30", direction: "당진" },
      { highwayId: "30", direction: "영덕" },
    ],
  },
  {
    name: "죽암휴게소",
    type: "상하행",
    center: { lat: 36.49179255, lng: 127.42995555 },
    accessRoutes: [
      { highwayId: "1", direction: "서울" },
      { highwayId: "1", direction: "부산" },
    ],
  },
  {
    name: "문의청남대휴게소",
    type: "상하행",
    center: { lat: 36.543313, lng: 127.484205 },
    accessRoutes: [
      { highwayId: "30", direction: "당진" },
      { highwayId: "30", direction: "영덕" },
    ],
  },
  {
    name: "속리산휴게소",
    type: "단방향",
    center: { lat: 36.447804, lng: 127.869061 },
    accessRoutes: [{ highwayId: "30", direction: "당진" }],
  },
  {
    name: "화서휴게소",
    type: "단방향",
    center: { lat: 36.444053, lng: 127.922637 },
    accessRoutes: [{ highwayId: "30", direction: "영덕" }],
  },
  {
    name: "의성휴게소",
    type: "상하행",
    center: { lat: 36.410195, lng: 128.445836 },
    accessRoutes: [
      { highwayId: "30", direction: "당진" },
      { highwayId: "30", direction: "영덕" },
    ],
  },
  {
    name: "청송휴게소",
    type: "상하행",
    center: { lat: 36.456223, lng: 129.012609 },
    accessRoutes: [
      { highwayId: "30", direction: "당진" },
      { highwayId: "30", direction: "영덕" },
    ],
  },

  // 당진청주고속도로 휴게소
  {
    name: "천안호두휴게소",
    type: "단방향",
    notes: "구 천안휴게소",
    center: { lat: 36.730856, lng: 127.263856 },
    accessRoutes: [{ highwayId: "1", direction: "부산" }],
  },

  // 평택제천고속도로 휴게소
  {
    name: "평택휴게소",
    type: "양방향",
    center: { lat: 37.04485, lng: 126.944614 },
    accessRoutes: [{ highwayId: "40", direction: "양방향" }],
  },
  {
    name: "안성맞춤휴게소",
    type: "상하행",
    center: { lat: 36.968986, lng: 127.27444 },
    accessRoutes: [
      { highwayId: "40", direction: "평택" },
      { highwayId: "40", direction: "제천" },
    ],
  },
  {
    name: "금왕휴게소",
    type: "상하행",
    center: { lat: 36.970053, lng: 127.590172 },
    accessRoutes: [
      { highwayId: "40", direction: "평택" },
      { highwayId: "40", direction: "제천" },
    ],
  },
  {
    name: "천등산휴게소",
    type: "상하행",
    center: { lat: 37.069235, lng: 127.964275 },
    accessRoutes: [
      { highwayId: "40", direction: "평택" },
      { highwayId: "40", direction: "제천" },
    ],
  },

  // 영동고속도로 휴게소
  {
    name: "안산휴게소",
    type: "양방향",
    center: { lat: 37.351075, lng: 126.818799 },
    accessRoutes: [{ highwayId: "50", direction: "양방향" }],
  },
  {
    name: "용인휴게소",
    type: "상하행",
    center: { lat: 37.2469505, lng: 127.24016105 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },
  {
    name: "덕평자연휴게소",
    type: "양방향",
    center: { lat: 37.241456, lng: 127.390189 },
    accessRoutes: [{ highwayId: "50", direction: "양방향" }],
  },
  {
    name: "여주휴게소",
    type: "상하행",
    notes: "구 가남휴게소",
    center: { lat: 37.2388805, lng: 127.5694205 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },
  {
    name: "문막휴게소",
    type: "상하행",
    center: { lat: 37.316661, lng: 127.837741 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },
  {
    name: "횡성휴게소",
    type: "상하행",
    notes: "구 소사휴게소",
    center: { lat: 37.463869, lng: 128.134709 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },
  {
    name: "평창휴게소",
    type: "상하행",
    notes: "구 장평휴게소",
    center: { lat: 37.608223, lng: 128.458022 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },
  {
    name: "강릉대관령휴게소",
    type: "상하행",
    notes: "구 강릉휴게소",
    center: { lat: 37.759241, lng: 128.806004 },
    accessRoutes: [
      { highwayId: "50", direction: "인천" },
      { highwayId: "50", direction: "강릉" },
    ],
  },

  // 광주원주고속도로 휴게소
  {
    name: "경기광주휴게소",
    type: "상하행",
    center: { lat: 37.3795, lng: 127.4305 },
    accessRoutes: [
      { highwayId: "52", direction: "광주" },
      { highwayId: "52", direction: "원주" },
    ],
  },
  {
    name: "양평휴게소",
    type: "상하행",
    center: { lat: 37.397244, lng: 127.725074 },
    accessRoutes: [
      { highwayId: "52", direction: "광주" },
      { highwayId: "52", direction: "원주" },
    ],
  },

  // 서울양양고속도로 휴게소
  {
    name: "가평휴게소",
    type: "상하행",
    center: { lat: 37.701775, lng: 127.544966 },
    accessRoutes: [
      { highwayId: "60", direction: "서울" },
      { highwayId: "60", direction: "양양" },
    ],
  },
  {
    name: "홍천휴게소",
    type: "상하행",
    center: { lat: 37.758071, lng: 128.004871 },
    accessRoutes: [
      { highwayId: "60", direction: "서울" },
      { highwayId: "60", direction: "양양" },
    ],
  },
  {
    name: "내린천휴게소",
    type: "양방향",
    center: { lat: 37.916535, lng: 128.286377 },
    accessRoutes: [{ highwayId: "60", direction: "양방향" }],
  },

  // 수도권제1순환고속도로 휴게소
  {
    name: "구리휴게소",
    type: "단방향",
    center: { lat: 37.628023, lng: 127.139237 },
    accessRoutes: [{ highwayId: "100", direction: "외선" }],
  },
  {
    name: "시흥하늘휴게소",
    type: "양방향",
    center: { lat: 37.383794, lng: 126.855452 },
    accessRoutes: [{ highwayId: "100", direction: "양방향" }],
  },

  // 수도권제2순환고속도로 휴게소
  {
    name: "오산휴게소",
    type: "상하행",
    center: { lat: 37.177387, lng: 127.03732 },
    accessRoutes: [
      { highwayId: "400", direction: "과천" },
      { highwayId: "400", direction: "동탄" },
    ],
  },
  {
    name: "송산포도휴게소",
    type: "양방향",
    center: { lat: 37.237021, lng: 126.756818 },
    accessRoutes: [{ highwayId: "400", direction: "양방향" }],
  },
  {
    name: "수동휴게소",
    type: "상하행",
    center: { lat: 37.730956, lng: 127.29226 },
    accessRoutes: [
      { highwayId: "400", direction: "포천" },
      { highwayId: "400", direction: "양평" },
    ],
  },
  {
    name: "남한강휴게소",
    type: "양방향",
    center: { lat: 37.482797, lng: 127.466759 },
    accessRoutes: [{ highwayId: "400", direction: "양방향" }],
  },

  // 부산외곽순환고속도로 휴게소
  {
    name: "김해금관가야휴게소",
    type: "양방향",
    center: { lat: 35.269933, lng: 129.003134 },
    accessRoutes: [{ highwayId: "600", direction: "양방향" }],
  },

  // 인천공항고속도로 휴게소
  {
    name: "영종대교휴게소",
    type: "단방향",
    notes: "영종대교 기념관",
    center: { lat: 37.553686, lng: 126.607091 },
    accessRoutes: [{ highwayId: "130", direction: "인천국제공항" }],
  },

  // 남해제2지선고속도로 휴게소
  {
    name: "장유휴게소",
    type: "단방향",
    center: { lat: 35.212074, lng: 128.79358 },
    accessRoutes: [{ highwayId: "104", direction: "부산" }],
  },
  {
    name: "서부산휴게소",
    type: "단방향",
    center: { lat: 35.1572, lng: 128.9488 },
    accessRoutes: [{ highwayId: "104", direction: "냉정" }],
  },

  // 서천공주고속도로 휴게소
  {
    name: "부여백제휴게소",
    type: "상하행",
    center: { lat: 36.258368, lng: 126.798413 },
    accessRoutes: [
      { highwayId: "151", direction: "서천" },
      { highwayId: "151", direction: "공주" },
    ],
  },

  // 호남지선고속도로 휴게소
  {
    name: "벌곡휴게소",
    type: "양방향",
    center: { lat: 36.214213, lng: 127.272005 },
    accessRoutes: [{ highwayId: "251", direction: "양방향" }],
  },

  // 상주영천고속도로 휴게소
  {
    name: "낙동강의성휴게소",
    type: "단방향",
    center: { lat: 36.345771, lng: 128.296521 },
    accessRoutes: [{ highwayId: "301", direction: "영천" }],
  },
  {
    name: "군위영천휴게소",
    type: "단방향",
    center: { lat: 36.07098, lng: 128.708958 },
    accessRoutes: [{ highwayId: "301", direction: "영천" }],
  },
  {
    name: "삼국유사군위휴게소",
    type: "단방향",
    center: { lat: 36.079197, lng: 128.697039 },
    accessRoutes: [{ highwayId: "301", direction: "상주" }],
  },
  {
    name: "낙동강구미휴게소",
    type: "단방향",
    center: { lat: 36.343482, lng: 128.300477 },
    accessRoutes: [{ highwayId: "301", direction: "상주" }],
  },

  // 중부내륙지선고속도로 휴게소
  {
    name: "현풍휴게소",
    type: "양방향",
    center: { lat: 35.701812, lng: 128.43673 },
    accessRoutes: [{ highwayId: "451", direction: "양방향" }],
  },
]
