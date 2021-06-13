declare module "markdown-yaml-metadata-parser" {
  interface ParsedMarkdown<Metadata extends { [key: string]: string } = Record<string, string>> {
    content: string
    metadata: Metadata
  }
  export default function parser<Metadata>(markdown: string): ParsedMarkdown<Metadata>
}
