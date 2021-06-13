declare namespace Post {
  interface Parsed {
    content: string
    metadata: Metadata
  }
  interface Metadata {
    id: string
    title: string
    author: string
    written: string
  }
}
