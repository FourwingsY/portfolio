export type RestAreaGroupRecord = Record<string, RestAreaVisitedRecord>

export interface RestAreaVisitedRecord {
  visitedAt: string
  photos: string[]
  memo: string
}
