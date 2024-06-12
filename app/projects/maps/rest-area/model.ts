export interface RestAreaGroup {
  name: string
  highway: string
  type: "일반휴게소" | "화물차휴게소" | "간이휴게소"
  groupDirection: "상하행" | "양방향" | "단방향"
  center: { lat: number; lng: number }
  children: RestArea[]
}

export interface RestArea {
  direction: "상행" | "하행" | "양방향"
  center: { lat: number; lng: number }
}
