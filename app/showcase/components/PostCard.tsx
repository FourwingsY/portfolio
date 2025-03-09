"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import * as S from "../page.style"

export default function PostCard({ post }: { post: Post.Metadata }) {
  const Thumbnail = dynamic(() => import(`../../../posts/${post.id}/Thumbnail`), { ssr: false })

  return (
    <S.Card key={post.id}>
      <Link href={`/showcase/${post.id}`}>
        <S.FixedRate169>
          <S.CardThumbnail>
            <Thumbnail />
          </S.CardThumbnail>
        </S.FixedRate169>
        <S.CardBody>
          <S.CardTitle>{post.title}</S.CardTitle>
          <S.PostWritten>{post.written}</S.PostWritten>
        </S.CardBody>
      </Link>
    </S.Card>
  )
}
