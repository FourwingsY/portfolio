export interface RestAreaGroup {
  id: number
  name: string
  highway: string
  type: "일반휴게소" | "화물차휴게소" | "간이휴게소"
  groupDirection: "상하행" | "양방향" | "단방향"
  center: { lat: number; lng: number }
  children: RestArea[]
}

export interface RestArea {
  id: number
  direction: "상행" | "하행" | "양방향"
  center: { lat: number; lng: number }
}

export type VisitedRecords = Record<number, RestAreaGroupRecord>
export interface RestAreaGroupRecord {
  name: string
  children: RestAreaRecord[]
}

export interface RestAreaRecord {
  id: number
  direction: "상행" | "하행" | "양방향"
  visited: false | RestAreaVisitedRecord
}

export interface RestAreaVisitedRecord {
  visitedAt: string
  photos: string[]
  memo: string
}
