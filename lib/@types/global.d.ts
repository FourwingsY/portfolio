declare namespace Post {
  interface Parsed {
    source: string
    metadata: Metadata
  }
  interface Metadata {
    id: string
    title: string
    written: string
    keywords: string[]
  }
}
