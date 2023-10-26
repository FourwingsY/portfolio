import { MEDIUM_POSTS } from "@/lib/constants/medium"
import fetch from "@/lib/thirdParties/fetch"

import External from "@/components/icons/External"
import Medium from "@/components/icons/Medium"

import PostCard from "./components/PostCard"
import * as S from "./page.style"

async function getPosts(): Promise<Post.Metadata[]> {
  return fetch("/showcase/posts").then((res) => res.json())
}

export default async function Showcase() {
  const posts = await getPosts()

  return (
    <S.Showcase>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
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
