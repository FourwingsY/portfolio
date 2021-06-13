declare module "markdown-yaml-metadata-parser" {
  interface ParsedMarkdown {
    content: string
    metadata: { [key: string]: string }
  }
  export default function parser(markdown: string): ParsedMarkdown
}
