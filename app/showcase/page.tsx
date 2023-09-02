import Image from "next/image"
import Link from "next/link"

import ScreenMonitor from "@examples/adaptive/ScreenMonitor"
import External from "@icons/External"
import Medium from "@icons/Medium"

import { MEDIUM_POSTS } from "@/lib/constants/medium"

import * as S from "./page.style"

// import AnimatedMDX from "./thumbnails/AnimatedMDX"
// import ConfettiThumbnail from "./thumbnails/ConfettiThumbnail"
// import ModalThumbnail from "./thumbnails/ModalThumbnail"
// import SuspenseThumbnail from "./thumbnails/SuspenseThumbnail"

export default function Showcase() {
  return (
    <>
      <S.Showcase>
        <S.Card>
          <Link href="/showcase/project-structure">
            <S.FixedRate169>
              <S.CardThumbnail>
                <Image src="/images/posts/directories.jpg" alt="thumbnail" fill />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>리액트 프로젝트 구조</S.CardTitle>
              <S.PostWritten>2023.04.29</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/mdx">
            <S.FixedRate169>
              <S.CardThumbnail>{/* <AnimatedMDX /> */}</S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>MDX</S.CardTitle>
              <S.PostWritten>2022.12.18</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/swr-query">
            <S.FixedRate169>
              <S.CardThumbnail>
                <Image src="/images/posts/swr-query.jpg" alt="thumbnail" fill />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>SWR vs React Query</S.CardTitle>
              <S.PostWritten>2022.11.05</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/suspense">
            <S.FixedRate169>
              <S.CardThumbnail>{/* <SuspenseThumbnail /> */}</S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Suspense with Next &amp; SWR</S.CardTitle>
              <S.PostWritten>2022.02.25</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/confetti">
            <S.FixedRate169>
              <S.CardThumbnail>{/* <ConfettiThumbnail /> */}</S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Coding Confetti on Canvas</S.CardTitle>
              <S.PostWritten>2021.06.08</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/modal">
            <S.FixedRate169>
              <S.CardThumbnail>{/* <ModalThumbnail /> */}</S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Typed Modal system</S.CardTitle>
              <S.PostWritten>2021.05.31</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/adaptive-design">
            <S.FixedRate169>
              <S.CardThumbnail>
                <ScreenMonitor />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Adaptive Design</S.CardTitle>
              <S.PostWritten>2021.05.29</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
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
    </>
  )
}
