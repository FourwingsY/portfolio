import withMDX from "@next/mdx"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ["ts", "tsx", "mdx"],
}

/**
 * @type {import('@next/mdx').NextMDXOptions}
 */
const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm],
    rehypePlugins: [highlight],
  },
}

export default withMDX(mdxOptions)(nextConfig)
