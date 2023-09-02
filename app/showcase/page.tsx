import Image from "next/image"
import Link from "next/link"

import ScreenMonitor from "@examples/adaptive/ScreenMonitor"
import External from "@icons/External"
import Medium from "@icons/Medium"

import { MEDIUM_POSTS } from "@/lib/constants/medium"

import * as S from "./page.style"

const POSTS = [
  {
    id: "project-structure",
    title: "리액트 프로젝트 구조",
    written: "2023.04.29",
    thumbnail: <Image src="/images/posts/directories.jpg" alt="thumbnail" fill />,
  },

  {
    id: "mdx",
    title: "MDX",
    written: "2022.12.18",
    // thumbnail: <AnimatedMDX />,
  },
  {
    id: "swr-query",
    title: "SWR vs React Query",
    written: "2022.11.05",
    thumbnail: <Image src="/images/posts/swr-query.jpg" alt="thumbnail" fill />,
  },
  {
    id: "suspense",
    title: "Suspense with Next & SWR",
    written: "2022.02.25",
    // thumbnail: <SuspenseThumbnail />,
  },
  {
    id: "confetti",
    title: "Coding Confetti on Canvas",
    written: "2021.06.08",
    // thumbnail: <ConfettiThumbnail />,
  },
  {
    id: "modal",
    title: "Typed Modal system",
    written: "2021.05.31",
    // thumbnail: <ModalThumbnail />,
  },
  {
    id: "adaptive-design",
    title: "Adaptive Design",
    written: "2021.05.29",
    thumbnail: <ScreenMonitor />,
  },
]

export default function Showcase() {
  return (
    <S.Showcase>
      {POSTS.map((post) => (
        <S.Card key={post.id}>
          <Link href={`/showcase/${post.id}`}>
            <S.FixedRate169>
              <S.CardThumbnail>{post.thumbnail}</S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>{post.title}</S.CardTitle>
              <S.PostWritten>{post.written}</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
      ))}
      <S.Card>
        <S.FixedRate169>
          <S.PostList>
            {MEDIUM_POSTS.map((post) => (
              <S.Post key={post.id}>
                <S.ExternalLink href={`https://fourwingsy.medium.com/${post.id}`}>
                  <External width={16} height={16} color="#333" />
                  <S.PostTitle>{post.title}</S.PostTitle>
                </S.ExternalLink>
                <S.PostWritten>{post.written}</S.PostWritten>
              </S.Post>
            ))}
          </S.PostList>
        </S.FixedRate169>
        <S.CardBody>
          <S.CardTitle>
            Previously Published on
            <Medium height={24} />
          </S.CardTitle>
        </S.CardBody>
      </S.Card>
    </S.Showcase>
  )
}
