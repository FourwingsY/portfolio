"use client"

import { MDXProvider } from "@mdx-js/react"
import "github-markdown-css/github-markdown.css"

import { ScreenMonitor } from "@/posts/adaptive-design/components"
import { ConfettiSimulator } from "@/posts/confetti/components"
import { ModalTester } from "@/posts/modal/components"

import Tooltip from "@/components/Tooltip"

import PostFooter from "./PostFooter"

const components = { ScreenMonitor, ConfettiSimulator, Tooltip, ModalTester }

export default function PostWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
      <PostFooter />
    </MDXProvider>
  )
}
