import Layout from "@pages/Layout"

import Link from "@components/Link"
import ScreenMonitor from "@examples/adaptive/ScreenMonitor"
import External from "@icons/External"
import Medium from "@icons/Medium"

import * as S from "./Showcase.style"
import ConfettiThumbnail from "./thumbnails/ConfettiThumbnail"
import ModalThumbnail from "./thumbnails/ModalThumbnail"

const mediumPosts = [
  { id: "988ce0d939e7", title: "Next.JS hydration 스타일 이슈 파악하기", written: "2021.01.24" },
  { id: "dde09ae6500f", title: "WebP 이미지 사용하기", written: "2020.06.20" },
  { id: "b8f0e2bfe05d", title: "React와 Typescript의 미묘한 불일치", written: "2018.04.02" },
  { id: "9c7b7bb82b30", title: "자바스크립트에 타입 입히기", written: "2018.02.10" },
  { id: "3216f404134", title: "GraphQL을 오해하다", written: "2017.06.04" },
  { id: "727310aa6505", title: "PostCSS 소개", written: "2017.04.08" },
  { id: "afd1923797d8", title: "팝업과 메시지 with React", written: "2017.03.26" },
  { id: "bb183c0a426e", title: "React 프로젝트의 디렉토리 구조", written: "2017.02.23" },
  { id: "a58f2f4b860a", title: "Conditional Rendering for React", written: "2016.12.24" },
]

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <S.Card>
          <Link href="/showcase/confetti">
            <S.FixedRate169>
              <S.CardThumbnail>
                <ConfettiThumbnail />
              </S.CardThumbnail>
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
              <S.CardThumbnail>
                <ModalThumbnail />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Typed Modal system</S.CardTitle>
              <S.PostWritten>2021.05.31</S.PostWritten>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/adaptive">
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
              {mediumPosts.map((post) => (
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
    </Layout>
  )
}

export default Showcase
