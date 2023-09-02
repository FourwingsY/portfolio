declare namespace Post {
  interface Parsed {
    content: string
    data: Metadata
  }
  interface Metadata {
    id: string
    title: string
    written: string
    keywords: string[]
  }
}
